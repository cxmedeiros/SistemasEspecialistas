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
  search = null;
  path = null;
  menuPage = new MenuPage();
  endMenu = new EndMenu();
  preloadState = true;
}

function draw() {
  
  background(220);
  
  if(preloadState){
    background(0);
    menuPage.draw();
    if (keyIsDown(97) || keyIsDown(49)) { // 1
      search = new BFS(gridMap);
      path = new Path(search);
      preloadState = false;
      searchState = true;
    }
    if (keyIsDown(98) || keyIsDown(50)) { // 2
      search = new DFS();
      path = new Path(search);
      preloadState = false;
      searchState = true;
    }
    if (keyIsDown(99) || keyIsDown(51)) { // 3
      search = new UniformCost();
      path = new Path(search);
      preloadState = false;
      searchState = true;
    }
    if (keyIsDown(100) || keyIsDown(52)) { // 4
      search = new Greedy();
      path = new Path(search);
      preloadState = false;
      searchState = true;
    }
    if (keyIsDown(101) || keyIsDown(53)) { // 5
      search = new AStar();
      path = new Path(search);
      preloadState = false;
      searchState = true;
    }
    
    
  }
  
  
  // The agent is searching for the food
  if(searchState){
    gridMap.draw();
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
    gridMap.draw();
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
    gridMap.draw();
    endMenu.draw();
    if (keyIsDown(32)) { 
      gridMap.resetAgent();
      gridMap.agent = new Agent(gridMap.agent.i, gridMap.agent.j, width/20, height/20);
      gridMap.generateNewFood();
      search = new BFS(gridMap);
      path = new Path(search);
      endState = false;
      searchState = true;
    }
    if (keyIsDown(ENTER)) {
      gridMap = new GridMap(20,20);
      search = new BFS(gridMap);
      path = new Path(search);
      endState = false;
      preloadState = true;
    }  
  }
}