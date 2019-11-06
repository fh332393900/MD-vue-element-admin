<template>
    <div class="radarChart">
        <div id="radarChart" style="height:360px;width:100%;"></div>
        <div class="control">
            <el-button size="mini" type="primary" @click="refresh">刷新</el-button>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
require ('echarts/theme/macarons')
import resize from '../mixins/resize.js'
export default {
    name: 'radarChart',
    mixins: [resize],
    data() {
        return {
            chart: null
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initChart()
        })
    },
    methods: {
        initChart() {
            this.chart = echarts.init(document.getElementById('radarChart'),'macarons')
            this.setOptions()
        },
        setOptions() {
            this.chart.setOption({
                title: {
                    text: '基础雷达图'
                },
                tooltip: {
                    trigger: 'item',
                },
                legend: {
                    left: 0,
                    top: 50,
                    data: ['预算分配', '实际开销']
                },
                radar: {
                    // shape: 'circle',
                    name: {
                        textStyle: {
                            color: '#fff',
                            backgroundColor: '#999',
                            borderRadius: 3,
                            padding: [3, 5]
                    }
                    },
                    indicator: [
                    { name: '销售', max: 6500},
                    { name: '管理', max: 16000},
                    { name: '信息技术', max: 30000},
                    { name: '客服', max: 38000},
                    { name: '研发', max: 52000},
                    { name: '市场', max: 25000}
                    ]
                },
                series: [{
                    name: '预算 vs 开销',
                    type: 'radar',
                    // areaStyle: {normal: {}},
                    data : [
                        {
                            value : [4300, 10000, 28000, 35000, 50000, 19000],
                            name : '预算分配'
                        },
                        {
                            value : [5000, 14000, 28000, 31000, 42000, 21000],
                            name : '实际开销'
                        }
                    ]
                }]
            })
        },
        refresh() {
            this.chart.clear()
            this.setOptions()
        }
    }
}
</script>
<style lang="scss" scoped>
    .radarChart {
        padding: 10px;
    }
    .control {
        text-align: right;
    }
</style>