// 柱状图1模块
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "北京",
          "上海",
          "天津",
          "重庆",
          "黑龙江",
          "吉林",
          "辽宁",
          "内蒙古",
          "河北",
          "山西",
          "陕西",
          "山东",
          "新疆",
          "西藏",
          "青海",
          "甘肃",
          "宁夏",
          "河南",
          "江苏",
          "湖北",
          "浙江",
          "安徽",
          "福建",
          "江西",
          "湖南",
          "贵州",
          "四川",
          "广东",
          "云南",
          "广西",
          "海南",
          "香港",
          "澳门",
          "台湾"

        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "洁净度",
        type: "bar",
        barWidth: "35%",
        data: [
            92,
            80,
            100,
            83,
            98,
            98,
            9,
            100,
            89,
            98,
            98,
            78,
            73,
            76,
            98
        ],
        itemStyle: {
          barBorderRadius: 10
        }
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  // 数据变化
  var dataAll = [

  ];

  $(".bar h2 ").on("click", "a", function () {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();

// 折线图定制
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"));

  // (1)准备数据
  var data = {
    year: [
      [5,8,13,20,25,28,30,30,26],
      [-5,-2,3,9,14,18,21,20,16]
    ]
  };

  // 2. 指定配置和数据
  var option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis"
    },
    legend: {
      // 距离容器10%
      right: "10%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#4c9bfd"
      }

    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        name: "最高气温/℃",
        type: "line",
        stack: "总量",
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0]
      },
      {
        name: "最低气温/℃",
        type: "line",
        stack: "总量",
        smooth: true,
        data: data.year[1]
      }
    ]
  };
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 饼形图定制
// 折线图定制
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function (p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      data: ["中部", "东部", "西部", "南部", "北部"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "地区分布",
        type: "pie",
        center: ["50%", "42%"],
        radius: ["40%", "60%"],
        color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
          "#06b4ab",
          "#06c8ab",
          "#06dcab",
          "#06f0ab"
        ],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 1, name: "西部" },
          { value: 4, name: "东部" },
          { value: 2, name: "南部" },
          { value: 2, name: "中部" },
          { value: 1, name: "北部" }
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 学习进度柱状图模块
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  var data = [15.14,50.05,1.51,30.28,3.03];
  var titlename = ["中部", "东部", "西部", "南部", "北部"];
  var valdata = [1000,3306,99.9,2000,200];
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  option = {
    //图标位置
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff",

          rich: {
            lg: {
              backgroundColor: "#339911",
              color: "#fff",
              borderRadius: 15,
              // padding: 5,
              align: "center",
              width: 15,
              height: 15
            }
          }
        }
      },
      {
        show: true,
        inverse: true,
        data: valdata,
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: data,
        barCategoryGap: 50,
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color: function (params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num];
            }
          }
        },
        label: {
          normal: {
            show: true,
            position: "inside",
            formatter: "{c}%"
          }
        }
      },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 50,
        data: [100, 100, 100, 100, 100],
        barWidth: 15,
        itemStyle: {
          normal: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15
          }
        }
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 折线图 优秀作品
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b"
        }
      }
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },

        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30"
        ]
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20
      }
    ],

    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "横波",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          20,
          40,
          30,
          60,
          20,
          40,
          20,
          40
        ]
      },
      {
        name: "纵波",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          50,
          30,
          50,
          60,
          10,
          50,
          30,
          50,
          60,
          40,
          60,
          40,
          80,
          30,
          50,
          60,
          10,
          50,
          30,
          70,
          20,
          50,
          10,
          40,
          50,
          30,
          70,
          20,
          50,
          10,
          40
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 点位分布统计模块
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie1  .chart"));
  // 2. 指定配置项和数据
  var option = {
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 注意颜色写的位置
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    series: [
      {
        name: "点位统计",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "42%"],
        roseType: "radius",
        data: [
          { value: 20.3935, name: "俄罗斯" },
          { value: 12.3267, name: "巴西" },
          { value: 8.6846, name: "加拿大" },
          { value: 7.7674, name: "美国" },
          { value: 5.2521, name: "中国" },
          { value: 3.8106, name: "刚果" },
          { value: 3.1297, name: "澳大利亚" },
          { value: 38.6354, name: "其他" }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10
        }
      }
    ]
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();
