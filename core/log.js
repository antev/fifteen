/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.log');

fifteen.log.isUsed = true;

fifteen.log.init = function(isUsed) {
	if (!goog.isDef(isUsed)) {
		this.isUsed = isUsed;
	}
}


fifteen.log.add = function(value) {
	if (this.isUsed && goog.isDef(console) && goog.isFunction(console.log)) {
		console.log(value);
	}
}
