/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.require('fifteen.config');
goog.require('fifteen.log');
goog.require('fifteen.compat');
goog.require('fifteen.page');
goog.require('fifteen.node');


$(document).ready(function () {
	fifteen.config.init();
	fifteen.log.init();
	fifteen.page.init();
});
