<template>
    <div>
        <textarea :id="tinymceId"></textarea>
    </div>
</template>
<script>
import tinymce from 'tinymce'
import 'tinymce/themes/silver/theme'
import zh_CN from './zh_CN.js'
import plugins from './plugins.js'
require('./plugins.js')
import toolbar from './toolbar.js'

export default {
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            //是否改变了内容
            hasChange: false,
            hasInit: false,
            tinymceId: 'text'
        }
    },
    watch: {
        value(val) {
            if (!this.hasChange && this.hasInit) {
                this.$nextTick(() => {
                    window.tinymce.get(this.tinymceId).setContent(val || '')
                })
            }
        }
    },
    mounted() {
        this.initTinymce()
    },
    activated() {
        if (window.tinymce) {
            this.initTinymce()
        }
    },
    deactivated() {
        this.destroyTinymce()
    },
    destroyed() {
        this.destroyTinymce()
    },
    methods: {
        /**
         * 加载富文本，配置参数工具
         * @author fenghang
         * @version v2 更改为npm引入
         */
        initTinymce() {
            const _this = this
            window.tinymce.init({
                selector: '#text',
                language: 'zh_CN',
                toolbar: true,
                menubar: true,
                inline: false,
                skin_url: '../../../static/tinymce/skins/ui/oxide',//富文本皮肤
                content_css: '../../../static/tinymce/skins/content/default/content.css',//富文本样式
                min_height: 400,
                plugins: plugins,
                toolbar: toolbar,
                quickbars_selection_toolbar: 'bold italic forecolor | link blockquote quickimage | fullscreen |',
                init_instance_callback: editor => {
                    if (_this.value) {
                        editor.setContent(_this.value)
                    }
                    _this.hasInit = true
                    editor.on('NodeChange Change KeyUp SetContent',() => {
                        this.hasChange = true
                        this.$emit('input',editor.getContent())
                    })
                }
            })
        },
        //路由切换时必须调用销毁
        destroyTinymce() {
            const tinymce = window.tinymce.get("text")
            if (this.fullscreen) {
                tinymce.execCommand('mceFullScreen')
            }
            if (tinymce) {
                tinymce.destroy()
            }
        },
    }
}
</script>