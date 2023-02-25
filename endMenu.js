class EndMenu{
  draw(){
    let newFoodDiv = createDiv('To create a new food on the grid press "Space"');
    newFoodDiv.position(10, 610)
    newFoodDiv.style("font-size", "12pt");
    newFoodDiv.style("padding", "10px");
    newFoodDiv.style("background-color", "black");
    newFoodDiv.style("color", "white");
    
    let mainMenuDiv = createDiv('To return to the main menu press "Enter"');
    mainMenuDiv.position(10, 650)
    mainMenuDiv.style("font-size", "12pt");
    mainMenuDiv.style("padding", "10px");
    mainMenuDiv.style("background-color", "black");
    mainMenuDiv.style("color", "white");
    
  }
}