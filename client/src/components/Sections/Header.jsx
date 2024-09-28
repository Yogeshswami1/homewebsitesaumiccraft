// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import SaumicVideo from "../../assets/video/Saumic-Craft.webm"; // Add your background video file here

// export default function Header() {
//   const [event, setEvent] = useState(null);
//   const [isCardVisible, setIsCardVisible] = useState(false); // State to track card visibility
//   const apiUrl = process.env.REACT_APP_BACKEND_URL; // Your backend URL

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const response = await axios.get(`${apiUrl}/events/`); // Adjust endpoint as necessary
//         const events = response.data;

//         if (events && events.length > 0) {
//           // Get the closest event to today
//           const today = new Date();
//           const closestEvent = events.reduce((prev, curr) => {
//             const prevDate = new Date(prev.date);
//             const currDate = new Date(curr.date);
//             return Math.abs(currDate - today) < Math.abs(prevDate - today) ? curr : prev;
//           });

//           setEvent(closestEvent);
//           setIsCardVisible(true); // Set card visibility to true when an event is found
//         }
//       } catch (error) {
//         console.error("Failed to fetch event data:", error);
//       }
//     };

//     fetchEvent();
//   }, []);

//   const renderEventDetails = () => {
//     if (!event) return null;

//     const dayOfWeek = new Date(event.date).toLocaleDateString('en-US', { weekday: 'long' });
//     const monthName = new Date(event.date).toLocaleDateString('en-US', { month: 'long' });
//     const day = new Date(event.date).getDate();

//     return (
//       <DetailsCard>
//         <CardTitle>Upcoming Events</CardTitle>
//         <h1>{event.title}</h1>
//         <h2>{event.subtitle}</h2>
//         <DateInfo>
//           <Label>Date:</Label>
//           <p>{dayOfWeek}, {`${monthName} ${day}`}</p>
//         </DateInfo>
//         <DateInfo>
//           <Label>Time:</Label>
//           <p>{event.time}</p>
//         </DateInfo>
//         <DateInfo>
//           <Label>Venue:</Label>
//           <p>{event.venue}</p>
//         </DateInfo>
       
//         <ButtonLink href={event.link} target="_blank" rel="noopener noreferrer">
//           Register Now
//         </ButtonLink>
//       </DetailsCard>
//     );
//   };

//   return (
//     <Wrapper id="home">
//       <VideoBackground isCardVisible={isCardVisible}>
//         <video autoPlay loop muted playsInline preload="auto">
//           <source src={SaumicVideo} type="video/webm" />
//         </video>
//       </VideoBackground>

//       {renderEventDetails()}
//     </Wrapper>
//   );
// }

// // Styled Components

// const Wrapper = styled.section`
//   position: relative;
//   width: 100%;
//   height: 100vh; /* Full viewport height */
//   overflow: hidden;
// `;

// const VideoBackground = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: -1;
//   video {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     filter: ${(props) => (props.isCardVisible ? 'brightness(50%)' : 'none')}; /* Lower brightness when card is visible */
//     transition: filter 0.5s ease-in-out; /* Smooth transition */
//   }
// `;

// const DetailsCard = styled.div`
//   position: absolute;
//   top: 20%; /* Adjust the vertical position */
//   right: 3%; /* Adjust the horizontal position to the right */
//   background: rgba(255, 255, 255, 0.6); /* Increased transparency */
//   padding: 10px;
//   border-radius: 10px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
//   color: #333; /* Dark text color */
//   max-width: 350px; /* Limit the width of the card */
//   display: flex;
//   flex-direction: column;
//   align-items: center; /* Center horizontally */
//   justify-content: center; /* Center vertically */
//   text-align: center; /* Center text */
//   backdrop-filter: blur(0px); /* Adds a blur effect behind the card */
//   opacity: 0.9; /* Additional control for transparency */
// `;

// const CardTitle = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
//   text-align: center;
//   background: linear-gradient(90deg, #ff8a00, #da1b60);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   margin-bottom: 20px;
// `;

// const DateInfo = styled.div`
//   font-size: 16px;
//   margin: 10px 0;
// `;

// const Label = styled.span`
//   font-weight: bold;
//   margin-right: 5px;
// `;

// const ButtonLink = styled.a`
//   display: inline-block;
//   margin-top: 20px;
//   padding: 12px 20px;
//   background: linear-gradient(90deg, #ff8a00, #da1b60); /* Gradient for the button */
//   color: white;
//   border-radius: 5px;
//   text-decoration: none;
//   text-align: center;
//   transition: background 0.3s ease-in-out;

//   &:hover {
//     background: linear-gradient(90deg, #da1b60, #ff8a00); /* Reverse gradient on hover */
//   }
// `;



import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Header() {
  const [event, setEvent] = useState(null);
  const [isCardVisible, setIsCardVisible] = useState(false); // State to track card visibility
  const apiUrl = process.env.REACT_APP_BACKEND_URL; // Your backend URL

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${apiUrl}/events/`); // Adjust endpoint as necessary
        const events = response.data;

        if (events && events.length > 0) {
          // Get the closest event to today
          const today = new Date();
          const closestEvent = events.reduce((prev, curr) => {
            const prevDate = new Date(prev.date);
            const currDate = new Date(curr.date);
            return Math.abs(currDate - today) < Math.abs(prevDate - today) ? curr : prev;
          });

          setEvent(closestEvent);
          setIsCardVisible(true); // Set card visibility to true when an event is found
        }
      } catch (error) {
        console.error("Failed to fetch event data:", error);
      }
    };

    fetchEvent();
  }, []);

  const renderEventDetails = () => {
    if (!event) return null;

    const dayOfWeek = new Date(event.date).toLocaleDateString('en-US', { weekday: 'long' });
    const monthName = new Date(event.date).toLocaleDateString('en-US', { month: 'long' });
    const day = new Date(event.date).getDate();

    return (
      <DetailsCard>
        <CardTitle>Upcoming Events</CardTitle>
        <h1>{event.title}</h1>
        <h2>{event.subtitle}</h2>
        <DateInfo>
          <Label>Date:</Label>
          <p>{dayOfWeek}, {`${monthName} ${day}`}</p>
        </DateInfo>
        <DateInfo>
          <Label>Time:</Label>
          <p>{event.time}</p>
        </DateInfo>
        <DateInfo>
          <Label>Venue:</Label>
          <p>{event.venue}</p>
        </DateInfo>
       
        <ButtonLink href={event.link} target="_blank" rel="noopener noreferrer">
          Register Now
        </ButtonLink>
      </DetailsCard>
    );
  };

  return (
    <Wrapper id="home">
      <VideoBackground isCardVisible={isCardVisible}>
        <video autoPlay loop muted playsInline preload="auto">
          <source src="https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/video/Saumic-Craft.webm" type="video/webm" />
        </video>
      </VideoBackground>

      <Heading style={{paddingTop: '5rem'}}>Welcome to Our Event Platform</Heading>
      {renderEventDetails()}
      <CenterButton>Learn More</CenterButton>
    </Wrapper>
  );
}

// Styled Components

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  overflow: hidden;
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: ${(props) => (props.isCardVisible ? 'brightness(50%)' : 'none')}; /* Lower brightness when card is visible */
    transition: filter 0.5s ease-in-out; /* Smooth transition */
  }
`;

const Heading = styled.h1`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  z-index: 2;
`;

const CenterButton = styled.button`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 20px;
  background: linear-gradient(90deg, #ff8a00, #da1b60); /* Gradient for the button */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  z-index: 2;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(90deg, #da1b60, #ff8a00); /* Reverse gradient on hover */
  }
`;

const DetailsCard = styled.div`
  position: absolute;
  top: 20%; /* Adjust the vertical position */
  right: 3%; /* Adjust the horizontal position to the right */
  background: rgba(255, 255, 255, 0.6); /* Increased transparency */
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  color: #333; /* Dark text color */
  max-width: 350px; /* Limit the width of the card */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  text-align: center; /* Center text */
  backdrop-filter: blur(0px); /* Adds a blur effect behind the card */
  opacity: 0.9; /* Additional control for transparency */
`;

const CardTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(90deg, #ff8a00, #da1b60);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
`;

const DateInfo = styled.div`
  font-size: 16px;
  margin: 10px 0;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const ButtonLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 12px 20px;
  background: linear-gradient(90deg, #ff8a00, #da1b60); /* Gradient for the button */
  color: white;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(90deg, #da1b60, #ff8a00); /* Reverse gradient on hover */
  }
`;
