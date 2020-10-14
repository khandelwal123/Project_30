class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.01,
            length : 10
        }

          this.pointB = pointB
       
          this.sling = Constraint.create(options);
          World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null
    }

    attach(body){
        this.sling.bodyA = body
    }

    display(){
        if(this.sling.bodyA){
            stroke(255, 255, 255);
            strokeWeight(2);
            line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x + 20, this.pointB.y - 10);
        } //end of if loop
    } //end of function display
} //end of class