var Grid = function (){
 	this.cells={};
};

var Cell = function(x,y,status){
 	this.x = x;
 	this.y = y;
 	this.status = status;
};

Grid.prototype = {
 	cellRepresentation : function(x,y){
 		return "x" + x + "y" + y;
 	},
 	addCell : function(cell){
 		this.cells[this.cellRepresentation(cell.x,cell.y)] = cell;
 	},
 	getCell : function(x,y){
 		return this.cells[this.cellRepresentation(x,y)];
 	},
 	getAliveNeighbours : function(cell){
    x = cell.x;
    y = cell.y;
    var aliveCount = 0;
    for(var i = -1; i < 2; i++){
    	for(var j = -1; j < 2; j++){
    		if(x-i === x && y-j === y)
    			continue;
    		var neighbour = this.cells[this.cellRepresentation(x-i,y-j)];
    		if(neighbour && neighbour.status)
    			aliveCount++;
    	}
    }
    return aliveCount;
  },
  updateGrid : function(){
  	var copyCells= {};
  	for (cell in this.cells)
  	{
  		copyCells[cell]=this.cells[cell];
  	}
    for (var cell in copyCells){
    	if (copyCells.hasOwnProperty(cell)) {
    		copyCells[cell].updateStatus(this.getAliveNeighbours(this.cells[cell]));
  		}
		}
		this.cells=copyCells;
  	console.log(this.cells);
 	}

};

Cell.prototype = {
	updateStatus : function (aliveneighbours){
		var finalStatus = false;
		switch (aliveneighbours){
			case 2:
        finalStatus = this.status;
        break;
    	case 3:
        finalStatus = true;
        break;
    	default: 
    		finalStatus = false;
		}
		this.status=finalStatus;
	}
};


//******************************** MAIN CODE *******************************************
var size = 100;
var density = 0.1;

var grid = new Grid();

function addOrNot(density){
	if (Math.random()>density)
		return false;
	return true;
}

function make_grid(){
	for (var i=0;i<=size;i++){
		for (var j=0;j<=size;j++){
			var randomStatus = addOrNot(density);
			grid.addCell(new Cell(i,j,randomStatus));
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
          context.fillStyle= "Red";
          context.fillRect(i*4,j*4,4,4);
          console.log(i,j);
       }
     }
  }
}

function onrepeat(){
	grid.updateGrid();
	canvasGrid();
	requestAnimationFrame(onrepeat);
}


function init(){	
	make_grid();
	canvasGrid();
	onrepeat();
}

init();


//********************************************************************************************

module.exports = {
 	Grid : Grid,
 	Cell : Cell,
}