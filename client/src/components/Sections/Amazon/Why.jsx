import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col, List, Typography } from 'antd';
import gallery from '../../../assets/video/gallery.webm';
import support from '../../../assets/video/support.webm';
import lms from '../../../assets/video/lms.webm';
import crm from '../../../assets/video/crm.webm';

const { Title, Paragraph } = Typography;

const data = [
  {
    id: 1,
    title: 'Gallery',
    description: ['From our collection of 85,000+ products, you can easily handpick your favorites by exploring the extensive catalog at gallery.saumiccraft.com'],
    video: gallery,
  },
  {
    id: 2,
    title: 'Support',
    description: ['For better assistance, visit support.saumiccraft.com to schedule an appointment at your preferred time. You will receive a return call at the scheduled time.'],
    video: support,
  },
  {
    id: 3,
    title: 'Learning Management System(LMS)',
    description: [
      'To help you grow and automate your business, we offer basic to advanced training, available at lms.saumiccraft.com. Access it anytime!',
    ],
    video: lms,
  },
  {
    id: 4,
    title: 'Customer Management System(CRM)',
    description: [
      'To track your work and monitor whether managers have completed their tasks, visit crm.saumiccraft.com',
    ],
    video: crm,
  },
];

const SliderBox = () => {
  const [selected, setSelected] = useState(data[0]);

  return (
    <>
      <ContentWrapper>
        <HeaderInfo>
          <Title level={1} className="extraBold">Accessible Portals</Title>
          <Paragraph>
            Explore the portals we offer to help you start and grow your business.
          </Paragraph>
        </HeaderInfo>
        <Row gutter={[20, 20]}>
          <Col xs={24} md={8}>
            <List
              itemLayout="vertical"
              dataSource={data}
              renderItem={(item) => (
                <List.Item
                  key={item.id}
                  onClick={() => setSelected(item)}
                  style={{
                    cursor: 'pointer',
                    background: selected.id === item.id
                      ? 'linear-gradient(145deg, #d6e4f0, #e8eef3)' // Light professional gradient
                      : '#f4f5f7', // Soft light gray
                    borderLeft: selected.id === item.id
                      ? '4px solid #007bff' // Subtle blue border for selected item
                      : '4px solid transparent',
                    padding: '16px',
                    borderRadius: '8px',
                    transition: 'background 0.3s, border-left 0.3s, transform 0.3s',
                    boxShadow: selected.id === item.id
                      ? '0 4px 12px rgba(0, 0, 0, 0.1)' // Soft shadow for selected
                      : 'none',
                  }}
                >
                  <List.Item.Meta
                    title={<Title level={4} style={{ margin: 0, color: '#007bff' }}>{item.title}</Title>}
                    description={item.description.map((desc, index) => (
                      <Paragraph key={index} style={{ margin: 0, color: '#555' }}>• {desc}</Paragraph>
                    ))}
                  />
                </List.Item>
              )}
            />
          </Col>

          <Col xs={24} md={16}>
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
    </>
  );
};

export default SliderBox;

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 20px;
  background: #fafafa;
`;

const HeaderInfo = styled.div`
  margin-bottom: 40px;
  text-align: center;

  .extraBold {
    font-weight: 800;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 16px;
    color: #007bff; /* Subtle blue */
  }

  p {
    font-size: 1.1rem;
    color: #555;
  }
`;

const ContentWrapper = styled.div`
  background: linear-gradient(135deg, #f0f4f7, #ffffff); /* Light gray to white gradient */
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  height: 100%;
  transition: background 0.5s ease;
`;

const ContentDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

const ImageCard = styled.div`
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const FullBlockVideoCard = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;
