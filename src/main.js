// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import AppShell from './app-shell'
import router from './router'

// jQuery
window.$ = window.jQuery = require('jquery')

// MaterializeCSS
require('materialize-css/dist/css/materialize.min.css')
require('materialize-css/dist/js/materialize.min.js')

// Material Icons
require('material-design-icons-iconfont/dist/material-design-icons.css')

// Global Styles
require('@/assets/styles.css')

// Vue Configurations
Vue.config.productionTip = false
Vue.config.devtools = false

/* eslint-disable no-new */
new Vue({
  el: 'app-root',
  router,
  template: '<app-shell />',
  components: { AppShell }
})
