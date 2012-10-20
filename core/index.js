/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.index');

fifteen.index.init = function(config) {
	if (typeof(config) == 'undefined') {
		config = fifteen.config;
	}

	var onTheSameCross = function(i, j) {
		return i.getRow() == j.getRow() || i.getColumn() == j.getColumn();
	}
	var isNeighbor = function(i, j) {
		return onTheSameCross(i, j) && (Math.abs(i.getRow() - j.getRow()) == 1 || Math.abs(i.getColumn() - j.getColumn()) == 1);
	}

	var rowIndex = {};      // index used for the fast calculation row of the element
	var columnIndex = {};   // index used for the fast calculation column of the element
	var allowedMoves = [];  // index for the allowed moves
	var i, j, charAti;
	for (i = 0; i < config.nodeLength; i++) {
		charAti = config.terminalNode.charAt(i);
		rowIndex[charAti] = i.getRow();
		columnIndex[charAti] = i.getColumn();
		allowedMoves[i] = [];
		for (j = 0; j < config.nodeLength; j++) {
			if (i == j) {
				allowedMoves[i][j] = false;
			} else if (config.allowMultipleMoving) {
				allowedMoves[i][j] = onTheSameCross(i, j);
			} else {
				allowedMoves[i][j] = isNeighbor(i, j) ;
			}
		}
	}

	this.rowIndex = rowIndex;
	this.columnIndex = columnIndex;
	this.allowedMoves = allowedMoves;
}