<template>
    <div class="continer">
        <div class="header">
            <h5>购物清单</h5>
        </div>
        <div class="content">
            <div class="content-title">
                <span class="content-title-product">商品信息</span>
                <span class="content-title-price">单价</span>
                <span class="content-title-number">数量</span>
                <span class="content-title-cost">小计</span>
                <span class="content-title-del">删除</span>
            </div>
            
             <div class="content-body" v-for="item in productList" :key=item.id>
                <span class="content-body-product"><img>{{item.name}}</span>
                <span class="content-body-price">￥{{item.price}}</span>
                <span class="content-body-number"> 
                    <span class="content-body-number-change" @click="delCart(item.id,1)">-</span>
                    <span> {{item.num}} </span>
                    <span class="content-body-number-change" @click="addCart(item.id,1)">+</span>  
                </span>
                <span class="content-body-cost">￥{{item.cost}}</span>
                <span class="content-body-del" @click="delCart(item.id,item.num)"><a href="##">删除</a></span>
            </div>
             
        </div>
        <div class="footer">
            <span class="footer-product-taken" @click="taken">结算</span>
            <span class="footer-product-cost">应付金额 <span>${{productCost}}</span></span>
            <span class="footer-product-number">共计 <span>{{$store.getters.productNum}}</span> 件商品</span>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        addCart(id,num){
            this.$store.commit('addCart',{id:id,num:num});
        },
        delCart(id,num){
            this.$store.commit('delCart',{id:id,num:num});
        },
        taken(){
            confirm('结算完毕');
            this.$store.commit('clearCart');
        }
    },
    created(){
        this.productList = [...this.$store.state.cartList];
    },
    computed:{
        productList:{
            get(){
                return this.$store.state.cartList;
            },
            set(){
            }
        },
        productCost(){
            return this.$store.getters.productCost;
        }
    }
}
</script>

<style scoped>
    .continer{
        margin: 30px;
        height: 460px;
        border: 0.5px solid rgb(146, 152, 153);
        border-radius: 5px;
        overflow: hidden;
    }
    .header{
        width: 100%;
        height: 10%;
        background: white;
        overflow: hidden;
    }
    .header h5{
        margin-left: 20px;
    }
    .content{
        width: 100%;
        height:70%;
        overflow: auto;
    }
    .content-title{
        display: flex;
        height: 40px;
        line-height: 40px;
        font-size: 13px;
        background: darkgray;
    }
    .content-title-product{
        flex: 5;
        padding-left: 30px;
    }
    
    .content-title-price,
    .content-title-number,
    .content-title-cost,
    .content-title-del{
        flex:1;
        text-align: center;
    }
    .content-body{
        height: 30px;
        display: flex;
        line-height: 30px;
        font-size: 12px;
        border-bottom: 0.5px dashed #e9eaec;
    }
    .content-body-product{
        flex:5;
        padding-left: 30px;
    }
    .content-body-price,
    .content-body-number,
    .content-body-cost,
    .content-body-del{
        flex:1;
        text-align: center;
    }
    .content-body-number-change{
        cursor: pointer;
        font-size: 20px;
        line-height: 18px;
        background:rgb(221, 240, 240);
        width:20px;
        height:20px;
        border-radius:20px;
        border: 1px solid rgb(207, 203, 203);
        display: inline-block;
    }
    .footer{
        width: 100%;
        height: 20%;
        overflow: hidden;
    }
    .footer-product-number{
        float: right;
        margin-right: 30px;
        margin-top: 33px;
        font-size:13px;
    }
    .footer-product-number span{
        color:red;
    }
    .footer-product-cost{
        float: right;
        margin-top: 30px;
        margin-right: 30px;
    }
    .footer-product-cost span{
        display: inline-block;
        color: rgb(233, 60, 60);
        font-size: 16px;
        width:100px;
    }
    .footer-product-taken{
        float:right;
        margin-top: 30px;
        margin-right: 30px;
        padding: 5px 30px;
        border-radius: 3px;
        cursor:pointer;
        color: white;
        font-size: 13px;
        background: rgb(168, 41, 41);
    }
</style>