/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.require('fifteen.templates.page');
goog.provide('fifteen.page');

fifteen.page.node = fifteen.config.terminalNode;

fifteen.page.init = function() {
	$('#' + fifteen.config.pageTarget).html(
		fifteen.templates.page.content({elements: fifteen.page.node.toArray(), hexElements: fifteen.page.node.toHexArray()})
	);

}
