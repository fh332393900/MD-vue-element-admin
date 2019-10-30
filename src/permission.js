import store from '@/store/index.js'
import router from './router'
// router.beforeEach(async (to,from,next) => {
//     const accessRoutes = await store.dispatch('generateRoutes')
//     router.addRoutes(accessRoutes)
//     next()
// })
//路由动态添加
const accessRoutes = store.dispatch('generateRoutes').then()