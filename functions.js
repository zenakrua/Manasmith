document.addEventListener("DOMContentLoaded", function (event) {

	// initial
	var db, x, i;
	var lang = document.documentElement.lang;

	// content elements
	var nav = document.getElementsByClassName("nav");
	var content = document.getElementsByTagName("content")[0];
	var subcontent = document.getElementsByTagName("subcontent")[0];

	// Initialize Firebase
	var firebaseConfig = {
		// ...
		apiKey: "AIzaSyC4XwSfWKINC59fjQusX6ox_g-eWaUArIQ",
		authDomain: "new-alberia-census.firebaseapp.com",
		databaseURL: "https://new-alberia-census.firebaseio.com",
		projectId: "new-alberia-census",
		storageBucket: "new-alberia-census.appspot.com",
		messagingSenderId: "377724389599",
		appId: "1:377724389599:web:b79d509c26ded573"
	};

	firebase.initializeApp(firebaseConfig);
	firebase
		.auth()
		.signInAnonymously()
		.catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorMessage + errorCode);
		});

	//initialize the database
	db = firebase.firestore();

	for (i = 0; i < nav.length; i++) {
		nav[i].addEventListener("click", function () {
			var lookup = this.value;
			switch (lookup) {
				case "adventurers":
					content.innerHTML = "";
					subcontent.innerHTML = "";
					fetchAdventurers();
					break;
				case "weapons":
					content.innerHTML = "";
					subcontent.innerHTML = "weapons";
					break;
				case "wyrmprints":
					content.innerHTML = "";
					subcontent.innerHTML = "wyrmprints";
					break;
				case "dragons":
					content.innerHTML = "";
					subcontent.innerHTML = "dragons";
					break;
				case "halidom":
					content.innerHTML = "";
					subcontent.innerHTML = "halidom";
					break;
				case "home":
					content.innerHTML = "";
					subcontent.innerHTML = "HOME PAGE SHIT";
					break;
				default:
					content.innerHTML = "";
					subcontent.innerHTML = "No data.";
			}
		});
	}

	var name, element, rarity, adventurer;

	// elemental orbs
	var eleOrb1, eleOrb2, eleOrb3;

	// dragon scales
	var dragonScale1, dragonScale2;

	// skills
	var skill1, skill2;

	// hp
	var hp01,
		hp02,
		hp03,
		hp04,
		hp11,
		hp12,
		hp13,
		hp14,
		hp21,
		hp22,
		hp23,
		hp24,
		hp31,
		hp32,
		hp33,
		hp41,
		hp42;

	// strength
	var str01,
		str02,
		str03,
		str11,
		str12,
		str13,
		str14,
		str15,
		str21,
		str22,
		str23,
		str31,
		str32,
		str33,
		str34;

	// abilities
	var ability11,
		ability11Might,
		ability12,
		ability12Might,
		ability21,
		ability21Might,
		ability22,
		ability22Might,
		ability31,
		ability31Might,
		ability32,
		ability32Might;

	// coabilities
	var coability1,
		coability1Might,
		coability2,
		coability2Might,
		coability3,
		coability3Might,
		coability4,
		coability4Might,
		coability5,
		coability5Might;

	function fetchAdventurers() {
		db.collection("Adventurers")
			.get()
			.then(querySnapshot => {
				querySnapshot.forEach(doc => {
					var adventurerName = document.createElement("button");
					var name = doc.data()["FullName_" + lang];
					// collected = adventurers.find(findID, id, variation)
					adventurerName.classList.add("adventurer");
					adventurerName.setAttribute("element", doc.data().Element);
					adventurerName.setAttribute("rarity", doc.data().Rarity);
					adventurerName.setAttribute("collected", "1");
					adventurerName.id = doc.data().ID;
					adventurerName.setAttribute("variant", doc.data().Variant);
					adventurerName.innerHTML += name;
					adventurerName.addEventListener("click", function () {
						fetchAdventurer(doc.data().Version, name);
					});
					content.innerHTML = "<h4>Adventurers</h4>";
					content.appendChild(adventurerName);
				});
			});
	}

	function fetchAdventurer(version, name) {
		db.collection("Adventurers")
			.doc(version + name)
			.get()
			.then(function (doc) {
				subcontent.innerHTML = "<h1>" + name + "</h1>";
				manaCircles(doc.data());
			})
			.catch(function (error) {
				console.log("Error getting Adventurer data:", error);
			});
	}

	function calcHP(circle, node, hp) {
		switch (hp % 4) {
			case 0:
				if (circle === 0 && node === 1) {
					return parseInt(hp / 4);
				} else if (circle === 0 && node === 2) {
					return parseInt(hp / 4);
				} else if (circle === 0 && node === 3) {
					return parseInt(hp / 4);
				} else if (circle === 0 && node === 4) {
					return parseInt(hp / 4);
				}
				break;
			case 1:
				if (circle === 0 && node === 1) {
					return parseInt(hp / 4) + 1;
				} else if (circle === 0 && node === 2) {
					return parseInt(hp / 4);
				} else if (circle === 0 && node === 3) {
					return parseInt(hp / 4);
				} else if (circle === 0 && node === 4) {
					return parseInt(hp / 4);
				}
				break;
			case 2:
				if (circle === 0 && node === 1) {
					return parseInt(hp / 4) + 1;
				} else if (circle === 0 && node === 2) {
					return parseInt(hp / 4) + 1;
				} else if (circle === 0 && node === 3) {
					return parseInt(hp / 4);
				} else if (circle === 0 && node === 4) {
					return parseInt(hp / 4);
				}
				break;
			case 3:
				if (circle === 0 && node === 1) {
					return parseInt(hp / 4) + 1;
				} else if (circle === 0 && node === 2) {
					return parseInt(hp / 4) + 1;
				} else if (circle === 0 && node === 3) {
					return parseInt(hp / 4) + 1;
				} else if (circle === 0 && node === 4) {
					return parseInt(hp / 4);
				}
				break;
			default:
				node = "Unknown";
		}
	}

	function calcSTR(circle, node, str) {
		switch (str % 4) {
			case 0:
				if (circle === 0 && node === 1) {
					return parseInt(str / 4);
				} else if (circle === 0 && node === 2) {
					return parseInt(str / 4);
				} else if (circle === 0 && node === 3) {
					return parseInt(str / 4);
				} else if (circle === 0 && node === 4) {
					return parseInt(str / 4);
				}
				break;
			case 1:
				if (circle === 0 && node === 1) {
					return parseInt(str / 4) + 1;
				} else if (circle === 0 && node === 2) {
					return parseInt(str / 4);
				} else if (circle === 0 && node === 3) {
					return parseInt(hp / 4);
				} else if (circle === 0 && node === 4) {
					return parseInt(hp / 4);
				}
				break;
			case 2:
				if (circle === 0 && node === 1) {
					return parseInt(hp / 4) + 1;
				} else if (circle === 0 && node === 2) {
					return parseInt(hp / 4) + 1;
				} else if (circle === 0 && node === 3) {
					return parseInt(hp / 4);
				} else if (circle === 0 && node === 4) {
					return parseInt(hp / 4);
				}
				break;
			case 3:
				if (circle === 0 && node === 1) {
					return parseInt(hp / 4) + 1;
				} else if (circle === 0 && node === 2) {
					return parseInt(hp / 4) + 1;
				} else if (circle === 0 && node === 3) {
					return parseInt(hp / 4) + 1;
				} else if (circle === 0 && node === 4) {
					return parseInt(hp / 4);
				}
				break;
			default:
				node = "Unknown";
		}
	}

	function manaCircles(adventurer) {
		if (adventurer.Rarity === 5 && adventurer.NodeMap === "0501") {
			hp01 = "HP " + calcHP(0, 1, adventurer.PlusHp0);
			ability11 = adventurer.Abilities11["FullName_" + lang];
			ability21 = adventurer.Abilities21["FullName_" + lang];
			var nodes = [
				{
					circle: 1,
					nodes: [
						hp01,
						"Strength " + str01,
						ability11,
						hp02,
						"New Adventurer Story",
						hp03,
						"Force Strike",
						str03,
						hp04,
						ability21
					]
				},
				{
					circle: 2,
					nodes: [
						skill2,
						str11,
						hp11,
						str12,
						"New Adventurer Story",
						str13,
						hp14,
						str14,
						"New Adventurer Story",
						ability21
					]
				},
				{
					circle: 3,
					nodes: [
						hp01,
						str01,
						ability11,
						hp02,
						"New Adventurer Story",
						hp03,
						"Force Strike",
						str03,
						hp04,
						ability21
					]
				},
				{
					circle: 4,
					nodes: [
						hp01,
						str01,
						ability11,
						hp02,
						"New Adventurer Story",
						hp03,
						"Force Strike",
						str03,
						hp04,
						ability21
					]
				},
				{
					circle: 5,
					nodes: [
						hp01,
						str01,
						ability11,
						hp02,
						"New Adventurer Story",
						hp03,
						"Force Strike",
						str03,
						hp04,
						ability21
					]
				}
			];
		}

		switch (element) {
			case "Flame":
				eleOrb1 = "Flame Orb";
				eleOrb2 = "Blaze Orb";
				eleOrb3 = "Inferno Orb";
				dragonScale1 = "Flamewyrm's Scale";
				dragonScale2 = "Flamewyrm's Scaldscale";
				break;
			case "Water":
				eleOrb1 = "Flame Orb";
				eleOrb2 = "Blaze Orb";
				eleOrb3 = "Inferno Orb";
				dragonScale1 = "Flamewyrm's Scale";
				dragonScale2 = "Flamewyrm's Scaldscale";
				break;
			case "Wind":
				eleOrb1 = "Flame Orb";
				eleOrb2 = "Blaze Orb";
				eleOrb3 = "Inferno Orb";
				dragonScale1 = "Flamewyrm's Scale";
				dragonScale2 = "Flamewyrm's Scaldscale";
				break;
			case "Light":
				eleOrb1 = "Flame Orb";
				eleOrb2 = "Blaze Orb";
				eleOrb3 = "Inferno Orb";
				dragonScale1 = "Flamewyrm's Scale";
				dragonScale2 = "Flamewyrm's Scaldscale";
				break;
			case "Shadow":
				eleOrb1 = "Flame Orb";
				eleOrb2 = "Blaze Orb";
				eleOrb3 = "Inferno Orb";
				dragonScale1 = "Flamewyrm's Scale";
				dragonScale2 = "Flamewyrm's Scaldscale";
				break;
			default:
				eleOrb1 = "Unknown Orb";
				eleOrb2 = "Unknown Orb";
				eleOrb3 = "Unknown Orb";
				dragonScale1 = "Unknown Scale";
				dragonScale2 = "Unknown Scale";
				break;
		}

		// add circle filters

		var circleList = document.createElement("span");
		var circlenum = 1;

		for (i = 1; i <= 5; i++) {
			var circleListing = document.createElement("button");
			circleListing.classList.add("circle", adventurer.Element);
			circleListing.innerHTML = "Circle " + i;
			circleListing.value = i;
			circleList.appendChild(circleListing);
			circleListing.addEventListener("click", function () {

				var circle = this.value
				var nodeTables = document.getElementsByTagName("table")
				for (i = 0; i < nodeTables.length; i++) {

					if (nodeTables[i].getAttribute("circle") === circle) {
						nodeTables[i].style.display = "inherit"
					} else if (nodeTables[i].getAttribute("circle") !== circle) {
						nodeTables[i].style.display = "none"
					}

				}

			})
		}

		subcontent.appendChild(circleList);

		while (circlenum <= 5) {
			// add node tables
			for (i = 1; i <= 10; i++) {
				// generate node table skeletons
				var nodeTable = document.createElement("table");
				nodeTable.setAttribute("circle", circlenum);
				nodeTable.setAttribute("node", i);
				if (circlenum !== 1) {
					nodeTable.style.display = "none";
				}
				var nodeTHead = document.createElement("thead");
				nodeTable.appendChild(nodeTHead);
				var nodeHeaderRow = nodeTHead.insertRow(0);
				var nodeHeader = document.createElement("th");
				nodeHeader.innerHTML = "Node " + i;

				var nodeTBody = document.createElement("tbody");
				var rewardHeaderRow = nodeTBody.insertRow(0);
				var rewardHeader = document.createElement("th");
				rewardHeader.innerHTML = nodes[circlenum - 1].nodes[i - 1];
				rewardHeaderRow.appendChild(rewardHeader);

				nodeTable.appendChild(nodeTBody);
				nodeHeaderRow.appendChild(nodeHeader);

				subcontent.appendChild(nodeTable);
			}
			circlenum++;
		}

	}

})