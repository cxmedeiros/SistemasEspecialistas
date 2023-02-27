class EndMenu{
  constructor(){
    this.text = [
      'To create a new food on the grid press "Space"',
      'To return to the main menu press "Enter"'
    ]
  }
  draw(){
    
    fill("black");
    strokeWeight(4);
    stroke("white");
    rect(0, 600, 400, 100);
    
    fill("white");
    strokeWeight(1);
    stroke("black")
    textSize(16);
    textAlign(CENTER, CENTER);
    text(this.text[0], 0, 600, 400, 100);
    
    fill("black");
    strokeWeight(4);
    stroke("white");
    rect(400, 600, 400, 100);
    
    fill("white");
    strokeWeight(1);
    stroke("black")
    textSize(16);
    textAlign(CENTER, CENTER);
    text(this.text[1], 400, 600, 400, 100);
    
  }
}