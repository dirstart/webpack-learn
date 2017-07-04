var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/bundle.js'
	},
	module: {
		loaders:[{
			test:/\.js$/,
			loader:'babel-loader',
			exclude:path.resolve(__dirname,'/node_modules/'),
			include:path.resolve(__dirname,'/src/'),
			query:{
				presets:['es2015']
			}
		},{
			test:/\.html$/,
			loader:'html-loader'
		},{
			test:/\.css$/,
			use:[
				'style-loader',{
					loader:"css-loader",
					options:{importLoaders:1}
					// 这句话的意思是如果有import的进来的文件也进行处理
				},{
					loader:"postcss-loader",
					options:{
						plugins:(loader)=>[
							require('postcss-import')({root:loader.resourcePath}),
							// 这个是用来处理import情况的
							require('autoprefixer')()
							// require('cssnano')
							// 这句话应该是用来压缩的
						]
					}
				}
			]
		},{
			test:/\.less$/,
			use:[
				'style-loader',{
					loader:'css-loader',
					options:{importLoaders:1}
				},{
					loader:'postcss-loader',
					options:{
						plugins:(loader)=>[
							require('postcss-import')({root:loader.resourcePath}),
							// 这个是用来处理import情况的
							require('autoprefixer')(),
							require('cssnano')
							// 这句话应该是用来压缩的
						]
					}
				},'less-loader'
			]
		}]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body'
		})
	]

}