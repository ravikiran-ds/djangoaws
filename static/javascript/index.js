var audio = new Audio();
//console.log("hmm")
function record() {
        var recognition = new webkitSpeechRecognition();
        recognition.lang = "en-GB";
        recognition.onresult = function(event) {
             //console.log(event);
            //document.getElementById('speechToText').value = event.results[0][0].transcript;
            let playing=false
            function pl(){
            //let source="/static/media/"+event.results[0][0].transcript.toLowerCase()+"/"+String(Math.floor(Math.random() * 3) + 1)+".mp3"
            let source="https://ravish1.s3.ap-south-1.amazonaws.com/1.mp3"
            if(playing===true){
              audio.pause();
              audio.currentTime = 0;
          }
          else{
            audio.addEventListener("load", function() {
              audio.play();
            }, true);
            audio.src = source;
            audio.autoplay = true;
            playing=true
          }
        };
        pl()
        //console.log(playing)
      }
        recognition.start();
    }
