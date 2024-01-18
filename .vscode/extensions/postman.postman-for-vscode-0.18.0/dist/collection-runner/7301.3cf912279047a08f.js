(self.webpackChunkcollection_runner=self.webpackChunkcollection_runner||[]).push([[7301],{84492:(e,s,t)=>{"use strict";t.d(s,{Z:()=>o});var a=t(7560),r=t(162),n=t.n(r);const o=(0,a.Z)({},n(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"})},85764:(e,s,t)=>{"use strict";t.r(s),t.d(s,{PUBLIC_PROFILE_QUERY_PREFIX:()=>l,TEAM_DETAILS_QUERY_PREFIX:()=>p,USER_DETAILS_QUERY_PREFIX:()=>i,getPublicProfile:()=>E,getTeamInfo:()=>c,getTeamsByUserId:()=>T,getUserInfo:()=>d,isTeamUser:()=>g,usePublicProfile:()=>y,useTeamInfo:()=>_,useTeamsByUserId:()=>R,useUserInfo:()=>I});var a=t(69461),r=t(9907),n=t(98283),o=t(34925);const u=["result"],i="user-details",p="team-details",l="public-profile",d=({userId:e=(0,r.getUserId)()}={})=>({queryKey:[i,e],queryFn:({signal:s})=>(async({userId:e=(0,r.getUserId)(),signal:s}={})=>o.postmanGateway.get({path:`/api/users/${e}`,service:"god",signal:s,query:{app_version:window.APP_VERSION,app_target:"artemis"}}).then((e=>{const{result:s}=e,t=(0,n.Z)(e,u);return"success"===s?t:{}})))({signal:s,userId:e}),useErrorBoundary:!1}),I=({userId:e=(0,r.getUserId)()}={})=>(0,a.useDataFetch)(d({userId:e})),g=(e=(0,r.getTeamId)())=>void 0!==e&&""!==e&&"0"!==e,c=({teamId:e=(0,r.getTeamId)()}={})=>({queryKey:[p,e],queryFn:({signal:s})=>(async({teamId:e=(0,r.getTeamId)(),signal:s}={})=>g(e)?o.postmanGateway.get({path:`/api/organizations/${e}`,service:"god",signal:s,query:{populate_groups:!0,freecollab:!0,extras:!1,billing:!1,app_version:window.APP_VERSION}}).then((e=>{var s;return"success"===e.result?null==(s=e.data)?void 0:s.organization:{}})).catch((e=>({}))):{})({signal:s,teamId:e}),useErrorBoundary:!0}),_=({teamId:e=(0,r.getTeamId)()}={})=>(0,a.useDataFetch)(c({teamId:e}));var m=t(84492);const E=({type:e,userIds:s,populate:t,signal:a})=>({queryKey:[l,s.toString()],queryFn:()=>(async({type:e,userIds:s,populate:t,signal:a})=>{const r={type:e,ids:s};t&&(r.populate=t);const n=await o.postmanGateway.post({url:`${m.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:"/api/public_profile",service:"ums",method:"post",data:{body:r},signal:a});if(!n)throw new Error("Received invalid users");return n.users})({type:e,userIds:s,populate:t,signal:a}),useErrorBoundary:!1}),y=e=>(0,a.useDataFetch)(E(e)),T=({userId:e=(0,r.getUserId)()}={})=>({queryKey:[p,e],queryFn:({signal:s})=>(async({userId:e=(0,r.getUserId)(),signal:s})=>{var t,a;return await o.postmanGateway.get({url:`${m.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/api/users/${e}/organizations`,service:"god",signal:s,query:{user_id:e,populate_groups:!0,freecollab:!0,extras:!1,billing:!1,app_version:null!=(t=null==(a=window)?void 0:a.APP_VERSION)?t:""}})})({signal:s,userId:e}),useErrorBoundary:!1}),R=({userId:e=(0,r.getUserId)()}={})=>(0,a.useDataFetch)(T({userId:e}))},162:()=>{}}]);
//# sourceMappingURL=7301.3cf912279047a08f.js.map