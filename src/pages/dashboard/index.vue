<template>
    <div @click="path">dashboard</div>
</template>
<script>
export default {
    name: 'dashboard',
    created(){
       
    },
    methods: {
        path(){
            this.$router.push(
                {
                    path: '/documents',
                    query: {
                        name: 'fh'
                    }
                }
            )
        }
    }
}
</script>
<style lang="scss" scoped>
    div {
        padding: 20px;
    }
</style>