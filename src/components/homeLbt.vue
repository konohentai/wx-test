<template>
  <div>
    <swiper
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
      :indicator-color="indicatorColor"
      :indicator-active-color="indicatorActiveColor"
      :circular="circular"
    >
      <block v-for="(item,index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item" class="slide-image" width="355" height="250" />
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgUrls: [
        '/static/images/timg.gif',
        '/static/images/timg2.gif',
        '/static/images/timg3.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 500,
      indicatorColor: 'rgba(255, 255, 255, .3)',
      indicatorActiveColor: 'rgba(255, 255, 255, .75)',
      circular: true
    }
  },
  methods: {
    changeIndicatorDots (e) {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },
    changeAutoplay (e) {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },
    intervalChange (e) {
      this.setData({
        interval: e.detail.value
      })
    },
    durationChange (e) {
      this.setData({
        duration: e.detail.value
      })
    }
  }
}
</script>
<style scoped>
  image{
    width: 100%;
    height: 100%;
  }
</style>



