import Vue from 'vue'
import App from './App'
// import Swiper from 'swiper'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// import '/swiper/dist/css/swiper.css'

Vue.config.productionTip = false
App.mpType = 'app'

// Vue.use(Swiper)
// Vue.use(VueAwesomeSwiper)

const app = new Vue(App)
app.$mount()
