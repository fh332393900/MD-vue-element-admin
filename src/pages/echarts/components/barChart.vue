<template>
    <div class="barChart">
        <div id="barChart" style="height:400px;width:100%;"></div>
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
    name: 'barChart',
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
            this.chart = echarts.init(document.getElementById('barChart'),'macarons')
            this.setOptions()
        },
        setOptions() {
            var data1 = [170,230,100,340,344,190,145]
            var data2 = [290,230,200,340,444,290,445]
            var data3 = [130,230,500,434,134,490,155]
            var data4 = [235,117,150,134,244,390,355]

            let itemStyle = {
                normal: {
                },
                emphasis: {
                    barBorderWidth: 1,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0,0,0,0.3)'
                }
            }
            this.chart.setOption({
                title: {
                    left: 'center',
                    text: '柱状图'
                },
                legend: {
                    data: ['bar', 'bar2', 'bar3', 'bar4'],
                    align: 'left',
                    left: 10
                },
                tooltip: {
                },
                toolbox: {
                    feature: {
                        saveAsImage: {
                            show: true
                        },
                    },
                    right: 20,
                },
                xAxis: {
                    data: ['星期一','星期二','星期三','星期四','星期五','星期六','星期天'],
                    silent: false,
                    axisLine: {onZero: true},
                    splitLine: {show: false},
                    splitArea: {show: false}
                },
                yAxis: {
                    //inverse: true,
                    splitArea: {show: false}
                },
                grid: {
                    left: 100
                },
                visualMap: {//图标的映射视图
                    type: 'continuous',
                    dimension: 1,
                    text: ['High', 'Low'],
                    inverse: false,
                    calculable: true,//开启拖拽选择区域
                    max: 600,
                    min: 0,
                    top: 60,
                    left: 10,
                    inRange: {
                        colorLightness: [0.8, 0.6]//颜色根据数值匹配的范围，数值越大柱状图颜色越深
                    },
                    outOfRange: {
                        color: '#bbb'
                    },
                    controller: {//控制器的颜色 
                        // inRange: {
                        //     color: '#2f4554'
                        // }
                    }
                },
                series: [
                    {
                        name: 'bar',
                        type: 'bar',
                        stack: 'one',
                        itemStyle: itemStyle,
                        data: data1
                    },
                    {
                        name: 'bar2',
                        type: 'bar',
                        stack: 'one',
                        itemStyle: itemStyle,
                        data: data2
                    },
                    {
                        name: 'bar3',
                        type: 'bar',
                        stack: 'two',
                        itemStyle: itemStyle,
                        data: data3
                    },
                    {
                        name: 'bar4',
                        type: 'bar',
                        stack: 'two',
                        itemStyle: itemStyle,
                        data: data4
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
    .barChart {
        padding: 10px;
    }
    .control {
        text-align: right;
    }
</style>