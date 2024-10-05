import React, { useState } from 'react';

export const AudioPlayer = () => {
  
  const [play, setPlay] = useState(false);
  return <div>
    <button
      onClick={() => {
        const audio = document.getElementById("audio_tag");
        play ? setPlay(false) : setPlay(true);
        play ? audio.pause() : audio.play();
      }}
    >{!play?'Enable':'Disable'} music</button>
    <audio id="audio_tag" loop autoPlay>
      <source src="./sardukar.mp3" type="audio/mpeg" />
    </audio>
  </div>
}