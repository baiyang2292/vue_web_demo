import  {getIndustryList} from "../../common/interface/api/dictionary"
import {getSession,setSession} from "../../common/utils/index"

const state = {
    industry :[]
}
const mutations = {
    setIndustry(state,payload){
        state.industry = payload
    }
}
const getters = {
    industry: state => state.industry
}
const actions = {
    async fetchIndustry({commit}){
        let industry = getSession('industryList')
        if(industry){
            commit('setIndustry',JSON.parse(industry))
        }else{
            let {code,data} = await getIndustryList();
            if(code === '00'){
                commit('setIndustry',data);
                setSession('industryList',JSON.stringify(data));
            }else if(code === '01'){
                console.error('获取行业数据失败')
            }
        }
    }
}
export default {
    // namespaced: true,
    state,
    getters,
    mutations,
    actions
}