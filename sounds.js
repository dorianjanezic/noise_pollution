
URL = window.URL || window.webkitURL;

//global variables
let playing;
var gumStream; 						//stream from getUserMedia()
var rec; 							//Recorder.js object
var input; 							//MediaStreamAudioSourceNode we'll be recording

// shim for AudioContext when it's not avb. 
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext //audio context to help us record




function startRecording() {
  console.log("recordButton clicked");
  
	/*
		Simple constraints object, for more advanced audio features see
		https://addpipe.com/blog/audio-constraints-getusermedia/
	*/
    
    var constraints = { audio: true, video:false }

 	/*
    	Disable the record button until we get a success or fail from getUserMedia() 
	*/

	recordButton.disabled = true;
	stopButton.disabled = false;
	pauseButton.disabled = false

	/*
    	We're using the standard promise based getUserMedia() 
    	https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
	*/

	navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
		console.log("getUserMedia() success, stream created, initializing Recorder.js ...");

		/*
			create an audio context after getUserMedia is called
			sampleRate might change after getUserMedia is called, like it does on macOS when recording through AirPods
			the sampleRate defaults to the one set in your OS for your playback device
		*/
		audioContext = new AudioContext();

		//update the format 
		document.getElementById("formats").innerHTML="Format: 1 channel pcm @ "+audioContext.sampleRate/1000+"kHz"

		/*  assign to gumStream for later use  */
		gumStream = stream;
		
		/* use the stream */
		input = audioContext.createMediaStreamSource(stream);

		/* 
			Create the Recorder object and configure to record mono sound (1 channel)
			Recording 2 channels  will double the file size
		*/
		rec = new Recorder(input,{numChannels:1})

		//start the recording process
		rec.record()

		console.log("Recording started");

	}).catch(function(err) {
	  	//enable the record button if getUserMedia() fails
    	recordButton.disabled = false;
    	stopButton.disabled = true;
    	pauseButton.disabled = true
	});
}

function pauseRecording(){
	console.log("pauseButton clicked rec.recording=",rec.recording );
	if (rec.recording){
		//pause
		rec.stop();
		pauseButton.innerHTML="Resume";
	}else{
		//resume
		rec.record()
		pauseButton.innerHTML="Pause";

	}
}

function stopRecording() {
	console.log("stopButton clicked");

	//disable the stop button, enable the record too allow for new recordings
	stopButton.disabled = true;
	recordButton.disabled = false;
	pauseButton.disabled = true;

	//reset button just in case the recording is stopped while paused
	pauseButton.innerHTML="Pause";
	
	//tell the recorder to stop the recording
	rec.stop();

	//stop microphone access
	gumStream.getAudioTracks()[0].stop();

	//create the wav blob and pass it on to createDownloadLink
	rec.exportWAV(createDownloadLink);
}

function createDownloadLink(blob) {
	
	var url = URL.createObjectURL(blob);
	var au = document.createElement('audio');
	var li = document.createElement('li');
	var link = document.createElement('a');

	//name of .wav file to use during upload and download (without extendion)
	var filename = new Date().toISOString();

	//add controls to the <audio> element
	au.controls = true;
	au.src = url;

	//save to disk link
	link.href = url;
	link.download = filename+".wav"; //download forces the browser to donwload the file using the  filename
	link.innerHTML = "Save to disk";

	//add the new audio element to li
	li.appendChild(au);
	
	//add the filename to the li
	li.appendChild(document.createTextNode(filename+".wav "))

	//add the save to disk link to li
	li.appendChild(link);
	
	//upload link
	var upload = document.createElement('a');
	upload.href="#";
	upload.innerHTML = "Upload";
	upload.addEventListener("click", function(event){
		  var xhr=new XMLHttpRequest();
		  xhr.onload=function(e) {
		      if(this.readyState === 4) {
		          console.log("Server returned: ",e.target.responseText);
		      }
		  };
		  var fd=new FormData();
		  fd.append("audio_data",blob, filename);
		  xhr.open("POST","upload.php",true);
		  xhr.send(fd);
	})
	li.appendChild(document.createTextNode (" "))//add a space in between
	li.appendChild(upload)//add the upload link to li

	//add the li element to the ol
	recordingsList.appendChild(li);
}

//sound library
let audio1 = new Audio ("sounds/Gravitacijaedit.wav");
var audio2 = new Audio ("sounds/scratch.mp3");
var audio3 = new Audio ("sounds/snoring.mp3");
var audio4 = new Audio ("sounds/chewing.mp3");
var audio5 = new Audio ("sounds/car.mp3");
var audio6 = new Audio ("sounds/construction.mp3");
var audio7 = new Audio ("sounds/train.mp3");
var audio8 = new Audio ("sounds/sonar.mp3");
var audio9 = new Audio ("sounds/propeler.mp3");
var audio10 = new Audio ("sounds/explosion.mp3");
var audio11 = new Audio ("sounds/nails.mp3");
var audio12 = new Audio ("sounds/airplane.mp3");
var audio13 = new Audio ("sounds/airgun.mp3");

window.addEventListener("load", () => {

var recordButton = document.getElementById("recordButton");
var stopButton = document.getElementById("stopButton");
var pauseButton = document.getElementById("pauseButton");

//add events to those 2 buttons
recordButton.addEventListener("click", startRecording);
stopButton.addEventListener("click", stopRecording);
pauseButton.addEventListener("click", pauseRecording);



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


