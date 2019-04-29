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

function fetchContent(section,checklist) {
	var imported = document.createElement('script');
	imported.src = "data/" + checklist + ".js";
	document.head.appendChild(imported);		
	switch(checklist){
		case "adventurers":
			fetchAdventurers(section,checklist);
			break;
		case "data/weapons.js":
			fetchWeapons(section,checklist);
		break;
		case "data/wyrmprints.js":
			fetchWyrmprints(section,checklist);
		break;
		case "data/dragons.js":
			fetchDragons(section,checklist);
		break;
		default:
			document.getElementsByTagName(section)[0].innerHTML = "No data.";
	}
}

function adventurers(section,checklist) {
		var data = "";
		for (i = 0; i < checklist.length; i++) {
			document.getElementsByTagName(section)[0].innerHTML = data
				+= "<table class=\"adventurer" + " " + checklist[i].Element + " " + checklist[i].Rarity + " " + "collected0\">"
					+ "<tr class='header'>"
						+ "<th>" + checklist[i].Name + "</th>"
					+ "</tr>"
					+ "<tr class=\"icon\">"
						+ "<td style=\"background: url('images/" + checklist[i].ID + "_" + checklist[i].Variation + ".png') no-repeat center\"></td>"
					+ "</tr>"
				+ "</table>";
		}
}

function weapons(section,checklist) {
		var data = "";
		for (i = 0; i < checklist.length; i++) {
			document.getElementsByTagName(section)[0].innerHTML = data += checklist[i].Name;
		}
}

function wyrmprints(section,checklist) {
		var data = "";
		for (i = 0; i < checklist.length; i++) {
			document.getElementsByTagName(section)[0].innerHTML = data += checklist[i].Name;
		}
}

function dragons(section,checklist) {
		var data = "";
		for (i = 0; i < checklist.length; i++) {
			document.getElementsByTagName(section)[0].innerHTML = data += checklist[i].Name;
		}
}
