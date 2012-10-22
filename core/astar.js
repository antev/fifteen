/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.astar');
goog.require('fifteen.findex');

fifteen.astar.init = function() {
	fifteen.astar.clearLists();
}


fifteen.astar.clearLists = function() {
	var astar = fifteen.astar;
	astar.openList = {};       // {[node => {parent, F, G}], [node => {parent, F, G}], ...}
	astar.closedList = {};     // {[node => true], [node => true], ...}
	astar.openListFIndex = new fifteen.findex();
}


fifteen.astar.resolve = function(node) {
	var astar = fifteen.astar;
	fifteen.log.add('Try to resolve ' + node);
	var terminalNode = fifteen.config.terminalNode;

	if (!node.isSolvable()) {
		fifteen.log.add('This node doesn\'t have solution ' + node);
		return false;
	}

	var nodesChecked = 0;
	astar.clearLists();

	var resolve = function() {
		nodesChecked++;
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

	fifteen.log.add('Solution found: ' + solution.getStepCount() + ' steps. Nodes checked: ' + nodesChecked);
	return solution;
}


fifteen.astar.addToOpenList = function(node, parent) {
	var astar = fifteen.astar;
	if (goog.isDef(astar.closedList[node])) {
		return;
	}

	var G = parent.getG();
	var H = node.getH();
	var F = G + H;
	
	if (goog.isDef(astar.openList[node])) { // This node is already exists in the open list
		var prevG = astar.openList[node].G;
		if (G >= prevG) { // The better or equal solution exists in the open list
			return;
		}
		astar.openListFIndex.remove(node, astar.openList[node].F);
	}

	astar.openList[node] = {parent: parent, G: G, F: F};
	astar.openListFIndex.push(node, F);
}