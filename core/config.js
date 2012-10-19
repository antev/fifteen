/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.config');

fifteen.config = {
	fieldSize: 4,
	animatinoDuration: 250,
	useLog: true,
	pageTarget: 'fifteen',
	terminalNode: '123456789ABCDEF0',
	emptyField: '0'
}


fifteen.config.init = function() {
	fifteen.config.nodeLength = Math.pow(this.fieldSize, 2);
}