/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.require('fifteen.config');
goog.require('fifteen.lib');
goog.require('fifteen.index');
goog.require('fifteen.log');
goog.require('fifteen.compat');
goog.require('fifteen.page');
goog.require('fifteen.node');
goog.require('fifteen.field');
goog.require('fifteen.astar');
goog.require('fifteen.tests');

$(document).ready(function () {
	fifteen.config.init();
	fifteen.index.init();
	fifteen.log.init();
	fifteen.page.init();
	fifteen.astar.init();
});