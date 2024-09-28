import React from "react";
import { Button } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons"; // Import WhatsApp icon from Ant Design

// Custom styled component for the floating button with animation
const FloatingButton = {
  position: "fixed",
  bottom: "30px",   // Position from the bottom
  right: "30px",    // Position from the right (changed from left to right)
  backgroundColor: "#25D366", // WhatsApp green color
  color: "#fff",    // White color for the icon
  borderRadius: "50%", // Circular shape
  width: "50px",    // Button size
  height: "50px",   // Button size
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow effect
  zIndex: 1000,    // High z-index to ensure it's on top
  animation: "pulsate 1.5s infinite", // Pulsating animation
  transition: "transform 0.2s ease-in-out",
};

// Define keyframes for the pulsating animation
const styles = `
@keyframes pulsate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
`;

const App = () => {
  const handleClick = () => {
    window.open("https://wa.me/1234567890", "_blank"); // Replace with your WhatsApp number or link
  };

  return (
    <>
      {/* Inject styles for keyframes */}
      <style>{styles}</style>
      <Button
        style={FloatingButton}
        icon={<WhatsAppOutlined style={{ fontSize: "33px" }} />} // WhatsApp icon with increased size
        type="primary"
        shape="circle"
        onClick={handleClick}
      />
    </>
  );
};

export default App;
