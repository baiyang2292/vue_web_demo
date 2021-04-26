import axios from "../axios.decoration"

export const getIndustryList = (params) => axios.get('/ffhj/dataImport/industryScreenNew', params);//获取行业列表

export const getRegionList = (params) => axios.get('/ffhj/dataImport/getAreaPermission', params); //获取区域列表


// 风险信号清单时间
export const getListTime = params => axios.get('/ffhj/theme/getTime', params);

export const getFrameList = (params) => axios.get('/sys/roleList', params); //获取frame 域名列表

