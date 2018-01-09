<template>
    <div class="page-bar">
        <ul class="page-breadcrumb">
            <li v-for="item in params">
                <a href="index.html">{{item.title}}</a>
                <i class="fa fa-circle"></i>
            </li>
            <!--<li>
                <a href="#">Tables</a>
                <i class="fa fa-circle"></i>
            </li>-->
            
        </ul>
        <div class="page-toolbar hide">
            <div class="btn-group pull-right">
                <button type="button" class="btn green btn-sm btn-outline dropdown-toggle" data-toggle="dropdown" aria-expanded="false"> Actions
                    <i class="fa fa-angle-down"></i>
                </button>
                <ul class="dropdown-menu pull-right" role="menu">
                    <li>
                        <a href="#">
                            <i class="icon-bell"></i> Action</a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="icon-shield"></i> Another action</a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="icon-user"></i> Something else here</a>
                    </li>
                    <li class="divider"> </li>
                    <li>
                        <a href="#">
                            <i class="icon-bag"></i> Separated link</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
      params:{}
  },
  data() {
    return {};
  },

  methods: {},

  mounted: function() {}
};
</script>
<style scoped>

</style>
