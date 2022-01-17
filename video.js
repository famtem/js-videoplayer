const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')
const playButton = videoPlayer.querySelector('.play-button')
const stopButton = videoPlayer.querySelector('.stop-button')
const rewindButton = videoPlayer.querySelector('.rewind-button')
const fastButton = videoPlayer.querySelector('.fast-button')


//Play and Pause button
playButton.addEventListener('click', (e) => {
  if(video.paused){
    video.play()
    e.target.textContent = '❚ ❚'
  } else {
    video.pause()
    e.target.textContent = '►'
  }
})

//stop video
stopButton.addEventListener('click', () => {
  if(video.play){
    video.pause();
    video.currentTime = 0;
    video.play();
  } 
})

//rewind video by 5 sec
rewindButton.addEventListener('click', () => {
  if(video.play){
    video.currentTime =video.currentTime - 05;  
  }else{} 
})

//fastforward video by 5 secs
fastButton.addEventListener('click', () => {
  if(video.play){    
    video.currentTime =video.currentTime + 05;
  }else{} 
})
