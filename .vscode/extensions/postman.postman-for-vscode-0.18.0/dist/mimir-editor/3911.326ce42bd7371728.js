"use strict";(self.webpackChunkmimir_editor=self.webpackChunkmimir_editor||[]).push([[3911],{23911:(e,s,n)=>{n.r(s),n.d(s,{Modals:()=>t});var i={};n.r(i),n.d(i,{ModalDialog:()=>p});var t={};n.r(t),n.d(t,{Ui:()=>i,getModals:()=>a});var r=n(77736);class o{async showWarningDialog(e){const{subject:s,message:n,options:i}=e;return r.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"UI_SHOW_MODAL_DIALOG",payload:{severity:"warning",subject:s,message:n,options:i}})}}function a(){return new o}var l=n(40540),d=n(35348),c=n(58560),u=n(80605),m=n(52322);const p=e=>{const[s,n]=(0,l.useState)(null),[i,t]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{function s(s){const{detail:i}=s;e.uid===i.uid&&(n(i),t(!0))}return window.addEventListener("pm:modal:request",s),()=>{window.removeEventListener("pm:modal:request",s)}}),[e.uid]),s?(0,m.jsxs)(d.u_,{isOpen:i,size:"small",onClose:()=>t(!1),children:[(0,m.jsx)(d.xB,{heading:s.subject}),(0,m.jsx)(d.hz,{children:(0,m.jsx)("p",{children:s.message})}),(0,m.jsx)(d.mz,{children:(0,m.jsx)(c.Z,{justifyContent:"flex-end",grow:1,shrink:1,gap:"spacing-m",children:s.options.map((e=>(0,m.jsx)(u.Z,{type:!0===e.isPrimary?"primary":"secondary",text:e.title,onClick:()=>{s.callback(e),t(!1)}},e.title)))})})]}):null}}}]);
//# sourceMappingURL=3911.326ce42bd7371728.js.map