// import { useRef, useEffect } from "react";
// import one from "../../../assets/photo1.jpeg";
// import two from "../../../assets/Account.jpg";
// import three from "../../../assets/Order.jpg";
// import four from "../../../assets/Dispatch.jpg";
// import Footer from "../Footer";
// import Whatsapp from "../../Whatsapp";
// import "./TimelineCard.css"; // Import the CSS file

// export default function TimelineCard() {
//   const timelineRefs = useRef([]);

//   useEffect(() => {
//     const observerOptions = {
//       root: null, // viewport
//       rootMargin: "0px",
//       threshold: [0.1], // Trigger when 10% of the item is visible
//     };

//     const observerCallback = (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//         } else {
//           entry.target.classList.remove("visible");
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);

//     timelineRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       if (timelineRefs.current) {
//         timelineRefs.current.forEach((ref) => {
//           if (ref) observer.unobserve(ref);
//         });
//       }
//     };
//   }, []);

//   return (
//     <>
//       <div style={{ paddingTop: "5rem" }}>
//         <div className="card-wrapper">
//           <div className="card-content">
//             <div className="header-info">
//               <h1>How We Work</h1>
//               <p>Here's a timeline of our key milestones.</p>
//             </div>
//             <div className="timeline-wrapper">
//               {[
//                 {
//                   title: "Pick Products",
//                   description:
//                     "Browse a huge selection of handicraft products from our gallery.",
//                   image: one,
//                 },
//                 {
//                   title: "Account Opening & Listing",
//                   description:
//                     "Our managers will open accounts on the desired ecommerce platform & list the products selected by you.",
//                   image: two,
//                   reverse: true,
//                 },
//                 {
//                   title: "You Receive Order",
//                   description:
//                     "Once product listing is done, you will start receiving orders",
//                   image: three,
//                 },
//                 {
//                   title: "Dispatching",
//                   description:
//                     "Orders will be directly dispatched from our warehouse",
//                   image: four,
//                   reverse: true,
//                 },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   ref={(el) => (timelineRefs.current[index] = el)}
//                   className={`timeline-item ${item.reverse ? "reverse" : ""}`}
//                 >
//                   {item.reverse ? (
//                     <>
//                       <div className="image-content">
//                         <img src={item.image} alt={`${item.title} Milestone`} />
//                       </div>
//                       <div className="text-content">
//                         <h2>{item.title}</h2>
//                         <p>{item.description}</p>
//                       </div>
//                     </>
//                   ) : (
//                     <>
//                       <div className="text-content">
//                         <h2>{item.title}</h2>
//                         <p>{item.description}</p>
//                       </div>
//                       <div className="image-content">
//                         <img src={item.image} alt={`${item.title} Milestone`} />
//                       </div>
//                     </>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       <Whatsapp />
//     </>
//   );
// }


import { useRef, useEffect } from "react";
import one from "../../../assets/how/photo1.webp";
import two from "../../../assets/how/Account.webp";
import three from "../../../assets/how/Order.webp";
import five from "../../../assets/how/Dispatch.webp";
import Footer from "../Footer";
import Whatsapp from "../../Whatsapp";
import "./TimelineCard.css"; // Import the CSS file
import Images from './Images';
import Why from './Why';
import Para from './Para';
import Banner from './Banner';
import pack from '../../../assets/how/pack.webp';


export default function TimelineCard() {
  const timelineRefs = useRef([]);

  

  useEffect(() => {
    window.scrollTo(0, 0);
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: [0.1], // Trigger when 10% of the item is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (timelineRefs.current) {
        timelineRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  const milestones = [
    {
      title: "Pick Products",
      description: "Browse a huge selection of handicraft products from our gallery.",
      image: one,
      number: "#1",
    },
    {
      title: "Account Opening & Listing",
      description: "Our managers will open accounts on the desired ecommerce platform & list the products selected by you.",
      image: two,
      number: "#2",
      reverse: true,
    },
    {
      title: "You Receive Order",
      description: "Once product listing is done, you will start receiving orders.",
      image: three,
      number: "#3",
    },
    {
      title: "Packaging",
      description: "We ensure safe packaging with a four layer corrugated box for maximum protection",
      image: pack,
      number: "#4",
      reverse: true,
    },
    {
      title: "Dispatching",
      description: "Orders will be directly dispatched from our warehouse.",
      image: five,
      number: "#5",
      reverse: true,
    },
  ];

  return (
    <>
      <div style={{ paddingTop: "6rem" }}>
        <Banner/>
        <div className="card-wrapper">
          <div className="card-content">
            <div className="header-info">
              <h1>How We Work</h1>
              <p>Here's a timeline of our key milestones.</p>
            </div>
            <div className="timeline-wrapper">
              {milestones.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (timelineRefs.current[index] = el)}
                  className={`timeline-item ${item.reverse ? "reverse" : ""}`}
                >
                  <div className="timeline-number">{item.number}</div> {/* Added Number */}
                  {item.reverse ? (
                    <>
                      <div className="image-content">
                        <img src={item.image} alt={`${item.title} Milestone`} />
                      </div>
                      <div className="text-content">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-content">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                      </div>
                      <div className="image-content">
                        <img src={item.image} alt={`${item.title} Milestone`} />
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Images/>
      <Para/>
      <Why/>
      <Footer />
      <Whatsapp />
    </>
  );
}
