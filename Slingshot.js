class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10,
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1, 240, 20);
        image(this.image2, 212, 20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           
            if(pointA.x>250){
                image(this.image3, pointA.x+15, pointA.y-5, 15, 30)
                strokeWeight(10);
                stroke("#301C10")
                line(pointA.x, pointA.y+10, pointB.x+20, pointB.y+5);
                line(pointA.x-15, pointA.y+10, pointB.x+60, pointB.y);
            }else{
                image(this.image3, pointA.x-20, pointA.y-5, 15, 30)
                strokeWeight(10);
                stroke("#301C10")
                line(pointA.x-10, pointA.y+10, pointB.x+20, pointB.y+5);
                line(pointA.x-10, pointA.y+10, pointB.x+60, pointB.y);
            }
        }
    }
    
}