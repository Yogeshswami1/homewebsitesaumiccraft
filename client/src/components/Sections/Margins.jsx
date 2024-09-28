import React from 'react';
import Slider from 'react-slick';
import 'tailwindcss/tailwind.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const VideoGallery = () => {
  const videos = [
    { videoSrc: "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/video/margin1.webm" },
    { videoSrc: "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/video/margin2.webm" },
    { videoSrc: "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/video/margin3.webm" },
    { videoSrc: "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/video/margin4.webm" },
    { videoSrc: "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/video/margin5.webm" },
    { videoSrc: "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/video/margin6.webm" },
  ];

  // Slick settings for carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Enables centering of slides
    centerPadding: '20px', // Adds padding to center the slides
    responsive: [
      {
        breakpoint: 1024, // Adjust carousel for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false, // Disable centering on smaller screens
        },
      },
      {
        breakpoint: 768, // Adjust carousel for mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, // Disable centering on mobile
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-12 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-100 mb-4">Margins</h2>
        <p className="text-lg text-gray-300">
          Every product is eye-catching and leaves a good impression on buyers, helping you earn huge margins.
        </p>
      </div>

      {/* Carousel for portrait videos */}
      <div className="max-w-6xl mx-auto"> {/* Center the carousel and limit its width */}
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className="px-4"> {/* Add horizontal padding for spacing */}
              <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg shadow-xl border border-gray-500 bg-gradient-to-br from-gray-800 to-gray-600">
                <video
                  src={video.videoSrc}
                  controls
                  className="w-full h-full object-cover" // Ensures full coverage while maintaining aspect ratio
                  title={`Video ${index + 1}`}
                ></video>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideoGallery;
