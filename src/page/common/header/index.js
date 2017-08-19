/*
* @Author: wen-sr
* @Date:   2017-08-19 16:09:18
* @Last Modified by:   wen-sr
* @Last Modified time: 2017-08-19 21:22:11
*/
require('./index.css');

var _mm  = require('util/mm.js');
//通用页面头部
var header = {
	init : function(){
		this.bindEvent();
	},
	onLoad : function(){
		var keyword = _mm.getUrlParam('keyword');
		if(keyword){
			$("#search-input").val(keyword)
		}
	},
	bindEvent : function(){
		var _this = this;
		$("#search-btn").click(function(){
			_this.searchSubmit();
		});
		//回车后提交
		$("#search-input").keyup(function(e){
			if(e.keyCode === 13 ){
				_this.searchSubmit();
			}
		});
	},
	searchSubmit : function(){
		var keyword = $.trim($("#search-input").val());
		if(keyword){
			window.location.href = './list.html?keyword=' + keyword;
		}else{
			_mm.goHome();
		}
	}

};

header.init();
