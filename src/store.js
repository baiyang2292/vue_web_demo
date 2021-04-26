import Vue from 'vue'
import Vuex from 'vuex'
import permissionStore from './store/permission/permissionStore'
import industryStore from './store/dictionary/industry'
import regionStore from './store/dictionary/region'
import dateListStore from './store/dictionary/dataListTime'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        dateListStore,
        permissionStore,
        industryStore,
        regionStore
    }
})
