// 颜色设置
export  let color = {
    linearYtoG: {//雷达图背景线条渐变色
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#f5b44d'
        }, {
            offset: 1,
            color: '#28f8de'
        }]
    },
    linearGtoB: {//雷达填充渐变颜色
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#43dfa2'
        }, {
            offset: 1,
            color: '#28f8de'
        }]
    },
    linearBtoG: {//折线颜色
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#1c98e8'
        }, {
            offset: 1,
            color: '#28f8de'
        }]
    },
    areaBtoG: {//折线图填充区域的渐变颜色
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgba(35,184,210,.2)'
        }, {
            offset: 1,
            color: 'rgba(35,184,210,0)'
        }]
    }
};