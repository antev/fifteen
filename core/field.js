/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.field');

fifteen.field.onTheSameCross = function(i, j) {
	return i.getRow() == j.getRow() || i.getColumn() == j.getColumn();
}


fifteen.field.isNeighbor = function(i, j) {
	return fifteen.field.onTheSameCross(i, j) && (i.getRow().getDistance(j.getRow()) == 1 || i.getColumn().getDistance(j.getColumn()) == 1);
}


/**
 * Get list of the alloved moves [emptyPos, movedPos]
 */
fifteen.field.getAllowedMoves = function() {
	var field = fifteen.field;
	var allowedMoves = [];
	var config = fifteen.config;
	var emptyPos, movedPos;
	for (emptyPos = 0; emptyPos < config.nodeLength; emptyPos++) {
		allowedMoves[emptyPos] = [];
		for (movedPos = 0; movedPos < config.nodeLength; movedPos++) {
			if (emptyPos == movedPos) {
				allowedMoves[emptyPos][movedPos] = false;
			} else if (config.allowMultipleMoving) {
				allowedMoves[emptyPos][movedPos] = field.onTheSameCross(emptyPos, movedPos);
			} else {
				allowedMoves[emptyPos][movedPos] = field.isNeighbor(emptyPos, movedPos) ;
			}
		}
	}
	return allowedMoves;
}


/**
 * Map of the allowed moves [emptyPos, movedPos]
 */
fifteen.field.getMoveMap = function() {
	// map of the allowed moves
	var config = fifteen.config;
	var allowedMoves = fifteen.field.getAllowedMoves();
	var moveMap = {};
	var emptyPos, movedPos;
	
	var makeMove = function(empty, moved) {
		var emptyRow = empty.getRow();
		var emptyColumn = empty.getColumn();
		var movedRow = moved.getRow();
		var movedColumn = moved.getColumn();

		// Move empty place to moved place
		var moves = [[empty, moved]];

		// Shift other pieces
		var distance = emptyRow.getDistance(movedRow) || emptyColumn.getDistance(movedColumn);
		var changeStep = emptyRow == movedRow ? 1 : config.fieldSize;
		var isBackMove = emptyRow == movedRow ? emptyColumn < movedColumn : emptyRow < movedRow;

		var calcMovePosition = function(isTo) {
			var distanceAdd = isTo ? 1 : 0;
			var result = moved + changeStep * (i + distanceAdd) * (isBackMove ? -1 : 1);
			return result;
		}

		for (var i = 0; i < distance; i++) {
			moves.push([calcMovePosition(), calcMovePosition(true)]);
		}

		return moves;
	}

	for (emptyPos = 0; emptyPos < config.nodeLength; emptyPos++) {
		moveMap[emptyPos] = [];
		for (movedPos = 0; movedPos < config.nodeLength; movedPos++) {
			if (allowedMoves[emptyPos][movedPos]) {
				moveMap[emptyPos][movedPos] = makeMove(emptyPos, movedPos);
			}
		}
	}

	return moveMap;
}
