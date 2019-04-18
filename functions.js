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
	var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.responseType = "json";
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState === 4 && xhttp.status === 200) {
			var checklistData = xhttp.response;
			switch(content){
				case "data/adventurers.json":
					fetchAdventurers(section,rawData,checklistData);
					break;
				case "data/weapons.json":
					fetchWeapons(section,rawData,checklistData);
				break;
				case "data/wyrmprints.json":
					fetchWyrmprints(section,rawData,checklistData);
				break;
				case "data/dragons.json":
					fetchDragons(section,rawData,checklistData);
				break;
				default:
					document.getElementsByTagName(section)[0].innerHTML = "No data.";
			}
		}
	}
	xhttp.open("GET", "data/checklist.json", true);
	xhttp.send();
}

function fetchAdventurers(section,rawData,checklistData) {
		var data = "";
		for (i = 0; i < rawData.length; i++) {
			for (rawData[i].ID === checklistData.Adventurers[i].ID) {
				document.getElementsByTagName(section)[0].innerHTML = data
					+= "<table class=\"adventurer" + " " + rawData[i].Element + " " + rawData[i].Rarity + " " + "collected" + checklistData.Adventurers[i].Collected + "\">"
						+ "<tr class='header'>"
							+ "<th>" + rawData[i].Name + "</th>"
						+ "</tr>"
						+ "<tr class=\"icon\">"
							+ "<td style=\"background: url('https://storage.cloud.google.com/manasmith-221002.appspot.com/images/adventurers/icons/110266_01.png') no-repeat center\"></td>"
						+ "</tr>"
					+ "</table>";
			}
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
