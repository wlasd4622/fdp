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
                    <el-form-item label="社区服务中心">
                        <el-select class="width-p-100" v-model="value4" clearable placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="类型">
                        <el-select class="width-p-100" v-model="value4" clearable placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="服务包名称">
                        <el-input placeholder="请输入内容" v-model="input4" clearable>
                        </el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="8">
                    <el-form-item label="状态">
                        <el-select class="width-p-100" v-model="value4" clearable placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="8">
                    <el-form-item label="">

                    </el-form-item>
                </el-col>
                <el-col :span="8" class="text-right">
                    <el-form-item label="" class="">
                        <el-button type="primary" size="small">查询</el-button>
                        <router-link :to="{ path: '/service-package/add'}">
                            <el-button type="primary" size="small">新建</el-button>
                        </router-link>
                        <router-link :to="{ path: '/service-package/copyadd'}">
                            <el-button type="primary" size="small">
                                复制新建
                            </el-button>
                        </router-link>
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
      input4: "",
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
