document.addEventListener("DOMContentLoaded", function(event) {
	
	function fetchData(url) {
		var xhttp;
		xhttp = new XMLHttpRequest();
		xhttp.responseType = "json";
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementsByTagName("content")[0].insertAdjacentHTML("beforeend",xhttp.responseText);
			}
		};
		xhttp.open("GET", url, true);
		xhttp.send();
		return;
	};

	function fetchContent(url) {
		var xhttp;
		xhttp = new XMLHttpRequest();
		xhttp.responseType = "text";
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementsByTagName("content")[0].insertAdjacentHTML("beforeend",xhttp.responseText);
			}
		};
		xhttp.open("GET", url, true);
		xhttp.send();
		return;
	};
	
	switch (location.pathname) {
		case "/manasmith/":
			fetchContent('home.html');
			break;
		case "/manasmith/adventurers/":
			fetchContent('adventurers.html');
			break;
		case "/manasmith/mana-circles/":
			fetchContent('mana-circles.html');
			break;
		case "/manasmith/weapons/":
			fetchContent('weapons.html');
			break;
		case "/manasmith/wyrmprints/":
			fetchContent('wyrmprints.html');
			break;
		case "/manasmith/dragons/":
			fetchContent('dragons.html');
			break;
		default:
			fetchContent('404.html');
	};
});
