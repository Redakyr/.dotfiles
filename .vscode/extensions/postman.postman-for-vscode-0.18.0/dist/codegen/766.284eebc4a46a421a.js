(self.webpackChunkcodegen=self.webpackChunkcodegen||[]).push([[766,7397,9315,25,6371],{7560:(t,s,e)=>{"use strict";function o(){return o=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},o.apply(this,arguments)}e.d(s,{Z:()=>o})},98283:(t,s,e)=>{"use strict";function o(t,s){if(null==t)return{};var e,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)e=a[o],s.indexOf(e)>=0||(r[e]=t[e]);return r}e.d(s,{Z:()=>o})},84492:(t,s,e)=>{"use strict";e.d(s,{Z:()=>n});var o=e(7560),r=e(69730),a=e.n(r);const n=(0,o.Z)({},a(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"})},60766:(t,s,e)=>{"use strict";e.r(s),e.d(s,{subscribeToWorkspaceEvents:()=>m,useActiveWorkspaceId:()=>r,useActiveWorkspaceInfo:()=>d,useNavigateToWorkspace:()=>w,useWorkspace:()=>l});var o=e(60607);const r=()=>{const{workspaceId:t}=(0,o.useParams)();return t?(t=>(null==t?void 0:t.split("~").pop())||"")(t):""};var a=e(7560),n=e(98283),c=e(69461),p=e(34925),u=e(84492);const i=["data"],l=t=>{const s=(0,c.useDataFetch)(((t,s)=>({queryKey:["workspace",t],queryFn:()=>(async(t,s)=>await p.postmanGateway.post({url:`${u.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/workspaces/${t}`,method:"GET",signal:s,service:"workspaces"}))(t),enabled:!!t,useErrorBoundary:void 0}))(t)),{data:e}=s,o=(0,n.Z)(s,i);return(0,a.Z)({data:null==e?void 0:e.data},o)},d=()=>{const t=r();return l(t)};var b=e(40540),v=e(43353),h=e(77736);const w=()=>{const t=(0,v.useNavigate)();return(0,b.useCallback)((s=>{(0,h.onWorkspaceChange)(s),s&&t("/workspace/"+s)}),[t])},m=t=>{const s=new AbortController;return{asyncObserver:p.postmanWebsocketGateway.subscribe({signal:s.signal,subscribeRequest:{method:"GET",url:"/ws/proxy",body:{},path:`/workspaces/${t}/subscribe`,service:"workspaces"},subscriptionEvents:["update","update_roles","workspace_v1","create","destroy"],responseFilter:t=>{var s;return null==t||null==(s=t.body)||null==(s=s.data)?void 0:s.id},broadcastFilter:t=>{var s;return null==t||null==(s=t.meta)||null==(s=s.timeline)?void 0:s.model_id},unsubscribeRequest:{method:"delete",url:"/ws/proxy",body:{},path:`/workspaces/${t}/subscribe`,service:"workspaces"}}),abortController:s}}},69730:()=>{}}]);
//# sourceMappingURL=766.284eebc4a46a421a.js.map