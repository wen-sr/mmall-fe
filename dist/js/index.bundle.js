webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(78);


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

	/*
	* @Author: wen-sr
	* @Date:   2017-08-18 21:36:09
	* @Last Modified by:   wen-sr
	* @Last Modified time: 2017-08-19 13:55:13
	*/
	__webpack_require__(2);
	__webpack_require__(79);
	var _mm = __webpack_require__(85)

	$("body").html("wen-sr");

	// _mm.request({
	// 	url:'/product/list.do?keyword=1',
	// 	success:function(res){
	// 		console.log(res);
	// 	},
	// 	error:function(err){
	// 		console.log(err);
	// 	}
	// });
	console.log(_mm.getUrlParam('test'));

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

	/*
	* @Author: wen-sr
	* @Date:   2017-08-19 13:13:08
	* @Last Modified by:   wen-sr
	* @Last Modified time: 2017-08-19 14:06:07
	*/
	var Hogan = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"hogan\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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
		//统一登录处理
		doLogin : function(){
			window.location.href = "./login.html?redirect=" + encodeURIComponent(window.location.href);
		}

	};	

	module.exports = _mm;

/***/ })

});