import axios from '../../axios.decoration'

//地图加载json经纬度

// export const getJson = (area) => axios.get(`/static/plugins/region/${area}.json`)

//风险概览
export const getPicture3 = (param) => axios.get('ffhj/overview/picture3',param);
export const getPicture = (param) => axios.get('ffhj/overview/picture',param);
export const getPicture1 = (param) => axios.get('ffhj/overview/picture1',param);
export const getPicture2 = (param) => axios.get('ffhj/overview/picture2',param);

//企业概览
export const getBasic = (param) => axios.get('/fk/basic',param);
export const getEntLabel = (param) => axios.get('qyhx/entLabel',param);
export const getGdjg = (param) => axios.get('/fk/investment',param);
export const getBasicShare = (param) => axios.get('/fk/BasicShareholder',param);
export const getRiskDetail = (param) => axios.get('qyhx/riskDetail',param);
export const getRiskAnalysis = (param) => axios.get('qyhx/riskAnalysis',param);

//企业风险
export const getEntRisklabel = (param) => axios.get('ffhj/entlabel',param);
export const getEntRiskPicture = (param) => axios.get('ffhj/ent/picture',param);
export const getEntRiskPicture1 = (param) => axios.get('ffhj/ent/picture1',param);

export const getJson = (area) => axios.get(`/static/plugins/amap/${area}.json`)
export const getTime = ()=> axios.get('/ffhj/date')//获取时间年月

/**
 * 区域风险
 */
//获取区域风险指标  ffhj/overview/picture1
export const getSummary = (params) => axios.get("/ffhj/area/picture",params);
//风险分析接口
export const getViewRiskAnalysis = (params) => axios.get("/ffhj/area/picture1",params);
//风险趋势
export const getRiskTrend =(params)=>axios.get("/ffhj/area/picture2",params);

export const getSortArea = params => axios.get("/ffhj/area/picture3", params);

// 行业风险
export const getIndustryEntLabel = (params = { id: 1 }) => axios.get('/ffhj/industry/label', params);

export const getIndustryPicture = (params) => axios.get('/ffhj/industry/picture', params);

export const getChartAnalysis = (params) => axios.get('/ffhj/industry/picture1', params);

export const getChartTrend = (params) => axios.get('/ffhj/industry/picture2', params);

export const getIndustryThermalMap = (params) => axios.postForm('/ffhj/industry/thermalmap', params)