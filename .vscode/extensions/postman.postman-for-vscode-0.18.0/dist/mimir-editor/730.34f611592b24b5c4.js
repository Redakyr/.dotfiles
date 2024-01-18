"use strict";(self.webpackChunkmimir_editor=self.webpackChunkmimir_editor||[]).push([[730],{730:(r,e,t)=>{t.r(e),t.d(e,{AwaitErrorBoundary:()=>b,CustomErrorBoundary:()=>Z,GenericErrorMessage:()=>h,RouteErrorBoundary:()=>k,logError:()=>c}),t(40540);var o=t(60607),n=t(7560),s=t(98283),a=t(77736),i=t(25304);const l=["crash"],c=(r,e)=>{let{crash:t=!1}=e,o=(0,s.Z)(e,l);((r,e)=>{var t;null==(t=window)||null==(t=t.newrelic)||null==t.noticeError||t.noticeError(r,e)})(r,(0,n.Z)({crash:t},o)),((r,e)=>{i.withScope((t=>{t.setExtra("ErrorStack",e.stack),t.setExtra("ErrorAppId",e.appId),t.setExtra("ErrorElementId",e.errorElementId),i.captureException(r)}))})(r,(0,n.Z)({crash:t},o)),((r,e)=>{a.VSCodeCommunicationsService.postMessageToExtension({type:"LOG_ERROR_TO_EXTENSION_LOGS",payload:{appId:e.appId,error:(null==r.toString?void 0:r.toString())||r.message,info:e}})})(r,o)};var d=t(49437),p=t(80047);const m="Something Went Wrong",E="Postman has encountered an error. If this problem persists, contact us at help@postman.com";var u=t(52322);const I=["title","description","message","illustration","error"],h=r=>{let{title:e=m,description:t=E,message:o,illustration:a="illustration-unable-to-load",error:i}=r,l=(0,s.Z)(r,I);const c=o||i&&i.message;return(0,u.jsxs)(d.Z,(0,n.Z)({title:e,description:t},l,{children:[c&&(0,u.jsx)("p",{children:(0,u.jsx)("i",{children:c})}),(0,u.jsx)(p.Z,{name:a})]}))},k=({children:r,title:e,description:t,message:n,appId:s,errorElementId:a})=>{const i=(0,o.useRouteError)();return c(i,{stack:i.stack,appId:s,errorElementId:a}),r||(0,u.jsx)(h,{title:e,description:t,error:i,message:n})};var g=t(20609);const x=["children","onError","appId","errorElementId","FallbackComponent"],S=(r,e,t,o)=>{c(r,{stack:e.componentStack,appId:t,crash:!0,errorElementId:o})},Z=r=>{let{children:e,onError:t,appId:o,errorElementId:a,FallbackComponent:i=h}=r,l=(0,s.Z)(r,x);return(0,u.jsx)(g.ErrorBoundary,(0,n.Z)({FallbackComponent:null!=l&&l.fallback?void 0:i,onError:(r,e)=>(t||S)(r,e,o,a)},l,{children:e}))},b=({children:r,title:e,description:t,message:n,appId:s,errorElementId:a})=>{const i=(0,o.useAsyncError)();return c(i,{stack:i.stack,appId:s,errorElementId:a}),r||(0,u.jsx)(h,{title:e,description:t,error:i,message:n})}}}]);
//# sourceMappingURL=730.34f611592b24b5c4.js.map