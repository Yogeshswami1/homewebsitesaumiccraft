import React from "react";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import How from "./components/Sections/How/How.jsx";
import TopNavbar from "./components/Nav/TopNavbar.jsx";
import About from "./components/Sections/About/About.jsx";
import Contact from "./components/Sections/Contact/Contact.jsx";
import Dashboard from "./components/Sections/Dashboard/Dashboard.js";
import Login from "./components/Sections/Login/Login.js";
import PrivateRoute from "./PrivateRoute.js";
import Product from "./components/Sections/Product/Product.jsx";

import Main from "./components/Sections/Amazon/Main.jsx";
import Leather from "./components/Sections/Product/Leather.jsx";
import Resin from "./components/Sections/Product/Resin.jsx";
import Aluminium from "./components/Sections/Product/Aluminium.jsx";
import Bronze from "./components/Sections/Product/Bronze.jsx";
import Paintings from "./components/Sections/Product/Paintings.jsx";
import WoodenProducts from "./components/Sections/Product/WoodenProducts.jsx";
import WoodenToys from "./components/Sections/Product/WoodenToys.jsx";
import Marble from "./components/Sections/Product/Marble.jsx";
import Bamboo from "./components/Sections/Product/Bamboo.jsx";
import WallArt from "./components/Sections/Product/WallArt.jsx";
import WallClock from "./components/Sections/Product/WallClock.jsx";
import WallHangings from "./components/Sections/Product/WallHangings.jsx";
import MainWebsite from "./components/Sections/Website/MainWebsite.jsx";
import Blogs from "./components/Sections/Blog/Blog.jsx";
import Franchise from "./components/Sections/Franchise/Franchise.jsx";

export default function App() {
  const location = useLocation(); // Get current location

  // Hide the TopNavbar for specific routes (Dashboard and Login)
  const hideNavbarRoutes = ["/dashboard", "/login"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Conditionally render the TopNavbar */}
      {!shouldHideNavbar && <TopNavbar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/howwework" element={<How />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/amazon" element={<Main />} />
        <Route path="/leather" element={<Leather />} />
        <Route path="/resin" element={<Resin />} />
        <Route path="/aluminium" element={<Aluminium />} />
        <Route path="/bronze" element={<Bronze />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/woodenproducts" element={<WoodenProducts />} />
        <Route path="/woodentoys" element={<WoodenToys />} />
        <Route path="/marble" element={<Marble />} />
        <Route path="/bamboo" element={<Bamboo />} />
        <Route path="/wallart" element={<WallArt />} />
        <Route path="/wallclock" element={<WallClock />} />
        <Route path="/wallhangings" element={<WallHangings />} />
        <Route path="/website" element={<MainWebsite />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/franchise" element={<Franchise />} />
        

        {/* Protect the dashboard route */}
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
        
        {/* Public login route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}