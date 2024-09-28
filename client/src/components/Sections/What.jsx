// import React, { useState } from 'react';
// import { Card, Popover } from 'antd';
// import one from '../../assets/what/cart.webp';
// import two from '../../assets/what/camera.webp';

// import three from '../../assets/what/delivery.webp';
// import four from '../../assets/what/products.webp';
// import five from '../../assets/what/interest.webp';

// import six from '../../assets/what/training.webp';

// const data = [
//   {
//     id: 1,
//     img: one,
//     title: 'No Pre-Purchasing',
//     subtitle: 'Buy Only When You Sell',
//     description: 'With Saumic Craft, you don’t need to pre-purchase the products. When a customer orders, we ship it directly from our warehouse. This means No deadstock or unsold items, You don’t spend money on products until they’re sold, Reduced risk of loss. We make it simple—only purchase when you sell, keeping your business lean and profitable.',
//   },
//   {
//     id: 2,
//     img: two,
//     title: 'No Photography Costs',
//     subtitle: 'Ready-to-Use',
//     description: 'Content for Your Business Product photography can be expensive. For example, if one photo costs 200, then for 600 products, (600x200) it will cost you rupees 120,000 just for images! But with Saumic Craft, you don’t need to spend anything on photos. We provide high-quality images and 4K product review videos for your listings, saving you time and money.',
//   },
//   {
//     id: 3,
//     img: three,
//     title: 'Fastest Delivery',
//     subtitle: 'Ship to 135 Countries',
//     description: 'At Saumic Craft, we offer some of the fastest shipping available, delivering to over 135 countries. Since we manufacture our products in advance, your orders are always ready to be dispatched quickly, ensuring they reach your customers on time, every time.',
//   },
//   {
//     id: 4,
//     img: four,
//     title: 'Wide Range of Products',
//     subtitle: 'Over 85,000+ Products',
//     description: 'With Saumic Craft, you get access to a massive selection of over 85,000 products, including Wooden products, Marble items, Digital and handmade wall paintings and many more. We keep up with market trends by adding 500 to 600 new products every month, ensuring your store always has fresh and in-demand items to offer.',
//   },
//   {
//     id: 5,
//     img: five,
//     title: 'Huge Profits',
//     subtitle: 'Margins on Handmade Products',
//     description: 'At Saumic Craft, our handmade products are in high demand, allowing you to enjoy big margins. For example, if a product costs you ₹1,200 (₹2,000 with packaging and dispatch), you can sell it for around $75 (approx. ₹5,625). That’s a margin of over ₹3,600 per item! Our quality products and strong demand ensure you get the best return on every sale.',
//   },
//   {
//     id: 6,
//     img: six,
//     title: 'Comprehensive Support & Training',
//     subtitle: '',
//     description: 'With Saumic Craft, you’re never on your own. We offer:, Live and recorded training sessions, from basic to advanced levels, Regular updates to keep you informed, Manager support via a dedicated portal, where you can book appointments and get timely help, Our training and support ensure you have all the tools and knowledge to succeed, with ongoing assistance whenever you need it.',
//   },
// ];

// const CardGrid = () => {
//   return (
//     <Card
//       className="card-container p-6"
//       style={{
//         borderRadius: '16px',
//         overflow: 'hidden',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       }}
//     >
//       <div className="p-0">
//         <h1
//           className="text-4xl font-bold text-center mb-8"
//           style={{ paddingBottom: '2rem' }}
//         >
//           What Saumic Craft Offers for Your Business Growth
//         </h1>

//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
//             gap: '0.5rem',
//           }}
//         >
//           {data.map((card) => (
//             <Popover
//               key={card.id}
//               content={
//                 <div style={{
//                   padding: '1rem', 
//                   maxWidth: '300px', 
//                   textAlign: 'justify',
//                 }}>
//                   <p>{card.description}</p>
//                 </div>
//               }
//               title={card.title}
//               trigger="click"
//               overlayStyle={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
//             >
//               <div
//                 style={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   transition: 'transform 0.3s, box-shadow 0.3s',
//                   cursor: 'pointer',
//                   borderRadius: '8px',
//                   overflow: 'hidden',
//                 }}
//               >
//                 <img
//                   style={{
//                     width: '6rem',
//                     height: '6rem',
//                     objectFit: 'cover',
//                     transition: 'transform 0.3s',
//                   }}
//                   alt={card.title}
//                   src={card.img}
//                 />
//                 <h2 style={{ fontSize: '1.25rem', textAlign: 'center', marginTop: '1rem' }}>
//                   {card.title}
//                 </h2>
//                 <p style={{ fontSize: '0.875rem', textAlign: 'center' }}>{card.subtitle}</p>
//               </div>
//             </Popover>
//           ))}
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default CardGrid;


import { Card, Popover } from 'antd';


const data = [
  {
    id: 1,
    img: "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/what/cart.webp",
    title: 'No Pre-Purchasing',
    subtitle: 'Buy Only When You Sell',
    description: 'With Saumic Craft, you don’t need to pre-purchase the products. When a customer orders, we ship it directly from our warehouse. This means No deadstock or unsold items, You don’t spend money on products until they’re sold, Reduced risk of loss. We make it simple—only purchase when you sell, keeping your business lean and profitable.',
  },
  {
    id: 2,
    img: "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/what/camera.webp",
    title: 'No Photography Costs',
    subtitle: 'Ready-to-Use',
    description: 'Content for Your Business Product photography can be expensive. For example, if one photo costs 200, then for 600 products, (600x200) it will cost you rupees 120,000 just for images! But with Saumic Craft, you don’t need to spend anything on photos. We provide high-quality images and 4K product review videos for your listings, saving you time and money.',
  },
  {
    id: 3,
    img: "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/what/delivery.webp",
    title: 'Fastest Delivery',
    subtitle: 'Ship to 135 Countries',
    description: 'At Saumic Craft, we offer some of the fastest shipping available, delivering to over 135 countries. Since we manufacture our products in advance, your orders are always ready to be dispatched quickly, ensuring they reach your customers on time, every time.',
  },
  {
    id: 4,
    img: "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/what/products.webp",
    title: 'Wide Range of Products',
    subtitle: 'Over 85,000+ Products',
    description: 'With Saumic Craft, you get access to a massive selection of over 85,000 products, including Wooden products, Marble items, Digital and handmade wall paintings and many more. We keep up with market trends by adding 500 to 600 new products every month, ensuring your store always has fresh and in-demand items to offer.',
  },
  {
    id: 5,
    img: "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/what/interest.webp",
    title: 'Huge Profits',
    subtitle: 'Margins on Handmade Products',
    description: 'At Saumic Craft, our handmade products are in high demand, allowing you to enjoy big margins. For example, if a product costs you ₹1,200 (₹2,000 with packaging and dispatch), you can sell it for around $75 (approx. ₹5,625). That’s a margin of over ₹3,600 per item! Our quality products and strong demand ensure you get the best return on every sale.',
  },
  {
    id: 6,
    img: "https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/what/training.webp",
    title: 'Comprehensive Support & Training',
    subtitle: '',
    description: 'With Saumic Craft, you’re never on your own. We offer:, Live and recorded training sessions, from basic to advanced levels, Regular updates to keep you informed, Manager support via a dedicated portal, where you can book appointments and get timely help, Our training and support ensure you have all the tools and knowledge to succeed, with ongoing assistance whenever you need it.',
  },
];

const CardGrid = () => {
  return (
    <Card
      className="card-container p-6 hidden sm:block" // Hide on mobile, show on larger screens
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="p-0">
        <h1
          className="text-4xl font-bold text-center mb-8"
          style={{ paddingBottom: '2rem' }}
        >
          What Saumic Craft Offers for Your Business Growth
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '0.5rem',
          }}
        >
          {data.map((card) => (
            <Popover
              key={card.id}
              content={
                <div style={{
                  padding: '1rem', 
                  maxWidth: '300px', 
                  textAlign: 'justify',
                }}>
                  <p>{card.description}</p>
                </div>
              }
              title={card.title}
              trigger="click"
              overlayStyle={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                <img
                  style={{
                    width: '6rem',
                    height: '6rem',
                    objectFit: 'cover',
                    transition: 'transform 0.3s',
                  }}
                  alt={card.title}
                  src={card.img}
                />
                <h2 style={{ fontSize: '1.25rem', textAlign: 'center', marginTop: '1rem' }}>
                  {card.title}
                </h2>
                <p style={{ fontSize: '0.875rem', textAlign: 'center' }}>{card.subtitle}</p>
              </div>
            </Popover>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CardGrid;
