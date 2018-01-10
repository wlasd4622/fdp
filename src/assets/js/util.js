import axios from "axios";
export default {
  //TODO  token 异常处理
  /**
   * request get
   */
  get(options) {
    axios.get(options.url)
      .then(res => {
        if (res.status == 200) {
          if (options.success)
            options.success(res);

        } else {
          console.error(res.statusText);
          if (options.error)
            options.error(res)
        }
      })
      .catch(error => {
        console.error(error);
        if (options.error)
          options.error(res)
      });
  },
  /**
   * request post
   */
  post(options) {
    axios.post(options.url, options.data)
      .then(res => {
        if (res.status == 200) {
          if (options.success)
            options.success(res);
        } else {
          console.error(res.statusText);
          if (options.error)
            options.error(error)
        }
      })
      .catch(error => {
        console.error(error);
        if (options.error)
          options.error(error)
      });
  },
  scroll(e) {
    return $(e).niceScroll({
      cursorcolor: "#bdc5ca", // #CC0071 光标颜色
      cursoropacitymax: 1, // 改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
      touchbehavior: false, // 使光标拖动滚动像在台式电脑触摸设备
      cursorwidth: "6px", //滚动条的宽度，单位：便素
      cursorborder: "1", // 游标边框css定义
      cursorborderradius: "2px", // 以像素为光标边界半径
      autohidemode: false,
      scrollspeed: 10, // 滚动速度，默认值为60
      railpadding: {
        top: 0.5,
        right: 0.5,
        left: 0.5,
        bottom: 0.5
      }, // 设置轨道的内间距
      oneaxismousemode: "false" // 当只有水平滚动时可以用鼠标滚轮来滚动，如果设为false则不支持水平滚动，如果设为auto支持双轴滚动

    })
  }
}
