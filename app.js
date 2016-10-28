$(document).ready(function() {
  var numSquares = prompt('Enter grid number (default: 16)', '16')
  drawGrid(+numSquares);
  $('.square').hover(function () {
    $(this).css({'background-color' : randomColor()});
  });
});

var calcSize = function(n) {
  var width = ($('.container').width() / parseFloat(n));
  var height = ($('.container').height() / parseFloat(n));
  return {'height' : height, 'width' : width};
}

var generateSquares = function(n) {
  var squares = ''
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
      squares += '<div class="square"></div> ';
    }
  }
  return squares;
}

var drawGrid = function(n) {
  $('.container').append(generateSquares(n));
  $('.square').css(calcSize(n));
}

var randomColor = function() {
  return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
}
