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

fifteen.findex.prototype.data = [];

fifteen.findex.prototype.push = function(value, weight) {
	if (!goog.isDef(this.data[weight])) {
		this.data[weight] = [];
	}
	this.data[weight].push(value);
}


fifteen.findex.prototype.pop = function() {
	for (var weight in this.data) {
		var value = this.data[weight].shift();
		if (this.data[weight].length == 0) {
			delete this.data[weight];
		}
		return value;
	}
}