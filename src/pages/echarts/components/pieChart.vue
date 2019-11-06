<template>
    <div class="pieChart">
        <div id="pieChart" style="height:300px;width:100%;"></div>
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
    name: 'pieChart',
    mixins: [resize],
    data() {
        return {
            chart: null
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initCharts()
        })
    },
    methods: {
        initCharts() {
            this.chart = echarts.init(document.getElementById('pieChart'),'macarons')
            this.setOptions()
        },
        setOptions() {
            this.chart.setOption({
                 title : {
                    text: '南丁格尔玫瑰图',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    x : 'center',
                    y : 'bottom',
                    data:['rose1','rose2','rose3','rose4','rose5']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        magicType : {
                            show: true,
                            type: ['pie', 'funnel']
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    },
                    right: 20,
                    
                },
                calculable : true,
                series : [
                    {
                        name:'面积模式',
                        type:'pie',
                        radius : [30, 110],
                        roseType : 'area',
                        data:[
                            {value:10, name:'rose1'},
                            {value:5, name:'rose2'},
                            {value:15, name:'rose3'},
                            {value:25, name:'rose4'},
                            {value:20, name:'rose5'},
                        ],
                        animationDuration: 800
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
    .pieChart {
        padding: 10px;
    }
    .control {
        text-align: right;
    }
</style>