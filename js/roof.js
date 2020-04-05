function roofCreate() {
  var roofWrapper = document.getElementById('roof-wrapper');
  for (i = 20; i < 110; i = i + 10) {
    var roof = document.createElement('div');
    roof.classList.add('roof');
    roof.style.width = i + '%';
    roofWrapper.appendChild(roof);
  }
}

module.exports = roofCreate;
