"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8536],{28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var t=o(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}},47235:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"bin/rucio-conveyor-stager","title":"rucio-conveyor-stager","description":"","source":"@site/../docs/bin/rucio-conveyor-stager.md","sourceDirName":"bin","slug":"/bin/rucio-conveyor-stager","permalink":"/documentation/bin/rucio-conveyor-stager","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-conveyor-stager.md","tags":[],"version":"current","frontMatter":{"title":"rucio-conveyor-stager"},"sidebar":"docs","previous":{"title":"rucio-conveyor-receiver","permalink":"/documentation/bin/rucio-conveyor-receiver"},"next":{"title":"rucio-conveyor-submitter","permalink":"/documentation/bin/rucio-conveyor-submitter"}}');var r=o(74848),s=o(28453);const i={title:"rucio-conveyor-stager"},c=void 0,u={},l=[];function a(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"usage: rucio-conveyor-stager [-h] [--run-once] [--total-threads TOTAL_THREADS]\n                             [--bulk BULK] [--group-bulk GROUP_BULK]\n                             [--group-policy GROUP_POLICY]\n                             [--source-strategy SOURCE_STRATEGY]\n                             [--exclude-rses EXCLUDE_RSES]\n                             [--include-rses INCLUDE_RSES]\n                             [--rses RSES [RSES ...]] [--vos VOS [VOS ...]]\n                             [--activities ACTIVITIES [ACTIVITIES ...]]\n                             [--sleep-time SLEEP_TIME]\n\nThe conveyor-stager is responsible for issuing staging requests to the tape\nsystem.\n\noptions:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --total-threads TOTAL_THREADS\n                        Concurrency control: total number of threads per\n                        process\n  --bulk BULK           Bulk control: number of requests\n  --group-bulk GROUP_BULK\n                        Group control: number of requests per group\n  --group-policy GROUP_POLICY\n                        Group control: policy used to group. enum{rule, dest,\n                        src_dest, rule_src_dest}\n  --source-strategy SOURCE_STRATEGY\n                        Source strategy. Overload the strategy defined in\n                        config DB.\n  --exclude-rses EXCLUDE_RSES\n                        RSE expression to exclude\n  --include-rses INCLUDE_RSES\n                        RSE expression to include\n  --rses RSES [RSES ...]\n                        Explicit list of RSEs to include\n  --vos VOS [VOS ...]   Optional list of VOs to consider. Only used in multi-\n                        VO mode.\n  --activities ACTIVITIES [ACTIVITIES ...]\n                        Explicit list of activities to include\n  --sleep-time SLEEP_TIME\n                        Seconds to sleep if few requests\n"})})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);