// import React from "react";
// // Sections
// import TopNavbar from "../components/Nav/TopNavbar";
// import Header from "../components/Sections/Header";
// import Strip from "../components/Sections/Strip";
// import Projects from "../components/Sections/Projects";
// import Blog from "../components/Sections/Blog";
// import Services from "../components/Sections/Services";
// import Contact from "../components/Sections/Contact/Contact";
// import Footer from "../components/Sections/Footer"
// import Why from "../components/Sections/Why";
// import Margins from "../components/Sections/Margins";
// import Categories from "../components/Sections/Categories";
// import Manufacturing from "../components/Sections/Manufacturing";
// import Product from "../components/Sections/Product";
// import Review from "../components/Sections/Review";
// import Case from "../components/Sections/Case";
// import Whatsapp from "../components/Whatsapp";
// export default function Landing() {
//   return (
//     <>
//       {/* <TopNavbar /> */}
//       <Header />
//       <Strip />
//       {/* <Projects /> */}
//       <Services />
//       <Categories/>
//       <Margins/>
//       <Product/>
//       <Why/>
//       <Review/>
//       <Case/>
//       <Manufacturing/>
//       {/* <Contact /> */}
//       {/* <Blog /> */}
//       <Footer />
//       <Whatsapp/>
//     </>
//   );
// }


import React, { Suspense, lazy } from "react";


// Lazy load components
const TopNavbar = lazy(() => import("../components/Nav/TopNavbar"));
const Header = lazy(() => import("../components/Sections/Header"));
const Strip = lazy(() => import("../components/Sections/Strip"));
const Projects = lazy(() => import("../components/Sections/Projects"));
const Blog = lazy(() => import("../components/Sections/Blog"));
const Services = lazy(() => import("../components/Sections/Services"));
const Contact = lazy(() => import("../components/Sections/Contact/Contact"));
const Footer = lazy(() => import("../components/Sections/Footer"));
const Why = lazy(() => import("../components/Sections/Why"));
const Margins = lazy(() => import("../components/Sections/Margins"));
const Categories = lazy(() => import("../components/Sections/Categories"));
const Manufacturing = lazy(() => import("../components/Sections/Manufacturing"));
const Product = lazy(() => import("../components/Sections/Product"));
const Review = lazy(() => import("../components/Sections/Review"));
const Case = lazy(() => import("../components/Sections/Case"));
const What = lazy(() => import("../components/Sections/What"));
const Whatsapp = lazy(() => import("../components/Whatsapp"));
const FAQ = lazy(() => import("../components/Sections/FAQ"));


export default function Landing() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Strip />
        <What />
        <Services />
        <Categories />
        <Margins />
        
        
        <Why />
        <Case />
        <Review />
        <Product />
        <Manufacturing />
        <FAQ/>
        <Footer />
        <Whatsapp />
      </Suspense>
    </>
  );
}





