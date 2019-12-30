export class Circle {
    radius: number=20;
  constructor(public centerX: number, public centerY:number) {}

  draw(context: CanvasRenderingContext2D, percentage: number) {
    context.save();
    context.beginPath();
    context.arc(
      this.centerX,
      this.centerY,
      this.radius,
      0,
      percentage * 2 * Math.PI
    );
    if(percentage != 1){
        context.lineTo(this.centerX,this.centerY);
        context.lineTo(this.centerX+this.radius,this.centerY);
    }
    context.stroke();
    context.restore();
  }
}
