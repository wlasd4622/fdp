import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/css/main.css'
import '../src/assets/css/common.scss'
Vue.config.productionTip = false

// 引入mockjs
require('./mock.js')

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})