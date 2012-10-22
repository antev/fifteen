/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.config');

fifteen.config = {
	fieldSize: 4,
	heuristicGCost: 1,
	heuristicHCost: 4,
	animationDuration: 250,
	elementSize: 47,
	useLog: true,
	pageTarget: 'fifteen',
	terminalNode: '123456789ABCDEF0',
	emptyField: '0',
	allowMultipleMoving: true
}


fifteen.config.init = function() {
	fifteen.config.nodeLength = Math.pow(this.fieldSize, 2);
}