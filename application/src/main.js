// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookie from 'vue-cookie'
import Vuetify from 'vuetify'
import Authentication from '@/components/pages/Authentication'
import('../node_modules/vuetify/dist/vuetify.min.css')
Vue.use(VueCookie)
Vue.use(Vuetify)
Vue.config.productionTip = false
Authentication.checkAuthentication()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
