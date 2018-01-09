<template>
  <div id="app" class="">
    <headerComponent></headerComponent>
    <div class="clearfix"> </div>
    <div class="page-container">
      <menuComponent></menuComponent>
      <div class="page-content-wrapper">
        <div class="page-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import headerComponent from "./components/headerComponent";
import menuComponent from "./components/menuComponent";
import footerComponent from "./components/footerComponent";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    headerComponent,
    menuComponent,
    footerComponent
  },

  methods: {},

  mounted: function() {

  }
};
</script>

