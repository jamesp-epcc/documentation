"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8701],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,y=p["".concat(s,".").concat(m)]||p[m]||g[m]||a;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38589:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(58168),i=r(98587),a=(r(96540),r(15680)),o=["components"],l={title:"1.27.5"},s=void 0,u={unversionedId:"release-notes/1.27.5",id:"release-notes/1.27.5",title:"1.27.5",description:"General",source:"@site/../docs/release-notes/1.27.5.md",sourceDirName:"release-notes",slug:"/release-notes/1.27.5",permalink:"/documentation/release-notes/1.27.5",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.27.5.md",tags:[],version:"current",frontMatter:{title:"1.27.5"}},c={},p=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Bugs",id:"bugs-1",level:3}],g={toc:p},m="wrapper";function y(e){var t=e.components,r=(0,i.A)(e,o);return(0,a.yg)(m,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Documentation: Delete redundant README files ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5193"},"#5193"))),(0,a.yg)("h3",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Database: Add query hint to list_dids query ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5225"},"#5225")),(0,a.yg)("li",{parentName:"ul"},"Replicas: make geoip database expiration delay configurable ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5210"},"#5210")),(0,a.yg)("li",{parentName:"ul"},"Testing: fix flakiness in test-coveyor  ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5190"},"#5190")),(0,a.yg)("li",{parentName:"ul"},"Transfers: Homogenize daemon loops in conveyor ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5231"},"#5231"))),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Core & Internals: Bug in the filter_thread_work algorithm for Postgres backend ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5207"},"#5207")),(0,a.yg)("li",{parentName:"ul"},"Transfers: allow_user_oidc_tokens config item not retrieved as boolean ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5219"},"#5219"))),(0,a.yg)("h2",{id:"clients"},"Clients"),(0,a.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: user environment variables to override client_cert and client_key of rucio.cfg ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5216"},"#5216"))),(0,a.yg)("h2",{id:"webui"},"WebUI"),(0,a.yg)("h3",{id:"bugs-1"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"WebUI: Suspicious replicas page is misinterpreting the date picker ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4184"},"#4184"))))}y.isMDXComponent=!0}}]);