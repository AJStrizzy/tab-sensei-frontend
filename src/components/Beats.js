import React from 'react';
import ReactPlayer from "react-player";
 
function Player() {
  return (
    <div>
      <h4>Beat 1</h4>
      <ReactPlayer
        url="https://www.mboxdrive.com/52%20Drum%20Loop%20003%20copy.mp3"
        width="400px"
        height="50px"
        playing={false}
        controls={true}
      />
      <h4>Beat 2</h4>
      <ReactPlayer
        url="https://www.mboxdrive.com/52%20Drum%20Loop%20003%20copy.mp3"
        width="400px"
        height="50px"
        playing={false}
        controls={true}
      />
      <h4>Beat 3</h4>
      <ReactPlayer
        url="https://www.mboxdrive.com/52%20Drum%20Loop%20003%20copy.mp3"
        width="400px"
        height="50px"
        playing={false}
        controls={true}
      />
      <h4>Beat 4</h4>
      <ReactPlayer
        url="https://www.mboxdrive.com/52%20Drum%20Loop%20003%20copy.mp3"
        width="400px"
        height="50px"
        playing={false}
        controls={true}
      />
    </div>
  );
}
 
export default Player