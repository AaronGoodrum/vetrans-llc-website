import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import index from '@/components/index'
import service from '@/components/services'
import about from '@/components/about'
import employment from '@/components/employment'
import contact from '@/components/contact'

Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/services',
      name: 'service',
      component: service
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/employment',
      name: 'employment',
      component: employment
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
