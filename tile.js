// Generates the tiles of the map using the proportion
// Obstacle: 20%
// Grass: 30%
// Sand: 25%
// Water: 25%

function random_type(){
  let rand = random(1);
  if(rand < 0.2){
    return -1;
  }
  else if(rand >= 0.2 && rand < 0.5){
    return 1;
  }
  else if(rand >= 0.5 && rand < 0.75){
    return 5;
  }
  else{
    return 10;
  }
}

class Tile{
  constructor(i, j){
    this.i = i;
    this.j = j;
    this.cost = random_type(); // defines the type of the tile
    
    this.neighbors = []; // all the tiles that it can traverse to
    
    // marked and visited are used for searching
    this.marked = false;
    this.visited = false;
    
    // previous is used to the pathing 
    this.previous = null;
  }
  
  draw(cellWidth, cellHeight){
    strokeWeight(1);
    if(this.cost == -1){ // wall
      fill(50);  
    }
    else if(this.cost == 1){ // grass
      fill("#177054");
    }
    else if(this.cost == 5){ // sand
      fill("#a79776")
    }
    else if(this.cost == 10){ // water
      fill("#71a0c2") 
    }
    stroke("black");
    if(this.checkStatus() == 1){ //marked
      strokeWeight(4);
      stroke("red");
    }
    else if(this.checkStatus() == 2){ //visited
      strokeWeight(4);
      stroke("blue")
    }
    rect(cellWidth * this. i, cellHeight * this. j, cellWidth)
  }
  
  //checks the status of the tile to see if it was marked or visited to colour its borders
  checkStatus(){
    if(this.marked){
      return 1;
    }
    else if(this.visited){
      return 2;
    }
    else{
      return 0;
    }
  }
  // adds all the possible tiles that a tile can traverse to.
  // an agent can only move horizontaly and verticaly
  addNeighbors(gridMap, rows, cols){
    // if its a wall it has no neighbors
    
    if(this.cost == -1){
      return;
    }
    // adding the EAST neighbor if its not outside the grid and its not a wall
    if(this.i > 0 && gridMap[this.i - 1][this.j].cost != -1){
      this.neighbors.push(gridMap[this.i - 1][this.j]);
    }
    // adding the WEST neighbor if its not outside the grid and its not a wall
    if(this.i < rows - 1 && gridMap[this.i + 1][this.j].cost != -1){
      this.neighbors.push(gridMap[this.i + 1][this.j]);
    }
    // adding the SOUTH neighbor if its not outside the grid and its not a wall
    if(this.j < cols - 1 && gridMap[this.i][this.j + 1].cost != -1){
      this.neighbors.push(gridMap[this.i][this.j + 1]);
    }
    // adding the NORTH neighbor if its not outside the grid and its not a wall
    if(this.j > 0 && gridMap[this.i][this.j - 1].cost != -1){
      this.neighbors.push(gridMap[this.i][this.j - 1]);
    }
  }
}
  
