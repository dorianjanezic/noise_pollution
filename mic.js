var mic;

function touchStarted() { getAudioContext().resume(); };
function setup() {
    createCanvas(windowWidth,200);
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(214,193,64);
    var vol = mic.getLevel();

    fill(72,8,155);
    noStroke()
    ellipse(windowWidth/2,100,windowWidth-250,vol*2000);
}