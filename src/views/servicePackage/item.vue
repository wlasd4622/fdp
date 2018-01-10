<!--新建服务项目-->
<template>
  <div class="add-service-item-container">
    <el-col :span="24" class="text-right">
      <el-button type="text" @click="dialogFormVisible = true">添加服务项目</el-button>
    </el-col>
    <el-dialog title="服务项目编辑" width="30%" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" :rules="rules" size="mini" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="类别" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="服务次数" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button size="mini" @click="resetForm('ruleForm')">重置</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import fdpForm from "./../../assets/js/fdp-form";
var formVue = new fdpForm({
  save_url: "/api/service/item/save",
  data: {
    dialogFormVisible: false,
    ruleForm: {
      name: ""
    },
    rules: {
      name: [
        { required: true, message: "请输入活动名称", trigger: "blur" },
        { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
      ]
    }
  }
});
export default formVue;
</script>