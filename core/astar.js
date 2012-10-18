/***************************************************************************
*                                                                          *
*   (c) 2012 Antonov Evgeniy                                               *
*                                                                          *
****************************************************************************/

goog.provide('fifteen.astar');

fifteen.astar.terminalNode = fifteen.config.terminalNode;
fifteen.astar.openList = {};
fifteen.astar.openListF = {};      // F values for the elements from open list
fifteen.astar.openListFIndex = {}; // Index by F for openListF
fifteen.astar.closedList = {};

fifteen.astar.resolve = function(node, terminalNode) {
	if (typeof(terminalNode) == 'undefined') {
		terminalNode = this.terminalNode;
	}

	if (!node.isSolvable()) {
		return false;
	}

	var astar = this;
	astar.clearLists();

	var resolve = function(node, parent) {
		if (node == terminalNode) {
			return parent + node; // Solution found
		}

		var nodeF = node.getF(parent);

		var addToOpenList = function(node) {
			if (typeof(astar.openList[node]) != 'undefined') { // This node is already exists in the open list
				var prevNodeF = astar.openListF[node];
				if (nodeF > prevNodeF) { // The better solution exists in the open list
					return;
				}
				// Remove the node from the open list
				astar.removeFromOpenListFIndex(node, prevNodeF);
			}
			astar.openList[node] = parent;
			astar.addToOpenListFIndex(node, nodeF, parent);
		}

		node.getChilds.forEach(addToOpenList);
		astar.moveToClosedList(node, nodeF);

		return resolve(astar.getNextFromOpenList());
	}

	return resolve(node, '');
}


fifteen.astar.clearLists = function() {
	this.openList = {};
	this.openListF = {};
	this.closedList = {};
}
