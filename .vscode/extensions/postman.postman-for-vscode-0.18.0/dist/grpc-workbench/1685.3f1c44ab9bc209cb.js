/*! For license information please see 1685.3f1c44ab9bc209cb.js.LICENSE.txt */
"use strict";(self.webpackChunkgrpc_workbench=self.webpackChunkgrpc_workbench||[]).push([[1685],{98283:(e,r,t)=>{function a(e,r){if(null==e)return{};var t,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(s[t]=e[t]);return s}t.d(r,{Z:()=>a})},98013:(e,r,t)=>{t.r(r),t.d(r,{CacheObserver:()=>a.QueryObserver,DataFetchCacheProvider:()=>c,MultiCacheObserver:()=>a.QueriesObserver,cacheClient:()=>s,invalidateCache:()=>v,setupCacheBroadcasts:()=>d,updateCache:()=>h,useCacheClient:()=>C,useDataFetch:()=>a.useQuery,useInfiniteDataFetch:()=>a.useInfiniteQuery,useMutation:()=>a.useMutation});var a=t(14527);const s=new a.QueryClient({defaultOptions:{queries:{staleTime:Number.POSITIVE_INFINITY,useErrorBoundary:!0,retry:!1,refetchOnWindowFocus:!1}}});t(40540);var n=t(22600),u=t(52322);const c=({children:e})=>(0,u.jsxs)(a.QueryClientProvider,{client:s,children:[e,(0,u.jsx)(n.ReactQueryDevtools,{initialIsOpen:!1})]}),o="SYNC_CLIENT_CACHE";var i=t(7560),y=t(98283),l=t(77736);const p=["type"];const d=({appId:e,broadcastChannel:r=o})=>{!function({broadcastChannel:e=o}){let r=!1;const t=(({broadcastChannel:e})=>({postMessage:r=>{const{type:t}=r,a=(0,y.Z)(r,p);l.VSCodeCommunicationsService.postMessageToExtension({type:e,payload:(0,i.Z)({eventType:t},a)})},subscribe:(e=o,r)=>{l.VSCodeCommunicationsService.subscribe(e,r)}}))({broadcastChannel:e});t.subscribe(e,(e=>{null!=e&&e.eventType&&(r=!0,(()=>{switch(e.eventType){case"query-client-updated":return(({queryHash:e,queryKey:r,state:t})=>{const a=s.getQueryCache(),n=a.get(e);n?n.setState(t):a.build(s,{queryKey:r,queryHash:e},t)})(e);case"query-client-removed":return(({queryHash:e})=>{const r=s.getQueryCache(),t=r.get(e);t&&r.remove(t)})(e);case"query-cache-invalidated":(({filters:e,options:r={}})=>{s.invalidateQueries(e,r)})(e)}})(),r=!1)})),s.getQueryCache().subscribe((e=>{if(r)return;const{query:{queryHash:a,queryKey:s,state:n},type:u,action:c}=e;"updated"===u&&"success"===c.type&&t.postMessage({type:"query-client-updated",queryHash:a,queryKey:s,state:n}),"removed"===u&&t.postMessage({type:"query-client-removed",queryHash:a,queryKey:s,state:n})}))}({appId:e,broadcastChannel:r})},h=({key:e,updater:r})=>{s.setQueryData(e,r)},v=e=>{s.invalidateQueries({queryKey:e,exact:!0})},C=()=>{var e;return null!=(e=(0,a.useQueryClient)())?e:s}},11837:(e,r,t)=>{var a=t(40540),s=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var n=Symbol.for;s=n("react.element"),r.Fragment=n("react.fragment")}var u=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var a,n={},i=null,y=null;for(a in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(y=r.ref),r)c.call(r,a)&&!o.hasOwnProperty(a)&&(n[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===n[a]&&(n[a]=r[a]);return{$$typeof:s,type:e,key:i,ref:y,props:n,_owner:u.current}}r.jsx=i,r.jsxs=i},52322:(e,r,t)=>{e.exports=t(11837)}}]);
//# sourceMappingURL=1685.3f1c44ab9bc209cb.js.map