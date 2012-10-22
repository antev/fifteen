/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.index');

fifteen.index.init = function() {
	var index = fifteen.index;
	var config = fifteen.config;
	var rowIndex = [];       // index used for the fast calculation row of the element
	var columnIndex = [];    // index used for the fast calculation column of the element
	var rowChIndex = {};     // index used for the fast calculation row of the element by char
	var columnChIndex = {};  // index used for the fast calculation column of the element by char
	var i, charAti;
	for (i = 0; i < config.nodeLength; i++) {
		charAti = config.terminalNode.charAt(i);
		rowChIndex[charAti] = i.getRow();
		columnChIndex[charAti] = i.getColumn();
		rowIndex[i] = i.getRow();
		columnIndex[i] = i.getColumn();
	}


	index.rowIndex = rowIndex;
	index.columnIndex = columnIndex;
	index.rowChIndex = rowChIndex;
	index.columnChIndex = columnChIndex;
	index.moveMap = fifteen.field.getMoveMap();
}
