"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9398],{15680:(e,r,n)=>{n.d(r,{xA:()=>l,yg:()=>m});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},E=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=s(n),E=o,m=p["".concat(u,".").concat(E)]||p[E]||d[E]||i;return n?t.createElement(m,c(c({ref:r},l),{},{components:n})):t.createElement(m,c({ref:r},l))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=E;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}E.displayName="MDXCreateElement"},67254:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=n(58168),o=n(98587),i=(n(96540),n(15680)),c=["components"],a={title:"rucio-reaper"},u=void 0,s={unversionedId:"bin/rucio-reaper",id:"bin/rucio-reaper",title:"rucio-reaper",description:"",source:"@site/../docs/bin/rucio-reaper.md",sourceDirName:"bin",slug:"/bin/rucio-reaper",permalink:"/documentation/bin/rucio-reaper",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-reaper.md",tags:[],version:"current",frontMatter:{title:"rucio-reaper"},sidebar:"docs",previous:{title:"rucio-oauth-manager",permalink:"/documentation/bin/rucio-oauth-manager"},next:{title:"rucio-replica-recoverer",permalink:"/documentation/bin/rucio-replica-recoverer"}},l={},p=[],d={toc:p},E="wrapper";function m(e){var r=e.components,n=(0,o.A)(e,c);return(0,i.yg)(E,(0,t.A)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"usage: rucio-reaper [-h] [--run-once] [--threads THREADS]\n                    [--chunk_size CHUNK_SIZE] [--sleep-time SLEEP_TIME]\n                    [--greedy] [--exclude-rses EXCLUDE_RSES]\n                    [--include-rses INCLUDE_RSES] [--rses RSES [RSES ...]]\n                    [--vos VOS [VOS ...]] [--delay-seconds DELAY_SECONDS]\n                    [--scheme SCHEME]\n                    [--auto_exclude_threshold AUTO_EXCLUDE_THRESHOLD]\n                    [--auto_exclude_timeout AUTO_EXCLUDE_TIMEOUT]\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            Runs one loop iteration\n  --threads THREADS     Concurrency control: number of threads\n  --chunk_size CHUNK_SIZE, --chunk-size CHUNK_SIZE\n                        The size used for a bulk deletion on on RSE\n  --sleep-time SLEEP_TIME\n                        Minimum time between 2 consecutive cycles\n  --greedy              To enable greedy mode. Deprecated, kept for\n                        compatibility reasons. Recommended way is to use RSE\n                        attribute greedyDeletion=True\n  --exclude-rses EXCLUDE_RSES\n                        RSE expression to exclude\n  --include-rses INCLUDE_RSES\n                        RSE expression to include\n  --rses RSES [RSES ...]\n                        Explicit list of RSEs to include. If empty, it\n                        considers all RSEs\n  --vos VOS [VOS ...]   Optional list of VOs to consider. Only used in multi-\n                        VO mode.\n  --delay-seconds DELAY_SECONDS\n                        The delay (seconds) to query replicas in BEING_DELETED\n                        state.\n  --scheme SCHEME       Force the reaper to use a particular protocol/scheme,\n                        e.g., mock\n  --auto_exclude_threshold AUTO_EXCLUDE_THRESHOLD, --auto-exclude-threshhold AUTO_EXCLUDE_THRESHOLD\n                        Number of service unavailable exceptions after which\n                        the RSE gets temporarily excluded.\n  --auto_exclude_timeout AUTO_EXCLUDE_TIMEOUT, --auto-exclude-timeout AUTO_EXCLUDE_TIMEOUT\n                        Timeout for temporarily excluded RSEs.\n")))}m.isMDXComponent=!0}}]);