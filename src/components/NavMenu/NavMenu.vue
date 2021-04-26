<template>
    <Nav :routes="routes" :checkedRouteId="checkedRouteId" />
</template>

<script>
import Nav from "./nav";
import { getLocation, getUrlParam } from "@/common/utils/index";
export default {
    data() {
        return {
            routes: [],
            checkedRouteId: "-1"
        };
    },
    components: {
        Nav
    },
    created() {
        this.setRoutes();
    },
    methods: {
        setRoutes() {
            this.$store.commit("setPermissionFromStorage");
            
            let mainHash = getLocation().hash.split('/')[1] || '';
            
            this.routes = this.$store.getters.getRoutes.filter(route => route.url === getLocation().lastPathname);
            
            if (mainHash.length) {
                let routePath = this.getLocalRoute(
                    this.routes,
                    getLocation().hash.split('/')[1]
                );

                this.$store.commit('setRoutePath', routePath);
                console.log(1);
            }
        },

        /**
         * @desc 获取当前路由，返回当前路由的PathArr，最后一个是当前的route
         * @param { routes } 权限树
         * @param { pathArr } 不用传，是路由的path路径
         */
        getLocalRoute(routes, path, pathArr = []) {
            for (let i = 0; i < routes.length; i++) {
                let { child, ...route } = routes[i];

                if(this.checkedRouteId !== '-1'){
                    return pathArr;
                }

                let isActive = route.cUrls.includes(path);
                
                if (isActive && !route.url.endsWith('.html')) {  //!route.url.endsWith('.html') && path.includes(route.url)

                    // url === path的时候unshift并结束回调
                    pathArr.unshift(route);
                    this.checkedRouteId = route.id + ""
                    return pathArr;
                } else if (child && child.length) {

                    // 有child的时候回调，当回调结束的时候判断是否选中，选中unshift
                    this.getLocalRoute(child, path, pathArr);
                    this.checkedRouteId !== '-1' && pathArr.unshift(route)
                }
            }

            return pathArr;
        }
    }
};
</script>


