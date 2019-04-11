document.addEventListener("DOMContentLoaded", function (event) {
	
	function fetchContent(section,content) {
		var xhttp;
		var url;
		xhttp = new XMLHttpRequest();
		xhttp.responseType = "text";
		xhttp.onreadystatechange = function () {
			if (xhttp.readyState === 4 && xhttp.status === 200) {
				url = content;
			}
			document.getElementsByTagName(section)[0].innerHTML = content + url + xhttp.responseText;
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	}
	
	var nav = document.getElementsByClassName("nav");
	for (i = 0; i < nav.length; i++) {
		nav[i].addEventListener("click", function() {
			var val = this.value;
			fetchContent("content",val)
		});
	}
	
});
