// 数据
var dateBase = new Date();
export var year = dateBase.getFullYear();
var dottedBase = +dateBase + 1000 * 3600 * 24;
export var weekCategory = [];

export var radarData = [];
export var radarDataAvg = [];
export var maxData = 12000;
export var weekMaxData = [];
export var weekLineData = [];


// 周数据
for (var i = 0; i < 7; i++) {
    // 日期
    var date = new Date(dottedBase -= 1000 * 3600 * 24);
    weekCategory.unshift([
    date.getMonth() + 1,
    date.getDate()
    ].join('/'));

    // 折线图数据
    weekMaxData.push(maxData);
    var distance = Math.round(Math.random() * 11000 + 500);
    weekLineData.push(distance);

    // 雷达图数据
    // 我的指标
    var averageSpeed = +(Math.random() * 5 + 3).toFixed(3);
    var maxSpeed = averageSpeed + (+(Math.random() * 3).toFixed(2));
    var hour = +(distance / 1000 / averageSpeed).toFixed(1);
    var radarDayData = [distance, averageSpeed, maxSpeed, hour];
    radarData.unshift(radarDayData);

    // 平均指标
    var distanceAvg = Math.round(Math.random() * 8000 + 4000);
    var averageSpeedAvg = +(Math.random() * 4 + 4).toFixed(3);
    var maxSpeedAvg = averageSpeedAvg + (+(Math.random() * 2).toFixed(2));
    var hourAvg = +(distance / 1000 / averageSpeed).toFixed(1);
    var radarDayDataAvg = [distanceAvg, averageSpeedAvg, maxSpeedAvg, hourAvg];
    radarDataAvg.unshift(radarDayDataAvg);
}