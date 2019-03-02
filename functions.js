document.addEventListener("DOMContentLoaded", function (event) {

	function fetchContent() {
		var xhttp;
		var content = document.getElementsByTagName("content")[0];

		switch (location.pathname) {
			case "/":
				url = "home.html";
				break;
			case "/adventurers/":
				url = "adventurers.html";
				break;
			case "/mana-circles/":
				url = "mana-circles.html";
				break;
			case "/weapons/":
				url = "weapons.html";
				break;
			case "/wyrmprints/":
				url = "wyrmprints.html";
				break;
			case "/dragons/":
				url = "dragons.html";
				break;
			default:
				url = "404.html";
		}

		xhttp = new XMLHttpRequest();
		xhttp.responseType = "text";
		xhttp.onreadystatechange = function () {
			if (xhttp.readyState === 4 && xhttp.status === 200) {
				document.getElementsByTagName("content")[0].insertAdjacentHTML("beforeend", xhttp.responseText);
			}
		};
		xhttp.open("GET", url, true);
		xhttp.send();
		return;
	}

});