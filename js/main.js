(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function homeBoardCreate() {
  var boardWrapper = document.getElementById('home');
  for (i = 0; i < 12; i++) {
    var board = document.createElement('div');
    board.classList.add('board');
    boardWrapper.appendChild(board);
  }
}

module.exports = homeBoardCreate;

},{}],2:[function(require,module,exports){
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

},{"./home":1,"./roof":3,"./snow":4,"./tree":5}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
var SNOWFLAKES = 30;
function init() {
  var first = true;
  for (var i = 0; i < SNOWFLAKES; i++) {
    document.body.appendChild(createASnowflake(first));
    first = false;
  }
}
function randomInteger(low, high) {
  return low + Math.floor(Math.random() * (high - low));
}
function randomFloat(low, high) {
  return low + Math.random() * (high - low);
}
function randomItem(items) {
  return items[randomInteger(0, items.length - 1)];
}
function durationValue(value) {
  return value + 's';
}
function withPrefix(node,styleName,value){
  var prefixArray=["Webkit","Moz"];
  for(var i in prefixArray){
    node.style[prefixArray[i]+styleName]=value;
  }
}
function createASnowflake(is_first) {
  var sizes = ['tiny', 'tiny', 'tiny', 'small', 'small', 'small', 'small', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'large', 'massive'];
  var flakeClases=['snowball-0','snowball-1','snowball-2','snowball-3','snowball-4','snowball-5'];
  var snowflakeElement = document.createElement('div'),
      snowflake = document.createElement('span'),
      snowicon = document.createElement('span');
  snowflakeElement.className = 'snowflake';
  snowicon.className=randomItem(flakeClases)+" "+ randomItem(sizes);
  snowflake.appendChild(snowicon);
  snowflakeElement.appendChild(snowflake);
  var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpin';
  var fadeAndDropDuration = durationValue(randomFloat(5, 11));
  var spinDuration = durationValue(randomFloat(4, 8));
  var flakeDelay = is_first ? 0 : durationValue(randomFloat(0, 5));

  withPrefix(snowflakeElement,"AnimationName",'fade, drop' );
  withPrefix(snowflakeElement,"AnimationDuration",(fadeAndDropDuration + ', ' + fadeAndDropDuration) );
  withPrefix(snowflakeElement,"AnimationDelay",flakeDelay);
  withPrefix(snowflake,"AnimationDuration",spinDuration);
  withPrefix(snowflake,"AnimationName",spinAnimationName);

  snowflakeElement.style[(Math.random() < 0.5) ? 'left' : 'right'] = randomInteger(0, 60) + '%';
  return snowflakeElement;
}

module.exports = init;

},{}],5:[function(require,module,exports){
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

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9ob21lLmpzIiwianMvaW5pdC5qcyIsImpzL3Jvb2YuanMiLCJqcy9zbm93LmpzIiwianMvdHJlZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIGhvbWVCb2FyZENyZWF0ZSgpIHtcclxuICB2YXIgYm9hcmRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcclxuICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgdmFyIGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xyXG4gICAgYm9hcmRXcmFwcGVyLmFwcGVuZENoaWxkKGJvYXJkKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gaG9tZUJvYXJkQ3JlYXRlO1xyXG4iLCJ2YXIgcm9vZiA9IHJlcXVpcmUoJy4vcm9vZicpO1xyXG52YXIgc25vdyA9IHJlcXVpcmUoJy4vc25vdycpO1xyXG52YXIgaG9tZUJvYXJkID0gcmVxdWlyZSgnLi9ob21lJyk7XHJcbnZhciBjcmVhdGVUcmVlID0gcmVxdWlyZSgnLi90cmVlJyk7XHJcblxyXG53aW5kb3cub25sb2FkPWZ1bmN0aW9uKCkge1xyXG4gIHJvb2YoKTtcclxuICBzbm93KCk7XHJcbiAgaG9tZUJvYXJkKCk7XHJcbiAgY3JlYXRlVHJlZSgxMywgJ3RyZWUtMScsICdyb3ctMScsIDEpO1xyXG5cdGNyZWF0ZVRyZWUoMTYsICd0cmVlLTInLCAncm93LTInLCAyLjUpO1xyXG59O1xyXG4iLCJmdW5jdGlvbiByb29mQ3JlYXRlKCkge1xyXG4gIHZhciByb29mV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb29mLXdyYXBwZXInKTtcclxuICBmb3IgKGkgPSAyMDsgaSA8IDExMDsgaSA9IGkgKyAxMCkge1xyXG4gICAgdmFyIHJvb2YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJvb2YuY2xhc3NMaXN0LmFkZCgncm9vZicpO1xyXG4gICAgcm9vZi5zdHlsZS53aWR0aCA9IGkgKyAnJSc7XHJcbiAgICByb29mV3JhcHBlci5hcHBlbmRDaGlsZChyb29mKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm9vZkNyZWF0ZTtcclxuIiwidmFyIFNOT1dGTEFLRVMgPSAzMDtcclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICB2YXIgZmlyc3QgPSB0cnVlO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgU05PV0ZMQUtFUzsgaSsrKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUFTbm93Zmxha2UoZmlyc3QpKTtcclxuICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHJhbmRvbUludGVnZXIobG93LCBoaWdoKSB7XHJcbiAgcmV0dXJuIGxvdyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChoaWdoIC0gbG93KSk7XHJcbn1cclxuZnVuY3Rpb24gcmFuZG9tRmxvYXQobG93LCBoaWdoKSB7XHJcbiAgcmV0dXJuIGxvdyArIE1hdGgucmFuZG9tKCkgKiAoaGlnaCAtIGxvdyk7XHJcbn1cclxuZnVuY3Rpb24gcmFuZG9tSXRlbShpdGVtcykge1xyXG4gIHJldHVybiBpdGVtc1tyYW5kb21JbnRlZ2VyKDAsIGl0ZW1zLmxlbmd0aCAtIDEpXTtcclxufVxyXG5mdW5jdGlvbiBkdXJhdGlvblZhbHVlKHZhbHVlKSB7XHJcbiAgcmV0dXJuIHZhbHVlICsgJ3MnO1xyXG59XHJcbmZ1bmN0aW9uIHdpdGhQcmVmaXgobm9kZSxzdHlsZU5hbWUsdmFsdWUpe1xyXG4gIHZhciBwcmVmaXhBcnJheT1bXCJXZWJraXRcIixcIk1velwiXTtcclxuICBmb3IodmFyIGkgaW4gcHJlZml4QXJyYXkpe1xyXG4gICAgbm9kZS5zdHlsZVtwcmVmaXhBcnJheVtpXStzdHlsZU5hbWVdPXZhbHVlO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBjcmVhdGVBU25vd2ZsYWtlKGlzX2ZpcnN0KSB7XHJcbiAgdmFyIHNpemVzID0gWyd0aW55JywgJ3RpbnknLCAndGlueScsICdzbWFsbCcsICdzbWFsbCcsICdzbWFsbCcsICdzbWFsbCcsICdtZWRpdW0nLCAnbWVkaXVtJywgJ21lZGl1bScsICdtZWRpdW0nLCAnbWVkaXVtJywgJ21lZGl1bScsICdsYXJnZScsICdtYXNzaXZlJ107XHJcbiAgdmFyIGZsYWtlQ2xhc2VzPVsnc25vd2JhbGwtMCcsJ3Nub3diYWxsLTEnLCdzbm93YmFsbC0yJywnc25vd2JhbGwtMycsJ3Nub3diYWxsLTQnLCdzbm93YmFsbC01J107XHJcbiAgdmFyIHNub3dmbGFrZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgc25vd2ZsYWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxyXG4gICAgICBzbm93aWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBzbm93Zmxha2VFbGVtZW50LmNsYXNzTmFtZSA9ICdzbm93Zmxha2UnO1xyXG4gIHNub3dpY29uLmNsYXNzTmFtZT1yYW5kb21JdGVtKGZsYWtlQ2xhc2VzKStcIiBcIisgcmFuZG9tSXRlbShzaXplcyk7XHJcbiAgc25vd2ZsYWtlLmFwcGVuZENoaWxkKHNub3dpY29uKTtcclxuICBzbm93Zmxha2VFbGVtZW50LmFwcGVuZENoaWxkKHNub3dmbGFrZSk7XHJcbiAgdmFyIHNwaW5BbmltYXRpb25OYW1lID0gKE1hdGgucmFuZG9tKCkgPCAwLjUpID8gJ2Nsb2Nrd2lzZVNwaW4nIDogJ2NvdW50ZXJjbG9ja3dpc2VTcGluJztcclxuICB2YXIgZmFkZUFuZERyb3BEdXJhdGlvbiA9IGR1cmF0aW9uVmFsdWUocmFuZG9tRmxvYXQoNSwgMTEpKTtcclxuICB2YXIgc3BpbkR1cmF0aW9uID0gZHVyYXRpb25WYWx1ZShyYW5kb21GbG9hdCg0LCA4KSk7XHJcbiAgdmFyIGZsYWtlRGVsYXkgPSBpc19maXJzdCA/IDAgOiBkdXJhdGlvblZhbHVlKHJhbmRvbUZsb2F0KDAsIDUpKTtcclxuXHJcbiAgd2l0aFByZWZpeChzbm93Zmxha2VFbGVtZW50LFwiQW5pbWF0aW9uTmFtZVwiLCdmYWRlLCBkcm9wJyApO1xyXG4gIHdpdGhQcmVmaXgoc25vd2ZsYWtlRWxlbWVudCxcIkFuaW1hdGlvbkR1cmF0aW9uXCIsKGZhZGVBbmREcm9wRHVyYXRpb24gKyAnLCAnICsgZmFkZUFuZERyb3BEdXJhdGlvbikgKTtcclxuICB3aXRoUHJlZml4KHNub3dmbGFrZUVsZW1lbnQsXCJBbmltYXRpb25EZWxheVwiLGZsYWtlRGVsYXkpO1xyXG4gIHdpdGhQcmVmaXgoc25vd2ZsYWtlLFwiQW5pbWF0aW9uRHVyYXRpb25cIixzcGluRHVyYXRpb24pO1xyXG4gIHdpdGhQcmVmaXgoc25vd2ZsYWtlLFwiQW5pbWF0aW9uTmFtZVwiLHNwaW5BbmltYXRpb25OYW1lKTtcclxuXHJcbiAgc25vd2ZsYWtlRWxlbWVudC5zdHlsZVsoTWF0aC5yYW5kb20oKSA8IDAuNSkgPyAnbGVmdCcgOiAncmlnaHQnXSA9IHJhbmRvbUludGVnZXIoMCwgNjApICsgJyUnO1xyXG4gIHJldHVybiBzbm93Zmxha2VFbGVtZW50O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQ7XHJcbiIsImZ1bmN0aW9uIGNyZWF0ZVRyZWUoY291bnRSb3csIHRyZWVOYW1lLCByb3dOYW1lLCBib3JkZXIpIHtcbiAgdmFyIHRyZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0cmVlTmFtZSk7XG4gIGZvciAoaSA9IDA7IGkgPCBjb3VudFJvdzsgaSsrKSB7XG4gICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvdy5jbGFzc0xpc3QuYWRkKHJvd05hbWUpO1xuICAgIHRyZWUuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxuICB2YXIgYXJyYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHJvd05hbWUpLFxuICAgICAgd2lkdGggPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgYXJyYXlbaV0uc3R5bGUud2lkdGggPSB3aWR0aCArICclJztcbiAgICBhcnJheVtpXS5zdHlsZS5ib3JkZXJMZWZ0V2lkdGggPSBib3JkZXIgKyAndmgnO1xuICAgIGFycmF5W2ldLnN0eWxlLmJvcmRlclJpZ2h0V2lkdGggPSBib3JkZXIgKyAndmgnO1xuICAgIGFycmF5W2ldLnN0eWxlLmJvcmRlckJvdHRvbVdpZHRoID0gYm9yZGVyICsgJ3ZoJztcbiAgICB2YXIgZGVjb3JhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlY29yYXRpb24uY2xhc3NMaXN0LmFkZCgnZGVjb3JhdGlvbicpO1xuXG4gICAgYXJyYXlbaV0uYXBwZW5kQ2hpbGQoZGVjb3JhdGlvbik7XG4gICAgYm9yZGVyID0gYm9yZGVyICsgMC4yO1xuICAgIHdpZHRoID0gd2lkdGggKyA1O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlVHJlZTtcbiJdfQ==
