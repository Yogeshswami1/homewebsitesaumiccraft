import { useEffect } from 'react';
import { Card, Button, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Footer from '../Footer';

const { Title } = Typography;

// Mock data for products with images and SKU
const products = [
  { id: 1, name: "13 Inch White Marble Dust Ganesha Statue", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/uOc2Mk-2048x2048.jpg", sku: "MG-2" },
  { id: 2, name: "Hand-Painted Marble Yashoda and Krishna Statue (9 inches)", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/cGmtWz-2048x2048.jpg", sku: "MYK-1" },
  { id: 3, name: "Handicraft Marble dust Lord Shiv ji Statue for Pooja, Car Dashboard I Shiva Idol I Bholenath I Mahakal I Adiyogi Statue I Office Table", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/05/UnEXF8.jpg", sku: "NMB-SHIV1" },
  { id: 4, name: "Hanuman Ji Marble Dust Murti Idol, Poly Marble Sitting Bajrang Bali for Pooja Temple Home Decoration Item Positive Envirement", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/05/Q9dHIl.jpg", sku: "NMB-HN1" },
  { id: 5, name: "Hindu Deities Lakshmi and Ganesha Marble Statue (7 Inch)", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/CPnD2Q.jpg", sku: "MGL-01" },
  { id: 6, name: "Hindu Goddess Lakshmi Statue Sitting on Lotus Flower (10.5 Inch)", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/7l30dz-2048x2048.jpg", sku: "ML-01" },
  { id: 7, name: "Krishna Playing Flute Statue (11.25 Inches)", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/n4Stti-2048x2048.jpg", sku: "MK-1" },
  { id: 8, name: "Laxmi Ganesha Idol Marble Murti For Puja Home Diwali Decoration Gifts", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/05/XmVIeC.jpg", sku: "NMB-GS1" },
  { id: 9, name: "Lord Krishna Idol Makhan Chor Statue Gift Showpiece", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/05/PgwJfk.jpg", sku: "NMB-KR1" },
  { id: 10, name: "Marble Handmade Flute Krishna For Home Décor Handcrafted Showpiece For Table Décor Temple Décor", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/HB9l0g.jpg", sku: "MK-2" },
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
            Marble Products
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
