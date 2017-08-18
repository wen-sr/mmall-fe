module.exports = {
    entry:{
    	"index" : "./src/page/index/index.js",
    	"admin" : "./src/page/admin/admin.js"
    },
    output:{
    	path:"./dist/js",
    	filename : "[name].bundle.js"
    }
};