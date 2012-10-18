/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.node');

String.prototype.isSolvable = function() {
	return (this.toArray().reduce(function(sum, elem1, index, array) {
		return sum + array.slice(index).reduce(function(sum, elem2, index) {
			return sum + (elem1 < elem2);
		});
	}, Math.floor(this.indexOf('0')))) % 2 == 0;

}

String.prototype.toArray = function() {
	return this.split('').map(function (ch) {
		return parseInt('0x' + ch, 16);
	});
}