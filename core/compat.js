/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.compat');

if (!Array.prototype.forEach) {
	Array.prototype.forEach = function(fn, scope) {
		for(var i = 0, len = this.length; i < len; ++i) {
			fn.call(scope || this, this[i], i, this);
		}
	}
}