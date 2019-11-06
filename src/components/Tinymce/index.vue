<template>
    <div>
        <textarea :id="tinymceId"></textarea>
    </div>
</template>
<script>
import zh_CN from './zh_CN.js'
import plugins from './plugins.js'
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
        initTinymce() {
            const _this = this
            window.tinymce.init({
                selector: '#text',
                min_height: 400,
                toolbar: true,
                menubar: true,
                inline: false,
                language:'zh_CN',
                plugins: plugins,
                toolbar: toolbar,
                quickbars_selection_toolbar: 'bold italic forecolor | link blockquote quickimage | fullscreen |',
                init_instance_callback: editor => {
                    if (_this.value) {
                        console.log("set")
                        editor.setContent(_this.value)
                    }
                    _this.hasInit = true
                    editor.on('NodeChange Change KeyUp SetContent',() => {
                        this.hasChange = true
                        this.$emit('input',editor.getContent())
                    })
                }
            });
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