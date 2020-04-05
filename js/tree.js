function createTree(countRow, treeName, rowName, border) {
  var tree = document.getElementById(treeName);
  for (i = 0; i < countRow; i++) {
    var row = document.createElement('div');
    row.classList.add(rowName);
    tree.appendChild(row);
  }
  var array = document.getElementsByClassName(rowName),
      width = 0;
  for (var i = 0; i < array.length; i++) {
    array[i].style.width = width + '%';
    array[i].style.borderLeftWidth = border + 'vh';
    array[i].style.borderRightWidth = border + 'vh';
    array[i].style.borderBottomWidth = border + 'vh';
    var decoration = document.createElement('div');
    decoration.classList.add('decoration');

    array[i].appendChild(decoration);
    border = border + 0.2;
    width = width + 5;
  }
}

module.exports = createTree;
