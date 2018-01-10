import util from "./util";

export default function (options) {
  var tableVue = {
    data() {
      return Object.assign({
        dataList: []
      }, options.data || {});
    },
    components: Object.assign({}, options.components || {}),
    created() {
      
      this.getData();
    },
    methods: Object.assign({
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      getData: function () {
        var _this = this;
        util.get(Object.assign(options, {
          type: "pagination-table",
          url: options.list_url,
          success(res) {
            //列表获取成功
            var result = res.data.result;
            _this.dataList = result.list;
            // // 返回总记录数
            // _this.totalSize = result.iTotalRecords * 10;
            // _this.totalPage = Math.ceil(_this.totalSize / _this.limit);
            // _this.refreshPageCon();
            // setTimeout(() => {
            //   $(".custom-element").remove();
            //   _this.$emit("tableRander");
            // });
            
            setTimeout(() => {
              //$('.el-table__header-wrapper col[name=gutter],.el-table__header-wrapper th.gutter').remove();
              util.scroll($('.el-table__body-wrapper'))
              //更新列宽
              // if ($('table.el-table__body').width() <= $('table.el-table__body').parent().width()) {
              //   $('.el-table__header-wrapper col[name=gutter],.el-table__header-wrapper th.gutter').remove()
                // $('.el-table__body-wrapper tr:eq(0) td').each((i, td) => {

                //   $('.el-table__header-wrapper col:eq(' + i + ')').css({
                //     minWidth: parseInt($(td).width()),
                //     width: parseInt($(td).width())
                //   });
                // })

                // $('.el-table__header-wrapper th').each((i,th)=>{
                //   console.log($(th).width())
                //   $('.el-table__body-wrapper col:eq(0)').css('width',$(th).width())
                // })

              // }
            });
            // if ($('table.el-table__body').width() > $('table.el-table__body').parent().width()) {
            //   $('.el-table__header-wrapper col[name=gutter],.el-table__header-wrapper th.gutter').remove()
            // }
          }
        }))
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }, options.methods || {})
  };

  return tableVue;
}
