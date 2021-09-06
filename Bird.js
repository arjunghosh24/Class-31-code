class Bird extends BaseClass 
{
  constructor(x,y)
  {
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.traject = [];
  }

  display() 
  {
    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200)
    {
      var birdPos = [this.body.position.x, this.body.position.y];
      this.traject.push(birdPos);
    }

    for(var i = 0; i <this.traject.length; i++)
    {
      image(this.image1, this.traject[i][0], this.traject[i][1])
    }
    
  }
}
