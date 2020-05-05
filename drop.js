class Drop{
    constructor(){

        this.x = floor(random(0,width));
        this.y = floor(random(-200,height));

        this.ySpeed = 50;
    }

    fall(){
        this.y = this.y + this.ySpeed;
        if(this.y>height){
            this.y = floor(random(0,height));
        }
    }

    display(){

        stroke(floor(random(0,255)),floor(random(0,255)),floor(random(0,255)))
        line(this.x,this.y,this.x,this.y+ floor(random(10,50)));
    }
}