"use strict";(self.webpackChunkpostman_console=self.webpackChunkpostman_console||[]).push([[6078],{6078:(e,t,n)=>{function a(e){return window&&window.open(e,"_self","noopener,noreferrer")}n.r(t),n.d(t,{Link:()=>B,OPEN_EXTENSION_URL:()=>V,PostmanTabsManager:()=>Vt,checkContextAndNavigate:()=>a,openExternalLink:()=>H,useAdditionalRouteContext:()=>R,useBeforeTabbedWindowUnload:()=>m,useCurrentPostmanTabContext:()=>p,useIsActivePostmanTab:()=>f,useLoaderData:()=>D,useLocation:()=>w,useMountOutletOnNav:()=>T,useNavigate:()=>M,usePostmanTabsContext:()=>v,useSearchParams:()=>N,useSetTabState:()=>Z,useSetTabTitle:()=>L,useTabTitleAndStateUpdates:()=>C,withRouter:()=>c});var r=n(7560),i=n(540),l=n.n(i),o=n(607),s=n(2322);function c(e){return t=>{const n=(0,o.useLocation)(),a=(0,o.useNavigate)(),i=(0,o.useParams)();return(0,s.jsx)(e,(0,r.Z)({location:n,navigate:a,params:i},t))}}var d=n(8283),u=n(7736);n(5191);const b=l().createContext(null),v=()=>(0,i.useContext)(b),h=l().createContext(null),p=()=>(0,i.useContext)(h),f=()=>{const e=v(),t=p(),{tabId:n}=t||{};return(null==e?void 0:e.activeTab)===n},C=()=>{const{pathname:e,search:t}=(0,o.useLocation)(),n=f(),{tabId:a,title:r,tabType:l,setTabState:s,isConflicted:c,isDirty:d}=p();(0,i.useEffect)((()=>{n&&r&&(s({title:r,tabType:l,isDirty:d,isConflicted:c}),globalThis.document.title=r)}),[n,a,r,l,d,c,s]),(0,i.useEffect)((()=>{s({currentlyActiveURL:e+t})}),[])},m=()=>{const{tabs:e,tabsMeta:t}=v();(0,i.useEffect)((()=>{}),[])};var g=n(8722);const x=(e,...t)=>{const n=e(...t),a=v(),r=!!p(),l=f(),o=(0,i.useRef)(n);return(0,i.useEffect)((()=>{l&&(o.current=n)}),[l,n]),a&&r&&!l?o.current:n},w=()=>x(o.useLocation),y=(e,t)=>{const n=t[e.id];return!(null!=n&&n.isDirty||null!=n&&n.isConflicted||null!=n&&n.isPinned)},T=()=>{const{tabs:e,tabsMeta:t,setTabs:n,setTabsMeta:a,setActiveTab:l}=v(),s=w(),{state:c,pathname:d,search:u}=s,b=(0,o.useOutlet)(),h=(0,i.useMemo)((()=>b),[d+u]),p=(0,i.useCallback)(((t,a)=>{const r=e.map((e=>e.id===a?t:e));return l(t.id),n(r)}),[l,n,e]),f=(0,i.useCallback)(((i,o,s)=>{const c=(0,r.Z)({replacePreviewTab:!0,pinNewTab:!1},s),d=(0,g.v4)(),u={pathname:i,element:o,id:d},b=e.find((e=>y(e,t)));return b&&null!=c&&c.replacePreviewTab?p(u,b.id):(l(d),null!=c&&c.pinNewTab&&a((e=>(0,r.Z)({},e,{[d]:(0,r.Z)({},e[d],{isPinned:!0})}))),n((e=>[...e,{pathname:i,element:o,id:d}])))}),[e,p,l,n,t,a]);(0,i.useEffect)((()=>{if(!h)return;const t=(e=>{if("string"==typeof e)try{var t;return(null==(t=JSON.parse(e))?void 0:t.navigationParams)||{}}catch(e){return{}}return(null==e?void 0:e.navigationParams)||{}})(c),{tabId:n,newTab:a,sameTab:r}=t;if(a)return f(d,h,{replacePreviewTab:!1,pinNewTab:!0});if(r&&n&&-1!==e.findIndex((e=>e.id===n)))return p({id:(0,g.v4)(),pathname:d,element:h},n);if(n){var i;const t=null==(i=e.find((e=>e.id===n)))?void 0:i.id;if(t)return l(t)}const o=e.find((e=>e.pathname===d));return o?l(null==o?void 0:o.id):f(d,h)}),[h])},Z=e=>{const{setTabsMeta:t,activeTab:n}=v();return(0,i.useCallback)((a=>{n===e.id&&t((t=>{const n=(0,r.Z)({},t[e.id]),i={};return"title"in a&&(i.title=a.title||""),"isDirty"in a&&(i.isDirty=a.isDirty||!1),"isConflicted"in a&&(i.isConflicted=a.isConflicted||!1),"tabType"in a&&(i.tabType=a.tabType||"http"),"currentlyActiveURL"in a&&(i.currentlyActiveURL=a.currentlyActiveURL||""),(0,r.Z)({},t,{[e.id]:(0,r.Z)({},n,i)})}))}),[t,e.id,n])},L=e=>{const t=Z(e);return(0,i.useCallback)((e=>t({title:e})),[t])},k=["children","to"],E=["children","to"],j=e=>{let{children:t,to:n}=e,a=(0,d.Z)(e,k);const{tabId:i}=p()||{};return(0,s.jsx)(o.Link,(0,r.Z)({to:n},a,{state:(0,r.Z)({},a.state,{navigationParams:{sameTab:a.sameTab||!1,newTab:a.newTab||!1,tabId:a.sameTab||a.newTab?i:null}}),children:t}))},B=e=>{let{children:t,to:n}=e,a=(0,d.Z)(e,E);if(a.customNavEvent)return(0,s.jsx)(u.VSCodeLink,(0,r.Z)({to:n},a,{children:t}));const i=(0,r.Z)({},{target:"_self",rel:"noreferrer noopener"},a),l=n.toString();return new RegExp("https?:\\/\\/").test(l)?(0,s.jsx)("a",(0,r.Z)({href:l},i,{onClick:async e=>{a.onClick&&a.onClick(e),e.defaultPrevented},children:t})):(0,s.jsx)(j,(0,r.Z)({to:n},i,{children:t}))},M=()=>{const{tabId:e}=p()||{},t=(0,o.useNavigate)();return(n,a,i)=>{const l=(0,r.Z)({},a),o={sameTab:(null==i?void 0:i.sameTab)||!1,newTab:(null==i?void 0:i.newTab)||!1,tabId:null!=i&&i.sameTab||null!=i&&i.newTab?e:null};if(l.state=null!=a&&a.state&&"string"==typeof a.state?JSON.stringify((0,r.Z)({},JSON.parse(a.state),{navigationParams:o})):(0,r.Z)({},null==a?void 0:a.state,{navigationParams:o}),null==i||!i.customNavEvent||((0,u.vscodeNavigate)(n,a,i),i["customNavEvent-updateURL"]))return t(n,l)}},V="VIEW_COLLECTION_FOLDER_REQUEST";async function H(e){await(0,u.vsCodeOpenExternalLink)(e)}const R=()=>{const e=(0,o.useLocation)();return(0,i.useMemo)((()=>{const t=(e=>{try{var t;if(!e)return{};let n;return"string"==typeof e&&(n=JSON.parse(e)),(null==(t=n)?void 0:t.additionalContext)||{}}catch(e){return{}}})(e.state);return(0,r.Z)({},t,(()=>{try{var e;return(null==(e=JSON.parse(window.NAVIGATION_CONTEXT))||null==(e=e.params)||null==(e=e.state)?void 0:e.additionalContext)||{}}catch(e){return{}}})())}),[e.state])},N=()=>{const e=(0,o.useLocation)(),[t,n]=x(o.useSearchParams),a=v(),{setTabState:r,tabId:l}=p()||{};return[t,(0,i.useCallback)((t=>{if(n(t,{state:a&&l?{navigationParams:{tabId:l}}:void 0}),l&&a&&r){const n=t.toString(),a=`${e.pathname}${n?"?"+n:""}`;r({currentlyActiveURL:a})}}),[n,a,e.pathname,r,l])]},D=()=>x(o.useLoaderData);var S=n(8217),A=n(5892),P=n.n(A),I=n(6486),O=n(207),$=l().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l().createElement("path",{d:"M8.5 7.5V2H7.5V7.5H2V8.5H7.5V14H8.5V8.5H14V7.5H8.5Z",fill:"#505050"})),U=l().forwardRef((function(e,t){return l().createElement(O.Z,(0,r.Z)({},e,{svg:$,ref:t}))}));U.getName=function(){return"icon-action-add-stroke"};const _=U;var W=n(4691),F=n(9824),z=n(7282),q=P().hr.withConfig({displayName:"MenuDivider__StyledMenuDivider",componentId:"dii7go-0"})(["border:none;border-bottom:",";margin:",";"],(function(e){return"".concat(e.theme["border-width-default"]," ").concat(e.theme["border-style-solid"]," ").concat(e.theme["border-color-default"],";")}),(function(e){return e.theme["spacing-s"]}));function J(){return l().createElement(q,null)}J.displayName="MenuDivider";const X=J,Y=({isOpen:e,forTabId:t,position:n,createNewRequest:a,closeMenu:r})=>{const{closeAllNonSelectedTabs:i,closeTab:l,closeAllTabs:o}=v();return(0,s.jsx)(W.Z,{isOpen:e,contextMenu:{posX:null==n?void 0:n.x,posY:null==n?void 0:n.y},closeMenu:r,children:(0,s.jsxs)(F.Z,{children:[(0,s.jsx)(z.Z,{onClick:a,children:"New Request"}),(0,s.jsx)(X,{}),(0,s.jsx)(z.Z,{onClick:()=>l(t),children:"Close Tab"}),(0,s.jsx)(z.Z,{onClick:()=>l(t,!0),children:"Force Close Tab"}),(0,s.jsx)(z.Z,{onClick:()=>i(),children:"Close Other Tabs"}),(0,s.jsx)(z.Z,{onClick:()=>o(),children:"Close All Tabs"}),(0,s.jsx)(z.Z,{onClick:()=>o(!0),children:"Force Close All Tabs"})]})})},Q=e=>(0,s.jsx)(Y,(0,r.Z)({},e));var G=n(8263),K=n(6914),ee=n(8560),te=n(9225),ne=l().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l().createElement("path",{d:"M2 2H14V1H2V2Z",fill:"#6B6B6B"}),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.74394 4C1.3022 4 0.970902 4.40413 1.05753 4.83728L2.97753 14.4373C3.04297 14.7645 3.33026 15 3.66394 15H12.336C12.6697 15 12.957 14.7645 13.0224 14.4373L14.9424 4.83728C15.0291 4.40413 14.6978 4 14.256 4H1.74394ZM3.90988 14L2.10988 5H13.8901L12.0901 14H3.90988Z",fill:"#6B6B6B"})),ae=l().forwardRef((function(e,t){return l().createElement(O.Z,(0,r.Z)({},e,{svg:ne,ref:t}))}));ae.getName=function(){return"icon-entity-collection-stroke"};const re=ae;var ie=l().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.5 1C1.67157 1 1 1.67157 1 2.5V13.5C1 14.3284 1.67157 15 2.5 15H13.5C14.3284 15 15 14.3284 15 13.5V4.5C15 3.67157 14.3284 3 13.5 3H8.70711L7.14645 1.43934C6.86514 1.15803 6.48361 1 6.08579 1H2.5ZM2 2.5C2 2.22386 2.22386 2 2.5 2H6.08579C6.21839 2 6.34557 2.05268 6.43934 2.14645L8.14645 3.85355C8.24021 3.94732 8.36739 4 8.5 4H13.5C13.7761 4 14 4.22386 14 4.5V6H2V2.5ZM2 7V13.5C2 13.7761 2.22386 14 2.5 14H13.5C13.7761 14 14 13.7761 14 13.5V7H2Z",fill:"#6B6B6B"})),le=l().forwardRef((function(e,t){return l().createElement(O.Z,(0,r.Z)({},e,{svg:ie,ref:t}))}));le.getName=function(){return"icon-entity-folder-stroke"};const oe=le;var se=l().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l().createElement("path",{d:"m12.654.046-.707.707L13.593 2.4H0v1h16.007L12.654.046ZM-.007 12.599l3.353 3.353.707-.707L2.407 13.6H16v-1H-.007ZM.011 11.2h.977V8.478h2.327V11.2h.98V4.927h-.98V7.64H.988V4.927H.01V11.2ZM4.784 5.768H5.9V11.2h.973V5.768h.92v-.84h-3.01v.84ZM9.283 5.768h-.916v-.84h3.01v.84h-1.12V11.2h-.974V5.768Z",fill:"#6B6B6B"}),l().createElement("path",{fillRule:"evenodd",d:"M11.87 11.2h.976V8.924h.927c1.501 0 2.244-.807 2.244-2.001 0-1.192-.736-1.996-2.24-1.996h-1.908V11.2Zm.976-3.104V5.765h.826c.967 0 1.362.424 1.362 1.158 0 .733-.395 1.173-1.35 1.173h-.838Z",fill:"#6B6B6B"})),ce=l().forwardRef((function(e,t){return l().createElement(O.Z,(0,r.Z)({},e,{svg:se,ref:t}))}));ce.getName=function(){return"icon-entity-httpRequest-stroke"};const de=ce;var ue=l().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l().createElement("path",{d:"M1 2H5.25736C5.9204 2 6.55629 2.26339 7.02513 2.73223L9.29289 5L5 9.29289L3.73223 8.02513C3.26339 7.55628 3 6.9204 3 6.25736V4H2V6.25736C2 7.18562 2.36875 8.07585 3.02513 8.73223L5 10.7071L6.25004 9.45711L8.64648 11.8536L9.35359 11.1464L6.95714 8.75L8.75004 6.95711L11.1465 9.35355L11.8536 8.64645L9.45714 6.25L10.7071 5L7.73223 2.02513C7.07586 1.36875 6.18562 1 5.25736 1H1V2Z",fill:"#6B6B6B"}),l().createElement("path",{d:"M10.6465 2.35355L13.2678 4.97487C13.7366 5.44372 14 6.0796 14 6.74264V12H15V6.74264C15 5.81438 14.6313 4.92414 13.9749 4.26777L11.3536 1.64645L10.6465 2.35355Z",fill:"#6B6B6B"}),l().createElement("path",{d:"M4.26781 13.9749L1.64648 11.3536L2.35359 10.6464L4.97491 13.2678C5.44375 13.7366 6.07964 14 6.74268 14H15V15H6.74268C5.81442 15 4.92418 14.6313 4.26781 13.9749Z",fill:"#6B6B6B"})),be=l().forwardRef((function(e,t){return l().createElement(O.Z,(0,r.Z)({},e,{svg:ue,ref:t}))}));be.getName=function(){return"icon-entity-websocket-stroke"};const ve=be;var he=l().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l().createElement("path",{d:"M5.51328 1L3 3.51328L5.51328 6.02656L6.13607 5.40377L4.68605 3.95376H11.3672L10.3574 4.9635L10.9802 5.58628L13.0531 3.51338L10.9802 1.44048L10.3574 2.06327L11.3672 3.073H4.68585L6.13607 1.62279L5.51328 1Z",fill:"#6B6B6B"}),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.34761 12.3349C7.7281 12.5956 8.16848 12.7259 8.66875 12.7259C9.04923 12.7259 9.4121 12.6343 9.75736 12.4511C10.1026 12.2609 10.3739 12.0002 10.5712 11.669V12.5146C10.5712 12.888 10.4901 13.1945 10.3281 13.4341C10.166 13.6736 9.9476 13.8498 9.67281 13.9625C9.40506 14.0823 9.11265 14.1422 8.79557 14.1422C8.41509 14.1422 8.05574 14.0647 7.71753 13.9097C7.38637 13.7547 7.11509 13.5292 6.90371 13.2333L6.24843 13.8463C6.52323 14.2127 6.86144 14.5015 7.26306 14.7129C7.67173 14.9243 8.18257 15.03 8.79557 15.03C9.35221 15.03 9.85248 14.9314 10.2964 14.7341C10.7403 14.5368 11.0891 14.2514 11.3427 13.878C11.6034 13.5045 11.7338 13.0501 11.7338 12.5146V7.14548H10.7086V8.19182C10.4901 7.85361 10.2118 7.57881 9.87362 7.36743C9.54245 7.15605 9.15492 7.05036 8.71102 7.05036C8.20371 7.05036 7.75628 7.18071 7.36875 7.44141C6.98826 7.69507 6.68881 8.04033 6.47038 8.47718C6.25195 8.91404 6.14274 9.39317 6.14274 9.91457C6.14274 10.4148 6.24843 10.8799 6.45981 11.3097C6.67824 11.7325 6.97417 12.0742 7.34761 12.3349ZM9.71508 11.6373C9.5037 11.736 9.28175 11.7853 9.04923 11.7853C8.72511 11.7853 8.4327 11.7043 8.172 11.5422C7.9113 11.3731 7.70344 11.1512 7.54843 10.8764C7.40046 10.5945 7.32647 10.2845 7.32647 9.94628C7.32647 9.62921 7.39341 9.32623 7.52729 9.03734C7.66116 8.74141 7.84788 8.50184 8.08745 8.31865C8.33406 8.13545 8.62647 8.04385 8.96468 8.04385C9.29584 8.04385 9.60939 8.15659 9.90533 8.38206C10.2083 8.60049 10.4303 8.88585 10.5712 9.23816V10.6861C10.5148 10.8764 10.4091 11.056 10.2541 11.2251C10.1061 11.3942 9.92646 11.5316 9.71508 11.6373Z",fill:"#6B6B6B"})),pe=l().forwardRef((function(e,t){return l().createElement(O.Z,(0,r.Z)({},e,{svg:he,ref:t}))}));pe.getName=function(){return"icon-entity-gRPC-stroke"};const fe=pe;var Ce=l().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.87192 9.72303C4.65304 9.77086 4.38605 9.79477 4.07096 9.79477C3.42152 9.79477 2.91401 9.61206 2.54841 9.24664C2.1828 8.88122 2 8.36375 2 7.69422C2 7.00507 2.16897 6.47227 2.50692 6.09581C2.84486 5.71935 3.31208 5.53113 3.9086 5.53113C4.47866 5.53113 4.92243 5.69667 5.23993 6.02776C5.55743 6.35884 5.71618 6.81623 5.71618 7.39992V7.94437H3.11485C3.12688 8.2632 3.21948 8.51212 3.39266 8.69115C3.56585 8.87018 3.80878 8.9597 4.12147 8.9597C4.3644 8.9597 4.59411 8.93395 4.81058 8.88245C5.02706 8.83094 5.25316 8.74879 5.48888 8.63597V9.50415C5.29645 9.60225 5.0908 9.67521 4.87192 9.72303ZM4.47144 6.55565C4.33433 6.40482 4.14913 6.32941 3.91581 6.32941C3.6825 6.32941 3.4997 6.40482 3.36741 6.55565C3.23512 6.70648 3.15935 6.92046 3.14011 7.19759H4.68431C4.67949 6.92046 4.60854 6.70648 4.47144 6.55565Z",fill:"#6B6B6B"}),l().createElement("path",{d:"M6.62177 9.65682C6.51112 9.54768 6.4558 9.39379 6.4558 9.19514C6.4558 8.98913 6.50992 8.8334 6.61816 8.72794C6.7264 8.62248 6.88394 8.56975 7.0908 8.56975C7.29044 8.56975 7.44498 8.62371 7.55442 8.73162C7.66386 8.83953 7.71858 8.99403 7.71858 9.19514C7.71858 9.38888 7.66326 9.54155 7.55262 9.65314C7.44197 9.76473 7.28803 9.82052 7.0908 9.82052C6.88875 9.82052 6.73241 9.76595 6.62177 9.65682Z",fill:"#6B6B6B"}),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.05712 9.41218L9.05458 9.41107C8.9426 9.36193 8.84483 9.28198 8.76127 9.17123C8.67709 9.05964 8.635 8.94131 8.635 8.81623C8.635 8.65927 8.67949 8.52868 8.76849 8.42444C8.85749 8.32021 8.98617 8.21782 9.15454 8.11727C8.94287 8.02408 8.77511 7.87448 8.65123 7.66847C8.52736 7.46246 8.46542 7.21966 8.46542 6.94008C8.46542 6.49127 8.60854 6.14425 8.89477 5.899C9.181 5.65375 9.5899 5.53113 10.1215 5.53113C10.2345 5.53113 10.3686 5.54155 10.5238 5.5624C10.6789 5.58324 10.7781 5.59857 10.8214 5.60838H12.2285V6.17858L11.5971 6.34413C11.7126 6.52806 11.7703 6.73407 11.7703 6.96215C11.7703 7.4036 11.6194 7.74756 11.3175 7.99403C11.0156 8.24051 10.5965 8.36375 10.0601 8.36375L9.8617 8.35271L9.69934 8.33432C9.58629 8.42261 9.52977 8.5207 9.52977 8.62861C9.52977 8.79048 9.73181 8.87141 10.1359 8.87141H10.8214C11.264 8.87141 11.6013 8.96828 11.8334 9.16203C12.0655 9.35578 12.1816 9.64026 12.1816 10.0155C12.1816 10.4962 11.985 10.869 11.5917 11.1338C11.1984 11.3987 10.6338 11.5311 9.89777 11.5311C9.33493 11.5311 8.90499 11.4312 8.60794 11.2313C8.31088 11.0314 8.16236 10.7512 8.16236 10.3907C8.16236 10.143 8.23812 9.93579 8.38966 9.76902C8.54119 9.60225 8.76368 9.48331 9.05712 9.41218ZM9.3187 9.91801C9.1828 10.0149 9.11485 10.143 9.11485 10.3024C9.11485 10.4569 9.18761 10.5783 9.33313 10.6666C9.47865 10.7549 9.6825 10.7991 9.94468 10.7991C10.3391 10.7991 10.6482 10.7439 10.8719 10.6335C11.0956 10.5232 11.2075 10.3723 11.2075 10.181C11.2075 10.0265 11.1413 9.91985 11.009 9.86099C10.8767 9.80213 10.6723 9.7727 10.3957 9.7727H9.82562C9.62357 9.7727 9.4546 9.82113 9.3187 9.91801ZM10.1215 6.21169C9.71738 6.21169 9.51533 6.45939 9.51533 6.95479C9.51533 7.17797 9.56524 7.35455 9.66506 7.48453C9.76488 7.61451 9.91702 7.6795 10.1215 7.6795C10.3283 7.6795 10.4799 7.61451 10.5761 7.48453C10.6723 7.35455 10.7204 7.17797 10.7204 6.95479C10.7204 6.45939 10.5207 6.21169 10.1215 6.21169Z",fill:"#6B6B6B"}),l().createElement("path",{d:"M12.9032 9.65682C12.7925 9.54768 12.7372 9.39379 12.7372 9.19514C12.7372 8.98913 12.7913 8.8334 12.8996 8.72794C13.0078 8.62248 13.1654 8.56975 13.3722 8.56975C13.5719 8.56975 13.7264 8.62371 13.8358 8.73162C13.9453 8.83953 14 8.99403 14 9.19514C14 9.38888 13.9447 9.54155 13.834 9.65314C13.7234 9.76473 13.5695 9.82052 13.3722 9.82052C13.1702 9.82052 13.0138 9.76595 12.9032 9.65682Z",fill:"#6B6B6B"}),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 3C0 2.44772 0.447715 2 1 2H15C15.5523 2 16 2.44772 16 3V13C16 13.5523 15.5523 14 15 14H1C0.447715 14 0 13.5523 0 13V3ZM1 3H15V13H1V3Z",fill:"#6B6B6B"})),me=l().forwardRef((function(e,t){return l().createElement(O.Z,(0,r.Z)({},e,{svg:Ce,ref:t}))}));me.getName=function(){return"icon-entity-example-stroke"};const ge=me;var xe=l().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l().createElement("path",{d:"M1 2.5C1 1.67157 1.67157 1 2.5 1H13.5C14.3284 1 15 1.67157 15 2.5V10H14V2.5C14 2.22386 13.7761 2 13.5 2H2.5C2.22386 2 2 2.22386 2 2.5V13.5C2 13.7761 2.22386 14 2.5 14H10V15H2.5C1.67157 15 1 14.3284 1 13.5V2.5Z",fill:"#6B6B6B"}),l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 6.5C5 6.22386 5.22386 6 5.5 6H10.5C10.7761 6 11 6.22386 11 6.5V9.5C11 9.77614 10.7761 10 10.5 10H5.5C5.22386 10 5 9.77614 5 9.5V6.5ZM6 7V9H10V7H6Z",fill:"#6B6B6B"}),l().createElement("path",{d:"M15 12H12V15H15V12Z",fill:"#6B6B6B"})),we=l().forwardRef((function(e,t){return l().createElement(O.Z,(0,r.Z)({},e,{svg:xe,ref:t}))}));we.getName=function(){return"icon-entity-environment-stroke"};const ye=we,Te={collection:(0,s.jsx)(re,{}),folder:(0,s.jsx)(oe,{}),http:(0,s.jsx)(de,{}),"ws-raw":(0,s.jsx)(ve,{}),grpc:(0,s.jsx)(fe,{}),"http-response":(0,s.jsx)(ge,{}),environment:(0,s.jsx)(ye,{}),default:(0,s.jsx)(re,{})},Ze=()=>{const{tabs:e,closeAllNonSelectedTabs:t,closeTab:n,closeAllTabs:a,activeTab:r,recentlyClosed:i,openFromRecentlyClosed:l}=v(),o=0===e.length;return(0,s.jsxs)(W.Z,{children:[(0,s.jsx)(G.Z,{children:(0,s.jsx)(I.Z,{icon:(0,s.jsx)(te.Z,{}),type:"tertiary","data-testid":"tabs-more-options-button"})}),(0,s.jsxs)(F.Z,{children:[(0,s.jsx)(K.Z,{label:"Recently Closed Tabs",children:0===i.length?(0,s.jsx)(z.Z,{isDisabled:!0,children:"None"}):i.map(((e,t)=>(0,s.jsx)(z.Z,{onClick:()=>l(t),children:(0,s.jsxs)(ee.Z,{alignItems:"center",gap:"spacing-s",children:[Te[e.tabType]||Te.default," ",e.title||"Untitled Tab"]})},e.id||e.pathname)))}),(0,s.jsx)(X,{}),(0,s.jsx)(z.Z,{onClick:()=>n(r),isDisabled:o,children:"Close Selected Tab"}),(0,s.jsx)(z.Z,{type:"destructive",onClick:()=>n(r,!0),isDisabled:o,children:"Force Close Selected Tab"}),(0,s.jsx)(z.Z,{onClick:()=>t(),isDisabled:o,children:"Close All but Selected Tab"}),(0,s.jsx)(z.Z,{onClick:()=>a(),isDisabled:o,children:"Close All Tabs"}),(0,s.jsx)(z.Z,{type:"destructive",onClick:()=>a(!0),isDisabled:o,children:"Force Close All Tabs"})]})]})};var Le=n(3071),ke=n(3341);let Ee,je,Be,Me,Ve=e=>e;const He=P().div(Ee||(Ee=Ve`
  --border-start-percent: 30%;
  --border-end-percent: 70%;

  display: flex;
  flex: 1 1 auto;
  overflow-y: hidden;
`)),Re=P().ul(je||(je=Ve`
  margin: 0;
  padding: 0;
  flex: 0 1 auto;
  box-sizing: border-box;
  display: grid;
  grid-auto-flow: column;
  flex-wrap: nowrap;
  grid-template-columns: repeat(
    auto-fit,
    minmax(var(--tab-item-min-width), 1fr)
  );
  overflow: scroll hidden;
  padding-bottom: 48px;
  margin-bottom: -48px;
`)),Ne=P().div(Be||(Be=Ve`
  flex: 1;
  display: flex;
  align-items: center;
  padding: var(--spacing-s);
  border-left: ${0};
  border-bottom: 1px solid var(--border-color-default);
  border-image-slice: 0 0 0 1;
  border-image-source: linear-gradient(
    to bottom,
    var(--background-color-primary) var(--border-start-percent),
    var(--border-color-default) var(--border-start-percent),
    var(--border-color-default) var(--border-end-percent),
    var(--background-color-primary) var(--border-end-percent),
    var(--background-color-primary) calc(100% - 1px),
    var(--border-color-default) calc(100% - 1px)
  );
`),(e=>e.$tabsCount?"1px solid":"0")),De=P().div(Me||(Me=Ve`
  display: flex;
  align-items: center;
  padding: var(--spacing-s);
  border-right: 1px solid var(--border-color-default);
  border-bottom: 1px solid var(--border-color-default);
`)),Se=({minWidth:e,maxWidth:t,tabsCount:n,renderTabs:a,rightActions:r})=>{const l=(0,i.useRef)(null),o=(0,i.useRef)(null),[c,d]=(0,i.useState)(!1),[u,b]=(0,i.useState)(!1),[v,h]=(0,i.useState)(!1),[p,f]=(0,i.useState)(`${t}px`);return(0,i.useEffect)((()=>{let e;if(l.current&&o.current){const a=l.current.scrollWidth-l.current.clientWidth>0,r=Math.round(o.current.clientWidth/t);f(r<n?"100%":`${t}px`),d(a),a&&(e=setTimeout((()=>{var e;null==(e=l.current)||e.scrollTo(l.current.scrollWidth,0)}),1))}return()=>{e&&clearTimeout(e)}}),[n,t]),(0,i.useEffect)((()=>{let e=null;const t=l.current,n=()=>{const e=0===(null==t?void 0:t.scrollLeft),n=!!t&&t.scrollLeft===t.scrollWidth-t.clientWidth;b(e),h(n)},a=()=>{e&&clearTimeout(e),e=setTimeout(n,100)};return"onscrollend"in window?null==t||t.addEventListener("scrollend",n):null==t||t.addEventListener("scroll",a),()=>{"onscrollend"in window?null==t||t.removeEventListener("scrollend",n):null==t||t.removeEventListener("scroll",a),e&&clearTimeout(e)}}),[c]),(0,s.jsxs)(He,{ref:o,children:[c&&(0,s.jsx)(De,{children:(0,s.jsx)(I.Z,{type:"tertiary",icon:(0,s.jsx)(Le.Z,{}),onClick:()=>{var t;null==(t=l.current)||t.scrollBy({left:2*-e,behavior:"smooth"})},isDisabled:u})}),(0,s.jsx)(Re,{ref:l,children:a(p,c)}),(0,s.jsxs)(Ne,{$tabsCount:n,children:[c&&(0,s.jsx)(I.Z,{type:"tertiary",icon:(0,s.jsx)(ke.Z,{}),onClick:()=>{var t;null==(t=l.current)||t.scrollBy({left:2*e,behavior:"smooth"})},isDisabled:v}),r]})]})};var Ae=l().createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l().createElement("g",{clipPath:"url(#clip0)"},l().createElement("path",{d:"M6.56065 5.85356L9.70711 2.70711L9 2L5.85355 5.14645L2.70711 2.00002L2 2.70712L5.14644 5.85356L2 9L2.70711 9.70711L5.85355 6.56067L9 9.70712L9.70711 9.00002L6.56065 5.85356Z",fill:"#6B6B6B"})),l().createElement("defs",null,l().createElement("clipPath",{id:"clip0"},l().createElement("rect",{width:"12",height:"12",fill:"white"})))),Pe=l().forwardRef((function(e,t){return l().createElement(O.Z,(0,r.Z)({},e,{svg:Ae,ref:t}))}));Pe.getName=function(){return"icon-action-close-stroke-small"};const Ie=Pe;let Oe,$e,Ue,_e,We,Fe,ze,qe,Je,Xe,Ye,Qe=e=>e;const Ge=P().li(Oe||(Oe=Qe`
  position: relative;
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  min-width: var(--tab-item-min-width);
  max-width: ${0}px;
  min-height: var(--wp-tabs-header-height);
  align-items: stretch;

  ${0}

  & + & {
    border-left: var(--border-width-default, 1px)
      var(--border-style-solid, solid);
    border-image-slice: 0 0 0 1;
    border-image-source: linear-gradient(
      to bottom,
      var(--background-color-primary) var(--border-start-percent),
      var(--border-color-default) var(--border-start-percent),
      var(--border-color-default) var(--border-end-percent),
      var(--background-color-primary) var(--border-end-percent),
      var(--background-color-primary) calc(100% - 1px),
      var(--border-color-default) calc(100% - 1px)
    );
  }

  &:last-child .tab-title-container {
    border-right: 0;
  }
`),172,(e=>e.$isActive&&(0,A.css)($e||($e=Qe`
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 8px;
        right: 8px;
        height: 1px;
        background-color: var(--base-color-brand);
        transition: opacity 0.2s ease-in-out;
      }
    `)))),Ke=P()(o.Link)(Ue||(Ue=Qe`
  position: relative;
  display: flex;
  width: ${0};
  flex: 1;
`),(e=>e.width)),et=P().div(_e||(_e=Qe`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: calc(1px + var(--spacing-s)) var(--spacing-m);
  box-sizing: border-box;
  font-style: ${0};

  &:hover .tab-close-action {
    display: block;
  }

  ${0}
`),(e=>e.$isPreviewTab?"italic":""),(e=>e.$isDirty&&(0,A.css)(We||(We=Qe`
      .tab-close-icon {
        display: none;
      }

      &:hover {
        .tab-close-icon {
          display: flex;
        }

        .dirty-indicator {
          display: none;
        }
      }
    `)))),tt=P().div(Fe||(Fe=Qe`
  display: flex;
`)),nt=P().div(ze||(ze=Qe`
  font-family: var(--text-family-default);
  line-height: var(--line-height-s);
  font-size: var(--text-size-s);
  font-weight: var(--text-weight-regular);
  padding: 0 var(--spacing-xs);
  flex: 1;
  align-self: center;
  white-space: nowrap;
  overflow-x: hidden;
`)),at=P().div(qe||(qe=Qe`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`)),rt=P().div(Je||(Je=Qe`
  position: relative;
  z-index: 1;
  width: calc(1.02 * var(--spacing-s));
  height: var(--spacing-s);
  border-radius: 50%;
  background-color: var(--base-color-brand);
`)),it=P().div(Xe||(Xe=Qe`
  display: none;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  padding-left: var(--spacing-l);
  z-index: 1;
  background: linear-gradient(
    270deg,
    var(--background-color-primary) calc(24px + var(--spacing-xs)),
    rgba(var(--background-color-primary-rgb) / 95.8%) 0,
    rgba(var(--background-color-primary-rgb) / 0%)
  );
`)),lt=P().div(Ye||(Ye=Qe`
  --border: 2px;

  width: 24px;
  height: calc(100% - calc(var(--border) * 2));
  position: absolute;
  top: var(--border);
  right: calc(24px - var(--spacing-m));
  z-index: 0;
  background: linear-gradient(
    270deg,
    var(--background-color-primary) 33.33%,
    rgba(var(--background-color-primary-rgb) / 95.8%) 0,
    rgba(var(--background-color-primary-rgb) / 0%)
  );
`)),ot=e=>null!=e&&e.isConflicted?"[CONFLICT] ":"",st=e=>{const{activeTab:t,setActiveTab:n,closeTab:a,setTabsMeta:l,tabsMeta:o}=v(),c=t===e.tab.id,d=o[e.tab.id],u=(null==d?void 0:d.currentlyActiveURL)||e.tab.pathname,b=y(e.tab,o),h=(0,i.useCallback)((t=>(t.preventDefault(),t.stopPropagation(),a(e.tab.id),null)),[a,e.tab.id]),p=(0,i.useCallback)((()=>{l((t=>(0,r.Z)({},t,{[e.tab.id]:(0,r.Z)({},d,{isPinned:!0})})))}),[e.tab.id,d,l]);return(0,s.jsx)(Ge,{$isActive:c,children:(0,s.jsx)(Ke,{width:e.width,to:u,onClick:t=>{!c&&n(e.tab.id),c&&t.preventDefault(),c&&t.stopPropagation()},state:{navigationParams:{tabId:e.tab.id}},onContextMenu:e.onContextMenu,children:(0,s.jsxs)(et,{className:"tab-title-container",$isActive:c,$isDirty:null==d?void 0:d.isDirty,$isPreviewTab:b,onDoubleClick:p,"data-testid":"tab-header",children:[(0,s.jsx)(tt,{children:Te[null==d?void 0:d.tabType]||Te.default}),(0,s.jsxs)(nt,{title:(null==d?void 0:d.title)||"Loading...",children:[ot(d),(null==d?void 0:d.title)||"Loading..."]}),(0,s.jsxs)(at,{onClick:h,"data-testid":"tab-close-icon",children:[(null==d?void 0:d.isDirty)&&(0,s.jsx)(rt,{className:"dirty-indicator"}),(0,s.jsx)(it,{className:"tab-close-action",children:(0,s.jsx)(I.Z,{className:"tab-close-icon",type:"tertiary",size:"small",icon:(0,s.jsx)(Ie,{})})})]}),(0,s.jsx)(lt,{})]})},e.tab.id)})};let ct,dt,ut=e=>e;const bt=P().div(ct||(ct=ut`
  --tab-item-min-width: ${0}px;

  width: 100%;
  overflow-x: auto;
  display: flex;
  min-height: var(--wp-tabs-header-height);
  border-bottom: 1px solid var(--border-color-default);

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`),90),vt=P().div(dt||(dt=ut`
  flex: 0;
  border-bottom: 1px solid var(--border-color-default);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 var(--spacing-xs);
  gap: var(--spacing-xs);
`)),ht=()=>{const{tabs:e}=v(),[t,n]=(0,i.useState)({open:!1}),{workspaceId:a}=(0,o.useParams)(),r=M(),l=(0,i.useCallback)((()=>{if(!a)return;const e=(0,g.v4)();r(`/workspace/${a}/request/create?requestId=${e}`,{},{newTab:!0,customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"})}),[a,r]),c=(0,i.useCallback)(((e,t)=>{t.preventDefault(),n({open:!0,forTabId:e,position:{x:t.pageX,y:t.pageY}})}),[]),d=(0,i.useCallback)((()=>n({open:!1})),[]),u=(0,i.useCallback)((t=>e.map((e=>(0,s.jsx)(st,{width:t,tab:e,onContextMenu:t=>c(e.id,t)},e.id)))),[e,c]);return(0,s.jsxs)(bt,{children:[(0,s.jsx)(Se,{minWidth:90,maxWidth:172,tabsCount:e.length,renderTabs:u,rightActions:(0,s.jsx)(I.Z,{type:"tertiary",icon:(0,s.jsx)(_,{}),onClick:l})}),(0,s.jsx)(Q,{isOpen:null==t?void 0:t.open,forTabId:null==t?void 0:t.forTabId,position:null==t?void 0:t.position,closeMenu:d,createNewRequest:l}),(0,s.jsx)(vt,{children:(0,s.jsx)(Ze,{})})]})};var pt=n(3723),ft=n.n(pt);let Ct;const mt=P().div(Ct||(Ct=(e=>e)`
  display: ${0};
  height: var(--wp-workbench-height);
`),(({$isHidden:e})=>e?"none":"block")),gt=e=>{const t=!f();return C(),(0,s.jsx)(mt,{className:ft()({"tab-content":!0,"is-hidden":t}),$isHidden:t,children:e.children})},xt=({tab:e})=>{const{tabsMeta:t}=v(),n=Z(e),a=L(e),r=(0,i.useMemo)((()=>{var r,i,l,o;return{tabId:e.id,pathname:e.pathname,isDirty:null==(r=t[e.id])?void 0:r.isDirty,isConflicted:null==(i=t[e.id])?void 0:i.isConflicted,title:(null==(l=t[e.id])?void 0:l.title)||"",tabType:(null==(o=t[e.id])?void 0:o.tabType)||"http",setTabTitle:a,setTabState:n}}),[e.id,e.pathname,t,a,n]);return(0,s.jsx)(h.Provider,{value:r,children:(0,s.jsx)(gt,{children:e.element},e.pathname)})},wt=({fallback:e})=>{const{tabs:t}=v();return(0,i.useMemo)((()=>(0,s.jsxs)(s.Fragment,{children:[0===t.length&&e?e:"",t.map((e=>(0,s.jsx)(xt,{tab:e},e.pathname)))]})),[t,e])},yt=({children:e})=>(T(),m(),(0,s.jsxs)(s.Fragment,{children:[e," "]})),Tt="tab-close-confirmation-modal",Zt=e=>`This tab ${e||"Untitled tab"} has unsaved changes which will be lost if you choose to close it. Save these changes to avoid losing your work.`,Lt=[{title:"Don't Save",isDefaultOnDismiss:!0},{title:"Cancel",isPrimary:!0}],kt="tab-force-close-confirmation-modal",Et=e=>`${e} tab${1===e?" has":"s have"} unsaved changes. Your changes will be lost if you force close this tab. Are you sure you want to force close?`,jt=[{title:"Cancel",isDefaultOnDismiss:!0},{title:"Force Close",isPrimary:!0}],Bt=(e,t)=>{var n;return null==(n=t[e])?void 0:n.isDirty},Mt=async(e,t)=>{const n=await e.showWarningDialog({uid:Tt,subject:"DO YOU WANT TO SAVE?",message:Zt(t),options:Lt});return!n||"Cancel"!==n.title},Vt=({fallback:e})=>{const t=M(),n=(0,o.useMatches)(),a=S.Modals.getModals(),[r,l]=(0,i.useState)(null),[c,d]=(0,i.useState)([]),[u,v]=(0,i.useState)({}),[h,p]=(0,i.useState)([]),f=(0,i.useCallback)((e=>{var n;l(e.id),t((null==(n=u[e.id])?void 0:n.currentlyActiveURL)||e.pathname)}),[t,u]),C=(0,i.useCallback)((e=>{e&&p((t=>{var n,a,r;return[...t,{id:e.id,pathname:(null==(n=u[e.id])?void 0:n.currentlyActiveURL)||e.pathname,title:null==(a=u[e.id])?void 0:a.title,tabType:null==(r=u[e.id])?void 0:r.tabType}]}))}),[u]),m=(0,i.useCallback)((e=>p((t=>[...t].splice(e,1)))),[]),g=(0,i.useCallback)((e=>{const n=h[e];t(n.pathname,{},{newTab:!0,customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"}),m(e)}),[m,t,h]),x=(0,i.useCallback)((async(e,i=!1)=>{var l;const o=c.findIndex((t=>t.id===e));if(-1===o)return;const s=c[o],b=Bt(s.id,u);if(!i&&b&&!await Mt(a,null==(l=u[e])?void 0:l.title))return;if(s.id===r){const e=((e,t)=>{const n=t-1;return e[t+1]||e[n]})(c,o);if(e)f(e);else{const e=n.at(-2);(null==e?void 0:e.pathname)&&t(e.pathname)}}const v=c.filter((t=>t.id!==e));d(v),C(s)}),[t,f,c,n,u,a,r,C]),w=(0,i.useCallback)((async(e=!1)=>{if(e){const e=c.filter((e=>Bt(e.id,u))).length;if(e&&!await(async(e,t)=>{const n=await e.showWarningDialog({uid:kt,subject:"Confirm force close",message:Et(t),options:jt});return!n||"Cancel"!==n.title})(a,e))return;for(const e of c)C(e);d([]);const r=n.at(-2);return(null==r?void 0:r.pathname)&&t(r.pathname)}const r=[];for(const e of c){var i;Bt(e.id,u)&&!await Mt(a,null==(i=u[e.id])?void 0:i.title)||(C(e),r.push(e.id))}d((e=>e.filter((e=>!r.includes(e.id)))))}),[c,a,n,t,u,C]),y=(0,i.useCallback)((async(e=r)=>{const t=[];for(const r of c){var n;r.id!==e&&(Bt(r.id,u)&&!await Mt(a,null==(n=u[r.id])?void 0:n.title)||t.push(r.id))}d((e=>e.filter((e=>!t.includes(e.id)))))}),[r,c,a,u]),T=(0,i.useMemo)((()=>({tabs:c,setTabs:d,tabsMeta:u,setTabsMeta:v,recentlyClosed:h,closeTab:x,closeAllTabs:w,activeTab:r,setActiveTab:l,closeAllNonSelectedTabs:y,openFromRecentlyClosed:g})),[c,u,h,x,r,l,w,y,g]);return(0,s.jsx)(b.Provider,{value:T,children:(0,s.jsxs)(yt,{children:[(0,s.jsx)(S.Modals.Ui.ModalDialog,{uid:Tt}),(0,s.jsx)(S.Modals.Ui.ModalDialog,{uid:kt}),(0,s.jsx)(ht,{}),(0,s.jsx)(wt,{fallback:e})]})})}}}]);
//# sourceMappingURL=6078.867fb631902f26ee.js.map