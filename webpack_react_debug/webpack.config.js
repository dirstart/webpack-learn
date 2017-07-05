var path=require('path');

module.exports={
	entry:path.resolve(__dirname,'./app/main.js'),
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'./build')
	},
	devServer:{
		port:8080,
		contentBase:"./build"
	}
}