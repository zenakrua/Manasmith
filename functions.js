document.addEventListener("DOMContentLoaded", function(event) {
	
// content elements
var nav = document.getElementsByClassName("nav");
var content = document.getElementsByTagName("content")[0];
var subcontent = document.getElementsByTagName("subcontent")[0];

function empty(target) {
  if (target.hasChildNodes()) {
    while (target.hasChildNodes()) {
      target.removeChild(target.firstChild);
    }
  }
}

fetch("data/checklist.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    var checklist;
    for (var i = 0; i < nav.length; i++) {
      nav[i].addEventListener("click", function() {
        var data = this.value;
        switch (data) {
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
  .catch(function(error) {
    console.log("Error.");
  });

var x;
var list;
var id;
function fetchAdventurers(checklist) {
  empty(content);
  empty(subcontent);

  var adventurer;
  fetch("data/adventurers.json")
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      list = json;
      list = list.sort(function(a, b) {
        return (
          a.ElementID - b.ElementID ||
          a.WeaponID - b.WeaponID ||
          b.Rarity - a.Rarity ||
          b.ID - a.ID ||
          a.Name - b.Name
        );
      });
      for (x in list) {
        content.innerHTML +=
          '<button class="adventurer" value="' +
          list[x].ID +
          '">' +
          list[x].Name +
          "</button><br>";
      }
      var adventurerNames = content.getElementsByTagName("button");
      for (var i = 0; i < adventurerNames.length; i++) {
        adventurerNames[i].addEventListener("click", function() {
          id = this.value;
          adventurer = list.find(findID, id);
          subcontent.innerHTML = "<h1>" + adventurer.Name + "</h1>";
          fetchCircles(adventurer);
        });
      }
      return;
    });
}

var circle;
function fetchCircles(adventurer) {
  for (x in adventurer.Circles) {
    circle = adventurer.Circles[x];
    subcontent.insertAdjacentHTML(
      "beforeend",
      "<table class='circle' id='circle" +
        circle.Circle +
        "'><h2>Circle " +
        circle.Circle +
        "</h2></table>"
    );
    fetchNodes(circle);
  }
}

var node;
function fetchNodes(circle) {
  for (x in circle.Nodes) {
    node = circle.Nodes[x];
    var nodeList = document.getElementById("circle" + circle.Circle);
    nodeList.insertAdjacentHTML(
      "beforeend",
      "<tr><th colspan='2' class='node' id='node" +
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

function findID(list) {
  return list.ID === id;
}

function fetchWeapons(checklist) {
  empty(content);
  empty(subcontent);
  subcontent.innerHTML = "Weapons";
  return;
}

function fetchWyrmprints(checklist) {
  empty(content);
  empty(subcontent);
  subcontent.innerHTML = "Wyrmprints";
  return;
}

function fetchDragons(checklist) {
  empty(content);
  empty(subcontent);
  subcontent.innerHTML = "Dragons";
  return;
}

});
