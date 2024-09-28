import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import port1 from '../../../assets/port1.webp';
import port2 from '../../../assets/port2.webp';
import port3 from '../../../assets/port3.webp';
import port4 from '../../../assets/port4.webp';
import port5 from '../../../assets/port5.webp';
import port6 from '../../../assets/port6.webp';
import port7 from '../../../assets/port7.webp';
import InstaReels from './InstaReels';


const images = [
  {
    id: 1,
    src: port1,
    alt: "Portrait 1",
  },
  {
    id: 2,
    src: port2,
    alt: "Portrait 2",
  },
  {
    id: 3,
    src: port3,
    alt: "Portrait 3",
  },
  {
    id: 4,
    src: port4,
    alt: "Portrait 4",
  },
  {
    id: 5,
    src: port5,
    alt: "Portrait 5",
  },
  {
    id: 6,
    src: port6,
    alt: "Portrait 6",
  },
  {
    id: 7,
    src: port7,
    alt: "Portrait 7",
  },
];

const PortraitCarousel = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {/* Centered Heading with Times New Roman and bold */}
      <h2 style={{ 
        fontSize: '36px', 
        marginBottom: '20px', 
        fontFamily: 'Times New Roman, serif', 
        fontWeight: 'bold' 
      }}>
        Direct From Warehouse
      </h2>

      {/* Carousel showing 3 items at a time */}
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        centerMode
        centerSlidePercentage={33.33}  // 33% width per item for 3 items per view
        showArrows={true}
        autoPlay
        interval={3000}
        transitionTime={500}
        stopOnHover
      >
        {images.map((image) => (
          <div key={image.id} style={{ padding: '10px' }}>
            <img 
              src={image.src} 
              alt={image.alt} 
              style={{ 
                height: '450px', 
                objectFit: 'cover', 
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
              }} 
            />
          </div>
        ))}
      </Carousel>
      <InstaReels/>
    </div>
  );
};

export default PortraitCarousel;
