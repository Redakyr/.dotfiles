/*! For license information please see 3547.31532e2598f373b2.js.LICENSE.txt */
(self.webpackChunkfull_documentation_view=self.webpackChunkfull_documentation_view||[]).push([[3547,3260,2062,5826],{691227:(t,e,s)=>{var r=s(532940),n=r.Buffer;function a(t,e){for(var s in t)e[s]=t[s]}function i(t,e,s){return n(t,e,s)}n.from&&n.alloc&&n.allocUnsafe&&n.allocUnsafeSlow?t.exports=r:(a(r,e),e.Buffer=i),i.prototype=Object.create(n.prototype),a(n,i),i.from=function(t,e,s){if("number"==typeof t)throw new TypeError("Argument must not be a number");return n(t,e,s)},i.alloc=function(t,e,s){if("number"!=typeof t)throw new TypeError("Argument must be a number");var r=n(t);return void 0!==e?"string"==typeof s?r.fill(e,s):r.fill(e):r.fill(0),r},i.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return n(t)},i.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return r.SlowBuffer(t)}},85166:(t,e,s)=>{"use strict";var r=s(691227).Buffer,n=r.isEncoding||function(t){switch((t=""+t)&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function a(t){var e;switch(this.encoding=function(t){var e=function(t){if(!t)return"utf8";for(var e;;)switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:if(e)return;t=(""+t).toLowerCase(),e=!0}}(t);if("string"!=typeof e&&(r.isEncoding===n||!n(t)))throw new Error("Unknown encoding: "+t);return e||t}(t),this.encoding){case"utf16le":this.text=h,this.end=o,e=4;break;case"utf8":this.fillLast=l,e=4;break;case"base64":this.text=u,this.end=f,e=3;break;default:return this.write=c,void(this.end=d)}this.lastNeed=0,this.lastTotal=0,this.lastChar=r.allocUnsafe(e)}function i(t){return t<=127?0:t>>5==6?2:t>>4==14?3:t>>3==30?4:t>>6==2?-1:-2}function l(t){var e=this.lastTotal-this.lastNeed,s=function(t,e,s){if(128!=(192&e[0]))return t.lastNeed=0,"�";if(t.lastNeed>1&&e.length>1){if(128!=(192&e[1]))return t.lastNeed=1,"�";if(t.lastNeed>2&&e.length>2&&128!=(192&e[2]))return t.lastNeed=2,"�"}}(this,t);return void 0!==s?s:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(t.copy(this.lastChar,e,0,t.length),void(this.lastNeed-=t.length))}function h(t,e){if((t.length-e)%2==0){var s=t.toString("utf16le",e);if(s){var r=s.charCodeAt(s.length-1);if(r>=55296&&r<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],s.slice(0,-1)}return s}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function o(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var s=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,s)}return e}function u(t,e){var s=(t.length-e)%3;return 0===s?t.toString("base64",e):(this.lastNeed=3-s,this.lastTotal=3,1===s?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-s))}function f(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function c(t){return t.toString(this.encoding)}function d(t){return t&&t.length?this.write(t):""}e.s=a,a.prototype.write=function(t){if(0===t.length)return"";var e,s;if(this.lastNeed){if(void 0===(e=this.fillLast(t)))return"";s=this.lastNeed,this.lastNeed=0}else s=0;return s<t.length?e?e+this.text(t,s):this.text(t,s):e||""},a.prototype.end=function(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+"�":e},a.prototype.text=function(t,e){var s=function(t,e,s){var r=e.length-1;if(r<s)return 0;var n=i(e[r]);return n>=0?(n>0&&(t.lastNeed=n-1),n):--r<s||-2===n?0:(n=i(e[r]))>=0?(n>0&&(t.lastNeed=n-2),n):--r<s||-2===n?0:(n=i(e[r]))>=0?(n>0&&(2===n?n=0:t.lastNeed=n-3),n):0}(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=s;var r=t.length-(s-this.lastNeed);return t.copy(this.lastChar,0,r),t.toString("utf8",e,r)},a.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}},753260:()=>{},328167:()=>{},863057:()=>{},578168:()=>{},891139:()=>{},852472:()=>{}}]);
//# sourceMappingURL=3547.31532e2598f373b2.js.map