"use strict";(self.webpackChunkmy_ts_app=self.webpackChunkmy_ts_app||[]).push([[734],{2777:function(e,n,t){t.d(n,{V:function(){return Ue}});var r=t(7762),o=t(9439),a=t(4925),u=t(3433),i=t(4942),c=t(1413),l=t(2791),s=t.t(l,2),d=t(9904),f=t(5612),v=t(4159),p=t(7369),m=t(2953),h=t(7003),g=t(1511),E=["features"],y=function(e){return e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e}(y||{});var w=(0,f.yV)((function(e,n){var t=e.features,r=void 0===t?1:t,o=(0,a.Z)(e,E),u={ref:n,"aria-hidden":2===(2&r)||void 0,style:(0,c.Z)({position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"},4===(4&r)&&2!==(2&r)&&{display:"none"})};return(0,f.sY)({ourProps:u,theirProps:o,slot:{},defaultTag:"div",name:"Hidden"})})),b=t(981),T=t(3654),C=t(642),Z=function(e){return e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e}(Z||{});var L=t(1262),P=t(7281),M=t(2806);function k(e,n,t,r){var o=(0,M.E)(t);(0,l.useEffect)((function(){function t(e){o.current(e)}return(e=null!=e?e:window).addEventListener(n,t,r),function(){return e.removeEventListener(n,t,r)}}),[e,n,r])}var S=t(8106);function R(e,n){var t=(0,l.useRef)([]),a=(0,T.z)(e);(0,l.useEffect)((function(){var e,i=(0,u.Z)(t.current),c=(0,r.Z)(n.entries());try{for(c.s();!(e=c.n()).done;){var l=(0,o.Z)(e.value,2),s=l[0],d=l[1];if(t.current[s]!==d){var f=a(n,i);return t.current=n,f}}}catch(v){c.e(v)}finally{c.f()}}),[a].concat((0,u.Z)(n)))}var O=t(5623);function D(e){var n=(0,T.z)(e),t=(0,l.useRef)(!1);(0,l.useEffect)((function(){return t.current=!1,function(){t.current=!0,(0,S.Y)((function(){t.current&&n()}))}}),[n])}var F=["initialFocus","containers","features"];function A(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());var n,t=new Set,o=(0,r.Z)(e.current);try{for(o.s();!(n=o.n()).done;){var a=n.value;a.current instanceof HTMLElement&&t.add(a.current)}}catch(u){o.e(u)}finally{o.f()}return t}var x=function(e){return e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e}(x||{});var H=(0,f.yV)((function(e,n){var t=(0,l.useRef)(null),r=(0,v.T)(t,n),o=e.initialFocus,u=e.containers,c=e.features,s=void 0===c?30:c,p=(0,a.Z)(e,F);(0,g.H)()||(s=1);var m=(0,P.i)(t);z({ownerDocument:m},Boolean(16&s));var h=function(e,n){var t=e.ownerDocument,r=e.container,o=e.initialFocus,a=(0,l.useRef)(null),u=(0,L.t)();return R((function(){if(n){var e=r.current;e&&(0,S.Y)((function(){if(u.current){var n=null==t?void 0:t.activeElement;if(null!=o&&o.current){if((null==o?void 0:o.current)===n)return void(a.current=n)}else if(e.contains(n))return void(a.current=n);null!=o&&o.current?(0,b.C5)(o.current):(0,b.jA)(e,b.TO.First)===b.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.current=null==t?void 0:t.activeElement}}))}}),[n]),a}({ownerDocument:m,container:t,initialFocus:o},Boolean(2&s));!function(e,n){var t=e.ownerDocument,r=e.container,o=e.containers,a=e.previousActiveElement,u=(0,L.t)();k(null==t?void 0:t.defaultView,"focus",(function(e){if(n&&u.current){var t=A(o);r.current instanceof HTMLElement&&t.add(r.current);var i=a.current;if(i){var c=e.target;c&&c instanceof HTMLElement?B(t,c)?(a.current=c,(0,b.C5)(c)):(e.preventDefault(),e.stopPropagation(),(0,b.C5)(i)):(0,b.C5)(a.current)}}}),!0)}({ownerDocument:m,container:t,containers:u,previousActiveElement:h},Boolean(8&s));var E=function(){var e=(0,l.useRef)(0);return(0,C.s)("keydown",(function(n){"Tab"===n.key&&(e.current=n.shiftKey?1:0)}),!0),e}(),M=(0,T.z)((function(e){var n=t.current;n&&function(){var t;(0,d.E)(E.current,(t={},(0,i.Z)(t,Z.Forwards,(function(){(0,b.jA)(n,b.TO.First,{skipElements:[e.relatedTarget]})})),(0,i.Z)(t,Z.Backwards,(function(){(0,b.jA)(n,b.TO.Last,{skipElements:[e.relatedTarget]})})),t))}()})),D=(0,O.G)(),x=(0,l.useRef)(!1),H={ref:r,onKeyDown:function(e){"Tab"==e.key&&(x.current=!0,D.requestAnimationFrame((function(){x.current=!1})))},onBlur:function(e){var n,r=A(u);t.current instanceof HTMLElement&&r.add(t.current);var o=e.relatedTarget;o instanceof HTMLElement&&"true"!==o.dataset.headlessuiFocusGuard&&(B(r,o)||(x.current?(0,b.jA)(t.current,(0,d.E)(E.current,(n={},(0,i.Z)(n,Z.Forwards,(function(){return b.TO.Next})),(0,i.Z)(n,Z.Backwards,(function(){return b.TO.Previous})),n))|b.TO.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&(0,b.C5)(e.target)))}};return l.createElement(l.Fragment,null,Boolean(4&s)&&l.createElement(w,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:M,features:y.Focusable}),(0,f.sY)({ourProps:H,theirProps:p,defaultTag:"div",name:"FocusTrap"}),Boolean(4&s)&&l.createElement(w,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:M,features:y.Focusable}))})),N=Object.assign(H,{features:x}),Y=[];function z(e,n){var t=e.ownerDocument,r=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=(0,l.useRef)(Y.slice());return R((function(e,t){var r=(0,o.Z)(e,1)[0],a=(0,o.Z)(t,1)[0];!0===a&&!1===r&&(0,S.Y)((function(){n.current.splice(0)})),!1===a&&!0===r&&(n.current=Y.slice())}),[e,Y,n]),(0,T.z)((function(){var e;return null!=(e=n.current.find((function(e){return null!=e&&e.isConnected})))?e:null}))}(n);R((function(){n||(null==t?void 0:t.activeElement)===(null==t?void 0:t.body)&&(0,b.C5)(r())}),[n]),D((function(){n&&(0,b.C5)(r())}))}function B(e,n){var t,o=(0,r.Z)(e);try{for(o.s();!(t=o.n()).done;){if(t.value.contains(n))return!0}}catch(a){o.e(a)}finally{o.f()}return!1}!function(e){function n(){"loading"!==document.readyState&&(e(),document.removeEventListener("DOMContentLoaded",n))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",n),n())}((function(){function e(e){e.target instanceof HTMLElement&&e.target!==document.body&&Y[0]!==e.target&&(Y.unshift(e.target),Y=Y.filter((function(e){return null!=e&&e.isConnected})),Y.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})}));var V=t(4164),I=t(4705),j=(0,l.createContext)(!1);function _(){return(0,l.useContext)(j)}function W(e){return l.createElement(j.Provider,{value:e.force},e.children)}var q=t(3784),G=["target"];var U=l.Fragment;var K=l.Fragment,J=(0,l.createContext)(null);var Q=(0,l.createContext)(null);function X(){var e=(0,l.useContext)(Q),n=(0,l.useRef)([]),t=(0,T.z)((function(t){return n.current.push(t),e&&e.register(t),function(){return r(t)}})),r=(0,T.z)((function(t){var r=n.current.indexOf(t);-1!==r&&n.current.splice(r,1),e&&e.unregister(t)})),o=(0,l.useMemo)((function(){return{register:t,unregister:r,portals:n}}),[t,r,n]);return[n,(0,l.useMemo)((function(){return function(e){var n=e.children;return l.createElement(Q.Provider,{value:o},n)}}),[o])]}var $=(0,f.yV)((function(e,n){var t=e,r=(0,l.useRef)(null),a=(0,v.T)((0,v.h)((function(e){r.current=e})),n),u=(0,P.i)(r),i=function(e){var n=_(),t=(0,l.useContext)(J),r=(0,P.i)(e),a=(0,l.useState)((function(){if(!n&&null!==t||q.O.isServer)return null;var e=null==r?void 0:r.getElementById("headlessui-portal-root");if(e)return e;if(null===r)return null;var o=r.createElement("div");return o.setAttribute("id","headlessui-portal-root"),r.body.appendChild(o)})),u=(0,o.Z)(a,2),i=u[0],c=u[1];return(0,l.useEffect)((function(){null!==i&&(null!=r&&r.body.contains(i)||null==r||r.body.appendChild(i))}),[i,r]),(0,l.useEffect)((function(){n||null!==t&&c(t.current)}),[t,c,n]),i}(r),c=(0,l.useState)((function(){var e;return q.O.isServer?null:null!=(e=null==u?void 0:u.createElement("div"))?e:null})),s=(0,o.Z)(c,1)[0],d=(0,l.useContext)(Q),p=(0,g.H)();return(0,I.e)((function(){!i||!s||i.contains(s)||(s.setAttribute("data-headlessui-portal",""),i.appendChild(s))}),[i,s]),(0,I.e)((function(){if(s&&d)return d.register(s)}),[d,s]),D((function(){var e;!i||!s||(s instanceof Node&&i.contains(s)&&i.removeChild(s),i.childNodes.length<=0&&(null==(e=i.parentElement)||e.removeChild(i)))})),p&&i&&s?(0,V.createPortal)((0,f.sY)({ourProps:{ref:a},theirProps:t,defaultTag:U,name:"Portal"}),s):null})),ee=(0,f.yV)((function(e,n){var t=e.target,r=(0,a.Z)(e,G),o={ref:(0,v.T)(n)};return l.createElement(J.Provider,{value:t},(0,f.sY)({ourProps:o,theirProps:r,defaultTag:K,name:"Popover.Group"}))})),ne=Object.assign($,{Group:ee}),te=["id"],re=(0,l.createContext)(null);function oe(){var e=(0,l.useContext)(re);if(null===e){var n=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,oe),n}return e}var ae=(0,f.yV)((function(e,n){var t=(0,h.M)(),r=e.id,o=void 0===r?"headlessui-description-".concat(t):r,u=(0,a.Z)(e,te),i=oe(),l=(0,v.T)(n);(0,I.e)((function(){return i.register(o)}),[o,i.register]);var s=(0,c.Z)((0,c.Z)({ref:l},i.props),{},{id:o});return(0,f.sY)({ourProps:s,theirProps:u,slot:i.slot||{},defaultTag:"p",name:i.name||"Description"})})),ue=Object.assign(ae,{}),ie=t(4510),ce=(0,l.createContext)((function(){}));ce.displayName="StackContext";var le=function(e){return e[e.Add=0]="Add",e[e.Remove=1]="Remove",e}(le||{});function se(e){var n=e.children,t=e.onUpdate,r=e.type,o=e.element,a=e.enabled,u=(0,l.useContext)(ce),i=(0,T.z)((function(){null==t||t.apply(void 0,arguments),u.apply(void 0,arguments)}));return(0,I.e)((function(){var e=void 0===a||!0===a;return e&&i(0,r,o),function(){e&&i(1,r,o)}}),[i,r,o,a]),l.createElement(ce.Provider,{value:i},n)}var de=t(9541);var fe="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e===1/n)||e!==e&&n!==n},ve=l.useState,pe=l.useEffect,me=l.useLayoutEffect,he=l.useDebugValue;function ge(e){var n=e.getSnapshot,t=e.value;try{var r=n();return!fe(t,r)}catch(o){return!0}}"undefined"!=typeof window&&"undefined"!=typeof window.document&&window.document.createElement;var Ee=function(e){return e.useSyncExternalStore}(s);var ye=t(6958);function we(){var e;return{before:function(n){var t,r=n.doc,o=r.documentElement;e=(null!=(t=r.defaultView)?t:window).innerWidth-o.clientWidth},after:function(n){var t=n.doc,r=n.d,o=t.documentElement,a=o.clientWidth-o.offsetWidth,u=e-a;r.style(o,"paddingRight","".concat(u,"px"))}}}function be(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Te(){return be()?{before:function(){e=window.pageYOffset},after:function(n){var t=n.doc,r=n.d,o=n.meta;function a(e){return o.containers.flatMap((function(e){return e()})).some((function(n){return n.contains(e)}))}r.microTask((function(){if("auto"!==window.getComputedStyle(t.documentElement).scrollBehavior){var n=(0,ye.k)();n.style(t.documentElement,"scroll-behavior","auto"),r.add((function(){return r.microTask((function(){return n.dispose()}))}))}r.style(t.body,"marginTop","-".concat(e,"px")),window.scrollTo(0,0);var o=null;r.addEventListener(t,"click",(function(e){if(e.target instanceof HTMLElement)try{var n=e.target.closest("a");if(!n)return;var r=new URL(n.href).hash,u=t.querySelector(r);u&&!a(u)&&(o=u)}catch(i){}}),!0),r.addEventListener(t,"touchmove",(function(e){e.target instanceof HTMLElement&&!a(e.target)&&e.preventDefault()}),{passive:!1}),r.add((function(){window.scrollTo(0,window.pageYOffset+e),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)}))}))}}:{};var e}function Ce(e){var n,t={},o=(0,r.Z)(e);try{for(o.s();!(n=o.n()).done;){var a=n.value;Object.assign(t,a(t))}}catch(u){o.e(u)}finally{o.f()}return t}var Ze=function(e,n){var t=e(),r=new Set;return{getSnapshot:function(){return t},subscribe:function(e){return r.add(e),function(){return r.delete(e)}},dispatch:function(e){for(var o,a=arguments.length,u=new Array(a>1?a-1:0),i=1;i<a;i++)u[i-1]=arguments[i];var c=(o=n[e]).call.apply(o,[t].concat(u));c&&(t=c,r.forEach((function(e){return e()})))}}}((function(){return new Map}),{PUSH:function(e,n){var t,r=null!=(t=this.get(e))?t:{doc:e,count:0,d:(0,ye.k)(),meta:new Set};return r.count++,r.meta.add(n),this.set(e,r),this},POP:function(e,n){var t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT:function(e){var n={doc:e.doc,d:e.d,meta:Ce(e.meta)},t=[Te(),we(),{before:function(e){var n=e.doc;e.d.style(n.documentElement,"overflow","hidden")}}];t.forEach((function(e){var t=e.before;return null==t?void 0:t(n)})),t.forEach((function(e){var t=e.after;return null==t?void 0:t(n)}))},SCROLL_ALLOW:function(e){e.d.dispose()},TEARDOWN:function(e){var n=e.doc;this.delete(n)}});function Le(e,n,t){var r=function(e){return Ee(e.subscribe,e.getSnapshot,e.getSnapshot)}(Ze),o=e?r.get(e):void 0,a=!!o&&o.count>0;return(0,I.e)((function(){if(e&&n)return Ze.dispatch("PUSH",e,t),function(){return Ze.dispatch("POP",e,t)}}),[n,e]),a}Ze.subscribe((function(){var e,n=Ze.getSnapshot(),t=new Map,a=(0,r.Z)(n);try{for(a.s();!(e=a.n()).done;){var u=(0,o.Z)(e.value,1)[0];t.set(u,u.documentElement.style.overflow)}}catch(f){a.e(f)}finally{a.f()}var i,c=(0,r.Z)(n.values());try{for(c.s();!(i=c.n()).done;){var l=i.value,s="hidden"===t.get(l.doc),d=0!==l.count;(d&&!s||!d&&s)&&Ze.dispatch(l.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",l),0===l.count&&Ze.dispatch("TEARDOWN",l)}}catch(f){c.e(f)}finally{c.f()}}));var Pe=new Map,Me=new Map;function ke(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,I.e)((function(){var t;if(n){var r="function"==typeof e?e():e.current;if(r){var o=null!=(t=Me.get(r))?t:0;return Me.set(r,o+1),0!==o||(Pe.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(r){var n=null!=(e=Me.get(r))?e:1;if(1===n?Me.delete(r):Me.set(r,n-1),1===n){var t=Pe.get(r);t&&(null===t["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",t["aria-hidden"]),r.inert=t.inert,Pe.delete(r))}}}}}}),[e,n])}function Se(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.defaultContainers,o=void 0===t?[]:t,a=n.portals,u=n.mainTreeNodeRef,i=(0,l.useRef)(null!=(e=null==u?void 0:u.current)?e:null),c=(0,P.i)(i),s=(0,T.z)((function(){var e,n,t=[],u=(0,r.Z)(o);try{for(u.s();!(n=u.n()).done;){var l=n.value;null!==l&&(l instanceof HTMLElement?t.push(l):"current"in l&&l.current instanceof HTMLElement&&t.push(l.current))}}catch(h){u.e(h)}finally{u.f()}if(null!=a&&a.current){var s,d=(0,r.Z)(a.current);try{for(d.s();!(s=d.n()).done;){var f=s.value;t.push(f)}}catch(h){d.e(h)}finally{d.f()}}var v,p=(0,r.Z)(null!=(e=null==c?void 0:c.querySelectorAll("html > *, body > *"))?e:[]);try{var m=function(){var e=v.value;e!==document.body&&e!==document.head&&e instanceof HTMLElement&&"headlessui-portal-root"!==e.id&&(e.contains(i.current)||t.some((function(n){return e.contains(n)}))||t.push(e))};for(p.s();!(v=p.n()).done;)m()}catch(h){p.e(h)}finally{p.f()}return t}));return{resolveContainers:s,contains:(0,T.z)((function(e){return s().some((function(n){return n.contains(e)}))})),mainTreeNodeRef:i,MainTreeNode:(0,l.useMemo)((function(){return function(){return null!=u?null:l.createElement(w,{features:y.Hidden,ref:i})}}),[i,u])}}var Re,Oe=["id","open","onClose","initialFocus","__demoMode"],De=["id"],Fe=["id"],Ae=["id"],xe=["id"],He=((Re=He||{})[Re.Open=0]="Open",Re[Re.Closed=1]="Closed",Re),Ne=function(e){return e[e.SetTitleId=0]="SetTitleId",e}(Ne||{}),Ye=(0,i.Z)({},0,(function(e,n){return e.titleId===n.id?e:(0,c.Z)((0,c.Z)({},e),{},{titleId:n.id})})),ze=(0,l.createContext)(null);function Be(e){var n=(0,l.useContext)(ze);if(null===n){var t=new Error("<".concat(e," /> is missing a parent <Dialog /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,Be),t}return n}function Ve(e,n){return(0,d.E)(n.type,Ye,e,n)}ze.displayName="DialogContext";var Ie=f.AN.RenderStrategy|f.AN.Static;var je=(0,f.yV)((function(e,n){var t,c=(0,h.M)(),s=e.id,m=void 0===s?"headlessui-dialog-".concat(c):s,E=e.open,y=e.onClose,w=e.initialFocus,b=e.__demoMode,C=void 0!==b&&b,Z=(0,a.Z)(e,Oe),L=(0,l.useState)(0),M=(0,o.Z)(L,2),S=M[0],R=M[1],O=(0,ie.oJ)();void 0===E&&null!==O&&(E=(O&ie.ZM.Open)===ie.ZM.Open);var D=(0,l.useRef)(null),F=(0,v.T)(D,n),A=(0,P.i)(D),x=e.hasOwnProperty("open")||null!==O,H=e.hasOwnProperty("onClose");if(!x&&!H)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!x)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!H)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof E)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: ".concat(E));if("function"!=typeof y)throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: ".concat(y));var Y=E?0:1,z=(0,l.useReducer)(Ve,{titleId:null,descriptionId:null,panelRef:(0,l.createRef)()}),B=(0,o.Z)(z,2),V=B[0],I=B[1],j=(0,T.z)((function(){return y(!1)})),_=(0,T.z)((function(e){return I({type:0,id:e})})),q=!!(0,g.H)()&&(!C&&0===Y),G=S>1,U=null!==(0,l.useContext)(ze),K=X(),J=(0,o.Z)(K,2),Q=J[0],$=J[1],ee=Se({portals:Q,defaultContainers:[null!=(t=V.panelRef.current)?t:D.current]}),te=ee.resolveContainers,oe=ee.mainTreeNodeRef,ae=ee.MainTreeNode,ue=G?"parent":"leaf",ce=null!==O&&(O&ie.ZM.Closing)===ie.ZM.Closing,fe=!U&&!ce&&q,ve=(0,l.useCallback)((function(){var e,n;return null!=(n=Array.from(null!=(e=null==A?void 0:A.querySelectorAll("body > *"))?e:[]).find((function(e){return"headlessui-portal-root"!==e.id&&(e.contains(oe.current)&&e instanceof HTMLElement)})))?n:null}),[oe]);ke(ve,fe);var pe=!!G||q,me=(0,l.useCallback)((function(){var e,n;return null!=(n=Array.from(null!=(e=null==A?void 0:A.querySelectorAll("[data-headlessui-portal]"))?e:[]).find((function(e){return e.contains(oe.current)&&e instanceof HTMLElement})))?n:null}),[oe]);ke(me,pe);var he=!(!q||G);(0,de.O)(te,j,he);var ge=!(G||0!==Y);k(null==A?void 0:A.defaultView,"keydown",(function(e){ge&&(e.defaultPrevented||e.key===p.R.Escape&&(e.preventDefault(),e.stopPropagation(),j()))})),function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return[document.body]};Le(e,n,(function(e){var n;return{containers:[].concat((0,u.Z)(null!=(n=e.containers)?n:[]),[t])}}))}(A,!(ce||0!==Y||U),te),(0,l.useEffect)((function(){if(0===Y&&D.current){var e=new ResizeObserver((function(e){var n,t=(0,r.Z)(e);try{for(t.s();!(n=t.n()).done;){var o=n.value.target.getBoundingClientRect();0===o.x&&0===o.y&&0===o.width&&0===o.height&&j()}}catch(a){t.e(a)}finally{t.f()}}));return e.observe(D.current),function(){return e.disconnect()}}}),[Y,D,j]);var Ee=function(){var e=(0,l.useState)([]),n=(0,o.Z)(e,2),t=n[0],r=n[1];return[t.length>0?t.join(" "):void 0,(0,l.useMemo)((function(){return function(e){var n=(0,T.z)((function(e){return r((function(n){return[].concat((0,u.Z)(n),[e])})),function(){return r((function(n){var t=n.slice(),r=t.indexOf(e);return-1!==r&&t.splice(r,1),t}))}})),t=(0,l.useMemo)((function(){return{register:n,slot:e.slot,name:e.name,props:e.props}}),[n,e.slot,e.name,e.props]);return l.createElement(re.Provider,{value:t},e.children)}}),[r])]}(),ye=(0,o.Z)(Ee,2),we=ye[0],be=ye[1],Te=(0,l.useMemo)((function(){return[{dialogState:Y,close:j,setTitleId:_},V]}),[Y,V,j,_]),Ce=(0,l.useMemo)((function(){return{open:0===Y}}),[Y]),Ze={ref:F,id:m,role:"dialog","aria-modal":0===Y||void 0,"aria-labelledby":V.titleId,"aria-describedby":we};return l.createElement(se,{type:"Dialog",enabled:0===Y,element:D,onUpdate:(0,T.z)((function(e,n){var t;"Dialog"===n&&(0,d.E)(e,(t={},(0,i.Z)(t,le.Add,(function(){return R((function(e){return e+1}))})),(0,i.Z)(t,le.Remove,(function(){return R((function(e){return e-1}))})),t))}))},l.createElement(W,{force:!0},l.createElement(ne,null,l.createElement(ze.Provider,{value:Te},l.createElement(ne.Group,{target:D},l.createElement(W,{force:!1},l.createElement(be,{slot:Ce,name:"Dialog.Description"},l.createElement(N,{initialFocus:w,containers:te,features:q?(0,d.E)(ue,{parent:N.features.RestoreFocus,leaf:N.features.All&~N.features.FocusLock}):N.features.None},l.createElement($,null,(0,f.sY)({ourProps:Ze,theirProps:Z,slot:Ce,defaultTag:"div",features:Ie,visible:0===Y,name:"Dialog"}))))))))),l.createElement(ae,null))})),_e=(0,f.yV)((function(e,n){var t=(0,h.M)(),r=e.id,u=void 0===r?"headlessui-dialog-backdrop-".concat(t):r,i=(0,a.Z)(e,Fe),c=Be("Dialog.Backdrop"),s=(0,o.Z)(c,2),d=s[0].dialogState,p=s[1],m=(0,v.T)(n);(0,l.useEffect)((function(){if(null===p.panelRef.current)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")}),[p.panelRef]);var g=(0,l.useMemo)((function(){return{open:0===d}}),[d]);return l.createElement(W,{force:!0},l.createElement(ne,null,(0,f.sY)({ourProps:{ref:m,id:u,"aria-hidden":!0},theirProps:i,slot:g,defaultTag:"div",name:"Dialog.Backdrop"})))})),We=(0,f.yV)((function(e,n){var t=(0,h.M)(),r=e.id,u=void 0===r?"headlessui-dialog-panel-".concat(t):r,i=(0,a.Z)(e,Ae),c=Be("Dialog.Panel"),s=(0,o.Z)(c,2),d=s[0].dialogState,p=s[1],m=(0,v.T)(n,p.panelRef),g=(0,l.useMemo)((function(){return{open:0===d}}),[d]),E=(0,T.z)((function(e){e.stopPropagation()}));return(0,f.sY)({ourProps:{ref:m,id:u,onClick:E},theirProps:i,slot:g,defaultTag:"div",name:"Dialog.Panel"})})),qe=(0,f.yV)((function(e,n){var t=(0,h.M)(),r=e.id,u=void 0===r?"headlessui-dialog-overlay-".concat(t):r,i=(0,a.Z)(e,De),c=Be("Dialog.Overlay"),s=(0,o.Z)(c,1)[0],d=s.dialogState,p=s.close,g=(0,v.T)(n),E=(0,T.z)((function(e){if(e.target===e.currentTarget){if((0,m.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),p()}})),y=(0,l.useMemo)((function(){return{open:0===d}}),[d]);return(0,f.sY)({ourProps:{ref:g,id:u,"aria-hidden":!0,onClick:E},theirProps:i,slot:y,defaultTag:"div",name:"Dialog.Overlay"})})),Ge=(0,f.yV)((function(e,n){var t=(0,h.M)(),r=e.id,u=void 0===r?"headlessui-dialog-title-".concat(t):r,i=(0,a.Z)(e,xe),c=Be("Dialog.Title"),s=(0,o.Z)(c,1)[0],d=s.dialogState,p=s.setTitleId,m=(0,v.T)(n);(0,l.useEffect)((function(){return p(u),function(){return p(null)}}),[u,p]);var g=(0,l.useMemo)((function(){return{open:0===d}}),[d]);return(0,f.sY)({ourProps:{ref:m,id:u},theirProps:i,slot:g,defaultTag:"h2",name:"Dialog.Title"})})),Ue=Object.assign(je,{Backdrop:_e,Panel:We,Overlay:qe,Title:Ge,Description:ue})},8493:function(e,n,t){var r=t(4925),o=t(2791),a=["title","titleId"];var u=o.forwardRef((function(e,n){var t=e.title,u=e.titleId,i=(0,r.Z)(e,a);return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":u},i),t?o.createElement("title",{id:u},t):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"}))}));n.Z=u}}]);
//# sourceMappingURL=734.e54ab869.chunk.js.map