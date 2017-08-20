/*
* @Author: wen-sr
* @Date:   2017-08-20 11:39:23
* @Last Modified by:   wen-sr
* @Last Modified time: 2017-08-20 18:28:58
*/
var _mm = require('util/mm.js');
var userService = {
	//登录
	login : function(userInfo, resolve, reject){
		_mm.request({
			method	: 'POST',
			url		: _mm.getServerUrl('/user/login.do'),
			data	: userInfo,
			success : resolve,
			error	: reject
		});
	},
	register : function(userInfo, resolve, reject){
		_mm.request({
			method 	: 'POST',
			url 	: _mm.getServerUrl('/user/register.do'),
			data	: userInfo,
			success	: resolve,
			error	: reject
		})
	},
	checkUsername : function(username, resolve, reject){
		_mm.request({
			method 	: 'POST',
			url 	: _mm.getServerUrl('/user/checkUsername.do'),
			data	: username,
			success	: resolve,
			error	: reject
		})
	}

}


module.exports = userService;