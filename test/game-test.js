var assert = require ('assert');
var Game = require('../src/static/game-of-life');


describe('Game-of-life',function(){

	describe('addActiveCell',function(){
		it('Add (2,3) cell to activeCell',function(){
			var grid = new Game.Grid();
			var cell = new Game.Cell(2,3,true);
			grid.addActiveCell(cell);
			assert.equal(cell,grid.activeCells.x2y3);
		});
	});

  describe('addNextCell',function(){
		it('Add (2,3) cell to nextCell',function(){
			var grid = new Game.Grid();
			var cell = new Game.Cell(2,3,true);
			grid.addNextCell(2,3);
			assert.deepEqual(cell,grid.nextCells.x2y3);
		});
	});


	describe('getActiveCell',function(){
		it('retrieve (4,5) cell object from grid',function(){
			var grid = new Game.Grid();
			var cell = new Game.Cell(4,5,true);
			grid.addActiveCell(cell);
			assert.equal(grid.getActiveCell(4,5),cell);
		});
	});

	describe('getAliveNeighbours', function(){
		it('give zero alive neighbours',function(){
			var grid = new Game.Grid();
			var cell = new Game.Cell(1,1,true);
			grid.addActiveCell(cell);
			assert.equal(0,grid.getAliveNeighbours(1,1));
		});

		it('it should return 4 alive neighbours when 4 alive cells are added in its surrounding', function(){
      var grid = new Game.Grid();
			var cell1 = new Game.Cell(2,3,true);
      var cell2 = new Game.Cell(2,1,true);
      var cell3 = new Game.Cell(1,2,true);
      var cell4 = new Game.Cell(3,2,true);
      grid.addActiveCell(cell1);
      grid.addActiveCell(cell2);
      grid.addActiveCell(cell3);
      grid.addActiveCell(cell4);
      assert.equal(4,grid.getAliveNeighbours(2,2));
		});
	});

  describe('updateGrid', function(){
  	it('test',function(){
      var grid = new Game.Grid();
			var cell1 = new Game.Cell(2,2,true);
      var cell2 = new Game.Cell(2,3,true);
      var cell3 = new Game.Cell(3,3,true);
      grid.addActiveCell(cell1);
      grid.addActiveCell(cell2);
      grid.addActiveCell(cell3);
      grid.updateGrid();
      assert.equal(true,grid.activeCells.x3y2.status);
  	});
  });

});
