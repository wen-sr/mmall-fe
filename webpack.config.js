/*
* @Author: wen-sr
* @Date:   2017-08-18 21:33:47
* @Last Modified by:   wen-sr
* @Last Modified time: 2017-08-19 00:00:16
*/
//加载webpack对象，plugins里面使用
var webpack 			= require("webpack");
//独立抽取css代码插件
var ExtractTextPlugin 	= require("extract-text-webpack-plugin");
//生成html插件
var HtmlWebpackPlugin 	= require('html-webpack-plugin');
// 环境变量配置，dev / online
var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';

var getHtmlConfig = function(name){
	return {
		template : './src/view/' + name + '.html',
		filename : 'view/'+ name + '.html',
		inject : true,
		hash : true,
		chunks : ['common', name]
	}
}
module.exports = {
    entry:{
    	"common": "./src/page/common/base.js",
    	"index" : "./src/page/index/index.js",
    	"admin" : "./src/page/admin/admin.js"
    },
    output:{
    	path:"./dist",
    	publicPath : '/dist',
    	filename : "js/[name].bundle.js"
    },
    externals : {
    	'jquery' : 'window.jQuery'
    },
    resolve : {
        alias : {
            node_modules    : __dirname + '/node_modules',
            util            : __dirname + '/src/util',
            page            : __dirname + '/src/page',
            service         : __dirname + '/src/service',
            image           : __dirname + '/src/image'
        }
    },
    plugins : [
    	// 独立通用模块到js/base.js
    	new webpack.optimize.CommonsChunkPlugin({
    		name : 'common',
    		filename : 'js/base.bundle.js'
    	}),
    	// 把css单独打包到文件里
    	new ExtractTextPlugin("css/[name].bundle.css"),
    	// html模板的处理
    	new HtmlWebpackPlugin(getHtmlConfig('index')),
    	new HtmlWebpackPlugin(getHtmlConfig('admin')),
    	new HtmlWebpackPlugin(getHtmlConfig('a')),
    ],
    module : {
    	loaders : [{
    		test : /\.css$/,
    		loader : ExtractTextPlugin.extract("style-loader","css-loader")
    	},{ 
    		test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' 
    	},{ 
    		test: /\.string$/, loader: 'html-loader'
    	}]
    }
};

if('dev' === WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
}