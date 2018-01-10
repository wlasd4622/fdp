<template>
    <div class="search-container flex-v padding-bottom-0">
        <div class="search-container form">
            <el-form :inline="true" ref="form" class="signings-search-form" :model="form">
                <el-col :span="8">
                    <el-form-item label="省级组织机构">
                        <el-select class="width-p-100" v-model="value4" clearable placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="市级组织机构">
                        <el-select class="width-p-100" v-model="value4" clearable placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="区县组织机构">
                        <el-select class="width-p-100" v-model="value4" clearable placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="服务中心">
                        <el-select class="width-p-100" v-model="value4" clearable placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="审核状态">
                        <el-select class="width-p-100" v-model="value4" clearable placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="8">
                    <el-form-item label="签约时间">
                        <el-date-picker v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                </el-col>

                <el-col :span="8">
                    <el-form-item label=" ">
                            <el-input  v-model="input" placeholder="请输入居民姓名"></el-input>
                    </el-form-item>
                </el-col>
                 <el-col :span="8">
                    <el-form-item label=" ">
                            
                    </el-form-item>
                </el-col>
                <el-col :span="8" class="text-right">
                    <el-form-item label="" class="">
                        <el-button type="primary" size="small">查询</el-button>
                        <el-button type="primary" size="small">导出</el-button>
                    </el-form-item>
                </el-col>

            </el-form>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      form: { name: "" },
      input:"",
      input4: "",
      value6:'',
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value4: ""
    };
  },
  created() {},
  methods: {}
};
</script>
