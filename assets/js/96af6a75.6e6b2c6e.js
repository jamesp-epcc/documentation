"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8924],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,y=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39159:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(58168),i=r(98587),o=(r(96540),r(15680)),a=["components"],l={title:"1.29.9"},s=void 0,u={unversionedId:"release-notes/1.29.9",id:"release-notes/1.29.9",title:"1.29.9",description:"General",source:"@site/../docs/release-notes/1.29.9.md",sourceDirName:"release-notes",slug:"/release-notes/1.29.9",permalink:"/documentation/release-notes/1.29.9",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.29.9.md",tags:[],version:"current",frontMatter:{title:"1.29.9"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Bugs",id:"bugs-2",level:3}],g={toc:p},m="wrapper";function y(e){var t=e.components,r=(0,i.A)(e,a);return(0,o.yg)(m,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"general"},"General"),(0,o.yg)("h3",{id:"enhancements"},"Enhancements"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"REST & API: server should respond with a HTTP 503 in case of \u2018Details: QueuePool limit of size X overflow X reached, connection timed out, timeout X\u2019  ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5080"},"#5080")),(0,o.yg)("li",{parentName:"ul"},"Subscriptions: Add the possibility to filter on average file size ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5927"},"#5927"))),(0,o.yg)("h3",{id:"bugs"},"Bugs"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Functional tests: Automatix / transmogrifier race condition ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5945"},"#5945")),(0,o.yg)("li",{parentName:"ul"},"Transfers: throttler releases less requests than the available quota ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5951"},"#5951"))),(0,o.yg)("h2",{id:"clients"},"Clients"),(0,o.yg)("h3",{id:"bugs-1"},"Bugs"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Clients: Fix UnicodeEncodeError while using PDB in baseclient.py _send_request ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5949"},"#5949"))),(0,o.yg)("h2",{id:"webui"},"WebUI"),(0,o.yg)("h3",{id:"bugs-2"},"Bugs"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"WebUI: Incorrect size calculation in R2D2 ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5973"},"#5973"))))}y.isMDXComponent=!0}}]);