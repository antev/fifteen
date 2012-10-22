/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.log');


fifteen.log.init = function() {
	var log = fifteen.log;
	log.isUsed = fifteen.config.useLog && goog.isDef(console) && goog.isFunction(console.log);
	log.lastEventTime = log.getTime();
}


fifteen.log.add = function(value) {
	var log = fifteen.log;
	if (!log.isUsed) {
		return;
	}
	var time = log.getTime();
	console.log(time - log.lastEventTime + '\t' +  value);
	log.lastEventTime = time;
}


fifteen.log.getTime = function() {
	var d = new Date();
	return d.getTime()
}