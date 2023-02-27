class Board{
  constructor(){
    this.totalCells = 11;
    this.cellHeight = 600/12
    this.text = [
      "Agent",
      "Food",
      "Grass\nCost = 1",
      "Sand\nCost = 5",
      "Water\nCost = 10",
      "Obstacle",
      "Path",
      "Marked",
      "Visited",
      "Path Cost",
      "Eaten"
    ];
    
    this.searches = {
      0: "No Search Selected",
      1: "BFS",
      2: "DFS",
      3: "Greedy",
      4: "Uniform Cost",
      5: "A*"
    }
    this.agent = new Agent(0, 0, 600/20, 600/20);
    this.food = new Food(0, 0);
    
    this.grass = new Tile(0, 0);
    this.grass.cost = 1;
    
    this.sand = new Tile(0,0);
    this.sand.cost = 5;
    
    this.water = new Tile(0,0);
    this.water.cost = 10;
    
    this.obstacle = new Tile(0,0);
    this.obstacle.cost = -1;
  }
    
  draw(cost, foodEaten, searchType){
    
    fill("black")
    strokeWeight(4);
    stroke("white");
    rect(600, 0, 200, this.cellHeight);
    
    fill("white");
    strokeWeight(1);
    stroke("black");
    textSize(16);
    textAlign(CENTER,CENTER);
    text(this.searches[searchType], 600, 0, 200, this.cellHeight);
    
    for(let i = 0; i < this.totalCells;i++){
      fill("black");
      strokeWeight(4);
      stroke("white");
      rect(600, i * this.cellHeight + this.cellHeight, 200, this.cellHeight);
    }
    for(let i = 0; i < this.totalCells; i++){
      fill("white");
      strokeWeight(1);
      stroke("black")
      textSize(16);
      textAlign(CENTER, CENTER);
      text(this.text[i], 600, i*this.cellHeight + this.cellHeight, 120, this.cellHeight);
    }
    
    stroke("white")
    strokeWeight(4);
    line(720, this.cellHeight, 720, 600);
    
    this.agent.drawOnDescription(720 + 80/2, this.cellHeight + this.cellHeight/2)
    this.food.drawOnDescription(720+80/2, 2 *this.cellHeight + this.cellHeight/2, 600/40);
    
    this.grass.drawOnDescription(
      720+80/2-600/40, 
      3*this.cellHeight + this.cellHeight/2 - 600/40,
      600/20,
      600/20
    );
    
    this.sand.drawOnDescription(
      720+80/2-600/40, 
      4*this.cellHeight + this.cellHeight/2 - 600/40,
      600/20,
      600/20
    );
    
    this.water.drawOnDescription(
      720+80/2-600/40, 
      5*this.cellHeight + this.cellHeight/2 - 600/40,
      600/20,
      600/20
    );
    
    this.obstacle.drawOnDescription(
      720+80/2-600/40, 
      6*this.cellHeight + this.cellHeight/2 - 600/40,
      600/20,
      600/20
    );
    
    stroke("gold");
    strokeWeight(5);
    beginShape();
    vertex(720+80/2, 7*this.cellHeight + this.cellHeight/3);
    vertex(720+80/2, 7*this.cellHeight + 2*this.cellHeight/3);
    endShape();
    
    stroke("red");
    strokeWeight(4);
    fill("black");
    rect(720+80/2-600/40, 8*this.cellHeight + this.cellHeight/2 - 600/40, 600/20);
    
    stroke("blue");
    strokeWeight(4);
    fill("black");
    rect(720+80/2-600/40, 9*this.cellHeight + this.cellHeight/2 - 600/40, 600/20);
    
    fill("white");
    strokeWeight(1);
    stroke("black");
    textSize(16);
    textAlign(CENTER,CENTER);
    text(cost, 720, 10*this.cellHeight, 80, this.cellHeight);
    
    fill("white");
    strokeWeight(1);
    stroke("black");
    textSize(16);
    textAlign(CENTER,CENTER);
    text(foodEaten, 720, 11*this.cellHeight, 80, this.cellHeight);
  }
}