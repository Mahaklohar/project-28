class tree{
    constructor(x,  y){
        var option ={
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 150, 550, option);
        this.width = 150;
        this.height = 600;
        this.image = loadImage("tree.png");

        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;

        rectMode(CENTER);
        push();
        fill("SkyBlue");
        strokeWeight(0);

        //rectMode(CENTER)
        rect(pos.x, pos.y, this.width, this.height);

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width+400, this.height);
        pop();
    }
}