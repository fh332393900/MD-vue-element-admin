<template>
    <div class="navbar">
        <div class="navbar-left">
            <hamburger class="hamburger-icon" :is-active="sidebar.open" @toggleClick="toggleSidebar"></hamburger>
            <breadcrumb></breadcrumb>
        </div>
        <div class="navbar-menu">

        </div>
    </div>
</template>
<script>
import Hamburger from '../components/Hamburger/index.vue'
import Breadcrumb from '../components/Breadcrumb/index.vue'
import {mapGetters} from 'vuex'
export default {
    name: 'Navbar',//头部区域
    components: {Hamburger,Breadcrumb},
    computed: {
        ...mapGetters([
            'sidebar'
        ]),
    },
    created() {
        
    },
    methods: {
        toggleSidebar() {
            this.$store.dispatch({type: 'toggleSideBar'})
        }
    }
}
</script>
<style lang="scss" scoped>
    .navbar {
        height: 50px;
        box-shadow: 0 1px 4px rgba(0,21,41,.08);
        background-color: #fff;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-left {
            display: flex;
            .hamburger-icon {
                line-height: 46px;
                height: 100%;
                cursor: pointer;
                transition: background .3s;
                &:hover {
                    background: rgba(0, 0, 0, .025)
                }
            }
        }
        &-menu {
            width: 300px;
            height: 100%;
        }
    }
</style>