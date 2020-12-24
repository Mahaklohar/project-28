class launcher{
    constructor(bodyA){

        var option={
            bodyA: bodyA,
            pointB: {x: 120, y: 500},
            length: 10,
            stiffness: 0.02
        }

        this.chain = Constraint.create(option);
        World.add(world,  this.chain);
    }

    throw(){
        this.chain.bodyA = null;
    }

    attach(body){
        this.chain.bodyA = body;
    }
    
    display(){
        if(this.chain.bodyA){
        var aPos = this.chain.bodyA.position;
        
        strokeWeight(5);
        line(120, 500, aPos.x, aPos.y);
        }
    }    
}
