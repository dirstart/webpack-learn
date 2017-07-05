import Layer from './components/layer/layer.js';
import './css/common.css';

const App=function(){
	var dom=document.getElementById("app");
	var layer=new Layer();
	dom.innerHTML=layer.tpl({
		name:'john',
		arr:['iphone','huawe']
	});
	// 在这个括号中传入数据
}
new App();