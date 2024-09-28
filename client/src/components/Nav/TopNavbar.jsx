import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll"; // Renaming for in-page scrolling
import { NavLink, useLocation, useNavigate } from "react-router-dom"; // Importing NavLink, useLocation, useNavigate for routing
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import logo from "../../assets/logo.png";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  const location = useLocation(); // Get current route location
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [y]);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      // If already on home page, scroll to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If not on home page, redirect to home page
      navigate("/");
    }
  };

  const handleScrollNavClick = (to) => {
    if (location.pathname === "/") {
      // If already on home page, just scroll to the section
      document.getElementById(to).scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home page first, then scroll to section
      navigate("/", { state: { scrollTo: to } });
    }
  };

  useEffect(() => {
    // Scroll to the section if state.scrollTo is set
    if (location.state?.scrollTo) {
      const scrollTo = location.state.scrollTo;
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
      // Clean up the state after scrolling
      navigate(location.pathname, { state: {} });
    }
  }, [location, navigate]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          {/* Logo Link to Home or Scroll */}
          <div className="pointer flexNullCenter" onClick={handleLogoClick}>
            <img src={logo} width={100} alt="Logo" />
          </div>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
          <NavItem className="semiBold font16 pointer">
              {/* NavLink for "How We Work" */}
              <StyledNavLink exact to="/" activeClassName="active" style={{ padding: "5px 20px" }}>
                Home
              </StyledNavLink>
            </NavItem>
            <NavItem className="semiBold font16 pointer">
              {/* NavLink for "How We Work" */}
              <StyledNavLink exact to="/howwework" activeClassName="active" style={{ padding: "5px 10px" }}>
                How We Work
              </StyledNavLink>
            </NavItem>
            <NavItem className="semiBold font16 pointer" style={{ padding: "5px 10px" }}>
            <StyledNavLink exact to="/product" activeClassName="active" style={{ padding: "5px 10px" }}>
                Products
              </StyledNavLink>
            </NavItem>
            <NavItem className="semiBold font16 pointer" style={{ padding: "5px 10px" }}>
              <StyledScrollNavLink onClick={() => handleScrollNavClick("services")}>
                Services
              </StyledScrollNavLink>
            </NavItem>
            <NavItem className="semiBold font16 pointer">
              {/* NavLink for "blog" */}
              <StyledNavLink exact to="/blogs" activeClassName="active" style={{ padding: "5px 10px" }}>
                Blogs
              </StyledNavLink>
            </NavItem>
            <NavItem className="semiBold font16 pointer" style={{ padding: "5px 10px" }}>
              <StyledScrollNavLink onClick={() => handleScrollNavClick("review")}>
                Success Stories
              </StyledScrollNavLink>
            </NavItem>
            <NavItem className="semiBold font16 pointer">
              {/* NavLink for "Contact Us" */}
              <StyledNavLink exact to="/contact" activeClassName="active" style={{ padding: "5px 10px" }}>
                Contact Us
              </StyledNavLink>
            </NavItem>
            <NavItem className="semiBold font16 pointer">
              {/* NavLink for "About Us" */}
              <StyledNavLink exact to="/about" activeClassName="active" style={{ padding: "5px 10px" }}>
                About Us
              </StyledNavLink>
            </NavItem>
          </UlWrapper>
          {/* <UlWrapperRight className="flexNullCenter">
            <NavItem className="semiBold font16 pointer flexCenter">
              <a
                href="/"
                className="radius8 lightBg"
                style={{
                  padding: "8px 12px",
                  backgroundColor: "orange",
                  color: "white",
                  transition: "background-color 0.3s ease"
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff4500")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "orange")}
              >
                Start Business
              </a>
            </NavItem>
          </UlWrapperRight> */}
          <UlWrapperRight className="flexNullCenter">
  <NavItem className="semiBold font16 pointer flexCenter">
    <a
      href="/"
      style={{
        padding: "8px 12px",
        background: "linear-gradient(145deg, #e0f0ff, #c0d9e5)", // Light bluish chrome gradient
        border: "1px solid #a0b0c0", // Light bluish chrome border
        borderRadius: "8px",
        color: "#000", // Black text
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.background = "linear-gradient(145deg, #c0e0ff, #a0b0c0)"; // Lighter bluish chrome on hover
        e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)"; // Add shadow on hover
      }}
      onMouseLeave={(e) => {
        e.target.style.background = "linear-gradient(145deg, #e0f0ff, #c0d9e5)"; // Default bluish chrome gradient
        e.target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)"; // Default shadow
      }}
    >
      Start Business
    </a>
  </NavItem>
</UlWrapperRight>

        </NavInner>
      </Wrapper>
    </>
  );
}

// Styled Components
const Wrapper = styled.nav`            
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(500px);
  transition: height 0.3s ease;
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
`;

const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;

const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;

const NavItem = styled.li`
  .pointer:hover &,
  .pointer.active & {
    color: orange;
  }
`;

// Styled ScrollLink
const StyledScrollNavLink = styled.div`
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #FF4500;
  }

  &.active {
    color: #FF4500;
    border-bottom: 2px solid #FF4500;
  }
`;

// Styled NavLink for routing
const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: #FF4500;
  }

  &.active {
    color: #FF4500;
    border-bottom: 2px solid #FF4500;
  }
`;
