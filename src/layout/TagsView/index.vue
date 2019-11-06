<template>
    <div class="tags-view">
        <scroll-pane ref="scrollPane" class="tags-view-wrapper">
            <router-link 
                class="tags-view-item"
                ref="tag"
                v-for="tag in visitedViews"
                :class="isActive(tag) ? 'active' : ''"
                :key="tag.path" 
                :to="{path: tag.path,query: tag.query}">
                {{tag.title}}
                <span v-if="tag.path != '/dashboard'" class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"></span>
            </router-link>
        </scroll-pane>
    </div>
</template>
<script>
import ScrollPane from './ScrollPane.vue'
import path from 'path'
export default {
    name: 'TagsView',//标签页
    components: {ScrollPane},
    data() {
        return {
            affixTags: [],//初始化的标签
        }
    },
    computed: {
        visitedViews() {
            return this.$store.state.tagsView.visitedViews
        },
        routes() {
            return this.$store.state.permission.routes
        }
    },
    watch: {
        $route() {
            this.addTags()
            this.moveToCurrentTag()
        }
    },
    created() {
        this.initTags()
        this.addTags()
    },
    methods: {
        isActive(route) {
            return route.path === this.$route.path
        },
        /**
         * 筛选路由中带有affix的标签，一进入项目默认开启的标签，这部分标签不能关闭
         * @author fenghang
         * @param {Object,String}
         * @version v1
         */
        filterAffixTags(routes,basePath ='/') {
            let tags = []
            this.routes.forEach(route => {
                if (route.path == '/') { 
                    const tagPath = path.resolve(basePath,route.children[0].path)
                    tags.push({
                        fullPath: tagPath,
                        path: tagPath,
                        name: route.children[0].name,
                        meta: route.children[0].meta
                    }) 
                }
            })
            return tags
        },
        /**
         * 初始化标签
         * @author fenghang
         * @version v1
         */
        initTags() {
            this.affixTags = this.filterAffixTags(this.routes)
            for(const tag of this.affixTags) {
                if (tag.name) {
                    this.$store.dispatch('addVisitedView',tag)
                }
            }
        },
        addTags() {
             const {name} = this.$route
             if (name) {
                this.$store.dispatch('addVisitedView',this.$route)
             }
        },
        /**
         * 标签跟随移动
         * @author fenghang
         * @version v1
         */
        moveToCurrentTag() {
            const tags = this.$refs.tag
            this.$nextTick(() => {
                for (const tag of tags) {
                    if (tag.to.path === this.$route.path) {
                        this.$refs.scrollPane.moveToTarget(tag)
                        break
                    }
                }
            })
        },
        /**
         * 关闭标签
         * @author fenghang
         * @param {Object}
         * @version v1
         */
        closeSelectedTag(tag) {
            this.$store.dispatch('delVisitedView',tag).then(visitedViews => {
                this.toLastView(visitedViews,tag)
            })
        },
        /**
         * 关闭标签时，如果是当前标签就跳转到最后一个标签
         * @author fenghang
         * @param {Object,Object}
         * @version v1
         */
        toLastView(visitedViews,view) {
            const lastView = visitedViews.slice(-1)[0]
            //如果关闭的是其他标签就不做跳转
            if (lastView && lastView.fullPath != this.$route.fullPath) {
                this.$router.push(lastView.fullPath)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .tags-view {
        height: 34px;
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #d8dce5;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
        &-item {
            display: inline-block;
            position: relative;
            cursor: pointer;
            height: 26px;
            line-height: 26px;
            border: 1px solid #d8dce5;
            color: #495060;
            background: #fff;
            font-size: 12px;
            padding: 0 8px;
            margin-top: 4px;
            margin-left: 5px;
            
        }
    }
    .active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
        &::before {
            content: "";
            background: #fff;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            position: relative;
            margin-right: 2px;
        }
    }
    .el-icon-close {
        width: 16px;
        height: 16px;
        vertical-align: 2px;
        border-radius: 50%;
        text-align: center;
        transition: all .3s cubic-bezier(.645, .045, .355, 1);
        transform-origin: 100% 50%;
        &:before {
            transform: scale(.6);
            display: inline-block;
            vertical-align: -3px;
        }
        &:hover {
            background-color: #b4bccc;
            color: #fff;
        }
    }
</style>