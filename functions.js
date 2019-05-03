document.addEventListener("DOMContentLoaded", function (event) {

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

function empty(target) {
	while (target.hasChildNodes()) {
		target.removeChild(target.firstChild);
	}
}

function fetchAdventurers() {
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
	
	function fetchCircles(adventurers) { 
	    return adventurers.ID === adventurerID;
	}

	var adventurer = document.getElementsByClassName("adventurer");
	for (i = 0; i < adventurer.length; i++) {
		adventurer[i].addEventListener("click", function () {
			//map button value to adventurerID variable
			adventurerID = this.value;
			//remap adventurer variable as adventurer object
			adventurer = (adventurers.find(fetchCircles,adventurerID));
			//print adventurer name
			subcontent.innerHTML = "<h1>" + adventurer.Name + "</h1>";
			
			//print list of circles from adventurer object
			var circles = adventurer.Circles;
			for (i in circles) {
				var circle = circles[i];
				var circleNum = circle.Circle;
				subcontent.insertAdjacentHTML("beforeend","<table id=\"circle" + circleNum + "\"><tr><th>Circle " + circleNum + "</th><tr></table>");

				var nodes = circle.Nodes;
				for (i in nodes) {
					var node = nodes[i];
					var nodeNum = node.Node;
					var reward = node.Reward;
					document.getElementById("circle" + circleNum).insertAdjacentHTML("beforeend","<tr id=\"node" + nodeNum + "\"><td>Node" + nodeNum + ": " + reward + "</td></tr>");

					var materials = node.Materials;
					for (i in materials) {
						var material = materials[i];
						var materialName = material.Material;
						var amount = material.Amount;
						document.getElementById("node" + nodeNum).insertAdjacentHTML("afterend","<tr><td>" + materialName + "</td><td>" + amount + "</td></tr>");
					}
				}
			}
		});
	}
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
