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
	this.renderPosition();
}


/**
 * Move element with hexChar code
 * @param {string} hexChar
 */
fifteen.page.moveElement = function(hexChar) {
	var node = fifteen.page.node;
	var emptyPosition = node.getEmptyIndex();
	var map = fifteen.index.moveMap[emptyPosition][node.indexOf(hexChar)];
	if (!goog.isDef(map)) {
		return;
	}
	fifteen.page.node = fifteen.page.node.move(map);
	this.renderPosition();
}


/**
 * Render current position witch is set in fifteen.page.node
 */
fifteen.page.renderPosition = function() {
	var node = fifteen.page.node;
	var emptyPosition = node.getEmptyIndex();
	var map = fifteen.index.moveMap;
	var element;
	var mulBySize = function(i) {
		return i * fifteen.config.elementSize;
	}
	node.toHexArray().forEach(function(hexChar, index) {
		if (hexChar != fifteen.config.emptyField) {
			element = $('#element_' + hexChar);
			// Move elements
			element.get(0).moveTo(mulBySize(index.getColumn()), mulBySize(index.getRow()));
			// Set pointer class
			if (goog.isDef(map[emptyPosition][index])) {
				element.addClass('pointer');
			} else {
				element.removeClass('pointer');
			}
		}
	});
}


/**
 * Shuffle position
 */
fifteen.page.shuffle = function() {
	fifteen.page.node = fifteen.config.terminalNode.shuffle();
	fifteen.page.renderPosition();
}
