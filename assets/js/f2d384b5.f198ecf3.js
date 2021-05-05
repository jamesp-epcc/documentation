(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{322:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return u})),n.d(r,"default",(function(){return p}));var t=n(3),o=n(7),a=(n(0),n(345)),i={title:"Running rucio-dark-reaper"},c={unversionedId:"bin/rucio-dark-reaper",id:"bin/rucio-dark-reaper",isDocsHomePage:!1,title:"Running rucio-dark-reaper",description:"`",source:"@site/../docs/bin/rucio-dark-reaper.md",sourceDirName:"bin",slug:"/bin/rucio-dark-reaper",permalink:"/documentation/bin/rucio-dark-reaper",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-dark-reaper.md",version:"current",frontMatter:{title:"Running rucio-dark-reaper"}},u=[],s={toc:u};function p(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"usage: rucio-dark-reaper [-h] [--run-once] [--total-workers TOTAL_WORKERS]\n                         [--chunk-size CHUNK_SIZE] [--scheme SCHEME]\n                         [--rses RSES [RSES ...]]\n                         [--exclude-rses EXCLUDE_RSES]\n                         [--include-rses INCLUDE_RSES] [--vos VOS [VOS ...]]\n\nThe Dark-Reaper daemon is responsible for the deletion of quarantined\nreplicas.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --total-workers TOTAL_WORKERS\n                        Total number of workers per process\n  --chunk-size CHUNK_SIZE\n                        Chunk size\n  --scheme SCHEME       Force the reaper to use a particular protocol, e.g.,\n                        mock.\n  --rses RSES [RSES ...]\n                        List of RSEs\n  --exclude-rses EXCLUDE_RSES\n                        RSEs expression to exclude RSEs\n  --include-rses INCLUDE_RSES\n                        RSEs expression to include RSEs\n  --vos VOS [VOS ...]   Optional list of VOs to consider. Only used in multi-\n                        VO mode.\n")))}p.isMDXComponent=!0},345:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var r=o.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=p(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),f=t,m=l["".concat(i,".").concat(f)]||l[f]||d[f]||a;return n?o.a.createElement(m,c(c({ref:r},s),{},{components:n})):o.a.createElement(m,c({ref:r},s))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);