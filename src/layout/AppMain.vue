<template>
    <div class="app-main">
        <transition name="fade-transform" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>
<script>
export default {
    name: 'AppMain'//主要内容区域
}
</script>
<style lang="scss" scoped>
    .app-main {
        min-height: calc(100vh - 50px);
        width: 100%;
        overflow-x: hidden;
    }
    //内容区域的过度动画
    .fade-transform-leave-active,
    .fade-transform-enter-active {
        transition: all .3s;
    }
    .fade-transform-enter {
        opacity: 0;
        transform: translateX(-30px);
    }

    .fade-transform-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
</style>