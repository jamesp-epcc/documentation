(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{225:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(345)),s={title:"Replication rule examples"},i={unversionedId:"replication_rules_examples",id:"replication_rules_examples",isDocsHomePage:!1,title:"Replication rule examples",description:"Replica management is based on replication rules defined on data",source:"@site/../docs/replication_rules_examples.md",sourceDirName:".",slug:"/replication_rules_examples",permalink:"/documentation/replication_rules_examples",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/replication_rules_examples.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1620234270,formattedLastUpdatedAt:"5/5/2021",frontMatter:{title:"Replication rule examples"}},c=[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}],l={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Replica management is based on replication rules defined on data\nidentifiers. A replication rule gets resolved and issues replica locks\non the physical replicas."),Object(o.b)("p",null,"A replication rule consists (besides other parameters) of a factor\nrepresenting the numbers of replicas wanted and a Rucio Storage Element\nExpression that allows to select a set of probable RSEs to store the\nreplicas."),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"rse_expressions.html"},Object(o.b)("strong",{parentName:"a"},"RSE Expression"))," gets resolved into a set of\nRSEs, which are possible destination RSEs for the number of replicas the\nuser wants to create."),Object(o.b)("p",null,"Is possible to find detailed information and examples about how to write\nRSE Expressions ",Object(o.b)("a",{parentName:"p",href:"rse_expressions.html"},Object(o.b)("strong",{parentName:"a"},"here")),"."),Object(o.b)("h2",{id:"example-1"},"Example 1"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"I want to have 2 replicas of first_dataset and second_dataset on Tier 1 RSEs")),Object(o.b)("p",null,"The number 2 ",Object(o.b)("em",{parentName:"p"},"second_dataset")," is the number of copies expected. At the\nend, the RSE Expression select all the Tier 1 RSEs as possible targets\nto store the replicas.:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"username@host:~$ rucio add-rule scope:first_dataset scope:second_dataset 2 'tier=1'\n")),Object(o.b)("p",null,"To see all the possible targets, ",Object(o.b)("strong",{parentName:"p"},"rucio list-rses")," command can be\nused:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"username@host:~$ rucio list-rses --expression 'tier=1'\n")),Object(o.b)("h2",{id:"example-2"},"Example 2"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"I want to have 2 replicas on whatever T2 RSEs in the UK but it\nshouldn\\'t be Glasgow"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"username@host:~$ rucio add-rule scope:first_dataset scope:second_dataset 2 'country=uk\\site=GLASGOW'\n")))}p.isMDXComponent=!0},345:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);