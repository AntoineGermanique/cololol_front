import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VeeValidate from "vee-validate";

Vue.config.productionTip = false
Vue.use(VeeValidate, {
  validity: true
});
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
