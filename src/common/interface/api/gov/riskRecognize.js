import axios from '../../axios.decoration'

//风险识别
export const getNoSurveyPageList  = params => axios.get('/ffhj/riskInvestigation/getNoList', params);// 未调查列表
export const getNoSurveyTop = params => axios.get('/ffhj/riskInvestigation/getNoTop', params);//根据id获取公司信息
export const uploadSurveyForm = params => axios.upload('/ffhj/riskInvestigation/doInvestigation', params) // 上传表单的url
export const uploadSurveyUrl = '/ffhj/riskInvestigation/upload'
export const getSurveyPageList= params => axios.get('/ffhj/riskInvestigation/getList', params);
export const getInvestigation = params => axios.get('/ffhj/riskInvestigation/getInvestigation', params);
export const updateInvesigation = params => axios.postForm('/ffhj/riskInvestigation/updateInvestigation', params);
export const reportSurvey = params => axios.get('/ffhj/riskInvestigation/doButton', params);
// 风险补充
export const getUserArea = params => axios.get('/ffhj/supplement/userarea', params);
export const getUerEntList = params => axios.get('/ffhj/supplement/userent', params);
export const saveSupplement = params => axios.postForm('/ffhj/supplement/save', params);
export const getSupplementList = params => axios.get('ffhj/supplement/list', params);
export const delSupplement = params => axios.get('/ffhj/supplement/delete', params);
export const getSupplementById = params => axios.get('/ffhj/supplement/one', params);
export const updateSupplement = params => axios.postForm('/ffhj/supplement/update', params);
export const downloadFile = (params, filename) => axios.download('/ffhj/supplement/download', params, filename);
export const reportSupplement = params => axios.get('/ffhj/supplement/report', params);
export const getButtonStatus = () => axios.get('ffhj/supplement/button');
//风险预警看板
export const getRiskExample = (params) => axios.get('/ffhj/riskwarn/count',params);

//风险信号清单
export const getRiskSignalTopData = (params = {type: 'ent'}) => axios.get('/ffhj/theme/getRiskTopData', params)
// export const getRiskMessage = (params) => axios.get('/ffhj/fxjc_theme/theme', params);

export const getRiskSignalList = (params) => axios.get('/ffhj/theme/getRiskList', params)
// export const getTableList = (params) => axios.get('/ffhj/fxjc_risk/signallist', params);

export const getRiskExcel = (params, filename) => axios.download('/ffhj/fxjc_risk/excel', params, filename);

//预警信号清单
export const getTheme = (params) => axios.get('/ffhj/fxjc_warn/theme', params);//获取主题数据

export const getWarnTopData = params => axios.get('/ffhj/theme/getWarmTopData', params);//获取顶部信息

export const getWarnlist = (params) => axios.get('/ffhj/theme/getWarmList', params);//获取表格列表

export const getExcel = (params, filename) => axios.download('/ffhj/fxjc_warn/excel', params, filename);//导出

// 风险预警清单
export const getRiskWarnList  = params => axios.get('/ffhj/theme/getRiskWarmList', params);

// 导出接口
export const exportWarnRiskEntList = (params, filename) => axios.download('/ffhj/riskwarn/excelent', params, filename);

export const exportWarnRiskAreaList = (params, filename) => axios.download('/ffhj/riskwarn/excelarea', params, filename);

export const exportWarnRiskIndustryList= (params, filename) => axios.download('/ffhj/riskwarn/excelindustry', params, filename);

//风险警情表 
export const getRiskList = (params) => axios.get('/fxjcTheme/getAllThemeWithSignalInfo',params)




//风险审核
export const getOverView = (params) => axios.get('/ffhj/riskReview/mainPage',params)

export const getReviewList = (params) => axios.get('/ffhj/riskReview/getList',params)

export const getDetail = (params) => axios.get('/ffhj/riskReview/getReview',params)

export const doReview = (params) => axios.postForm('/ffhj/riskReview/doReview',params)
export const getButtons = (params) => axios.get("/ffhj/riskReview/getButton",params)
export const doReport = (params) => axios.postForm("/ffhj/riskReview/doButtonReport",params)
export const backToCounty = (params) => axios.postForm("/ffhj/riskReview/doButtonReturn",params)

