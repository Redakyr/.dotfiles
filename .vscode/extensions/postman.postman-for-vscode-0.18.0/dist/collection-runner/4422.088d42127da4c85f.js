"use strict";(self.webpackChunkcollection_runner=self.webpackChunkcollection_runner||[]).push([[4422],{44422:(t,e,r)=>{r.r(e),r.d(e,{BaseKVStorage:()=>d,InMemoryKVStorage:()=>p,KVStorage:()=>m,LocalStorageKVAdapter:()=>s,VSCodeInMemoryKVAdapter:()=>l,VSCodeKVAdapter:()=>i,useKVStorage:()=>v});const a="LOCAL_STORAGE_SUBSCRIBE_EVENT";class s{emitChangesEvent(t){var e;const r=new CustomEvent(a,{detail:t});null==(e=globalThis.document)||null==e.dispatchEvent||e.dispatchEvent(r)}async has(t){return!!globalThis.localStorage.getItem(t)}async set(t,e){globalThis.localStorage.setItem(t,JSON.stringify({value:e})),this.emitChangesEvent({key:t,value:e})}async get(t){const e=await globalThis.localStorage.getItem(t);try{return e?JSON.parse(e).value:null}catch(t){return null}}async remove(t){globalThis.localStorage.removeItem(t),this.emitChangesEvent({key:t,value:null})}subscribe(t,e,r){var s;function n(a){r&&r.getPartitionId(t).then((t=>{var r,s;null!=a&&null!=(r=a.detail)&&r.key&&(null==a||null==(s=a.detail)?void 0:s.key)===t&&e(a.detail.value)}))}return null==(s=globalThis.document)||null==s.addEventListener||s.addEventListener(a,n),()=>{var t;null==(t=globalThis.document)||null==t.removeEventListener||t.removeEventListener(a,n)}}}var n=r(77736);class o{constructor(t){this.storage=t}async has(t){return this.storage.getItem(t).then((t=>!!t))}async set(t,e){return this.storage.setItem(t,e)}async get(t){return this.storage.getItem(t)}async remove(t){return this.storage.removeItem(t)}subscribe(t,e,r){return n.VSCodeCommunicationsService.subscribe("STORAGE_UPDATE",(a=>{null!=r&&r.getPartitionId&&(null==r||r.getPartitionId(t).then((t=>{a.key&&a.key===t&&"KV"===a.storageType&&e(a.value)})))}))}}class i extends o{constructor(){super(new n.VSCodeKVPermanentStorage)}}class l extends o{constructor(){super(new n.VSCodeKVInMemoryStorage)}}function c(t){let e,r;return function(a){return r&&e===a?Promise.resolve(r):(e=a,Promise.resolve(t(a)).then((t=>(r=t,t))))}}var u=r(9907);const g=t=>e=>function(t,e){return[(0,u.getUserId)(),(0,u.getTeamId)(),t,e].join(":")}(t,e);class d{constructor(t,{storageAdapter:e,partitionStrategy:r}){this.type="kv",this.name=void 0,this.storageAdapter=void 0,this.partitionStrategy=void 0,this.name=t,this.storageAdapter=e,this.partitionStrategy=null!=r?r:g(t)}async getPartitionId(t){return this.partitionStrategy?this.partitionStrategy(t):g(this.name)(t)}async get(t){const e=await this.getPartitionId(t);return this.storageAdapter.get(e)}async merge(t,e,r){const a=await this.getPartitionId(t),s=r(await this.get(t),e);await this.storageAdapter.set(t,s,{partitionId:a})}async set(t,e){const r=await this.getPartitionId(t);await this.storageAdapter.set(r,e)}async remove(t){const e=await this.getPartitionId(t);await this.storageAdapter.remove(e)}async has(t){const e=await this.getPartitionId(t);return this.storageAdapter.has(e)}subscribe(t,e){return this.storageAdapter.subscribe(t,e,{getPartitionId:c(this.getPartitionId.bind(this))})}}var h=r(40540);function v(t,e){const[r,a]=(0,h.useState)(null);(0,h.useMemo)((()=>{t.get(e).then(a)}),[e,t]),(0,h.useEffect)((()=>t.subscribe(e,a)),[e,t]);const s=(0,h.useCallback)((r=>t.set(e,r)),[e,t]);return{value:r,setValue:s,removeValue:(0,h.useCallback)((()=>t.remove(e)),[e,t])}}class m extends d{constructor(t,{storageAdapter:e,partitionStrategy:r}={}){if(!t)throw new Error("Storage name not defined");const a=new i;super(t,{storageAdapter:e||a,partitionStrategy:r})}}class p extends d{constructor(t,{storageAdapter:e,partitionStrategy:r}={}){if(!t)throw new Error("Storage name not defined");const a=new l;super(t,{storageAdapter:e||a,partitionStrategy:r})}}}}]);
//# sourceMappingURL=4422.088d42127da4c85f.js.map