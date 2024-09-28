
import React, { useState } from 'react';
import { Card, Button } from 'antd';

const VideoGallery = () => {
  const [isHovered, setIsHovered] = useState(false);

  const linkStyle = {
    color: isHovered ? 'blue' : '#004EFF',
    textDecoration: isHovered ? 'underline' : 'none',
    transition: 'color 0.3s ease, text-decoration 0.3s ease',
    display: 'inline', // Ensures the hover effect is only on the text
  };


  return (
    <>
    <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center" style={{ paddingTop: '5rem' }}>Franchise Dropshipping Model</h2>
    <Card bordered={true} className="video-gallery-card" name="ourprocedure">
      
     

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

