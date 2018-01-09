import Vue from 'vue'
import Router from 'vue-router'
import home from '../view/home/home'
import signings from '../view/signings/signings' //签约审核列表
import signingsAdd from '../view/signings/add'	//签约审核 添加
import orderRejects from '../view/service/orderRejects' //退订审核列表
import audits from '../view/customers/audits' //实名认证

import elmtest from '../view/elm/elmtest'
Vue.use(Router)

export default new Router({
	routes: [{
		path: '/home',
		name: 'home',
		component: home
	}, {
		path: '/signings',
		name: 'signings',
		component: signings
	}, {
		path: '/signings/add',
		name: 'signingsAdd',
		component: signingsAdd
	},  {
		path: '/orderRejects',
		name: 'orderRejects',
		component: orderRejects
	},  {
		path: '/audits',
		name: 'audits',
		component: audits
	},  {
		path: '/elmtest',
		name: 'elmtest',
		component: elmtest
	},{
		path: '/',
		name: 'default',
		component: home
	}, {
		path: '*',
		name: 'default',
		component: home
	}]
})