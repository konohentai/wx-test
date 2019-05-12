<template>
<!-- <div> -->
  
  <header>
    <span v-if="isBtn" @click="bck">&#62;</span>
    {{hdata}}
  </header>
<!-- </div> -->
  
</template>
<script>
export default {
  props: ['hdata', 'isBtn'],
  mounted () {
    console.log(this)
  },
  methods: {
    bck () {
      wx.navigateTo({
        url: '/pages/mine/main'
      })
    }
  }
}
</script>
<style scoped>
header {
  /* display: flex; */
  position: relative;
  background-color: #f13e3e;
  color: #fff;
  text-align: center;
  height: 70px;
  line-height: 90px;
}
span{
  position: absolute;
  left: 10px;
}
</style>

