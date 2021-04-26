<template>
    <el-header class="el-header">
        <div class="header-bg">
            <div class="logo" >XXXXXX平台</div>
            <div class="header-bg_tip"  >
                <div class="view-menu" @click='gotoWarningVisualized'>
                    <span>
                        预警可视化
                    </span>
                    
                </div>
                <div class="header-module"
                     v-for="(item,index) in headerList"
                     :key="index"
                     :class="{'active':curlIndex===index}"
                     @click="(curlIndex =index),handleClick(item)"
                ><i class="iconfont" :class=" item.icon"></i>{{item.permissionName}}</div>
            </div>

            <div
                class="user-c"
                @mouseout="removeMouse()"
                @mouseover="inMouse()"
            >
                <el-dropdown :hide-on-click="false">
                    <div class="flex-center">
                        <div class="user-icon"><!-- 头像 --></div>
                        <div class="user-name">
                            {{ username }}
                        </div>
                        <i class="el-icon-caret-bottom" style="color:#fff"></i>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <!-- <el-dropdown-item v-show="display"
                            >系统管理</el-dropdown-item
                        >
                        <el-dropdown-item @click.native="gotoCenter"
                            >个人中心</el-dropdown-item
                        > -->
                        <el-dropdown-item @click.native="signOut"
                            >退出</el-dropdown-item
                        >
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </el-header>
</template>
<script>
import { gotoGovURL,getLocation} from "@/common/utils/index"; //跳转路径
import {logout} from '@api/gov/login'
// logout
// import { logout } from "@api/loginOut";
import { Dropdown, DropdownMenu, DropdownItem } from "element-ui";
import {getLocalStorage,removeLocalStorage,removeSession} from "../common/utils";
import {permission} from '../common/permission'
import {constant} from '../common/constant/index'

export default {
    components: {
        'el-dropdown':Dropdown,
        'el-dropdown-menu':DropdownMenu,
        'el-dropdown-item': DropdownItem
    },
    data() {
        return {
            seen: false,
            current: 0,
            username: "",
            id: 0,
            display: false,
            diskey: "tl",
            curlIndex:2,
            headerList: permission,
        };
    },
    created(){
         this.$store.dispatch('fetchRegion');
         this.$store.dispatch('fetchIndustry');
         this.$store.dispatch('fetchDateList')
        // console.log(this.$store.getters.region);
        // console.log(this.$store.getters.industry);
        // let user = getLocalStorage(constant.USERINFO);
        let user = JSON.parse(getLocalStorage(constant.USERINFO));
        // console.log(user)
        this.username = user.userName;
        this.$store.commit('savePermission',permission)
        let loc = getLocation();
        let p =  this.$store.state.permissionStore.permission.filter((v,i)=>{
            if(loc.lastPathname.indexOf(v.url)>-1){
                this.curlIndex = i;
                this.$store.commit('changeIndex',i)
            }
            return loc.lastPathname.indexOf(v.url)>-1
        })[0]
        this.$store.commit('saveChildPermission',p);
        let firstUrl = "";
        let rtn = p.child.filter((v,i)=>{
            if(i === 0){
                firstUrl = v.url;
            }
            return  loc.hash.indexOf(v.url)>-1
        })
        this.$store.commit('saveChildrenRoute',(rtn && rtn.length>0 ? rtn[0].url : firstUrl));
        

    },
    methods: {
        //鼠标移入移出
        inMouse(index) {
            this.seen = true;
            this.current = index;
        },
        removeMouse(index) {
            this.seen = false;
            this.current = null;
        },
        //判断权限user
        miss() {
            let key = localStorage.getItem("isAdmin");
            if (key == 1) {
                this.display = true;
            }
          
        },
        //根据地区选择图片
        selectDis() {
            //默认地区
            let currentConf = localStorage.getItem("city");
            // this.tipbg = this.region[currentConf].bg;
        },
        signOut() {
            logout()
                .then(res=>{
                    if(res.code == "00"){
                        removeSession('token')
                        removeLocalStorage('token')
                        this.$store.commit('setToken');
                        gotoGovURL('login.html')
                    }
                })
            // logout().then(res => {
            //     let loginUrl=localStorage.getItem("loginUrl")
            //     if (res.code == "200") {
            //         localStorage.clear();    
            //         location.href=loginUrl;
            //     } else {
            //         this.$message.error(res.msg);
            //     }
            // });
        },
       
        gotoCenter() {
            location.href="personalCenter.html";
        },
        handleClick(route, event){
            // debugger
            window.location.href = '/'+route.url+'.html#/'+(route.child[0] ? route.child[0].url :'');
            // debugger 
            // let url = route.url;

            // if (route.child && route.child.length > 0) {
            //     url = route.child[0].url;
            // } 
            
            // if (!route.url && route.child.length == 0) {
            //     return;
            // }
            
            // this.$router.push({ path: url });
            
        },
        gotoWarningVisualized(){
            window.open("/warningVisualized.html#/riskOverview","_blank");  
        },
    },

    mounted() {
        this.name = localStorage.getItem("name");
        this.miss();
        this.selectDis();
        
        // this.$router.push({ path: '/planForAttracting' })
        
    }
};
</script>



<style lang="less" scoped>

    @header_height: 70px !important;
     .logo{
        width:320px;
        background: url(../assets/images/logo.png) no-repeat left 23px;
        background-size: 22px; 
        // background-size: cover;
        cursor: pointer;
        line-height: 70px;
        text-indent: 2em;
        color: rgba(255, 255, 255, 1);
        font-size: 19px;
        text-align: left;

    }
    .el-header {
        width: 100%;
        // border-bottom:1px solid rgba(255,255,255,.1) ;
        // box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
        background-color: rgba(31, 38, 62, 1);
        box-shadow: 0px 0px 8px 0px rgba(72, 89, 102, 1);
        background-image: url(../assets/images/header-grid.png);
        background-repeat:repeat-y;
        background-size: cover;
        height: @header_height;
    }
    .header-bg {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: space-between;
    }

    .user-icon {
        display: inline-block;
        width: 26px;
        height: @header_height;
        // background: url(../assets/images/user-logo.png) no-repeat scroll 50%;
    }

    .header-bg_tip {
        background-size: contain;
        min-width: 450px;
        cursor: pointer;
        flex: 1;
        .view-menu{
            width: 128px;
            height: 36px;
            position: relative;
            display: inline-block;
            color: rgba(72, 234, 228, 1);
            font-size: 14px;
            text-align: center;
            line-height: 36px;
            
            span{
                display: inline-block;
                background: url('../assets/images/nav-view-bg.png') no-repeat 5px 8px;
                background-size: 20px;
                text-indent: 2em;
            }
            &:before{
                background-image: url('../assets/images/nav-view-outer.png');
                background-repeat: no-repeat;
                background-size: 8px;
                content:'';
                height: 100%;
                position:absolute;
                left:0px;
                top:0px;
                width: 20px;
            };
             &::after{
                background-image: url('../assets/images/nav-view-outer.png');
                background-repeat: no-repeat;
                background-size: 8px;
                content:'';
                height: 100%;
                position:absolute;
                right:0px;
                top:0px;
                width: 20px;
                transform: rotate(-180deg)
            };
        }
        .header-module{
            width: 148px;
           
            // margin: 0 30px;
            /*padding:0 20px;*/
            height:100%;
            line-height: @header_height;
            display: inline-block;
            text-align: center;
            color:rgba(255,255,255,.6);
            i.iconfont{
                margin-right: 10px;
                width: 16px;
                height: 16px;
            }

        }
        .active,.header-module:hover{
            color:rgba(255,255,255,1);
            background-color: #151A2C; 
        }
        .active{
            background-image: url('../assets/images/nav-active.png');
            background-position-y: bottom;
            background-size: contain;
            background-repeat: no-repeat;
        }
    }

    // 右边用户栏
    .user-c {
        /*position: absolute;*/
        height: 100%;
        /*margin-right: 40px;*/
        text-align: center;
        cursor: pointer;
        min-width: 150px;
        border-left:1px solid rgba(0,0,0,0.1);
        /*background: yellowgreen;*/
        /*right: 0;*/

        .user_herder {
            display: inline-block;
            text-align: center;
            width: 26px;
            height: @header_height;
        }
        .user-name {
            height: @header_height;
            line-height: @header_height;
            display: inline-block;
            vertical-align: top;
            margin-left: 10px;
            color: #fff;
        }


    }
</style>

