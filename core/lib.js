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


String.prototype.toHexArray = function() {
	return this.split('');
}


Number.prototype.getRow = function() {
	return Math.floor(this / fifteen.config.fieldSize);
}


Number.prototype.getColumn = function() {
	return this % fifteen.config.fieldSize;
}


Number.prototype.getDistance = function(to) {
	return Math.abs(this - to);
}


HTMLElement.prototype.moveTo = function(x, y) {
	var style = this.style;
	style.webkitTransitionDuration = style.MozTransitionDuration = style.msTransitionDuration = style.OTransitionDuration = style.transitionDuration = fifteen.config.animationDuration + 'ms';
	style.MozTransform = style.webkitTransform = style.msTransform = style.OTransform = 'translate(' + x + 'px,' + y + 'px)';
}