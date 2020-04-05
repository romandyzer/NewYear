var roof = require('./roof');
var snow = require('./snow');
var homeBoard = require('./home');
var createTree = require('./tree');

window.onload=function() {
  roof();
  snow();
  homeBoard();
  createTree(13, 'tree-1', 'row-1', 1);
	createTree(16, 'tree-2', 'row-2', 2.5);
};
