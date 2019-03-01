function fetchContent(url) {
	var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.responseType = "text";
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("content").insertAdjacentHTML("beforeend",xhttp.responseText);
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
	return;
}

function includeContent() {
	
	switch (location.pathname) {
		case "/":
			fetchContent('home.html');
			break;
		case "/adventurers/":
			fetchContent('adventurers.html');
			break;
		case "/mana-circles/":
			fetchContent('mana-circles.html');
			break;
		case "/weapons/":
			fetchContent('weapons.html');
			break;
		case "/wyrmprints/":
			fetchContent('wyrmprints.html');
			break;
		case "/dragons/":
			fetchContent('dragons.html');
			break;
		default:
			fetchContent('404.html');
	}

}
