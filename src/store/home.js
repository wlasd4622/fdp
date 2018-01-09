import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


// 定义状态state
const state = {
  list:[
    {
      name:'wwl'
    },
    {
      name:'wwl1'
    }
  ]
}

// 设置暴露接口
export default new Vuex.Store({
  state
});
