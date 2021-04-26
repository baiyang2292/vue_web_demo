<template>
  <div id="libraryList_main">
    <div class="mangage_title">
      <span class="search">
        <el-autocomplete
          popper-class="my-autocomplete"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          @select="handleSelect"
          @keyup.enter.native="handleIconClick"
        >
          <i class="el-icon-search" slot="suffix" @click="handleIconClick"></i>
          <template slot-scope="">
            <div class="name"></div>
          </template>
        </el-autocomplete>
      </span>
      <span>
        政策类型：
        <el-select  clearable placeholder="请选择" @change="changZc">
          <el-option  ></el-option>
        </el-select>
      </span>

      <span>
        发文机关：
        <el-select  clearable placeholder="请选择" @change="changJg">
          <el-option ></el-option>
        </el-select>
      </span>

      <span class="choicedate">
        发文时间：
        <el-date-picker
          type="date"
          placeholder="选择日期"
          @change="changeTime"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </span>
      <span class="rt_all">
        <el-select  clearable placeholder="请选择" @change="changstatus">
          <el-option ></el-option>
        </el-select>
      </span>
    </div>
    <div class="libraryList_list">
      <div v-for="(item,index) in nameList" :key="index" class="nameList">
        <div class="mid_box">
          <div class="name_tit">
            <a href="#" @click="gotoDetail(item.id,item.status)">
              <b>{{index+1}}.{{item.title}}</b>
            </a>
          </div>
          <div class="sm_box">
            <span class="sm_1" v-if="item.typeStr!==''||null">{{item.typeStr}}</span>
            <span class="sm_2" v-if="item.typeStr!==''||null">{{item.departmentStr}}</span>
          </div>
          <div class="sm_text">
            <p v-html="item.content==null||''?'':delHtmlTag(item.content)"></p>
          </div>
          <div class="sm_footer">
            <div class="optime">发布时间：{{item.launchDate|dateFrm}}</div>
            <div class="whform">{{item.referenceNumber}}</div>
          </div>
        </div>
        <div class="mid_right">
          <span :class="item.status==null?'wd':''">{{item.status==null?"未读":"已读"}}</span>
        </div>
      </div>
      <div class="block">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-size="form.pageSize<10?nameList.length:10"
          layout="total, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
// import {  } from '@api/h5/\${config._filename}'
export default {
   props: ["nameList"],
  data() {
    return {
      launchDepartmentList: [],

      form: {
        pageNum: "1", //页码,
        pageSize: 10, //每页显示记录数
        status: "", //（是否已读状态 空-全部 1-未读，2-已读）
        title: "", //标题
        launchDepartment: "", //发文机构
        type: "", //政策类型
        launchDate: "" //发文时间
      },
      nameList: [],
      currentPage4: 1,
      zctypeList: [],
      total: "1",
    };
  },
  filters: {
    dateFrm: function(el) {
      return moment(el).format("YYYY-MM-DD");
    }
  },
  components: {},
  created() {},
  mounted() {
    this.loadAll(); //列表
    this.getZcList(); //政策类型下拉
    this.getJglist(); //发文机关下拉
  },
  methods: {
      delHtmlTag(str) {
      return str.replace(/<[^>]+>/g, "");
    },
    //分页
    handleSizeChange(val) {
      console.log(`每页 \${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: \${val}`);
      this.form.pageNum = val;
      this.loadAll();
    },
    querySearch(queryString, cb) {
      var restaurants = this.nameList;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.title.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },

  }
};
</script>
<style lang="less" >
// less已使用px2rem，直接使用375适配的px就行
#libraryList_main {
  font-size: 14px;
  .mangage_title {
    height: 80px;
    background-color: #fff;
    line-height: 80px;

    .search {
      margin-left: 63px;
      .el-input {
        width: 270px;
      }
      .my-autocomplete {
        li {
          line-height: normal;
          padding: 7px;

          .name {
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .addr {
            font-size: 12px;
            color: #b4b4b4;
          }

          .highlighted .addr {
            color: #ddd;
          }
        }
      }
    }
    span {
      margin-left: 24px;
      .el-input {
        width: 150px;
      }
    }
    .choicedate {
      span {
        margin-left: 0px;
      }
      .el-input {
        width: 200px;
      }
    }

    // .el-input__inner{
    //     width:150px;
    // }
  }
  .libraryList_list {
    background-color: #fff;
    margin-top: 24px;
    padding-left: 33px;
    padding-right: 33px;
    .nameList {
      display: flex;
      padding-bottom: 16px;
      border-bottom: 1px solid #e8e8e8;
    }
    .mid_box {
      width: 80%;
      .name_tit {
        height: 24px;
        line-height: 24px;
        font-size: 16px;
        text-align: left;
        font-family: PingFangSC-Medium;
        padding-top: 24px;
        a {
          color: rgba(0, 0, 0, 0.85);
          text-decoration: none;
        }
      }
      .sm_box {
        margin-top: 13px;
        span {
          height: 33px;
          line-height: 33px;
          font-size: 12px;
          border-radius: 5px;
          padding: 1px 8px 1px 8px;
          margin-right: 8px;
        }
        .sm_1 {
          border: 1px solid #91b0ff;
          background: #e6eeff;
          color: #0a5bfd;
        }
        .sm_2 {
          border: 1px solid #ffbb96;
          background: #fff2e8;
          color: #fa541c;
        }
      }
      .sm_text {
        margin-top: 17px;
        color: rgba(0, 0, 0, 0.65);
        word-wrap: break-word;
        word-break: normal;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
        }
      }
      .sm_footer {
        margin-top: 17px;
        font-size: 14px;
        height: 22px;
        .optime {
          color: rgba(0, 0, 0, 0.45);
          float: left;
        }
        .whform {
          float: right;
        }
      }
    }
    .mid_right {
      width: 20%;
      text-align: center;
      position: relative;
      span {
        position: absolute;
        top: 45%;
        color: rgba(0, 0, 0, 0.45);
      }
    }
    .block {
      background: #fff;
      padding-top: 16px;
      text-align: center;
      padding-bottom: 10px;
      .el-pager li {
        background-color: #fff;
        border: 1px solid rgba(217, 217, 217, 1);
      }
      li:not(.disabled).active {
        background-color: #409eff;
        color: #fff;
      }
    }
  }
  .wd {
    color: #0565fe;
  }
}
</style>
