/*
* @Author: wen-sr
* @Date:   2017-08-18 21:36:27
* @Last Modified by:   wen-sr
* @Last Modified time: 2017-08-20 17:45:04
*/

require('page/common/nav-simple/index.js');
require('./index.css');
var _userService = require('service/user-service.js');

var _mm = require('util/mm.js');

var formError = {
	show : function(msg){
		$(".error-item").show();
		$(".error-item .error-msg").text(msg);
	},
	hide : function(){
		$(".error-item").hide();
		$(".error-item .error-msg").text('');	
	}
}


var login = {
	init : function(){
		this.bindEvent();
	},
	bindEvent : function(){
		_this = this;
		$(".btn").click(function(){
			_this.formSubmit();
		});
		//在用户名栏按下回车，焦点调至密码
		$("#username").keyup(function(e){
			if(e.keyCode === 13){
				$("#password").focus();
			}
		});
		//在密码框按下回车，提交表单
		$("#password").keyup(function(e){
			if(e.keyCode === 13){
				_this.formSubmit();
			}
		});
	},
	formSubmit : function(){
		var formData = {
			username : $.trim($("#username").val()),
			password : $.trim($("#password").val())
		};
		var validateResult = _this.formValidate(formData);
		if(validateResult.status){
			//验证通过
			_userService.login(formData,function(res){
				//登录成功
				window.location.href = _mm.getUrlParam('redirect') || './index.html';
			},function(errMsg){
				//登录失败
				formError.show(errMsg);
			});
		}else{
			//验证不通过
			formError.show(validateResult.msg);
		}
	},
	formValidate : function(formData){
		var validateResult = {
			status	: true,
			msg		: '验证通过~~~'
		}
		if(!_mm.validate(formData.username, "require")){
			validateResult.status 	= false;
			validateResult.msg 		= '用户名不能为空';
			return validateResult;
		}
		if(!_mm.validate(formData.password, "require")){
			validateResult.status 	= false;
			validateResult.msg 		= '密码不能为空';
			return validateResult;
		}
		return validateResult;
	}
};

$(function(){
	login.init();
});

