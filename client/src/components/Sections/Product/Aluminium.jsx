import { useEffect } from 'react';
import { Card, Button, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Footer from '../Footer';

const { Title } = Typography;

// Mock data for products with images and SKU
const products = [
  { id: 1, name: "Aluminum Water Bottle with Glass Insert – 27×7 oz Leakproof Reusable Flask", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/8uXho7.jpg", sku: "AB2-1" },
  { id: 2, name: "Aluminium Jug Set with 2 Glass Tumblers – 21 cm for kitchen décor ,Table Top , And Home Decoration", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/K1E05P.jpg", sku: "JG2-3" },
  { id: 3, name: "HandPainted Alluminium Tea Kettle with 6 Glasses and Wooden Tray For Home Décor , Tea Party , Serving", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/DSC-4577.jpg", sku: "KT6-1" },
  { id: 4, name: "HandPainted Alluminium Tea Kettle with 6 Glasses and Wooden Tray For Home Décor , Tea Party , Serving", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/DSC-4564.jpg", sku: "KT6-6" },
  { id: 5, name: "Aluminium Jug Set with 2 Glass Tumblers – 21 cm for kitchen décor ,Table Top , And Home Decoration", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/YtJY9j.jpg", sku: "JG2-1" },
  { id: 6, name: "Hand-Painted Aluminium Tea Kettle – 750 ml for kitchen décor Home Décor , Tea Party , Serving", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/5vhMb8.jpg", sku: "KT2" },
  { id: 7, name: "Aluminium Jug – 21 cm for kitchen décor ,Table Top , And Home Decoration", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/86EPzo.jpg", sku: "JG1" },
  { id: 8, name: "Hand-Painted Aluminium Tea Kettle – 750 ml for kitchen décor Home Décor , Tea Party , Serving", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/cUMBtc.jpg", sku: "KT4" },
  { id: 9, name: "HandPainted Alluminium Tea Kettle with 6 Glasses and Wooden Tray For Home Décor , Tea Party , Serving", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/DSC-4582.jpg", sku: "KT6-7" },
  { id: 10, name: "HandPainted Alluminium Tea Kettle with 6 Glasses and Wooden Tray For Home Décor , Tea Party , Serving", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/03/DSC-4567-2.jpg", sku: "KT6-3" },
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
            Aluminium Products
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
