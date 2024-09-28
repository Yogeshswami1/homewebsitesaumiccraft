import React from "react";
import styled from "styled-components";

export default function AboutUs() {
  return (
    <Wrapper id="about-us">
      <div className="container">
        <HeaderInfo>
          <h1>Welcome to Saumic Craft Manufacturing Unit</h1>
        </HeaderInfo>
        <ContentWrapper>
          <InfoSection>
            <h6>Connecting Artists & Sellers</h6>
            <TextBox>
              <p className="font16">
                Saumic Craft is a handicraft manufacturing company based in Jaipur, Rajasthan, where we manufacture wooden products, resin products, marble products, digital wall painting, handmade wall painting, and many more. Currently, we have more than <b>85,000+ SKU's</b> of different categories and varieties, and our marketing and research team adds 300-500 trending products every month according to market demand. Our aim is to collab with every artist of Rajasthan, so that they can get the amount they deserve for their artistry. Not only Rajasthani designs but we believe every art of India is unique in its own way, so we connect the sellers to the artists so that they both can get the payout they deserve.
              </p>
            </TextBox>
          </InfoSection>
          <VideoBox>
            <iframe
              src="https://drive.google.com/file/d/1rjDQ-44icPZ4ST_GWdjLsCTaGI42rWHr/preview"
              width="100%"
              height="100%"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Manufacturing Video"
            />
          </VideoBox>
        </ContentWrapper>

        {/* New section for three landscape videos */}
        <VideoRowWrapper>
          <LandscapeVideoBox>
            <iframe
              src="https://drive.google.com/file/d/1jEpyal0ePUlfJXY_9Ddtj1Faf7WGVgM3/preview"
              width="100%"
              height="100%"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Landscape Video 1"
            />
          </LandscapeVideoBox>

          <LandscapeVideoBox>
            <iframe
              src="https://drive.google.com/file/d/1T8FRgx2MOvyYHw1T1qXVpCBVYrwc9HyH/preview"
              width="100%"
              height="100%"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Landscape Video 2"
            />
          </LandscapeVideoBox>

          <LandscapeVideoBox>
            <iframe
              src="https://drive.google.com/file/d/1pRhuMXYXz8NX4kHUT80u_e5ph3NtDKj0/preview"
              width="100%"
              height="100%"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Landscape Video 3"
            />
          </LandscapeVideoBox>
        </VideoRowWrapper>
      </div>
    </Wrapper>
  );
}

// Updated styles with attractive enhancements

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 20px;
  background: linear-gradient(135deg, #f0f4f8, #d9e8f5); /* Light blue gradient */
  border-radius: 12px;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1); /* Softer shadow for depth */
`;

const HeaderInfo = styled.div`
  margin-bottom: 50px;
  text-align: center;

  h1 {
    font-size: 44px;
    font-weight: 800;
    color: #2c3e50; /* Darker, bold color for the title */
    margin-bottom: 12px;
    line-height: 1.3;
    text-transform: uppercase; /* Add uppercase for a stronger statement */
    letter-spacing: 1.5px;
  }

  @media (max-width: 860px) {
    h1 {
      font-size: 36px;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const InfoSection = styled.div`
  width: 50%;

  h6 {
    font-size: 26px;
    color: #2980b9; /* Light blue accent for subheading */
    margin-bottom: 20px;
    font-weight: 600;
  }

  @media (max-width: 860px) {
    width: 100%;
    margin-bottom: 30px;

    h6 {
      text-align: center;
    }
  }
`;

const TextBox = styled.div`
  p {
    font-size: 18px;
    line-height: 1.7;
    color: #34495e; /* Darker gray for professional readability */
    margin-bottom: 20px;
  }

  b {
    color: #2980b9; /* Accent color for highlights */
  }

  @media (max-width: 860px) {
    p {
      text-align: center;
      font-size: 16px;
    }
  }
`;

const VideoBox = styled.div`
  width: 48%;
  position: relative;
  padding-top: 28%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease; /* Smooth hover effect */

  &:hover {
    transform: scale(1.05); /* Slight zoom effect on hover */
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
  }

  @media (max-width: 1200px) {
    width: 100%;
    padding-top: 40%;
  }

  @media (max-width: 860px) {
    width: 100%;
    padding-top: 56.25%;
  }
`;

// Updated styles for the video row
const VideoRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const LandscapeVideoBox = styled.div`
  width: 32%;
  position: relative;
  padding-top: 18%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease; /* Smooth hover effect */

  &:hover {
    transform: scale(1.05); /* Slight zoom effect on hover */
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
  }

  @media (max-width: 860px) {
    width: 100%;
    padding-top: 56.25%;
    margin-bottom: 20px;
  }
`;
