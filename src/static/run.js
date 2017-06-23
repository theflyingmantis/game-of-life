'use strict';

let sizex;
let sizey;
let density;

var grid = new Grid();

var addOrNot = function () {
  if (Math.random() > density)
    return false;
  return true;
}

var makeGrid = function () {
  for (var i = 0; i <= sizex; ++i) {
    for (var j = 0; j <= sizey; ++j) {
      var randomStatus = addOrNot();
      if (randomStatus == true)
        grid.addActiveCell(new Cell(i, j, randomStatus));
    }
  }
}

var wait = function (ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}

var canvasGrid = function () {
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, sizex*4, sizey*4);
  for (var i = 0; i < sizex; ++i){
     for (var j = 0; j < sizey; ++j){
       if (grid.getActiveCell(i, j)){
          context.fillStyle = 'Red';
          context.fillRect(i*4, j*4, 4, 4);
       }
     }
  }
}

var onRepeat = function () {
  grid.updateGrid();
  wait(100);
  canvasGrid();
  requestAnimationFrame(onRepeat);
}

var querySize = function () {
  sizey = prompt('Enter Rows', '100');
  sizex = prompt('Enter Columns', '100');
  density = prompt('Enter Density', 0.5);
  var canvas = document.getElementById('myCanvas');
  canvas.setAttribute('width', (sizex*4).toString());
  canvas.setAttribute('height', (sizey*4).toString());
}

var init = function () {
  querySize();
  makeGrid();
  canvasGrid();
  onRepeat();
}

init();

