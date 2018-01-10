<!--实名认证-->
<template>
    <div class="signings-container">
        <page-bar :params="pageBar"></page-bar>
        实名认证
    </div>
</template>
<script>
import pageBar from "../../components/pageBarComponent";
export default {
  data() {
    return {
      pageBar: [
        {
          title: "审核认证",
          url: ""
        },
        {
          title: "实名认证",
          url: ""
        }
      ]
    };
  },
  components: {
 
    pageBar
  },
 
  mounted() {},
  methods: {}
};
</script>