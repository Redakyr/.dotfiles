(self.webpackChunkcollection_runner=self.webpackChunkcollection_runner||[]).push([[5060],{69730:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var o=n(7560),r=n(40540),i=n(25892),a=n.n(i),s=n(74962),l=n(9460),u=n(72372),c=n(80429),d=n(94250),p=n(58560),v=n(20856),m=n(24867),g=n(43353),h=n(72960),f=n(688),y=n(52322);const b=a().div.withConfig({displayName:"config-template-renderer__CustomPopoverTriggerContainer",componentId:"sc-12f7vun-0"})(["user-select:none;cursor:pointer;"]);function _(e,t){return"object"!=typeof e?null:(0,y.jsx)(l.ZP,{type:null==e?void 0:e.variation,color:null==e?void 0:e.color,isExternal:null==e?void 0:e.isExternal,children:(0,f.Cu)(null==e?void 0:e.value,t)})}function E(e,t){return"object"!=typeof e?null:(0,y.jsx)(u.Z,{text:(0,f.Cu)(null==e?void 0:e.value,t),color:null==e?void 0:e.color})}function L(e,t,n,o){if(!e)return null;if(Array.isArray(e))return e.map((e=>L(e,t,n,o)));switch(null==e?void 0:e.type){case"text":return Array.isArray(e.value)?(0,y.jsx)(l.ZP,{color:null==e?void 0:e.color,isExternal:null==e?void 0:e.isExternal,type:null==e?void 0:e.variation,children:e.value.map((e=>L(e,t,n,o)))}):_(e,t);case"link":return function(e,t,n){return"object"!=typeof e?null:(0,y.jsx)(g.Link,{target:(null==e?void 0:e.target)||"_blank",to:(0,f.Cu)(null==e?void 0:e.to,t),onClick:()=>null==n?void 0:n(e),children:_(e,t)})}(e,t,o);case"heading":return function(e,t){return"object"!=typeof e?null:(0,y.jsx)(s.Z,{type:null==e?void 0:e.variation,text:(0,f.Cu)(null==e?void 0:e.value,t)})}(e,t);case"button":return function(e,t,n){return"object"!=typeof e?null:(0,y.jsx)(c.Z,{type:e.variation,text:(0,f.Cu)(null==e?void 0:e.value,t),onClick:()=>null==n?void 0:n(null==e?void 0:e.action)})}(e,t,n);case"tag":return E(e,t);default:return null}}function x({config:e,variables:t,trigger:n,onButtonClick:i,onLinkClick:a}){const[s,u]=(0,r.useState)(!1);function g(){u((e=>!e))}const f=(0,y.jsx)(c.Z,{type:(null==e?void 0:e.closeButtonType)||"secondary",text:"Close",onClick:g});if(!e||"object"!=typeof e||!(0,h.Z)(e))return null;switch(null==e?void 0:e.type){case"banner":return(0,y.jsx)(d.Z,{hideIcon:null==e?void 0:e.hideIcon,status:null==e?void 0:e.status,title:null==e?void 0:e.title,children:L(null==e?void 0:e.value,t,i,a)});case"text":return(0,y.jsxs)(p.Z,{gap:"spacing-s",width:"100%",children:[!e.hideIcon&&(0,y.jsx)(m.Z,{color:null==e?void 0:e.color}),(0,y.jsx)(l.ZP,{color:null==e?void 0:e.color,isExternal:null==e?void 0:e.isExternal,type:null==e?void 0:e.variation,children:L(null==e?void 0:e.value,t,i,a)})]});case"popover":return(0,y.jsx)(v.ZP,(0,o.Z)({},null!=e&&e.hasCloseButton?{isOpen:s}:{},{padding:"spacing-l",pointer:"true",placement:"bottom",triggerEvent:(null==e?void 0:e.triggerEvent)||"mouseenter",trigger:null!=e&&e.trigger?(0,y.jsx)(b,{onClick:g,children:L(null==e?void 0:e.trigger,t,i,a)}):n,children:(0,y.jsxs)(p.Z,{direction:"column",gap:"spacing-l",children:[(0,y.jsx)(p.Z,{direction:"column",gap:"spacing-s",children:L(null==e?void 0:e.value,t,i,a)}),((null==e?void 0:e.actions)||(null==e?void 0:e.hasCloseButton))&&(0,y.jsxs)(p.Z,{gap:"spacing-s",children:[(null==e?void 0:e.hasCloseButton)&&"actions-start"===(null==e?void 0:e.closeButtonPlacement)&&f,(null==e?void 0:e.actions)&&L(null==e?void 0:e.actions,t,i,a),(null==e?void 0:e.hasCloseButton)&&"actions-end"===(null==e?void 0:e.closeButtonPlacement)&&f]})]})}));case"tag":return E(e,t);default:return null}}},71932:(e,t,n)=>{"use strict";n.d(t,{e:()=>c}),n(40540);var o=n(25892),r=n.n(o),i=n(47380),a=n(58560),s=n(52322);const l=r().div.withConfig({displayName:"environment-selector__CollectionRunMetaHeaderContainer",componentId:"sc-gulu32-0"})(["display:flex;flex-direction:'row';justify-content:space-between;box-sizing:border-box;height:48px;padding:var(--spacing-s) var(--spacing-s);border-bottom:var(--border-width-default) var(--border-style-solid) var(--border-color-default);"]),u=r()(a.Z).withConfig({displayName:"environment-selector__EnvironmentSelectorContainer",componentId:"sc-gulu32-1"})(["float:right;margin-left:auto;"]),c=()=>(0,s.jsx)(l,{children:(0,s.jsx)(u,{children:(0,s.jsx)(i.ActiveEnvironmentSelector,{})})})},25451:(e,t,n)=>{"use strict";n.d(t,{T:()=>l}),n(40540);var o=n(35736),r=n(25892),i=n.n(r),a=n(52322);const s=i().div.withConfig({displayName:"loading-indicator__SpinnerContainer",componentId:"sc-1py03ms-0"})(["position:absolute;top:50%;left:50%;"]);function l(){return(0,a.jsx)(s,{children:(0,a.jsx)(o.Z,{})})}},68004:(e,t,n)=>{"use strict";n.d(t,{C:()=>c}),n(40540);var o=n(25892),r=n.n(o),i=n(58560),a=n(9460);const s=e=>e?{PROPFIND:"PROP",DELETE:"DEL",OPTIONS:"OPT",UNLINK:"UNLNK",UNLOCK:"UNLCK"}[e.toUpperCase()]||e.toUpperCase().slice(0,5):"";var l=n(52322);const u=r()(i.Z).withConfig({displayName:"method-icon__MethodIconContainer",componentId:"sc-o6snu9-0"})(["justify-content:center;margin:"," !important;font-weight:var(--text-weight-bold);font-size:var(--text-size-xs);line-height:var(--line-height-s);text-align:center;.request-method--GET{color:var(--content-color-success);font-weight:var(--text-weight-medium);}.request-method--PATCH{color:var(--content-color-patch-method);font-weight:var(--text-weight-medium);}.request-method--OPTIONS{color:var(--content-color-options-method);font-weight:var(--text-weight-medium);}.request-method--PUT{color:var(--content-color-info);font-weight:var(--text-weight-medium);}.request-method--POST{color:var(--content-color-warning);font-weight:var(--text-weight-medium);}.request-method--DELETE{color:var(--content-color-error);font-weight:var(--text-weight-medium);}.request-method--HEAD{color:var(--content-color-success);font-weight:var(--text-weight-medium);}"],(e=>"medium"===e.size?"var(--spacing-zero) var(--spacing-s) var(--spacing-zero) var(--spacing-zero)":"var(--spacing-zero) var(--spacing-s)")),c=({method:e,size:t="small"})=>"medium"===t?(0,l.jsx)(u,{"data-testid":"method-icon-container",size:"medium",children:(0,l.jsx)(a.ZP,{typographyStyle:{fontWeight:"text-weight-bold",fontSize:"text-size-m",lineHeight:"line-height-m"},className:`request-method--${e}`,children:s(e)})}):(0,l.jsx)(u,{"data-testid":"method-icon-container",children:(0,l.jsx)("div",{"data-testid":"method-icon",className:`request-method--${e}`,children:s(e)})})},67490:(e,t,n)=>{"use strict";n.d(t,{$K:()=>d,$U:()=>o,$W:()=>u,C1:()=>y,CV:()=>I,EF:()=>P,Hs:()=>B,Kb:()=>C,Kx:()=>N,Ky:()=>f,M8:()=>k,NF:()=>O,Nm:()=>b,Qk:()=>$,RG:()=>r,RM:()=>A,RP:()=>V,Rj:()=>_,Sg:()=>q,V8:()=>j,WD:()=>T,Wq:()=>h,Zq:()=>v,Zy:()=>c,_H:()=>a,_k:()=>p,dF:()=>E,df:()=>D,eL:()=>Z,f1:()=>F,hM:()=>x,kV:()=>M,ko:()=>H,m3:()=>U,nC:()=>w,ob:()=>S,qX:()=>L,sS:()=>i,sk:()=>Y,v6:()=>l,vH:()=>s,vu:()=>g,vx:()=>W,wA:()=>m,zE:()=>R});const o="Runner",r={INITIALIZED:"initialized",STARTED:"started",FINISHED:"finished",PAUSED:"paused",ABORTED:"aborted",ERROR:"error"},i="running",a="finished",s={runner:"Runner",newman:"Newman","postman-cli":"Postman CLI"},l={0:"all-tests",1:"passed-tests",2:"failed-tests",3:"skipped-tests"},u=25,c="AUTH_VALUE",d=1e3,p="request",v="pre-request",m="test",g="generic",h="no-request-body",f="no-request-url",y="no-request-headers",b="no-response-body",_="no-response-headers",E="not-logged-response-body",L="not-logged-response-headers",x="large-response",k="running",N="no-response-since-error",R="no-past-session-details",T={request:["Request could not be sent due to an error. ","Check Console"],"pre-request":["An error occurred while running pre-request scripts for this request. ","Check Console"],test:["An error occurred while running test scripts for this request. ","Check Console"]},w={[p]:T[p].join(""),[v]:T[v].join(""),[m]:T[m].join(""),[g]:"An error occurred while running this request.",[h]:"Request body unavailable",[y]:"Request headers unavailable",[b]:"Response body unavailable",[_]:"Response headers unavailable",[E]:"Response body was not logged",[L]:"Response headers were not logged",[x]:"Response body is too large",error:"Could not load data. Please try again",loading:"Loading...",[k]:"Running request...","no-body-sync":"We currently do not support syncing of body","no-headers-sync":"We currently do not support syncing of headers"},I={LEFT_PANE:{min:320,default:400},RIGHT_PANE:{min:450,default:530,collapsed:1}},C={[E]:{prefix:"Response is not persisted by default. You may choose to persist response for a session in run configuration",postfix:" and run again."},[L]:{prefix:"Response is not persisted by default. You may choose to persist response for a session in run configuration",postfix:" and run again."},[f]:"Empty request URL",[b]:"This response doesn't have a body.",[h]:"This request doesn't have a body.",[_]:"This response doesn't have any headers.",[y]:"This request doesn't have any headers.",[N]:{prefix:"No response received due to an error sending the request. ",linkText:"Check Console"},[R]:{prefix:"Request and response details are not saved permanently. For the most updated details, you may persist response for a session in run configuration",postfix:" and run again."},HEADINGS:{responseHeadersUnavailable:"Response headers not available",responseBodyUnavailable:"Response body not available",requestBodyUnavailable:"Request body not available",reqAndResHeadersUnavailable:"Request and response headers not available"}},A="video",U="audio",S="image",O="embed",j="collection_run_usage_limit",P={thresholds:{notifyLimit:null,hardLimit:null,softLimit:null},templatePath:"/messages/runner/defaults/limits.json"},$="collection_run_limit",q={runner:{collectionRunLimitReachedErr:"You have reached your monthly limit for collection runs. Please upgrade your plan to continue."},performanceTesting:{RESOURCE_USAGE_LIMIT_REACHED:"You have reached your monthly limit for performance testing runs. Please upgrade your plan to continue."}},D="/messages/runner/defaults/limits.json",Z="Check your toolbar to make sure the Postman Desktop Agent is running.",M="Make sure that Postman can read files inside the working directory.",B="text/csv",H="application/json",V="Undetermined",W={STRING:"string",NUMBER:"number",BOOLEAN:"boolean",AUTO_DETECT:"auto"},F={[W.AUTO_DETECT]:{value:W.AUTO_DETECT,label:"Auto-detect"},[W.STRING]:{value:W.STRING,label:"String"},[W.BOOLEAN]:{value:W.BOOLEAN,label:"Boolean"},[W.NUMBER]:{value:W.NUMBER,label:"Number"}},Y={SKIPPED:0,PASSED:1,FAILED:2}},28949:(e,t,n)=>{"use strict";n.d(t,{d0:()=>s});var o=n(7560),r=n(64490);const i=(e,t)=>{const n=[];for(const o of t){const t=e.find((e=>e.id===o));t&&n.push(t)}return n},a=(e,t,n,r,s)=>{const l=((e,t)=>e.find((e=>e.id===t)))(e.folders,n);let u=0;for(;u<((null==l||null==(c=l.folders_order)?void 0:c.length)||0);){var c;a(e,t,null==l?void 0:l.folders_order[u],[...r,l],s),u++}if(t[n])for(const e of i(t[n],null==l?void 0:l.order))s.push((0,o.Z)({},e,{parents:[...r,l],checked:!0}));return s},s=(e,t)=>{let n=[];const s={root:[]};for(const n of e.requests){const e=n.folder;e&&e!==(0,r.decomposeUID)(t).id?s[e]?s[e].push(n):s[e]=[n]:s.root.push(n)}for(const t of e.folders_order)n=[...n,...a(e,s,t,[],[])];const l=s.root.map((e=>(0,o.Z)({},e,{parents:[],checked:!0})));return n=[...n,...i(l,e.order)],n}},72960:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});const o=/^[\w !$%&'()*,./:=?{|}~-]+$/,r=new Set(["content-color-primary","content-color-secondary","content-color-tertiary","content-color-brand","content-color-info","content-color-error","content-color-warning","content-color-success","content-color-constant","content-color-link"]),i=new Set(["para","lead","small","strong","code","kbd","link-default","link-primary","link-button","link-button-primary","link-button-outline","link-subtle","body-small","body-medium","body-large"]),a=new Set(["primary","secondary","tertiary","plain","monochrome-plain","muted-plain"]),s=new Set(["h1","h2","h3","h4","h5","h6"]),l=new Set(["text","heading"]),u=new Set(["button","link"]),c=new Set(["blue","purple","yellow","green","pink","teal","orange"]);function d(e){var t,n;if(!e||"object"!=typeof e)return!1;const a=e.hideIcon&&"boolean"!=typeof e.hideIcon,s=e.status&&!["success","info","warning","error"].includes(e.status),v=e.title&&"string"!=typeof e.title&&!o.test(e.title),m=e.value&&"string"==typeof e.value&&!o.test(e.value),g=e.color&&!r.has(e.color),h=e.variation&&!i.has(e.variation),f=e.isExternal&&"boolean"!=typeof e.isExternal,y=!(null!=e&&null!=(t=e.value)&&t.every((e=>l.has(e.type)))),b=!(null!=e&&null!=(n=e.actions)&&n.every((e=>u.has(e.type)))),_=(null==e?void 0:e.trigger)&&!d(e.trigger),E=(null==e?void 0:e.actions)&&!p(null==e?void 0:e.actions),L=e.color&&!c.has(e.color),x=e.value&&"string"==typeof e.value&&!o.test(e.value);switch(null==e?void 0:e.type){case"banner":return!(a||s||v||m)&&p(null==e?void 0:e.value);case"text":return!(g||h||f)&&p(null==e?void 0:e.value);case"popover":return!(b||y||_||E)&&p(null==e?void 0:e.value);case"tag":return!L&&!x&&o.test(e.value);default:return!1}}function p(e){if(!e||"object"!=typeof e)return!1;if(Array.isArray(e))return e.every((e=>p(e)));const t=e.color&&!r.has(e.color),n=e.variation&&!i.has(e.variation),l=e.variation&&!i.has(e.variation),u=e.target&&"_blank"!==e.target,c=e.action&&!o.test(e.action),d=e.label&&!o.test(e.label),v=e.to&&"string"!=typeof e.to,m=e.variation&&!i.has(e.variation),g=!e.action||"string"!=typeof e.action,h=e.variation&&!a.has(e.variation),f=e.variation&&!s.has(e.variation),y="string"!=typeof e.value;switch(null==e?void 0:e.type){case"text":return!(t||n||l)&&(Array.isArray(e.value)?e.value.every((e=>p(e))):o.test(e.value));case"link":return!(u||c||d||v||m)&&o.test(e.value);case"button":return!g&&!h&&o.test(e.value)&&o.test(e.action);case"heading":return!f&&!y&&o.test(e.value);default:return!1}}},62629:(e,t,n)=>{"use strict";n.d(t,{DV:()=>v,Ir:()=>m,Rf:()=>g,YH:()=>s,i2:()=>h,th:()=>f});var o=n(7560),r=n(84492),i=n(67490);function a(e){const t={};for(const n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}const s=e=>{var t;return null!==(null==e||null==(t=e.thresholds)?void 0:t.softLimit)},l=(e,t)=>{var n,o;if(s(e))return null===(null==e||null==(n=e.thresholds)?void 0:n.hardLimit)?null==t?void 0:t.limit:null==e||null==(o=e.thresholds)?void 0:o.hardLimit},u=(e,t)=>{var n,o;return void 0!==(null==e||null==(n=e.thresholds)?void 0:n.softLimit)?null==e||null==(o=e.thresholds)?void 0:o.softLimit:null==t?void 0:t.limit},c=(e,t)=>(0,o.Z)({},"object"==typeof(null==e?void 0:e.thresholds)?e.thresholds:{},{softLimit:u(e,t)}),d=(e,t)=>{if(!s(e)||void 0===p(t))return;const n=a(c(e,t)),o=Object.keys(n).map(Number).sort();return Math.max(...o.filter((e=>e<=p(t))))},p=e=>{if(e)return e.usage+e.spillage},v=(e,t)=>{const n=c(e,t),i=l(e,t),a=p(t),s=u(e,t),v=d(e,t),m=(0,o.Z)({currentUsage:a,usageLimit:i,softLimit:s,applicableMessageThreshold:d(e,t)},"object"==typeof n?n:{},{artemisUrl:r.Z.ARTEMIS_URL,planName:"planname"});Number.isInteger(i)&&Number.isInteger(a)&&0!==i&&Object.assign(m,{remainingLimit:i-a,remainingLimitPercentage:Math.ceil(100-a/i*100),hardLimitPercentUsed:Math.ceil(a/i*100)});const g=i-s;return Number.isInteger(i)&&Number.isInteger(s)&&Object.assign(m,{additionalLimit:g}),Number.isInteger(a)&&Number.isInteger(s)&&0!==s&&Object.assign(m,{additionalLimitUsed:a-s,remainingSoftLimit:s-a,remainingSoftLimitPercentage:Math.ceil(100-a/s*100),softLimitPercentUsed:Math.ceil(a/s*100)}),Number.isInteger(a)&&Number.isInteger(s)&&0!==g&&Number.isInteger(g)&&Object.assign(m,{additionalLimitRemaining:i-a,additionalLimitPercentageUsed:Math.ceil(100*(a-s)/g)}),Number.isInteger(v)&&Number.isInteger(a)&&Object.assign(m,{notificationThresholdPercentReached:Math.ceil(a/v*100)}),m},m=(e,t)=>{var n;const o=l(e,t),r=p(t);return!(!s(e)||!o||void 0===r)&&null!==(null==e||null==(n=e.thresholds)?void 0:n.hardLimit)&&r>=o},g=(e,t)=>{if(s(e)&&l(e,t)&&m(e,t))throw new Error(i.Sg.runner.collectionRunLimitReachedErr)},h=(e,t)=>{const n=d(e,t);if(!n)return;const o=a(c(e,t));return null==o?void 0:o[n]},f=e=>{let t=null==e?void 0:e[i.V8].value;return"string"==typeof t&&(t=JSON.parse(t)),t}},12511:(e,t,n)=>{"use strict";n.d(t,{b:()=>s});var o=n(9907),r=n(30045),i=n(67490),a=n(62629);const s=()=>{var e;const t=(0,o.getUserId)(),{data:n,isLoading:s,isError:l,isRefetching:u,refetch:c}=(0,r.useGetPlanFeatures)(t),d=null==n||null==(e=n.data)?void 0:e.features,p=(0,a.th)(d);return{planFeatures:l?i.EF:p,isLoading:s,isError:l,isRefetching:u,refetch:c}}},83223:(e,t,n)=>{"use strict";n.d(t,{v:()=>a});var o=n(62629),r=n(12511),i=n(3062);const a=()=>{const{refetch:e,isRefetching:t}=(0,r.b)(),{refetch:n,isRefetching:a}=(0,i.w)();return async()=>{var r,i;const[s,l]=await Promise.all([e(),n()]),u=(0,o.th)(null==s||null==(r=s.data)?void 0:r.data.features),c=null==l||null==(i=l.data)?void 0:i.operation;return{planFeatures:u,isRefetchingPlanFeatures:t,resourceUsage:c,isRefetchingResourceUsage:a}}}},3062:(e,t,n)=>{"use strict";n.d(t,{w:()=>i});var o=n(30045),r=n(67490);const i=()=>{const{data:e,isLoading:t,isError:n,isRefetching:i,refetch:a}=(0,o.useGetOperationUsage)(r.Qk);return{resourceUsage:null==e?void 0:e.operation,isLoading:t,isError:n,isRefetching:i,refetch:a}}},68414:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var o=n(30045),r=n(72960);const i={runner:{messages:{notifyLimit:{type:"text",color:"content-color-secondary",value:[{type:"text",value:"{{currentUsage}}/{{softLimit}} runs ({{softLimitPercentUsed}}%) used. To increase the run limit, "},{type:"link",variation:"link-default",to:"{{artemisUrl}}/purchase",value:"upgrade plan",analytics:{action:"upgrade",label:"manual_run_notify_limit",value:"{{planName}}"},target:"_blank"},{type:"text",value:". Learn more about "},{type:"link",variation:"link-default",to:"https://go.pstmn.io/lc-collection-run-limits",value:"run limits",analytics:{action:"learn_more",label:"runner_notify_limit"},target:"_blank"},{type:"text",value:"."}]},softLimit:{type:"text",color:"content-color-warning",value:[{type:"text",variation:"strong",value:"{{currentUsage}}/{{softLimit}} runs ({{softLimitPercentUsed}}%) used."},{type:"text",value:" To increase the run limit, "},{type:"link",variation:"link-default",to:"{{artemisUrl}}/purchase",value:"upgrade plan",analytics:{action:"upgrade",label:"manual_run_soft_limit",value:"{{planName}}"},target:"_blank"},{type:"text",value:". Learn more about "},{type:"link",variation:"link-default",to:"https://go.pstmn.io/lc-collection-run-limits",value:"run limits",analytics:{action:"learn_more",label:"runner_soft_limit"},target:"_blank"},{type:"text",value:"."}]},hardLimit:{type:"text",color:"content-color-error",value:[{type:"text",value:"You've exhausted all available runs. To continue running collections, "},{type:"link",variation:"link-default",to:"{{artemisUrl}}/purchase",value:"upgrade plan",analytics:{action:"upgrade",label:"manual_run_hard_limit",value:"{{planName}}"},target:"_blank"},{type:"text",value:". Learn more about "},{type:"link",variation:"link-default",to:"https://go.pstmn.io/lc-collection-run-limits",value:"run limits",analytics:{action:"learn_more",label:"runner_hard_limit"},target:"_blank"},{type:"text",value:"."}]}}},buttons:{run:{tooltip:{hardLimit:"You don't have any runs left."}},runAgain:{softLimit:{type:"popover",value:[{type:"text",color:"content-color-primary",value:[{type:"text",variation:"strong",value:"{{currentUsage}}/{{softLimit}} runs ({{softLimitPercentUsed}}%) used. "},{type:"text",value:"To increase the run limit, upgrade plan. Learn more about "},{type:"link",variation:"link-default",to:"https://go.pstmn.io/lc-collection-run-limits",value:"run limits",analytics:{action:"learn_more",label:"run_again_soft_limit"},target:"_blank"},{type:"text",value:"."}]}],actions:[{type:"link",variation:"link-button",to:"{{artemisUrl}}/purchase",value:"Upgrade",analytics:{action:"upgrade",label:"run_again_soft_limit"},target:"_blank"}]},hardLimit:{type:"popover",value:[{type:"text",color:"content-color-primary",value:[{type:"text",value:"You've exhausted all available runs. To continue running collections, upgrade plan. Learn more about "},{type:"link",variation:"link-default",to:"https://go.pstmn.io/lc-collection-run-limits",value:"run limits",analytics:{action:"learn_more",label:"run_again_hard_limit"},target:"_blank"},{type:"text",value:"."}]}],actions:[{type:"link",variation:"link-button",to:"{{artemisUrl}}/purchase",value:"Upgrade",analytics:{action:"upgrade",label:"run_again_hard_limit"},target:"_blank"}]},notifyLimit:{type:"popover",value:[{type:"text",color:"content-color-primary",value:[{type:"text",variation:"strong",value:"{{currentUsage}}/{{softLimit}} runs ({{softLimitPercentUsed}}%) used. "},{type:"text",value:"To increase the run limit, upgrade plan. Learn more about "},{type:"link",variation:"link-default",to:"https://go.pstmn.io/lc-collection-run-limits",value:"run limits",analytics:{action:"learn_more",label:"run_again_soft_limit"},target:"_blank"},{type:"text",value:"."}]}],actions:[{type:"link",variation:"link-button",to:"{{artemisUrl}}/purchase",value:"Upgrade",analytics:{action:"upgrade",label:"run_again_soft_limit"},target:"_blank"}]}}}},a=e=>{var t,n,a;const{data:s,isLoading:l,isError:u,isRefetching:c,refetch:d}=(0,o.useGetTemplateMessages)(e);if(null!=s&&null!=(t=s.runner)&&t.messages&&"object"==typeof s.runner.messages){const e=s.runner.messages;for(const t of Object.values(e))if(!(0,r.Z)(t))return{messageTemplates:i,isLoading:l,isError:u,isRefetching:c,refetch:d}}if(null!=s&&null!=(n=s.buttons)&&n.runAgain&&"object"==typeof(null==s||null==(a=s.buttons)?void 0:a.runAgain)){const e=s.buttons.runAgain;for(const t of Object.values(e))if(!(0,r.Z)(t))return{messageTemplates:i,isLoading:l,isError:u,isRefetching:c,refetch:d}}return{messageTemplates:u?i:s,isLoading:l,isError:u,isRefetching:c,refetch:d}}},32543:(e,t,n)=>{"use strict";n.d(t,{HH:()=>c,UT:()=>d,XC:()=>a,Ze:()=>p,rV:()=>u,tZ:()=>s,tl:()=>l});var o=n(93301),r=n(43353),i=n(92465);const a=()=>{const e=(0,r.useNavigate)(),t=(0,o.useActiveWorkspaceId)();return(n,o)=>{e(o?`/workspace/${t}/run/create?folder=${o}&collection=${n}&type=manual-run`:`/workspace/${t}/run/create?collection=${n}&type=manual-run`,{},{customNavEvent:"COLLECTION_RUNNER_NAV_EVENT"}),i.AnalyticsService.addEventV2({category:"collectionrun",action:"open_run_create",label:"new_run",entityType:o?"folder":"collection",entityId:null!=o?o:n})}},s=()=>{const e=(0,r.useNavigate)(),t=(0,o.useActiveWorkspaceId)();return async(n,o)=>{if(!n)return;const{openInNewTab:r,loadFromHistory:a,navigationPayload:s}=o;if(r)return e(`/workspace/${t}/run/${n}`,{state:JSON.stringify({additionalContext:{id:n,loadFromHistory:a,additionalContext:s}})},{customNavEvent:"COLLECTION_RUNNER_NAV_EVENT"}),void i.AnalyticsService.addEventV2({category:"collectionrun",action:"open_run_details",label:a?"past_run":"new_run",entityType:"collectionrun",entityId:n});e(`/workspace/${t}/run/${n}`,{state:JSON.stringify({additionalContext:{id:n,loadFromHistory:a,additionalContext:s}})}),i.AnalyticsService.addEventV2({category:"collectionrun",action:"open_run_details",label:a?"past_run":"new_run",entityType:"collectionrun",entityId:n})}},l=()=>{const e=(0,r.useNavigate)(),t=(0,o.useActiveWorkspaceId)();return n=>{n&&e(`/workspace/${t}/request/${n}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"})}},u=()=>{const e=(0,r.useNavigate)(),t=(0,o.useActiveWorkspaceId)();return n=>{n&&(e(`/workspace/${t}/collection/${n}?tab=runs`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"}),i.AnalyticsService.addEventV2({category:"collectionrun",action:"view_all_runs",label:"runs_history",entityType:"collection",entityId:n}))}},c=()=>{const e=(0,r.useNavigate)(),t=(0,o.useActiveWorkspaceId)();return n=>{e(`/workspace/${t}/environment/${n}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"})}},d=()=>{const e=(0,r.useNavigate)(),t=(0,o.useActiveWorkspaceId)();return n=>{n&&e(`/workspace/${t}/collection/${n}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"})}},p=()=>{const e=(0,r.useNavigate)(),t=(0,o.useActiveWorkspaceId)();return n=>{n&&e(`/workspace/${t}/folder/${n}`,{},{customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"})}}},82993:(e,t,n)=>{"use strict";n.d(t,{U:()=>a}),n(40540);var o=n(93301),r=n(47380),i=n(52322);const a=({children:e})=>{const t=(0,o.useActiveWorkspaceId)(),n=new r.VariablesContextStore({},{workspaceId:t});return(0,i.jsx)(r.VariablesContextProvider,{store:n,children:e})}},688:(e,t,n)=>{"use strict";n.d(t,{Cu:()=>s,K$:()=>i,cy:()=>a,vH:()=>l});var o=n(24926);const r=e=>Number(e)>1?"s":"",i=e=>{const t=Math.floor(Number(e)/864e5),n=Math.floor(Number(e)/36e5%24),o=Math.floor(Number(e)/6e4%60),i=Math.floor(Number(e)/1e3%60),a=Number(e)%1e3;let s="",l="";return t&&(s=`${t}d `),n&&(s=`${s}${n}h `),!t&&o&&(s=`${s}${o}m `),!t&&!n&&i&&(s=`${s}${i}s `),!t&&!n&&!o&&a&&(s=`${s}${a}ms`),t&&(l=`${t} day${r(t)} `),n&&(l=`${l}${n} hour${r(n)} `),o&&(l=`${l}${o} minute${r(o)} `),i&&(l=`${l}${i} second${r(i)} `),a&&(l=`${l}${a} millisecond${r(a)}`),[s,l]},a=e=>e.startedAt?e.startedAt:(0,o.subMilliseconds)(new Date(e.createdAt),e.totalTime).toISOString();function s(e,t){const n=null==e||null==e.replace?void 0:e.replace(/[^\w !$%&'()*,./:=?{|}~-]/g,"");return null==n||null==n.replace?void 0:n.replace(/{{([^}]+)}}/g,((e,n)=>void 0===(null==t?void 0:t[n])?"":t[n]))}const l=({isNotPermitted:e,defaultText:t,noIterations:n,runButtonName:o,limitReached:r,noCollection:i})=>i?"Drag a collection or folder from your sidebar to start run.":r||(n?`Enter an iteration value to run ${o}.`:e?"You do not have permissions to perform this action.":t)},84492:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(7560),r=n(162),i=n.n(r);const a=(0,o.Z)({},i(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"})},162:()=>{}}]);
//# sourceMappingURL=5060.5744339011044902.js.map