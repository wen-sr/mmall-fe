/*
* @Author: wen-sr
* @Date:   2017-08-19 15:41:28
* @Last Modified by:   wen-sr
* @Last Modified time: 2017-08-20 17:42:11
*/
require('./index.css')
var _mm = require('util/mm.js');
var nav = {
	init : function(){
		this.bindEvent();
	},
	bindEvent : function(){
		_this = this;
		$(".js-login").click(function(){
			_mm.doLogin();
		});
		$(".js-register").click(function(){
			window.location.href="./user-register.html";
		});
	}
}

nav.init();