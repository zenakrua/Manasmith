// content elements
var nav = document.getElementsByClassName("nav");
var content = document.getElementsByTagName("content")[0];
var subcontent = document.getElementsByTagName("subcontent")[0];
	
function empty(target) {
	while (target.hasChildNodes()) {
		target.removeChild(target.firstChild);
	}
}

// When a navigation button is clicked, get json data based on which button and dump it into the content html element.
document.addEventListener("DOMContentLoaded", function (event) {

	for (i = 0; i < nav.length; i++) {
		nav[i].addEventListener("click", function () {
			var data = this.value;
			switch (data) {
				case "adventurers":
					fetchAdventurers();
					break;
				case "weapons":
					fetchWeapons();
					break;
				case "wyrmprints":
					fetchWyrmprints();
					break;
				case "dragons":
					fetchDragons();
					break;
				default:
					content.innerHTML = "No data.";
			}
		});
	}

});

function fetchAdventurers() {
	var adventurerList = "";
	adventurers = adventurers.sort(function (a, b) {
		return a.ElementID - b.ElementID || a.WeaponID - b.WeaponID || b.Rarity - a.Rarity || b.ID - a.ID || a.Name - b.Name;
	});
	for (i = 0; i < adventurers.length; i++) {
		var name = adventurers[i].Name;
		var element = adventurers[i].Element;
		var rarity = adventurers[i].Rarity;
		var collected = adventurers[i].Collected;
		var id = adventurers[i].ID;
		content.innerHTML = adventurerList
			+= "<p class=\"adventurer" + " " + element + " " + rarity + " " + "collected" + collected + "\" onclick=\"fetchManaCircles(" + id + ");\">"
			+ name
			+ "</p>";
	}
}

function fetchManaCircles(id) {
	var data = "";
	empty(subcontent);
	for (i = 0; i < adventurers.length; i++) {
		if (adventurers[i].ID == id) {
			var circles = adventurers[i].Circles;
			var circleList = "";
			for (i = 0; i < circles.length; i++) {
				subcontent.innerHTML = circleList += "<table class=\"circle\" id=\"circle" + circles[i].Circle + "\">Circle " + circles[i].Circle + "</table>";
			}
		} else {
			subcontent.innerHTML = adventurers[i].Name + "'s mana circles haven't been revealed yet.";
		}
	}
}

function fetchWeapons() {
	return;
}

function fetchWyrmprints() {
	return;
}

function fetchDragons() {
	return;
}
