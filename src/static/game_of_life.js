var Grid = function () {
 	this.activeCells={};
  this.nextCells={};
};

var Cell = function (x,y,status) {
 	this.x = x;
 	this.y = y;
 	this.status = status;
};

Grid.prototype = {
 	cellRepresentation : function (x,y) {
 		return "x" + x + "y" + y;
 	},
 	addActiveCell : function (cell) {
 		this.activeCells[this.cellRepresentation(cell.x,cell.y)] = cell;
 	},
  addNextCell : function (x,y) {
    this.nextCells[this.cellRepresentation(x,y)] = new Cell(x,y,true);
  },
 	getActiveCell : function (x,y) {
 		return this.activeCells[this.cellRepresentation(x,y)];
 	},
  getNextCell : function (x,y) {
    return this.nextCells[this.cellRepresentation(x,y)];
  },
  getAliveNeighbours : function (x,y) { 
    var aliveCount = 0;
    for(var i =- 1; i<2; i++){
      for(var j =-1; j<2; j++){
        if (x-i === x && y-j === y) 
          continue;
        var neighbour = this.activeCells[this.cellRepresentation(x-i,y-j)];
        if(neighbour)
          aliveCount++;
      }
    }
    return aliveCount;
  },
  updateGrid : function () {
    for (aCell in this.activeCells){
      var x=this.activeCells[aCell].x;
      var y=this.activeCells[aCell].y;
      switch(this.getAliveNeighbours(x,y)){
        case 2:
        case 3: this.addNextCell(x,y); break;
        default: break;
      }
      for (var i=-1;i<2;i++){
        for (var j=-1;j<2;j++){
          if (this.getActiveCell(x+i,y+j))
            continue;
          if (this.getNextCell(x+i,y+j))
              continue;
          switch(this.getAliveNeighbours(x+i,y+j)){
            case 3:
              this.addNextCell(x+i,y+j);
              break;
            default: break;
          }
        }
      }
    }
    this.activeCells = this.nextCells;
    this.nextCells = {};
  }

};

module.exports = {
 	Grid : Grid,
 	Cell : Cell,
}
