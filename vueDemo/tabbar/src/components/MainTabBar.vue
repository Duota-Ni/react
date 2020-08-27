<template>
      <tab-bar>
      <tab-bar-item path="/home" active-color="blue">
        <img slot="item-icon" src="../assets/images/tabbar/home.svg" />
        <img slot="item-icon-active" src="../assets/images/tabbar/home_active.svg" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" active-color="green">
        <img slot="item-icon" src="../assets/images/tabbar/category.svg" />
        <img slot="item-icon-active" src="../assets/images/tabbar/category_active.svg" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" active-color="yellow">
        <img slot="item-icon" src="../assets/images/tabbar/shopcart.svg" />
        <img slot="item-icon-active" src="../assets/images/tabbar/shopcart_active.svg" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" active-color="red">
        <img slot="item-icon" src="~assets/images/tabbar/profile.svg" />
        <img slot="item-icon-active" src="~assets/images/tabbar/profile_active.svg" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "@/components/tabbar/TabBar";
import TabBarItem from "@/components/tabbar/TabBarItem";

export default {
  name:"MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>