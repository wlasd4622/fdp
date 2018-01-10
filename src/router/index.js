import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home/home'
import signings from '../views/signings/list' //签约审核列表
import signingsAdd from '../views/signings/add'	//签约审核 添加
import orderRejects from '../views/service/orderRejects' //退订审核列表
import audits from '../views/customers/audits' //实名认证
import servicePackage from '../views/servicePackage/list' //服务包管理 列表
import servicePackageAdd from '../views/servicePackage/add' //服务包管理 新建
import servicePackageCopyAdd from '../views/servicePackage/copyadd' //服务包管理 复制新建
import elmtest from '../views/elm/elmtest'
Vue.use(Router)

export default new Router({
	routes: [{
		path: '/service-package/list',
		name: 'servicePackage',
		component: servicePackage
	},{
		path: '/service-package/add',
		name: 'servicePackageAdd',
		component: servicePackageAdd
	},{
		path: '/service-package/copyadd',
		name: 'servicePackageCopyAdd',
		component: servicePackageCopyAdd
	},{
		path: '/home',
		name: 'home',
		component: home
	}, {
		path: '/signings/list',
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