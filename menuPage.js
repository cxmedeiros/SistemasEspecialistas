class MenuPage{
  draw(){
    textSize(32);
    fill(255, 255, 255);
    text('Select the type of search', 120, 100);
    text('1. Breadth First Search', 120, 160);
    text('2. Depth First Search', 120, 220);
    text('3. Uniform Cost', 120, 280);
    text('4. Greedy', 120, 340);
    text('5. A*', 120, 400);
    text('Use the numpad', 180, 460);
  }
}