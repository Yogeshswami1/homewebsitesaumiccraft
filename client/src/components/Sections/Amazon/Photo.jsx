import React from 'react';
import Slider from 'react-slick'; // Importing react-slick for the carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import aa from '../../../assets/amazon/aa.webp';
import bb from '../../../assets/amazon/bb.webp';
import cc from '../../../assets/amazon/cc.webp';
import dd from '../../../assets/amazon/dd.webp';
import ee from '../../../assets/amazon/ee.webp';
import ff from '../../../assets/amazon/ff.webp';
import gg from '../../../assets/amazon/gg.webp';
import hh from '../../../assets/amazon/hh.webp';

// Example image URLs (replace these with your 8 image URLs)
const imageUrls = [
  aa,
  bb,
  cc,
  dd,
  ee,
  ff,
  gg,
  hh,
];

const Carousel = () => {
  // Carousel settings with responsive breakpoints
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // For tablets and larger
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Disable arrows on smaller screens for better UX
        },
      },
    ],
  };

  return (
    <div
      className="w-full flex flex-col justify-center items-center"
      style={{
        background: 'linear-gradient(135deg, #f0f4f8, #d9e6f1)',
        paddingTop: '2.5rem',
        paddingBottom: '2rem',
      }}
      name="photo"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Products and Margins</h2>
      
      {/* Carousel */}
      <div className="w-full max-w-5xl">
        <Slider {...settings}>
          {imageUrls.map((url, index) => (
            <div key={index} className="px-4">
              <img
                src={url}
                alt={`Product ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
