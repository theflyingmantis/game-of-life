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

};

module.exports = {
 	Grid : Grid,
 	Cell : Cell,
}