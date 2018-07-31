import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue(); // Global event bus

new Vue(App).$mount('#app')
