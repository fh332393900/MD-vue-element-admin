<template>
    <div :class="{hideSidebar: isHideSider}" class="app-warpper">
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
            <div>
                <navbar></navbar>
                <tags-view></tags-view>
            </div>
            <app-main></app-main>
        </div>
    </div>
</template>
<script>
import Sidebar from './Sidebar/index.vue'
import AppMain from './AppMain.vue'
import Navbar from './Navbar.vue'
import TagsView from './TagsView/index.vue'
import {mapGetters} from 'vuex'
export default {
    components: {Sidebar,Navbar,TagsView,AppMain},
    computed: {
        ...mapGetters([
            'sidebar'
        ]),
        //从vuex中获取当前的菜单伸缩状态
        isHideSider() {
            return !this.sidebar.open
        }
    },
    methods: {
      
    }
}
</script>
<style lang="scss" scoped>
    .app-warpper {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .sidebar-container{
        width: 210px;
        height: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        transition: width 0.3s;
    }
    .main-container {
        min-height: 100%;
        margin-left: 210px;
        position: relative;
        transition: margin-left 0.3s;
    }
    //固定header的样式，width需要动态计算
    // .fixed-header {
    //     position: fixed;
    //     top: 0;
    //     right: 0;
    //     width: calc(100% - 210px);
    //     z-index: 9;
    // }
    // .app-main {
    //     margin-top: 84px;
    // }
    .hideSidebar {
        .sidebar-container {
        width: 62px !important;
        }
        .main-container {
        margin-left: 62px;
        }
    }
</style>