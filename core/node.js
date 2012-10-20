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
	return this.split('').reduce(function(sum, elem, index) {
		// TODO
	});

}


String.prototype.getG = function() {
	return this.length / fifteen.config.nodeLength;
}