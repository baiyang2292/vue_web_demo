import { stat } from "fs";

export default{
    state:{
        childPermission:{

        },//二级权限
        permission:{

        }, //所有权限
        currentIndex:0, //一级导航索引
        childRoute:'', //二级路由
        isLogin:false, //是否登录
        token:'',
        userInfo:{
            name:''
        }
    },
    mutations:{
        setUserInfo(state,payload){
            state.userInfo = payload
        },
        setToken(state,payload){
            state.token = payload;
        },
        changeIndex(state,currentIndex){
            state.currentIndex = currentIndex
        },
        savePermission(state,permission){
            state.permission = permission
        },
        saveChildPermission(state,childPermission){
            state.childPermission = childPermission
        },
        saveChildrenRoute(state,childRoute){
            state.childRoute = childRoute
        },
        saveLoginStatus(state,login){
            state.isLogin = login
        },
        gotoLogin(state){
            if(!state.isLogin){
                window.location.href = '/login.html'
            }
        }
    },
    actions:{

    },
    getters:{
        
        getChildrenPermission(state){
            return state.permission[state.currentIndex]
        },
        getPermission(state){
            return state.permission
        },
        getCurrentIndex(state){
            return state.currentIndex
        },
        getChildRoute(state){
            return state.childRoute
        },
        getLoginStatus(state){
            return state.isLogin
        },
        getToken(state){
            return state.token;
        },
        getUserInfo(state){
            return state.userInfo
        },
        getUserName(state){
            return state.userInfo.name;
        }
    }
}
