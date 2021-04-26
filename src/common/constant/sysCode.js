export const surveyStatusMap = {
    1: "未上报",
    2: "已上报",
    3: "退回",
    4: "已通过"
}
export const companyOriginMap = [
    "地方补充",
    "平台预警"
]
export const riskRecognizeJudgeMap = {
    1: "排除风险",
    2: "存在隐患",
    3: "已经出险"
}
export const getRiskJudge = (judge)=>{
    return riskRecognizeJudgeMap[judge]
}
export const riskSupplementMap = {
    2: "存在隐患",
    3: "已经出险"
}
export const getriskRecognizeType = (type)=>{
    let arr = type.split(",");
    let rtn = arr.map(v=>{
        return riskRecognizeTypeMap[v]
    })
    return rtn.join(",")
}
export const riskRecognizeTypeMap = {
    1: "“两链”风险",
    2: "债务风险",
    3: "投资风险",
    4: "经营风险",
    5: "贸易风险",
    6: "政策风险",
    7: "资不抵债",
    8: "其他风险"
}

// 企业风险等级
export const riskLevelLabelCompany = [
    "一级",
    "二级",
    "三级",
]

// 可视化模块的风险等级
export const riskLevelLabelView = [
    "一级",
    "二级",
    "三级",
    "四级"
]

export const riskLevelLabel = [
    "无风险",
    "一级",
    "二级",
    "三级",
    "四级"
]
export const WARNTHEMEMAP = [,'ent', 'area', 'industry'];
//监控状态
export const monitoringStatus = [
    {
        value: "",
        label: '全部'
    }, {
        value: 1,
        label: '是'
    }, {
        value: 0,
        label: '否'
    },
];
//企业管理表格表头
export const entManageTitleData=[
    // {prop:'index',label:'序号',width:''},
    {prop:'entName',label:'企业名称',width:'',show:true},
    {prop:'creditCode',label:'社会统一信用代码',width:''},
    {prop:'area',label:'地区',width:''},
    {prop:'industry',label:'行业名称',width:''},
    // {prop:'name',label:'企业标签',width:''},
    // {prop:'',label:'是否监控',width:''}
];
//数据类型
export const dataType = {
    B: '企业源表',
    C: '区域源表',
    D: '行业源表'
}
export const dataTypeAll = {
    A: '企业名录',
    B: '企业源表',
    C: '区域源表',
    D: '行业源表'
}
//更新方式
export const updateMode = {
    1: '批量新增',
    2: '全量替换',
    3: '新建数据源'
}
export const dialogUpdateMode = {
    1: '批量新增',
    2: '全量替换'
}
//生产数据表格表头
export const productionDataTitleData = [
    { prop: '', label: '序号', width: '' },
    { prop: '', label: '企业名称', width: '' },
    { prop: '', label: '社会统一信用代码', width: '' },
    { prop: '', label: '地区', width: '' },
    { prop: '', label: '行业名称', width: '' },
    { prop: '', label: '数据时间', width: '' },
    { prop: '', label: '用电量', width: '' },
    { prop: '', label: '单位', width: '' },
];
//预警级别
export const alarmLevelOptions = [
    {
        value: '一级',
        label: '一级'
    }, {
        value: '二级',
        label: '二级'
    }, {
        value: '三级',
        label: '三级'
    }, 
];
//企业风险散点图数据
export const entDistricts = [
    { 'name': '杭州市', 'center': '120.153576,30.287459',entName:'浙江杭州阿里科技有限公司',riskLabel:['经营风险','生产经营风险一级'],riskIndex:9.2,riskLevel:5,creditCode:1},
    { 'name': '宁波市', 'center': '121.549792,29.868388',entName:'浙江杭州亚信科技有限公司',riskLabel:['经营风险','经营风险'],riskIndex:8.2,riskLevel:4,creditCode:2},
    { 'name': '温州市', 'center': '120.672111,28.000575',entName:'浙江杭州麻麻科技有限公司',riskLabel:['经营风险','生产经营'],riskIndex:7.2,riskLevel:3,creditCode:3},
    { 'name': '嘉兴市', 'center': '120.750865,30.762653',entName:'浙江杭州阿里科技有限公司',riskLabel:['经营风险','生产经营风险一级'],riskIndex:6.2,riskLevel:2,creditCode:4},
    { 'name': '湖州市', 'center': '120.102398,30.867198',entName:'浙江杭州阿里科技有限公司',riskLabel:['经营风险','生产经营风险一级'],riskIndex:5.2,riskLevel:1,creditCode:5},
    { 'name': '绍兴市', 'center': '120.582112,29.997117',entName:'浙江杭州阿里科技有限公司',riskLabel:['经营风险','生产经营风险一级'],riskIndex:4.2,riskLevel:5,creditCode:6},
    { 'name': '金华市', 'center': '119.649506,29.089524',entName:'浙江杭州阿里科技有限公司',riskLabel:['经营风险','生产经营风险一级'],riskIndex:3.2,riskLevel:4,creditCode:7},
    { 'name': '衢州市', 'center': '118.87263,28.941708',entName:'浙江杭州阿里科技有限公司',riskLabel:['经营风险','生产经营风险一级'],riskIndex:2.2,riskLevel:3,creditCode:8},
    { 'name': '舟山市', 'center': '122.106863,30.016028',entName:'浙江杭州阿里科技有限公司',riskLabel:['经营风险','生产经营风险一级'],riskIndex:1.2,riskLevel:2,creditCode:9},
    { 'name': '台州市', 'center': '121.428599,28.661378',entName:'浙江杭州阿里科技有限公司',riskLabel:['经营风险','生产经营风险一级'],riskIndex:0.2,riskLevel:1,creditCode:10},
    { 'name': '杭州市2', 'center': '119.153576,29.287459',entName:'浙江杭州阿里科技有限公司',riskLabel:['经营风险','生产经营风险一级'],riskIndex:9.3,riskLevel:5,creditCode:11},
    { 'name': '宁波市2', 'center': '120.549792,28.868388',entName:'浙江杭州亚信科技有限公司',riskLabel:['经营风险','经营风险'],riskIndex:8.3,riskLevel:4,creditCode:12},
    { 'name': '温州市2', 'center': '120.672111,27.000575',entName:'浙江杭州麻麻科技有限公司',riskLabel:['经营风险','生产经营'],riskIndex:7.3,riskLevel:3,creditCode:13},
    { 'name': '嘉兴市2', 'center': '119.750865,29.762653',entName:'浙江杭州阿里科技有限公司',riskLabel:['经营风险','生产经营风险一级'],riskIndex:6.3,riskLevel:2,creditCode:14},
    { 'name': '湖州市2', 'center': '119.102398,29.867198',entName:'浙江杭州阿里科技有限公司',riskLabel:['经营风险','生产经营风险一级'],riskIndex:5.3,riskLevel:1,creditCode:15},
    { 'name': '绍兴市2', 'center': '119.582112,28.997117',entName:'浙江杭州阿里科技有限公司',riskLabel:['经营风险','生产经营风险一级'],riskIndex:4.3,riskLevel:5,creditCode:16},
    { 'name': '金华市2', 'center': '118.649506,28.089524',entName:'浙江杭州阿里科技有限公司',riskLabel:['经营风险','生产经营风险一级'],riskIndex:3.3,riskLevel:4,creditCode:17},
    { 'name': '衢州市2', 'center': '117.87263,27.941708',entName:'浙江杭州阿里科技有限公司',riskLabel:['经营风险','生产经营风险一级'],riskIndex:2.3,riskLevel:3,creditCode:18},
    { 'name': '舟山市2', 'center': '121.106863,29.016028',entName:'浙江杭州阿里科技有限公司',riskLabel:['经营风险','生产经营风险一级'],riskIndex:1.3,riskLevel:2,creditCode:19},
    { 'name': '台州市2', 'center': '120.428599,27.661378',entName:'浙江杭州阿里科技有限公司',riskLabel:['经营风险','生产经营风险一级'],riskIndex:0.3,riskLevel:1,creditCode:20},
]
//企业类型
export const entType = [
    {
        value: 0,
        label: '全部'
    }, {
        value: 1,
        label: '企业性质'
    }, {
        value: 2,
        label: '企业规模'
    }, {
        value: 3,
        label: '企业专项'
    }
];
//企业标签
export const entLabel = [
    {
        value: 0,
        label: '全部'
    }, {
        value: 1,
        label: '国有企业'
    }, {
        value: 2,
        label: '民营企业'
    }, {
        value: 3,
        label: '合资企业'
    }, {
        value: 4,
        label: '外资企业'
    }, {
        value: 5,
        label: '港澳台企业'
    }
];
//风险类型
export const riskType = [
    {
        value: 0,
        label: '全部'
    }, {
        value: 1,
        label: '生产经营'
    }, {
        value: 2,
        label: '投融资'
    }, {
        value: 3,
        label: '异常事件'
    }, {
        value: 4,
        label: '外部环境'
    }, 
];
