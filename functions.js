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

function fetchAdventurers(section) {
		var data = "";
		adventurers = adventurers.sort(function (a, b) {
			return a.ElementID - b.ElementID || a.WeaponID - b.WeaponID || b.Rarity - a.Rarity || b.ID - a.ID || a.Name - b.Name;
		});
		for (i = 0; i < adventurers.length; i++) {
			document.getElementsByTagName(section)[0].innerHTML = data
				+= "<p class=\"adventurer" + " " + adventurers[i].Element + " " + adventurers[i].Rarity + " " + "collected" + adventurers[i].Collected + "\">"
					+ "<span class='header'>"
						+ "<span>" + adventurers[i].Name + "</span>"
					+ "</span>"
					+ "<span class=\"icon\">"
						+ "<span style=\"background: url('images/" + adventurers[i].ID + "_" + adventurers[i].Variation + ".png') no-repeat center\"></span>"
					+ "</span>"
				+ "</p>";
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
