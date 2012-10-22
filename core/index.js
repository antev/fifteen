/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.index');

fifteen.index.init = function() {
	var index = fifteen.index;
	var config = fifteen.config;
	var emptyField = fifteen.config.emptyField;
	var distanceIndex = {};  // index used for the fast calculation distance between char and his right position
	var i, j;
	for (i = 0; i < config.nodeLength; i++) {
		var charAtI = config.terminalNode.charAt(i);
		distanceIndex[config.terminalNode.charAt(i)] = [];
		for (j = 0; j < config.nodeLength; j++) {
			distanceIndex[config.terminalNode.charAt(i)][j] = charAtI == emptyField ? 0 : fifteen.heuristic.getDistance(i, j);
		}
	}
	index.distanceIndex = distanceIndex;
	index.moveMap = fifteen.field.getMoveMap();
}
