"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8253],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,y=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88740:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var n=r(58168),a=r(98587),o=(r(96540),r(15680)),i=["components"],c={title:"32.3.0"},l=void 0,s={unversionedId:"release-notes/32.3.0",id:"release-notes/32.3.0",title:"32.3.0",description:"General",source:"@site/../docs/release-notes/32.3.0.md",sourceDirName:"release-notes",slug:"/release-notes/32.3.0",permalink:"/documentation/release-notes/32.3.0",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/32.3.0.md",tags:[],version:"current",frontMatter:{title:"32.3.0"}},u={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3}],m={toc:p},f="wrapper";function y(e){var t=e.components,r=(0,a.A)(e,i);return(0,o.yg)(f,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"general"},"General"),(0,o.yg)("h3",{id:"enhancements"},"Enhancements"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Authentication & Authorisation: sqlalchemy deprecation warning in oauthmanager ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5838"},"#5838")),(0,o.yg)("li",{parentName:"ul"},"Core & Internals: rse_settings dictionary datatype ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5972"},"#5972")),(0,o.yg)("li",{parentName:"ul"},"Transfers: Allow for tape-to-tape transfer for QoS RSE ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6259"},"#6259"))))}y.isMDXComponent=!0}}]);