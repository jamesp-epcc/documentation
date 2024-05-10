"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7124],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>h});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=o(r),g=i,h=p["".concat(l,".").concat(g)]||p[g]||m[g]||a;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=g;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:i,s[1]=u;for(var o=2;o<a;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},23322:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>u,metadata:()=>o,toc:()=>p});var n=r(58168),i=r(98587),a=(r(96540),r(15680)),s=["components"],u={title:"1.25.2"},l=void 0,o={unversionedId:"release-notes/1.25.2",id:"release-notes/1.25.2",title:"1.25.2",description:"General",source:"@site/../docs/release-notes/1.25.2.md",sourceDirName:"release-notes",slug:"/release-notes/1.25.2",permalink:"/documentation/release-notes/1.25.2",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.25.2.md",tags:[],version:"current",frontMatter:{title:"1.25.2"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-2",level:3},{value:"Bugs",id:"bugs-2",level:3}],m={toc:p},g="wrapper";function h(e){var t=e.components,r=(0,i.A)(e,s);return(0,a.yg)(g,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Core & Internals: Fix Docstring in core/quarantined_replica.py ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4417"},"#4417")),(0,a.yg)("li",{parentName:"ul"},"Core & Internals: Heartbeat cleanup ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4459"},"#4459")),(0,a.yg)("li",{parentName:"ul"},"Documentation: Documentation: Advance Usage & Client Pages Not Working as intended ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4435"},"#4435")),(0,a.yg)("li",{parentName:"ul"},"Release management: Update urllib3 to 1.26.4 ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4489"},"#4489")),(0,a.yg)("li",{parentName:"ul"},"Testing: W605 invalid escape sequence  ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4430"},"#4430")),(0,a.yg)("li",{parentName:"ul"},"Transfers: Implement http-srm protocol ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4506"},"#4506"))),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Documentation: Links to disappeared documentation pages. ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2634"},"#2634")),(0,a.yg)("li",{parentName:"ul"},"Transfers: Bug in transfer core when no outbound distances ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4132"},"#4132"))),(0,a.yg)("h2",{id:"clients"},"Clients"),(0,a.yg)("h3",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: Relative transfer timeout for downloads ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4374"},"#4374"))),(0,a.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: API: Remove line in list-suspicious-replicas help text ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4485"},"#4485")),(0,a.yg)("li",{parentName:"ul"},"Rules: Allow updating rule comment ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4116"},"#4116"))),(0,a.yg)("h3",{id:"bugs-1"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: list-rse-attributes crashes cli for staging endpoints ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2258"},"#2258")),(0,a.yg)("li",{parentName:"ul"},"Clients: Checksum display uses scientific notation ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3365"},"#3365")),(0,a.yg)("li",{parentName:"ul"},"Clients: STORM-Rucio checksum mismatch when adler32 has leading ",(0,a.yg)("inlineCode",{parentName:"li"},"0"),"(s) ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3494"},"#3494")," ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3538"},"#3538")," ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4127"},"#4127")),(0,a.yg)("li",{parentName:"ul"},"Clients: Configparser loads entire ENV space ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4410"},"#4410"))),(0,a.yg)("h2",{id:"webui"},"WebUI"),(0,a.yg)("h3",{id:"enhancements-2"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'WebUI: Remove "old" dashboard link from Rucio UI ',(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3691"},"#3691")),(0,a.yg)("li",{parentName:"ul"},"WebUI: Remove reference to JIRA from Web UI ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4426"},"#4426"))),(0,a.yg)("h3",{id:"bugs-2"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"WebUI: Rule page shows RSE IDs instead of names ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2830"},"#2830"))))}h.isMDXComponent=!0}}]);