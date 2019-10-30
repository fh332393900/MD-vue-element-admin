import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import Element from 'element-ui'
import Fragment from 'vue-fragment'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/icons/index.js'
import './permission.js'
//解决element菜单折叠文字不隐藏问题
Vue.use(Fragment.Plugin)

Vue.use(Element,{
    size: 'medium'
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
