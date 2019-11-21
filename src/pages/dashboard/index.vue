<template>
    <div class="echarts">
        <div>
            <el-row>
                <div class="echarts-warpper">
                    <map-chart></map-chart>
                </div>
            </el-row>
            <el-row>
                <div class="echarts-warpper">
                    <complex-chart></complex-chart>
                </div>
            </el-row>
        </div>
    </div>
</template>
<script>
import mapChart from './components/mapChart.vue'
import complexChart from './components/complexChart.vue'
export default {
    name: 'dashboard',//首页
    components: {mapChart,complexChart},
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
    .echarts {
        background-color: rgb(240, 242, 245);
        padding: 20px;
        &-warpper {
            width: 100%;
            background-color: #ffffff;
            margin-bottom: 30px;
        }
    }
</style>