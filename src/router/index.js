import Vue from 'vue'
import Router from 'vue-router'
import home from '../view/home/home'
import signings from '../view/signings/signings'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    name: 'home',
    component: home
  }, {
    path: '/signings',
    name: 'signings',
    component: signings
  }, {
    path: '/',
    name: 'default',
    component: home
  }, {
    path: '*',
    name: 'default',
    component: home 
  }]
})
