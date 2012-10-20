/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.findex');

/**
 * findex implements two methods - push and pop
 * but unlike the stack it also uses weight of the value
 * so the easiest value will be popped first
 */

fifteen.findex = function() {

}

fifteen.findex.prototype.push = function(value, weight) {
	if (!isDefined(this[weight])) {
		this[weight] = [];
	}
	this[weight].push(value);
}


fifteen.findex.prototype.pop = function() {
	for (var weight in this) {
		var value = this[weight].shift();
		if (this[weight].length == 0) {
			delete this[weight];
		}
		return value;
	}
}