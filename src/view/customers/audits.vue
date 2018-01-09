<!--实名认证-->
<template>
    <div class="signings-container">
        <page-bar :params="pageBar"></page-bar>
        实名认证
    </div>
</template>
<script>
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
  components: {},
  mounted() {},
  methods: {}
};
</script>
