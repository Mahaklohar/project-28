class stone{
    constructor(x, y, radius){
        var option ={
            //isStatic: false,
            restitution: 0.8,
            friction: 1,
            density: 1.2
        }

        this.body = Bodies.circle(x, y, radius, option);
        this.radius = radius;

        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }
    
    display(){
        var pos = this.body.position;

        push();
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius, this.radius);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius*3+20, this.radius*3+20);
        pop();
    }
}