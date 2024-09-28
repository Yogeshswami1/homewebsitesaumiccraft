import { Row, Col, Typography, Card } from 'antd';

const { Title } = Typography;

const ProductHighlights = () => {
  return (
    <div 
      id="products" 
      style={{ 
        backgroundColor: '#f0f2f5', 
        padding: '20px', 
        minHeight: '100vh' 
      }}
    >
      <div 
        style={{ 
          padding: '20px', 
          backgroundColor: '#ffffff', 
          borderRadius: '16px', 
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)', 
          maxWidth: '1200px', 
          margin: 'auto',
          width: '100%'
        }}
      >
        {/* Centered Heading */}
        <Row justify="center">
          <Col>
            <Title 
              level={2} 
              style={{ 
                textAlign: 'center', 
                color: '#1f2937', 
                marginBottom: '30px', 
                padding: '10px 20px', 
                fontSize: '2.5rem', // Larger size for desktop
                fontWeight: 'bold',
                letterSpacing: '0.5px',
                borderBottom: '3px solid #5b92e5',
              }}
            >
              Product Highlights
            </Title>
          </Col>
        </Row>

        {/* Card with Videos */}
        <Card 
          style={{ 
            marginBottom: '20px', 
            borderRadius: '16px', 
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', 
            background: 'linear-gradient(135deg, #e0e0e0, #cfd8dc)', 
            padding: '10px',
          }}
        >
          <Row gutter={[24, 24]} justify="center">
            <Col xs={24} sm={24} md={12} lg={10}>
              <iframe
                src="https://drive.google.com/file/d/1xq-fUKP_4gn2pKqKUmB7gIdo0lL6bcPY/preview"
                width="100%"
                height="280px" // Increased for desktop
                frameBorder="0"
                allowFullScreen
                title="Video 1"
                style={{ 
                  borderRadius: '12px', 
                  border: '2px solid #d0d0d0', 
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
                  transition: 'transform 0.3s ease-in-out',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              ></iframe>
            </Col>
            <Col xs={24} sm={24} md={12} lg={10}>
              <iframe
                src="https://drive.google.com/file/d/1dlCEwXNYu_VpUvxXPlLyvmeb7GwSVWUD/preview"
                width="100%"
                height="280px" // Increased for desktop
                frameBorder="0"
                allowFullScreen
                title="Video 2"
                style={{ 
                  borderRadius: '12px', 
                  border: '2px solid #d0d0d0', 
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
                  transition: 'transform 0.3s ease-in-out',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              ></iframe>
            </Col>
          </Row>
        </Card>

        {/* Second Row with Videos */}
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={24} md={12} lg={10}>
            <iframe
              src="https://drive.google.com/file/d/1Aj8PvLUtri32JjYUHPn_3qwfqNEfXko4/preview"
              width="100%"
              height="280px" // Increased for desktop
              frameBorder="0"
              allowFullScreen
              title="Video 4"
              style={{ 
                borderRadius: '12px', 
                border: '2px solid #d0d0d0', 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
                transition: 'transform 0.3s ease-in-out',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            ></iframe>
          </Col>
          <Col xs={24} sm={24} md={12} lg={10}>
            <iframe
              src="https://drive.google.com/file/d/1-aDpALZvwdoECNBDGtoipwJDU7MWNFDZ/preview"
              width="100%"
              height="280px" // Increased for desktop
              frameBorder="0"
              allowFullScreen
              title="Video 5"
              style={{ 
                borderRadius: '12px', 
                border: '2px solid #d0d0d0', 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
                transition: 'transform 0.3s ease-in-out',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            ></iframe>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductHighlights;
