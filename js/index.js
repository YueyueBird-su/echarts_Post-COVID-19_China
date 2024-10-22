// 1、实例化对象		--myChart
// 2、指定配置项和数据	--option
// 3、把配置项给实例
// 4、设置图表随窗口大小改变

//目前确诊和死亡人数
(function () {
	var myChart = echarts.init(document.querySelector('.line2 .chart'), 'myTheme');
	option = {
		title: {
			text: '全国累计死亡、确诊人数',
			left: 'center',
			top: 'top',
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend: {
			left: '4%',
			top: '11%',
			data: ['累计确诊（内地）', '死亡人数', '全国累计确诊']
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'value'
			}
		],
		yAxis: [
			{
				inverse: true,
				type: 'category',
				axisTick: {
					show: false
				},
				data: ['2020-12-20', '2020-12-19', '2020-12-18', '2020-12-17', '2020-12-16', '2020-12-15', '2020-12-14', '2020-12-13', '2020-12-12', '2020-12-11', '2020-12-10', '2020-12-09', '2020-12-08', '2020-12-07', '2020-12-06', '2020-12-05', '2020-12-04', '2020-12-03', '2020-12-02', '2020-12-01', '2020-11-30', '2020-11-29', '2020-11-28', '2020-11-27', '2020-11-26', '2020-11-25', '2020-11-24', '2020-11-23', '2020-11-22', '2020-11-21', '2020-11-20', '2020-11-19', '2020-11-18', '2020-11-17', '2020-11-16', '2020-11-15', '2020-11-14', '2020-11-13', '2020-11-12', '2020-11-11', '2020-11-10', '2020-11-09', '2020-11-08', '2020-11-07', '2020-11-06', '2020-11-05', '2020-11-04', '2020-11-03', '2020-11-02', '2020-11-01', '2020-10-31', '2020-10-30', '2020-10-29', '2020-10-28', '2020-10-27', '2020-10-26', '2020-10-25', '2020-10-24', '2020-10-23', '2020-10-22', '2020-10-21', '2020-10-20', '2020-10-19', '2020-10-18', '2020-10-17', '2020-10-16', '2020-10-15', '2020-10-14', '2020-10-13', '2020-10-12', '2020-10-11', '2020-10-10', '2020-10-09', '2020-10-08', '2020-10-07', '2020-10-06', '2020-10-05', '2020-10-04', '2020-10-03', '2020-10-02', '2020-10-01', '2020-09-30', '2020-09-29', '2020-09-28', '2020-09-27', '2020-09-26', '2020-09-25', '2020-09-24', '2020-09-23', '2020-09-22', '2020-09-21', '2020-09-20', '2020-09-19', '2020-09-18', '2020-09-17', '2020-09-16', '2020-09-15', '2020-09-14', '2020-09-13', '2020-09-12', '2020-09-11', '2020-09-10', '2020-09-09', '2020-09-08', '2020-09-07', '2020-09-06', '2020-09-05', '2020-09-04', '2020-09-03', '2020-09-02', '2020-09-01', '2020-08-31', '2020-08-30', '2020-08-29', '2020-08-28', '2020-08-27', '2020-08-26', '2020-08-25', '2020-08-24', '2020-08-23', '2020-08-22', '2020-08-21', '2020-08-20', '2020-08-19']
			}
		],
		dataZoom: [
			{
				type: 'slider',
				show: true,
				yAxisIndex: [0],
				left: '93%',
				start: 2,
				end: 0
			},
			{
				type: 'inside',
				yAxisIndex: [0],
				start: 2,
				end: 0
			}
		],
		series: [
			{
				name: '累计确诊（内地）',
				type: 'bar',
				label: {
					show: true,
					position: 'inside'
				},
				data: [86829, 86806, 86789, 86777, 86770, 86758, 86741, 86725, 86701, 86688, 86673, 86661, 86646, 86634, 86619, 86601, 86584, 86567, 86551, 86542, 86530, 86512, 86501, 86495, 86490, 86469, 86464, 86442, 86431, 86414, 86398, 86381, 86369, 86361, 86346, 86338, 86325, 86307, 86299, 86284, 86267, 86245, 86212, 86184, 86151, 86115, 86087, 86070, 86021, 85997, 85973, 85940, 85915, 85868, 85826, 85810, 85790, 85775, 85747, 85729, 85715, 85704, 85685, 85672, 85659, 85646, 85622, 85611, 85591, 85578, 85557, 85536, 85521, 85500, 85489, 85482, 85470, 85450, 85434, 85424, 85414, 85403, 85384, 85372, 85351, 85337, 85322, 85314, 85307, 85297, 85291, 85279, 85269, 85255, 85223, 85214, 85202, 85194, 85184, 85174, 85168, 85153, 85146, 85144, 85134, 85122, 85112, 85102, 85077, 85066, 85058, 85048, 85031, 85022, 85013, 85004, 84996, 84981, 84967, 84951, 84939, 84917, 84895, 84888, 86829, 86806]
			},
			{
				name: '全国累计确诊',
				type: 'bar',
				label: {
					show: true
				},
				data: [95716, 95580, 95491, 95375, 95279, 95167, 95064, 94950, 94849, 94749, 94618, 94500, 94383, 94293, 94160, 94038, 93905, 93797, 93668, 93577, 93465, 93329, 93225, 93113, 93025, 92914, 92829, 92733, 92648, 92588, 92544, 92513, 92490, 92476, 92452, 92428, 92404, 92372, 92336, 92299, 92271, 92242, 92195, 92164, 92121, 92077, 92045, 92015, 91955, 91921, 91893, 91852, 91821, 91772, 91725, 91701, 91675, 91653, 91621, 91588, 91565, 91546, 91507, 91490, 91460, 91436, 91399, 91388, 91359, 91333, 91305, 91278, 91252, 91212, 91188, 91170, 91146, 91121, 91101, 91082, 91061, 91041, 91018, 90993, 90966, 90951, 90933, 90918, 90908, 90890, 90876, 90840, 90814, 90797, 90753, 90734, 90718, 90695, 90666, 90643, 90623, 90595, 90582, 90573, 90551, 90517, 90498, 90475, 90442, 90422, 90402, 90383, 90351, 90323, 90301, 90271, 90239, 90205, 90182, 90141, 90103, 90053, 90013, 89980, 95716, 95580]
			},
			{
				name: '死亡人数',
				type: 'bar',
				label: {
					show: true,
					position: 'left'
				},
				data: [-4675, -4675, -4675, -4671, -4669, -4668, -4668, -4668, -4668, -4668, -4667, -4667, -4667, -4667, -4667, -4667, -4667, -4667, -4667, -4667, -4667, -4666, -4666, -4666, -4666, -4666, -4666, -4666, -4666, -4666, -4666, -4666, -4662, -4663, -4663, -4663, -4665, -4665, -4665, -4665, -4665, -4665, -4665, -4664, -4662, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4661, -4660, -4659, -4659, -4658, -4658, -4658, -4658, -4658, -4658, -4658, -4658, -4658, -4658, -4658, -4658, -4658, -4658, -4658, -4658, -4658, -4658, -4654, -4654, -4654, -4654, -4654, -4653, -4651, -4651, -4651, -4651, -4651, -4651, -4650, -4649, -4649, -4649, -4649, -4649, -4645, -4643, -4639, -4639, -4636, -4634, -4675, -4675]
			}
		]
	};
	// 3把配置项给实例对象
	myChart.setOption(option);
	//4图表跟随窗口大小改变
	window.addEventListener('resize', function () {
		myChart.resize();
	});
})();

// 柱状图2
(function () {

	var myColor = ["#c23531",
		"#2f4554",
		"#61a0a8",
		"#d48265",
		"#91c7ae",];
	// 1实例化对象
	var myChart = echarts.init(document.querySelector('.bar2 .chart'));
	//2指定配置项和数据
	option = {
		title: {
			text: '抗疫关键词',
			left: 'center',
			top: 'top',
		},
		grid: {
			top: "10%",
			left: "22%",
			bottom: "10%",
			// containLabel: true
		},
		xAxis: {
			show: false
		},
		yAxis: [{
			type: 'category',
			data: ['不惜代价', '举国之力', '联防联控', '“封城”', '敬老爱幼'],
			inverse: true,
			// 隐藏y轴
			axisLine: {
				show: false
			},
			// 隐藏刻度
			axisTick: {
				show: false
			},
			//字体设置为白色
			axisLabel: {
				color: "#black"
			}
		}, {
			inverse: true,
			data: ['√', '√', '√', '√', '√'],
			// 隐藏y轴
			axisLine: {
				show: false
			},
			// 隐藏刻度
			axisTick: {
				show: false
			},
			//字体设置为hei色
			axisLabel: {
				color: "#balck"
			}
		}],
		series: [{
			name: '条',
			type: 'bar',
			data: [100, 100, 100, 100, 100],
			yAxisIndex: 0,
			itemStyle: {
				barBorderRadius: 20,
				color: function (params) {
					// params 柱子对象
					return myColor[params.dataIndex];
				}
			},
			// 柱子间距
			barCategoryGap: 50,
			// 柱子宽度
			barWidth: 10,
			// 在柱状图上显示文字
			label: {
				show: true,
				position: "inside",
				formatter: "{c}%"
			}
		},
		{
			name: '框',
			type: 'bar',
			barCategoryGap: 50,
			barWidth: 15,
			yAxisIndex: 1,
			itemStyle: {
				color: "none",
				borderColor: "black",
				borderWidth: 3,
				barBorderRadius: 15
			},
			data: [100, 100, 100, 100, 100]
		}]
	};
	// 3把配置项给实例对象
	myChart.setOption(option);
	//4图表跟随窗口大小改变
	window.addEventListener('resize', function () {
		myChart.resize();
	});
})();

//目前确诊人数
(function () {
	var myChart = echarts.init(document.querySelector('.circle2 .chart'), 'myTheme');

	option = {
		title: {
			text: '全国当日确诊、重症人数',
			left: 'center',
			top: 'top',
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
			}
		},
		legend: {
			top: '11%',
			data: ['当天确诊人数', '重症患者人数']
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
		xAxis: [
			{
				inverse: true,
				type: 'category',
				boundaryGap: false,
				data: ['2020-12-20', '2020-12-19', '2020-12-18', '2020-12-17', '2020-12-16', '2020-12-15', '2020-12-14', '2020-12-13', '2020-12-12', '2020-12-11', '2020-12-10', '2020-12-09', '2020-12-08', '2020-12-07', '2020-12-06', '2020-12-05', '2020-12-04', '2020-12-03', '2020-12-02', '2020-12-01', '2020-11-30', '2020-11-29', '2020-11-28', '2020-11-27', '2020-11-26', '2020-11-25', '2020-11-24', '2020-11-23', '2020-11-22', '2020-11-21', '2020-11-20', '2020-11-19', '2020-11-18', '2020-11-17', '2020-11-16', '2020-11-15', '2020-11-14', '2020-11-13', '2020-11-12', '2020-11-11', '2020-11-10', '2020-11-09', '2020-11-08', '2020-11-07', '2020-11-06', '2020-11-05', '2020-11-04', '2020-11-03', '2020-11-02', '2020-11-01', '2020-10-31', '2020-10-30', '2020-10-29', '2020-10-28', '2020-10-27', '2020-10-26', '2020-10-25', '2020-10-24', '2020-10-23', '2020-10-22', '2020-10-21', '2020-10-20', '2020-10-19', '2020-10-18', '2020-10-17', '2020-10-16', '2020-10-15', '2020-10-14', '2020-10-13', '2020-10-12', '2020-10-11', '2020-10-10', '2020-10-09', '2020-10-08', '2020-10-07', '2020-10-06', '2020-10-05', '2020-10-04', '2020-10-03', '2020-10-02', '2020-10-01', '2020-09-30', '2020-09-29', '2020-09-28', '2020-09-27', '2020-09-26', '2020-09-25', '2020-09-24', '2020-09-23', '2020-09-22', '2020-09-21', '2020-09-20', '2020-09-19', '2020-09-18', '2020-09-17', '2020-09-16', '2020-09-15', '2020-09-14', '2020-09-13', '2020-09-12', '2020-09-11', '2020-09-10', '2020-09-09', '2020-09-08', '2020-09-07', '2020-09-06', '2020-09-05', '2020-09-04', '2020-09-03', '2020-09-02', '2020-09-01', '2020-08-31', '2020-08-30', '2020-08-29', '2020-08-28', '2020-08-27', '2020-08-26', '2020-08-25', '2020-08-24', '2020-08-23', '2020-08-22', '2020-08-21', '2020-08-20', '2020-08-19']
			}
		],
		yAxis: [
			{
				name: '人',
				type: 'value'
			}
		],
		series: [
			{
				name: '重症患者人数',
				type: 'line',
				stack: '总量',
				areaStyle: {},
				data: [5, 7, 8, 7, 8, 7, 7, 6, 5, 5, 5, 5, 6, 6, 6, 6, 5, 6, 8, 8, 7, 8, 8, 8, 7, 6, 6, 6, 5, 1, 1, 1, 3, 4, 4, 4, 3, 3, 3, 6, 6, 8, 7, 8, 9, 9, 9, 9, 12, 9, 9, 7, 7, 4, 4, 4, 3, 3, 3, 2, 3, 4, 4, 5, 5, 4, 4, 4, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 7, 10, 14, 16, 19, 20, 24, 26]
			},
			{
				name: '当天确诊人数',
				type: 'line',
				stack: '总量',
				areaStyle: {},
				data: [309, 307, 304, 301, 315, 312, 313, 306, 293, 292, 285, 284, 280, 281, 279, 273, 271, 266, 268, 277, 277, 280, 285, 303, 306, 305, 322, 315, 316, 308, 311, 314, 324, 353, 374, 385, 388, 394, 413, 422, 426, 424, 410, 419, 419, 400, 392, 391, 363, 359, 355, 339, 338, 298, 264, 265, 265, 265, 248, 245, 247, 258, 249, 252, 259, 253, 240, 241, 228, 230, 218, 206, 206, 200, 205, 213, 208, 195, 189, 189, 186, 191, 184, 185, 176, 167, 166, 167, 168, 166, 173, 168, 171, 165, 141, 143, 142, 145, 151, 154, 157, 161, 165, 175, 180, 186, 194, 205, 192, 198, 216, 237, 244, 262, 288, 324, 347, 386, 408, 422, 454, 491, 516, 569]
			}
		]
	};

	// 3把配置项给实例对象
	myChart.setOption(option);
	//4图表跟随窗口大小改变
	window.addEventListener('resize', function () {
		myChart.resize();
	});
})();

//线性回归分析
(function () {
	var myChart = echarts.init(document.querySelector('.bar .chart'), 'myTheme');

	var data = [
		[124, 10],
		[123, 16],
		[122, 11],
		[121, 6],
		[120, 9],
		[119, 8],
		[118, 9],
		[117, 14],
		[116, 17],
		[115, 7],
		[114, 5],
		[113, 1],
		[112, 5],
		[111, 6],
		[110, 2],
		[109, 12],
		[108, 12],
		[107, 6],
		[106, 3],
		[105, 5],
		[104, 17],
		[103, 10],
		[102, 4],
		[101, 8],
		[100, 5],
		[99, 6],
		[98, 8],
		[97, 10],
		[96, 11],
		[95, 18],
		[94, 14],
		[93, 10],
		[92, 5],
		[91, 12],
		[90, 14],
		[89, 6],
		[88, 10],
		[87, 15],
		[86, 6],
		[85, 15],
		[84, 25],
		[83, 9],
		[82, 36],
		[81, 27],
		[80, 33],
		[79, 24],
		[78, 128],
		[77, 61],
		[76, 30],
		[75, 69],
		[74, 38],
		[73, 53],
		[72, 16],
		[71, 38],
		[70, 50],
		[69, 161],
		[68, 19],
		[67, 27],
		[66, 11],
		[65, 25],
		[64, 15],
		[63, 24],
		[62, 33],
		[61, 34],
		[60, 11],
		[59, 10],
		[58, 23],
		[57, 18],
		[56, 17],
		[55, 32],
		[54, 23],
		[53, 39],
		[52, 15],
		[51, 8],
		[50, 24],
		[49, 31],
		[48, 27],
		[47, 26],
		[46, 12],
		[45, 33],
		[44, 10],
		[43, 22],
		[42, 26],
		[41, 14],
		[40, 26],
		[39, 30],
		[38, 18],
		[37, 20],
		[36, 18],
		[35, 15],
		[34, 25],
		[33, 21],
		[32, 24],
		[31, 20],
		[30, 14],
		[29, 16],
		[28, 9],
		[27, 39],
		[26, 70],
		[25, 8],
		[24, 22],
		[23, 15],
		[22, 8],
		[21, 13],
		[20, 17],
		[19, 17],
		[18, 8],
		[17, 26],
		[16, 12],
		[15, 19],
		[14, 34],
		[13, 19],
		[12, 4],
		[11, 10],
		[10, 16],
		[9, 19],
		[8, 14],
		[7, 16],
		[6, 27],
		[5, 15],
		[4, 34],
		[3, 23],
		[2, 22],
		[1, 14],
		['-', '-'],
		['-', '新增无症状感染']
	];

	var date = ['2020-12-20', '2020-12-19', '2020-12-18', '2020-12-17', '2020-12-16', '2020-12-15', '2020-12-14', '2020-12-13', '2020-12-12', '2020-12-11', '2020-12-10', '2020-12-09', '2020-12-08', '2020-12-07', '2020-12-06', '2020-12-05', '2020-12-04', '2020-12-03', '2020-12-02', '2020-12-01', '2020-11-30', '2020-11-29', '2020-11-28', '2020-11-27', '2020-11-26', '2020-11-25', '2020-11-24', '2020-11-23', '2020-11-22', '2020-11-21', '2020-11-20', '2020-11-19', '2020-11-18', '2020-11-17', '2020-11-16', '2020-11-15', '2020-11-14', '2020-11-13', '2020-11-12', '2020-11-11', '2020-11-10', '2020-11-09', '2020-11-08', '2020-11-07', '2020-11-06', '2020-11-05', '2020-11-04', '2020-11-03', '2020-11-02', '2020-11-01', '2020-10-31', '2020-10-30', '2020-10-29', '2020-10-28', '2020-10-27', '2020-10-26', '2020-10-25', '2020-10-24', '2020-10-23', '2020-10-22', '2020-10-21', '2020-10-20', '2020-10-19', '2020-10-18', '2020-10-17', '2020-10-16', '2020-10-15', '2020-10-14', '2020-10-13', '2020-10-12', '2020-10-11', '2020-10-10', '2020-10-09', '2020-10-08', '2020-10-07', '2020-10-06', '2020-10-05', '2020-10-04', '2020-10-03', '2020-10-02', '2020-10-01', '2020-09-30', '2020-09-29', '2020-09-28', '2020-09-27', '2020-09-26', '2020-09-25', '2020-09-24', '2020-09-23', '2020-09-22', '2020-09-21', '2020-09-20', '2020-09-19', '2020-09-18', '2020-09-17', '2020-09-16', '2020-09-15', '2020-09-14', '2020-09-13', '2020-09-12', '2020-09-11', '2020-09-10', '2020-09-09', '2020-09-08', '2020-09-07', '2020-09-06', '2020-09-05', '2020-09-04', '2020-09-03', '2020-09-02', '2020-09-01', '2020-08-31', '2020-08-30', '2020-08-29', '2020-08-28', '2020-08-27', '2020-08-26', '2020-08-25', '2020-08-24', '2020-08-23', '2020-08-22', '2020-08-21', '2020-08-20', '2020-08-19'];

	var myRegression = ecStat.regression('linear', data);

	myRegression.points.sort(function (a, b) {
		return a[0] - b[0];
	});

	option = {
		title: {
			text: '无症状感染人数线性回归结果',
			left: 'center',
			top: 'top',
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross'
			}
		},
		xAxis: {
			type: 'value',
			axisLabel: {
				show: true,
				formatter: '第{value} 天'
			},
			splitLine: {
				lineStyle: {
					type: 'dashed'
				}
			}
		},
		yAxis: {
			type: 'value',
			min: 1.5,

			splitLine: {
				lineStyle: {
					type: 'dashed'
				}
			},
		},
		dataZoom: [
			{
				type: 'slider',
				show: true,
				xAxisIndex: [0],
				start: 70,
				end: 100
			},
			{
				type: 'inside',
				xAxisIndex: [0],
				start: 70,
				end: 100
			}
		],
		series: [{
			name: '无症状感染人数',
			type: 'scatter',
			emphasis: {
				label: {
					show: true,
					position: 'left',
					color: 'blue',
					fontSize: 16
				}
			},
			data: data
		}, {
			name: '线性拟合值',
			type: 'line',
			showSymbol: false,
			data: myRegression.points,
			markPoint: {
				itemStyle: {
					color: 'transparent'
				},
				label: {
					show: true,
					position: 'left',
					formatter: myRegression.expression,
					color: '#333',
					fontSize: 14
				},
				data: [{
					coord: myRegression.points[myRegression.points.length - 1]
				}]
			}
		}]
	};

	myChart.setOption(option);
	//4图表跟随窗口大小改变
	window.addEventListener('resize', function () {
		myChart.resize();
	});
})();

//新增人数阶梯图
(function () {
	var myChart = echarts.init(document.querySelector('.circle .chart'), 'myTheme');

	option = {
		title: {
			text: '全国当日新增确诊、疑似病例人数',
			left: 'center',
			top: 'top',
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['当日新增确诊人数', '当日疑似病例人数'],
			top: '11%'
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		toolbox: {
			feature: {
				saveAsImage: {}
			}
		},
		xAxis: {
			inverse: true,
			type: 'category',
			data: ['2020-12-20', '2020-12-19', '2020-12-18', '2020-12-17', '2020-12-16', '2020-12-15', '2020-12-14', '2020-12-13', '2020-12-12', '2020-12-11', '2020-12-10', '2020-12-09', '2020-12-08', '2020-12-07', '2020-12-06', '2020-12-05', '2020-12-04', '2020-12-03', '2020-12-02', '2020-12-01', '2020-11-30', '2020-11-29', '2020-11-28', '2020-11-27', '2020-11-26', '2020-11-25', '2020-11-24', '2020-11-23', '2020-11-22', '2020-11-21', '2020-11-20', '2020-11-19', '2020-11-18', '2020-11-17', '2020-11-16', '2020-11-15', '2020-11-14', '2020-11-13', '2020-11-12', '2020-11-11', '2020-11-10', '2020-11-09', '2020-11-08', '2020-11-07', '2020-11-06', '2020-11-05', '2020-11-04', '2020-11-03', '2020-11-02', '2020-11-01', '2020-10-31', '2020-10-30', '2020-10-29', '2020-10-28', '2020-10-27', '2020-10-26', '2020-10-25', '2020-10-24', '2020-10-23', '2020-10-22', '2020-10-21', '2020-10-20', '2020-10-19', '2020-10-18', '2020-10-17', '2020-10-16', '2020-10-15', '2020-10-14', '2020-10-13', '2020-10-12', '2020-10-11', '2020-10-10', '2020-10-09', '2020-10-08', '2020-10-07', '2020-10-06', '2020-10-05', '2020-10-04', '2020-10-03', '2020-10-02', '2020-10-01', '2020-09-30', '2020-09-29', '2020-09-28', '2020-09-27', '2020-09-26', '2020-09-25', '2020-09-24', '2020-09-23', '2020-09-22', '2020-09-21', '2020-09-20', '2020-09-19', '2020-09-18', '2020-09-17', '2020-09-16', '2020-09-15', '2020-09-14', '2020-09-13', '2020-09-12', '2020-09-11', '2020-09-10', '2020-09-09', '2020-09-08', '2020-09-07', '2020-09-06', '2020-09-05', '2020-09-04', '2020-09-03', '2020-09-02', '2020-09-01', '2020-08-31', '2020-08-30', '2020-08-29', '2020-08-28', '2020-08-27', '2020-08-26', '2020-08-25', '2020-08-24', '2020-08-23', '2020-08-22', '2020-08-21', '2020-08-20', '2020-08-19']
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
				name: '当日新增确诊人数',
				type: 'line',
				step: 'start',
				data: [23, 17, 12, 7, 12, 17, 16, 24, 13, 15, 12, 15, 12, 15, 18, 17, 17, 16, 9, 12, 18, 11, 6, 5, 21, 5, 22, 11, 17, 16, 17, 12, 8, 15, 8, 13, 18, 8, 15, 17, 22, 33, 28, 33, 36, 28, 17, 49, 24, 24, 33, 25, 47, 42, 16, 20, 15, 28, 18, 14, 11, 19, 13, 13, 13, 24, 11, 20, 13, 21, 21, 15, 21, 11, 7, 12, 20, 16, 10, 10, 11, 19, 12, 21, 14, 15, 8, 7, 10, 6, 12, 10, 14, 32, 9, 12, 8, 10, 10, 6, 15, 7, 2, 10, 12, 10, 10, 25, 11, 8, 10, 17, 9, 9, 9, 8, 15, 14, 16, 12, 22, 22, 7, 17]
			},
			{
				name: '当日疑似病例人数',
				type: 'line',
				step: 'start',
				data: [4, 5, 4, 4, 3, 2, 2, 2, 3, 3, 3, 3, 3, 5, 9, 8, 8, 8, 7, 6, 7, 7, 4, 4, 5, 2, 1, 3, 5, 3, 1, 4, 2, 2, 3, 2, 1, 2, 2, 1, 2, 5, 6, 23, 26, 4, 2, 2, 1, 1, 5, 6, 1, 1, 2, 6, 5, 5, 7, 5, 5, 6, 3, 4, 5, 5, 7, 5, 7, 9, 9, 4, 5, 5, 4, 4, 6, 7, 4, 3, 3, 2, 1, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 3, 0, 1, 1, 1, 6, 1, 1, 2, 1, 3, 0, 1, 0, 1, 2, 2, 3, 1, 1, 2, 2, 3, 1, 1, 2, 2]
			}
		]
	};


	// 3把配置项给实例对象
	myChart.setOption(option);

	//4图表跟随窗口大小改变
	window.addEventListener('resize', function () {
		myChart.resize();
	});
})();



//
(function () {
	var myChart = echarts.init(document.querySelector('.line .chart'), 'myTheme');

	var option = {
		title: {
			text: '港澳台、境外输入、内地确诊，治愈、死亡比例',
			left: 'center',
			top: 'top',
		},
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		legend: {
			top:70,
			itemGap:0,
			align:'left',
			orient: 'vertical',
			left: 2,
			data: ['治愈', '死亡', '治愈（境外输入）', '治愈（内地）', '治愈（港澳台）', '死亡（境外输入）', '死亡（内地）', '死亡（港澳台）']
		},
		series: [
			{
				name: '人数',
				type: 'pie',
				selectedMode: 'single',
				radius: [0, '30%'],

				label: {
					position: 'inner'
				},
				labelLine: {
					show: false
				},
				data: [
					{ value: 93807, name: '治愈' },
					{ value: 4909, name: '死亡', selected: true },
				]
			},
			{
				name: '人数',
				type: 'pie',
				radius: ['40%', '55%'],
				// label: {
				// 	formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
				// 	backgroundColor: '#eee',
				// 	borderColor: '#aaa',
				// 	borderWidth: 1,
				// 	borderRadius: 4,
				// 	rich: {
				// 		a: {
				// 			color: '#999',
				// 			lineHeight: 2,
				// 			align: 'center'
				// 		},
				// 		hr: {
				// 			borderColor: '#aaa',
				// 			width: '100%',
				// 			borderWidth: 0.5,
				// 			height: 0
				// 		},
				// 		b: {
				// 			fontSize: 10,
				// 			lineHeight: 3
				// 		},
				// 		per: {
				// 			color: '#eee',
				// 			backgroundColor: '#334455',
				// 			padding: [2, 4],
				// 			borderRadius: 2
				// 		}
				// 	}
				// },
				data: [
					{ value: 81886, name: '治愈（内地）' },
					{ value: 7673, name: '治愈（港澳台）' },
					{ value: 4248, name: '治愈（境外输入）' },
					{ value: 4770, name: '死亡（内地）' },
					{ value: 139, name: '死亡（港澳台）' },
					{ value: 0, name: '死亡（境外输入）' }
				]
			}
		]
	};

	// 3把配置项给实例对象
	myChart.setOption(option);

	//4图表跟随窗口大小改变
	window.addEventListener('resize', function () {
		myChart.resize();
	});
})();

// //对比图
// (function () {
// 	//var myChart = echarts.init(document.querySelector('.line .chart'), 'myTheme');


// 	var timeData = ['2020-12-20', '2020-12-19', '2020-12-18', '2020-12-17', '2020-12-16', '2020-12-15', '2020-12-14', '2020-12-13', '2020-12-12', '2020-12-11', '2020-12-10', '2020-12-09', '2020-12-08', '2020-12-07', '2020-12-06', '2020-12-05', '2020-12-04', '2020-12-03', '2020-12-02', '2020-12-01', '2020-11-30', '2020-11-29', '2020-11-28', '2020-11-27', '2020-11-26', '2020-11-25', '2020-11-24', '2020-11-23', '2020-11-22', '2020-11-21', '2020-11-20', '2020-11-19', '2020-11-18', '2020-11-17', '2020-11-16', '2020-11-15', '2020-11-14', '2020-11-13', '2020-11-12', '2020-11-11', '2020-11-10', '2020-11-09', '2020-11-08', '2020-11-07', '2020-11-06', '2020-11-05', '2020-11-04', '2020-11-03', '2020-11-02', '2020-11-01', '2020-10-31', '2020-10-30', '2020-10-29', '2020-10-28', '2020-10-27', '2020-10-26', '2020-10-25', '2020-10-24', '2020-10-23', '2020-10-22', '2020-10-21', '2020-10-20', '2020-10-19', '2020-10-18', '2020-10-17', '2020-10-16', '2020-10-15', '2020-10-14', '2020-10-13', '2020-10-12', '2020-10-11', '2020-10-10', '2020-10-09', '2020-10-08', '2020-10-07', '2020-10-06', '2020-10-05', '2020-10-04', '2020-10-03', '2020-10-02', '2020-10-01', '2020-09-30', '2020-09-29', '2020-09-28', '2020-09-27', '2020-09-26', '2020-09-25', '2020-09-24', '2020-09-23', '2020-09-22', '2020-09-21', '2020-09-20', '2020-09-19', '2020-09-18', '2020-09-17', '2020-09-16', '2020-09-15', '2020-09-14', '2020-09-13', '2020-09-12', '2020-09-11', '2020-09-10', '2020-09-09', '2020-09-08', '2020-09-07', '2020-09-06', '2020-09-05', '2020-09-04', '2020-09-03', '2020-09-02', '2020-09-01', '2020-08-31', '2020-08-30', '2020-08-29', '2020-08-28', '2020-08-27', '2020-08-26', '2020-08-25', '2020-08-24', '2020-08-23', '2020-08-22', '2020-08-21', '2020-08-20', '2020-08-19', '2020-12-20'];

// 	var option = {
// 		tooltip: {
// 			trigger: 'axis',
// 			axisPointer: {
// 				animation: false
// 			}
// 		},
// 		legend: {
// 			data: ['国内确诊治愈出院人数', '境外输入确诊治愈出院人数'],
// 			left: 10
// 		},
// 		toolbox: {
// 			feature: {
// 				dataZoom: {
// 					yAxisIndex: 'none'
// 				},
// 				restore: {},
// 				saveAsImage: {}
// 			}
// 		},
// 		axisPointer: {
// 			link: { xAxisIndex: 'all' }
// 		},
// 		dataZoom: [
// 			{
// 				show: true,
// 				realtime: true,
// 				start: 70,
// 				end: 0,
// 				xAxisIndex: [0, 1]
// 			},
// 			{
// 				type: 'inside',
// 				realtime: true,
// 				start: 70,
// 				end: 0,
// 				xAxisIndex: [0, 1]
// 			}
// 		],
// 		grid: [{
// 			left: 50,
// 			right: 50,
// 			height: '35%'
// 		}, {
// 			left: 50,
// 			right: 50,
// 			top: '55%',
// 			height: '35%'
// 		}],
// 		xAxis: [
// 			{
// 				inverse: true,
// 				type: 'category',
// 				boundaryGap: false,
// 				axisLine: { onZero: true },
// 				data: timeData
// 			},
// 			{
// 				inverse: true,
// 				gridIndex: 1,
// 				type: 'category',
// 				boundaryGap: false,
// 				axisLine: { onZero: true },
// 				data: timeData,
// 				position: 'top'
// 			}
// 		],
// 		yAxis: [
// 			{
// 				name: '国内确诊治愈出院人数(人)',
// 				type: 'value',
// 				min: 70000
// 			},
// 			{
// 				gridIndex: 1,
// 				name: '境外输入确诊治愈出院人数(人)',
// 				type: 'value',
// 				inverse: true,
// 				min: 2000
// 			}
// 		],
// 		series: [
// 			{
// 				name: '国内确诊治愈出院人数',
// 				type: 'line',
// 				symbolSize: 8,
// 				hoverAnimation: false,
// 				data: [81886, 81865, 81851, 81842, 81821, 81812, 81794, 81785, 81774, 81762, 81754, 81743, 81732, 81719, 81706, 81694, 81679, 81667, 81649, 81631, 81619, 81598, 81582, 81558, 81550, 81530, 81508, 81493, 81481, 81472, 81453, 81433, 81411, 81374, 81338, 81319, 81303, 81279, 81252, 81228, 81207, 81187, 81168, 81131, 81098, 81081, 81061, 81045, 81024, 81004, 80984, 80967, 80943, 80936, 80928, 80911, 80891, 80876, 80865, 80850, 80834, 80812, 80802, 80786, 80766, 80759, 80748, 80736, 80729, 80714, 80705, 80696, 80681, 80666, 80650, 80635, 80628, 80621, 80611, 80601, 80594, 80578, 80566, 80553, 80541, 80536, 80522, 80513, 80505, 80497, 80484, 80477, 80464, 80456, 80448, 80437, 80426, 80415, 80399, 80386, 80377, 80358, 80347, 80335, 80320, 80302, 80284, 80263, 80251, 80234, 80208, 80177, 80153, 80126, 80091, 80046, 80015, 79961, 79925, 79895, 79851, 79792, 79745, 79685, 81886, 81865]
// 			},
// 			{
// 				name: '境外输入确诊治愈出院人数',
// 				type: 'line',
// 				xAxisIndex: 1,
// 				yAxisIndex: 1,
// 				symbolSize: 8,
// 				hoverAnimation: false,
// 				data: [3848, 3829, 3817, 3808, 3795, 3787, 3771, 3762, 3752, 3743, 3738, 3727, 3716, 3703, 3690, 3680, 3666, 3654, 3638, 3621, 3609, 3589, 3573, 3551, 3543, 3523, 3501, 3486, 3474, 3465, 3446, 3430, 3412, 3382, 3348, 3337, 3325, 3308, 3286, 3274, 3258, 3240, 3224, 3199, 3171, 3155, 3136, 3120, 3100, 3080, 3060, 3044, 3022, 3017, 3009, 2993, 2974, 2959, 2948, 2933, 2918, 2897, 2887, 2871, 2851, 2844, 2833, 2821, 2814, 2799, 2790, 2781, 2766, 2751, 2735, 2720, 2713, 2706, 2696, 2686, 2679, 2663, 2651, 2638, 2626, 2621, 2607, 2598, 2590, 2582, 2569, 2562, 2549, 2541, 2533, 2522, 2511, 2500, 2484, 2471, 2462, 2443, 2432, 2420, 2408, 2397, 2383, 2364, 2356, 2341, 2327, 2311, 2300, 2285, 2271, 2243, 2229, 2213, 2203, 2190, 2176, 2164, 2148, 2127, 3848]
// 			}
// 		]
// 	};

// 	// 3把配置项给实例对象
// 	myChart.setOption(option);

// 	//4图表跟随窗口大小改变
// 	window.addEventListener('resize', function () {
// 		myChart.resize();
// 	});
// })();
