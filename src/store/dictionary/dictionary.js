import  {getIndustryList,getRegionList,getFrameList} from "../../common/interface/api/dictionary"
import {getSession,setSession} from "../../common/utils/index"

const state = {
    regionsList:[],

}
const mutations = {
    setRegionList(state,list){
        state.regionsList = list
    }
}
const actions = {
    
}
export default{
}