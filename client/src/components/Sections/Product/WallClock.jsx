import { useEffect } from 'react';
import { Card, Button, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Footer from '../Footer';

const { Title } = Typography;

// Mock data for products with images and SKU
const products = [
  { id: 1, name: "Exquisite Wooden Handmade Wall Clock Brown With White Printed Acrylic Wall Clock for Home & Office Decorative Big Size Clock (16 Inch)", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/H56kWR-2048x2048.jpg", sku: "CL05" },
  { id: 2, name: "Exquisite Wooden Handmade Wall Clock Green With Brown Printed Acrylic Wall Clock for Home & Office Decorative Big Size Clock (16 Inch)", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/uoasuL-2048x2048.jpg", sku: "CL04" },
  { id: 3, name: "Exquisite Wooden Handmade Wall Clock Green With Yellow And Goldan Printed Acrylic Wall Clock for Home & Office Decorative Big Size Clock (16 Inch)", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/jTIxP6-2048x2048.jpg", sku: "CL08" },
  { id: 4, name: "Exquisite Wooden Handmade Wall Clock Ocen Blue ith Green And White Printed Acrylic Wall Clock For Home & Office Decorative Big Size Clock (16 Inch)", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/5Yo39y-2048x2048.jpg", sku: "CL03" },
  { id: 5, name: "Exquisite Wooden Handmade Wall Clock Ocen Blue With White Golden Splash Printed Acrylic Wall Clock For Home & Office Decorative Big Size Clock (16 Inch)", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/NO9Y5L-2048x2048.jpg", sku: "CL02" },
  { id: 6, name: "Exquisite Wooden Handmade Wall Clock Pink With White Printed Acrylic Wall Clock for Home & Office Decorative Big Size Clock (16 Inch)", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/8BoDgv-2048x2048.jpg", sku: "CL06" },
];

const ProductList = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // This scrolls to the top on page load
  }, []);
  return (
    <>
      <div style={{ padding: '20px', paddingTop: '6rem', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
        {/* Container for the title with centered styling */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '2rem',
          textAlign: 'center'  // Ensures the text is centered inside the container
        }}>
          <Title 
            level={2} 
            style={{ 
              fontFamily: 'Times New Roman, serif', 
              fontSize: '48px', 
              color: '#333', 
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', 
              background: 'linear-gradient(90deg, #ff7f00, #ff6f00)', 
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '2px',
              margin: 0  // Removes any default margin that could affect centering
            }}
          >
            Wall Clocks
          </Title>
        </div>

        <Row gutter={[16, 16]}>
          {products.map(product => (
            <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
              <Card
                hoverable
                cover={<img alt={product.name} src={product.image} style={{ height: '326px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />}
                style={{ 
                  borderRadius: '10px', 
                  overflow: 'hidden', 
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                  transition: 'transform 0.3s ease',
                  transformStyle: 'preserve-3d'
                }}
                bodyStyle={{ padding: '15px', textAlign: 'center' }}  // Center the content inside the card body
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) rotateX(5deg) rotateY(5deg)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotateX(0) rotateY(0)'}
              >
                <div style={{ textAlign: 'center', fontWeight: 'bold' }}>{product.name}</div> {/* Center the product name */}
                <p style={{ margin: 0, fontWeight: 'bold', color: '#888' }}>SKU: {product.sku}</p>
                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                  <Link to={`/product/${product.id}`}>
                    <Button 
                      type="primary" 
                      icon={<ShoppingCartOutlined />}
                      style={{
                        backgroundColor: '#ff7f00',  // Orange color
                        borderColor: '#ff7f00',
                        borderRadius: '20px',
                        transition: 'background-color 0.3s ease',
                        padding: '0 20px'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ff6f00'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff7f00'}
                    >
                      Click to See Price
                    </Button>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Button 
            type="primary" 
            size="large" 
            style={{
              background: 'linear-gradient(45deg, #6e8efb, #a777e3)',
              borderColor: 'transparent',
              borderRadius: '20px',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease',
              padding: '0 40px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            View More
          </Button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductList;
