"use strict";(self.webpackChunkcollection_runner=self.webpackChunkcollection_runner||[]).push([[9239],{31597:(e,r,n)=>{n.r(r),n.d(r,{perfComponents:()=>t,perfConst:()=>a,sendMeasureEvent:()=>E,sessionId:()=>p});var a={};n.r(a),n.d(a,{GENERIC_CATEGORY:()=>o,PERFORMANCE_GLOBAL_NAMESPACE:()=>c});var t={};n.r(t),n.d(t,{PerfContext:()=>u,PerformanceMarkPaint:()=>l});const c="__POSTMAN_PERFORMANCE__",o="app-perf";var i=n(40540),s=n(52322);function l({children:e,markName:r,condition:n=!0,callback:a=function(){}}){const[t,c]=(0,i.useState)(!1),o=(0,i.useRef)(0),l=()=>{var e;if(n&&!t&&null!=(e=performance)&&e.mark){performance.mark(r);try{a()}catch(e){console.error("PerformanceMarkPaint: provided callback threw an error.",e)}c(!0)}};return(0,i.useLayoutEffect)((()=>(o.current=requestAnimationFrame(l),()=>cancelAnimationFrame(o.current))),[n]),(0,s.jsx)(s.Fragment,{children:e})}l.displayName="PerformanceMarkPaint";const f={markName:void 0,callback:void 0},u=(0,i.createContext)(f);u.displayName="PerfContext";var m=n(7560),d=n(92465);const p=(0,n(48722).v4)(),k=[];function v(e){const r=(0,m.Z)({},e,{traceId:p});d.AnalyticsService.addEventV2(r)}function E({name:e,category:r=o,label:n,entityType:a,once:t=!0}){if(!t||!k.includes(e)){k.push(e);for(const t of performance.getEntriesByName(e).filter((e=>e instanceof PerformanceMeasure)))v({category:r,action:t.name,value:Math.round(t.duration),label:n||"",entityType:a})}}}}]);
//# sourceMappingURL=9239.ebcacaeb9fdcc8b6.js.map