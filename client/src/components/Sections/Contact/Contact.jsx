import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Card, Input, Button } from "antd";

import first from "../../../assets/img/first.jpg";
import Second from "../../../assets/img/Second.png";
import Third from "../../../assets/img/Third.jpg";

import Footer from "../Footer";
import Whatsapp from "../../Whatsapp";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0); // This scrolls to the top on page load
  }, []);

  return (
    <>
      <CardWrapper>
        <StyledCard bordered={false}>
          <ContentWrapper>
            {/* Left side with contact info */}
            <ContactInfoWrapper>
              <ContactInfo>
                <h3>Contact Information</h3>
                <p><strong>Phone:</strong> +91-94296 91254</p>
                <p><strong>Address:</strong> International Airport, E-18, near Jaipur, Shankar Colony, Sawai Gaitor, Jagatpura, Jaipur, Rajasthan 302017</p>
                
                {/* Google Maps Iframe */}
               

                {/* <ImageWrapper>
                  <ContactImgBox isVisible={isVisible}>
                    <img src={first} alt="office" />
                  </ContactImgBox>
                  <ContactImgBox isVisible={isVisible}>
                    <img src={Second} alt="office" />
                  </ContactImgBox>
                  <ContactImgBox isVisible={isVisible}>
                    <img src={Third} alt="office" />
                  </ContactImgBox>
                </ImageWrapper> */}
              </ContactInfo>
              <MapWrapper>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.2958605075146!2d75.81072057543663!3d26.83054057669622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7efab655f8d%3A0x102c380486ca3ac9!2sCrown%20Mart!5e0!3m2!1sen!2sin!4v1727349091868!5m2!1sen!2sin"
                    width="100%"
                    height="299"
                    allowFullScreen=""
                    title="Google Maps Location"
                    style={{ border: 0, borderRadius: '10px' }}
                  ></iframe>
                </MapWrapper>
            </ContactInfoWrapper>

            {/* Divider line */}
            <Divider />

            {/* Right side with form inputs */}
            <FormWrapper>
              <Form>
                <FieldGroup>
                  <div>
                    <label className="font13">First Name:</label>
                    <StyledInput placeholder="Enter first name" required />
                  </div>
                  <div>
                    <label className="font13">Last Name:</label>
                    <StyledInput placeholder="Enter last name" required />
                  </div>
                </FieldGroup>
                <label className="font13">Phone Number:</label>
                <StyledInput placeholder="Enter phone number" required />
                <label className="font13">Email:</label>
                <StyledInput placeholder="Enter email" required type="email" />
                <label className="font13">Message:</label>
                <StyledTextArea rows={4} placeholder="Enter your message" />
                <SubmitWrapper className="flex">
                  <StyledButton type="primary" className="pointer animate radius8">
                    Send Message
                  </StyledButton>
                </SubmitWrapper>
              </Form>
            </FormWrapper>
          </ContentWrapper>
        </StyledCard>
      </CardWrapper>
      <Footer />
      <Whatsapp />
    </>
  );
}

// Styling
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CardWrapper = styled.div`
  padding: 50px;
  padding-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f7f9;
`;

// Updated Styling for the Card with 3D Shadow Effect
const StyledCard = styled(Card)`
  border-radius: 16px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5); // Darker and more prominent shadow
  background-color: #ffffff;
  padding: 30px;
  max-width: 1200px;
  width: 100%;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: none; // No hover transformation, just shadow effect
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  gap: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactInfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 2rem;
    color: #222;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    color: #444;
    margin-bottom: 15px;
  }

  strong {
    color: #222;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const ContactImgBox = styled.div`
  max-width: 130px;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  animation: ${(props) => (props.isVisible ? fadeIn : 'none')} 1s ease-in;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const MapWrapper = styled.div`
  margin: 20px 0;
  border-radius: 10px;
  overflow: hidden;
`;

const Divider = styled.div`
  width: 2px;
  background-color: #ccc;
  height: auto;
  margin: 0 30px;

  @media (max-width: 992px) {
    width: 100%;
    height: 2px;
    margin: 30px 0;
  }
`;

const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FieldGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  div {
    flex: 1;
  }
`;

const StyledInput = styled(Input)`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: all 0.3s;

  &:focus {
    border-color: #1890ff;
    box-shadow: 0 0 6px rgba(64, 169, 255, 0.5);
  }

  &:hover {
    border-color: #1890ff;
  }
`;

const StyledTextArea = styled(Input.TextArea)`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: all 0.3s;

  &:focus {
    border-color: #1890ff;
    box-shadow: 0 0 6px rgba(64, 169, 255, 0.5);
  }

  &:hover {
    border-color: #1890ff;
  }
`;

const StyledButton = styled(Button)`
  background-color: #1890ff;
  border-color: #1890ff;
  color: #fff;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  width: 100%;
  margin-top: 10px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #40a9ff;
    border-color: #40a9ff;
    transform: translateY(-3px);
  }
`;

const SubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;
