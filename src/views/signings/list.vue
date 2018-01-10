<template>
  <div class="servide-package-list-container flex-v ml">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>审核认证</el-breadcrumb-item>
      <el-breadcrumb-item>签约审核</el-breadcrumb-item>
    </el-breadcrumb>
    <search></search>
    <div class="table-container flex1">
      <el-table :data="dataList" class="el-scrollbar" size="mini" height="250" border style="width: 100%">
        <el-table-column type="selection" prop="memberId" label="卡号" width="50">
        </el-table-column>
        <el-table-column prop="memberNo" label="卡号" width="180">
        </el-table-column>
        <el-table-column prop="memberGradeName" label="等级" width="100">
        </el-table-column>
        <el-table-column prop="blanceStr" label="余额">
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="mini " @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
      alert(1);
    },
    //删除按钮事件
    handleDelete(index, row) {
      alert(21);
    }
  }
});
export default tableVue;
</script>