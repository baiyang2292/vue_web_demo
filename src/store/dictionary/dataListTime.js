// 数据中心列表时间获取
import  {getListTime} from "../../common/interface/api/dictionary"
import {getSession,setSession} from "../../common/utils/index"

// TODELETE
function getHash(arr){
    let hash = {};
    arr.forEach(item => {
        hash[item.year + item.month] = item;
    })
    return Object.values(hash);
}
const state = {
    dateList :[]
}
const mutations = {
    setDateList(state,payload){
        state.dateList = payload
    }
}
const getters = {
    dateList: state => state.dateList
}
const actions = {
    async fetchDateList({commit}){
        let dateList = getSession('dateList')
        if(dateList){
            commit('setDateList',JSON.parse(dateList))
        }else{
            let {code,data} = await getListTime();
            if(code == 0){
                // 去重，加个显示参数
                data = getHash(data);
                data.forEach(item => item.timeLabel = item.year + "-" + item.month);

                commit('setDateList',data);
                setSession('dateList',JSON.stringify(data))
            }else{
                console.error('获取时间列表失败')
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