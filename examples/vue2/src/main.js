import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import App from './App.vue'
import MiniMicroApp from 'mini-micro-app'

window.globalStr='parent'

MiniMicroApp.start()

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


