// import React from "react";
// import { Button } from '@headlessui/react';
// import styled from "styled-components";
// import one from '../../assets/1.jpeg';
// import two from '../../assets/2.jpeg';
// import three from '../../assets/3.jpeg';

// import { Link } from "react-router-dom";

// export default function Services() {
//   return (
//     <div>
//     <Wrapper id="services">
//       <div className="whiteBg">
//         <div className="container">
//           <HeaderInfo>
//             <h1 style={{paddingTop:'3rem'}}>Our Services</h1>
//             <p>
//               We provide end-to-end management on these platforms to ensure you have everything you need to succeed.
//             </p>
//           </HeaderInfo>
//           <TablesWrapper>
//             <StyledCard>
//               <CardImage src={one} alt="Amazon Service" />
//               <CardTitle>AMAZON</CardTitle>
//               <Price>Leading Platform</Price>
//               <p>
//                 Sell exclusive products without pre-purchasing them, and enjoy no upfront investment with large profit margins.
//               </p>
//               <ul>
//                 <li>Exclusive Products</li>
//                 <li>Huge Margins</li>
//                 <li>Sell 85,000+ Products</li>
//                 <li>Sell Nationally & Internationally</li>
//                 <li>No Upfront Investment</li>
//                 <li>Support Managers</li>
//                 <li>No Inventory Needed</li>
//                 <li>Quick Dispatch from Our Warehouse</li>
//               </ul>
//               <CardButton>
//               <Link to="/amazon"><Button className="custom-button">Know More</Button></Link>
//               </CardButton>
//             </StyledCard>
//             <StyledCard>
//               <CardImage src={two} alt="Website Service" />
//               <CardTitle>WEBSITE</CardTitle>
//               <Price>Leading Platform</Price>
//               <p>
//                 Enjoy pre-sale payments and access to trending products. Set up your online store effortlessly.
//               </p>
//               <ul>
//                 <li>Trending Products</li>
//                 <li>Huge Margins</li>
//                 <li>Sell 85,000+ Products</li>
//                 <li>Payment In Advance</li>
//                 <li>No Inventory Needed</li>
//                 <li>Support Managers</li>
//                 <li>Quick Dispatch from Our Warehouse</li>
//               </ul>
//               <CardButton>
//                 <Button className="custom-button">Know More</Button>
//               </CardButton>
//             </StyledCard>
//             <StyledCard>
//               <CardImage src={three} alt="Franchise Service" />
//               <CardTitle>FRANCHISE</CardTitle>
//               <Price>59.99/mo</Price>
//               <p>
//                 Expand your business through partnerships and sell products efficiently with low upfront costs.
//               </p>
//               <ul>
//                 <li>Product Offer</li>
//                 <li>Huge Profits</li>
//                 <li>No Inventory Needed</li>
//                 <li>Sell Nationally</li>
//                 <li>Support from Experts</li>
//               </ul>
//               <CardButton>
//                 <Button className="custom-button">Know More</Button>
//               </CardButton>
//             </StyledCard>
//           </TablesWrapper>
//         </div>
//       </div>
//     </Wrapper>
//     </div>
//   );
// }

// // Styling Components

// const Wrapper = styled.section`
//   width: 100%;
//   background: linear-gradient(135deg, #ffffff, #f5f7fa);
//   padding-bottom: 2rem;
// `;

// const HeaderInfo = styled.div`
//   text-align: center;
//   margin-bottom: 40px;

//   h1 {
//     font-size: 2.8rem;
//     font-weight: bold;
//     color: #333;
//     margin-bottom: 15px;
//   }

//   p {
//     font-size: 1.2rem;
//     color: #777;
//     max-width: 600px;
//     margin: 0 auto;
//   }
// `;

// const TablesWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   gap: 30px;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const StyledCard = styled.div`
//   width: 100%;
//   max-width: 360px;
//   background-color: #ffffff;
//   border-radius: 12px;
//   padding: 20px;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
//   }

//   p {
//     font-size: 1.1rem;
//     color: #555;
//   }

//   ul {
//     margin-top: 20px;
//     padding-left: 20px;

//     li {
//       font-size: 1.1rem;
//       color: #333;
//       margin-bottom: 10px;
//       position: relative;
//       padding-left: 25px;

//       &:before {
//         content: "✔";
//         color: #4caf50;
//         font-weight: bold;
//         position: absolute;
//         left: 0;
//         top: 0;
//       }
//     }
//   }
// `;

// const CardImage = styled.img`
//   width: 100%;
//   height: auto;
//   border-bottom: 1px solid #eee;
//   border-radius: 8px;
//   margin-bottom: 15px;
// `;

// const CardTitle = styled.h2`
//   font-size: 1.8rem;
//   font-weight: 600;
//   color: #ff6f61;
//   margin-bottom: 15px;
// `;

// const Price = styled.p`
//   font-size: 1.5rem;
//   color: #333;
//   font-weight: bold;
//   margin-bottom: 10px;
// `;

// const CardButton = styled.div`
//   margin-top: 20px;

//   .custom-button {
//     width: 100%;
//     padding: 10px;
//     background-color: #ff6f61;
//     color: #fff;
//     border-radius: 6px;
//     font-size: 1.1rem;
//     font-weight: bold;
//     transition: background-color 0.3s ease;

//     &:hover {
//       background-color: #e65a4f;
//     }
//   }
// `;



import { Button } from '@headlessui/react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Services() {
  const settings = {
    dots: true,           
    infinite: true,       
    speed: 500,           
    slidesToShow: 3,      
    slidesToScroll: 1,    
    responsive: [         
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile screens
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <Wrapper id="services">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 style={{paddingTop:'3rem'}}>Our Services</h1>
            <p>
              We provide end-to-end management on these platforms to ensure you have everything you need to succeed.
            </p>
          </HeaderInfo>
          
          {/* Implementing the carousel here */}
          <SliderWrapper>
            <Slider {...settings}>
              <StyledCard>
                <CardImage src="https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/services/1.webp" alt="Amazon Service" />
                <CardTitle>AMAZON</CardTitle>
                <Price>Leading Platform</Price>
                <p>
                  Sell exclusive products without pre-purchasing them, and enjoy no upfront investment with large profit margins.
                </p>
                <ul>
                  <li>Exclusive Products</li>
                  <li>Huge Margins</li>
                  <li>Sell 85,000+ Products</li>
                  <li>Sell Nationally & Internationally</li>
                  <li>No Upfront Investment</li>
                  <li>Support Managers</li>
                  <li>No Inventory Needed</li>
                  <li>Quick Dispatch from Our Warehouse</li>
                </ul>
                <CardButton>
                  <Link to="/amazon"><Button className="custom-button">Know More</Button></Link>
                </CardButton>
              </StyledCard>
              
              <StyledCard>
                <CardImage src="https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/services/2.webp" alt="Website Service" />
                <CardTitle>WEBSITE</CardTitle>
                <Price>Leading Platform</Price>
                <p>
                  Enjoy pre-sale payments and access to trending products. Set up your online store effortlessly.
                </p>
                <ul>
                  <li>Trending Products</li>
                  <li>Huge Margins</li>
                  <li>Sell 85,000+ Products</li>
                  <li>Payment In Advance</li>
                  <li>No Inventory Needed</li>
                  <li>Support Managers</li>
                  <li>Quick Dispatch from Our Warehouse</li>
                </ul>
                <CardButton>
                <Link to="/website"> <Button className="custom-button">Know More</Button></Link>
                </CardButton>
              </StyledCard>
              
              <StyledCard>
                <CardImage src="https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/services/3.webp" alt="Franchise Service" />
                <CardTitle>FRANCHISE</CardTitle>
                <Price>59.99/mo</Price>
                <p>
                  Expand your business through partnerships and sell products efficiently with low upfront costs.
                </p>
                <ul>
                  <li>Product Offer</li>
                  <li>Huge Profits</li>
                  <li>No Inventory Needed</li>
                  <li>Sell Nationally</li>
                  <li>Support from Experts</li>
                </ul>
                <CardButton>
                <Link to="/franchise">   <Button className="custom-button">Know More</Button></Link>
                </CardButton>
              </StyledCard>
            </Slider>
          </SliderWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

// Styling Components

const Wrapper = styled.section`
  width: 100%;
  background: linear-gradient(135deg, #ffffff, #f5f7fa);
  padding-bottom: 2rem;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 2.8rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.2rem;
    color: #777;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const SliderWrapper = styled.div`
  .slick-slide {
    padding: 0 15px;
  }
`;

const StyledCard = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 1.1rem;
    color: #555;
  }

  ul {
    margin-top: 20px;
    padding-left: 20px;

    li {
      font-size: 1.1rem;
      color: #333;
      margin-bottom: 10px;
      position: relative;
      padding-left: 25px;

      &:before {
        content: "✔";
        color: #4caf50;
        font-weight: bold;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const CardTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #ff6f61;
  margin-bottom: 15px;
`;

const Price = styled.p`
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardButton = styled.div`
  margin-top: 20px;

  .custom-button {
    width: 100%;
    padding: 10px;
    background-color: #ff6f61;
    color: #fff;
    border-radius: 6px;
    font-size: 1.1rem;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e65a4f;
    }
  }
`;
