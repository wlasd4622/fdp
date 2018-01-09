import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/css/main.css'
import '../src/assets/css/common.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.config.productionTip = false
window.GeminiScrollbar = require("gemini-scrollbar");
import "gemini-scrollbar/gemini-scrollbar.css";

// 引入mockjs
require('./mock.js')

Vue.use(ElementUI)

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})