import {constantRoutes,asyncRoutes} from '../../router/index.js'
const state = {
    routes: [],//全部的路由
    addRoutes: []//动态添加的路由
}
const mutations = {
    //合并路由
    SET_ROUTES: (state,routes) => {
        state.addRoutes = routes
        state.routes = constantRoutes.concat(routes)
    }
}
const actions = {
    generateRoutes({commit},roles) {
        return new Promise(resolve => {
            let accessedRoutes = asyncRoutes || []
            commit('SET_ROUTES',accessedRoutes)
            resolve(accessedRoutes) 
        })
    }
}
export default {
    state,
    mutations,
    actions
}