class slingy {
constructor(bodyA,bodyB){
    var options = {
        bodyA: bird.body,
        bodyB: log6.body,
        stiffness: 0.03,
        length: 10
        }
        this.slingy = Constraint.create(options);
        World.add (world,slingy);
}
display(){
var pointA = this.slingy.bodyA.position;
var pointB = this.slingy.bodyB.position;
strokeWeight(3);
stroke("Red");
line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}