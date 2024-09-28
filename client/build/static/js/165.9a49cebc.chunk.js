"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[165],{165:(e,t,o)=>{o.r(t),o.d(t,{default:()=>R});var n=o(5397),r=o(5043),a=o(8139),i=o.n(a),s=o(8678),l=o(5001);const d=e=>e?"function"===typeof e?e():e:null;var c=o(3290),p=o(2701),u=o(5296),m=o(2481),h=o(7659),g=o(4414),y=o(5814),f=o(6208),v=o(2094),b=o(2979),x=o(8855),w=o(8446);const C=e=>{const{componentCls:t,popoverColor:o,titleMinWidth:n,fontWeightStrong:r,innerPadding:a,boxShadowSecondary:i,colorTextHeading:s,borderRadiusLG:l,zIndexPopup:d,titleMarginBottom:c,colorBgElevated:p,popoverBg:u,titleBorderBottom:m,innerContentPadding:h,titlePadding:y}=e;return[{[t]:Object.assign(Object.assign({},(0,g.dF)(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:d,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"--antd-arrow-background-color":p,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:u,backgroundClip:"padding-box",borderRadius:l,boxShadow:i,padding:a},[`${t}-title`]:{minWidth:n,marginBottom:c,color:s,fontWeight:r,borderBottom:m,padding:y},[`${t}-inner-content`]:{color:o,padding:h}})},(0,f.Ay)(e,"var(--antd-arrow-background-color)"),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]},O=e=>{const{componentCls:t}=e;return{[t]:b.s.map((o=>{const n=e[`${o}6`];return{[`&${t}-${o}`]:{"--antd-arrow-background-color":n,[`${t}-inner`]:{backgroundColor:n},[`${t}-arrow`]:{background:"transparent"}}}}))}},k=(0,x.OF)("Popover",(e=>{const{colorBgElevated:t,colorText:o}=e,n=(0,w.oX)(e,{popoverBg:t,popoverColor:o});return[C(n),O(n),(0,y.aB)(n,"zoom-big")]}),(e=>{const{lineWidth:t,controlHeight:o,fontHeight:n,padding:r,wireframe:a,zIndexPopupBase:i,borderRadiusLG:s,marginXS:l,lineType:d,colorSplit:c,paddingSM:p}=e,u=o-n,m=u/2,h=u/2-t,g=r;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:i+30},(0,v.n)(e)),(0,f.Ke)({contentRadius:s,limitVerticalRadius:!0})),{innerPadding:a?0:12,titleMarginBottom:a?0:l,titlePadding:a?`${m}px ${g}px ${h}px`:0,titleBorderBottom:a?`${t}px ${d} ${c}`:"none",innerContentPadding:a?`${p}px ${g}px`:0})}),{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var j=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};const S=e=>{let{title:t,content:o,prefixCls:n}=e;return t||o?r.createElement(r.Fragment,null,t&&r.createElement("div",{className:`${n}-title`},t),o&&r.createElement("div",{className:`${n}-inner-content`},o)):null},P=e=>{const{hashId:t,prefixCls:o,className:n,style:a,placement:s="top",title:l,content:c,children:p}=e,u=d(l),m=d(c),g=i()(t,o,`${o}-pure`,`${o}-placement-${s}`,n);return r.createElement("div",{className:g,style:a},r.createElement("div",{className:`${o}-arrow`}),r.createElement(h.z,Object.assign({},e,{className:t,prefixCls:o}),p||r.createElement(S,{prefixCls:o,title:u,content:m})))},W=e=>{const{prefixCls:t,className:o}=e,n=j(e,["prefixCls","className"]),{getPrefixCls:a}=r.useContext(u.QO),s=a("popover",t),[l,d,c]=k(s);return l(r.createElement(P,Object.assign({},n,{prefixCls:s,hashId:d,className:i()(o,c)})))};var $=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};const N=r.forwardRef(((e,t)=>{var o,n;const{prefixCls:a,title:h,content:g,overlayClassName:y,placement:f="top",trigger:v="hover",children:b,mouseEnterDelay:x=.1,mouseLeaveDelay:w=.1,onOpenChange:C,overlayStyle:O={}}=e,j=$(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:P}=r.useContext(u.QO),W=P("popover",a),[N,B,E]=k(W),z=P(),R=i()(y,B,E),[A,D]=(0,s.A)(!1,{value:null!==(o=e.open)&&void 0!==o?o:e.visible,defaultValue:null!==(n=e.defaultOpen)&&void 0!==n?n:e.defaultVisible}),I=(e,t)=>{D(e,!0),null===C||void 0===C||C(e,t)},M=d(h),T=d(g);return N(r.createElement(m.A,Object.assign({placement:f,trigger:v,mouseEnterDelay:x,mouseLeaveDelay:w,overlayStyle:O},j,{prefixCls:W,overlayClassName:R,ref:t,open:A,onOpenChange:e=>{I(e)},overlay:M||T?r.createElement(S,{prefixCls:W,title:M,content:T}):null,transitionName:(0,c.b)(z,"zoom-big",j.transitionName),"data-popover-inject":!0}),(0,p.Ob)(b,{onKeyDown:e=>{var t,o;r.isValidElement(b)&&(null===(o=null===b||void 0===b?void 0:(t=b.props).onKeyDown)||void 0===o||o.call(t,e)),(e=>{e.keyCode===l.A.ESC&&I(!1,e)})(e)}})))}));N._InternalPanelDoNotUseOrYouWillBeFired=W;const B=N;var E=o(579);const z=[{id:1,img:"https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/what/cart.webp",title:"No Pre-Purchasing",subtitle:"Buy Only When You Sell",description:"With Saumic Craft, you don\u2019t need to pre-purchase the products. When a customer orders, we ship it directly from our warehouse. This means No deadstock or unsold items, You don\u2019t spend money on products until they\u2019re sold, Reduced risk of loss. We make it simple\u2014only purchase when you sell, keeping your business lean and profitable."},{id:2,img:"https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/what/camera.webp",title:"No Photography Costs",subtitle:"Ready-to-Use",description:"Content for Your Business Product photography can be expensive. For example, if one photo costs 200, then for 600 products, (600x200) it will cost you rupees 120,000 just for images! But with Saumic Craft, you don\u2019t need to spend anything on photos. We provide high-quality images and 4K product review videos for your listings, saving you time and money."},{id:3,img:"https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/what/delivery.webp",title:"Fastest Delivery",subtitle:"Ship to 135 Countries",description:"At Saumic Craft, we offer some of the fastest shipping available, delivering to over 135 countries. Since we manufacture our products in advance, your orders are always ready to be dispatched quickly, ensuring they reach your customers on time, every time."},{id:4,img:"https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/what/products.webp",title:"Wide Range of Products",subtitle:"Over 85,000+ Products",description:"With Saumic Craft, you get access to a massive selection of over 85,000 products, including Wooden products, Marble items, Digital and handmade wall paintings and many more. We keep up with market trends by adding 500 to 600 new products every month, ensuring your store always has fresh and in-demand items to offer."},{id:5,img:"https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/what/interest.webp",title:"Huge Profits",subtitle:"Margins on Handmade Products",description:"At Saumic Craft, our handmade products are in high demand, allowing you to enjoy big margins. For example, if a product costs you \u20b91,200 (\u20b92,000 with packaging and dispatch), you can sell it for around $75 (approx. \u20b95,625). That\u2019s a margin of over \u20b93,600 per item! Our quality products and strong demand ensure you get the best return on every sale."},{id:6,img:"https://saumicbucket.s3.ap-south-1.amazonaws.com/homepage+folder/what/training.webp",title:"Comprehensive Support & Training",subtitle:"",description:"With Saumic Craft, you\u2019re never on your own. We offer:, Live and recorded training sessions, from basic to advanced levels, Regular updates to keep you informed, Manager support via a dedicated portal, where you can book appointments and get timely help, Our training and support ensure you have all the tools and knowledge to succeed, with ongoing assistance whenever you need it."}],R=()=>(0,E.jsx)(n.A,{className:"card-container p-6 hidden sm:block",style:{borderRadius:"16px",overflow:"hidden",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},children:(0,E.jsxs)("div",{className:"p-0",children:[(0,E.jsx)("h1",{className:"text-4xl font-bold text-center mb-8",style:{paddingBottom:"2rem"},children:"What Saumic Craft Offers for Your Business Growth"}),(0,E.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"0.5rem"},children:z.map((e=>(0,E.jsx)(B,{content:(0,E.jsx)("div",{style:{padding:"1rem",maxWidth:"300px",textAlign:"justify"},children:(0,E.jsx)("p",{children:e.description})}),title:e.title,trigger:"click",overlayStyle:{borderRadius:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},children:(0,E.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"transform 0.3s, box-shadow 0.3s",cursor:"pointer",borderRadius:"8px",overflow:"hidden"},children:[(0,E.jsx)("img",{style:{width:"6rem",height:"6rem",objectFit:"cover",transition:"transform 0.3s"},alt:e.title,src:e.img}),(0,E.jsx)("h2",{style:{fontSize:"1.25rem",textAlign:"center",marginTop:"1rem"},children:e.title}),(0,E.jsx)("p",{style:{fontSize:"0.875rem",textAlign:"center"},children:e.subtitle})]})},e.id)))})]})})}}]);
//# sourceMappingURL=165.9a49cebc.chunk.js.map