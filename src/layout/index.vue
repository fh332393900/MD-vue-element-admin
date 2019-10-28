<template>
    <div :class="{hideSidebar: isHideSider}" class="app-warpper">
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
            <navbar></navbar>
            <!-- <el-button @click="toggleMenu">open/close</el-button> -->
            <tags-view></tags-view>
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
        isHideSider() {
            return !this.sidebar.open
        }
    },
    methods: {
        toggleMenu() {
            this.isHideSider = !this.isHideSider
        }
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
.hideSidebar {
    .sidebar-container {
      width: 54px !important;
    }
    .main-container {
      margin-left: 54px;
    }
}
</style>