import Vue from 'vue'
import Router from 'vue-router'
import LoadData from '@/components/LoadData'
import SaveData from '@/components/SaveData'
import ShowData from '@/components/ShowData'
import Index from '@/components/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      props: true
    },
    {
      path: '/LoadData',
      name: 'LoadData',
      component: LoadData,
      props: true
    },
    {
      path: '/SaveData',
      name: 'SaveData',
      component: SaveData,
      props: true
    },
    {
      path: '/ShowData',
      name: 'ShowData',
      component: ShowData,
      props: true
    }
  ]
})
