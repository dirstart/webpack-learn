const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
	entry:{
		main:'./src/script/main.js',
		a:'./src/script/a.js',
		b:'./src/script/b.js'
	},
	output:{
		// filename:'bundle.js',
		filename:'js/[name]-[chunkhash].js',
		path:path.resolve(__dirname,'./dist')
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'a_b_main.html',
			template:'index.html',
			title:'this is a,b,main',
			// date:new Date(),
			minify:{
				removeComments:true,
				collapseWhitespace:true
			},
			chunks:['a','b','main']
		}),
		new htmlWebpackPlugin({
			filename:'a_main.html',
			template:'index.html',
			title:'this is a,b,main',
			// date:new Date(),
			minify:{
				removeComments:true,
				collapseWhitespace:true
			},
			chunks:['a','main']
		}),
		new htmlWebpackPlugin({
			filename:'a.html',
			template:'index.html',
			title:'this is a,b,main',
			// date:new Date(),
			minify:{
				removeComments:true,
				collapseWhitespace:true
			},
			chunks:['a']
		})
	]
}