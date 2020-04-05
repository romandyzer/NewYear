function homeBoardCreate() {
  var boardWrapper = document.getElementById('home');
  for (i = 0; i < 12; i++) {
    var board = document.createElement('div');
    board.classList.add('board');
    boardWrapper.appendChild(board);
  }
}

module.exports = homeBoardCreate;
