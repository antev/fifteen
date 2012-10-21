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
	this.renderPosition(fifteen.config.terminalNode.shuffle(), true);
}


fifteen.page.setIsPlayed = function (isPlayed) {
	this.isPlayed = isPlayed;
	$('#play_stop').toggleClass('stop play');
	this.setBlockEvents(isPlayed);
}


fifteen.page.playOrStop = function () {
	if (this.isPlayed) {
		this.stop();
	} else {
		this.play();
	}
}


fifteen.page.setBlockEvents = function (isBlocked) {
	var method = isBlocked ? 'addClass' : 'removeClass';
	$('*')[method]('progress');
}


fifteen.page.play = function() {
	this.setIsPlayed(true);
	var page = this;
	var play = function() {
		var solution = fifteen.astar.resolve(page.node);
		page.setBlockEvents(false);
		if (!solution) {
			alert('This puzzle doesn\'t have solution');
			page.stop();
			return;
		}
		page.playHistory(solution);
	}
	window.setTimeout(play, 1000);
}


fifteen.page.stop = function() {
	this.setIsPlayed(false);
}


fifteen.page.playHistory = function(history) {
	var next = history.getNext();
	if (!next) {
		this.stop();
		return;
	}
	this.renderPosition(next);
	window.setTimeout(function() {
		fifteen.page.playHistory(history.removeFirst());
	}, fifteen.config.animatinoDuration);
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
