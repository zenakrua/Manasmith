// When a navigation button is clicked, get json data based on which button and dump it into the content html element.
document.addEventListener("DOMContentLoaded", function (event) {

	var nav = document.getElementsByClassName("nav");
	for (i = 0; i < nav.length; i++) {
		nav[i].addEventListener("click", function () {
			var val = this.value;
			fetchContent("content", val)
		});
	}

});

function fetchContent(section, val) {
	var json = document.createElement("script");
	json.setAttribute("ID", "data");
	var imported = document.getElementById("data");
	if (!imported.src) {
		imported.src = "data/" + val + ".js";
	} else {
		imported.removeAttribute("src");
		imported.src = "data/" + val + ".js";
	}
	
	switch (val) {
		case "adventurers":
			fetchAdventurers(section);
			break;
		case "data/weapons.js":
			fetchWeapons(section);
			break;
		case "data/wyrmprints.js":
			fetchWyrmprints(section);
			break;
		case "data/dragons.js":
			fetchDragons(section);
			break;
		default:
			document.getElementsByTagName(section)[0].innerHTML = "No data.";
	}
}

function fetchAdventurers(section) {
	var data = "";
	for (i = 0; i < adventurers.length; i++) {
		document.getElementsByTagName(section)[0].innerHTML = data
			+= "<table class=\"adventurer" + " " + adventurersData[i].Element + " " + adventurersData[i].Rarity + " " + "collected" + adventurers[i].Collected + "\">"
			+ "<tr class='header'>"
		+ "<th>" + adventurersData[i].Name + "</th>"
			+ "</tr>"
			+ "<tr class=\"icon\">"
		+ "<td style=\"background: url('images/" + adventurersData[i].ID + "_" + adventurersData[i].Variation + ".png') no-repeat center\"></td>"
			+ "</tr>"
			+ "</table>"
		;
	}
}

function fetchWeapons(section) {
	var data = "";
	for (i = 0; i < checklist.length; i++) {
		document.getElementsByTagName(section)[0].innerHTML = data += checklist[i].Name;
	}
}

function fetchWyrmprints(section) {
	var data = "";
	for (i = 0; i < checklist.length; i++) {
		document.getElementsByTagName(section)[0].innerHTML = data += checklist[i].Name;
	}
}

function fetchDragons(section) {
	var data = "";
	for (i = 0; i < checklist.length; i++) {
		document.getElementsByTagName(section)[0].innerHTML = data += checklist[i].Name;
	}
}
