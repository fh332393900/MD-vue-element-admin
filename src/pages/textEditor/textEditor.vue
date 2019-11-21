<template>
    <div class="text-editor">
        <tinymce v-model="content"></tinymce>
        <div v-html="content"></div>
    </div>
</template>
<script>
import Tinymce from '@/components/Tinymce/index.vue'
export default {
    components: {Tinymce},
    data() {
        return {
            content: ''
        }
    },
    created() {
        this.content = this.$store.state.editorContent.content
    },
    watch: {
        
    },
    beforeDestroy() {
        this.$store.dispatch('changeContent',this.content)
    }
}
</script>
<style lang="scss" scoped>
    .text-editor {
        padding: 20px;
    }
</style>