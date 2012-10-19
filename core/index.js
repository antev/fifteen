/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.index');

fifteen.index.init = function(nodeLength, fieldSize) {
	if (typeof(nodeLength) == 'undefined') {
		nodeLength = fifteen.config.nodeLength;
	}
	if (typeof(fieldSize) == 'undefined') {
		fieldSize = fifteen.config.fieldSize;
	}

	// index used for fast calculation row of the element
	fifteen.index.rowIndex = [];
	for (var i = 0; i < nodeLength; i++) {
		fifteen.index.rowIndex[i] = Math.floor(i / fieldSize);
	}

	// index used for fast calculation column of the element
	fifteen.index.columnIndex = [];
	for (i = 0; i < nodeLength; i++) {
		fifteen.index.columnIndex[i] = i % fifteen.config.fieldSize;
	}

	// TODO: index for parseInt and neighbors
}