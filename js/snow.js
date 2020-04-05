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
