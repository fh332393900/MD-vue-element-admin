import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '../layout/index.vue'
//普通路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('../pages/login.vue'),
    hidden: true
  },
  {
      path: '/',
      component: Layout,
      redirect: '/dashboard',//重定向
      children: [
        {
          path: 'dashboard',
          component: () => import('../pages/dashboard/index.vue'),
          name: '首页',
          meta: { title: '首页', icon: 'el-icon-menu', affix: true }
        }
      ]
  },
  {
      path: '/documents',
      component: Layout,
      redirect: '/documents/document1',
      //嵌套的菜单需要添加meta信息，否则菜单没有标题和图标。只有一个children则不需要，直接从children的meta中取
      meta: {title: '表格', icon: 'el-icon-document'},
      children: [
        {
          path: 'document1',
          component: () => import('../pages/documents/index.vue'),
          name: '表格1',
          meta: { title: '表格1', affix: true }
        },
        {
          path: 'document2',
          component: () => import('../pages/documents/document2.vue'),
          name: '表格2',
          meta: { title: '表格2'}
        }
      ]
  },
  {
    path: '/textEditor',
    component: Layout,
    meta: {title: '富文本编辑器',icon: 'el-icon-s-promotion'},
    redirect: '/textEditor/Tinymce',
    children: [
      {
        path: 'Tinymce',
        name: 'Tinymce',
        component: () => import('../pages/textEditor/textEditor.vue'),
        meta: {title: 'Tinymce'}
      },
      {
        path: 'wangEditor',
        name: 'wangEditor',
        component: () => import('../pages/textEditor/wangEditor.vue'),
        meta: {title: 'wangEditor'}
      }
    ] 
  },
  {
    path: '/echarts',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'echarts',
        component: () => import('../pages/echarts/echart.vue'),
        meta: {title: 'echarts',icon: 'el-icon-s-data'},
      }
    ]
  }
  

 
]
//权限路由，在store的permission中动态添加
export const asyncRoutes = []

const router = new Router({
    routes: constantRoutes
})
export default router