// import React from "react";
// import styled from "styled-components";
// import Dispatch from "../../assets/dispatch.png";
// import trolly from "../../assets/trolly.png";
// import invest from "../../assets/invest.png";
// import Map from "../../assets/map.png";
// import point from "../../assets/point.png";
// import bag from "../../assets/bag.png";

// export default function Services() {
//   return (
//     <Wrapper id="services">
//       <Marquee>
//         <TextStrip>
//           <img src={Dispatch} width={30} height={30} alt="Dispatch" />
//           &nbsp; DIRECT DISPATCHING FROM OUR WAREHOUSE,
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <img src={trolly} width={30} height={30} alt="Trolly" />
//           &nbsp; NO PRE-PURCHASING,
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <img src={invest} width={30} height={30} alt="Investment" />
//           &nbsp; 0 INVESTMENT BUSINESS,
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <img src={Map} width={30} height={30} alt="Map" />
//           &nbsp; SELL NATIONALLY & INTERNATIONALLY,
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <img src={point} width={30} height={30} alt="Products" />
//           &nbsp; 85,000+ PRODUCTS,
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           <img src={bag} width={30} height={30} alt="Bag" />
//           &nbsp; 135 COUNTRIES COVERED
//         </TextStrip>
//       </Marquee>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.section`
//   width: 100%;
//   overflow: hidden;
//   background-color: #f0f0f0; /* Optional background for better visibility */
//   padding: 10px 0; /* Adds some padding for better appearance */
// `;

// const Marquee = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   overflow: hidden;
//   position: relative;
// `;

// const TextStrip = styled.div`
//   display: inline-block;
//   white-space: nowrap;
//   font-size: 24px; /* Increase the font size for better visibility */
//   color: #333; /* Text color */
//   font-family: 'Poppins', sans-serif; /* Use a cool, beautiful font */
//   animation: marquee 50s linear infinite;

//   img {
//     vertical-align: middle; /* Align images with the text */
//     // margin-bottom: -4px; /* Fine-tune the vertical alignment */
//   }

//   &:hover {
//     animation-play-state: paused; /* Pauses the animation on hover for readability */
//   }

//   @keyframes marquee {
//     0% {
//       transform: translateX(100%); /* Start position off the screen to the right */
//     }
//     100% {
//       transform: translateX(-100%); /* End position off the screen to the left */
//     }
//   }
// `;
import React from "react";
import Dispatch from "../../assets/dispatch.webp";
import Trolly from "../../assets/trolly.webp";
import Invest from "../../assets/invest.webp";
import Map from "../../assets/map.webp";
import Point from "../../assets/point.webp";
import Bag from "../../assets/bag.webp";

export default function Services() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100 py-4" id="services">
      <div className="relative flex overflow-hidden items-center">
        {/* Apply the animate-marquee class to the scrolling content */}
        <div className="animate-marquee text-base font-medium text-gray-700">
          <ContentBlock />
        </div>
      </div>
    </section>
  );
}

function ContentBlock() {
  return (
    <div className="inline-flex items-center space-x-16 px-4">
      <ServiceItem icon={Dispatch} text="DIRECT DISPATCHING FROM OUR WAREHOUSE" />
      <ServiceItem icon={Trolly} text="NO PRE-PURCHASING" />
      <ServiceItem icon={Invest} text="0 INVESTMENT BUSINESS" />
      <ServiceItem icon={Map} text="SELL NATIONALLY & INTERNATIONALLY" />
      <ServiceItem icon={Bag} text="85,000+ PRODUCTS" />
      <ServiceItem icon={Point} text="135 COUNTRIES COVERED" />
    </div>
  );
}

function ServiceItem({ icon, text }) {
  return (
    <div className="flex items-center space-x-8 transform transition-transform duration-300 hover:scale-105">
      <img src={icon} width={30} height={30} alt={text} className="drop-shadow-lg" />
      <span className="text-gray-900 text-base font-medium hover:text-blue-500 transition-colors duration-300">{text}</span>
    </div>
  );
}
