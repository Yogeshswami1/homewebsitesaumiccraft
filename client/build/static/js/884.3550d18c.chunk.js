"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[884],{9884:(e,i,o)=>{o.r(i),o.d(i,{default:()=>m});var s=o(5043),r=o(1143),t=o(2382),d=o(235),a=o(7419),n=o(1645),l=o(4522),c=o(579);const{Title:p,Paragraph:h}=d.A,x=[{id:1,title:"Start Business Without Investment",description:["No Manpower","No Warehouse","No Stocks"],images:["https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/Start1.jpg","https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/Start2.jpg","https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/Start3.jpg"]},{id:2,title:"85,000+ Exclusive Products",description:["We have more than 85,000+ exclusive products..."],video:"https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/vid.webm"},{id:3,title:"Solid Packaging & Worldwide Shipping",description:["Fast-track goals with advanced insights.","Dedicated customer success team..."],video:"https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/vid2.webm"},{id:4,title:"Support & Learnings",description:["Create tailored learning paths.","Host your own content and resources."],video:"https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/vid3.webm"},{id:5,title:"High Margins",description:["High-profit margins and exclusive deals."],videos:["https://drive.google.com/file/d/1GMgZViyLEtOtPS1b1yyZkAKzHPZ_i_ne/preview","https://drive.google.com/file/d/14EKPUG3IqZ7M_yzspbSE_aC6Yub6YPAs/preview","https://drive.google.com/file/d/1RXGKS7-B3YtZ-jEriNNHoYKA1L5mkiL1/preview"]}],m=()=>{const[e,i]=(0,s.useState)(x[0]),o={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1};return(0,c.jsxs)(g,{children:[(0,c.jsxs)(v,{children:[(0,c.jsx)(p,{level:1,className:"extraBold",children:"Why Choose Us"}),(0,c.jsx)(h,{children:"Explore the features we offer to enhance your learning experience..."})]}),(0,c.jsxs)(a.A,{gutter:[20,20],children:[(0,c.jsx)(n.A,{xs:24,md:8,children:(0,c.jsx)(l.A,{itemLayout:"vertical",dataSource:x,renderItem:s=>(0,c.jsxs)("div",{children:[(0,c.jsx)(l.A.Item,{onClick:()=>i(s),style:{cursor:"pointer",background:e.id===s.id?"linear-gradient(145deg, #f0f4f8, #d9e2ec)":"#ffffff",borderLeft:e.id===s.id?"4px solid #84a9ac":"4px solid transparent",padding:"16px",borderRadius:"4px",transition:"background 0.3s, border-left 0.3s, transform 0.3s",boxShadow:e.id===s.id?"0 4px 12px rgba(0, 0, 0, 0.15)":"none"},children:(0,c.jsx)(l.A.Item.Meta,{title:(0,c.jsx)(p,{level:4,style:{margin:0,color:"#084c61"},children:s.title}),description:s.description.map(((e,i)=>(0,c.jsxs)(h,{style:{margin:0,color:"#4a6572"},children:["\u2022 ",e]},i)))})},s.id),e.id===s.id&&(0,c.jsx)(f,{children:e.video?(0,c.jsx)(j,{children:(0,c.jsx)("video",{src:e.video,autoPlay:!0,muted:!0,loop:!0,controls:!1})}):e.videos?(0,c.jsx)(t.A,{...o,children:e.videos.map(((e,i)=>(0,c.jsx)(A,{children:(0,c.jsx)("iframe",{src:e,frameBorder:"0",allow:"autoplay",allowFullScreen:!0,title:`Google Drive Video ${i+1}`})},i)))}):(0,c.jsx)(t.A,{...o,children:e.images.map(((e,i)=>(0,c.jsx)(w,{children:(0,c.jsx)("img",{src:e,alt:`Portrait ${i+1}`})},i)))})})]})})}),(0,c.jsx)(n.A,{xs:24,md:16,className:"content-col",children:(0,c.jsx)(u,{children:e.video?(0,c.jsx)(j,{children:(0,c.jsx)("video",{src:e.video,autoPlay:!0,muted:!0,loop:!0,controls:!1})}):e.videos?(0,c.jsx)(y,{children:e.videos.map(((e,i)=>(0,c.jsx)(A,{children:(0,c.jsx)("iframe",{src:e,frameBorder:"0",allow:"autoplay",allowFullScreen:!0,title:`Google Drive Video ${i+1}`})},i)))}):(0,c.jsx)(b,{children:e.images.map(((e,i)=>(0,c.jsx)(w,{children:(0,c.jsx)("img",{src:e,alt:`Portrait ${i+1}`})},i)))})})})]})]})},g=r.Ay.div`
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
`,u=r.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`,f=r.Ay.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-top: 10px;
  }
`,v=r.Ay.div`
  margin-bottom: 40px;
  padding-top: 1rem;
  text-align: center;

  .extraBold {
    font-weight: 800;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 16px;
    color: #0a3d62;
  }

  p {
    font-size: 1rem;
    color: #3c6382;
  }
`,b=r.Ay.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,w=r.Ay.div`
  flex: 1;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`,j=r.Ay.div`
  width: 100%;
  height: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`,y=r.Ay.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,A=r.Ay.div`
  flex: 1;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  iframe {
    width: 100%;
    height: 570px;
    border-radius: 5px;

    @media (max-width: 768px) {
      height: 300px;
    }
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`}}]);
//# sourceMappingURL=884.3550d18c.chunk.js.map