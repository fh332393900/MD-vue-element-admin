<template>
    <div @click="toTable">dashboard</div>
</template>
<script>
export default {
    name: 'dashboard',//首页
    created(){ 
    },
    methods: {
        toTable() {
            this.$router.push({
                path: '/documents/document2',
                query: {
                    name: 'fh',
                    age: '21'
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    div {
        padding: 20px;
    }
</style>