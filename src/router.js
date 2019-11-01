import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/explorar',
      name: 'explorar',
      component: () => import('./views/Explorar.vue')
    },
    {
      path: '/publicar',
      name: 'publicar',
      component: () => import('./views/Publicar.vue')
    },
    {
      path: '/registrarse',
      name: 'registrarse',
      component: () => import('./views/Registrarse.vue')
    },
    {
      path: '/entrar',
      name: 'entrar',
      component: () => import('./views/Entrar.vue')
    }
  ]
})
