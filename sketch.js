// states
let preloadState = false;
let searchState = false;
let traverseState = false;
let endState = false;

// sleep fuction to stop execution and make it easier to see the search
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function setup() {
  createCanvas(600, 600);
  gridMap = new GridMap(20,20);
  search = new BFS(gridMap);
  path = new Path(search);
  searchState = true;
}

function draw() {
  
  background(220);
  gridMap.draw();
  
  // The agent is searching for the food
  if(searchState){  
    search.find();
    path.draw(width/20, height/20);
    sleep(10);
    
    // food is found, trantiton to traverse
    if(search.found){
      gridMap.clearMarkedAndVisited();
      searchState = false;
      traverseState = true;
    }
  }
  
  // The food is found now the agent needs to reach it
  if(traverseState){
    path.draw(width/20, height/20);
    gridMap.agent.draw();
    gridMap.agent.definePath(path);
    gridMap.agent.defineTarget();
    gridMap.agent.defineSpeed();
    gridMap.agent.defineDirection();
    gridMap.agent.hasReachedTarget();
    
    // Reached the food and transition to ending menu
    if(gridMap.agent.hasReachedFood()){
      gridMap.clearPrevious();
      traverseState = false;
      endState = true;
    }
  }
  
  if(endState){
    
  }
  
}