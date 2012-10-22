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
	$('#' + fifteen.config.pageTarget).html(
		fifteen.templates.page.content({elements: this.node.toArray(), hexElements: this.node.toHexArray()})
	);
	this.renderPosition(this.node, true);
}


/**
 * Move element with hexChar code
 * @param {string} hexChar
 */
fifteen.page.moveElement = function(hexChar) {
	if (this.isPlayed) {
		return;
	}
	var node = this.node;
	var emptyPosition = node.getEmptyIndex();
	var map = fifteen.index.moveMap[emptyPosition][node.indexOf(hexChar)];
	if (!goog.isDef(map)) {
		return;
	}
	this.renderPosition(this.node.move(map));
}


/**
 * Render position
 */
fifteen.page.renderPosition = function(node, isInit) {
	if (node == this.node && !isInit) {
		return;
	}
	this.node = node;
	if (!isInit) {
		this.incCounter();
	} else {
		this.clearCounter();
	}
	var emptyPosition = node.getEmptyIndex();
	var map = fifteen.index.moveMap;
	var page = this;
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
			if (goog.isDef(map[emptyPosition][index]) && !page.isPlayed) {
				element.addClass('pointer');
			} else {
				element.removeClass('pointer');
			}
		}
	}
	node.toHexArray().forEach(move);
}


/**
 * Shuffle position
 */
fifteen.page.shuffle = function() {
	this.stop();
	this.renderPosition(fifteen.config.terminalNode.shuffle(), true);
}


fifteen.page.setIsPlayed = function (isPlayed) {
	this.isPlayed = isPlayed;
	$('#play_stop').toggleClass('stop play');
}


fifteen.page.playOrStop = function () {
	this.isPlayed ? this.stop() : this.play();
}


fifteen.page.play = function() {
	if (this.isPlayed) {
		return;
	}
	this.setIsPlayed(true);
	var solution = fifteen.astar.resolve(this.node);
	if (!solution) {
		alert('This puzzle doesn\'t have solution');
		this.stop();
		return;
	}
	this.playHistory(solution);
}


fifteen.page.stop = function() {
	if (this.isPlayed) {
		this.setIsPlayed(false);
	}
}


fifteen.page.playHistory = function(history) {
	if (!this.isPlayed) {
		return;
	}
	var next = history.getNext();
	if (next == this.node) {
		next = history.getNext();
	}
	if (!next) {
		this.stop();
		return;
	}
	this.renderPosition(next);
	window.setTimeout(function() {
		fifteen.page.playHistory(history.removeFirst());
	}, fifteen.config.animationDuration);
}


fifteen.page.clearCounter = function() {
	this.counter = 0;
	this.updateCounter();
}


fifteen.page.incCounter = function() {
	this.counter++;
	this.updateCounter();
}


fifteen.page.updateCounter = function() {
	$('#counter').html(this.counter);
}


fifteen.page.initByArray = function(arr) {
	this.renderPosition(arr.toNode(), true);
}
