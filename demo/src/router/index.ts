import Vue from 'vue'
import Router from 'vue-router'
import indexView from '@/components/index.vue'

Vue.use(Router)

const routes = [
  // {path: '/', name: 'HelloWorld', component: () => require('@/components/HelloWorld.vue')},
  {path: '/', name: 'index', component: require('@/components/index.vue').default }
]

const router = new Router({
  routes
})

export default router;