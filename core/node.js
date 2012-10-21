/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.node');

String.prototype.isSolvable = function() {
	return (this.toArray().reduce(function(sum, elem1, index, array) {
		return sum + array.slice(index).reduce(function(sum2, elem2) {
			return sum2 + ((elem1 && elem2) ? (elem2 < elem1 ? 1 : 0) : 0);
		}, 0);
	}, this.getEmptyIndex().getRow())) % 2 == 1;
}


String.prototype.getH = function() {
	var rowChIndex = fifteen.index.rowChIndex;
	var columnChIndex = fifteen.index.columnChIndex;
	var rowIndex = fifteen.index.rowIndex;
	var columnIndex = fifteen.index.columnIndex;
	var heuristicHCost = fifteen.config.heuristicHCost;
	var emptyField = fifteen.config.emptyField;

	var getDistance = function(elem, index) {
		return elem == emptyField ? 0 : (Math.abs(rowIndex[index] - rowChIndex[elem]) + Math.abs(columnIndex[index] - columnChIndex[elem]));
	}

	return this.split('').reduce(function(sum, elem, index) {
		return sum + heuristicHCost * getDistance(elem, index);
	}, 0);
}


String.prototype.getG = function() {
	return fifteen.config.heuristicGCost * this.getStepCount();
}

String.prototype.getEmptyIndex = function() {
	return this.indexOf(fifteen.config.emptyField);
}


String.prototype.move = function(steps) {
	var srcArray = this.split('');
	var resultArray = srcArray.slice(0);
	steps.forEach(function(step) {
		resultArray[step[1]] = srcArray[step[0]];
	});
	return resultArray.join('');
}


String.prototype.getChildren = function() {
	return fifteen.index.moveMap[this.getEmptyIndex()].map(function(steps) {
		return this.move(steps);
	}, this);
}


String.prototype.shuffle = function () {
	var shuffledArray = this.toHexArray();
	var length = this.length;
	var tmp;

	for(var i = 0; i <  length; i++) {
		var rand = Math.floor((Math.random() * length));
		tmp = shuffledArray[rand];
		shuffledArray[rand] = shuffledArray[i];
		shuffledArray[i] = tmp;
	}
	return shuffledArray.join('');
}


String.prototype.getNext = function () {
	if (!this.length) {
		return false;
	}
	return this.slice(0, fifteen.config.nodeLength);
}


String.prototype.removeFirst = function () {
	if (!this.length) {
		return false;
	}
	return this.slice(fifteen.config.nodeLength);
}


String.prototype.getStepCount = function () {
	return this.length / fifteen.config.nodeLength - 1;
}
