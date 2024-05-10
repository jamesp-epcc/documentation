"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4020],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=r(58168),a=r(98587),o=(r(96540),r(15680)),i=["components"],c={title:"Subscriptions"},s=void 0,l={unversionedId:"started/concepts/subscriptions",id:"started/concepts/subscriptions",title:"Subscriptions",description:"Rucio Subscriptions exist for the purpose of making data placement",source:"@site/../docs/started/concepts/subscriptions.md",sourceDirName:"started/concepts",slug:"/started/concepts/subscriptions",permalink:"/documentation/started/concepts/subscriptions",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/subscriptions.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1715169304,formattedLastUpdatedAt:"May 8, 2024",frontMatter:{title:"Subscriptions"},sidebar:"docs",previous:{title:"Notifications",permalink:"/documentation/started/concepts/notifications"},next:{title:"Typical Replica Workflow",permalink:"/documentation/started/concepts/replica_workflow"}},p={},u=[],d={toc:u},m="wrapper";function y(e){var t=e.components,r=(0,a.A)(e,i);return(0,o.yg)(m,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Rucio Subscriptions exist for the purpose of making data placement\ndecisions before the actual data has been created. Subscriptions\ngenerate rules for new datasets based on matching metadata at\nregistration time. Subscriptions are owned by an account and can only\ngenerate rules for that account. Policies may have a lifetime, after\nwhich they will expire."),(0,o.yg)("p",null,"An example of a subscription is given below:"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Attribute"),(0,o.yg)("th",{parentName:"tr",align:null},"Value"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Owner"),(0,o.yg)("td",{parentName:"tr",align:null},"tzero")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"match"),(0,o.yg)("td",{parentName:"tr",align:null},"project=data11 7TeV, dataType=RAW, stream=physics","*")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"rule"),(0,o.yg)("td",{parentName:"tr",align:null},"1\\@CERNTAPE, 1\\@T1TAPE")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"lifetime"),(0,o.yg)("td",{parentName:"tr",align:null},"2012-01-01 00:00")))))}y.isMDXComponent=!0}}]);