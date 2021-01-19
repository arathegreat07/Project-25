class Paper {

    constructor(x, y, radius) {

        var options = {
            isStatic: false,
            restitution: 0.1,
            friction: 0.9,
            density: 1.3
        }
        
        this.image = loadImage("paper.png");
        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.radius = radius;
       

        World.add(world, this.body);
  }

    display() {
      
      var pos = this.body.position;
      push()
      translate(pos.x, pos.y)
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius)
      pop()
      
    }
}