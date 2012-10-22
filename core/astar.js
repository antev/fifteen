/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.astar');
goog.require('fifteen.findex');

fifteen.astar.init = function() {
	this.clearLists();
}


fifteen.astar.clearLists = function() {
	this.openList = {};       // {[node => {parent, F, G}], [node => {parent, F, G}], ...}
	this.closedList = {};     // {[node => true], [node => true], ...}
	this.openListFIndex = new fifteen.findex();
}


fifteen.astar.resolve = function(node) {
	fifteen.log.add('Try to resolve ' + node);
	var terminalNode = fifteen.config.terminalNode;

	if (!node.isSolvable()) {
		fifteen.log.add('This node doesn\'t have solution ' + node);
		return false;
	}

	var astar = this;
	astar.clearLists();

	var resolve = function() {
		var node = astar.openListFIndex.pop();
		var parent = astar.openList[node].parent;

		if (node == terminalNode) {
			return parent + node; // Solution found
		}

		// Move to closed list
		delete astar.openList[node];
		astar.closedList[node] = true;

		// Add children to the open list
		node.getChildren().forEach(function(childNode) {
			astar.addToOpenList(childNode, parent + node);
		});

		return false;
	}

	astar.addToOpenList(node, '');

	var solution = '';
	while(!(solution = resolve())) {}

	fifteen.log.add('Solution found: ' + solution.getStepCount() + ' steps');
	return solution;
}


fifteen.astar.addToOpenList = function(node, parent) {
	if (goog.isDef(this.closedList[node])) {
		return;
	}

	var G = parent.getG();
	var H = node.getH();
	var F = G + H;
	
	if (goog.isDef(this.openList[node])) { // This node is already exists in the open list
		var prevG = this.openList[node].G;
		if (G >= prevG) { // The better or equal solution exists in the open list
			return;
		}
		this.openListFIndex.remove(node, this.openList[node].F);
	}

	this.openList[node] = {parent: parent, G: G, F: F};
	this.openListFIndex.push(node, F);
}