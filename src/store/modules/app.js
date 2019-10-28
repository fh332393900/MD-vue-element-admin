const state = {
    sidebar: {
        open: true,//控制菜单伸缩
    }
}
const mutations = {
    TOGGLE_SIDEBAR: state => {
        state.sidebar.open = !state.sidebar.open
    }
}
const actions = {
    toggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
}
export default {
    //namespaced: true,//引入时需加上模块名
    state,
    mutations,
    actions
}