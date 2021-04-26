<template>
        <el-aside>
            <div class="logo" @click="gotoIndex()"></div>
            <el-row class="tac">
                <el-col :span="24">
                    <el-menu
                        :default-active="checkedRouteId"
                        class="el-menu-vertical-demo"
                        @select="handleSelect"
                        unique-opened
                    >
                        <!-- 第一层路由 -->
                        <nav-item
                            v-for="routeChild in routes"
                            :route="routeChild"
                            :key="routeChild.name + routeChild.url"
                        ></nav-item>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
</template>

<script>
import navItem from "./navItem.vue";
// import loginMassage from "@/common/constant/base.config.js"; //登陆基本配置
import { gotoBaseURL,getLocation } from "@/common/utils/index";

export default {
    data() {
        return {
            // config: loginMassage
        };
    },
    props: {
        routes: {
            type: Array,
            required: true
        },
        checkedRouteId: {
            type: String,
            required: true
        }
    },
    mounted(){
        console.log(this.routes)
    },
    components: {
        navItem
    },
    methods: {
        
        handleSelect(key, keyPath) {

            let route = this.getPagePath(key, this.routes);
            if (!route) {

                this.routes.forEach(r => {
                    route = this.getPagePath(key, r.child);
                    if (route) {
                        this.setNewRoutes(route.url);
                        // debugger;
                        this.$router.push({ path: '/' + route.url });
                        return;
                    }
                })
                return;
            }
            this.setNewRoutes(route.url);
            this.$router.push({ path: route.url });
            // location.href= `${location.origin}/${localStorage.getItem('baseUrl')}/${route.url}`
        },

        getPagePath(keyPath, routes) {
            let route = routes.find(route =>route.id == keyPath);
            return route;             

        },
        setNewRoutes(url) {
            let routePath = this.getNowRoute(
                this.routes,
                url,
            );
            this.$store.commit('setRoutePath', routePath);
        },

        /**
         * @desc 获取当前路由，返回当前路由的PathArr，最后一个是当前的route
         * @param { routes } 权限树
         * @param { pathArr } 不用传，是路由的path路径
         */
        getNowRoute(routes, path, pathArr = []) {
            for (let i = 0; i < routes.length; i++) {
                let { child, ...route } = routes[i];
                if (route.url === path) {
                    // url === path的时候unshift并结束回调
                    pathArr.unshift(route);
                    return pathArr;
                } else if (child && child.length) {

                    // 有child的时候回调，当回调结束的时候判断是否选中，选中unshift
                    this.getNowRoute(child, path, pathArr);
                    pathArr.unshift(route)
                }
            }

            return pathArr;
        },
        gotoIndex(){
            location.href="index.html"; 
        },
        
    }
};
</script>

<style lang="less">

    @header_height: 64px;
    
    .el-aside {
        z-index: 2;
    }
    .el-menu {
        border-right: none;
        text-align: left;
    }
    .logo{
        width:100%;
        height:@header_height;
        // background: url(../../assets/images/wz_logo.png) no-repeat center;
        // background-size: cover;
        cursor: pointer;
    }
    .container-outer .el-aside {
        background: #fff;
        border-right: solid 1px #e6e6e6;
        width: 240px !important;
        overflow-x: hidden;
        box-shadow: 2px 0px 10px 0px rgba(0, 0, 0, 0.1);
    }
    .el-submenu__title{
        height: 40px !important;
        line-height: 40px !important;
    }
    .el-menu-item{
        height: 40px !important;
        line-height: 40px !important;
    }
    .el-menu-item-group__title{
        padding:0px !important;
}
</style>


