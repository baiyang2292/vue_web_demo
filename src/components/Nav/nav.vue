<template>
    <el-aside width="220px" :class="{'collpase':isCollapse,'open':!isCollapse}">
        
        <el-row class="tac">
            <el-col :span="24">
                <!-- <div>
                    <i class="el-icon-menu" @click="changeCollpase"></i>
                </div> -->
                <div class="collpase-btn" @click="changeCollpase">
                    <i class="iconfont icon-daohangshouqi" :class="{'icon-daohangzhankai':isCollapse}"></i> <span v-show="!isCollapse" class="collpase-nav">收起导航</span>
                </div>
             
                <el-menu
                    ref="menu"
                    :default-active="defaultActive"
                    class="el-menu-vertical-demo"
                    @select="chooseMenu"
                    :collapse="isCollapse"
          
                  >
                   
                    <el-menu-item v-for='(item,index) in routes' :index="item.url" :key="index"> <i class="iconfont " :class="item.icon"></i> <span slot="title">{{item.name}}</span></el-menu-item>
                        <!-- <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item> -->
                    
                </el-menu>
            </el-col>
        </el-row>
    </el-aside>
</template>
<script>
export default {
    data(){
        return {
            isCollapse: false,
            defaultActive:'',
            routes:[]
        }
    },
    mounted(){
        let getter = this.$store.getters;
        this.routes = getter.getChildrenPermission.child.map(v=>{
            return {
                name:v.permissionName,
                route:'/'+v.url,
                url:v.url,
                icon:v.icon
            }
        })
         this.defaultActive = this.$store.getters.getChildRoute
        //  this.$refs.menu.open( {index:this.defaultActive,indexPath:''});
    },
    methods:{
        changeCollpase(){
            this.isCollapse = !this.isCollapse;
        },
        chooseMenu(index,indexPath){
            // console.log(indexPath)
            // console.log(index)
            // console.log(this.routes)
            this.$router.push({name:indexPath[0]})
            // console.log(indexPath)
           this.$store.commit('saveChildrenRoute',index)
        }
        
    }
}
</script>
<style lang="less" scoped>
 @header_height: 64px;
    
    .el-aside {
        z-index: 2;
       
        // height: 954px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 8px 30px 0px rgba(9, 33, 57, 0.2);
    }
    .el-menu {
        border-right: none;
        text-align: left;
    }
    
    .container-outer .el-aside {
        background: #fff;
        border-right: solid 1px #e6e6e6;
        width: 240px !important;
        overflow-x: hidden;
        box-shadow: 2px 0px 10px 0px rgba(0, 0, 0, 0.1);
    }
    .el-submenu__title{
        height: 50px !important;
        line-height: 50px !important;
    }
    .el-menu-item{
        height: 50px !important;
        line-height: 50px !important;
    }
    .el-menu-item-group__title{
        padding:0px !important;
    }
    .collpase{
        width: 64px !important;
        transition:  width 0.5s;
    }
    .open{
        width: 220px !important;
        transition:  width 0.5s;
    }
    .collpase-btn{
        cursor: pointer;
        padding-left:23px;
        line-height: 50px;
        height: 50px;
        border-bottom:rgba(243, 246, 254, 1) 1px solid;
        text-align: left;
        i.iconfont{
            // width:24px;
            font-size:16px;
            margin-right:7px;
        }
    }
    .collpase-nav{
        color: rgba(0, 0, 0, 0.35);
        font-size: 14px;
    }
    .el-menu-item{
        color: rgba(0, 0, 0, 0.85);
        font-size: 14px;
        .iconfont{
            margin-right: 7px;
             color: rgba(0, 0, 0, 0.85);
        }
    }
    .el-menu-item.is-active{
        background-image:linear-gradient(to left,rgba(57, 58, 247, 1),rgba(36, 148, 243, 1));
        color:#fff !important;
        .iconfont{
            color:#fff !important;
        }
    }
    .el-menu-item:focus{
        background-image:linear-gradient(to left,rgba(57, 58, 247, 1),rgba(36, 148, 243, 1));
        color:#fff;
        .iconfont{
            color:#fff ;
        }
    }
    .el-menu-item:hover{
        background-color: rgba(229, 234, 243, 1);
        color:rgba(0,0,0,0.85);
        .iconfont{
            color:rgba(0,0,0,0.85);
        }
    }
    
</style>