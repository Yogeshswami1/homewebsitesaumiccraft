// import React from 'react';
// import { Menu } from 'antd';
// import { Link as RouterLink } from 'react-router-dom'; // Using for 'Page Scrolls'
// import { Link as ScrollLink } from 'react-scroll'; // Using for other links
// import logo from '../../../assets/logo.png';


// const NavBar = () => {
//   // Inline styles for the dock with a metallic look and logo
//   const navBarStyle = {
//     position: 'fixed',
//     top: '20px',
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: '80%',
//     background: 'linear-gradient(145deg, #cfcfcf, #e9e9e9)', // Metallic gradient
//     border: '1px solid #c1c1c1',
//     borderRadius: '30px',
//     padding: '10px 20px',
//     boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.3)', // Outer and inner shadow for metallic feel
//     zIndex: 1000,
//     display: 'flex',
//     alignItems: 'center',
//   };

//   const logoStyle = {
//     height: '60px',
//     width: '80px',
//     marginRight: '20px',
//   };

//   const menuStyle = {
//     backgroundColor: 'transparent',
//     border: 'none',
//     display: 'flex',
//     justifyContent: 'space-around',
//     flex: 1, // Ensures the menu items take up the remaining space
//     alignItems: 'center',
//   };

//   const menuItemStyle = {
//     fontWeight: 'bold',
//     color: '#333',
//     fontSize: '16px',
//     padding: '0px 50px',
//     transition: 'all 0.3s ease',
//     backgroundColor: 'transparent',
//     borderRadius: '10px',
//     boxShadow: 'none',
//   };

//   const menuItemHoverStyle = {
//     transform: 'scale(1.1)',
//     background: 'linear-gradient(145deg, #d1d1d1, #f0f0f0)', // Metallic hover effect
//     color: '#000',
//   };

//   return (
//     <div style={navBarStyle}>
//       {/* Logo */}
//       <img
//         src={logo} // Replace with your actual logo path
//         alt="Logo"
//         style={logoStyle}
//       />

//       {/* Menu */}
//       <Menu mode="horizontal" style={menuStyle}>
//         {/* Page Scrolls: Using react-router-dom Link */}
//         <Menu.Item
//           key="1"
//           style={menuItemStyle}
//           onMouseEnter={(e) => {
//             if (e.currentTarget) {
//               e.currentTarget.style.transform = 'scale(1.1)';
//               e.currentTarget.style.background = menuItemHoverStyle.background;
//             }
//           }}
//           onMouseLeave={(e) => {
//             if (e.currentTarget) {
//               e.currentTarget.style.transform = 'scale(1)';
//               e.currentTarget.style.background = 'transparent';
//             }
//           }}
//         >
//           <RouterLink to="/">
//             Home
//           </RouterLink>
//         </Menu.Item>

//         {/* Other links using react-scroll */}
//         <Menu.Item
//           key="2"
//           style={menuItemStyle}
//           onMouseEnter={(e) => {
//             if (e.currentTarget) {
//               e.currentTarget.style.transform = 'scale(1.1)';
//               e.currentTarget.style.background = menuItemHoverStyle.background;
//             }
//           }}
//           onMouseLeave={(e) => {
//             if (e.currentTarget) {
//               e.currentTarget.style.transform = 'scale(1)';
//               e.currentTarget.style.background = 'transparent';
//             }
//           }}
//         >
//           <ScrollLink to="our-procedure" smooth={true} duration={500}>
//             Our Procedure
//           </ScrollLink>
//         </Menu.Item>

//         <Menu.Item
//           key="3"
//           style={menuItemStyle}
//           onMouseEnter={(e) => {
//             if (e.currentTarget) {
//               e.currentTarget.style.transform = 'scale(1.1)';
//               e.currentTarget.style.background = menuItemHoverStyle.background;
//             }
//           }}
//           onMouseLeave={(e) => {
//             if (e.currentTarget) {
//               e.currentTarget.style.transform = 'scale(1)';
//               e.currentTarget.style.background = 'transparent';
//             }
//           }}
//         >
//           <ScrollLink to="product-margins" smooth={true} duration={500}>
//             Product and Margins
//           </ScrollLink>
//         </Menu.Item>

//         <Menu.Item
//           key="4"
//           style={menuItemStyle}
//           onMouseEnter={(e) => {
//             if (e.currentTarget) {
//               e.currentTarget.style.transform = 'scale(1.1)';
//               e.currentTarget.style.background = menuItemHoverStyle.background;
//             }
//           }}
//           onMouseLeave={(e) => {
//             if (e.currentTarget) {
//               e.currentTarget.style.transform = 'scale(1)';
//               e.currentTarget.style.background = 'transparent';
//             }
//           }}
//         >
//           <ScrollLink to="case-study" smooth={true} duration={500}>
//             Case Study
//           </ScrollLink>
//         </Menu.Item>

//         <Menu.Item
//           key="5"
//           style={menuItemStyle}
//           onMouseEnter={(e) => {
//             if (e.currentTarget) {
//               e.currentTarget.style.transform = 'scale(1.1)';
//               e.currentTarget.style.background = menuItemHoverStyle.background;
//             }
//           }}
//           onMouseLeave={(e) => {
//             if (e.currentTarget) {
//               e.currentTarget.style.transform = 'scale(1)';
//               e.currentTarget.style.background = 'transparent';
//             }
//           }}
//         >
//           <ScrollLink to="add-on" smooth={true} duration={500}>
//             Add-ons
//           </ScrollLink>
//         </Menu.Item>
//       </Menu>
//     </div>
//   );
// };

// export default NavBar;


import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link as RouterLink } from 'react-router-dom'; // Using for 'Page Scrolls'
import { Link as ScrollLink } from 'react-scroll'; // Using for other links
import { LeftOutlined, RightOutlined } from '@ant-design/icons';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track whether the navbar is open

  // Navbar styles
  const navBarStyle = {
    position: 'fixed',
    top: '50%',
    left: isOpen ? '0' : '-220px', // Move navbar out of view when closed
    transform: 'translateY(-50%)',
    width: '220px',
    height: 'auto',
    background: 'linear-gradient(145deg, #f0f0f0, #d1d1d1)', // Subtle metallic gradient
    borderRight: '2px solid #c1c1c1',
    boxShadow: '3px 0 15px rgba(0, 0, 0, 0.2)', // Slight shadow for depth
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px 0',
    transition: 'left 0.3s ease', // Smooth transition for sliding
    overflow: 'visible',
  };

  const toggleButtonStyle = {
    position: 'fixed',
    top: '50%',
    left: isOpen ? '210px' : '10px', // Adjust based on whether the navbar is open
    transform: 'translateY(-50%)',
    width: '30px',
    height: '30px',
    background: '#d1d1d1',
    borderRadius: '50%',
    boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.3)', // Small toggle button
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1100,
  };

  const menuStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  };

  const menuItemStyle = {
    fontWeight: 'bold',
    color: '#333',
    fontSize: '18px',
    padding: '10px 10px', // Adjust padding to prevent text from being cut off
    width: '100%',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    backgroundColor: 'transparent',
    borderRadius: '10px',
    margin: '10px 0',
    overflow: 'hidden', // Prevent text overflow
  };

  const menuItemHoverStyle = {
    transform: 'scale(1.05)',
    background: 'linear-gradient(145deg, #e1e1e1, #ffffff)', // Metallic hover effect
    color: '#000',
  };

  return (
    <>
      {/* Toggle Button */}
      <div
        style={toggleButtonStyle}
        onClick={() => setIsOpen(!isOpen)} // Toggle the navbar's open state
        onMouseEnter={() => setIsOpen(true)} // Hover effect to open the navbar
        onMouseLeave={() => setIsOpen(false)} // Close when hovering out
      >
        {isOpen ? <LeftOutlined/> : <RightOutlined/>}
      </div>

      {/* Navbar */}
      <div
        style={navBarStyle}
        onMouseEnter={() => setIsOpen(true)} // Show navbar on hover
        onMouseLeave={() => setIsOpen(false)} // Hide when hovering out
      >
        <Menu mode="vertical" style={menuStyle}>
          {/* Page Scrolls: Using react-router-dom Link */}
          <Menu.Item
            key="1"
            style={menuItemStyle}
            onMouseEnter={(e) => {
              if (e.currentTarget) {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.background = menuItemHoverStyle.background;
              }
            }}
            onMouseLeave={(e) => {
              if (e.currentTarget) {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            <RouterLink to="/">Home</RouterLink>
          </Menu.Item>

          {/* Other links using react-scroll */}
          <Menu.Item
            key="2"
            style={menuItemStyle}
            onMouseEnter={(e) => {
              if (e.currentTarget) {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.background = menuItemHoverStyle.background;
              }
            }}
            onMouseLeave={(e) => {
              if (e.currentTarget) {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            <ScrollLink to="ourprocedure" smooth={true} duration={500}>
              Our Procedure
            </ScrollLink>
          </Menu.Item>

          <Menu.Item
            key="3"
            style={menuItemStyle}
            onMouseEnter={(e) => {
              if (e.currentTarget) {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.background = menuItemHoverStyle.background;
              }
            }}
            onMouseLeave={(e) => {
              if (e.currentTarget) {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            <ScrollLink to="photo" smooth={true} duration={500}>
              Product and Margins
            </ScrollLink>
          </Menu.Item>

          <Menu.Item
            key="4"
            style={menuItemStyle}
            onMouseEnter={(e) => {
              if (e.currentTarget) {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.background = menuItemHoverStyle.background;
              }
            }}
            onMouseLeave={(e) => {
              if (e.currentTarget) {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            <ScrollLink to="case" smooth={true} duration={500}>
              Case Study
            </ScrollLink>
          </Menu.Item>

          <Menu.Item
            key="5"
            style={menuItemStyle}
            onMouseEnter={(e) => {
              if (e.currentTarget) {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.background = menuItemHoverStyle.background;
              }
            }}
            onMouseLeave={(e) => {
              if (e.currentTarget) {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            <ScrollLink to="add-on" smooth={true} duration={500}>
              Add-ons
            </ScrollLink>
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default NavBar;
