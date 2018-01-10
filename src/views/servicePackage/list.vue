<template>
  <div class="servide-package-list-container flex-v ml">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>基本配置</el-breadcrumb-item>
      <el-breadcrumb-item>服务包配置</el-breadcrumb-item>
    </el-breadcrumb>
    <search></search>
    <div class="table-container flex1">
      <el-table :data="dataList" class="el-scrollbar" size="mini" height="250" border style="width: 100%">
        <el-table-column type="selection" prop="memberId" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="memberNo" label="序号" width="180">
        </el-table-column>
        <el-table-column prop="memberGradeName" label="名称" width="300">
        </el-table-column>
        <el-table-column prop="blanceStr" label="基层医疗机构" width="200">
        </el-table-column>
        <el-table-column prop="blanceStr" label="类型">
        </el-table-column>
        <el-table-column prop="blanceStr" label="价格(元)">
        </el-table-column>
        <el-table-column prop="blanceStr" label="状态">
        </el-table-column>
        <el-table-column prop="blanceStr" label="添加时间">
        </el-table-column>
        <el-table-column label="操作" width="1500">
          <template slot-scope="scope">
            <el-button size="mini " @click="handleDetail(scope.$index, scope.row)">查看</el-button>
            <el-button size="mini " @click="handleStop(scope.$index, scope.row)">暂停</el-button>
            <el-button size="mini " @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button size="mini " type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block text-right" style="">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import Table from "../../assets/js/fdp-table";
import search from "./search";
var tableVue = new Table({
  components: { search },
  list_url: "/api/memberList",
  methods: {
    //编辑按钮事件
    handleEdit(index, row) {
      alert("修改");
    },
    //删除按钮事件
    handleDelete(index, row) {
      alert("删除");
    },
    handleDetail() {
      alert("查看");
    },
    handleStop() {
      alert("暂停");
    }
  }
});
export default tableVue;
</script>
