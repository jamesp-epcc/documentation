"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6049],{15680:(e,r,n)=>{n.d(r,{xA:()=>l,yg:()=>d});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||c;return n?t.createElement(d,i(i({ref:r},l),{},{components:n})):t.createElement(d,i({ref:r},l))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=f;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41476:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=n(58168),o=n(98587),c=(n(96540),n(15680)),i=["components"],a={title:"rucio-cache-consumer"},u=void 0,s={unversionedId:"bin/rucio-cache-consumer",id:"bin/rucio-cache-consumer",title:"rucio-cache-consumer",description:"",source:"@site/../docs/bin/rucio-cache-consumer.md",sourceDirName:"bin",slug:"/bin/rucio-cache-consumer",permalink:"/documentation/bin/rucio-cache-consumer",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-cache-consumer.md",tags:[],version:"current",frontMatter:{title:"rucio-cache-consumer"},sidebar:"docs",previous:{title:"rucio-cache-client",permalink:"/documentation/bin/rucio-cache-client"},next:{title:"rucio-conveyor-finisher",permalink:"/documentation/bin/rucio-conveyor-finisher"}},l={},p=[],m={toc:p},f="wrapper";function d(e){var r=e.components,n=(0,o.A)(e,i);return(0,c.yg)(f,(0,t.A)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,c.yg)("pre",null,(0,c.yg)("code",{parentName:"pre"},"usage: rucio-cache-consumer [-h] [--num-thread NUM_THREAD]\n\nRucio Cache Consumer is a daemon to add/delete cache replicas to Rucio\ncatalog.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --num-thread NUM_THREAD\n                        Concurrency control: threads number\n")))}d.isMDXComponent=!0}}]);