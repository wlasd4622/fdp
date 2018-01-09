<template>
  <div class="signings-container">
    <!--签约记录一览-->
    <div class="page-bar">
      <ul class="page-breadcrumb">
        <li>
          <a href="javascript:;">审核认证</a>
          <i class="fa fa-circle"></i>
        </li>
        <li>
          <a href="javascript:;">签约审核</a>

        </li>
      </ul>
    </div>
    <div class="search-container form">
      <form class="form-horizontal signings-search-form" role="form">
        <div class="form-body">
          <div class="col-md-4">
            <div class="form-group">
              <label class="col-md-3 control-label">
                <div>省级组织机构</div>
              </label>
              <div class="col-md-8">
                <select class="form-control width-p-100 input-inline">
                  <option value="0">山东</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="col-md-3 control-label">
                <div>市级组织机构</div>
              </label>
              <div class="col-md-8">
                <select class="form-control width-p-100 input-inline">
                  <option value="0">济南</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="col-md-3 control-label">
                <div>区县组织机构</div>
              </label>
              <div class="col-md-8">
                <select class="form-control width-p-100 input-inline">
                  <option value="0">天桥区</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="col-md-3 control-label">
                <div>服务中心</div>
              </label>
              <div class="col-md-8">
                <select class="form-control width-p-100 input-inline">
                  <option value="0">全部</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="col-md-3 control-label">
                <div>审核状态</div>
              </label>
              <div class="col-md-8">
                <select class="form-control width-p-100 input-inline">
                  <option value="0">全部</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="col-md-3 control-label">
                <div>签约时间</div>
              </label>
              <div class="col-md-8">
                <div class="col-md-5">
                  <input data-provide="datepicker" minDate="2019-11-01" data-date-format="yyyy-mm-dd" class="form-control form-control-inline date-picker" type="text" value="">
                </div>
                <div class="col-md-2">
                  <div style="text-align: center;height: 34px;line-height: 34px;">至</div>
                </div>
                <div class="col-md-5">
                  <input data-provide="datepicker" data-date-format="yyyy-mm-dd" class="form-control form-control-inline date-picker" size="16" type="text" value="">
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="col-md-3 control-label">
                <div></div>
              </label>
              <div class="col-md-8">
                <input type="text" class="form-control" placeholder="请输入居民姓名">
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="col-md-3 control-label">
                <div> </div>
              </label>
              <div class="col-md-8 text-right">

              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="col-md-3 control-label">
                <div> </div>
              </label>
              <div class="col-md-8 text-right">
                <button type="button" class="btn btn-primary search-btn">查询</button>
                <router-link :to="{ path: '/signings/add'}" class="btn btn-primary add-btn">新增</router-link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="table-container">
      <el-table :data="dataList" class="el-scrollbar" height="250" border style="width: 100%">
        <el-table-column type="selection" prop="memberId" label="卡号" width="50">
        </el-table-column>
        <el-table-column prop="memberNo" label="卡号" width="180">
        </el-table-column>
        <el-table-column prop="memberGradeName" label="等级" width="3080">
        </el-table-column>
        <el-table-column prop="blanceStr" label="余额">
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="small " @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="small " type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block text-right" style="margin-bottom:10px;padding-right:20px;">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      dataList: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    getData: function() {
      var _this = this;
      axios
        .get("/api/memberList")
        .then(res => {
          if (res.status == 200) {
            var result = res.data.result;
            _this.dataList = result.list;
            // // 返回总记录数
            // _this.totalSize = result.iTotalRecords * 10;
            // _this.totalPage = Math.ceil(_this.totalSize / _this.limit);
            // _this.refreshPageCon();
            // setTimeout(() => {
            //   $(".custom-element").remove();
            //   _this.$emit("tableRander");
            // });
            setTimeout(() => {
              var myScrollbar = new GeminiScrollbar({
                element: document.querySelector(".el-table__body-wrapper")
              }).create();
              document
                .querySelector(".el-table__body-wrapper")
                .addEventListener("scroll", () => {
                  console.log(33);
                });
            });
          } else {
            console.warn(res.statusText);
          }
        })
        .catch(error => {
          console.warn(error);
        });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
