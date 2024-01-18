"use strict";(self.webpackChunkcookies_editor=self.webpackChunkcookies_editor||[]).push([[3740],{7977:(o,e,i)=>{i.d(e,{L:()=>a});var n=i(3807);async function a(){return(0,n.getCookieManager)().fetchCookies()}},3740:(o,e,i)=>{i.d(e,{Z:()=>V});var n=i(540),a=i(814),t=i(3807),s=i(3353),d=i(5892),c=i.n(d),r=i(8560),l=i(8495),m=i(605),p=i(1607),g=i(2322);const k=c().section.withConfig({displayName:"domain-input__DomainInputWrapper",componentId:"sc-1n805ju-0"})(["display:grid;gap:var(--spacing-s);grid-template-columns:1fr auto auto;grid-template-areas:'domain_input domain_add_btn refresh_btn';margin-block-end:var(--spacing-m);"]),u=c()(l.Z).withConfig({displayName:"domain-input__StyledInput",componentId:"sc-1n805ju-1"})(["&:not(:focus){border-color:var(--border-color-default);background-color:var(--background-color-secondary);}"]),h=c()(m.Z).withConfig({displayName:"domain-input__StyledRoloadButton",componentId:"sc-1n805ju-2"})(["grid-area:'refresh_btn';&:hover{background:var(--highlight-background-color-primary);}"]),C=o=>{const[e,i]=(0,n.useState)(""),a=e=>{const n=e.trim();""!==n&&(i((()=>"")),o.onAddDomain(n))};return(0,g.jsxs)(k,{children:[(0,g.jsx)(u,{style:{gridArea:"domain_input"},placeholder:"Type a domain name",value:e,onClear:()=>i((()=>"")),onKeyDown:o=>{"Enter"===o.key&&a(e)},onChange:o=>{i(o.target.value)}}),(0,g.jsx)(m.Z,{style:{gridArea:"domain_add_btn"},type:"secondary",text:"Add domain",onClick:()=>a(e)}),(0,g.jsx)(h,{type:"tertiary",icon:(0,g.jsx)(p.Z,{}),text:"Refresh",onClick:e=>{e.stopPropagation(),o.onRefresh()}})]})};var _=i(3691),E=i(4962),I=i(9460),y=i(9627),b=i(9705),x=i(5869);const f=c().div.withConfig({displayName:"cookie-pill__CookiePillWrapper",componentId:"sc-1nabzyu-0"})(["color:var(--content-color-secondary);background-color:",";border-radius:var(--border-radius-default);cursor:default;display:flex;align-items:center;margin-block-end:var(--spacing-s);padding-block:var(--spacing-s);padding-inline-start:var(--spacing-s);"],(o=>{return e=o.theme,o.isActive?e["highlight-background-color-secondary"]:e["background-color-primary"];var e})),j=o=>{const{isActive:e,onClick:i,onDelete:n,cookieName:a}=o;return(0,g.jsxs)(f,{isActive:e,onClick:o=>{o.stopPropagation(),i()},role:"tab","aria-expanded":e,"aria-label":"edit cookie",children:[a,(0,g.jsx)(m.Z,{type:"plain",icon:(0,g.jsx)(y.Z,{}),onClick:o=>{o.stopPropagation(),n()},"aria-label":"delete cookie"})]})},O=c()(r.Z).withConfig({displayName:"cookie-per-domain__Wrapper",componentId:"sc-n0abup-0"})(["margin-block:var(--spacing-m);padding-inline:var(--spacing-s);"]),v=o=>{const{cookies:e,selectedCookieId:i,onAddCookie:n,onCookieClicked:a,onCookieDelete:s}=o;return(0,g.jsxs)(O,{gap:"spacing-m",wrap:"wrap",children:[e.map((o=>{const e=(0,t.getCookieIdentifier)(o);return(0,g.jsx)(j,{isActive:e===i,onClick:()=>a(o),onDelete:()=>s(o),cookieName:o.name},e)})),(0,g.jsx)(m.Z,{type:"tertiary",text:"Add cookie",icon:(0,g.jsx)(x.Z,{}),onClick:o=>{o.stopPropagation(),n()}})]})};var D=i(1217);const A=c()(r.Z).withConfig({displayName:"cookie-source-editor__Wrapper",componentId:"sc-fsx1zx-0"})(["margin-block:var(--spacing-s);padding-inline:var(--spacing-s);"]),T=o=>{const[e,i]=(0,n.useState)((0,t.stringifyCookie)(o.cookie));return(0,g.jsxs)(A,{direction:"column",gap:"spacing-m",children:[(0,g.jsx)(D.Z,{value:e,onChange:o=>{i(o.target.value)}}),(0,g.jsxs)(r.Z,{gap:"spacing-m",justifyContent:"flex-end",children:[(0,g.jsx)(m.Z,{text:"Cancel",type:"secondary",size:"small",onClick:()=>o.onCancel()}),(0,g.jsx)(m.Z,{text:"Save",type:"primary",size:"small",onClick:()=>(()=>{const i=(0,t.parseCookieString)(o.host,e);i&&o.onSave(i)})()})]})]})};function S(o){const e={};for(const i of o)e[i.domain]=e[i.domain]||{expanded:!1,cookies:[]},e[i.domain].cookies.push(i);return e}const N=o=>({domains:S(o),highlightedDomain:null,cookieInEditMode:null,cookieCounter:o.length}),M=o=>1===o.length?"1 cookie":`${o.length} cookies`,L=(o,e)=>{o({type:"ADD_DOMAIN",domain:e})},Z=(o,e)=>e?o["highlight-background-color-primary"]:"transparent",w=c().header.withConfig({displayName:"domains-list__DomainSectionHeader",componentId:"sc-a8srlu-0"})(["gap:0.5rem;display:grid;grid-template-columns:auto auto 1fr;grid-template-areas:'domain_name domain_count domain_delete_btn';place-items:center end;min-height:var(--size-m);padding-inline:var(--spacing-s);"]),P=c()(m.Z).withConfig({displayName:"domains-list__DeleteDomainButton",componentId:"sc-a8srlu-1"})(["grid-area:domain_delete_btn;display:none;"]),R=c().section.withConfig({displayName:"domains-list__DomainSection",componentId:"sc-a8srlu-2"})(["cursor:default;background-color:",";border-bottom:var(--border-style-solid) var(--border-width-default) var(--border-color-default);&:hover{","{background-color:",";}","{display:inline-flex;}}"],(o=>Z(o.theme,o.isActive)),w,(o=>Z(o.theme,!0)),P),K=c().figure.withConfig({displayName:"domains-list__EmptyCookieFigure",componentId:"sc-a8srlu-3"})(["margin:0;margin-block-start:var(--spacing-xxxl);display:flex;flex-direction:column;flex:1;height:100%;align-items:center;justify-content:center;"]),H=c().figcaption.withConfig({displayName:"domains-list__EmptyCookieCaption",componentId:"sc-a8srlu-4"})(["margin-block-start:var(--spacing-l);"]),F=o=>{const{state:e,dispatch:i}=o,n=Object.entries(e.domains),a=(0,t.useCookieActions)();return 0===n.length?(0,g.jsxs)(K,{children:[(0,g.jsx)(_.Z,{}),(0,g.jsx)(H,{children:(0,g.jsx)(E.Z,{type:"h4",text:"No Cookies available",color:"content-color-primary"})})]}):(0,g.jsx)(g.Fragment,{children:n.map((([o,{cookies:n,expanded:s}])=>(0,g.jsxs)(R,{onClick:e=>{e.stopPropagation(),i({type:"HIGHLIGHT_SECTION",domain:o})},isActive:o===e.highlightedDomain,role:"region","aria-label":"domain",children:[(0,g.jsxs)(w,{onClick:e=>{e.stopPropagation(),i({type:"COLLAPSE_EXPAND_SECTION",domain:o})},"aria-label":"domain header",children:[(0,g.jsx)(E.Z,{style:{gridArea:"domain_name"},type:"h4",text:o}),(0,g.jsx)(I.ZP,{style:{gridArea:"domain_count"},children:M(n)}),(0,g.jsx)(P,{icon:(0,g.jsx)(y.Z,{}),type:"tertiary",tooltip:"Delete","data-testid":"domain-delete-btn",onClick:e=>{e.stopPropagation(),a.deleteDomain(o),i({type:"DELETE_DOMAIN",domain:o})}})]}),s&&(0,g.jsx)(v,{cookies:n,selectedCookieId:e.cookieInEditMode&&(0,t.getCookieIdentifier)(e.cookieInEditMode),onCookieClicked:o=>{i({type:"START_EDIT_COOKIE",cookie:o})},onAddCookie:()=>{i({type:"ADD_COOKIE",domain:o,onAddCookie:a.addCookie})},onCookieDelete:o=>{a.deleteCookie(o),i({type:"DELETE_COOKIE",cookie:o})}}),null!==e.cookieInEditMode&&e.cookieInEditMode.domain===o&&(0,g.jsx)(T,{host:e.cookieInEditMode.domain,cookie:e.cookieInEditMode,onCancel:()=>{i({type:"CANCEL_EDIT_COOKIE"})},onSave:o=>{e.cookieInEditMode&&(a.updateCookie(e.cookieInEditMode,o),i({type:"SAVE_EDITED_COOKIE",cookie:o}))}},(0,t.getCookieIdentifier)(e.cookieInEditMode))]},o)))})};var q=i(7977);const z=o=>({activeTabIndex:0,domainsList:N(o)}),G=(o,e)=>{switch(e.type){case"SET_ACTIVE_TAB":return Object.assign({},o,{activeTabIndex:e.index});case"FROM_DOMAIN_LIST":{const i=((o,e)=>{switch(e.type){case"ADD_DOMAIN":{const i=function(o){const e=b.parse(o);return e.host?e.host.join(".").toLowerCase():""}(e.domain);return""===i||void 0!==o.domains[i]?o:Object.assign({},o,{domains:Object.assign({},o.domains,{[i]:{expanded:!0,cookies:[]}})})}case"DELETE_DOMAIN":{const i={};for(const[n,a]of Object.entries(o.domains))n!==e.domain&&(i[n]=a);return Object.assign({},o,{domains:i})}case"HIGHLIGHT_SECTION":return Object.assign({},o,{highlightedDomain:e.domain});case"COLLAPSE_EXPAND_SECTION":{const i={};for(const[n,a]of Object.entries(o.domains))i[n]=n===e.domain?Object.assign({},a,{expanded:!a.expanded}):a;return Object.assign({},o,{highlightedDomain:e.domain,cookieInEditMode:null,domains:i})}case"START_EDIT_COOKIE":return Object.assign({},o,{highlightedDomain:e.cookie.domain,cookieInEditMode:e.cookie});case"CANCEL_EDIT_COOKIE":return Object.assign({},o,{cookieInEditMode:null});case"SAVE_EDITED_COOKIE":{if(!o.cookieInEditMode)return o;const{domain:i}=e.cookie;return o.domains[i].cookies=((o,e,i)=>{if((0,t.cookiesEq)(e,i)){const i=o.findIndex((o=>(0,t.cookiesEq)(o,e)));return o[i]=e,o}const n=o.findIndex((o=>(0,t.cookiesEq)(o,i))),a=o.findIndex((o=>(0,t.cookiesEq)(o,e)));return a>-1?(o.splice(a,1,e),o.splice(n,1),o):(o[n]=e,o)})(o.domains[i].cookies,e.cookie,o.cookieInEditMode),o.cookieInEditMode=null,o}case"ADD_COOKIE":{const i=o.cookieCounter+1,n=(0,t.makeCookie)(`Cookie_${i}`,e.domain),a=[...o.domains[e.domain].cookies,n];return e.onAddCookie(n),Object.assign({},o,{highlightedDomain:e.domain,cookieCounter:i,cookieInEditMode:n,domains:Object.assign({},o.domains,{[e.domain]:Object.assign({},o.domains[e.domain],{cookies:a})})})}case"DELETE_COOKIE":{const{domain:i,name:n,path:a}=e.cookie,t=o.domains[i].cookies.filter((o=>o.name===n?o.path!==a:o.name!==n));return Object.assign({},o,{cookieInEditMode:null,domains:Object.assign({},o.domains,{[i]:Object.assign({},o.domains[i],{cookies:t})})})}}})(o.domainsList,e.subAction);return Object.assign({},o,{domainsList:i})}case"REFRESH_SUCCESS":return Object.assign({},o,{domainsList:N(e.cookies)})}},W=c()(r.Z).withConfig({displayName:"cookies-editor__CookieEditorContainer",componentId:"sc-298s6q-0"})(["background-color:var(--background-color-primary);color:var(--content-color-primary);display:flex;flex-direction:column;padding:var(--spacing-l);"]);function B(o){const{state:e,dispatch:i}=o,n=o=>{i({type:"FROM_DOMAIN_LIST",subAction:o})};return(0,g.jsxs)(W,{children:[(0,g.jsx)(C,{onAddDomain:o=>{L(n,o)},onRefresh:()=>{(0,q.L)().then((o=>{i({type:"REFRESH_SUCCESS",cookies:o})}))}}),(0,g.jsx)(F,{state:e.domainsList,dispatch:n})]})}function V(){const{setTabTitle:o}=(0,a.useTabTitleMeta)();o("Cookies","cookies-editor");const e=(0,s.useLoaderData)(),[i,d]=(0,n.useReducer)(G,z(e));return(0,g.jsx)(t.CookieActionsProvider,{children:(0,g.jsx)(B,{dispatch:d,state:i})})}}}]);
//# sourceMappingURL=3740.f08f49119b5aa4c5.js.map