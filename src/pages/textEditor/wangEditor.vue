<template>
    <div class="text-editor">
        <editor v-model="content"></editor>
        <div v-html="content"></div>
    </div>
</template>
<script>
import editor from '@/components/wangEditor/index.vue'
export default {
    components: {editor},
    data() {
        return {
            content: ''
        }
    },
}
</script>
<style lang="scss" scoped>
    .text-editor {
        padding: 20px;
    }
</style>