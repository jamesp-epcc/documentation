"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1037],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,y=p["".concat(s,".").concat(g)]||p[g]||m[g]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},24574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(58168),a=r(98587),i=(r(96540),r(15680)),o=["components"],l={title:"34.3.0"},s=void 0,u={unversionedId:"release-notes/34.3.0",id:"release-notes/34.3.0",title:"34.3.0",description:"General",source:"@site/../docs/release-notes/34.3.0.md",sourceDirName:"release-notes",slug:"/release-notes/34.3.0",permalink:"/documentation/release-notes/34.3.0",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/34.3.0.md",tags:[],version:"current",frontMatter:{title:"34.3.0"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3}],m={toc:p},g="wrapper";function y(e){var t=e.components,r=(0,a.A)(e,o);return(0,i.yg)(g,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Collect functional RSE attributes into a single file ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6624"},"#6624")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Security: Third-party GH workflow actions are not pinned by full commit SHA ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6704"},"#6704")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Remove deprecated ",(0,i.yg)("inlineCode",{parentName:"li"},"typing")," imports ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6720"},"#6720"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Database: Fix ",(0,i.yg)("inlineCode",{parentName:"li"},"sqlalchemy.exc.NoResultFound")," imports (currently ",(0,i.yg)("inlineCode",{parentName:"li"},"sqlalchemy.orm.exc.NoResultFound"),") ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6682"},"#6682")),(0,i.yg)("li",{parentName:"ul"},"Documentation: Wrong example in rucio-admin list account example ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6672"},"#6672")),(0,i.yg)("li",{parentName:"ul"},"Messaging: Hermes: username not assigned when use_ssl: True causes an error ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6358"},"#6358")),(0,i.yg)("li",{parentName:"ul"},"Rules: Wrong specification for \u2018Create a new replication rule\u2019 ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6515"},"#6515")),(0,i.yg)("li",{parentName:"ul"},"Testing: ",(0,i.yg)("inlineCode",{parentName:"li"},"xmlsec"),"-related failures in CI/CD ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6694"},"#6694"))))}y.isMDXComponent=!0}}]);