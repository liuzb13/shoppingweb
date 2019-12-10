<template>
        <div class="product">
                <div class="product-left">
                    <img 
                :src=item.image>
                </div>
                <div class="product-right">
                    <h3>{{item.brand}}</h3>
                    <div class="product-cost">￥{{item.cost}}</div>
                    <div class="product-add-cart" @click="addCart(item.id)">加入购物车</div>
                </div>
        </div> 
</template>

<script>
export default {
    data(){
        return {
                item:{}
                }
    },
    created(){
        let id=this.$route.params.id;
        let list = this.$store.state.productList;
        this.item = list.find((x)=>x.id==id);
    },
    methods:{
        addCart(id){
            let info={id:id,num:1};
            this.$store.commit('addCart',info);
        }
    }
}
</script>

<style scoped>
    .product{
        width: 70%;
        height: 400px;
        margin: 10px auto;
        background: white;
        border: 1px solid cyan;
        border-radius: 5px;
    }
    .product-left{
        width: 60%;
        height: 100%;
        float: left;
    }
    .product-right{
        float: left;
        margin-top: 150px;
        text-align: center;
    }
    .product-cost{
        font-size: 11px;
        color: black;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .product-add-cart{
        background:rgb(109, 148, 221);
        border: 0.5px solid #dddee1;
        border-radius: 3px;
        color: white;
        font-size: 11px;
        padding: 5px 30px;
        cursor: pointer;
    }
    img{
        height: 400px;
    }
</style>