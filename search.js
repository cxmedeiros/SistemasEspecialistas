class BFS{
    constructor(gridMap){
      this.gridMap = gridMap;
      let agent = this.gridMap.agent;
      let food = this.gridMap.food;
      
      this.startTile = this.gridMap.map[agent.i][agent.j];
      this.endTile = this.gridMap.map[food.i][food.j];
      
      // used to determine the current tile that is visited
      this.currentTile = gridMap.currentTileOfSearch;
      
      // auxiliary queue for the visited tiles
      this.queue = [];
      
      // flag to check if the search found the food
      this.found = false;
      
      // marks the position of the start tile
      this.queue.push(this.startTile);
      this.startTile.marked = true;
    }
    
    // BFS
    find(){
      
      // Are there any option left to search?
      if(this.queue.length > 0){
        
        // Have I found the food?
        if(this.currentTile !== this.endTile){
          // visits the first tile of the queue 
          this.currentTile = this.queue.shift();
          this.currentTile.marked = false;
          this.currentTile.visited = true;

          // marks all the neighbors from the tile that can be marked
          let neighbors = this.currentTile.neighbors;
          for(let neighbor of neighbors){
              if(!neighbor.marked &&  !neighbor.visited && neighbor.cost != -1){
                  neighbor.previous = this.currentTile;
                  this.queue.push(neighbor);
                  neighbor.marked = true;
              }
          }    
        }
        // Found the food
        // Change the found flag and change to traversal state
        else{
          console.log("Food found!!!")
          this.found = true;
          return
        }
      }
      // No possible solution
      // Stops the execution
      else{
        console.log("No solution found");
        noLoop();
        return;
      }
    }
  }