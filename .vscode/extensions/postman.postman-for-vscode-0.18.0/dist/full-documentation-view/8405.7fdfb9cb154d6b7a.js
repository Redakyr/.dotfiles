"use strict";(self.webpackChunkfull_documentation_view=self.webpackChunkfull_documentation_view||[]).push([[8405],{389539:(e,t,s)=>{function n(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}s.d(t,{Z:()=>n})},838879:(e,t,s)=>{s.d(t,{Z:()=>o});var n=0;function o(e){return"__private_"+n+++"_"+e}},998283:(e,t,s)=>{function n(e,t){if(null==e)return{};var s,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(o[s]=e[s]);return o}s.d(t,{Z:()=>n})},568405:(e,t,s)=>{s.r(t),s.d(t,{HTTPRequest:()=>R,PostmanGateway:()=>S,PostmanHTTPGateway:()=>S,httpRequest:()=>q,postmanGateway:()=>T,postmanHttpGateway:()=>T,postmanWebsocketGateway:()=>ae,useHttpRequest:()=>A,usePostmanGateway:()=>x});var n=s(607560),o=s(998283),r=s(209907),i=s(777736);s(497376);const a={url:"/_api/ws/proxy",method:"post",beforeRequest:[({request:e,options:t})=>{const s=(0,r.getAuthRequestOptions)();if(/localhost:(\d{2,6})|postman(-beta|-preview|-stage)?.co(m)?/.test(e.url)){if(s.headers)for(const[t,n]of Object.entries(s.headers))e.headers.set(t,n);return s.credentials?(t.credentials=s.credentials,new Request(e.clone(),{credentials:s.credentials})):e}}],beforeError:[async e=>{var t;if(403===(null==(t=e.response)?void 0:t.status))try{"authenticationError"===(await e.response.json()).error.name&&i.VSCodeCommunicationsService.postMessageToExtension({type:"AUTH_TOKEN_REVOKED",payload:{}})}catch(e){}}],credentials:"include",timeout:1e4,headers:{"release-channel":"vscode"}},c={0:"Not Connected",100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",510:"Not Extended",511:"Network Authentication Required"},u=(e,t)=>{if(null==e)return t;if(null==t)return e;if("function"==typeof AbortController){const s=new AbortController;return e.addEventListener("abort",(()=>{null==s||s.abort(e.reason)})),t.addEventListener("abort",(()=>{null==s||s.abort(t.reason)})),s.signal}return null},l=(e={},t={})=>{const s=new Headers(e);return new Headers(t).forEach(((e,n)=>{t instanceof Headers&&"undefined"===e||void 0===e?s.delete(n):s.set(n,e)})),s},h=(e,...t)=>{if(e.constructor===Object&&(e=(0,n.Z)({},e)),e.constructor===Array&&(e=[...e]),0===t.length)return e;for(const[n,o]of Object.entries(null!=(s=t.shift())?s:[])){var s;o&&(e[n]||Object.assign(e,{[n]:{}}),o.constructor===Object||o.constructor===Array&&o.find((e=>e.constructor===Object))?e[n]=h(e[n],o):o.constructor===Array?Object.assign(e,{[n]:o.find((e=>e.constructor===Array))?[...e[n],...o]:[...new Set([...e[n],...o])]}):Object.assign(e,{[n]:o}))}return e},d=(e,t)=>{if(void 0!==e||void 0!==t)return void 0===e?(0,n.Z)({},t):void 0===t?(0,n.Z)({},e):h(e,t)},p=e=>{return void 0===e?new URLSearchParams:e instanceof URLSearchParams?e:"object"==typeof e?new URLSearchParams((t=e,Object.fromEntries(Object.entries(t).filter((([e,t])=>void 0!==t))))):new URLSearchParams(e);var t},b=["headers","query","beforeError","afterResponse","beforeRequest","data","method","signal"],f=["headers","query","beforeError","afterResponse","beforeRequest","data","method","signal"],w=(e=[],t=[])=>[...new Set([...e,...t])],m=(e,t)=>{var s,r;const{headers:i,query:a,beforeError:c,afterResponse:h,beforeRequest:m,data:g,method:y,signal:v}=e,Z=(0,o.Z)(e,b),{headers:R,query:q,beforeError:E,afterResponse:S,beforeRequest:T,data:O,method:P,signal:A}=t,x=(0,o.Z)(t,f);return(0,n.Z)({url:null!=(s=t.url)?s:e.url},Z,x,{headers:l(i,R),beforeError:w(c,E),beforeRequest:w(m,T),afterResponse:w(h,S),query:(C=a,k=q,p(void 0===C?k:void 0===k?C:(0,n.Z)({},Object.fromEntries(p(C)),Object.fromEntries(p(k))))),data:d(g,O),method:null==(r=null!=P?P:y)?void 0:r.toUpperCase(),signal:u(v,A)});var C,k};class g extends Error{constructor({message:e="Request Error",request:t,response:s,options:n}){super(e),this.options=void 0,this.request=void 0,this.response=void 0,this.metadata=void 0,this.name="RequestError",this.request=t,this.response=s,this.options=n}}class y extends g{constructor({request:e,response:t,options:s}){super({message:t.statusText||c[t.status]||"HTTP Response Error",request:e,response:t,options:s}),this.statusCode=void 0,this.name="HTTPResponseError",this.statusCode=t.status}}class v{constructor(e,t={}){this.opts=void 0,this.defaultOpts={},this.abortController=void 0,this.abortController=new AbortController,this.defaultOpts=t,this.opts=m((0,n.Z)({},this.defaultOpts,{signal:this.abortController.signal}),e)}validateOptions(e){const{url:t,method:s,data:n,timeout:o}=e;if(!s)throw new Error("Method is required");if(!t)throw new Error("URL is required");if("string"!=typeof t&&!(t instanceof URL||t instanceof globalThis.Request))throw new TypeError("url must be a string/URL/Request. Found: ");if(o&&o>Number.MAX_SAFE_INTEGER)throw new RangeError(`timeout value must be less than ${Number.MAX_SAFE_INTEGER}`);if(n&&("get"===s||"delete"===s))throw new Error(`Cannot send data with ${s} request`)}async onBeforeRequest(e,t){for(const n of null!=(s=t.beforeRequest)?s:[]){var s;const o=await n({request:e,options:t});if(o instanceof globalThis.Response||o instanceof globalThis.Request)return o}}async onAfterResponse(e,t,s){for(const o of null!=(n=t.afterResponse)?n:[]){var n;const r=await o({request:e,options:t,response:s});if(r instanceof globalThis.Response)return r}}async onBeforeError(e,t){for(const n of null!=(s=t.beforeError)?s:[]){var s;const t=await n(e);if(t instanceof Error)return t}}post(e){return this.request(Object.assign({method:"post"},e))}put(e){return this.request(Object.assign({method:"put"},e))}get(e){return this.request(Object.assign({method:"get"},e))}patch(e){return this.request(Object.assign({method:"patch"},e))}delete(e){return this.request(Object.assign({method:"delete"},e))}}const Z=["url","method","query","data","headers"];class R extends v{constructor(e,t={}){super(e,t),this.abortController=new AbortController,this.defaultOpts={}}async fetchViaExtension(e){const t={};let s;for(const[s,n]of e.headers)t[s]=n;try{"function"==typeof e.json&&(s=await e.json())}catch(e){}const o=await i.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"HTTP_REQUEST",payload:{requestOptions:{method:e.method,url:e.url,body:JSON.stringify(s),headers:(0,n.Z)({},t,{connection:"keep-alive"})}}});return new Response(o.body,{status:o.status,statusText:o.statusText,headers:o.headers})}async fetch(e,t){globalThis.fetch.bind(globalThis);const s=await this.onBeforeRequest(e,t);return s instanceof globalThis.Request&&(e=s),s instanceof globalThis.Response?s:this.fetchViaExtension(e.clone())}async send(e,t){let s=await this.fetch(e,t);const n=await this.onAfterResponse(e,t,s);if(n instanceof globalThis.Response&&(s=n),!s.ok){let n=new y({request:e,response:s,options:t});const o=await this.onBeforeError(n,t);throw o instanceof Error&&(n=o),n}return s}async request(e){var t,s,r;const i=m(this.opts,e);this.validateOptions(i);const a=i,{url:c,method:u,query:l,data:h,headers:d}=a,p=(0,o.Z)(a,Z);let b;"object"==typeof h&&(b=JSON.stringify(h));const f=c instanceof Request?new URL(c.url):new URL(c,globalThis.location.origin);if(l){const e="string"==typeof l?l.replace(/^\?/,""):new URLSearchParams(l).toString();f.search=e}const w=d instanceof Headers?d:new Headers(null!=(t=d)?t:{});w.set("content-type",null!=(s=w.get("content-type"))?s:"application/json");const g=new globalThis.Request(f,(0,n.Z)({method:u,headers:w,body:b},p)),y=await this.send(g,i);return p.plainText||null!=(r=y.headers.get("content-type"))&&r.includes("text")?await y.text():await y.json()}extend(e){return new R(e,this.opts)}}const q=new R({}),E=["method","query","path","service","data"];class S extends R{constructor(e={},t=a){super(e,t)}sendProxyRequest(e){const{method:t,query:s={},path:r,service:i,data:a}=e,c=(0,o.Z)(e,E);if(!r)throw new Error("Path is required");const u=p(s),l=null!=u&&u.toString()?r+"?"+u.toString():r,h=(0,n.Z)({path:l,service:i,method:t},a);return super.request((0,n.Z)({},c,{data:h,method:"post"}))}request(e){const t=m(this.opts,e);this.validateOptions(t);const{url:s}=t;return/\/ws\/proxy/.test(s.toString())?this.sendProxyRequest(t):super.request(t)}extend(e){return new S(e,this.opts)}}const T=new S({});var O=s(540540);const P=(e=q.request)=>(t,s=[])=>{const o=(0,O.useRef)(new AbortController);(0,O.useEffect)((()=>{const e=t.signal,s=()=>{o.current.abort()};return e instanceof AbortSignal&&e.addEventListener("abort",s),()=>{null==e||e.removeEventListener("abort",s)}}),[t.signal]);const[r,i]=(0,O.useReducer)(((e,t)=>{switch(t.type){case"loading":return(0,n.Z)({},e,{loading:!0});case"fetched":return(0,n.Z)({},e,{loading:!1,data:t.payload,error:void 0});case"error":return(0,n.Z)({},e,{loading:!1,data:void 0,error:t.payload});default:return e}}),{loading:!0,data:void 0,error:void 0});return(0,O.useEffect)((()=>{const s=o.current;return(async()=>{i({type:"loading"});try{const r=await e((0,n.Z)({},t,{signal:o.current.signal}));if(s.signal.aborted)return;i({type:"fetched",payload:r})}catch(e){if(s.signal.aborted)return;i({type:"error",payload:e})}})(),()=>{s.abort()}}),s),r},A=P(q.request.bind(q)),x=P(T.request.bind(T));var C=s(394021),k=s(518160),j=s(389539),L=s(838879),N=s(794475),U=s(861801),F=s.n(U),I=s(384492);const M=6e5,_="offline",D="connected",H="reconnected",G="regular",V="watchdog",B={transports:["websocket"],forceNew:!0,multiplex:!1,reconnection:!0,reconnectionDelay:1e4,reconnectionAttempts:Number.POSITIVE_INFINITY,timeout:5e3,path:"/socket.io",reconnectionDelayMax:6e4,randomizationFactor:0},W={[G]:(0,n.Z)({},B,{transports:["websocket"],reconnectionAttempts:8,reconnectionDelay:1e4,randomizationFactor:.3}),[V]:(0,n.Z)({},B,{transports:["websocket"],reconnection:!0,reconnectionDelay:M,reconnectionDelayMax:M,reconnectionAttempts:Number.POSITIVE_INFINITY,randomizationFactor:.3})},z={baseUrl:I.Z.WEBSOCKET_GATEWAY_URL,url:"/ws/proxy",method:"post",headers:{"release-channel":"vscode"}};var K=(0,L.Z)("connectionMode"),Y=(0,L.Z)("connectionStatus"),$=(0,L.Z)("socketId"),J=(0,L.Z)("connectionEvents"),X=(0,L.Z)("socket"),Q=(0,L.Z)("connectionTelemetry"),ee=(0,L.Z)("defaultOpts"),te=(0,L.Z)("watchdogSetupTimeout"),se=(0,L.Z)("attachListeners");class ne{set connectionStatus(e){(0,j.Z)(this,Y)[Y]=e,(0,j.Z)(this,J)[J].emit("status",e),this.debugLog("updated connection status",e)}get connectionStatus(){return(0,j.Z)(this,Y)[Y]}constructor(e){Object.defineProperty(this,K,{writable:!0,value:G}),Object.defineProperty(this,Y,{writable:!0,value:_}),Object.defineProperty(this,$,{writable:!0,value:void 0}),Object.defineProperty(this,J,{writable:!0,value:new N.EventEmitter}),Object.defineProperty(this,X,{writable:!0,value:null}),Object.defineProperty(this,Q,{writable:!0,value:{connectionAttempt:0,lastDisconnectReason:"",lastDisconnectTime:0,socketOffineTime:0}}),Object.defineProperty(this,ee,{writable:!0,value:void 0}),Object.defineProperty(this,te,{writable:!0,value:void 0}),this.debugLog=(...e)=>{var t;(0,n.Z)({socketId:null==(t=(0,j.Z)(this,X)[X])?void 0:t.id,connectionMode:(0,j.Z)(this,K)[K],connectionStatus:this.connectionStatus},(0,j.Z)(this,Q)[Q])},this.onAppOnline=()=>{var e;this.connectionStatus!==D&&this.connectionStatus!==H&&(null==(e=(0,j.Z)(this,X)[X])||e.disconnect(),this.reconfigureSocket())},Object.defineProperty(this,se,{writable:!0,value:()=>{if(!(0,j.Z)(this,X)[X])return;const e={connect:()=>{var e;(0,j.Z)(this,X)[X]&&((0,j.Z)(this,$)[$]?(0,j.Z)(this,$)[$]!==(null==(e=(0,j.Z)(this,X)[X])?void 0:e.id)&&((0,j.Z)(this,$)[$]=(0,j.Z)(this,X)[X].id,this.connectionStatus!==H&&(this.connectionStatus=H)):((0,j.Z)(this,$)[$]=(0,j.Z)(this,X)[X].id,this.connectionStatus=D),(0,j.Z)(this,Q)[Q].socketOffineTime=(0,j.Z)(this,Q)[Q].connectionAttempt<2?0:Date.now()-(0,j.Z)(this,Q)[Q].lastDisconnectTime,(0,j.Z)(this,K)[K]===V&&this.clearWatchdog())},reconnect:()=>{var e,t,s;this.connectionStatus!==H&&((0,j.Z)(this,$)[$]!==(null==(e=(0,j.Z)(this,X)[X])?void 0:e.id)||null!=(t=(0,j.Z)(this,X)[X])&&t.id)&&(this.connectionStatus=H,(0,j.Z)(this,$)[$]=null==(s=(0,j.Z)(this,X)[X])?void 0:s.id)},reconnecting:()=>{this.connectionStatus="reconnecting"},reconnect_failed:()=>{this.connectionStatus=_,(0,j.Z)(this,K)[K]!==V&&this.setupWatchdog()},disconnect:e=>{(0,j.Z)(this,Q)[Q].lastDisconnectReason=e,(0,j.Z)(this,Q)[Q].lastDisconnectTime=Date.now(),this.connectionStatus=_},reconnect_attempt:e=>{(0,j.Z)(this,Q)[Q].connectionAttempt=e}};for(const[t,s]of Object.entries(e))(0,j.Z)(this,X)[X].on(t,s);globalThis.addEventListener("online",this.onAppOnline)}}),this.reconfigureSocket=(e=G)=>{if(!(0,j.Z)(this,X)[X])return;(0,j.Z)(this,K)[K]=e,this.debugLog("reconfiguring socket to mode ",e);const{reconnection:t,reconnectionAttempts:s,reconnectionDelay:o,reconnectionDelayMax:r,timeout:i}=(0,n.Z)({},(0,j.Z)(this,ee)[ee],W[e]);i&&(0,j.Z)(this,X)[X].io.timeout(i),t&&(0,j.Z)(this,X)[X].io.reconnection(t),s&&(0,j.Z)(this,X)[X].io.reconnectionAttempts(s),o&&(0,j.Z)(this,X)[X].io.reconnectionDelay(o),r&&(0,j.Z)(this,X)[X].io.reconnectionDelayMax(r),(0,j.Z)(this,X)[X].connect()},this.destroyConnection=()=>{var e,t;(0,j.Z)(this,X)[X]&&(this.debugLog("destroying conenction "),null==(e=(0,j.Z)(this,X)[X])||e.removeAllListeners(),null==(t=(0,j.Z)(this,X)[X])||t.disconnect(),(0,j.Z)(this,X)[X]=null),this.connectionStatus=_,globalThis.removeEventListener("online",this.onAppOnline)},this.createConnection=({connectionMode:e=(0,j.Z)(this,K)[K],forceConnect:t=!1}={})=>{t&&this.destroyConnection(),(0,j.Z)(this,K)[K]!==e&&((0,j.Z)(this,K)[K]=e),this.connectionStatus===D&&(0,j.Z)(this,X)[X]||((0,j.Z)(this,Q)[Q].connectionAttempt++,(0,j.Z)(this,X)[X]=F()(`${(0,j.Z)(this,ee)[ee].baseUrl}`,(0,n.Z)({},W[e],(0,j.Z)(this,ee)[ee])),(0,j.Z)(this,se)[se]())},this.clearWatchdog=()=>{clearInterval((0,j.Z)(this,te)[te]),(0,j.Z)(this,te)[te]=void 0,this.reconfigureSocket()},this.setupWatchdog=()=>{(0,j.Z)(this,te)[te]=setTimeout((()=>{this.connectionStatus===_&&this.reconfigureSocket(V)}),M)},this.waitForConnection=()=>new Promise(((e,t)=>{if(this.connectionStatus===D||this.connectionStatus===H)return e();this.subscribeToConnectionStatus((t=>{if(t===D||t===H)return e()}))})),(0,j.Z)(this,K)[K]=e.connectionMode||G,(0,j.Z)(this,ee)[ee]=e,this.createConnection()}subscribeToConnectionStatus(e){(0,j.Z)(this,J)[J].on("status",e)}attachListener(e,t){var s;null==(s=(0,j.Z)(this,X)[X])||s.on(e,t)}onReconnect(e){(0,j.Z)(this,J)[J].on("status",(t=>{t===H&&e()}))}async emit(e){return await this.waitForConnection(),new Promise(((t,s)=>{var n;null==(n=(0,j.Z)(this,X)[X])||n.emit(e.method,e,(e=>t(e)))}))}}class oe extends Error{constructor(){super(),this.message="Cancelled Request"}}class re extends Error{constructor(){super(),this.message="Socket Disconnected"}}class ie extends v{constructor(e,t={}){super(e,t),this.websocket=null,this.options={},this.options=(0,n.Z)({},e,t)}createSocket(){return this.websocket?this.websocket:new ne({baseUrl:this.options.baseUrl})}async request(e){return this.websocket||(this.websocket=this.createSocket()),this.websocket.emit(e)}async createSubscription(e){this.websocket||(this.websocket=this.createSocket());const{subscribeRequest:t,unsubscribeRequest:s,subscriptionEvents:n,responseFilter:o,broadcastFilter:r,signal:i}=e,a=new C.Subject,c=new Promise((e=>{const t=()=>{const t=new oe;a.error(t),e(t)};null==i||i.addEventListener("abort",t),null!=i&&i.aborted&&t()})),u=await Promise.race([this.websocket.emit(t),c]),l=u instanceof oe;for(const e of n)this.websocket.attachListener(e,(e=>{a.next(e)}));let h=a.asObservable();if(this.websocket.onReconnect((()=>{a.error(new re)})),!l&&o&&r){const e=o(u);h=h.pipe((0,k.filter)((t=>(r&&r(t))===e)))}return{subscribe:h.subscribe.bind(h),unsubscribe:()=>{var e;a.complete(),null==(e=this.websocket)||e.emit(s)}}}extend(e){return new ie(e,this.opts)}}const ae=new class extends ie{constructor(e,t=z){super(e,t)}constructRequestContext(e){if(e.url&&!/\/ws\/proxy/.test(e.url.toString())){let t=e.url;if(e.query&&!e.url.toString().includes("?")){const s=p(e.query).toString();t=t.toString()+"?"+s}const s=(0,r.getAuthRequestOptions)();return(0,n.Z)({},e,{url:t,headers:(0,n.Z)({},this.defaultOpts.headers,s.headers,e.headers)})}const{service:t,method:s,path:o,query:i,data:a,headers:c,body:u}=e;if(!o)throw new Error("Path is required");if(!t)throw new Error("Service is required");const l=p(i),h=null!=l&&l.toString()?o+"?"+l.toString():o,d=(0,r.getAuthRequestOptions)();return(0,n.Z)({},this.defaultOpts,{headers:(0,n.Z)({},this.defaultOpts.headers,d.headers,c),data:{service:t,method:s,path:h,data:a,body:u}})}request(e){const t=this.constructRequestContext(e);return super.request(t)}subscribe(e){const t={subscribeRequest:this.constructRequestContext(e.subscribeRequest),unsubscribeRequest:this.constructRequestContext(e.unsubscribeRequest),subscriptionEvents:e.subscriptionEvents,responseFilter:e.responseFilter,broadcastFilter:e.broadcastFilter,signal:e.signal};return super.createSubscription(t)}}({})}}]);
//# sourceMappingURL=8405.7fdfb9cb154d6b7a.js.map