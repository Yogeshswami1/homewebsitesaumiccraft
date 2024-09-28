
import React, { useState } from 'react';
import { Card, Button } from 'antd';
import './VideoGallery.css';

const VideoGallery = () => {
  const [isHovered, setIsHovered] = useState(false);

  const linkStyle = {
    color: isHovered ? 'blue' : '#004EFF',
    textDecoration: isHovered ? 'underline' : 'none',
    transition: 'color 0.3s ease, text-decoration 0.3s ease',
    display: 'inline', // Ensures the hover effect is only on the text
  };

  const videos = [
    {
      videoUrl: "https://www.youtube.com/embed/YqAKYSCgq3w",
      title: "Start Your Online Business Without Huge Investment",
      description: "Learn how to start your own online business with a website without significant investment. Discover Somic Craft, a leading manufacturer of unique handicrafts, and explore how you can sell over 85,000 products internationally without purchasing inventory. Watch till the end for essential information on website creation, product listing, and order dispatching!",
    },
    {
      videoUrl: "https://www.youtube.com/embed/8hj5OU53sH0",
      title: "Sell Products on Your Website Without Inventory",
      description: "In this video, discover how to sell products on your own website without purchasing inventory through our dropshipping service. Learn how orders are dispatched directly from our warehouse to your customers and get answers to common questions about payment terms, profit margins, and website management. Don’t miss the next part for important and beneficial insights!",
    },
    {
      videoUrl: "https://www.youtube.com/embed/63-AhNWnCbg",
      title: "Comprehensive Website Creation for Your Online Business",
      description: "In this video, learn about the complete website package our company offers, including domain registration, hosting, and product listings. Get insights on SEO, Google Analytics integration, and social media connectivity to enhance your online presence. Plus, enjoy a free 8-hour course and dedicated support to help you succeed. Don’t miss the next part for more benefits!",
    },
    {
      videoUrl: "https://www.youtube.com/embed/yPY03OG9-yo",
      title: "Key Benefits of Our Dropshipping Website Model",
      description: "Discover the major advantages of our dropshipping model, including high profit margins and zero upfront investment. Learn how to sell products without purchasing inventory, avoid dead stock, and eliminate photography expenses. Plus, benefit from dedicated support and the flexibility to sell your own products alongside ours. Watch the next part to find out how to enroll!",
    },
    {
      videoUrl: "https://www.youtube.com/embed/GJR1Z9R6Pwg",
      title: "Unlock Your Online Business with Our Affordable Dropshipping Model",
      description: "Join our dropshipping model and start your online business without the hassle of inventory, manpower, or shipping concerns. Get a comprehensive package worth ₹75,000 for just ₹25,000 plus GST, including a domain, hosting, product listings, and more. Click the link below to sell products nationally and internationally while earning high margins!",
    },
  ];

  return (
    <>
    <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center" style={{ paddingTop: '5rem' }}>Website Dropshipping Model</h2>
    <Card bordered={true} className="video-gallery-card" name="ourprocedure">
      
      <div className="video-gallery">
        {videos.map((video, index) => (
          <div key={index} className="video-info-container">
            <div className="video-column">
              <iframe
                src={video.videoUrl}
                width="100%"
                height="300px"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Video ${index + 1}`}
                className="video-frame"
              ></iframe>
            </div>
            <div className="info-column">
              <h2 style={{fontSize: '22px', fontWeight: 'bold', color: '#333'}}>{video.title}</h2>
              
              {/* <h3 style={{fontSize: '18px', fontWeight: 'normal', color: '#666'}}>{video.subtitle}</h3> */}
              <p style={{fontSize: '16px'}}>{video.description}</p>
              &nbsp;
              <span
                style={linkStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <a
                  href="https://www.google.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'inherit' }} // Inherit color and decoration
                >
                  Get Started...
                </a>
              </span> 
            </div>
          </div>
        ))}
      </div>

      {/* Add the button at the bottom */}
      <div className="center-button-container">
      <Button
  style={{
    backgroundColor: '#ff7f00', // Orange color
    color: 'white', 
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
  }}
  size="large"
>
  Click Here To Start Your Online Business
</Button>
      </div>
    </Card>
    </>
  );
};

export default VideoGallery;

