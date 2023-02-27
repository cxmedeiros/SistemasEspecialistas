class MenuPage{
  constructor(){
    this.totalCells = 8;
    this.cellHeight = 560/8;
    this.text = [
      '(Click on this Screen)',
      'Select the type of search:',
      '1. Breadth First Search',
      '2. Depth First Search',
      '3. Greedy Search',
      '4. Uniform Cost Search',
      '5. A* Search',
      'Use the Numpad',
    ];
  }
  draw(){
    
    for(let i = 0; i < this.text.length; i++){
      fill("white");
      noStroke();
      textSize(32);
      textAlign(CENTER, CENTER);
      text(this.text[i], 0, 20+ (i * this.cellHeight), 600, this.cellHeight);
    }
  }
}