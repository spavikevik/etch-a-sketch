numSquares = 16;
color = "black";
$(document).ready(function() {
  drawGrid(+numSquares);
  $('button').on('click', function(event) {
    event.preventDefault();
  })
});

var setGridSize = function() {
  numSquares = prompt("Enter new grid size (default is 16x16)", "16");
  $('.container').empty();
  drawGrid(+numSquares);
}

var setColor = function(option) {
  if (option === 'random') {
    color = randomColor();
  }
  else {
    color = option;
  }
}

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
  $('.square').hover(function () {
    $(this).css({'background-color' : color});
  });
}

var randomColor = function() {
  return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
}
