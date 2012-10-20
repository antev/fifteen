/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.lib');

String.prototype.toArray = function() {
	return this.split('').map(function(ch) {
		return parseInt('0x' + ch, 16);
	});
}


Number.prototype.getRow = function() {
	return Math.floor(this / fifteen.config.fieldSize);
}


Number.prototype.getColumn = function() {
	return this % fifteen.config.fieldSize;
}