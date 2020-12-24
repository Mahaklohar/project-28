class mango {
    constructor(x, y, radius){

        var option ={
            isStatic: true,
            restitution:0,
            friction: 1
        }

        this.body = Bodies.circle(x, y, radius, option);
        this.radius = radius;

        this.image = loadImage("mango.png")

        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;

        ellipseMode(RADIUS)
        ellipse(pos.x, pos.y, this.radius, this.radius);

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius*3+70, this.radius*3+50);
    }
}