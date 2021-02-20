class particle{

  constructor(x,y,radius){
    var options = {
        isStatic:false
    }
    this.radius = radius;
    this.body = Bodies.circle(x,y,this.radius,options)
    this.color = color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body)  
}
 display(){
    var pos = this.body.position
    fill(this.color);
    ellipse(pos.x,pos.y,this.radius,this.radius);
    ellipseMode(CENTER);
 }
}