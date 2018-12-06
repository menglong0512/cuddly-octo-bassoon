import Vue from 'vue'
import Router from 'vue-router'
import indexView from '@/components/index.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    // {path: '/', name: 'login', component: () => require('@/components/login.vue')},
    {path: '/index', name: 'index', component: require('@/components/index.vue').default, children:[
      {path: 'indexView_1', name: 'indexView_1', component: require('@/components/indexView/one.vue').default}
    ]}
  ]
})

export default router;