<template>
    <el-container direction='vertical'>
        <Header ></Header>
       <el-container>
            <nav-item />
            <el-container direction='vertical' >
                <bread-crumb />
                <el-main >
                    <slot></slot>
                </el-main>
            </el-container>
       </el-container>
       
      
    </el-container>
    <!-- <div id="app">
        <el-container class="container-outer">
           <nav-item/>
            <el-container class="container-outer-column">
                <Header></Header>
                <bread-crumb ref="bread"/>
                <el-main class="flex-col">
                    <slot></slot>
                </el-main>
            </el-container>
        </el-container>
    </div> -->
</template>
<script>
import "@/common/less/reset.less";
import NavItem from "@c/Nav/nav.vue";
import BreadCrumb from "@c/Breadcrumb";
import Header from "@c/header";

import "@/assets/font/iconfont.css";

export default {
    data() {
        return {
            
        }
    },
    components: {
        NavItem,
        BreadCrumb,
        // Footer,
        Header
    },
};
</script>

<style lang="less" scoped>
.el-container{
    height: 100%;
}
// .el-main {
//     background-color: #E9EEF3;
//     color: #333;
//     text-align: center;
//     line-height: 160px;
//   }
// #app {
//     font-family: "Avenir", Helvetica, Arial, sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     color: #2c3e50;
//     position: absolute;
//     left: 0px;
//     right: 0px;
//     top: 0px;
//     bottom: 0px;
//     overflow-x: hidden;
// }
// .container-outer-column{
//     display: flex;
//     flex-direction: column;
// }
// .container-outer{
//     height: 100%;
// }
.el-main {
    background: rgba(243, 246, 254, 1);
}

// .flex-col {
//     flex-direction: column;
//     position: relative;
// }
</style>
