import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/views/Home')
const Login = () => import('@/views/Login')
const Explorar = () => import('@/views/Explorar')
const Publicar = () => import('@/views/Publicar')
const Registrarse = () => import('@/views/Registrarse')


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  
    {
      path: '/explorar',
      name: 'Explorar',
      component: Explorar
    },
    {
      path: '/publicar',
      name: 'Publicar',
      component: Publicar
    },
    {
      path: '/registrarse',
      name: 'Registrarse',
      component: Registrarse
    },
    {
      path: '/entrar',
      name: 'Login',
      component: Login
    }
  ]
})


