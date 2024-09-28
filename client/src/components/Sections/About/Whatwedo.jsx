// import React from "react";
// import styled from "styled-components";
// import { Typography } from "antd";

// const { Title, Paragraph } = Typography;

// export default function WhatWeDo() {
//   return (
//     <WhatWeDoWrapper>
//       {/* Section for Subheading and Description */}
//       <SectionHeading>
//         <Title level={3}>What We Do</Title>
//         <Paragraph>
//           Our offerings are not just limited to manufacturing. We also provide comprehensive dropshipping services and assist entrepreneurs in launching their own zero-investment businesses across various e-commerce platforms, including Amazon, Meesho, eBay, GlowRoad, and Flipkart.
//         </Paragraph>
//         <Title level={4}>We assist our clients with:</Title>
//       </SectionHeading>

//       {/* Video Grid */}
//       <VideoGrid>
//         <VideoCard>
//           <iframe
//             src="https://drive.google.com/file/d/your-google-drive-video-id/preview"
//             width="100%"
//             height="200"
//             allow="autoplay"
//             title="Account opening & Listings"
//           ></iframe>
//           <VideoTitle>Account opening & Listings</VideoTitle>
//           <VideoDescription>
//             Get started on your preferred e-commerce platform with ease. Professional product listings to attract and engage customers.
//           </VideoDescription>
//         </VideoCard>

//         <VideoCard>
//           <iframe
//             src="https://drive.google.com/file/d/your-google-drive-video-id/preview"
//             width="100%"
//             height="200"
//             allow="autoplay"
//             title="Order Processing"
//           ></iframe>
//           <VideoTitle>Order Processing</VideoTitle>
//           <VideoDescription>
//             Efficient management of customer orders to ensure timely delivery.
//           </VideoDescription>
//         </VideoCard>

//         <VideoCard>
//           <iframe
//             src="https://drive.google.com/file/d/your-google-drive-video-id/preview"
//             width="100%"
//             height="200"
//             allow="autoplay"
//             title="Order Dispatching"
//           ></iframe>
//           <VideoTitle>Order Dispatching</VideoTitle>
//           <VideoDescription>
//             Reliable shipping and handling to maintain product integrity.
//           </VideoDescription>
//         </VideoCard>

//         <VideoCard>
//           <iframe
//             src="https://drive.google.com/file/d/your-google-drive-video-id/preview"
//             width="100%"
//             height="200"
//             allow="autoplay"
//             title="Product packaging"
//           ></iframe>
//           <VideoTitle>Product packaging</VideoTitle>
//           <VideoDescription>
//             High-quality packaging that reflects the craftsmanship of our products.
//           </VideoDescription>
//         </VideoCard>
//       </VideoGrid>
//     </WhatWeDoWrapper>
//   );
// }

// // Styled Components
// const WhatWeDoWrapper = styled.div`
//   padding: 50px;
//   background-color: #f9f9f9;
//   text-align: center;
// `;

// const SectionHeading = styled.div`
//   margin-bottom: 40px;

//   h3 {
//     font-size: 28px;
//     font-weight: bold;
//   }

//   p {
//     font-size: 18px;
//     color: #555;
//     max-width: 900px;
//     margin: 0 auto 20px auto;
//   }

//   h4 {
//     font-size: 22px;
//     margin-top: 20px;
//   }
// `;

// const VideoGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 20px;

//   @media (max-width: 1024px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const VideoCard = styled.div`
//   text-align: center;
// `;

// const VideoTitle = styled.h5`
//   font-size: 16px;
//   font-weight: bold;
//   margin-top: 10px;
// `;

// const VideoDescription = styled.p`
//   font-size: 14px;
//   color: #777;
//   margin-top: 5px;
// `;


import React from "react";
import styled from "styled-components";
import { Typography } from "antd";
import start from "../../../assets/video/start.webm";
import processing from "../../../assets/video/processing.webm";
import dispatching from "../../../assets/video/dispatching.webm";
import packaging from "../../../assets/video/packaging.webm";
import SingleVideo from '../About/SingleVideo';
import SecondVideo from '../About/SecondVideo';


const { Title, Paragraph } = Typography;

export default function WhatWeDo() {
  return (
    <>
    <WhatWeDoWrapper>
      {/* Section for Subheading and Description */}
      <SectionHeading>
        <Title level={3}>What We Do</Title>
        <Paragraph>
          Our offerings are not just limited to manufacturing. We also provide comprehensive dropshipping services and assist entrepreneurs in launching their own zero-investment businesses across various e-commerce platforms, including Amazon, Meesho, eBay, GlowRoad, and Flipkart.
        </Paragraph>
        <Title level={4}>We assist our clients with:</Title>
      </SectionHeading>

      {/* Video Grid */}
      <VideoGrid>
        <VideoCard>
          <video
            src={start} 
            width="100%"
            height="200"
            autoPlay
            muted
            loop
            playsInline
            title="Account opening & Listings"
          ></video>
          <VideoTitle>Account opening & Listings</VideoTitle>
          <VideoDescription>
            Get started on your preferred e-commerce platform with ease. Professional product listings to attract and engage customers.
          </VideoDescription>
        </VideoCard>

        <VideoCard>
          <video
            src={processing} 
            width="100%"
            height="200"
            autoPlay
            muted
            loop
            playsInline
            title="Order Processing"
          ></video>
          <VideoTitle>Order Processing</VideoTitle>
          <VideoDescription>
            Efficient management of customer orders to ensure timely delivery.
          </VideoDescription>
        </VideoCard>

        <VideoCard>
          <video
            src={dispatching}
            width="100%"
            height="200"
            autoPlay
            muted
            loop
            playsInline
            title="Order Dispatching"
          ></video>
          <VideoTitle>Order Dispatching</VideoTitle>
          <VideoDescription>
            Reliable shipping and handling to maintain product integrity.
          </VideoDescription>
        </VideoCard>

        <VideoCard>
          <video
            src={packaging}
            width="100%"
            height="200"
            autoPlay
            muted
            loop
            playsInline
            title="Product packaging"
          ></video>
          <VideoTitle>Product packaging</VideoTitle>
          <VideoDescription>
            High-quality packaging that reflects the craftsmanship of our products.
          </VideoDescription>
        </VideoCard>
      </VideoGrid>
      <SingleVideo/>
      <SecondVideo/>

    </WhatWeDoWrapper>
     
      </>
  );
}

// Styled Components
const WhatWeDoWrapper = styled.div`
  padding: 50px;
  background-color: #f9f9f9;
  text-align: center;
`;

const SectionHeading = styled.div`
  margin-bottom: 40px;

  h3 {
    font-size: 28px;
    font-weight: bold;
  }

  p {
    font-size: 18px;
    color: #555;
    max-width: 900px;
    margin: 0 auto 20px auto;
  }

  h4 {
    font-size: 22px;
    margin-top: 20px;
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled.div`
  text-align: center;
`;

const VideoTitle = styled.h5`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

const VideoDescription = styled.p`
  font-size: 14px;
  color: #777;
  margin-top: 5px;
`;
