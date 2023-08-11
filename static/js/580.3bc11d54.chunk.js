"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[580],{4284:function(e,n,r){r.d(n,{X:function(){return t}});var t=function(e){e("Apologies, but it seems that something didn't go as planned. Please bear with us and try again later.")}},854:function(e,n,r){var t=r(824),a=r(8593),i=r(184);n.Z=function(){return(0,i.jsx)(t.xu,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,i.jsx)(a.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},5712:function(e,n,r){r.d(n,{j:function(){return l}});var t=r(5861),a=r(9439),i=r(4687),o=r.n(i),c=r(2791),s=r(4284),u=r(7689),l=function(e){var n=(0,c.useState)([]),r=(0,a.Z)(n,2),i=r[0],l=r[1],d=(0,c.useState)(null),f=(0,a.Z)(d,2),p=f[0],h=f[1],x=(0,u.UO)().movieId;return(0,c.useEffect)((function(){if(x){var n=function(){var n=(0,t.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e(x);case 3:r=n.sent,l(r),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),(0,s.X)(h);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}}),[x,e]),{data:i,error:p}}},2580:function(e,n,r){r.r(n),r.d(n,{default:function(){return K}});var t=r(2791),a=r(7689),i=r(4390),o=r(854),c=r(824),s=r(9055),u=r(1061),l=r(9589),d=r(5712),f=r(1413),p=r(5987),h=r(7762),x=r(5597),g=r(184),v=["htmlWidth","htmlHeight","alt"],m=(0,x.G)((function(e,n){var r=e.htmlWidth,t=e.htmlHeight,a=e.alt,i=(0,p.Z)(e,v);return(0,g.jsx)("img",(0,f.Z)({width:r,height:t,ref:n,alt:a},i))}));m.displayName="NativeImage";var b=r(9439),j=r(9205);var y=r(1665),w=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"];var k=(0,x.G)((function(e,n){var r=e.fallbackSrc,a=e.fallback,i=e.src,o=e.srcSet,c=e.align,s=e.fit,u=e.loading,l=e.ignoreFallback,d=e.crossOrigin,x=e.fallbackStrategy,v=void 0===x?"beforeLoadOrError":x,k=e.referrerPolicy,Z=(0,p.Z)(e,w),_=null!=u||l||!(void 0!==r||void 0!==a),S=function(e){var n=e.loading,r=e.src,a=e.srcSet,i=e.onLoad,o=e.onError,c=e.crossOrigin,s=e.sizes,u=e.ignoreFallback,l=(0,t.useState)("pending"),d=(0,b.Z)(l,2),f=d[0],p=d[1];(0,t.useEffect)((function(){p(r?"loading":"pending")}),[r]);var h=(0,t.useRef)(),x=(0,t.useCallback)((function(){if(r){g();var e=new Image;e.src=r,c&&(e.crossOrigin=c),a&&(e.srcset=a),s&&(e.sizes=s),n&&(e.loading=n),e.onload=function(e){g(),p("loaded"),null==i||i(e)},e.onerror=function(e){g(),p("failed"),null==o||o(e)},h.current=e}}),[r,c,a,s,i,o,n]),g=function(){h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,j.G)((function(){if(!u)return"loading"===f&&x(),function(){g()}}),[f,x,u]),u?"loaded":f}((0,f.Z)((0,f.Z)({},e),{},{crossOrigin:d,ignoreFallback:_})),O=function(e,n){return"loaded"!==e&&"beforeLoadOrError"===n||"failed"===e&&"onError"===n}(S,v),A=(0,f.Z)({ref:n,objectFit:s,objectPosition:c},_?Z:function(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=Object.assign({},e),a=(0,h.Z)(r);try{for(a.s();!(n=a.n()).done;){var i=n.value;i in t&&delete t[i]}}catch(o){a.e(o)}finally{a.f()}return t}(Z,["onError","onLoad"]));return O?a||(0,g.jsx)(y.m.img,(0,f.Z)({as:m,className:"chakra-image__placeholder",src:r},A)):(0,g.jsx)(y.m.img,(0,f.Z)({as:m,src:i,srcSet:o,crossOrigin:d,loading:u,referrerPolicy:k,className:"chakra-image"},A))}));k.displayName="Image";var Z=function(e){var n=e.posterPath,r=e.title,t=n||"https://www.ormistonhospital.co.nz/wp-content/uploads/2016/05/No-Image.jpg";return(0,g.jsx)(k,{maxW:{base:"100%"},src:t,alt:r})},_=r(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);var S=["ratio","children","className"],O=(0,x.G)((function(e,n){var r,a,i=e.ratio,o=void 0===i?4/3:i,c=e.children,s=e.className,u=(0,p.Z)(e,S),l=t.Children.only(c),d=(0,_.cx)("chakra-aspect-ratio",s);return(0,g.jsx)(y.m.div,(0,f.Z)((0,f.Z)({ref:n,position:"relative",className:d,_before:{height:0,content:'""',display:"block",paddingBottom:(r=o,a=function(e){return"".concat(1/e*100,"%")},Array.isArray(r)?r.map((function(e){return null===e?null:a(e)})):(0,_.Kn)(r)?Object.keys(r).reduce((function(e,n){return e[n]=a(r[n]),e}),{}):null!=r?a(r):null)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},u),{},{children:l}))}));O.displayName="AspectRatio";var A,z,N,C,I=function(e){var n=e.trailerKey,r=e.title;return(0,g.jsx)(c.xu,{mb:"24px",children:(0,g.jsx)(O,{ratio:16/9,children:(0,g.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/".concat(n),title:"".concat(r," Trailer"),allowFullScreen:!0})})})},P=function(e){var n=e.genres,r=void 0===n?[]:n;return(0,g.jsx)(c.xu,{mt:"12px",borderRadius:"md",display:"flex",alignItems:"center",justifyContent:"flex-start",flexWrap:"wrap",gap:"12px",width:"fit-content",children:r.map((function(e,n){return(0,g.jsx)(c.xu,{as:"span",mb:"4px",display:"inline-block",children:(0,g.jsx)("b",{children:e.name})},n)}))})},U=function(e){var n,r=e.posterPath,t=e.title,a=e.voteAverage,o=e.overview,s=e.genres,u=(0,d.j)(i.VH),f=u.data,p=u.error,h=null===f||void 0===f||null===(n=f.find((function(e){return"Trailer"===e.type})))||void 0===n?void 0:n.key;return(0,g.jsxs)(c.xu,{mt:"28px",children:[(0,g.jsx)(l.X,{mb:"12px",children:t}),(0,g.jsxs)(c.xu,{mt:"12px",display:"flex",flexDirection:{base:"column",md:"row"},gap:{base:"12px",md:"24px"},children:[(0,g.jsx)(c.xu,{flex:"1",maxW:"520px",children:(0,g.jsx)(Z,{posterPath:r,title:t})}),(0,g.jsxs)(c.xu,{flex:"1",children:[h&&!p&&(0,g.jsx)(I,{trailerKey:h,title:t}),(0,g.jsxs)(c.xu,{children:[(0,g.jsxs)("p",{children:["Users score: ",(10*a).toFixed(),"%"]}),(0,g.jsx)(l.X,{as:"h3",size:"md",mt:"12px",children:"Overview"}),(0,g.jsx)("p",{children:o}),(0,g.jsx)(l.X,{as:"h3",size:"md",mt:"24px",children:"Genres"}),(0,g.jsx)(P,{genres:s})]})]})]})]})},L=r(1087),F=r(168),W=r(6088),E=W.Z.div(A||(A=(0,F.Z)(["\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n"]))),H=W.Z.h3(z||(z=(0,F.Z)(["\n  font-size: 1.5rem;\n  margin-bottom: 10px;\n"]))),G=W.Z.ul(N||(N=(0,F.Z)(["\n  display: flex;\n  gap: 28px;\n  list-style-type: none;\n  padding: 0;\n"]))),M=W.Z.li(C||(C=(0,F.Z)(["\n  margin-bottom: 8px;\n"]))),X=function(e){var n,r,t=e.location;return(0,g.jsxs)(E,{children:[(0,g.jsx)(H,{children:" Additional information"}),(0,g.jsxs)(G,{children:[(0,g.jsx)(M,{children:(0,g.jsx)(s.z,{as:L.rU,to:"cast",boxShadow:"md",state:{from:null===(n=t.state)||void 0===n?void 0:n.from},children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(s.z,{as:L.rU,to:"reviews",boxShadow:"md",state:{from:null===(r=t.state)||void 0===r?void 0:r.from},children:"Reviews"})})]})]})},R=(0,t.lazy)((function(){return r.e(565).then(r.bind(r,4565))})),D=(0,t.lazy)((function(){return r.e(499).then(r.bind(r,8499))})),K=function(){var e=(0,d.j)(i.Pg),n=e.data,r=e.error,l=e.loading,f=(0,a.TH)(),p=(0,a.s0)();return(0,g.jsxs)(c.xu,{minHeight:"100hv",children:[(0,g.jsx)(s.z,{type:"button",onClick:function(){f.state?p(f.state.from):p("/")},_hover:{color:"orange"},children:(0,g.jsx)(u.Y,{})}),l&&(0,g.jsx)(o.Z,{}),r?(0,g.jsx)("p",{children:r}):n&&!l&&(0,g.jsx)(U,{id:n.id,posterPath:n.poster_path&&"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),title:n.original_title||n.name,voteAverage:n.vote_average,overview:n.overview,genres:n.genres}),!r&&(0,g.jsx)(X,{location:f}),!r&&(0,g.jsx)(t.Suspense,{fallback:(0,g.jsx)("div",{style:{margin:"0 auto"},children:"LOADING....."}),children:(0,g.jsxs)(a.Z5,{children:[(0,g.jsx)(a.AW,{path:"cast",element:(0,g.jsx)(R,{})}),(0,g.jsx)(a.AW,{path:"reviews",element:(0,g.jsx)(D,{})})]})})]})}},4390:function(e,n,r){r.d(n,{M1:function(){return f},Pg:function(){return d},VH:function(){return x},gH:function(){return l},tx:function(){return p},ur:function(){return u},yB:function(){return h}});var t=r(5861),a=r(4687),i=r.n(a),o=r(1243),c="https://api.themoviedb.org/3",s="88b8a7c5d221d3120fb29d734050dc7d",u=function(){var e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(c,"/trending/all/day?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(c,"/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(n));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(c,"/movie/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(i().mark((function e(){var n,r,t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(c,"/movie/upcoming?api_key=").concat(s,"&language=en-US"));case 2:if(n=e.sent,!((r=n.data.results).length>0)){e.next=8;break}return t=Math.floor(Math.random()*r.length),a=r[t],e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=(0,t.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(c,"/movie/").concat(n,"/videos?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},1061:function(e,n,r){r.d(n,{Y:function(){return i}});var t=r(4134),a=r(184),i=(0,t.I)({displayName:"ArrowLeftIcon",path:(0,a.jsxs)("g",{fill:"currentColor",children:[(0,a.jsx)("path",{d:"M10.416,12a2.643,2.643,0,0,1,.775-1.875L20.732.584a1.768,1.768,0,0,1,2.5,2.5l-8.739,8.739a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5l-9.541-9.541A2.643,2.643,0,0,1,10.416,12Z"}),(0,a.jsx)("path",{d:"M.25,12a2.643,2.643,0,0,1,.775-1.875L10.566.584a1.768,1.768,0,0,1,2.5,2.5L4.327,11.823a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5L1.025,13.875A2.643,2.643,0,0,1,.25,12Z"})]})})}}]);
//# sourceMappingURL=580.3bc11d54.chunk.js.map