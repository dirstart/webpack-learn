const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
	entry:'./src/script/main.js',
	output:{
		// filename:'bundle.js',
		filename:'[name]-[chunkhash].js',
		path:path.resolve(__dirname,'./dist/js')
	},
	plugins:[
		new htmlWebpackPlugin()
	]
}