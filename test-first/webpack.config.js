module.exports={
	devtool: 'eval-source-map',//配置生成Source Maps,选择合适的选项
	entry: __dirname + "/app/main.js",
	output:{
		path: __dirname + "/public",
		filename: "bundle.js"
	}
}