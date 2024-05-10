"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[978],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>d});var a=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=i,d=c["".concat(l,".").concat(m)]||c[m]||g[m]||n;return r?a.createElement(d,s(s({ref:t},p),{},{components:r})):a.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<n;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=r(58168),i=r(98587),n=(r(96540),r(15680)),s=["components"],o={title:"1.21.0"},l=void 0,u={unversionedId:"release-notes/1.21.0",id:"release-notes/1.21.0",title:"1.21.0",description:"Upgrade Instructions",source:"@site/../docs/release-notes/1.21.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.21.0",permalink:"/documentation/release-notes/1.21.0",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.21.0.md",tags:[],version:"current",frontMatter:{title:"1.21.0"}},p={},c=[{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3}],g={toc:c},m="wrapper";function d(e){var t=e.components,r=(0,i.A)(e,s);return(0,n.yg)(m,(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),(0,n.yg)("p",null,"This feature release requires a database schema upgrade. Please consult the ",(0,n.yg)("a",{parentName:"p",href:"https://rucio.readthedocs.io/en/latest/database.html"},"documentation")," about upgrading your database schema."),(0,n.yg)("p",null,"The following changes are necessary and are covered by the ",(0,n.yg)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Adding columns ",(0,n.yg)("inlineCode",{parentName:"p"},"created_at")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"updated_at")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"did_meta")," table. This only needs to be executed if the columns are not existing (Alembic revision ",(0,n.yg)("inlineCode",{parentName:"p"},"53b479c3cb0f"),")")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Adding ",(0,n.yg)("inlineCode",{parentName:"p"},"SAML")," as authentication typ to ",(0,n.yg)("inlineCode",{parentName:"p"},"identities")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"account_map")," tables (Alembic revision ",(0,n.yg)("inlineCode",{parentName:"p"},"9a1b149a2044"),")")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Adding ",(0,n.yg)("inlineCode",{parentName:"p"},"staging_started_at")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"staging_finished_at")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"requests")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"requests_history")," tables (Alembic revision ",(0,n.yg)("inlineCode",{parentName:"p"},"bc68e9946deb"),")")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Adding ",(0,n.yg)("inlineCode",{parentName:"p"},"third_party_copy_write")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"third_party_copy_read")," columns to ",(0,n.yg)("inlineCode",{parentName:"p"},"rse_protocols")," table (Alembic revision ",(0,n.yg)("inlineCode",{parentName:"p"},"2b69addda658"),")")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Added new ",(0,n.yg)("inlineCode",{parentName:"p"},"account_glob_limits")," table (Alembic revision ",(0,n.yg)("inlineCode",{parentName:"p"},"a74275a1ad30"),")")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Added new ",(0,n.yg)("inlineCode",{parentName:"p"},"dids_followed")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"dids_followed_events")," tables (Alembic revision ",(0,n.yg)("inlineCode",{parentName:"p"},"7541902bf173"),")")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Added ",(0,n.yg)("inlineCode",{parentName:"p"},"strategy"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"direction"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"deadline")," column to ",(0,n.yg)("inlineCode",{parentName:"p"},"rse_transfer_limits")," table (Alembic revision ",(0,n.yg)("inlineCode",{parentName:"p"},"810a41685bc1"),")"))),(0,n.yg)("h2",{id:"general"},"General"),(0,n.yg)("h3",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Core & Internals: Global account qutoas ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2315"},"#2315")),(0,n.yg)("li",{parentName:"ul"},"Core & Internals: Per-RSE checksum specification ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2498"},"#2498")),(0,n.yg)("li",{parentName:"ul"},"Core & Internals: Removal of fts3-rest-api dependency ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2518"},"#2518")),(0,n.yg)("li",{parentName:"ul"},"Core & Internals: Add Source rse mode to throttler ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2611"},"#2611")),(0,n.yg)("li",{parentName:"ul"},"Deletion: Use signed URLs when deleting from object stores ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2411"},"#2411")),(0,n.yg)("li",{parentName:"ul"},"Collection following mechanism ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2304"},"#2304")),(0,n.yg)("li",{parentName:"ul"},"Release management: Dependency upgrade for 1.21 ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3054"},"#3054")),(0,n.yg)("li",{parentName:"ul"},"Testing: flake8 and pycodestyles upgrade ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2156"},"#2156")),(0,n.yg)("li",{parentName:"ul"},"Testing: activate python3 client tests ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2943"},"#2943")),(0,n.yg)("li",{parentName:"ul"},"Transfers: Generic Multi-Hop transfers ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2632"},"#2632")),(0,n.yg)("li",{parentName:"ul"},"Transfers: Rucio support for Globus Online as a transfer tool ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2905"},"#2905")),(0,n.yg)("li",{parentName:"ul"},"Transfers: Add staging timestamps to request history ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3023"},"#3023")),(0,n.yg)("li",{parentName:"ul"},"WebUI: Login to WebUI with SSO ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2306"},"#2306")),(0,n.yg)("li",{parentName:"ul"},"WebUI: Create username/password authentication for Rucio WebUI ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2614"},"#2614"))),(0,n.yg)("h3",{id:"enhancements"},"Enhancements"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Core & Internals: S3 URL signing code should pass endpoint to boto3 ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2715"},"#2715")),(0,n.yg)("li",{parentName:"ul"},"Core & Internals: S3 URL signing code should use RSE name to index credentials ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2717"},"#2717")),(0,n.yg)("li",{parentName:"ul"},"Core & Internals: session() replaced by Session() in requests ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3011"},"#3011")),(0,n.yg)("li",{parentName:"ul"},"Core & Internals: Add a quota_approver similar to rule_approver ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3053"},"#3053")),(0,n.yg)("li",{parentName:"ul"},"Infrastructure: Add objectstore to development Docker image ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2855"},"#2855")),(0,n.yg)("li",{parentName:"ul"},"Infrastructure: Add a docker-compose that brings services up only listening on localhost ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2990"},"#2990")),(0,n.yg)("li",{parentName:"ul"},"Testing: fix setup problems in python3 travis tests ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2597"},"#2597")),(0,n.yg)("li",{parentName:"ul"},"Testing: Activate grouped FIFO tests for mysql ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2802"},"#2802")),(0,n.yg)("li",{parentName:"ul"},"Testing: Python 3.* tests for clients ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3032"},"#3032")),(0,n.yg)("li",{parentName:"ul"},"Transfers: Minor improvements to MultiHop algorithm ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3086"},"#3086"))),(0,n.yg)("h3",{id:"bugs"},"Bugs"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Core & Internals: problems upgrading to latest mysql/mariadb version ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2421"},"#2421")),(0,n.yg)("li",{parentName:"ul"},"Core & Internals: Missing created_at and updated_at columns in did_meta table ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2462"},"#2462")),(0,n.yg)("li",{parentName:"ul"},"Core & Internals: Integer attribute value '1' displayed as 'True' in the client.   ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2787"},"#2787")),(0,n.yg)("li",{parentName:"ul"},"Core & Internals: missing dot in schema in alembic scripts ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2823"},"#2823")),(0,n.yg)("li",{parentName:"ul"},"Core & Internals: check global quota in running RSESelector ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3070"},"#3070")),(0,n.yg)("li",{parentName:"ul"},"Core & Internals: delete_replica query on archive_contents uses too many bind variables ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3089"},"#3089")),(0,n.yg)("li",{parentName:"ul"},"Infrastructure: docker setup issues ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3038"},"#3038")),(0,n.yg)("li",{parentName:"ul"},"Release management: alembic cli not working ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2872"},"#2872")),(0,n.yg)("li",{parentName:"ul"},"Transfers: Failure with multihop in case an intermediate request already exists ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3078"},"#3078")),(0,n.yg)("li",{parentName:"ul"},"Transfers: Keyword argument error in conveyor ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3093"},"#3093"))),(0,n.yg)("h2",{id:"clients"},"Clients"),(0,n.yg)("h3",{id:"bugs-1"},"Bugs"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Clients: rucio client fails if username not defined ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3050"},"#3050"))))}d.isMDXComponent=!0}}]);