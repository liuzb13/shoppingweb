<template>
    <div class="contioner">
        <div class="product">
            <router-link :to="/product/+info.id">
                <img :src="info.image">
                <h4>{{info.name}}</h4>
                <br/>
                <div class="product-cost">￥{{info.cost}}</div>
                <div class="product-add-cart" @click.prevent="addCart(info.id)">加入购物车</div>
            </router-link>     
        </div>
    </div>
    
</template>

<script>
export default {
    props:['info'],
    methods:{
        addCart(id){
            this.$store.commit('addCart',{id:id,num:1});
        }
    }
}
</script>

<style scoped>
    .product{
        width: 100%;
        float: left;
    }
    .product a{
        background: white;
        display: block;
        margin: 10px;
        border: 1px solid cyan;
        background: white;
        border-radius: 5px;
        position: relative;
        text-align: center;
    }
    .product-add-cart{
        display:none;
        position: absolute;
        top:5px;
        right: 5px;
        cursor: pointer;
        color: white;
        background: #43667e;
        font-size: 12px;
        padding: 5px;
        border-radius: 5px;
    }
    .product:hover .product-add-cart{
        display: inline-block;
    }
    .product-cost{
        padding-bottom: 10px;
        font-size: 12px;
        color: burlywood;
    }
    img{
        width: 90%;
    }
    h4{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 12px;
        padding: 3px;
        color: rgb(126, 110, 110);
    }
</style>