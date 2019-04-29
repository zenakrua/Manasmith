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

function fetchContent(section,content) {
	document.getElementById("head").insertAdjacentHTML("beforeend","<script src=\"" + content + "\"></script>");
	switch(content){
		case "data/adventurers.js":
			fetchAdventurers(section,adventurers);
			break;
		case "data/weapons.js":
			fetchWeapons(section,weapons);
		break;
		case "data/wyrmprints.js":
			fetchWyrmprints(section,wyrmprints);
		break;
		case "data/dragons.js":
			fetchDragons(section,dragons);
		break;
		default:
			document.getElementsByTagName(section)[0].innerHTML = "No data.";
	}
}

function fetchAdventurers(section,adventurers) {
		var data = "";
		for (i = 0; i < adventurers.length; i++) {
			document.getElementsByTagName(section)[0].innerHTML = data
				+= "<table class=\"adventurer" + " " + adventurers[i].Element + " " + adventurers[i].Rarity + " " + "collected0\">"
					+ "<tr class='header'>"
						+ "<th>" + adventurers[i].Name + "</th>"
					+ "</tr>"
					+ "<tr class=\"icon\">"
						+ "<td style=\"background: url('images/" + adventurers[i].ID + "_" + adventurers[i].Variation + ".png') no-repeat center\"></td>"
					+ "</tr>"
				+ "</table>";
		}
}

function fetchWeapons(section,weapons) {
		var data = "";
		for (i = 0; i < weapons.length; i++) {
			document.getElementsByTagName(section)[0].innerHTML = data += weapons[i].Name;
		}
}

function fetchWyrmprints(section,wyrmprints) {
		var data = "";
		for (i = 0; i < wyrmprints.length; i++) {
			document.getElementsByTagName(section)[0].innerHTML = data += wyrmprints[i].Name;
		}
}

function fetchDragons(section,dragons) {
		var data = "";
		for (i = 0; i < dragons.length; i++) {
			document.getElementsByTagName(section)[0].innerHTML = data += dragons[i].Name;
		}
}
