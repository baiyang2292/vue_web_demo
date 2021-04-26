<!-- 文件注释:demo-project_1
@name:${_PageBuildParam.name}
@project:${_PageBuildParam.project}
@branch:${_PageBuildParam.branch}
@client:${_PageBuildParam.client}
@description:${_PageBuildParam.commitMessage}
@template:${_PageBuildParam.template}
-->
<template>
  <div class="ps-r preview-report">
    <div class="mr-center preview-container">
      <div class="preview-header">
        <div class="text-c preview-report-title">${layoutData.title}</div>
        <div class="flex flex-center query-infos">
          <div class="flex flex-center query-box">
            <span>startTime: xxxx</span>
            <span>endTime: xxxx</span>
          </div>
          <div class="flex flex-center query-box">
            <span>targetName: xxxx</span>
            <span>targetId: xxxx</span>
          </div>
        </div>
      </div>

#foreach($row in $layoutData.children)
      <div
        class="ps-r flex flex-center border-r5 flex-wrap layout-row"

        key="$row.index"
        @mouseenter="row.showEditBtn = true"
        @mouseleave="row.showEditBtn = false"
      >
        <transition name="slide-fade" v-if="row.showEditBtn">
          <div class="btn-box add-message-btn-box">
            <el-button
              type="primary"
              icon="el-icon-plus"
              title="add message"
              circle
              @click="handleAddMessage(row)"
            />
          </div>
        </transition>

        <transition name="slide-fade" v-if="row.editMessage">
          <div class="btn-box add-message-btn-box">
            <el-button
              type="success"
              icon="el-icon-check"
              title="save"
              circle
              @click="row.editMessage = false"
            />
          </div>
        </transition>

        <div class="flex flex-center w100 text-c layout-row-title" v-if="row.title">
          <div class="title-line"/>
          <div>${row.title}</div>
          <div class="title-line"/>
        </div>

        <div class="flex flex-center w100" style="justify-content: ${row.align}, height: ${row.initHeight}px">
          #foreach($cell in $row.children)
          <div
            class="ps-r flex flex-center"
          >
			<!--组件位置-->

          </div>
          #end
        </div>

      </div>
#end
    </div>
  </div>
</template>

<script>


export default {
  name: "previewReport",
  components: {},
  data() {
    return {
      isLoading: true,
      editBtnTop: 30,
      layoutData: {
        title: "",
        children: []
      },
      queryData: {},
    };
  },
  computed: {

  },
  methods: {
    rowStyle(row) {
      return { justifyContent: row.align, height: `${row.initHeight}px` }
    },
	init(){
		this.layoutData = {"title":"default-report","reportUnionKey":"0","children":[{"title":"add report","align":"flex-start","initHeight":250,"index":1,"children":[{"col":24,"componentKey":15,"initCol":24,"title":"占位"}]},{"align":"flex-start","initHeight":250,"index":2,"children":[{"col":0,"componentKey":null,"initCol":16,"title":null},{"col":0,"componentKey":null,"initCol":8,"title":null}]}]}
	}
  },
  mounted() {
	this.init()
  },
  beforeDestroy() {
  }
};
</script>

<style lang="scss" scoped>
@import "./layout.scss";
</style>
