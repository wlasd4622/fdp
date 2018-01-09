<template>
  <div class="signings-container">
    <!--签约记录一览-->
    <page-bar :params="pageBar"></page-bar>
    <tableComponent :params="tableParams" v-on:tableRander="tableRander"></tableComponent>
  </div>
</template>
<script>
import tableComponent from "../../components/tableComponent";
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
          title: "签约审核",
          url: ""
        }
      ],
      tableParams: {
        url: "",
        columns: [
          {
            field: "memberId",
            type: "checkbox"
          },
          {
            name: "卡号",
            field: "memberNo"
          },
          {
            name: "等级",
            field: "memberGradeName"
          },
          {
            name: "积分",
            field: "bouns"
          },
          {
            name: "余额",
            field: "blanceStr"
          },
          {
            name: "状态",
            field: "memberStateName"
          },
          {
            name: "有效期",
            field: "validityDateStr"
          },
          {
            name: "注册时间",
            field: "regDate"
          },
          {
            name: "操作",
            field: "memberNo",
            custom: ["memberId", "blanceStr"]
          }
        ]
      }
    };
  },
  components: {
    tableComponent,
    pageBar
  },
  methods: {
    aa() {
      alert(1);
    },
    bbaa() {
      alert(2);
    },
    tableRander() {
      $(".custom-column").each(function(i, input) {
        console.log(input);
      });
    }
  }
};
</script>
