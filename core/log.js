/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.log');


fifteen.log.init = function() {
	this.isUsed = fifteen.config.useLog && goog.isDef(console) && goog.isFunction(console.log);
	this.lastEventTime = this.getTime();
}


fifteen.log.add = function(value) {
	if (!this.isUsed) {
		return;
	}
	var time = this.getTime();
	console.log(time - this.lastEventTime + '\t' +  value);
	this.lastEventTime = time;
}


fifteen.log.getTime = function() {
	var d = new Date();
	return d.getTime()
}