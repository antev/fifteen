/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.index');

fifteen.index.init = function() {
	var config = fifteen.config;
	var rowIndex = {};      // index used for the fast calculation row of the element
	var columnIndex = {};   // index used for the fast calculation column of the element
	var i, charAti;
	for (i = 0; i < config.nodeLength; i++) {
		charAti = config.terminalNode.charAt(i);
		rowIndex[charAti] = i.getRow();
		columnIndex[charAti] = i.getColumn();
	}

	this.rowIndex = rowIndex;
	this.columnIndex = columnIndex;
	this.moveMap = fifteen.field.getMoveMap();
}
