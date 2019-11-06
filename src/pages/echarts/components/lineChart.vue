<template>
    <div class="lineChart">
        <div id="lineChart" style="height:300px;width:100%;"></div>
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
    name: 'lineChart',
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
            this.chart = echarts.init(document.getElementById('lineChart'),'macarons')
            this.setOptions()
        },
        setOptions() {
            var base = +new Date(2019, 9, 3);
            var oneDay = 24 * 3600 * 1000;
            var date = [];

            var data = [500,200,90,120,321,44,422,54,390];

            for (var i = 1; i < 10; i++) {
                var now = new Date(base += oneDay);
                date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
                //data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
            }
            this.chart.setOption({
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                title: {
                    left: 'center',
                    text: '大数据量面积图',
                },
                toolbox: {
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    },
                    right: 20,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: date
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%']
                },
                dataZoom: [{//区域缩放
                    type: 'inside',
                    //数据窗口范围的起始百分比。范围是：0 ~ 100。表示 0% ~ 100%。
                    start: 0,//初始缩放的开始位置
                    end: 100//初始缩放的结束位置
                }, {
                    start: 0,
                    end: 10,
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }],
                series: [
                    {
                        name:'模拟数据',
                        type:'line',//图标类型
                        smooth:true,//曲线是否圆滑
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {//折线颜色
                            color: 'rgb(255, 70, 131)'
                        },
                        areaStyle: {//填充区域颜色，渐变
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(255, 158, 68)'
                            }, {
                                offset: 1,
                                color: 'rgb(255, 70, 131)'
                            }])
                        },
                        data: data,
                        animationDuration: 800//动画持续时间
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
    .lineChart {
        padding: 10px;
    }
    .control {
        text-align: right;
    }
</style>