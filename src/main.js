// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'

import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'

import Gravatar from 'vue-gravatar'

/* ... */

Vue.config.productionTip = false

Vue.use(SuiVue)

Vue.component('v-gravatar', Gravatar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: { App }
})
