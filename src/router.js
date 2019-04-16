import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/recommend'
    }, {
      path: '/',
      name: 'home',
      component: home,
      children: [{
          path: '/musicList',
          name: 'musicList',
          component: () => import('./views/musicList.vue')
        },
        {
          path: '/singer',
          name: 'singer',
          component: () => import('./views/singer.vue')
        },
        {
          path: '/recommend',
          name: 'recommend',
          component: () => import('./views/recommend.vue')
        }
      ]
    }, {
      path: '/search',
      name: 'search',
      component: () => import('./views/search.vue')
    }

  ]
})