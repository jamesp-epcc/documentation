"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[982],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>h});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),g=a,h=p["".concat(u,".").concat(g)]||p[g]||m[g]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},27727:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(58168),a=r(98587),i=(r(96540),r(15680)),o=["components"],s={title:"1.18.9"},u=void 0,l={unversionedId:"release-notes/1.18.9",id:"release-notes/1.18.9",title:"1.18.9",description:"General",source:"@site/../docs/release-notes/1.18.9.md",sourceDirName:"release-notes",slug:"/release-notes/1.18.9",permalink:"/documentation/release-notes/1.18.9",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.18.9.md",tags:[],version:"current",frontMatter:{title:"1.18.9"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-2",level:3}],m={toc:p},g="wrapper";function h(e){var t=e.components,r=(0,a.A)(e,o);return(0,i.yg)(g,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Accounting & Dumps: Decrease chunksize in add_constituents_to_archive from 50 to 20 ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1987"},"#1987")),(0,i.yg)("li",{parentName:"ul"},"Consistency checks: Automatically report LOST files as suspicious ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1954"},"#1954")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Wrong cms RSE name pattern used when attaching dids ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1901"},"#1901")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: add default value to config table ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1948"},"#1948")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Add caching (memcache) to config table methods ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1958"},"#1958")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Adapt thread handling of abbacus rse and account ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1985"},"#1985")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Add schema and construct surl method for Belle2 ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2007"},"#2007")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Porting oracle jobs/procedures to non-oracle backends ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/524"},"#524")),(0,i.yg)("li",{parentName:"ul"},"Dataset deletion: Make undertaker expire_rules size configurable ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1932"},"#1932")),(0,i.yg)("li",{parentName:"ul"},"Documentation: Update Oracle schema/procedures/trigger definition ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1945"},"#1945")),(0,i.yg)("li",{parentName:"ul"},"Probes & Alarms: ATLAS: Probe need to set quota for groups on SCRATCHDISK endpoints ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1973"},"#1973")),(0,i.yg)("li",{parentName:"ul"},"Release management: Update docker README and docs ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1898"},"#1898")),(0,i.yg)("li",{parentName:"ul"},"Release management: add new schema for DOMA TPC tests ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1942"},"#1942"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Metalink redirector sort=geoip seems to remove all urls ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2001"},"#2001")),(0,i.yg)("li",{parentName:"ul"},"Rules: Injector can crash when split_container option is enabled ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1976"},"#1976")),(0,i.yg)("li",{parentName:"ul"},"Testing: fix caching problem in config core for running tests ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2000"},"#2000")),(0,i.yg)("li",{parentName:"ul"},"Transfers: stager_area RSEs don't work with a non-deterministic source RSE ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1967"},"#1967")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Adding a rule for a staging area without a lifetime causes an internal server error ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1970"},"#1970"))),(0,i.yg)("h2",{id:"clients"},"Clients"),(0,i.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: client_extract=True replicas need to be extracted from the zip file ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1354"},"#1354")),(0,i.yg)("li",{parentName:"ul"},"Clients: Call list_replicas in downloadclient only once ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1427"},"#1427"))),(0,i.yg)("h3",{id:"bugs-1"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Erroneous rucio download summary info ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1512"},"#1512"))),(0,i.yg)("h2",{id:"webui"},"WebUI"),(0,i.yg)("h3",{id:"enhancements-2"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"WebUI: Show users w/o quota but with used space on an RSE in the quota view ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1955"},"#1955"))))}h.isMDXComponent=!0}}]);