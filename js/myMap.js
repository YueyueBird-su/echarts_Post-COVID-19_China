(function () {
// echarts.init(dom容器);
var myChart = echarts.init(document.querySelector(".mapObject .chart"));
// 指定配置项和数据
var data = [
	[
		{
			"date": "2020-12-20",
			"name": "香港",
			"value": "1186"
		},
		{
			"date": "2020-12-20",
			"name": "台湾",
			"value": "132"
		},
		{
			"date": "2020-12-20",
			"name": "上海",
			"value": "94"
		},
		{
			"date": "2020-12-20",
			"name": "广东",
			"value": "41"
		},
		{
			"date": "2020-12-20",
			"name": "四川",
			"value": "37"
		},
		{
			"date": "2020-12-20",
			"name": "福建",
			"value": "26"
		},
		{
			"date": "2020-12-20",
			"name": "内蒙古",
			"value": "17"
		},
		{
			"date": "2020-12-20",
			"name": "陕西",
			"value": "16"
		},
		{
			"date": "2020-12-20",
			"name": "云南",
			"value": "14"
		},
		{
			"date": "2020-12-20",
			"name": "山东",
			"value": "13"
		},
		{
			"date": "2020-12-20",
			"name": "北京",
			"value": "12"
		},
		{
			"date": "2020-12-20",
			"name": "黑龙江",
			"value": "12"
		},
		{
			"date": "2020-12-20",
			"name": "浙江",
			"value": "8"
		},
		{
			"date": "2020-12-20",
			"name": "江苏",
			"value": "6"
		},
		{
			"date": "2020-12-20",
			"name": "河南",
			"value": "6"
		},
		{
			"date": "2020-12-20",
			"name": "天津",
			"value": "5"
		},
		{
			"date": "2020-12-20",
			"name": "山西",
			"value": "3"
		},
		{
			"date": "2020-12-20",
			"name": "辽宁",
			"value": "2"
		},
		{
			"date": "2020-12-20",
			"name": "广西",
			"value": "1"
		},
		{
			"date": "2020-12-20",
			"name": "宁夏",
			"value": "0"
		},
		{
			"date": "2020-12-20",
			"name": "湖北",
			"value": "0"
		},
		{
			"date": "2020-12-20",
			"name": "澳门",
			"value": "0"
		},
		{
			"date": "2020-12-20",
			"name": "西藏",
			"value": "0"
		},
		{
			"date": "2020-12-20",
			"name": "青海",
			"value": "0"
		},
		{
			"date": "2020-12-20",
			"name": "安徽",
			"value": "0"
		},
		{
			"date": "2020-12-20",
			"name": "海南",
			"value": "0"
		},
		{
			"date": "2020-12-20",
			"name": "吉林",
			"value": "0"
		},
		{
			"date": "2020-12-20",
			"name": "重庆",
			"value": "0"
		},
		{
			"date": "2020-12-20",
			"name": "甘肃",
			"value": "0"
		},
		{
			"date": "2020-12-20",
			"name": "新疆",
			"value": "0"
		},
		{
			"date": "2020-12-20",
			"name": "贵州",
			"value": "0"
		},
		{
			"date": "2020-12-20",
			"name": "江西",
			"value": "0"
		},
		{
			"date": "2020-12-20",
			"name": "湖南",
			"value": "0"
		},
		{
			"date": "2020-12-20",
			"name": "河北",
			"value": "0"
		}
	]
	];
	
	option = {
	   timeline: {
			checkpointStyle: {
				color: '#FFB6C1'
			},
			axisType: 'category',
			data: ['2020-12-20'],
			playInterval: 1000,
			left: '10%',
			right: '10%'
		},
		baseOption: {
		title : {
					text: '各省新增病例分层设色图(含港澳台)',
					subtext: '数据来源：国家卫生健康委员会官方网站',
					left: 'center',
					top: 20,
					textStyle: {
						color:'rgba(0,0,0,0.5)',
						fontSize:20,
					},
					subtextStyle:{
						fontSize:15,
					}
				},
			visualMap: {
				max: 100,
				calculable: true,
				inRange: {
					color: ['#fff', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
				}
			},
			tooltip: {},
			series: [{
					type: 'map',
					name: '新增确诊人数',
					map: 'china',
					roam: true
				}
			]
		},
		options: [{
			series: [{
					data: data[0]
			}]
		}]
	};
//配置项给实例对象
myChart.setOption(option);

  //图表跟随窗口大小改变
  window.addEventListener('resize', function () {
    myChart.resize();
  });
})();