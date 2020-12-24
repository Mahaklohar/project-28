class ground{
    constructor(x, y){

        var options ={
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 1200, 30, options);

        this.width = 1200;
        this.height = 30;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);

        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}