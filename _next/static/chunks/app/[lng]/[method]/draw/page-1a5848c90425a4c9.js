(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[683],{1914:function(e,t,n){Promise.resolve().then(n.bind(n,6271))},6271:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var s=n(7437),r=n(2265),a=n(7907);n(8792);var i=n(425),c=n(5951),l=n(5431),o=n(9797);function u(e){let{lng:t,method:n,selectedStyle:u}=e,{t:d}=(0,i.$)(t),h=(0,a.useRouter)(),f=(0,a.useSearchParams)();f.get("spread");let m=f.get("num"),[v,g]=(0,r.useState)(null),p=(0,r.useRef)(""),j=u.overlayStyle,x=u.cardStyle;(0,r.useEffect)(()=>((0,c.p3)(n,f,g,p,d),p.current&&setTimeout(()=>{h.push("/".concat(t,"/").concat(n,"/introduction"))},5e3),setTimeout(()=>{L()},1e3),document.addEventListener("click",M),()=>{document.removeEventListener("click",M)}),[]);let[N,S]=(0,r.useState)(m),k=(0,s.jsxs)(r.Fragment,{children:[(0,s.jsxs)("p",{children:[d("divination.chooseCards.checkMessageYouHave")," ",m," ",d("divination.chooseCards.checkMessageSure")]}),(0,s.jsx)("div",{className:"grid justify-items-center pt-4",children:(0,s.jsx)(c.Uv,{func:()=>{["runes","tarot","lenormand"].includes(n),h.push("/".concat(t,"/").concat(n,"/prediction")+"?spread="+m)},title:d("divination.buttons.sure")})})]}),[y,C]=(0,r.useState)([]),E="".concat(d("divination.chooseCards.initMessageChoose")," ").concat(N," ").concat(d("divination.chooseCards.initMessageNum")),[b,w]=(0,r.useState)(E);(0,r.useEffect)(()=>{0!==N?w(E):w(k)},[N]);let _=e=>{y.length<m?y.includes(e)?(C(y.filter(t=>t!==e)),S(e=>e+1)):(C([...y,e]),S(e=>e-1)):y.includes(e)&&(C(y.filter(t=>t!==e)),S(e=>e+1))},M=e=>{P.current&&!P.current.contains(e.target)&&(B.current&&B.current.contains(e.target)||(C([]),S(m)))},[R,F]=(0,r.useState)(!1),P=(0,r.useRef)(null),B=(0,r.useRef)(null),H=(0,o.he)({isSpread:R}),L=()=>{F(!R)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"pt-36 px-8",children:[v&&(0,s.jsx)(c._P,{errorMessage:p.current}),(0,s.jsx)("div",{ref:P,className:"relative",children:H.map((e,t)=>(0,s.jsxs)("div",{onClick:()=>_(t),className:"transition-transform delay-300 ease-linear duration-500 drop-shadow-lg will-change-transform",style:e,children:[y.includes(t)&&(0,s.jsx)("div",{className:"overlay",style:j}),x]},t))})]}),(0,s.jsx)("div",{ref:B,children:!v&&(0,s.jsx)(l.m,{message:b,buttons:null,needMsgHideEffect:!1})})]})}function d(e){let{params:{lng:t,method:n}}=e,r=c.bB[n]||c.bB.default;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"wallpaper down-wallpaper-color divination-animation",children:[(0,s.jsx)(c.h4,{lng:t}),(0,s.jsx)(u,{lng:t,method:n,selectedStyle:r})]})})}}},function(e){e.O(0,[676,143,267,215,971,69,744],function(){return e(e.s=1914)}),_N_E=e.O()}]);