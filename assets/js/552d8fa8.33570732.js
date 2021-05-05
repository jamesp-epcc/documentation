(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{142:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return a})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return u}));var t=r(3),o=r(7),i=(r(0),r(345)),c={title:"Running rucio-judge-cleaner"},a={unversionedId:"bin/rucio-judge-cleaner",id:"bin/rucio-judge-cleaner",isDocsHomePage:!1,title:"Running rucio-judge-cleaner",description:"`",source:"@site/../docs/bin/rucio-judge-cleaner.md",sourceDirName:"bin",slug:"/bin/rucio-judge-cleaner",permalink:"/documentation/bin/rucio-judge-cleaner",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-judge-cleaner.md",version:"current",frontMatter:{title:"Running rucio-judge-cleaner"}},s=[],l={toc:s};function u(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"usage: rucio-judge-cleaner [-h] [--run-once] [--threads THREADS]\n\nThe Judge-Cleaner daemon is responsible for cleaning expired replication\nrules. It deletes rules by checking if the 'expired_at' date property is older\nthan the current timestamp. If the rule is expired, it will first remove one\nlock for the replica and parent datasets if the DID belongs to any. Then it\nwill set a tombstone to the replica to mark it as deletable if there are no\nrules protecting the replica. After these steps, the rule gets deleted.\n\noptional arguments:\n  -h, --help         show this help message and exit\n  --run-once         One iteration only\n  --threads THREADS  Concurrency control: total number of threads on this\n                     process\n\nUpload a file to your RSE:: $ rucio upload --rse MOCK --scope mock --name file\nfilename.txt Set a replication rule for the file with a lifetime of one\nsecond:: $ rucio add-rule mock:file 1 MOCK2 --lifetime 1 Check the replication\nrules and the replicas:: $ rucio list-rules mock:file ID ACCOUNT SCOPE:NAME\nSTATE[OK/REPL/STUCK] RSE_EXPRESSION COPIES EXPIRES (UTC) CREATED (UTC)\n-------------------------------- --------- ------------ ----------------------\n---------------- -------- ------------------- -------------------\nc273c7ed75724143ad21c667e659456b root mock:file REPLICATING[0/1/0] MOCK2 1\n2018-12-03 09:53:09 2018-12-03 09:53:08 06f012771b0546dca0c908441c048964 root\nmock:file OK[1/0/0] MOCK 1 2018-12-03 09:52:19 $ python from rucio.db.sqla\nimport session, models from rucio.core.rse import get_rse_id rse_id =\nget_rse_id('MOCK2')\nsession.get_session().query(models.RSEFileAssociation).filter_by(name='file',\nscope='mock', rse_id=rse_id).first().tombstone // None\nsession.get_session().query(models.RSEFileAssociation).filter_by(name='file',\nscope='mock', rse_id=rse_id).first().lock_cnt // 1 The first rule was created\nwith an expiration date of one second after the creation date. Run the\ndaemon:: $ rucio-judge-cleaner --run-once Check the replication rules and the\nreplicas:: $ rucio list-rules mock:file ID ACCOUNT SCOPE:NAME\nSTATE[OK/REPL/STUCK] RSE_EXPRESSION COPIES EXPIRES (UTC) CREATED (UTC)\n-------------------------------- --------- ------------ ----------------------\n---------------- -------- --------------- -------------------\n06f012771b0546dca0c908441c048964 root mock:file OK[1/0/0] MOCK 1 2018-12-03\n09:52:19 $ python from rucio.db.sqla import session, models from\nrucio.core.rse import get_rse_id rse_id = get_rse_id('MOCK2')\nsession.get_session().query(models.RSEFileAssociation).filter_by(name='file',\nscope='mock', rse_id=rse_id).first().tombstone // datetime.datetime(1970, 1,\n1, 0, 0)\nsession.get_session().query(models.RSEFileAssociation).filter_by(name='file',\nscope='mock', rse_id=rse_id).first().lock_cnt // 0 The rule we created before\nwas deleted and the replica of the file on RSE MOCK2 got a tombstone because\nthere is no protecting rule anymore.\n")))}u.isMDXComponent=!0},345:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=t,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?o.a.createElement(m,a(a({ref:n},l),{},{components:r})):o.a.createElement(m,a({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:t,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);