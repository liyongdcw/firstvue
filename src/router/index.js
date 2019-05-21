import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import upload from '@/components/upload'
import draftRequire from '@/components/draftRequire'
import details from '@/components/details'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    },
    {
      path: '/draftRequire',
      name: 'draftRequire',
      component: draftRequire
    },
    {
      path: '/details',
      name: 'details',
      component: details
    }
  ]
})
