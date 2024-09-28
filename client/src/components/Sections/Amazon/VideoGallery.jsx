// import React, { useState } from 'react';
// import { Card } from 'antd';
// import './VideoGallery.css';

// const VideoGallery = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   const linkStyle = {
//     color: isHovered ? 'darkblue' : 'blue',
//     textDecoration: isHovered ? 'underline' : 'none',
//     transition: 'color 0.3s ease, text-decoration 0.3s ease',
//     display: 'inline', // Ensures the hover effect is only on the text
//   };


//   const videos = [
//     {
//       videoUrl: "https://www.youtube.com/embed/PYvF44_fjXk",
//       title: "Start Your Profitable Online Handicraft Business with Saumic Craft – No Upfront Inventory Needed",
//       description: "Start your online business with Saumic Craft, a leading manufacturer of unique handicrafts like marble and wooden items. With over 85,000 products available, you can earn profits without upfront purchases or dead stock. Our dropshipping model lets you sell high-demand products domestically and internationally, supported by end-to-end assistance for Amazon account setup and order dispatching. Join us to explore this exciting opportunity!",
//     },
//     {
//       videoUrl: "https://www.youtube.com/embed/leeYFJCwkcU",
//       title: "See How Sellers Earn Over 10 Lakhs in 3 Months with Saumic Craft’s Handicrafts – No Upfront Inventory!",
//       description: "Before we dive into the process, let’s look at some successful accounts. Account RTC earned over ₹10 lakh in three months, while Taar World Cup also exceeded ₹10 lakh in India. We have around 70 similar accounts. On Amazon.com, our sellers have achieved impressive sales, like the Radha Krishna order for $262 with just ₹12 cost difference. Best of all, no upfront purchases are needed; orders ship directly from our warehouse. Stay tuned for more!",
//     },
//     {
//       videoUrl: "https://www.youtube.com/embed/bKAGiYmZ-qw",
//       title: "Effortless Amazon Account Creation & Product Listing with Saumic Craft – Start Selling Globally",
//       description: "We handle your Amazon account setup for sales in India and internationally, listing 600 unique products with tailored listings for both platforms. Enjoy high-quality images and videos to boost visibility and conversions. We optimize your listings using top tools and integrate your Facebook and Instagram for increased traffic. Start selling effortlessly with our full support!",
//     },
//     {
//       videoUrl: "https://www.youtube.com/embed/df6_youaqdI",
//       title: "Unlock the Benefits of Amazon Dropshipping with Saumic Craft – Earn High Margins Without Inventory Risk",
//       description: "Launch your Amazon dropshipping business with no upfront purchases or dead stock! Enjoy margins up to ₹12,000 per product and sell high-demand items without needing warehouse space or staff. We provide HD images, full support, and training. Start your journey today!",
//     },
//     {
//       videoUrl: "https://www.youtube.com/embed/7u82DK20Q0w",
//       title: "Start Your Amazon Dropshipping Business for Just ₹10,000 – Limited-Time Offer!",
//       description: "Ready to start your Amazon dropshipping business? Account setup costs ₹6,000, listing 600 products is ₹30,000, and photoshoots add ₹60,000—totaling ₹96,000. But for a limited time, join our model for just ₹10,000 plus GST. Sell from home in India and internationally. Click the link below—limited seats available!",
//     },
//   ];

//   return (
//     <Card bordered={true} className="video-gallery-card" style={{ paddingTop: '10rem' }} name="ourprocedure">
//       <div className="video-gallery">
//         {videos.map((video, index) => (
//           <div key={index} className="video-info-container">
//             <div className="video-column">
//               <iframe
//                 src={video.videoUrl}
//                 width="100%"
//                 height="300px"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 title={`Video ${index + 1}`}
//                 className="video-frame"
//               ></iframe>
//             </div>
//             <div className="info-column">
//               <h2 style={{fontSize: '22px', fontWeight: 'bold', color: '#333'}}>{video.title}</h2>
              
//               {/* <h3 style={{fontSize: '18px', fontWeight: 'normal', color: '#666'}}>{video.subtitle}</h3> */}
//               <p style={{fontSize: '16px'}}>{video.description}</p>
//               &nbsp;
//               <span
//       style={linkStyle}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <a
//         href="https://www.google.co.in"
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{ color: 'inherit', textDecoration: 'inherit' }} // Inherit color and decoration
//       >
//         Click Here to Enroll
//       </a>
//     </span> </div>
//           </div>
//         ))}
//       </div>
//     </Card>
//   );
// };

// export default VideoGallery;



import React, { useState } from 'react';
import { Card, Button } from 'antd';
import './VideoGallery.css';

const VideoGallery = () => {
  const [isHovered, setIsHovered] = useState(false);

  const linkStyle = {
    color: isHovered ? 'blue' : '#004EFF',
    textDecoration: isHovered ? 'underline' : 'none',
    transition: 'color 0.3s ease, text-decoration 0.3s ease',
    display: 'inline', // Ensures the hover effect is only on the text
  };

  const videos = [
    {
      videoUrl: "https://www.youtube.com/embed/PYvF44_fjXk",
      title: "Start Your Profitable Online Handicraft Business with Saumic Craft – No Upfront Inventory Needed",
      description: "Start your online business with Saumic Craft, a leading manufacturer of unique handicrafts like marble and wooden items. With over 85,000 products available, you can earn profits without upfront purchases or dead stock. Our dropshipping model lets you sell high-demand products domestically and internationally, supported by end-to-end assistance for Amazon account setup and order dispatching. Join us to explore this exciting opportunity!",
    },
    {
      videoUrl: "https://www.youtube.com/embed/leeYFJCwkcU",
      title: "See How Sellers Earn Over 10 Lakhs in 3 Months with Saumic Craft’s Handicrafts – No Upfront Inventory!",
      description: "Before we dive into the process, let’s look at some successful accounts. Account RTC earned over ₹10 lakh in three months, while Taar World Cup also exceeded ₹10 lakh in India. We have around 70 similar accounts. On Amazon.com, our sellers have achieved impressive sales, like the Radha Krishna order for $262 with just ₹12 cost difference. Best of all, no upfront purchases are needed; orders ship directly from our warehouse. Stay tuned for more!",
    },
    {
      videoUrl: "https://www.youtube.com/embed/bKAGiYmZ-qw",
      title: "Effortless Amazon Account Creation & Product Listing with Saumic Craft – Start Selling Globally",
      description: "We handle your Amazon account setup for sales in India and internationally, listing 600 unique products with tailored listings for both platforms. Enjoy high-quality images and videos to boost visibility and conversions. We optimize your listings using top tools and integrate your Facebook and Instagram for increased traffic. Start selling effortlessly with our full support!",
    },
    {
      videoUrl: "https://www.youtube.com/embed/df6_youaqdI",
      title: "Unlock the Benefits of Amazon Dropshipping with Saumic Craft – Earn High Margins Without Inventory Risk",
      description: "Launch your Amazon dropshipping business with no upfront purchases or dead stock! Enjoy margins up to ₹12,000 per product and sell high-demand items without needing warehouse space or staff. We provide HD images, full support, and training. Start your journey today!",
    },
    {
      videoUrl: "https://www.youtube.com/embed/7u82DK20Q0w",
      title: "Start Your Amazon Dropshipping Business for Just ₹10,000 – Limited-Time Offer!",
      description: "Ready to start your Amazon dropshipping business? Account setup costs ₹6,000, listing 600 products is ₹30,000, and photoshoots add ₹60,000—totaling ₹96,000. But for a limited time, join our model for just ₹10,000 plus GST. Sell from home in India and internationally. Click the link below—limited seats available!",
    },
  ];

  return (
    <>
    <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center" style={{ paddingTop: '5rem' }}>Amazon Dropshipping Model</h2>

    <Card bordered={true} className="video-gallery-card" name="ourprocedure">
      <div className="video-gallery">
        {videos.map((video, index) => (
          <div key={index} className="video-info-container">
            <div className="video-column">
              <iframe
                src={video.videoUrl}
                width="100%"
                height="300px"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Video ${index + 1}`}
                className="video-frame"
              ></iframe>
            </div>
            <div className="info-column">
              <h2 style={{fontSize: '22px', fontWeight: 'bold', color: '#333'}}>{video.title}</h2>
              
              {/* <h3 style={{fontSize: '18px', fontWeight: 'normal', color: '#666'}}>{video.subtitle}</h3> */}
              <p style={{fontSize: '16px'}}>{video.description}</p>
              &nbsp;
              <span
                style={linkStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <a
                  href="https://www.google.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'inherit' }} // Inherit color and decoration
                >
                  Get Started...
                </a>
              </span> 
            </div>
          </div>
        ))}
      </div>

      {/* Add the button at the bottom */}
      <div className="center-button-container">
      <Button
  style={{
    backgroundColor: '#ff7f00', // Orange color
    color: 'white', 
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
  }}
  size="large"
>
  Click Here To Start Your Online Business
</Button>
      </div>
    </Card>
    </>
  );
};

export default VideoGallery;

