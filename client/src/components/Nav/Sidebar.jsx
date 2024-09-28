import React from "react";
import styled from "styled-components";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import logo from "../../assets/logo.png";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (to, type = "section") => {
    toggleSidebar(false);
    if (type === "section") {
      if (location.pathname === "/") {
        document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { state: { scrollTo: to } });
      }
    } else {
      navigate(to);
    }
  };

  return (
    <Wrapper sidebarOpen={sidebarOpen}>
      <SidebarHeader>
        <LogoContainer>
          <img src={logo} alt="Logo" width={120} />
        </LogoContainer>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)}>
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <MenuList>
        <MenuItem onClick={() => handleNavClick("howwework", "page")}>
          How We Work
        </MenuItem>
        <MenuItem onClick={() => handleNavClick("products")}>
          Products
        </MenuItem>
        <MenuItem onClick={() => handleNavClick("services")}>
          Services
        </MenuItem>
        <MenuItem onClick={() => handleNavClick("review")}>
          Success Stories
        </MenuItem>
        <MenuItem onClick={() => handleNavClick("/contact", "page")}>
          Contact Us
        </MenuItem>
        <MenuItem onClick={() => handleNavClick("/about", "page")}>
          About Us
        </MenuItem>
      </MenuList>

      <ButtonGroup>
        <StyledNavLink to="/login">
          Log in
        </StyledNavLink>
        <StyledNavLink to="/get-started" className="primary-btn">
          Get Started
        </StyledNavLink>
      </ButtonGroup>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.nav`
  width: 350px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${(props) => (props.sidebarOpen ? "0" : "-350px")};
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  z-index: 1000;

  @media (max-width: 400px) {
    width: 100%;
    right: ${(props) => (props.sidebarOpen ? "0" : "-100%")};
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 20px 0;
  margin: 0;
`;

const MenuItem = styled.li`
  font-size: 18px;
  margin: 15px 0;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #FF4500;
    color: white;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 20px 0;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &.primary-btn {
    background-color: #FF4500;
    color: white;
  }

  &:hover {
    background-color: #FF4500;
    color: white;
  }

  &.active {
    border-bottom: 2px solid #FF4500;
  }
`;
