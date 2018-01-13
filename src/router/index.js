import Vue from 'vue'
import Router from 'vue-router'

import TodoList from '@/components/todo/List'
import WhyVue from '@/components/WhyVue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/why',
      name: 'WhyVue',
      component: WhyVue
    }
  ]
})
