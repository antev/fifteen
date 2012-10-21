/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.require('fifteen.templates.page');
goog.provide('fifteen.page');

fifteen.page.node = fifteen.config.terminalNode;
fifteen.page.node = '1304A2685E7B9DFC';
//fifteen.page.node = '36A870FD4915E2CB';
//fifteen.page.node = '26341E085D7C9BAF';
//fifteen.page.node = 'A73654298CBFDE01'; // longest
//A73654298CBFDE01
fifteen.page.isPlayed = false;

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


fifteen.page.setIsPlayed = function (isPlayed) {
	fifteen.page.isPlayed = isPlayed;
	$('#play_stop').toggleClass('stop play');
}


fifteen.page.playOrStop = function () {
	if (fifteen.page.isPlayed) {
		fifteen.page.stop();
	} else {
		fifteen.page.play();
	}
}


fifteen.page.play = function() {
	fifteen.page.setIsPlayed(true);
	var solution = fifteen.astar.resolve(fifteen.page.node);
	if (!solution) {
		alert('This puzzle doesn\'t have solution');
		fifteen.page.stop();
		return;
	}
	console.log(solution);
	fifteen.page.playHistory(solution);
}


fifteen.page.stop = function() {
	fifteen.page.setIsPlayed(false);
}


fifteen.page.playHistory = function(history) {
	var next = history.getNext();
	if (!next) {
		fifteen.page.stop();
	}
	fifteen.page.node = next;
	fifteen.page.renderPosition();
	window.setTimeout(function() {
		fifteen.page.playHistory(history.removeFirst());
	}, fifteen.config.animatinoDuration);
}
