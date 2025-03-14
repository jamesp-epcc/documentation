"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1805],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}},35313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"bin/rucio-conveyor-throttler","title":"rucio-conveyor-throttler","description":"","source":"@site/../docs/bin/rucio-conveyor-throttler.md","sourceDirName":"bin","slug":"/bin/rucio-conveyor-throttler","permalink":"/documentation/bin/rucio-conveyor-throttler","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-conveyor-throttler.md","tags":[],"version":"current","frontMatter":{"title":"rucio-conveyor-throttler"},"sidebar":"docs","previous":{"title":"rucio-conveyor-submitter","permalink":"/documentation/bin/rucio-conveyor-submitter"},"next":{"title":"rucio-dark-reaper","permalink":"/documentation/bin/rucio-dark-reaper"}}');var o=n(74848),s=n(28453);const i={title:"rucio-conveyor-throttler"},c=void 0,a={},u=[];function l(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"usage: rucio-conveyor-throttler [-h] [--run-once] [--sleep-time SLEEP_TIME]\n\nThe Conveyor-Throttler daemon is responsible for managing the internal queue of transfer requests. Depending on transfer limits of current and waiting transfers, it decides whether a transfer should be put in the queue or not.\n\noptions:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --sleep-time SLEEP_TIME\n                        Seconds to sleep if few requests\n\nIn this example, the transfer limit will be one transfer which means that there should be only one active transfer at the time.\nThere will be two waiting transfer requests and no current active transfer.\nAfter running the daemon, there will be one transfer in the queue which can then be started.\n\nSetup the transfer limit::\n\n  $ python\n  from rucio.core.rse import set_rse_transfer_limits\n  set_rse_transfer_limits('MOCK2', 'User Subscriptions', max_transfers=1)\n  $ rucio-admin config set --section throttler --option 'User Subscriptions,MOCK2' --value 1\n\nIf Rucio is running in multi-VO mode, then the RSE ID should be used in place of its name when setting the config::\n\n  $ rucio-admin rse info MOCK2\n  Settings:\n  =========\n    ...\n  Attributes:\n  ===========\n    ...\n  Protocols:\n  ==========\n    ...\n  Usage:\n  ======\n    ...\n    rse_id: 9c54c73cbd534450b2202a576f809f1f\n  $ rucio-admin config set --section throttler --option 'User Subscriptions,9c54c73cbd534450b2202a576f809f1f' --value 1\n\nUpload two files and create replication rules to the same RSE::\n\n  $ rucio upload --scope mock --rse MOCK --name file1 filename.txt\n  $ rucio add-rule mock:file 1 MOCK2\n  $ rucio upload --scope mock --rse MOCK --name file2 filename.txt\n  $ rucio add-rule mock:file2 1 MOCK2\n\nCheck transfer requests::\n\n    $ python\n    from rucio.db.sqla import session,models\n    [request.to_dict() for request in session.get_session().query(models.Request).all()]\n    # [{'state': WAITING, ...}, {'state': WAITING, ...}\n\nTwo transfer requests with the state 'WAITING' got created.\n\nRun the daemon::\n\n  $ rucio-conveyor-throttler --run-once\n\nCheck transfer requests::\n\n    $ python\n    from rucio.db.sqla import session,models\n    [request.to_dict() for request in session.get_session().query(models.Request).all()]\n    # [{'state': WAITING, ...}, {'state': QUEUED, ...}\n\nFinally one of the transfer requests got put in the queue and can be picked up by the Conyevor-Submitter daemon to submit the transfer job to the transfertool.\nThe other request will have to wait until one of the queued requests is done or until the transfer limit changes.\n"})})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);