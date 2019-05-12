<template>
  <div class='indexBox'>
    <Wheader hdata='首页' isBtn='1'/>
    <!-- <view class='tex'>首页</view> -->
    <i-notice-bar icon="systemprompt" closable loop>
        2018年世界杯,将于6月14日至7月15日举行
    </i-notice-bar>
    <van-search :value="value" placeholder="请输入搜索关键词" />
    <van-tabs :active='active'>
      <van-tab title='轮播图'><Lbt/></van-tab>
      <van-tab title='拍照'><weiv/></van-tab>
      <van-tab title='地图'><mpi/></van-tab>
      <van-tab title='标签 4'>内容 4</van-tab>
      <van-tab title='标签 5'>内容 5</van-tab>
      <van-tab title='标签 6'>内容 6</van-tab>
    </van-tabs>
    
  </div>
</template>

<script>
// import card from '@/components/card'
import Wheader from '@/components/header'
import Lbt from '@/components/homeLbt'
import weiv from '@/components/homeView'
import mpi from '@/components/homeMap'
// import Wfooter from '@/components/footer'
// import Vue from 'vue'
// import Swiper from 'swiper'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
// require('swiper/dist/css/swiper.css')

export default {
  name: 'carrousel',
  data () {
    return {
      active: 0
    }
  },
  components: {
    // card,
    Wheader,
    Lbt,
    weiv,
    mpi
    // Wfooter
  },
  methods: {
    onChange (event) {
      wx.showToast({
        title: `切换到标签 ${event.detail.index + 1}`,
        icon: 'none'
      })
    }
  }
}
</script>

<style>
/* @import '/swiper/dist/css/swiper.css'; */
html,
body {
  height: 100%;
}
.indexBox {
  /* display: flex; */
  /* flex-direction: column;
   justify-content: space-between; */
  height: 100%;
}
.tex {
  text-align: center;
}
</style>
