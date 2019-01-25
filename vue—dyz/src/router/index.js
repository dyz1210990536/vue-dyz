import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import New from '@/components/admin/New'
import News from '@/components/admin/News'
import Benner from '@/components/admin/Benner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      redirect: '/new',
      children:
    [{path: '/new', name: 'new', component: New},
      {path: '/news', name: 'news', component: News,},
      {path: '/banner', name: 'banner', component: Benner},

    ]
    }
  ]
})
