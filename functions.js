function fetchContent(section,content) {
	var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.responseType = "json";
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState === 4 && xhttp.status === 200) {
			var rawData = xhttp.response;
			fetchData(rawData,section,content);
		} else if (xhttp.readyState === 4 && xhttp.status === 404) {
			document.getElementsByTagName(section)[0].innerHTML = "BOOM GOES THE WYRMITE";
		}
	}
	xhttp.open("GET", content, true);
	xhttp.send();
}

function fetchData(rawData,section,content) {
	switch(content){
		case "data/adventurers.json":
			fetchAdventurers(section,rawData);
			break;
		case "data/weapons.json":
			fetchWeapons(section,rawData);
		break;
		case "data/wyrmprints.json":
			fetchWyrmprints(section,rawData);
		break;
		case "data/dragons.json":
			fetchDragons(section,rawData);
		break;
		default:
			document.getElementsByTagName(section)[0].innerHTML = "No data.";
	}
}

function fetchAdventurers(section,rawData) {
		var data = "";
		for (i = 0; i < rawData.length; i++) {
			document.getElementsByTagName(section)[0].innerHTML = data
				+= "<table class=\"adventurer" + " " + rawData[i].Element + " " + rawData[i].Rarity + " " + "collected0\">"
					+ "<tr class='header'>"
						+ "<th>" + rawData[i].Name + "</th>"
					+ "</tr>"
					+ "<tr class=\"icon\">"
						+ "<td style=\"background: url('images/" + rawData[i].ID + "_" + rawData[i].Variation + ".png') no-repeat center\"></td>"
					+ "</tr>"
				+ "</table>";
		}
}

function fetchWeapons(section,rawData) {
		var data = "";
		for (i = 0; i < rawData.length; i++) {
			document.getElementsByTagName(section)[0].innerHTML = data += rawData[i].Name;
		}
}

function fetchWyrmprints(section,rawData) {
		var data = "";
		for (i = 0; i < rawData.length; i++) {
			document.getElementsByTagName(section)[0].innerHTML = data += rawData[i].Name;
		}
}

function fetchDragons(section,rawData) {
		var data = "";
		for (i = 0; i < rawData.length; i++) {
			document.getElementsByTagName(section)[0].innerHTML = data += rawData[i].Name;
		}
}

// When a navigation button is clicked, get json data based on which button and dump it into the content html element.
document.addEventListener("DOMContentLoaded", function (event) {
	
	var nav = document.getElementsByClassName("nav");
	for (i = 0; i < nav.length; i++) {
		nav[i].addEventListener("click", function() {
			var val = this.value;
			fetchContent("content",val)
		});
	}
	
});
