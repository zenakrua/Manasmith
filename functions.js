document.addEventListener("DOMContentLoaded", function (event) {
	
	function fetchContent(val) {
		
		var xhttp;
		xhttp = new XMLHttpRequest();
		xhttp.responseType = "text";
		xhttp.onreadystatechange = function () {
			
			if (xhttp.readyState === 4 && xhttp.status === 200) {
				
				document.getElementsByTagName("content")[0].innerHTML = xhttp.responseText;
				
			}
		};
		xhttp.open("GET", val, true);
		xhttp.send();
	}
	
	fetchContent("home.html");
	
	var nav = document.getElementsByClassName("nav");
	for (i = 0; i < nav.length; i++) {
		
		nav[i].addEventListener("click", function() {
			
			var val = this.value;
			fetchContent(val)
			
		});
		
	}
	
});
