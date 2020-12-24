(function () {
    var myChart = echarts.init(document.querySelector('.mapBox .chart'), 'myTheme');

    var data = [
        [{
            "date": "2020-01-20",
            "name": "北京",
            "value": "5"
        },
        {
            "date": "2020-01-20",
            "name": "上海",
            "value": "1"
        },
        {
            "date": "2020-01-20",
            "name": "湖北",
            "value": "239"
        },
        {
            "date": "2020-01-20",
            "name": "广东",
            "value": "14"
        },
        ],
        [{
            "date": "2020-03-01",
            "name": "北京",
            "value": "124"
        },
        {
            "date": "2020-03-01",
            "name": "天津",
            "value": "22"
        },
        {
            "date": "2020-03-01",
            "name": "河北",
            "value": "18"
        },
        {
            "date": "2020-03-01",
            "name": "山西",
            "value": "17"
        },
        {
            "date": "2020-03-01",
            "name": "内蒙古",
            "value": "24"
        },
        {
            "date": "2020-03-01",
            "name": "辽宁",
            "value": "18"
        },
        {
            "date": "2020-03-01",
            "name": "吉林",
            "value": "14"
        },
        {
            "date": "2020-03-01",
            "name": "黑龙江",
            "value": "117"
        },
        {
            "date": "2020-03-01",
            "name": "上海",
            "value": "44"
        },
        {
            "date": "2020-03-01",
            "name": "江苏",
            "value": "95"
        },
        {
            "date": "2020-03-01",
            "name": "浙江",
            "value": "155"
        },
        {
            "date": "2020-03-01",
            "name": "安徽",
            "value": "96"
        },
        {
            "date": "2020-03-01",
            "name": "福建",
            "value": "48"
        },
        {
            "date": "2020-03-01",
            "name": "江西",
            "value": "84"
        },
        {
            "date": "2020-03-01",
            "name": "山东",
            "value": "297"
        },
        {
            "date": "2020-03-01",
            "name": "河南",
            "value": "45"
        },
        {
            "date": "2020-03-01",
            "name": "湖北",
            "value": "30543"
        },
        {
            "date": "2020-03-01",
            "name": "湖南",
            "value": "138"
        },
        {
            "date": "2020-03-01",
            "name": "广东",
            "value": "309"
        },
        {
            "date": "2020-03-01",
            "name": "广西",
            "value": "62"
        },
        {
            "date": "2020-03-01",
            "name": "海南",
            "value": "12"
        },
        {
            "date": "2020-03-01",
            "name": "重庆",
            "value": "120"
        },
        {
            "date": "2020-03-01",
            "name": "四川",
            "value": "157"
        },
        {
            "date": "2020-03-01",
            "name": "贵州",
            "value": "30"
        },
        {
            "date": "2020-03-01",
            "name": "云南",
            "value": "9"
        },
        {
            "date": "2020-03-01",
            "name": "西藏",
            "value": "0"
        },
        {
            "date": "2020-03-01",
            "name": "陕西",
            "value": "35"
        },
        {
            "date": "2020-03-01",
            "name": "甘肃",
            "value": "5"
        },
        {
            "date": "2020-03-01",
            "name": "青海",
            "value": "0"
        },
        {
            "date": "2020-03-01",
            "name": "宁夏",
            "value": "5"
        },
        {
            "date": "2020-03-01",
            "name": "新疆",
            "value": "9"
        },
        {
            "date": "2020-03-01",
            "name": "台湾",
            "value": "27"
        },
        {
            "date": "2020-03-01",
            "name": "香港",
            "value": "60"
        },
        {
            "date": "2020-03-01",
            "name": "澳门",
            "value": "2"
        }
        ],
        [
            {
                "date": "2020-12-20",
                "name": "香港",
                "value": "8152"
            },
            {
                "date": "2020-12-20",
                "name": "台湾",
                "value": "766"
            },
            {
                "date": "2020-12-20",
                "name": "上海",
                "value": "1447"
            },
            {
                "date": "2020-12-20",
                "name": "广东",
                "value": "2028"
            },
            {
                "date": "2020-12-20",
                "name": "四川",
                "value": "840"
            },
            {
                "date": "2020-12-20",
                "name": "福建",
                "value": "505"
            },
            {
                "date": "2020-12-20",
                "name": "内蒙古",
                "value": "344"
            },
            {
                "date": "2020-12-20",
                "name": "陕西",
                "value": "504"
            },
            {
                "date": "2020-12-20",
                "name": "云南",
                "value": "227"
            },
            {
                "date": "2020-12-20",
                "name": "山东",
                "value": "861"
            },
            {
                "date": "2020-12-20",
                "name": "北京",
                "value": "961"
            },
            {
                "date": "2020-12-20",
                "name": "黑龙江",
                "value": "961"
            },
            {
                "date": "2020-12-20",
                "name": "浙江",
                "value": "1299"
            },
            {
                "date": "2020-12-20",
                "name": "江苏",
                "value": "684"
            },
            {
                "date": "2020-12-20",
                "name": "河南",
                "value": "1297"
            },
            {
                "date": "2020-12-20",
                "name": "天津",
                "value": "304"
            },
            {
                "date": "2020-12-20",
                "name": "山西",
                "value": "223"
            },
            {
                "date": "2020-12-20",
                "name": "辽宁",
                "value": "291"
            },
            {
                "date": "2020-12-20",
                "name": "广西",
                "value": "264"
            },
            {
                "date": "2020-12-20",
                "name": "宁夏",
                "value": "75"
            },
            {
                "date": "2020-12-20",
                "name": "湖北",
                "value": "68149"
            },
            {
                "date": "2020-12-20",
                "name": "澳门",
                "value": "46"
            },
            {
                "date": "2020-12-20",
                "name": "西藏",
                "value": "1"
            },
            {
                "date": "2020-12-20",
                "name": "青海",
                "value": "18"
            },
            {
                "date": "2020-12-20",
                "name": "安徽",
                "value": "992"
            },
            {
                "date": "2020-12-20",
                "name": "海南",
                "value": "171"
            },
            {
                "date": "2020-12-20",
                "name": "吉林",
                "value": "157"
            },
            {
                "date": "2020-12-20",
                "name": "重庆",
                "value": "590"
            },
            {
                "date": "2020-12-20",
                "name": "甘肃",
                "value": "182"
            },
            {
                "date": "2020-12-20",
                "name": "新疆",
                "value": "980"
            },
            {
                "date": "2020-12-20",
                "name": "贵州",
                "value": "147"
            },
            {
                "date": "2020-12-20",
                "name": "江西",
                "value": "935"
            },
            {
                "date": "2020-12-20",
                "name": "湖南",
                "value": "1020"
            },
            {
                "date": "2020-12-20",
                "name": "河北",
                "value": "373"
            }
        ]
    ];

    option = {
        timeline: {
            checkpointStyle: {
                color: '#FFB6C1'
            },
            axisType: 'category',
            data: ['2020-01-20', '2020-03-01', '2020-12-20'],
            playInterval: 1000,
            left: '10%',
            right: '10%'
        },
        baseOption: {
            title: {
                text: '各省累计病例分层设色图(含港澳台)',
                subtext: '数据来源：国家卫生健康委员会官方网站',
                left: 'center',
                top: 'top',
                textStyle: {
                    color:'#000',
                    fontSize: 32,
                },
                subtextStyle: {
                    color:'000',
                    fontSize: 20,
                }
            },
            visualMap: {
                max: 3000,
                calculable: true,
                inRange: {
                    color: ['#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                }
            },
            tooltip: {},
            series: [{
                type: 'map',
                name: '确诊人数',
                map: 'china',
            }
            ]
        },
        options: [{
            series: [{
                data: data[0]
            }],
        }, {
            series: [{
                data: data[1]
            }],
        }, {
            series: [{
                data: data[2]
            }],
        }]
    };

    // 3把配置项给实例对象
    myChart.setOption(option);
    //4图表跟随窗口大小改变
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();
