"use strict";(self.webpackChunkhi1t0_blog=self.webpackChunkhi1t0_blog||[]).push([[415],{8534:function(e,n,t){t.d(n,{Z:function(){return ee}});var i=t(885),r=t(4942),o=t(7462),u=t(3366),a=t(7294),l=t(5505),c=t(9408),s=t(5826),p=t(2058),d=t(7761),f=t(7093),h=t(93),m=t(2982);function v(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var b=t(7326),g=t(1721),x=a.createContext(null);function Z(e,n){var t=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,a.isValidElement)(e)?n(e):e}(e)})),t}function y(e,n,t){return null!=t[n]?t[n]:e.props[n]}function R(e,n,t){var i=Z(e.children),r=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var i,r=Object.create(null),o=[];for(var u in e)u in n?o.length&&(r[u]=o,o=[]):o.push(u);var a={};for(var l in n){if(r[l])for(i=0;i<r[l].length;i++){var c=r[l][i];a[r[l][i]]=t(c)}a[l]=t(l)}for(i=0;i<o.length;i++)a[o[i]]=t(o[i]);return a}(n,i);return Object.keys(r).forEach((function(o){var u=r[o];if((0,a.isValidElement)(u)){var l=o in n,c=o in i,s=n[o],p=(0,a.isValidElement)(s)&&!s.props.in;!c||l&&!p?c||!l||p?c&&l&&(0,a.isValidElement)(s)&&(r[o]=(0,a.cloneElement)(u,{onExited:t.bind(null,u),in:s.props.in,exit:y(u,"exit",e),enter:y(u,"enter",e)})):r[o]=(0,a.cloneElement)(u,{in:!1}):r[o]=(0,a.cloneElement)(u,{onExited:t.bind(null,u),in:!0,exit:y(u,"exit",e),enter:y(u,"enter",e)})}})),r}var M=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},E=function(e){function n(n,t){var i,r=(i=e.call(this,n,t)||this).handleExited.bind((0,b.Z)(i));return i.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},i}(0,g.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,i,r=n.children,o=n.handleExited;return{children:n.firstRender?(t=e,i=o,Z(t.children,(function(e){return(0,a.cloneElement)(e,{onExited:i.bind(null,e),in:!0,appear:y(e,"appear",t),enter:y(e,"enter",t),exit:y(e,"exit",t)})}))):R(e,r,o),firstRender:!1}},t.handleExited=function(e,n){var t=Z(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,o.Z)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,i=(0,u.Z)(e,["component","childFactory"]),r=this.state.contextValue,o=M(this.state.children).map(t);return delete i.appear,delete i.enter,delete i.exit,null===n?a.createElement(x.Provider,{value:r},o):a.createElement(x.Provider,{value:r},a.createElement(n,i,o))},n}(a.Component);E.defaultProps={component:"div",childFactory:function(e){return e}};var k=E,T=t(3431),C=t(5893);var P=function(e){var n=e.className,t=e.classes,r=e.pulsate,o=void 0!==r&&r,u=e.rippleX,c=e.rippleY,s=e.rippleSize,p=e.in,d=e.onExited,f=e.timeout,h=a.useState(!1),m=(0,i.Z)(h,2),v=m[0],b=m[1],g=(0,l.Z)(n,t.ripple,t.rippleVisible,o&&t.ripplePulsate),x={width:s,height:s,top:-s/2+c,left:-s/2+u},Z=(0,l.Z)(t.child,v&&t.childLeaving,o&&t.childPulsate);return p||v||b(!0),a.useEffect((function(){if(!p&&null!=d){var e=setTimeout(d,f);return function(){clearTimeout(e)}}}),[d,p,f]),(0,C.jsx)("span",{className:g,style:x,children:(0,C.jsx)("span",{className:Z})})},w=t(2194);var V,S,j,D,L,B,N,z,F=(0,w.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),I=["center","classes","className"],O=(0,T.keyframes)(L||(L=V||(V=v(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))),X=(0,T.keyframes)(B||(B=S||(S=v(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))),U=(0,T.keyframes)(N||(N=j||(j=v(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))),Y=(0,s.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),K=(0,s.ZP)(P,{name:"MuiTouchRipple",slot:"Ripple"})(z||(z=D||(D=v(["\n  opacity: 0;\n  position: absolute;\n\n  &."," {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  &."," {\n    animation-duration: ","ms;\n  }\n\n  & ."," {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & ."," {\n    opacity: 0;\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  & ."," {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",";\n    animation-duration: 2500ms;\n    animation-timing-function: ",";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]))),F.rippleVisible,O,550,(function(e){return e.theme.transitions.easing.easeInOut}),F.ripplePulsate,(function(e){return e.theme.transitions.duration.shorter}),F.child,F.childLeaving,X,550,(function(e){return e.theme.transitions.easing.easeInOut}),F.childPulsate,U,(function(e){return e.theme.transitions.easing.easeInOut})),A=a.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiTouchRipple"}),r=t.center,c=void 0!==r&&r,s=t.classes,d=void 0===s?{}:s,f=t.className,h=(0,u.Z)(t,I),v=a.useState([]),b=(0,i.Z)(v,2),g=b[0],x=b[1],Z=a.useRef(0),y=a.useRef(null);a.useEffect((function(){y.current&&(y.current(),y.current=null)}),[g]);var R=a.useRef(!1),M=a.useRef(null),E=a.useRef(null),T=a.useRef(null);a.useEffect((function(){return function(){clearTimeout(M.current)}}),[]);var P=a.useCallback((function(e){var n=e.pulsate,t=e.rippleX,i=e.rippleY,r=e.rippleSize,o=e.cb;x((function(e){return[].concat((0,m.Z)(e),[(0,C.jsx)(K,{classes:{ripple:(0,l.Z)(d.ripple,F.ripple),rippleVisible:(0,l.Z)(d.rippleVisible,F.rippleVisible),ripplePulsate:(0,l.Z)(d.ripplePulsate,F.ripplePulsate),child:(0,l.Z)(d.child,F.child),childLeaving:(0,l.Z)(d.childLeaving,F.childLeaving),childPulsate:(0,l.Z)(d.childPulsate,F.childPulsate)},timeout:550,pulsate:n,rippleX:t,rippleY:i,rippleSize:r},Z.current)])})),Z.current+=1,y.current=o}),[d]),w=a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,i=n.pulsate,r=void 0!==i&&i,o=n.center,u=void 0===o?c||n.pulsate:o,a=n.fakeElement,l=void 0!==a&&a;if("mousedown"===e.type&&R.current)R.current=!1;else{"touchstart"===e.type&&(R.current=!0);var s,p,d,f=l?null:T.current,h=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(u||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)s=Math.round(h.width/2),p=Math.round(h.height/2);else{var m=e.touches?e.touches[0]:e,v=m.clientX,b=m.clientY;s=Math.round(v-h.left),p=Math.round(b-h.top)}if(u)(d=Math.sqrt((2*Math.pow(h.width,2)+Math.pow(h.height,2))/3))%2==0&&(d+=1);else{var g=2*Math.max(Math.abs((f?f.clientWidth:0)-s),s)+2,x=2*Math.max(Math.abs((f?f.clientHeight:0)-p),p)+2;d=Math.sqrt(Math.pow(g,2)+Math.pow(x,2))}e.touches?null===E.current&&(E.current=function(){P({pulsate:r,rippleX:s,rippleY:p,rippleSize:d,cb:t})},M.current=setTimeout((function(){E.current&&(E.current(),E.current=null)}),80)):P({pulsate:r,rippleX:s,rippleY:p,rippleSize:d,cb:t})}}),[c,P]),V=a.useCallback((function(){w({},{pulsate:!0})}),[w]),S=a.useCallback((function(e,n){if(clearTimeout(M.current),"touchend"===e.type&&E.current)return E.current(),E.current=null,void(M.current=setTimeout((function(){S(e,n)})));E.current=null,x((function(e){return e.length>0?e.slice(1):e})),y.current=n}),[]);return a.useImperativeHandle(n,(function(){return{pulsate:V,start:w,stop:S}}),[V,w,S]),(0,C.jsx)(Y,(0,o.Z)({className:(0,l.Z)(d.root,F.root,f),ref:T},h,{children:(0,C.jsx)(k,{component:null,exit:!0,children:g})}))})),H=A,W=t(8416);function q(e){return(0,W.Z)("MuiButtonBase",e)}var _,G=(0,w.Z)("MuiButtonBase",["root","disabled","focusVisible"]),J=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Q=(0,s.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:function(e,n){return n.root}})((_={display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"}},(0,r.Z)(_,"&.".concat(G.disabled),{pointerEvents:"none",cursor:"default"}),(0,r.Z)(_,"@media print",{colorAdjust:"exact"}),_)),$=a.forwardRef((function(e,n){var t=(0,p.Z)({props:e,name:"MuiButtonBase"}),r=t.action,s=t.centerRipple,m=void 0!==s&&s,v=t.children,b=t.className,g=t.component,x=void 0===g?"button":g,Z=t.disabled,y=void 0!==Z&&Z,R=t.disableRipple,M=void 0!==R&&R,E=t.disableTouchRipple,k=void 0!==E&&E,T=t.focusRipple,P=void 0!==T&&T,w=t.LinkComponent,V=void 0===w?"a":w,S=t.onBlur,j=t.onClick,D=t.onContextMenu,L=t.onDragLeave,B=t.onFocus,N=t.onFocusVisible,z=t.onKeyDown,F=t.onKeyUp,I=t.onMouseDown,O=t.onMouseLeave,X=t.onMouseUp,U=t.onTouchEnd,Y=t.onTouchMove,K=t.onTouchStart,A=t.tabIndex,W=void 0===A?0:A,_=t.TouchRippleProps,G=t.touchRippleRef,$=t.type,ee=(0,u.Z)(t,J),ne=a.useRef(null),te=a.useRef(null),ie=(0,d.Z)(te,G),re=(0,h.Z)(),oe=re.isFocusVisibleRef,ue=re.onFocus,ae=re.onBlur,le=re.ref,ce=a.useState(!1),se=(0,i.Z)(ce,2),pe=se[0],de=se[1];function fe(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:k;return(0,f.Z)((function(i){return n&&n(i),!t&&te.current&&te.current[e](i),!0}))}y&&pe&&de(!1),a.useImperativeHandle(r,(function(){return{focusVisible:function(){de(!0),ne.current.focus()}}}),[]),a.useEffect((function(){pe&&P&&!M&&te.current.pulsate()}),[M,P,pe]);var he=fe("start",I),me=fe("stop",D),ve=fe("stop",L),be=fe("stop",X),ge=fe("stop",(function(e){pe&&e.preventDefault(),O&&O(e)})),xe=fe("start",K),Ze=fe("stop",U),ye=fe("stop",Y),Re=fe("stop",(function(e){ae(e),!1===oe.current&&de(!1),S&&S(e)}),!1),Me=(0,f.Z)((function(e){ne.current||(ne.current=e.currentTarget),ue(e),!0===oe.current&&(de(!0),N&&N(e)),B&&B(e)})),Ee=function(){var e=ne.current;return x&&"button"!==x&&!("A"===e.tagName&&e.href)},ke=a.useRef(!1),Te=(0,f.Z)((function(e){P&&!ke.current&&pe&&te.current&&" "===e.key&&(ke.current=!0,te.current.stop(e,(function(){te.current.start(e)}))),e.target===e.currentTarget&&Ee()&&" "===e.key&&e.preventDefault(),z&&z(e),e.target===e.currentTarget&&Ee()&&"Enter"===e.key&&!y&&(e.preventDefault(),j&&j(e))})),Ce=(0,f.Z)((function(e){P&&" "===e.key&&te.current&&pe&&!e.defaultPrevented&&(ke.current=!1,te.current.stop(e,(function(){te.current.pulsate(e)}))),F&&F(e),j&&e.target===e.currentTarget&&Ee()&&" "===e.key&&!e.defaultPrevented&&j(e)})),Pe=x;"button"===Pe&&(ee.href||ee.to)&&(Pe=V);var we={};"button"===Pe?(we.type=void 0===$?"button":$,we.disabled=y):(ee.href||ee.to||(we.role="button"),y&&(we["aria-disabled"]=y));var Ve=(0,d.Z)(le,ne),Se=(0,d.Z)(n,Ve),je=a.useState(!1),De=(0,i.Z)(je,2),Le=De[0],Be=De[1];a.useEffect((function(){Be(!0)}),[]);var Ne=Le&&!M&&!y;var ze=(0,o.Z)({},t,{centerRipple:m,component:x,disabled:y,disableRipple:M,disableTouchRipple:k,focusRipple:P,tabIndex:W,focusVisible:pe}),Fe=function(e){var n=e.disabled,t=e.focusVisible,i=e.focusVisibleClassName,r=e.classes,o={root:["root",n&&"disabled",t&&"focusVisible"]},u=(0,c.Z)(o,q,r);return t&&i&&(u.root+=" ".concat(i)),u}(ze);return(0,C.jsxs)(Q,(0,o.Z)({as:Pe,className:(0,l.Z)(Fe.root,b),ownerState:ze,onBlur:Re,onClick:j,onContextMenu:me,onFocus:Me,onKeyDown:Te,onKeyUp:Ce,onMouseDown:he,onMouseLeave:ge,onMouseUp:be,onDragLeave:ve,onTouchEnd:Ze,onTouchMove:ye,onTouchStart:xe,ref:Se,tabIndex:y?-1:W,type:$},we,ee,{children:[v,Ne?(0,C.jsx)(H,(0,o.Z)({ref:ie,center:m},_)):null]}))})),ee=$}}]);