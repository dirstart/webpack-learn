var path=require('path');
var htmlWebpackPlugin=require('html-webpack-plugin');
var autoprefixer=require('autoprefixer');
var webpack=require('webpack');

module.exports={
	entry:'./src/app.js',
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename:'js/bundle.js'
	},
	module:{
		loaders:[{
			test:/\.js$/,
			loader:'babel-loader',
			exclude:path.resolve(__dirname,'/node_modules/'),
			include:path.resolve(__dirname,'/src/'),
			query:{
				presets:["es2015"]
			}
		},{
			test:/\.css$/,
			use:[
			"style-loader",
			{
				loader:"css-loader",
				options:{importLoaders:1}
				// 上面这句话的意思为如果css中有import进来的文件也进行处理
			},
			{
				loader:"postcss-loader",
				options:{
					plugins:(loader)=>[
						require('postcss-import')({root:loader.resourcePath}),
						// 也许是用来处理 @import这种情况的
						require('autoprefixer')(),
						require('cssnano')
					]
				}
			}]
		}]
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:'body'
		})
	]
}