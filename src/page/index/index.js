/*
* @Author: wen-sr
* @Date:   2017-08-18 21:36:09
* @Last Modified by:   wen-sr
* @Last Modified time: 2017-08-19 22:33:28
*/
// require('../../util/js/base.js');
// require('../../page/index/index.css');
// require('page/common/nav-simple/index.js');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');


navSide.init({
	name : 'about'
});
// $("body").html("wen-sr");

// _mm.request({
// 	url:'/product/list.do?keyword=1',
// 	success:function(res){
// 		console.log(res);
// 	},
// 	error:function(err){
// 		console.log(err);
// 	}
// });
// console.log(_mm.getUrlParam('test'));

// var html = '<div>{{data}}</div>';
// var data = {
// 	data : "abv"
// }
// console.log(_mm.renderHtml(html,data));