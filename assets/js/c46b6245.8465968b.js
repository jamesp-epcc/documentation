"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8447],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>y});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,y=p["".concat(i,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},41139:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var n=r(58168),o=r(98587),a=(r(96540),r(15680)),l=["components"],c={title:"1.20.13"},i=void 0,u={unversionedId:"release-notes/1.20.13",id:"release-notes/1.20.13",title:"1.20.13",description:"General",source:"@site/../docs/release-notes/1.20.13.md",sourceDirName:"release-notes",slug:"/release-notes/1.20.13",permalink:"/documentation/release-notes/1.20.13",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.20.13.md",tags:[],version:"current",frontMatter:{title:"1.20.13"}},s={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3}],m={toc:p},f="wrapper";function y(e){var t=e.components,r=(0,o.A)(e,l);return(0,a.yg)(f,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Policies: Xenon LFN2PFN function ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4336"},"#4336"))),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Rules: core/rule.py reencodes meta over and over again ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4337"},"#4337"))))}y.isMDXComponent=!0}}]);