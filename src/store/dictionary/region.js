import  {getRegionList} from "../../common/interface/api/dictionary"
import {getSession,setSession} from "../../common/utils/index"

const state = {
    region :[]
}
const mutations = {
    setRegion(state,payload){
        state.region = payload
    }
}
const getters = {
    region: state => state.region
}
const actions = {
    async fetchRegion({commit}){
        let region = getSession('regionList')
        if(region){
            commit('setRegion',JSON.parse(region))
        }else{
            let {code,data} = await getRegionList();
            if(code === '00'){
                commit('setRegion',data);
                setSession('regionList',JSON.stringify(data))
            }else if(code === '01'){
                console.error('获取区域数据失败')
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