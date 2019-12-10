# shoppingweb
## 技术栈
Vue Vuex VueRouter
## 项目说明
使用vue框架构建的一个购物网站，着重与页面之间的数据逻辑变换，整个界面包含三个组件，主界面、商品详情页、购物车，数据交互主要依靠vuex完成，主要数据保存在store中，使用getter来传递给各个组件其需要的数据，操作数据都依靠store中的mutation中定义的方法实现的，同时也使用的有路由传参进行一些简单的数据交互，利用本地存储保存当前状态，使得下次打开依旧能够显示出上次关闭时的状态信息。
## 页面展示
### 主界面
![image](https://github.com/liuzb13/shoppingweb/blob/master/shop-mainpage.PNG)
### 详情页
![image](https://github.com/liuzb13/shoppingweb/blob/master/shop-detailpage.PNG)
### 购物车
![image](https://github.com/liuzb13/shoppingweb/blob/master/shop-cartpage.PNG)
