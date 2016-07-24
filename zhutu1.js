var myChart = echarts.init(document.getElementById('con_one_1'));

option = {
    title: {
        text: '分时平均'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['3603','3604','3605','3606','3607']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['0:00','6:00','12:00','18:00','24:00'],
            splitLine: {show: false}
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: {show: false}
        }
    ],
    series : [
        {
            name:'3603',
            type:'line',
            data:[3, 5, 11, 15, 9]
        },
        {
            name:'3604',
            type:'line',
            data:[6, 17, 12, 20, 18]
        },
        {
            name:'3605',
            type:'line',
            data:[9, 40, 50, 100, 20]
        },
        {
            name:'3606',
            type:'line',
            data:[1, 15, 13, 20, 4]
        },
        {
            name:'3607',
            type:'line',
            data:[12,24, 32, 15, 24]
        }
    ]
};

myChart.setOption(option);

var dataPic1 = echarts.init(document.getElementById('con_one_2'));
        var option1 = {
    title: {
        text: '工作日平均'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['3603','3604','3605','3606','3607']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五'],
            splitLine: {show: false}
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: {show: false}
        }
    ],
    series : [
        {
            name:'3603',
            type:'line',
            data:[120, 132, 101, 134, 90]
        },
        {
            name:'3604',
            type:'line',
            data:[220, 182, 191, 234, 290]
        },
        {
            name:'3605',
            type:'line',
            data:[250, 292, 301, 454, 230]
        },
        {
            name:'3606',
            type:'line',
            data:[320, 332, 301, 334, 390]
        },
        {
            name:'3607',
            type:'line',
            data:[104, 123, 150, 130, 102]
        }
    ]
};
        dataPic1.setOption(option1);
var dataPic2 = echarts.init(document.getElementById('con_one_3'));
        var option2 = {
        title: {
        text: '正常刷卡数'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['3603','3604','3605','3606','3607']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五'],
            splitLine: {show: false}
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: {show: false}
        }
    ],
    series : [
        {
            name:'3603',
            type:'line',
            data:[5, 2, 12, 16, 13]
        },
        {
            name:'3604',
            type:'line',
            data:[7, 15, 17, 15, 19]
        },
        {
            name:'3605',
            type:'line',
            data:[14, 20, 25, 33, 20]
        },
        {
            name:'3606',
            type:'line',
            data:[5, 16, 24, 26, 15]
        },
        {
            name:'3607',
            type:'line',
            data:[12,24, 32, 15, 24]
        }
    ]
};
        dataPic2.setOption(option2);
        
var dataPic3 = echarts.init(document.getElementById('con_one_4'));
        var option3 = {
        title: {
        text: '本周数据'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['3603','3604','3605','3606','3607']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五'],
            splitLine: {show: false}
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: {show: false}
        }
    ],
    series : [
        {
            name:'3603',
            type:'line',
            data:[20, 17, 14, 23, 17]
        },
        {
            name:'3604',
            type:'line',
            data:[21, 13, 17, 21, 19]
        },
        {
            name:'3605',
            type:'line',
            data:[17, 10, 31, 21, 13]
        },
        {
            name:'3606',
            type:'line',
            data:[5, 16, 24, 26, 15]
        },
        {
            name:'3607',
            type:'line',
            data:[16,21, 12, 25, 18]
        }
    ]
};
        dataPic3.setOption(option3);
        
var dataPic4 = echarts.init(document.getElementById('con_one_5'));
        var option4 = {
        title: {
        text: '本月数据'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['3603','3604','3605','3606','3607']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['第一周','第二周','第三周','第四周','第五周'],
            splitLine: {show: false}
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine: {show: false}
        }
    ],
    series : [
        {
            name:'3603',
            type:'line',
            data:[20, 17, 14, 23]
        },
        {
            name:'3604',
            type:'line',
            data:[21, 13, 21, 19]
        },
        {
            name:'3605',
            type:'line',
            data:[17, 31, 21, 13]
        },
        {
            name:'3606',
            type:'line',
            data:[5, 16, 24, 15]
        },
        {
            name:'3607',
            type:'line',
            data:[16,21, 12, 18]
        }
    ]
};
        dataPic4.setOption(option4);
