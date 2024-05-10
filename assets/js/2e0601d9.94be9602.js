"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7610],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=o,y=p["".concat(c,".").concat(g)]||p[g]||m[g]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},86076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(58168),o=n(98587),i=(n(96540),n(15680)),a=["components"],l={title:"1.21.11"},c=void 0,s={unversionedId:"release-notes/1.21.11",id:"release-notes/1.21.11",title:"1.21.11",description:"Clients",source:"@site/../docs/release-notes/1.21.11.md",sourceDirName:"release-notes",slug:"/release-notes/1.21.11",permalink:"/documentation/release-notes/1.21.11",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.21.11.md",tags:[],version:"current",frontMatter:{title:"1.21.11"}},u={},p=[{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3}],m={toc:p},g="wrapper";function y(e){var t=e.components,n=(0,o.A)(e,a);return(0,i.yg)(g,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"clients"},"Clients"),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: StoRM protocol logging, exceptions and getting etag ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3285"},"#3285"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: rucio-admin script does not call the get_account_limits() with the correct local/global locality ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3324"},"#3324")),(0,i.yg)("li",{parentName:"ul"},"Clients: Command-line option --rse does not validate the argument ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3368"},"#3368")),(0,i.yg)("li",{parentName:"ul"},"Clients: Command-line option --missing might not return some results ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3371"},"#3371"))))}y.isMDXComponent=!0}}]);