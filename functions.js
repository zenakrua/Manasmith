// document.addEventListener("DOMContentLoaded", function(event) {
// content elements
var nav = document.getElementsByClassName("nav");
var content = document.getElementsByTagName("content")[0];
var subcontent = document.getElementsByTagName("subcontent")[0];

var x;
var i;
var checklist;
var list;
var id;
var variation;
var collected;
var adventurers;
var adventurer;
var adventurersData;
var adventurerData;
var circles;
var circle;
var circleData;
var nodes;
var node;
var nodeData;
var weapons;
var dragons;
var wyrmprints;
var materials;

function findID(list) {
	if (variation !== null) {
		return (list.ID === id) & (list.Variation === variation);
	} else {
		return list.ID === id;
	}
}

fetch("data/checklist.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (json) {
		for (var i = 0; i < nav.length; i++) {
			nav[i].addEventListener("click", function () {
				var data = this.value;
				switch (data) {
					case "shopping":
						checklist = json;
						fetchShoppingList(checklist);
						break;
					case "adventurers":
						checklist = json[0].adventurers;
						fetchAdventurers(checklist);
						break;
					case "weapons":
						checklist = json[0].weapons;
						fetchWeapons(checklist);
						break;
					case "wyrmprints":
						checklist = json[0].wyrmprints;
						fetchWyrmprints(checklist);
						break;
					case "dragons":
						checklist = json[0].dragons;
						fetchDragons(checklist);
						break;
					default:
						content.innerHTML = "No data.";
				}
			});
		}
	})
	.catch(function (error) {
		console.log("Error.");
	});

function fetchShoppingList(checklist) {
	adventurersData = checklist[0].adventurers;
	content.innerHTML = "";
	subcontent.innerHTML = "";

	fetch("data/weapons.json")
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			weapons = json;
		});
	console.log(adventurers);
	console.log(weapons);
}

function fetchAdventurers(checklist) {
	content.innerHTML = "";
	subcontent.innerHTML = "";
	fetch("data/data.json")
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			fetchAdventurersList(checklist, json);
		});
}

function fetchAdventurersList(checklist, json) {
	list = json[0].adventurers;
	list = list.sort(function (a, b) {
		return (
			a.ElementID - b.ElementID ||
			a.WeaponID - b.WeaponID ||
			b.Rarity - a.Rarity ||
			b.ID - a.ID ||
			a.Name - b.Name
		);
	});
	for (x in list) {
		id = list[x].ID;
		variation = list[x].Variation;
		collected = checklist.find(findID, id, variation);
		content.innerHTML +=
			"<button class='adventurer " +
			list[x].Element +
			" " +
			list[x].Rarity +
			" collected" +
			collected.Collected +
			"' id='" +
			list[x].ID +
			"' variation='" +
			list[x].Variation +
			"'>" +
			list[x].Name +
			"</button><br>";
	}
	var adventurerNames = content.getElementsByTagName("button");
	for (i = 0; i < adventurerNames.length; i++) {
		adventurerNames[i].addEventListener("click", function () {
			id = this.getAttribute("id");
			variation = this.getAttribute("variation");
			adventurer = list.find(findID, id, variation);
			adventurerData = checklist.find(findID, id, variation);
			subcontent.innerHTML = "<h1>" + adventurer.Name + "</h1>";
			circles = adventurer.Circles;
			/* for (x in circles) {
			  circle = circles[x];
			  nodes = circle.Nodes;
			  for (x in nodes) {
				node = nodes[x];
				materials = node.Materials;
				for (x in materials) {
				  console.log(materials);
				  subcontent.insertAdjacentHTML(
					"afterbegin",
					"<p>" + materials[x].Material + " " + materials[x].Amount + "</p>"
				  );
				}
			  }
			} */
			fetchCircles(adventurer, adventurerData);
		});
	}
	return;
}

function fetchCircles(adventurer, adventurerData) {
	for (x in adventurer.Circles) {
		circle = adventurer.Circles[x];
		circleData = adventurerData.Circles[x];
		subcontent.insertAdjacentHTML(
			"beforeend",
			"<table class='circle' id='circle" +
			circle.Circle +
			"'><h2>Circle " +
			circle.Circle +
			"</h2></table>"
		);
		fetchNodes(circle, circleData);
	}
}

function fetchNodes(circle, circleData) {
	circle.Nodes = circle.Nodes.sort(function (a, b) {
		return a.Node - b.Node;
	});
	for (x in circle.Nodes) {
		node = circle.Nodes[x];
		nodeData = circleData.Nodes[x];
		var nodeList = document.getElementById("circle" + circle.Circle);
		nodeList.insertAdjacentHTML(
			"beforeend",
			"<tr><th colspan='2' class='node unlocked" +
			nodeData.Unlocked +
			"' id='node" +
			node.Node +
			"'>" +
			node.Reward +
			"</th></tr>"
		);
		for (x in node.Materials) {
			nodeList.insertAdjacentHTML(
				"beforeend",
				"<tr><td>" +
				node.Materials[x].Material +
				"</td><td>" +
				node.Materials[x].Amount +
				"</td></tr>"
			);
		}
	}
}

function fetchWeapons(checklist) {
	content.innerHTML = "";
	subcontent.innerHTML = "Weapons";
	return;
}

function fetchWyrmprints(checklist) {
	content.innerHTML = "";
	subcontent.innerHTML = "Wyrmprints";
	return;
}

function fetchDragons(checklist) {
	content.innerHTML = "";
	subcontent.innerHTML = "Dragons";
	return;
}
// });
