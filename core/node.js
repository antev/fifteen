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
	}, this.indexOf(fifteen.config.emptyField).getRow())) % 2 == 1;
}


String.prototype.getF = function(parent) {
	return parent.getG + this.getH;
}


String.prototype.getH = function() {
	var rowIndex = fifteen.index.rowIndex;
	var columnIndex = fifteen.index.columnIndex;
	var heuristicHCost = fifteen.config.heuristicHCost;
	var emptyField = fifteen.config.emptyField;

	// Get distance between elem, coded by hex char, and his right index on the field
	var getDistance = function(elem, index) {
		return elem == emptyField ? 0 : index.getRow().getDistance(rowIndex[elem]) + index.getColumn().getDistance(columnIndex[elem]);
	}

	return this.split('').reduce(function(sum, elem, index) {
		return sum + heuristicHCost * getDistance(elem, index);
	}, 0);
}


String.prototype.getG = function() {
	return fifteen.config.heuristicGCost * this.length / fifteen.config.nodeLength;
}