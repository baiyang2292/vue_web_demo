import axios from '../../axios.decoration'

export const addNode  = (params)=>axios.request({url:'/ffhj/import/insertDictLable',params}) //新增节点
export const getNodes = (params)=>axios.get('/ffhj/import/showDictLable',params)//获取tree 结构
export const updateNode = (params)=>axios.request({url:'/ffhj/import/updateDictLable',params})//更新节点
export const deleteNode = (params)=>axios.request({url:'/ffhj/import/deleteDictLable',params})//删除某个节点
export const showAllOrNot = (params)=>axios.request({url:'/ffhj/import/openOrClose',params})//
export const getEntLabelList = (params)=> axios.get('/ffhj/import/listEntLableByPage',params)//获取企业列表
export const uploadExcel = (params) => axios.request({url:'/ffhj/import/importIndustryLabel',params})//导入
export const deleteEntItem = (params) => axios.request({url:'/ffhj/import/deleteEntLable',params})//单个删除
export const batchDelete = (params) => axios.request({url:'/ffhj/import/deleteEntLableBatch',params,emulateJSON:false})//批量删除


// 数据主题库
// 重点帮扶企业
export const getHelpentList = params => axios.get('/ffhj/inventory/helpent', params);
export const exportHelpentList = (params, filename) => axios.download('/ffhj/inventory/helpentexport', params, filename); // 导出

//企业管理
export const getEntList = (params) => axios.get('/ffhj/import/listEntManagement',params)
export const getLabelList = ()=>axios.get('/ffhj/import/showSonLabel')//获取企业标签列表
export const setMonitorStatus = (params) => axios.request({url:'/ffhj/import/setIsMonitor',params,emulateJSON:false})//开启活着关闭监控
export const batchDeleteEntlist = (params) => axios.request({url:'/ffhj/import/deleteEntBatch',params,emulateJSON:false})//删除企业



// 数据导入页面
// 列表
export const getDataImportList = (params) => axios.get('/ffhj/dataImport/getDataManageList', params);
// 新建数据源
export const uploadDataImportFileAddUrl = '/ffhj/dataImport/uploadFileAdd';
// 添加数据源
export const uploadDataImportFileUpdateUrl = '/ffhj/dataImport/uploadFileUpdate';
// 下载模板
export const downloadTemplate = (params, filename) => axios.download('/ffhj/dataImport/downloadAddTemplate', params, filename);
export const downloadUpdateTemlate = (params, filename) => axios.download('/ffhj/dataImport/downloadUpdateTemplate', params, filename)
// 获取数据集
export const getDataImportDataset = (params) => axios.get('/ffhj/dataImport/getDataSet', params);
// 导入失败列表
export const getFailList = (params) => axios.get('/ffhj/dataImport/getFailList', params);


//数据统计
export const getTopData =(params) => axios.get('/ffhj/dataStatistics/getTopData',params)//获取顶部指标数据

export const getData = (params) => axios.get('/ffhj/dataStatistics/getDataSet',params)//获取豆腐块数据

export const getDetailList = (params) => axios.get('/ffhj/dataStatistics/getSetData',params)//获取具体类型的数据表

// 数据主题库
export const getThemeDataCount =(params) => axios.get('/ffhj/theme/getThemeDataCount',params)//获取顶部指标数据
