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

    fill(211,100,251);
    noStroke()
    ellipse(windowWidth/2-90,100,windowWidth-200,vol*2000);
}