/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

['config', 'lib', 'index', 'log', 'compat', 'page', 'node', 'field', 'astar', 'tests'].forEach(function(obj) {
	goog.require('fifteen.' + obj);
});

$(document).ready(function () {
	['config', 'index', 'log', 'page', 'astar'].forEach(function(obj) {
		fifteen[obj].init();
	});
});