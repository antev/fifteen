/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.config');

fifteen.config = {
	fieldSize: 4,
	heuristicGCost: 10,
	heuristicHCost: 12, // The shortest, but slow solution. Increace this value to improve speed (up to 1000)
	heuristicHZeroCost: 14.375,
	animationDuration: 250,
	elementSize: 47,
	useLog: true,
	pageTarget: 'fifteen',
	terminalNode: '123456789ABCDEF0',
	emptyField: '0',
	allowMultipleMoving: true
}


fifteen.config.init = function() {
	var config = fifteen.config;
	config.nodeLength = Math.pow(config.fieldSize, 2);
}