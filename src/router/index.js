import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '../layout/index.vue'
const router = new Router({
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/dashboard',
            children: [
              {
                path: 'dashboard',
                component: () => import('../pages/dashboard/index.vue'),
                name: '首页',
                meta: { title: '首页', icon: 'dashboard', affix: true }
              },
              
            ]
        },
        {
            path: '/documents',
            component: Layout,
            redirect: '/documents/document1',//重定向
            meta: {title: '文档', icon: 'documents', affix: true },
            children: [
              {
                path: 'document1',
                component: () => import('../pages/documents/index.vue'),
                name: '文档1',
                meta: { title: '文档1'}
              },
              {
                path: 'document2',
                component: () => import('../pages/documents/document2.vue'),
                name: '文档2',
                meta: { title: '文档2'}
              }
            ]
        },
    ]
})
export default router