<template>
    <div class="complexChart">
        <div id="complexChart" style="height:600px;width:100%;"></div>
        <div class="control">
            <el-button size="mini" type="primary" @click="refresh">刷新</el-button>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
import resize from '../mixins/resize.js'
require ('echarts/theme/macarons')
import {color} from './color.js'
import {
    year,
    weekCategory,
    radarData,
    maxData,
    radarDataAvg,
    weekMaxData,
    weekLineData
} from './complexChartData.js'
export default {
    name: 'complexChart',
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
            this.chart = echarts.init(document.getElementById('complexChart'))
            this.setOptions()
        },
        setOptions() {
            
            this.chart.setOption({
                title: {
                    text: '一周跑步数据',
                    textStyle: {
                        color: '#fff',
                        fontSize: 32,
                        fontWeight: 'normal'
                    },
                    subtext: year + '/' + weekCategory[6],
                    subtextStyle: {
                        color: '#fff',
                        fontSize: 16,
                    },
                    top: 50,
                    left: 80
                },
                legend: {
                    top: 220,
                    left: 80,
                    orient: 'vertical',
                    itemGap: 15,
                    itemWidth: 12,
                    itemHeight: 12,
                    data: ['平均指标', '我的指标'],
                    textStyle: {
                        color: '#fff',
                        fontSize: 14,
                    },
                },
                tooltip: {
                    trigger: 'item'
                },
                radar: {
                    center: ['68%', '27%'],//位置
                    radius: '40%',
                    name: {
                        color: '#fff'
                    },
                    splitNumber: 8,
                    axisLine: {//雷达图坐标轴线样式
                        lineStyle: {
                        color: color.linearYtoG,
                        opacity: .6
                        }
                    },
                    splitLine: {//雷达图背景线条样式
                        lineStyle: {
                            color: color.linearYtoG,
                            opacity: .6
                        }
                    },
                    splitArea: {
                        areaStyle: {
                            color: '#fff',
                            opacity: .1,
                            shadowBlur: 25,
                            shadowColor: '#000',
                            shadowOffsetX: 0,
                            shadowOffsetY: 5,
                        }
                    },
                    indicator: [{//雷达图的指示器，用来指定雷达图中的多个变量（维度）
                        name: '全程距离(m)',
                        max: maxData
                    }, {
                        name: '平均速度(km/h)',
                        max: 10
                    }, {
                        name: '最快速度(km/h)',
                        max: 12
                    }, {
                        name: '总计时间(h)',
                        max: 3.5
                    }]
                },
                grid: {
                    left: 90,
                    right: 80,
                    bottom: 40,
                    top: '60%',
                },
                xAxis: {
                    type: 'category',
                    position: 'bottom',
                    axisLine: true,
                    axisLabel: {
                        color: 'rgba(255,255,255,.8)',
                        fontSize: 12
                    },
                    data: weekCategory,
                },
                yAxis: {
                    name: 'km/h',
                    nameLocation: 'end',
                    nameGap: 24,
                    nameTextStyle: {
                        color: 'rgba(255,255,255,.5)',
                        fontSize: 14
                    },
                    max: maxData,
                    splitNumber: 4,

                    axisLine: {
                        lineStyle: {
                            opacity: 0
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#fff',
                            opacity: .1
                        }
                    },
                    axisLabel: {
                        color: 'rgba(255,255,255,.8)',
                        fontSize: 12

                    }
                },
                series: [{
                    name: '每日跑步指标分布与比较',
                    type: 'radar',
                    symbolSize: 0,
                    data: [{
                        value: radarDataAvg[6],
                        name: '平均指标',
                        itemStyle: {
                        normal: {
                            color: '#f8d351',
                        }
                        },
                        lineStyle: {
                            normal: {
                                opacity: 0,
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: '#f8d351',
                                shadowBlur: 25,
                                shadowColor: 'rgba(248,211,81,.3)',
                                shadowOffsetX: 0,
                                shadowOffsetY: -10,
                                opacity: 1
                            }
                        },
                    }, {
                    value: radarData[6],
                    name: '我的指标',
                    itemStyle: {
                        normal: {
                            color: '#43dfa2',
                        }
                    },
                    lineStyle: {
                        normal: {
                            opacity: 0,
                        }
                    },
                    areaStyle: {//区域填充色
                        normal: {
                            color: color.linearGtoB,//透明的渐变色
                            shadowBlur: 15,
                            shadowColor: 'rgba(0,0,0,.2)',
                            shadowOffsetX: 0,
                            shadowOffsetY: 5,
                            opacity: .8
                        }
                    },
                }]
                }, {
                name: '每日跑步里程',
                type: 'line',
                smooth: true,
                symbol: 'emptyCircle',
                symbolSize: 8,
                itemStyle: {
                    normal: {
                    color: '#fff'
                    }
                },
                lineStyle: {
                    normal: {
                        color: color.linearBtoG,
                        width: 3
                    }
                },
                areaStyle: {//折线图区域填充色
                    normal: {
                        color: color.areaBtoG,
                    }
                },
                data: weekLineData,
                lineSmooth: true,
                markLine: {
                    silent: true,
                    data: [{
                    type: 'average',
                    name: '平均值'
                    }],
                    precision: 0,
                    label: {
                    normal: {
                        formatter: '平均值: \n {c}'
                    }
                    },
                    lineStyle: {
                    normal: {
                        color: 'rgba(248,211,81,.7)'
                    }
                    }
                },
                tooltip: {
                    position: 'top',
                    formatter: '{c} m',
                    backgroundColor: 'rgba(28,152,232,.2)',
                    padding: 6
                }
                }, {
                name: '占位背景',
                type: 'bar',
                itemStyle: {
                    normal: {
                    show: true,
                    color: '#000',
                    opacity: 0
                    }
                },
                silent: true,
                barWidth: '50%',
                data: weekMaxData,
                animation: false
                }, {
                name: '占位背景',
                type: 'bar',
                itemStyle: {
                    normal: {
                    show: true,
                    color: '#000',
                    opacity: .1
                    }
                },
                silent: true,
                barWidth: '50%',
                barGap: 0,
                data: weekMaxData,
                animation: false
                }],
                backgroundColor: '#404a59',
            })
            //点击事件改变雷达图数据
            this.chart.on('click', (params) => {
                if (params.componentType === 'series' && params.seriesType === 'line') {
                var dataIndex = params.dataIndex;
                this.chart.setOption({
                    series: [{
                        name: '每日跑步指标分布与比较',
                        type: 'radar',
                        symbolSize: 0,
                        data: [{
                            name: '平均指标',
                            value: radarDataAvg[dataIndex],
                            itemStyle: {
                                normal: {
                                    color: '#f8d351',
                                }
                            },
                            lineStyle: {
                                normal: {
                                    opacity: 0,
                                }
                            },
                            areaStyle: {
                                normal: {
                                    color: '#f8d351',
                                    shadowBlur: 25,
                                    shadowColor: 'rgba(248,211,81,.3)',
                                    shadowOffsetX: 0,
                                    shadowOffsetY: -10,
                                    opacity: 1
                                }
                            },
                        }, {
                            name: '我的指标',
                            value: radarData[dataIndex],
                            itemStyle: {
                            normal: {
                                color: '#43dfa2',
                            }
                            },
                            lineStyle: {
                            normal: {
                                opacity: 0,
                            }
                            },
                            areaStyle: {
                            normal: {
                                color: color.linearGtoB,
                                shadowBlur: 15,
                                shadowColor: 'rgba(0,0,0,.2)',
                                shadowOffsetX: 0,
                                shadowOffsetY: 5,
                                opacity: .8
                            }
                            },
                        }]
                    }]
                })
                }
            });
        },
        refresh() {
            this.chart.clear()
            this.setOptions()
        }
    }
}
</script>
<style lang="scss" scoped>
    .complexChart {
        padding: 10px;
        background-color: #404a59;
    }
    .control {
        text-align: right;
    }
</style>