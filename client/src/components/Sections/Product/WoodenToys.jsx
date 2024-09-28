import { useEffect } from 'react';
import { Card, Button, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Footer from '../Footer';

const { Title } = Typography;

// Mock data for products with images and SKU
const products = [
  { id: 1, name: "Eco-Friendly Wooden Toy", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/07/iFQDLH.jpg", sku: "WT-1" },
  { id: 2, name: "Eco-Friendly Wooden Toy", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/07/HLPOYv.jpg", sku: "WT-2" },
  { id: 3, name: "Eco-Friendly Wooden Toy", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/07/fPTgEp.jpg", sku: "WT-3" },
  { id: 4, name: "Eco-Friendly Wooden Toy", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/07/9Qauh1.jpg", sku: "WT-4" },
  { id: 5, name: "Eco-Friendly Wooden Toy", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/07/rTPZAH.jpg", sku: "WT-6" },
  { id: 6, name: "Eco-Friendly Wooden Toy", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/07/tr0faz.jpg", sku: "WT-8" },
  { id: 7, name: "Eco-Friendly Wooden Toy", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/07/OIRuAu.jpg", sku: "WT-9" },
  { id: 8, name: "Eco-Friendly Wooden Toy", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/07/YpjUbj.jpg", sku: "WT-10" },
  { id: 9, name: "Eco-Friendly Wooden Toy", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/07/1PutA5.jpg", sku: "WT-11" },
  { id: 10, name: "Eco-Friendly Wooden Toy", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/07/J7TxSL.jpg", sku: "WT-12" },
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
            Wooden Toys
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