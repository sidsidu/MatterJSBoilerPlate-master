class Bob{
	constructor(x,y,r)
	{
	var options = {
        isStatic:false,
		restitution:1,
		friction:0,
		density:0.8
	}
		this.x=x;
		this.y=y;
		this.r=r
        

		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill(255,0,255);
            ellipse(0,0,this.r,this.r);

			pop()
	}

}