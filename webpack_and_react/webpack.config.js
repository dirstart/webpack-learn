var path=require('path');
module.exports={
	entry:path.resolve(__dirname,'./app/index.js'),
	// __dirname表示当前运行的js所在的目录
	output:{
		path:path.resolve(__dirname,'/build'),
		filename:"bundle.js"
	}
}