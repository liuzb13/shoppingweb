import Vue from 'vue'
import Vuex from 'vuex'
import productdata from '../assets/product.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList:[],
    brand:['Apple','Beats','Sonos','B&O','Bose'],
    color:['白色','金色','红色','蓝色'],
    order:['默认','销量','价格'],
    productOrder:{},
    cartList:[]
  },
  mutations: {
    getList(state){
      state.productList = [...productdata];
    },
    getOrder(state,order){
      state.productOrder = order;
    },
    addCart(state,info){
      let productIndex;
      productIndex = state.cartList.findIndex(function(x){
        return x.id == info.id;
      });
      if(productIndex == -1){
        let item = state.productList.find(function(x){
          return x.id==info.id
        })
        state.cartList.push({id:item.id,name:item.name,price:item.cost,num:1,cost:item.cost});
      }
      else{
        state.cartList[productIndex].num++;
        state.cartList[productIndex].cost = state.cartList[productIndex].price * state.cartList[productIndex].num;
      };
      let list = JSON.stringify(state.cartList);
     localStorage.setItem('cmt',list);
    },
    delCart(state,info){
      let productIndex = state.cartList.findIndex(function(x){
        return x.id == info.id;
      });
      state.cartList[productIndex].num=state.cartList[productIndex].num-info.num;
      state.cartList[productIndex].cost = state.cartList[productIndex].num*state.cartList[productIndex].price;
      if(state.cartList[productIndex].num==0){
        state.cartList.splice(productIndex,1);
      };
      let list = JSON.stringify(state.cartList);
      localStorage.setItem('cmt',list);
    },
    clearCart(state){
      state.cartList = [];
      let list = JSON.stringify(state.cartList);
      localStorage.setItem('cmt',list);
    }
  },
  getters:{
    chosenProduct(state){
      let list = [...state.productList];
      if(state.productOrder.brand){
        list = state.productList.filter(function(x){
          if(x.brand === state.productOrder.brand)
            return true;
        })
      }
      if(state.productOrder.color){
        list = list.filter(function(x){
          if(x.color === state.productOrder.color)
          return true;
        })
      }
      if(state.productOrder.order === '销量'){
        list = list.sort(function(a,b){
          return b.sales-a.sales;
        })
      }
      if(state.productOrder.order === '价格'){
        list = list.sort(function(a,b){
          return a.cost-b.cost;
        })
      }
      return list;
    },
    productNum(state){
      let num = 0;
      state.cartList.forEach(function(x){
        num = num + x.num;
      });
      return num;
    },
    productCost(state){
      let cost = 0;
      state.cartList.forEach(function(x){
        cost = cost + x.cost;
      })
      return cost;
    }
  }
})
