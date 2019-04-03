import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import './assets/scss/app.scss'
import store from './store'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
