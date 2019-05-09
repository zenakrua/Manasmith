document.addEventListener("DOMContentLoaded", function (event) {
	
	fetch('data/checklist.json')
		.then(function(response) {
		return response.json();
	})
	.then(function(checklist) {
		// content elements
		nav = document.getElementsByClassName("nav");
		content = document.getElementsByTagName("content")[0];
		subcontent = document.getElementsByTagName("subcontent")[0];

		// When a navigation button is clicked, get json data based on which button and dump it into the content html element.
		for (i = 0; i < nav.length; i++) {
			nav[i].addEventListener("click", function () {
				var data = this.value;
				switch (data) {
					case "adventurers":
						fetchAdventurers(checklist);
						break;
					case "weapons":
						fetchWeapons(checklist);
						break;
					case "wyrmprints":
						fetchWyrmprints(checklist);
						break;
					case "dragons":
						fetchDragons(checklist);
						break;
					default:
						content.innerHTML = "No data.";
				}
			});
		}
	});

});

function empty(target) {
	while (target.hasChildNodes()) {
		target.removeChild(target.firstChild);
	}
}

function fetchAdventurer(adventurers) {
		return adventurers.ID === adventurerID;
	}

function fetchAdventurers() {
	fetch('data/adventurers.json')
		.then(function(response) {
		return response.json();
	})
	.then(function(adventurers) {
		var adventurerData = "";
			adventurers = adventurers.sort(function (a, b) {
				return a.ElementID - b.ElementID || a.WeaponID - b.WeaponID || b.Rarity - a.Rarity || b.ID - a.ID || a.Name - b.Name;
			});
			for (i in adventurers) {
				var name = adventurers[i].Name;
				var element = adventurers[i].Element;
				var rarity = adventurers[i].Rarity;
				var collected = adventurers[i].Collected;
				var id = adventurers[i].ID;
				content.innerHTML = adventurerData
					+= "<button value=\"" + id + "\" class=\"adventurer " + element + " " + rarity + " collected" + collected + "\">"
					+ name
					+ "</button><br>";
			}

			function fetchAdventurer(adventurers) {
				return adventurers.ID === adventurerID;
			}

			var adventurer = document.getElementsByClassName("adventurer");
			for (i = 0; i < adventurer.length; i++) {
				adventurer[i].addEventListener("click", function () {
					//map button value to adventurerID variable
					adventurerID = this.value;
					//remap adventurer variable as adventurer object
					adventurer = (adventurers.find(fetchAdventurer, adventurerID));
					//print adventurer name
					subcontent.innerHTML = "<h1>" + adventurer.Name + "</h1>";			
				});
			}
		}
	});
}

function fetchWeapons() {
	empty(content);
	empty(subcontent);
	content.insertAdjacentHTML("beforeend", "Weapons");
	return;
}

function fetchWyrmprints() {
	empty(content);
	content.insertAdjacentHTML("beforeend", "Wyrmprints");
	return;
}

function fetchDragons() {
	empty(content);
	content.insertAdjacentHTML("beforeend", "Dragons");
	return;
}
