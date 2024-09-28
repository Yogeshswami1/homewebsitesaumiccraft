// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Row, Col, List, Card, Typography, Tag } from 'antd';
// import one from '../../assets/tree.jpg';

// const { Title, Paragraph } = Typography;

// // Sample data
// const data = [
//   {
//     id: 1,
//     title: 'Start Business Without Investment',
//     description: [
//       'No Manpower',
//       'No Warehouse',
//       'No Stocks'
//     ],
//     details: [
//       'Now you can start your online business without any upfront investment, you already know how much investment it would take to launch/run a business, inventory, warehousing, manpower and many more, but with us we offer everything. Whatever it takes to run a business without those expenses.',
//       'Major benefits of joining Saumic Craft',
//     ],
//     image: one,
//   },
  
//   {
//     id: 2,
//     title: '85,000+ Exclusive Products',
//     description: [
//       'We have more than 85,000+ exclusive products across different categories, that you can sell without purchasing them in advance',
//       // 'Solve real-world challenges and earn badges.',
//     ],
//     details: [
//       'Prepare for certifications with real-world challenges.',
//       'Gain recognition and advance your career with badges.',
//     ],
//     image: one,
//   },
//   {
//     id: 3,
//     title: 'Solid Packaging & Worldwide Shipping',
//     description: [
//       'Fast-track goals with advanced insights.',
//       'Dedicated customer success team to help drive effective learning.',
//     ],
//     // tag: 'Enterprise Plan',
//     details: [
//       'Leverage advanced insights for effective learning strategies.',
//       'Collaborate with a customer success team to meet learning goals.',
//     ],
//     image: one,
//   },
//   {
//     id: 4,
//     title: 'Support & Learnings',
//     description: [
//       'Create tailored learning paths.',
//       'Host your own content and resources.',
//     ],
//     // tag: 'Enterprise Plan',
//     details: [
//       'Tailor learning paths to meet specific team and organization goals.',
//       'Host and manage your own content for better customization.',
//     ],
//     image: one,
//   },
//   {
//     id: 5,
//     title: 'High Margins',
//     description: [
//       'Create tailored learning paths.',
//       'Host your own content and resources.',
//     ],
//     // tag: 'Enterprise Plan',
//     details: [
//       'Tailor learning paths to meet specific team and organization goals.',
//       'Host and manage your own content for better customization.',
//     ],
//     image: one,
//   },
// ];

// const SliderBox = () => {
//   const [selected, setSelected] = useState(data[0]);

//   return (
//     <Wrapper>
//       <HeaderInfo>
//         <Title level={1} className="extraBold">
//           Why Choose Us
//         </Title>
//         <Paragraph>
//           Explore the features we offer to enhance your learning experience and achieve your goals.
//         </Paragraph>
//       </HeaderInfo>
//       <ContentWrapper>
//         <Row gutter={[20, 20]}>
//           {/* Left Navigation */}
//           <Col xs={24} md={8}>
//             <List
//               itemLayout="vertical"
//               dataSource={data}
//               renderItem={(item) => (
//                 <List.Item
//                   key={item.id}
//                   onClick={() => setSelected(item)}
//                   style={{
//                     cursor: 'pointer',
//                     backgroundColor: selected.id === item.id ? '#f0f0f0' : '#fff',
//                     borderLeft: selected.id === item.id ? '4px solid #FF7F50' : '4px solid transparent',
//                     padding: '16px',
//                     borderRadius: '4px',
//                     transition: 'background-color 0.3s, border-left 0.3s',
//                   }}
//                 >
//                   <List.Item.Meta
//                     title={<Title level={4} style={{ margin: 0 }}>{item.title}</Title>}
//                     description={item.description.map((desc, index) => (
//                       <Paragraph key={index} style={{ margin: 0 }}>
//                         • {desc}
//                       </Paragraph>
//                     ))}
//                   />
//                   {item.tag && (
//                     <Tag color="#FF7F50" style={{ marginTop: '8px' }}>
//                       {item.tag}
//                     </Tag>
//                   )}
//                 </List.Item>
//               )}
//             />
//           </Col>

//           {/* Right Content Display (Image Only) */}
//           <Col xs={24} md={16}>
//             <Card
//               bordered={false}
//               style={{
//                 height: '100%',
//                 padding: 0,
//                 border: '1px solid #FF7F50',
//                 borderRadius: '5px',
//                 overflow: 'hidden', // Ensures the image stays within the card boundaries
//               }}
//             >
//               {selected.image && (
//                 <img
//                   src={selected.image}
//                   alt={selected.title}
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover', // Ensures the image covers the entire card area
//                     borderRadius: '5px',
//                   }}
//                 />
//               )}
//             </Card>
//           </Col>
//         </Row>
//       </ContentWrapper>
//     </Wrapper>
//   );
// };

// export default SliderBox;

// // Styled Components
// const Wrapper = styled.section`
//   width: 100%;
//   padding: 50px 20px;
//   background: #fafafa;
// `;

// const HeaderInfo = styled.div`
//   margin-bottom: 40px;
//   text-align: center;

//   .extraBold {
//     font-weight: 800;
//   }

//   h1 {
//     font-size: 2.5rem;
//     margin-bottom: 16px;
//   }

//   p {
//     font-size: 1rem;
//     color: #555;
//   }
// `;

// const ContentWrapper = styled.div`
//   background: #fff;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   height: 100%;
// `;








// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Row, Col, List, Typography } from 'antd';
// import one from '../../assets/Start1.jpg';
// import two from '../../assets/Start2.jpg';
// import three from '../../assets/Start3.jpg';
// import vid from '../../assets/vid.mp4';
// import vid2 from '../../assets/vid2.mp4';
// import vid3 from '../../assets/vid3.mp4';

// const { Title, Paragraph } = Typography;

// const data = [
//   {
//     id: 1,
//     title: 'Start Business Without Investment',
//     description: ['No Manpower', 'No Warehouse', 'No Stocks'],
//     images: [one, two, three],
//   },
//   {
//     id: 2,
//     title: '85,000+ Exclusive Products',
//     description: ['We have more than 85,000+ exclusive products...'],
//     video: vid, // Video file
//   },
//   {
//     id: 3,
//     title: 'Solid Packaging & Worldwide Shipping',
//     description: [
//       'Fast-track goals with advanced insights.',
//       'Dedicated customer success team...',
//     ],
//     video: vid2,
//   },
//   {
//     id: 4,
//     title: 'Support & Learnings',
//     description: [
//       'Create tailored learning paths.',
//       'Host your own content and resources.',
//     ],
//     video: vid3,
//   },
//   {
//     id: 5,
//     title: 'High Margins',
//     description: ['High-profit margins and exclusive deals.'],
//     videos: [
//       'https://drive.google.com/file/d/1GMgZViyLEtOtPS1b1yyZkAKzHPZ_i_ne/preview',
//       'https://drive.google.com/file/d/14EKPUG3IqZ7M_yzspbSE_aC6Yub6YPAs/preview',
//       'https://drive.google.com/file/d/1RXGKS7-B3YtZ-jEriNNHoYKA1L5mkiL1/preview',
//     ],
//   },
// ];

// const SliderBox = () => {
//   const [selected, setSelected] = useState(data[0]);

//   return (
//     <Wrapper>
//       <HeaderInfo>
//         <Title level={1} className="extraBold">Why Choose Us</Title>
//         <Paragraph>
//           Explore the features we offer to enhance your learning experience...
//         </Paragraph>
//       </HeaderInfo>
//       <ContentWrapper>
//         <Row gutter={[20, 20]}>
//           <Col xs={24} md={8}>
//             <List
//               itemLayout="vertical"
//               dataSource={data}
//               renderItem={(item) => (
//                 <List.Item
//                   key={item.id}
//                   onClick={() => setSelected(item)}
//                   style={{
//                     cursor: 'pointer',
//                     backgroundColor: selected.id === item.id ? '#B38153' : '#fff',
//                     borderLeft: selected.id === item.id ? '4px solid #FF7F50' : '4px solid transparent',
//                     padding: '16px',
//                     borderRadius: '4px',
//                     transition: 'background-color 0.3s, border-left 0.3s',
//                   }}
//                 >
//                   <List.Item.Meta
//                     title={<Title level={4} style={{ margin: 0 }}>{item.title}</Title>}
//                     description={item.description.map((desc, index) => (
//                       <Paragraph key={index} style={{ margin: 0 }}>• {desc}</Paragraph>
//                     ))}
//                   />
//                 </List.Item>
//               )}
//             />
//           </Col>

//           <Col xs={24} md={16}>
//             <ContentDisplay>
//               {selected.video ? (
//                 <FullBlockVideoCard>
//                   <video
//                     src={selected.video}
//                     autoPlay
//                     muted
//                     loop
//                     controls={false}
//                   />
//                 </FullBlockVideoCard>
//               ) : selected.videos ? (
//                 <VideoWrapper>
//                   {selected.videos.map((video, index) => (
//                     <IframeWrapper key={index}>
//                       <iframe
//                         src={video}
//                         frameBorder="0"
//                         allow="autoplay"
//                         allowFullScreen
//                         title={`Google Drive Video ${index + 1}`}
//                       />
//                     </IframeWrapper>
//                   ))}
//                 </VideoWrapper>
//               ) : (
//                 <ImageWrapper>
//                   {selected.images.map((image, index) => (
//                     <ImageCard key={index}>
//                       <img src={image} alt={`Portrait ${index + 1}`} />
//                     </ImageCard>
//                   ))}
//                 </ImageWrapper>
//               )}
//             </ContentDisplay>
//           </Col>
//         </Row>
//       </ContentWrapper>
//     </Wrapper>
//   );
// };

// export default SliderBox;

// const Wrapper = styled.section`
//   width: 100%;
//   padding: 50px 20px;
//   background: #fafafa;
// `;

// const HeaderInfo = styled.div`
//   margin-bottom: 40px;
//   text-align: center;

//   .extraBold {
//     font-weight: 800;
//   }

//   h1 {
//     font-size: 2.5rem;
//     margin-bottom: 16px;
//   }

//   p {
//     font-size: 1rem;
//     color: #555;
//   }
// `;

// const ContentWrapper = styled.div`
//   background: #fff;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   height: 100%;
// `;

// const ContentDisplay = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
// `;

// const ImageWrapper = styled.div`
//   display: flex;
//   justify-content: space-around;
//   gap: 10px;
// `;

// const ImageCard = styled.div`
//   flex: 1;
//   border: 1px solid #FF7F50;
//   border-radius: 5px;
//   overflow: hidden;
//   transition: transform 0.3s, box-shadow 0.3s;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 5px;
//   }

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   }
// `;

// const FullBlockVideoCard = styled.div`
//   width: 100%;
//   height: 100%;
//   border: 1px solid #FF7F50;
//   border-radius: 5px;
//   overflow: hidden;
//   transition: transform 0.3s, box-shadow 0.3s;

//   video {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 5px;
//   }

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   }
// `;

// const VideoWrapper = styled.div`
//   display: flex;
//   justify-content: space-around;
//   gap: 10px;
// `;

// const IframeWrapper = styled.div`
//   flex: 1;
//   border: 1px solid #FF7F50;
//   border-radius: 5px;
//   overflow: hidden;
//   transition: transform 0.3s, box-shadow 0.3s;

//   iframe {
//     width: 100%;
//     height: 570px; /* 9:16 aspect ratio with 320px width */
//     border-radius: 5px;
//   }

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   }
// `;









import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';  // Importing Slider component from react-slick
import { Row, Col, List, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const data = [
  {
    id: 1,
    title: 'Start Business Without Investment',
    description: ['No Manpower', 'No Warehouse', 'No Stocks'],
    images: ["https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/Start1.jpg",
       "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/Start2.jpg",
        "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/Start3.jpg"
      ],
  },
  {
    id: 2,
    title: '85,000+ Exclusive Products',
    description: ['We have more than 85,000+ exclusive products...'],
    video: "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/vid.webm",
  },
  {
    id: 3,
    title: 'Solid Packaging & Worldwide Shipping',
    description: [
      'Fast-track goals with advanced insights.',
      'Dedicated customer success team...',
    ],
    video: "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/vid2.webm",
  },
  {
    id: 4,
    title: 'Support & Learnings',
    description: [
      'Create tailored learning paths.',
      'Host your own content and resources.',
    ],
    video: "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/vid3.webm",
  },
  {
    id: 5,
    title: 'High Margins',
    description: ['High-profit margins and exclusive deals.'],
    videos: [
      'https://drive.google.com/file/d/1GMgZViyLEtOtPS1b1yyZkAKzHPZ_i_ne/preview',
      'https://drive.google.com/file/d/14EKPUG3IqZ7M_yzspbSE_aC6Yub6YPAs/preview',
      'https://drive.google.com/file/d/1RXGKS7-B3YtZ-jEriNNHoYKA1L5mkiL1/preview',
    ],
  },
];

const SliderBox = () => {
  const [selected, setSelected] = useState(data[0]);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ContentWrapper>
      <HeaderInfo>
        <Title level={1} className="extraBold">Why Choose Us</Title>
        <Paragraph>
          Explore the features we offer to enhance your learning experience...
        </Paragraph>
      </HeaderInfo>
      <Row gutter={[20, 20]}>
        <Col xs={24} md={8}>
          <List
            itemLayout="vertical"
            dataSource={data}
            renderItem={(item) => (
              <div>
                <List.Item
                  key={item.id}
                  onClick={() => setSelected(item)}
                  style={{
                    cursor: 'pointer',
                    background: selected.id === item.id
                      ? 'linear-gradient(145deg, #f0f4f8, #d9e2ec)'
                      : '#ffffff',
                    borderLeft: selected.id === item.id
                      ? '4px solid #84a9ac'
                      : '4px solid transparent',
                    padding: '16px',
                    borderRadius: '4px',
                    transition: 'background 0.3s, border-left 0.3s, transform 0.3s',
                    boxShadow: selected.id === item.id
                      ? '0 4px 12px rgba(0, 0, 0, 0.15)'
                      : 'none',
                  }}
                >
                  <List.Item.Meta
                    title={<Title level={4} style={{ margin: 0, color: '#084c61' }}>{item.title}</Title>}
                    description={item.description.map((desc, index) => (
                      <Paragraph key={index} style={{ margin: 0, color: '#4a6572' }}>• {desc}</Paragraph>
                    ))}
                  />
                </List.Item>

                {/* Display selected content below the item on mobile */}
                {selected.id === item.id && (
                  <SelectedContentMobile>
                    {selected.video ? (
                      <FullBlockVideoCard>
                        <video
                          src={selected.video}
                          autoPlay
                          muted
                          loop
                          controls={false}
                        />
                      </FullBlockVideoCard>
                    ) : selected.videos ? (
                      <Slider {...settings}>
                        {selected.videos.map((video, index) => (
                          <IframeWrapper key={index}>
                            <iframe
                              src={video}
                              frameBorder="0"
                              allow="autoplay"
                              allowFullScreen
                              title={`Google Drive Video ${index + 1}`}
                            />
                          </IframeWrapper>
                        ))}
                      </Slider>
                    ) : (
                      <Slider {...settings}>
                        {selected.images.map((image, index) => (
                          <ImageCard key={index}>
                            <img src={image} alt={`Portrait ${index + 1}`} />
                          </ImageCard>
                        ))}
                      </Slider>
                    )}
                  </SelectedContentMobile>
                )}
              </div>
            )}
          />
        </Col>

        {/* Desktop view */}
        <Col xs={24} md={16} className="content-col">
          <ContentDisplay>
            {selected.video ? (
              <FullBlockVideoCard>
                <video
                  src={selected.video}
                  autoPlay
                  muted
                  loop
                  controls={false}
                />
              </FullBlockVideoCard>
            ) : selected.videos ? (
              <VideoWrapper>
                {selected.videos.map((video, index) => (
                  <IframeWrapper key={index}>
                    <iframe
                      src={video}
                      frameBorder="0"
                      allow="autoplay"
                      allowFullScreen
                      title={`Google Drive Video ${index + 1}`}
                    />
                  </IframeWrapper>
                ))}
              </VideoWrapper>
            ) : (
              <ImageWrapper>
                {selected.images.map((image, index) => (
                  <ImageCard key={index}>
                    <img src={image} alt={`Portrait ${index + 1}`} />
                  </ImageCard>
                ))}
              </ImageWrapper>
            )}
          </ContentDisplay>
        </Col>
      </Row>
    </ContentWrapper>
  );
};

export default SliderBox;


// Styled components
const ContentWrapper = styled.div`
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
`;

const ContentDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SelectedContentMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-top: 10px;
  }
`;

const HeaderInfo = styled.div`
  margin-bottom: 40px;
  padding-top: 1rem;
  text-align: center;

  .extraBold {
    font-weight: 800;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 16px;
    color: #0a3d62;
  }

  p {
    font-size: 1rem;
    color: #3c6382;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageCard = styled.div`
  flex: 1;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const FullBlockVideoCard = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const VideoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const IframeWrapper = styled.div`
  flex: 1;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  iframe {
    width: 100%;
    height: 570px;
    border-radius: 5px;

    @media (max-width: 768px) {
      height: 300px;
    }
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

