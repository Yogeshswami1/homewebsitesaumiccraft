import { useEffect } from 'react';
import { Card, Button, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Footer from '../Footer';

const { Title } = Typography;

// Mock data for products with images and SKU
const products = [
  { id: 1, name: "Bamboo Art Dear Painting For Home Decor | Bamboo Art Gift For Multiple Occasions", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/06/2DHUTS.jpg", sku: "BWH-21" },
  { id: 2, name: "Bamboo Hand Crafted Framed Wall Hangings Of Durga Ji For Home Decor | Bamboo Framed Art For Wall Decor", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/06/Upt7dz.jpg", sku: "BWH-10" },
  { id: 3, name: "Bamboo Hand Crafted Leaf Design Wall Hangings Of Durga Ji For Home Decor | Bamboo Art For Wall Decor", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/06/xZalKd.jpg", sku: "BWH-8" },
  { id: 4, name: "Bamboo Hand Crafted Leaf Design Wall Hangings Of Hanuman Ji For Home Decor | Bamboo Art For Wall Decor", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/06/aUDu7D.jpg", sku: "BWH-6" },
  { id: 5, name: "Bamboo Hand Crafted Leaf Design Wall Hangings Of Shri Ram Ji With Janaki Ji For Home Decor | Bamboo Art For Wall Decor", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/06/ZS4vE6.jpg", sku: "BWH-19" },
  { id: 6, name: "Bamboo Hand Crafted Wall Hangings Of Ganesh Ji For Home Decor | Ideal Gifts For Wedding And Festival", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/06/mibnEB.jpg", sku: "BWH-12" },
  { id: 7, name: "Bamboo Hand Crafted Wall Hangings Of Godess Laxmi Ji For Home Decor", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/06/TTEavW.jpg", sku: "BWH-2" },
  { id: 8, name: "Bamboo Hand Crafted Wall Hangings Of Kanha Ji For Home Decor | Bamboo Art For Wall Decor", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/06/pg0JkR.jpg", sku: "BWH-9" },
  { id: 9, name: "Bamboo Hand Crafted Wall Hangings Of Lord Shiva For Home Decor | Bamboo Art For Wall Decor Painting", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/06/Eu6ngy.jpg", sku: "BWH-3" },
  { id: 10, name: "Bamboo Hand Crafted Wall Hangings Of The Trio Of Ganesh Ji, Laxmi Ji And Sarwasti Ji Painting For Home Decor", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/06/UCcePC.jpg", sku: "BWH-11" },
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
            Bamboo Products
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
