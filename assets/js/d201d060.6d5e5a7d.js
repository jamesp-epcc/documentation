"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7902],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,y=p["".concat(u,".").concat(m)]||p[m]||g[m]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71159:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(58168),a=r(98587),i=(r(96540),r(15680)),o=["components"],s={title:"1.27.7"},u=void 0,l={unversionedId:"release-notes/1.27.7",id:"release-notes/1.27.7",title:"1.27.7",description:"General",source:"@site/../docs/release-notes/1.27.7.md",sourceDirName:"release-notes",slug:"/release-notes/1.27.7",permalink:"/documentation/release-notes/1.27.7",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.27.7.md",tags:[],version:"current",frontMatter:{title:"1.27.7"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"WebUI",id:"webui",level:2},{value:"Bugs",id:"bugs-1",level:3}],g={toc:p},m="wrapper";function y(e){var t=e.components,r=(0,a.A)(e,o);return(0,i.yg)(m,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Remove hard coded value for GCS storage elements ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5222"},"#5222")),(0,i.yg)("li",{parentName:"ul"},"Database: Add query hints to three queries ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5271"},"#5271")),(0,i.yg)("li",{parentName:"ul"},"REST & API: Add a Rest Api Documentation linter ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5209"},"#5209")),(0,i.yg)("li",{parentName:"ul"},"Recovery: Minos/Bad replicas database inefficiency ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5266"},"#5266")),(0,i.yg)("li",{parentName:"ul"},"Replicas: Provide the possibility to specify PFNs or DIDs in declare_bad_file_replicas ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5033"},"#5033")),(0,i.yg)("li",{parentName:"ul"},"Testing: disable test_conveyor in integration tests ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5243"},"#5243")),(0,i.yg)("li",{parentName:"ul"},"Testing: Print the integration test server logs in the actions ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5253"},"#5253")),(0,i.yg)("li",{parentName:"ul"},"Testing: Use LTS base containers for integration tests in release branches. ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5256"},"#5256")),(0,i.yg)("li",{parentName:"ul"},"Traces: bulk updates for trace schemas ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5265"},"#5265"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Multi VO: Objectstore uploads are broken in multi VO Rucio ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5235"},"#5235")),(0,i.yg)("li",{parentName:"ul"},"Release management: Flask fails after itsdangerous module\u2019s update ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5258"},"#5258"))),(0,i.yg)("h2",{id:"webui"},"WebUI"),(0,i.yg)("h3",{id:"bugs-1"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"WebUI: ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4556"},"#4556")," introduced a syntax error ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5278"},"#5278"))))}y.isMDXComponent=!0}}]);