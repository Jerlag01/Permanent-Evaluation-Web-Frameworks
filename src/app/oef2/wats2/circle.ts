export class Circle {
    radius: number=20;
    angle = Math.random()*Math.PI*2;
    public color;
  constructor(public centerX: number, public centerY:number,public speed:number, public number:number, kleur:string) {
    if(kleur==""){
      this.color = this.getRandomColor();
    }else{
      this.color="white";
      this.color = kleur;
    }
  }

  draw(context: CanvasRenderingContext2D) {
    
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(
      this.centerX,
      this.centerY,
      this.radius,
      0,
      2 * Math.PI
    );
    
    context.fill();
    context.stroke();
    context.restore();
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  Update(){
    var newX = this.centerX+this.speed*Math.cos(this.angle);
    var newY = this.centerY+this.speed*Math.sin(this.angle);
    if(newX>480){
        newX = 480;
        this.angle = Math.PI-this.angle;
    }
    if(newX<20){
        newX = 20;
        this.angle = Math.PI-this.angle;
    }
    if(newY>480){
        newY = 480;
        this.angle *= -1;
    }
    if(newY<20){
        newY = 20;
        this.angle *= -1;
    }
    this.centerX = newX;
    this.centerY = newY;
  }

}
