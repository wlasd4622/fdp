<template>
    <div class="service-package-add-container flex-v ml">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>所属医疗机构</el-breadcrumb-item>
            <el-breadcrumb-item>山东省济南市天桥区社卫生服务中心</el-breadcrumb-item>
        </el-breadcrumb>
        <el-col :span="24" class="add-body flex1 scroll-container">
            <el-col :span="20">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="名称" prop="name">
                                <el-input v-model="ruleForm.name"></el-input>
                            </el-form-item>
                            <el-form-item label="类型" prop="name">
                                <el-radio v-model="radio" label="1">备选项</el-radio>
                                <el-radio v-model="radio" label="2">备选项</el-radio>
                            </el-form-item>
                            <el-form-item label="价格" prop="name">
                                <el-input v-model="ruleForm.name"></el-input>
                            </el-form-item>
                            <el-form-item label="服务周期" prop="name">
                                <el-input v-model="ruleForm.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <div class="img">
                                <img style="    display: block;padding-top: 8%;float: right;" src="../../assets/images/user.png" alt="">
                            </div>
                        </el-col>
                    </el-row>
                    <el-form-item label="适用人群" prop="name">
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox label="复选框 A"></el-checkbox>
                            <el-checkbox label="复选框 B"></el-checkbox>
                            <el-checkbox label="复选框 C"></el-checkbox>
                            <el-checkbox label="禁用" disabled></el-checkbox>
                            <el-checkbox label="选中且禁用" disabled></el-checkbox>
                            <el-checkbox label="复选框 A"></el-checkbox>
                            <el-checkbox label="复选框 A"></el-checkbox>
                            <el-checkbox label="复选框 B"></el-checkbox>
                            <el-checkbox label="复选框 C"></el-checkbox>
                            <el-checkbox label="禁用" disabled></el-checkbox>
                            <el-checkbox label="选中且禁用" disabled></el-checkbox>
                            <el-checkbox label="复选框 A"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="针对病种" prop="name">
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox label="复选框 A"></el-checkbox>
                            <el-checkbox label="复选框 B"></el-checkbox>
                            <el-checkbox label="复选框 C"></el-checkbox>
                            <el-checkbox label="禁用" disabled></el-checkbox>
                            <el-checkbox label="选中且禁用" disabled></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="服务开始日期" prop="name">
                        <el-date-picker class="width-p-100" v-model="value1" type="date" placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="套餐服务图标" prop="name">
                        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip line-height-1">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="是否推荐" prop="name">
                        <el-radio v-model="radio" label="1">备选项</el-radio>
                        <el-radio v-model="radio" label="2">备选项</el-radio>
                    </el-form-item>
                    <el-form-item label="服务摘要" prop="name">
                        <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="服务内容" prop="name" class="quill-editor-item">
                        <div style="height:300px;">
                            <quill-editor v-model="infoForm.a_content" ref="myQuillEditor" style="height:200px;" class="" :options="infoForm.editorOption" @ready="onEditorReady($event)">
                            </quill-editor>
                        </div>
                    </el-form-item>
                    <el-form-item label="项目服务" prop="name">
                        <addServiceItem></addServiceItem>
                        <el-table size="mini" :data="tableData" border style="width: 100%">
                            <el-table-column prop="date" label="日期" width="180">
                            </el-table-column>
                            <el-table-column prop="name" label="姓名" width="180">
                            </el-table-column>
                            <el-table-column prop="address" label="地址">
                            </el-table-column>
                        </el-table>

                    </el-form-item>
                    <el-form-item class=" padding-top-20">
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-col>
    </div>
</template>
<script>
import util from "./../../assets/js/util"
import axios from "axios";
import addServiceItem from "./item";
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
//https://github.com/surmon-china/vue-quill-editor
export default {
  components: {
    //使用编辑器
    quillEditor,
    //新建服务项目
    addServiceItem
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      value1: "",
      infoForm: {
        a_title: "",
        a_source: "",
        a_content: "",
        editorOption: { placeholder: "请输入服务内容" }
      },
      ruleForm: {
        name: ""
      },
      textarea: "",
      fileList2: [],
      checkList: ["选中且禁用", "复选框 A"],
      radio: "1",
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    setTimeout(() => {
        util.scroll($('.scroll-container'))
    });
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    onEditorReady() {}
  }
};
</script>
