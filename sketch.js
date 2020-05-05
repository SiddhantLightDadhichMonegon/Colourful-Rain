
var rainDrop,rainDrops = [];

function setup(){
    var canvas = createCanvas(800,800);

    for(var i=0;i<200;i++){
        rainDrops[i] = new Drop();
    }

}

function draw(){
    background(255);
    
    for(var i=0;i<200;i++){
        rainDrops[i].display();
        rainDrops[i].fall();
    }





}