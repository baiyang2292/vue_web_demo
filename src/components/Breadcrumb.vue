<template>
    <div class="module-information">
        <!-- <div v-if="showLevel3Path" class="back-btn" @click="$router.go(-1)"><i class="el-icon-back"></i></div> -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item  >{{levelOne}}</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in routepath" :to="{name:item.name}" :key='index'>{{item.meta.textName}}</el-breadcrumb-item>
            <!-- <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
        </el-breadcrumb>
    </div>
</template>

<script>
import { getLocation} from "@/common/utils/index"; //跳转路径
    export default {
        data() {
            return {
                levelOne:"",
                routepath:[],
            };
        },
        created() {
            // this.getRoutePaths();
        },
        mounted(){
            this.getRoutePaths();
        },
        watch:{
            $route(to, from) {
                this.getRoutePaths();
            },
        },
        methods:{
            
            getPathAndName(hashRouteArr,routes){
               let rtn  = hashRouteArr.map(v=>{
                 let found =  routes.find(function(el){
                      return el.name === v
                  })
                  if(found){
                    return {
                        path:found.path,
                        name:found.name,
                        meta:found.meta
                    }
                  }else{
                      return -1;
                  }
               })
               rtn = rtn.filter(v=>v!=-1)
               return rtn;
            },
            flatRouterArray(arr,rtn = []){
                if(arr.length == 0){
                    return rtn;
                }
                arr.map(v=>{
                    rtn.push(v);
                    if(v.children && v.children.length>0){
                        this.flatRouterArray(v.children,rtn)
                    }
                })
                return rtn;
            },
            getRoutePaths(){
                this.routepath = [];
                let currentIndex = this.$store.getters.getCurrentIndex;
                let p = this.$store.getters.getPermission[currentIndex];
                this.levelOne = p.permissionName;


                let loc = getLocation();
                let hashArr = loc.hash.split("/");
                hashArr.splice(0,1)
                let currRoute = this.$router.options.routes.filter(v=>{
                    return v.path.indexOf(hashArr[0])>-1
                })
                   
                  let arr =  this.flatRouterArray(currRoute);
                //   console.log(arr)
                this.routepath = this.getPathAndName(hashArr,arr);

             
                // this.routepath.push({
                //     route:p.url,
                //     name: p.permissionName
                // })
                // let p1 = this.$store.getters.getChildrenPermission.child;
                // let childRoute = this.$store.getters.getChildRoute;
                // this.routepath.push({
                //     route:childRoute,
                //     name: p1.filter(v=>v.url == childRoute)[0].permissionName
                // })
            }
           

        }
    };
</script>
<style lang="less" scoped>
    
    .el-breadcrumb,.back-btn {
        height: 50px;
        line-height: 50px;
    }
    .back-btn {
        margin-right: 8px;
        cursor: pointer;
        color: #606266;
        font-size: 18px;
    }
    .module-information {
        // width: 100%;
        padding: 0px 32px;
        background: #fff ;
        background-size: auto 100%;
        height: 50px;
        display: flex;
        flex-wrap: nowrap;
    }
</style>

