
import React from 'react';
import { Card, Typography, Button } from 'antd';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const { Title, Paragraph } = Typography;

const CaseStudy = () => {
  const videoUrls = [
    "https://www.youtube.com/embed/GcQ1Kgaq-10",
    "https://www.youtube.com/embed/ls8bQ0qhpY4",
    "https://www.youtube.com/embed/SkRcIin7Dxg",
  ];

  return (
    <Card
      className="rounded-lg p-6 lg:p-10 bg-white shadow-lg border-none"
      bordered={false}
      style={{ borderRadius: '12px' }}
      name="case"
    >
      {/* Centered Title and Description */}
      <div className="flex flex-col justify-center items-center text-center">
        <Title level={1} className="text-orange-500 font-bold text-4xl lg:text-5xl">
          Case Studies
        </Title>
        <Paragraph className="text-gray-600 text-base lg:text-lg mt-4">
          We provide high-quality 4K photos and videos to attract potential buyers to your product.
        </Paragraph>
      </div>

      {/* Videos Section */}
      <div className="flex mt-8 gap-6">
        {/* Left Large Video */}
        <div className="w-2/3">
          <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={videoUrls[0]}
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading='lazy'
              title="Main Case Study Video"
            />
          </div>
        </div>

        {/* Right Small Videos */}
        <div className="w-1/3 flex flex-col gap-4">
          <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={videoUrls[1]}
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading='lazy'
              title="Case Study Video 1"
            />
          </div>

          <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={videoUrls[2]}
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading='lazy'
              title="Case Study Video 2"
            />
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-8 text-center">
        {/* <Button
          type="primary"
          size="large"
          className="bg-gray-200 text-black rounded-full px-6 py-2 font-semibold hover:bg-gray-300"
        >
          View more
        </Button> */}
      </div>
    </Card>
  );
};

export default CaseStudy;
