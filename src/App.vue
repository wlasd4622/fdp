<template>
  <el-container class="main" style="height: 100%;">
    <el-header class="header" style="text-align: right; font-size: 12px">
      <el-col :span="6" class="logo">FDP</el-col>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>Admin</span>
    </el-header>
    <el-container class="container">
      <el-aside class="aside">
        <el-menu :default-openeds="['2']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>审核认证</template>
            <el-menu-item-group>
              <router-link :to="{ path: '/signings/list'}">
                <el-menu-item index="1-1">签约审核</el-menu-item>
              </router-link>
              <router-link :to="{ path: '/orderRejects'}">
                <el-menu-item index="1-2">退订审核</el-menu-item>
              </router-link>
              <router-link :to="{ path: '/audits'}">
                <el-menu-item index="1-3">实名认证</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>基本配置</template>
            <el-menu-item-group>
              <router-link :to="{ path: ''}">
                <el-menu-item index="2-1">地区配置</el-menu-item>
              </router-link>
              <router-link :to="{ path: ''}">
                <el-menu-item index="2-2">机构配置</el-menu-item>
              </router-link>
              <router-link :to="{ path: '/service-package/list'}">
                <el-menu-item index="2-3">服务包配置</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="mian-container">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import "./assets/global/plugins/jquery.min";
import "./assets/global/plugins/nicescroll/jquery.nicescroll"
export default {
  data() {
    const item = {
      date: "",
      name: "",
      address: ""
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>
<style>
header.el-header.header {
  background-color: #2b3643;
  height: 50px !important;
  color: #fff;
  line-height: 50px;
}
header.el-header.header i.el-icon-setting.el-dropdown-selfdefine {
  color: #fff;
}
aside.el-aside.aside {
  background: #364150 !important;
  width: 235px !important;
}

ul.el-menu {
  background: none;
  border: none !important;
}

li.el-menu-item {
  color: #b4bcc8;
}
.el-submenu__title {
  color: #fff;
}
li.el-menu-item.is-active {
}

.el-submenu .el-menu-item {
  height: 30px;
  line-height: 30px;
}

.el-submenu__title {
  height: 40px;
  line-height: 40px;
}

.el-menu-item-group__title {
  padding: 2px;
}
.el-menu-item.is-active {
  color: #b4bcc8;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background: #616f82 !important;
  color: #b4bcc8;
}

.el-submenu__title:hover {
  background: #616f82 !important;
  color: #fff;
}

li.el-submenu.is-opened > div {
  background: #36c6d3;
}
li.el-submenu.is-opened > div i.el-icon-message,
li.el-submenu.is-opened > div i.el-submenu__icon-arrow.el-icon-arrow-down {
  color: #fff;
}
main.el-main.mian-container {
  overflow: hidden;
}
.logo {
  font-size: 23px;
  text-align: left;
}
</style>
