<!-- demo-project_1模版文件注释
@name:${_PageBuildParam.name}
@project:${_PageBuildParam.project}
@branch:${_PageBuildParam.branch}
@client:${_PageBuildParam.client}
@description:${_PageBuildParam.commitMessage}
@template:${_PageBuildParam.template}
-->
<template>
  <div>${_PageBuildParam.name}</div>
</template>

<script>

export default{
    components:{

    },
    data(){
        return {

        }
    },
    created(){
      //加载数据
      // page_dataset_1();
      //给模块绑定数据传值
      // moduleDataBind();
    },
    mounted(){

    },
    methods: {
      //ds1的注释
      page_dataset_1(){
        //数据请求
      },

      //模块数据绑定
      moduleDataBind(){

      }
    }
}
</script>

<style lang="less" scoped='scoped'>

</style>
