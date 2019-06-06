class Polygon {
  constructor(heights) {
    var polyPerimeter = 0;
    for (var i in heights) {
      polyPerimeter += heights[i];
    }
    this.thePerimeter = polyPerimeter;
  }

  perimeter() {
    return this.thePerimeter;
  }
}
