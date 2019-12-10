<template>
  <div class="body-continer">
    <div class="header">
      <router-link class="header-title" to="/list">电商网站示例</router-link>
      <router-link class="header-cart" to="/cart">购物车
      <span v-show="$store.state.cartList.length!=0">{{productNum}}</span></router-link>
    </div>
    <div class="footer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import list from './components/list.vue'
export default {
  components:{list},
  computed:{
    productNum(){
      return this.$store.getters.productNum;
    }
  },
  created(){
    let list = JSON.parse(localStorage.getItem('cmt')||'[]');
    this.$store.state.cartList = list;
  }
}
</script>

<style>
  *{
    padding:0px;
    margin: 0px;
  }
  ::-webkit-scrollbar{ 
	display: none;
  }
  .body-continer{
    width: 100%;
  }
  .header{
    border-radius: 5px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background:blueviolet;
    overflow: hidden;
    position: relative;
  }
  .footer{
    overflow: auto;
  }
  .header-title{
    color: white;
    margin-left:20px;
    font-size:15px;
  }
  .header-cart{
    width: 70px;
    color: white;
    height:auto;
    float:right;
    font-size:15px;
    margin-right:3%;
  }
  .header-cart span{
    display: inline-block;
    text-align: center;
    line-height: 15px;
    width: 15px;
    height: 15px;
    font-size: 11px;
    background: cadetblue;
    border-radius: 7px;
  }
  a{
    text-decoration: none;
  }
  body{
    background: #f8f8f9;
  }
</style>
