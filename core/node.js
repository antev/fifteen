/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.node');

String.prototype.isSolvable = function() {
	return (this.toArray().reduce(function(sum, elem1, index, array) {
		return sum + array.slice(index).reduce(function(sum, elem2) {
			return sum + (elem1 < elem2);
		});
	}, fifteen.config.emptyField.getRow(this))) % 2 == 0;
}

String.prototype.toArray = function() {
	return this.split('').map(this.toInt, this);
}


String.prototype.toInt = function() {
	return parseInt('0x' + this, 16);
}


String.prototype.getRow = function(index) {
	return Math.floor(index / fifteen.config.fieldSize);
}


String.prototype.getColumn = function(index) {
	return index % fifteen.config.fieldSize;
}


String.prototype.getF = function(parent) {
	return parent.getG + this.getH;
}


String.prototype.getH = function() {
	return this.toArray().reduce(function(sum, elem, index) {
		//return sum +
	});

}


String.prototype.getG = function() {
	return this.length / fifteen.config.nodeLength;
}