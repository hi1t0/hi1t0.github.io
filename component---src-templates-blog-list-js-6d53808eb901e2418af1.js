"use strict";(self.webpackChunkhi1t0_blog=self.webpackChunkhi1t0_blog||[]).push([[544],{5833:function(e,t,o){o.d(t,{Z:function(){return i}});var a=o(885),n=o(7294);function i(e){var t=e.controlled,o=e.default,i=(e.name,e.state,n.useRef(void 0!==t).current),r=n.useState(o),l=(0,a.Z)(r,2),s=l[0],c=l[1];return[i?t:s,n.useCallback((function(e){i||c(e)}),[])]}},3815:function(e,t,o){o.r(t),o.d(t,{default:function(){return K}});var a=o(7294),n=o(8771),i=o(8678),r=o(6114),l=o(1597),s=o(7774),c=o(7462),d=o(3366),u=o(5505),p=o(9408),g=o(7761),v=o(8416),m=o(2194);function h(e){return(0,v.Z)("MuiPagination",e)}(0,m.Z)("MuiPagination",["root","ul","outlined","text"]);var b=o(2982),f=o(885),x=o(5833),Z=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];var y=o(4942),C=o(7663);function P(e){return(0,v.Z)("MuiPaginationItem",e)}var z=(0,m.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),k=o(6449),w=o(8818),M=o(9240),N=o(2067),R=o(5893),B=(0,N.Z)((0,R.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),L=(0,N.Z)((0,R.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),S=(0,N.Z)((0,R.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),E=(0,N.Z)((0,R.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),I=["className","color","component","components","disabled","page","selected","shape","size","type","variant"],j=function(e,t){var o=e.ownerState;return[t.root,t[o.variant],t["size".concat((0,M.Z)(o.size))],"text"===o.variant&&t["text".concat((0,M.Z)(o.color))],"outlined"===o.variant&&t["outlined".concat((0,M.Z)(o.color))],"rounded"===o.shape&&t.rounded,"page"===o.type&&t.page,("start-ellipsis"===o.type||"end-ellipsis"===o.type)&&t.ellipsis,("previous"===o.type||"next"===o.type)&&t.previousNext,("first"===o.type||"last"===o.type)&&t.firstLast]},O=(0,s.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:j})((function(e){var t=e.theme,o=e.ownerState;return(0,c.Z)({},t.typography.body2,(0,y.Z)({borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:t.palette.text.primary,height:"auto"},"&.".concat(z.disabled),{opacity:t.palette.action.disabledOpacity}),"small"===o.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===o.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:t.typography.pxToRem(15)})})),F=(0,s.ZP)(w.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:j})((function(e){var t,o,a=e.theme,n=e.ownerState;return(0,c.Z)({},a.typography.body2,(o={borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:a.palette.text.primary},(0,y.Z)(o,"&.".concat(z.focusVisible),{backgroundColor:a.palette.action.focus}),(0,y.Z)(o,"&.".concat(z.disabled),{opacity:a.palette.action.disabledOpacity}),(0,y.Z)(o,"transition",a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short})),(0,y.Z)(o,"&:hover",{backgroundColor:a.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}),(0,y.Z)(o,"&.".concat(z.selected),(t={backgroundColor:a.palette.action.selected,"&:hover":{backgroundColor:(0,C.Fq)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.palette.action.selected}}},(0,y.Z)(t,"&.".concat(z.focusVisible),{backgroundColor:(0,C.Fq)(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}),(0,y.Z)(t,"&.".concat(z.disabled),{opacity:1,color:a.palette.action.disabled,backgroundColor:a.palette.action.selected}),t)),o),"small"===n.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===n.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:a.typography.pxToRem(15)},"rounded"===n.shape&&{borderRadius:a.shape.borderRadius})}),(function(e){var t=e.theme,o=e.ownerState;return(0,c.Z)({},"text"===o.variant&&(0,y.Z)({},"&.".concat(z.selected),(0,c.Z)({},"standard"!==o.color&&(0,y.Z)({color:t.palette[o.color].contrastText,backgroundColor:t.palette[o.color].main,"&:hover":{backgroundColor:t.palette[o.color].dark,"@media (hover: none)":{backgroundColor:t.palette[o.color].main}}},"&.".concat(z.focusVisible),{backgroundColor:t.palette[o.color].dark}),(0,y.Z)({},"&.".concat(z.disabled),{color:t.palette.action.disabled}))),"outlined"===o.variant&&(0,y.Z)({border:"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"&.".concat(z.selected),(0,c.Z)({},"standard"!==o.color&&(0,y.Z)({color:t.palette[o.color].main,border:"1px solid ".concat((0,C.Fq)(t.palette[o.color].main,.5)),backgroundColor:(0,C.Fq)(t.palette[o.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:(0,C.Fq)(t.palette[o.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(z.focusVisible),{backgroundColor:(0,C.Fq)(t.palette[o.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}),(0,y.Z)({},"&.".concat(z.disabled),{borderColor:t.palette.action.disabledBackground,color:t.palette.action.disabled}))))})),A=(0,s.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:function(e,t){return t.icon}})((function(e){var t=e.theme,o=e.ownerState;return(0,c.Z)({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},"small"===o.size&&{fontSize:t.typography.pxToRem(18)},"large"===o.size&&{fontSize:t.typography.pxToRem(22)})})),T=a.forwardRef((function(e,t){var o=(0,g.Z)({props:e,name:"MuiPaginationItem"}),a=o.className,n=o.color,i=void 0===n?"standard":n,r=o.component,l=o.components,s=void 0===l?{first:B,last:L,next:E,previous:S}:l,v=o.disabled,m=void 0!==v&&v,h=o.page,b=o.selected,f=void 0!==b&&b,x=o.shape,Z=void 0===x?"circular":x,y=o.size,C=void 0===y?"medium":y,z=o.type,w=void 0===z?"page":z,N=o.variant,j=void 0===N?"text":N,T=(0,d.Z)(o,I),W=(0,c.Z)({},o,{color:i,disabled:m,selected:f,shape:Z,size:C,type:w,variant:j}),q=(0,k.Z)(),V=function(e){var t=e.classes,o=e.color,a=e.disabled,n=e.selected,i=e.size,r=e.shape,l=e.type,s=e.variant,c={root:["root","size".concat((0,M.Z)(i)),s,r,"standard"!==o&&"".concat(s).concat((0,M.Z)(o)),a&&"disabled",n&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[l]],icon:["icon"]};return(0,p.Z)(c,P,t)}(W),G=("rtl"===q.direction?{previous:s.next||E,next:s.previous||S,last:s.first||B,first:s.last||L}:{previous:s.previous||S,next:s.next||E,first:s.first||B,last:s.last||L})[w];return"start-ellipsis"===w||"end-ellipsis"===w?(0,R.jsx)(O,{ref:t,ownerState:W,className:(0,u.Z)(V.root,a),children:"…"}):(0,R.jsxs)(F,(0,c.Z)({ref:t,ownerState:W,component:r,disabled:m,className:(0,u.Z)(V.root,a)},T,{children:["page"===w&&h,G?(0,R.jsx)(A,{as:G,ownerState:W,className:V.icon}):null]}))})),W=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],q=(0,s.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant]]}})({}),V=(0,s.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:function(e,t){return t.ul}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function G(e,t,o){return"page"===e?"".concat(o?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var U=a.forwardRef((function(e,t){var o=(0,g.Z)({props:e,name:"MuiPagination"}),a=o.boundaryCount,n=void 0===a?1:a,i=o.className,r=o.color,l=void 0===r?"standard":r,s=o.count,v=void 0===s?1:s,m=o.defaultPage,y=void 0===m?1:m,C=o.disabled,P=void 0!==C&&C,z=o.getItemAriaLabel,k=void 0===z?G:z,w=o.hideNextButton,M=void 0!==w&&w,N=o.hidePrevButton,B=void 0!==N&&N,L=o.renderItem,S=void 0===L?function(e){return(0,R.jsx)(T,(0,c.Z)({},e))}:L,E=o.shape,I=void 0===E?"circular":E,j=o.showFirstButton,O=void 0!==j&&j,F=o.showLastButton,A=void 0!==F&&F,U=o.siblingCount,_=void 0===U?1:U,H=o.size,D=void 0===H?"medium":H,J=o.variant,K=void 0===J?"text":J,Q=(0,d.Z)(o,W),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,o=void 0===t?1:t,a=e.componentName,n=void 0===a?"usePagination":a,i=e.count,r=void 0===i?1:i,l=e.defaultPage,s=void 0===l?1:l,u=e.disabled,p=void 0!==u&&u,g=e.hideNextButton,v=void 0!==g&&g,m=e.hidePrevButton,h=void 0!==m&&m,y=e.onChange,C=e.page,P=e.showFirstButton,z=void 0!==P&&P,k=e.showLastButton,w=void 0!==k&&k,M=e.siblingCount,N=void 0===M?1:M,R=(0,d.Z)(e,Z),B=(0,x.Z)({controlled:C,default:s,name:n,state:"page"}),L=(0,f.Z)(B,2),S=L[0],E=L[1],I=function(e,t){C||E(t),y&&y(e,t)},j=function(e,t){var o=t-e+1;return Array.from({length:o},(function(t,o){return e+o}))},O=j(1,Math.min(o,r)),F=j(Math.max(r-o+1,o+1),r),A=Math.max(Math.min(S-N,r-o-2*N-1),o+2),T=Math.min(Math.max(S+N,o+2*N+2),F.length>0?F[0]-2:r-1),W=[].concat((0,b.Z)(z?["first"]:[]),(0,b.Z)(h?[]:["previous"]),(0,b.Z)(O),(0,b.Z)(A>o+2?["start-ellipsis"]:o+1<r-o?[o+1]:[]),(0,b.Z)(j(A,T)),(0,b.Z)(T<r-o-1?["end-ellipsis"]:r-o>o?[r-o]:[]),(0,b.Z)(F),(0,b.Z)(v?[]:["next"]),(0,b.Z)(w?["last"]:[])),q=function(e){switch(e){case"first":return 1;case"previous":return S-1;case"next":return S+1;case"last":return r;default:return null}},V=W.map((function(e){return"number"==typeof e?{onClick:function(t){I(t,e)},type:"page",page:e,selected:e===S,disabled:p,"aria-current":e===S?"true":void 0}:{onClick:function(t){I(t,q(e))},type:e,page:q(e),selected:!1,disabled:p||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?S>=r:S<=1)}}));return(0,c.Z)({items:V},R)}((0,c.Z)({},o,{componentName:"Pagination"})),Y=X.items,$=(0,c.Z)({},o,{boundaryCount:n,color:l,count:v,defaultPage:y,disabled:P,getItemAriaLabel:k,hideNextButton:M,hidePrevButton:B,renderItem:S,shape:I,showFirstButton:O,showLastButton:A,siblingCount:_,size:D,variant:K}),ee=function(e){var t=e.classes,o={root:["root",e.variant],ul:["ul"]};return(0,p.Z)(o,h,t)}($);return(0,R.jsx)(q,(0,c.Z)({"aria-label":"pagination navigation",className:(0,u.Z)(ee.root,i),ownerState:$,ref:t},Q,{children:(0,R.jsx)(V,{className:ee.ul,ownerState:$,children:Y.map((function(e,t){return(0,R.jsx)("li",{children:S((0,c.Z)({},e,{color:l,"aria-label":k(e.type,e.page,e.selected),shape:I,size:D,variant:K}))},t)}))})}))})),_=U,H=(0,s.ZP)("div")({display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}),D=function(e){var t=e.pageContext,o=t.numberOfPages,n=t.humanPageNumber;return a.createElement(H,null,a.createElement(_,{variant:"outlined",defaultPage:n,count:o,onChange:function(e,t){1===t?(0,l.navigate)("/blog"):(0,l.navigate)("/blog/"+t)},color:"primary",shape:"rounded"}))},J=o(4403),K=function(e){var t,o,l=e.data,s=e.location,c=e.pageContext,d=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",u=l.allMarkdownRemark.nodes,p=""+(null===(o=l.site.siteMetadata)||void 0===o?void 0:o.siteUrl)+s.pathname;return 0===u.length?a.createElement(i.Z,{location:s,title:d},a.createElement(r.Z,{url:p,title:"All posts",type:"article"}),a.createElement(n.Z,null),a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(i.Z,{location:s,title:d},a.createElement(r.Z,{url:p,title:"hi1t0BlogList"}),a.createElement("hr",null),a.createElement("h4",{style:{marginTop:"24px",marginBottom:"48px"}},"記事一覧"),a.createElement(J.Z,{posts:u}),a.createElement("footer",null,a.createElement(D,{pageContext:c})),a.createElement("hr",null),a.createElement(n.Z,null))}}}]);