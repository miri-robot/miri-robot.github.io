(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[441],{8637:function(e,t,n){var r={"./en/translation.json":[9272,649],"./tw/translation.json":[4589,589]};function s(e){if(!n.o(r,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],s=t[0];return n.e(t[1]).then(function(){return n.t(s,19)})}s.keys=function(){return Object.keys(r)},s.id=8637,e.exports=s},3563:function(e,t,n){Promise.resolve().then(n.bind(n,8241))},9797:function(e,t,n){"use strict";n.d(t,{he:function(){return l},r1:function(){return o},s0:function(){return a}});let r=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),s=e=>({0:["0.875rem",8],1:["0.75rem",7],2:["0.625rem",6],3:["0.5rem",5],4:["0.375rem",4],5:["0.25rem",3],6:["0.125rem",2],7:["0px",1]})[e]||["1rem",10],a=e=>{let{count:t,isSpread:n}=e;return Array.from({length:t},(e,t)=>({position:"absolute",left:s(t)[0],top:"0px",zIndex:s(t)[1],...n&&{transform:"translate(".concat(r(100,200),"px, ").concat(r(100,200),"px) rotate(").concat(r(100,360),"deg)")},...n&&{zIndex:r(0,50)}}))},o=()=>{let e=[["16px",39],["14px",38],["12px",37],["10px",36],["8px",35],["6px",34],["4px",33],["2px",32],["0px",31]];return Array.from({length:9},(t,n)=>({position:"absolute",left:e[n][0],top:"0px",zIndex:e[n][1]}))},i=e=>({0:[-13,"12px"],1:[-11,"8px"],2:[-8,"8px"],3:[-6,"4px"],4:[-4,"0px"],5:[-3,"0px"],31:[13,"12px"],30:[11,"8px"],29:[8,"8px"],28:[6,"4px"],27:[4,"0px"],26:[3,"0px"]})[e]||[0,"0px"],c=e=>({0:[-13,"12px","0px"],1:[-13,"8px","2px"],2:[-13,"8px","2px"],3:[-11,"4px","4px"],4:[-11,"0px","4px"],5:[-11,"0px","6px"]})[e]||[-9,"0px","8px"],l=e=>{let{isSpread:t}=e;return Array.from({length:32},(e,n)=>({position:"absolute",left:c(n)[2],top:c(n)[1],transform:"rotate(".concat(c(n)[0],"deg)"),...t&&{top:i(n)[1],left:"0%"},...t&&{transform:"translateX(".concat(8*n,"px) rotate(").concat(i(n)[0],"deg)")},zIndex:n+1}))}},5951:function(e,t,n){"use strict";n.d(t,{Uv:function(){return u},bB:function(){return d},h2:function(){return l},h4:function(){return c},rQ:function(){return x}});var r=n(7437),s=n(8792),a=n(8024),o=n(7535),i=n(678);function c(e){let{lng:t}=e,n=()=>{localStorage.removeItem(i.F1)};return(0,r.jsx)("div",{className:"".concat(i.Tl," mx-auto h-14 border divination-navbar fixed inset-x-0 top-0"),children:(0,r.jsx)(s.default,{href:"/".concat(t,"/"),children:(0,r.jsx)("div",{className:"h-14 w-14",onClick:()=>n(),children:(0,r.jsx)("div",{className:"pl-4 pt-4",children:(0,r.jsx)(a.G,{icon:o.EyR,size:"xl",style:{color:"#e9d69d"}})})})})})}function l(){return(0,r.jsxs)("div",{className:"loadWrap",children:[(0,r.jsx)("div",{className:"loading first-squre"}),(0,r.jsx)("div",{className:"loading second-squre"}),(0,r.jsx)("div",{className:"loading third-squre"})]})}let d={runes:{overlayStyle:{borderRadius:"20px",background:"rgba(255, 255, 255)"},spreadsOverlayStyle:{background:"rgba(255, 255, 255)"},spreadsBorderColor:{borderColor:"rgba(255, 255, 255)"},spreadsWordColor:{color:"rgba(255, 255, 255)"},cardStyle:(0,r.jsx)(function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"h-[108px] w-16 rounded-[20px] grid place-items-center border-2 divination-rune-card pt-1",children:(0,r.jsx)("div",{className:"",children:(0,r.jsx)("img",{src:"/static/rune.svg",alt:"Rune card cover side"})})})})},{}),cardSvg:"/static/rune.svg"},default:{overlayStyle:{borderRadius:"5px",background:"rgba(234, 203, 132)"},spreadsOverlayStyle:{background:"rgba(234, 203, 132)"},spreadsBorderColor:{borderColor:"#EACB84"},spreadsWordColor:{color:"#F8D781"},cardStyle:(0,r.jsx)(function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"h-[108px] w-16 rounded-[5px] border-2 divination-card pt-1",children:(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"/static/tarot-card.svg",alt:"Tarot card cover side"})})})})},{}),cardSvg:"/static/tarot-card.svg"}};function u(e){let{func:t,title:n}=e;return(0,r.jsx)("button",{className:"border rounded-[10px] circle-button",onClick:t,children:(0,r.jsx)("div",{className:"border rounded-[10px] circle-inner-button",children:(0,r.jsx)("p",{className:"px-2",children:n})})})}let x=async e=>{try{let t=await fetch(i.Jk+"/api/v2/web/divination",{method:"POST",body:JSON.stringify(e)});if(!t.ok)throw Error("Network response was not ok");return await t.json()}catch(e){throw console.error("Error calling API:",e),e}}},8241:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(7437),s=n(2265),a=n(7907),o=n(425),i=n(5951),c=n(5431),l=n(9797);function d(e){let{lng:t,method:n}=e,{t:l}=(0,o.$)(t),d=(0,a.useRouter)(),[u,x]=(0,s.useState)(""),[h,m]=(0,s.useState)(!0),p=(0,s.useRef)(!1),f={method:n,action:"guide",lang:t};(0,s.useEffect)(()=>{(async()=>{try{let e=await (0,i.rQ)(f);x(e),m(!1),p.current=!0}catch(e){console.error(e)}})()},[]);let g=()=>{setTimeout(()=>{["runes","tarot","lenormand"].includes(n)?d.push("/".concat(t,"/").concat(n,"/spreads/")):d.push("/".concat(t,"/").concat(n,"/meditation/"))},2e3)},v=()=>{d.push("/".concat(t,"/poe/meditation/"))},j=(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)("p",{children:u}),"poe"===n&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex justify-center gap-2 pt-4",children:(0,r.jsx)(i.Uv,{func:()=>v(),title:l("divination.buttons.enter")})})})]}),b=(0,r.jsx)(s.Fragment,{children:(0,r.jsx)(i.Uv,{func:()=>g(),title:l("divination.buttons.enter")})}),y=(0,r.jsxs)("div",{className:"flex justify-center loading-text mt-10",children:[(0,r.jsx)("span",{className:"dot1"}),(0,r.jsx)("span",{className:"dot2"}),(0,r.jsx)("span",{className:"dot3"})]});return"poe"===n?(0,r.jsx)(r.Fragment,{children:h?(0,r.jsx)(c.m,{message:y,buttons:!1,hideEffect:!1}):(0,r.jsx)(c.m,{message:j,buttons:null,settings:"poe"})}):(0,r.jsx)(r.Fragment,{children:h?(0,r.jsx)(c.m,{message:y,buttons:!1,hideEffect:!1}):(0,r.jsx)(c.m,{message:j,buttons:b,hideEffect:!0,isExpand:p,settings:"introduction"})})}function u(e){let{lng:t,method:n,selectedStyle:u}=e,{t:x}=(0,o.$)(t),h=(0,a.useRouter)(),m=u.cardStyle,[p,f]=(0,s.useState)(!1),g=()=>{f(!0)},v=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:x("divination.introduction.hello")}),(0,r.jsxs)("p",{children:[x("divination.introduction.welcome"),x("divination.method.".concat(n)),x("divination.introduction.guide")]}),(0,r.jsxs)("div",{className:"flex justify-center gap-2 pt-4",children:[(0,r.jsx)(i.Uv,{func:()=>g(),title:x("divination.buttons.introduce")}),"poe"===n?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.Uv,{func:()=>C(),title:x("divination.buttons.choose")})}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.Uv,{func:()=>w(),title:x("divination.buttons.choose")})})]})]}),[j,b]=(0,s.useState)(!1),y=()=>{b(!j)},N=(0,l.s0)({count:32,isSpread:j});(0,s.useEffect)(()=>{setTimeout(()=>{y()},1e3)},[]);let w=()=>{y(),setTimeout(()=>{["runes","tarot","lenormand"].includes(n)?h.push("/".concat(t,"/").concat(n,"/spreads/")):h.push("/".concat(t,"/").concat(n,"/meditation/")+"?num="+(.5>Math.random()?1:2))},2e3)},C=()=>{h.push("/".concat(t,"/poe/meditation/"))};return"poe"===n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"pt-48 px-8",children:(0,r.jsx)("div",{className:"border-2 moon-block-cloth p-4",children:(0,r.jsxs)("div",{className:"h-48 md:h-56 flex justify-center border-2 moon-block-inner-cloth p-2 gap-8",children:[(0,r.jsx)("div",{className:"grid place-items-center",children:(0,r.jsx)("img",{className:"h-32 rotate-[24deg]",src:"/static/poe-cover.png",alt:"poe cover side"})}),(0,r.jsx)("div",{className:"grid place-items-center",children:(0,r.jsx)("img",{className:"h-32 rotate-[24deg]",src:"/static/poe-up.png",alt:"poe up side"})})]})})}),p?(0,r.jsx)(d,{lng:t,method:n}):(0,r.jsx)(c.m,{message:v,buttons:null,settings:"poe"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"pt-24 px-8",children:(0,r.jsx)("div",{className:"relative h-96 w-24",children:N.map((e,t)=>(0,r.jsx)("div",{className:"transition-transform delay-300 ease-linear duration-500 drop-shadow-md ".concat(j&&"drop-shadow-xl"," will-change-transform"),style:e,children:m},'"div'.concat(t,'"')))})}),p?(0,r.jsx)(d,{lng:t,method:n}):(0,r.jsx)(c.m,{message:v,buttons:null,hideEffect:!1})]})}function x(e){let{params:{lng:t,method:n}}=e,s=i.bB[n]||i.bB.default;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"wallpaper down-wallpaper-color divination-animation",children:[(0,r.jsx)(i.h4,{lng:t}),(0,r.jsx)(u,{lng:t,method:n,selectedStyle:s})]})})}},5431:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var r=n(7437),s=n(678);let a={introduction:{height:"h-[30rem]",hideHeight:"-bottom-72",moveHeight:"-translate-y-72",chatStyleClass:"h-[8rem]",expandChatClass:"h-[18rem] overflow-y-auto"},default:{height:"h-[32rem]",hideHeight:"-bottom-64",moveHeight:"-translate-y-64",chatStyleClass:"h-[8rem]",expandChatClass:"h-[20rem] overflow-y-auto"},explanation:{height:"h-[36rem]",hideHeight:"-bottom-96",moveHeight:"-translate-y-80",chatStyleClass:"h-[8rem]",expandChatClass:"h-[22rem] overflow-y-auto"},poe:{height:"h-[18rem]",hideHeight:"bottom-0",moveHeight:"",chatStyleClass:"h-[8rem] overflow-y-auto",expandChatClass:"h-[22rem] overflow-y-auto"}};function o(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"flex border h-16 w-16 divination-miri-style rounded-full",children:[(0,r.jsx)("img",{src:"/static/favicon.jpg",className:"rounded-full"}),(0,r.jsx)("p",{className:"pl-1 pt-12 font-bold",children:"Miri"})]})})}function i(e){let{message:t,buttons:n,hideEffect:i,isExpand:c,settings:l}=e,d=a[l]||a.default;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"".concat(s.Tl," mx-auto ").concat(d.height," p-5 fixed inset-x-0 ").concat(d.hideHeight," z-[100] rounded-t-[20px] border divination-message-section ").concat(i&&c.current?d.moveHeight:""),children:[(0,r.jsx)(o,{}),(0,r.jsx)("div",{className:"mt-4 ".concat(i&&c.current?d.expandChatClass:d.chatStyleClass),children:t}),i&&c.current&&(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)("div",{className:"flex justify-center",children:n})}),n&&!i&&(0,r.jsx)("div",{className:"fixed inset-x-0 bottom-5",children:(0,r.jsx)("div",{className:"flex justify-center",children:n})})]})})}},678:function(e,t,n){"use strict";n.d(t,{$f:function(){return c},F1:function(){return o},Jk:function(){return s},Tl:function(){return r},tq:function(){return i}});let r="max-w-screen-sm",s="https://miri-backend.vercel.app",a="MIRI",o="".concat(a,".").concat("client",".userDrawResult"),i="".concat(a,".").concat("sys",".spreadsData"),c={1:"▲",2:"▼",3:"⏹︎"}},425:function(e,t,n){"use strict";n.d(t,{$:function(){return x}});var r=n(1505),s=n(2265),a=n(2635),o=n(4457),i=n(5350),c=n(1520);let l=["en","tw"],d="translation",u="i18next";function x(e,t,n){let[r,i]=(0,o.fP)([u]),c=(0,a.$G)(t,n),{i18n:l}=c;{let[t,n]=(0,s.useState)(l.resolvedLanguage);(0,s.useEffect)(()=>{t!==l.resolvedLanguage&&n(l.resolvedLanguage)},[t,l.resolvedLanguage]),(0,s.useEffect)(()=>{e&&l.resolvedLanguage!==e&&l.changeLanguage(e)},[e,l]),(0,s.useEffect)(()=>{r.i18next!==e&&i(u,e,{path:"/"})},[e,r.i18next])}return c}r.ZP.use(a.Db).use(c.Z).use((0,i.Z)((e,t)=>n(8637)("./".concat(e,"/").concat(t,".json")))).init({...function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d;return{supportedLngs:l,fallbackLng:"en",lng:e,fallbackNS:d,defaultNS:d,ns:t}}(),lng:void 0,detection:{order:["path","htmlTag","cookie","navigator"]},preload:[]})},7907:function(e,t,n){"use strict";var r=n(5313);n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})}},function(e){e.O(0,[676,143,267,971,69,744],function(){return e(e.s=3563)}),_N_E=e.O()}]);