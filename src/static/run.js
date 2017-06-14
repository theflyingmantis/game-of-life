var sizex;
var sizey;
var density;

var grid = new Grid();

function addOrNot(density){
  if (Math.random()>density)
    return false;
  return true;
}

function make_grid(){
  for (var i=0;i<=sizex;i++){
    for (var j=0;j<=sizey;j++){
      var randomStatus = addOrNot(density);
      if (randomStatus == true)
        grid.addActiveCell(new Cell(i,j,randomStatus));
    }
  }
}

function wait(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}

function canvasGrid(){
  var canvas= document.getElementById("myCanvas");
  var context= canvas.getContext("2d");
 // context.height = sizex*4;
  //context.width = sizey*4;
  context.clearRect(0, 0, sizex*4, sizey*4);
  for(var i =0;i<sizex;i++){
     for(var j=0;j<sizey;j++){
       if (grid.getActiveCell(i,j)){
          context.fillStyle= "Red";
          context.fillRect(i*4,j*4,4,4);
       }
     }
  }
}

function onrepeat(){
  grid.updateGrid();
  wait(100);
  canvasGrid();
  requestAnimationFrame(onrepeat);
}

function querySize() {
  sizey = prompt("Enter Rows", "100");
  sizex = prompt("Enter Columns", "100");
  density = prompt("Enter Density",0.5);
  var canvas = document.getElementById('myCanvas');
  canvas.setAttribute("width",(sizex*4).toString());
  canvas.setAttribute("height",(sizey*4).toString());
}

function init(){
  querySize();
  make_grid();
  canvasGrid();
  onrepeat();
}

init();

