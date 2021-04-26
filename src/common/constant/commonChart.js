
export const commonChart = ( (id,isEnlarge=true)=>{
    let chart;
    chart= echarts.init(document.getElementById(''+id+''));
    chart.setOption(options);
    window.addEventListener("resize",function(){
        chart.resize();
    });
    return chart;
});
export const options = {
    color:['#02FBFC','#6388FF','#D8FF6C'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            snap:true,
        },
        showContent:true,//是否显示提示框浮层
        label:{
            show:true,
            color:'#fff',
        },
        textStyle:{
            fontSize:16
        }
    },
    legend: {
        show:false,
        textStyle:{
            fontSize:14
        }
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '2%',
        top:'10%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        show:true,
        axisLine:{
            show:true,
            lineStyle:{
                color:'rgba(77, 253, 250, 0.5)',
            }
        },
        splitLine: {
            show: true,
            interval:0,
            lineStyle: {
                color: 'rgba(77, 253, 250, .1)'
            }
        },
        axisTick:{
            show:false,
        },
        axisLabel:{
            color:'#fff',
            fontSize:14
        },
        data:[]
    },
    yAxis : [
        {
            type : 'value',
            axisLine:{
                show:true,
                lineStyle:{
                    color:'rgba(77, 253, 250, 0.5)',
                }
            },
            splitLine: {
                show: true,
                interval:0,
                lineStyle: {
                    color: 'rgba(77, 253, 250, .1)'
                }
            },
            axisLabel:{
                color:'#fff',
                fontSize:14
            },
            nameTextStyle:{
                color:'#fff'
            },
            axisTick:{
                show:false,
            }
        },{
            type : 'value',
            axisLine:{
                show:true,
                lineStyle:{
                    color:'rgba(77, 253, 250, 0.5)',
                }
            },
            axisLabel:{
                color:'#fff',
                fontSize:14
            },
            nameTextStyle:{
                color:'#fff'
            },
            position:'right',
            splitLine: {
                show: false,
            },
            axisTick:{
                show:false,
            }
        }
    ],
    series:[{
        type: 'line',
        symbolSize:8,
        symbol:'circle',
        smooth:true,
        lineStyle:{
            width:3,
        }
    },{
        type: 'line',
        symbolSize:8,
        symbol:'circle',
        smooth:true,
        lineStyle:{
            width:3
        }
    }],
    textStyle:{
        fontSize:14
    }
};

export const newIndexChart = ( (id,isEnlarge=true)=>{
    let chart;
    chart= echarts.init(document.getElementById(''+id+''));
    chart.setOption(newIndexOptions);
    window.addEventListener("resize",function(){
        chart.resize();
    });
    return chart;
});

export const newIndexOptions = {
    color:['#02FBFC','#6388FF'],
    legend: {
        left: 0,
        top:'top',
        textStyle: {
            color: '#fff'
        }
    },
    grid: {
        show:true,
        borderColor:'transparent',
        left:"0",
        top:"30",
        right:'5',
        bottom:'5',
        containLabel: false
    },
    tooltip: {
        trigger: 'axis',

        axisPointer:{
            type: 'line',
            snap:true,
            label: {
                padding:[5,10],
                backgroundColor: 'transparent'
            },
            lineStyle:{
                color:'#fff',
                type:'dashed'
            }
        }
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: true,
            interval:0,
            lineStyle: {
                color: 'rgba(77, 253, 250, .18)'
            }
        },
        axisLine:{
            show:true,
            lineStyle:{
                color:'rgba(77, 253, 250, 0.5)',
            }
        },
        axisTick:{
            show:false,
        },
        boundaryGap:true,
        axisLabel:{
            show:false,
            // fontStyle:12,
            // margin:2,
            color:'#fff',
        },
        data: []
    },
    yAxis:{
        type: 'value',
        splitLine: {
            show: true,
            interval:0,
            lineStyle: {
                color: 'rgba(77, 253, 250, .18)'
            }
        },
        max: function(value) {
            return value.max*2;
        },
        axisLabel : {
            show:false,
            color:'#fff',
        },
        axisLine:{
            // show:false,
            lineStyle:{
                color:'rgba(77, 253, 250, 0.5)',
            }

        },
        axisTick:{
            show:false,
        }
    },
    series: [{
        type: 'line',
        symbolSize:6,
        symbol:'circle',
        smooth:true,
        lineStyle:{
            width:3
        },
        label: {
            show: true,
            position: 'top',
            color: '#FFF',
            formatter:function (e) {
                return e.dataIndex%2!==0?e.value:'';
            }
        },
        areaStyle: {
            opacity:0.05,
            // color:'rgba(255, 255, 255, 0.1)'
        }
    },{
        type: 'line',
        symbolSize:6,
        symbol:'circle',
        smooth:true,
        lineStyle:{
            width:3
        },
        label: {
            show: true,
            position: 'top',
            color: '#FFF',
            formatter:function (e) {
                return e.dataIndex%2===0?e.value:'';
            }
        },
        areaStyle: {
            opacity:0.05,
            // color:'rgba(255, 255, 255, 0.1)'
        }
    },{
        type: 'line',
        symbolSize:6,
        symbol:'circle',
        smooth:true,
        lineStyle:{
            width:3
        },
        label: {
            show: true,
            position: 'top',
            color: '#FFF',
            formatter:function (e) {
                return '{c}'
            }
        },
        areaStyle: {
            opacity:0.05,
            // color:'rgba(255, 255, 255, 0.1)'
        }
    }]

};
export const riskLineOption = {
    color:['#1890FF','#2FC25B','#FF6600','#393AF7','#01BBCF','#62B84E','#F56C89','#FFD200','#FF74FF','#0088B8','#ADACFF','#6B51FF'],
    legend:{
        show:true,
        data:[],
        left:'2%',
        itemWidth:7,
        itemHeight:10,
    },
    tooltip:{
        trigger:'axis'
    },
    xAxis: {
        type: 'category',
        data: [],
        axisTick:{show:false},
        splitLine:{show:false},
        axisLine:{
            lineStyle:{
                color:'#E9E9E9'
            }
        },
        axisLabel:{
            color:'rgba(0,0,0,0.65)'
        }
    },
    yAxis: {
        type: 'value',
        axisTick:{show:false},
        splitLine:{show:false},
        axisLine:{show:false},
    },
    grid:{
        left:'4%',
    },
    series: []
}

export const riskMapOption={
    tooltip : {
        trigger: 'item',
    },
     visualMap: {
        type:'continuous',
        min: 0,
        max: 100,
        color: ['rgba(16,41,211,0.8)','rgba(16,41,211,0.7)','rgba(16,41,211,0.6)','rgba(16,41,211,0.4)','rgba(16,41,211,0.2)'],
        orient:'horizontal',
        right:'0%',
        inverse:true,
        itemWidth:10,
        itemHeight:150,
        calculable:true,
        outOfRange: {
            color: ['rgba(24,144, 255,.05)']
        }
    },
    series:[ {
        name:'区域预警热力图',
        type:'map',
        mapType: 'zhejiang',
        roam: false,
        itemStyle:{
            normal:{label:{show:true}},
            emphasis:{label:{show:true}}
        },
        center:[121.4,29.1],//右减少    下增大
        zoom:1.2,
        data:[],
        label: {
            normal:{
                show: true,
                textStyle: {
                    color: 'rgba(16,41,211,1)'
                },
            },
            emphasis:{
                show: true,
                textStyle: {
                    color: '#1029D3'
                },
            }
        },
        itemStyle: {
            normal:{
                areaColor: 'rgba(24,144, 255,.05)',
                borderColor: 'rgba(16,41, 211,.8)',
                borderWidth: 1,
            },
            emphasis:{
                areaColor:'rgba(24,144, 255,.05)',
                borderWidth:1.5,
            }
        },
    }]
}

//可视化公共echart配置项
//pie--饼图
export const  visualizedPieOption={
    color:[],
    tooltip: {
        trigger: 'item'
    },
    series: [
        {
            name:'',
            type:'pie',
            stillShowZeroSum:true,
            radius: ['20%', '38%'],
            // avoidLabelOverlap: false,
            // minAngle: 20,
            label: {
                show:true,
                color:'#F9E85B',
                fontSize: 14,
                formatter: '{b}\n{d}%'
            },
            labelLine: {
                show: true,
                lineStyle:{
                    color:'#F9E85B'
                }
            },
            itemStyle:{
                borderWidth:8,
                borderColor:'rgba(12,53,96,1)',
            },
            data:[]
        }
    ]
}
//横向柱状图
export const rowBarOption={
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        left: '20%', 
    },
    xAxis: {
        type: 'value',
        show:true,
        nameLocation:'start',
        axisLine:{
            show:true,
            lineStyle:{
                color:'#00E5FF',
            }
        },
        axisLabel:{
            show:true,
            color:'#00E5FF',
        },
        splitLine:{
            show:true,
            lineStyle:{
                color:'#00E5FF',
                type:'dashed'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: [],
        axisLine:{
            show:true,
             lineStyle:{
                color:'#00E5FF',
            }
        },
        axisLabel:{
            show:true,
            color:'#00E5FF',
            interval:0,
            fontSize: 16,
            formatter:function(value){
                if(value.length>8){
                    return value.substring(0,6)+'...';
                }else{
                    return value
                }
            }
        },
    },
    grid:{
        top:25,
        bottom:30,
        left:'20%',
    },
    series: [
        {
            name: '',
            type: 'bar',
            data: [],
            itemStyle:{
                color:{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#00FFFB' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#F7F47D' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            label:{
                show:true,
                color:'#00FFFB',
                position:'right'
            }
        }
    ]
}