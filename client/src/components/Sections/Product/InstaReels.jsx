import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'; // Import createGlobalStyle
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define global styles
const GlobalStyles = createGlobalStyle`
  .slick-prev:before, .slick-next:before {
    font-size: 24px; // Increase arrow size
    color: #333; // Change arrow color
  }

  .slick-dots li button:before {
    font-size: 12px; // Increase dot size
    color: #aaa; // Change inactive dot color
  }

  .slick-dots li.slick-active button:before {
    color: #333; // Change active dot color
  }
`;

const PortraitVideoCarousel = () => {
  const videos = [
    'https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/product+category+in+navbar/Beautiful+Ram+Temples%2C+available+to+sell+online+without+purchasing+in+advance!+Want+to+learn+how+Follow+us+and+contact+us+on+our+displayed+number.+RamTemple+Dropshipping+Handicrafts+OnlineBusiness+F.webm',
    'https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/product+category+in+navbar/Metal+Tealight+Holder.....saumiccraft.webm',
    'https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/product+category+in+navbar/Product+Shoot+at+Saumic+Craft-+Start+your+online+business+HighMargins+Dropshipping+OnlineBusiness+Saumiccraft.webm',
    'https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/product+category+in+navbar/Ready+to+kickstart+your+online+business+Start+with+ZERO+investment%2C+NO+manpower%2C+NO+warehouse%2C+and+NO+inventory+required!+For+more+info%2C+contact+us+at+91+94296+91254+and+turn+your+business+dream.webm',
    'https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/product+category+in+navbar/Ready+to+start+your+online+business+with+ZERO+investment+Let+me+show+you+how!+We+offer+over+85%2C000+unique+products+you+can+sell+nationwide+and+internationally+without+purchasing+any+stock.+One+of+o.webm',
    'https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/product+category+in+navbar/Transform+your+space+with+the+divine+energy+of+Radha+Krishna+++Explore+our+collection+and+bring+serenity+into+your+home.webm',
    'https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/product+category+in+navbar/Unveiling+the+magic+behind+Hanuman+idols!+Curious+to+know+their+worth+Stay+tuned+for+the+next+video+where+we+reveal+the+enchanting+sell+prices!+......HanumanIdols+HiddenGems+StayTuned+HanumanIdols.webm',
    'https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/product+category+in+navbar/Wishing+everyone+a+very+happy+and+blessed+Ganesh+Chaturthi!+May+Lord+Ganesha+bring+happiness%2C+success%2C+and+prosperity+to+your+lives.+Lets+celebrate+with+love%2C+joy%2C+and+devotion.+GaneshChaturthi+Bl.webm',
  ];

  // Carousel settings
  const settings = {
    dots: true, // Show dots below the carousel
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 videos at a time
    slidesToScroll: 1, // Scroll one video at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed (in milliseconds)
    responsive: [
      {
        breakpoint: 1024, // Below 1024px
        settings: {
          slidesToShow: 2, // Show 2 videos
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Below 768px
        settings: {
          slidesToShow: 1, // Show 1 video
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <GlobalStyles /> {/* Apply global styles */}
      <CarouselContainer>
        <Slider {...settings}>
          {videos.map((video, index) => (
            <VideoWrapper key={index}>
              <StyledVideo src={video} controls />
            </VideoWrapper>
          ))}
        </Slider>
      </CarouselContainer>
    </>
  );
};

export default PortraitVideoCarousel;

// Styled Components
const CarouselContainer = styled.div`
  width: 80%;
  margin: 0 auto; // Center the carousel
  padding: 20px 0;
`;

const VideoWrapper = styled.div`
  padding: 0 10px; // Padding between videos
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  outline: none;
`;
