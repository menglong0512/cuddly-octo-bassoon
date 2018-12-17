import Vue from 'vue'
import Router from 'vue-router'
// import indexView from '@/components/index.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    // {path: '/', name: 'login', component: () => import('@/components/login.vue')},
    {path: '/', name: 'login', component: resolve => require(['@/components/login.vue'], resolve)},
    {path: '/index', name: 'index', component: () => import('@/components/index.vue'), children: [
      {path: 'nest_1', name: 'nest_1', component: () => import('@/components/indexView/nest.vue')}
    ]},
    // {path: '/props', name: 'props', component: () => import('@//components/props.vue')}
  ]
})

export default router;
