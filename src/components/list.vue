<template>
     <div class="header-continer">
         <div class="header-list">
             <ul>
                 <li>
                     <span class="header-list-title">品牌：</span>
                     <span class="header-list-item" :class="{on:productOrder.brand===item}" v-for="item in $store.state.brand" :key="item" @click="handleBrand(item)">{{item}}</span>
                </li>
                <li>
                     <span class="header-list-title">颜色：</span>
                     <span class="header-list-item" :class="{on:productOrder.color===item}" v-for="item in $store.state.color" :key="item" @click="handleColor(item)">{{item}}</span>
                </li>
                <li>
                     <span class="header-list-title">排序：</span>
                     <span class="header-list-item" :class="{on:productOrder.order===item}" v-for="item in $store.state.order" :key="item" @click="handleOrder(item)">{{item}}</span>
                </li>
             </ul>
         </div>
         <div class="content">
             <product v-for="item in $store.getters.chosenProduct" 
             :key="item.id" :info="item" class="product"></product>
         </div>
     </div>
</template>

<script>
import product from '../views/product'
export default {
    components:{product},
    data(){
            return {
                        productOrder:{
                        brand:'',
                        color:'',
                        order:'默认'
                   }
                }
    },
    computed:{
    },
    methods:{
        handleBrand(item){
            if(this.productOrder.brand === item){
                    this.productOrder.brand = '';
                     this.$store.commit('getOrder',this.productOrder);
                    }
            else{
                this.productOrder.brand = item;
                this.$store.commit('getOrder',this.productOrder);
            } 
        },
        handleColor(item){
            if(this.productOrder.color === item){
                this.productOrder.color = '';
                this.$store.commit('getOrder',this.productOrder);
            }
            else{
                this.productOrder.color = item;
                this.$store.commit('getOrder',this.productOrder);
            }
        },
        handleOrder(item){
            if(this.productOrder.order === item){
                this.productOrder.order = '默认';
                this.$store.commit('getOrder',this.productOrder);
            }
            else{
                this.productOrder.order = item;
                this.$store.commit('getOrder',this.productOrder);
            }
        }
    },
    mounted(){
           this.$store.commit('getList');
    }
}
</script>

<style scoped>
    .header-list{
        width: 78%;
        margin: 10px auto;
        border: 1px solid cyan;
        border-radius: 5px;
        background: white;
    }
    ul li{
       list-style: none;
       margin: 20px;
       font-size:14px;
    }
    .header-list-item{
        border: 0.5px solid #ee99ee;
        border-radius: 3px;
        padding-left:3px;
        padding-right:3px;
        margin-left: 10px;
        cursor: pointer;
    }
    .content{
        width: 80%;
        margin: 10px auto;
    }
    .product{
        width: 25%;
        height: auto;
    }
    .header-list-item.on{
        background: #f2352e;
        border:1px solid #f2352e;
        color: #fff;
    }
</style>