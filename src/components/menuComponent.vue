<template>
  <div class="page-sidebar-wrapper menuComponent">
    <!-- BEGIN SIDEBAR -->
    <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
    <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
    <div class="page-sidebar navbar-collapse collapse">

      <ul class="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style="padding-top: 20px">
        <!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element -->
        <li class="sidebar-toggler-wrapper hide">
          <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
          <div class="sidebar-toggler"> </div>
          <!-- END SIDEBAR TOGGLER BUTTON -->
        </li>
        <!-- DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element -->
        <li class="sidebar-search-wrapper">
          <!-- BEGIN RESPONSIVE QUICK SEARCH FORM -->
          <!-- DOC: Apply "sidebar-search-bordered" class the below search form to have bordered search box -->
          <!-- DOC: Apply "sidebar-search-bordered sidebar-search-solid" class the below search form to have bordered & solid search box -->
          <form class="sidebar-search  " action="page_general_search_3.html" method="POST">
            <a href="javascript:;" class="remove">
              <i class="icon-close"></i>
            </a>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <a href="javascript:;" class="btn submit">
                  <i class="icon-magnifier"></i>
                </a>
              </span>
            </div>
          </form>
          <!-- END RESPONSIVE QUICK SEARCH FORM -->
        </li>
        <li class="nav-item start active open">
          <a href="javascript:;" class="nav-link nav-toggle">
            <i class="icon-home"></i>
            <span class="title">签约认证</span>
            <span class="selected"></span>
            <span class="arrow open"></span>
          </a>
          <ul class="sub-menu">
            <li class="nav-item start active open">
              <router-link :to="{ path: '/signings'}" class="nav-link">
                <i class="icon-bar-chart"></i>
                <span class="title">签约审核</span>
                <span class="selected"></span>
              </router-link>
            </li>
            <li class="nav-item start ">
              <router-link :to="{ path: '/orderRejects'}" class="nav-link">
                <i class="icon-bulb"></i>
                <span class="title">退订审核</span>
              </router-link>
            </li>
            <li class="nav-item start ">
              <router-link :to="{ path: '/audits'}" class="nav-link">
                <i class="icon-graph"></i>
                <span class="title">实名认证</span>
              </router-link>
            </li>
          </ul>
        </li>

      </ul>
      <!-- END SIDEBAR MENU -->
      <!-- END SIDEBAR MENU -->
    </div>
    <!-- END SIDEBAR -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  methods: {},

  mounted: function() {}
};
</script>
<style scoped>

</style>
