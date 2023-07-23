let progress= document.getElementById('progress');
let song= document.getElementById('song');
let ctrlIcon= document.getElementById('ctrlIcon');


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime
}
function PlayPause(){
    if(ctrlIcon.classList.contains("fa-play")){
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
      

    }
  
    else{
         
        song.pause();
        ctrlIcon.classList.add("fa-play");
        ctrlIcon.classList.remove("fa-pause");


    }

  
}
 if(song.play()){
         setInterval(()=>{
            progress.value = song.currentTime;
        } ,500)

     }

   