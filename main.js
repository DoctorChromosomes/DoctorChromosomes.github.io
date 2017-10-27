var earrape 

function earrape() {
    earrape = new Audio("High Frequency - Sound effect.mp3");
    earrape.play();
}

function stoper(){
    earrape.pause();
    earrape.currentTime = 0
}

 $("#easy").on("click", earrape);
 $("#stopper").on("click", stoper)