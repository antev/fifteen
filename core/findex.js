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
	this.data = [];
}


fifteen.findex.prototype.push = function(value, weight) {
	if (!goog.isDef(this.data[weight])) {
		this.data[weight] = [];
	}
	this.data[weight].push(value);
}


fifteen.findex.prototype.pop = function() {
	for (var weight in this.data) {
		var value = this.data[weight].shift();
		this.deleteIfEmpty(weight);
		return value;
	}
}


fifteen.findex.prototype.deleteIfEmpty = function(weight) {
	if (this.data[weight].length == 0) {
		delete this.data[weight];
	}
}


fifteen.findex.prototype.remove = function(value, weight) {
	for (var i = 0; i < this.data[weight].length; i++) {
		if (this.data[weight][i] == value) {
			this.data[weight].splice(i, 1);
			break;
		}
	}
	this.deleteIfEmpty(weight);
}