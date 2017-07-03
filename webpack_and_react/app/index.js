require("./components/header.js");

document.write("me");
document.write("what");

var oDiv=document.createElement('div');
oDiv.innerHTML="test for god,test for reload,for test,ttt";
oDiv.innerHTML+="这样就不是整个页面刷新了";
var oBody=document.getElementsByTagName("body")[0];
oBody.appendChild(oDiv);
