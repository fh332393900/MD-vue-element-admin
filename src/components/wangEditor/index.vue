<template>
    <div ref="text"></div>
</template>
<script>
import E from 'wangeditor'
export default {
    name:'editor',
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            editorContent: ''
        }
    },
    mounted() {
        this.initEditor()
    },
    methods: {
        initEditor() {
            let editor = new E(this.$refs.text)
            editor.customConfig.onchange = (html) => {
                console.log("111111")
                this.editorContent = html
                this.$emit('input',html)
            }
            editor.create()
            if (this.value) {
                editor.txt.html(this.value)
            }
        }
    }
}
</script>