<!-- demo-project_1
@name:${_PageBuildParam.name}
@project:${_PageBuildParam.project}
@branch:${_PageBuildParam.branch}
@client:${_PageBuildParam.client}
@description:${_PageBuildParam.commitMessage}
@template:${_PageBuildParam.template}
-->
<template>
  <div>
    <div>${_PageBuildParam.name}</div>

    <div>
      <div class="div-a">
        <ve-map :data="chartData4"></ve-map>
        <ve-scatter :data="chartData11"></ve-scatter>
      </div>
      <div class="div-b">
        <ve-histogram :data="chartData2"></ve-histogram>
      </div>
    </div>
    <div>
      <div class="div-a">
        <ve-pie :data="chartData3"></ve-pie>
      </div>
      <div class="div-b">
      <ve-line :data="chartData"></ve-line>
      </div>
    </div>

  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
import VeHistogram from 'v-charts/lib/histogram.common'
import VePie from 'v-charts/lib/pie.common'
import VeMap from 'v-charts/lib/map.common'
import VeScatter from 'v-charts/lib/scatter.common'

export default{
  components:{
    VeLine, VeHistogram, VePie, VeMap, VeScatter
  },
  data: function () {
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      },
      chartData2: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        },
        chartData3: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        },

        chartData4: {
          columns: ['位置', '税收', '人口', '面积'],
          rows: [
            { '位置': '吉林', '税收': 123, '人口': 123, '面积': 92134 },
            { '位置': '北京', '税收': 1223, '人口': 2123, '面积': 29234 },
            { '位置': '上海', '税收': 2123, '人口': 1243, '面积': 94234 },
            { '位置': '浙江', '税收': 4123, '人口': 5123, '面积': 29234 }
          ]
        },

        chartData11: {
          columns: ['日期', '访问用户', '下单用户', '年龄'],
          rows: [
            { '日期': '1/1', '访问用户': 123, '年龄': 3, '下单用户': 1244 },
            { '日期': '1/2', '访问用户': 1223, '年龄': 6, '下单用户': 2344 },
            { '日期': '1/3', '访问用户': 7123, '年龄': 9, '下单用户': 3245 },
            { '日期': '1/4', '访问用户': 4123, '年龄': 12, '下单用户': 4355 },
            { '日期': '1/5', '访问用户': 3123, '年龄': 15, '下单用户': 4564 },
            { '日期': '1/6', '访问用户': 2323, '年龄': 20, '下单用户': 6537 }
          ]
        }
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

.div-a{ float:left;width:49%;border:1px solid #F00}
.div-b{ float:left;width:49%;border:1px solid #000}
</style>
