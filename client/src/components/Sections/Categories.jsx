// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import styled from 'styled-components';
// import Modal from './Modal';

// import a from '../../assets/a.jpg';
// import b from '../../assets/b.jpg';
// import c from '../../assets/c.jpg';
// import d from '../../assets/d.jpg';
// import e from '../../assets/e.jpg';
// import f from '../../assets/f.jpg';
// import g from '../../assets/g.jpg';
// import h from '../../assets/h.jpg';
// import i from '../../assets/i.jpg';
// import j from '../../assets/j.jpg';

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 1000, // Slow down the sliding speed
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000, // 4000ms = 4 seconds, adjust as needed
//   centerMode: true,
//   centerPadding: '20px',
//   pauseOnHover: true, // Stop sliding on hover
// };

// const ProductCarousel = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [modalImage, setModalImage] = useState('');

//   const openModal = (imageSrc) => {
//     setModalImage(imageSrc);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <>
//       <CarouselWrapper>
//         <HeaderInfo>
//           <h1 className="font40 extraBold" style={{color:"white"}}>Categories</h1>
//           <p className="font13" style={{color:"white"}}>
//             Find high quality products, designed to earn huge margins.
//           </p>
//         </HeaderInfo>
//         <Slider {...settings}>
//           <Slide onClick={() => openModal('https://gallery.saumiccraft.com/wp-content/uploads/2024/03/ROSuJC.png')}>
//             <img
//               src={a}
//               alt="Slide 1"
//             />
//             <ExploreButton>Explore All</ExploreButton>
//           </Slide>
//           <Slide onClick={() => openModal('https://gallery.saumiccraft.com/wp-content/uploads/2024/03/g2aQ06.png')}>
//             <img
//               src={b}
//               alt="Slide 2"
//             />
//             <ExploreButton>Explore All</ExploreButton>
//           </Slide>
//           <Slide onClick={() => openModal('https://gallery.saumiccraft.com/wp-content/uploads/2024/03/mIOnvu.jpg')}>
//             <img
//               src={c}
//               alt="Slide 3"
//             />
//             <ExploreButton>Explore All</ExploreButton>
//           </Slide>
//           <Slide onClick={() => openModal('https://gallery.saumiccraft.com/wp-content/uploads/2024/05/5eEsIe.png')}>
//             <img
//               src={d}
//               alt="Slide 4"
//             />
//             <ExploreButton>Explore All</ExploreButton>
//           </Slide>
//           <Slide onClick={() => openModal('https://gallery.saumiccraft.com/wp-content/uploads/2024/03/mIOnvu.jpg')}>
//             <img
//               src={e}
//               alt="Slide 5"
//             />
//             <ExploreButton>Explore All</ExploreButton>
//           </Slide>
//           <Slide onClick={() => openModal('https://gallery.saumiccraft.com/wp-content/uploads/2024/03/ROSuJC.png')}>
//             <img
//               src={f}
//               alt="Slide 6"
//             />
//             <ExploreButton>Explore All</ExploreButton>
//           </Slide>
//           <Slide onClick={() => openModal('https://gallery.saumiccraft.com/wp-content/uploads/2024/05/5eEsIe.png')}>
//             <img
//               src={g}
//               alt="Slide 7"
//             />
//             <ExploreButton>Explore All</ExploreButton>
//           </Slide>
//           <Slide onClick={() => openModal('https://gallery.saumiccraft.com/wp-content/uploads/2024/03/g2aQ06.png')}>
//             <img
//               src={h}
//               alt="Slide 8"
//             />
//             <ExploreButton>Explore All</ExploreButton>
//           </Slide>
//           <Slide onClick={() => openModal('https://gallery.saumiccraft.com/wp-content/uploads/2024/03/mIOnvu.jpg')}>
//             <img
//               src={i}
//               alt="Slide 9"
//             />
//             <ExploreButton>Explore All</ExploreButton>
//           </Slide>
//         </Slider>
//       </CarouselWrapper>
//       <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={modalImage} />
//     </>
//   );
// };

// export default ProductCarousel;

// const CarouselWrapper = styled.section`
//   width: 100%;
//   padding: 50px 0;
//   background-color: #385B58;
//   position: relative; /* Added to allow z-indexing within this component */
// `;

// const HeaderInfo = styled.div`
//   text-align: center;
//   margin-bottom: 30px;
  
//   .font40 {
//     font-size: 50px; /* Increased font size */
//   }
  
//   .extraBold {
//     font-weight: 800;
//   }
  
//   .font13 {
//     font-size: 18px; /* Increased font size */
//     color: #777;
//   }
// `;

// const Slide = styled.div`
//   padding: 0 10px;
//   position: relative;
//   z-index: 1; /* Ensures the Slide is above other elements */

//   img {
//     width: 100%;
//     height: auto;
//     display: block;
//     transition: transform 0.5s ease, opacity 0.5s ease;
//     opacity: 0.9;
//     z-index: 2; /* Ensure images are above the container */
//   }

//   &:hover img {
//     transform: scale(1.1);
//     opacity: 1;
//     z-index: 3; /* On hover, ensure the image appears on top */
//   }

//   img {
//     animation: fadeIn 1s ease-in;
//   }

//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: translateY(20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
// `;

// const ExploreButton = styled.button`
//   position: absolute;
//   bottom: 10px;
//   left: 50%;
//   transform: translateX(-50%);
//   background-color: rgba(0, 0, 0, 0.5);
//   color: white;
//   border: none;
//   padding: 12px 24px; /* Increased padding for a larger button */
//   font-size: 18px; /* Increased font size */
//   cursor: pointer;
//   opacity: 0;
//   transition: opacity 0.3s ease;
//   z-index: 4; /* Ensure button is on top when visible */

//   &:hover {
//     opacity: 1;
//   }

//   ${Slide}:hover & {
//     opacity: 1;
//   }
// `;
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Dialog } from '@headlessui/react';

const settings = {
  dots: true,
  infinite: true,
  speed: 1200,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024, // For medium screens (tablets, small desktops)
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768, // For small screens (mobile devices)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

const ProductCarousel = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-sky-100 to-white py-16 px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800">Sell from over 85,000+ Unique Handicrafts...</h1>
          <p className="text-lg text-gray-500 mt-4">
            Choose from a Wide Range of Categories and Select the Perfect Products for Your Listings!
          </p>
        </div>
        <div className="w-full">
          <Slider {...settings}>
            {[
             "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/categories/a.webp",
             "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/categories/b.webp", 
             "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/categories/c.webp", 
             "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/categories/d.webp", 
             "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/categories/e.webp", 
             "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/categories/f.webp", 
             "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/categories/g.webp", 
             "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/categories/h.webp", 
             "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/categories/i.webp"
            ].map((image, index) => (
              <div key={index} className="px-3">
                <div className="relative">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 w-full"
                    onClick={() => openModal(image)}
                  />
                  <div className="flex justify-center mt-4">
                    <button
                      className="bg-gray-800 text-white py-2 px-6 rounded-full text-sm font-semibold shadow-md hover:bg-gray-700 focus:outline-none"
                      onClick={() => openModal(image)}
                    >
                      Explore All
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-3xl bg-white rounded-lg p-6 shadow-xl">
            <img src={modalImage} alt="Modal Content" className="w-full h-auto rounded-lg" />
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default ProductCarousel;
