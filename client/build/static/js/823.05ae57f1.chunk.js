"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[823],{1823:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var i=n(5043),r=n(1143),o=n(6213),a=n(579);function d(){const[e,t]=(0,i.useState)(null),[n,r]=(0,i.useState)(!1);(0,i.useEffect)((()=>{(async()=>{try{const e=(await o.A.get("https://homepagebackend.saumiccraft.in/events/")).data;if(e&&e.length>0){const n=new Date,i=e.reduce(((e,t)=>{const i=new Date(e.date),r=new Date(t.date);return Math.abs(r-n)<Math.abs(i-n)?t:e}));t(i),r(!0)}}catch(e){console.error("Failed to fetch event data:",e)}})()}),[]);return(0,a.jsxs)(s,{id:"home",children:[(0,a.jsx)(l,{isCardVisible:n,children:(0,a.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",children:(0,a.jsx)("source",{src:"https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/video/Saumic-Craft.webm",type:"video/webm"})})}),(0,a.jsx)(c,{style:{paddingTop:"5rem"},children:"Welcome to Our Event Platform"}),(()=>{if(!e)return null;const t=new Date(e.date).toLocaleDateString("en-US",{weekday:"long"}),n=new Date(e.date).toLocaleDateString("en-US",{month:"long"}),i=new Date(e.date).getDate();return(0,a.jsxs)(p,{children:[(0,a.jsx)(g,{children:"Upcoming Events"}),(0,a.jsx)("h1",{children:e.title}),(0,a.jsx)("h2",{children:e.subtitle}),(0,a.jsxs)(u,{children:[(0,a.jsx)(b,{children:"Date:"}),(0,a.jsxs)("p",{children:[t,", ",`${n} ${i}`]})]}),(0,a.jsxs)(u,{children:[(0,a.jsx)(b,{children:"Time:"}),(0,a.jsx)("p",{children:e.time})]}),(0,a.jsxs)(u,{children:[(0,a.jsx)(b,{children:"Venue:"}),(0,a.jsx)("p",{children:e.venue})]}),(0,a.jsx)(x,{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"Register Now"})]})})(),(0,a.jsx)(h,{children:"Learn More"})]})}const s=r.Ay.section`
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  overflow: hidden;
`,l=r.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: ${e=>e.isCardVisible?"brightness(50%)":"none"}; /* Lower brightness when card is visible */
    transition: filter 0.5s ease-in-out; /* Smooth transition */
  }
`,c=r.Ay.h1`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  z-index: 2;
`,h=r.Ay.button`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 20px;
  background: linear-gradient(90deg, #ff8a00, #da1b60); /* Gradient for the button */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  z-index: 2;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(90deg, #da1b60, #ff8a00); /* Reverse gradient on hover */
  }
`,p=r.Ay.div`
  position: absolute;
  top: 20%; /* Adjust the vertical position */
  right: 3%; /* Adjust the horizontal position to the right */
  background: rgba(255, 255, 255, 0.6); /* Increased transparency */
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  color: #333; /* Dark text color */
  max-width: 350px; /* Limit the width of the card */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  text-align: center; /* Center text */
  backdrop-filter: blur(0px); /* Adds a blur effect behind the card */
  opacity: 0.9; /* Additional control for transparency */
`,g=r.Ay.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(90deg, #ff8a00, #da1b60);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
`,u=r.Ay.div`
  font-size: 16px;
  margin: 10px 0;
`,b=r.Ay.span`
  font-weight: bold;
  margin-right: 5px;
`,x=r.Ay.a`
  display: inline-block;
  margin-top: 20px;
  padding: 12px 20px;
  background: linear-gradient(90deg, #ff8a00, #da1b60); /* Gradient for the button */
  color: white;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(90deg, #da1b60, #ff8a00); /* Reverse gradient on hover */
  }
`}}]);
//# sourceMappingURL=823.05ae57f1.chunk.js.map