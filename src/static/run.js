var Game = require ('game-of-life');
var size = 400;
var density = 0.8;

var grid = new Game.Grid();

function addOrNot(density){
	if (Math.random()>density)
		return false;
	return true;
}

function make_grid(){
	for (var i=0;i<size;i++){
		for (var j=0;j<size;j++){
			var randomStatus = addOrNot(density);
			grid.addCell(new Game.Cell(i,j,randomStatus));
		}
	}
}

function canvasGrid(){
  var canvas= document.getElementById("myCanvas");
  var context= canvas.getContext("2d");
  context.clearRect(0, 0, 400, 400);
  for(var i =0;i<size;i++){
     for(var j=0;j<size;j++){
       if (grid.getCell(i,j).status){
          context.fillStyle= "Black";
          context.fillRect(i,j,1,1);
          console.log(i,j);
       }
     }
  }
}

make_grid();
canvasGrid();