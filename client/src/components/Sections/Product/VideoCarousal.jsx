import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the Carousel component
const VideoCarousel = () => {
  // YouTube video URLs
  const videos = [
    "https://www.youtube.com/embed/O-12F9Bz-EY",
    "https://www.youtube.com/embed/lWKfxhDrk6M",
    "https://www.youtube.com/embed/ZmUHQUSemk0",
    "https://www.youtube.com/embed/TqlZPXqZRAE",
    "https://www.youtube.com/embed/qNOlBCp30bo",
    "https://www.youtube.com/embed/8EuZKLRfwqU",
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Heading>Exciting Categories</Heading>
      <Slider {...settings}>
        {videos.map((video, index) => (
          <VideoWrapper key={index}>
            <StyledIframe
              src={video}
              title={`YouTube video player ${index}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></StyledIframe>
          </VideoWrapper>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default VideoCarousel;

// Styled Components

const CarouselContainer = styled.div`
  margin: 0 auto;
  padding: 40px 20px;
  max-width: 1300px;
  background: #f4f4f4; /* Light neutral background */
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  overflow: hidden;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 600;
  color: #222;
  text-align: center;
  letter-spacing: 1px;
  font-family: 'Times New Roman', Times, serif; /* Updated to Times New Roman */
  border-bottom: 2px solid #ddd; /* Subtle underline effect */
  display: inline-block;
  padding-bottom: 8px;
`;

const VideoWrapper = styled.div`
  padding: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 315px;
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;
