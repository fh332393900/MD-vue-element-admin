<template>
    <fragment v-if="!item.hidden">
        <template v-if="hasOneShowingChild(item.children,item)">
            <router-link :to="resolvePath(onlyOneChild.path)">
                <el-menu-item :index="resolvePath(onlyOneChild.path)">
                    <i :class="onlyOneChild.meta.icon"></i>
                    <span slot="title">{{onlyOneChild.meta.title}}</span>
                </el-menu-item>
            </router-link>
        </template>
        <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
            <template slot="title">
                <i :class="item.meta.icon"></i>
                <span slot="title">{{item.meta.title}}</span>
            </template>
            <template v-for="child in item.children">
                <router-link :key="child.path" :to="resolvePath(child.path)">
                    <el-menu-item :index="resolvePath(child.path)">
                        <span slot="title">{{child.meta.title}}</span>
                    </el-menu-item>
                </router-link>
            </template>
        </el-submenu>
    </fragment>
</template>
<script>
import path from 'path'
export default {
    name: 'SidebarItem',
    props: {
        item: {
            type: Object,
            required: true
        },
        basePath: {
            type: String,
            default: ''
        }
    },
    created() {
    },
    data() {
        return {
            //children只有一个路由时的对象
            onlyOneChild: ''
        }
    },
    methods: {
        /**
         * 判断路由下是不是只有一个children，只有一个的话菜单直接使用el-menu-item包裹
         * 当一个路由下面的 children 声明的路由大于>1 个时，自动会变成嵌套的模式
         *@author fenghang
         *@version v1
         */ 
        hasOneShowingChild(children = [],parent) {
            if (children.length === 1) {
                children.filter(item => {
                    this.onlyOneChild = item
                })
                return true
            }
            return false
        },
        /**
         * 拼接路由
         *@author fenghang
         *@version v1
         */
        resolvePath(routePath) {
            return path.resolve(this.basePath,routePath)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>