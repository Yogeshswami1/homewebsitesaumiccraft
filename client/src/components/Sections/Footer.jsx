// import React from "react";
// import { Layout, Row, Col, Typography, Space } from "antd";
// import { InstagramOutlined, FacebookOutlined, MailOutlined } from "@ant-design/icons";
// import { Link } from "react-scroll";
// // Assets
// import Logo from "../../assets/logo.png";

// const { Footer } = Layout;
// const { Title, Text } = Typography;

// export default function Contact() {
//   const getCurrentYear = () => {
//     return new Date().getFullYear();
//   };

//   return (
//     <Footer
//       style={{
//         background: "linear-gradient(135deg, #2b2b2b 0%, #1f1f1f 100%)",
//         padding: "40px 0",
//         boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
//         color: "#ffffff",
//       }}
//     >
//       <div
//         className="container"
//         style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
//       >
//         <Row align="middle" justify="space-between" gutter={[16, 32]}>
//           <Col xs={24} sm={12} md={6}>
//             <Space size="middle">
//               <Link to="home" smooth={true} offset={-80} className="pointer">
//                 <img src={Logo} width="200px" alt="Logo" />
//               </Link>
//             </Space>
//           </Col>

//           {/* Quick Links Section */}
//           <Col xs={24} sm={12} md={6}>
//             <Title level={4} style={{ color: "#ffffff", textAlign: "center", marginBottom: "20px" }}>Quick Links</Title>
//             <Space direction="vertical" size="middle" style={{ width: "100%", textAlign: "center" }}>
//               <a
//                 href="/howwework"
//                 style={{
//                   color: "#ffffff",
//                   fontSize: "16px",
//                   textDecoration: "none",
//                   transition: "color 0.3s ease, text-shadow 0.3s ease",
//                 }}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.color = "#d4d4d4";
//                   e.currentTarget.style.textShadow = "0 0 5px #fff, 0 0 10px #fff";
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.color = "#ffffff";
//                   e.currentTarget.style.textShadow = "none";
//                 }}
//               >
//                 How We Work
//               </a>
//               <a
//                 href="product"
//                 style={{
//                   color: "#ffffff",
//                   fontSize: "16px",
//                   textDecoration: "none",
//                   transition: "color 0.3s ease, text-shadow 0.3s ease",
//                 }}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.color = "#d4d4d4";
//                   e.currentTarget.style.textShadow = "0 0 5px #fff, 0 0 10px #fff";
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.color = "#ffffff";
//                   e.currentTarget.style.textShadow = "none";
//                 }}
//               >
//                 Products
//               </a>
             
//               <a
//                 href="/about"
//                 style={{
//                   color: "#ffffff",
//                   fontSize: "16px",
//                   textDecoration: "none",
//                   transition: "color 0.3s ease, text-shadow 0.3s ease",
//                 }}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.color = "#d4d4d4";
//                   e.currentTarget.style.textShadow = "0 0 5px #fff, 0 0 10px #fff";
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.color = "#ffffff";
//                   e.currentTarget.style.textShadow = "none";
//                 }}
//               >
//                 About Us
//               </a>
//               <a
//                 href="/contact"
//                 style={{
//                   color: "#ffffff",
//                   fontSize: "16px",
//                   textDecoration: "none",
//                   transition: "color 0.3s ease, text-shadow 0.3s ease",
//                 }}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.color = "#d4d4d4";
//                   e.currentTarget.style.textShadow = "0 0 5px #fff, 0 0 10px #fff";
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.color = "#ffffff";
//                   e.currentTarget.style.textShadow = "none";
//                 }}
//               >
//                 Contact Us
//               </a>
//               <a
//                 href="/login"
//                 style={{
//                   color: "#ffffff",
//                   fontSize: "16px",
//                   textDecoration: "none",
//                   transition: "color 0.3s ease, text-shadow 0.3s ease",
//                 }}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.color = "#d4d4d4";
//                   e.currentTarget.style.textShadow = "0 0 5px #fff, 0 0 10px #fff";
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.color = "#ffffff";
//                   e.currentTarget.style.textShadow = "none";
//                 }}
//               >
//                 Admin
//               </a>
//             </Space>
//           </Col>

//           <Col xs={24} sm={12} md={6} style={{paddingBottom: '5rem'}}>
//             <Title level={4} style={{ color: "#ffffff", textAlign: "center", marginBottom: "20px" }}>Connect with Us</Title>
//             <Space direction="vertical" size="middle" style={{ width: "100%", textAlign: "center" }}>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   color: "#ffffff",
//                   fontSize: "16px",
//                   textDecoration: "none",
//                   display: "flex",
//                   alignItems: "center",
//                   transition: "color 0.3s ease, text-shadow 0.3s ease",
//                   marginLeft: "5rem"
//                 }}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.color = "#d4d4d4";
//                   e.currentTarget.style.textShadow = "0 0 5px #fff, 0 0 10px #fff";
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.color = "#ffffff";
//                   e.currentTarget.style.textShadow = "none";
//                 }}
//               >
//                 <InstagramOutlined style={{ fontSize: "20px", marginRight: "8px" }} />
//                 Instagram
//               </a>
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   color: "#ffffff",
//                   fontSize: "16px",
//                   textDecoration: "none",
//                   display: "flex",
//                   alignItems: "center",
//                   transition: "color 0.3s ease, text-shadow 0.3s ease",
//                   marginLeft: "5rem"
//                 }}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.color = "#d4d4d4";
//                   e.currentTarget.style.textShadow = "0 0 5px #fff, 0 0 10px #fff";
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.color = "#ffffff";
//                   e.currentTarget.style.textShadow = "none";
//                 }}
//               >
//                 <FacebookOutlined style={{ fontSize: "20px", marginRight: "8px" }} />
//                 Facebook
//               </a>
//               <a
//                 href="mailto:contact@yourdomain.com"
//                 style={{
//                   color: "#ffffff",
//                   fontSize: "16px",
//                   textDecoration: "none",
//                   display: "flex",
//                   alignItems: "center",
//                   transition: "color 0.3s ease, text-shadow 0.3s ease",
//                   marginLeft: "5rem"
//                 }}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.color = "#d4d4d4";
//                   e.currentTarget.style.textShadow = "0 0 5px #fff, 0 0 10px #fff";
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.color = "#ffffff";
//                   e.currentTarget.style.textShadow = "none";
//                 }}
//               >
//                 <MailOutlined style={{ fontSize: "20px", marginRight: "8px" }} />
//                 Contact Us
//               </a>
//             </Space>
//           </Col>

//           <Col xs={24} sm={24} md={6} style={{paddingBottom: '6rem'}}>
//             <Title level={4} style={{ color: "#ffffff", textAlign: "center", marginBottom: "20px" }}>Newsletter</Title>
//             <Space direction="vertical" style={{ width: "100%", textAlign: "center" }}>
//               <Text style={{ fontSize: "16px", marginBottom: "10px", color: "#ffffff" }}>
//                 Subscribe to our newsletter
//               </Text>
//               <div style={{ display: "flex", marginTop: "8px", justifyContent: "center" }}>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   style={{
//                     padding: "10px",
//                     fontSize: "16px",
//                     border: "1px solid #444",
//                     borderRadius: "4px 0 0 4px",
//                     outline: "none",
//                     width: "70%",
//                     maxWidth: "300px",
//                     color: "#ffffff",
//                     backgroundColor: "#333",
//                   }}
//                 />
//                 <button
//                   style={{
//                     padding: "10px 20px",
//                     fontSize: "16px",
//                     background: "linear-gradient(45deg, #333, #666)",
//                     border: "none",
//                     borderRadius: "0 4px 4px 0",
//                     color: "#ffffff",
//                     cursor: "pointer",
//                     fontWeight: "bold",
//                     transition: "background 0.5s ease, transform 0.3s ease",
//                     position: "relative",
//                     overflow: "hidden",
//                   }}
//                   onMouseOver={(e) => {
//                     e.currentTarget.style.background = "linear-gradient(45deg, #666, #333)";
//                     e.currentTarget.style.transform = "scale(1.05)";
//                   }}
//                   onMouseOut={(e) => {
//                     e.currentTarget.style.background = "linear-gradient(45deg, #333, #666)";
//                     e.currentTarget.style.transform = "scale(1)";
//                   }}
//                 >
//                   Subscribe
//                 </button>
//               </div>
//             </Space>
//           </Col>
//         </Row>

//         <Row justify="center" style={{ marginTop: "45px", textAlign: "center" }}>
//           <Text type="secondary" style={{ fontSize: "14px", color: "#ffffff" }}>
//             © {getCurrentYear()} Saumic Craft. All Rights Reserved.
//           </Text>
//         </Row>
//       </div>
//     </Footer>
//   );
// }






















import React, {useState} from "react";
import { Layout, Row, Col, Typography, Space, message } from "antd";
import { InstagramOutlined, FacebookOutlined } from "@ant-design/icons";
import axios from 'axios';

const { Footer } = Layout;
const { Title, Text } = Typography;

const apiUrl = process.env.REACT_APP_BACKEND_URL;

export default function Contact() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);


  const getCurrentYear = () => new Date().getFullYear();


  const handleSubscribe = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      message.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      // Make a POST request to your newsletter subscription endpoint
      const response = await axios.post(`${apiUrl}/api/newsletter/subscribe`, { email });

      if (response.status === 200) {
        message.success("Successfully subscribed to the newsletter!");
        setEmail(""); // Clear the email input
      } else {
        message.error("Subscription failed. Please try again later.");
      }
    } catch (error) {
      message.error("Error occurred while subscribing. Please try again later.");
    } finally {
      setLoading(false);
    }
  };



  return (
    <Footer
      style={{
        background: "linear-gradient(135deg, #2b2b2b 0%, #1f1f1f 100%)", // Black gradient background
        padding: "0px 0",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        color: "#ffffff",
      }}
    >
      {/* Newsletter Signup Strip */}
      <div
        style={{
          backgroundColor: "#FF4500", // Reddish-orange color
          padding: "20px 0",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Row justify="center" align="middle">
          <Col xs={24} sm={18} md={12}>
            <Text style={{ fontSize: "16px", color: "#fff", marginRight: "10px" }}>
              Connect with us to get the latest news & special promotions
            </Text>
          </Col>
          <Col xs={24} sm={6} md={8}>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

                style={{
                  padding: "10px",
                  fontSize: "16px",
                  border: "1px solid #fff",
                  borderRadius: "4px 0 0 4px",
                  outline: "none",
                  width: "70%",
                  maxWidth: "300px",
                  color: "#000",
                  backgroundColor: "#fff",
                }}
                disabled={loading}
              />
              <button
              onClick={handleSubscribe}
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#e63900", // Darker reddish-orange for the button
                  border: "none",
                  borderRadius: "0 4px 4px 0",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "background 0.3s ease",
                  width: "30%",
                }}
                disabled={loading}
              >
                 {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          </Col>
        </Row>
      </div>

      {/* Footer Content */}
      <div
        className="container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        <Row justify="space-between" gutter={[16, 32]}>
          {/* Get in touch section */}
          <Col xs={24} sm={12} md={4} style={{ textAlign: "center" }}>
            <Title level={5} style={{ color: "#FF4500" }}> {/* Reddish-orange for titles */}
              Reach Out To Us
            </Title>
            <Space direction="vertical" size="small">
              <Text style={{ fontSize: "14px", color: "#ffffff" }}>
                International Airport, E-18, near Jaipur, Shankar Colony, Sawai Gaitor, Jagatpura, Jaipur, Rajasthan 302017
              </Text>
              <Text style={{ fontSize: "14px", color: "#ffffff" }}>info@saumiccraft.in</Text>
              <Text style={{ fontSize: "14px", color: "#ffffff" }}>+91-94296 91254</Text>
            </Space>
            <Space size="middle" style={{ marginTop: "10px" }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookOutlined style={{ fontSize: "20px", color: "#ffffff" }} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramOutlined style={{ fontSize: "20px", color: "#ffffff" }} />
              </a>
            </Space>
          </Col>

          {/* Top Categories */}
          <Col xs={24} sm={12} md={4} style={{ textAlign: "center" }}>
            <Title level={5} style={{ color: "#FF4500" }}>
              Top Categories
            </Title>
            <Space direction="vertical" size="small">
              <a href="/leather" className="footer-link">Leather Diary</a>
              <a href="/resin" className="footer-link">Resin Products</a>
              <a href="/paintings" className="footer-link">Paintings</a>
              <a href="/marble" className="footer-link">Marble Products</a>
              <a href="/woodenproducts" className="footer-link">Wooden Products</a>
              <a href="/wallclock" className="footer-link">Wall Clocks</a>
              <a href="/bronze" className="footer-link">Bronze Products</a>
            </Space>
          </Col>

          {/* About Store */}
          <Col xs={24} sm={12} md={4} style={{ textAlign: "center" }}>
            <Title level={5} style={{ color: "#FF4500" }}>
              Services Offered
            </Title>
            <Space direction="vertical" size="small">
              <a href="/amazon" className="footer-link">Amazon</a>
              <a href="/website" className="footer-link">Website</a>
              <a href="/franchise" className="footer-link">Franchise</a>
            </Space>
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={12} md={4} style={{ textAlign: "center" }}>
            <Title level={5} style={{ color: "#FF4500" }}>
              Quick Links
            </Title>
            <Space direction="vertical" size="small">
              <a href="/howwework" className="footer-link">How We Work</a>
              <a href="/product" className="footer-link">Products</a>
              <a href="/blogs" className="footer-link">View Blogs</a>
              <a href="/about" className="footer-link">About Us</a>
              <a href="/login" className="footer-link">Admin Login</a>


            </Space>
          </Col>

          {/* Help & Policies */}
          <Col xs={24} sm={12} md={4} style={{ textAlign: "center" }}>
            <Title level={5} style={{ color: "#FF4500" }}>
              Help & Policies
            </Title>
            <Space direction="vertical" size="small">
              <a href="/contact" className="footer-link">Contact Us</a>
              <a href="/privacy" className="footer-link">Privacy Policy</a>
              <a href="/return" className="footer-link">Return Policy</a>
              <a href="/shipping" className="footer-link">Shipping Policy</a>
              <a href="/terms" className="footer-link">Terms & Conditions</a>
            </Space>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row justify="center" style={{ marginTop: "45px", textAlign: "center" }}>
          <Text type="secondary" style={{ fontSize: "14px", color: "#ffffff" }}>
            © {getCurrentYear()} Saumic Craft. All Rights Reserved.
          </Text>
        </Row>
      </div>

      <style jsx>{`
        .footer-link {
          color: #ffffff;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #FF4500; /* Reddish-orange for hover */
        }

        @media (max-width: 767px) {
          .container {
            padding: 20px 15px; /* Smaller padding for mobile */
          }

          .footer-link {
            font-size: 12px; /* Smaller font size for mobile links */
          }

          input {
            width: 100%; /* Full-width input for mobile */
            margin-bottom: 10px; /* Add spacing for stacked input and button */
          }

          button {
            width: 100%; /* Full-width button for mobile */
          }

          .ant-col {
            text-align: center; /* Center content for mobile */
          }
        }
      `}</style>
    </Footer>
  );
}
