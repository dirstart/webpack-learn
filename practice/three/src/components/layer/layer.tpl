<div class="layer">
	<img src="${require('../../assets/xx.jpg')}">
	<div>this is <%= name %> layer</div>
	<% for (var i=0;i<arr.length;i++){ %>
	<%=arr[i]%>
	<% } %>
</div>