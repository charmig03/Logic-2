function makeBricks(small, big, goal){
    // not enough bricks
    if (goal > big * 5 + small) {
      return false;
    }
  
      // not enough small bricks
    if (goal % 5 > small) {
      return false;
    }
  
    return true;
}