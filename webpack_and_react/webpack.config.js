// var path=require('path');
const {resolve}=require('path');
const webpack=require('webpack');
// 热加载的存在是为了不每次刷新都全体刷新，这样每次都重复会很慢
// 往往真正的工程都非常大
// webpack-dev-server是自带刷新功能的，并且它是有两种模式的
// 1.iframe模式下，加载的之后只加载这个框架
// 2.inline模式下，一个小型的webpack-dev-server会作为入口文件打包,
//		会在后端代码改变的时候刷新页面
module.exports={
	context:__dirname,
	entry:[
		'./app/index.js'
	],
	output:{
		path:resolve(__dirname,'/build'),
		filename:"bundle.js"
		// publicPath:"/"
	}
}
// module.exports={
// 	entry:path.resolve(__dirname,'./app/index.js'),
// 	// __dirname表示当前运行的js所在的目录
// 	output:{
// 		path:path.resolve(__dirname,'/build'),
// 		filename:"bundle.js"
// 	},
// 	devServer:{
// 		port:8080,
// 		contentBase:"./build",
// 		historyApiFallback:true
// 	}
// }