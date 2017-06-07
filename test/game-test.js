var assert = require ('assert');
var Game = require('../src/static/game-of-life');

describe('Game-of-life',function(){

	describe('addCell',function(){
		it('Add (2,3) cell to grid',function(){
			var grid = new Game.Grid();
			var cell = new Game.Cell(2,3,true);
			grid.addCell(cell);
			assert.equal(cell,grid.cells.x2y3);
		});
	});

	describe('getCell',function(){
		it('retrieve (4,5) cell object from grid',function(){
			var grid = new Game.Grid();
			var cell = new Game.Cell(4,5,true);
			grid.addCell(cell);
			assert.equal(grid.getCell(4,5),cell);
		});
	});
});
