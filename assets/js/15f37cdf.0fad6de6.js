"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3056],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,y=p["".concat(l,".").concat(g)]||p[g]||m[g]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},77357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(58168),a=r(98587),o=(r(96540),r(15680)),i=["components"],s={title:"1.24.2"},l=void 0,u={unversionedId:"release-notes/1.24.2",id:"release-notes/1.24.2",title:"1.24.2",description:"General",source:"@site/../docs/release-notes/1.24.2.md",sourceDirName:"release-notes",slug:"/release-notes/1.24.2",permalink:"/documentation/release-notes/1.24.2",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.24.2.md",tags:[],version:"current",frontMatter:{title:"1.24.2"}},c={},p=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Features",id:"features-1",level:3}],m={toc:p},g="wrapper";function y(e){var t=e.components,r=(0,a.A)(e,i);return(0,o.yg)(g,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"general"},"General"),(0,o.yg)("h3",{id:"features"},"Features"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Transfers: Add deadline for Globus Online transfers to complete ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4110"},"#4110"))),(0,o.yg)("h3",{id:"enhancements"},"Enhancements"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Database: remove unnecessary prints from session.py ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4234"},"#4234")),(0,o.yg)("li",{parentName:"ul"},"Deletion: Temporarily exclude RSEs with a timeout to not impact general deletion rate ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/528"},"#528"))),(0,o.yg)("h3",{id:"bugs"},"Bugs"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Consistency checks: Auditor does not work with Python 3 ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4247"},"#4247")),(0,o.yg)("li",{parentName:"ul"},"Consistency checks: Dark Reaper does not work with Python 3 ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4256"},"#4256")),(0,o.yg)("li",{parentName:"ul"},"Core & Internals: Minos does not work for non-deterministic RSEs ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4209"},"#4209")),(0,o.yg)("li",{parentName:"ul"},"Core & Internals: Cannot declare bad PFNs ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4265"},"#4265")),(0,o.yg)("li",{parentName:"ul"},"Multi VO: Rucio single-VO should not check for permission on access_rule_vo ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4253"},"#4253")),(0,o.yg)("li",{parentName:"ul"},"Protocols: delete/rename function of rsemanager broken ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4246"},"#4246")),(0,o.yg)("li",{parentName:"ul"},"Recovery: PFNs that can\u2019t be matched to an RSE remain in the BadPFNs table forever ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4208"},"#4208")),(0,o.yg)("li",{parentName:"ul"},"Testing: Throttler tests have a weird understanding of time ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4232"},"#4232"))),(0,o.yg)("h2",{id:"clients"},"Clients"),(0,o.yg)("h3",{id:"features-1"},"Features"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Clients: Tape replicas when downloading. ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4193"},"#4193"))))}y.isMDXComponent=!0}}]);