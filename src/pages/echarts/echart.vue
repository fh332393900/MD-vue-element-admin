<template>
    <div class="echarts">
        <div>
            <el-row :gutter="32">
                <el-col :xs="24" :sm="24" :lg="12">
                    <div class="echarts-warpper">
                        <pie-chart ></pie-chart>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :lg="12">
                    <div class="echarts-warpper" >
                        <line-chart ></line-chart>
                    </div>
                </el-col>
            </el-row>
            <el-row >
                <div class="echarts-warpper">
                    <bar-chart></bar-chart>
                </div>
            </el-row>
            <el-row :gutter="32">
                <el-col :xs="24" :sm="24" :lg="12">
                    <div class="echarts-warpper">
                        <radar-chart ></radar-chart>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :lg="12">
                    <div class="echarts-warpper">
                        <pie-chart2 ></pie-chart2>
                    </div>
                </el-col>
            </el-row>  
        </div>
    </div>
</template>
<script>
import pieChart from './components/pieChart.vue'
import lineChart from './components/lineChart.vue'
import barChart from './components/barChart.vue'
import radarChart from './components/radarChart.vue'
import pieChart2 from './components/pieChart2.vue'
export default {
    components: {pieChart,lineChart,barChart,radarChart,pieChart2},
    data() {
        return {

        }
    },
    methods: {

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