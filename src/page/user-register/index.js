/*
* @Author: wen-sr
* @Date:   2017-08-20 13:22:17
* @Last Modified by:   wen-sr
* @Last Modified time: 2017-08-20 18:33:29
*/
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');
var _userService = require('service/user-service.js');

var formError = {
	show : function(msg){
		$(".error-item").show().find(".error-msg").text(msg);
	},
	hide : function(){
		$(".error-item").hide().find(".error-msg").text("");
	}
};

var userRegister = {
	init : function(){
		this.bindEvent();
	},
	bindEvent : function(){
		_this = this;
		$(".btn").click(function(){
			_this.formSubmit();
		});
		$(".user-content").on('keyup',function(e){
			if(e.keyCode === 13){
				_this.formSubmit();
			}
		});
		$("#username").blur(function(){
			var username = $.trim($(this).val());
			_userService.checkUsername(username,function(){},function(msg){
				formError.show(msg);
			});
		});
	},
	formSubmit : function(){
		var formData = {
			username 			: $.trim($("#username").val()),
			password 			: $.trim($("#password").val()),
			password_comnfirm	: $.trim($("#password2").val()),
			phone 				: $.trim($("#phone").val()),
			email 				: $.trim($("#email").val()),
			question			: $.trim($("#question").val()),
			answer 				: $.trim($("#answer").val())
		};
		var validateResult = this.formValidata(formData);
		if(validateResult.status){
			_userService.register(formData,function(res){
				window.location.href="./result.html?type=register";
			},function(msg){
				formError.show(msg);
			});
		}else{
			formError.show(validateResult.msg);
		}
	},
	formValidata : function(formData){
		var validateResult = {
			status 	: "true",
			msg 	: "验证通过"
		};
		if(!_mm.validate(formData.username,"require")){
			validateResult.status	= false;
			validateResult.msg 	 	= "用户名不能为空";
			return validateResult;
		}
		if(!_mm.validate(formData.password, "require")){
			validateResult.status	= false;
			validateResult.msg 	 	= "密码不能为空";
			return validateResult;
		}
		if(formData.password.length < 6){
            validateResult.msg = '密码长度不能少于6位';
            return validateResult;
        }
		if(formData.password != formData.password_comnfirm){
			validateResult.status	= false;
			validateResult.msg 	 	= "两次输入的密码不一致";
			return validateResult;
		}
		if(!_mm.validate(formData.phone, "phone")){
			validateResult.status	= false;
			validateResult.msg 	 	= "手机号格式不正确";
			return validateResult;
		}
		if(!_mm.validate(formData.email, "email")){
			validateResult.status	= false;
			validateResult.msg 	 	= "邮箱格式不正确";
			return validateResult;
		}
		if(!_mm.validate(formData.question, "require")){
			validateResult.status	= false;
			validateResult.msg 	 	= "密码提示问题不能为空";
			return validateResult;
		}
		if(!_mm.validate(formData.answer, "require")){
			validateResult.status	= false;
			validateResult.msg 	 	= "密码提示答案不能为空";
			return validateResult;
		}
		formError.hide();
		return validateResult;
	}
};

$(function(){
	userRegister.init();
})