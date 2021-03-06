class Polygon{
    constructor(x,y){
        var options ={
            'density':0.5,
            'friction':0.5,
            'restitution':0.5

        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("polygon.png");
        World.add(world,this.body);

        
            
        

    }
    
    
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}