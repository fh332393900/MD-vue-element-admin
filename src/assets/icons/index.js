import Vue from 'vue'
import SvgIcon from '../../components/SvgIcon/index.vue'

Vue.component('svg-icon',SvgIcon)//注册全局的组件
//导入svg文件夹下的svg
const req = require.context('./svg',true,/\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
