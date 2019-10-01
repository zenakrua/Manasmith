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

	var name, element, elementID, rarity, adventurer;

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
			.then(function (querySnapshot) {
				querySnapshot.forEach(function (doc) {
					var adventurerName = document.createElement("button");
					var name = doc.data().FullName[lang];
					// collected = adventurers.find(findID, id, variation)
					adventurerName.classList.add("adventurer");
					adventurerName.setAttribute("elementID", doc.data().ElementID);
					adventurerName.setAttribute("rarity", doc.data().Rarity);
					adventurerName.setAttribute("collected", "1");
					adventurerName.id = doc.data().ID;
					adventurerName.setAttribute("variant", doc.data().Variant);
					adventurerName.innerHTML += name;
					adventurerName.addEventListener("click", function () {
						fetchAdventurer(doc.data().FullName[lang]);
					});
					content.innerHTML = "<h4>Adventurers</h4>";
					content.appendChild(adventurerName);
				});
			});
	}

	function fetchAdventurer(name) {
		db.collection("Adventurers")
			.doc(name)
			.get()
			.then(function (doc) {
				var circleTables = document.createElement("div")
				circleTables.setAttribute("id", "circleTables")

				subcontent.appendChild(circleTables);

				var adventurerTitle = document.createElement("h2");
				adventurerTitle.innerHTML = doc.data().Title[lang];
				var adventurerName = document.createElement("h1");
				adventurerName.innerHTML = name;
				circleTables.appendChild(adventurerTitle);
				circleTables.appendChild(adventurerName);



				manaCircles(doc.data());
			})
			.catch(function (error) {
				console.log("Error getting Adventurer data:", error);
			});
	}

	// calcStats([circle number], [node number], [table key], [stat type (hp, str, etc.)])
	function calcStats(circle, node, stat, type) {
		switch (circle) {
			case 0:
				if (type === "hp") {
					var mod = 4;
					var div = 4;
					var plus = 1
				} else if (type === "str") {
					var mod = 3;
					var div = 3;
					var plus = 1
				}
				break;
			case 1:
				if (type === "hp") {
					var mod = 4;
					var div = 4;
					var plus = 1
				} else if (type === "str") {
					var mod = 5;
					var div = 5;
					var plus = 1
				}
				break;
			case 2:
				if (type === "hp") {
					var mod = 4;
					var div = 4;
					var plus = 1
				} else if (type === "str") {
					var mod = 3;
					var div = 3;
					var plus = 1
				}
				break;
			case 3:
				if (type === "hp") {
					var mod = 3;
					var div = 3;
					var plus = 1
				} else if (type === "str") {
					var mod = 4;
					var div = 4;
					var plus = 1
				}
				break;
			case 4:
				if (type === "hp") {
					var mod = 2;
					var div = 2;
					var plus = 1
				} else if (type === "str") {
					var mod = 1;
					var div = 1;
					var plus = 1
				}
				break;
			default:
				return "Unknown circle number.";
		}
		switch (stat % mod) {
			case 0:
				if (node === 1) {
					return parseInt(stat / div);
				} else if (node === 2) {
					return parseInt(stat / div);
				} else if (node === 3) {
					return parseInt(stat / div);
				} else if (node === 4) {
					return parseInt(stat / div);
				} else if (node === 5) {
					return parseInt(stat / div);
				}
				break;
			case 1:
				if (node === 1) {
					return parseInt((stat / div) + plus);
				} else if (node === 2) {
					return parseInt(stat / div);
				} else if (node === 3) {
					return parseInt(stat / div);
				} else if (node === 4) {
					return parseInt(stat / div);
				} else if (node === 5) {
					return parseInt(stat / div);
				}
				break;
			case 2:
				if (node === 1) {
					return parseInt((stat / div) + plus);
				} else if (node === 2) {
					return parseInt((stat / div) + plus);
				} else if (node === 3) {
					return parseInt(stat / div);
				} else if (node === 4) {
					return parseInt(stat / div);
				} else if (node === 5) {
					return parseInt(stat / div);
				}
				break;
			case 3:
				if (node === 1) {
					return parseInt((stat / div) + plus);
				} else if (node === 2) {
					return parseInt((stat / div) + plus);
				} else if (node === 3) {
					return parseInt((stat / div) + plus);
				} else if (node === 4) {
					return parseInt(stat / div);
				} else if (node === 5) {
					return parseInt(stat / div);
				}
				break;
			case 4:
				if (node === 1) {
					return parseInt((stat / div) + plus);
				} else if (node === 2) {
					return parseInt((stat / div) + plus);
				} else if (node === 3) {
					return parseInt((stat / div) + plus);
				} else if (node === 4) {
					return parseInt((stat / div) + plus);
				} else if (node === 5) {
					return parseInt(stat / div);
				}
				break;
			default:
				return "Unknown stat value";
		}
	}

	function manaCircles(adventurer) {

		hp01 = calcStats(0, 1, adventurer.PlusHp0, "hp");
		hp02 = calcStats(0, 2, adventurer.PlusHp0, "hp");
		hp03 = calcStats(0, 3, adventurer.PlusHp0, "hp");
		hp04 = calcStats(0, 4, adventurer.PlusHp0, "hp");
		hp11 = calcStats(1, 1, adventurer.PlusHp1, "hp");
		hp12 = calcStats(1, 2, adventurer.PlusHp1, "hp");
		hp13 = calcStats(1, 3, adventurer.PlusHp1, "hp");
		hp14 = calcStats(1, 4, adventurer.PlusHp1, "hp");
		hp21 = calcStats(2, 1, adventurer.PlusHp2, "hp");
		hp22 = calcStats(2, 2, adventurer.PlusHp2, "hp");
		hp23 = calcStats(2, 3, adventurer.PlusHp2, "hp");
		hp24 = calcStats(2, 4, adventurer.PlusHp2, "hp");
		hp31 = calcStats(3, 1, adventurer.PlusHp3, "hp");
		hp32 = calcStats(3, 2, adventurer.PlusHp3, "hp");
		hp33 = calcStats(3, 3, adventurer.PlusHp3, "hp");
		hp41 = calcStats(4, 1, adventurer.PlusHp4, "hp");
		hp42 = calcStats(4, 2, adventurer.PlusHp4, "hp");
		str01 = calcStats(0, 1, adventurer.PlusAtk0, "str");
		str02 = calcStats(0, 2, adventurer.PlusAtk0, "str");
		str03 = calcStats(0, 3, adventurer.PlusAtk0, "str");
		str11 = calcStats(1, 1, adventurer.PlusAtk1, "str");
		str12 = calcStats(1, 2, adventurer.PlusAtk1, "str");
		str13 = calcStats(1, 3, adventurer.PlusAtk1, "str");
		str14 = calcStats(1, 4, adventurer.PlusAtk1, "str");
		str15 = calcStats(1, 5, adventurer.PlusAtk1, "str");
		str21 = calcStats(2, 1, adventurer.PlusAtk2, "str");
		str22 = calcStats(2, 2, adventurer.PlusAtk2, "str");
		str23 = calcStats(2, 3, adventurer.PlusAtk2, "str");
		str31 = calcStats(3, 1, adventurer.PlusAtk3, "str");
		str32 = calcStats(3, 2, adventurer.PlusAtk3, "str");
		str33 = calcStats(3, 3, adventurer.PlusAtk3, "str");
		str34 = calcStats(3, 4, adventurer.PlusAtk3, "str");
		str41 = calcStats(4, 1, adventurer.PlusAtk4, "str");
		skill1 = adventurer.Skill1.FullName[lang];
		skill2 = adventurer.Skill2.FullName[lang];
		ability11 = adventurer.Abilities11.FullName[lang];
		ability12 = adventurer.Abilities12.FullName[lang];
		ability21 = adventurer.Abilities21.FullName[lang];
		ability22 = adventurer.Abilities22.FullName[lang];
		ability31 = adventurer.Abilities31.FullName[lang];
		ability32 = adventurer.Abilities32.FullName[lang];
		coability1 = adventurer.ExAbilityData1.FullName[lang];
		coability2 = adventurer.ExAbilityData2.FullName[lang];
		coability3 = adventurer.ExAbilityData3.FullName[lang];
		coability4 = adventurer.ExAbilityData4.FullName[lang];
		coability5 = adventurer.ExAbilityData5.FullName[lang];

		if (adventurer.Rarity === 5 && adventurer.NodeMap === "0501") {

			var nodes = [
				{
					circle: 1,
					nodes: [
						{
							"Reward": "HP +" + hp04
							"Materials": [
								{
									"Mana": "450"
								}
							]
						},
						{
							"Reward": "Strength +" + str03
						},
						{
							"Reward": ability11
						},
						{
							"Reward": "HP +" + hp03
						},
						{
							"Reward": "New Adventurer Story"
						},
						{
							"Reward": "HP +" + hp02
						},
						{
							"Reward": "Force Strike"
						},
						{
							"Reward": "Strength +" + str01
						},
						{
							"Reward": "HP +" + hp01
						},
						{
							"Reward": ability21
						}
					]
				},
				{
					circle: 2,
					nodes: [
						{
							"Reward": skill2 + " Lv. 1"
						},
						{
							"Reward": "Strength +" + str15
						},
						{
							"Reward": "HP +" + hp13
						},
						{
							"Reward": "Strength +" + str14
						},
						{
							"Reward": "New Adventurer Story"
						},
						{
							"Reward": "Strength +" + str13
						},
						{
							"Reward": "HP +" + hp12
						},
						{
							"Reward": "Strength +" + str12
						},
						{
							"Reward": "New Adventurer Story"
						},
						{
							"Reward": "Strength +" + str11
						}
					]
				},
				{
					circle: 3,
					nodes: [
						{
							"Reward": "HP +" + hp24
						},
						{
							"Reward": ability31
						},
						{
							"Reward": "Strength +" + str22
						},
						{
							"Reward": "HP +" + hp23
						},
						{
							"Reward": "New Adventurer Story"
						},
						{
							"Reward": "HP +" + hp22
						},
						{
							"Reward": ability12
						},
						{
							"Reward": "Strength +" + str21
						},
						{
							"Reward": "HP +" + hp21
						},
						{
							"Reward": skill1 + " Lv. 2"
						}
					]
				},
				{
					circle: 4,
					nodes: [
						{
							"Reward": "Strength +" + str34
						},
						{
							"Reward": "HP +" + hp33
						},
						{
							"Reward": "Upgrade Force Strike"
						},
						{
							"Reward": "Strength +" + str33
						},
						{
							"Reward": "HP +" + hp32
						},
						{
							"Reward": "Strength +" + str32
						},
						{
							"Reward": ability22
						},
						{
							"Reward": "HP +" + hp31
						},
						{
							"Reward": "Strength +" + str31
						},
						{
							"Reward": skill2 + " Lv. 2"
						}
					]
				},
				{
					circle: 5,
					nodes: [
						{
							"Reward": ability32
						},
						{
							"Reward": "HP +" + hp42
						},
						{
							"Reward": "Damascus Crystal"
						},
						{
							"Reward": "Strength +" + str41
						},
						{
							"Reward": coability2
						},
						{
							"Reward": coability3
						},
						{
							"Reward": skill1 + " Lv. 3"
						},
						{
							"Reward": coability4
						},
						{
							"Reward": coability5
						},
						{
							"Reward": "HP +" + hp41
						}
					]
				}
			];
		}

		switch (elementID) {
			// Flame
			case 1:
				eleOrb1 = "Flame Orb";
				eleOrb2 = "Blaze Orb";
				eleOrb3 = "Inferno Orb";
				dragonScale1 = "Flamewyrm's Scale";
				dragonScale2 = "Flamewyrm's Scaldscale";
				break;
			// Water
			case 2:
				eleOrb1 = "Water Orb";
				eleOrb2 = "Stream Orb";
				eleOrb3 = "Deluge Orb";
				dragonScale1 = "Waterwyrm's Scale";
				dragonScale2 = "Waterwyrm's Glistscale";
				break;
			// Wind
			case 3:
				eleOrb1 = "Wind Orb";
				eleOrb2 = "Storm Orb";
				eleOrb3 = "Maelstrom Orb";
				dragonScale1 = "Windwyrm's Scale";
				dragonScale2 = "Windwyrm's Squallscale";
				break;
			// Light
			case 4:
				eleOrb1 = "Light Orb";
				eleOrb2 = "Radiance Orb";
				eleOrb3 = "Refulgence Orb";
				dragonScale1 = "Lightwyrm's Scale";
				dragonScale2 = "Lightwyrm's Glowscale";
				break;
			// Shadow
			case 5:
				eleOrb1 = "Shadow Orb";
				eleOrb2 = "Nightfall Orb";
				eleOrb3 = "Nether Orb";
				dragonScale1 = "Shadowwyrm's Scale";
				dragonScale2 = "Shadowwyrm's Darkscale";
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
		var circleList = document.createElement("p");
		var circlenum = 1;

		for (i = 1; i <= 5; i++) {
			var circleListing = document.createElement("button");
			circleListing.classList.add("circle", adventurer.ElementID);
			circleListing.innerHTML = "Circle " + i;
			circleListing.value = i;
			circleList.appendChild(circleListing);
			circleListing.addEventListener("click", function () {

				var circle = this.value
				var nodeTables = document.getElementsByTagName("table")
				for (i = 0; i < nodeTables.length; i++) {

					if (nodeTables[i].getAttribute("circle") === circle) {
						nodeTables[i].style.display = "table"
					} else if (nodeTables[i].getAttribute("circle") !== circle) {
						nodeTables[i].style.display = "none"
					}

				}

			})
		}

		var circleTables = document.getElementById("circleTables")
		circleTables.appendChild(circleList);

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
				nodeTHead.setAttribute("elementID", adventurer.ElementID);
				nodeHeaderRow.setAttribute("id", "nodeHeaderRow")
				var nodeHeader = document.createElement("th");
				nodeHeader.setAttribute("id", "nodeHeader")
				var nodeHeading = document.createElement("span");
				nodeHeading.setAttribute("id", "nodeHeading")
				var rewardHeading = document.createElement("span");
				rewardHeading.setAttribute("id", "rewardHeading")
				nodeHeading.innerHTML = "Node " + i;
				rewardHeading.innerHTML = nodes[circlenum - 1].nodes[i - 1].Reward;
				nodeHeaderRow.appendChild(nodeHeader);
				nodeHeader.appendChild(nodeHeading)
				nodeHeader.appendChild(rewardHeading);

				var nodeTBody = document.createElement("tbody");
				nodeTBody
				nodeTable.appendChild(nodeTBody);

				circleTables.appendChild(nodeTable);
			}
			circlenum++;
		}

	}

})
