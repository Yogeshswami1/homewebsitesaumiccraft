import React from 'react';
import { Carousel, Row, Col, Card, Typography } from 'antd';
import './Review.css';
import one from '../../assets/review/1.webp';
import two from '../../assets/review/2.webp';
import three from '../../assets/review/3.webp';
import four from '../../assets/review/4.webp';
import five from '../../assets/review/5.webp';
import six from '../../assets/review/6.webp';
import seven from '../../assets/review/7.webp';
import eight from '../../assets/review/8.webp';
import nine from '../../assets/review/9.webp';
import ten from '../../assets/review/10.webp';

const { Title, Paragraph } = Typography;

const Reviews = () => {
  // Image paths
  const images = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
  ];

  // Google Drive embed URLs
  const googleDriveVideoUrls = [
    "https://drive.google.com/file/d/1SuX-ZeEckEDCbszfr6639Pp3Skh1hjbY/preview",  // Video 1
    "https://drive.google.com/file/d/1maYDHCd0K6_hBTcbvnBNRp8Zj_waG71q/preview",  // Video 2
    "https://drive.google.com/file/d/1RUCmY2k4IDnpNbGUlPjczzFcHEckJ0vf/preview",  // Video 3
    "https://drive.google.com/file/d/1a60RnZ1g5ZtxRA1z0MYjNhJVyb8eAGES/preview"   // Video 4
  ];

  return (
    <div className="reviews-container" id="review">
      <Title level={2} className="reviews-title">Customer Reviews</Title>
      <Paragraph className="reviews-description">
        Hear from our customers! Check out the screenshots and videos to see what they have to say about our services.
      </Paragraph>

      {/* Image Carousel */}
      <Carousel autoplay dots slidesToShow={10} infinite className="reviews-carousel">
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Screenshot ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Carousel>

      {/* Video Grid */}
      <Row gutter={[16, 16]} className="video-grid">
        {googleDriveVideoUrls.map((url, index) => (
          <Col xs={24} sm={24} md={12} lg={12} key={index}>
            <Card className="video-card">
              <div className="video-wrapper">
                <iframe
                  src={url}
                  width="100%"
                  height="315"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={`Google Drive Video ${index + 1}`}
                  className="video-element"
                />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Reviews;
