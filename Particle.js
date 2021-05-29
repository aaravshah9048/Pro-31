class Ball{
    constructor(x,y,width,height,angle)
    {
        
        var opt={
            density:1,
            friction:0.5
        }
        this.body=Bodies.circle(x,y,this.r,options);
        this.color=color(random(0,225),random(0,225),random(0,225));
        World .add(world,this.body);
    }   
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push ()
       // angleMode(DEGREES)
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        ellipse(0,0,this.width,this.height);
        pop ()
    }
   }