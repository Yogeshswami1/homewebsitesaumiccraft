import { useEffect } from 'react';
import { Card, Button, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Footer from '../Footer';

const { Title } = Typography;

// Mock data for products with images and SKU
const products = [
  { id: 1, name: "Astronaut Figurine Tray Sculpture Desk Storage Statue Room Decoration Gift black Small|Antique Home Decor", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/05/2SPIgA.jpg", sku: "AR-MMN2" },
  { id: 2, name: "Angry Hippopotamus Mouth Open Face Sculpture Polyresin Hippo Showpiece for Home Decor", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/05/VQhlBv.jpg", sku: "AR-HP1" },
  { id: 3, name: "Cool Dog Showpiece with Plate for Home Dcor Item | Kitchen,Bedroom,Office,Dinning Table Decorative Item", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/05/8BcIbP.jpg", sku: "AR-BD12" },
  { id: 4, name: "Resin Handcrafted Birds Couple On Tree Showpiece Bird Statue For Home Dcor Living Room Bedroom Table Top Antique Garden Decoration Items", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/05/Gxja7N.jpg", sku: "AR-BDS1" },
  { id: 5, name: "Deer Family Showpiece for Home Decor Showpiece | Reindeer Family Statue for Home Decor (Set of 3)", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/05/dF2V5W.jpg", sku: "AR-DR4" },
  { id: 6, name: "Cool Dog Showpiece with Plate for Home Dcor Item | Kitchen,Bedroom,Office,Dinning Table Decorative Item", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/05/nMGarO.jpg", sku: "AR-BD9" },
  { id: 7, name: "Resin Elephant Playing Musical Instrument Showpiece For Home Dcor Living Room Bedroom Table Top", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/05/EoRY60.jpg", sku: "AR-EL4" },
  { id: 8, name: "Resin Handcrafted Birds Couple On Tree Showpiece Bird Statue For Home Dcor Living Room Bedroom Table Top Antique Garden Decoration Items", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/05/gMrmQB.jpg", sku: "AR-BDS2" },
  { id: 9, name: "Cool Dog Showpiece with Plate for Home Dcor Item | Kitchen,Bedroom,Office,Dinning Table Decorative Item", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/05/UfTaXX.jpg", sku: "AR-BD2" },
  { id: 10, name: "Resin Deer Head Showpiece Animal Figurine for Table Top Good Luck Vaastu Statue", image: "https://gallery.saumiccraft.com/wp-content/uploads/2024/05/1LfnGy.jpg", sku: "AR-DR1" },
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
            Resin Products
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
