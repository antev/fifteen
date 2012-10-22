/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.heuristic');

/**
 * Get distance between two points on the field
 */
fifteen.heuristic.getDistance = function(i, j) {
	var iRow = i.getRow();
	var iColumn = i.getColumn();
	var jRow = j.getRow();
	var jColumn = j.getColumn();
	var pow = function(a, b) {
		return Math.pow((a - b), 2);
	}
	return Math.round(Math.sqrt((pow(iRow, jRow) + pow(iColumn, jColumn))) * fifteen.config.heuristicHCost);
}