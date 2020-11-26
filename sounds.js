
//global variables
let playing;

//sound library
let audio1 = new Audio ("sounds/Gravitacijaedit.wav");
let audio2 = new Audio ("sounds/scratch.mp3");
let audio3 = new Audio ("sounds/snoring.mp3");
let audio4 = new Audio ("sounds/chewing.mp3");
let audio5 = new Audio ("sounds/car.mp3");
let audio6 = new Audio ("sounds/construction.mp3");
let audio7 = new Audio ("sounds/train.mp3");
let audio8 = new Audio ("sounds/sonar.mp3");
let audio9 = new Audio ("sounds/propeler.mp3");
let audio10 = new Audio ("sounds/explosion.mp3");
let audio11 = new Audio ("sounds/nails.mp3");
let audio12 = new Audio ("sounds/airplane.mp3");
let audio13 = new Audio ("sounds/airgun.mp3");

window.addEventListener("load", () => {


    document.getElementById("annoyingbtn").addEventListener("click", () => {
        playing = !playing;

        if (playing) {
            audio1.play();
          } else {
            audio1.pause();
          }
    });

    document.getElementById("scratching").addEventListener("click", () => {
        playing = !playing;

        if (playing) {
            audio2.play();
            document.getElementById("scratching").style.color = "green";
          } else {
            audio2.pause();
            document.getElementById("scratching").style.color = "red";
          }
    });

    document.getElementById("snoring").addEventListener("click", () => {
        playing = !playing;

        if (playing) {
            audio3.play();
            document.getElementById("snoring").style.color = "green";
          } else {
            audio3.pause();
            document.getElementById("snoring").style.color = "red";
          }
    });

    document.getElementById("chewing").addEventListener("click", () => {
        playing = !playing;

        if (playing) {
            audio4.play();
            document.getElementById("chewing").style.color = "green";
          } else {
            audio4.pause();
            document.getElementById("chewing").style.color = "red";
          }
    });

    document.getElementById("car").addEventListener("click", () => {
        playing = !playing;

        if (playing) {
            audio5.play();
            document.getElementById("car").style.color = "green";
          } else {
            audio5.pause();
            document.getElementById("car").style.color = "red";
          }
    });

    document.getElementById("construction").addEventListener("click", () => {
        playing = !playing;

        if (playing) {
            audio6.play();
            document.getElementById("construction").style.color = "green";
          } else {
            audio6.pause();
            document.getElementById("construction").style.color = "red";
          }
    });

    document.getElementById("train").addEventListener("click", () => {
        playing = !playing;

        if (playing) {
            audio7.play();
            document.getElementById("train").style.color = "green";
          } else {
            audio7.pause();
            document.getElementById("train").style.color = "red";
          }
    });

    document.getElementById("sonar").addEventListener("click", () => {
        playing = !playing;

        if (playing) {
            audio8.play();
            document.getElementById("sonar").style.color = "green";
          } else {
            audio8.pause();
            document.getElementById("sonar").style.color = "red";
          }
    });

    document.getElementById("propeler").addEventListener("click", () => {
        playing = !playing;

        if (playing) {
            audio9.play();
            document.getElementById("propeler").style.color = "green";
          } else {
            audio9.pause();
            document.getElementById("propeler").style.color = "red";
          }
    });

    document.getElementById("explosive").addEventListener("click", () => {
        playing = !playing;

        if (playing) {
            audio10.play();
            document.getElementById("explosive").style.color = "green";
          } else {
            audio10.pause();
            document.getElementById("explosive").style.color = "red";
          }
    });

    document.getElementById("nails").addEventListener("click", () => {
        playing = !playing;

        if (playing) {
            audio11.play();
            document.getElementById("nails").style.color = "green";
          } else {
            audio11.pause();
            document.getElementById("nails").style.color = "red";
          }
    });

    document.getElementById("airplane").addEventListener("click", () => {
        playing = !playing;

        if (playing) {
            audio12.play();
            document.getElementById("airplane").style.color = "green";
          } else {
            audio12.pause();
            document.getElementById("airplane").style.color = "red";
          }
    });

document.getElementById("airgun").addEventListener("click", () => {
        playing = !playing;

        if (playing) {
            audio13.play();
            document.getElementById("airgun").style.color = "green";
          } else {
            audio13.pause();
            document.getElementById("airgun").style.color = "red";
          }
    });
});


