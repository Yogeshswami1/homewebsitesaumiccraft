import { useEffect } from 'react';
import { Card, Button, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Footer from '../Footer';

const { Title } = Typography;

// Mock data for products with images and SKU
const products = [
  { id: 1, name: "A beautiful and intricate bronze statue depicting Radha and Krishna, two central deities in Hinduism.", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/rz2VMl.jpg", sku: "BZ-BRK1" },
  { id: 2, name: "Brass Incense Burner with Smoke", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/aSgYrS.jpg", sku: "BZ-DGCH1" },
  { id: 3, name: "Brass Train Pen Holder", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/Y5ZO5K-2048x1635.jpg", sku: "BZ-TRN1" },
  { id: 4, name: "Bronz Sitting Hanuman Statue", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/iUnwe0.jpg", sku: "BZ-HNM1" },
  { id: 5, name: "Decorative Brass Bowls with Floral Design", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/oBEOlj.jpg", sku: "BZ-BWL" },
  { id: 6, name: "Handcrafted Brass Cow Statue with Ganesha Relief", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/iCwGXw.jpg", sku: "BZ-GC1" },
  { id: 7, name: "Lord Vishnu Idol: A Sacred Representation of the Preserver", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/4AUxkP.jpg", sku: "BZ-VSN1" },
  { id: 8, name: "Mahatma Gandhi: Champion of Peace and Freedom", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/qxatFC.jpg", sku: "BZ-MG2" },
  { id: 9, name: "Serene and Spiritual Sai Baba Idol for Peace and Meditation", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/axMSM5.jpg", sku: "BZ-SB1" },
  { id: 10, name: "The Shiva Family: A Portrait of Togetherness", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/IEeK3Q.jpg", sku: "BZ-SF1" },
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
            Bronze Products
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
