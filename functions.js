document.addEventListener("DOMContentLoaded", function (event) {
	
	function fetchContent(section,content) {
		
		var xhttp;
		var url;
		switch (content) {
			case content:
				url = content;
				break;
			default:
				url = "404.html";
		}
		
		xhttp = new XMLHttpRequest();
		xhttp.responseType = "text";
		xhttp.onreadystatechange = function () {
			
			if (xhttp.readyState === 4 && xhttp.status === 200) {
				
				document.getElementsByTagName(section)[0].innerHTML = xhttp.responseText;
				
			}
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	}
	
	fetchContent("header","header.html");
	fetchContent("content","home.html");
	fetchContent("footer","footer.html");
	
	var nav = document.getElementsByClassName("nav");
	for (i = 0; i < nav.length; i++) {
		
		nav[i].addEventListener("click", function() {
			
			var page = this.value;
			fetchContent("content",page)
			
		});
		
	}
	
});
