const state = {
    content: ''
}
const mutations = {
    CHANGE_CONTENT(state,content) {
        state.content = content
    }
}
const actions = {
    changeContent({commit},content) {
        commit('CHANGE_CONTENT',content)
    }
}
export default {
    state,
    mutations,
    actions
}