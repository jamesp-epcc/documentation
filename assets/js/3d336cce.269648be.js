"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3229],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>h});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(r),g=n,h=p["".concat(u,".").concat(g)]||p[g]||m[g]||i;return r?a.createElement(h,s(s({ref:t},c),{},{components:r})):a.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},80194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(58168),n=r(98587),i=(r(96540),r(15680)),s=["components"],o={title:"1.16.0"},u=void 0,l={unversionedId:"release-notes/1.16.0",id:"release-notes/1.16.0",title:"1.16.0",description:"General",source:"@site/../docs/release-notes/1.16.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.16.0",permalink:"/documentation/release-notes/1.16.0",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.16.0.md",tags:[],version:"current",frontMatter:{title:"1.16.0"}},c={},p=[{value:"General",id:"general",level:2},{value:"Upgrade instructions",id:"upgrade-instructions",level:3},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Features",id:"features-1",level:3},{value:"Enhancements",id:"enhancements-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-2",level:3}],m={toc:p},g="wrapper";function h(e){var t=e.components,r=(0,n.A)(e,s);return(0,i.yg)(g,(0,a.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"upgrade-instructions"},"Upgrade instructions"),(0,i.yg)("p",null,"This feature release requires a database schema update. Please consult the documentation about updating your database schema."),(0,i.yg)("h3",{id:"features"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Documentation: Add new unique index to oracle schema file ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/762"},"#762")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Define a proper interface for the rucio transfertool ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/954"},"#954"))),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Add client tests and packaging validation for python 2.6, 2,7, 3.4, 3.5, 3.6 in travis ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1017"},"#1017")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Fix permissions for CMS ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1005"},"#1005")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: CMS schema is too permissive ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1007"},"#1007")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: core package updates ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1080"},"#1080")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Add rucio daemons CLIS as command-Line applications and entry points ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/992"},"#992")),(0,i.yg)("li",{parentName:"ul"},"Documentation: add documentation build validation in travis ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1025"},"#1025")),(0,i.yg)("li",{parentName:"ul"},"Documentation: Add release notes to repository ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/912"},"#912")),(0,i.yg)("li",{parentName:"ul"},"remove unused file from common ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1083"},"#1083")),(0,i.yg)("li",{parentName:"ul"},"Probes & Alarms: nagios: sync root internal proxies ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1032"},"#1032")),(0,i.yg)("li",{parentName:"ul"},"Release management: Add python2.7 conditional requirements to core dependencies to support pip py3 installation ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1009"},"#1009")),(0,i.yg)("li",{parentName:"ul"},"Release management: flake8 package update to 3.5.0 ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1012"},"#1012")),(0,i.yg)("li",{parentName:"ul"},"Release management: Extend setup.py with dev requirements/dependencies in extra-requires ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1020"},"#1020")),(0,i.yg)("li",{parentName:"ul"},"Release management: setuptools package update to 39.0.1    ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1024"},"#1024")),(0,i.yg)("li",{parentName:"ul"},"Testing: Extend travis with matrix expansion to tests in parallel several configurations (py26, 27, 3, mysql, oracle, postgresl, etc )  ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1018"},"#1018")),(0,i.yg)("li",{parentName:"ul"},"Testing: Add flake8 and pylint python 3 syntax check for rucio (allow_failures mode) ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1019"},"#1019")),(0,i.yg)("li",{parentName:"ul"},"Testing: add sqlite backend tests to Travis ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1022"},"#1022")),(0,i.yg)("li",{parentName:"ul"},"Testing: Change pep8 to pycodestyle ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1039"},"#1039"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Core & Internals:  Adding existing files to archive fails ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1051"},"#1051")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: core: rse add protocols does not set third_party_copy ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1057"},"#1057")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Transfer : verify_checksum is not properly passed to FTS ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1040"},"#1040")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Transfer : Fix compatible transfers mapping ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1060"},"#1060"))),(0,i.yg)("h2",{id:"clients"},"Clients"),(0,i.yg)("h3",{id:"features-1"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Possibility to pass a timeout for a protocol ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/27"},"#27"))),(0,i.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Clients: configurable transfer_timeout in rucio.cfg ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1038"},"#1038")),(0,i.yg)("li",{parentName:"ul"},"Clients: package updates ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1078"},"#1078")),(0,i.yg)("li",{parentName:"ul"},"Clients: Documentation and cleanup of downloadclient and uploadclient ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/717"},"#717"))),(0,i.yg)("h2",{id:"webui"},"WebUI"),(0,i.yg)("h3",{id:"enhancements-2"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"WebUI: Automatic file transfers for non-WebDAV enabled sites ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/666"},"#666"))))}h.isMDXComponent=!0}}]);