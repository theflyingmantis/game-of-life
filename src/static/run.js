var size = 100;
var density = 0.3;

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