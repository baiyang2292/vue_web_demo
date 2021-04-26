import Vue from 'vue'
import 'amfe-flexible'
import fastClick from 'fastclick'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@less/reset.less'
import App from './$!{_PageBuildParam.code}.vue'
##if (""!="$!{_PageBuildParam.router}")
import router from './router';
##end
##if (""!="$!{_PageBuildParam.store}")
import store from '../../store';
##end

// 300ms延迟
fastClick.attach(document.body);
Vue.use(ElementUI)

Vue.config.productionTip = false
new Vue({
  ##if (""!="$!{_PageBuildParam.router}")
    router,
  ##end
  ##if (""!="$!{_PageBuildParam.store}")
    store,
  ##end
    render: h => h(App)
}).$mount('#app')
