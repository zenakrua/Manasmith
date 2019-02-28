var AdventurerController = function AdventurerController(adventurerView, adventurerModel) {

	this.adventurerView = adventurerView;
	this.adventurerModel = adventurerModel;
	
};

AdventurerController.prototype.initialize = function initialize() {
  this.adventurerView.onClickGetAdventurer = this.onClickGetAdventurer.bind(this);
};

AdventurerController.prototype.onClickGetAdventurer = function onClickGetAdventurer(e) {
  var target = e.currentTarget;
  var index = parseInt(target.dataset.adventurerIndex, 10);

  this.adventurerModel.getPenguin(index, this.showPenguin.bind(this));
};
