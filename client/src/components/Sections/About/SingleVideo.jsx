// import React, { useRef, useState } from 'react';
// import styled from 'styled-components';
// import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

// const CustomVideoPlayer = ({ src }) => {
//   const videoRef = useRef(null); // Reference to the video element
//   const [isPlaying, setIsPlaying] = useState(false); // Track whether the video is playing
//   const [currentTime, setCurrentTime] = useState(0); // Track the current time of the video
//   const [volume, setVolume] = useState(1); // Track the volume level (1 is max, 0 is mute)
//   const [duration, setDuration] = useState(0); // Track the video duration

//   // Play/Pause the video
//   const togglePlayPause = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   // Handle video time update (update seek bar as video plays)
//   const handleTimeUpdate = () => {
//     if (videoRef.current) {
//       setCurrentTime(videoRef.current.currentTime);
//     }
//   };

//   // Handle seek bar change
//   const handleSeekChange = (event) => {
//     const newTime = event.target.value;
//     if (videoRef.current) {
//       videoRef.current.currentTime = newTime;
//       setCurrentTime(newTime);
//     }
//   };

//   // Handle volume change
//   const handleVolumeChange = (event) => {
//     const newVolume = event.target.value;
//     if (videoRef.current) {
//       videoRef.current.volume = newVolume;
//       setVolume(newVolume);
//     }
//   };

//   // Handle when the video is loaded and set duration
//   const handleLoadedMetadata = () => {
//     if (videoRef.current) {
//       setDuration(videoRef.current.duration);
//     }
//   };

//   return (
//     <VideoContainer style={{marginTop: '2rem'}}>
//       <VideoWrapper>
//         <video
//           ref={videoRef}
//           src="https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/about+page+videos/OUR+UNIT.webm"
//           onTimeUpdate={handleTimeUpdate}
//           onLoadedMetadata={handleLoadedMetadata}
//           width="100%"
//         />
//       </VideoWrapper>

//       <ControlsWrapper>
//         <ControlButton onClick={togglePlayPause}>
//           {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
//         </ControlButton>

//         <SeekBarWrapper>
//           <SeekBar
//             type="range"
//             min="0"
//             max={duration}
//             value={currentTime}
//             onChange={handleSeekChange}
//           />
//         </SeekBarWrapper>

//         <VolumeControl>
//           {volume > 0 ? <FaVolumeUp size={18} /> : <FaVolumeMute size={18} />}
//           <VolumeSlider
//             type="range"
//             min="0"
//             max="1"
//             step="0.01"
//             value={volume}
//             onChange={handleVolumeChange}
//           />
//         </VolumeControl>
//       </ControlsWrapper>
//     </VideoContainer>
//   );
// };

// export default CustomVideoPlayer;

// // Styled Components

// const VideoContainer = styled.div`
//   width: 100%;
//   max-width: 800px;
//   margin: 0 auto;
//   background: #000;
//   padding: 2px;
//   border-radius: 12px;
//   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
// `;

// const VideoWrapper = styled.div`
//   width: 100%;
//   video {
//     border-radius: 12px;
//   }
// `;

// const ControlsWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 10px;
//   padding: 15px;
//   background: #1c1c1c;
//   border-radius: 12px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
// `;

// const ControlButton = styled.button`
//   background-color: #333;
//   border: none;
//   color: white;
//   padding: 10px;
//   border-radius: 50%;
//   cursor: pointer;
//   transition: background 0.3s ease;

//   &:hover {
//     background-color: #555;
//   }

//   svg {
//     display: block;
//     margin: auto;
//   }
// `;

// const SeekBarWrapper = styled.div`
//   flex-grow: 1;
//   margin: 0 20px;
// `;

// const SeekBar = styled.input`
//   width: 100%;
//   -webkit-appearance: none;
//   background-color: #444;
//   height: 5px;
//   border-radius: 5px;
//   outline: none;
//   cursor: pointer;
//   transition: background 0.3s;

//   &::-webkit-slider-thumb {
//     -webkit-appearance: none;
//     width: 12px;
//     height: 12px;
//     border-radius: 50%;
//     background-color: #fff;
//     box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
//     cursor: pointer;
//     transition: background 0.3s ease;
//   }

//   &::-moz-range-thumb {
//     width: 12px;
//     height: 12px;
//     border-radius: 50%;
//     background-color: #fff;
//     cursor: pointer;
//   }
// `;

// const VolumeControl = styled.div`
//   display: flex;
//   align-items: center;
//   color: white;

//   svg {
//     margin-right: 10px;
//   }
// `;

// const VolumeSlider = styled.input`
//   width: 100px;
//   -webkit-appearance: none;
//   background-color: #444;
//   height: 5px;
//   border-radius: 5px;
//   outline: none;
//   cursor: pointer;

//   &::-webkit-slider-thumb {
//     -webkit-appearance: none;
//     width: 12px;
//     height: 12px;
//     border-radius: 50%;
//     background-color: #fff;
//     cursor: pointer;
//     transition: background 0.3s ease;
//   }
// `;



import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const VideoRow = () => {
  return (
    <Container>
      <Heading>HOW WE MANUFACTURE</Heading> {/* Add Heading Here */}
      <VideoRowContainer>
        <VideoWrapper>
          <CustomVideoPlayer src="https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/about+page+videos/Leather+Diary+Brown+Pages.webm" />
        </VideoWrapper>
        <VideoWrapper>
          <CustomVideoPlayer src="https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/about+page+videos/Leather-Diary-__.webm" />
        </VideoWrapper>
      </VideoRowContainer>
    </Container>
  );
};

export default VideoRow;

// Custom Video Player Component
const CustomVideoPlayer = ({ src }) => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false); // Track whether the video is playing
  const [currentTime, setCurrentTime] = useState(0); // Track the current time of the video
  const [volume, setVolume] = useState(1); // Track the volume level (1 is max, 0 is mute)
  const [duration, setDuration] = useState(0); // Track the video duration

  // Play/Pause the video
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle video time update (update seek bar as video plays)
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Handle seek bar change
  const handleSeekChange = (event) => {
    const newTime = event.target.value;
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Handle volume change
  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  // Handle when the video is loaded and set duration
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  return (
    <VideoContainer>
      <VideoWrapper>
        <video
          ref={videoRef}
          src={src}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          width="100%"
          onClick={togglePlayPause} // Play/pause when clicking on the video
        />
      </VideoWrapper>

      <ControlsWrapper>
        <ControlButton onClick={togglePlayPause}>
          {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
        </ControlButton>

        <SeekBarWrapper>
          <SeekBar
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeekChange}
          />
        </SeekBarWrapper>

        <VolumeControl>
          {volume > 0 ? <FaVolumeUp size={18} /> : <FaVolumeMute size={18} />}
          <VolumeSlider
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </VolumeControl>
      </ControlsWrapper>
    </VideoContainer>
  );
};

// Styled Components

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
  font-family: "Times New Roman", Times, serif; /* Set font to Times New Roman */
  font-weight: bold; /* Increase font weight */
`;


const VideoRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column; /* Stack videos on smaller screens */
  }
`;

const VideoWrapper = styled.div`
  flex: 1; // Make both video players take up equal width
  min-width: 45%; // Ensure videos are not too small on larger screens

  @media (max-width: 768px) {
    min-width: 100%; // Full width for mobile devices
  }
`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #1c1c1c;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  opacity: 0; /* Initially hidden */
  visibility: hidden; /* Initially hidden */
  transition: opacity 0.3s ease, visibility 0.3s ease;
  position: absolute; /* Position over the video */
  bottom: 10px; /* Adjust based on design */
  left: 10px;
  right: 10px;
`;

const VideoContainer = styled.div`
  width: 100%;
  background: #000;
  padding: 2px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  position: relative; /* Set position relative to position the controls */

  &:hover ${ControlsWrapper} {
    opacity: 1;
    visibility: visible;
  }

  @media (min-width: 1024px) {
    max-width: 1200px; /* Increase width for desktop */
  }
`;

const ControlButton = styled.button`
  background-color: #333;
  border: none;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #555;
  }

  svg {
    display: block;
    margin: auto;
  }
`;

const SeekBarWrapper = styled.div`
  flex-grow: 1;
  margin: 0 20px;
`;

const SeekBar = styled.input`
  width: 100%;
  -webkit-appearance: none;
  background-color: #444;
  height: 5px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: background 0.3s ease;
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
  }
`;

const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  color: white;

  svg {
    margin-right: 10px;
  }
`;

const VolumeSlider = styled.input`
  width: 100px;
  -webkit-appearance: none;
  background-color: #444;
  height: 5px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    transition: background 0.3s ease;
  }
`;
