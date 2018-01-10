<!--退订审核-->
<template>
    <div class="signings-container">
        <page-bar :params="pageBar"></page-bar>
        退订审核
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
          title: "退订审核",
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
