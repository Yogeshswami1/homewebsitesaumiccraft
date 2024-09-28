// import React from 'react';
// import { Link } from 'react-router-dom';
// import './ProductGrid.css';
// import Mid from './Mid';

// const Gallery = () => {
//   const photos = [
//     { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/06/HK1HBA-1200x1200.jpg', link: '/link1' }, 
//     { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/05/G0jpZa-1200x1200.jpg', link: '/link2' },
//     { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/03/YtJY9j-1200x1200.jpg', link: '/link3' },
//     { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/05/eoc4QV-1200x1200.jpg', link: '/link4' },
//     { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/03/DcLJ9d-1200x1200.jpg', link: '/link5' },
//     { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/03/fm7Lfv-1200x1200.jpg', link: '/link6' },
//     { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/06/HuNKFb.jpg', link: '/link7' },
//     { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/03/g2aQ06.png', link: '/link8' },
//     { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/03/uoasuL-2048x2048.jpg', link: '/link9' },
//     { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/06/a8Fprh.jpg', link: '/link10' },
//     { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/07/6YtTrj.jpg', link: '/link11' },
//     { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/08/7oulIc.jpg', link: '/link12' },
//     { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/07/G5q0yH.jpg', link: '/link13' },
//   ];

//   return (
//     <> 
  
//     <div className="gallery" style={{paddingTop: '5rem'}}>
//       {/* First Row: 3 photos */}
//       <div className="row row-3">
//         {photos.slice(0, 3).map((photo, index) => (
//           <div className="photo-container" key={index}>
//             <img src={photo.src} alt={`Photo ${index + 1}`} />
//             <Link to={photo.link} className="hover-btn">Show</Link>
//           </div>
//         ))}
//       </div>

//       {/* Second Row: 1 big photo on the right, 2 small photos on the left */}
//      <Mid/>

//       {/* Third Row: 4 photos */}
//       <div className="row row-4">
//         {photos.slice(3, 7).map((photo, index) => (
//           <div className="photo-container" key={index}>
//             <img src={photo.src} alt={`Photo ${index + 7}`} />
//             <Link to={photo.link} className="hover-btn">Show</Link>
//           </div>
//         ))}
//       </div>

//       {/* Fourth Row: 4 photos */}
//       <div className="row row-4">
//         {photos.slice(7, 10).map((photo, index) => (
//           <div className="photo-container" key={index}>
//             <img src={photo.src} alt={`Photo ${index + 11}`} />
//             <Link to={photo.link} className="hover-btn">Show</Link>
//           </div>
//         ))}
//       </div>

//       {/* Heading and 3 photos at the bottom */}
//       <h2 className="section-heading">Additional Section</h2>
//       <div className="row row-3">
//         {photos.slice(10, 13).map((photo, index) => (
//           <div className="photo-container" key={index}>
//             <img src={photo.src} alt={`Photo ${index + 10}`} />
//             <Link to={photo.link} className="hover-btn">Show</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default Gallery;


import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductGrid.css';
import Mid from './Mid';
import Footer from '../Footer';
import PortraitCarousel from './PortraitCarousel';
import VideoCarousal from './VideoCarousal';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // This scrolls to the top on page load
  }, []);
  const photos = [
    { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/06/HK1HBA-1200x1200.jpg', link: '/leather', title: 'Leather Diary' }, 
    { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/05/G0jpZa-1200x1200.jpg', link: '/resin', title: 'Resin' },
    { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/03/YtJY9j-1200x1200.jpg', link: '/aluminium', title: 'Aluminium' },
    { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/06/HuNKFb.jpg', link: '/bamboo', title: 'Bamboo Products' },
    { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/03/g2aQ06.png', link: '/wallart', title: 'Wall Art' },
    { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/03/uoasuL-2048x2048.jpg', link: '/wallclock', title: 'Wall Clock' },
    { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/06/a8Fprh.jpg', link: '/wallhangings', title: 'Wall Hangings' },
    // { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/03/g2aQ06.png', link: '/link8', title: 'Photo 8' },
    // { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/03/uoasuL-2048x2048.jpg', link: '/link9', title: 'Photo 9' },
    // { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/06/a8Fprh.jpg', link: '/link10', title: 'Photo 10' },
    // { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/07/6YtTrj.jpg', link: '/link11', title: 'Photo 11' },
    // { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/08/7oulIc.jpg', link: '/link12', title: 'Photo 12' },
    // { src: 'https://gallery.saumiccraft.com/wp-content/uploads/2024/07/G5q0yH.jpg', link: '/link13', title: 'Photo 13' },
  ];

  return (
    <> 
  
    <div className="gallery" style={{paddingTop: '5rem'}}>
      {/* First Row: 3 photos */}
      <div className="row row-3">
        {photos.slice(0, 3).map((photo, index) => (
          <div className="photo-container" key={index}>
            <img src={photo.src} alt={`Photo ${index + 1}`} />
            <div className="photo-title">{photo.title}</div>
            <Link to={photo.link} className="hover-btn">Show</Link>
          </div>
        ))}
      </div>

      {/* Second Row: 1 big photo on the right, 2 small photos on the left */}
     <Mid/>

      {/* Third Row: 4 photos */}
      <div className="row row-4">
        {photos.slice(3, 7).map((photo, index) => (
          <div className="photo-container" key={index}>
            <img src={photo.src} alt={`Photo ${index + 7}`} />
            <div className="photo-title">{photo.title}</div>
            <Link to={photo.link} className="hover-btn">Show</Link>
          </div>
        ))}
      </div>

      {/* Fourth Row: 4 photos */}
      <div className="row row-4">
        {photos.slice(7, 10).map((photo, index) => (
          <div className="photo-container" key={index}>
            <img src={photo.src} alt={`Photo ${index + 11}`} />
            <div className="photo-title">{photo.title}</div>
            <Link to={photo.link} className="hover-btn">Show</Link>
          </div>
        ))}
      </div>

      {/* Heading and 3 photos at the bottom */}
      {/* <h2 className="section-heading">Newest Arrival</h2>
      <div className="row row-3">
        {photos.slice(10, 13).map((photo, index) => (
          <div className="photo-container" key={index}>
            <img src={photo.src} alt={`Photo ${index + 10}`} />
            <div className="photo-title">{photo.title}</div>
            <Link to={photo.link} className="hover-btn">Show</Link>
          </div>
        ))}
      </div> */}
    </div>
    <VideoCarousal/>
    <PortraitCarousel/>
    <Footer/>
    </>
  );
};

export default Gallery;
