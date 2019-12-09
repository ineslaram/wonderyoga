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
import DateFilter  from './filters/date'

Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)

Vue.filter('date', DateFilter)

new Vue({ 
  router,
  store,
  render: h => h(App),
  created () {
    this.$store.dispatch('loadMeetups')
  }
}).$mount('#app')