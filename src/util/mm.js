/*
* @Author: wen-sr
* @Date:   2017-08-19 13:13:08
* @Last Modified by:   wen-sr
* @Last Modified time: 2017-08-19 14:29:08
*/
var Hogan = require('hogan.js');
var conf = {
	sserverHost : ''
}
var  _mm = {
	request : function(param){
		var _this = this;
		$.ajax({
			type 		: param.method 		|| 'get',
			url 		: param.url 		|| '',
			dataType 	: param.dataType 	|| 'json',
			data 		: param.data 		|| '',
			success 	: function(res){
				if(0 === res.status){//请求成功
					typeof param.success === 'function' && param.success(res.data, res.msg);
				}else if(10 === res.status){//没有登录
					_this.doLogin();
				}else if(1 === res.status){//请求数据错误
					typeof param.error === 'function' && param.error(res.msg);
				}
			},
			error 		: function(err){
				typeof param.error === 'function' && param.error(err.statusText);
			}
		});
	},
	//获取服务器地址
	getServerUrl : function(path){
		return conf.sserverHost + path;
	},
	//获取url参数
	getUrlParam : function(name){
		var reg 	= new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
		var result 	= window.location.search.substr(1).match(reg);
		return result ? decodeURIComponent(result[2]):null;
	},
	//渲染html模板，需要先安装：npm install hogan --save-dev
	renderHtml : function (htmlTemplate, data){
		var template = Hogan.compile(htmlTemplate),
			result = template.render(data);
		return result; 
	},
	//成功提示
	successTips : function(msg){
		alert(msg || '操作成功');
	},
	//成功提示
	errorTips : function(msg){
		alert(msg || '哪里不对了');
	},
	// 字段的验证
	validate : function(value, type){
		var value = $.trim(value);
		//非空
		if('require' === type){
			return !!value;
		}
		//手机号验证
		if('phone' === type){
			return /^1\d{10}$/.test(value);
		}
		//邮箱
		if('email' === type){
			return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
		}
		//非负整数
		if('intNumber' === type){
			return  /^(0|[1-9]\d*)$/.test(value);
		}
		//非负数字
		if('number' === type){
			return /^\d+(\.{0,1}\d+){0,1}$/.test(value);
		}
	},
	//统一登录处理
	doLogin : function(){
		window.location.href = "./login.html?redirect=" + encodeURIComponent(window.location.href);
	},
	goHome : function(){
		window.location.href = './index.html';
	}

};	

module.exports = _mm;