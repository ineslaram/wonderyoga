import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { store } from '@/store'
import './plugins/fontawesome'
import './configFirebase.js'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import AlertCmp from './components/ui/alert'

Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)

new Vue({ 
  router,
  store,
  render: h => h(App)
}).$mount('#app')