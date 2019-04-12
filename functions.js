function fetchContent(section,content) {
	var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.responseType = "text";
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState === 4 && xhttp.status === 200) {
			document.getElementsByTagName(section)[0].innerHTML = xhttp.responseText;
		} else if (xhttp.readyState === 4 && xhttp.status === 404) {
			document.getElementsByTagName(section)[0].innerHTML = "BOOM GOES THE WYRMITE";
		}
	}
	xhttp.open("GET", content, true);
	xhttp.send();
}

document.addEventListener("DOMContentLoaded", function (event) {
	
	fetchContent("content","home.html");
	
	var nav = document.getElementsByClassName("nav");
	for (i = 0; i < nav.length; i++) {
		nav[i].addEventListener("click", function() {
			var val = this.value;
			fetchContent("content",val)
		});
	}
	
});
