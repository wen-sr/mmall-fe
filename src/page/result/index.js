/*
* @Author: wen-sr
* @Date:   2017-08-19 22:36:40
* @Last Modified by:   wen-sr
* @Last Modified time: 2017-08-19 23:07:30
*/

require('page/common/nav/index.js');
require('./index.css');

var _mm = require('util/mm.js');

$(function(){
	var type = _mm.getUrlParam('type') || 'default';
	$('.' + type + '-success').show();
});


