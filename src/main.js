import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/common.scss'

Vue.config.productionTip = false

const EventBus = new Vue

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

Vue.mixin({
  computed: {
    $eventBus: () => EventBus
  }
})