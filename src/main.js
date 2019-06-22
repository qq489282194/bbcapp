// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import mixin from './utils/mixin'
import md5 from 'js-md5';
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()
Es6Promise.polyfill()
import NutUI from '@nutui/nutui';
// import { ShortPassword } from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';


NutUI.install(Vue);
// ShortPassword.install(Vue)
/*全局混入方法*/
Vue.mixin(mixin)

Vue.config.productionTip = false

Vue.prototype.$md5 = md5;

//调原生
Vue.prototype.$system_details = function(id, type) {
	var u = navigator.userAgent,
		app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	let params = {
		"modelId": id,
		"type": type
	};
	if (isAndroid) {
		params = JSON.stringify(params)
		window.JsToJava.toDetail(params);
	} else {
		window.webkit.messageHandlers.toDetail.postMessage(params)
	}
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
