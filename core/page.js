/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.require('fifteen.templates.page');
goog.provide('fifteen.page');

fifteen.page.node = fifteen.config.terminalNode;
fifteen.page.isPlayed = false;
fifteen.page.counter = 0;

fifteen.page.init = function() {
	var page = fifteen.page;
	$('#' + fifteen.config.pageTarget).html(
		fifteen.templates.page.content({elements: page.node.toArray(), hexElements: page.node.toHexArray()})
	);
	page.renderPosition(page.node, true);
}


/**
 * Move element with hexChar code
 * @param {string} hexChar
 */
fifteen.page.moveElement = function(hexChar) {
	var page = fifteen.page;
	if (page.isPlayed) {
		return;
	}
	var node = page.node;
	var emptyPosition = node.getEmptyIndex();
	var map = fifteen.index.moveMap[emptyPosition][node.indexOf(hexChar)];
	if (!goog.isDef(map)) {
		return;
	}
	page.renderPosition(page.node.move(map));
}
goog.exportSymbol('fifteen.page.moveElement', fifteen.page.moveElement);



/**
 * Render position
 */
fifteen.page.renderPosition = function(node, isInit) {
	var page = fifteen.page;
	if (node == page.node && !isInit) {
		return;
	}
	page.node = node;
	if (!isInit) {
		page.incCounter();
	} else {
		page.clearCounter();
	}
	var emptyPosition = node.getEmptyIndex();
	var map = fifteen.index.moveMap;
	var element;
	var mulBySize = function(i) {
		return i * fifteen.config.elementSize;
	}
	var move = function(hexChar, index) {
		if (hexChar != fifteen.config.emptyField) {
			element = $('#element_' + hexChar);
			// Move elements
			element.get(0).moveTo(mulBySize(index.getColumn()), mulBySize(index.getRow()));
			// Set pointer class
			element.toggleClass('pointer', goog.isDef(map[emptyPosition][index]) && !page.isPlayed);
		}
	}
	node.toHexArray().forEach(move);
}


/**
 * Shuffle position
 */
fifteen.page.shuffle = function() {
	var page = fifteen.page;
	page.stop();
	page.renderPosition(fifteen.config.terminalNode.shuffle(), true);
}
goog.exportSymbol('fifteen.page.shuffle', fifteen.page.shuffle);


fifteen.page.setIsPlayed = function (isPlayed) {
	var page = fifteen.page;
	if (isPlayed == page.isPlayed) {
		return;
	}
	page.isPlayed = isPlayed;
	$('#play_stop').toggleClass('stop play');
	$('#counter').toggleClass('pointer', !isPlayed);
}


fifteen.page.playOrStop = function () {
	var page = fifteen.page;
	page.isPlayed ? page.stop() : page.play();
}
goog.exportSymbol('fifteen.page.playOrStop', fifteen.page.playOrStop);


fifteen.page.play = function() {
	var page = fifteen.page;
	if (page.isPlayed) {
		return;
	}
	page.setIsPlayed(true);
	var solution = fifteen.astar.resolve(page.node);
	if (!solution) {
		alert('This puzzle doesn\'t have solution');
		page.stop();
		return;
	}
	page.playHistory(solution);
}


fifteen.page.stop = function() {
	var page = fifteen.page;
	if (page.isPlayed) {
		page.setIsPlayed(false);
	}
}


fifteen.page.playHistory = function(history) {
	var page = fifteen.page;
	if (!page.isPlayed) {
		return;
	}
	var next = history.getNext();
	if (next == page.node) {
		next = history.getNext();
	}
	if (!next) {
		page.stop();
		return;
	}
	page.renderPosition(next);
	window.setTimeout(function() {
		page.playHistory(history.removeFirst());
	}, fifteen.config.animationDuration);
}


fifteen.page.clearCounter = function() {
	var page = fifteen.page;
	if (page.isPlayed) {
		return;
	}
	page.counter = 0;
	page.updateCounter();
}
goog.exportSymbol('fifteen.page.clearCounter', fifteen.page.clearCounter);


fifteen.page.incCounter = function() {
	var page = fifteen.page;
	page.counter++;
	page.updateCounter();
}


fifteen.page.updateCounter = function() {
	$('#counter').html(fifteen.page.counter);
}


fifteen.page.initByArray = function(arr) {
	fifteen.page.renderPosition(arr.toNode(), true);
}
goog.exportSymbol('fifteen.page.initByArray', fifteen.page.initByArray);
