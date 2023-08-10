"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[691],{4284:function(n,t,e){e.d(t,{X:function(){return r}});var r=function(n){n("Apologies, but it seems that something didn't go as planned. Please bear with us and try again later.")}},854:function(n,t,e){var r=e(824),a=e(8593),o=e(184);t.Z=function(){return(0,o.jsx)(r.xu,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,o.jsx)(a.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},9827:function(n,t,e){e.d(t,{Z:function(){return f}});var r,a,o=e(7689),i=e(1087),c=e(168),s=e(6088),u=s.Z.li(r||(r=(0,c.Z)(["\n  padding: 16px;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;\n  margin-bottom: 20px;\n\n  &:hover {\n    transform: scale(1.1);\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n\n    h4 {\n      color: orange;\n      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n    }\n  }\n\n  img {\n    width: 100%;\n    max-height: 450px;\n    object-fit: cover;\n    border-radius: 4px;\n    margin-bottom: 12px;\n  }\n\n  h4 {\n    margin: 0;\n    font-size: 16px;\n    text-align: center;\n    font-weight: bold;\n    color: inherit;\n    transition: color 0.3s ease-in-out, text-shadow 0.3s ease-in-out;\n  }\n\n  @media (min-width: 1200px) {\n    width: calc((100% - 28px * 3) / 4);\n  }\n\n  @media (max-width: 1199px) and (min-width: 768px) {\n    width: calc((100% - 28px * 2) / 3);\n  }\n\n  @media (max-width: 767px) {\n    width: 100%;\n  }\n"]))),p=e(184),d=function(n){var t=n.movie,e=(0,o.TH)();return(0,p.jsx)(u,{children:(0,p.jsxs)(i.OL,{to:"/movies/".concat(t.id),state:{from:e},children:[(0,p.jsx)("div",{children:(0,p.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):"https://www.ormistonhospital.co.nz/wp-content/uploads/2016/05/No-Image.jpg",alt:t.title})}),(0,p.jsx)("h4",{children:t.original_title||t.name})]})})},l=s.Z.ul(a||(a=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 28px;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),f=function(n){var t=n.movies,e=void 0===t?[]:t,r=(null===e||void 0===e?void 0:e.length)>0;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(l,{children:r&&e.map((function(n){return(0,p.jsx)(d,{movie:n},n.id)}))})})}},4691:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a=e(5861),o=e(9439),i=e(4687),c=e.n(i),s=e(2791),u=e(4390),p=e(9827),d=e(854),l=e(4284),f=e(168),h=e(6088).Z.section(r||(r=(0,f.Z)(["\n  min-height: 100vh;\n"]))),x=e(9055),g=e(824),m=e(9589),v=e(104),w=e(7689),b=e(1061),y=e(184),Z=function(){var n=(0,s.useContext)(v.b).searchParams,t=(0,s.useState)([]),e=(0,o.Z)(t,2),r=e[0],i=e[1],f=(0,s.useState)(!1),Z=(0,o.Z)(f,2),j=Z[0],k=Z[1],_=(0,s.useState)(null),S=(0,o.Z)(_,2),C=S[0],U=S[1],H=(0,s.useState)(!1),L=(0,o.Z)(H,2),M=L[0],A=L[1],I=n.get("query"),z=(0,w.s0)(),q=(0,w.TH)();(0,s.useEffect)((function(){if(I){var n=function(){var n=(0,a.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,k(!0),n.next=4,(0,u.gH)(t);case 4:e=n.sent,i(e.results),A(!0),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),(0,l.X)(U);case 12:return n.prev=12,k(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(t){return n.apply(this,arguments)}}();I?n(I):(i([]),A(!1))}}),[I]);return(0,y.jsx)(h,{children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(x.z,{type:"button",onClick:function(){q.state&&z(q.state.from),z("/")},gap:"8px",mb:"28px",_hover:{color:"orange"},children:[(0,y.jsx)(b.Y,{})," HOME"]}),j&&(0,y.jsx)(g.xu,{display:"flex",alignItems:"center",justifyContent:"center",mb:4,children:(0,y.jsx)(d.Z,{})}),C?(0,y.jsxs)("p",{children:["Ooops, error: ",C]}):0===r.length?M&&(0,y.jsx)("p",{children:"Sorry, no results found"}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(m.X,{fontSize:"32px",color:"orange",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.3) ",mb:"28px",children:["According to your request, ",I.toUpperCase()," found"," ",r.length," movies"]}),(0,y.jsx)(p.Z,{movies:r})]})]})})}},4390:function(n,t,e){e.d(t,{M1:function(){return l},Pg:function(){return d},VH:function(){return x},gH:function(){return p},tx:function(){return f},ur:function(){return u},yB:function(){return h}});var r=e(5861),a=e(4687),o=e.n(a),i=e(1243),c="https://api.themoviedb.org/3",s="88b8a7c5d221d3120fb29d734050dc7d",u=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/trending/all/day?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(){var t,e,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/movie/upcoming?api_key=").concat(s,"&language=en-US"));case 2:if(t=n.sent,!((e=t.data.results).length>0)){n.next=8;break}return r=Math.floor(Math.random()*e.length),a=e[r],n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/movie/").concat(t,"/videos?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},1061:function(n,t,e){e.d(t,{Y:function(){return o}});var r=e(4134),a=e(184),o=(0,r.I)({displayName:"ArrowLeftIcon",path:(0,a.jsxs)("g",{fill:"currentColor",children:[(0,a.jsx)("path",{d:"M10.416,12a2.643,2.643,0,0,1,.775-1.875L20.732.584a1.768,1.768,0,0,1,2.5,2.5l-8.739,8.739a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5l-9.541-9.541A2.643,2.643,0,0,1,10.416,12Z"}),(0,a.jsx)("path",{d:"M.25,12a2.643,2.643,0,0,1,.775-1.875L10.566.584a1.768,1.768,0,0,1,2.5,2.5L4.327,11.823a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5L1.025,13.875A2.643,2.643,0,0,1,.25,12Z"})]})})}}]);
//# sourceMappingURL=691.74c878ce.chunk.js.map