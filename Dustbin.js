class Dustbin {

     constructor(x, y, width, height) {
        
        var options = {
           isStatic: true
        }
       
        this.image = loadImage("dustbingreen.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        

        World.add(world, this.body);
     }

     display() {
         
        var pos = this.body.position;
        
        fill("green");
         rect(pos.x, pos.y, this.width, this.height);
         imageMode(CENTER);
         image(this.image, 650, 470, 260, 250)
         rect(540, 525, 20, 100);
         rect(760, 525, 20, 100);
     }
}