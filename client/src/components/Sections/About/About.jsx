import React, {useEffect} from "react";
import styled from "styled-components";
import { Typography, Card } from "antd";
import Whatwedo from './Whatwedo';
import Mission from './Mission';
import Footer from '../Footer';
import Faq from './Faq';
import about from '../../../assets/about.webp';

const { Title, Paragraph } = Typography;

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0); // This scrolls to the top on page load
  }, []);
  return (
    <div style={{ paddingTop: '5rem' }}>
      <AboutUsWrapper>
        <SectionWrapper>
          {/* Top Section with About Us and Description */}
          <Title level={2} className="title">
            ABOUT US
          </Title>
          {/* Added shadow to the image */}
          <StyledImage src={about} alt="About us image" />

          {/* Card Section with "WHO WE ARE" and Video */}
          <FullWidthCard>
            <CardContent>
              <LeftSection>
                <Title level={3} className="card-title">
                  WHO WE ARE
                </Title>
                <Paragraph className="card-description">
                  At Saumic Craft, we believe in the beauty of handmade artistry. Our mission is to nurture and grow the talents of Rajasthani artists, providing them with the recognition and compensation they truly deserve. We take pride in supporting over 20,000 women artisans, helping them achieve financial independence and artistic fulfillment.
                </Paragraph>
              </LeftSection>

              {/* Video Section on the right */}
              <RightSection>
                <ResponsiveIframe
                  src="https://drive.google.com/file/d/1rjDQ-44icPZ4ST_GWdjLsCTaGI42rWHr/preview"
                  allow="autoplay"
                  title="Saumic Craft Video"
                />
              </RightSection>
            </CardContent>
          </FullWidthCard>
        </SectionWrapper>
      </AboutUsWrapper>
      <Whatwedo />
      <Mission />
      <Faq/>
      <Footer />
    </div>
  );
}

// Styles

const AboutUsWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
`;

const SectionWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const FullWidthCard = styled(Card)`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  display: flex;
  flex-direction: row;

  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding-right: 20px;

  .card-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .card-description {
    font-size: 16px;
    line-height: 1.6;
    text-align: left;
  }

  @media (max-width: 860px) {
    padding-right: 0;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 860px) {
    justify-content: center;
    margin-top: 20px;
  }
`;

// Styled iframe to make it rectangular and responsive
const ResponsiveIframe = styled.iframe`
  width: 100%;
  max-width: 500px; // Limit the max width
  height: 281px; // 16:9 aspect ratio for a more rectangular shape
  border-radius: 10px;
  border: 2px solid #ddd;

  @media (max-width: 860px) {
    width: 100%;
    max-width: 100%;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto 30px auto;
  border-radius: 10px;
  box-shadow: 0 30px 20px rgba(0, 0, 0, 0.2); /* Added shadow for a subtle 3D effect */
`;

const TitleSection = styled.div`
  .title {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  .description {
    font-size: 18px;
    line-height: 1.6;
    text-align: left;
    margin-bottom: 30px;
  }
`;
