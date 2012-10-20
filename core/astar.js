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
	this.openList = {};       // {[node => {parent, nodeF}], [node => {parent, nodeF}], ...}
	this.closedList = {};     // {[node => true], [node => true], ...}
	this.openListFIndex = new fifteen.findex();
}


fifteen.astar.resolve = function(node) {
	var terminalNode = fifteen.config.terminalNode;

	if (!node.isSolvable()) {
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

		// Add children to the open list
		node.getChildren.forEach(function(childNode) {
			astar.addToOpenList(childNode, parent + node);
		});

		delete astar.openList[node];
		astar.closedList[node] = true;

		return resolve();
	}

	astar.addToOpenList(node, '');
	return resolve();
}


fifteen.astar.addToOpenList = function(node, parent) {
	var G = parent.getG();
	var H = node.getH();
	var F = G + H;
	
	if (isDefined(this.openList[node])) { // This node is already exists in the open list
		var prevG = astar.openList[node].G;
		if (G >= prevG) { // The better or equal solution exists in the open list
			return;
		}
	}
	this.openList[node] = {parent: parent, G: G};
	this.openListFIndex.push(node, F);
}