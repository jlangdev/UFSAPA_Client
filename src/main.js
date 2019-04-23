import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";

axios.interceptors.request.use(function(config) {
  if (localStorage.token) {
    const token = localStorage.token;
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});
axios.defaults.baseURL = 'http://zachf632.pythonanywhere.com/api'

Vue.use(VueAxios, axios);
Vue.use(VueAxios, axios);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
