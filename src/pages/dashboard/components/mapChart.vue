<template>
    <div class="mapChart">
        <div id="mapChart" style="height:600px;width:100%;"></div>
        <div class="control">
            <el-button size="mini" type="primary" @click="refresh">刷新</el-button>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
import resize from '../mixins/resize.js'
require ('echarts/theme/macarons')
require('echarts/map/js/china.js')
import {geoCoordMap,data,data2} from './mapData.js'
export default {
    name: 'mapChart',
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
            this.chart = echarts.init(document.getElementById('mapChart'),'macarons')
            this.setOptions()
        },
        setOptions() {
            //处理经纬度和数据
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            }
            this.chart.setOption({
                backgroundColor: '#404a59',
                title: {
                    text: '全国城市未来降水量',
                    subtext: '单位：mm（毫米）',
                    sublink: 'http://www.pm25.in',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                },
                legend: {
                    orient: 'vertical',
                    top: 50,
                    left: 0,
                    data:['pm2.5'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                visualMap: {
                    min: 0,
                    max: 300,
                    calculable: true,
                    left: 30,
                    bottom: 50,
                    //splitNumber: 5,//分割试图映射区域
                    //color: ['#d94e5d','#eac736','#50a3ba'],//渐变色
                    textStyle: {
                        color: '#fff'
                    }
                },
                geo: {//地理坐标系组件根据经纬度绘制城市，如果在series中设置只有各省份与省会城市
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: '#fff',
                            borderColor: '#111'
                        },
                        emphasis: {
                            //areaColor: '#2a333d'
                        }
                    }
                },
                series: [
                    {
                        name: '全国未来降水量',
                        type: 'map',
                        mapType: 'china',
                        roam: false,
                        //coordinateSystem: 'geo',
                        data: data2,
                        symbolSize: 12,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                borderColor: '#fff',
                                areaColor: '#b3e5fa',//区域填充颜色
                                borderWidth: 1
                            }
                        }
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
    .mapChart {
        padding: 10px;
        background-color: #404a59;
    }
    .control {
        text-align: right;
    }
</style>