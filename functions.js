// When a navigation button is clicked, get json data based on which button and dump it into the content html element.
document.addEventListener("DOMContentLoaded", function (event) {

	var nav = document.getElementsByClassName("nav");
	for (i = 0; i < nav.length; i++) {
		nav[i].addEventListener("click", function () {
			var content = this.value;
			switch(content){
				case "adventurers":
					fetchAdventurers("content");
					break;
				case "weapons":
					fetchWeapons("content");
				break;
				case "wyrmprints":
					fetchWyrmprints("content");
				break;
				case "dragons":
					fetchDragons("content");
				break;
				default:
					document.getElementsByTagName("content")[0].innerHTML = "No data.";
			}
		});
	}

});

function fetchAdventurers() {
		var data = "";
		adventurers = adventurers.sort(function (a, b) {
			return a.ElementID - b.ElementID || a.WeaponID - b.WeaponID || b.Rarity - a.Rarity || b.ID - a.ID || a.Name - b.Name;
		});
		for (i = 0; i < adventurers.length; i++) {
			document.getElementsByTagName("content")[0].innerHTML = data
				+= "<p class=\"adventurer" + " " + adventurers[i].Element + " " + adventurers[i].Rarity + " " + "collected" + adventurers[i].Collected + "\" onclick=\"fetchManaCircles(" + adventurers[i].ID + ");\">"
					+ adventurers[i].Name
				+ "</p>";
		}
}

function fetchManaCircles(id) {
		var data = "";
		for (i = 0; i < adventurers.length; i++) {
			if (adventurers[i].ID == id) {
				var subcontent = document.getElementsByTagName("subcontent")[0];
				if (subcontent.hasChildNodes()) {
					subcontent.removeChild(subcontent.childNodes[0]);
				}
				subcontent.innerHTML("<div>" + id + "</div>");
			}
		}
}

function fetchWeapons() {
		var data = "";
		for (i = 0; i < rawData.length; i++) {
			document.getElementsByTagName("content")[0].innerHTML = data += rawData[i].Name;
		}
}

function fetchWyrmprints() {
		var data = "";
		for (i = 0; i < rawData.length; i++) {
			document.getElementsByTagName("content")[0].innerHTML = data += rawData[i].Name;
		}
}

function fetchDragons() {
		var data = "";
		for (i = 0; i < rawData.length; i++) {
			document.getElementsByTagName("content")[0].innerHTML = data += rawData[i].Name;
		}
}
