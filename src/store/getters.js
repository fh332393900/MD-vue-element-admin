const getters = {
    sidebar: state => state.app.sidebar,
    permission_routes: state => state.permission.routes,
    visitedViews: state => state.tagsView.visitedViews,
    content: state => state.editorContent.content
}
export default getters