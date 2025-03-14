"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4889],{28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var t=o(96540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}},31638:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"bin/rucio-bb8","title":"rucio-bb8","description":"","source":"@site/../docs/bin/rucio-bb8.md","sourceDirName":"bin","slug":"/bin/rucio-bb8","permalink":"/documentation/bin/rucio-bb8","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-bb8.md","tags":[],"version":"current","frontMatter":{"title":"rucio-bb8"},"sidebar":"docs","previous":{"title":"rucio-automatix","permalink":"/documentation/bin/rucio-automatix"},"next":{"title":"rucio-cache-client","permalink":"/documentation/bin/rucio-cache-client"}}');var r=o(74848),i=o(28453);const s={title:"rucio-bb8"},c=void 0,a={},u=[];function d(e){const n={code:"code",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"usage: rucio-bb8 [-h] [--rse RSE] [--bytes BYTES] [--run-once]\n                 [--sleep-time SLEEP_TIME] [--threads THREADS] [--dry-run]\n                 [--exclude-expression EXCLUDE_EXPRESSION] [--comment COMMENT]\n                 [--force-expression FORCE_EXPRESSION] [--decommission]\n                 [--priority PRIORITY]\n                 [--source-replica-expression SOURCE_REPLICA_EXPRESSION]\n\nThe BB8 daemon is responsible for rebalancing data between RSEs.\n\noptions:\n  -h, --help            show this help message and exit\n  --rse RSE             RSE to rebalance. Can be either a RSE or RSE\n                        expression.\n  --bytes BYTES         Number of bytes to expected to be rebalanced. It is a\n                        goal without guarantees\n  --run-once            One iteration only\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n  --threads THREADS     Concurrency control: total number of threads for this\n                        process\n  --dry-run             Only run in dry-run mode\n  --exclude-expression EXCLUDE_EXPRESSION\n                        Exclude these rse_expression from being destinations\n  --comment COMMENT     Add a comment to the new rules\n  --force-expression FORCE_EXPRESSION\n                        For this rse_expression for rebalanced rules instead\n                        of letting BB8 decide\n  --decommission        Run BB8 in decommission mode\n  --priority PRIORITY   Priority for the newly created rules\n  --source-replica-expression SOURCE_REPLICA_EXPRESSION\n                        Source replica expression for the newly created rules\n"})})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);