<template>
  <div class="signings-container">
    <!--签约记录一览-->
    <page-bar :params="pageBar"></page-bar>
    <div class="search-container form">
      <form class="form-horizontal" role="form">
        <div class="form-body">
          <div class="form-group">
            <div class="col-md-4">
              <label class="col-md-3 control-label">
                <div>省级组织机构</div>
              </label>
              <div class="col-md-9">
                <input type="text" class="form-control" placeholder="">
              </div>
            </div>
            <div class="col-md-4">
              <label class="col-md-3 control-label">
                <div>市级组织机构</div>
              </label>
              <div class="col-md-9">
                <input type="text" class="form-control" placeholder="">
              </div>
            </div>
            <div class="col-md-4">
              <label class="col-md-3 control-label">
                <div>区县组织机构</div>
              </label>
              <div class="col-md-9">
                <input type="text" class="form-control" placeholder="">
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-4">
              <label class="col-md-3 control-label">
                <div>服务中心</div>
              </label>
              <div class="col-md-9">
                <input type="text" class="form-control" placeholder="">
              </div>
            </div>
            <div class="col-md-4">
              <label class="col-md-3 control-label">
                <div>审核状态</div>
              </label>
              <div class="col-md-9">
                <input type="text" class="form-control" placeholder="">
              </div>
            </div>
            <div class="col-md-4">
              <label class="col-md-3 control-label">
                <div> </div>
              </label>
              <div class="col-md-9 text-right">
                <button type="button" class="btn btn-primary search-btn">查询</button>
                <router-link :to="{ path: '/signings/add'}" class="btn btn-primary add-btn">新增</router-link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
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
            field: "operation",
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
  mounted() {
    $(".signings-container")
      .on("click.table", ".examine", function() {
        alert("审核");
      })
      .on("click.table", ".del", function() {
        alert("删除");
      });
  },
  methods: {
    tableRander() {
      $(".custom-column").each(function(i, input) {
        //$(input).params('tr:eq(0)').find('[data-params]')
        if ($(input).data("field") == "operation") {
          $(input).find("div").append(`
              <button type="button" class="custom-element btn btn-primary examine">审核</button>
              <button type="button" class="custom-element btn btn-danger del">删除</button>
              `);
        }
      });
    },
    add() {
      alert(1);
    }
  }
};
</script>
