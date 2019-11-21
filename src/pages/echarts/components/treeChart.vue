<template>
    <div class="treeChart">
        <div id="treeChart" style="height:300px;width:100%;"></div>
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
    name: 'treeChart',
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
            this.chart = echarts.init(document.getElementById('treeChart'),'macarons')
            this.setOptions()
        },
        setOptions() {
            let data = {
                name: '前端框架',
                children: [{
                    name: 'Vue',
                    children: [{
                        name: 'vuex',
                    },{
                        name: 'vue-router'
                    }]
                },{
                    name: 'React'
                },{
                    name: 'Angular'
                }]
            }
            this.chart.setOption({
                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove'
                },
                series: [
                    {
                        type: 'tree',

                        data: [data],

                        top: '1%',
                        left: '7%',
                        bottom: '1%',
                        right: '20%',

                        symbolSize: 14,//节点圆圈大小

                        label: {
                            normal: {
                                position: 'left',
                                verticalAlign: 'middle',
                                align: 'right',
                                fontSize: 16//字体大小
                            }
                        },

                        leaves: {
                            label: {
                                normal: {
                                    position: 'right',
                                    verticalAlign: 'middle',
                                    align: 'left'
                                },
                            }
                        },

                        expandAndCollapse: true,
                        animationDuration: 550,
                    }
                ]
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
    .treeChart {
        padding: 10px;
    }
    .control {
        text-align: right;
    }
</style>