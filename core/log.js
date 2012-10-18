/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.log');

fifteen.log.isUsed = true;

fifteen.log.init = function(isUsed) {
	if (typeof(isUsed) != 'undefined') {
		this.isUsed = isUsed;
	}
}


fifteen.log.add = function(value) {
	if (this.isUsed && typeof(console) != 'undefined' && typeof(console.log) == 'function' ) {
		console.log(value);
	}
}