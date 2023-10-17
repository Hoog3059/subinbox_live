var yF=Object.defineProperty;var vF=(n,e,t)=>e in n?yF(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var nt=(n,e,t)=>(vF(n,typeof e!="symbol"?e+"":e,t),t),Ag=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var _h=(n,e,t)=>(Ag(n,e,"read from private field"),t?t.call(n):e.get(n)),xl=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},bg=(n,e,t,r)=>(Ag(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t);var kl=(n,e,t)=>(Ag(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=function(n,e){if(!n)throw Za(e)},Za=function(n){return new Error("Firebase Database ("+tb.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},IF=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},sf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,c=o?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,p=(s&3)<<4|c>>4;let _=(c&15)<<2|h>>6,I=h&63;u||(I=64,o||(_=64)),r.push(t[f],t[p],t[_],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(nb(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):IF(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||h==null||p==null)throw new wF;const _=s<<2|c>>4;if(r.push(_),h!==64){const I=c<<4&240|h>>2;if(r.push(I),p!==64){const A=h<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wF extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rb=function(n){const e=nb(n);return sf.encodeByteArray(e,!0)},ld=function(n){return rb(n).replace(/\./g,"")},cd=function(n){try{return sf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EF(n){return ib(void 0,n)}function ib(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!TF(t)||(n[t]=ib(n[t],e[t]));return n}function TF(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AF(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bF=()=>AF().__FIREBASE_DEFAULTS__,RF=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},SF=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&cd(n[1]);return e&&JSON.parse(e)},of=()=>{try{return bF()||RF()||SF()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},sb=n=>{var e,t;return(t=(e=of())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},CF=n=>{const e=sb(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ob=()=>{var n;return(n=of())===null||n===void 0?void 0:n.config},ab=n=>{var e;return(e=of())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PF(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),c="";return[ld(JSON.stringify(t)),ld(JSON.stringify(o)),c].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Kt())}function xF(){var n;const e=(n=of())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kF(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function lb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DF(){const n=Kt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cb(){return tb.NODE_ADMIN===!0}function NF(){return!xF()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Um(){try{return typeof indexedDB=="object"}catch{return!1}}function OF(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MF="FirebaseError";class fi extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=MF,Object.setPrototypeOf(this,fi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?VF(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new fi(i,c,r)}}function VF(n,e){return n.replace(LF,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const LF=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n){return JSON.parse(n)}function dn(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=function(n){let e={},t={},r={},i="";try{const s=n.split(".");e=yc(cd(s[0])||""),t=yc(cd(s[1])||""),i=s[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},FF=function(n){const e=ub(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},UF=function(n){const e=ub(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ka(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function h_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ud(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function vc(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(PE(s)&&PE(o)){if(!vc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function PE(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BF{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)r[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const _=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(_<<1|_>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],c=this.chain_[3],u=this.chain_[4],h,f;for(let p=0;p<80;p++){p<40?p<20?(h=c^s&(o^c),f=1518500249):(h=s^o^c,f=1859775393):p<60?(h=s&o|c&(s|o),f=2400959708):(h=s^o^c,f=3395469782);const _=(i<<5|i>>>27)+h+u+f+r[p]&4294967295;u=c,c=o,o=(s<<30|s>>>2)&4294967295,s=i,i=_}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<t;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function $F(n,e){const t=new WF(n,e);return t.subscribe.bind(t)}class WF{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");qF(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Rg),i.error===void 0&&(i.error=Rg),i.complete===void 0&&(i.complete=Rg);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qF(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Rg(){}function zF(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KF=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,Z(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},af=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(n){return n&&n._delegate?n._delegate:n}class $r{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HF{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new mc;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jF(e))try{this.getOrInitializeService({instanceIdentifier:Js})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Js){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Js){return this.instances.has(e)}getOptions(e=Js){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GF(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Js){return this.component?this.component.multipleInstances?e:Js:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GF(n){return n===Js?void 0:n}function jF(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QF{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new HF(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ge||(Ge={}));const YF={debug:Ge.DEBUG,verbose:Ge.VERBOSE,info:Ge.INFO,warn:Ge.WARN,error:Ge.ERROR,silent:Ge.SILENT},JF=Ge.INFO,XF={[Ge.DEBUG]:"log",[Ge.VERBOSE]:"log",[Ge.INFO]:"info",[Ge.WARN]:"warn",[Ge.ERROR]:"error"},ZF=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=XF[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zc{constructor(e){this.name=e,this._logLevel=JF,this._logHandler=ZF,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YF[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ge.DEBUG,...e),this._logHandler(this,Ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ge.VERBOSE,...e),this._logHandler(this,Ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ge.INFO,...e),this._logHandler(this,Ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ge.WARN,...e),this._logHandler(this,Ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ge.ERROR,...e),this._logHandler(this,Ge.ERROR,...e)}}const e2=(n,e)=>e.some(t=>n instanceof t);let xE,kE;function t2(){return xE||(xE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function n2(){return kE||(kE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hb=new WeakMap,d_=new WeakMap,db=new WeakMap,Sg=new WeakMap,Bm=new WeakMap;function r2(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(_s(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&hb.set(t,n)}).catch(()=>{}),Bm.set(e,n),e}function i2(n){if(d_.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});d_.set(n,e)}let f_={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return d_.get(n);if(e==="objectStoreNames")return n.objectStoreNames||db.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _s(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function s2(n){f_=n(f_)}function o2(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Cg(this),e,...t);return db.set(r,e.sort?e.sort():[e]),_s(r)}:n2().includes(n)?function(...e){return n.apply(Cg(this),e),_s(hb.get(this))}:function(...e){return _s(n.apply(Cg(this),e))}}function a2(n){return typeof n=="function"?o2(n):(n instanceof IDBTransaction&&i2(n),e2(n,t2())?new Proxy(n,f_):n)}function _s(n){if(n instanceof IDBRequest)return r2(n);if(Sg.has(n))return Sg.get(n);const e=a2(n);return e!==n&&(Sg.set(n,e),Bm.set(e,n)),e}const Cg=n=>Bm.get(n);function fb(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),c=_s(o);return r&&o.addEventListener("upgradeneeded",u=>{r(_s(o.result),u.oldVersion,u.newVersion,_s(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const l2=["get","getKey","getAll","getAllKeys","count"],c2=["put","add","delete","clear"],Pg=new Map;function DE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Pg.get(e))return Pg.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=c2.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||l2.includes(t)))return;const s=async function(o,...c){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&u.done]))[0]};return Pg.set(e,s),s}s2(n=>({...n,get:(e,t,r)=>DE(e,t)||n.get(e,t,r),has:(e,t)=>!!DE(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(h2(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function h2(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const p_="@firebase/app",NE="0.9.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Zc("@firebase/app"),d2="@firebase/app-compat",f2="@firebase/analytics-compat",p2="@firebase/analytics",g2="@firebase/app-check-compat",_2="@firebase/app-check",m2="@firebase/auth",y2="@firebase/auth-compat",v2="@firebase/database",I2="@firebase/database-compat",w2="@firebase/functions",E2="@firebase/functions-compat",T2="@firebase/installations",A2="@firebase/installations-compat",b2="@firebase/messaging",R2="@firebase/messaging-compat",S2="@firebase/performance",C2="@firebase/performance-compat",P2="@firebase/remote-config",x2="@firebase/remote-config-compat",k2="@firebase/storage",D2="@firebase/storage-compat",N2="@firebase/firestore",O2="@firebase/firestore-compat",M2="firebase",V2="10.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="[DEFAULT]",L2={[p_]:"fire-core",[d2]:"fire-core-compat",[p2]:"fire-analytics",[f2]:"fire-analytics-compat",[_2]:"fire-app-check",[g2]:"fire-app-check-compat",[m2]:"fire-auth",[y2]:"fire-auth-compat",[v2]:"fire-rtdb",[I2]:"fire-rtdb-compat",[w2]:"fire-fn",[E2]:"fire-fn-compat",[T2]:"fire-iid",[A2]:"fire-iid-compat",[b2]:"fire-fcm",[R2]:"fire-fcm-compat",[S2]:"fire-perf",[C2]:"fire-perf-compat",[P2]:"fire-rc",[x2]:"fire-rc-compat",[k2]:"fire-gcs",[D2]:"fire-gcs-compat",[N2]:"fire-fst",[O2]:"fire-fst-compat","fire-js":"fire-js",[M2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=new Map,__=new Map;function F2(n,e){try{n.container.addComponent(e)}catch(t){mo.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function li(n){const e=n.name;if(__.has(e))return mo.debug(`There were multiple attempts to register component ${e}.`),!1;__.set(e,n);for(const t of hd.values())F2(t,n);return!0}function lf(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ms=new el("app","Firebase",U2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ms.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=V2;function pb(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:g_,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ms.create("bad-app-name",{appName:String(i)});if(t||(t=ob()),!t)throw ms.create("no-options");const s=hd.get(i);if(s){if(vc(t,s.options)&&vc(r,s.config))return s;throw ms.create("duplicate-app",{appName:i})}const o=new QF(i);for(const u of __.values())o.addComponent(u);const c=new B2(t,r,o);return hd.set(i,c),c}function $m(n=g_){const e=hd.get(n);if(!e&&n===g_&&ob())return pb();if(!e)throw ms.create("no-app",{appName:n});return e}function ir(n,e,t){var r;let i=(r=L2[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mo.warn(c.join(" "));return}li(new $r(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2="firebase-heartbeat-database",W2=1,Ic="firebase-heartbeat-store";let xg=null;function gb(){return xg||(xg=fb($2,W2,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ic)}}}).catch(n=>{throw ms.create("idb-open",{originalErrorMessage:n.message})})),xg}async function q2(n){try{return await(await gb()).transaction(Ic).objectStore(Ic).get(_b(n))}catch(e){if(e instanceof fi)mo.warn(e.message);else{const t=ms.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mo.warn(t.message)}}}async function OE(n,e){try{const r=(await gb()).transaction(Ic,"readwrite");await r.objectStore(Ic).put(e,_b(n)),await r.done}catch(t){if(t instanceof fi)mo.warn(t.message);else{const r=ms.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});mo.warn(r.message)}}}function _b(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=1024,K2=30*24*60*60*1e3;class H2{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new j2(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ME();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=K2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ME(),{heartbeatsToSend:t,unsentEntries:r}=G2(this._heartbeatsCache.heartbeats),i=ld(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ME(){return new Date().toISOString().substring(0,10)}function G2(n,e=z2){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),VE(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),VE(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class j2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Um()?OF().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await q2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return OE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return OE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function VE(n){return ld(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(n){li(new $r("platform-logger",e=>new u2(e),"PRIVATE")),li(new $r("heartbeat",e=>new H2(e),"PRIVATE")),ir(p_,NE,n),ir(p_,NE,"esm2017"),ir("fire-js","")}Q2("");var Y2="firebase",J2="10.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir(Y2,J2,"app");function Wm(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function mb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const X2=mb,yb=new el("auth","Firebase",mb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=new Zc("@firebase/auth");function Z2(n,...e){dd.logLevel<=Ge.WARN&&dd.warn(`Auth (${ks}): ${n}`,...e)}function zh(n,...e){dd.logLevel<=Ge.ERROR&&dd.error(`Auth (${ks}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(n,...e){throw qm(n,...e)}function ii(n,...e){return qm(n,...e)}function vb(n,e,t){const r=Object.assign(Object.assign({},X2()),{[e]:t});return new el("auth","Firebase",r).create(e,{appName:n.name})}function eU(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ci(n,"argument-error"),vb(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qm(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return yb.create(n,...e)}function Pe(n,e,...t){if(!n)throw qm(e,...t)}function xi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw zh(e),new Error(e)}function Ui(n,e){n||xi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function tU(){return LE()==="http:"||LE()==="https:"}function LE(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nU(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tU()||kF()||"connection"in navigator)?navigator.onLine:!0}function rU(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ui(t>e,"Short delay should be less than long delay!"),this.isMobile=Fm()||lb()}get(){return nU()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(n,e){Ui(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;xi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;xi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;xi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iU={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sU=new eu(3e4,6e4);function wb(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function tu(n,e,t,r,i={}){return Eb(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=tl(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),Ib.fetch()(Tb(n,n.config.apiHost,t,c),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function Eb(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},iU),e);try{const i=new aU(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw mh(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw mh(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw mh(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw mh(n,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw vb(n,f,h);ci(n,f)}}catch(i){if(i instanceof fi)throw i;ci(n,"network-request-failed",{message:String(i)})}}async function oU(n,e,t,r,i={}){const s=await tu(n,e,t,r,i);return"mfaPendingCredential"in s&&ci(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Tb(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?zm(n.config,i):`${n.config.apiScheme}://${i}`}class aU{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ii(this.auth,"network-request-failed")),sU.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mh(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ii(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lU(n,e){return tu(n,"POST","/v1/accounts:delete",e)}async function cU(n,e){return tu(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uU(n,e=!1){const t=pn(n),r=await t.getIdToken(e),i=cf(r);Pe(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:tc(kg(i.auth_time)),issuedAtTime:tc(kg(i.iat)),expirationTime:tc(kg(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function kg(n){return Number(n)*1e3}function cf(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return zh("JWT malformed, contained fewer than 3 sections"),null;try{const i=cd(t);return i?JSON.parse(i):(zh("Failed to decode base64 JWT payload"),null)}catch(i){return zh("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hU(n){const e=cf(n);return Pe(e,"internal-error"),Pe(typeof e.exp<"u","internal-error"),Pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wc(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof fi&&dU(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function dU({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fU{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=tc(this.lastLoginAt),this.creationTime=tc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fd(n){var e;const t=n.auth,r=await n.getIdToken(),i=await wc(n,cU(t,{idToken:r}));Pe(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_U(s.providerUserInfo):[],c=gU(n.providerData,o),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Ab(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function pU(n){const e=pn(n);await fd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gU(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _U(n){return n.map(e=>{var{providerId:t}=e,r=Wm(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mU(n,e){const t=await Eb(n,{},async()=>{const r=tl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Tb(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ib.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Pe(e.idToken,"internal-error"),Pe(typeof e.idToken<"u","internal-error"),Pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hU(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Pe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await mU(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Ec;return r&&(Pe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Pe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Pe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ec,this.toJSON())}_performRefresh(){return xi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n,e){Pe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ho{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Wm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fU(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ab(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await wc(this,this.stsTokenManager.getToken(this.auth,e));return Pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uU(this,e)}reload(){return pU(this)}_assign(e){this!==e&&(Pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ho(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await fd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wc(this,lU(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,c,u,h,f;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,I=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=t.photoURL)!==null&&o!==void 0?o:void 0,P=(c=t.tenantId)!==null&&c!==void 0?c:void 0,x=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,V=(h=t.createdAt)!==null&&h!==void 0?h:void 0,W=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:K,emailVerified:N,isAnonymous:j,providerData:se,stsTokenManager:ue}=t;Pe(K&&ue,e,"internal-error");const he=Ec.fromJSON(this.name,ue);Pe(typeof K=="string",e,"internal-error"),rs(p,e.name),rs(_,e.name),Pe(typeof N=="boolean",e,"internal-error"),Pe(typeof j=="boolean",e,"internal-error"),rs(I,e.name),rs(A,e.name),rs(P,e.name),rs(x,e.name),rs(V,e.name),rs(W,e.name);const Te=new ho({uid:K,auth:e,email:_,emailVerified:N,displayName:p,isAnonymous:j,photoURL:A,phoneNumber:I,tenantId:P,stsTokenManager:he,createdAt:V,lastLoginAt:W});return se&&Array.isArray(se)&&(Te.providerData=se.map(Re=>Object.assign({},Re))),x&&(Te._redirectEventId=x),Te}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ec;i.updateFromServerResponse(t);const s=new ho({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fd(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=new Map;function ki(n){Ui(n instanceof Function,"Expected a class definition");let e=FE.get(n);return e?(Ui(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,FE.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}bb.type="NONE";const UE=bb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(n,e,t){return`firebase:${n}:${e}:${t}`}class ma{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Kh(this.userKey,i.apiKey,s),this.fullPersistenceKey=Kh("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ho._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ma(ki(UE),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||ki(UE);const o=Kh(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){const p=ho._fromJSON(e,f);h!==s&&(c=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ma(s,e,r):(s=u[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new ma(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xb(e))return"Blackberry";if(kb(e))return"Webos";if(Km(e))return"Safari";if((e.includes("chrome/")||Sb(e))&&!e.includes("edge/"))return"Chrome";if(Pb(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rb(n=Kt()){return/firefox\//i.test(n)}function Km(n=Kt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sb(n=Kt()){return/crios\//i.test(n)}function Cb(n=Kt()){return/iemobile/i.test(n)}function Pb(n=Kt()){return/android/i.test(n)}function xb(n=Kt()){return/blackberry/i.test(n)}function kb(n=Kt()){return/webos/i.test(n)}function uf(n=Kt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function yU(n=Kt()){var e;return uf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vU(){return DF()&&document.documentMode===10}function Db(n=Kt()){return uf(n)||Pb(n)||kb(n)||xb(n)||/windows phone/i.test(n)||Cb(n)}function IU(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(n,e=[]){let t;switch(n){case"Browser":t=BE(Kt());break;case"Worker":t=`${BE(Kt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ks}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wU{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,c)=>{try{const u=e(s);o(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EU(n,e={}){return tu(n,"GET","/v2/passwordPolicy",wb(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TU=6;class AU{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:TU,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bU{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $E(this),this.idTokenSubscription=new $E(this),this.beforeStateQueue=new wU(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ki(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ma.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await fd(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rU()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?pn(e):null;return t&&Pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ki(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EU(this),t=new AU(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new el("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ki(e)||this._popupRedirectResolver;Pe(t,this,"argument-error"),this.redirectPersistenceManager=await ma.create(this,[ki(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Pe(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Z2(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function hf(n){return pn(n)}class $E{constructor(e){this.auth=e,this.observer=null,this.addObserver=$F(t=>this.observer=t)}get next(){return Pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RU(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function SU(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=ii("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",RU().appendChild(r)})}function CU(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PU(n,e){const t=lf(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(vc(s,e??{}))return i;ci(i,"already-initialized")}return t.initialize({options:e})}function xU(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ki);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kU(n,e,t){const r=hf(n);Pe(r._canInitEmulator,r,"emulator-config-failed"),Pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=Ob(e),{host:o,port:c}=DU(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||NU()}function Ob(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function DU(n){const e=Ob(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:WE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:WE(o)}}}function WE(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function NU(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xi("not implemented")}_getIdTokenResponse(e){return xi("not implemented")}_linkToIdToken(e,t){return xi("not implemented")}_getReauthenticationResolver(e){return xi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ya(n,e){return oU(n,"POST","/v1/accounts:signInWithIdp",wb(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OU="http://localhost";class yo extends Mb{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new yo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ci("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Wm(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new yo(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ya(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ya(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ya(e,t)}buildRequest(){const e={requestUri:OU,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu extends Hm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends nu{constructor(){super("facebook.com")}static credential(e){return yo._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return us.credentialFromTaggedObject(e)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return us.credential(e.oauthAccessToken)}catch{return null}}}us.FACEBOOK_SIGN_IN_METHOD="facebook.com";us.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends nu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yo._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Yr.credential(t,r)}catch{return null}}}Yr.GOOGLE_SIGN_IN_METHOD="google.com";Yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends nu{constructor(){super("github.com")}static credential(e){return yo._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hs.credential(e.oauthAccessToken)}catch{return null}}}hs.GITHUB_SIGN_IN_METHOD="github.com";hs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends nu{constructor(){super("twitter.com")}static credential(e,t){return yo._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ds.credential(t,r)}catch{return null}}}ds.TWITTER_SIGN_IN_METHOD="twitter.com";ds.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await ho._fromIdTokenResponse(e,r,i),o=qE(r);return new Da({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=qE(r);return new Da({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function qE(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd extends fi{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new pd(e,t,r,i)}}function Vb(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pd._fromErrorAndOperation(n,s,e,r):s})}async function MU(n,e,t=!1){const r=await wc(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Da._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VU(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await wc(n,Vb(r,i,e,n),t);Pe(s.idToken,r,"internal-error");const o=cf(s.idToken);Pe(o,r,"internal-error");const{sub:c}=o;return Pe(n.uid===c,r,"user-mismatch"),Da._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ci(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LU(n,e,t=!1){const r="signIn",i=await Vb(n,r,e),s=await Da._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FU(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=cf(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const c=o!=="anonymous"&&o!=="custom"?o:null;return new va(s,c)}}if(!r)return null;switch(r){case"facebook.com":return new UU(s,i);case"github.com":return new BU(s,i);case"google.com":return new $U(s,i);case"twitter.com":return new WU(s,i,n.screenName||null);case"custom":case"anonymous":return new va(s,null);default:return new va(s,r,i)}}class va{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class Lb extends va{constructor(e,t,r,i){super(e,t,r),this.username=i}}class UU extends va{constructor(e,t){super(e,"facebook.com",t)}}class BU extends Lb{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class $U extends va{constructor(e,t){super(e,"google.com",t)}}class WU extends Lb{constructor(e,t,r){super(e,"twitter.com",t,r)}}function qU(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:FU(t)}function Fb(n,e,t,r){return pn(n).onIdTokenChanged(e,t,r)}function zU(n,e,t){return pn(n).beforeAuthStateChanged(e,t)}function KU(n){return pn(n).signOut()}const gd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gd,"1"),this.storage.removeItem(gd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HU(){const n=Kt();return Km(n)||uf(n)}const GU=1e3,jU=10;class Bb extends Ub{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=HU()&&IU(),this.fallbackToPolling=Db(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vU()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jU):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},GU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bb.type="LOCAL";const QU=Bb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b extends Ub{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$b.type="SESSION";const Wb=$b;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YU(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new df(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async h=>h(t.origin,s)),u=await YU(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}df.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JU{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{const h=Gm("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(_.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(){return window}function XU(n){si().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(){return typeof si().WorkerGlobalScope<"u"&&typeof si().importScripts=="function"}async function ZU(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eB(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function tB(){return qb()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb="firebaseLocalStorageDb",nB=1,_d="firebaseLocalStorage",Kb="fbase_key";class ru{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ff(n,e){return n.transaction([_d],e?"readwrite":"readonly").objectStore(_d)}function rB(){const n=indexedDB.deleteDatabase(zb);return new ru(n).toPromise()}function y_(){const n=indexedDB.open(zb,nB);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(_d,{keyPath:Kb})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(_d)?e(r):(r.close(),await rB(),e(await y_()))})})}async function zE(n,e,t){const r=ff(n,!0).put({[Kb]:e,value:t});return new ru(r).toPromise()}async function iB(n,e){const t=ff(n,!1).get(e),r=await new ru(t).toPromise();return r===void 0?null:r.value}function KE(n,e){const t=ff(n,!0).delete(e);return new ru(t).toPromise()}const sB=800,oB=3;class Hb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await y_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>oB)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=df._getInstance(tB()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ZU(),!this.activeServiceWorker)return;this.sender=new JU(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eB()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await y_();return await zE(e,gd,"1"),await KE(e,gd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>zE(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>iB(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>KE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ff(i,!1).getAll();return new ru(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sB)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hb.type="LOCAL";const aB=Hb;new eu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(n,e){return e?ki(e):(Pe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm extends Mb{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ya(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ya(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ya(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lB(n){return LU(n.auth,new jm(n),n.bypassAuthState)}function cB(n){const{auth:e,user:t}=n;return Pe(t,e,"internal-error"),VU(t,new jm(n),n.bypassAuthState)}async function uB(n){const{auth:e,user:t}=n;return Pe(t,e,"internal-error"),MU(t,new jm(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lB;case"linkViaPopup":case"linkViaRedirect":return uB;case"reauthViaPopup":case"reauthViaRedirect":return cB;default:ci(this.auth,"internal-error")}}resolve(e){Ui(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ui(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hB=new eu(2e3,1e4);async function dB(n,e,t){const r=hf(n);eU(n,e,Hm);const i=Gb(r,t);return new oo(r,"signInViaPopup",e,i).executeNotNull()}class oo extends jb{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,oo.currentPopupAction&&oo.currentPopupAction.cancel(),oo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Pe(e,this.auth,"internal-error"),e}async onExecution(){Ui(this.filter.length===1,"Popup operations only handle one event");const e=Gm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ii(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ii(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ii(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hB.get())};e()}}oo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fB="pendingRedirect",Hh=new Map;class pB extends jb{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Hh.get(this.auth._key());if(!e){try{const r=await gB(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Hh.set(this.auth._key(),e)}return this.bypassAuthState||Hh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gB(n,e){const t=yB(e),r=mB(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function _B(n,e){Hh.set(n._key(),e)}function mB(n){return ki(n._redirectPersistence)}function yB(n){return Kh(fB,n.config.apiKey,n.name)}async function vB(n,e,t=!1){const r=hf(n),i=Gb(r,e),o=await new pB(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IB=10*60*1e3;class wB{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EB(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Qb(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ii(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IB&&this.cachedEventUids.clear(),this.cachedEventUids.has(HE(e))}saveEventToCache(e){this.cachedEventUids.add(HE(e)),this.lastProcessedEventTime=Date.now()}}function HE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Qb({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EB(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qb(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TB(n,e={}){return tu(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AB=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bB=/^https?/;async function RB(n){if(n.config.emulator)return;const{authorizedDomains:e}=await TB(n);for(const t of e)try{if(SB(t))return}catch{}ci(n,"unauthorized-domain")}function SB(n){const e=m_(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!bB.test(t))return!1;if(AB.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CB=new eu(3e4,6e4);function GE(){const n=si().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function PB(n){return new Promise((e,t)=>{var r,i,s;function o(){GE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{GE(),t(ii(n,"network-request-failed"))},timeout:CB.get()})}if(!((i=(r=si().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=si().gapi)===null||s===void 0)&&s.load)o();else{const c=CU("iframefcb");return si()[c]=()=>{gapi.load?o():t(ii(n,"network-request-failed"))},SU(`https://apis.google.com/js/api.js?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Gh=null,e})}let Gh=null;function xB(n){return Gh=Gh||PB(n),Gh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kB=new eu(5e3,15e3),DB="__/auth/iframe",NB="emulator/auth/iframe",OB={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MB=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VB(n){const e=n.config;Pe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?zm(e,NB):`https://${n.config.authDomain}/${DB}`,r={apiKey:e.apiKey,appName:n.name,v:ks},i=MB.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${tl(r).slice(1)}`}async function LB(n){const e=await xB(n),t=si().gapi;return Pe(t,n,"internal-error"),e.open({where:document.body,url:VB(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OB,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ii(n,"network-request-failed"),c=si().setTimeout(()=>{s(o)},kB.get());function u(){si().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FB={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UB=500,BB=600,$B="_blank",WB="http://localhost";class jE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qB(n,e,t,r=UB,i=BB){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},FB),{width:r.toString(),height:i.toString(),top:s,left:o}),h=Kt().toLowerCase();t&&(c=Sb(h)?$B:t),Rb(h)&&(e=e||WB,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[I,A])=>`${_}${I}=${A},`,"");if(yU(h)&&c!=="_self")return zB(e||"",c),new jE(null);const p=window.open(e||"",c,f);Pe(p,n,"popup-blocked");try{p.focus()}catch{}return new jE(p)}function zB(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KB="__/auth/handler",HB="emulator/auth/handler",GB=encodeURIComponent("fac");async function QE(n,e,t,r,i,s){Pe(n.config.authDomain,n,"auth-domain-config-required"),Pe(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ks,eventId:i};if(e instanceof Hm){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",h_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(s||{}))o[f]=p}if(e instanceof nu){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),h=u?`#${GB}=${encodeURIComponent(u)}`:"";return`${jB(n)}?${tl(c).slice(1)}${h}`}function jB({config:n}){return n.emulator?zm(n,HB):`https://${n.authDomain}/${KB}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="webStorageSupport";class QB{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wb,this._completeRedirectFn=vB,this._overrideRedirectResult=_B}async _openPopup(e,t,r,i){var s;Ui((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await QE(e,t,r,m_(),i);return qB(e,o,Gm())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await QE(e,t,r,m_(),i);return XU(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Ui(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await LB(e),r=new wB(e);return t.register("authEvent",i=>(Pe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Dg,{type:Dg},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Dg];o!==void 0&&t(!!o),ci(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=RB(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Db()||Km()||uf()}}const YB=QB;var YE="@firebase/auth",JE="1.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JB{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XB(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ZB(n){li(new $r("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;Pe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nb(n)},h=new bU(r,i,s,u);return xU(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),li(new $r("auth-internal",e=>{const t=hf(e.getProvider("auth").getImmediate());return(r=>new JB(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(YE,JE,XB(n)),ir(YE,JE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e4=5*60,t4=ab("authIdTokenMaxAge")||e4;let XE=null;const n4=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>t4)return;const i=t==null?void 0:t.token;XE!==i&&(XE=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Yb(n=$m()){const e=lf(n,"auth");if(e.isInitialized())return e.getImmediate();const t=PU(n,{popupRedirectResolver:YB,persistence:[aB,QU,Wb]}),r=ab("authTokenSyncURL");if(r){const s=n4(r);zU(t,s,()=>s(t.currentUser)),Fb(t,o=>s(o))}const i=sb("auth");return i&&kU(t,`http://${i}`),t}ZB("Browser");var r4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ee,Qm=Qm||{},Se=r4||self;function pf(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function iu(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function i4(n){return Object.prototype.hasOwnProperty.call(n,Ng)&&n[Ng]||(n[Ng]=++s4)}var Ng="closure_uid_"+(1e9*Math.random()>>>0),s4=0;function o4(n,e,t){return n.call.apply(n.bind,arguments)}function a4(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function bn(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?bn=o4:bn=a4,bn.apply(null,arguments)}function yh(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function sn(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),c=2;c<arguments.length;c++)o[c-2]=arguments[c];return e.prototype[i].apply(r,o)}}function Ds(){this.s=this.s,this.o=this.o}var l4=0;Ds.prototype.s=!1;Ds.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),l4!=0)&&i4(this)};Ds.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Jb=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Ym(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function ZE(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(pf(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Rn(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Rn.prototype.h=function(){this.defaultPrevented=!0};var c4=function(){if(!Se.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{Se.addEventListener("test",()=>{},e),Se.removeEventListener("test",()=>{},e)}catch{}return n}();function Tc(n){return/^[\s\xa0]*$/.test(n)}function gf(){var n=Se.navigator;return n&&(n=n.userAgent)?n:""}function Jr(n){return gf().indexOf(n)!=-1}function Jm(n){return Jm[" "](n),n}Jm[" "]=function(){};function u4(n,e){var t=n$;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var h4=Jr("Opera"),Na=Jr("Trident")||Jr("MSIE"),Xb=Jr("Edge"),v_=Xb||Na,Zb=Jr("Gecko")&&!(gf().toLowerCase().indexOf("webkit")!=-1&&!Jr("Edge"))&&!(Jr("Trident")||Jr("MSIE"))&&!Jr("Edge"),d4=gf().toLowerCase().indexOf("webkit")!=-1&&!Jr("Edge");function eR(){var n=Se.document;return n?n.documentMode:void 0}var I_;e:{var Og="",Mg=function(){var n=gf();if(Zb)return/rv:([^\);]+)(\)|;)/.exec(n);if(Xb)return/Edge\/([\d\.]+)/.exec(n);if(Na)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(d4)return/WebKit\/(\S+)/.exec(n);if(h4)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Mg&&(Og=Mg?Mg[1]:""),Na){var Vg=eR();if(Vg!=null&&Vg>parseFloat(Og)){I_=String(Vg);break e}}I_=Og}var w_;if(Se.document&&Na){var eT=eR();w_=eT||parseInt(I_,10)||void 0}else w_=void 0;var f4=w_;function Ac(n,e){if(Rn.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Zb){e:{try{Jm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:p4[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Ac.$.h.call(this)}}sn(Ac,Rn);var p4={2:"touch",3:"pen",4:"mouse"};Ac.prototype.h=function(){Ac.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var su="closure_listenable_"+(1e6*Math.random()|0),g4=0;function _4(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++g4,this.fa=this.ia=!1}function _f(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Xm(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function m4(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function tR(n){const e={};for(const t in n)e[t]=n[t];return e}const tT="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nR(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<tT.length;s++)t=tT[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function mf(n){this.src=n,this.g={},this.h=0}mf.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=T_(n,e,r,i);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new _4(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function E_(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=Jb(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(_f(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function T_(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var Zm="closure_lm_"+(1e6*Math.random()|0),Lg={};function rR(n,e,t,r,i){if(r&&r.once)return sR(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)rR(n,e[s],t,r,i);return null}return t=ny(t),n&&n[su]?n.O(e,t,iu(r)?!!r.capture:!!r,i):iR(n,e,t,!1,r,i)}function iR(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var o=iu(i)?!!i.capture:!!i,c=ty(n);if(c||(n[Zm]=c=new mf(n)),t=c.add(e,t,r,o,s),t.proxy)return t;if(r=y4(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)c4||(i=o),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(aR(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function y4(){function n(t){return e.call(n.src,n.listener,t)}const e=v4;return n}function sR(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)sR(n,e[s],t,r,i);return null}return t=ny(t),n&&n[su]?n.P(e,t,iu(r)?!!r.capture:!!r,i):iR(n,e,t,!0,r,i)}function oR(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)oR(n,e[s],t,r,i);else r=iu(r)?!!r.capture:!!r,t=ny(t),n&&n[su]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=T_(s,t,r,i),-1<t&&(_f(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=ty(n))&&(e=n.g[e.toString()],n=-1,e&&(n=T_(e,t,r,i)),(t=-1<n?e[n]:null)&&ey(t))}function ey(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[su])E_(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(aR(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=ty(e))?(E_(t,n),t.h==0&&(t.src=null,e[Zm]=null)):_f(n)}}}function aR(n){return n in Lg?Lg[n]:Lg[n]="on"+n}function v4(n,e){if(n.fa)n=!0;else{e=new Ac(e,this);var t=n.listener,r=n.la||n.src;n.ia&&ey(n),n=t.call(r,e)}return n}function ty(n){return n=n[Zm],n instanceof mf?n:null}var Fg="__closure_events_fn_"+(1e9*Math.random()>>>0);function ny(n){return typeof n=="function"?n:(n[Fg]||(n[Fg]=function(e){return n.handleEvent(e)}),n[Fg])}function tn(){Ds.call(this),this.i=new mf(this),this.S=this,this.J=null}sn(tn,Ds);tn.prototype[su]=!0;tn.prototype.removeEventListener=function(n,e,t,r){oR(this,n,e,t,r)};function fn(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Rn(e,n);else if(e instanceof Rn)e.target=e.target||n;else{var i=e;e=new Rn(r,n),nR(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var o=e.g=t[s];i=vh(o,r,!0,e)&&i}if(o=e.g=n,i=vh(o,r,!0,e)&&i,i=vh(o,r,!1,e)&&i,t)for(s=0;s<t.length;s++)o=e.g=t[s],i=vh(o,r,!1,e)&&i}tn.prototype.N=function(){if(tn.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)_f(t[r]);delete n.g[e],n.h--}}this.J=null};tn.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};tn.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function vh(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==t){var c=o.listener,u=o.la||o.src;o.ia&&E_(n.i,o),i=c.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var ry=Se.JSON.stringify;class I4{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function w4(){var n=iy;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class E4{constructor(){this.h=this.g=null}add(e,t){const r=lR.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var lR=new I4(()=>new T4,n=>n.reset());class T4{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function A4(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function b4(n){Se.setTimeout(()=>{throw n},0)}let bc,Rc=!1,iy=new E4,cR=()=>{const n=Se.Promise.resolve(void 0);bc=()=>{n.then(R4)}};var R4=()=>{for(var n;n=w4();){try{n.h.call(n.g)}catch(t){b4(t)}var e=lR;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Rc=!1};function yf(n,e){tn.call(this),this.h=n||1,this.g=e||Se,this.j=bn(this.qb,this),this.l=Date.now()}sn(yf,tn);ee=yf.prototype;ee.ga=!1;ee.T=null;ee.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),fn(this,"tick"),this.ga&&(sy(this),this.start()))}};ee.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function sy(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}ee.N=function(){yf.$.N.call(this),sy(this),delete this.g};function oy(n,e,t){if(typeof n=="function")t&&(n=bn(n,t));else if(n&&typeof n.handleEvent=="function")n=bn(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Se.setTimeout(n,e||0)}function uR(n){n.g=oy(()=>{n.g=null,n.i&&(n.i=!1,uR(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class S4 extends Ds{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:uR(this)}N(){super.N(),this.g&&(Se.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sc(n){Ds.call(this),this.h=n,this.g={}}sn(Sc,Ds);var nT=[];function hR(n,e,t,r){Array.isArray(t)||(t&&(nT[0]=t.toString()),t=nT);for(var i=0;i<t.length;i++){var s=rR(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function dR(n){Xm(n.g,function(e,t){this.g.hasOwnProperty(t)&&ey(e)},n),n.g={}}Sc.prototype.N=function(){Sc.$.N.call(this),dR(this)};Sc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vf(){this.g=!0}vf.prototype.Ea=function(){this.g=!1};function C4(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",c=s.split("&"),u=0;u<c.length;u++){var h=c[u].split("=");if(1<h.length){var f=h[0];h=h[1];var p=f.split("_");o=2<=p.length&&p[1]=="type"?o+(f+"="+h+"&"):o+(f+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+o})}function P4(n,e,t,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+o})}function da(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+k4(n,t)+(r?" "+r:"")})}function x4(n,e){n.info(function(){return"TIMEOUT: "+e})}vf.prototype.info=function(){};function k4(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ry(t)}catch{return e}}var Do={},rT=null;function If(){return rT=rT||new tn}Do.Ta="serverreachability";function fR(n){Rn.call(this,Do.Ta,n)}sn(fR,Rn);function Cc(n){const e=If();fn(e,new fR(e))}Do.STAT_EVENT="statevent";function pR(n,e){Rn.call(this,Do.STAT_EVENT,n),this.stat=e}sn(pR,Rn);function Dn(n){const e=If();fn(e,new pR(e,n))}Do.Ua="timingevent";function gR(n,e){Rn.call(this,Do.Ua,n),this.size=e}sn(gR,Rn);function ou(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return Se.setTimeout(function(){n()},e)}var wf={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},_R={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ay(){}ay.prototype.h=null;function iT(n){return n.h||(n.h=n.i())}function mR(){}var au={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ly(){Rn.call(this,"d")}sn(ly,Rn);function cy(){Rn.call(this,"c")}sn(cy,Rn);var A_;function Ef(){}sn(Ef,ay);Ef.prototype.g=function(){return new XMLHttpRequest};Ef.prototype.i=function(){return{}};A_=new Ef;function lu(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Sc(this),this.P=D4,n=v_?125:void 0,this.V=new yf(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new yR}function yR(){this.i=null,this.g="",this.h=!1}var D4=45e3,b_={},md={};ee=lu.prototype;ee.setTimeout=function(n){this.P=n};function R_(n,e,t){n.L=1,n.v=Af(Bi(e)),n.s=t,n.S=!0,vR(n,null)}function vR(n,e){n.G=Date.now(),cu(n),n.A=Bi(n.v);var t=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),SR(t.i,"t",r),n.C=0,t=n.l.J,n.h=new yR,n.g=jR(n.l,t?e:null,!n.s),0<n.O&&(n.M=new S4(bn(n.Pa,n,n.g),n.O)),hR(n.U,n.g,"readystatechange",n.nb),e=n.I?tR(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Cc(),C4(n.j,n.u,n.A,n.m,n.W,n.s)}ee.nb=function(n){n=n.target;const e=this.M;e&&Zr(n)==3?e.l():this.Pa(n)};ee.Pa=function(n){try{if(n==this.g)e:{const f=Zr(this.g);var e=this.g.Ia();const p=this.g.da();if(!(3>f)&&(f!=3||v_||this.g&&(this.h.h||this.g.ja()||lT(this.g)))){this.J||f!=4||e==7||(e==8||0>=p?Cc(3):Cc(2)),Tf(this);var t=this.g.da();this.ca=t;t:if(IR(this)){var r=lT(this.g);n="";var i=r.length,s=Zr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ao(this),nc(this);var o="";break t}this.h.i=new Se.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,P4(this.j,this.u,this.A,this.m,this.W,f,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Tc(c)){var h=c;break t}}h=null}if(t=h)da(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,S_(this,t);else{this.i=!1,this.o=3,Dn(12),ao(this),nc(this);break e}}this.S?(wR(this,f,o),v_&&this.i&&f==3&&(hR(this.U,this.V,"tick",this.mb),this.V.start())):(da(this.j,this.m,o,null),S_(this,o)),f==4&&ao(this),this.i&&!this.J&&(f==4?zR(this.l,this):(this.i=!1,cu(this)))}else Z4(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Dn(12)):(this.o=0,Dn(13)),ao(this),nc(this)}}}catch{}finally{}};function IR(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function wR(n,e,t){let r=!0,i;for(;!n.J&&n.C<t.length;)if(i=N4(n,t),i==md){e==4&&(n.o=4,Dn(14),r=!1),da(n.j,n.m,null,"[Incomplete Response]");break}else if(i==b_){n.o=4,Dn(15),da(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else da(n.j,n.m,i,null),S_(n,i);IR(n)&&i!=md&&i!=b_&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Dn(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),gy(e),e.M=!0,Dn(11))):(da(n.j,n.m,t,"[Invalid Chunked Response]"),ao(n),nc(n))}ee.mb=function(){if(this.g){var n=Zr(this.g),e=this.g.ja();this.C<e.length&&(Tf(this),wR(this,n,e),this.i&&n!=4&&cu(this))}};function N4(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?md:(t=Number(e.substring(t,r)),isNaN(t)?b_:(r+=1,r+t>e.length?md:(e=e.slice(r,r+t),n.C=r+t,e)))}ee.cancel=function(){this.J=!0,ao(this)};function cu(n){n.Y=Date.now()+n.P,ER(n,n.P)}function ER(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=ou(bn(n.lb,n),e)}function Tf(n){n.B&&(Se.clearTimeout(n.B),n.B=null)}ee.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(x4(this.j,this.A),this.L!=2&&(Cc(),Dn(17)),ao(this),this.o=2,nc(this)):ER(this,this.Y-n)};function nc(n){n.l.H==0||n.J||zR(n.l,n)}function ao(n){Tf(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,sy(n.V),dR(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function S_(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||C_(t.i,n))){if(!n.K&&C_(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Id(t),Sf(t);else break e;py(t),Dn(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=ou(bn(t.ib,t),6e3));if(1>=xR(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else lo(t,11)}else if((n.K||t.g==n)&&Id(t),!Tc(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let h=i[e];if(t.V=h[0],h=h[1],t.H==2)if(h[0]=="c"){t.K=h[1],t.pa=h[2];const f=h[3];f!=null&&(t.ra=f,t.l.info("VER="+t.ra));const p=h[4];p!=null&&(t.Ga=p,t.l.info("SVER="+t.Ga));const _=h[5];_!=null&&typeof _=="number"&&0<_&&(r=1.5*_,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const I=n.g;if(I){const A=I.g?I.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var s=r.i;s.g||A.indexOf("spdy")==-1&&A.indexOf("quic")==-1&&A.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(uy(s,s.h),s.h=null))}if(r.F){const P=I.g?I.g.getResponseHeader("X-HTTP-Session-Id"):null;P&&(r.Da=P,_t(r.I,r.F,P))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var o=n;if(r.wa=GR(r,r.J?r.pa:null,r.Y),o.K){kR(r.i,o);var c=o,u=r.L;u&&c.setTimeout(u),c.B&&(Tf(c),cu(c)),r.g=o}else WR(r);0<t.j.length&&Cf(t)}else h[0]!="stop"&&h[0]!="close"||lo(t,7);else t.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?lo(t,7):fy(t):h[0]!="noop"&&t.h&&t.h.Aa(h),t.A=0)}}Cc(4)}catch{}}function O4(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(pf(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function M4(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(pf(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function TR(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(pf(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=M4(n),r=O4(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var AR=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function V4(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function fo(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof fo){this.h=n.h,yd(this,n.j),this.s=n.s,this.g=n.g,vd(this,n.m),this.l=n.l;var e=n.i,t=new Pc;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),sT(this,t),this.o=n.o}else n&&(e=String(n).match(AR))?(this.h=!1,yd(this,e[1]||"",!0),this.s=Hl(e[2]||""),this.g=Hl(e[3]||"",!0),vd(this,e[4]),this.l=Hl(e[5]||"",!0),sT(this,e[6]||"",!0),this.o=Hl(e[7]||"")):(this.h=!1,this.i=new Pc(null,this.h))}fo.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Gl(e,oT,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Gl(e,oT,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Gl(t,t.charAt(0)=="/"?U4:F4,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Gl(t,$4)),n.join("")};function Bi(n){return new fo(n)}function yd(n,e,t){n.j=t?Hl(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function vd(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function sT(n,e,t){e instanceof Pc?(n.i=e,W4(n.i,n.h)):(t||(e=Gl(e,B4)),n.i=new Pc(e,n.h))}function _t(n,e,t){n.i.set(e,t)}function Af(n){return _t(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Hl(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Gl(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,L4),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function L4(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var oT=/[#\/\?@]/g,F4=/[#\?:]/g,U4=/[#\?]/g,B4=/[#\?@]/g,$4=/#/g;function Pc(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Ns(n){n.g||(n.g=new Map,n.h=0,n.i&&V4(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}ee=Pc.prototype;ee.add=function(n,e){Ns(this),this.i=null,n=nl(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function bR(n,e){Ns(n),e=nl(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function RR(n,e){return Ns(n),e=nl(n,e),n.g.has(e)}ee.forEach=function(n,e){Ns(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};ee.ta=function(){Ns(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};ee.Z=function(n){Ns(this);let e=[];if(typeof n=="string")RR(this,n)&&(e=e.concat(this.g.get(nl(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};ee.set=function(n,e){return Ns(this),this.i=null,n=nl(this,n),RR(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};ee.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function SR(n,e,t){bR(n,e),0<t.length&&(n.i=null,n.g.set(nl(n,e),Ym(t)),n.h+=t.length)}ee.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function nl(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function W4(n,e){e&&!n.j&&(Ns(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(bR(this,r),SR(this,i,t))},n)),n.j=e}var q4=class{constructor(n,e){this.g=n,this.map=e}};function CR(n){this.l=n||z4,Se.PerformanceNavigationTiming?(n=Se.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(Se.g&&Se.g.Ka&&Se.g.Ka()&&Se.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var z4=10;function PR(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function xR(n){return n.h?1:n.g?n.g.size:0}function C_(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function uy(n,e){n.g?n.g.add(e):n.h=e}function kR(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}CR.prototype.cancel=function(){if(this.i=DR(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function DR(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Ym(n.i)}var K4=class{stringify(n){return Se.JSON.stringify(n,void 0)}parse(n){return Se.JSON.parse(n,void 0)}};function H4(){this.g=new K4}function G4(n,e,t){const r=t||"";try{TR(n,function(i,s){let o=i;iu(i)&&(o=ry(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function j4(n,e){const t=new vf;if(Se.Image){const r=new Image;r.onload=yh(Ih,t,r,"TestLoadImage: loaded",!0,e),r.onerror=yh(Ih,t,r,"TestLoadImage: error",!1,e),r.onabort=yh(Ih,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=yh(Ih,t,r,"TestLoadImage: timeout",!1,e),Se.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Ih(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function uu(n){this.l=n.fc||null,this.j=n.ob||!1}sn(uu,ay);uu.prototype.g=function(){return new bf(this.l,this.j)};uu.prototype.i=function(n){return function(){return n}}({});function bf(n,e){tn.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=hy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}sn(bf,tn);var hy=0;ee=bf.prototype;ee.open=function(n,e){if(this.readyState!=hy)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,xc(this)};ee.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||Se).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};ee.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hu(this)),this.readyState=hy};ee.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,xc(this)),this.g&&(this.readyState=3,xc(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Se.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;NR(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function NR(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}ee.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?hu(this):xc(this),this.readyState==3&&NR(this)}};ee.Za=function(n){this.g&&(this.response=this.responseText=n,hu(this))};ee.Ya=function(n){this.g&&(this.response=n,hu(this))};ee.ka=function(){this.g&&hu(this)};function hu(n){n.readyState=4,n.l=null,n.j=null,n.A=null,xc(n)}ee.setRequestHeader=function(n,e){this.v.append(n,e)};ee.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};ee.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function xc(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(bf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Q4=Se.JSON.parse;function Dt(n){tn.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=OR,this.L=this.M=!1}sn(Dt,tn);var OR="",Y4=/^https?$/i,J4=["POST","PUT"];ee=Dt.prototype;ee.Oa=function(n){this.M=n};ee.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():A_.g(),this.C=this.u?iT(this.u):iT(A_),this.g.onreadystatechange=bn(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){aT(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=Se.FormData&&n instanceof Se.FormData,!(0<=Jb(J4,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of t)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{LR(this),0<this.B&&((this.L=X4(this.g))?(this.g.timeout=this.B,this.g.ontimeout=bn(this.ua,this)):this.A=oy(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){aT(this,s)}};function X4(n){return Na&&typeof n.timeout=="number"&&n.ontimeout!==void 0}ee.ua=function(){typeof Qm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,fn(this,"timeout"),this.abort(8))};function aT(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,MR(n),Rf(n)}function MR(n){n.F||(n.F=!0,fn(n,"complete"),fn(n,"error"))}ee.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,fn(this,"complete"),fn(this,"abort"),Rf(this))};ee.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rf(this,!0)),Dt.$.N.call(this)};ee.La=function(){this.s||(this.G||this.v||this.l?VR(this):this.kb())};ee.kb=function(){VR(this)};function VR(n){if(n.h&&typeof Qm<"u"&&(!n.C[1]||Zr(n)!=4||n.da()!=2)){if(n.v&&Zr(n)==4)oy(n.La,0,n);else if(fn(n,"readystatechange"),Zr(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=o===0){var i=String(n.I).match(AR)[1]||null;!i&&Se.self&&Se.self.location&&(i=Se.self.location.protocol.slice(0,-1)),r=!Y4.test(i?i.toLowerCase():"")}t=r}if(t)fn(n,"complete"),fn(n,"success");else{n.m=6;try{var s=2<Zr(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",MR(n)}}finally{Rf(n)}}}}function Rf(n,e){if(n.g){LR(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||fn(n,"ready");try{t.onreadystatechange=r}catch{}}}function LR(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(Se.clearTimeout(n.A),n.A=null)}ee.isActive=function(){return!!this.g};function Zr(n){return n.g?n.g.readyState:0}ee.da=function(){try{return 2<Zr(this)?this.g.status:-1}catch{return-1}};ee.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};ee.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Q4(e)}};function lT(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case OR:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Z4(n){const e={};n=(n.g&&2<=Zr(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Tc(n[r]))continue;var t=A4(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}m4(e,function(r){return r.join(", ")})}ee.Ia=function(){return this.m};ee.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function FR(n){let e="";return Xm(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function dy(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=FR(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):_t(n,e,t))}function Dl(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function UR(n){this.Ga=0,this.j=[],this.l=new vf,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Dl("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Dl("baseRetryDelayMs",5e3,n),this.hb=Dl("retryDelaySeedMs",1e4,n),this.eb=Dl("forwardChannelMaxRetries",2,n),this.xa=Dl("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new CR(n&&n.concurrentRequestLimit),this.Ja=new H4,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}ee=UR.prototype;ee.ra=8;ee.H=1;function fy(n){if(BR(n),n.H==3){var e=n.W++,t=Bi(n.I);if(_t(t,"SID",n.K),_t(t,"RID",e),_t(t,"TYPE","terminate"),du(n,t),e=new lu(n,n.l,e),e.L=2,e.v=Af(Bi(t)),t=!1,Se.navigator&&Se.navigator.sendBeacon)try{t=Se.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&Se.Image&&(new Image().src=e.v,t=!0),t||(e.g=jR(e.l,null),e.g.ha(e.v)),e.G=Date.now(),cu(e)}HR(n)}function Sf(n){n.g&&(gy(n),n.g.cancel(),n.g=null)}function BR(n){Sf(n),n.u&&(Se.clearTimeout(n.u),n.u=null),Id(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&Se.clearTimeout(n.m),n.m=null)}function Cf(n){if(!PR(n.i)&&!n.m){n.m=!0;var e=n.Na;bc||cR(),Rc||(bc(),Rc=!0),iy.add(e,n),n.C=0}}function e$(n,e){return xR(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=ou(bn(n.Na,n,e),KR(n,n.C)),n.C++,!0)}ee.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new lu(this,this.l,n);let s=this.s;if(this.U&&(s?(s=tR(s),nR(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=$R(this,i,e),t=Bi(this.I),_t(t,"RID",n),_t(t,"CVER",22),this.F&&_t(t,"X-HTTP-Session-Id",this.F),du(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(FR(s)))+"&"+e:this.o&&dy(t,this.o,s)),uy(this.i,i),this.bb&&_t(t,"TYPE","init"),this.P?(_t(t,"$req",e),_t(t,"SID","null"),i.aa=!0,R_(i,t,null)):R_(i,t,e),this.H=2}}else this.H==3&&(n?cT(this,n):this.j.length==0||PR(this.i)||cT(this))};function cT(n,e){var t;e?t=e.m:t=n.W++;const r=Bi(n.I);_t(r,"SID",n.K),_t(r,"RID",t),_t(r,"AID",n.V),du(n,r),n.o&&n.s&&dy(r,n.o,n.s),t=new lu(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=$R(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),uy(n.i,t),R_(t,r,e)}function du(n,e){n.na&&Xm(n.na,function(t,r){_t(e,r,t)}),n.h&&TR({},function(t,r){_t(e,r,t)})}function $R(n,e,t){t=Math.min(n.j.length,t);var r=n.h?bn(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const o=["count="+t];s==-1?0<t?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let c=!0;for(let u=0;u<t;u++){let h=i[u].g;const f=i[u].map;if(h-=s,0>h)s=Math.max(0,i[u].g-100),c=!1;else try{G4(f,o,"req"+h+"_")}catch{r&&r(f)}}if(c){r=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function WR(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;bc||cR(),Rc||(bc(),Rc=!0),iy.add(e,n),n.A=0}}function py(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=ou(bn(n.Ma,n),KR(n,n.A)),n.A++,!0)}ee.Ma=function(){if(this.u=null,qR(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=ou(bn(this.jb,this),n)}};ee.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Dn(10),Sf(this),qR(this))};function gy(n){n.B!=null&&(Se.clearTimeout(n.B),n.B=null)}function qR(n){n.g=new lu(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Bi(n.wa);_t(e,"RID","rpc"),_t(e,"SID",n.K),_t(e,"AID",n.V),_t(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&_t(e,"TO",n.qa),_t(e,"TYPE","xmlhttp"),du(n,e),n.o&&n.s&&dy(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=Af(Bi(e)),t.s=null,t.S=!0,vR(t,n)}ee.ib=function(){this.v!=null&&(this.v=null,Sf(this),py(this),Dn(19))};function Id(n){n.v!=null&&(Se.clearTimeout(n.v),n.v=null)}function zR(n,e){var t=null;if(n.g==e){Id(n),gy(n),n.g=null;var r=2}else if(C_(n.i,e))t=e.F,kR(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var i=n.C;r=If(),fn(r,new gR(r,t)),Cf(n)}else WR(n);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&e$(n,e)||r==2&&py(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:lo(n,5);break;case 4:lo(n,10);break;case 3:lo(n,6);break;default:lo(n,2)}}}function KR(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function lo(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=bn(n.pb,n);t||(t=new fo("//www.google.com/images/cleardot.gif"),Se.location&&Se.location.protocol=="http"||yd(t,"https"),Af(t)),j4(t.toString(),r)}else Dn(2);n.H=0,n.h&&n.h.za(e),HR(n),BR(n)}ee.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Dn(2)):(this.l.info("Failed to ping google.com"),Dn(1))};function HR(n){if(n.H=0,n.ma=[],n.h){const e=DR(n.i);(e.length!=0||n.j.length!=0)&&(ZE(n.ma,e),ZE(n.ma,n.j),n.i.i.length=0,Ym(n.j),n.j.length=0),n.h.ya()}}function GR(n,e,t){var r=t instanceof fo?Bi(t):new fo(t);if(r.g!="")e&&(r.g=e+"."+r.g),vd(r,r.m);else{var i=Se.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new fo(null);r&&yd(s,r),e&&(s.g=e),i&&vd(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&_t(r,t,e),_t(r,"VER",n.ra),du(n,r),r}function jR(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new Dt(new uu({ob:!0})):new Dt(n.va),e.Oa(n.J),e}ee.isActive=function(){return!!this.h&&this.h.isActive(this)};function QR(){}ee=QR.prototype;ee.Ba=function(){};ee.Aa=function(){};ee.za=function(){};ee.ya=function(){};ee.isActive=function(){return!0};ee.Va=function(){};function wd(){if(Na&&!(10<=Number(f4)))throw Error("Environmental error: no available transport.")}wd.prototype.g=function(n,e){return new or(n,e)};function or(n,e){tn.call(this),this.g=new UR(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Tc(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Tc(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new rl(this)}sn(or,tn);or.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Dn(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=GR(n,null,n.Y),Cf(n)};or.prototype.close=function(){fy(this.g)};or.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=ry(n),n=t);e.j.push(new q4(e.fb++,n)),e.H==3&&Cf(e)};or.prototype.N=function(){this.g.h=null,delete this.j,fy(this.g),delete this.g,or.$.N.call(this)};function YR(n){ly.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}sn(YR,ly);function JR(){cy.call(this),this.status=1}sn(JR,cy);function rl(n){this.g=n}sn(rl,QR);rl.prototype.Ba=function(){fn(this.g,"a")};rl.prototype.Aa=function(n){fn(this.g,new YR(n))};rl.prototype.za=function(n){fn(this.g,new JR)};rl.prototype.ya=function(){fn(this.g,"b")};function t$(){this.blockSize=-1}function Wr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}sn(Wr,t$);Wr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ug(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],o=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(o<<20&4294967295|o>>>12),o=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(o<<23&4294967295|o>>>9),o=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(o<<21&4294967295|o>>>11),o=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Wr.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)Ug(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Ug(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){Ug(this,r),i=0;break}}this.h=i,this.i+=e};Wr.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function at(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var n$={};function _y(n){return-128<=n&&128>n?u4(n,function(e){return new at([e|0],0>e?-1:0)}):new at([n|0],0>n?-1:0)}function ei(n){if(isNaN(n)||!isFinite(n))return Ia;if(0>n)return hn(ei(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=P_;return new at(e,0)}function XR(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return hn(XR(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=ei(Math.pow(e,8)),r=Ia,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),e);8>s?(s=ei(Math.pow(e,s)),r=r.R(s).add(ei(o))):(r=r.R(t),r=r.add(ei(o)))}return r}var P_=4294967296,Ia=_y(0),x_=_y(1),uT=_y(16777216);ee=at.prototype;ee.ea=function(){if(mr(this))return-hn(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:P_+r)*e,e*=P_}return n};ee.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Di(this))return"0";if(mr(this))return"-"+hn(this).toString(n);for(var e=ei(Math.pow(n,6)),t=this,r="";;){var i=Td(t,e).g;t=Ed(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,Di(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};ee.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Di(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function mr(n){return n.h==-1}ee.X=function(n){return n=Ed(this,n),mr(n)?-1:Di(n)?0:1};function hn(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new at(t,~n.h).add(x_)}ee.abs=function(){return mr(this)?hn(this):this};ee.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,t[i]=o<<16|s}return new at(t,t[t.length-1]&-2147483648?-1:0)};function Ed(n,e){return n.add(hn(e))}ee.R=function(n){if(Di(this)||Di(n))return Ia;if(mr(this))return mr(n)?hn(this).R(hn(n)):hn(hn(this).R(n));if(mr(n))return hn(this.R(hn(n)));if(0>this.X(uT)&&0>n.X(uT))return ei(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,c=n.D(i)>>>16,u=n.D(i)&65535;t[2*r+2*i]+=o*u,wh(t,2*r+2*i),t[2*r+2*i+1]+=s*u,wh(t,2*r+2*i+1),t[2*r+2*i+1]+=o*c,wh(t,2*r+2*i+1),t[2*r+2*i+2]+=s*c,wh(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new at(t,0)};function wh(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function Nl(n,e){this.g=n,this.h=e}function Td(n,e){if(Di(e))throw Error("division by zero");if(Di(n))return new Nl(Ia,Ia);if(mr(n))return e=Td(hn(n),e),new Nl(hn(e.g),hn(e.h));if(mr(e))return e=Td(n,hn(e)),new Nl(hn(e.g),e.h);if(30<n.g.length){if(mr(n)||mr(e))throw Error("slowDivide_ only works with positive integers.");for(var t=x_,r=e;0>=r.X(n);)t=hT(t),r=hT(r);var i=na(t,1),s=na(r,1);for(r=na(r,2),t=na(t,2);!Di(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(t),s=o),r=na(r,1),t=na(t,1)}return e=Ed(n,i.R(e)),new Nl(i,e)}for(i=Ia;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=ei(t),o=s.R(e);mr(o)||0<o.X(n);)t-=r,s=ei(t),o=s.R(e);Di(s)&&(s=x_),i=i.add(s),n=Ed(n,o)}return new Nl(i,n)}ee.gb=function(n){return Td(this,n).h};ee.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new at(t,this.h&n.h)};ee.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new at(t,this.h|n.h)};ee.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new at(t,this.h^n.h)};function hT(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new at(t,n.h)}function na(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new at(i,n.h)}wd.prototype.createWebChannel=wd.prototype.g;or.prototype.send=or.prototype.u;or.prototype.open=or.prototype.m;or.prototype.close=or.prototype.close;wf.NO_ERROR=0;wf.TIMEOUT=8;wf.HTTP_ERROR=6;_R.COMPLETE="complete";mR.EventType=au;au.OPEN="a";au.CLOSE="b";au.ERROR="c";au.MESSAGE="d";tn.prototype.listen=tn.prototype.O;Dt.prototype.listenOnce=Dt.prototype.P;Dt.prototype.getLastError=Dt.prototype.Sa;Dt.prototype.getLastErrorCode=Dt.prototype.Ia;Dt.prototype.getStatus=Dt.prototype.da;Dt.prototype.getResponseJson=Dt.prototype.Wa;Dt.prototype.getResponseText=Dt.prototype.ja;Dt.prototype.send=Dt.prototype.ha;Dt.prototype.setWithCredentials=Dt.prototype.Oa;Wr.prototype.digest=Wr.prototype.l;Wr.prototype.reset=Wr.prototype.reset;Wr.prototype.update=Wr.prototype.j;at.prototype.add=at.prototype.add;at.prototype.multiply=at.prototype.R;at.prototype.modulo=at.prototype.gb;at.prototype.compare=at.prototype.X;at.prototype.toNumber=at.prototype.ea;at.prototype.toString=at.prototype.toString;at.prototype.getBits=at.prototype.D;at.fromNumber=ei;at.fromString=XR;var r$=function(){return new wd},i$=function(){return If()},Bg=wf,s$=_R,o$=Do,dT={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},a$=uu,Eh=mR,l$=Dt,c$=Wr,wa=at;const fT="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Yt.UNAUTHENTICATED=new Yt(null),Yt.GOOGLE_CREDENTIALS=new Yt("google-credentials-uid"),Yt.FIRST_PARTY=new Yt("first-party-uid"),Yt.MOCK_USER=new Yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il="10.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new Zc("@firebase/firestore");function k_(){return vo.logLevel}function G(n,...e){if(vo.logLevel<=Ge.DEBUG){const t=e.map(my);vo.debug(`Firestore (${il}): ${n}`,...t)}}function Lt(n,...e){if(vo.logLevel<=Ge.ERROR){const t=e.map(my);vo.error(`Firestore (${il}): ${n}`,...t)}}function Oa(n,...e){if(vo.logLevel<=Ge.WARN){const t=e.map(my);vo.warn(`Firestore (${il}): ${n}`,...t)}}function my(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n="Unexpected state"){const e=`FIRESTORE (${il}) INTERNAL ASSERTION FAILED: `+n;throw Lt(e),new Error(e)}function ye(n,e){n||ce()}function fe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends fi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class u${getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Yt.UNAUTHENTICATED))}shutdown(){}}class h${constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class d${constructor(e){this.t=e,this.currentUser=Yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new Li;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Li,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Li)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string"),new ZR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string"),new Yt(e)}}class f${constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class p${constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new f$(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class g${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _${constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ye(typeof t.token=="string"),this.R=t.token,new g$(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m$(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=m$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function ke(n,e){return n<e?-1:n>e?1:0}function Ma(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function tS(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ie(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ie(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ie(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return bt.fromMillis(Date.now())}static fromDate(e){return bt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new bt(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.timestamp=e}static fromTimestamp(e){return new me(e)}static min(){return new me(new bt(0,0))}static max(){return new me(new bt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t,r){t===void 0?t=0:t>e.length&&ce(),r===void 0?r=e.length-t:r>e.length-t&&ce(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return kc.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof kc?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ot extends kc{construct(e,t,r){return new ot(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ot(t)}static emptyPath(){return new ot([])}}const y$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $t extends kc{construct(e,t,r){return new $t(e,t,r)}static isValidIdentifier(e){return y$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $t(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ie(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new ie(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ie(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new ie(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $t(t)}static emptyPath(){return new $t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(ot.fromString(e))}static fromName(e){return new ne(ot.fromString(e).popFirst(5))}static empty(){return new ne(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ot.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ot.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new ot(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function D_(n){return n.fields.find(e=>e.kind===2)}function Xs(n){return n.fields.filter(e=>e.kind!==2)}nS.UNKNOWN_ID=-1;class v${constructor(e,t){this.fieldPath=e,this.kind=t}}class Ad{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ad(0,ar.min())}}function rS(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=me.fromTimestamp(r===1e9?new bt(t+1,0):new bt(t,r));return new ar(i,ne.empty(),e)}function iS(n){return new ar(n.readTime,n.key,-1)}class ar{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ar(me.min(),ne.empty(),-1)}static max(){return new ar(me.max(),ne.empty(),-1)}}function yy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ne.comparator(n.documentKey,e.documentKey),t!==0?t:ke(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==sS)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):k.reject(t)}static resolve(e){return new k((t,r)=>{t(e)})}static reject(e){return new k((t,r)=>{r(e)})}static waitFor(e){return new k((t,r)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next(i=>i?k.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new k((r,i)=>{const s=e.length,o=new Array(s);let c=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next(f=>{o[h]=f,++c,c===s&&r(o)},f=>i(f))}})}static doWhile(e,t){return new k((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new Li,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new rc(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const i=vy(r.target.error);this.m.reject(new rc(e,i))}}static open(e,t,r,i){try{return new Pf(t,e.transaction(i,r))}catch(s){throw new rc(t,s)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(G("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new w$(t)}}class Ni{constructor(e,t,r){this.name=e,this.version=t,this.S=r,Ni.D(Kt())===12.2&&Lt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return G("SimpleDb","Removing database:",e),eo(window.indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Um())return!1;if(Ni.C())return!0;const e=Kt(),t=Ni.D(e),r=0<t&&t<10,i=Ni.F(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(G("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new rc(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new ie(B.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new ie(B.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new rc(e,o))},i.onupgradeneeded=s=>{G("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.B(o,i.transaction,s.oldVersion,this.version).next(()=>{G("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const c=Pf.open(this.db,e,s?"readonly":"readwrite",r),u=i(c).next(h=>(c.p(),h)).catch(h=>(c.abort(h),k.reject(h))).toPromise();return u.catch(()=>{}),await c.g,u}catch(c){const u=c,h=u.name!=="FirebaseError"&&o<3;if(G("SimpleDb","Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class I${constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return eo(this.q.delete())}}class rc extends ie{constructor(e,t){super(B.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ms(n){return n.name==="IndexedDbTransactionError"}class w${constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(G("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(G("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),eo(r)}add(e){return G("SimpleDb","ADD",this.store.name,e,e),eo(this.store.add(e))}get(e){return eo(this.store.get(e)).next(t=>(t===void 0&&(t=null),G("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return G("SimpleDb","DELETE",this.store.name,e),eo(this.store.delete(e))}count(){return G("SimpleDb","COUNT",this.store.name),eo(this.store.count())}G(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.j(i,(o,c)=>{s.push(c)}).next(()=>s)}{const i=this.store.getAll(r.range);return new k((s,o)=>{i.onerror=c=>{o(c.target.error)},i.onsuccess=c=>{s(c.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new k((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,t){G("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const i=this.cursor(r);return this.j(i,(s,o,c)=>c.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.j(i,t)}X(e){const t=this.cursor({});return new k((r,i)=>{t.onerror=s=>{const o=vy(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}j(e,t){const r=[];return new k((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void i();const u=new I$(c),h=t(c.primaryKey,c.value,u);if(h instanceof k){const f=h.catch(p=>(u.done(),k.reject(p)));r.push(f)}u.isDone?i():u.U===null?c.continue():c.continue(u.U)}}).next(()=>k.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function eo(n){return new k((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=vy(r.target.error);t(i)}})}let pT=!1;function vy(n){const e=Ni.D(Kt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new ie("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return pT||(pT=!0,setTimeout(()=>{throw r},0)),r}}return n}class E${constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){G("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{G("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(t){Ms(t)?G("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Os(t)}await this.te(6e4)})}}class T${constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let i=t,s=!0;return k.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return G("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,i).next(c=>{i-=c,r.add(o)});s=!1})).next(()=>t-i)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(i,s)).next(c=>(G("IndexBackiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}se(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=iS(s);yy(o,r)>0&&(r=o)}),new ar(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}qn.ae=-1;function xf(n){return n==null}function Dc(n){return n===0&&1/n==-1/0}function aS(n){return typeof n=="number"&&Number.isInteger(n)&&!Dc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=gT(e)),e=A$(n.get(t),e);return gT(e)}function A$(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function gT(n){return n+""}function ti(n){const e=n.length;if(ye(e>=2),e===2)return ye(n.charAt(0)===""&&n.charAt(1)===""),ot.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf("",s);switch((o<0||o>t)&&ce(),n.charAt(o+1)){case"":const c=n.substring(s,o);let u;i.length===0?u=c:(i+=c,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:ce()}s=o+2}return new ot(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(n,e){return[n,Nn(e)]}function lS(n,e,t){return[n,Nn(e),t]}const b$={},R$=["prefixPath","collectionGroup","readTime","documentId"],S$=["prefixPath","collectionGroup","documentId"],C$=["collectionGroup","readTime","prefixPath","documentId"],P$=["canonicalId","targetId"],x$=["targetId","path"],k$=["path","targetId"],D$=["collectionId","parent"],N$=["indexId","uid"],O$=["uid","sequenceNumber"],M$=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],V$=["indexId","uid","orderedDocumentKey"],L$=["userId","collectionPath","documentId"],F$=["userId","collectionPath","largestBatchId"],U$=["userId","collectionGroup","largestBatchId"],cS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],B$=[...cS,"documentOverlays"],uS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],hS=uS,$$=[...hS,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_ extends oS{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function on(n,e){const t=fe(n);return Ni.O(t.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function No(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function dS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rt=class O_{constructor(e,t){this.comparator=e,this.root=t||ys.EMPTY}insert(e,t){return new O_(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ys.BLACK,null,null))}remove(e){return new O_(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ys.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Th(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Th(this.root,e,this.comparator,!1)}getReverseIterator(){return new Th(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Th(this.root,e,this.comparator,!0)}},Th=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ys=class Si{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Si.RED,this.left=i??Si.EMPTY,this.right=s??Si.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Si(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Si.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Si.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Si.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Si.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}};ys.EMPTY=null,ys.RED=!0,ys.BLACK=!1;ys.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(e,t,r,i,s){return this}insert(e,t,r){return new ys(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e,this.data=new Rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new yT(this.data.getIterator())}getIteratorFrom(e){return new yT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new mt(this.comparator);return t.data=e,t}}class yT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ra(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.fields=e,e.sort($t.comparator)}static empty(){return new zn([])}unionWith(e){let t=new mt($t.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ma(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new fS("Invalid base64 string: "+s):s}}(e);return new nn(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new nn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nn.EMPTY_BYTE_STRING=new nn("");const W$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function As(n){if(ye(!!n),typeof n=="string"){let e=0;const t=W$.exec(n);if(ye(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xt(n.seconds),nanos:xt(n.nanos)}}function xt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function bs(n){return typeof n=="string"?nn.fromBase64String(n):nn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function wy(n){const e=n.mapValue.fields.__previous_value__;return Iy(e)?wy(e):e}function Nc(n){const e=As(n.mapValue.fields.__local_write_time__.timestampValue);return new bt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q${constructor(e,t,r,i,s,o,c,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h}}class Io{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Io("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Io&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Qh={nullValue:"NULL_VALUE"};function wo(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Iy(n)?4:pS(n)?9007199254740991:10:ce()}function ui(n,e){if(n===e)return!0;const t=wo(n);if(t!==wo(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Nc(n).isEqual(Nc(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=As(i.timestampValue),c=As(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return bs(i.bytesValue).isEqual(bs(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return xt(i.geoPointValue.latitude)===xt(s.geoPointValue.latitude)&&xt(i.geoPointValue.longitude)===xt(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return xt(i.integerValue)===xt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=xt(i.doubleValue),c=xt(s.doubleValue);return o===c?Dc(o)===Dc(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Ma(n.arrayValue.values||[],e.arrayValue.values||[],ui);case 10:return function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(mT(o)!==mT(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!ui(o[u],c[u])))return!1;return!0}(n,e);default:return ce()}}function Oc(n,e){return(n.values||[]).find(t=>ui(t,e))!==void 0}function Rs(n,e){if(n===e)return 0;const t=wo(n),r=wo(e);if(t!==r)return ke(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ke(n.booleanValue,e.booleanValue);case 2:return function(s,o){const c=xt(s.integerValue||s.doubleValue),u=xt(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return vT(n.timestampValue,e.timestampValue);case 4:return vT(Nc(n),Nc(e));case 5:return ke(n.stringValue,e.stringValue);case 6:return function(s,o){const c=bs(s),u=bs(o);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=ke(c[h],u[h]);if(f!==0)return f}return ke(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const c=ke(xt(s.latitude),xt(o.latitude));return c!==0?c:ke(xt(s.longitude),xt(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const c=s.values||[],u=o.values||[];for(let h=0;h<c.length&&h<u.length;++h){const f=Rs(c[h],u[h]);if(f)return f}return ke(c.length,u.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===gs.mapValue&&o===gs.mapValue)return 0;if(s===gs.mapValue)return 1;if(o===gs.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const _=ke(u[p],f[p]);if(_!==0)return _;const I=Rs(c[u[p]],h[f[p]]);if(I!==0)return I}return ke(u.length,f.length)}(n.mapValue,e.mapValue);default:throw ce()}}function vT(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ke(n,e);const t=As(n),r=As(e),i=ke(t.seconds,r.seconds);return i!==0?i:ke(t.nanos,r.nanos)}function Va(n){return M_(n)}function M_(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=As(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return bs(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ne.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=M_(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${M_(t.fields[o])}`;return i+"}"}(n.mapValue):ce()}function Ey(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function V_(n){return!!n&&"integerValue"in n}function Mc(n){return!!n&&"arrayValue"in n}function IT(n){return!!n&&"nullValue"in n}function wT(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Yh(n){return!!n&&"mapValue"in n}function ic(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return No(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ic(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ic(n.arrayValue.values[t]);return e}return Object.assign({},n)}function pS(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function z$(n){return"nullValue"in n?Qh:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ey(Io.empty(),ne.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:ce()}function K$(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ey(Io.empty(),ne.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?gs:ce()}function ET(n,e){const t=Rs(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function TT(n,e){const t=Rs(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Yh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ic(t)}setAll(e){let t=$t.emptyPath(),r={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=ic(o):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Yh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ui(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Yh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){No(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new wn(ic(this.value))}}function gS(n){const e=[];return No(n.fields,(t,r)=>{const i=new $t([t]);if(Yh(r)){const s=gS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new zn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new kt(e,0,me.min(),me.min(),me.min(),wn.empty(),0)}static newFoundDocument(e,t,r,i){return new kt(e,1,t,me.min(),r,i,0)}static newNoDocument(e,t){return new kt(e,2,t,me.min(),me.min(),wn.empty(),0)}static newUnknownDocument(e,t){return new kt(e,3,t,me.min(),me.min(),wn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t){this.position=e,this.inclusive=t}}function AT(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),t.key):r=Rs(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function bT(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ui(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t="asc"){this.field=e,this.dir=t}}function H$(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{}class Ke extends _S{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new G$(e,t,r):t==="array-contains"?new Y$(e,r):t==="in"?new ES(e,r):t==="not-in"?new J$(e,r):t==="array-contains-any"?new X$(e,r):new Ke(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new j$(e,r):new Q$(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Rs(t,this.value)):t!==null&&wo(this.value)===wo(t)&&this.matchesComparison(Rs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ct extends _S{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new ct(e,t)}matches(e){return Fa(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(t=>t.isInequality());return e!==null?e.field:null}le(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Fa(n){return n.op==="and"}function L_(n){return n.op==="or"}function Ty(n){return mS(n)&&Fa(n)}function mS(n){for(const e of n.filters)if(e instanceof ct)return!1;return!0}function F_(n){if(n instanceof Ke)return n.field.canonicalString()+n.op.toString()+Va(n.value);if(Ty(n))return n.filters.map(e=>F_(e)).join(",");{const e=n.filters.map(t=>F_(t)).join(",");return`${n.op}(${e})`}}function yS(n,e){return n instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.field.isEqual(i.field)&&ui(r.value,i.value)}(n,e):n instanceof ct?function(r,i){return i instanceof ct&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,c)=>s&&yS(o,i.filters[c]),!0):!1}(n,e):void ce()}function vS(n,e){const t=n.filters.concat(e);return ct.create(t,n.op)}function IS(n){return n instanceof Ke?function(t){return`${t.field.canonicalString()} ${t.op} ${Va(t.value)}`}(n):n instanceof ct?function(t){return t.op.toString()+" {"+t.getFilters().map(IS).join(" ,")+"}"}(n):"Filter"}class G$ extends Ke{constructor(e,t,r){super(e,t,r),this.key=ne.fromName(r.referenceValue)}matches(e){const t=ne.comparator(e.key,this.key);return this.matchesComparison(t)}}class j$ extends Ke{constructor(e,t){super(e,"in",t),this.keys=wS("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Q$ extends Ke{constructor(e,t){super(e,"not-in",t),this.keys=wS("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function wS(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ne.fromName(r.referenceValue))}class Y$ extends Ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mc(t)&&Oc(t.arrayValue,this.value)}}class ES extends Ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Oc(this.value.arrayValue,t)}}class J$ extends Ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(Oc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Oc(this.value.arrayValue,t)}}class X$ extends Ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Oc(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z${constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.he=null}}function U_(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Z$(n,e,t,r,i,s,o)}function Eo(n){const e=fe(n);if(e.he===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>F_(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),xf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Va(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Va(r)).join(",")),e.he=t}return e.he}function fu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!H$(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!yS(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!bT(n.startAt,e.startAt)&&bT(n.endAt,e.endAt)}function bd(n){return ne.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Rd(n,e){return n.filters.filter(t=>t instanceof Ke&&t.field.isEqual(e))}function RT(n,e,t){let r=Qh,i=!0;for(const s of Rd(n,e)){let o=Qh,c=!0;switch(s.op){case"<":case"<=":o=z$(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=Qh}ET({value:r,inclusive:i},{value:o,inclusive:c})<0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];ET({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function ST(n,e,t){let r=gs,i=!0;for(const s of Rd(n,e)){let o=gs,c=!0;switch(s.op){case">=":case">":o=K$(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=gs}TT({value:r,inclusive:i},{value:o,inclusive:c})>0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];TT({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function TS(n,e,t,r,i,s,o,c){return new kf(n,e,t,r,i,s,o,c)}function pu(n){return new kf(n)}function CT(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function eW(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function tW(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function nW(n){return n.collectionGroup!==null}function oc(n){const e=fe(n);if(e.Pe===null){e.Pe=[];const t=tW(e),r=eW(e);if(t!==null&&r===null)t.isKeyField()||e.Pe.push(new sc(t)),e.Pe.push(new sc($t.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new sc($t.keyField(),s))}}}return e.Pe}function Er(n){const e=fe(n);return e.Ie||(e.Ie=rW(e,oc(n))),e.Ie}function rW(n,e){if(n.limitType==="F")return U_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new sc(i.field,s)});const t=n.endAt?new La(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new La(n.startAt.position,n.startAt.inclusive):null;return U_(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function B_(n,e,t){return new kf(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Df(n,e){return fu(Er(n),Er(e))&&n.limitType===e.limitType}function AS(n){return`${Eo(Er(n))}|lt:${n.limitType}`}function $_(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>IS(i)).join(", ")}]`),xf(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Va(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Va(i)).join(",")),`Target(${r})`}(Er(n))}; limitType=${n.limitType})`}function gu(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ne.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of oc(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,c,u){const h=AT(o,c,u);return o.inclusive?h<=0:h<0}(r.startAt,oc(r),i)||r.endAt&&!function(o,c,u){const h=AT(o,c,u);return o.inclusive?h>=0:h>0}(r.endAt,oc(r),i))}(n,e)}function bS(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function RS(n){return(e,t)=>{let r=!1;for(const i of oc(n)){const s=iW(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function iW(n,e,t){const r=n.field.isKeyField()?ne.comparator(e.key,t.key):function(s,o,c){const u=o.data.field(s),h=c.data.field(s);return u!==null&&h!==null?Rs(u,h):ce()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ce()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){No(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return dS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sW=new Rt(ne.comparator);function rr(){return sW}const SS=new Rt(ne.comparator);function jl(...n){let e=SS;for(const t of n)e=e.insert(t.key,t);return e}function CS(n){let e=SS;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ni(){return ac()}function PS(){return ac()}function ac(){return new Vs(n=>n.toString(),(n,e)=>n.isEqual(e))}const oW=new Rt(ne.comparator),aW=new mt(ne.comparator);function Le(...n){let e=aW;for(const t of n)e=e.add(t);return e}const lW=new mt(ke);function Ay(){return lW}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dc(e)?"-0":e}}function kS(n){return{integerValue:""+n}}function cW(n,e){return aS(e)?kS(e):xS(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(){this._=void 0}}function uW(n,e,t){return n instanceof Vc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Iy(s)&&(s=wy(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof To?NS(n,e):n instanceof Ao?OS(n,e):function(i,s){const o=DS(i,s),c=PT(o)+PT(i.Ee);return V_(o)&&V_(i.Ee)?kS(c):xS(i.serializer,c)}(n,e)}function hW(n,e,t){return n instanceof To?NS(n,e):n instanceof Ao?OS(n,e):t}function DS(n,e){return n instanceof Lc?function(r){return V_(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Vc extends Nf{}class To extends Nf{constructor(e){super(),this.elements=e}}function NS(n,e){const t=MS(e);for(const r of n.elements)t.some(i=>ui(i,r))||t.push(r);return{arrayValue:{values:t}}}class Ao extends Nf{constructor(e){super(),this.elements=e}}function OS(n,e){let t=MS(e);for(const r of n.elements)t=t.filter(i=>!ui(i,r));return{arrayValue:{values:t}}}class Lc extends Nf{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function PT(n){return xt(n.integerValue||n.doubleValue)}function MS(n){return Mc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,t){this.field=e,this.transform=t}}function dW(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof To&&i instanceof To||r instanceof Ao&&i instanceof Ao?Ma(r.elements,i.elements,ui):r instanceof Lc&&i instanceof Lc?ui(r.Ee,i.Ee):r instanceof Vc&&i instanceof Vc}(n.transform,e.transform)}class fW{constructor(e,t){this.version=e,this.transformResults=t}}class Kn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Of{}function VS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ry(n.key,Kn.none()):new sl(n.key,n.data,Kn.none());{const t=n.data,r=wn.empty();let i=new mt($t.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zi(n.key,r,new zn(i.toArray()),Kn.none())}}function pW(n,e,t){n instanceof sl?function(i,s,o){const c=i.value.clone(),u=kT(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof zi?function(i,s,o){if(!Jh(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=kT(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(LS(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function lc(n,e,t,r){return n instanceof sl?function(s,o,c,u){if(!Jh(s.precondition,o))return c;const h=s.value.clone(),f=DT(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof zi?function(s,o,c,u){if(!Jh(s.precondition,o))return c;const h=DT(s.fieldTransforms,u,o),f=o.data;return f.setAll(LS(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(s,o,c){return Jh(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function gW(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=DS(r.transform,i||null);s!=null&&(t===null&&(t=wn.empty()),t.set(r.field,s))}return t||null}function xT(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ma(r,i,(s,o)=>dW(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class sl extends Of{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zi extends Of{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function LS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function kT(n,e,t){const r=new Map;ye(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,hW(o,c,t[i]))}return r}function DT(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,uW(s,o,e))}return r}class Ry extends Of{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class FS extends Of{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pW(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=lc(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=lc(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=PS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const u=VS(o,c);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(me.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&Ma(this.mutations,e.mutations,(t,r)=>xT(t,r))&&Ma(this.baseMutations,e.baseMutations,(t,r)=>xT(t,r))}}class Cy{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ye(e.mutations.length===r.length);let i=function(){return oW}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Cy(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _W{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut,He;function mW(n){switch(n){default:return ce();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function US(n){if(n===void 0)return Lt("GRPC error has no .code"),B.UNKNOWN;switch(n){case Ut.OK:return B.OK;case Ut.CANCELLED:return B.CANCELLED;case Ut.UNKNOWN:return B.UNKNOWN;case Ut.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Ut.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Ut.INTERNAL:return B.INTERNAL;case Ut.UNAVAILABLE:return B.UNAVAILABLE;case Ut.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Ut.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Ut.NOT_FOUND:return B.NOT_FOUND;case Ut.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Ut.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Ut.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Ut.ABORTED:return B.ABORTED;case Ut.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Ut.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Ut.DATA_LOSS:return B.DATA_LOSS;default:return ce()}}(He=Ut||(Ut={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ah}static getOrCreateInstance(){return Ah===null&&(Ah=new xy),Ah}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Ah=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yW(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vW=new wa([4294967295,4294967295],0);function NT(n){const e=yW().encode(n),t=new c$;return t.update(e),new Uint8Array(t.digest())}function OT(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new wa([t,r],0),new wa([i,s],0)]}class ky{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ql(`Invalid padding: ${t}`);if(r<0)throw new Ql(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ql(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ql(`Invalid padding when bitmap length is 0: ${t}`);this.Ae=8*e.length-t,this.Re=wa.fromNumber(this.Ae)}Ve(e,t,r){let i=e.add(t.multiply(wa.fromNumber(r)));return i.compare(vW)===1&&(i=new wa([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const t=NT(e),[r,i]=OT(t);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ky(s,i,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ae===0)return;const t=NT(e),[r,i]=OT(t);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ql extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,mu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new _u(me.min(),i,new Rt(ke),rr(),Le())}}class mu{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new mu(r,t,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t,r,i){this.ge=e,this.removedTargetIds=t,this.key=r,this.pe=i}}class BS{constructor(e,t){this.targetId=e,this.ye=t}}class $S{constructor(e,t,r=nn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class MT{constructor(){this.we=0,this.Se=LT(),this.be=nn.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=Le(),t=Le(),r=Le();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ce()}}),new mu(this.be,this.De,e,t,r)}Oe(){this.ve=!1,this.Se=LT()}Ne(e,t){this.ve=!0,this.Se=this.Se.insert(e,t)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class IW{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=rr(),this.Ue=VT(),this.We=new Rt(ke)}Ge(e){for(const t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(const t of e.removedTargetIds)this.je(t,e.key,e.pe)}He(e){this.forEachTarget(e,t=>{const r=this.Je(t);switch(e.state){case 0:this.Ye(t)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(t);break;case 3:this.Ye(t)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(t)&&(this.Ze(t),r.Me(e.resumeToken));break;default:ce()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach((r,i)=>{this.Ye(i)&&t(i)})}Xe(e){var t;const r=e.targetId,i=e.ye.count,s=this.et(r);if(s){const o=s.target;if(bd(o))if(i===0){const c=new ne(o.path);this.je(r,c,kt.newNoDocument(c,me.min()))}else ye(i===1);else{const c=this.tt(r);if(c!==i){const u=this.nt(e),h=u?this.rt(u,e,c):1;if(h!==0){this.Ze(r);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(r,f)}(t=xy.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(p,_,I,A,P){var x,V,W,K,N,j;const se={localCacheCount:p,existenceFilterCount:_.count,databaseId:I.database,projectId:I.projectId},ue=_.unchangedNames;return ue&&(se.bloomFilter={applied:P===0,hashCount:(x=ue==null?void 0:ue.hashCount)!==null&&x!==void 0?x:0,bitmapLength:(K=(W=(V=ue==null?void 0:ue.bits)===null||V===void 0?void 0:V.bitmap)===null||W===void 0?void 0:W.length)!==null&&K!==void 0?K:0,padding:(j=(N=ue==null?void 0:ue.bits)===null||N===void 0?void 0:N.padding)!==null&&j!==void 0?j:0,mightContain:he=>{var Te;return(Te=A==null?void 0:A.mightContain(he))!==null&&Te!==void 0&&Te}}),se}(c,e.ye,this.Qe.it(),u,h))}}}}nt(e){const t=e.ye.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=bs(r).toUint8Array()}catch(u){if(u instanceof fS)return Oa("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new ky(o,i,s)}catch(u){return Oa(u instanceof Ql?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ae===0?null:c}rt(e,t,r){return t.ye.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.Qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Qe.it(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.je(t,s,null),i++)}),i}ot(e){const t=new Map;this.Ke.forEach((s,o)=>{const c=this.et(o);if(c){if(s.current&&bd(c.target)){const u=new ne(c.target.path);this.$e.get(u)!==null||this._t(o,u)||this.je(o,u,kt.newNoDocument(u,e))}s.Fe&&(t.set(o,s.xe()),s.Oe())}});let r=Le();this.Ue.forEach((s,o)=>{let c=!0;o.forEachWhile(u=>{const h=this.et(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new _u(e,t,this.We,this.$e,r);return this.$e=rr(),this.Ue=VT(),this.We=new Rt(ke),i}ze(e,t){if(!this.Ye(e))return;const r=this._t(e,t.key)?2:0;this.Je(e).Ne(t.key,r),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ut(t.key).add(e))}je(e,t,r){if(!this.Ye(e))return;const i=this.Je(e);this._t(e,t)?i.Ne(t,1):i.Be(t),this.Ue=this.Ue.insert(t,this.ut(t).delete(e)),r&&(this.$e=this.$e.insert(t,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new MT,this.Ke.set(e,t)),t}ut(e){let t=this.Ue.get(e);return t||(t=new mt(ke),this.Ue=this.Ue.insert(e,t)),t}Ye(e){const t=this.et(e)!==null;return t||G("WatchChangeAggregator","Detected inactive target",e),t}et(e){const t=this.Ke.get(e);return t&&t.Ce?null:this.Qe.ct(e)}Ze(e){this.Ke.set(e,new MT),this.Qe.getRemoteKeysForTarget(e).forEach(t=>{this.je(e,t,null)})}_t(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}function VT(){return new Rt(ne.comparator)}function LT(){return new Rt(ne.comparator)}const wW=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),EW=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),TW=(()=>({and:"AND",or:"OR"}))();class AW{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function W_(n,e){return n.useProto3Json||xf(e)?e:{value:e}}function Ua(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function bW(n,e){return Ua(n,e.toTimestamp())}function On(n){return ye(!!n),me.fromTimestamp(function(t){const r=As(t);return new bt(r.seconds,r.nanos)}(n))}function Dy(n,e){return function(r){return new ot(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function qS(n){const e=ot.fromString(n);return ye(JS(e)),e}function Sd(n,e){return Dy(n.databaseId,e.path)}function po(n,e){const t=qS(e);if(t.get(1)!==n.databaseId.projectId)throw new ie(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ie(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ne(KS(t))}function q_(n,e){return Dy(n.databaseId,e)}function zS(n){const e=qS(n);return e.length===4?ot.emptyPath():KS(e)}function z_(n){return new ot(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function KS(n){return ye(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function FT(n,e,t){return{name:Sd(n,e),fields:t.value.mapValue.fields}}function RW(n,e,t){const r=po(n,e.name),i=On(e.updateTime),s=e.createTime?On(e.createTime):me.min(),o=new wn({mapValue:{fields:e.fields}}),c=kt.newFoundDocument(r,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function SW(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ye(f===void 0||typeof f=="string"),nn.fromBase64String(f||"")):(ye(f===void 0||f instanceof Uint8Array),nn.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?B.UNKNOWN:US(h.code);return new ie(f,h.message||"")}(o);t=new $S(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=po(n,r.document.name),s=On(r.document.updateTime),o=r.document.createTime?On(r.document.createTime):me.min(),c=new wn({mapValue:{fields:r.document.fields}}),u=kt.newFoundDocument(i,s,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Xh(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=po(n,r.document),s=r.readTime?On(r.readTime):me.min(),o=kt.newNoDocument(i,s),c=r.removedTargetIds||[];t=new Xh([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=po(n,r.document),s=r.removedTargetIds||[];t=new Xh([],s,i,null)}else{if(!("filter"in e))return ce();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new _W(i,s),c=r.targetId;t=new BS(c,o)}}return t}function Cd(n,e){let t;if(e instanceof sl)t={update:FT(n,e.key,e.value)};else if(e instanceof Ry)t={delete:Sd(n,e.key)};else if(e instanceof zi)t={update:FT(n,e.key,e.data),updateMask:NW(e.fieldMask)};else{if(!(e instanceof FS))return ce();t={verify:Sd(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const c=o.transform;if(c instanceof Vc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof To)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ao)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Lc)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw ce()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:bW(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ce()}(n,e.precondition)),t}function K_(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Kn.updateTime(On(s.updateTime)):s.exists!==void 0?Kn.exists(s.exists):Kn.none()}(e.currentDocument):Kn.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let u=null;if("setToServerValue"in c)ye(c.setToServerValue==="REQUEST_TIME"),u=new Vc;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];u=new To(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];u=new Ao(f)}else"increment"in c?u=new Lc(o,c.increment):ce();const h=$t.fromServerFormat(c.fieldPath);return new by(h,u)}(n,i)):[];if(e.update){e.update.name;const i=po(n,e.update.name),s=new wn({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const h=u.fieldPaths||[];return new zn(h.map(f=>$t.fromServerFormat(f)))}(e.updateMask);return new zi(i,s,o,t,r)}return new sl(i,s,t,r)}if(e.delete){const i=po(n,e.delete);return new Ry(i,t)}if(e.verify){const i=po(n,e.verify);return new FS(i,t)}return ce()}function CW(n,e){return n&&n.length>0?(ye(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?On(i.updateTime):On(s);return o.isEqual(me.min())&&(o=On(s)),new fW(o,i.transformResults||[])}(t,e))):[]}function HS(n,e){return{documents:[q_(n,e.path)]}}function GS(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=q_(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=q_(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return YS(ct.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:la(p.field),direction:xW(p.dir)}}(h))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const o=W_(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),t}function jS(n){let e=zS(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ye(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(p){const _=QS(p);return _ instanceof ct&&Ty(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(_=>function(A){return new sc(ca(A.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(p){let _;return _=typeof p=="object"?p.value:p,xf(_)?null:_}(t.limit));let u=null;t.startAt&&(u=function(p){const _=!!p.before,I=p.values||[];return new La(I,_)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const _=!p.before,I=p.values||[];return new La(I,_)}(t.endAt)),TS(e,i,o,s,c,"F",u,h)}function PW(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function QS(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ca(t.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ca(t.unaryFilter.field);return Ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ca(t.unaryFilter.field);return Ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ca(t.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(n):n.fieldFilter!==void 0?function(t){return Ke.create(ca(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ct.create(t.compositeFilter.filters.map(r=>QS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ce()}}(t.compositeFilter.op))}(n):ce()}function xW(n){return wW[n]}function kW(n){return EW[n]}function DW(n){return TW[n]}function la(n){return{fieldPath:n.canonicalString()}}function ca(n){return $t.fromServerFormat(n.fieldPath)}function YS(n){return n instanceof Ke?function(t){if(t.op==="=="){if(wT(t.value))return{unaryFilter:{field:la(t.field),op:"IS_NAN"}};if(IT(t.value))return{unaryFilter:{field:la(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(wT(t.value))return{unaryFilter:{field:la(t.field),op:"IS_NOT_NAN"}};if(IT(t.value))return{unaryFilter:{field:la(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:la(t.field),op:kW(t.op),value:t.value}}}(n):n instanceof ct?function(t){const r=t.getFilters().map(i=>YS(i));return r.length===1?r[0]:{compositeFilter:{op:DW(t.op),filters:r}}}(n):ce()}function NW(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function JS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t,r,i,s=me.min(),o=me.min(),c=nn.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Oi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.lt=e}}function OW(n,e){let t;if(e.document)t=RW(n.lt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=ne.fromSegments(e.noDocument.path),i=Ro(e.noDocument.readTime);t=kt.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return ce();{const r=ne.fromSegments(e.unknownDocument.path),i=Ro(e.unknownDocument.version);t=kt.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new bt(i[0],i[1]);return me.fromTimestamp(s)}(e.readTime)),t}function UT(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Pd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Sd(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Ua(s,o.version.toTimestamp()),createTime:Ua(s,o.createTime.toTimestamp())}}(n.lt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:bo(e.version)};else{if(!e.isUnknownDocument())return ce();r.unknownDocument={path:t.path.toArray(),version:bo(e.version)}}return r}function Pd(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function bo(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ro(n){const e=new bt(n.seconds,n.nanoseconds);return me.fromTimestamp(e)}function to(n,e){const t=(e.baseMutations||[]).map(s=>K_(n.lt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>K_(n.lt,s)),i=bt.fromMillis(e.localWriteTimeMs);return new Sy(e.batchId,i,t,r)}function Yl(n){const e=Ro(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Ro(n.lastLimboFreeSnapshotVersion):me.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return ye(s.documents.length===1),Er(pu(zS(s.documents[0])))}(n.query):function(s){return Er(jS(s))}(n.query),new Oi(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,nn.fromBase64String(n.resumeToken))}function ZS(n,e){const t=bo(e.snapshotVersion),r=bo(e.lastLimboFreeSnapshotVersion);let i;i=bd(e.target)?HS(n.lt,e.target):GS(n.lt,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Eo(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function eC(n){const e=jS({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?B_(e,e.limit,"L"):e}function $g(n,e){return new Py(e.largestBatchId,K_(n.lt,e.overlayMutation))}function BT(n,e){const t=e.path.lastSegment();return[n,Nn(e.path.popLast()),t]}function $T(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:bo(r.readTime),documentKey:Nn(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MW{getBundleMetadata(e,t){return WT(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Ro(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return WT(e).put(function(i){return{bundleId:i.id,createTime:bo(On(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return qT(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:eC(s.bundledQuery),readTime:Ro(s.readTime)}}(r)})}saveNamedQuery(e,t){return qT(e).put(function(i){return{name:i.name,readTime:bo(On(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function WT(n){return on(n,"bundles")}function qT(n){return on(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,t){this.serializer=e,this.userId=t}static ht(e,t){const r=t.uid||"";return new Mf(e,r)}getOverlay(e,t){return Ol(e).get(BT(this.userId,t)).next(r=>r?$g(this.serializer,r):null)}getOverlays(e,t){const r=ni();return k.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const c=new Py(t,o);i.push(this.Pt(e,c))}),k.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(Nn(o.getCollectionPath())));const s=[];return i.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Ol(e).J("collectionPathOverlayIndex",c))}),k.waitFor(s)}getOverlaysForCollection(e,t,r){const i=ni(),s=Nn(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ol(e).G("collectionPathOverlayIndex",o).next(c=>{for(const u of c){const h=$g(this.serializer,u);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=ni();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ol(e).Z({index:"collectionGroupOverlayIndex",range:c},(u,h,f)=>{const p=$g(this.serializer,h);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>s)}Pt(e,t){return Ol(e).put(function(i,s,o){const[c,u,h]=BT(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Cd(i.lt,o.mutation)}}(this.serializer,this.userId,t))}}function Ol(n){return on(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(xt(e.integerValue));else if("doubleValue"in e){const r=xt(e.doubleValue);isNaN(r)?this.dt(t,13):(this.dt(t,15),Dc(r)?t.At(0):t.At(r))}else if("timestampValue"in e){const r=e.timestampValue;this.dt(t,20),typeof r=="string"?t.Rt(r):(t.Rt(`${r.seconds||""}`),t.At(r.nanos||0))}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(bs(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(t,45),t.At(r.latitude||0),t.At(r.longitude||0)}else"mapValue"in e?pS(e)?this.dt(t,Number.MAX_SAFE_INTEGER):(this.wt(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.St(e.arrayValue,t),this.ft(t)):ce()}Vt(e,t){this.dt(t,25),this.bt(e,t)}bt(e,t){t.Rt(e)}wt(e,t){const r=e.fields||{};this.dt(t,55);for(const i of Object.keys(r))this.Vt(i,t),this.Tt(r[i],t)}St(e,t){const r=e.values||[];this.dt(t,50);for(const i of r)this.Tt(i,t)}yt(e,t){this.dt(t,37),ne.fromName(e).path.forEach(r=>{this.dt(t,60),this.bt(r,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}no.Dt=new no;function VW(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function zT(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=VW(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class LW{constructor(){this.buffer=new Uint8Array(1024),this.position=0}vt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ct(r.value),r=t.next();this.Ft()}Mt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.xt(r.value),r=t.next();this.Ot()}Nt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=t.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.Ft()}Bt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.xt(r);else if(r<2048)this.xt(960|r>>>6),this.xt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.xt(480|r>>>12),this.xt(128|63&r>>>6),this.xt(128|63&r);else{const i=t.codePointAt(0);this.xt(240|i>>>18),this.xt(128|63&i>>>12),this.xt(128|63&i>>>6),this.xt(128|63&i)}}this.Ot()}Lt(e){const t=this.kt(e),r=zT(t);this.qt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Qt(e){const t=this.kt(e),r=zT(t);this.qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}Kt(){this.$t(255),this.$t(255)}Ut(){this.Wt(255),this.Wt(255)}reset(){this.position=0}seed(e){this.qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Gt(){return this.buffer.slice(0,this.position)}kt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Ct(e){const t=255&e;t===0?(this.$t(0),this.$t(255)):t===255?(this.$t(255),this.$t(0)):this.$t(t)}xt(e){const t=255&e;t===0?(this.Wt(0),this.Wt(255)):t===255?(this.Wt(255),this.Wt(0)):this.Wt(e)}Ft(){this.$t(0),this.$t(1)}Ot(){this.Wt(0),this.Wt(1)}$t(e){this.qt(1),this.buffer[this.position++]=e}Wt(e){this.qt(1),this.buffer[this.position++]=~e}qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class FW{constructor(e){this.zt=e}gt(e){this.zt.vt(e)}Rt(e){this.zt.Nt(e)}At(e){this.zt.Lt(e)}Et(){this.zt.Kt()}}class UW{constructor(e){this.zt=e}gt(e){this.zt.Mt(e)}Rt(e){this.zt.Bt(e)}At(e){this.zt.Qt(e)}Et(){this.zt.Ut()}}class Ml{constructor(){this.zt=new LW,this.jt=new FW(this.zt),this.Ht=new UW(this.zt)}seed(e){this.zt.seed(e)}Jt(e){return e===0?this.jt:this.Ht}Gt(){return this.zt.Gt()}reset(){this.zt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Yt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ro(this.indexId,this.documentKey,this.arrayValue,r)}}function is(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=KT(n.arrayValue,e.arrayValue),t!==0?t:(t=KT(n.directionalValue,e.directionalValue),t!==0?t:ne.comparator(n.documentKey,e.documentKey)))}function KT(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BW{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const t of e.filters){const r=t;r.isInequality()?this.en=r:this.Xt.push(r)}}tn(e){ye(e.collectionGroup===this.collectionId);const t=D_(e);if(t!==void 0&&!this.nn(t))return!1;const r=Xs(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.en!==void 0){if(!i.has(this.en.field.canonicalString())){const c=r[s];if(!this.rn(this.en,c)||!this.sn(this.Zt[o++],c))return!1}++s}for(;s<r.length;++s){const c=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],c))return!1}return!0}nn(e){for(const t of this.Xt)if(this.rn(t,e))return!0;return!1}rn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(n){var e,t;if(ye(n instanceof Ke||n instanceof ct),n instanceof Ke){if(n instanceof ES){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>Ke.create(n.field,"==",s)))||[];return ct.create(i,"or")}return n}const r=n.filters.map(i=>tC(i));return ct.create(r,n.op)}function $W(n){if(n.getFilters().length===0)return[];const e=j_(tC(n));return ye(nC(e)),H_(e)||G_(e)?[e]:e.getFilters()}function H_(n){return n instanceof Ke}function G_(n){return n instanceof ct&&Ty(n)}function nC(n){return H_(n)||G_(n)||function(t){if(t instanceof ct&&L_(t)){for(const r of t.getFilters())if(!H_(r)&&!G_(r))return!1;return!0}return!1}(n)}function j_(n){if(ye(n instanceof Ke||n instanceof ct),n instanceof Ke)return n;if(n.filters.length===1)return j_(n.filters[0]);const e=n.filters.map(r=>j_(r));let t=ct.create(e,n.op);return t=xd(t),nC(t)?t:(ye(t instanceof ct),ye(Fa(t)),ye(t.filters.length>1),t.filters.reduce((r,i)=>Ny(r,i)))}function Ny(n,e){let t;return ye(n instanceof Ke||n instanceof ct),ye(e instanceof Ke||e instanceof ct),t=n instanceof Ke?e instanceof Ke?function(i,s){return ct.create([i,s],"and")}(n,e):HT(n,e):e instanceof Ke?HT(e,n):function(i,s){if(ye(i.filters.length>0&&s.filters.length>0),Fa(i)&&Fa(s))return vS(i,s.getFilters());const o=L_(i)?i:s,c=L_(i)?s:i,u=o.filters.map(h=>Ny(h,c));return ct.create(u,"or")}(n,e),xd(t)}function HT(n,e){if(Fa(e))return vS(e,n.getFilters());{const t=e.filters.map(r=>Ny(n,r));return ct.create(t,"or")}}function xd(n){if(ye(n instanceof Ke||n instanceof ct),n instanceof Ke)return n;const e=n.getFilters();if(e.length===1)return xd(e[0]);if(mS(n))return n;const t=e.map(i=>xd(i)),r=[];return t.forEach(i=>{i instanceof Ke?r.push(i):i instanceof ct&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ct.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WW{constructor(){this.on=new Oy}addToCollectionParentIndex(e,t){return this.on.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(ar.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(ar.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class Oy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new mt(ot.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new mt(ot.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=new Uint8Array(0);class qW{constructor(e,t){this.user=e,this.databaseId=t,this._n=new Oy,this.an=new Vs(r=>Eo(r),(r,i)=>fu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this._n.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this._n.add(t)});const s={collectionId:r,parent:Nn(i)};return GT(e).put(s)}return k.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[tS(t),""],!1,!0);return GT(e).G(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(ti(o.parent))}return r})}addFieldIndex(e,t){const r=Rh(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Ll(e);return s.next(c=>{o.put($T(c,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=Rh(e),i=Ll(e),s=Vl(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=Vl(e);let i=!0;const s=new Map;return k.forEach(this.un(t),o=>this.cn(e,o).next(c=>{i&&(i=!!c),s.set(o,c)})).next(()=>{if(i){let o=Le();const c=[];return k.forEach(s,(u,h)=>{G("IndexedDbIndexManager",`Using index ${function(K){return`id=${K.indexId}|cg=${K.collectionGroup}|f=${K.fields.map(N=>`${N.fieldPath}:${N.kind}`).join(",")}`}(u)} to execute ${Eo(t)}`);const f=function(K,N){const j=D_(N);if(j===void 0)return null;for(const se of Rd(K,j.fieldPath))switch(se.op){case"array-contains-any":return se.value.arrayValue.values||[];case"array-contains":return[se.value]}return null}(h,u),p=function(K,N){const j=new Map;for(const se of Xs(N))for(const ue of Rd(K,se.fieldPath))switch(ue.op){case"==":case"in":j.set(se.fieldPath.canonicalString(),ue.value);break;case"not-in":case"!=":return j.set(se.fieldPath.canonicalString(),ue.value),Array.from(j.values())}return null}(h,u),_=function(K,N){const j=[];let se=!0;for(const ue of Xs(N)){const he=ue.kind===0?RT(K,ue.fieldPath,K.startAt):ST(K,ue.fieldPath,K.startAt);j.push(he.value),se&&(se=he.inclusive)}return new La(j,se)}(h,u),I=function(K,N){const j=[];let se=!0;for(const ue of Xs(N)){const he=ue.kind===0?ST(K,ue.fieldPath,K.endAt):RT(K,ue.fieldPath,K.endAt);j.push(he.value),se&&(se=he.inclusive)}return new La(j,se)}(h,u),A=this.ln(u,h,_),P=this.ln(u,h,I),x=this.hn(u,h,p),V=this.Pn(u.indexId,f,A,_.inclusive,P,I.inclusive,x);return k.forEach(V,W=>r.H(W,t.limit).next(K=>{K.forEach(N=>{const j=ne.fromSegments(N.documentKey);o.has(j)||(o=o.add(j),c.push(j))})}))}).next(()=>c)}return k.resolve(null)})}un(e){let t=this.an.get(e);return t||(e.filters.length===0?t=[e]:t=$W(ct.create(e.filters,"and")).map(r=>U_(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.an.set(e,t),t)}Pn(e,t,r,i,s,o,c){const u=(t!=null?t.length:1)*Math.max(r.length,s.length),h=u/(t!=null?t.length:1),f=[];for(let p=0;p<u;++p){const _=t?this.In(t[p/h]):bh,I=this.Tn(e,_,r[p%h],i),A=this.En(e,_,s[p%h],o),P=c.map(x=>this.Tn(e,_,x,!0));f.push(...this.createRange(I,A,P))}return f}Tn(e,t,r,i){const s=new ro(e,ne.empty(),t,r);return i?s:s.Yt()}En(e,t,r,i){const s=new ro(e,ne.empty(),t,r);return i?s.Yt():s}cn(e,t){const r=new BW(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const c of s)r.tn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2;const i=this.un(t);return k.forEach(i,s=>this.cn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let h=new mt($t.comparator),f=!1;for(const p of u.filters)for(const _ of p.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(const p of u.orderBy)p.field.isKeyField()||(h=h.add(p.field));return h.size+(f?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}dn(e,t){const r=new Ml;for(const i of Xs(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Jt(i.kind);no.Dt.It(s,o)}return r.Gt()}In(e){const t=new Ml;return no.Dt.It(e,t.Jt(0)),t.Gt()}An(e,t){const r=new Ml;return no.Dt.It(Ey(this.databaseId,t),r.Jt(function(s){const o=Xs(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Gt()}hn(e,t,r){if(r===null)return[];let i=[];i.push(new Ml);let s=0;for(const o of Xs(e)){const c=r[s++];for(const u of i)if(this.Rn(t,o.fieldPath)&&Mc(c))i=this.Vn(i,o,c);else{const h=u.Jt(o.kind);no.Dt.It(c,h)}}return this.mn(i)}ln(e,t,r){return this.hn(e,t,r.position)}mn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Gt();return t}Vn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const c of i){const u=new Ml;u.seed(c.Gt()),no.Dt.It(o,u.Jt(t.kind)),s.push(u)}return s}Rn(e,t){return!!e.filters.find(r=>r instanceof Ke&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Rh(e),i=Ll(e);return(t?r.G("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.G()).next(s=>{const o=[];return k.forEach(s,c=>i.get([c.indexId,this.uid]).next(u=>{o.push(function(f,p){const _=p?new Ad(p.sequenceNumber,new ar(Ro(p.readTime),new ne(ti(p.documentKey)),p.largestBatchId)):Ad.empty(),I=f.fields.map(([A,P])=>new v$($t.fromServerFormat(A),P));return new nS(f.indexId,f.collectionGroup,I,_)}(c,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ke(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=Rh(e),s=Ll(e);return this.fn(e).next(o=>i.G("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>k.forEach(c,u=>s.put($T(u.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return k.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?k.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(r.set(i.collectionGroup,c),k.forEach(c,u=>this.gn(e,i,u).next(h=>{const f=this.pn(s,u);return h.isEqual(f)?k.resolve():this.yn(e,s,u,h,f)}))))})}wn(e,t,r,i){return Vl(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.An(r,t.key),documentKey:t.key.path.toArray()})}Sn(e,t,r,i){return Vl(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.An(r,t.key),t.key.path.toArray()])}gn(e,t,r){const i=Vl(e);let s=new mt(is);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.An(r,t)])},(o,c)=>{s=s.add(new ro(r.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>s)}pn(e,t){let r=new mt(is);const i=this.dn(t,e);if(i==null)return r;const s=D_(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Mc(o))for(const c of o.arrayValue.values||[])r=r.add(new ro(t.indexId,e.key,this.In(c),i))}else r=r.add(new ro(t.indexId,e.key,bh,i));return r}yn(e,t,r,i,s){G("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(u,h,f,p,_){const I=u.getIterator(),A=h.getIterator();let P=ra(I),x=ra(A);for(;P||x;){let V=!1,W=!1;if(P&&x){const K=f(P,x);K<0?W=!0:K>0&&(V=!0)}else P!=null?W=!0:V=!0;V?(p(x),x=ra(A)):W?(_(P),P=ra(I)):(P=ra(I),x=ra(A))}}(i,s,is,c=>{o.push(this.wn(e,t,r,c))},c=>{o.push(this.Sn(e,t,r,c))}),k.waitFor(o)}fn(e){let t=1;return Ll(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>is(o,c)).filter((o,c,u)=>!c||is(o,u[c-1])!==0);const i=[];i.push(e);for(const o of r){const c=is(o,e),u=is(o,t);if(c===0)i[0]=e.Yt();else if(c>0&&u<0)i.push(o),i.push(o.Yt());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const c=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,bh,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,bh,[]];s.push(IDBKeyRange.bound(c,u))}return s}bn(e,t){return is(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(jT)}getMinOffset(e,t){return k.mapArray(this.un(t),r=>this.cn(e,r).next(i=>i||ce())).next(jT)}}function GT(n){return on(n,"collectionParents")}function Vl(n){return on(n,"indexEntries")}function Rh(n){return on(n,"indexConfiguration")}function Ll(n){return on(n,"indexState")}function jT(n){ye(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;yy(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new ar(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Wn{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Wn(e,Wn.DEFAULT_COLLECTION_PERCENTILE,Wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=r.Z({range:o},(f,p,_)=>(c++,_.delete()));s.push(u.next(()=>{ye(c===1)}));const h=[];for(const f of t.mutations){const p=lS(e,f.key.path,t.batchId);s.push(i.delete(p)),h.push(f.key)}return k.waitFor(s).next(()=>h)}function kd(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw ce();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn.DEFAULT_COLLECTION_PERCENTILE=10,Wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wn.DEFAULT=new Wn(41943040,Wn.DEFAULT_COLLECTION_PERCENTILE,Wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wn.DISABLED=new Wn(-1,0,0);class Vf{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Dn={}}static ht(e,t,r,i){ye(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Vf(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ss(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=ua(e),o=ss(e);return o.add({}).next(c=>{ye(typeof c=="number");const u=new Sy(c,t,r,i),h=function(I,A,P){const x=P.baseMutations.map(W=>Cd(I.lt,W)),V=P.mutations.map(W=>Cd(I.lt,W));return{userId:A,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:x,mutations:V}}(this.serializer,this.userId,u),f=[];let p=new mt((_,I)=>ke(_.canonicalString(),I.canonicalString()));for(const _ of i){const I=lS(this.userId,_.key.path,c);p=p.add(_.key.path.popLast()),f.push(o.put(h)),f.push(s.put(I,b$))}return p.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Dn[c]=u.keys()}),k.waitFor(f).next(()=>u)})}lookupMutationBatch(e,t){return ss(e).get(t).next(r=>r?(ye(r.userId===this.userId),to(this.serializer,r)):null)}vn(e,t){return this.Dn[t]?k.resolve(this.Dn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Dn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return ss(e).Z({index:"userMutationsIndex",range:i},(o,c,u)=>{c.userId===this.userId&&(ye(c.batchId>=r),s=to(this.serializer,c)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return ss(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ss(e).G("userMutationsIndex",t).next(r=>r.map(i=>to(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=jh(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return ua(e).Z({range:i},(o,c,u)=>{const[h,f,p]=o,_=ti(f);if(h===this.userId&&t.path.isEqual(_))return ss(e).get(p).next(I=>{if(!I)throw ce();ye(I.userId===this.userId),s.push(to(this.serializer,I))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new mt(ke);const i=[];return t.forEach(s=>{const o=jh(this.userId,s.path),c=IDBKeyRange.lowerBound(o),u=ua(e).Z({range:c},(h,f,p)=>{const[_,I,A]=h,P=ti(I);_===this.userId&&s.path.isEqual(P)?r=r.add(A):p.done()});i.push(u)}),k.waitFor(i).next(()=>this.Cn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=jh(this.userId,r),o=IDBKeyRange.lowerBound(s);let c=new mt(ke);return ua(e).Z({range:o},(u,h,f)=>{const[p,_,I]=u,A=ti(_);p===this.userId&&r.isPrefixOf(A)?A.length===i&&(c=c.add(I)):f.done()}).next(()=>this.Cn(e,c))}Cn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(ss(e).get(s).next(o=>{if(o===null)throw ce();ye(o.userId===this.userId),r.push(to(this.serializer,o))}))}),k.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return rC(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Fn(t.batchId)}),k.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Fn(e){delete this.Dn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return k.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return ua(e).Z({range:r},(s,o,c)=>{if(s[0]===this.userId){const u=ti(s[1]);i.push(u)}else c.done()}).next(()=>{ye(i.length===0)})})}containsKey(e,t){return iC(e,this.userId,t)}Mn(e){return sC(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function iC(n,e,t){const r=jh(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ua(n).Z({range:s,Y:!0},(c,u,h)=>{const[f,p,_]=c;f===e&&p===i&&(o=!0),h.done()}).next(()=>o)}function ss(n){return on(n,"mutations")}function ua(n){return on(n,"documentMutations")}function sC(n){return on(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new So(0)}static Nn(){return new So(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zW{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Bn(e).next(t=>{const r=new So(t.highestTargetId);return t.highestTargetId=r.next(),this.Ln(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(t=>me.fromTimestamp(new bt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Ln(e,i)))}addTargetData(e,t){return this.kn(e,t).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.qn(t,r),this.Ln(e,r))))}updateTargetData(e,t){return this.kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ia(e).delete(t.targetId)).next(()=>this.Bn(e)).next(r=>(ye(r.targetCount>0),r.targetCount-=1,this.Ln(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return ia(e).Z((o,c)=>{const u=Yl(c);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>k.waitFor(s)).next(()=>i)}forEachTarget(e,t){return ia(e).Z((r,i)=>{const s=Yl(i);t(s)})}Bn(e){return YT(e).get("targetGlobalKey").next(t=>(ye(t!==null),t))}Ln(e,t){return YT(e).put("targetGlobalKey",t)}kn(e,t){return ia(e).put(ZS(this.serializer,t))}qn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Eo(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ia(e).Z({range:i,index:"queryTargetsIndex"},(o,c,u)=>{const h=Yl(c);fu(t,h.target)&&(s=h,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=fs(e);return t.forEach(o=>{const c=Nn(o.path);i.push(s.put({targetId:r,path:c})),i.push(this.referenceDelegate.addReference(e,r,o))}),k.waitFor(i)}removeMatchingKeys(e,t,r){const i=fs(e);return k.forEach(t,s=>{const o=Nn(s.path);return k.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=fs(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=fs(e);let s=Le();return i.Z({range:r,Y:!0},(o,c,u)=>{const h=ti(o[1]),f=new ne(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){const r=Nn(t.path),i=IDBKeyRange.bound([r],[tS(r)],!1,!0);let s=0;return fs(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,c],u,h)=>{o!==0&&(s++,h.done())}).next(()=>s>0)}ct(e,t){return ia(e).get(t).next(r=>r?Yl(r):null)}}function ia(n){return on(n,"targets")}function YT(n){return on(n,"targetGlobal")}function fs(n){return on(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT([n,e],[t,r]){const i=ke(n,t);return i===0?ke(e,r):i}class KW{constructor(e){this.Qn=e,this.buffer=new mt(JT),this.Kn=0}$n(){return++this.Kn}Un(e){const t=[e,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();JT(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class HW{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Wn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return this.Wn!==null}Gn(e){G("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ms(t)?G("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Os(t)}await this.Gn(3e5)})}}class GW{constructor(e,t){this.zn=e,this.params=t}calculateTargetCount(e,t){return this.zn.jn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return k.resolve(qn.ae);const r=new KW(t);return this.zn.forEachTarget(e,i=>r.Un(i.sequenceNumber)).next(()=>this.zn.Hn(e,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(QT)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),QT):this.Jn(e,t))}getCacheSize(e){return this.zn.getCacheSize(e)}Jn(e,t){let r,i,s,o,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,t))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),k_()<=Ge.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function jW(n,e){return new GW(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QW{constructor(e,t){this.db=e,this.garbageCollector=jW(this,t)}jn(e){const t=this.Yn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Yn(e){let t=0;return this.Hn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Hn(e,t){return this.Zn(e,(r,i)=>t(i))}addReference(e,t,r){return Sh(e,r)}removeReference(e,t,r){return Sh(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Sh(e,t)}Xn(e,t){return function(i,s){let o=!1;return sC(i).X(c=>iC(i,c,s).next(u=>(u&&(o=!0),k.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Zn(e,(o,c)=>{if(c<=t){const u=this.Xn(e,o).next(h=>{if(!h)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,me.min()),fs(e).delete(function(p){return[0,Nn(p.path)]}(o))))});i.push(u)}}).next(()=>k.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Sh(e,t)}Zn(e,t){const r=fs(e);let i,s=qn.ae;return r.Z({index:"documentTargetsIndex"},([o,c],{path:u,sequenceNumber:h})=>{o===0?(s!==qn.ae&&t(new ne(ti(i)),s),s=h,i=u):s=qn.ae}).next(()=>{s!==qn.ae&&t(new ne(ti(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Sh(n,e){return fs(n).put(function(r,i){return{targetId:0,path:Nn(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.changes=new Vs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YW{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return js(e).put(r)}removeEntry(e,t,r){return js(e).delete(function(s,o){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Pd(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.er(e,r)))}getEntry(e,t){let r=kt.newInvalidDocument(t);return js(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Fl(t))},(i,s)=>{r=this.tr(t,s)}).next(()=>r)}nr(e,t){let r={size:0,document:kt.newInvalidDocument(t)};return js(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Fl(t))},(i,s)=>{r={document:this.tr(t,s),size:kd(s)}}).next(()=>r)}getEntries(e,t){let r=rr();return this.rr(e,t,(i,s)=>{const o=this.tr(i,s);r=r.insert(i,o)}).next(()=>r)}ir(e,t){let r=rr(),i=new Rt(ne.comparator);return this.rr(e,t,(s,o)=>{const c=this.tr(s,o);r=r.insert(s,c),i=i.insert(s,kd(o))}).next(()=>({documents:r,sr:i}))}rr(e,t,r){if(t.isEmpty())return k.resolve();let i=new mt(e0);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Fl(i.first()),Fl(i.last())),o=i.getIterator();let c=o.getNext();return js(e).Z({index:"documentKeyIndex",range:s},(u,h,f)=>{const p=ne.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&e0(c,p)<0;)r(c,null),c=o.getNext();c&&c.isEqual(p)&&(r(c,h),c=o.hasNext()?o.getNext():null),c?f.W(Fl(c)):f.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i){const s=t.path,o=[s.popLast().toArray(),s.lastSegment(),Pd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return js(e).G(IDBKeyRange.bound(o,c,!0)).next(u=>{let h=rr();for(const f of u){const p=this.tr(ne.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);p.isFoundDocument()&&(gu(t,p)||i.has(p.key))&&(h=h.insert(p.key,p))}return h})}getAllFromCollectionGroup(e,t,r,i){let s=rr();const o=ZT(t,r),c=ZT(t,ar.max());return js(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(u,h,f)=>{const p=this.tr(ne.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(p.key,p),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new JW(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return XT(e).get("remoteDocumentGlobalKey").next(t=>(ye(!!t),t))}er(e,t){return XT(e).put("remoteDocumentGlobalKey",t)}tr(e,t){if(t){const r=OW(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(me.min())))return r}return kt.newInvalidDocument(e)}}function aC(n){return new YW(n)}class JW extends oC{constructor(e,t){super(),this._r=e,this.trackRemovals=t,this.ar=new Vs(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new mt((s,o)=>ke(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const c=this.ar.get(s);if(t.push(this._r.removeEntry(e,s,c.readTime)),o.isValidDocument()){const u=UT(this._r.serializer,o);i=i.add(s.path.popLast());const h=kd(u);r+=h-c.size,t.push(this._r.addEntry(e,s,u))}else if(r-=c.size,this.trackRemovals){const u=UT(this._r.serializer,o.convertToNoDocument(me.min()));t.push(this._r.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this._r.indexManager.addToCollectionParentIndex(e,s))}),t.push(this._r.updateMetadata(e,r)),k.waitFor(t)}getFromCache(e,t){return this._r.nr(e,t).next(r=>(this.ar.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this._r.ir(e,t).next(({documents:r,sr:i})=>(i.forEach((s,o)=>{this.ar.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function XT(n){return on(n,"remoteDocumentGlobal")}function js(n){return on(n,"remoteDocumentsV14")}function Fl(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function ZT(n,e){const t=e.documentKey.path.toArray();return[n,Pd(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function e0(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=ke(t[s],r[s]),i)return i;return i=ke(t.length,r.length),i||(i=ke(t[t.length-2],r[r.length-2]),i||ke(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XW{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&lc(r.mutation,i,zn.empty(),bt.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Le()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Le()){const i=ni();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=jl();return s.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=ni();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Le()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,i){let s=rr();const o=ac(),c=function(){return ac()}();return t.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof zi)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),lc(f.mutation,h,f.mutation.getFieldMask(),bt.now())):o.set(h.key,zn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var p;return c.set(h,new XW(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const r=ac();let i=new Rt((o,c)=>o-c),s=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||zn.empty();f=c.applyToLocalView(h,f),r.set(u,f);const p=(i.get(c.batchId)||Le()).add(u);i=i.insert(c.batchId,p)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,p=PS();f.forEach(_=>{if(!s.has(_)){const I=VS(t.get(_),r.get(_));I!==null&&p.set(_,I),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(s){return ne.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nW(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):k.resolve(ni());let c=-1,u=s;return o.next(h=>k.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),s.get(f)?k.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Le())).next(f=>({batchId:c,changes:CS(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ne(t)).next(r=>{let i=jl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const i=t.collectionGroup;let s=jl();return this.indexManager.getCollectionParents(e,i).next(o=>k.forEach(o,c=>{const u=function(f,p){return new kf(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(h=>{h.forEach((f,p)=>{s=s.insert(f,p)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i))).next(s=>{i.forEach((c,u)=>{const h=u.getKey();s.get(h)===null&&(s=s.insert(h,kt.newInvalidDocument(h)))});let o=jl();return s.forEach((c,u)=>{const h=i.get(c);h!==void 0&&lc(h.mutation,u,zn.empty(),bt.now()),gu(t,u)&&(o=o.insert(c,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZW{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return k.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,function(i){return{id:i.id,version:i.version,createTime:On(i.createTime)}}(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,function(i){return{name:i.name,query:eC(i.bundledQuery),readTime:On(i.readTime)}}(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e9{constructor(){this.overlays=new Rt(ne.comparator),this.lr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ni();return k.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Pt(e,t,s)}),k.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const i=ni(),s=t.length+1,o=new ne(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return k.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Rt((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=ni(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=ni(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=i)););return k.resolve(c)}Pt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Py(t,r));let s=this.lr.get(t);s===void 0&&(s=Le(),this.lr.set(t,s)),this.lr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(){this.hr=new mt(Qt.Pr),this.Ir=new mt(Qt.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){const r=new Qt(e,t);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.dr(new Qt(e,t))}Ar(e,t){e.forEach(r=>this.removeReference(r,t))}Rr(e){const t=new ne(new ot([])),r=new Qt(t,e),i=new Qt(t,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const t=new ne(new ot([])),r=new Qt(t,e),i=new Qt(t,e+1);let s=Le();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Qt(e,0),r=this.hr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Qt{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return ne.comparator(e.key,t.key)||ke(e.gr,t.gr)}static Tr(e,t){return ke(e.gr,t.gr)||ne.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t9{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new mt(Qt.Pr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Sy(s,t,r,i);this.mutationQueue.push(o);for(const c of i)this.yr=this.yr.add(new Qt(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,t){return k.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Sr(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Qt(t,0),i=new Qt(t,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const c=this.wr(o.gr);s.push(c)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new mt(ke);return t.forEach(i=>{const s=new Qt(i,0),o=new Qt(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],c=>{r=r.add(c.gr)})}),k.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;ne.isDocumentKey(s)||(s=s.child(""));const o=new Qt(new ne(s),0);let c=new mt(ke);return this.yr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.gr)),!0)},o),k.resolve(this.br(c))}br(e){const t=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ye(this.Dr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return k.forEach(t.mutations,i=>{const s=new Qt(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,t){const r=new Qt(t,0),i=this.yr.firstAfterOrEqual(r);return k.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n9{constructor(e){this.vr=e,this.docs=function(){return new Rt(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():kt.newInvalidDocument(t))}getEntries(e,t){let r=rr();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():kt.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=rr();const o=t.path,c=new ne(o.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||yy(iS(f),r)<=0||(i.has(f.key)||gu(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,t,r,i){ce()}Cr(e,t){return k.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new r9(this)}getSize(e){return k.resolve(this.size)}}class r9 extends oC{constructor(e){super(),this._r=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),k.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i9{constructor(e){this.persistence=e,this.Fr=new Vs(t=>Eo(t),fu),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.Mr=0,this.Or=new My,this.targetCount=0,this.Nr=So.On()}forEachTarget(e,t){return this.Fr.forEach((r,i)=>t(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Mr&&(this.Mr=t),k.resolve()}kn(e){this.Fr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Nr=new So(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.kn(t),k.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Fr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.Fr.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.Or.Er(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.Or.Ar(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Or.mr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.Or.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,t){this.Br={},this.overlays={},this.Lr=new qn(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new i9(this),this.indexManager=new WW,this.remoteDocumentCache=function(i){return new n9(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new XS(t),this.Kr=new ZW(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new e9,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new t9(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);const i=new s9(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,t){return k.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class s9 extends oS{constructor(e){super(),this.currentSequenceNumber=e}}class Lf{constructor(e){this.persistence=e,this.Gr=new My,this.zr=null}static jr(e){return new Lf(e)}get Hr(){if(this.zr)return this.zr;throw ce()}addReference(e,t,r){return this.Gr.addReference(r,t),this.Hr.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Gr.removeReference(r,t),this.Hr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),k.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Hr,r=>{const i=ne.fromPath(r);return this.Jr(e,i).next(s=>{s||t.removeEntry(i,me.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(r=>{r?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){return 0}Jr(e,t){return k.or([()=>k.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o9{constructor(e){this.serializer=e}B(e,t,r,i){const s=new Pf("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",_T,{unique:!0}),u.createObjectStore("documentMutations")}(e),t0(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=k.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),t0(e)),o=o.next(()=>function(u){const h=u.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:me.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,h){return h.store("mutations").G().next(f=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",_T,{unique:!0});const p=h.store("mutations"),_=f.map(I=>p.put(I));return k.waitFor(_)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Zr(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.Xr(s)))),r<7&&i>=7&&(o=o.next(()=>this.ei(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ni(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const h=u.createObjectStore("documentOverlays",{keyPath:L$});h.createIndex("collectionPathOverlayIndex",F$,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",U$,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const h=u.createObjectStore("remoteDocumentsV14",{keyPath:R$});h.createIndex("documentKeyIndex",S$),h.createIndex("collectionGroupIndex",C$)}(e)).next(()=>this.ri(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ii(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:N$}).createIndex("sequenceNumberIndex",O$,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:M$}).createIndex("documentKeyIndex",V$,{unique:!1})}(e))),o}Xr(e){let t=0;return e.store("remoteDocuments").Z((r,i)=>{t+=kd(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Zr(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.G().next(i=>k.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(c=>k.forEach(c,u=>{ye(u.userId===s.userId);const h=to(this.serializer,u);return rC(e,s.userId,h).next(()=>{})}))}))}ei(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,c)=>{const u=new ot(o),h=function(p){return[0,Nn(p)]}(u);s.push(t.get(h).next(f=>f?k.resolve():(p=>t.put({targetId:0,path:Nn(p),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>k.waitFor(s))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:D$});const r=t.store("collectionParents"),i=new Oy,s=o=>{if(i.add(o)){const c=o.lastSegment(),u=o.popLast();return r.put({collectionId:c,parent:Nn(u)})}};return t.store("remoteDocuments").Z({Y:!0},(o,c)=>{const u=new ot(o);return s(u.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([o,c,u],h)=>{const f=ti(c);return s(f.popLast())}))}ni(e){const t=e.store("targets");return t.Z((r,i)=>{const s=Yl(i),o=ZS(this.serializer,s);return t.put(o)})}ri(e,t){const r=t.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const c=t.store("remoteDocumentsV14"),u=function(p){return p.document?new ne(ot.fromString(p.document.name).popFirst(5)):p.noDocument?ne.fromSegments(p.noDocument.path):p.unknownDocument?ne.fromSegments(p.unknownDocument.path):ce()}(o).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(h))}).next(()=>k.waitFor(i))}ii(e,t){const r=t.store("mutations"),i=aC(this.serializer),s=new cC(Lf.jr,this.serializer.lt);return r.G().next(o=>{const c=new Map;return o.forEach(u=>{var h;let f=(h=c.get(u.userId))!==null&&h!==void 0?h:Le();to(this.serializer,u).keys().forEach(p=>f=f.add(p)),c.set(u.userId,f)}),k.forEach(c,(u,h)=>{const f=new Yt(h),p=Mf.ht(this.serializer,f),_=s.getIndexManager(f),I=Vf.ht(f,this.serializer,_,s.referenceDelegate);return new lC(i,I,p,_).recalculateAndSaveOverlaysForDocumentKeys(new N_(t,qn.ae),u).next()})})}}function t0(n){n.createObjectStore("targetDocuments",{keyPath:x$}).createIndex("documentTargetsIndex",k$,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",P$,{unique:!0}),n.createObjectStore("targetGlobal")}const Wg="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Vy{constructor(e,t,r,i,s,o,c,u,h,f,p=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.si=s,this.window=o,this.document=c,this.oi=h,this._i=f,this.ai=p,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=_=>Promise.resolve(),!Vy.v())throw new ie(B.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new QW(this,i),this.Ii=t+"main",this.serializer=new XS(u),this.Ti=new Ni(this.Ii,this.ai,new o9(this.serializer)),this.qr=new zW(this.referenceDelegate,this.serializer),this.remoteDocumentCache=aC(this.serializer),this.Kr=new MW,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,f===!1&&Lt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ie(B.FAILED_PRECONDITION,Wg);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.qr.getHighestSequenceNumber(e))}).then(e=>{this.Lr=new qn(e,this.oi)}).then(()=>{this.kr=!0}).catch(e=>(this.Ti&&this.Ti.close(),Promise.reject(e)))}mi(e){return this.Pi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ti.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.di()}))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ch(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(t=>{t||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(e)).next(t=>this.isPrimary&&!t?this.pi(e).next(()=>!1):!!t&&this.yi(e).next(()=>!0))).catch(e=>{if(Ms(e))return G("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return G("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.Pi(e)),this.isPrimary=e})}fi(e){return Ul(e).get("owner").next(t=>k.resolve(this.wi(t)))}Si(e){return Ch(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=on(t,"clientMetadata");return r.G().next(i=>{const s=this.vi(i,18e5),o=i.filter(c=>s.indexOf(c)===-1);return k.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ei)for(const t of e)this.Ei.removeItem(this.Ci(t.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(e){return!!e&&e.ownerId===this.clientId}gi(e){return this._i?k.resolve(!0):Ul(e).get("owner").next(t=>{if(t!==null&&this.Di(t.leaseTimestampMs,5e3)&&!this.Fi(t.ownerId)){if(this.wi(t)&&this.networkEnabled)return!0;if(!this.wi(t)){if(!t.allowTabSynchronization)throw new ie(B.FAILED_PRECONDITION,Wg);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ch(e).G().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&G("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new N_(e,qn.ae);return this.pi(t).next(()=>this.Si(t))}),this.Ti.close(),this.Ni()}vi(e,t){return e.filter(r=>this.Di(r.updateTimeMs,t)&&!this.Fi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>Ch(e).G().next(t=>this.vi(t,18e5).map(r=>r.clientId)))}get started(){return this.kr}getMutationQueue(e,t){return Vf.ht(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new qW(e,this.serializer.lt.databaseId)}getDocumentOverlayCache(e){return Mf.ht(this.serializer,e)}getBundleCache(){return this.Kr}runTransaction(e,t,r){G("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===15?$$:u===14?hS:u===13?uS:u===12?B$:u===11?cS:void ce()}(this.ai);let o;return this.Ti.runTransaction(e,i,s,c=>(o=new N_(c,this.Lr?this.Lr.next():qn.ae),t==="readwrite-primary"?this.fi(o).next(u=>!!u||this.gi(o)).next(u=>{if(!u)throw Lt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new ie(B.FAILED_PRECONDITION,sS);return r(o)}).next(u=>this.yi(o).next(()=>u)):this.Li(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Li(e){return Ul(e).get("owner").next(t=>{if(t!==null&&this.Di(t.leaseTimestampMs,5e3)&&!this.Fi(t.ownerId)&&!this.wi(t)&&!(this._i||this.allowTabSynchronization&&t.allowTabSynchronization))throw new ie(B.FAILED_PRECONDITION,Wg)})}yi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ul(e).put("owner",t)}static v(){return Ni.v()}pi(e){const t=Ul(e);return t.get("owner").next(r=>this.wi(r)?(G("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):k.resolve())}Di(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Lt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ai(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Mi();const t=/(?:Version|Mobile)\/1[456]/;NF()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(e){var t;try{const r=((t=this.Ei)===null||t===void 0?void 0:t.getItem(this.Ci(e)))!==null;return G("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Lt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.Ci(this.clientId),String(Date.now()))}catch(e){Lt("Failed to set zombie client id.",e)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.Ci(this.clientId))}catch{}}Ci(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ul(n){return on(n,"owner")}function Ch(n){return on(n,"clientMetadata")}function uC(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ki=r,this.qi=i}static Qi(e,t){let r=Le(),i=Le();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ly(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(){this.Ki=!1}initialize(e,t){this.$i=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,r,i){return this.Ui(e,t).next(s=>s||this.Wi(e,t,i,r)).next(s=>s||this.Gi(e,t))}Ui(e,t){if(CT(t))return k.resolve(null);let r=Er(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=B_(t,null,"F"),r=Er(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Le(...s);return this.$i.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.zi(t,c);return this.ji(t,h,o,u.readTime)?this.Ui(e,B_(t,null,"F")):this.Hi(e,h,t,u)}))})))}Wi(e,t,r,i){return CT(t)||i.isEqual(me.min())?this.Gi(e,t):this.$i.getDocuments(e,r).next(s=>{const o=this.zi(t,s);return this.ji(t,o,r,i)?this.Gi(e,t):(k_()<=Ge.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$_(t)),this.Hi(e,o,t,rS(i,-1)))})}zi(e,t){let r=new mt(RS(e));return t.forEach((i,s)=>{gu(e,s)&&(r=r.add(s))}),r}ji(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,t){return k_()<=Ge.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",$_(t)),this.$i.getDocumentsMatchingQuery(e,t,ar.min())}Hi(e,t,r,i){return this.$i.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a9{constructor(e,t,r,i){this.persistence=e,this.Ji=t,this.serializer=i,this.Yi=new Rt(ke),this.Zi=new Vs(s=>Eo(s),fu),this.Xi=new Map,this.es=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.ts(r)}ts(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lC(this.es,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.es.setIndexManager(this.indexManager),this.Ji.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Yi))}}function dC(n,e,t,r){return new a9(n,e,t,r)}async function fC(n,e){const t=fe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.ts(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],c=[];let u=Le();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({ns:h,removedBatchIds:o,addedBatchIds:c}))})})}function l9(n,e){const t=fe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.es.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const p=h.batch,_=p.keys();let I=k.resolve();return _.forEach(A=>{I=I.next(()=>f.getEntry(u,A)).next(P=>{const x=h.docVersions.get(A);ye(x!==null),P.version.compareTo(x)<0&&(p.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),I.next(()=>c.mutationQueue.removeMutationBatch(u,p))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=Le();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function pC(n){const e=fe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.qr.getLastRemoteSnapshotVersion(t))}function c9(n,e){const t=fe(n),r=e.snapshotVersion;let i=t.Yi;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.es.newChangeBuffer({trackRemovals:!0});i=t.Yi;const c=[];e.targetChanges.forEach((f,p)=>{const _=i.get(p);if(!_)return;c.push(t.qr.removeMatchingKeys(s,f.removedDocuments,p).next(()=>t.qr.addMatchingKeys(s,f.addedDocuments,p)));let I=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(nn.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(p,I),function(P,x,V){return P.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(_,I,f)&&c.push(t.qr.updateTargetData(s,I))});let u=rr(),h=Le();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(u9(s,o,e.documentUpdates).next(f=>{u=f.rs,h=f.ss})),!r.isEqual(me.min())){const f=t.qr.getLastRemoteSnapshotVersion(s).next(p=>t.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return k.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.Yi=i,s))}function u9(n,e,t){let r=Le(),i=Le();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=rr();return t.forEach((c,u)=>{const h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(me.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):G("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{rs:o,ss:i}})}function h9(n,e){const t=fe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Dd(n,e){const t=fe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.qr.getTargetData(r,e).next(s=>s?(i=s,k.resolve(i)):t.qr.allocateTargetId(r).next(o=>(i=new Oi(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Yi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Yi=t.Yi.insert(r.targetId,r),t.Zi.set(e,r.targetId)),r})}async function Ba(n,e,t){const r=fe(n),i=r.Yi.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ms(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Yi=r.Yi.remove(e),r.Zi.delete(i.target)}function Q_(n,e,t){const r=fe(n);let i=me.min(),s=Le();return r.persistence.runTransaction("Execute query","readonly",o=>function(u,h,f){const p=fe(u),_=p.Zi.get(f);return _!==void 0?k.resolve(p.Yi.get(_)):p.qr.getTargetData(h,f)}(r,o,Er(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,c.targetId).next(u=>{s=u})}).next(()=>r.Ji.getDocumentsMatchingQuery(o,e,t?i:me.min(),t?s:Le())).next(c=>(mC(r,bS(e),c),{documents:c,os:s})))}function gC(n,e){const t=fe(n),r=fe(t.qr),i=t.Yi.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.ct(s,e).next(o=>o?o.target:null))}function _C(n,e){const t=fe(n),r=t.Xi.get(e)||me.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.es.getAllFromCollectionGroup(i,e,rS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(mC(t,e,i),i))}function mC(n,e,t){let r=n.Xi.get(e)||me.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Xi.set(e,r)}function n0(n,e){return`firestore_clients_${n}_${e}`}function r0(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function qg(n,e){return`firestore_targets_${n}_${e}`}class Nd{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static ls(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new ie(i.error.code,i.error.message))),o?new Nd(e,t,i.state,s):(Lt("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}hs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class cc{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static ls(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new ie(r.error.code,r.error.message))),s?new cc(e,r.state,i):(Lt("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Od{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ls(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Ay();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=aS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Od(e,s):(Lt("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Fy{constructor(e,t){this.clientId=e,this.onlineState=t}static ls(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Fy(t.clientId,t.onlineState):(Lt("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Y_{constructor(){this.activeTargetIds=Ay()}Ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}Is(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zg{constructor(e,t,r,i,s){this.window=e,this.si=t,this.persistenceKey=r,this.Ts=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Es=this.ds.bind(this),this.As=new Rt(ke),this.started=!1,this.Rs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Vs=n0(this.persistenceKey,this.Ts),this.fs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.As=this.As.insert(this.Ts,new Y_),this.gs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.ps=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.ys=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.ws=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Ss=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.Es)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Ts)continue;const i=this.getItem(n0(this.persistenceKey,r));if(i){const s=Od.ls(r,i);s&&(this.As=this.As.insert(s.clientId,s))}}this.bs();const t=this.storage.getItem(this.ws);if(t){const r=this.Ds(t);r&&this.vs(r)}for(const r of this.Rs)this.ds(r);this.Rs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.fs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Cs(this.As)}isActiveQueryTarget(e){let t=!1;return this.As.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Fs(e,"pending")}updateMutationState(e,t,r){this.Fs(e,t,r),this.Ms(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(qg(this.persistenceKey,e));if(r){const i=cc.ls(e,r);i&&(t=i.state)}}return this.xs.Ps(e),this.bs(),t}removeLocalQueryTarget(e){this.xs.Is(e),this.bs()}isLocalQueryTarget(e){return this.xs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(qg(this.persistenceKey,e))}updateQueryState(e,t,r){this.Os(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Ms(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Ns(e)}notifyBundleLoaded(e){this.Bs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Es),this.removeItem(this.Vs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return G("SharedClientState","READ",e,t),t}setItem(e,t){G("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){G("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ds(e){const t=e;if(t.storageArea===this.storage){if(G("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Vs)return void Lt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.gs.test(t.key)){if(t.newValue==null){const r=this.Ls(t.key);return this.ks(r,null)}{const r=this.qs(t.key,t.newValue);if(r)return this.ks(r.clientId,r)}}else if(this.ps.test(t.key)){if(t.newValue!==null){const r=this.Qs(t.key,t.newValue);if(r)return this.Ks(r)}}else if(this.ys.test(t.key)){if(t.newValue!==null){const r=this.$s(t.key,t.newValue);if(r)return this.Us(r)}}else if(t.key===this.ws){if(t.newValue!==null){const r=this.Ds(t.newValue);if(r)return this.vs(r)}}else if(t.key===this.fs){const r=function(s){let o=qn.ae;if(s!=null)try{const c=JSON.parse(s);ye(typeof c=="number"),o=c}catch(c){Lt("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);r!==qn.ae&&this.sequenceNumberHandler(r)}else if(t.key===this.Ss){const r=this.Ws(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Gs(i)))}}}else this.Rs.push(t)})}}get xs(){return this.As.get(this.Ts)}bs(){this.setItem(this.Vs,this.xs.hs())}Fs(e,t,r){const i=new Nd(this.currentUser,e,t,r),s=r0(this.persistenceKey,this.currentUser,e);this.setItem(s,i.hs())}Ms(e){const t=r0(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ns(e){const t={clientId:this.Ts,onlineState:e};this.storage.setItem(this.ws,JSON.stringify(t))}Os(e,t,r){const i=qg(this.persistenceKey,e),s=new cc(e,t,r);this.setItem(i,s.hs())}Bs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Ss,t)}Ls(e){const t=this.gs.exec(e);return t?t[1]:null}qs(e,t){const r=this.Ls(e);return Od.ls(r,t)}Qs(e,t){const r=this.ps.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Nd.ls(new Yt(s),i,t)}$s(e,t){const r=this.ys.exec(e),i=Number(r[1]);return cc.ls(i,t)}Ds(e){return Fy.ls(e)}Ws(e){return JSON.parse(e)}async Ks(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.zs(e.batchId,e.state,e.error);G("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Us(e){return this.syncEngine.js(e.targetId,e.state,e.error)}ks(e,t){const r=t?this.As.insert(e,t):this.As.remove(e),i=this.Cs(this.As),s=this.Cs(r),o=[],c=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||c.push(u)}),this.syncEngine.Hs(o,c).then(()=>{this.As=r})}vs(e){this.As.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Cs(e){let t=Ay();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class yC{constructor(){this.Js=new Y_,this.Ys={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Js.Ps(e),this.Ys[e]||"not-current"}updateQueryState(e,t,r){this.Ys[e]=t}removeLocalQueryTarget(e){this.Js.Is(e)}isLocalQueryTarget(e){return this.Js.activeTargetIds.has(e)}clearQueryState(e){delete this.Ys[e]}getAllActiveQueryTargets(){return this.Js.activeTargetIds}isActiveQueryTarget(e){return this.Js.activeTargetIds.has(e)}start(){return this.Js=new Y_,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d9{Zs(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.Xs=()=>this.eo(),this.no=()=>this.ro(),this.io=[],this.so()}Zs(e){this.io.push(e)}shutdown(){window.removeEventListener("online",this.Xs),window.removeEventListener("offline",this.no)}so(){window.addEventListener("online",this.Xs),window.addEventListener("offline",this.no)}eo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.io)e(0)}ro(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.io)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ph=null;function Kg(){return Ph===null?Ph=function(){return 268435456+Math.round(2147483648*Math.random())}():Ph++,"0x"+Ph.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f9={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p9{constructor(e){this.oo=e.oo,this._o=e._o}ao(e){this.uo=e}co(e){this.lo=e}onMessage(e){this.ho=e}close(){this._o()}send(e){this.oo(e)}Po(){this.uo()}Io(e){this.lo(e)}To(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="WebChannelConnection";class g9 extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Eo=r+"://"+t.host,this.Ao=`projects/${i}/databases/${s}`,this.Ro=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Vo(){return!1}mo(t,r,i,s,o){const c=Kg(),u=this.fo(t,r);G("RestConnection",`Sending RPC '${t}' ${c}:`,u,i);const h={"google-cloud-resource-prefix":this.Ao,"x-goog-request-params":this.Ro};return this.po(h,s,o),this.yo(t,u,h,i).then(f=>(G("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw Oa("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",u,"request:",i),f})}wo(t,r,i,s,o,c){return this.mo(t,r,i,s,o)}po(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+il}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}fo(t,r){const i=f9[t];return`${this.Eo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}yo(e,t,r,i){const s=Kg();return new Promise((o,c)=>{const u=new l$;u.setWithCredentials(!0),u.listenOnce(s$.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Bg.NO_ERROR:const f=u.getResponseJson();G(yn,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Bg.TIMEOUT:G(yn,`RPC '${e}' ${s} timed out`),c(new ie(B.DEADLINE_EXCEEDED,"Request time out"));break;case Bg.HTTP_ERROR:const p=u.getStatus();if(G(yn,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const I=_==null?void 0:_.error;if(I&&I.status&&I.message){const A=function(x){const V=x.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(V)>=0?V:B.UNKNOWN}(I.status);c(new ie(A,I.message))}else c(new ie(B.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ie(B.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{G(yn,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);G(yn,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",h,r,15)})}So(e,t,r){const i=Kg(),s=[this.Eo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=r$(),c=i$(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.xmlHttpFactory=new a$({})),this.po(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");G(yn,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let _=!1,I=!1;const A=new p9({oo:x=>{I?G(yn,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(_||(G(yn,`Opening RPC '${e}' stream ${i} transport.`),p.open(),_=!0),G(yn,`RPC '${e}' stream ${i} sending:`,x),p.send(x))},_o:()=>p.close()}),P=(x,V,W)=>{x.listen(V,K=>{try{W(K)}catch(N){setTimeout(()=>{throw N},0)}})};return P(p,Eh.EventType.OPEN,()=>{I||G(yn,`RPC '${e}' stream ${i} transport opened.`)}),P(p,Eh.EventType.CLOSE,()=>{I||(I=!0,G(yn,`RPC '${e}' stream ${i} transport closed`),A.Io())}),P(p,Eh.EventType.ERROR,x=>{I||(I=!0,Oa(yn,`RPC '${e}' stream ${i} transport errored:`,x),A.Io(new ie(B.UNAVAILABLE,"The operation could not be completed")))}),P(p,Eh.EventType.MESSAGE,x=>{var V;if(!I){const W=x.data[0];ye(!!W);const K=W,N=K.error||((V=K[0])===null||V===void 0?void 0:V.error);if(N){G(yn,`RPC '${e}' stream ${i} received error:`,N);const j=N.status;let se=function(Te){const Re=Ut[Te];if(Re!==void 0)return US(Re)}(j),ue=N.message;se===void 0&&(se=B.INTERNAL,ue="Unknown error status: "+j+" with message "+N.message),I=!0,A.Io(new ie(se,ue)),p.close()}else G(yn,`RPC '${e}' stream ${i} received:`,W),A.To(W)}}),P(c,o$.STAT_EVENT,x=>{x.stat===dT.PROXY?G(yn,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===dT.NOPROXY&&G(yn,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.Po()},0),A}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(){return typeof window<"u"?window:null}function Zh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(n){return new AW(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,t,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=t,this.bo=r,this.Do=i,this.vo=s,this.Co=0,this.Fo=null,this.Mo=Date.now(),this.reset()}reset(){this.Co=0}xo(){this.Co=this.vo}Oo(e){this.cancel();const t=Math.floor(this.Co+this.No()),r=Math.max(0,Date.now()-this.Mo),i=Math.max(0,t-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Co} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Fo=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Mo=Date.now(),e())),this.Co*=this.Do,this.Co<this.bo&&(this.Co=this.bo),this.Co>this.vo&&(this.Co=this.vo)}Bo(){this.Fo!==null&&(this.Fo.skipDelay(),this.Fo=null)}cancel(){this.Fo!==null&&(this.Fo.cancel(),this.Fo=null)}No(){return(Math.random()-.5)*this.Co}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,t,r,i,s,o,c,u){this.si=e,this.Lo=r,this.ko=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.qo=0,this.Qo=null,this.Ko=null,this.stream=null,this.$o=new IC(e,t)}Uo(){return this.state===1||this.state===5||this.Wo()}Wo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}zo(){this.state=0,this.$o.reset()}jo(){this.Wo()&&this.Qo===null&&(this.Qo=this.si.enqueueAfterDelay(this.Lo,6e4,()=>this.Ho()))}Jo(e){this.Yo(),this.stream.send(e)}async Ho(){if(this.Wo())return this.close(0)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}async close(e,t){this.Yo(),this.Zo(),this.$o.cancel(),this.qo++,e!==4?this.$o.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(Lt(t.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.$o.xo()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Xo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(t)}Xo(){}auth(){this.state=1;const e=this.e_(this.qo),t=this.qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.qo===t&&this.t_(r,i)},r=>{e(()=>{const i=new ie(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.n_(i)})})}t_(e,t){const r=this.e_(this.qo);this.stream=this.r_(e,t),this.stream.ao(()=>{r(()=>(this.state=2,this.Ko=this.si.enqueueAfterDelay(this.ko,1e4,()=>(this.Wo()&&(this.state=3),Promise.resolve())),this.listener.ao()))}),this.stream.co(i=>{r(()=>this.n_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.$o.Oo(async()=>{this.state=0,this.start()})}n_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}e_(e){return t=>{this.si.enqueueAndForget(()=>this.qo===e?t():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _9 extends wC{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}r_(e,t){return this.connection.So("Listen",e,t)}onMessage(e){this.$o.reset();const t=SW(this.serializer,e),r=function(s){if(!("targetChange"in s))return me.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?me.min():o.readTime?On(o.readTime):me.min()}(e);return this.listener.i_(t,r)}s_(e){const t={};t.database=z_(this.serializer),t.addTarget=function(s,o){let c;const u=o.target;if(c=bd(u)?{documents:HS(s,u)}:{query:GS(s,u)},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=WS(s,o.resumeToken);const h=W_(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(me.min())>0){c.readTime=Ua(s,o.snapshotVersion.toTimestamp());const h=W_(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=PW(this.serializer,e);r&&(t.labels=r),this.Jo(t)}o_(e){const t={};t.database=z_(this.serializer),t.removeTarget=e,this.Jo(t)}}class m9 extends wC{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.__=!1}get a_(){return this.__}start(){this.__=!1,this.lastStreamToken=void 0,super.start()}Xo(){this.__&&this.u_([])}r_(e,t){return this.connection.So("Write",e,t)}onMessage(e){if(ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.__){this.$o.reset();const t=CW(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.c_(r,t)}return ye(!e.writeResults||e.writeResults.length===0),this.__=!0,this.listener.l_()}h_(){const e={};e.database=z_(this.serializer),this.Jo(e)}u_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Cd(this.serializer,r))};this.Jo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y9 extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.P_=!1}I_(){if(this.P_)throw new ie(B.FAILED_PRECONDITION,"The client has already been terminated.")}mo(e,t,r){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.mo(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(B.UNKNOWN,i.toString())})}wo(e,t,r,i){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.wo(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ie(B.UNKNOWN,s.toString())})}terminate(){this.P_=!0}}class v9{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.E_=0,this.d_=null,this.A_=!0}R_(){this.E_===0&&(this.V_("Unknown"),this.d_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.d_=null,this.m_("Backend didn't respond within 10 seconds."),this.V_("Offline"),Promise.resolve())))}f_(e){this.state==="Online"?this.V_("Unknown"):(this.E_++,this.E_>=1&&(this.g_(),this.m_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.V_("Offline")))}set(e){this.g_(),this.E_=0,e==="Online"&&(this.A_=!1),this.V_(e)}V_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}m_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.A_?(Lt(t),this.A_=!1):G("OnlineStateTracker",t)}g_(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I9{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.p_=[],this.y_=new Map,this.w_=new Set,this.S_=[],this.b_=s,this.b_.Zs(o=>{r.enqueueAndForget(async()=>{Oo(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=fe(u);h.w_.add(4),await yu(h),h.D_.set("Unknown"),h.w_.delete(4),await Uf(h)}(this))})}),this.D_=new v9(r,i)}}async function Uf(n){if(Oo(n))for(const e of n.S_)await e(!0)}async function yu(n){for(const e of n.S_)await e(!1)}function Bf(n,e){const t=fe(n);t.y_.has(e.targetId)||(t.y_.set(e.targetId,e),$y(t)?By(t):al(t).Wo()&&Uy(t,e))}function Fc(n,e){const t=fe(n),r=al(t);t.y_.delete(e),r.Wo()&&EC(t,e),t.y_.size===0&&(r.Wo()?r.jo():Oo(t)&&t.D_.set("Unknown"))}function Uy(n,e){if(n.v_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}al(n).s_(e)}function EC(n,e){n.v_.Le(e),al(n).o_(e)}function By(n){n.v_=new IW({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ct:e=>n.y_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),al(n).start(),n.D_.R_()}function $y(n){return Oo(n)&&!al(n).Uo()&&n.y_.size>0}function Oo(n){return fe(n).w_.size===0}function TC(n){n.v_=void 0}async function w9(n){n.y_.forEach((e,t)=>{Uy(n,e)})}async function E9(n,e){TC(n),$y(n)?(n.D_.f_(e),By(n)):n.D_.set("Unknown")}async function T9(n,e,t){if(n.D_.set("Online"),e instanceof $S&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const c of s.targetIds)i.y_.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.y_.delete(c),i.v_.removeTarget(c))}(n,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Md(n,r)}else if(e instanceof Xh?n.v_.Ge(e):e instanceof BS?n.v_.Xe(e):n.v_.He(e),!t.isEqual(me.min()))try{const r=await pC(n.localStore);t.compareTo(r)>=0&&await function(s,o){const c=s.v_.ot(o);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.y_.get(h);f&&s.y_.set(h,f.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,h)=>{const f=s.y_.get(u);if(!f)return;s.y_.set(u,f.withResumeToken(nn.EMPTY_BYTE_STRING,f.snapshotVersion)),EC(s,u);const p=new Oi(f.target,u,h,f.sequenceNumber);Uy(s,p)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Md(n,r)}}async function Md(n,e,t){if(!Ms(e))throw e;n.w_.add(1),await yu(n),n.D_.set("Offline"),t||(t=()=>pC(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await t(),n.w_.delete(1),await Uf(n)})}function AC(n,e){return e().catch(t=>Md(n,t,e))}async function ol(n){const e=fe(n),t=Ss(e);let r=e.p_.length>0?e.p_[e.p_.length-1].batchId:-1;for(;A9(e);)try{const i=await h9(e.localStore,r);if(i===null){e.p_.length===0&&t.jo();break}r=i.batchId,b9(e,i)}catch(i){await Md(e,i)}bC(e)&&RC(e)}function A9(n){return Oo(n)&&n.p_.length<10}function b9(n,e){n.p_.push(e);const t=Ss(n);t.Wo()&&t.a_&&t.u_(e.mutations)}function bC(n){return Oo(n)&&!Ss(n).Uo()&&n.p_.length>0}function RC(n){Ss(n).start()}async function R9(n){Ss(n).h_()}async function S9(n){const e=Ss(n);for(const t of n.p_)e.u_(t.mutations)}async function C9(n,e,t){const r=n.p_.shift(),i=Cy.from(r,e,t);await AC(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ol(n)}async function P9(n,e){e&&Ss(n).a_&&await async function(r,i){if(function(o){return mW(o)&&o!==B.ABORTED}(i.code)){const s=r.p_.shift();Ss(r).zo(),await AC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ol(r)}}(n,e),bC(n)&&RC(n)}async function s0(n,e){const t=fe(n);t.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=Oo(t);t.w_.add(3),await yu(t),r&&t.D_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.w_.delete(3),await Uf(t)}async function J_(n,e){const t=fe(n);e?(t.w_.delete(2),await Uf(t)):e||(t.w_.add(2),await yu(t),t.D_.set("Unknown"))}function al(n){return n.C_||(n.C_=function(t,r,i){const s=fe(t);return s.I_(),new _9(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ao:w9.bind(null,n),co:E9.bind(null,n),i_:T9.bind(null,n)}),n.S_.push(async e=>{e?(n.C_.zo(),$y(n)?By(n):n.D_.set("Unknown")):(await n.C_.stop(),TC(n))})),n.C_}function Ss(n){return n.F_||(n.F_=function(t,r,i){const s=fe(t);return s.I_(),new m9(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ao:R9.bind(null,n),co:P9.bind(null,n),l_:S9.bind(null,n),c_:C9.bind(null,n)}),n.S_.push(async e=>{e?(n.F_.zo(),await ol(n)):(await n.F_.stop(),n.p_.length>0&&(G("RemoteStore",`Stopping write stream with ${n.p_.length} pending writes`),n.p_=[]))})),n.F_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,c=new Wy(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qy(n,e){if(Lt("AsyncQueue",`${e}: ${n}`),Ms(n))return new ie(B.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e){this.comparator=e?(t,r)=>e(t,r)||ne.comparator(t.key,r.key):(t,r)=>ne.comparator(t.key,r.key),this.keyedMap=jl(),this.sortedSet=new Rt(this.comparator)}static emptySet(e){return new Ea(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ea)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ea;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(){this.M_=new Rt(ne.comparator)}track(e){const t=e.doc.key,r=this.M_.get(t);r?e.type!==0&&r.type===3?this.M_=this.M_.insert(t,e):e.type===3&&r.type!==1?this.M_=this.M_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.M_=this.M_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.M_=this.M_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.M_=this.M_.remove(t):e.type===1&&r.type===2?this.M_=this.M_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.M_=this.M_.insert(t,{type:2,doc:e.doc}):ce():this.M_=this.M_.insert(t,e)}x_(){const e=[];return this.M_.inorderTraversal((t,r)=>{e.push(r)}),e}}class $a{constructor(e,t,r,i,s,o,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new $a(e,t,Ea.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Df(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x9{constructor(){this.O_=void 0,this.listeners=[]}}class k9{constructor(){this.queries=new Vs(e=>AS(e),Df),this.onlineState="Unknown",this.N_=new Set}}async function SC(n,e){const t=fe(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new x9),i)try{s.O_=await t.onListen(r)}catch(o){const c=qy(o,`Initialization of query '${$_(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,s),s.listeners.push(e),e.B_(t.onlineState),s.O_&&e.L_(s.O_)&&zy(t)}async function CC(n,e){const t=fe(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function D9(n,e){const t=fe(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.listeners)c.L_(i)&&(r=!0);o.O_=i}}r&&zy(t)}function N9(n,e,t){const r=fe(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function zy(n){n.N_.forEach(e=>{e.next()})}class PC{constructor(e,t,r){this.query=e,this.k_=t,this.q_=!1,this.Q_=null,this.onlineState="Unknown",this.options=r||{}}L_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $a(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.q_?this.K_(e)&&(this.k_.next(e),t=!0):this.U_(e,this.onlineState)&&(this.W_(e),t=!0),this.Q_=e,t}onError(e){this.k_.error(e)}B_(e){this.onlineState=e;let t=!1;return this.Q_&&!this.q_&&this.U_(this.Q_,e)&&(this.W_(this.Q_),t=!0),t}U_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.G_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}K_(e){if(e.docChanges.length>0)return!0;const t=this.Q_&&this.Q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}W_(e){e=$a.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.q_=!0,this.k_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.key=e}}class kC{constructor(e){this.key=e}}class O9{constructor(e,t){this.query=e,this.ea=t,this.ta=null,this.hasCachedResults=!1,this.current=!1,this.na=Le(),this.mutatedKeys=Le(),this.ra=RS(e),this.ia=new Ea(this.ra)}get sa(){return this.ea}oa(e,t){const r=t?t._a:new o0,i=t?t.ia:this.ia;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const _=i.get(f),I=gu(this.query,p)?p:null,A=!!_&&this.mutatedKeys.has(_.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let x=!1;_&&I?_.data.isEqual(I.data)?A!==P&&(r.track({type:3,doc:I}),x=!0):this.aa(_,I)||(r.track({type:2,doc:I}),x=!0,(u&&this.ra(I,u)>0||h&&this.ra(I,h)<0)&&(c=!0)):!_&&I?(r.track({type:0,doc:I}),x=!0):_&&!I&&(r.track({type:1,doc:_}),x=!0,(u||h)&&(c=!0)),x&&(I?(o=o.add(I),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{ia:o,_a:r,ji:c,mutatedKeys:s}}aa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const i=this.ia;this.ia=e.ia,this.mutatedKeys=e.mutatedKeys;const s=e._a.x_();s.sort((h,f)=>function(_,I){const A=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return A(_)-A(I)}(h.type,f.type)||this.ra(h.doc,f.doc)),this.ua(r);const o=t?this.ca():[],c=this.na.size===0&&this.current?1:0,u=c!==this.ta;return this.ta=c,s.length!==0||u?{snapshot:new $a(this.query,e.ia,i,s,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),la:o}:{la:o}}B_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ia:this.ia,_a:new o0,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{la:[]}}ha(e){return!this.ea.has(e)&&!!this.ia.has(e)&&!this.ia.get(e).hasLocalMutations}ua(e){e&&(e.addedDocuments.forEach(t=>this.ea=this.ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.ea=this.ea.delete(t)),this.current=e.current)}ca(){if(!this.current)return[];const e=this.na;this.na=Le(),this.ia.forEach(r=>{this.ha(r.key)&&(this.na=this.na.add(r.key))});const t=[];return e.forEach(r=>{this.na.has(r)||t.push(new kC(r))}),this.na.forEach(r=>{e.has(r)||t.push(new xC(r))}),t}Pa(e){this.ea=e.os,this.na=Le();const t=this.oa(e.documents);return this.applyChanges(t,!0)}Ia(){return $a.fromInitialDocuments(this.query,this.ia,this.mutatedKeys,this.ta===0,this.hasCachedResults)}}class M9{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class V9{constructor(e){this.key=e,this.Ta=!1}}class L9{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ea={},this.da=new Vs(c=>AS(c),Df),this.Aa=new Map,this.Ra=new Set,this.Va=new Rt(ne.comparator),this.ma=new Map,this.fa=new My,this.ga={},this.pa=new Map,this.ya=So.Nn(),this.onlineState="Unknown",this.wa=void 0}get isPrimaryClient(){return this.wa===!0}}async function F9(n,e){const t=Qy(n);let r,i;const s=t.da.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.Ia();else{const o=await Dd(t.localStore,Er(e)),c=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Ky(t,e,r,c==="current",o.resumeToken),t.isPrimaryClient&&Bf(t.remoteStore,o)}return i}async function Ky(n,e,t,r,i){n.Sa=(p,_,I)=>async function(P,x,V,W){let K=x.view.oa(V);K.ji&&(K=await Q_(P.localStore,x.query,!1).then(({documents:se})=>x.view.oa(se,K)));const N=W&&W.targetChanges.get(x.targetId),j=x.view.applyChanges(K,P.isPrimaryClient,N);return X_(P,x.targetId,j.la),j.snapshot}(n,p,_,I);const s=await Q_(n.localStore,e,!0),o=new O9(e,s.os),c=o.oa(s.documents),u=mu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=o.applyChanges(c,n.isPrimaryClient,u);X_(n,t,h.la);const f=new M9(e,t,o);return n.da.set(e,f),n.Aa.has(t)?n.Aa.get(t).push(e):n.Aa.set(t,[e]),h.snapshot}async function U9(n,e){const t=fe(n),r=t.da.get(e),i=t.Aa.get(r.targetId);if(i.length>1)return t.Aa.set(r.targetId,i.filter(s=>!Df(s,e))),void t.da.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Ba(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Fc(t.remoteStore,r.targetId),Wa(t,r.targetId)}).catch(Os)):(Wa(t,r.targetId),await Ba(t.localStore,r.targetId,!0))}async function B9(n,e,t){const r=Yy(n);try{const i=await function(o,c){const u=fe(o),h=bt.now(),f=c.reduce((I,A)=>I.add(A.key),Le());let p,_;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let A=rr(),P=Le();return u.es.getEntries(I,f).next(x=>{A=x,A.forEach((V,W)=>{W.isValidDocument()||(P=P.add(V))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,A)).next(x=>{p=x;const V=[];for(const W of c){const K=gW(W,p.get(W.key).overlayedDocument);K!=null&&V.push(new zi(W.key,K,gS(K.value.mapValue),Kn.exists(!0)))}return u.mutationQueue.addMutationBatch(I,h,V,c)}).next(x=>{_=x;const V=x.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(I,x.batchId,V)})}).then(()=>({batchId:_.batchId,changes:CS(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,c,u){let h=o.ga[o.currentUser.toKey()];h||(h=new Rt(ke)),h=h.insert(c,u),o.ga[o.currentUser.toKey()]=h}(r,i.batchId,t),await Ls(r,i.changes),await ol(r.remoteStore)}catch(i){const s=qy(i,"Failed to persist write");t.reject(s)}}async function DC(n,e){const t=fe(n);try{const r=await c9(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.ma.get(s);o&&(ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ta=!0:i.modifiedDocuments.size>0?ye(o.Ta):i.removedDocuments.size>0&&(ye(o.Ta),o.Ta=!1))}),await Ls(t,r,e)}catch(r){await Os(r)}}function a0(n,e,t){const r=fe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.da.forEach((s,o)=>{const c=o.view.B_(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const u=fe(o);u.onlineState=c;let h=!1;u.queries.forEach((f,p)=>{for(const _ of p.listeners)_.B_(c)&&(h=!0)}),h&&zy(u)}(r.eventManager,e),i.length&&r.Ea.i_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $9(n,e,t){const r=fe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.ma.get(e),s=i&&i.key;if(s){let o=new Rt(ne.comparator);o=o.insert(s,kt.newNoDocument(s,me.min()));const c=Le().add(s),u=new _u(me.min(),new Map,new Rt(ke),o,c);await DC(r,u),r.Va=r.Va.remove(s),r.ma.delete(e),jy(r)}else await Ba(r.localStore,e,!1).then(()=>Wa(r,e,t)).catch(Os)}async function W9(n,e){const t=fe(n),r=e.batch.batchId;try{const i=await l9(t.localStore,e);Gy(t,r,null),Hy(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ls(t,i)}catch(i){await Os(i)}}async function q9(n,e,t){const r=fe(n);try{const i=await function(o,c){const u=fe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(p=>(ye(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Gy(r,e,t),Hy(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ls(r,i)}catch(i){await Os(i)}}function Hy(n,e){(n.pa.get(e)||[]).forEach(t=>{t.resolve()}),n.pa.delete(e)}function Gy(n,e,t){const r=fe(n);let i=r.ga[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.ga[r.currentUser.toKey()]=i}}function Wa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Aa.get(e))n.da.delete(r),t&&n.Ea.ba(r,t);n.Aa.delete(e),n.isPrimaryClient&&n.fa.Rr(e).forEach(r=>{n.fa.containsKey(r)||NC(n,r)})}function NC(n,e){n.Ra.delete(e.path.canonicalString());const t=n.Va.get(e);t!==null&&(Fc(n.remoteStore,t),n.Va=n.Va.remove(e),n.ma.delete(t),jy(n))}function X_(n,e,t){for(const r of t)r instanceof xC?(n.fa.addReference(r.key,e),z9(n,r)):r instanceof kC?(G("SyncEngine","Document no longer in limbo: "+r.key),n.fa.removeReference(r.key,e),n.fa.containsKey(r.key)||NC(n,r.key)):ce()}function z9(n,e){const t=e.key,r=t.path.canonicalString();n.Va.get(t)||n.Ra.has(r)||(G("SyncEngine","New document in limbo: "+t),n.Ra.add(r),jy(n))}function jy(n){for(;n.Ra.size>0&&n.Va.size<n.maxConcurrentLimboResolutions;){const e=n.Ra.values().next().value;n.Ra.delete(e);const t=new ne(ot.fromString(e)),r=n.ya.next();n.ma.set(r,new V9(t)),n.Va=n.Va.insert(t,r),Bf(n.remoteStore,new Oi(Er(pu(t.path)),r,"TargetPurposeLimboResolution",qn.ae))}}async function Ls(n,e,t){const r=fe(n),i=[],s=[],o=[];r.da.isEmpty()||(r.da.forEach((c,u)=>{o.push(r.Sa(u,e,t).then(h=>{if((h||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,h!=null&&h.fromCache?"not-current":"current"),h){i.push(h);const f=Ly.Qi(u.targetId,h);s.push(f)}}))}),await Promise.all(o),r.Ea.i_(i),await async function(u,h){const f=fe(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>k.forEach(h,_=>k.forEach(_.ki,I=>f.persistence.referenceDelegate.addReference(p,_.targetId,I)).next(()=>k.forEach(_.qi,I=>f.persistence.referenceDelegate.removeReference(p,_.targetId,I)))))}catch(p){if(!Ms(p))throw p;G("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const I=f.Yi.get(_),A=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(A);f.Yi=f.Yi.insert(_,P)}}}(r.localStore,s))}async function K9(n,e){const t=fe(n);if(!t.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await fC(t.localStore,e);t.currentUser=e,function(s,o){s.pa.forEach(c=>{c.forEach(u=>{u.reject(new ie(B.CANCELLED,o))})}),s.pa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ls(t,r.ns)}}function H9(n,e){const t=fe(n),r=t.ma.get(e);if(r&&r.Ta)return Le().add(r.key);{let i=Le();const s=t.Aa.get(e);if(!s)return i;for(const o of s){const c=t.da.get(o);i=i.unionWith(c.view.sa)}return i}}async function G9(n,e){const t=fe(n),r=await Q_(t.localStore,e.query,!0),i=e.view.Pa(r);return t.isPrimaryClient&&X_(t,e.targetId,i.la),i}async function j9(n,e){const t=fe(n);return _C(t.localStore,e).then(r=>Ls(t,r))}async function Q9(n,e,t,r){const i=fe(n),s=await function(c,u){const h=fe(c),f=fe(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",p=>f.vn(p,u).next(_=>_?h.localDocuments.getDocuments(p,_):k.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await ol(i.remoteStore):t==="acknowledged"||t==="rejected"?(Gy(i,e,r||null),Hy(i,e),function(c,u){fe(fe(c).mutationQueue).Fn(u)}(i.localStore,e)):ce(),await Ls(i,s)):G("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Y9(n,e){const t=fe(n);if(Qy(t),Yy(t),e===!0&&t.wa!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await l0(t,r.toArray());t.wa=!0,await J_(t.remoteStore,!0);for(const s of i)Bf(t.remoteStore,s)}else if(e===!1&&t.wa!==!1){const r=[];let i=Promise.resolve();t.Aa.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Wa(t,o),Ba(t.localStore,o,!0))),Fc(t.remoteStore,o)}),await i,await l0(t,r),function(o){const c=fe(o);c.ma.forEach((u,h)=>{Fc(c.remoteStore,h)}),c.fa.Vr(),c.ma=new Map,c.Va=new Rt(ne.comparator)}(t),t.wa=!1,await J_(t.remoteStore,!1)}}async function l0(n,e,t){const r=fe(n),i=[],s=[];for(const o of e){let c;const u=r.Aa.get(o);if(u&&u.length!==0){c=await Dd(r.localStore,Er(u[0]));for(const h of u){const f=r.da.get(h),p=await G9(r,f);p.snapshot&&s.push(p.snapshot)}}else{const h=await gC(r.localStore,o);c=await Dd(r.localStore,h),await Ky(r,OC(h),o,!1,c.resumeToken)}i.push(c)}return r.Ea.i_(s),i}function OC(n){return TS(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function J9(n){return function(t){return fe(fe(t).persistence).Bi()}(fe(n).localStore)}async function X9(n,e,t,r){const i=fe(n);if(i.wa)return void G("SyncEngine","Ignoring unexpected query state notification.");const s=i.Aa.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await _C(i.localStore,bS(s[0])),c=_u.createSynthesizedRemoteEventForCurrentChange(e,t==="current",nn.EMPTY_BYTE_STRING);await Ls(i,o,c);break}case"rejected":await Ba(i.localStore,e,!0),Wa(i,e,r);break;default:ce()}}async function Z9(n,e,t){const r=Qy(n);if(r.wa){for(const i of e){if(r.Aa.has(i)){G("SyncEngine","Adding an already active target "+i);continue}const s=await gC(r.localStore,i),o=await Dd(r.localStore,s);await Ky(r,OC(s),o.targetId,!1,o.resumeToken),Bf(r.remoteStore,o)}for(const i of t)r.Aa.has(i)&&await Ba(r.localStore,i,!1).then(()=>{Fc(r.remoteStore,i),Wa(r,i)}).catch(Os)}}function Qy(n){const e=fe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=DC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=H9.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$9.bind(null,e),e.Ea.i_=D9.bind(null,e.eventManager),e.Ea.ba=N9.bind(null,e.eventManager),e}function Yy(n){const e=fe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=W9.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=q9.bind(null,e),e}class Z_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ff(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return dC(this.persistence,new hC,e.initialUser,this.serializer)}createPersistence(e){return new cC(Lf.jr,this.serializer)}createSharedClientState(e){return new yC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class MC extends Z_{constructor(e,t,r){super(),this.va=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.va.initialize(this,e),await Yy(this.va.syncEngine),await ol(this.va.remoteStore),await this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return dC(this.persistence,new hC,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new HW(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new T$(t,this.persistence);return new E$(e.asyncQueue,r)}createPersistence(e){const t=uC(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Wn.withCacheSize(this.cacheSizeBytes):Wn.DEFAULT;return new Vy(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,vC(),Zh(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new yC}}class eq extends MC{constructor(e,t){super(e,t,!1),this.va=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.va.syncEngine;this.sharedClientState instanceof zg&&(this.sharedClientState.syncEngine={zs:Q9.bind(null,t),js:X9.bind(null,t),Hs:Z9.bind(null,t),Bi:J9.bind(null,t),Gs:j9.bind(null,t)},await this.sharedClientState.start()),await this.persistence.mi(async r=>{await Y9(this.va.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=vC();if(!zg.v(t))throw new ie(B.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=uC(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new zg(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Jy{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>a0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=K9.bind(null,this.syncEngine),await J_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new k9}()}createDatastore(e){const t=Ff(e.databaseInfo.databaseId),r=function(s){return new g9(s)}(e.databaseInfo);return function(s,o,c,u){return new y9(s,o,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,c){return new I9(r,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>a0(this.syncEngine,t,0),function(){return i0.v()?new i0:new d9}())}createSyncEngine(e,t){return function(i,s,o,c,u,h,f){const p=new L9(i,s,o,c,u,h);return f&&(p.wa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=fe(t);G("RemoteStore","RemoteStore shutting down."),r.w_.add(5),await yu(r),r.b_.shutdown(),r.D_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ca(this.observer.next,e)}error(e){this.observer.error?this.Ca(this.observer.error,e):Lt("Uncaught Error in snapshot listener:",e.toString())}Fa(){this.muted=!0}Ca(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tq{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Yt.UNAUTHENTICATED,this.clientId=eS.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ie(B.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Li;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=qy(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hg(n,e){n.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function c0(n,e){n.asyncQueue.verifyOperationInProgress();const t=await rq(n);G("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>s0(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>s0(e.remoteStore,s)),n._onlineComponents=e}function nq(n){return n.name==="FirebaseError"?n.code===B.FAILED_PRECONDITION||n.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function rq(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!nq(t))throw t;Oa("Error using user provided cache. Falling back to memory cache: "+t),await Hg(n,new Z_)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Hg(n,new Z_);return n._offlineComponents}async function LC(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await c0(n,n._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await c0(n,new Jy))),n._onlineComponents}function iq(n){return LC(n).then(e=>e.syncEngine)}async function em(n){const e=await LC(n),t=e.eventManager;return t.onListen=F9.bind(null,e.syncEngine),t.onUnlisten=U9.bind(null,e.syncEngine),t}function sq(n,e,t={}){const r=new Li;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,c,u,h){const f=new VC({next:_=>{o.enqueueAndForget(()=>CC(s,p));const I=_.docs.has(c);!I&&_.fromCache?h.reject(new ie(B.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&_.fromCache&&u&&u.source==="server"?h.reject(new ie(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new PC(pu(c.path),f,{includeMetadataChanges:!0,G_:!0});return SC(s,p)}(await em(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(n,e,t){if(!t)throw new ie(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function oq(n,e,t,r){if(e===!0&&r===!0)throw new ie(B.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function h0(n){if(!ne.isDocumentKey(n))throw new ie(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function d0(n){if(ne.isDocumentKey(n))throw new ie(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xy(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ce()}function oi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ie(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xy(n);throw new ie(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oq("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=FC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ie(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ie(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ie(B.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $f{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new f0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ie(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ie(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new f0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new u$;switch(r.type){case"firstParty":return new p$(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=u0.get(t);r&&(G("ComponentProvider","Removing Datastore"),u0.delete(t),r.terminate())}(this),Promise.resolve()}}function aq(n,e,t,r={}){var i;const s=(n=oi(n,$f))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Oa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Yt.MOCK_USER;else{c=PF(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new ie(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Yt(h)}n._authCredentials=new h$(new ZR(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wf(this.firestore,e,this._query)}}class Mn{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mn(this.firestore,e,this._key)}}class vs extends Wf{constructor(e,t,r){super(e,t,pu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mn(this.firestore,null,new ne(e))}withConverter(e){return new vs(this.firestore,e,this._path)}}function lq(n,e,...t){if(n=pn(n),UC("collection","path",e),n instanceof $f){const r=ot.fromString(e,...t);return d0(r),new vs(n,null,r)}{if(!(n instanceof Mn||n instanceof vs))throw new ie(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ot.fromString(e,...t));return d0(r),new vs(n.firestore,null,r)}}function Dr(n,e,...t){if(n=pn(n),arguments.length===1&&(e=eS.V()),UC("doc","path",e),n instanceof $f){const r=ot.fromString(e,...t);return h0(r),new Mn(n,null,new ne(r))}{if(!(n instanceof Mn||n instanceof vs))throw new ie(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ot.fromString(e,...t));return h0(r),new Mn(n.firestore,n instanceof vs?n.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cq{constructor(){this.Ga=Promise.resolve(),this.za=[],this.ja=!1,this.Ha=[],this.Ja=null,this.Ya=!1,this.Za=!1,this.Xa=[],this.$o=new IC(this,"async_queue_retry"),this.eu=()=>{const t=Zh();t&&G("AsyncQueue","Visibility state changed to "+t.visibilityState),this.$o.Bo()};const e=Zh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.eu)}get isShuttingDown(){return this.ja}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.tu(),this.nu(e)}enterRestrictedMode(e){if(!this.ja){this.ja=!0,this.Za=e||!1;const t=Zh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.eu)}}enqueue(e){if(this.tu(),this.ja)return new Promise(()=>{});const t=new Li;return this.nu(()=>this.ja&&this.Za?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.za.push(e),this.ru()))}async ru(){if(this.za.length!==0){try{await this.za[0](),this.za.shift(),this.$o.reset()}catch(e){if(!Ms(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.za.length>0&&this.$o.Oo(()=>this.ru())}}nu(e){const t=this.Ga.then(()=>(this.Ya=!0,e().catch(r=>{this.Ja=r,this.Ya=!1;const i=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Lt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ya=!1,r))));return this.Ga=t,t}enqueueAfterDelay(e,t,r){this.tu(),this.Xa.indexOf(e)>-1&&(t=0);const i=Wy.createAndSchedule(this,e,t,r,s=>this.iu(s));return this.Ha.push(i),i}tu(){this.Ja&&ce()}verifyOperationInProgress(){}async su(){let e;do e=this.Ga,await e;while(e!==this.Ga)}ou(e){for(const t of this.Ha)if(t.timerId===e)return!0;return!1}_u(e){return this.su().then(()=>{this.Ha.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Ha)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.su()})}au(e){this.Xa.push(e)}iu(e){const t=this.Ha.indexOf(e);this.Ha.splice(t,1)}}function p0(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class qa extends $f{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new cq}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||BC(this),this._firestoreClient.terminate()}}function uq(n,e,t){t||(t="(default)");const r=lf(n,"firestore");if(r.isInitialized(t)){const i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(vc(s,e))return i;throw new ie(B.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new ie(B.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:t})}function hq(n,e){const t=typeof n=="object"?n:$m(),r=typeof n=="string"?n:e||"(default)",i=lf(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=CF("firestore");s&&aq(i,...s)}return i}function Zy(n){return n._firestoreClient||BC(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function BC(n){var e,t,r;const i=n._freezeSettings(),s=function(c,u,h,f){return new q$(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,FC(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new tq(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this._byteString=e}static fromBase64String(e){try{return new za(nn.fromBase64String(e))}catch(t){throw new ie(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new za(nn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ie(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ie(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ie(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dq=/^__.*__$/;class fq{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new zi(e,this.data,this.fieldMask,t,this.fieldTransforms):new sl(e,this.data,t,this.fieldTransforms)}}class $C{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new zi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function WC(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class zf{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.uu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get cu(){return this.settings.cu}lu(e){return new zf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}hu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.lu({path:r,Pu:!1});return i.Iu(e),i}Tu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.lu({path:r,Pu:!1});return i.uu(),i}Eu(e){return this.lu({path:void 0,Pu:!0})}du(e){return Vd(e,this.settings.methodName,this.settings.Au||!1,this.path,this.settings.Ru)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}uu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Iu(this.path.get(e))}Iu(e){if(e.length===0)throw this.du("Document fields must not be empty");if(WC(this.cu)&&dq.test(e))throw this.du('Document fields cannot begin and end with "__"')}}class pq{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ff(e)}Vu(e,t,r,i=!1){return new zf({cu:e,methodName:t,Ru:r,path:$t.emptyPath(),Pu:!1,Au:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qC(n){const e=n._freezeSettings(),t=Ff(n._databaseId);return new pq(n._databaseId,!!e.ignoreUndefinedProperties,t)}function gq(n,e,t,r,i,s={}){const o=n.Vu(s.merge||s.mergeFields?2:0,e,t,i);tv("Data must be an object, but it was:",o,r);const c=KC(r,o);let u,h;if(s.merge)u=new zn(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const _=tm(e,p,t);if(!o.contains(_))throw new ie(B.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);GC(f,_)||f.push(_)}u=new zn(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new fq(new wn(c),u,h)}class Kf extends vu{_toFieldTransform(e){if(e.cu!==2)throw e.cu===1?e.du(`${this._methodName}() can only appear at the top level of your update data`):e.du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Kf}}function zC(n,e,t){return new zf({cu:3,Ru:e.settings.Ru,methodName:n._methodName,Pu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class _q extends vu{constructor(e,t){super(e),this.mu=t}_toFieldTransform(e){const t=zC(this,e,!0),r=this.mu.map(s=>ll(s,t)),i=new To(r);return new by(e.path,i)}isEqual(e){return this===e}}class mq extends vu{constructor(e,t){super(e),this.mu=t}_toFieldTransform(e){const t=zC(this,e,!0),r=this.mu.map(s=>ll(s,t)),i=new Ao(r);return new by(e.path,i)}isEqual(e){return this===e}}function yq(n,e,t,r){const i=n.Vu(1,e,t);tv("Data must be an object, but it was:",i,r);const s=[],o=wn.empty();No(r,(u,h)=>{const f=nv(e,u,t);h=pn(h);const p=i.Tu(f);if(h instanceof Kf)s.push(f);else{const _=ll(h,p);_!=null&&(s.push(f),o.set(f,_))}});const c=new zn(s);return new $C(o,c,i.fieldTransforms)}function vq(n,e,t,r,i,s){const o=n.Vu(1,e,t),c=[tm(e,r,t)],u=[i];if(s.length%2!=0)throw new ie(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)c.push(tm(e,s[_])),u.push(s[_+1]);const h=[],f=wn.empty();for(let _=c.length-1;_>=0;--_)if(!GC(h,c[_])){const I=c[_];let A=u[_];A=pn(A);const P=o.Tu(I);if(A instanceof Kf)h.push(I);else{const x=ll(A,P);x!=null&&(h.push(I),f.set(I,x))}}const p=new zn(h);return new $C(f,p,o.fieldTransforms)}function ll(n,e){if(HC(n=pn(n)))return tv("Unsupported field value:",e,n),KC(n,e);if(n instanceof vu)return function(r,i){if(!WC(i.cu))throw i.du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Pu&&e.cu!==4)throw e.du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const c of r){let u=ll(c,i.Eu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=pn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cW(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=bt.fromDate(r);return{timestampValue:Ua(i.serializer,s)}}if(r instanceof bt){const s=new bt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ua(i.serializer,s)}}if(r instanceof ev)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof za)return{bytesValue:WS(i.serializer,r._byteString)};if(r instanceof Mn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Dy(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.du(`Unsupported field value: ${Xy(r)}`)}(n,e)}function KC(n,e){const t={};return dS(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):No(n,(r,i)=>{const s=ll(i,e.hu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function HC(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof bt||n instanceof ev||n instanceof za||n instanceof Mn||n instanceof vu)}function tv(n,e,t){if(!HC(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Xy(t);throw r==="an object"?e.du(n+" a custom object"):e.du(n+" "+r)}}function tm(n,e,t){if((e=pn(e))instanceof qf)return e._internalPath;if(typeof e=="string")return nv(n,e);throw Vd("Field path arguments must be of type string or ",n,!1,void 0,t)}const Iq=new RegExp("[~\\*/\\[\\]]");function nv(n,e,t){if(e.search(Iq)>=0)throw Vd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new qf(...e.split("."))._internalPath}catch{throw Vd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Vd(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new ie(B.INVALID_ARGUMENT,c+n+u)}function GC(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wq(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(QC("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class wq extends jC{data(){return super.data()}}function QC(n,e){return typeof e=="string"?nv(n,e):e instanceof qf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eq(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ie(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tq{convertValue(e,t="none"){switch(wo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ce()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return No(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new ev(xt(e.latitude),xt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=wy(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Nc(e));default:return null}}convertTimestamp(e){const t=As(e);return new bt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ot.fromString(e);ye(JS(r));const i=new Io(r.get(1),r.get(3)),s=new ne(r.popFirst(5));return i.isEqual(t)||Lt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aq(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class YC extends jC{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ed(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(QC("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ed extends YC{data(e={}){return super.data(e)}}class bq{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Jl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ed(this._firestore,this._userDataWriter,r.key,r,new Jl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ie(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{const u=new ed(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Jl(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new ed(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Jl(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:Rq(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Rq(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(n){n=oi(n,Mn);const e=oi(n.firestore,qa);return sq(Zy(e),n._key).then(t=>ZC(e,n,t))}class JC extends Tq{constructor(e){super(),this.firestore=e}convertBytes(e){return new za(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Mn(this.firestore,null,t)}}function co(n,e,t){n=oi(n,Mn);const r=oi(n.firestore,qa),i=Aq(n.converter,e,t);return XC(r,[gq(qC(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Kn.none())])}function nm(n,e,t,...r){n=oi(n,Mn);const i=oi(n.firestore,qa),s=qC(i);let o;return o=typeof(e=pn(e))=="string"||e instanceof qf?vq(s,"updateDoc",n._key,e,t,r):yq(s,"updateDoc",n._key,e),XC(i,[o.toMutation(n._key,Kn.exists(!0))])}function Sq(n,...e){var t,r,i;n=pn(n);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||p0(e[o])||(s=e[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges};if(p0(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,h,f;if(n instanceof Mn)h=oi(n.firestore,qa),f=pu(n._key.path),u={next:p=>{e[o]&&e[o](ZC(h,n,p))},error:e[o+1],complete:e[o+2]};else{const p=oi(n,Wf);h=oi(p.firestore,qa),f=p._query;const _=new JC(h);u={next:I=>{e[o]&&e[o](new bq(h,_,p,I))},error:e[o+1],complete:e[o+2]},Eq(n._query)}return function(_,I,A,P){const x=new VC(P),V=new PC(I,x,A);return _.asyncQueue.enqueueAndForget(async()=>SC(await em(_),V)),()=>{x.Fa(),_.asyncQueue.enqueueAndForget(async()=>CC(await em(_),V))}}(Zy(h),f,c,u)}function XC(n,e){return function(r,i){const s=new Li;return r.asyncQueue.enqueueAndForget(async()=>B9(await iq(r),i,s)),s.promise}(Zy(n),e)}function ZC(n,e,t){const r=t.docs.get(e._key),i=new JC(n);return new YC(n,i,e._key,r,new Jl(t.hasPendingWrites,t.fromCache),e.converter)}class Cq{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Dq(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function Pq(n){return new Cq(n)}class xq{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new Jy,this._offlineComponentProvider=new MC(this._onlineComponentProvider,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}class kq{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new Jy,this._offlineComponentProvider=new eq(this._onlineComponentProvider,e==null?void 0:e.cacheSizeBytes)}}function Dq(n){return new xq(n==null?void 0:n.forceOwnership)}function Nq(){return new kq}function Oq(...n){return new _q("arrayUnion",n)}function Mq(...n){return new mq("arrayRemove",n)}(function(e,t=!0){(function(i){il=i})(ks),li(new $r("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),c=new qa(new d$(r.getProvider("auth-internal")),new _$(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ie(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Io(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),ir(fT,"4.1.1",e),ir(fT,"4.1.1","esm2017")})();const Vq={apiKey:"AIzaSyCt5BSSODlVD5lAQu8LMJzB1rMbd1nnLd4",authDomain:"subinbox.firebaseapp.com",projectId:"subinbox",storageBucket:"subinbox.appspot.com",messagingSenderId:"639211913987",appId:"1:639211913987:web:39cc71c8ad70064667df36"},eP=pb(Vq);uq(eP,{localCache:Pq({tabManager:Nq()})});function rv(n,e){const t=Object.create(null),r=n.split(",");for(let i=0;i<r.length;i++)t[r[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}const wt={},Ta=[],Fr=()=>{},Lq=()=>!1,Fq=/^on[^a-z]/,Hf=n=>Fq.test(n),iv=n=>n.startsWith("onUpdate:"),rn=Object.assign,sv=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Uq=Object.prototype.hasOwnProperty,Ye=(n,e)=>Uq.call(n,e),be=Array.isArray,Aa=n=>Gf(n)==="[object Map]",tP=n=>Gf(n)==="[object Set]",Ne=n=>typeof n=="function",Wt=n=>typeof n=="string",ov=n=>typeof n=="symbol",Tt=n=>n!==null&&typeof n=="object",av=n=>Tt(n)&&Ne(n.then)&&Ne(n.catch),nP=Object.prototype.toString,Gf=n=>nP.call(n),Bq=n=>Gf(n).slice(8,-1),rP=n=>Gf(n)==="[object Object]",lv=n=>Wt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,td=rv(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jf=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},$q=/-(\w)/g,hi=jf(n=>n.replace($q,(e,t)=>t?t.toUpperCase():"")),Wq=/\B([A-Z])/g,cl=jf(n=>n.replace(Wq,"-$1").toLowerCase()),Qf=jf(n=>n.charAt(0).toUpperCase()+n.slice(1)),Gg=jf(n=>n?`on${Qf(n)}`:""),Uc=(n,e)=>!Object.is(n,e),jg=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Ld=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},qq=n=>{const e=parseFloat(n);return isNaN(e)?n:e},zq=n=>{const e=Wt(n)?Number(n):NaN;return isNaN(e)?n:e};let g0;const rm=()=>g0||(g0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cv(n){if(be(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=Wt(r)?jq(r):cv(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Wt(n))return n;if(Tt(n))return n}}const Kq=/;(?![^(]*\))/g,Hq=/:([^]+)/,Gq=/\/\*[^]*?\*\//g;function jq(n){const e={};return n.replace(Gq,"").split(Kq).forEach(t=>{if(t){const r=t.split(Hq);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ai(n){let e="";if(Wt(n))e=n;else if(be(n))for(let t=0;t<n.length;t++){const r=ai(n[t]);r&&(e+=r+" ")}else if(Tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Qq="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yq=rv(Qq);function iP(n){return!!n||n===""}const Pi=n=>Wt(n)?n:n==null?"":be(n)||Tt(n)&&(n.toString===nP||!Ne(n.toString))?JSON.stringify(n,sP,2):String(n),sP=(n,e)=>e&&e.__v_isRef?sP(n,e.value):Aa(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i])=>(t[`${r} =>`]=i,t),{})}:tP(e)?{[`Set(${e.size})`]:[...e.values()]}:Tt(e)&&!be(e)&&!rP(e)?String(e):e;let xr;class oP{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xr,!e&&xr&&(this.index=(xr.scopes||(xr.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=xr;try{return xr=this,e()}finally{xr=t}}}on(){xr=this}off(){xr=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Jq(n){return new oP(n)}function Xq(n,e=xr){e&&e.active&&e.effects.push(n)}function Zq(){return xr}const uv=n=>{const e=new Set(n);return e.w=0,e.n=0,e},aP=n=>(n.w&Cs)>0,lP=n=>(n.n&Cs)>0,e6=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Cs},t6=n=>{const{deps:e}=n;if(e.length){let t=0;for(let r=0;r<e.length;r++){const i=e[r];aP(i)&&!lP(i)?i.delete(n):e[t++]=i,i.w&=~Cs,i.n&=~Cs}e.length=t}},im=new WeakMap;let Xl=0,Cs=1;const sm=30;let Nr;const go=Symbol(""),om=Symbol("");class hv{constructor(e,t=null,r){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Xq(this,r)}run(){if(!this.active)return this.fn();let e=Nr,t=Is;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Nr,Nr=this,Is=!0,Cs=1<<++Xl,Xl<=sm?e6(this):_0(this),this.fn()}finally{Xl<=sm&&t6(this),Cs=1<<--Xl,Nr=this.parent,Is=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Nr===this?this.deferStop=!0:this.active&&(_0(this),this.onStop&&this.onStop(),this.active=!1)}}function _0(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Is=!0;const cP=[];function ul(){cP.push(Is),Is=!1}function hl(){const n=cP.pop();Is=n===void 0?!0:n}function Gn(n,e,t){if(Is&&Nr){let r=im.get(n);r||im.set(n,r=new Map);let i=r.get(t);i||r.set(t,i=uv()),uP(i)}}function uP(n,e){let t=!1;Xl<=sm?lP(n)||(n.n|=Cs,t=!aP(n)):t=!n.has(Nr),t&&(n.add(Nr),Nr.deps.push(n))}function $i(n,e,t,r,i,s){const o=im.get(n);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(t==="length"&&be(n)){const u=Number(r);o.forEach((h,f)=>{(f==="length"||f>=u)&&c.push(h)})}else switch(t!==void 0&&c.push(o.get(t)),e){case"add":be(n)?lv(t)&&c.push(o.get("length")):(c.push(o.get(go)),Aa(n)&&c.push(o.get(om)));break;case"delete":be(n)||(c.push(o.get(go)),Aa(n)&&c.push(o.get(om)));break;case"set":Aa(n)&&c.push(o.get(go));break}if(c.length===1)c[0]&&am(c[0]);else{const u=[];for(const h of c)h&&u.push(...h);am(uv(u))}}function am(n,e){const t=be(n)?n:[...n];for(const r of t)r.computed&&m0(r);for(const r of t)r.computed||m0(r)}function m0(n,e){(n!==Nr||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const n6=rv("__proto__,__v_isRef,__isVue"),hP=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ov)),r6=dv(),i6=dv(!1,!0),s6=dv(!0),y0=o6();function o6(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=et(this);for(let s=0,o=this.length;s<o;s++)Gn(r,"get",s+"");const i=r[e](...t);return i===-1||i===!1?r[e](...t.map(et)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){ul();const r=et(this)[e].apply(this,t);return hl(),r}}),n}function a6(n){const e=et(this);return Gn(e,"has",n),e.hasOwnProperty(n)}function dv(n=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(n?e?T6:_P:e?gP:pP).get(r))return r;const o=be(r);if(!n){if(o&&Ye(y0,i))return Reflect.get(y0,i,s);if(i==="hasOwnProperty")return a6}const c=Reflect.get(r,i,s);return(ov(i)?hP.has(i):n6(i))||(n||Gn(r,"get",i),e)?c:Tn(c)?o&&lv(i)?c:c.value:Tt(c)?n?yP(c):Jf(c):c}}const l6=dP(),c6=dP(!0);function dP(n=!1){return function(t,r,i,s){let o=t[r];if(Ka(o)&&Tn(o)&&!Tn(i))return!1;if(!n&&(!Fd(i)&&!Ka(i)&&(o=et(o),i=et(i)),!be(t)&&Tn(o)&&!Tn(i)))return o.value=i,!0;const c=be(t)&&lv(r)?Number(r)<t.length:Ye(t,r),u=Reflect.set(t,r,i,s);return t===et(s)&&(c?Uc(i,o)&&$i(t,"set",r,i):$i(t,"add",r,i)),u}}function u6(n,e){const t=Ye(n,e);n[e];const r=Reflect.deleteProperty(n,e);return r&&t&&$i(n,"delete",e,void 0),r}function h6(n,e){const t=Reflect.has(n,e);return(!ov(e)||!hP.has(e))&&Gn(n,"has",e),t}function d6(n){return Gn(n,"iterate",be(n)?"length":go),Reflect.ownKeys(n)}const fP={get:r6,set:l6,deleteProperty:u6,has:h6,ownKeys:d6},f6={get:s6,set(n,e){return!0},deleteProperty(n,e){return!0}},p6=rn({},fP,{get:i6,set:c6}),fv=n=>n,Yf=n=>Reflect.getPrototypeOf(n);function xh(n,e,t=!1,r=!1){n=n.__v_raw;const i=et(n),s=et(e);t||(e!==s&&Gn(i,"get",e),Gn(i,"get",s));const{has:o}=Yf(i),c=r?fv:t?_v:Bc;if(o.call(i,e))return c(n.get(e));if(o.call(i,s))return c(n.get(s));n!==i&&n.get(e)}function kh(n,e=!1){const t=this.__v_raw,r=et(t),i=et(n);return e||(n!==i&&Gn(r,"has",n),Gn(r,"has",i)),n===i?t.has(n):t.has(n)||t.has(i)}function Dh(n,e=!1){return n=n.__v_raw,!e&&Gn(et(n),"iterate",go),Reflect.get(n,"size",n)}function v0(n){n=et(n);const e=et(this);return Yf(e).has.call(e,n)||(e.add(n),$i(e,"add",n,n)),this}function I0(n,e){e=et(e);const t=et(this),{has:r,get:i}=Yf(t);let s=r.call(t,n);s||(n=et(n),s=r.call(t,n));const o=i.call(t,n);return t.set(n,e),s?Uc(e,o)&&$i(t,"set",n,e):$i(t,"add",n,e),this}function w0(n){const e=et(this),{has:t,get:r}=Yf(e);let i=t.call(e,n);i||(n=et(n),i=t.call(e,n)),r&&r.call(e,n);const s=e.delete(n);return i&&$i(e,"delete",n,void 0),s}function E0(){const n=et(this),e=n.size!==0,t=n.clear();return e&&$i(n,"clear",void 0,void 0),t}function Nh(n,e){return function(r,i){const s=this,o=s.__v_raw,c=et(o),u=e?fv:n?_v:Bc;return!n&&Gn(c,"iterate",go),o.forEach((h,f)=>r.call(i,u(h),u(f),s))}}function Oh(n,e,t){return function(...r){const i=this.__v_raw,s=et(i),o=Aa(s),c=n==="entries"||n===Symbol.iterator&&o,u=n==="keys"&&o,h=i[n](...r),f=t?fv:e?_v:Bc;return!e&&Gn(s,"iterate",u?om:go),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:c?[f(p[0]),f(p[1])]:f(p),done:_}},[Symbol.iterator](){return this}}}}function os(n){return function(...e){return n==="delete"?!1:this}}function g6(){const n={get(s){return xh(this,s)},get size(){return Dh(this)},has:kh,add:v0,set:I0,delete:w0,clear:E0,forEach:Nh(!1,!1)},e={get(s){return xh(this,s,!1,!0)},get size(){return Dh(this)},has:kh,add:v0,set:I0,delete:w0,clear:E0,forEach:Nh(!1,!0)},t={get(s){return xh(this,s,!0)},get size(){return Dh(this,!0)},has(s){return kh.call(this,s,!0)},add:os("add"),set:os("set"),delete:os("delete"),clear:os("clear"),forEach:Nh(!0,!1)},r={get(s){return xh(this,s,!0,!0)},get size(){return Dh(this,!0)},has(s){return kh.call(this,s,!0)},add:os("add"),set:os("set"),delete:os("delete"),clear:os("clear"),forEach:Nh(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Oh(s,!1,!1),t[s]=Oh(s,!0,!1),e[s]=Oh(s,!1,!0),r[s]=Oh(s,!0,!0)}),[n,t,e,r]}const[_6,m6,y6,v6]=g6();function pv(n,e){const t=e?n?v6:y6:n?m6:_6;return(r,i,s)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(Ye(t,i)&&i in r?t:r,i,s)}const I6={get:pv(!1,!1)},w6={get:pv(!1,!0)},E6={get:pv(!0,!1)},pP=new WeakMap,gP=new WeakMap,_P=new WeakMap,T6=new WeakMap;function A6(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function b6(n){return n.__v_skip||!Object.isExtensible(n)?0:A6(Bq(n))}function Jf(n){return Ka(n)?n:gv(n,!1,fP,I6,pP)}function mP(n){return gv(n,!1,p6,w6,gP)}function yP(n){return gv(n,!0,f6,E6,_P)}function gv(n,e,t,r,i){if(!Tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=i.get(n);if(s)return s;const o=b6(n);if(o===0)return n;const c=new Proxy(n,o===2?r:t);return i.set(n,c),c}function ba(n){return Ka(n)?ba(n.__v_raw):!!(n&&n.__v_isReactive)}function Ka(n){return!!(n&&n.__v_isReadonly)}function Fd(n){return!!(n&&n.__v_isShallow)}function vP(n){return ba(n)||Ka(n)}function et(n){const e=n&&n.__v_raw;return e?et(e):n}function IP(n){return Ld(n,"__v_skip",!0),n}const Bc=n=>Tt(n)?Jf(n):n,_v=n=>Tt(n)?yP(n):n;function wP(n){Is&&Nr&&(n=et(n),uP(n.dep||(n.dep=uv())))}function EP(n,e){n=et(n);const t=n.dep;t&&am(t)}function Tn(n){return!!(n&&n.__v_isRef===!0)}function Bt(n){return TP(n,!1)}function R6(n){return TP(n,!0)}function TP(n,e){return Tn(n)?n:new S6(n,e)}class S6{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:et(e),this._value=t?e:Bc(e)}get value(){return wP(this),this._value}set value(e){const t=this.__v_isShallow||Fd(e)||Ka(e);e=t?e:et(e),Uc(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Bc(e),EP(this))}}function Xe(n){return Tn(n)?n.value:n}const C6={get:(n,e,t)=>Xe(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return Tn(i)&&!Tn(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function AP(n){return ba(n)?n:new Proxy(n,C6)}class P6{constructor(e,t,r,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new hv(e,()=>{this._dirty||(this._dirty=!0,EP(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=et(this);return wP(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function x6(n,e,t=!1){let r,i;const s=Ne(n);return s?(r=n,i=Fr):(r=n.get,i=n.set),new P6(r,i,s||!i,t)}function ws(n,e,t,r){let i;try{i=r?n(...r):n()}catch(s){Iu(s,e,t)}return i}function Ur(n,e,t,r){if(Ne(n)){const s=ws(n,e,t,r);return s&&av(s)&&s.catch(o=>{Iu(o,e,t)}),s}const i=[];for(let s=0;s<n.length;s++)i.push(Ur(n[s],e,t,r));return i}function Iu(n,e,t,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,c=t;for(;s;){const h=s.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](n,o,c)===!1)return}s=s.parent}const u=e.appContext.config.errorHandler;if(u){ws(u,null,10,[n,o,c]);return}}k6(n,t,i,r)}function k6(n,e,t,r=!0){console.error(n)}let $c=!1,lm=!1;const En=[];let Xr=0;const Ra=[];let Ci=null,io=0;const bP=Promise.resolve();let mv=null;function RP(n){const e=mv||bP;return n?e.then(this?n.bind(this):n):e}function D6(n){let e=Xr+1,t=En.length;for(;e<t;){const r=e+t>>>1;Wc(En[r])<n?e=r+1:t=r}return e}function yv(n){(!En.length||!En.includes(n,$c&&n.allowRecurse?Xr+1:Xr))&&(n.id==null?En.push(n):En.splice(D6(n.id),0,n),SP())}function SP(){!$c&&!lm&&(lm=!0,mv=bP.then(xP))}function N6(n){const e=En.indexOf(n);e>Xr&&En.splice(e,1)}function CP(n){be(n)?Ra.push(...n):(!Ci||!Ci.includes(n,n.allowRecurse?io+1:io))&&Ra.push(n),SP()}function T0(n,e=$c?Xr+1:0){for(;e<En.length;e++){const t=En[e];t&&t.pre&&(En.splice(e,1),e--,t())}}function PP(n){if(Ra.length){const e=[...new Set(Ra)];if(Ra.length=0,Ci){Ci.push(...e);return}for(Ci=e,Ci.sort((t,r)=>Wc(t)-Wc(r)),io=0;io<Ci.length;io++)Ci[io]();Ci=null,io=0}}const Wc=n=>n.id==null?1/0:n.id,O6=(n,e)=>{const t=Wc(n)-Wc(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function xP(n){lm=!1,$c=!0,En.sort(O6);const e=Fr;try{for(Xr=0;Xr<En.length;Xr++){const t=En[Xr];t&&t.active!==!1&&ws(t,null,14)}}finally{Xr=0,En.length=0,PP(),$c=!1,mv=null,(En.length||Ra.length)&&xP()}}function M6(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||wt;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:_}=r[f]||wt;_&&(i=t.map(I=>Wt(I)?I.trim():I)),p&&(i=t.map(qq))}let c,u=r[c=Gg(e)]||r[c=Gg(hi(e))];!u&&s&&(u=r[c=Gg(cl(e))]),u&&Ur(u,n,6,i);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Ur(h,n,6,i)}}function kP(n,e,t=!1){const r=e.emitsCache,i=r.get(n);if(i!==void 0)return i;const s=n.emits;let o={},c=!1;if(!Ne(n)){const u=h=>{const f=kP(h,e,!0);f&&(c=!0,rn(o,f))};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!s&&!c?(Tt(n)&&r.set(n,null),null):(be(s)?s.forEach(u=>o[u]=null):rn(o,s),Tt(n)&&r.set(n,o),o)}function Xf(n,e){return!n||!Hf(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ye(n,e[0].toLowerCase()+e.slice(1))||Ye(n,cl(e))||Ye(n,e))}let yr=null,Zf=null;function Ud(n){const e=yr;return yr=n,Zf=n&&n.type.__scopeId||null,e}function Mo(n){Zf=n}function Vo(){Zf=null}function Ha(n,e=yr,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&V0(-1);const s=Ud(e);let o;try{o=n(...i)}finally{Ud(s),r._d&&V0(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Qg(n){const{type:e,vnode:t,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:c,attrs:u,emit:h,render:f,renderCache:p,data:_,setupState:I,ctx:A,inheritAttrs:P}=n;let x,V;const W=Ud(n);try{if(t.shapeFlag&4){const N=i||r;x=kr(f.call(N,N,p,s,I,_,A)),V=u}else{const N=e;x=kr(N.length>1?N(s,{attrs:u,slots:c,emit:h}):N(s,null)),V=e.props?u:L6(u)}}catch(N){hc.length=0,Iu(N,n,1),x=Ft(Wi)}let K=x;if(V&&P!==!1){const N=Object.keys(V),{shapeFlag:j}=K;N.length&&j&7&&(o&&N.some(iv)&&(V=F6(V,o)),K=ja(K,V))}return t.dirs&&(K=ja(K),K.dirs=K.dirs?K.dirs.concat(t.dirs):t.dirs),t.transition&&(K.transition=t.transition),x=K,Ud(W),x}function V6(n){let e;for(let t=0;t<n.length;t++){const r=n[t];if(Wd(r)){if(r.type!==Wi||r.children==="v-if"){if(e)return;e=r}}else return}return e}const L6=n=>{let e;for(const t in n)(t==="class"||t==="style"||Hf(t))&&((e||(e={}))[t]=n[t]);return e},F6=(n,e)=>{const t={};for(const r in n)(!iv(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function U6(n,e,t){const{props:r,children:i,component:s}=n,{props:o,children:c,patchFlag:u}=e,h=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&u>=0){if(u&1024)return!0;if(u&16)return r?A0(r,o,h):!!o;if(u&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const _=f[p];if(o[_]!==r[_]&&!Xf(h,_))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?A0(r,o,h):!0:!!o;return!1}function A0(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==n[s]&&!Xf(t,s))return!0}return!1}function vv({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const B6=n=>n.__isSuspense,$6={name:"Suspense",__isSuspense:!0,process(n,e,t,r,i,s,o,c,u,h){n==null?q6(e,t,r,i,s,o,c,u,h):z6(n,e,t,r,i,o,c,u,h)},hydrate:K6,create:Iv,normalize:H6},W6=$6;function qc(n,e){const t=n.props&&n.props[e];Ne(t)&&t()}function q6(n,e,t,r,i,s,o,c,u){const{p:h,o:{createElement:f}}=u,p=f("div"),_=n.suspense=Iv(n,i,r,e,p,t,s,o,c,u);h(null,_.pendingBranch=n.ssContent,p,null,r,_,s,o),_.deps>0?(qc(n,"onPending"),qc(n,"onFallback"),h(null,n.ssFallback,e,t,r,null,s,o),Sa(_,n.ssFallback)):_.resolve(!1,!0)}function z6(n,e,t,r,i,s,o,c,{p:u,um:h,o:{createElement:f}}){const p=e.suspense=n.suspense;p.vnode=e,e.el=n.el;const _=e.ssContent,I=e.ssFallback,{activeBranch:A,pendingBranch:P,isInFallback:x,isHydrating:V}=p;if(P)p.pendingBranch=_,ps(_,P)?(u(P,_,p.hiddenContainer,null,i,p,s,o,c),p.deps<=0?p.resolve():x&&(u(A,I,t,r,i,null,s,o,c),Sa(p,I))):(p.pendingId++,V?(p.isHydrating=!1,p.activeBranch=P):h(P,i,p),p.deps=0,p.effects.length=0,p.hiddenContainer=f("div"),x?(u(null,_,p.hiddenContainer,null,i,p,s,o,c),p.deps<=0?p.resolve():(u(A,I,t,r,i,null,s,o,c),Sa(p,I))):A&&ps(_,A)?(u(A,_,t,r,i,p,s,o,c),p.resolve(!0)):(u(null,_,p.hiddenContainer,null,i,p,s,o,c),p.deps<=0&&p.resolve()));else if(A&&ps(_,A))u(A,_,t,r,i,p,s,o,c),Sa(p,_);else if(qc(e,"onPending"),p.pendingBranch=_,p.pendingId++,u(null,_,p.hiddenContainer,null,i,p,s,o,c),p.deps<=0)p.resolve();else{const{timeout:W,pendingId:K}=p;W>0?setTimeout(()=>{p.pendingId===K&&p.fallback(I)},W):W===0&&p.fallback(I)}}function Iv(n,e,t,r,i,s,o,c,u,h,f=!1){const{p,m:_,um:I,n:A,o:{parentNode:P,remove:x}}=h;let V;const W=j6(n);W&&e!=null&&e.pendingBranch&&(V=e.pendingId,e.deps++);const K=n.props?zq(n.props.timeout):void 0,N={vnode:n,parent:e,parentComponent:t,isSVG:o,container:r,hiddenContainer:i,anchor:s,deps:0,pendingId:0,timeout:typeof K=="number"?K:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:f,isUnmounted:!1,effects:[],resolve(j=!1,se=!1){const{vnode:ue,activeBranch:he,pendingBranch:Te,pendingId:Re,effects:St,parentComponent:an,container:Ct}=N;if(N.isHydrating)N.isHydrating=!1;else if(!j){const ht=he&&Te.transition&&Te.transition.mode==="out-in";ht&&(he.transition.afterLeave=()=>{Re===N.pendingId&&_(Te,Ct,Ae,0)});let{anchor:Ae}=N;he&&(Ae=A(he),I(he,an,N,!0)),ht||_(Te,Ct,Ae,0)}Sa(N,Te),N.pendingBranch=null,N.isInFallback=!1;let Ht=N.parent,jn=!1;for(;Ht;){if(Ht.pendingBranch){Ht.effects.push(...St),jn=!0;break}Ht=Ht.parent}jn||CP(St),N.effects=[],W&&e&&e.pendingBranch&&V===e.pendingId&&(e.deps--,e.deps===0&&!se&&e.resolve()),qc(ue,"onResolve")},fallback(j){if(!N.pendingBranch)return;const{vnode:se,activeBranch:ue,parentComponent:he,container:Te,isSVG:Re}=N;qc(se,"onFallback");const St=A(ue),an=()=>{N.isInFallback&&(p(null,j,Te,St,he,null,Re,c,u),Sa(N,j))},Ct=j.transition&&j.transition.mode==="out-in";Ct&&(ue.transition.afterLeave=an),N.isInFallback=!0,I(ue,he,null,!0),Ct||an()},move(j,se,ue){N.activeBranch&&_(N.activeBranch,j,se,ue),N.container=j},next(){return N.activeBranch&&A(N.activeBranch)},registerDep(j,se){const ue=!!N.pendingBranch;ue&&N.deps++;const he=j.vnode.el;j.asyncDep.catch(Te=>{Iu(Te,j,0)}).then(Te=>{if(j.isUnmounted||N.isUnmounted||N.pendingId!==j.suspenseId)return;j.asyncResolved=!0;const{vnode:Re}=j;pm(j,Te,!1),he&&(Re.el=he);const St=!he&&j.subTree.el;se(j,Re,P(he||j.subTree.el),he?null:A(j.subTree),N,o,u),St&&x(St),vv(j,Re.el),ue&&--N.deps===0&&N.resolve()})},unmount(j,se){N.isUnmounted=!0,N.activeBranch&&I(N.activeBranch,t,j,se),N.pendingBranch&&I(N.pendingBranch,t,j,se)}};return N}function K6(n,e,t,r,i,s,o,c,u){const h=e.suspense=Iv(e,r,t,n.parentNode,document.createElement("div"),null,i,s,o,c,!0),f=u(n,h.pendingBranch=e.ssContent,t,h,s,o);return h.deps===0&&h.resolve(!1,!0),f}function H6(n){const{shapeFlag:e,children:t}=n,r=e&32;n.ssContent=b0(r?t.default:t),n.ssFallback=r?b0(t.fallback):Ft(Wi)}function b0(n){let e;if(Ne(n)){const t=Ga&&n._c;t&&(n._d=!1,Et()),n=n(),t&&(n._d=!0,e=vr,GP())}return be(n)&&(n=V6(n)),n=kr(n),e&&!n.dynamicChildren&&(n.dynamicChildren=e.filter(t=>t!==n)),n}function G6(n,e){e&&e.pendingBranch?be(n)?e.effects.push(...n):e.effects.push(n):CP(n)}function Sa(n,e){n.activeBranch=e;const{vnode:t,parentComponent:r}=n,i=t.el=e.el;r&&r.subTree===t&&(r.vnode.el=i,vv(r,i))}function j6(n){var e;return((e=n.props)==null?void 0:e.suspensible)!=null&&n.props.suspensible!==!1}const Mh={};function nd(n,e,t){return DP(n,e,t)}function DP(n,e,{immediate:t,deep:r,flush:i,onTrack:s,onTrigger:o}=wt){var c;const u=Zq()===((c=Xt)==null?void 0:c.scope)?Xt:null;let h,f=!1,p=!1;if(Tn(n)?(h=()=>n.value,f=Fd(n)):ba(n)?(h=()=>n,r=!0):be(n)?(p=!0,f=n.some(N=>ba(N)||Fd(N)),h=()=>n.map(N=>{if(Tn(N))return N.value;if(ba(N))return pa(N);if(Ne(N))return ws(N,u,2)})):Ne(n)?e?h=()=>ws(n,u,2):h=()=>{if(!(u&&u.isUnmounted))return _&&_(),Ur(n,u,3,[I])}:h=Fr,e&&r){const N=h;h=()=>pa(N())}let _,I=N=>{_=W.onStop=()=>{ws(N,u,4)}},A;if(Hc)if(I=Fr,e?t&&Ur(e,u,3,[h(),p?[]:void 0,I]):h(),i==="sync"){const N=Uz();A=N.__watcherHandles||(N.__watcherHandles=[])}else return Fr;let P=p?new Array(n.length).fill(Mh):Mh;const x=()=>{if(W.active)if(e){const N=W.run();(r||f||(p?N.some((j,se)=>Uc(j,P[se])):Uc(N,P)))&&(_&&_(),Ur(e,u,3,[N,P===Mh?void 0:p&&P[0]===Mh?[]:P,I]),P=N)}else W.run()};x.allowRecurse=!!e;let V;i==="sync"?V=x:i==="post"?V=()=>$n(x,u&&u.suspense):(x.pre=!0,u&&(x.id=u.uid),V=()=>yv(x));const W=new hv(h,V);e?t?x():P=W.run():i==="post"?$n(W.run.bind(W),u&&u.suspense):W.run();const K=()=>{W.stop(),u&&u.scope&&sv(u.scope.effects,W)};return A&&A.push(K),K}function Q6(n,e,t){const r=this.proxy,i=Wt(n)?n.includes(".")?NP(r,n):()=>r[n]:n.bind(r,r);let s;Ne(e)?s=e:(s=e.handler,t=e);const o=Xt;Ps(this);const c=DP(i,s.bind(r),t);return o?Ps(o):Es(),c}function NP(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}function pa(n,e){if(!Tt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Tn(n))pa(n.value,e);else if(be(n))for(let t=0;t<n.length;t++)pa(n[t],e);else if(tP(n)||Aa(n))n.forEach(t=>{pa(t,e)});else if(rP(n))for(const t in n)pa(n[t],e);return n}function Qs(n,e,t,r){const i=n.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const c=i[o];s&&(c.oldValue=s[o].value);let u=c.dir[r];u&&(ul(),Ur(u,t,8,[n.el,c,n,e]),hl())}}function wu(n,e){return Ne(n)?(()=>rn({name:n.name},e,{setup:n}))():n}const rd=n=>!!n.type.__asyncLoader,OP=n=>n.type.__isKeepAlive;function Y6(n,e){MP(n,"a",e)}function J6(n,e){MP(n,"da",e)}function MP(n,e,t=Xt){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(ep(e,r,t),t){let i=t.parent;for(;i&&i.parent;)OP(i.parent.vnode)&&X6(r,e,t,i),i=i.parent}}function X6(n,e,t,r){const i=ep(e,n,r,!0);LP(()=>{sv(r[e],i)},t)}function ep(n,e,t=Xt,r=!1){if(t){const i=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;ul(),Ps(t);const c=Ur(e,t,n,o);return Es(),hl(),c});return r?i.unshift(s):i.push(s),s}}const Ki=n=>(e,t=Xt)=>(!Hc||n==="sp")&&ep(n,(...r)=>e(...r),t),Z6=Ki("bm"),VP=Ki("m"),ez=Ki("bu"),tz=Ki("u"),nz=Ki("bum"),LP=Ki("um"),rz=Ki("sp"),iz=Ki("rtg"),sz=Ki("rtc");function oz(n,e=Xt){ep("ec",n,e)}const FP="components";function wv(n,e){return lz(FP,n,!0,e)||n}const az=Symbol.for("v-ndc");function lz(n,e,t=!0,r=!1){const i=yr||Xt;if(i){const s=i.type;if(n===FP){const c=Vz(s,!1);if(c&&(c===e||c===hi(e)||c===Qf(hi(e))))return s}const o=R0(i[n]||s[n],e)||R0(i.appContext[n],e);return!o&&r?s:o}}function R0(n,e){return n&&(n[e]||n[hi(e)]||n[Qf(hi(e))])}function S0(n,e,t,r){let i;const s=t&&t[r];if(be(n)||Wt(n)){i=new Array(n.length);for(let o=0,c=n.length;o<c;o++)i[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){i=new Array(n);for(let o=0;o<n;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Tt(n))if(n[Symbol.iterator])i=Array.from(n,(o,c)=>e(o,c,void 0,s&&s[c]));else{const o=Object.keys(n);i=new Array(o.length);for(let c=0,u=o.length;c<u;c++){const h=o[c];i[c]=e(n[h],h,c,s&&s[c])}}else i=[];return t&&(t[r]=i),i}const cm=n=>n?XP(n)?Rv(n)||n.proxy:cm(n.parent):null,uc=rn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>cm(n.parent),$root:n=>cm(n.root),$emit:n=>n.emit,$options:n=>Ev(n),$forceUpdate:n=>n.f||(n.f=()=>yv(n.update)),$nextTick:n=>n.n||(n.n=RP.bind(n.proxy)),$watch:n=>Q6.bind(n)}),Yg=(n,e)=>n!==wt&&!n.__isScriptSetup&&Ye(n,e),cz={get({_:n},e){const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:c,appContext:u}=n;let h;if(e[0]!=="$"){const I=o[e];if(I!==void 0)switch(I){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Yg(r,e))return o[e]=1,r[e];if(i!==wt&&Ye(i,e))return o[e]=2,i[e];if((h=n.propsOptions[0])&&Ye(h,e))return o[e]=3,s[e];if(t!==wt&&Ye(t,e))return o[e]=4,t[e];um&&(o[e]=0)}}const f=uc[e];let p,_;if(f)return e==="$attrs"&&Gn(n,"get",e),f(n);if((p=c.__cssModules)&&(p=p[e]))return p;if(t!==wt&&Ye(t,e))return o[e]=4,t[e];if(_=u.config.globalProperties,Ye(_,e))return _[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:s}=n;return Yg(i,e)?(i[e]=t,!0):r!==wt&&Ye(r,e)?(r[e]=t,!0):Ye(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,propsOptions:s}},o){let c;return!!t[o]||n!==wt&&Ye(n,o)||Yg(e,o)||(c=s[0])&&Ye(c,o)||Ye(r,o)||Ye(uc,o)||Ye(i.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ye(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function C0(n){return be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}function sa(n){const e=JP();let t=n();return Es(),av(t)&&(t=t.catch(r=>{throw Ps(e),r})),[t,()=>Ps(e)]}let um=!0;function uz(n){const e=Ev(n),t=n.proxy,r=n.ctx;um=!1,e.beforeCreate&&P0(e.beforeCreate,n,"bc");const{data:i,computed:s,methods:o,watch:c,provide:u,inject:h,created:f,beforeMount:p,mounted:_,beforeUpdate:I,updated:A,activated:P,deactivated:x,beforeDestroy:V,beforeUnmount:W,destroyed:K,unmounted:N,render:j,renderTracked:se,renderTriggered:ue,errorCaptured:he,serverPrefetch:Te,expose:Re,inheritAttrs:St,components:an,directives:Ct,filters:Ht}=e;if(h&&hz(h,r,null),o)for(const Ae in o){const De=o[Ae];Ne(De)&&(r[Ae]=De.bind(t))}if(i){const Ae=i.call(t,t);Tt(Ae)&&(n.data=Jf(Ae))}if(um=!0,s)for(const Ae in s){const De=s[Ae],Ar=Ne(De)?De.bind(t,t):Ne(De.get)?De.get.bind(t,t):Fr,Qn=!Ne(De)&&Ne(De.set)?De.set.bind(t):Fr,Nt=nr({get:Ar,set:Qn});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:gn=>Nt.value=gn})}if(c)for(const Ae in c)UP(c[Ae],r,t,Ae);if(u){const Ae=Ne(u)?u.call(t):u;Reflect.ownKeys(Ae).forEach(De=>{id(De,Ae[De])})}f&&P0(f,n,"c");function ht(Ae,De){be(De)?De.forEach(Ar=>Ae(Ar.bind(t))):De&&Ae(De.bind(t))}if(ht(Z6,p),ht(VP,_),ht(ez,I),ht(tz,A),ht(Y6,P),ht(J6,x),ht(oz,he),ht(sz,se),ht(iz,ue),ht(nz,W),ht(LP,N),ht(rz,Te),be(Re))if(Re.length){const Ae=n.exposed||(n.exposed={});Re.forEach(De=>{Object.defineProperty(Ae,De,{get:()=>t[De],set:Ar=>t[De]=Ar})})}else n.exposed||(n.exposed={});j&&n.render===Fr&&(n.render=j),St!=null&&(n.inheritAttrs=St),an&&(n.components=an),Ct&&(n.directives=Ct)}function hz(n,e,t=Fr){be(n)&&(n=hm(n));for(const r in n){const i=n[r];let s;Tt(i)?"default"in i?s=wr(i.from||r,i.default,!0):s=wr(i.from||r):s=wr(i),Tn(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function P0(n,e,t){Ur(be(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function UP(n,e,t,r){const i=r.includes(".")?NP(t,r):()=>t[r];if(Wt(n)){const s=e[n];Ne(s)&&nd(i,s)}else if(Ne(n))nd(i,n.bind(t));else if(Tt(n))if(be(n))n.forEach(s=>UP(s,e,t,r));else{const s=Ne(n.handler)?n.handler.bind(t):e[n.handler];Ne(s)&&nd(i,s,n)}}function Ev(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,c=s.get(e);let u;return c?u=c:!i.length&&!t&&!r?u=e:(u={},i.length&&i.forEach(h=>Bd(u,h,o,!0)),Bd(u,e,o)),Tt(e)&&s.set(e,u),u}function Bd(n,e,t,r=!1){const{mixins:i,extends:s}=e;s&&Bd(n,s,t,!0),i&&i.forEach(o=>Bd(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const c=dz[o]||t&&t[o];n[o]=c?c(n[o],e[o]):e[o]}return n}const dz={data:x0,props:k0,emits:k0,methods:Zl,computed:Zl,beforeCreate:kn,created:kn,beforeMount:kn,mounted:kn,beforeUpdate:kn,updated:kn,beforeDestroy:kn,beforeUnmount:kn,destroyed:kn,unmounted:kn,activated:kn,deactivated:kn,errorCaptured:kn,serverPrefetch:kn,components:Zl,directives:Zl,watch:pz,provide:x0,inject:fz};function x0(n,e){return e?n?function(){return rn(Ne(n)?n.call(this,this):n,Ne(e)?e.call(this,this):e)}:e:n}function fz(n,e){return Zl(hm(n),hm(e))}function hm(n){if(be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function kn(n,e){return n?[...new Set([].concat(n,e))]:e}function Zl(n,e){return n?rn(Object.create(null),n,e):e}function k0(n,e){return n?be(n)&&be(e)?[...new Set([...n,...e])]:rn(Object.create(null),C0(n),C0(e??{})):e}function pz(n,e){if(!n)return e;if(!e)return n;const t=rn(Object.create(null),n);for(const r in e)t[r]=kn(n[r],e[r]);return t}function BP(){return{app:null,config:{isNativeTag:Lq,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gz=0;function _z(n,e){return function(r,i=null){Ne(r)||(r=rn({},r)),i!=null&&!Tt(i)&&(i=null);const s=BP(),o=new Set;let c=!1;const u=s.app={_uid:gz++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Bz,get config(){return s.config},set config(h){},use(h,...f){return o.has(h)||(h&&Ne(h.install)?(o.add(h),h.install(u,...f)):Ne(h)&&(o.add(h),h(u,...f))),u},mixin(h){return s.mixins.includes(h)||s.mixins.push(h),u},component(h,f){return f?(s.components[h]=f,u):s.components[h]},directive(h,f){return f?(s.directives[h]=f,u):s.directives[h]},mount(h,f,p){if(!c){const _=Ft(r,i);return _.appContext=s,f&&e?e(_,h):n(_,h,p),c=!0,u._container=h,h.__vue_app__=u,Rv(_.component)||_.component.proxy}},unmount(){c&&(n(null,u._container),delete u._container.__vue_app__)},provide(h,f){return s.provides[h]=f,u},runWithContext(h){$d=u;try{return h()}finally{$d=null}}};return u}}let $d=null;function id(n,e){if(Xt){let t=Xt.provides;const r=Xt.parent&&Xt.parent.provides;r===t&&(t=Xt.provides=Object.create(r)),t[n]=e}}function wr(n,e,t=!1){const r=Xt||yr;if(r||$d){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:$d._context.provides;if(i&&n in i)return i[n];if(arguments.length>1)return t&&Ne(e)?e.call(r&&r.proxy):e}}function mz(n,e,t,r=!1){const i={},s={};Ld(s,np,1),n.propsDefaults=Object.create(null),$P(n,e,i,s);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=r?i:mP(i):n.type.props?n.props=i:n.props=s,n.attrs=s}function yz(n,e,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=n,c=et(i),[u]=n.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=n.vnode.dynamicProps;for(let p=0;p<f.length;p++){let _=f[p];if(Xf(n.emitsOptions,_))continue;const I=e[_];if(u)if(Ye(s,_))I!==s[_]&&(s[_]=I,h=!0);else{const A=hi(_);i[A]=dm(u,c,A,I,n,!1)}else I!==s[_]&&(s[_]=I,h=!0)}}}else{$P(n,e,i,s)&&(h=!0);let f;for(const p in c)(!e||!Ye(e,p)&&((f=cl(p))===p||!Ye(e,f)))&&(u?t&&(t[p]!==void 0||t[f]!==void 0)&&(i[p]=dm(u,c,p,void 0,n,!0)):delete i[p]);if(s!==c)for(const p in s)(!e||!Ye(e,p))&&(delete s[p],h=!0)}h&&$i(n,"set","$attrs")}function $P(n,e,t,r){const[i,s]=n.propsOptions;let o=!1,c;if(e)for(let u in e){if(td(u))continue;const h=e[u];let f;i&&Ye(i,f=hi(u))?!s||!s.includes(f)?t[f]=h:(c||(c={}))[f]=h:Xf(n.emitsOptions,u)||(!(u in r)||h!==r[u])&&(r[u]=h,o=!0)}if(s){const u=et(t),h=c||wt;for(let f=0;f<s.length;f++){const p=s[f];t[p]=dm(i,u,p,h[p],n,!Ye(h,p))}}return o}function dm(n,e,t,r,i,s){const o=n[t];if(o!=null){const c=Ye(o,"default");if(c&&r===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&Ne(u)){const{propsDefaults:h}=i;t in h?r=h[t]:(Ps(i),r=h[t]=u.call(null,e),Es())}else r=u}o[0]&&(s&&!c?r=!1:o[1]&&(r===""||r===cl(t))&&(r=!0))}return r}function WP(n,e,t=!1){const r=e.propsCache,i=r.get(n);if(i)return i;const s=n.props,o={},c=[];let u=!1;if(!Ne(n)){const f=p=>{u=!0;const[_,I]=WP(p,e,!0);rn(o,_),I&&c.push(...I)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!s&&!u)return Tt(n)&&r.set(n,Ta),Ta;if(be(s))for(let f=0;f<s.length;f++){const p=hi(s[f]);D0(p)&&(o[p]=wt)}else if(s)for(const f in s){const p=hi(f);if(D0(p)){const _=s[f],I=o[p]=be(_)||Ne(_)?{type:_}:rn({},_);if(I){const A=M0(Boolean,I.type),P=M0(String,I.type);I[0]=A>-1,I[1]=P<0||A<P,(A>-1||Ye(I,"default"))&&c.push(p)}}}const h=[o,c];return Tt(n)&&r.set(n,h),h}function D0(n){return n[0]!=="$"}function N0(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function O0(n,e){return N0(n)===N0(e)}function M0(n,e){return be(e)?e.findIndex(t=>O0(t,n)):Ne(e)&&O0(e,n)?0:-1}const qP=n=>n[0]==="_"||n==="$stable",Tv=n=>be(n)?n.map(kr):[kr(n)],vz=(n,e,t)=>{if(e._n)return e;const r=Ha((...i)=>Tv(e(...i)),t);return r._c=!1,r},zP=(n,e,t)=>{const r=n._ctx;for(const i in n){if(qP(i))continue;const s=n[i];if(Ne(s))e[i]=vz(i,s,r);else if(s!=null){const o=Tv(s);e[i]=()=>o}}},KP=(n,e)=>{const t=Tv(e);n.slots.default=()=>t},Iz=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=et(e),Ld(e,"_",t)):zP(e,n.slots={})}else n.slots={},e&&KP(n,e);Ld(n.slots,np,1)},wz=(n,e,t)=>{const{vnode:r,slots:i}=n;let s=!0,o=wt;if(r.shapeFlag&32){const c=e._;c?t&&c===1?s=!1:(rn(i,e),!t&&c===1&&delete i._):(s=!e.$stable,zP(e,i)),o=e}else e&&(KP(n,e),o={default:1});if(s)for(const c in i)!qP(c)&&!(c in o)&&delete i[c]};function fm(n,e,t,r,i=!1){if(be(n)){n.forEach((_,I)=>fm(_,e&&(be(e)?e[I]:e),t,r,i));return}if(rd(r)&&!i)return;const s=r.shapeFlag&4?Rv(r.component)||r.component.proxy:r.el,o=i?null:s,{i:c,r:u}=n,h=e&&e.r,f=c.refs===wt?c.refs={}:c.refs,p=c.setupState;if(h!=null&&h!==u&&(Wt(h)?(f[h]=null,Ye(p,h)&&(p[h]=null)):Tn(h)&&(h.value=null)),Ne(u))ws(u,c,12,[o,f]);else{const _=Wt(u),I=Tn(u);if(_||I){const A=()=>{if(n.f){const P=_?Ye(p,u)?p[u]:f[u]:u.value;i?be(P)&&sv(P,s):be(P)?P.includes(s)||P.push(s):_?(f[u]=[s],Ye(p,u)&&(p[u]=f[u])):(u.value=[s],n.k&&(f[n.k]=u.value))}else _?(f[u]=o,Ye(p,u)&&(p[u]=o)):I&&(u.value=o,n.k&&(f[n.k]=o))};o?(A.id=-1,$n(A,t)):A()}}}const $n=G6;function Ez(n){return Tz(n)}function Tz(n,e){const t=rm();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:c,createComment:u,setText:h,setElementText:f,parentNode:p,nextSibling:_,setScopeId:I=Fr,insertStaticContent:A}=n,P=(w,T,C,O=null,$=null,q=null,te=!1,Q=null,Y=!!T.dynamicChildren)=>{if(w===T)return;w&&!ps(w,T)&&(O=U(w),gn(w,$,q,!0),w=null),T.patchFlag===-2&&(Y=!1,T.dynamicChildren=null);const{type:z,ref:pe,shapeFlag:le}=T;switch(z){case tp:x(w,T,C,O);break;case Wi:V(w,T,C,O);break;case sd:w==null&&W(T,C,O,te);break;case _r:an(w,T,C,O,$,q,te,Q,Y);break;default:le&1?j(w,T,C,O,$,q,te,Q,Y):le&6?Ct(w,T,C,O,$,q,te,Q,Y):(le&64||le&128)&&z.process(w,T,C,O,$,q,te,Q,Y,J)}pe!=null&&$&&fm(pe,w&&w.ref,q,T||w,!T)},x=(w,T,C,O)=>{if(w==null)r(T.el=c(T.children),C,O);else{const $=T.el=w.el;T.children!==w.children&&h($,T.children)}},V=(w,T,C,O)=>{w==null?r(T.el=u(T.children||""),C,O):T.el=w.el},W=(w,T,C,O)=>{[w.el,w.anchor]=A(w.children,T,C,O,w.el,w.anchor)},K=({el:w,anchor:T},C,O)=>{let $;for(;w&&w!==T;)$=_(w),r(w,C,O),w=$;r(T,C,O)},N=({el:w,anchor:T})=>{let C;for(;w&&w!==T;)C=_(w),i(w),w=C;i(T)},j=(w,T,C,O,$,q,te,Q,Y)=>{te=te||T.type==="svg",w==null?se(T,C,O,$,q,te,Q,Y):Te(w,T,$,q,te,Q,Y)},se=(w,T,C,O,$,q,te,Q)=>{let Y,z;const{type:pe,props:le,shapeFlag:_e,transition:Ie,dirs:Fe}=w;if(Y=w.el=o(w.type,q,le&&le.is,le),_e&8?f(Y,w.children):_e&16&&he(w.children,Y,null,O,$,q&&pe!=="foreignObject",te,Q),Fe&&Qs(w,null,O,"created"),ue(Y,w,w.scopeId,te,O),le){for(const We in le)We!=="value"&&!td(We)&&s(Y,We,null,le[We],q,w.children,O,$,Ot);"value"in le&&s(Y,"value",null,le.value),(z=le.onVnodeBeforeMount)&&Qr(z,O,w)}Fe&&Qs(w,null,O,"beforeMount");const Je=(!$||$&&!$.pendingBranch)&&Ie&&!Ie.persisted;Je&&Ie.beforeEnter(Y),r(Y,T,C),((z=le&&le.onVnodeMounted)||Je||Fe)&&$n(()=>{z&&Qr(z,O,w),Je&&Ie.enter(Y),Fe&&Qs(w,null,O,"mounted")},$)},ue=(w,T,C,O,$)=>{if(C&&I(w,C),O)for(let q=0;q<O.length;q++)I(w,O[q]);if($){let q=$.subTree;if(T===q){const te=$.vnode;ue(w,te,te.scopeId,te.slotScopeIds,$.parent)}}},he=(w,T,C,O,$,q,te,Q,Y=0)=>{for(let z=Y;z<w.length;z++){const pe=w[z]=Q?ls(w[z]):kr(w[z]);P(null,pe,T,C,O,$,q,te,Q)}},Te=(w,T,C,O,$,q,te)=>{const Q=T.el=w.el;let{patchFlag:Y,dynamicChildren:z,dirs:pe}=T;Y|=w.patchFlag&16;const le=w.props||wt,_e=T.props||wt;let Ie;C&&Ys(C,!1),(Ie=_e.onVnodeBeforeUpdate)&&Qr(Ie,C,T,w),pe&&Qs(T,w,C,"beforeUpdate"),C&&Ys(C,!0);const Fe=$&&T.type!=="foreignObject";if(z?Re(w.dynamicChildren,z,Q,C,O,Fe,q):te||De(w,T,Q,null,C,O,Fe,q,!1),Y>0){if(Y&16)St(Q,T,le,_e,C,O,$);else if(Y&2&&le.class!==_e.class&&s(Q,"class",null,_e.class,$),Y&4&&s(Q,"style",le.style,_e.style,$),Y&8){const Je=T.dynamicProps;for(let We=0;We<Je.length;We++){const vt=Je[We],Sn=le[vt],Kr=_e[vt];(Kr!==Sn||vt==="value")&&s(Q,vt,Sn,Kr,$,w.children,C,O,Ot)}}Y&1&&w.children!==T.children&&f(Q,T.children)}else!te&&z==null&&St(Q,T,le,_e,C,O,$);((Ie=_e.onVnodeUpdated)||pe)&&$n(()=>{Ie&&Qr(Ie,C,T,w),pe&&Qs(T,w,C,"updated")},O)},Re=(w,T,C,O,$,q,te)=>{for(let Q=0;Q<T.length;Q++){const Y=w[Q],z=T[Q],pe=Y.el&&(Y.type===_r||!ps(Y,z)||Y.shapeFlag&70)?p(Y.el):C;P(Y,z,pe,null,O,$,q,te,!0)}},St=(w,T,C,O,$,q,te)=>{if(C!==O){if(C!==wt)for(const Q in C)!td(Q)&&!(Q in O)&&s(w,Q,C[Q],null,te,T.children,$,q,Ot);for(const Q in O){if(td(Q))continue;const Y=O[Q],z=C[Q];Y!==z&&Q!=="value"&&s(w,Q,z,Y,te,T.children,$,q,Ot)}"value"in O&&s(w,"value",C.value,O.value)}},an=(w,T,C,O,$,q,te,Q,Y)=>{const z=T.el=w?w.el:c(""),pe=T.anchor=w?w.anchor:c("");let{patchFlag:le,dynamicChildren:_e,slotScopeIds:Ie}=T;Ie&&(Q=Q?Q.concat(Ie):Ie),w==null?(r(z,C,O),r(pe,C,O),he(T.children,C,pe,$,q,te,Q,Y)):le>0&&le&64&&_e&&w.dynamicChildren?(Re(w.dynamicChildren,_e,C,$,q,te,Q),(T.key!=null||$&&T===$.subTree)&&HP(w,T,!0)):De(w,T,C,pe,$,q,te,Q,Y)},Ct=(w,T,C,O,$,q,te,Q,Y)=>{T.slotScopeIds=Q,w==null?T.shapeFlag&512?$.ctx.activate(T,C,O,te,Y):Ht(T,C,O,$,q,te,Y):jn(w,T,Y)},Ht=(w,T,C,O,$,q,te)=>{const Q=w.component=kz(w,O,$);if(OP(w)&&(Q.ctx.renderer=J),Dz(Q),Q.asyncDep){if($&&$.registerDep(Q,ht),!w.el){const Y=Q.subTree=Ft(Wi);V(null,Y,T,C)}return}ht(Q,w,T,C,$,q,te)},jn=(w,T,C)=>{const O=T.component=w.component;if(U6(w,T,C))if(O.asyncDep&&!O.asyncResolved){Ae(O,T,C);return}else O.next=T,N6(O.update),O.update();else T.el=w.el,O.vnode=T},ht=(w,T,C,O,$,q,te)=>{const Q=()=>{if(w.isMounted){let{next:pe,bu:le,u:_e,parent:Ie,vnode:Fe}=w,Je=pe,We;Ys(w,!1),pe?(pe.el=Fe.el,Ae(w,pe,te)):pe=Fe,le&&jg(le),(We=pe.props&&pe.props.onVnodeBeforeUpdate)&&Qr(We,Ie,pe,Fe),Ys(w,!0);const vt=Qg(w),Sn=w.subTree;w.subTree=vt,P(Sn,vt,p(Sn.el),U(Sn),w,$,q),pe.el=vt.el,Je===null&&vv(w,vt.el),_e&&$n(_e,$),(We=pe.props&&pe.props.onVnodeUpdated)&&$n(()=>Qr(We,Ie,pe,Fe),$)}else{let pe;const{el:le,props:_e}=T,{bm:Ie,m:Fe,parent:Je}=w,We=rd(T);if(Ys(w,!1),Ie&&jg(Ie),!We&&(pe=_e&&_e.onVnodeBeforeMount)&&Qr(pe,Je,T),Ys(w,!0),le&&$e){const vt=()=>{w.subTree=Qg(w),$e(le,w.subTree,w,$,null)};We?T.type.__asyncLoader().then(()=>!w.isUnmounted&&vt()):vt()}else{const vt=w.subTree=Qg(w);P(null,vt,C,O,w,$,q),T.el=vt.el}if(Fe&&$n(Fe,$),!We&&(pe=_e&&_e.onVnodeMounted)){const vt=T;$n(()=>Qr(pe,Je,vt),$)}(T.shapeFlag&256||Je&&rd(Je.vnode)&&Je.vnode.shapeFlag&256)&&w.a&&$n(w.a,$),w.isMounted=!0,T=C=O=null}},Y=w.effect=new hv(Q,()=>yv(z),w.scope),z=w.update=()=>Y.run();z.id=w.uid,Ys(w,!0),z()},Ae=(w,T,C)=>{T.component=w;const O=w.vnode.props;w.vnode=T,w.next=null,yz(w,T.props,O,C),wz(w,T.children,C),ul(),T0(),hl()},De=(w,T,C,O,$,q,te,Q,Y=!1)=>{const z=w&&w.children,pe=w?w.shapeFlag:0,le=T.children,{patchFlag:_e,shapeFlag:Ie}=T;if(_e>0){if(_e&128){Qn(z,le,C,O,$,q,te,Q,Y);return}else if(_e&256){Ar(z,le,C,O,$,q,te,Q,Y);return}}Ie&8?(pe&16&&Ot(z,$,q),le!==z&&f(C,le)):pe&16?Ie&16?Qn(z,le,C,O,$,q,te,Q,Y):Ot(z,$,q,!0):(pe&8&&f(C,""),Ie&16&&he(le,C,O,$,q,te,Q,Y))},Ar=(w,T,C,O,$,q,te,Q,Y)=>{w=w||Ta,T=T||Ta;const z=w.length,pe=T.length,le=Math.min(z,pe);let _e;for(_e=0;_e<le;_e++){const Ie=T[_e]=Y?ls(T[_e]):kr(T[_e]);P(w[_e],Ie,C,null,$,q,te,Q,Y)}z>pe?Ot(w,$,q,!0,!1,le):he(T,C,O,$,q,te,Q,Y,le)},Qn=(w,T,C,O,$,q,te,Q,Y)=>{let z=0;const pe=T.length;let le=w.length-1,_e=pe-1;for(;z<=le&&z<=_e;){const Ie=w[z],Fe=T[z]=Y?ls(T[z]):kr(T[z]);if(ps(Ie,Fe))P(Ie,Fe,C,null,$,q,te,Q,Y);else break;z++}for(;z<=le&&z<=_e;){const Ie=w[le],Fe=T[_e]=Y?ls(T[_e]):kr(T[_e]);if(ps(Ie,Fe))P(Ie,Fe,C,null,$,q,te,Q,Y);else break;le--,_e--}if(z>le){if(z<=_e){const Ie=_e+1,Fe=Ie<pe?T[Ie].el:O;for(;z<=_e;)P(null,T[z]=Y?ls(T[z]):kr(T[z]),C,Fe,$,q,te,Q,Y),z++}}else if(z>_e)for(;z<=le;)gn(w[z],$,q,!0),z++;else{const Ie=z,Fe=z,Je=new Map;for(z=Fe;z<=_e;z++){const ln=T[z]=Y?ls(T[z]):kr(T[z]);ln.key!=null&&Je.set(ln.key,z)}let We,vt=0;const Sn=_e-Fe+1;let Kr=!1,Uo=0;const _i=new Array(Sn);for(z=0;z<Sn;z++)_i[z]=0;for(z=Ie;z<=le;z++){const ln=w[z];if(vt>=Sn){gn(ln,$,q,!0);continue}let Vn;if(ln.key!=null)Vn=Je.get(ln.key);else for(We=Fe;We<=_e;We++)if(_i[We-Fe]===0&&ps(ln,T[We])){Vn=We;break}Vn===void 0?gn(ln,$,q,!0):(_i[Vn-Fe]=z+1,Vn>=Uo?Uo=Vn:Kr=!0,P(ln,T[Vn],C,null,$,q,te,Q,Y),vt++)}const Bo=Kr?Az(_i):Ta;for(We=Bo.length-1,z=Sn-1;z>=0;z--){const ln=Fe+z,Vn=T[ln],$o=ln+1<pe?T[ln+1].el:O;_i[z]===0?P(null,Vn,C,$o,$,q,te,Q,Y):Kr&&(We<0||z!==Bo[We]?Nt(Vn,C,$o,2):We--)}}},Nt=(w,T,C,O,$=null)=>{const{el:q,type:te,transition:Q,children:Y,shapeFlag:z}=w;if(z&6){Nt(w.component.subTree,T,C,O);return}if(z&128){w.suspense.move(T,C,O);return}if(z&64){te.move(w,T,C,J);return}if(te===_r){r(q,T,C);for(let le=0;le<Y.length;le++)Nt(Y[le],T,C,O);r(w.anchor,T,C);return}if(te===sd){K(w,T,C);return}if(O!==2&&z&1&&Q)if(O===0)Q.beforeEnter(q),r(q,T,C),$n(()=>Q.enter(q),$);else{const{leave:le,delayLeave:_e,afterLeave:Ie}=Q,Fe=()=>r(q,T,C),Je=()=>{le(q,()=>{Fe(),Ie&&Ie()})};_e?_e(q,Fe,Je):Je()}else r(q,T,C)},gn=(w,T,C,O=!1,$=!1)=>{const{type:q,props:te,ref:Q,children:Y,dynamicChildren:z,shapeFlag:pe,patchFlag:le,dirs:_e}=w;if(Q!=null&&fm(Q,null,C,w,!0),pe&256){T.ctx.deactivate(w);return}const Ie=pe&1&&_e,Fe=!rd(w);let Je;if(Fe&&(Je=te&&te.onVnodeBeforeUnmount)&&Qr(Je,T,w),pe&6)br(w.component,C,O);else{if(pe&128){w.suspense.unmount(C,O);return}Ie&&Qs(w,null,T,"beforeUnmount"),pe&64?w.type.remove(w,T,C,$,J,O):z&&(q!==_r||le>0&&le&64)?Ot(z,T,C,!1,!0):(q===_r&&le&384||!$&&pe&16)&&Ot(Y,T,C),O&&Hi(w)}(Fe&&(Je=te&&te.onVnodeUnmounted)||Ie)&&$n(()=>{Je&&Qr(Je,T,w),Ie&&Qs(w,null,T,"unmounted")},C)},Hi=w=>{const{type:T,el:C,anchor:O,transition:$}=w;if(T===_r){Gi(C,O);return}if(T===sd){N(w);return}const q=()=>{i(C),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:te,delayLeave:Q}=$,Y=()=>te(C,q);Q?Q(w.el,q,Y):Y()}else q()},Gi=(w,T)=>{let C;for(;w!==T;)C=_(w),i(w),w=C;i(T)},br=(w,T,C)=>{const{bum:O,scope:$,update:q,subTree:te,um:Q}=w;O&&jg(O),$.stop(),q&&(q.active=!1,gn(te,w,T,C)),Q&&$n(Q,T),$n(()=>{w.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Ot=(w,T,C,O=!1,$=!1,q=0)=>{for(let te=q;te<w.length;te++)gn(w[te],T,C,O,$)},U=w=>w.shapeFlag&6?U(w.component.subTree):w.shapeFlag&128?w.suspense.next():_(w.anchor||w.el),re=(w,T,C)=>{w==null?T._vnode&&gn(T._vnode,null,null,!0):P(T._vnode||null,w,T,null,null,null,C),T0(),PP(),T._vnode=w},J={p:P,um:gn,m:Nt,r:Hi,mt:Ht,mc:he,pc:De,pbc:Re,n:U,o:n};let ge,$e;return e&&([ge,$e]=e(J)),{render:re,hydrate:ge,createApp:_z(re,ge)}}function Ys({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function HP(n,e,t=!1){const r=n.children,i=e.children;if(be(r)&&be(i))for(let s=0;s<r.length;s++){const o=r[s];let c=i[s];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[s]=ls(i[s]),c.el=o.el),t||HP(o,c)),c.type===tp&&(c.el=o.el)}}function Az(n){const e=n.slice(),t=[0];let r,i,s,o,c;const u=n.length;for(r=0;r<u;r++){const h=n[r];if(h!==0){if(i=t[t.length-1],n[i]<h){e[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)c=s+o>>1,n[t[c]]<h?s=c+1:o=c;h<n[t[s]]&&(s>0&&(e[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const bz=n=>n.__isTeleport,_r=Symbol.for("v-fgt"),tp=Symbol.for("v-txt"),Wi=Symbol.for("v-cmt"),sd=Symbol.for("v-stc"),hc=[];let vr=null;function Et(n=!1){hc.push(vr=n?null:[])}function GP(){hc.pop(),vr=hc[hc.length-1]||null}let Ga=1;function V0(n){Ga+=n}function jP(n){return n.dynamicChildren=Ga>0?vr||Ta:null,GP(),Ga>0&&vr&&vr.push(n),n}function en(n,e,t,r,i,s){return jP(ae(n,e,t,r,i,s,!0))}function zc(n,e,t,r,i){return jP(Ft(n,e,t,r,i,!0))}function Wd(n){return n?n.__v_isVNode===!0:!1}function ps(n,e){return n.type===e.type&&n.key===e.key}const np="__vInternal",QP=({key:n})=>n??null,od=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Wt(n)||Tn(n)||Ne(n)?{i:yr,r:n,k:e,f:!!t}:n:null);function ae(n,e=null,t=null,r=0,i=null,s=n===_r?0:1,o=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&QP(e),ref:e&&od(e),scopeId:Zf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:yr};return c?(Av(u,t),s&128&&n.normalize(u)):t&&(u.shapeFlag|=Wt(t)?8:16),Ga>0&&!o&&vr&&(u.patchFlag>0||s&6)&&u.patchFlag!==32&&vr.push(u),u}const Ft=Rz;function Rz(n,e=null,t=null,r=0,i=null,s=!1){if((!n||n===az)&&(n=Wi),Wd(n)){const c=ja(n,e,!0);return t&&Av(c,t),Ga>0&&!s&&vr&&(c.shapeFlag&6?vr[vr.indexOf(n)]=c:vr.push(c)),c.patchFlag|=-2,c}if(Lz(n)&&(n=n.__vccOpts),e){e=Sz(e);let{class:c,style:u}=e;c&&!Wt(c)&&(e.class=ai(c)),Tt(u)&&(vP(u)&&!be(u)&&(u=rn({},u)),e.style=cv(u))}const o=Wt(n)?1:B6(n)?128:bz(n)?64:Tt(n)?4:Ne(n)?2:0;return ae(n,e,t,r,i,o,s,!0)}function Sz(n){return n?vP(n)||np in n?rn({},n):n:null}function ja(n,e,t=!1){const{props:r,ref:i,patchFlag:s,children:o}=n,c=e?Cz(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&QP(c),ref:e&&e.ref?t&&i?be(i)?i.concat(od(e)):[i,od(e)]:od(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==_r?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ja(n.ssContent),ssFallback:n.ssFallback&&ja(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Or(n=" ",e=0){return Ft(tp,null,n,e)}function YP(n,e){const t=Ft(sd,null,n);return t.staticCount=e,t}function Kc(n="",e=!1){return e?(Et(),zc(Wi,null,n)):Ft(Wi,null,n)}function kr(n){return n==null||typeof n=="boolean"?Ft(Wi):be(n)?Ft(_r,null,n.slice()):typeof n=="object"?ls(n):Ft(tp,null,String(n))}function ls(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ja(n)}function Av(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(be(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Av(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(np in e)?e._ctx=yr:i===3&&yr&&(yr.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:yr},t=32):(e=String(e),r&64?(t=16,e=[Or(e)]):t=8);n.children=e,n.shapeFlag|=t}function Cz(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=ai([e.class,r.class]));else if(i==="style")e.style=cv([e.style,r.style]);else if(Hf(i)){const s=e[i],o=r[i];o&&s!==o&&!(be(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Qr(n,e,t,r=null){Ur(n,e,7,[t,r])}const Pz=BP();let xz=0;function kz(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||Pz,s={uid:xz++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new oP(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:WP(r,i),emitsOptions:kP(r,i),emit:null,emitted:null,propsDefaults:wt,inheritAttrs:r.inheritAttrs,ctx:wt,data:wt,props:wt,attrs:wt,slots:wt,refs:wt,setupState:wt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=M6.bind(null,s),n.ce&&n.ce(s),s}let Xt=null;const JP=()=>Xt||yr;let bv,oa,L0="__VUE_INSTANCE_SETTERS__";(oa=rm()[L0])||(oa=rm()[L0]=[]),oa.push(n=>Xt=n),bv=n=>{oa.length>1?oa.forEach(e=>e(n)):oa[0](n)};const Ps=n=>{bv(n),n.scope.on()},Es=()=>{Xt&&Xt.scope.off(),bv(null)};function XP(n){return n.vnode.shapeFlag&4}let Hc=!1;function Dz(n,e=!1){Hc=e;const{props:t,children:r}=n.vnode,i=XP(n);mz(n,t,i,e),Iz(n,r);const s=i?Nz(n,e):void 0;return Hc=!1,s}function Nz(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=IP(new Proxy(n.ctx,cz));const{setup:r}=t;if(r){const i=n.setupContext=r.length>1?Mz(n):null;Ps(n),ul();const s=ws(r,n,0,[n.props,i]);if(hl(),Es(),av(s)){if(s.then(Es,Es),e)return s.then(o=>{pm(n,o,e)}).catch(o=>{Iu(o,n,0)});n.asyncDep=s}else pm(n,s,e)}else ZP(n,e)}function pm(n,e,t){Ne(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Tt(e)&&(n.setupState=AP(e)),ZP(n,t)}let F0;function ZP(n,e,t){const r=n.type;if(!n.render){if(!e&&F0&&!r.render){const i=r.template||Ev(n).template;if(i){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:c,compilerOptions:u}=r,h=rn(rn({isCustomElement:s,delimiters:c},o),u);r.render=F0(i,h)}}n.render=r.render||Fr}Ps(n),ul(),uz(n),hl(),Es()}function Oz(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Gn(n,"get","$attrs"),e[t]}}))}function Mz(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Oz(n)},slots:n.slots,emit:n.emit,expose:e}}function Rv(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(AP(IP(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in uc)return uc[t](n)},has(e,t){return t in e||t in uc}}))}function Vz(n,e=!0){return Ne(n)?n.displayName||n.name:n.name||e&&n.__name}function Lz(n){return Ne(n)&&"__vccOpts"in n}const nr=(n,e)=>x6(n,e,Hc);function e1(n,e,t){const r=arguments.length;return r===2?Tt(e)&&!be(e)?Wd(e)?Ft(n,null,[e]):Ft(n,e):Ft(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Wd(t)&&(t=[t]),Ft(n,e,t))}const Fz=Symbol.for("v-scx"),Uz=()=>wr(Fz),Bz="3.3.4",$z="http://www.w3.org/2000/svg",so=typeof document<"u"?document:null,U0=so&&so.createElement("template"),Wz={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e?so.createElementNS($z,n):so.createElement(n,t?{is:t}:void 0);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>so.createTextNode(n),createComment:n=>so.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>so.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{U0.innerHTML=r?`<svg>${n}</svg>`:n;const c=U0.content;if(r){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}e.insertBefore(c,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function qz(n,e,t){const r=n._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function zz(n,e,t){const r=n.style,i=Wt(t);if(t&&!i){if(e&&!Wt(e))for(const s in e)t[s]==null&&gm(r,s,"");for(const s in t)gm(r,s,t[s])}else{const s=r.display;i?e!==t&&(r.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(r.display=s)}}const B0=/\s*!important$/;function gm(n,e,t){if(be(t))t.forEach(r=>gm(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Kz(n,e);B0.test(t)?n.setProperty(cl(r),t.replace(B0,""),"important"):n[r]=t}}const $0=["Webkit","Moz","ms"],Jg={};function Kz(n,e){const t=Jg[e];if(t)return t;let r=hi(e);if(r!=="filter"&&r in n)return Jg[e]=r;r=Qf(r);for(let i=0;i<$0.length;i++){const s=$0[i]+r;if(s in n)return Jg[e]=s}return e}const W0="http://www.w3.org/1999/xlink";function Hz(n,e,t,r,i){if(r&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(W0,e.slice(6,e.length)):n.setAttributeNS(W0,e,t);else{const s=Yq(e);t==null||s&&!iP(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Gz(n,e,t,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),n[e]=t??"";return}const c=n.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){n._value=t;const h=c==="OPTION"?n.getAttribute("value"):n.value,f=t??"";h!==f&&(n.value=f),t==null&&n.removeAttribute(e);return}let u=!1;if(t===""||t==null){const h=typeof n[e];h==="boolean"?t=iP(t):t==null&&h==="string"?(t="",u=!0):h==="number"&&(t=0,u=!0)}try{n[e]=t}catch{}u&&n.removeAttribute(e)}function jz(n,e,t,r){n.addEventListener(e,t,r)}function Qz(n,e,t,r){n.removeEventListener(e,t,r)}function Yz(n,e,t,r,i=null){const s=n._vei||(n._vei={}),o=s[e];if(r&&o)o.value=r;else{const[c,u]=Jz(e);if(r){const h=s[e]=eK(r,i);jz(n,c,h,u)}else o&&(Qz(n,c,o,u),s[e]=void 0)}}const q0=/(?:Once|Passive|Capture)$/;function Jz(n){let e;if(q0.test(n)){e={};let r;for(;r=n.match(q0);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):cl(n.slice(2)),e]}let Xg=0;const Xz=Promise.resolve(),Zz=()=>Xg||(Xz.then(()=>Xg=0),Xg=Date.now());function eK(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Ur(tK(r,t.value),e,5,[r])};return t.value=n,t.attached=Zz(),t}function tK(n,e){if(be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const z0=/^on[a-z]/,nK=(n,e,t,r,i=!1,s,o,c,u)=>{e==="class"?qz(n,r,i):e==="style"?zz(n,t,r):Hf(e)?iv(e)||Yz(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rK(n,e,r,i))?Gz(n,e,r,s,o,c,u):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Hz(n,e,r,i))};function rK(n,e,t,r){return r?!!(e==="innerHTML"||e==="textContent"||e in n&&z0.test(e)&&Ne(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||z0.test(e)&&Wt(t)?!1:e in n}const iK=rn({patchProp:nK},Wz);let K0;function sK(){return K0||(K0=Ez(iK))}const oK=(...n)=>{const e=sK().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=aK(r);if(!i)return;const s=e._component;!Ne(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function aK(n){return Wt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lK=new Map,cK={activated:!1,tokenObservers:[]};function qr(n){return lK.get(n)||Object.assign({},cK)}const H0={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uK{constructor(e,t,r,i,s){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new mc,await hK(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new mc,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function hK(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dK={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},qd=new el("appCheck","AppCheck",dK);function t1(n){if(!qr(n).activated)throw qd.create("use-before-activation",{appName:n.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fK="firebase-app-check-database",pK=1,_m="firebase-app-check-store";let Vh=null;function gK(){return Vh||(Vh=new Promise((n,e)=>{try{const t=indexedDB.open(fK,pK);t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;e(qd.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},t.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(_m,{keyPath:"compositeKey"})}}}catch(t){e(qd.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),Vh)}function _K(n,e){return mK(yK(n),e)}async function mK(n,e){const r=(await gK()).transaction(_m,"readwrite"),s=r.objectStore(_m).put({compositeKey:n,value:e});return new Promise((o,c)=>{s.onsuccess=u=>{o()},r.onerror=u=>{var h;c(qd.create("storage-set",{originalErrorMessage:(h=u.target.error)===null||h===void 0?void 0:h.message}))}})}function yK(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=new Zc("@firebase/app-check");function G0(n,e){return Um()?_K(n,e).catch(t=>{mm.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vK={error:"UNKNOWN_ERROR"};function IK(n){return sf.encodeString(JSON.stringify(n),!1)}async function ym(n,e=!1){const t=n.app;t1(t);const r=qr(t);let i=r.token,s;if(i&&!ec(i)&&(r.token=void 0,i=void 0),!i){const u=await r.cachedTokenPromise;u&&(ec(u)?i=u:await G0(t,void 0))}if(!e&&i&&ec(i))return{token:i.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),i=await qr(t).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"?mm.warn(u.message):mm.error(u),s=u}let c;return i?s?ec(i)?c={token:i.token,internalError:s}:c=Q0(s):(c={token:i.token},r.token=i,await G0(t,i)):c=Q0(s),o&&AK(t,c),c}async function wK(n){const e=n.app;t1(e);const{provider:t}=qr(e);{const{token:r}=await t.getToken();return{token:r}}}function EK(n,e,t,r){const{app:i}=n,s=qr(i),o={next:t,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&ec(s.token)){const c=s.token;Promise.resolve().then(()=>{t({token:c.token}),j0(n)}).catch(()=>{})}s.cachedTokenPromise.then(()=>j0(n))}function n1(n,e){const t=qr(n),r=t.tokenObservers.filter(i=>i.next!==e);r.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=r}function j0(n){const{app:e}=n,t=qr(e);let r=t.tokenRefresher;r||(r=TK(n),t.tokenRefresher=r),!r.isRunning()&&t.isTokenAutoRefreshEnabled&&r.start()}function TK(n){const{app:e}=n;return new uK(async()=>{const t=qr(e);let r;if(t.token?r=await ym(n,!0):r=await ym(n),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const t=qr(e);if(t.token){let r=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const i=t.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},H0.RETRIAL_MIN_WAIT,H0.RETRIAL_MAX_WAIT)}function AK(n,e){const t=qr(n).tokenObservers;for(const r of t)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function ec(n){return n.expireTimeMillis-Date.now()>0}function Q0(n){return{token:IK(vK),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bK{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=qr(this.app);for(const t of e)n1(this.app,t.next);return Promise.resolve()}}function RK(n,e){return new bK(n,e)}function SK(n){return{getToken:e=>ym(n,e),getLimitedUseToken:()=>wK(n),addTokenListener:e=>EK(n,"INTERNAL",e),removeTokenListener:e=>n1(n.app,e)}}const CK="@firebase/app-check",PK="0.8.0",xK="app-check",Y0="app-check-internal";function kK(){li(new $r(xK,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return RK(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(Y0).initialize()})),li(new $r(Y0,n=>{const e=n.getProvider("app-check").getImmediate();return SK(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),ir(CK,PK)}kK();const r1=Symbol("firebaseApp");function rp(n){return JP()&&wr(r1,null)||$m(n)}const DK=typeof window<"u",Lh=new WeakMap;function NK(n,e){if(!Lh.has(n)){const t=Jq(!0);Lh.set(n,t);const{unmount:r}=e;e.unmount=()=>{r.call(e),t.stop(),Lh.delete(n)}}return Lh.get(n)}const i1=new WeakMap;function Sv(n){return i1.get(rp(n))}const Fh=new WeakMap;function s1(n){const e=rp(n);if(!Fh.has(e)){let t;const i=[new Promise(s=>{t=s}),s=>{Fh.set(e,s),t(s.value)}];Fh.set(e,i)}return Fh.get(e)}function zd(n){const e=s1(n);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function OK(n,e){const t=Yb(e);Fb(t,r=>{const i=s1();n.value=r,Array.isArray(i)&&i[1](n)})}const J0="@firebase/database",X0="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o1="";function MK(n){o1=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VK{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),dn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:yc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LK{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return qi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new VK(e)}}catch{}return new LK},uo=a1("localStorage"),vm=a1("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new Zc("@firebase/database"),FK=function(){let n=1;return function(){return n++}}(),l1=function(n){const e=KF(n),t=new BF;t.update(e);const r=t.digest();return sf.encodeByteArray(r)},Eu=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Eu.apply(null,r):typeof r=="object"?e+=dn(r):e+=r,e+=" "}return e};let _o=null,Z0=!0;const UK=function(n,e){Z(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Ca.logLevel=Ge.VERBOSE,_o=Ca.log.bind(Ca),e&&vm.set("logging_enabled",!0)):typeof n=="function"?_o=n:(_o=null,vm.remove("logging_enabled"))},vn=function(...n){if(Z0===!0&&(Z0=!1,_o===null&&vm.get("logging_enabled")===!0&&UK(!0)),_o){const e=Eu.apply(null,n);_o(e)}},Tu=function(n){return function(...e){vn(n,...e)}},Im=function(...n){const e="FIREBASE INTERNAL ERROR: "+Eu(...n);Ca.error(e)},Co=function(...n){const e=`FIREBASE FATAL ERROR: ${Eu(...n)}`;throw Ca.error(e),new Error(e)},sr=function(...n){const e="FIREBASE WARNING: "+Eu(...n);Ca.warn(e)},BK=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&sr("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},c1=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},$K=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Qa="[MIN_NAME]",Po="[MAX_NAME]",dl=function(n,e){if(n===e)return 0;if(n===Qa||e===Po)return-1;if(e===Qa||n===Po)return 1;{const t=eA(n),r=eA(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},WK=function(n,e){return n===e?0:n<e?-1:1},Bl=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+dn(e))},Cv=function(n){if(typeof n!="object"||n===null)return dn(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=dn(e[r]),t+=":",t+=Cv(n[e[r]]);return t+="}",t},u1=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function Tr(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const h1=function(n){Z(!c1(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,s,o,c,u;n===0?(s=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(n)/Math.LN2),r),s=c+r,o=Math.round(n*Math.pow(2,t-c)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-r-t))));const h=[];for(u=t;u;u-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)h.push(s%2?1:0),s=Math.floor(s/2);h.push(i?1:0),h.reverse();const f=h.join("");let p="";for(u=0;u<64;u+=8){let _=parseInt(f.substr(u,8),2).toString(16);_.length===1&&(_="0"+_),p=p+_}return p.toLowerCase()},qK=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},zK=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},KK=new RegExp("^-?(0*)\\d{1,10}$"),HK=-2147483648,GK=2147483647,eA=function(n){if(KK.test(n)){const e=Number(n);if(e>=HK&&e<=GK)return e}return null},Au=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw sr("Exception was thrown by user callback.",t),e},Math.floor(0))}},jK=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},dc=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QK{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){sr(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YK{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(vn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',sr(e)}}class wm{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wm.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="5",d1="v",f1="s",p1="r",g1="f",_1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,m1="ls",y1="p",Em="ac",v1="websocket",I1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JK{constructor(e,t,r,i,s=!1,o="",c=!1,u=!1){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=uo.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&uo.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function XK(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function w1(n,e,t){Z(typeof e=="string","typeof type must == string"),Z(typeof t=="object","typeof params must == object");let r;if(e===v1)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===I1)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);XK(n)&&(t.ns=n.namespace);const i=[];return Tr(t,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZK{constructor(){this.counters_={}}incrementCounter(e,t=1){qi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return EF(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg={},e_={};function xv(n){const e=n.toString();return Zg[e]||(Zg[e]=new ZK),Zg[e]}function eH(n,e){const t=n.toString();return e_[t]||(e_[t]=e()),e_[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tH{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Au(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA="start",nH="close",rH="pLPCommand",iH="pRTLPCB",E1="id",T1="pw",A1="ser",sH="cb",oH="seg",aH="ts",lH="d",cH="dframe",b1=1870,R1=30,uH=b1-R1,hH=25e3,dH=3e4;class ga{constructor(e,t,r,i,s,o,c){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Tu(e),this.stats_=xv(t),this.urlFn=u=>(this.appCheckToken&&(u[Em]=this.appCheckToken),w1(t,I1,u))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new tH(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(dH)),$K(()=>{if(this.isClosed_)return;this.scriptTagHolder=new kv((...s)=>{const[o,c,u,h,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===tA)this.id=c,this.password=u;else if(o===nH)c?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(c,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,c]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,c)},()=>{this.onClosed_()},this.urlFn);const r={};r[tA]="t",r[A1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[sH]=this.scriptTagHolder.uniqueCallbackIdentifier),r[d1]=Pv,this.transportSessionId&&(r[f1]=this.transportSessionId),this.lastSessionId&&(r[m1]=this.lastSessionId),this.applicationId&&(r[y1]=this.applicationId),this.appCheckToken&&(r[Em]=this.appCheckToken),typeof location<"u"&&location.hostname&&_1.test(location.hostname)&&(r[p1]=g1);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ga.forceAllow_=!0}static forceDisallow(){ga.forceDisallow_=!0}static isAvailable(){return ga.forceAllow_?!0:!ga.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!qK()&&!zK()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=dn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=rb(t),i=u1(r,uH);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[cH]="t",r[E1]=e,r[T1]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=dn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class kv{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=FK(),window[rH+this.uniqueCallbackIdentifier]=e,window[iH+this.uniqueCallbackIdentifier]=t,this.myIFrame=kv.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(c){vn("frame writing exception"),c.stack&&vn(c.stack),vn(c)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||vn("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[E1]=this.myID,e[T1]=this.myPW,e[A1]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+R1+r.length<=b1;){const o=this.pendingSegs.shift();r=r+"&"+oH+i+"="+o.seg+"&"+aH+i+"="+o.ts+"&"+lH+i+"="+o.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(hH)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{vn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fH=16384,pH=45e3;let Kd=null;typeof MozWebSocket<"u"?Kd=MozWebSocket:typeof WebSocket<"u"&&(Kd=WebSocket);class Mr{constructor(e,t,r,i,s,o,c){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Tu(this.connId),this.stats_=xv(t),this.connURL=Mr.connectionURL_(t,o,c,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,s){const o={};return o[d1]=Pv,typeof location<"u"&&location.hostname&&_1.test(location.hostname)&&(o[p1]=g1),t&&(o[f1]=t),r&&(o[m1]=r),i&&(o[Em]=i),s&&(o[y1]=s),w1(e,v1,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,uo.set("previous_websocket_failure",!0);try{let r;cb(),this.mySock=new Kd(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Mr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Kd!==null&&!Mr.forceDisallow_}static previouslyFailed(){return uo.isInMemoryStorage||uo.get("previous_websocket_failure")===!0}markConnectionHealthy(){uo.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=yc(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Z(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=dn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=u1(t,fH);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pH))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Mr.responsesRequiredToBeHealthy=2;Mr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ga,Mr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Mr&&Mr.isAvailable();let r=t&&!Mr.previouslyFailed();if(e.webSocketOnly&&(t||sr("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Mr];else{const i=this.transports_=[];for(const s of Gc.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Gc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Gc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gH=6e4,_H=5e3,mH=10*1024,yH=100*1024,t_="t",nA="d",vH="s",rA="r",IH="e",iA="o",sA="a",oA="n",aA="p",wH="h";class EH{constructor(e,t,r,i,s,o,c,u,h,f){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=c,this.onDisconnect_=u,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Tu("c:"+this.id+":"),this.transportManager_=new Gc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=dc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yH?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>mH?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(t_ in e){const t=e[t_];t===sA?this.upgradeIfSecondaryHealthy_():t===rA?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===iA&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Bl("t",e),r=Bl("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:aA,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:sA,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:oA,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Bl("t",e),r=Bl("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Bl(t_,e);if(nA in e){const r=e[nA];if(t===wH){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===oA){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===vH?this.onConnectionShutdown_(r):t===rA?this.onReset_(r):t===IH?Im("Server Error: "+r):t===iA?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Im("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Pv!==r&&sr("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),dc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(gH))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):dc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_H))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:aA,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(uo.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e){this.allowedEvents_=e,this.listeners_={},Z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){Z(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd extends C1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Fm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Hd}getInitialEvent(e){return Z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=32,cA=768;class yt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function lt(){return new yt("")}function je(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function xs(n){return n.pieces_.length-n.pieceNum_}function gt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new yt(n.pieces_,e)}function P1(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function TH(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function x1(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function k1(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new yt(e,0)}function Zt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof yt)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new yt(t,0)}function ze(n){return n.pieceNum_>=n.pieces_.length}function Ir(n,e){const t=je(n),r=je(e);if(t===null)return e;if(t===r)return Ir(gt(n),gt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function D1(n,e){if(xs(n)!==xs(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Vr(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(xs(n)>xs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class AH{constructor(e,t){this.errorPrefix_=t,this.parts_=x1(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=af(this.parts_[r]);N1(this)}}function bH(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=af(e),N1(n)}function RH(n){const e=n.parts_.pop();n.byteLength_-=af(e),n.parts_.length>0&&(n.byteLength_-=1)}function N1(n){if(n.byteLength_>cA)throw new Error(n.errorPrefix_+"has a key path longer than "+cA+" bytes ("+n.byteLength_+").");if(n.parts_.length>lA)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+lA+") or object contains a cycle "+Zs(n))}function Zs(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv extends C1{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Dv}getInitialEvent(e){return Z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=1e3,SH=60*5*1e3,uA=30*1e3,CH=1.3,PH=3e4,xH="server_kill",hA=3;class Fi extends S1{constructor(e,t,r,i,s,o,c,u){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=c,this.authOverride_=u,this.id=Fi.nextPersistentConnectionId_++,this.log_=Tu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$l,this.maxReconnectDelay_=SH,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!cb())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Dv.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(dn(s)),Z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new mc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const c=o.d;o.s==="ok"?t.resolve(c):t.reject(c)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),Z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Z(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const c={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(o).set(s,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,c=>{const u=c.d,h=c.s;Fi.warnOnListenWarnings_(u,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",c),h!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(h,u))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&qi(e,"w")){const r=ka(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();sr(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||UF(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=uA)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=FF(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),Z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const s={p:t,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,s){this.initConnection_();const o={p:t,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const c=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(c):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+dn(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Im("Unrecognized action received from server: "+dn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$l,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$l,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>PH&&(this.reconnectDelay_=$l),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*CH)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fi.nextConnectionId_++,s=this.lastSessionId;let o=!1,c=null;const u=function(){c?c.close():(o=!0,r())},h=function(p){Z(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(p)};this.realtime_={close:u,sendRequest:h};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,_]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?vn("getToken() completed but was canceled"):(vn("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=_&&_.token,c=new EH(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,I=>{sr(I+" ("+this.repoInfo_.toString()+")"),this.interrupt(xH)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&sr(p),u())}}}interrupt(e){vn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){vn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],h_(this.interruptReasons_)&&(this.reconnectDelay_=$l,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(s=>Cv(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new yt(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(t),s.delete(t),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){vn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=hA&&(this.reconnectDelay_=uA,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){vn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=hA&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+o1.replace(/\./g,"-")]=1,Fm()?e["framework.cordova"]=1:lb()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hd.getInstance().currentlyOnline();return h_(this.interruptReasons_)&&e}}Fi.nextPersistentConnectionId_=0;Fi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Qe(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Qe(Qa,e),i=new Qe(Qa,t);return this.compare(r,i)!==0}minPost(){return Qe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uh;class O1 extends ip{static get __EMPTY_NODE(){return Uh}static set __EMPTY_NODE(e){Uh=e}compare(e,t){return dl(e.name,t.name)}isDefinedOn(e){throw Za("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Qe.MIN}maxPost(){return new Qe(Po,Uh)}makePost(e,t){return Z(typeof e=="string","KeyIndex indexValue must always be a string."),new Qe(e,Uh)}toString(){return".key"}}const Pa=new O1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Jt{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Jt.RED,this.left=i??Hn.EMPTY_NODE,this.right=s??Hn.EMPTY_NODE}copy(e,t,r,i,s){return new Jt(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Hn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Hn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Jt.RED=!0;Jt.BLACK=!1;class kH{copy(e,t,r,i,s){return this}insert(e,t,r){return new Jt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Hn{constructor(e,t=Hn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Hn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Jt.BLACK,null,null))}remove(e){return new Hn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Jt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Bh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Bh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Bh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Bh(this.root_,null,this.comparator_,!0,e)}}Hn.EMPTY_NODE=new kH;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DH(n,e){return dl(n.name,e.name)}function Nv(n,e){return dl(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tm;function NH(n){Tm=n}const M1=function(n){return typeof n=="number"?"number:"+h1(n):"string:"+n},V1=function(n){if(n.isLeafNode()){const e=n.val();Z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&qi(e,".sv"),"Priority must be a string or number.")}else Z(n===Tm||n.isEmpty(),"priority of unexpected type.");Z(n===Tm||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dA;class jt{constructor(e,t=jt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),V1(this.priorityNode_)}static set __childrenNodeConstructor(e){dA=e}static get __childrenNodeConstructor(){return dA}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new jt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:jt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ze(e)?this:je(e)===".priority"?this.priorityNode_:jt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:jt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=je(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(Z(r!==".priority"||xs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,jt.__childrenNodeConstructor.EMPTY_NODE.updateChild(gt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+M1(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=h1(this.value_):e+=this.value_,this.lazyHash_=l1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===jt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof jt.__childrenNodeConstructor?-1:(Z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=jt.VALUE_TYPE_ORDER.indexOf(t),s=jt.VALUE_TYPE_ORDER.indexOf(r);return Z(i>=0,"Unknown leaf type: "+t),Z(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}jt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L1,F1;function OH(n){L1=n}function MH(n){F1=n}class VH extends ip{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),s=r.compareTo(i);return s===0?dl(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Qe.MIN}maxPost(){return new Qe(Po,new jt("[PRIORITY-POST]",F1))}makePost(e,t){const r=L1(e);return new Qe(t,new jt("[PRIORITY-POST]",r))}toString(){return".priority"}}const An=new VH;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LH=Math.log(2);class FH{constructor(e){const t=s=>parseInt(Math.log(s)/LH,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Gd=function(n,e,t,r){n.sort(e);const i=function(u,h){const f=h-u;let p,_;if(f===0)return null;if(f===1)return p=n[u],_=t?t(p):p,new Jt(_,p.node,Jt.BLACK,null,null);{const I=parseInt(f/2,10)+u,A=i(u,I),P=i(I+1,h);return p=n[I],_=t?t(p):p,new Jt(_,p.node,Jt.BLACK,A,P)}},s=function(u){let h=null,f=null,p=n.length;const _=function(A,P){const x=p-A,V=p;p-=A;const W=i(x+1,V),K=n[x],N=t?t(K):K;I(new Jt(N,K.node,P,null,W))},I=function(A){h?(h.left=A,h=A):(f=A,h=A)};for(let A=0;A<u.count;++A){const P=u.nextBitIsOne(),x=Math.pow(2,u.count-(A+1));P?_(x,Jt.BLACK):(_(x,Jt.BLACK),_(x,Jt.RED))}return f},o=new FH(n.length),c=s(o);return new Hn(r||e,c)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n_;const aa={};class Mi{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Z(aa&&An,"ChildrenNode.ts has not been loaded"),n_=n_||new Mi({".priority":aa},{".priority":An}),n_}get(e){const t=ka(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Hn?t:null}hasIndex(e){return qi(this.indexSet_,e.toString())}addIndex(e,t){Z(e!==Pa,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=t.getIterator(Qe.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let c;i?c=Gd(r,e.getCompare()):c=aa;const u=e.toString(),h=Object.assign({},this.indexSet_);h[u]=e;const f=Object.assign({},this.indexes_);return f[u]=c,new Mi(f,h)}addToIndexes(e,t){const r=ud(this.indexes_,(i,s)=>{const o=ka(this.indexSet_,s);if(Z(o,"Missing index implementation for "+s),i===aa)if(o.isDefinedOn(e.node)){const c=[],u=t.getIterator(Qe.Wrap);let h=u.getNext();for(;h;)h.name!==e.name&&c.push(h),h=u.getNext();return c.push(e),Gd(c,o.getCompare())}else return aa;else{const c=t.get(e.name);let u=i;return c&&(u=u.remove(new Qe(e.name,c))),u.insert(e,e.node)}});return new Mi(r,this.indexSet_)}removeFromIndexes(e,t){const r=ud(this.indexes_,i=>{if(i===aa)return i;{const s=t.get(e.name);return s?i.remove(new Qe(e.name,s)):i}});return new Mi(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wl;class rt{constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&V1(this.priorityNode_),this.children_.isEmpty()&&Z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Wl||(Wl=new rt(new Hn(Nv),null,Mi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Wl}updatePriority(e){return this.children_.isEmpty()?this:new rt(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Wl:t}}getChild(e){const t=je(e);return t===null?this:this.getImmediateChild(t).getChild(gt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(Z(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Qe(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Wl:this.priorityNode_;return new rt(i,o,s)}}updateChild(e,t){const r=je(e);if(r===null)return t;{Z(je(e)!==".priority"||xs(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(gt(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,s=!0;if(this.forEachChild(An,(o,c)=>{t[o]=c.val(e),r++,s&&rt.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const c in t)o[c]=t[c];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+M1(this.getPriority().val())+":"),this.forEachChild(An,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":l1(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Qe(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Qe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Qe(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Qe.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Qe.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bu?-1:0}withIndex(e){if(e===Pa||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new rt(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Pa||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(An),i=t.getIterator(An);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Pa?null:this.indexMap_.get(e.toString())}}rt.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class UH extends rt{constructor(){super(new Hn(Nv),rt.EMPTY_NODE,Mi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return rt.EMPTY_NODE}isEmpty(){return!1}}const bu=new UH;Object.defineProperties(Qe,{MIN:{value:new Qe(Qa,rt.EMPTY_NODE)},MAX:{value:new Qe(Po,bu)}});O1.__EMPTY_NODE=rt.EMPTY_NODE;jt.__childrenNodeConstructor=rt;NH(bu);MH(bu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BH=!0;function In(n,e=null){if(n===null)return rt.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),Z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new jt(t,In(e))}if(!(n instanceof Array)&&BH){const t=[];let r=!1;if(Tr(n,(o,c)=>{if(o.substring(0,1)!=="."){const u=In(c);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),t.push(new Qe(o,u)))}}),t.length===0)return rt.EMPTY_NODE;const s=Gd(t,DH,o=>o.name,Nv);if(r){const o=Gd(t,An.getCompare());return new rt(s,In(e),new Mi({".priority":o},{".priority":An}))}else return new rt(s,In(e),Mi.Default)}else{let t=rt.EMPTY_NODE;return Tr(n,(r,i)=>{if(qi(n,r)&&r.substring(0,1)!=="."){const s=In(i);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(r,s))}}),t.updatePriority(In(e))}}OH(In);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $H extends ip{constructor(e){super(),this.indexPath_=e,Z(!ze(e)&&je(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),s=r.compareTo(i);return s===0?dl(e.name,t.name):s}makePost(e,t){const r=In(e),i=rt.EMPTY_NODE.updateChild(this.indexPath_,r);return new Qe(t,i)}maxPost(){const e=rt.EMPTY_NODE.updateChild(this.indexPath_,bu);return new Qe(Po,e)}toString(){return x1(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WH extends ip{compare(e,t){const r=e.node.compareTo(t.node);return r===0?dl(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Qe.MIN}maxPost(){return Qe.MAX}makePost(e,t){const r=In(e);return new Qe(t,r)}toString(){return".value"}}const qH=new WH;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zH(n){return{type:"value",snapshotNode:n}}function KH(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function HH(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function fA(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function GH(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=An}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qa}hasEnd(){return this.endSet_}getIndexEndValue(){return Z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Po}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===An}copy(){const e=new Ov;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function pA(n){const e={};if(n.isDefault())return e;let t;if(n.index_===An?t="$priority":n.index_===qH?t="$value":n.index_===Pa?t="$key":(Z(n.index_ instanceof $H,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=dn(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=dn(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+dn(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=dn(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+dn(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function gA(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==An&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd extends S1{constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Tu("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(Z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=jd.getListenId_(e,r),c={};this.listens_[o]=c;const u=pA(e._queryParams);this.restRequest_(s+".json",u,(h,f)=>{let p=f;if(h===404&&(p=null,h=null),h===null&&this.onDataUpdate_(s,p,!1,r),ka(this.listens_,o)===c){let _;h?h===401?_="permission_denied":_="rest_error:"+h:_="ok",i(_,null)}})}unlisten(e,t){const r=jd.getListenId_(e,t);delete this.listens_[r]}get(e){const t=pA(e._queryParams),r=e._path.toString(),i=new mc;return this.restRequest_(r+".json",t,(s,o)=>{let c=o;s===404&&(c=null,s=null),s===null?(this.onDataUpdate_(r,c,!1,null),i.resolve(c)):i.reject(new Error(c))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+tl(t);this.log_("Sending REST request for "+o);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(r&&c.readyState===4){this.log_("REST Response for "+o+" received. status:",c.status,"response:",c.responseText);let u=null;if(c.status>=200&&c.status<300){try{u=yc(c.responseText)}catch{sr("Failed to parse JSON response for "+o+": "+c.responseText)}r(null,u)}else c.status!==401&&c.status!==404&&sr("Got unsuccessful REST response for "+o+" Status: "+c.status),r(c.status);r=null}},c.open("GET",o,!0),c.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jH{constructor(){this.rootNode_=rt.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(){return{value:null,children:new Map}}function U1(n,e,t){if(ze(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=je(e);n.children.has(r)||n.children.set(r,Qd());const i=n.children.get(r);e=gt(e),U1(i,e,t)}}function Am(n,e,t){n.value!==null?t(e,n.value):QH(n,(r,i)=>{const s=new yt(e.toString()+"/"+r);Am(i,s,t)})}function QH(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YH{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Tr(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=10*1e3,JH=30*1e3,XH=5*60*1e3;class ZH{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new YH(e);const r=_A+(JH-_A)*Math.random();dc(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Tr(e,(i,s)=>{s>0&&qi(this.statsToReport_,i)&&(t[i]=s,r=!0)}),r&&this.server_.reportStats(t),dc(this.reportStats_.bind(this),Math.floor(Math.random()*2*XH))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ri;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ri||(ri={}));function B1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $1(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function W1(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=ri.ACK_USER_WRITE,this.source=B1()}operationForChild(e){if(ze(this.path)){if(this.affectedTree.value!=null)return Z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new yt(e));return new Yd(lt(),t,this.revert)}}else return Z(je(this.path)===e,"operationForChild called for unrelated child."),new Yd(gt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=ri.OVERWRITE}operationForChild(e){return ze(this.path)?new xo(this.source,lt(),this.snap.getImmediateChild(e)):new xo(this.source,gt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=ri.MERGE}operationForChild(e){if(ze(this.path)){const t=this.children.subtree(new yt(e));return t.isEmpty()?null:t.value?new xo(this.source,lt(),t.value):new jc(this.source,lt(),t)}else return Z(je(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jc(this.source,gt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ze(e))return this.isFullyInitialized()&&!this.filtered_;const t=je(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function eG(n,e,t,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(GH(o.childName,o.snapshotNode))}),ql(n,i,"child_removed",e,r,t),ql(n,i,"child_added",e,r,t),ql(n,i,"child_moved",s,r,t),ql(n,i,"child_changed",e,r,t),ql(n,i,"value",e,r,t),i}function ql(n,e,t,r,i,s){const o=r.filter(c=>c.type===t);o.sort((c,u)=>nG(n,c,u)),o.forEach(c=>{const u=tG(n,c,s);i.forEach(h=>{h.respondsTo(c.type)&&e.push(h.createEvent(u,n.query_))})})}function tG(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function nG(n,e,t){if(e.childName==null||t.childName==null)throw Za("Should only compare child_ events.");const r=new Qe(e.childName,e.snapshotNode),i=new Qe(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(n,e){return{eventCache:n,serverCache:e}}function fc(n,e,t,r){return q1(new Mv(e,t,r),n.serverCache)}function z1(n,e,t,r){return q1(n.eventCache,new Mv(e,t,r))}function bm(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ko(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r_;const rG=()=>(r_||(r_=new Hn(WK)),r_);class pt{constructor(e,t=rG()){this.value=e,this.children=t}static fromObject(e){let t=new pt(null);return Tr(e,(r,i)=>{t=t.set(new yt(r),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:lt(),value:this.value};if(ze(e))return null;{const r=je(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(gt(e),t);return s!=null?{path:Zt(new yt(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ze(e))return this;{const t=je(e),r=this.children.get(t);return r!==null?r.subtree(gt(e)):new pt(null)}}set(e,t){if(ze(e))return new pt(t,this.children);{const r=je(e),s=(this.children.get(r)||new pt(null)).set(gt(e),t),o=this.children.insert(r,s);return new pt(this.value,o)}}remove(e){if(ze(e))return this.children.isEmpty()?new pt(null):new pt(null,this.children);{const t=je(e),r=this.children.get(t);if(r){const i=r.remove(gt(e));let s;return i.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,i),this.value===null&&s.isEmpty()?new pt(null):new pt(this.value,s)}else return this}}get(e){if(ze(e))return this.value;{const t=je(e),r=this.children.get(t);return r?r.get(gt(e)):null}}setTree(e,t){if(ze(e))return t;{const r=je(e),s=(this.children.get(r)||new pt(null)).setTree(gt(e),t);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new pt(this.value,o)}}fold(e){return this.fold_(lt(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Zt(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,lt(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(ze(e))return null;{const s=je(e),o=this.children.get(s);return o?o.findOnPath_(gt(e),Zt(t,s),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,lt(),t)}foreachOnPath_(e,t,r){if(ze(e))return this;{this.value&&r(t,this.value);const i=je(e),s=this.children.get(i);return s?s.foreachOnPath_(gt(e),Zt(t,i),r):new pt(null)}}foreach(e){this.foreach_(lt(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(Zt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.writeTree_=e}static empty(){return new Br(new pt(null))}}function pc(n,e,t){if(ze(e))return new Br(new pt(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ir(i,e);return s=s.updateChild(o,t),new Br(n.writeTree_.set(i,s))}else{const i=new pt(t),s=n.writeTree_.setTree(e,i);return new Br(s)}}}function mA(n,e,t){let r=n;return Tr(t,(i,s)=>{r=pc(r,Zt(e,i),s)}),r}function yA(n,e){if(ze(e))return Br.empty();{const t=n.writeTree_.setTree(e,new pt(null));return new Br(t)}}function Rm(n,e){return Lo(n,e)!=null}function Lo(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ir(t.path,e)):null}function vA(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(An,(r,i)=>{e.push(new Qe(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Qe(r,i.value))}),e}function Ts(n,e){if(ze(e))return n;{const t=Lo(n,e);return t!=null?new Br(new pt(t)):new Br(n.writeTree_.subtree(e))}}function Sm(n){return n.writeTree_.isEmpty()}function Ya(n,e){return K1(lt(),n.writeTree_,e)}function K1(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(Z(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):t=K1(Zt(n,i),s,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Zt(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(n,e){return J1(e,n)}function iG(n,e,t,r,i){Z(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=pc(n.visibleWrites,e,t)),n.lastWriteId=r}function sG(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function oG(n,e){const t=n.allWrites.findIndex(c=>c.writeId===e);Z(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,s=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const c=n.allWrites[o];c.visible&&(o>=t&&aG(c,r.path)?i=!1:Vr(r.path,c.path)&&(s=!0)),o--}if(i){if(s)return lG(n),!0;if(r.snap)n.visibleWrites=yA(n.visibleWrites,r.path);else{const c=r.children;Tr(c,u=>{n.visibleWrites=yA(n.visibleWrites,Zt(r.path,u))})}return!0}else return!1}function aG(n,e){if(n.snap)return Vr(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Vr(Zt(n.path,t),e))return!0;return!1}function lG(n){n.visibleWrites=G1(n.allWrites,cG,lt()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function cG(n){return n.visible}function G1(n,e,t){let r=Br.empty();for(let i=0;i<n.length;++i){const s=n[i];if(e(s)){const o=s.path;let c;if(s.snap)Vr(t,o)?(c=Ir(t,o),r=pc(r,c,s.snap)):Vr(o,t)&&(c=Ir(o,t),r=pc(r,lt(),s.snap.getChild(c)));else if(s.children){if(Vr(t,o))c=Ir(t,o),r=mA(r,c,s.children);else if(Vr(o,t))if(c=Ir(o,t),ze(c))r=mA(r,lt(),s.children);else{const u=ka(s.children,je(c));if(u){const h=u.getChild(gt(c));r=pc(r,lt(),h)}}}else throw Za("WriteRecord should have .snap or .children")}}return r}function j1(n,e,t,r,i){if(!r&&!i){const s=Lo(n.visibleWrites,e);if(s!=null)return s;{const o=Ts(n.visibleWrites,e);if(Sm(o))return t;if(t==null&&!Rm(o,lt()))return null;{const c=t||rt.EMPTY_NODE;return Ya(o,c)}}}else{const s=Ts(n.visibleWrites,e);if(!i&&Sm(s))return t;if(!i&&t==null&&!Rm(s,lt()))return null;{const o=function(h){return(h.visible||i)&&(!r||!~r.indexOf(h.writeId))&&(Vr(h.path,e)||Vr(e,h.path))},c=G1(n.allWrites,o,e),u=t||rt.EMPTY_NODE;return Ya(c,u)}}}function uG(n,e,t){let r=rt.EMPTY_NODE;const i=Lo(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(An,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(t){const s=Ts(n.visibleWrites,e);return t.forEachChild(An,(o,c)=>{const u=Ya(Ts(s,new yt(o)),c);r=r.updateImmediateChild(o,u)}),vA(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Ts(n.visibleWrites,e);return vA(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function hG(n,e,t,r,i){Z(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Zt(e,t);if(Rm(n.visibleWrites,s))return null;{const o=Ts(n.visibleWrites,s);return Sm(o)?i.getChild(t):Ya(o,i.getChild(t))}}function dG(n,e,t,r){const i=Zt(e,t),s=Lo(n.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(t)){const o=Ts(n.visibleWrites,i);return Ya(o,r.getNode().getImmediateChild(t))}else return null}function fG(n,e){return Lo(n.visibleWrites,e)}function pG(n,e,t,r,i,s,o){let c;const u=Ts(n.visibleWrites,e),h=Lo(u,lt());if(h!=null)c=h;else if(t!=null)c=Ya(u,t);else return[];if(c=c.withIndex(o),!c.isEmpty()&&!c.isLeafNode()){const f=[],p=o.getCompare(),_=s?c.getReverseIteratorFrom(r,o):c.getIteratorFrom(r,o);let I=_.getNext();for(;I&&f.length<i;)p(I,r)!==0&&f.push(I),I=_.getNext();return f}else return[]}function gG(){return{visibleWrites:Br.empty(),allWrites:[],lastWriteId:-1}}function Cm(n,e,t,r){return j1(n.writeTree,n.treePath,e,t,r)}function Q1(n,e){return uG(n.writeTree,n.treePath,e)}function IA(n,e,t,r){return hG(n.writeTree,n.treePath,e,t,r)}function Jd(n,e){return fG(n.writeTree,Zt(n.treePath,e))}function _G(n,e,t,r,i,s){return pG(n.writeTree,n.treePath,e,t,r,i,s)}function Vv(n,e,t){return dG(n.writeTree,n.treePath,e,t)}function Y1(n,e){return J1(Zt(n.treePath,e),n.writeTree)}function J1(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mG{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;Z(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),Z(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(r,fA(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(r,HH(r,i.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(r,KH(r,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(r,fA(r,e.snapshotNode,i.oldSnap));else throw Za("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yG{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const X1=new yG;class Lv{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Mv(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vv(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ko(this.viewCache_),s=_G(this.writes_,i,t,1,r,e);return s.length===0?null:s[0]}}function vG(n,e){Z(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),Z(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function IG(n,e,t,r,i){const s=new mG;let o,c;if(t.type===ri.OVERWRITE){const h=t;h.source.fromUser?o=Pm(n,e,h.path,h.snap,r,i,s):(Z(h.source.fromServer,"Unknown source."),c=h.source.tagged||e.serverCache.isFiltered()&&!ze(h.path),o=Xd(n,e,h.path,h.snap,r,i,c,s))}else if(t.type===ri.MERGE){const h=t;h.source.fromUser?o=EG(n,e,h.path,h.children,r,i,s):(Z(h.source.fromServer,"Unknown source."),c=h.source.tagged||e.serverCache.isFiltered(),o=xm(n,e,h.path,h.children,r,i,c,s))}else if(t.type===ri.ACK_USER_WRITE){const h=t;h.revert?o=bG(n,e,h.path,r,i,s):o=TG(n,e,h.path,h.affectedTree,r,i,s)}else if(t.type===ri.LISTEN_COMPLETE)o=AG(n,e,t.path,r,s);else throw Za("Unknown operation type: "+t.type);const u=s.getChanges();return wG(e,o,u),{viewCache:o,changes:u}}function wG(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=bm(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&t.push(zH(bm(e)))}}function Z1(n,e,t,r,i,s){const o=e.eventCache;if(Jd(r,t)!=null)return e;{let c,u;if(ze(t))if(Z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=ko(e),f=h instanceof rt?h:rt.EMPTY_NODE,p=Q1(r,f);c=n.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const h=Cm(r,ko(e));c=n.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const h=je(t);if(h===".priority"){Z(xs(t)===1,"Can't have a priority with additional path components");const f=o.getNode();u=e.serverCache.getNode();const p=IA(r,t,f,u);p!=null?c=n.filter.updatePriority(f,p):c=o.getNode()}else{const f=gt(t);let p;if(o.isCompleteForChild(h)){u=e.serverCache.getNode();const _=IA(r,t,o.getNode(),u);_!=null?p=o.getNode().getImmediateChild(h).updateChild(f,_):p=o.getNode().getImmediateChild(h)}else p=Vv(r,h,e.serverCache);p!=null?c=n.filter.updateChild(o.getNode(),h,p,f,i,s):c=o.getNode()}}return fc(e,c,o.isFullyInitialized()||ze(t),n.filter.filtersNodes())}}function Xd(n,e,t,r,i,s,o,c){const u=e.serverCache;let h;const f=o?n.filter:n.filter.getIndexedFilter();if(ze(t))h=f.updateFullNode(u.getNode(),r,null);else if(f.filtersNodes()&&!u.isFiltered()){const I=u.getNode().updateChild(t,r);h=f.updateFullNode(u.getNode(),I,null)}else{const I=je(t);if(!u.isCompleteForPath(t)&&xs(t)>1)return e;const A=gt(t),x=u.getNode().getImmediateChild(I).updateChild(A,r);I===".priority"?h=f.updatePriority(u.getNode(),x):h=f.updateChild(u.getNode(),I,x,A,X1,null)}const p=z1(e,h,u.isFullyInitialized()||ze(t),f.filtersNodes()),_=new Lv(i,p,s);return Z1(n,p,t,i,_,c)}function Pm(n,e,t,r,i,s,o){const c=e.eventCache;let u,h;const f=new Lv(i,e,s);if(ze(t))h=n.filter.updateFullNode(e.eventCache.getNode(),r,o),u=fc(e,h,!0,n.filter.filtersNodes());else{const p=je(t);if(p===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),r),u=fc(e,h,c.isFullyInitialized(),c.isFiltered());else{const _=gt(t),I=c.getNode().getImmediateChild(p);let A;if(ze(_))A=r;else{const P=f.getCompleteChild(p);P!=null?P1(_)===".priority"&&P.getChild(k1(_)).isEmpty()?A=P:A=P.updateChild(_,r):A=rt.EMPTY_NODE}if(I.equals(A))u=e;else{const P=n.filter.updateChild(c.getNode(),p,A,_,f,o);u=fc(e,P,c.isFullyInitialized(),n.filter.filtersNodes())}}}return u}function wA(n,e){return n.eventCache.isCompleteForChild(e)}function EG(n,e,t,r,i,s,o){let c=e;return r.foreach((u,h)=>{const f=Zt(t,u);wA(e,je(f))&&(c=Pm(n,c,f,h,i,s,o))}),r.foreach((u,h)=>{const f=Zt(t,u);wA(e,je(f))||(c=Pm(n,c,f,h,i,s,o))}),c}function EA(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function xm(n,e,t,r,i,s,o,c){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,h;ze(t)?h=r:h=new pt(null).setTree(t,r);const f=e.serverCache.getNode();return h.children.inorderTraversal((p,_)=>{if(f.hasChild(p)){const I=e.serverCache.getNode().getImmediateChild(p),A=EA(n,I,_);u=Xd(n,u,new yt(p),A,i,s,o,c)}}),h.children.inorderTraversal((p,_)=>{const I=!e.serverCache.isCompleteForChild(p)&&_.value===null;if(!f.hasChild(p)&&!I){const A=e.serverCache.getNode().getImmediateChild(p),P=EA(n,A,_);u=Xd(n,u,new yt(p),P,i,s,o,c)}}),u}function TG(n,e,t,r,i,s,o){if(Jd(i,t)!=null)return e;const c=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(ze(t)&&u.isFullyInitialized()||u.isCompleteForPath(t))return Xd(n,e,t,u.getNode().getChild(t),i,s,c,o);if(ze(t)){let h=new pt(null);return u.getNode().forEachChild(Pa,(f,p)=>{h=h.set(new yt(f),p)}),xm(n,e,t,h,i,s,c,o)}else return e}else{let h=new pt(null);return r.foreach((f,p)=>{const _=Zt(t,f);u.isCompleteForPath(_)&&(h=h.set(f,u.getNode().getChild(_)))}),xm(n,e,t,h,i,s,c,o)}}function AG(n,e,t,r,i){const s=e.serverCache,o=z1(e,s.getNode(),s.isFullyInitialized()||ze(t),s.isFiltered());return Z1(n,o,t,r,X1,i)}function bG(n,e,t,r,i,s){let o;if(Jd(r,t)!=null)return e;{const c=new Lv(r,e,i),u=e.eventCache.getNode();let h;if(ze(t)||je(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Cm(r,ko(e));else{const p=e.serverCache.getNode();Z(p instanceof rt,"serverChildren would be complete if leaf node"),f=Q1(r,p)}f=f,h=n.filter.updateFullNode(u,f,s)}else{const f=je(t);let p=Vv(r,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=u.getImmediateChild(f)),p!=null?h=n.filter.updateChild(u,f,p,gt(t),c,s):e.eventCache.getNode().hasChild(f)?h=n.filter.updateChild(u,f,rt.EMPTY_NODE,gt(t),c,s):h=u,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Cm(r,ko(e)),o.isLeafNode()&&(h=n.filter.updateFullNode(h,o,s)))}return o=e.serverCache.isFullyInitialized()||Jd(r,lt())!=null,fc(e,h,o,n.filter.filtersNodes())}}function RG(n,e){const t=ko(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ze(e)&&!t.getImmediateChild(je(e)).isEmpty())?t.getChild(e):null}function TA(n,e,t,r){e.type===ri.MERGE&&e.source.queryId!==null&&(Z(ko(n.viewCache_),"We should always have a full cache before handling merges"),Z(bm(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,s=IG(n.processor_,i,e,t,r);return vG(n.processor_,s.viewCache),Z(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,SG(n,s.changes,s.viewCache.eventCache.getNode(),null)}function SG(n,e,t,r){const i=r?[r]:n.eventRegistrations_;return eG(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AA;function CG(n){Z(!AA,"__referenceConstructor has already been defined"),AA=n}function Fv(n,e,t,r){const i=e.source.queryId;if(i!==null){const s=n.views.get(i);return Z(s!=null,"SyncTree gave us an op for an invalid query."),TA(s,e,t,r)}else{let s=[];for(const o of n.views.values())s=s.concat(TA(o,e,t,r));return s}}function Uv(n,e){let t=null;for(const r of n.views.values())t=t||RG(r,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bA;function PG(n){Z(!bA,"__referenceConstructor has already been defined"),bA=n}class RA{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pt(null),this.pendingWriteTree_=gG(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xG(n,e,t,r,i){return iG(n.pendingWriteTree_,e,t,r,i),i?op(n,new xo(B1(),e,t)):[]}function _a(n,e,t=!1){const r=sG(n.pendingWriteTree_,e);if(oG(n.pendingWriteTree_,e)){let s=new pt(null);return r.snap!=null?s=s.set(lt(),!0):Tr(r.children,o=>{s=s.set(new yt(o),!0)}),op(n,new Yd(r.path,s,t))}else return[]}function sp(n,e,t){return op(n,new xo($1(),e,t))}function kG(n,e,t){const r=pt.fromObject(t);return op(n,new jc($1(),e,r))}function DG(n,e,t,r){const i=rx(n,r);if(i!=null){const s=ix(i),o=s.path,c=s.queryId,u=Ir(o,e),h=new xo(W1(c),u,t);return sx(n,o,h)}else return[]}function NG(n,e,t,r){const i=rx(n,r);if(i){const s=ix(i),o=s.path,c=s.queryId,u=Ir(o,e),h=pt.fromObject(t),f=new jc(W1(c),u,h);return sx(n,o,f)}else return[]}function ex(n,e,t){const i=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,c)=>{const u=Ir(o,e),h=Uv(c,u);if(h)return h});return j1(i,e,s,t,!0)}function op(n,e){return tx(e,n.syncPointTree_,null,H1(n.pendingWriteTree_,lt()))}function tx(n,e,t,r){if(ze(n.path))return nx(n,e,t,r);{const i=e.get(lt());t==null&&i!=null&&(t=Uv(i,lt()));let s=[];const o=je(n.path),c=n.operationForChild(o),u=e.children.get(o);if(u&&c){const h=t?t.getImmediateChild(o):null,f=Y1(r,o);s=s.concat(tx(c,u,h,f))}return i&&(s=s.concat(Fv(i,n,r,t))),s}}function nx(n,e,t,r){const i=e.get(lt());t==null&&i!=null&&(t=Uv(i,lt()));let s=[];return e.children.inorderTraversal((o,c)=>{const u=t?t.getImmediateChild(o):null,h=Y1(r,o),f=n.operationForChild(o);f&&(s=s.concat(nx(f,c,u,h)))}),i&&(s=s.concat(Fv(i,n,r,t))),s}function rx(n,e){return n.tagToQueryMap.get(e)}function ix(n){const e=n.indexOf("$");return Z(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new yt(n.substr(0,e))}}function sx(n,e,t){const r=n.syncPointTree_.get(e);Z(r,"Missing sync point for query tag that we're tracking");const i=H1(n.pendingWriteTree_,e);return Fv(r,t,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Bv(t)}node(){return this.node_}}class $v{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Zt(this.path_,e);return new $v(this.syncTree_,t)}node(){return ex(this.syncTree_,this.path_)}}const OG=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},SA=function(n,e,t){if(!n||typeof n!="object")return n;if(Z(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return MG(n[".sv"],e,t);if(typeof n[".sv"]=="object")return VG(n[".sv"],e);Z(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},MG=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:Z(!1,"Unexpected server value: "+n)}},VG=function(n,e,t){n.hasOwnProperty("increment")||Z(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&Z(!1,"Unexpected increment value: "+r);const i=e.node();if(Z(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},LG=function(n,e,t,r){return Wv(e,new $v(t,n),r)},FG=function(n,e,t){return Wv(n,new Bv(e),t)};function Wv(n,e,t){const r=n.getPriority().val(),i=SA(r,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,c=SA(o.getValue(),e,t);return c!==o.getValue()||i!==o.getPriority().val()?new jt(c,In(i)):n}else{const o=n;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new jt(i))),o.forEachChild(An,(c,u)=>{const h=Wv(u,e.getImmediateChild(c),t);h!==u&&(s=s.updateImmediateChild(c,h))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function zv(n,e){let t=e instanceof yt?e:new yt(e),r=n,i=je(t);for(;i!==null;){const s=ka(r.node.children,i)||{children:{},childCount:0};r=new qv(i,r,s),t=gt(t),i=je(t)}return r}function fl(n){return n.node.value}function ox(n,e){n.node.value=e,km(n)}function ax(n){return n.node.childCount>0}function UG(n){return fl(n)===void 0&&!ax(n)}function ap(n,e){Tr(n.node.children,(t,r)=>{e(new qv(t,n,r))})}function lx(n,e,t,r){t&&!r&&e(n),ap(n,i=>{lx(i,e,!0,r)}),t&&r&&e(n)}function BG(n,e,t){let r=t?n:n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ru(n){return new yt(n.parent===null?n.name:Ru(n.parent)+"/"+n.name)}function km(n){n.parent!==null&&$G(n.parent,n.name,n)}function $G(n,e,t){const r=UG(t),i=qi(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,km(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,km(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WG=/[\[\].#$\/\u0000-\u001F\u007F]/,qG=/[\[\].#$\u0000-\u001F\u007F]/,i_=10*1024*1024,cx=function(n){return typeof n=="string"&&n.length!==0&&!WG.test(n)},zG=function(n){return typeof n=="string"&&n.length!==0&&!qG.test(n)},KG=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zG(n)},ux=function(n,e,t){const r=t instanceof yt?new AH(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Zs(r));if(typeof e=="function")throw new Error(n+"contains a function "+Zs(r)+" with contents = "+e.toString());if(c1(e))throw new Error(n+"contains "+e.toString()+" "+Zs(r));if(typeof e=="string"&&e.length>i_/3&&af(e)>i_)throw new Error(n+"contains a string greater than "+i_+" utf8 bytes "+Zs(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Tr(e,(o,c)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!cx(o)))throw new Error(n+" contains an invalid key ("+o+") "+Zs(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);bH(r,o),ux(n,c,r),RH(r)}),i&&s)throw new Error(n+' contains ".value" child '+Zs(r)+" in addition to actual children.")}},HG=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!cx(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!KG(t))throw new Error(zF(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GG{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jG(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();t!==null&&!D1(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(i)}t&&n.eventLists_.push(t)}function Fo(n,e,t){jG(n,t),QG(n,r=>Vr(r,e)||Vr(e,r))}function QG(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const s=i.path;e(s)?(YG(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function YG(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();_o&&vn("event: "+t.toString()),Au(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JG="repo_interrupt",XG=25;class ZG{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new GG,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qd(),this.transactionQueueTree_=new qv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function e3(n,e,t){if(n.stats_=xv(n.repoInfo_),n.forceRestClient_||jK())n.server_=new jd(n.repoInfo_,(r,i,s,o)=>{CA(n,r,i,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>PA(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{dn(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Fi(n.repoInfo_,e,(r,i,s,o)=>{CA(n,r,i,s,o)},r=>{PA(n,r)},r=>{n3(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=eH(n.repoInfo_,()=>new ZH(n.stats_,n.server_)),n.infoData_=new jH,n.infoSyncTree_=new RA({startListening:(r,i,s,o)=>{let c=[];const u=n.infoData_.getNode(r._path);return u.isEmpty()||(c=sp(n.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),c},stopListening:()=>{}}),Kv(n,"connected",!1),n.serverSyncTree_=new RA({startListening:(r,i,s,o)=>(n.server_.listen(r,s,i,(c,u)=>{const h=o(c,u);Fo(n.eventQueue_,r._path,h)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function t3(n){const t=n.infoData_.getNode(new yt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function hx(n){return OG({timestamp:t3(n)})}function CA(n,e,t,r,i){n.dataUpdateCount++;const s=new yt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(r){const u=ud(t,h=>In(h));o=NG(n.serverSyncTree_,s,u,i)}else{const u=In(t);o=DG(n.serverSyncTree_,s,u,i)}else if(r){const u=ud(t,h=>In(h));o=kG(n.serverSyncTree_,s,u)}else{const u=In(t);o=sp(n.serverSyncTree_,s,u)}let c=s;o.length>0&&(c=Gv(n,s)),Fo(n.eventQueue_,c,o)}function PA(n,e){Kv(n,"connected",e),e===!1&&i3(n)}function n3(n,e){Tr(e,(t,r)=>{Kv(n,t,r)})}function Kv(n,e,t){const r=new yt("/.info/"+e),i=In(t);n.infoData_.updateSnapshot(r,i);const s=sp(n.infoSyncTree_,r,i);Fo(n.eventQueue_,r,s)}function r3(n){return n.nextWriteId_++}function i3(n){dx(n,"onDisconnectEvents");const e=hx(n),t=Qd();Am(n.onDisconnect_,lt(),(i,s)=>{const o=LG(i,s,n.serverSyncTree_,e);U1(t,i,o)});let r=[];Am(t,lt(),(i,s)=>{r=r.concat(sp(n.serverSyncTree_,i,s));const o=l3(n,i);Gv(n,o)}),n.onDisconnect_=Qd(),Fo(n.eventQueue_,lt(),r)}function s3(n){n.persistentConnection_&&n.persistentConnection_.interrupt(JG)}function dx(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),vn(t,...e)}function fx(n,e,t){return ex(n.serverSyncTree_,e,t)||rt.EMPTY_NODE}function Hv(n,e=n.transactionQueueTree_){if(e||lp(n,e),fl(e)){const t=gx(n,e);Z(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&o3(n,Ru(e),t)}else ax(e)&&ap(e,t=>{Hv(n,t)})}function o3(n,e,t){const r=t.map(h=>h.currentWriteId),i=fx(n,e,r);let s=i;const o=i.hash();for(let h=0;h<t.length;h++){const f=t[h];Z(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=Ir(e,f.path);s=s.updateChild(p,f.currentOutputSnapshotRaw)}const c=s.val(!0),u=e;n.server_.put(u.toString(),c,h=>{dx(n,"transaction put response",{path:u.toString(),status:h});let f=[];if(h==="ok"){const p=[];for(let _=0;_<t.length;_++)t[_].status=2,f=f.concat(_a(n.serverSyncTree_,t[_].currentWriteId)),t[_].onComplete&&p.push(()=>t[_].onComplete(null,!0,t[_].currentOutputSnapshotResolved)),t[_].unwatcher();lp(n,zv(n.transactionQueueTree_,e)),Hv(n,n.transactionQueueTree_),Fo(n.eventQueue_,e,f);for(let _=0;_<p.length;_++)Au(p[_])}else{if(h==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{sr("transaction at "+u.toString()+" failed: "+h);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=h}Gv(n,e)}},o)}function Gv(n,e){const t=px(n,e),r=Ru(t),i=gx(n,t);return a3(n,i,r),r}function a3(n,e,t){if(e.length===0)return;const r=[];let i=[];const o=e.filter(c=>c.status===0).map(c=>c.currentWriteId);for(let c=0;c<e.length;c++){const u=e[c],h=Ir(t,u.path);let f=!1,p;if(Z(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)f=!0,p=u.abortReason,i=i.concat(_a(n.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=XG)f=!0,p="maxretry",i=i.concat(_a(n.serverSyncTree_,u.currentWriteId,!0));else{const _=fx(n,u.path,o);u.currentInputSnapshot=_;const I=e[c].update(_.val());if(I!==void 0){ux("transaction failed: Data returned ",I,u.path);let A=In(I);typeof I=="object"&&I!=null&&qi(I,".priority")||(A=A.updatePriority(_.getPriority()));const x=u.currentWriteId,V=hx(n),W=FG(A,_,V);u.currentOutputSnapshotRaw=A,u.currentOutputSnapshotResolved=W,u.currentWriteId=r3(n),o.splice(o.indexOf(x),1),i=i.concat(xG(n.serverSyncTree_,u.path,W,u.currentWriteId,u.applyLocally)),i=i.concat(_a(n.serverSyncTree_,x,!0))}else f=!0,p="nodata",i=i.concat(_a(n.serverSyncTree_,u.currentWriteId,!0))}Fo(n.eventQueue_,t,i),i=[],f&&(e[c].status=2,function(_){setTimeout(_,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&(p==="nodata"?r.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):r.push(()=>e[c].onComplete(new Error(p),!1,null))))}lp(n,n.transactionQueueTree_);for(let c=0;c<r.length;c++)Au(r[c]);Hv(n,n.transactionQueueTree_)}function px(n,e){let t,r=n.transactionQueueTree_;for(t=je(e);t!==null&&fl(r)===void 0;)r=zv(r,t),e=gt(e),t=je(e);return r}function gx(n,e){const t=[];return _x(n,e,t),t.sort((r,i)=>r.order-i.order),t}function _x(n,e,t){const r=fl(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);ap(e,i=>{_x(n,i,t)})}function lp(n,e){const t=fl(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,ox(e,t.length>0?t:void 0)}ap(e,r=>{lp(n,r)})}function l3(n,e){const t=Ru(px(n,e)),r=zv(n.transactionQueueTree_,e);return BG(r,i=>{s_(n,i)}),s_(n,r),lx(r,i=>{s_(n,i)}),t}function s_(n,e){const t=fl(e);if(t){const r=[];let i=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(Z(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(Z(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(_a(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ox(e,void 0):t.length=s+1,Fo(n.eventQueue_,Ru(e),i);for(let o=0;o<r.length;o++)Au(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c3(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function u3(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):sr(`Invalid query segment '${t}' in query '${n}'`)}return e}const xA=function(n,e){const t=h3(n),r=t.namespace;t.domain==="firebase.com"&&Co(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Co("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||BK();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new JK(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new yt(t.pathString)}},h3=function(n){let e="",t="",r="",i="",s="",o=!0,c="https",u=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(c=n.substring(0,h-1),n=n.substring(h+2));let f=n.indexOf("/");f===-1&&(f=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(f,p)),f<p&&(i=c3(n.substring(f,p)));const _=u3(n.substring(Math.min(n.length,p)));h=e.indexOf(":"),h>=0?(o=c==="https"||c==="wss",u=parseInt(e.substring(h+1),10)):h=e.length;const I=e.slice(0,h);if(I.toLowerCase()==="localhost")t="localhost";else if(I.split(".").length<=2)t=I;else{const A=e.indexOf(".");r=e.substring(0,A).toLowerCase(),t=e.substring(A+1),s=r}"ns"in _&&(s=_.ns)}return{host:e,port:u,domain:t,subdomain:r,secure:o,scheme:c,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return ze(this._path)?null:P1(this._path)}get ref(){return new pl(this._repo,this._path)}get _queryIdentifier(){const e=gA(this._queryParams),t=Cv(e);return t==="{}"?"default":t}get _queryObject(){return gA(this._queryParams)}isEqual(e){if(e=pn(e),!(e instanceof jv))return!1;const t=this._repo===e._repo,r=D1(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+TH(this._path)}}class pl extends jv{constructor(e,t){super(e,t,new Ov,!1)}get parent(){const e=k1(this._path);return e===null?null:new pl(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}CG(pl);PG(pl);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d3="FIREBASE_DATABASE_EMULATOR_HOST",Dm={};let f3=!1;function p3(n,e,t,r,i){let s=r||n.options.databaseURL;s===void 0&&(n.options.projectId||Co("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),vn("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=xA(s,i),c=o.repoInfo,u,h;typeof process<"u"&&process.env&&(h=process.env[d3]),h?(u=!0,s=`http://${h}?ns=${c.namespace}`,o=xA(s,i),c=o.repoInfo):u=!o.repoInfo.secure;const f=i&&u?new wm(wm.OWNER):new YK(n.name,n.options,e);HG("Invalid Firebase Database URL",o),ze(o.path)||Co("Database URL must point to the root of a Firebase Database (not including a child path).");const p=_3(c,n,f,new QK(n.name,t));return new m3(p,n)}function g3(n,e){const t=Dm[e];(!t||t[n.key]!==n)&&Co(`Database ${e}(${n.repoInfo_}) has already been deleted.`),s3(n),delete t[n.key]}function _3(n,e,t,r){let i=Dm[e.name];i||(i={},Dm[e.name]=i);let s=i[n.toURLString()];return s&&Co("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ZG(n,f3,t,r),i[n.toURLString()]=s,s}class m3{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(e3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new pl(this._repo,lt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(g3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Co("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y3(n){MK(ks),li(new $r("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return p3(r,i,s,t)},"PUBLIC").setMultipleInstances(!0)),ir(J0,X0,n),ir(J0,X0,"esm2017")}Fi.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Fi.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};y3();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="firebasestorage.googleapis.com",v3="storageBucket",I3=2*60*1e3,w3=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends fi{constructor(e,t,r=0){super(o_(e),`Firebase Storage: ${t} (${o_(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pi.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return o_(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var di;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(di||(di={}));function o_(n){return"storage/"+n}function E3(){const n="An unknown error occurred, please check the error payload for server response.";return new pi(di.UNKNOWN,n)}function T3(){return new pi(di.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function A3(){return new pi(di.CANCELED,"User canceled the upload/download.")}function b3(n){return new pi(di.INVALID_URL,"Invalid URL '"+n+"'.")}function R3(n){return new pi(di.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function kA(n){return new pi(di.INVALID_ARGUMENT,n)}function yx(){return new pi(di.APP_DELETED,"The Firebase app was deleted.")}function S3(n){return new pi(di.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Lr.makeFromUrl(e,t)}catch{return new Lr(e,"")}if(r.path==="")return r;throw R3(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(N){N.path_=decodeURIComponent(N.path)}const f="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",I=new RegExp(`^https?://${p}/${f}/b/${i}/o${_}`,"i"),A={bucket:1,path:3},P=t===mx?"(?:storage.googleapis.com|storage.cloud.google.com)":t,x="([^?#]*)",V=new RegExp(`^https?://${P}/${i}/${x}`,"i"),K=[{regex:c,indices:u,postModify:s},{regex:I,indices:A,postModify:h},{regex:V,indices:{bucket:1,path:2},postModify:h}];for(let N=0;N<K.length;N++){const j=K[N],se=j.regex.exec(e);if(se){const ue=se[j.indices.bucket];let he=se[j.indices.path];he||(he=""),r=new Lr(ue,he),j.postModify(r);break}}if(r==null)throw b3(e);return r}}class C3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P3(n,e,t){let r=1,i=null,s=null,o=!1,c=0;function u(){return c===2}let h=!1;function f(...x){h||(h=!0,e.apply(null,x))}function p(x){i=setTimeout(()=>{i=null,n(I,u())},x)}function _(){s&&clearTimeout(s)}function I(x,...V){if(h){_();return}if(x){_(),f.call(null,x,...V);return}if(u()||o){_(),f.call(null,x,...V);return}r<64&&(r*=2);let K;c===1?(c=2,K=0):K=(r+Math.random())*1e3,p(K)}let A=!1;function P(x){A||(A=!0,_(),!h&&(i!==null?(x||(c=2),clearTimeout(i),p(0)):x||(c=1)))}return p(0),s=setTimeout(()=>{o=!0,P(!0)},t),P}function x3(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k3(n){return n!==void 0}function DA(n,e,t,r){if(r<e)throw kA(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw kA(`Invalid value for '${n}'. Expected ${t} or less.`)}function D3(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zd;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Zd||(Zd={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N3(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O3{constructor(e,t,r,i,s,o,c,u,h,f,p,_=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,A)=>{this.resolve_=I,this.reject_=A,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new $h(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=c=>{const u=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const c=s.getErrorCode()===Zd.NO_ERROR,u=s.getStatus();if(!c||N3(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Zd.ABORT;r(!1,new $h(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new $h(h,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());k3(u)?s(u):s()}catch(u){o(u)}else if(c!==null){const u=E3();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(i.canceled){const u=this.appDelete_?yx():A3();o(u)}else{const u=T3();o(u)}};this.canceled_?t(!1,new $h(!1,null,!0)):this.backoffId_=P3(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&x3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $h{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function M3(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function V3(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function L3(n,e){e&&(n["X-Firebase-GMPID"]=e)}function F3(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function U3(n,e,t,r,i,s,o=!0){const c=D3(n.urlParams),u=n.url+c,h=Object.assign({},n.headers);return L3(h,e),M3(h,t),V3(h,s),F3(h,r),new O3(u,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B3(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function $3(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t){this._service=e,t instanceof Lr?this._location=t:this._location=Lr.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ef(e,t)}get root(){const e=new Lr(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $3(this._location.path)}get storage(){return this._service}get parent(){const e=B3(this._location.path);if(e===null)return null;const t=new Lr(this._location.bucket,e);return new ef(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw S3(e)}}function NA(n,e){const t=e==null?void 0:e[v3];return t==null?null:Lr.makeFromBucketSpec(t,n)}class W3{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=mx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=I3,this._maxUploadRetryTime=w3,this._requests=new Set,i!=null?this._bucket=Lr.makeFromBucketSpec(i,this._host):this._bucket=NA(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Lr.makeFromBucketSpec(this._url,e):this._bucket=NA(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){DA("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){DA("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ef(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new C3(yx());{const o=U3(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const OA="@firebase/storage",MA="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q3="storage";function z3(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new W3(t,r,i,e,ks)}function K3(){li(new $r(q3,z3,"PUBLIC").setMultipleInstances(!0)),ir(OA,MA,""),ir(OA,MA,"esm2017")}K3();function cp(n){return hq(rp(n))}function H3(n){return(e,t)=>{const r=NK(e,t).run(()=>Bt(n));i1.set(e,r),OK(r,e)}}function Qv(n){return DK?Yb(rp(n)):null}function G3(n,{firebaseApp:e,modules:t=[]}){n.provide(r1,e);for(const r of t)r(e,n)}const gi=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t},j3={};function Q3(n,e){const t=wv("RouterView");return Et(),zc(t)}const Y3=gi(j3,[["render",Q3]]);/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ha=typeof window<"u";function J3(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const st=Object.assign;function a_(n,e){const t={};for(const r in e){const i=e[r];t[r]=zr(i)?i.map(n):n(i)}return t}const gc=()=>{},zr=Array.isArray,X3=/\/$/,Z3=n=>n.replace(X3,"");function l_(n,e,t="/"){let r,i={},s="",o="";const c=e.indexOf("#");let u=e.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(r=e.slice(0,u),s=e.slice(u+1,c>-1?c:e.length),i=n(s)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=r5(r??e,t),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function e5(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function VA(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function t5(n,e,t){const r=e.matched.length-1,i=t.matched.length-1;return r>-1&&r===i&&Ja(e.matched[r],t.matched[i])&&vx(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ja(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function vx(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!n5(n[t],e[t]))return!1;return!0}function n5(n,e){return zr(n)?LA(n,e):zr(e)?LA(e,n):n===e}function LA(n,e){return zr(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function r5(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=t.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Qc;(function(n){n.pop="pop",n.push="push"})(Qc||(Qc={}));var _c;(function(n){n.back="back",n.forward="forward",n.unknown=""})(_c||(_c={}));function i5(n){if(!n)if(ha){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Z3(n)}const s5=/^[^#]+#/;function o5(n,e){return n.replace(s5,"#")+e}function a5(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const up=()=>({left:window.pageXOffset,top:window.pageYOffset});function l5(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=a5(i,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function FA(n,e){return(history.state?history.state.position-e:-1)+n}const Nm=new Map;function c5(n,e){Nm.set(n,e)}function u5(n){const e=Nm.get(n);return Nm.delete(n),e}let h5=()=>location.protocol+"//"+location.host;function Ix(n,e){const{pathname:t,search:r,hash:i}=e,s=n.indexOf("#");if(s>-1){let c=i.includes(n.slice(s))?n.slice(s).length:1,u=i.slice(c);return u[0]!=="/"&&(u="/"+u),VA(u,"")}return VA(t,n)+r+i}function d5(n,e,t,r){let i=[],s=[],o=null;const c=({state:_})=>{const I=Ix(n,location),A=t.value,P=e.value;let x=0;if(_){if(t.value=I,e.value=_,o&&o===A){o=null;return}x=P?_.position-P.position:0}else r(I);i.forEach(V=>{V(t.value,A,{delta:x,type:Qc.pop,direction:x?x>0?_c.forward:_c.back:_c.unknown})})};function u(){o=t.value}function h(_){i.push(_);const I=()=>{const A=i.indexOf(_);A>-1&&i.splice(A,1)};return s.push(I),I}function f(){const{history:_}=window;_.state&&_.replaceState(st({},_.state,{scroll:up()}),"")}function p(){for(const _ of s)_();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:u,listen:h,destroy:p}}function UA(n,e,t,r=!1,i=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:i?up():null}}function f5(n){const{history:e,location:t}=window,r={value:Ix(n,t)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(u,h,f){const p=n.indexOf("#"),_=p>-1?(t.host&&document.querySelector("base")?n:n.slice(p))+u:h5()+n+u;try{e[f?"replaceState":"pushState"](h,"",_),i.value=h}catch(I){console.error(I),t[f?"replace":"assign"](_)}}function o(u,h){const f=st({},e.state,UA(i.value.back,u,i.value.forward,!0),h,{position:i.value.position});s(u,f,!0),r.value=u}function c(u,h){const f=st({},i.value,e.state,{forward:u,scroll:up()});s(f.current,f,!0);const p=st({},UA(r.value,u,null),{position:f.position+1},h);s(u,p,!1),r.value=u}return{location:r,state:i,push:c,replace:o}}function p5(n){n=i5(n);const e=f5(n),t=d5(n,e.state,e.location,e.replace);function r(s,o=!0){o||t.pauseListeners(),history.go(s)}const i=st({location:"",base:n,go:r,createHref:o5.bind(null,n)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function g5(n){return typeof n=="string"||n&&typeof n=="object"}function wx(n){return typeof n=="string"||typeof n=="symbol"}const as={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ex=Symbol("");var BA;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(BA||(BA={}));function Xa(n,e){return st(new Error,{type:n,[Ex]:!0},e)}function Ri(n,e){return n instanceof Error&&Ex in n&&(e==null||!!(n.type&e))}const $A="[^/]+?",_5={sensitive:!1,strict:!1,start:!0,end:!0},m5=/[.+*?^${}()[\]/\\]/g;function y5(n,e){const t=st({},_5,e),r=[];let i=t.start?"^":"";const s=[];for(const h of n){const f=h.length?[]:[90];t.strict&&!h.length&&(i+="/");for(let p=0;p<h.length;p++){const _=h[p];let I=40+(t.sensitive?.25:0);if(_.type===0)p||(i+="/"),i+=_.value.replace(m5,"\\$&"),I+=40;else if(_.type===1){const{value:A,repeatable:P,optional:x,regexp:V}=_;s.push({name:A,repeatable:P,optional:x});const W=V||$A;if(W!==$A){I+=10;try{new RegExp(`(${W})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${A}" (${W}): `+N.message)}}let K=P?`((?:${W})(?:/(?:${W}))*)`:`(${W})`;p||(K=x&&h.length<2?`(?:/${K})`:"/"+K),x&&(K+="?"),i+=K,I+=20,x&&(I+=-8),P&&(I+=-20),W===".*"&&(I+=-50)}f.push(I)}r.push(f)}if(t.strict&&t.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let _=1;_<f.length;_++){const I=f[_]||"",A=s[_-1];p[A.name]=I&&A.repeatable?I.split("/"):I}return p}function u(h){let f="",p=!1;for(const _ of n){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const I of _)if(I.type===0)f+=I.value;else if(I.type===1){const{value:A,repeatable:P,optional:x}=I,V=A in h?h[A]:"";if(zr(V)&&!P)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const W=zr(V)?V.join("/"):V;if(!W)if(x)_.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${A}"`);f+=W}}return f||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function v5(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function I5(n,e){let t=0;const r=n.score,i=e.score;for(;t<r.length&&t<i.length;){const s=v5(r[t],i[t]);if(s)return s;t++}if(Math.abs(i.length-r.length)===1){if(WA(r))return 1;if(WA(i))return-1}return i.length-r.length}function WA(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const w5={type:0,value:""},E5=/[a-zA-Z0-9_]/;function T5(n){if(!n)return[[]];if(n==="/")return[[w5]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(I){throw new Error(`ERR (${t})/"${h}": ${I}`)}let t=0,r=t;const i=[];let s;function o(){s&&i.push(s),s=[]}let c=0,u,h="",f="";function p(){h&&(t===0?s.push({type:0,value:h}):t===1||t===2||t===3?(s.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:h,regexp:f,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),h="")}function _(){h+=u}for(;c<n.length;){if(u=n[c++],u==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:u==="/"?(h&&p(),o()):u===":"?(p(),t=1):_();break;case 4:_(),t=r;break;case 1:u==="("?t=2:E5.test(u)?_():(p(),t=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+u:t=3:f+=u;break;case 3:p(),t=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,f="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),i}function A5(n,e,t){const r=y5(T5(n.path),t),i=st(r,{record:n,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function b5(n,e){const t=[],r=new Map;e=KA({strict:!1,end:!0,sensitive:!1},e);function i(f){return r.get(f)}function s(f,p,_){const I=!_,A=R5(f);A.aliasOf=_&&_.record;const P=KA(e,f),x=[A];if("alias"in f){const K=typeof f.alias=="string"?[f.alias]:f.alias;for(const N of K)x.push(st({},A,{components:_?_.record.components:A.components,path:N,aliasOf:_?_.record:A}))}let V,W;for(const K of x){const{path:N}=K;if(p&&N[0]!=="/"){const j=p.record.path,se=j[j.length-1]==="/"?"":"/";K.path=p.record.path+(N&&se+N)}if(V=A5(K,p,P),_?_.alias.push(V):(W=W||V,W!==V&&W.alias.push(V),I&&f.name&&!zA(V)&&o(f.name)),A.children){const j=A.children;for(let se=0;se<j.length;se++)s(j[se],V,_&&_.children[se])}_=_||V,(V.record.components&&Object.keys(V.record.components).length||V.record.name||V.record.redirect)&&u(V)}return W?()=>{o(W)}:gc}function o(f){if(wx(f)){const p=r.get(f);p&&(r.delete(f),t.splice(t.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=t.indexOf(f);p>-1&&(t.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return t}function u(f){let p=0;for(;p<t.length&&I5(f,t[p])>=0&&(f.record.path!==t[p].record.path||!Tx(f,t[p]));)p++;t.splice(p,0,f),f.record.name&&!zA(f)&&r.set(f.record.name,f)}function h(f,p){let _,I={},A,P;if("name"in f&&f.name){if(_=r.get(f.name),!_)throw Xa(1,{location:f});P=_.record.name,I=st(qA(p.params,_.keys.filter(W=>!W.optional).map(W=>W.name)),f.params&&qA(f.params,_.keys.map(W=>W.name))),A=_.stringify(I)}else if("path"in f)A=f.path,_=t.find(W=>W.re.test(A)),_&&(I=_.parse(A),P=_.record.name);else{if(_=p.name?r.get(p.name):t.find(W=>W.re.test(p.path)),!_)throw Xa(1,{location:f,currentLocation:p});P=_.record.name,I=st({},p.params,f.params),A=_.stringify(I)}const x=[];let V=_;for(;V;)x.unshift(V.record),V=V.parent;return{name:P,path:A,params:I,matched:x,meta:C5(x)}}return n.forEach(f=>s(f)),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function qA(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function R5(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:S5(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function S5(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="object"?t[r]:t;return e}function zA(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function C5(n){return n.reduce((e,t)=>st(e,t.meta),{})}function KA(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function Tx(n,e){return e.children.some(t=>t===n||Tx(n,t))}const Ax=/#/g,P5=/&/g,x5=/\//g,k5=/=/g,D5=/\?/g,bx=/\+/g,N5=/%5B/g,O5=/%5D/g,Rx=/%5E/g,M5=/%60/g,Sx=/%7B/g,V5=/%7C/g,Cx=/%7D/g,L5=/%20/g;function Yv(n){return encodeURI(""+n).replace(V5,"|").replace(N5,"[").replace(O5,"]")}function F5(n){return Yv(n).replace(Sx,"{").replace(Cx,"}").replace(Rx,"^")}function Om(n){return Yv(n).replace(bx,"%2B").replace(L5,"+").replace(Ax,"%23").replace(P5,"%26").replace(M5,"`").replace(Sx,"{").replace(Cx,"}").replace(Rx,"^")}function U5(n){return Om(n).replace(k5,"%3D")}function B5(n){return Yv(n).replace(Ax,"%23").replace(D5,"%3F")}function $5(n){return n==null?"":B5(n).replace(x5,"%2F")}function tf(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function W5(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(bx," "),o=s.indexOf("="),c=tf(o<0?s:s.slice(0,o)),u=o<0?null:tf(s.slice(o+1));if(c in e){let h=e[c];zr(h)||(h=e[c]=[h]),h.push(u)}else e[c]=u}return e}function HA(n){let e="";for(let t in n){const r=n[t];if(t=U5(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(zr(r)?r.map(s=>s&&Om(s)):[r&&Om(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function q5(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=zr(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const z5=Symbol(""),GA=Symbol(""),hp=Symbol(""),Jv=Symbol(""),Mm=Symbol("");function zl(){let n=[];function e(r){return n.push(r),()=>{const i=n.indexOf(r);i>-1&&n.splice(i,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function cs(n,e,t,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,c)=>{const u=p=>{p===!1?c(Xa(4,{from:t,to:e})):p instanceof Error?c(p):g5(p)?c(Xa(2,{from:e,to:p})):(s&&r.enterCallbacks[i]===s&&typeof p=="function"&&s.push(p),o())},h=n.call(r&&r.instances[i],e,t,u);let f=Promise.resolve(h);n.length<3&&(f=f.then(u)),f.catch(p=>c(p))})}function c_(n,e,t,r){const i=[];for(const s of n)for(const o in s.components){let c=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(K5(c)){const h=(c.__vccOpts||c)[e];h&&i.push(cs(h,t,r,s,o))}else{let u=c();i.push(()=>u.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const f=J3(h)?h.default:h;s.components[o]=f;const _=(f.__vccOpts||f)[e];return _&&cs(_,t,r,s,o)()}))}}return i}function K5(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function jA(n){const e=wr(hp),t=wr(Jv),r=nr(()=>e.resolve(Xe(n.to))),i=nr(()=>{const{matched:u}=r.value,{length:h}=u,f=u[h-1],p=t.matched;if(!f||!p.length)return-1;const _=p.findIndex(Ja.bind(null,f));if(_>-1)return _;const I=QA(u[h-2]);return h>1&&QA(f)===I&&p[p.length-1].path!==I?p.findIndex(Ja.bind(null,u[h-2])):_}),s=nr(()=>i.value>-1&&Q5(t.params,r.value.params)),o=nr(()=>i.value>-1&&i.value===t.matched.length-1&&vx(t.params,r.value.params));function c(u={}){return j5(u)?e[Xe(n.replace)?"replace":"push"](Xe(n.to)).catch(gc):Promise.resolve()}return{route:r,href:nr(()=>r.value.href),isActive:s,isExactActive:o,navigate:c}}const H5=wu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jA,setup(n,{slots:e}){const t=Jf(jA(n)),{options:r}=wr(hp),i=nr(()=>({[YA(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[YA(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:e1("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},s)}}}),G5=H5;function j5(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Q5(n,e){for(const t in e){const r=e[t],i=n[t];if(typeof r=="string"){if(r!==i)return!1}else if(!zr(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function QA(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const YA=(n,e,t)=>n??e??t,Y5=wu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=wr(Mm),i=nr(()=>n.route||r.value),s=wr(GA,0),o=nr(()=>{let h=Xe(s);const{matched:f}=i.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=nr(()=>i.value.matched[o.value]);id(GA,nr(()=>o.value+1)),id(z5,c),id(Mm,i);const u=Bt();return nd(()=>[u.value,c.value,n.name],([h,f,p],[_,I,A])=>{f&&(f.instances[p]=h,I&&I!==f&&h&&h===_&&(f.leaveGuards.size||(f.leaveGuards=I.leaveGuards),f.updateGuards.size||(f.updateGuards=I.updateGuards))),h&&f&&(!I||!Ja(f,I)||!_)&&(f.enterCallbacks[p]||[]).forEach(P=>P(h))},{flush:"post"}),()=>{const h=i.value,f=n.name,p=c.value,_=p&&p.components[f];if(!_)return JA(t.default,{Component:_,route:h});const I=p.props[f],A=I?I===!0?h.params:typeof I=="function"?I(h):I:null,x=e1(_,st({},A,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(p.instances[f]=null)},ref:u}));return JA(t.default,{Component:x,route:h})||x}}});function JA(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Px=Y5;function J5(n){const e=b5(n.routes,n),t=n.parseQuery||W5,r=n.stringifyQuery||HA,i=n.history,s=zl(),o=zl(),c=zl(),u=R6(as);let h=as;ha&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=a_.bind(null,U=>""+U),p=a_.bind(null,$5),_=a_.bind(null,tf);function I(U,re){let J,ge;return wx(U)?(J=e.getRecordMatcher(U),ge=re):ge=U,e.addRoute(ge,J)}function A(U){const re=e.getRecordMatcher(U);re&&e.removeRoute(re)}function P(){return e.getRoutes().map(U=>U.record)}function x(U){return!!e.getRecordMatcher(U)}function V(U,re){if(re=st({},re||u.value),typeof U=="string"){const C=l_(t,U,re.path),O=e.resolve({path:C.path},re),$=i.createHref(C.fullPath);return st(C,O,{params:_(O.params),hash:tf(C.hash),redirectedFrom:void 0,href:$})}let J;if("path"in U)J=st({},U,{path:l_(t,U.path,re.path).path});else{const C=st({},U.params);for(const O in C)C[O]==null&&delete C[O];J=st({},U,{params:p(C)}),re.params=p(re.params)}const ge=e.resolve(J,re),$e=U.hash||"";ge.params=f(_(ge.params));const w=e5(r,st({},U,{hash:F5($e),path:ge.path})),T=i.createHref(w);return st({fullPath:w,hash:$e,query:r===HA?q5(U.query):U.query||{}},ge,{redirectedFrom:void 0,href:T})}function W(U){return typeof U=="string"?l_(t,U,u.value.path):st({},U)}function K(U,re){if(h!==U)return Xa(8,{from:re,to:U})}function N(U){return ue(U)}function j(U){return N(st(W(U),{replace:!0}))}function se(U){const re=U.matched[U.matched.length-1];if(re&&re.redirect){const{redirect:J}=re;let ge=typeof J=="function"?J(U):J;return typeof ge=="string"&&(ge=ge.includes("?")||ge.includes("#")?ge=W(ge):{path:ge},ge.params={}),st({query:U.query,hash:U.hash,params:"path"in ge?{}:U.params},ge)}}function ue(U,re){const J=h=V(U),ge=u.value,$e=U.state,w=U.force,T=U.replace===!0,C=se(J);if(C)return ue(st(W(C),{state:typeof C=="object"?st({},$e,C.state):$e,force:w,replace:T}),re||J);const O=J;O.redirectedFrom=re;let $;return!w&&t5(r,ge,J)&&($=Xa(16,{to:O,from:ge}),Nt(ge,ge,!0,!1)),($?Promise.resolve($):Re(O,ge)).catch(q=>Ri(q)?Ri(q,2)?q:Qn(q):De(q,O,ge)).then(q=>{if(q){if(Ri(q,2))return ue(st({replace:T},W(q.to),{state:typeof q.to=="object"?st({},$e,q.to.state):$e,force:w}),re||O)}else q=an(O,ge,!0,T,$e);return St(O,ge,q),q})}function he(U,re){const J=K(U,re);return J?Promise.reject(J):Promise.resolve()}function Te(U){const re=Gi.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(U):U()}function Re(U,re){let J;const[ge,$e,w]=X5(U,re);J=c_(ge.reverse(),"beforeRouteLeave",U,re);for(const C of ge)C.leaveGuards.forEach(O=>{J.push(cs(O,U,re))});const T=he.bind(null,U,re);return J.push(T),Ot(J).then(()=>{J=[];for(const C of s.list())J.push(cs(C,U,re));return J.push(T),Ot(J)}).then(()=>{J=c_($e,"beforeRouteUpdate",U,re);for(const C of $e)C.updateGuards.forEach(O=>{J.push(cs(O,U,re))});return J.push(T),Ot(J)}).then(()=>{J=[];for(const C of w)if(C.beforeEnter)if(zr(C.beforeEnter))for(const O of C.beforeEnter)J.push(cs(O,U,re));else J.push(cs(C.beforeEnter,U,re));return J.push(T),Ot(J)}).then(()=>(U.matched.forEach(C=>C.enterCallbacks={}),J=c_(w,"beforeRouteEnter",U,re),J.push(T),Ot(J))).then(()=>{J=[];for(const C of o.list())J.push(cs(C,U,re));return J.push(T),Ot(J)}).catch(C=>Ri(C,8)?C:Promise.reject(C))}function St(U,re,J){c.list().forEach(ge=>Te(()=>ge(U,re,J)))}function an(U,re,J,ge,$e){const w=K(U,re);if(w)return w;const T=re===as,C=ha?history.state:{};J&&(ge||T?i.replace(U.fullPath,st({scroll:T&&C&&C.scroll},$e)):i.push(U.fullPath,$e)),u.value=U,Nt(U,re,J,T),Qn()}let Ct;function Ht(){Ct||(Ct=i.listen((U,re,J)=>{if(!br.listening)return;const ge=V(U),$e=se(ge);if($e){ue(st($e,{replace:!0}),ge).catch(gc);return}h=ge;const w=u.value;ha&&c5(FA(w.fullPath,J.delta),up()),Re(ge,w).catch(T=>Ri(T,12)?T:Ri(T,2)?(ue(T.to,ge).then(C=>{Ri(C,20)&&!J.delta&&J.type===Qc.pop&&i.go(-1,!1)}).catch(gc),Promise.reject()):(J.delta&&i.go(-J.delta,!1),De(T,ge,w))).then(T=>{T=T||an(ge,w,!1),T&&(J.delta&&!Ri(T,8)?i.go(-J.delta,!1):J.type===Qc.pop&&Ri(T,20)&&i.go(-1,!1)),St(ge,w,T)}).catch(gc)}))}let jn=zl(),ht=zl(),Ae;function De(U,re,J){Qn(U);const ge=ht.list();return ge.length?ge.forEach($e=>$e(U,re,J)):console.error(U),Promise.reject(U)}function Ar(){return Ae&&u.value!==as?Promise.resolve():new Promise((U,re)=>{jn.add([U,re])})}function Qn(U){return Ae||(Ae=!U,Ht(),jn.list().forEach(([re,J])=>U?J(U):re()),jn.reset()),U}function Nt(U,re,J,ge){const{scrollBehavior:$e}=n;if(!ha||!$e)return Promise.resolve();const w=!J&&u5(FA(U.fullPath,0))||(ge||!J)&&history.state&&history.state.scroll||null;return RP().then(()=>$e(U,re,w)).then(T=>T&&l5(T)).catch(T=>De(T,U,re))}const gn=U=>i.go(U);let Hi;const Gi=new Set,br={currentRoute:u,listening:!0,addRoute:I,removeRoute:A,hasRoute:x,getRoutes:P,resolve:V,options:n,push:N,replace:j,go:gn,back:()=>gn(-1),forward:()=>gn(1),beforeEach:s.add,beforeResolve:o.add,afterEach:c.add,onError:ht.add,isReady:Ar,install(U){const re=this;U.component("RouterLink",G5),U.component("RouterView",Px),U.config.globalProperties.$router=re,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Xe(u)}),ha&&!Hi&&u.value===as&&(Hi=!0,N(i.location).catch($e=>{}));const J={};for(const $e in as)Object.defineProperty(J,$e,{get:()=>u.value[$e],enumerable:!0});U.provide(hp,re),U.provide(Jv,mP(J)),U.provide(Mm,u);const ge=U.unmount;Gi.add(U),U.unmount=function(){Gi.delete(U),Gi.size<1&&(h=as,Ct&&Ct(),Ct=null,u.value=as,Hi=!1,Ae=!1),ge()}}};function Ot(U){return U.reduce((re,J)=>re.then(()=>Te(J)),Promise.resolve())}return br}function X5(n,e){const t=[],r=[],i=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const c=e.matched[o];c&&(n.matched.find(h=>Ja(h,c))?r.push(c):t.push(c));const u=n.matched[o];u&&(e.matched.find(h=>Ja(h,u))||i.push(u))}return[t,r,i]}function xx(){return wr(hp)}function Z5(){return wr(Jv)}const kx="/assets/logo-text-d3e0d169.png";const ej={},tj={class:"flex flex-col h-screen"},nj=YP('<nav data-v-12d2f87b><div class="flex flex-wrap items-center justify-between mx-auto px-4 h-12" data-v-12d2f87b><a href="/" class="flex items-center h-full" data-v-12d2f87b><img src="'+kx+'" class="h-full mr-3" alt="SubInbox Logo" data-v-12d2f87b></a><div class="block w-auto" id="navbar-default" data-v-12d2f87b><ul class="font-medium flex flex-row space-x-3 mt-0" data-v-12d2f87b><li data-v-12d2f87b><button class="material-symbols-sharp h-full aspect-square" data-v-12d2f87b>settings</button></li><li data-v-12d2f87b><button class="material-symbols-sharp h-full aspect-square" data-v-12d2f87b>account_circle</button></li></ul></div></div></nav><div class="flex flex-row grow min-h-0" data-v-12d2f87b><main class="grow overflow-y-scroll flex flex-col" data-v-12d2f87b><h1 data-v-12d2f87b>Welcome!</h1></main></div>',2),rj=[nj];function ij(n,e){return Et(),en("div",tj,rj)}const sj=gi(ej,[["render",ij],["__scopeId","data-v-12d2f87b"]]);const oj=n=>(Mo("data-v-d8fac9cd"),n=n(),Vo(),n),aj={id:"content"},lj=YP('<nav data-v-d8fac9cd><div class="flex flex-wrap items-center justify-between mx-auto px-4 h-full" data-v-d8fac9cd><a href="/" class="flex items-center h-full" data-v-d8fac9cd><img src="'+kx+'" class="h-full mr-3" alt="SubInbox Logo" data-v-d8fac9cd></a><div class="block w-auto" id="navbar-default" data-v-d8fac9cd><ul class="font-medium flex flex-row space-x-3 mt-0" data-v-d8fac9cd><li data-v-d8fac9cd><button class="material-symbols-sharp h-full aspect-square" data-v-d8fac9cd>settings</button></li><li data-v-d8fac9cd><button class="material-symbols-sharp h-full aspect-square" data-v-d8fac9cd>account_circle</button></li></ul></div></div></nav>',1),cj=oj(()=>ae("div",{class:"flex flex-col min-h-0"}," Loading... ",-1)),uj={__name:"AppView",setup(n){return Qv(),Sv(),(e,t)=>(Et(),en("div",aj,[lj,(Et(),zc(W6,null,{fallback:Ha(()=>[cj]),default:Ha(()=>[Ft(Xe(Px))]),_:1}))]))}},hj=gi(uj,[["__scopeId","data-v-d8fac9cd"]]),dj="/assets/logo-text-hd-bc841cbc.png",fj="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAAGsklEQVR4Ae3cA3jsShgG4Gvbtu1js7aObdu2bdbudmvbtu1VtUg2ydw7x95mstnt5rZ5voflG80/fzL72L89bOsF94J7wWgb2dSgiAzpPHmwbfPK1qWzxDNsRdb6Ar2BgtF9hSbDRbYG4mk2beuXwm+Q89yV+TmAILgHptrb5DyPtg3LhBZjBCP+RovewNZlc2TOl8nGel0HA4LA4qPhkRSM6XcHoEYk86fIfT2AQqFzYIBjMncHofkoZBWNCM1GSq+cpdpadQIMKEoRzIeXIroEkW08TObpDAiiO8F4Tga85TBnoEc8xVKZm9UNYECS0stnBCP/Ud+AnJH/SC+eAiShPTDZ3CRZPIN9CUokC6ZSYqE2wHhmKhw/2TegR2RnSFSUaRaMJccLxg7QsAQhktkTAACaAmOxkbA80h2taKIZKWzR1BFWRAQLRvXhphYdDEtcWDxxU4sOhjdDkdVYbmrRwYAgJIums3RTNWrftbHz/AmZh5MiLBAGVqOdZ4+1790inmrFvpYZuPPEATWdknmT5f7eZEN9V2N7o9zPu3XNInQte2BlcYE6tVTbltXw4kf9h5QlhW3rliBr1QcDAODsjPFlhmelqfNvKQty4S9B0KoPVgTxmWk7Tx0COMZCF6GzA3ZC0LWMwJSsTWiOXj+O6iP382KzowAAvMOhaxmAqw/Ijr4tGPsHgnbsACwxlpNNPABIIv5LIvxpzOVlkdXPNMGK8CCudi2pFi+ovRFlwLOtc7/uUgvnxhxu05LpIyD17nTu+EAw8q9HaVtXzgcAcBUMcAER/sx9YBj5pdeExr897NLtT9TVcLgRTzVcgbyHBuc9L5n8PdLJzAEwmWP1KDCMMvTp9jWf3tbC1gdQKDgMBhRBRL0GYaojO35zxOo8fZjbz5ZAZz700Anm9pLI9g+yoY7bYKrJBWJoRpk8SJ0/fDoc13QuRuNdgMmydfTBZPkGdcDDd0q1EDkOVIKzTOiDKVGY7oPLmylVYCKlL30wIKW6D44tJlSCE76nC45+CwHXfWDfdKVKcMwHdMEJ33MC7JqEqwRHvEgXnDaYE+ArMayBB3ECDAennnVKn4tUDU74gS446k1OgB3i8Z41LHmkKHtW4eGfpRpctv5/VlomlxOsTR6kKQN1H1wnptiZHpYFv27pMbqus4kxOChbySzTz8loakfukhIkYKEBEBzw6SBXk79cLQ5lXv5XuxtJAaMDdA/v+JMydVs8irBnDvB+g9QbGeY1SUFg2gTn1JD0z+cdPIVaTbym0JemeQ6FzrtzJtdFm+DT4Rh9MD9DybxNmxL03mg3g/u0MP3cbWo6GrWjbZMBg/0Id6wqAcWwEX+F/10fVzPIe2jmRW3VTiP+VBjC4bU6KgMAID9qaQt9frl3P6hSndOaP7HrxdSYPQiH92QYhvAwTRH7KdSWBL9h5j4GeugkqDpWc1oZBqaelSGNwMWNJMLjUkHxBn//zwZeH3topr+7bWxDmia0AID17gok7aTTMrTnw1KsfZTPVMhAyj9uVl5lIexqcQLs4KFpYXjpSjQw3HwrIqCBQQ5mXsZInBWtoIOac1GOqrU4IsUJwOSllsmha5iZTf3npzXnqXka+1dFmzo4D9vZgQp2TsAZvrZUIC7729WSmRlmVfz+HGExKpUCVGJj1oSQlTd+SZ9Lm4bubqKvtTkmk+OAIRhu+zMu3jEwyqTQ1d7lofWdzV0VyWSxpPJkjpOB76z7fsPfjjOHHMhBb0QzAhMUMS18nRrgOzHkz96YdPR4toNTMT+gKjq4OtatNPBCvgfcp9PD1w/wsFP14y7WA4/zu9SudVWw8HKpUC4Zw5uOLmQ//c4fGrZL8iit+WEpvMmxAIZbtrCor7uNLpj/ubpk6N6Kh059M6tINl8Qh4UUHGa73wzjNGHQ4dj7wC6JOPtLACLqkvq4WeuE2cWi/+nLt0csOKnQ1CKP+IYMWELqgPnGiLVh6O7Go8GYZpfxpDbnwkaHjpj3JfLRV7Wgb01SARxIupc6wntyfGOG9pbikRQJmzvodRg7mRq2tkkm7IbFlhktBdaBS7SsPZx1haDIbltOSwGKXxl5px7UZGaEb8gXlerEgmmMxB2KfEciTKHRAsvbmPo0nVsST1BEdH3Kyrh9bJVlQ7wmbk05USSu0PUPPWjDOtxLg5bF7h7tM42B08x//o7U0/AmrCSV3PtYiwZpS3B13MHMS/DIz4rYaBO0VM93JpwbwaJtqNfEsbwZFgEL50VtgcJLBV6wK9aKtfd+cEkvuBfcC37k9h8VGR+csPdltgAAAABJRU5ErkJggg==",Fs=n=>(Mo("data-v-28dde122"),n=n(),Vo(),n),pj={class:"login-container"},gj={class:"login-box"},_j=Fs(()=>ae("img",{class:"block self-center max-h-18",src:dj,alt:"SubInbox"},null,-1)),mj=Fs(()=>ae("hr",{class:"mt-4 mb-6"},null,-1)),yj=Fs(()=>ae("h1",{class:"text-2xl text-left mb-2"},"Sign-In",-1)),vj=Fs(()=>ae("p",{class:"mb-3"},"Welcome! Using the button below you can sign in, or if you're here for the first time, you can use the same button to sign up.",-1)),Ij=["disabled"],wj=Fs(()=>ae("img",{class:"h-6",src:fj},null,-1)),Ej={key:0,class:"grow font-bold"},Tj={key:1,class:"material-symbols-outlined text-almost-black animate-spin-trans text-center absolute left-1/2 origin-center -translate-x-1/2"},Aj=Fs(()=>ae("span",{class:"material-symbols-outlined"},"arrow_back",-1)),bj=Fs(()=>ae("span",{class:"grow font-bold"},"Cancel and go to homepage",-1)),Rj=[Aj,bj],Sj=Fs(()=>ae("br",null,null,-1)),Cj={class:"text-text-secondary"},Pj=wu({__name:"LoginView",setup(n){const e=new Yr,t=xx(),r=Z5(),i=Qv();Sv();const s=cp(),o=Bt(!1);function c(){o.value=!0,dB(i,e).then(u=>{const h=u.user.uid;fa(Dr(s,"users",h)).then(f=>{if(qU(u).isNewUser||!f.exists()){co(Dr(s,"users",h),{name:u.user.displayName,email:u.user.email,authorized:!1,token:null});var p={videos:[]};co(Dr(s,"users",h,"folders","inbox"),p),co(Dr(s,"users",h,"folders","all"),p),co(Dr(s,"users",h,"folders","watchLater"),p)}const _=r.query.redirect?r.query.redirect:"/app";t.push(_)}).catch(f=>{console.error(f),alert("An error occurred when trying to sign you in. Please try again later.")})}).catch(u=>{console.error(u),u.code==="auth/popup-blocked"&&alert("Popup blocked by browser. Please enable popups and try again.")}).finally(()=>{o.value=!1})}return(u,h)=>{const f=wv("router-link");return Et(),en("div",pj,[ae("div",gj,[_j,mj,yj,vj,ae("button",{onClick:c,class:ai(["sign-in-with-google bg-white",o.value?"popup-open":""]),disabled:o.value},[wj,o.value?Kc("",!0):(Et(),en("span",Ej,"Continue with with Google")),o.value?(Et(),en("span",Tj,"progress_activity")):Kc("",!0)],10,Ij),ae("button",{onClick:h[0]||(h[0]=p=>this.$router.push("/")),class:"bg-button-emph-4"},Rj),Sj,ae("p",Cj,[Or("By signing in you accept our "),Ft(f,{class:"link",to:"/privacy-policy"},{default:Ha(()=>[Or("Privacy Policy")]),_:1}),Or(" and "),Ft(f,{class:"link",to:"/terms-of-service"},{default:Ha(()=>[Or("Terms of Service")]),_:1}),Or(".")])])])}}});const xj=gi(Pj,[["__scopeId","data-v-28dde122"]]),kj="/assets/youtube_social_icon_red-4777b7ac.png";const Su=n=>(Mo("data-v-eb4ddba8"),n=n(),Vo(),n),Dj={class:"login-container"},Nj={class:"login-box"},Oj={class:"text-2xl text-left mb-2"},Mj=Su(()=>ae("p",{class:"mb-3"},[Or(" For this app to be useful, you need to authorize us to look at your YouTube account. By clicking the button below, you give us permission to: "),ae("ul",{class:"list-disc mt-2 mb-2 list-inside"},[ae("li",null,"Look at your channel"),ae("li",null,"Look at subscriptions"),ae("li",null,"Look at your playlists")]),Or(" You do not give us permission to change anything on behalf of you. ")],-1)),Vj=Su(()=>ae("img",{class:"h-6",src:kj},null,-1)),Lj={key:0,class:"grow font-bold text-almost-black"},Fj={key:1,class:"material-symbols-outlined text-almost-black animate-spin-trans text-center absolute left-1/2 origin-center -translate-x-1/2"},Uj=Su(()=>ae("span",{class:"material-symbols-outlined"},"logout",-1)),Bj=Su(()=>ae("span",{class:"grow font-bold"},"Sign out and come back later",-1)),$j=[Uj,Bj],Wj=Su(()=>ae("br",null,null,-1)),qj={class:"text-text-secondary"},zj={__name:"AuthorizeView",setup(n){new Yr;const e=xx(),t=Qv(),r=Sv();cp();const i=Bt(!1);function s(){KU(t),e.push("/")}function o(){const c=r.value.uid,u=new URL("authorize","http://localhost:5000/");u.searchParams.append("uid",c),window.location.href=u}return(c,u)=>{const h=wv("router-link");return Et(),en("div",Dj,[ae("div",Nj,[ae("h1",Oj,"Welcome, "+Pi(Xe(r).displayName)+"!",1),Mj,ae("button",{onClick:o,class:"login-with-youtube bg-white"},[Vj,i.value?Kc("",!0):(Et(),en("span",Lj,"Authorize with YouTube")),i.value?(Et(),en("span",Fj,"progress_activity")):Kc("",!0)]),ae("button",{onClick:s,class:"bg-button-emph-4"},$j),Wj,ae("p",qj,[Or("If you have changed your mind and would rather delete your account, go to "),Ft(h,{class:"link",to:"/app/account"},{default:Ha(()=>[Or("My Account")]),_:1}),Or(".")])])])}}},Kj=gi(zj,[["__scopeId","data-v-eb4ddba8"]]);class Dx{constructor(e){nt(this,"local_db");this.local_db=e}async get(e){return await this.local_db.get("vars",e)}async set(e,t){await this.local_db.put("vars",t,e)}static async set(e,t,r){}static async initDB(e){const t=e.createObjectStore("vars"),r=function(i,s){return t.add(s,i)};return await Promise.all([r("subscriptions.lastRefreshed",new Date(0)),r("subsciptionFeed.lastRefreshed",new Date(0))])}}const Nx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA5JJREFUeJzt2kuIHFUUgOEvMT5GMRhIDKIo4gMhYhQRF0J8E2QUJKLoUoy4cetO3OjejYiPRUCzEJIQF4KPKBjD7LJQNELiRhFNRp24Mcpo9Lq4HaYz6e4x3XOmqtvzQ8Ot+6g59VN9+taZWlVKkcSxuukAJp0UHEwKDiYFB5OCg0nBwaTgYFJwMCk4mBQcTAoOJgUHk4KDScHBpOBgUnAwKTiYFBxMCg4mBQeTgoNJwcGk4GBScDApOJgUHMyahv7uRlw04jlmcWIZYgllVUPvpu3BthHP8QXuwy+jhxPHOKeIzfgY65sOZBBNpYhTfIkXh1i3Q00xm7FPvZPnljGuZaNpwbPYNcS61y3k8JvxiZami3FOEd20Nl1MimBaKnmSBNNCyZMmmJZJnkTBLOwuLmg6kKZ3EcPyOdb2GbsE16i7i3U4ulJB9WJcBd8zYGyb+qTYCiY1RbSGFBxMCg5mEgXvxzP4CP80HMtECp7DG9iq1joapW27iK34YMD4CTyO97r6bsKdahH/JL5V794fY0I8O9omeBB/YlpNAXAHXsZtPeYWvIPn8MOKRNeHtgk+pObPXnxjQe52vIpzO8fzam15CjfgHDyBu/EQDgbFuzSllCY+e0pl3xBrHy6l/F0WmCmlXNE1vqmUcqRrfLaUclVD1zl2P3Jr1R+wU3HP4xGch93Yie/xbNeaS/HKCsZ4Gm1LEUvxFDZ0HZ+Pd9XruLXTtxsHFq17EDfiq+gAF9M2wVO4bFHf7zjWaU/3WHN7V/sIPsUtPeZNS8G2OHObtguPddrXDlh7WC0CrcfbPcYHrQ2jbYJ7Md/VvnDAvKdxXL2DL+8xPuqLLkPRNsEHcf+ivp8WtTfozRzuxXV9xo/16Q+lbYLn1H/39GMGm/qMHVri3DNDRTQi47ZN29mn/ziuxl19xn/GhxEBLcW4CT6AvT36f1MfiQ/rXUF7oTNnxWk6RWzEo/9x7mdqdexJXO/0VHElvsbFzrxpduC10cIcgYYflc+G/aWUNZ3160op7y8x/2Qp5aVSyuqGrnHsHpW34C31W/crHlALOXs7x9Qq2nd4Uy1jPq/hontT7weP8gL2UfzRo38Kf6k14dbQlOD/DeOUIsaSFBxMCg4mBQeTgoNJwcGk4GBScDApOJgUHEwKDiYFB5OCg0nBwaTgYFJwMCk4mBQcTAoOJgUHk4KDScHBpOBgUnAwKTiYFBzMv2sQp++RL9OtAAAAAElFTkSuQmCC";const Hj=["alt","src","data-placeholder"],Gj={__name:"ChannelButton",props:["channelName","channelId","thumbnailUrl","active"],emits:["click"],setup(n,{emit:e}){return(t,r)=>(Et(),en("button",{onClick:r[1]||(r[1]=i=>e("click")),class:ai(n.active?"active":"")},[ae("img",{loading:"lazy",alt:n.channelName,src:n.thumbnailUrl,"data-placeholder":Xe(Nx),onError:r[0]||(r[0]=(...i)=>Xe(eb)&&Xe(eb)(...i))},null,40,Hj),ae("span",null,Pi(n.channelName),1)],2))}},jj=gi(Gj,[["__scopeId","data-v-b6ce9672"]]);const Ox=n=>(Mo("data-v-e71a9a00"),n=n(),Vo(),n),Qj=["value"],Yj=Ox(()=>ae("option",{value:"rel"},"Relevance",-1)),Jj=Ox(()=>ae("option",{value:"atz"},"A-Z",-1)),Xj=[Yj,Jj],Zj={__name:"OrderSelector",props:["modelValue"],emits:["update:modelValue"],setup(n,{emit:e}){return(t,r)=>(Et(),en("div",null,[ae("select",{id:"select",value:n.modelValue,onChange:r[0]||(r[0]=i=>t.$emit("update:modelValue",i.target.value))},Xj,40,Qj)]))}},e7=gi(Zj,[["__scopeId","data-v-e71a9a00"]]),t7="/assets/video_thumbnail_placeholder-bbc3e313.png",XA=["standard","maxres","high","medium","default"],ZA=["medium","high","default"];function Wh(n,e){var t="",r="";for(const[i,s]of e.entries())n.thumbnails.has(s)&&(i==0?r=n.thumbnails.get(s).url:i==e.length-1?t=t+n.thumbnails.get(s).url:t=t+n.thumbnails.get(s).url+",");return{src:r,srcset:t}}const n7=100;function qh(n){const e=n.target,t=e.dataset.placeholder;if(e.src=t,!!e.dataset.srcset){var r=e.dataset.srcset.split(",");r.length!=0&&setTimeout(()=>{e.dataset.srcset=r.slice(1).join(","),e.src=r[0]},n7)}}const Mx=n=>(Mo("data-v-65db76b9"),n=n(),Vo(),n),r7=Mx(()=>ae("div",{class:"swipe-action left"},[ae("div",{class:"swipe-action-icon"},[ae("span",{class:"material-symbols-sharp"}," delete "),ae("div",{class:"swipe-action-text"}," Delete ")])],-1)),i7={class:"relative h-full aspect-video"},s7=["src","data-srcset","alt","data-placeholder"],o7={class:"video-duration"},a7={class:"grow flex flex-col"},l7={class:"video-title pl-4 block text-left"},c7={class:"video-information text-text-secondary text-xs pl-4 block text-left"},u7={class:"channel-button ml-2"},h7=["alt","src","data-srcset","data-placeholder"],d7=Mx(()=>ae("div",{class:"swipe-action right"}," R ",-1));function Vx(n){if(n.length>0){n[0].getElementsByClassName("swipe-action").scrollWidth;for(let e of n)e.scrollTo({left:e.scrollWidth/3})}}window.addEventListener("resize",()=>{Vx(Array.from(document.getElementsByClassName("swipe-container")))});const f7=wu({__name:"VideoItem",props:{video:{},channel:{}},emits:["action-delete"],setup(n,{emit:e}){const t=n,r=Bt(null),i=Bt(!1);VP(()=>{Vx([r.value])});function s(){const p=r.value,_=p.scrollLeft-p.clientWidth;if(_<80*-1){p.scrollTo({left:0,behavior:"smooth"});const I=()=>{p.removeEventListener("transitionend",I),e("action-delete",t.video.videoId)};o(p,0).then(()=>{i.value=!0,p.addEventListener("transitionend",I)})}else _>80?p.scrollTo({left:p.scrollWidth,behavior:"smooth"}):p.scrollTo({left:p.scrollWidth/3,behavior:"smooth"})}async function o(f,p){return new Promise((_,I)=>{const A=()=>{f.scrollLeft===p&&(f.removeEventListener("scroll",A),_(null))};f.scrollLeft===p?_(null):f.addEventListener("scroll",A)})}function c(f,p){const _=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"B"}],I=/\.0+$|(\.[0-9]*[1-9])0+$/;var A=_.slice().reverse().find(function(P){return f>=P.value});return A?(f/A.value).toFixed(p).replace(I,"$1")+A.symbol:"0"}function u(f){const p=Date.now()-f;var I=[{value:1e3,symbol:"second"},{value:6e4,symbol:"minute"},{value:36e5,symbol:"hour"},{value:864e5,symbol:"day"},{value:6048e5,symbol:"week"},{value:26266e5,symbol:"month"},{value:315576e5,symbol:"year"}].reverse().find(P=>p>=P.value);if(I){var A=Math.floor(p/I.value);return A>1?A+" "+I.symbol+"s":A+" "+I.symbol}else return"0 seconds"}function h(f){window.open("https://www.youtube.com/v/"+t.video.videoId)}return nr(()=>{const f=["standard","high","maxres","medium","default"];try{for(var p of f)if(t.video.thumbnails.has(p))return t.video.thumbnails.get(p).url}catch(_){throw console.log(t.video),_}}),(f,p)=>(Et(),en("div",{class:ai(["swipe-container",{collapsed:i.value}]),ref_key:"swipeContainer",ref:r,onTouchend:s},[r7,ae("button",{class:"video-item-container swipe-element flex flex-row pl-4 pr-4 pt-2 pb-2",onClick:h},[ae("div",i7,[ae("img",{loading:"lazy",class:"h-full w-full object-cover rounded-lg",src:Xe(Wh)(t.video,Xe(XA)).src,"data-srcset":Xe(Wh)(t.video,Xe(XA)).srcset,alt:t.video.title,onError:p[0]||(p[0]=(..._)=>Xe(qh)&&Xe(qh)(..._)),"data-placeholder":Xe(t7)},null,40,s7),ae("span",o7,Pi(t.video.duration),1)]),ae("div",a7,[ae("span",l7,Pi(t.video.title),1),ae("span",c7,Pi(t.channel.title)+" • "+Pi(c(t.video.viewCount,0))+" views • "+Pi(u(t.video.publishedAt))+" ago",1),ae("button",u7,[ae("img",{loading:"lazy",alt:t.channel.title,src:Xe(Wh)(t.channel,Xe(ZA)).src,"data-srcset":Xe(Wh)(t.channel,Xe(ZA)).srcset,"data-placeholder":Xe(Nx),onError:p[1]||(p[1]=(..._)=>Xe(qh)&&Xe(qh)(..._))},null,40,h7),ae("span",null,Pi(t.channel.title),1)])])]),d7],34))}});const p7=gi(f7,[["__scopeId","data-v-65db76b9"]]);var Kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nf={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */nf.exports;(function(n,e){(function(){var t,r="4.17.21",i=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",o="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",h=500,f="__lodash_placeholder__",p=1,_=2,I=4,A=1,P=2,x=1,V=2,W=4,K=8,N=16,j=32,se=64,ue=128,he=256,Te=512,Re=30,St="...",an=800,Ct=16,Ht=1,jn=2,ht=3,Ae=1/0,De=9007199254740991,Ar=17976931348623157e292,Qn=0/0,Nt=4294967295,gn=Nt-1,Hi=Nt>>>1,Gi=[["ary",ue],["bind",x],["bindKey",V],["curry",K],["curryRight",N],["flip",Te],["partial",j],["partialRight",se],["rearg",he]],br="[object Arguments]",Ot="[object Array]",U="[object AsyncFunction]",re="[object Boolean]",J="[object Date]",ge="[object DOMException]",$e="[object Error]",w="[object Function]",T="[object GeneratorFunction]",C="[object Map]",O="[object Number]",$="[object Null]",q="[object Object]",te="[object Promise]",Q="[object Proxy]",Y="[object RegExp]",z="[object Set]",pe="[object String]",le="[object Symbol]",_e="[object Undefined]",Ie="[object WeakMap]",Fe="[object WeakSet]",Je="[object ArrayBuffer]",We="[object DataView]",vt="[object Float32Array]",Sn="[object Float64Array]",Kr="[object Int8Array]",Uo="[object Int16Array]",_i="[object Int32Array]",Bo="[object Uint8Array]",ln="[object Uint8ClampedArray]",Vn="[object Uint16Array]",$o="[object Uint32Array]",Ux=/\b__p \+= '';/g,Bx=/\b(__p \+=) '' \+/g,$x=/(__e\(.*?\)|\b__t\)) \+\n'';/g,eI=/&(?:amp|lt|gt|quot|#39);/g,tI=/[&<>"']/g,Wx=RegExp(eI.source),qx=RegExp(tI.source),zx=/<%-([\s\S]+?)%>/g,Kx=/<%([\s\S]+?)%>/g,nI=/<%=([\s\S]+?)%>/g,Hx=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Gx=/^\w*$/,jx=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,dp=/[\\^$.*+?()[\]{}|]/g,Qx=RegExp(dp.source),fp=/^\s+/,Yx=/\s/,Jx=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Xx=/\{\n\/\* \[wrapped with (.+)\] \*/,Zx=/,? & /,ek=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,tk=/[()=,{}\[\]\/\s]/,nk=/\\(\\)?/g,rk=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,rI=/\w*$/,ik=/^[-+]0x[0-9a-f]+$/i,sk=/^0b[01]+$/i,ok=/^\[object .+?Constructor\]$/,ak=/^0o[0-7]+$/i,lk=/^(?:0|[1-9]\d*)$/,ck=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Cu=/($^)/,uk=/['\n\r\u2028\u2029\\]/g,Pu="\\ud800-\\udfff",hk="\\u0300-\\u036f",dk="\\ufe20-\\ufe2f",fk="\\u20d0-\\u20ff",iI=hk+dk+fk,sI="\\u2700-\\u27bf",oI="a-z\\xdf-\\xf6\\xf8-\\xff",pk="\\xac\\xb1\\xd7\\xf7",gk="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",_k="\\u2000-\\u206f",mk=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",aI="A-Z\\xc0-\\xd6\\xd8-\\xde",lI="\\ufe0e\\ufe0f",cI=pk+gk+_k+mk,pp="['’]",yk="["+Pu+"]",uI="["+cI+"]",xu="["+iI+"]",hI="\\d+",vk="["+sI+"]",dI="["+oI+"]",fI="[^"+Pu+cI+hI+sI+oI+aI+"]",gp="\\ud83c[\\udffb-\\udfff]",Ik="(?:"+xu+"|"+gp+")",pI="[^"+Pu+"]",_p="(?:\\ud83c[\\udde6-\\uddff]){2}",mp="[\\ud800-\\udbff][\\udc00-\\udfff]",Wo="["+aI+"]",gI="\\u200d",_I="(?:"+dI+"|"+fI+")",wk="(?:"+Wo+"|"+fI+")",mI="(?:"+pp+"(?:d|ll|m|re|s|t|ve))?",yI="(?:"+pp+"(?:D|LL|M|RE|S|T|VE))?",vI=Ik+"?",II="["+lI+"]?",Ek="(?:"+gI+"(?:"+[pI,_p,mp].join("|")+")"+II+vI+")*",Tk="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ak="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",wI=II+vI+Ek,bk="(?:"+[vk,_p,mp].join("|")+")"+wI,Rk="(?:"+[pI+xu+"?",xu,_p,mp,yk].join("|")+")",Sk=RegExp(pp,"g"),Ck=RegExp(xu,"g"),yp=RegExp(gp+"(?="+gp+")|"+Rk+wI,"g"),Pk=RegExp([Wo+"?"+dI+"+"+mI+"(?="+[uI,Wo,"$"].join("|")+")",wk+"+"+yI+"(?="+[uI,Wo+_I,"$"].join("|")+")",Wo+"?"+_I+"+"+mI,Wo+"+"+yI,Ak,Tk,hI,bk].join("|"),"g"),xk=RegExp("["+gI+Pu+iI+lI+"]"),kk=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Dk=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Nk=-1,ft={};ft[vt]=ft[Sn]=ft[Kr]=ft[Uo]=ft[_i]=ft[Bo]=ft[ln]=ft[Vn]=ft[$o]=!0,ft[br]=ft[Ot]=ft[Je]=ft[re]=ft[We]=ft[J]=ft[$e]=ft[w]=ft[C]=ft[O]=ft[q]=ft[Y]=ft[z]=ft[pe]=ft[Ie]=!1;var dt={};dt[br]=dt[Ot]=dt[Je]=dt[We]=dt[re]=dt[J]=dt[vt]=dt[Sn]=dt[Kr]=dt[Uo]=dt[_i]=dt[C]=dt[O]=dt[q]=dt[Y]=dt[z]=dt[pe]=dt[le]=dt[Bo]=dt[ln]=dt[Vn]=dt[$o]=!0,dt[$e]=dt[w]=dt[Ie]=!1;var Ok={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Mk={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Vk={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Lk={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Fk=parseFloat,Uk=parseInt,EI=typeof Kl=="object"&&Kl&&Kl.Object===Object&&Kl,Bk=typeof self=="object"&&self&&self.Object===Object&&self,cn=EI||Bk||Function("return this")(),vp=e&&!e.nodeType&&e,Us=vp&&!0&&n&&!n.nodeType&&n,TI=Us&&Us.exports===vp,Ip=TI&&EI.process,lr=function(){try{var R=Us&&Us.require&&Us.require("util").types;return R||Ip&&Ip.binding&&Ip.binding("util")}catch{}}(),AI=lr&&lr.isArrayBuffer,bI=lr&&lr.isDate,RI=lr&&lr.isMap,SI=lr&&lr.isRegExp,CI=lr&&lr.isSet,PI=lr&&lr.isTypedArray;function Yn(R,M,D){switch(D.length){case 0:return R.call(M);case 1:return R.call(M,D[0]);case 2:return R.call(M,D[0],D[1]);case 3:return R.call(M,D[0],D[1],D[2])}return R.apply(M,D)}function $k(R,M,D,oe){for(var Ce=-1,Ze=R==null?0:R.length;++Ce<Ze;){var qt=R[Ce];M(oe,qt,D(qt),R)}return oe}function cr(R,M){for(var D=-1,oe=R==null?0:R.length;++D<oe&&M(R[D],D,R)!==!1;);return R}function Wk(R,M){for(var D=R==null?0:R.length;D--&&M(R[D],D,R)!==!1;);return R}function xI(R,M){for(var D=-1,oe=R==null?0:R.length;++D<oe;)if(!M(R[D],D,R))return!1;return!0}function ji(R,M){for(var D=-1,oe=R==null?0:R.length,Ce=0,Ze=[];++D<oe;){var qt=R[D];M(qt,D,R)&&(Ze[Ce++]=qt)}return Ze}function ku(R,M){var D=R==null?0:R.length;return!!D&&qo(R,M,0)>-1}function wp(R,M,D){for(var oe=-1,Ce=R==null?0:R.length;++oe<Ce;)if(D(M,R[oe]))return!0;return!1}function It(R,M){for(var D=-1,oe=R==null?0:R.length,Ce=Array(oe);++D<oe;)Ce[D]=M(R[D],D,R);return Ce}function Qi(R,M){for(var D=-1,oe=M.length,Ce=R.length;++D<oe;)R[Ce+D]=M[D];return R}function Ep(R,M,D,oe){var Ce=-1,Ze=R==null?0:R.length;for(oe&&Ze&&(D=R[++Ce]);++Ce<Ze;)D=M(D,R[Ce],Ce,R);return D}function qk(R,M,D,oe){var Ce=R==null?0:R.length;for(oe&&Ce&&(D=R[--Ce]);Ce--;)D=M(D,R[Ce],Ce,R);return D}function Tp(R,M){for(var D=-1,oe=R==null?0:R.length;++D<oe;)if(M(R[D],D,R))return!0;return!1}var zk=Ap("length");function Kk(R){return R.split("")}function Hk(R){return R.match(ek)||[]}function kI(R,M,D){var oe;return D(R,function(Ce,Ze,qt){if(M(Ce,Ze,qt))return oe=Ze,!1}),oe}function Du(R,M,D,oe){for(var Ce=R.length,Ze=D+(oe?1:-1);oe?Ze--:++Ze<Ce;)if(M(R[Ze],Ze,R))return Ze;return-1}function qo(R,M,D){return M===M?iD(R,M,D):Du(R,DI,D)}function Gk(R,M,D,oe){for(var Ce=D-1,Ze=R.length;++Ce<Ze;)if(oe(R[Ce],M))return Ce;return-1}function DI(R){return R!==R}function NI(R,M){var D=R==null?0:R.length;return D?Rp(R,M)/D:Qn}function Ap(R){return function(M){return M==null?t:M[R]}}function bp(R){return function(M){return R==null?t:R[M]}}function OI(R,M,D,oe,Ce){return Ce(R,function(Ze,qt,ut){D=oe?(oe=!1,Ze):M(D,Ze,qt,ut)}),D}function jk(R,M){var D=R.length;for(R.sort(M);D--;)R[D]=R[D].value;return R}function Rp(R,M){for(var D,oe=-1,Ce=R.length;++oe<Ce;){var Ze=M(R[oe]);Ze!==t&&(D=D===t?Ze:D+Ze)}return D}function Sp(R,M){for(var D=-1,oe=Array(R);++D<R;)oe[D]=M(D);return oe}function Qk(R,M){return It(M,function(D){return[D,R[D]]})}function MI(R){return R&&R.slice(0,UI(R)+1).replace(fp,"")}function Jn(R){return function(M){return R(M)}}function Cp(R,M){return It(M,function(D){return R[D]})}function gl(R,M){return R.has(M)}function VI(R,M){for(var D=-1,oe=R.length;++D<oe&&qo(M,R[D],0)>-1;);return D}function LI(R,M){for(var D=R.length;D--&&qo(M,R[D],0)>-1;);return D}function Yk(R,M){for(var D=R.length,oe=0;D--;)R[D]===M&&++oe;return oe}var Jk=bp(Ok),Xk=bp(Mk);function Zk(R){return"\\"+Lk[R]}function eD(R,M){return R==null?t:R[M]}function zo(R){return xk.test(R)}function tD(R){return kk.test(R)}function nD(R){for(var M,D=[];!(M=R.next()).done;)D.push(M.value);return D}function Pp(R){var M=-1,D=Array(R.size);return R.forEach(function(oe,Ce){D[++M]=[Ce,oe]}),D}function FI(R,M){return function(D){return R(M(D))}}function Yi(R,M){for(var D=-1,oe=R.length,Ce=0,Ze=[];++D<oe;){var qt=R[D];(qt===M||qt===f)&&(R[D]=f,Ze[Ce++]=D)}return Ze}function Nu(R){var M=-1,D=Array(R.size);return R.forEach(function(oe){D[++M]=oe}),D}function rD(R){var M=-1,D=Array(R.size);return R.forEach(function(oe){D[++M]=[oe,oe]}),D}function iD(R,M,D){for(var oe=D-1,Ce=R.length;++oe<Ce;)if(R[oe]===M)return oe;return-1}function sD(R,M,D){for(var oe=D+1;oe--;)if(R[oe]===M)return oe;return oe}function Ko(R){return zo(R)?aD(R):zk(R)}function Rr(R){return zo(R)?lD(R):Kk(R)}function UI(R){for(var M=R.length;M--&&Yx.test(R.charAt(M)););return M}var oD=bp(Vk);function aD(R){for(var M=yp.lastIndex=0;yp.test(R);)++M;return M}function lD(R){return R.match(yp)||[]}function cD(R){return R.match(Pk)||[]}var uD=function R(M){M=M==null?cn:Ho.defaults(cn.Object(),M,Ho.pick(cn,Dk));var D=M.Array,oe=M.Date,Ce=M.Error,Ze=M.Function,qt=M.Math,ut=M.Object,xp=M.RegExp,hD=M.String,ur=M.TypeError,Ou=D.prototype,dD=Ze.prototype,Go=ut.prototype,Mu=M["__core-js_shared__"],Vu=dD.toString,it=Go.hasOwnProperty,fD=0,BI=function(){var a=/[^.]+$/.exec(Mu&&Mu.keys&&Mu.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),Lu=Go.toString,pD=Vu.call(ut),gD=cn._,_D=xp("^"+Vu.call(it).replace(dp,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Fu=TI?M.Buffer:t,Ji=M.Symbol,Uu=M.Uint8Array,$I=Fu?Fu.allocUnsafe:t,Bu=FI(ut.getPrototypeOf,ut),WI=ut.create,qI=Go.propertyIsEnumerable,$u=Ou.splice,zI=Ji?Ji.isConcatSpreadable:t,_l=Ji?Ji.iterator:t,Bs=Ji?Ji.toStringTag:t,Wu=function(){try{var a=Ks(ut,"defineProperty");return a({},"",{}),a}catch{}}(),mD=M.clearTimeout!==cn.clearTimeout&&M.clearTimeout,yD=oe&&oe.now!==cn.Date.now&&oe.now,vD=M.setTimeout!==cn.setTimeout&&M.setTimeout,qu=qt.ceil,zu=qt.floor,kp=ut.getOwnPropertySymbols,ID=Fu?Fu.isBuffer:t,KI=M.isFinite,wD=Ou.join,ED=FI(ut.keys,ut),zt=qt.max,_n=qt.min,TD=oe.now,AD=M.parseInt,HI=qt.random,bD=Ou.reverse,Dp=Ks(M,"DataView"),ml=Ks(M,"Map"),Np=Ks(M,"Promise"),jo=Ks(M,"Set"),yl=Ks(M,"WeakMap"),vl=Ks(ut,"create"),Ku=yl&&new yl,Qo={},RD=Hs(Dp),SD=Hs(ml),CD=Hs(Np),PD=Hs(jo),xD=Hs(yl),Hu=Ji?Ji.prototype:t,Il=Hu?Hu.valueOf:t,GI=Hu?Hu.toString:t;function y(a){if(Pt(a)&&!xe(a)&&!(a instanceof Be)){if(a instanceof hr)return a;if(it.call(a,"__wrapped__"))return jw(a)}return new hr(a)}var Yo=function(){function a(){}return function(l){if(!At(l))return{};if(WI)return WI(l);a.prototype=l;var d=new a;return a.prototype=t,d}}();function Gu(){}function hr(a,l){this.__wrapped__=a,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=t}y.templateSettings={escape:zx,evaluate:Kx,interpolate:nI,variable:"",imports:{_:y}},y.prototype=Gu.prototype,y.prototype.constructor=y,hr.prototype=Yo(Gu.prototype),hr.prototype.constructor=hr;function Be(a){this.__wrapped__=a,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Nt,this.__views__=[]}function kD(){var a=new Be(this.__wrapped__);return a.__actions__=Ln(this.__actions__),a.__dir__=this.__dir__,a.__filtered__=this.__filtered__,a.__iteratees__=Ln(this.__iteratees__),a.__takeCount__=this.__takeCount__,a.__views__=Ln(this.__views__),a}function DD(){if(this.__filtered__){var a=new Be(this);a.__dir__=-1,a.__filtered__=!0}else a=this.clone(),a.__dir__*=-1;return a}function ND(){var a=this.__wrapped__.value(),l=this.__dir__,d=xe(a),g=l<0,m=d?a.length:0,v=KN(0,m,this.__views__),E=v.start,b=v.end,S=b-E,L=g?b:E-1,F=this.__iteratees__,H=F.length,X=0,de=_n(S,this.__takeCount__);if(!d||!g&&m==S&&de==S)return mw(a,this.__actions__);var we=[];e:for(;S--&&X<de;){L+=l;for(var Me=-1,Ee=a[L];++Me<H;){var Ue=F[Me],qe=Ue.iteratee,er=Ue.type,xn=qe(Ee);if(er==jn)Ee=xn;else if(!xn){if(er==Ht)continue e;break e}}we[X++]=Ee}return we}Be.prototype=Yo(Gu.prototype),Be.prototype.constructor=Be;function $s(a){var l=-1,d=a==null?0:a.length;for(this.clear();++l<d;){var g=a[l];this.set(g[0],g[1])}}function OD(){this.__data__=vl?vl(null):{},this.size=0}function MD(a){var l=this.has(a)&&delete this.__data__[a];return this.size-=l?1:0,l}function VD(a){var l=this.__data__;if(vl){var d=l[a];return d===u?t:d}return it.call(l,a)?l[a]:t}function LD(a){var l=this.__data__;return vl?l[a]!==t:it.call(l,a)}function FD(a,l){var d=this.__data__;return this.size+=this.has(a)?0:1,d[a]=vl&&l===t?u:l,this}$s.prototype.clear=OD,$s.prototype.delete=MD,$s.prototype.get=VD,$s.prototype.has=LD,$s.prototype.set=FD;function mi(a){var l=-1,d=a==null?0:a.length;for(this.clear();++l<d;){var g=a[l];this.set(g[0],g[1])}}function UD(){this.__data__=[],this.size=0}function BD(a){var l=this.__data__,d=ju(l,a);if(d<0)return!1;var g=l.length-1;return d==g?l.pop():$u.call(l,d,1),--this.size,!0}function $D(a){var l=this.__data__,d=ju(l,a);return d<0?t:l[d][1]}function WD(a){return ju(this.__data__,a)>-1}function qD(a,l){var d=this.__data__,g=ju(d,a);return g<0?(++this.size,d.push([a,l])):d[g][1]=l,this}mi.prototype.clear=UD,mi.prototype.delete=BD,mi.prototype.get=$D,mi.prototype.has=WD,mi.prototype.set=qD;function yi(a){var l=-1,d=a==null?0:a.length;for(this.clear();++l<d;){var g=a[l];this.set(g[0],g[1])}}function zD(){this.size=0,this.__data__={hash:new $s,map:new(ml||mi),string:new $s}}function KD(a){var l=oh(this,a).delete(a);return this.size-=l?1:0,l}function HD(a){return oh(this,a).get(a)}function GD(a){return oh(this,a).has(a)}function jD(a,l){var d=oh(this,a),g=d.size;return d.set(a,l),this.size+=d.size==g?0:1,this}yi.prototype.clear=zD,yi.prototype.delete=KD,yi.prototype.get=HD,yi.prototype.has=GD,yi.prototype.set=jD;function Ws(a){var l=-1,d=a==null?0:a.length;for(this.__data__=new yi;++l<d;)this.add(a[l])}function QD(a){return this.__data__.set(a,u),this}function YD(a){return this.__data__.has(a)}Ws.prototype.add=Ws.prototype.push=QD,Ws.prototype.has=YD;function Sr(a){var l=this.__data__=new mi(a);this.size=l.size}function JD(){this.__data__=new mi,this.size=0}function XD(a){var l=this.__data__,d=l.delete(a);return this.size=l.size,d}function ZD(a){return this.__data__.get(a)}function eN(a){return this.__data__.has(a)}function tN(a,l){var d=this.__data__;if(d instanceof mi){var g=d.__data__;if(!ml||g.length<i-1)return g.push([a,l]),this.size=++d.size,this;d=this.__data__=new yi(g)}return d.set(a,l),this.size=d.size,this}Sr.prototype.clear=JD,Sr.prototype.delete=XD,Sr.prototype.get=ZD,Sr.prototype.has=eN,Sr.prototype.set=tN;function jI(a,l){var d=xe(a),g=!d&&Gs(a),m=!d&&!g&&ns(a),v=!d&&!g&&!m&&ea(a),E=d||g||m||v,b=E?Sp(a.length,hD):[],S=b.length;for(var L in a)(l||it.call(a,L))&&!(E&&(L=="length"||m&&(L=="offset"||L=="parent")||v&&(L=="buffer"||L=="byteLength"||L=="byteOffset")||Ei(L,S)))&&b.push(L);return b}function QI(a){var l=a.length;return l?a[zp(0,l-1)]:t}function nN(a,l){return ah(Ln(a),qs(l,0,a.length))}function rN(a){return ah(Ln(a))}function Op(a,l,d){(d!==t&&!Cr(a[l],d)||d===t&&!(l in a))&&vi(a,l,d)}function wl(a,l,d){var g=a[l];(!(it.call(a,l)&&Cr(g,d))||d===t&&!(l in a))&&vi(a,l,d)}function ju(a,l){for(var d=a.length;d--;)if(Cr(a[d][0],l))return d;return-1}function iN(a,l,d,g){return Xi(a,function(m,v,E){l(g,m,d(m),E)}),g}function YI(a,l){return a&&Gr(l,Gt(l),a)}function sN(a,l){return a&&Gr(l,Un(l),a)}function vi(a,l,d){l=="__proto__"&&Wu?Wu(a,l,{configurable:!0,enumerable:!0,value:d,writable:!0}):a[l]=d}function Mp(a,l){for(var d=-1,g=l.length,m=D(g),v=a==null;++d<g;)m[d]=v?t:gg(a,l[d]);return m}function qs(a,l,d){return a===a&&(d!==t&&(a=a<=d?a:d),l!==t&&(a=a>=l?a:l)),a}function dr(a,l,d,g,m,v){var E,b=l&p,S=l&_,L=l&I;if(d&&(E=m?d(a,g,m,v):d(a)),E!==t)return E;if(!At(a))return a;var F=xe(a);if(F){if(E=GN(a),!b)return Ln(a,E)}else{var H=mn(a),X=H==w||H==T;if(ns(a))return Iw(a,b);if(H==q||H==br||X&&!m){if(E=S||X?{}:Uw(a),!b)return S?VN(a,sN(E,a)):MN(a,YI(E,a))}else{if(!dt[H])return m?a:{};E=jN(a,H,b)}}v||(v=new Sr);var de=v.get(a);if(de)return de;v.set(a,E),pE(a)?a.forEach(function(Ee){E.add(dr(Ee,l,d,Ee,a,v))}):dE(a)&&a.forEach(function(Ee,Ue){E.set(Ue,dr(Ee,l,d,Ue,a,v))});var we=L?S?tg:eg:S?Un:Gt,Me=F?t:we(a);return cr(Me||a,function(Ee,Ue){Me&&(Ue=Ee,Ee=a[Ue]),wl(E,Ue,dr(Ee,l,d,Ue,a,v))}),E}function oN(a){var l=Gt(a);return function(d){return JI(d,a,l)}}function JI(a,l,d){var g=d.length;if(a==null)return!g;for(a=ut(a);g--;){var m=d[g],v=l[m],E=a[m];if(E===t&&!(m in a)||!v(E))return!1}return!0}function XI(a,l,d){if(typeof a!="function")throw new ur(o);return Cl(function(){a.apply(t,d)},l)}function El(a,l,d,g){var m=-1,v=ku,E=!0,b=a.length,S=[],L=l.length;if(!b)return S;d&&(l=It(l,Jn(d))),g?(v=wp,E=!1):l.length>=i&&(v=gl,E=!1,l=new Ws(l));e:for(;++m<b;){var F=a[m],H=d==null?F:d(F);if(F=g||F!==0?F:0,E&&H===H){for(var X=L;X--;)if(l[X]===H)continue e;S.push(F)}else v(l,H,g)||S.push(F)}return S}var Xi=bw(Hr),ZI=bw(Lp,!0);function aN(a,l){var d=!0;return Xi(a,function(g,m,v){return d=!!l(g,m,v),d}),d}function Qu(a,l,d){for(var g=-1,m=a.length;++g<m;){var v=a[g],E=l(v);if(E!=null&&(b===t?E===E&&!Zn(E):d(E,b)))var b=E,S=v}return S}function lN(a,l,d,g){var m=a.length;for(d=Oe(d),d<0&&(d=-d>m?0:m+d),g=g===t||g>m?m:Oe(g),g<0&&(g+=m),g=d>g?0:_E(g);d<g;)a[d++]=l;return a}function ew(a,l){var d=[];return Xi(a,function(g,m,v){l(g,m,v)&&d.push(g)}),d}function un(a,l,d,g,m){var v=-1,E=a.length;for(d||(d=YN),m||(m=[]);++v<E;){var b=a[v];l>0&&d(b)?l>1?un(b,l-1,d,g,m):Qi(m,b):g||(m[m.length]=b)}return m}var Vp=Rw(),tw=Rw(!0);function Hr(a,l){return a&&Vp(a,l,Gt)}function Lp(a,l){return a&&tw(a,l,Gt)}function Yu(a,l){return ji(l,function(d){return Ti(a[d])})}function zs(a,l){l=es(l,a);for(var d=0,g=l.length;a!=null&&d<g;)a=a[jr(l[d++])];return d&&d==g?a:t}function nw(a,l,d){var g=l(a);return xe(a)?g:Qi(g,d(a))}function Cn(a){return a==null?a===t?_e:$:Bs&&Bs in ut(a)?zN(a):rO(a)}function Fp(a,l){return a>l}function cN(a,l){return a!=null&&it.call(a,l)}function uN(a,l){return a!=null&&l in ut(a)}function hN(a,l,d){return a>=_n(l,d)&&a<zt(l,d)}function Up(a,l,d){for(var g=d?wp:ku,m=a[0].length,v=a.length,E=v,b=D(v),S=1/0,L=[];E--;){var F=a[E];E&&l&&(F=It(F,Jn(l))),S=_n(F.length,S),b[E]=!d&&(l||m>=120&&F.length>=120)?new Ws(E&&F):t}F=a[0];var H=-1,X=b[0];e:for(;++H<m&&L.length<S;){var de=F[H],we=l?l(de):de;if(de=d||de!==0?de:0,!(X?gl(X,we):g(L,we,d))){for(E=v;--E;){var Me=b[E];if(!(Me?gl(Me,we):g(a[E],we,d)))continue e}X&&X.push(we),L.push(de)}}return L}function dN(a,l,d,g){return Hr(a,function(m,v,E){l(g,d(m),v,E)}),g}function Tl(a,l,d){l=es(l,a),a=qw(a,l);var g=a==null?a:a[jr(pr(l))];return g==null?t:Yn(g,a,d)}function rw(a){return Pt(a)&&Cn(a)==br}function fN(a){return Pt(a)&&Cn(a)==Je}function pN(a){return Pt(a)&&Cn(a)==J}function Al(a,l,d,g,m){return a===l?!0:a==null||l==null||!Pt(a)&&!Pt(l)?a!==a&&l!==l:gN(a,l,d,g,Al,m)}function gN(a,l,d,g,m,v){var E=xe(a),b=xe(l),S=E?Ot:mn(a),L=b?Ot:mn(l);S=S==br?q:S,L=L==br?q:L;var F=S==q,H=L==q,X=S==L;if(X&&ns(a)){if(!ns(l))return!1;E=!0,F=!1}if(X&&!F)return v||(v=new Sr),E||ea(a)?Vw(a,l,d,g,m,v):WN(a,l,S,d,g,m,v);if(!(d&A)){var de=F&&it.call(a,"__wrapped__"),we=H&&it.call(l,"__wrapped__");if(de||we){var Me=de?a.value():a,Ee=we?l.value():l;return v||(v=new Sr),m(Me,Ee,d,g,v)}}return X?(v||(v=new Sr),qN(a,l,d,g,m,v)):!1}function _N(a){return Pt(a)&&mn(a)==C}function Bp(a,l,d,g){var m=d.length,v=m,E=!g;if(a==null)return!v;for(a=ut(a);m--;){var b=d[m];if(E&&b[2]?b[1]!==a[b[0]]:!(b[0]in a))return!1}for(;++m<v;){b=d[m];var S=b[0],L=a[S],F=b[1];if(E&&b[2]){if(L===t&&!(S in a))return!1}else{var H=new Sr;if(g)var X=g(L,F,S,a,l,H);if(!(X===t?Al(F,L,A|P,g,H):X))return!1}}return!0}function iw(a){if(!At(a)||XN(a))return!1;var l=Ti(a)?_D:ok;return l.test(Hs(a))}function mN(a){return Pt(a)&&Cn(a)==Y}function yN(a){return Pt(a)&&mn(a)==z}function vN(a){return Pt(a)&&fh(a.length)&&!!ft[Cn(a)]}function sw(a){return typeof a=="function"?a:a==null?Bn:typeof a=="object"?xe(a)?lw(a[0],a[1]):aw(a):SE(a)}function $p(a){if(!Sl(a))return ED(a);var l=[];for(var d in ut(a))it.call(a,d)&&d!="constructor"&&l.push(d);return l}function IN(a){if(!At(a))return nO(a);var l=Sl(a),d=[];for(var g in a)g=="constructor"&&(l||!it.call(a,g))||d.push(g);return d}function Wp(a,l){return a<l}function ow(a,l){var d=-1,g=Fn(a)?D(a.length):[];return Xi(a,function(m,v,E){g[++d]=l(m,v,E)}),g}function aw(a){var l=rg(a);return l.length==1&&l[0][2]?$w(l[0][0],l[0][1]):function(d){return d===a||Bp(d,a,l)}}function lw(a,l){return sg(a)&&Bw(l)?$w(jr(a),l):function(d){var g=gg(d,a);return g===t&&g===l?_g(d,a):Al(l,g,A|P)}}function Ju(a,l,d,g,m){a!==l&&Vp(l,function(v,E){if(m||(m=new Sr),At(v))wN(a,l,E,d,Ju,g,m);else{var b=g?g(ag(a,E),v,E+"",a,l,m):t;b===t&&(b=v),Op(a,E,b)}},Un)}function wN(a,l,d,g,m,v,E){var b=ag(a,d),S=ag(l,d),L=E.get(S);if(L){Op(a,d,L);return}var F=v?v(b,S,d+"",a,l,E):t,H=F===t;if(H){var X=xe(S),de=!X&&ns(S),we=!X&&!de&&ea(S);F=S,X||de||we?xe(b)?F=b:Mt(b)?F=Ln(b):de?(H=!1,F=Iw(S,!0)):we?(H=!1,F=ww(S,!0)):F=[]:Pl(S)||Gs(S)?(F=b,Gs(b)?F=mE(b):(!At(b)||Ti(b))&&(F=Uw(S))):H=!1}H&&(E.set(S,F),m(F,S,g,v,E),E.delete(S)),Op(a,d,F)}function cw(a,l){var d=a.length;if(d)return l+=l<0?d:0,Ei(l,d)?a[l]:t}function uw(a,l,d){l.length?l=It(l,function(v){return xe(v)?function(E){return zs(E,v.length===1?v[0]:v)}:v}):l=[Bn];var g=-1;l=It(l,Jn(ve()));var m=ow(a,function(v,E,b){var S=It(l,function(L){return L(v)});return{criteria:S,index:++g,value:v}});return jk(m,function(v,E){return ON(v,E,d)})}function EN(a,l){return hw(a,l,function(d,g){return _g(a,g)})}function hw(a,l,d){for(var g=-1,m=l.length,v={};++g<m;){var E=l[g],b=zs(a,E);d(b,E)&&bl(v,es(E,a),b)}return v}function TN(a){return function(l){return zs(l,a)}}function qp(a,l,d,g){var m=g?Gk:qo,v=-1,E=l.length,b=a;for(a===l&&(l=Ln(l)),d&&(b=It(a,Jn(d)));++v<E;)for(var S=0,L=l[v],F=d?d(L):L;(S=m(b,F,S,g))>-1;)b!==a&&$u.call(b,S,1),$u.call(a,S,1);return a}function dw(a,l){for(var d=a?l.length:0,g=d-1;d--;){var m=l[d];if(d==g||m!==v){var v=m;Ei(m)?$u.call(a,m,1):Gp(a,m)}}return a}function zp(a,l){return a+zu(HI()*(l-a+1))}function AN(a,l,d,g){for(var m=-1,v=zt(qu((l-a)/(d||1)),0),E=D(v);v--;)E[g?v:++m]=a,a+=d;return E}function Kp(a,l){var d="";if(!a||l<1||l>De)return d;do l%2&&(d+=a),l=zu(l/2),l&&(a+=a);while(l);return d}function Ve(a,l){return lg(Ww(a,l,Bn),a+"")}function bN(a){return QI(ta(a))}function RN(a,l){var d=ta(a);return ah(d,qs(l,0,d.length))}function bl(a,l,d,g){if(!At(a))return a;l=es(l,a);for(var m=-1,v=l.length,E=v-1,b=a;b!=null&&++m<v;){var S=jr(l[m]),L=d;if(S==="__proto__"||S==="constructor"||S==="prototype")return a;if(m!=E){var F=b[S];L=g?g(F,S,b):t,L===t&&(L=At(F)?F:Ei(l[m+1])?[]:{})}wl(b,S,L),b=b[S]}return a}var fw=Ku?function(a,l){return Ku.set(a,l),a}:Bn,SN=Wu?function(a,l){return Wu(a,"toString",{configurable:!0,enumerable:!1,value:yg(l),writable:!0})}:Bn;function CN(a){return ah(ta(a))}function fr(a,l,d){var g=-1,m=a.length;l<0&&(l=-l>m?0:m+l),d=d>m?m:d,d<0&&(d+=m),m=l>d?0:d-l>>>0,l>>>=0;for(var v=D(m);++g<m;)v[g]=a[g+l];return v}function PN(a,l){var d;return Xi(a,function(g,m,v){return d=l(g,m,v),!d}),!!d}function Xu(a,l,d){var g=0,m=a==null?g:a.length;if(typeof l=="number"&&l===l&&m<=Hi){for(;g<m;){var v=g+m>>>1,E=a[v];E!==null&&!Zn(E)&&(d?E<=l:E<l)?g=v+1:m=v}return m}return Hp(a,l,Bn,d)}function Hp(a,l,d,g){var m=0,v=a==null?0:a.length;if(v===0)return 0;l=d(l);for(var E=l!==l,b=l===null,S=Zn(l),L=l===t;m<v;){var F=zu((m+v)/2),H=d(a[F]),X=H!==t,de=H===null,we=H===H,Me=Zn(H);if(E)var Ee=g||we;else L?Ee=we&&(g||X):b?Ee=we&&X&&(g||!de):S?Ee=we&&X&&!de&&(g||!Me):de||Me?Ee=!1:Ee=g?H<=l:H<l;Ee?m=F+1:v=F}return _n(v,gn)}function pw(a,l){for(var d=-1,g=a.length,m=0,v=[];++d<g;){var E=a[d],b=l?l(E):E;if(!d||!Cr(b,S)){var S=b;v[m++]=E===0?0:E}}return v}function gw(a){return typeof a=="number"?a:Zn(a)?Qn:+a}function Xn(a){if(typeof a=="string")return a;if(xe(a))return It(a,Xn)+"";if(Zn(a))return GI?GI.call(a):"";var l=a+"";return l=="0"&&1/a==-Ae?"-0":l}function Zi(a,l,d){var g=-1,m=ku,v=a.length,E=!0,b=[],S=b;if(d)E=!1,m=wp;else if(v>=i){var L=l?null:BN(a);if(L)return Nu(L);E=!1,m=gl,S=new Ws}else S=l?[]:b;e:for(;++g<v;){var F=a[g],H=l?l(F):F;if(F=d||F!==0?F:0,E&&H===H){for(var X=S.length;X--;)if(S[X]===H)continue e;l&&S.push(H),b.push(F)}else m(S,H,d)||(S!==b&&S.push(H),b.push(F))}return b}function Gp(a,l){return l=es(l,a),a=qw(a,l),a==null||delete a[jr(pr(l))]}function _w(a,l,d,g){return bl(a,l,d(zs(a,l)),g)}function Zu(a,l,d,g){for(var m=a.length,v=g?m:-1;(g?v--:++v<m)&&l(a[v],v,a););return d?fr(a,g?0:v,g?v+1:m):fr(a,g?v+1:0,g?m:v)}function mw(a,l){var d=a;return d instanceof Be&&(d=d.value()),Ep(l,function(g,m){return m.func.apply(m.thisArg,Qi([g],m.args))},d)}function jp(a,l,d){var g=a.length;if(g<2)return g?Zi(a[0]):[];for(var m=-1,v=D(g);++m<g;)for(var E=a[m],b=-1;++b<g;)b!=m&&(v[m]=El(v[m]||E,a[b],l,d));return Zi(un(v,1),l,d)}function yw(a,l,d){for(var g=-1,m=a.length,v=l.length,E={};++g<m;){var b=g<v?l[g]:t;d(E,a[g],b)}return E}function Qp(a){return Mt(a)?a:[]}function Yp(a){return typeof a=="function"?a:Bn}function es(a,l){return xe(a)?a:sg(a,l)?[a]:Gw(tt(a))}var xN=Ve;function ts(a,l,d){var g=a.length;return d=d===t?g:d,!l&&d>=g?a:fr(a,l,d)}var vw=mD||function(a){return cn.clearTimeout(a)};function Iw(a,l){if(l)return a.slice();var d=a.length,g=$I?$I(d):new a.constructor(d);return a.copy(g),g}function Jp(a){var l=new a.constructor(a.byteLength);return new Uu(l).set(new Uu(a)),l}function kN(a,l){var d=l?Jp(a.buffer):a.buffer;return new a.constructor(d,a.byteOffset,a.byteLength)}function DN(a){var l=new a.constructor(a.source,rI.exec(a));return l.lastIndex=a.lastIndex,l}function NN(a){return Il?ut(Il.call(a)):{}}function ww(a,l){var d=l?Jp(a.buffer):a.buffer;return new a.constructor(d,a.byteOffset,a.length)}function Ew(a,l){if(a!==l){var d=a!==t,g=a===null,m=a===a,v=Zn(a),E=l!==t,b=l===null,S=l===l,L=Zn(l);if(!b&&!L&&!v&&a>l||v&&E&&S&&!b&&!L||g&&E&&S||!d&&S||!m)return 1;if(!g&&!v&&!L&&a<l||L&&d&&m&&!g&&!v||b&&d&&m||!E&&m||!S)return-1}return 0}function ON(a,l,d){for(var g=-1,m=a.criteria,v=l.criteria,E=m.length,b=d.length;++g<E;){var S=Ew(m[g],v[g]);if(S){if(g>=b)return S;var L=d[g];return S*(L=="desc"?-1:1)}}return a.index-l.index}function Tw(a,l,d,g){for(var m=-1,v=a.length,E=d.length,b=-1,S=l.length,L=zt(v-E,0),F=D(S+L),H=!g;++b<S;)F[b]=l[b];for(;++m<E;)(H||m<v)&&(F[d[m]]=a[m]);for(;L--;)F[b++]=a[m++];return F}function Aw(a,l,d,g){for(var m=-1,v=a.length,E=-1,b=d.length,S=-1,L=l.length,F=zt(v-b,0),H=D(F+L),X=!g;++m<F;)H[m]=a[m];for(var de=m;++S<L;)H[de+S]=l[S];for(;++E<b;)(X||m<v)&&(H[de+d[E]]=a[m++]);return H}function Ln(a,l){var d=-1,g=a.length;for(l||(l=D(g));++d<g;)l[d]=a[d];return l}function Gr(a,l,d,g){var m=!d;d||(d={});for(var v=-1,E=l.length;++v<E;){var b=l[v],S=g?g(d[b],a[b],b,d,a):t;S===t&&(S=a[b]),m?vi(d,b,S):wl(d,b,S)}return d}function MN(a,l){return Gr(a,ig(a),l)}function VN(a,l){return Gr(a,Lw(a),l)}function eh(a,l){return function(d,g){var m=xe(d)?$k:iN,v=l?l():{};return m(d,a,ve(g,2),v)}}function Jo(a){return Ve(function(l,d){var g=-1,m=d.length,v=m>1?d[m-1]:t,E=m>2?d[2]:t;for(v=a.length>3&&typeof v=="function"?(m--,v):t,E&&Pn(d[0],d[1],E)&&(v=m<3?t:v,m=1),l=ut(l);++g<m;){var b=d[g];b&&a(l,b,g,v)}return l})}function bw(a,l){return function(d,g){if(d==null)return d;if(!Fn(d))return a(d,g);for(var m=d.length,v=l?m:-1,E=ut(d);(l?v--:++v<m)&&g(E[v],v,E)!==!1;);return d}}function Rw(a){return function(l,d,g){for(var m=-1,v=ut(l),E=g(l),b=E.length;b--;){var S=E[a?b:++m];if(d(v[S],S,v)===!1)break}return l}}function LN(a,l,d){var g=l&x,m=Rl(a);function v(){var E=this&&this!==cn&&this instanceof v?m:a;return E.apply(g?d:this,arguments)}return v}function Sw(a){return function(l){l=tt(l);var d=zo(l)?Rr(l):t,g=d?d[0]:l.charAt(0),m=d?ts(d,1).join(""):l.slice(1);return g[a]()+m}}function Xo(a){return function(l){return Ep(bE(AE(l).replace(Sk,"")),a,"")}}function Rl(a){return function(){var l=arguments;switch(l.length){case 0:return new a;case 1:return new a(l[0]);case 2:return new a(l[0],l[1]);case 3:return new a(l[0],l[1],l[2]);case 4:return new a(l[0],l[1],l[2],l[3]);case 5:return new a(l[0],l[1],l[2],l[3],l[4]);case 6:return new a(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new a(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var d=Yo(a.prototype),g=a.apply(d,l);return At(g)?g:d}}function FN(a,l,d){var g=Rl(a);function m(){for(var v=arguments.length,E=D(v),b=v,S=Zo(m);b--;)E[b]=arguments[b];var L=v<3&&E[0]!==S&&E[v-1]!==S?[]:Yi(E,S);if(v-=L.length,v<d)return Dw(a,l,th,m.placeholder,t,E,L,t,t,d-v);var F=this&&this!==cn&&this instanceof m?g:a;return Yn(F,this,E)}return m}function Cw(a){return function(l,d,g){var m=ut(l);if(!Fn(l)){var v=ve(d,3);l=Gt(l),d=function(b){return v(m[b],b,m)}}var E=a(l,d,g);return E>-1?m[v?l[E]:E]:t}}function Pw(a){return wi(function(l){var d=l.length,g=d,m=hr.prototype.thru;for(a&&l.reverse();g--;){var v=l[g];if(typeof v!="function")throw new ur(o);if(m&&!E&&sh(v)=="wrapper")var E=new hr([],!0)}for(g=E?g:d;++g<d;){v=l[g];var b=sh(v),S=b=="wrapper"?ng(v):t;S&&og(S[0])&&S[1]==(ue|K|j|he)&&!S[4].length&&S[9]==1?E=E[sh(S[0])].apply(E,S[3]):E=v.length==1&&og(v)?E[b]():E.thru(v)}return function(){var L=arguments,F=L[0];if(E&&L.length==1&&xe(F))return E.plant(F).value();for(var H=0,X=d?l[H].apply(this,L):F;++H<d;)X=l[H].call(this,X);return X}})}function th(a,l,d,g,m,v,E,b,S,L){var F=l&ue,H=l&x,X=l&V,de=l&(K|N),we=l&Te,Me=X?t:Rl(a);function Ee(){for(var Ue=arguments.length,qe=D(Ue),er=Ue;er--;)qe[er]=arguments[er];if(de)var xn=Zo(Ee),tr=Yk(qe,xn);if(g&&(qe=Tw(qe,g,m,de)),v&&(qe=Aw(qe,v,E,de)),Ue-=tr,de&&Ue<L){var Vt=Yi(qe,xn);return Dw(a,l,th,Ee.placeholder,d,qe,Vt,b,S,L-Ue)}var Pr=H?d:this,bi=X?Pr[a]:a;return Ue=qe.length,b?qe=iO(qe,b):we&&Ue>1&&qe.reverse(),F&&S<Ue&&(qe.length=S),this&&this!==cn&&this instanceof Ee&&(bi=Me||Rl(bi)),bi.apply(Pr,qe)}return Ee}function xw(a,l){return function(d,g){return dN(d,a,l(g),{})}}function nh(a,l){return function(d,g){var m;if(d===t&&g===t)return l;if(d!==t&&(m=d),g!==t){if(m===t)return g;typeof d=="string"||typeof g=="string"?(d=Xn(d),g=Xn(g)):(d=gw(d),g=gw(g)),m=a(d,g)}return m}}function Xp(a){return wi(function(l){return l=It(l,Jn(ve())),Ve(function(d){var g=this;return a(l,function(m){return Yn(m,g,d)})})})}function rh(a,l){l=l===t?" ":Xn(l);var d=l.length;if(d<2)return d?Kp(l,a):l;var g=Kp(l,qu(a/Ko(l)));return zo(l)?ts(Rr(g),0,a).join(""):g.slice(0,a)}function UN(a,l,d,g){var m=l&x,v=Rl(a);function E(){for(var b=-1,S=arguments.length,L=-1,F=g.length,H=D(F+S),X=this&&this!==cn&&this instanceof E?v:a;++L<F;)H[L]=g[L];for(;S--;)H[L++]=arguments[++b];return Yn(X,m?d:this,H)}return E}function kw(a){return function(l,d,g){return g&&typeof g!="number"&&Pn(l,d,g)&&(d=g=t),l=Ai(l),d===t?(d=l,l=0):d=Ai(d),g=g===t?l<d?1:-1:Ai(g),AN(l,d,g,a)}}function ih(a){return function(l,d){return typeof l=="string"&&typeof d=="string"||(l=gr(l),d=gr(d)),a(l,d)}}function Dw(a,l,d,g,m,v,E,b,S,L){var F=l&K,H=F?E:t,X=F?t:E,de=F?v:t,we=F?t:v;l|=F?j:se,l&=~(F?se:j),l&W||(l&=~(x|V));var Me=[a,l,m,de,H,we,X,b,S,L],Ee=d.apply(t,Me);return og(a)&&zw(Ee,Me),Ee.placeholder=g,Kw(Ee,a,l)}function Zp(a){var l=qt[a];return function(d,g){if(d=gr(d),g=g==null?0:_n(Oe(g),292),g&&KI(d)){var m=(tt(d)+"e").split("e"),v=l(m[0]+"e"+(+m[1]+g));return m=(tt(v)+"e").split("e"),+(m[0]+"e"+(+m[1]-g))}return l(d)}}var BN=jo&&1/Nu(new jo([,-0]))[1]==Ae?function(a){return new jo(a)}:wg;function Nw(a){return function(l){var d=mn(l);return d==C?Pp(l):d==z?rD(l):Qk(l,a(l))}}function Ii(a,l,d,g,m,v,E,b){var S=l&V;if(!S&&typeof a!="function")throw new ur(o);var L=g?g.length:0;if(L||(l&=~(j|se),g=m=t),E=E===t?E:zt(Oe(E),0),b=b===t?b:Oe(b),L-=m?m.length:0,l&se){var F=g,H=m;g=m=t}var X=S?t:ng(a),de=[a,l,d,g,m,F,H,v,E,b];if(X&&tO(de,X),a=de[0],l=de[1],d=de[2],g=de[3],m=de[4],b=de[9]=de[9]===t?S?0:a.length:zt(de[9]-L,0),!b&&l&(K|N)&&(l&=~(K|N)),!l||l==x)var we=LN(a,l,d);else l==K||l==N?we=FN(a,l,b):(l==j||l==(x|j))&&!m.length?we=UN(a,l,d,g):we=th.apply(t,de);var Me=X?fw:zw;return Kw(Me(we,de),a,l)}function Ow(a,l,d,g){return a===t||Cr(a,Go[d])&&!it.call(g,d)?l:a}function Mw(a,l,d,g,m,v){return At(a)&&At(l)&&(v.set(l,a),Ju(a,l,t,Mw,v),v.delete(l)),a}function $N(a){return Pl(a)?t:a}function Vw(a,l,d,g,m,v){var E=d&A,b=a.length,S=l.length;if(b!=S&&!(E&&S>b))return!1;var L=v.get(a),F=v.get(l);if(L&&F)return L==l&&F==a;var H=-1,X=!0,de=d&P?new Ws:t;for(v.set(a,l),v.set(l,a);++H<b;){var we=a[H],Me=l[H];if(g)var Ee=E?g(Me,we,H,l,a,v):g(we,Me,H,a,l,v);if(Ee!==t){if(Ee)continue;X=!1;break}if(de){if(!Tp(l,function(Ue,qe){if(!gl(de,qe)&&(we===Ue||m(we,Ue,d,g,v)))return de.push(qe)})){X=!1;break}}else if(!(we===Me||m(we,Me,d,g,v))){X=!1;break}}return v.delete(a),v.delete(l),X}function WN(a,l,d,g,m,v,E){switch(d){case We:if(a.byteLength!=l.byteLength||a.byteOffset!=l.byteOffset)return!1;a=a.buffer,l=l.buffer;case Je:return!(a.byteLength!=l.byteLength||!v(new Uu(a),new Uu(l)));case re:case J:case O:return Cr(+a,+l);case $e:return a.name==l.name&&a.message==l.message;case Y:case pe:return a==l+"";case C:var b=Pp;case z:var S=g&A;if(b||(b=Nu),a.size!=l.size&&!S)return!1;var L=E.get(a);if(L)return L==l;g|=P,E.set(a,l);var F=Vw(b(a),b(l),g,m,v,E);return E.delete(a),F;case le:if(Il)return Il.call(a)==Il.call(l)}return!1}function qN(a,l,d,g,m,v){var E=d&A,b=eg(a),S=b.length,L=eg(l),F=L.length;if(S!=F&&!E)return!1;for(var H=S;H--;){var X=b[H];if(!(E?X in l:it.call(l,X)))return!1}var de=v.get(a),we=v.get(l);if(de&&we)return de==l&&we==a;var Me=!0;v.set(a,l),v.set(l,a);for(var Ee=E;++H<S;){X=b[H];var Ue=a[X],qe=l[X];if(g)var er=E?g(qe,Ue,X,l,a,v):g(Ue,qe,X,a,l,v);if(!(er===t?Ue===qe||m(Ue,qe,d,g,v):er)){Me=!1;break}Ee||(Ee=X=="constructor")}if(Me&&!Ee){var xn=a.constructor,tr=l.constructor;xn!=tr&&"constructor"in a&&"constructor"in l&&!(typeof xn=="function"&&xn instanceof xn&&typeof tr=="function"&&tr instanceof tr)&&(Me=!1)}return v.delete(a),v.delete(l),Me}function wi(a){return lg(Ww(a,t,Jw),a+"")}function eg(a){return nw(a,Gt,ig)}function tg(a){return nw(a,Un,Lw)}var ng=Ku?function(a){return Ku.get(a)}:wg;function sh(a){for(var l=a.name+"",d=Qo[l],g=it.call(Qo,l)?d.length:0;g--;){var m=d[g],v=m.func;if(v==null||v==a)return m.name}return l}function Zo(a){var l=it.call(y,"placeholder")?y:a;return l.placeholder}function ve(){var a=y.iteratee||vg;return a=a===vg?sw:a,arguments.length?a(arguments[0],arguments[1]):a}function oh(a,l){var d=a.__data__;return JN(l)?d[typeof l=="string"?"string":"hash"]:d.map}function rg(a){for(var l=Gt(a),d=l.length;d--;){var g=l[d],m=a[g];l[d]=[g,m,Bw(m)]}return l}function Ks(a,l){var d=eD(a,l);return iw(d)?d:t}function zN(a){var l=it.call(a,Bs),d=a[Bs];try{a[Bs]=t;var g=!0}catch{}var m=Lu.call(a);return g&&(l?a[Bs]=d:delete a[Bs]),m}var ig=kp?function(a){return a==null?[]:(a=ut(a),ji(kp(a),function(l){return qI.call(a,l)}))}:Eg,Lw=kp?function(a){for(var l=[];a;)Qi(l,ig(a)),a=Bu(a);return l}:Eg,mn=Cn;(Dp&&mn(new Dp(new ArrayBuffer(1)))!=We||ml&&mn(new ml)!=C||Np&&mn(Np.resolve())!=te||jo&&mn(new jo)!=z||yl&&mn(new yl)!=Ie)&&(mn=function(a){var l=Cn(a),d=l==q?a.constructor:t,g=d?Hs(d):"";if(g)switch(g){case RD:return We;case SD:return C;case CD:return te;case PD:return z;case xD:return Ie}return l});function KN(a,l,d){for(var g=-1,m=d.length;++g<m;){var v=d[g],E=v.size;switch(v.type){case"drop":a+=E;break;case"dropRight":l-=E;break;case"take":l=_n(l,a+E);break;case"takeRight":a=zt(a,l-E);break}}return{start:a,end:l}}function HN(a){var l=a.match(Xx);return l?l[1].split(Zx):[]}function Fw(a,l,d){l=es(l,a);for(var g=-1,m=l.length,v=!1;++g<m;){var E=jr(l[g]);if(!(v=a!=null&&d(a,E)))break;a=a[E]}return v||++g!=m?v:(m=a==null?0:a.length,!!m&&fh(m)&&Ei(E,m)&&(xe(a)||Gs(a)))}function GN(a){var l=a.length,d=new a.constructor(l);return l&&typeof a[0]=="string"&&it.call(a,"index")&&(d.index=a.index,d.input=a.input),d}function Uw(a){return typeof a.constructor=="function"&&!Sl(a)?Yo(Bu(a)):{}}function jN(a,l,d){var g=a.constructor;switch(l){case Je:return Jp(a);case re:case J:return new g(+a);case We:return kN(a,d);case vt:case Sn:case Kr:case Uo:case _i:case Bo:case ln:case Vn:case $o:return ww(a,d);case C:return new g;case O:case pe:return new g(a);case Y:return DN(a);case z:return new g;case le:return NN(a)}}function QN(a,l){var d=l.length;if(!d)return a;var g=d-1;return l[g]=(d>1?"& ":"")+l[g],l=l.join(d>2?", ":" "),a.replace(Jx,`{
/* [wrapped with `+l+`] */
`)}function YN(a){return xe(a)||Gs(a)||!!(zI&&a&&a[zI])}function Ei(a,l){var d=typeof a;return l=l??De,!!l&&(d=="number"||d!="symbol"&&lk.test(a))&&a>-1&&a%1==0&&a<l}function Pn(a,l,d){if(!At(d))return!1;var g=typeof l;return(g=="number"?Fn(d)&&Ei(l,d.length):g=="string"&&l in d)?Cr(d[l],a):!1}function sg(a,l){if(xe(a))return!1;var d=typeof a;return d=="number"||d=="symbol"||d=="boolean"||a==null||Zn(a)?!0:Gx.test(a)||!Hx.test(a)||l!=null&&a in ut(l)}function JN(a){var l=typeof a;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?a!=="__proto__":a===null}function og(a){var l=sh(a),d=y[l];if(typeof d!="function"||!(l in Be.prototype))return!1;if(a===d)return!0;var g=ng(d);return!!g&&a===g[0]}function XN(a){return!!BI&&BI in a}var ZN=Mu?Ti:Tg;function Sl(a){var l=a&&a.constructor,d=typeof l=="function"&&l.prototype||Go;return a===d}function Bw(a){return a===a&&!At(a)}function $w(a,l){return function(d){return d==null?!1:d[a]===l&&(l!==t||a in ut(d))}}function eO(a){var l=hh(a,function(g){return d.size===h&&d.clear(),g}),d=l.cache;return l}function tO(a,l){var d=a[1],g=l[1],m=d|g,v=m<(x|V|ue),E=g==ue&&d==K||g==ue&&d==he&&a[7].length<=l[8]||g==(ue|he)&&l[7].length<=l[8]&&d==K;if(!(v||E))return a;g&x&&(a[2]=l[2],m|=d&x?0:W);var b=l[3];if(b){var S=a[3];a[3]=S?Tw(S,b,l[4]):b,a[4]=S?Yi(a[3],f):l[4]}return b=l[5],b&&(S=a[5],a[5]=S?Aw(S,b,l[6]):b,a[6]=S?Yi(a[5],f):l[6]),b=l[7],b&&(a[7]=b),g&ue&&(a[8]=a[8]==null?l[8]:_n(a[8],l[8])),a[9]==null&&(a[9]=l[9]),a[0]=l[0],a[1]=m,a}function nO(a){var l=[];if(a!=null)for(var d in ut(a))l.push(d);return l}function rO(a){return Lu.call(a)}function Ww(a,l,d){return l=zt(l===t?a.length-1:l,0),function(){for(var g=arguments,m=-1,v=zt(g.length-l,0),E=D(v);++m<v;)E[m]=g[l+m];m=-1;for(var b=D(l+1);++m<l;)b[m]=g[m];return b[l]=d(E),Yn(a,this,b)}}function qw(a,l){return l.length<2?a:zs(a,fr(l,0,-1))}function iO(a,l){for(var d=a.length,g=_n(l.length,d),m=Ln(a);g--;){var v=l[g];a[g]=Ei(v,d)?m[v]:t}return a}function ag(a,l){if(!(l==="constructor"&&typeof a[l]=="function")&&l!="__proto__")return a[l]}var zw=Hw(fw),Cl=vD||function(a,l){return cn.setTimeout(a,l)},lg=Hw(SN);function Kw(a,l,d){var g=l+"";return lg(a,QN(g,sO(HN(g),d)))}function Hw(a){var l=0,d=0;return function(){var g=TD(),m=Ct-(g-d);if(d=g,m>0){if(++l>=an)return arguments[0]}else l=0;return a.apply(t,arguments)}}function ah(a,l){var d=-1,g=a.length,m=g-1;for(l=l===t?g:l;++d<l;){var v=zp(d,m),E=a[v];a[v]=a[d],a[d]=E}return a.length=l,a}var Gw=eO(function(a){var l=[];return a.charCodeAt(0)===46&&l.push(""),a.replace(jx,function(d,g,m,v){l.push(m?v.replace(nk,"$1"):g||d)}),l});function jr(a){if(typeof a=="string"||Zn(a))return a;var l=a+"";return l=="0"&&1/a==-Ae?"-0":l}function Hs(a){if(a!=null){try{return Vu.call(a)}catch{}try{return a+""}catch{}}return""}function sO(a,l){return cr(Gi,function(d){var g="_."+d[0];l&d[1]&&!ku(a,g)&&a.push(g)}),a.sort()}function jw(a){if(a instanceof Be)return a.clone();var l=new hr(a.__wrapped__,a.__chain__);return l.__actions__=Ln(a.__actions__),l.__index__=a.__index__,l.__values__=a.__values__,l}function oO(a,l,d){(d?Pn(a,l,d):l===t)?l=1:l=zt(Oe(l),0);var g=a==null?0:a.length;if(!g||l<1)return[];for(var m=0,v=0,E=D(qu(g/l));m<g;)E[v++]=fr(a,m,m+=l);return E}function aO(a){for(var l=-1,d=a==null?0:a.length,g=0,m=[];++l<d;){var v=a[l];v&&(m[g++]=v)}return m}function lO(){var a=arguments.length;if(!a)return[];for(var l=D(a-1),d=arguments[0],g=a;g--;)l[g-1]=arguments[g];return Qi(xe(d)?Ln(d):[d],un(l,1))}var cO=Ve(function(a,l){return Mt(a)?El(a,un(l,1,Mt,!0)):[]}),uO=Ve(function(a,l){var d=pr(l);return Mt(d)&&(d=t),Mt(a)?El(a,un(l,1,Mt,!0),ve(d,2)):[]}),hO=Ve(function(a,l){var d=pr(l);return Mt(d)&&(d=t),Mt(a)?El(a,un(l,1,Mt,!0),t,d):[]});function dO(a,l,d){var g=a==null?0:a.length;return g?(l=d||l===t?1:Oe(l),fr(a,l<0?0:l,g)):[]}function fO(a,l,d){var g=a==null?0:a.length;return g?(l=d||l===t?1:Oe(l),l=g-l,fr(a,0,l<0?0:l)):[]}function pO(a,l){return a&&a.length?Zu(a,ve(l,3),!0,!0):[]}function gO(a,l){return a&&a.length?Zu(a,ve(l,3),!0):[]}function _O(a,l,d,g){var m=a==null?0:a.length;return m?(d&&typeof d!="number"&&Pn(a,l,d)&&(d=0,g=m),lN(a,l,d,g)):[]}function Qw(a,l,d){var g=a==null?0:a.length;if(!g)return-1;var m=d==null?0:Oe(d);return m<0&&(m=zt(g+m,0)),Du(a,ve(l,3),m)}function Yw(a,l,d){var g=a==null?0:a.length;if(!g)return-1;var m=g-1;return d!==t&&(m=Oe(d),m=d<0?zt(g+m,0):_n(m,g-1)),Du(a,ve(l,3),m,!0)}function Jw(a){var l=a==null?0:a.length;return l?un(a,1):[]}function mO(a){var l=a==null?0:a.length;return l?un(a,Ae):[]}function yO(a,l){var d=a==null?0:a.length;return d?(l=l===t?1:Oe(l),un(a,l)):[]}function vO(a){for(var l=-1,d=a==null?0:a.length,g={};++l<d;){var m=a[l];g[m[0]]=m[1]}return g}function Xw(a){return a&&a.length?a[0]:t}function IO(a,l,d){var g=a==null?0:a.length;if(!g)return-1;var m=d==null?0:Oe(d);return m<0&&(m=zt(g+m,0)),qo(a,l,m)}function wO(a){var l=a==null?0:a.length;return l?fr(a,0,-1):[]}var EO=Ve(function(a){var l=It(a,Qp);return l.length&&l[0]===a[0]?Up(l):[]}),TO=Ve(function(a){var l=pr(a),d=It(a,Qp);return l===pr(d)?l=t:d.pop(),d.length&&d[0]===a[0]?Up(d,ve(l,2)):[]}),AO=Ve(function(a){var l=pr(a),d=It(a,Qp);return l=typeof l=="function"?l:t,l&&d.pop(),d.length&&d[0]===a[0]?Up(d,t,l):[]});function bO(a,l){return a==null?"":wD.call(a,l)}function pr(a){var l=a==null?0:a.length;return l?a[l-1]:t}function RO(a,l,d){var g=a==null?0:a.length;if(!g)return-1;var m=g;return d!==t&&(m=Oe(d),m=m<0?zt(g+m,0):_n(m,g-1)),l===l?sD(a,l,m):Du(a,DI,m,!0)}function SO(a,l){return a&&a.length?cw(a,Oe(l)):t}var CO=Ve(Zw);function Zw(a,l){return a&&a.length&&l&&l.length?qp(a,l):a}function PO(a,l,d){return a&&a.length&&l&&l.length?qp(a,l,ve(d,2)):a}function xO(a,l,d){return a&&a.length&&l&&l.length?qp(a,l,t,d):a}var kO=wi(function(a,l){var d=a==null?0:a.length,g=Mp(a,l);return dw(a,It(l,function(m){return Ei(m,d)?+m:m}).sort(Ew)),g});function DO(a,l){var d=[];if(!(a&&a.length))return d;var g=-1,m=[],v=a.length;for(l=ve(l,3);++g<v;){var E=a[g];l(E,g,a)&&(d.push(E),m.push(g))}return dw(a,m),d}function cg(a){return a==null?a:bD.call(a)}function NO(a,l,d){var g=a==null?0:a.length;return g?(d&&typeof d!="number"&&Pn(a,l,d)?(l=0,d=g):(l=l==null?0:Oe(l),d=d===t?g:Oe(d)),fr(a,l,d)):[]}function OO(a,l){return Xu(a,l)}function MO(a,l,d){return Hp(a,l,ve(d,2))}function VO(a,l){var d=a==null?0:a.length;if(d){var g=Xu(a,l);if(g<d&&Cr(a[g],l))return g}return-1}function LO(a,l){return Xu(a,l,!0)}function FO(a,l,d){return Hp(a,l,ve(d,2),!0)}function UO(a,l){var d=a==null?0:a.length;if(d){var g=Xu(a,l,!0)-1;if(Cr(a[g],l))return g}return-1}function BO(a){return a&&a.length?pw(a):[]}function $O(a,l){return a&&a.length?pw(a,ve(l,2)):[]}function WO(a){var l=a==null?0:a.length;return l?fr(a,1,l):[]}function qO(a,l,d){return a&&a.length?(l=d||l===t?1:Oe(l),fr(a,0,l<0?0:l)):[]}function zO(a,l,d){var g=a==null?0:a.length;return g?(l=d||l===t?1:Oe(l),l=g-l,fr(a,l<0?0:l,g)):[]}function KO(a,l){return a&&a.length?Zu(a,ve(l,3),!1,!0):[]}function HO(a,l){return a&&a.length?Zu(a,ve(l,3)):[]}var GO=Ve(function(a){return Zi(un(a,1,Mt,!0))}),jO=Ve(function(a){var l=pr(a);return Mt(l)&&(l=t),Zi(un(a,1,Mt,!0),ve(l,2))}),QO=Ve(function(a){var l=pr(a);return l=typeof l=="function"?l:t,Zi(un(a,1,Mt,!0),t,l)});function YO(a){return a&&a.length?Zi(a):[]}function JO(a,l){return a&&a.length?Zi(a,ve(l,2)):[]}function XO(a,l){return l=typeof l=="function"?l:t,a&&a.length?Zi(a,t,l):[]}function ug(a){if(!(a&&a.length))return[];var l=0;return a=ji(a,function(d){if(Mt(d))return l=zt(d.length,l),!0}),Sp(l,function(d){return It(a,Ap(d))})}function eE(a,l){if(!(a&&a.length))return[];var d=ug(a);return l==null?d:It(d,function(g){return Yn(l,t,g)})}var ZO=Ve(function(a,l){return Mt(a)?El(a,l):[]}),eM=Ve(function(a){return jp(ji(a,Mt))}),tM=Ve(function(a){var l=pr(a);return Mt(l)&&(l=t),jp(ji(a,Mt),ve(l,2))}),nM=Ve(function(a){var l=pr(a);return l=typeof l=="function"?l:t,jp(ji(a,Mt),t,l)}),rM=Ve(ug);function iM(a,l){return yw(a||[],l||[],wl)}function sM(a,l){return yw(a||[],l||[],bl)}var oM=Ve(function(a){var l=a.length,d=l>1?a[l-1]:t;return d=typeof d=="function"?(a.pop(),d):t,eE(a,d)});function tE(a){var l=y(a);return l.__chain__=!0,l}function aM(a,l){return l(a),a}function lh(a,l){return l(a)}var lM=wi(function(a){var l=a.length,d=l?a[0]:0,g=this.__wrapped__,m=function(v){return Mp(v,a)};return l>1||this.__actions__.length||!(g instanceof Be)||!Ei(d)?this.thru(m):(g=g.slice(d,+d+(l?1:0)),g.__actions__.push({func:lh,args:[m],thisArg:t}),new hr(g,this.__chain__).thru(function(v){return l&&!v.length&&v.push(t),v}))});function cM(){return tE(this)}function uM(){return new hr(this.value(),this.__chain__)}function hM(){this.__values__===t&&(this.__values__=gE(this.value()));var a=this.__index__>=this.__values__.length,l=a?t:this.__values__[this.__index__++];return{done:a,value:l}}function dM(){return this}function fM(a){for(var l,d=this;d instanceof Gu;){var g=jw(d);g.__index__=0,g.__values__=t,l?m.__wrapped__=g:l=g;var m=g;d=d.__wrapped__}return m.__wrapped__=a,l}function pM(){var a=this.__wrapped__;if(a instanceof Be){var l=a;return this.__actions__.length&&(l=new Be(this)),l=l.reverse(),l.__actions__.push({func:lh,args:[cg],thisArg:t}),new hr(l,this.__chain__)}return this.thru(cg)}function gM(){return mw(this.__wrapped__,this.__actions__)}var _M=eh(function(a,l,d){it.call(a,d)?++a[d]:vi(a,d,1)});function mM(a,l,d){var g=xe(a)?xI:aN;return d&&Pn(a,l,d)&&(l=t),g(a,ve(l,3))}function yM(a,l){var d=xe(a)?ji:ew;return d(a,ve(l,3))}var vM=Cw(Qw),IM=Cw(Yw);function wM(a,l){return un(ch(a,l),1)}function EM(a,l){return un(ch(a,l),Ae)}function TM(a,l,d){return d=d===t?1:Oe(d),un(ch(a,l),d)}function nE(a,l){var d=xe(a)?cr:Xi;return d(a,ve(l,3))}function rE(a,l){var d=xe(a)?Wk:ZI;return d(a,ve(l,3))}var AM=eh(function(a,l,d){it.call(a,d)?a[d].push(l):vi(a,d,[l])});function bM(a,l,d,g){a=Fn(a)?a:ta(a),d=d&&!g?Oe(d):0;var m=a.length;return d<0&&(d=zt(m+d,0)),ph(a)?d<=m&&a.indexOf(l,d)>-1:!!m&&qo(a,l,d)>-1}var RM=Ve(function(a,l,d){var g=-1,m=typeof l=="function",v=Fn(a)?D(a.length):[];return Xi(a,function(E){v[++g]=m?Yn(l,E,d):Tl(E,l,d)}),v}),SM=eh(function(a,l,d){vi(a,d,l)});function ch(a,l){var d=xe(a)?It:ow;return d(a,ve(l,3))}function CM(a,l,d,g){return a==null?[]:(xe(l)||(l=l==null?[]:[l]),d=g?t:d,xe(d)||(d=d==null?[]:[d]),uw(a,l,d))}var PM=eh(function(a,l,d){a[d?0:1].push(l)},function(){return[[],[]]});function xM(a,l,d){var g=xe(a)?Ep:OI,m=arguments.length<3;return g(a,ve(l,4),d,m,Xi)}function kM(a,l,d){var g=xe(a)?qk:OI,m=arguments.length<3;return g(a,ve(l,4),d,m,ZI)}function DM(a,l){var d=xe(a)?ji:ew;return d(a,dh(ve(l,3)))}function NM(a){var l=xe(a)?QI:bN;return l(a)}function OM(a,l,d){(d?Pn(a,l,d):l===t)?l=1:l=Oe(l);var g=xe(a)?nN:RN;return g(a,l)}function MM(a){var l=xe(a)?rN:CN;return l(a)}function VM(a){if(a==null)return 0;if(Fn(a))return ph(a)?Ko(a):a.length;var l=mn(a);return l==C||l==z?a.size:$p(a).length}function LM(a,l,d){var g=xe(a)?Tp:PN;return d&&Pn(a,l,d)&&(l=t),g(a,ve(l,3))}var FM=Ve(function(a,l){if(a==null)return[];var d=l.length;return d>1&&Pn(a,l[0],l[1])?l=[]:d>2&&Pn(l[0],l[1],l[2])&&(l=[l[0]]),uw(a,un(l,1),[])}),uh=yD||function(){return cn.Date.now()};function UM(a,l){if(typeof l!="function")throw new ur(o);return a=Oe(a),function(){if(--a<1)return l.apply(this,arguments)}}function iE(a,l,d){return l=d?t:l,l=a&&l==null?a.length:l,Ii(a,ue,t,t,t,t,l)}function sE(a,l){var d;if(typeof l!="function")throw new ur(o);return a=Oe(a),function(){return--a>0&&(d=l.apply(this,arguments)),a<=1&&(l=t),d}}var hg=Ve(function(a,l,d){var g=x;if(d.length){var m=Yi(d,Zo(hg));g|=j}return Ii(a,g,l,d,m)}),oE=Ve(function(a,l,d){var g=x|V;if(d.length){var m=Yi(d,Zo(oE));g|=j}return Ii(l,g,a,d,m)});function aE(a,l,d){l=d?t:l;var g=Ii(a,K,t,t,t,t,t,l);return g.placeholder=aE.placeholder,g}function lE(a,l,d){l=d?t:l;var g=Ii(a,N,t,t,t,t,t,l);return g.placeholder=lE.placeholder,g}function cE(a,l,d){var g,m,v,E,b,S,L=0,F=!1,H=!1,X=!0;if(typeof a!="function")throw new ur(o);l=gr(l)||0,At(d)&&(F=!!d.leading,H="maxWait"in d,v=H?zt(gr(d.maxWait)||0,l):v,X="trailing"in d?!!d.trailing:X);function de(Vt){var Pr=g,bi=m;return g=m=t,L=Vt,E=a.apply(bi,Pr),E}function we(Vt){return L=Vt,b=Cl(Ue,l),F?de(Vt):E}function Me(Vt){var Pr=Vt-S,bi=Vt-L,CE=l-Pr;return H?_n(CE,v-bi):CE}function Ee(Vt){var Pr=Vt-S,bi=Vt-L;return S===t||Pr>=l||Pr<0||H&&bi>=v}function Ue(){var Vt=uh();if(Ee(Vt))return qe(Vt);b=Cl(Ue,Me(Vt))}function qe(Vt){return b=t,X&&g?de(Vt):(g=m=t,E)}function er(){b!==t&&vw(b),L=0,g=S=m=b=t}function xn(){return b===t?E:qe(uh())}function tr(){var Vt=uh(),Pr=Ee(Vt);if(g=arguments,m=this,S=Vt,Pr){if(b===t)return we(S);if(H)return vw(b),b=Cl(Ue,l),de(S)}return b===t&&(b=Cl(Ue,l)),E}return tr.cancel=er,tr.flush=xn,tr}var BM=Ve(function(a,l){return XI(a,1,l)}),$M=Ve(function(a,l,d){return XI(a,gr(l)||0,d)});function WM(a){return Ii(a,Te)}function hh(a,l){if(typeof a!="function"||l!=null&&typeof l!="function")throw new ur(o);var d=function(){var g=arguments,m=l?l.apply(this,g):g[0],v=d.cache;if(v.has(m))return v.get(m);var E=a.apply(this,g);return d.cache=v.set(m,E)||v,E};return d.cache=new(hh.Cache||yi),d}hh.Cache=yi;function dh(a){if(typeof a!="function")throw new ur(o);return function(){var l=arguments;switch(l.length){case 0:return!a.call(this);case 1:return!a.call(this,l[0]);case 2:return!a.call(this,l[0],l[1]);case 3:return!a.call(this,l[0],l[1],l[2])}return!a.apply(this,l)}}function qM(a){return sE(2,a)}var zM=xN(function(a,l){l=l.length==1&&xe(l[0])?It(l[0],Jn(ve())):It(un(l,1),Jn(ve()));var d=l.length;return Ve(function(g){for(var m=-1,v=_n(g.length,d);++m<v;)g[m]=l[m].call(this,g[m]);return Yn(a,this,g)})}),dg=Ve(function(a,l){var d=Yi(l,Zo(dg));return Ii(a,j,t,l,d)}),uE=Ve(function(a,l){var d=Yi(l,Zo(uE));return Ii(a,se,t,l,d)}),KM=wi(function(a,l){return Ii(a,he,t,t,t,l)});function HM(a,l){if(typeof a!="function")throw new ur(o);return l=l===t?l:Oe(l),Ve(a,l)}function GM(a,l){if(typeof a!="function")throw new ur(o);return l=l==null?0:zt(Oe(l),0),Ve(function(d){var g=d[l],m=ts(d,0,l);return g&&Qi(m,g),Yn(a,this,m)})}function jM(a,l,d){var g=!0,m=!0;if(typeof a!="function")throw new ur(o);return At(d)&&(g="leading"in d?!!d.leading:g,m="trailing"in d?!!d.trailing:m),cE(a,l,{leading:g,maxWait:l,trailing:m})}function QM(a){return iE(a,1)}function YM(a,l){return dg(Yp(l),a)}function JM(){if(!arguments.length)return[];var a=arguments[0];return xe(a)?a:[a]}function XM(a){return dr(a,I)}function ZM(a,l){return l=typeof l=="function"?l:t,dr(a,I,l)}function eV(a){return dr(a,p|I)}function tV(a,l){return l=typeof l=="function"?l:t,dr(a,p|I,l)}function nV(a,l){return l==null||JI(a,l,Gt(l))}function Cr(a,l){return a===l||a!==a&&l!==l}var rV=ih(Fp),iV=ih(function(a,l){return a>=l}),Gs=rw(function(){return arguments}())?rw:function(a){return Pt(a)&&it.call(a,"callee")&&!qI.call(a,"callee")},xe=D.isArray,sV=AI?Jn(AI):fN;function Fn(a){return a!=null&&fh(a.length)&&!Ti(a)}function Mt(a){return Pt(a)&&Fn(a)}function oV(a){return a===!0||a===!1||Pt(a)&&Cn(a)==re}var ns=ID||Tg,aV=bI?Jn(bI):pN;function lV(a){return Pt(a)&&a.nodeType===1&&!Pl(a)}function cV(a){if(a==null)return!0;if(Fn(a)&&(xe(a)||typeof a=="string"||typeof a.splice=="function"||ns(a)||ea(a)||Gs(a)))return!a.length;var l=mn(a);if(l==C||l==z)return!a.size;if(Sl(a))return!$p(a).length;for(var d in a)if(it.call(a,d))return!1;return!0}function uV(a,l){return Al(a,l)}function hV(a,l,d){d=typeof d=="function"?d:t;var g=d?d(a,l):t;return g===t?Al(a,l,t,d):!!g}function fg(a){if(!Pt(a))return!1;var l=Cn(a);return l==$e||l==ge||typeof a.message=="string"&&typeof a.name=="string"&&!Pl(a)}function dV(a){return typeof a=="number"&&KI(a)}function Ti(a){if(!At(a))return!1;var l=Cn(a);return l==w||l==T||l==U||l==Q}function hE(a){return typeof a=="number"&&a==Oe(a)}function fh(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=De}function At(a){var l=typeof a;return a!=null&&(l=="object"||l=="function")}function Pt(a){return a!=null&&typeof a=="object"}var dE=RI?Jn(RI):_N;function fV(a,l){return a===l||Bp(a,l,rg(l))}function pV(a,l,d){return d=typeof d=="function"?d:t,Bp(a,l,rg(l),d)}function gV(a){return fE(a)&&a!=+a}function _V(a){if(ZN(a))throw new Ce(s);return iw(a)}function mV(a){return a===null}function yV(a){return a==null}function fE(a){return typeof a=="number"||Pt(a)&&Cn(a)==O}function Pl(a){if(!Pt(a)||Cn(a)!=q)return!1;var l=Bu(a);if(l===null)return!0;var d=it.call(l,"constructor")&&l.constructor;return typeof d=="function"&&d instanceof d&&Vu.call(d)==pD}var pg=SI?Jn(SI):mN;function vV(a){return hE(a)&&a>=-De&&a<=De}var pE=CI?Jn(CI):yN;function ph(a){return typeof a=="string"||!xe(a)&&Pt(a)&&Cn(a)==pe}function Zn(a){return typeof a=="symbol"||Pt(a)&&Cn(a)==le}var ea=PI?Jn(PI):vN;function IV(a){return a===t}function wV(a){return Pt(a)&&mn(a)==Ie}function EV(a){return Pt(a)&&Cn(a)==Fe}var TV=ih(Wp),AV=ih(function(a,l){return a<=l});function gE(a){if(!a)return[];if(Fn(a))return ph(a)?Rr(a):Ln(a);if(_l&&a[_l])return nD(a[_l]());var l=mn(a),d=l==C?Pp:l==z?Nu:ta;return d(a)}function Ai(a){if(!a)return a===0?a:0;if(a=gr(a),a===Ae||a===-Ae){var l=a<0?-1:1;return l*Ar}return a===a?a:0}function Oe(a){var l=Ai(a),d=l%1;return l===l?d?l-d:l:0}function _E(a){return a?qs(Oe(a),0,Nt):0}function gr(a){if(typeof a=="number")return a;if(Zn(a))return Qn;if(At(a)){var l=typeof a.valueOf=="function"?a.valueOf():a;a=At(l)?l+"":l}if(typeof a!="string")return a===0?a:+a;a=MI(a);var d=sk.test(a);return d||ak.test(a)?Uk(a.slice(2),d?2:8):ik.test(a)?Qn:+a}function mE(a){return Gr(a,Un(a))}function bV(a){return a?qs(Oe(a),-De,De):a===0?a:0}function tt(a){return a==null?"":Xn(a)}var RV=Jo(function(a,l){if(Sl(l)||Fn(l)){Gr(l,Gt(l),a);return}for(var d in l)it.call(l,d)&&wl(a,d,l[d])}),yE=Jo(function(a,l){Gr(l,Un(l),a)}),gh=Jo(function(a,l,d,g){Gr(l,Un(l),a,g)}),SV=Jo(function(a,l,d,g){Gr(l,Gt(l),a,g)}),CV=wi(Mp);function PV(a,l){var d=Yo(a);return l==null?d:YI(d,l)}var xV=Ve(function(a,l){a=ut(a);var d=-1,g=l.length,m=g>2?l[2]:t;for(m&&Pn(l[0],l[1],m)&&(g=1);++d<g;)for(var v=l[d],E=Un(v),b=-1,S=E.length;++b<S;){var L=E[b],F=a[L];(F===t||Cr(F,Go[L])&&!it.call(a,L))&&(a[L]=v[L])}return a}),kV=Ve(function(a){return a.push(t,Mw),Yn(vE,t,a)});function DV(a,l){return kI(a,ve(l,3),Hr)}function NV(a,l){return kI(a,ve(l,3),Lp)}function OV(a,l){return a==null?a:Vp(a,ve(l,3),Un)}function MV(a,l){return a==null?a:tw(a,ve(l,3),Un)}function VV(a,l){return a&&Hr(a,ve(l,3))}function LV(a,l){return a&&Lp(a,ve(l,3))}function FV(a){return a==null?[]:Yu(a,Gt(a))}function UV(a){return a==null?[]:Yu(a,Un(a))}function gg(a,l,d){var g=a==null?t:zs(a,l);return g===t?d:g}function BV(a,l){return a!=null&&Fw(a,l,cN)}function _g(a,l){return a!=null&&Fw(a,l,uN)}var $V=xw(function(a,l,d){l!=null&&typeof l.toString!="function"&&(l=Lu.call(l)),a[l]=d},yg(Bn)),WV=xw(function(a,l,d){l!=null&&typeof l.toString!="function"&&(l=Lu.call(l)),it.call(a,l)?a[l].push(d):a[l]=[d]},ve),qV=Ve(Tl);function Gt(a){return Fn(a)?jI(a):$p(a)}function Un(a){return Fn(a)?jI(a,!0):IN(a)}function zV(a,l){var d={};return l=ve(l,3),Hr(a,function(g,m,v){vi(d,l(g,m,v),g)}),d}function KV(a,l){var d={};return l=ve(l,3),Hr(a,function(g,m,v){vi(d,m,l(g,m,v))}),d}var HV=Jo(function(a,l,d){Ju(a,l,d)}),vE=Jo(function(a,l,d,g){Ju(a,l,d,g)}),GV=wi(function(a,l){var d={};if(a==null)return d;var g=!1;l=It(l,function(v){return v=es(v,a),g||(g=v.length>1),v}),Gr(a,tg(a),d),g&&(d=dr(d,p|_|I,$N));for(var m=l.length;m--;)Gp(d,l[m]);return d});function jV(a,l){return IE(a,dh(ve(l)))}var QV=wi(function(a,l){return a==null?{}:EN(a,l)});function IE(a,l){if(a==null)return{};var d=It(tg(a),function(g){return[g]});return l=ve(l),hw(a,d,function(g,m){return l(g,m[0])})}function YV(a,l,d){l=es(l,a);var g=-1,m=l.length;for(m||(m=1,a=t);++g<m;){var v=a==null?t:a[jr(l[g])];v===t&&(g=m,v=d),a=Ti(v)?v.call(a):v}return a}function JV(a,l,d){return a==null?a:bl(a,l,d)}function XV(a,l,d,g){return g=typeof g=="function"?g:t,a==null?a:bl(a,l,d,g)}var wE=Nw(Gt),EE=Nw(Un);function ZV(a,l,d){var g=xe(a),m=g||ns(a)||ea(a);if(l=ve(l,4),d==null){var v=a&&a.constructor;m?d=g?new v:[]:At(a)?d=Ti(v)?Yo(Bu(a)):{}:d={}}return(m?cr:Hr)(a,function(E,b,S){return l(d,E,b,S)}),d}function eL(a,l){return a==null?!0:Gp(a,l)}function tL(a,l,d){return a==null?a:_w(a,l,Yp(d))}function nL(a,l,d,g){return g=typeof g=="function"?g:t,a==null?a:_w(a,l,Yp(d),g)}function ta(a){return a==null?[]:Cp(a,Gt(a))}function rL(a){return a==null?[]:Cp(a,Un(a))}function iL(a,l,d){return d===t&&(d=l,l=t),d!==t&&(d=gr(d),d=d===d?d:0),l!==t&&(l=gr(l),l=l===l?l:0),qs(gr(a),l,d)}function sL(a,l,d){return l=Ai(l),d===t?(d=l,l=0):d=Ai(d),a=gr(a),hN(a,l,d)}function oL(a,l,d){if(d&&typeof d!="boolean"&&Pn(a,l,d)&&(l=d=t),d===t&&(typeof l=="boolean"?(d=l,l=t):typeof a=="boolean"&&(d=a,a=t)),a===t&&l===t?(a=0,l=1):(a=Ai(a),l===t?(l=a,a=0):l=Ai(l)),a>l){var g=a;a=l,l=g}if(d||a%1||l%1){var m=HI();return _n(a+m*(l-a+Fk("1e-"+((m+"").length-1))),l)}return zp(a,l)}var aL=Xo(function(a,l,d){return l=l.toLowerCase(),a+(d?TE(l):l)});function TE(a){return mg(tt(a).toLowerCase())}function AE(a){return a=tt(a),a&&a.replace(ck,Jk).replace(Ck,"")}function lL(a,l,d){a=tt(a),l=Xn(l);var g=a.length;d=d===t?g:qs(Oe(d),0,g);var m=d;return d-=l.length,d>=0&&a.slice(d,m)==l}function cL(a){return a=tt(a),a&&qx.test(a)?a.replace(tI,Xk):a}function uL(a){return a=tt(a),a&&Qx.test(a)?a.replace(dp,"\\$&"):a}var hL=Xo(function(a,l,d){return a+(d?"-":"")+l.toLowerCase()}),dL=Xo(function(a,l,d){return a+(d?" ":"")+l.toLowerCase()}),fL=Sw("toLowerCase");function pL(a,l,d){a=tt(a),l=Oe(l);var g=l?Ko(a):0;if(!l||g>=l)return a;var m=(l-g)/2;return rh(zu(m),d)+a+rh(qu(m),d)}function gL(a,l,d){a=tt(a),l=Oe(l);var g=l?Ko(a):0;return l&&g<l?a+rh(l-g,d):a}function _L(a,l,d){a=tt(a),l=Oe(l);var g=l?Ko(a):0;return l&&g<l?rh(l-g,d)+a:a}function mL(a,l,d){return d||l==null?l=0:l&&(l=+l),AD(tt(a).replace(fp,""),l||0)}function yL(a,l,d){return(d?Pn(a,l,d):l===t)?l=1:l=Oe(l),Kp(tt(a),l)}function vL(){var a=arguments,l=tt(a[0]);return a.length<3?l:l.replace(a[1],a[2])}var IL=Xo(function(a,l,d){return a+(d?"_":"")+l.toLowerCase()});function wL(a,l,d){return d&&typeof d!="number"&&Pn(a,l,d)&&(l=d=t),d=d===t?Nt:d>>>0,d?(a=tt(a),a&&(typeof l=="string"||l!=null&&!pg(l))&&(l=Xn(l),!l&&zo(a))?ts(Rr(a),0,d):a.split(l,d)):[]}var EL=Xo(function(a,l,d){return a+(d?" ":"")+mg(l)});function TL(a,l,d){return a=tt(a),d=d==null?0:qs(Oe(d),0,a.length),l=Xn(l),a.slice(d,d+l.length)==l}function AL(a,l,d){var g=y.templateSettings;d&&Pn(a,l,d)&&(l=t),a=tt(a),l=gh({},l,g,Ow);var m=gh({},l.imports,g.imports,Ow),v=Gt(m),E=Cp(m,v),b,S,L=0,F=l.interpolate||Cu,H="__p += '",X=xp((l.escape||Cu).source+"|"+F.source+"|"+(F===nI?rk:Cu).source+"|"+(l.evaluate||Cu).source+"|$","g"),de="//# sourceURL="+(it.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Nk+"]")+`
`;a.replace(X,function(Ee,Ue,qe,er,xn,tr){return qe||(qe=er),H+=a.slice(L,tr).replace(uk,Zk),Ue&&(b=!0,H+=`' +
__e(`+Ue+`) +
'`),xn&&(S=!0,H+=`';
`+xn+`;
__p += '`),qe&&(H+=`' +
((__t = (`+qe+`)) == null ? '' : __t) +
'`),L=tr+Ee.length,Ee}),H+=`';
`;var we=it.call(l,"variable")&&l.variable;if(!we)H=`with (obj) {
`+H+`
}
`;else if(tk.test(we))throw new Ce(c);H=(S?H.replace(Ux,""):H).replace(Bx,"$1").replace($x,"$1;"),H="function("+(we||"obj")+`) {
`+(we?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(b?", __e = _.escape":"")+(S?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+H+`return __p
}`;var Me=RE(function(){return Ze(v,de+"return "+H).apply(t,E)});if(Me.source=H,fg(Me))throw Me;return Me}function bL(a){return tt(a).toLowerCase()}function RL(a){return tt(a).toUpperCase()}function SL(a,l,d){if(a=tt(a),a&&(d||l===t))return MI(a);if(!a||!(l=Xn(l)))return a;var g=Rr(a),m=Rr(l),v=VI(g,m),E=LI(g,m)+1;return ts(g,v,E).join("")}function CL(a,l,d){if(a=tt(a),a&&(d||l===t))return a.slice(0,UI(a)+1);if(!a||!(l=Xn(l)))return a;var g=Rr(a),m=LI(g,Rr(l))+1;return ts(g,0,m).join("")}function PL(a,l,d){if(a=tt(a),a&&(d||l===t))return a.replace(fp,"");if(!a||!(l=Xn(l)))return a;var g=Rr(a),m=VI(g,Rr(l));return ts(g,m).join("")}function xL(a,l){var d=Re,g=St;if(At(l)){var m="separator"in l?l.separator:m;d="length"in l?Oe(l.length):d,g="omission"in l?Xn(l.omission):g}a=tt(a);var v=a.length;if(zo(a)){var E=Rr(a);v=E.length}if(d>=v)return a;var b=d-Ko(g);if(b<1)return g;var S=E?ts(E,0,b).join(""):a.slice(0,b);if(m===t)return S+g;if(E&&(b+=S.length-b),pg(m)){if(a.slice(b).search(m)){var L,F=S;for(m.global||(m=xp(m.source,tt(rI.exec(m))+"g")),m.lastIndex=0;L=m.exec(F);)var H=L.index;S=S.slice(0,H===t?b:H)}}else if(a.indexOf(Xn(m),b)!=b){var X=S.lastIndexOf(m);X>-1&&(S=S.slice(0,X))}return S+g}function kL(a){return a=tt(a),a&&Wx.test(a)?a.replace(eI,oD):a}var DL=Xo(function(a,l,d){return a+(d?" ":"")+l.toUpperCase()}),mg=Sw("toUpperCase");function bE(a,l,d){return a=tt(a),l=d?t:l,l===t?tD(a)?cD(a):Hk(a):a.match(l)||[]}var RE=Ve(function(a,l){try{return Yn(a,t,l)}catch(d){return fg(d)?d:new Ce(d)}}),NL=wi(function(a,l){return cr(l,function(d){d=jr(d),vi(a,d,hg(a[d],a))}),a});function OL(a){var l=a==null?0:a.length,d=ve();return a=l?It(a,function(g){if(typeof g[1]!="function")throw new ur(o);return[d(g[0]),g[1]]}):[],Ve(function(g){for(var m=-1;++m<l;){var v=a[m];if(Yn(v[0],this,g))return Yn(v[1],this,g)}})}function ML(a){return oN(dr(a,p))}function yg(a){return function(){return a}}function VL(a,l){return a==null||a!==a?l:a}var LL=Pw(),FL=Pw(!0);function Bn(a){return a}function vg(a){return sw(typeof a=="function"?a:dr(a,p))}function UL(a){return aw(dr(a,p))}function BL(a,l){return lw(a,dr(l,p))}var $L=Ve(function(a,l){return function(d){return Tl(d,a,l)}}),WL=Ve(function(a,l){return function(d){return Tl(a,d,l)}});function Ig(a,l,d){var g=Gt(l),m=Yu(l,g);d==null&&!(At(l)&&(m.length||!g.length))&&(d=l,l=a,a=this,m=Yu(l,Gt(l)));var v=!(At(d)&&"chain"in d)||!!d.chain,E=Ti(a);return cr(m,function(b){var S=l[b];a[b]=S,E&&(a.prototype[b]=function(){var L=this.__chain__;if(v||L){var F=a(this.__wrapped__),H=F.__actions__=Ln(this.__actions__);return H.push({func:S,args:arguments,thisArg:a}),F.__chain__=L,F}return S.apply(a,Qi([this.value()],arguments))})}),a}function qL(){return cn._===this&&(cn._=gD),this}function wg(){}function zL(a){return a=Oe(a),Ve(function(l){return cw(l,a)})}var KL=Xp(It),HL=Xp(xI),GL=Xp(Tp);function SE(a){return sg(a)?Ap(jr(a)):TN(a)}function jL(a){return function(l){return a==null?t:zs(a,l)}}var QL=kw(),YL=kw(!0);function Eg(){return[]}function Tg(){return!1}function JL(){return{}}function XL(){return""}function ZL(){return!0}function eF(a,l){if(a=Oe(a),a<1||a>De)return[];var d=Nt,g=_n(a,Nt);l=ve(l),a-=Nt;for(var m=Sp(g,l);++d<a;)l(d);return m}function tF(a){return xe(a)?It(a,jr):Zn(a)?[a]:Ln(Gw(tt(a)))}function nF(a){var l=++fD;return tt(a)+l}var rF=nh(function(a,l){return a+l},0),iF=Zp("ceil"),sF=nh(function(a,l){return a/l},1),oF=Zp("floor");function aF(a){return a&&a.length?Qu(a,Bn,Fp):t}function lF(a,l){return a&&a.length?Qu(a,ve(l,2),Fp):t}function cF(a){return NI(a,Bn)}function uF(a,l){return NI(a,ve(l,2))}function hF(a){return a&&a.length?Qu(a,Bn,Wp):t}function dF(a,l){return a&&a.length?Qu(a,ve(l,2),Wp):t}var fF=nh(function(a,l){return a*l},1),pF=Zp("round"),gF=nh(function(a,l){return a-l},0);function _F(a){return a&&a.length?Rp(a,Bn):0}function mF(a,l){return a&&a.length?Rp(a,ve(l,2)):0}return y.after=UM,y.ary=iE,y.assign=RV,y.assignIn=yE,y.assignInWith=gh,y.assignWith=SV,y.at=CV,y.before=sE,y.bind=hg,y.bindAll=NL,y.bindKey=oE,y.castArray=JM,y.chain=tE,y.chunk=oO,y.compact=aO,y.concat=lO,y.cond=OL,y.conforms=ML,y.constant=yg,y.countBy=_M,y.create=PV,y.curry=aE,y.curryRight=lE,y.debounce=cE,y.defaults=xV,y.defaultsDeep=kV,y.defer=BM,y.delay=$M,y.difference=cO,y.differenceBy=uO,y.differenceWith=hO,y.drop=dO,y.dropRight=fO,y.dropRightWhile=pO,y.dropWhile=gO,y.fill=_O,y.filter=yM,y.flatMap=wM,y.flatMapDeep=EM,y.flatMapDepth=TM,y.flatten=Jw,y.flattenDeep=mO,y.flattenDepth=yO,y.flip=WM,y.flow=LL,y.flowRight=FL,y.fromPairs=vO,y.functions=FV,y.functionsIn=UV,y.groupBy=AM,y.initial=wO,y.intersection=EO,y.intersectionBy=TO,y.intersectionWith=AO,y.invert=$V,y.invertBy=WV,y.invokeMap=RM,y.iteratee=vg,y.keyBy=SM,y.keys=Gt,y.keysIn=Un,y.map=ch,y.mapKeys=zV,y.mapValues=KV,y.matches=UL,y.matchesProperty=BL,y.memoize=hh,y.merge=HV,y.mergeWith=vE,y.method=$L,y.methodOf=WL,y.mixin=Ig,y.negate=dh,y.nthArg=zL,y.omit=GV,y.omitBy=jV,y.once=qM,y.orderBy=CM,y.over=KL,y.overArgs=zM,y.overEvery=HL,y.overSome=GL,y.partial=dg,y.partialRight=uE,y.partition=PM,y.pick=QV,y.pickBy=IE,y.property=SE,y.propertyOf=jL,y.pull=CO,y.pullAll=Zw,y.pullAllBy=PO,y.pullAllWith=xO,y.pullAt=kO,y.range=QL,y.rangeRight=YL,y.rearg=KM,y.reject=DM,y.remove=DO,y.rest=HM,y.reverse=cg,y.sampleSize=OM,y.set=JV,y.setWith=XV,y.shuffle=MM,y.slice=NO,y.sortBy=FM,y.sortedUniq=BO,y.sortedUniqBy=$O,y.split=wL,y.spread=GM,y.tail=WO,y.take=qO,y.takeRight=zO,y.takeRightWhile=KO,y.takeWhile=HO,y.tap=aM,y.throttle=jM,y.thru=lh,y.toArray=gE,y.toPairs=wE,y.toPairsIn=EE,y.toPath=tF,y.toPlainObject=mE,y.transform=ZV,y.unary=QM,y.union=GO,y.unionBy=jO,y.unionWith=QO,y.uniq=YO,y.uniqBy=JO,y.uniqWith=XO,y.unset=eL,y.unzip=ug,y.unzipWith=eE,y.update=tL,y.updateWith=nL,y.values=ta,y.valuesIn=rL,y.without=ZO,y.words=bE,y.wrap=YM,y.xor=eM,y.xorBy=tM,y.xorWith=nM,y.zip=rM,y.zipObject=iM,y.zipObjectDeep=sM,y.zipWith=oM,y.entries=wE,y.entriesIn=EE,y.extend=yE,y.extendWith=gh,Ig(y,y),y.add=rF,y.attempt=RE,y.camelCase=aL,y.capitalize=TE,y.ceil=iF,y.clamp=iL,y.clone=XM,y.cloneDeep=eV,y.cloneDeepWith=tV,y.cloneWith=ZM,y.conformsTo=nV,y.deburr=AE,y.defaultTo=VL,y.divide=sF,y.endsWith=lL,y.eq=Cr,y.escape=cL,y.escapeRegExp=uL,y.every=mM,y.find=vM,y.findIndex=Qw,y.findKey=DV,y.findLast=IM,y.findLastIndex=Yw,y.findLastKey=NV,y.floor=oF,y.forEach=nE,y.forEachRight=rE,y.forIn=OV,y.forInRight=MV,y.forOwn=VV,y.forOwnRight=LV,y.get=gg,y.gt=rV,y.gte=iV,y.has=BV,y.hasIn=_g,y.head=Xw,y.identity=Bn,y.includes=bM,y.indexOf=IO,y.inRange=sL,y.invoke=qV,y.isArguments=Gs,y.isArray=xe,y.isArrayBuffer=sV,y.isArrayLike=Fn,y.isArrayLikeObject=Mt,y.isBoolean=oV,y.isBuffer=ns,y.isDate=aV,y.isElement=lV,y.isEmpty=cV,y.isEqual=uV,y.isEqualWith=hV,y.isError=fg,y.isFinite=dV,y.isFunction=Ti,y.isInteger=hE,y.isLength=fh,y.isMap=dE,y.isMatch=fV,y.isMatchWith=pV,y.isNaN=gV,y.isNative=_V,y.isNil=yV,y.isNull=mV,y.isNumber=fE,y.isObject=At,y.isObjectLike=Pt,y.isPlainObject=Pl,y.isRegExp=pg,y.isSafeInteger=vV,y.isSet=pE,y.isString=ph,y.isSymbol=Zn,y.isTypedArray=ea,y.isUndefined=IV,y.isWeakMap=wV,y.isWeakSet=EV,y.join=bO,y.kebabCase=hL,y.last=pr,y.lastIndexOf=RO,y.lowerCase=dL,y.lowerFirst=fL,y.lt=TV,y.lte=AV,y.max=aF,y.maxBy=lF,y.mean=cF,y.meanBy=uF,y.min=hF,y.minBy=dF,y.stubArray=Eg,y.stubFalse=Tg,y.stubObject=JL,y.stubString=XL,y.stubTrue=ZL,y.multiply=fF,y.nth=SO,y.noConflict=qL,y.noop=wg,y.now=uh,y.pad=pL,y.padEnd=gL,y.padStart=_L,y.parseInt=mL,y.random=oL,y.reduce=xM,y.reduceRight=kM,y.repeat=yL,y.replace=vL,y.result=YV,y.round=pF,y.runInContext=R,y.sample=NM,y.size=VM,y.snakeCase=IL,y.some=LM,y.sortedIndex=OO,y.sortedIndexBy=MO,y.sortedIndexOf=VO,y.sortedLastIndex=LO,y.sortedLastIndexBy=FO,y.sortedLastIndexOf=UO,y.startCase=EL,y.startsWith=TL,y.subtract=gF,y.sum=_F,y.sumBy=mF,y.template=AL,y.times=eF,y.toFinite=Ai,y.toInteger=Oe,y.toLength=_E,y.toLower=bL,y.toNumber=gr,y.toSafeInteger=bV,y.toString=tt,y.toUpper=RL,y.trim=SL,y.trimEnd=CL,y.trimStart=PL,y.truncate=xL,y.unescape=kL,y.uniqueId=nF,y.upperCase=DL,y.upperFirst=mg,y.each=nE,y.eachRight=rE,y.first=Xw,Ig(y,function(){var a={};return Hr(y,function(l,d){it.call(y.prototype,d)||(a[d]=l)}),a}(),{chain:!1}),y.VERSION=r,cr(["bind","bindKey","curry","curryRight","partial","partialRight"],function(a){y[a].placeholder=y}),cr(["drop","take"],function(a,l){Be.prototype[a]=function(d){d=d===t?1:zt(Oe(d),0);var g=this.__filtered__&&!l?new Be(this):this.clone();return g.__filtered__?g.__takeCount__=_n(d,g.__takeCount__):g.__views__.push({size:_n(d,Nt),type:a+(g.__dir__<0?"Right":"")}),g},Be.prototype[a+"Right"]=function(d){return this.reverse()[a](d).reverse()}}),cr(["filter","map","takeWhile"],function(a,l){var d=l+1,g=d==Ht||d==ht;Be.prototype[a]=function(m){var v=this.clone();return v.__iteratees__.push({iteratee:ve(m,3),type:d}),v.__filtered__=v.__filtered__||g,v}}),cr(["head","last"],function(a,l){var d="take"+(l?"Right":"");Be.prototype[a]=function(){return this[d](1).value()[0]}}),cr(["initial","tail"],function(a,l){var d="drop"+(l?"":"Right");Be.prototype[a]=function(){return this.__filtered__?new Be(this):this[d](1)}}),Be.prototype.compact=function(){return this.filter(Bn)},Be.prototype.find=function(a){return this.filter(a).head()},Be.prototype.findLast=function(a){return this.reverse().find(a)},Be.prototype.invokeMap=Ve(function(a,l){return typeof a=="function"?new Be(this):this.map(function(d){return Tl(d,a,l)})}),Be.prototype.reject=function(a){return this.filter(dh(ve(a)))},Be.prototype.slice=function(a,l){a=Oe(a);var d=this;return d.__filtered__&&(a>0||l<0)?new Be(d):(a<0?d=d.takeRight(-a):a&&(d=d.drop(a)),l!==t&&(l=Oe(l),d=l<0?d.dropRight(-l):d.take(l-a)),d)},Be.prototype.takeRightWhile=function(a){return this.reverse().takeWhile(a).reverse()},Be.prototype.toArray=function(){return this.take(Nt)},Hr(Be.prototype,function(a,l){var d=/^(?:filter|find|map|reject)|While$/.test(l),g=/^(?:head|last)$/.test(l),m=y[g?"take"+(l=="last"?"Right":""):l],v=g||/^find/.test(l);m&&(y.prototype[l]=function(){var E=this.__wrapped__,b=g?[1]:arguments,S=E instanceof Be,L=b[0],F=S||xe(E),H=function(Ue){var qe=m.apply(y,Qi([Ue],b));return g&&X?qe[0]:qe};F&&d&&typeof L=="function"&&L.length!=1&&(S=F=!1);var X=this.__chain__,de=!!this.__actions__.length,we=v&&!X,Me=S&&!de;if(!v&&F){E=Me?E:new Be(this);var Ee=a.apply(E,b);return Ee.__actions__.push({func:lh,args:[H],thisArg:t}),new hr(Ee,X)}return we&&Me?a.apply(this,b):(Ee=this.thru(H),we?g?Ee.value()[0]:Ee.value():Ee)})}),cr(["pop","push","shift","sort","splice","unshift"],function(a){var l=Ou[a],d=/^(?:push|sort|unshift)$/.test(a)?"tap":"thru",g=/^(?:pop|shift)$/.test(a);y.prototype[a]=function(){var m=arguments;if(g&&!this.__chain__){var v=this.value();return l.apply(xe(v)?v:[],m)}return this[d](function(E){return l.apply(xe(E)?E:[],m)})}}),Hr(Be.prototype,function(a,l){var d=y[l];if(d){var g=d.name+"";it.call(Qo,g)||(Qo[g]=[]),Qo[g].push({name:l,func:d})}}),Qo[th(t,V).name]=[{name:"wrapper",func:t}],Be.prototype.clone=kD,Be.prototype.reverse=DD,Be.prototype.value=ND,y.prototype.at=lM,y.prototype.chain=cM,y.prototype.commit=uM,y.prototype.next=hM,y.prototype.plant=fM,y.prototype.reverse=pM,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=gM,y.prototype.first=y.prototype.head,_l&&(y.prototype[_l]=dM),y},Ho=uD();Us?((Us.exports=Ho)._=Ho,vp._=Ho):cn._=Ho}).call(Kl)})(nf,nf.exports);var rf=nf.exports;class g7{constructor(e,t,r){nt(this,"yt");nt(this,"local_db");nt(this,"intervalMillis");nt(this,"loadingPromiseResolve");nt(this,"loadingPromiseReject");nt(this,"loadingPromise",Bt(new Promise((e,t)=>{this.loadingPromiseResolve=e,this.loadingPromiseReject=t})));nt(this,"subscriptions",Bt(new Map));nt(this,"lastRefreshed");nt(this,"keysRelevancyOrder",Bt(new Array));nt(this,"keysAlphabeticalOrder",Bt(new Array));this.yt=e,this.local_db=t,this.intervalMillis=r,this.init()}async init(){this.lastRefreshed=await this.local_db.get("vars","subscriptions.lastRefreshed");const e=await this.local_db.getAll("subscriptions");for(const t of e)this.subscriptions.value.set(t.channelId,t);this.keysRelevancyOrder.value=await this.local_db.getAllKeysFromIndex("subscriptions","by-relevance"),this.keysAlphabeticalOrder.value=await this.local_db.getAllKeysFromIndex("subscriptions","by-alphabet"),this.loadingPromiseResolve()}get(e){if(!this.subscriptions.value.has(e))throw new Error("The subscription for the provided channelId does not exist.");return rf.cloneDeep(this.subscriptions.value.get(e))}async set(e,t){return this.subscriptions.value.set(e,t),this.local_db.put("subscriptions",t)}async update(e,t){this.set(e,{...this.get(e),...t})}async refresh(e=!1){if(!e&&Date.now()-this.lastRefreshed.getTime()<this.intervalMillis)return console.info('[INFO] Too little time has passed to refresh the subscriptions list. Change "Subscriptions.intervalMillis" or set the "force" flag on this method to true.'),[];var t=new Map(this.subscriptions.value),r=await this.yt.getSubscriptions(),i=new Map,s=new Array,o=[],c=0;for(const[u,h]of r)t.has(u)?(i.set(u,{...h,relevancyIndex:c,videosFetchedBefore:t.get(u).videosFetchedBefore,videosFetchedAfter:t.get(u).videosFetchedAfter}),t.delete(u)):(s.push(u),i.set(u,{...h,relevancyIndex:c,videosFetchedAfter:null,videosFetchedBefore:null})),o.push(this.local_db.put("subscriptions",i.get(u))),c++;for(const[u,h]of t)o.push(this.local_db.delete("subscriptions",u));return await Promise.all(o),this.subscriptions.value=i,this.keysRelevancyOrder.value=await this.local_db.getAllKeysFromIndex("subscriptions","by-relevance"),this.keysAlphabeticalOrder.value=await this.local_db.getAllKeysFromIndex("subscriptions","by-alphabet"),this.lastRefreshed=new Date(Date.now()),await this.local_db.put("vars",this.lastRefreshed,"subscriptions.lastRefreshed"),s}}class _7{constructor(e,t){nt(this,"yt");nt(this,"local_db");nt(this,"loadingPromiseResolve");nt(this,"loadingPromiseReject");nt(this,"loadingPromise",Bt(new Promise((e,t)=>{this.loadingPromiseResolve=e,this.loadingPromiseReject=t})));nt(this,"videos",Bt(new Map));this.yt=e,this.local_db=t,this.init()}async init(){const e=await this.local_db.getAll("videos");for(const t of e)this.videos.value.set(t.videoId,t);this.loadingPromiseResolve()}get(e){if(!this.videos.value.has(e))throw new Error("The video for the provided videoId does not exist.");return rf.cloneDeep(this.videos.value.get(e))}getOrderedKeys(e){var t=e.slice();return t.sort((r,i)=>this.videos.value.get(i).publishedAt.getTime()-this.videos.value.get(r).publishedAt.getTime())}async set(e,t){return this.videos.value.set(e,t),this.local_db.put("videos",t)}async delete(e){var t=[];for(const r of e)this.videos.value.delete(r),t.push(this.local_db.delete("videos",r));return Promise.all(t)}validateVideos(e){var t=new Map(this.videos.value),r=[];for(var i of e)this.videos.value.has(i)?t.delete(i):r.push(i);return{notPresent:r,presentNotChecked:Array.from(t.keys())}}async fetchVideos(e){var t=await this.yt.getVideos(e);this.videos.value=new Map([...this.videos.value,...t]);var r=new Array;for(const i of t.values())r.push(this.local_db.put("videos",i));return Promise.all(r)}}class m7{constructor(e){nt(this,"docRef");nt(this,"unsubscribe");nt(this,"_data",Bt());nt(this,"loading",!0);nt(this,"loadingPromiseResolve");nt(this,"loadingPromiseReject");nt(this,"loadingPromise",new Promise((e,t)=>{this.loadingPromiseResolve=e,this.loadingPromiseReject=t}));nt(this,"_exists");this.docRef=e,this.unsubscribe=Sq(this.docRef,t=>{this.loading&&(this.loading=!1,this.loadingPromiseResolve()),this._exists=t.exists(),this._data.value=t.data()})}get value(){return this._data.value}set value(e){throw new TypeError('"value" is read-only.')}get data(){return this._data}set data(e){throw new TypeError('"data" is read-only.')}exists(){return this._exists}async set(e){this._data.value=e,await co(this.docRef,e)}async update(e){console.warn("[WARNING]: This method does not implement custom immediate update of local variable!"),await nm(this.docRef,e)}static fromDocReference(e){return new this(e)}}const y7=function(n){return new m7(n)};async function v7(n){await Dx.initDB(n);const e=n.createObjectStore("videos",{keyPath:"videoId"});e.createIndex("publishedAtIndex","publishedAt"),e.createIndex("channelIdIndex","channelId");const t=n.createObjectStore("subscriptions",{keyPath:"channelId"});t.createIndex("by-relevance","relevancyIndex"),t.createIndex("by-alphabet","title"),n.createObjectStore("channels",{keyPath:"channelId"})}class Vi{constructor(e){nt(this,"date");this.date=e}getUTCWeek(){var e=new Date(this.date);e.setUTCHours(0,0,0,0),e.setUTCDate(e.getUTCDate()+3-(e.getUTCDay()+6)%7);var t=new Date(e.getUTCFullYear(),0,4);return 1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getUTCDay()+6)%7)/7)}getUTCWeekYear(){var e=new Date(this.date);return e.setUTCDate(e.getUTCDate()+3-(e.getUTCDay()+6)%7),e.getUTCFullYear()}getUTCWeekDate(){return this.getUTCWeekYear()+"-W"+this.getUTCWeek()}getUTCMondayMidnight(){var e=new Date(this.date);return e.setUTCHours(0,0,0,0),e.setUTCDate(e.getUTCDate()-e.getUTCDay()+1),e}getDeltaWeek(e){return new Vi(new Date(this.date.getTime()+e*7*24*36e5))}static now(){return new Vi(new Date(Date.now()))}}class I7{constructor(e){nt(this,"videosCollectionRef");nt(this,"_removedVideos",Bt(new Array));nt(this,"_loadedWeeks",new Array);this.videosCollectionRef=lq(e,"videos")}async loadWeek(e){var t=Dr(this.videosCollectionRef,e.getUTCWeekDate()),r=await fa(t);r.exists()||(co(t,{weekDate:e.getUTCWeekDate(),removedVideos:[]}),r=await fa(t)),this._loadedWeeks.concat(e.getUTCWeekDate()),this._removedVideos.value=this._removedVideos.value.concat(r.data().removedVideos)}get removedVideos(){return this._removedVideos}async removeVideo(e){const t=new Vi(e.publishedAt),r=Dr(this.videosCollectionRef,t.getUTCWeekDate());(await fa(r)).exists()?nm(r,{removedVideos:Oq(e.videoId)}):co(r,{weekDate:t.getUTCWeekDate(),removedVideos:[e.videoId]}),this._removedVideos.value.push(e.videoId)}async addVideo(e){const t=new Vi(e.publishedAt),r=Dr(this.videosCollectionRef,t.getUTCWeekDate());(await fa(r)).exists()&&nm(r,{removedVideos:Mq(e.videoId)});const s=this._removedVideos.value.indexOf(e.videoId);this._removedVideos.value.splice(s,1)}isLoaded(e){return this._loadedWeeks.includes(e.getUTCWeekDate())}}const w7=n=>(Mo("data-v-abbd6387"),n=n(),Vo(),n),E7={class:"img bg-button-emph-3 flex align-middle items-center justify-center"},T7={key:0},A7={key:1},b7=w7(()=>ae("span",null,"All channels",-1)),R7={__name:"AllChannelsButton",props:["numberOfChannels","active"],emits:["click"],setup(n,{emit:e}){const t=n;return(r,i)=>(Et(),en("button",{onClick:i[0]||(i[0]=s=>e("click")),class:ai(n.active?"active":"")},[ae("div",E7,[t.numberOfChannels?(Et(),en("span",T7,Pi(t.numberOfChannels),1)):(Et(),en("span",A7,"All"))]),b7],2))}},S7=gi(R7,[["__scopeId","data-v-abbd6387"]]),Xv=n=>(Mo("data-v-455e6b8e"),n=n(),Vo(),n),C7={class:"flex flex-col min-h-0"},P7={class:"grow main-container min-h-0"},x7={class:"overflow-y-scroll appearing-scrollbar border-r border-separator"},k7={class:"flex flex-col w-full"},D7=Xv(()=>ae("hr",null,null,-1)),N7={class:"border-t border-separator shrink-0"},O7={class:"h-12 flex flex-row items-center justify-center"},M7=Xv(()=>ae("span",null,"Inbox",-1)),V7=Xv(()=>ae("span",null," Subscriptions ",-1)),L7=wu({__name:"MainView",async setup(n){let e,t;const r=Bt(!1);var i=([e,t]=sa(()=>zd()),e=await e,t(),e);const s=cp();var o=([e,t]=sa(async()=>fb("subinbox-"+i.uid,1,{async upgrade(he){await v7(he)}})),e=await e,t(),e),c=Bt(new Array);const u=new I7(Dr(s,"users",i.uid,"folders","inbox")),h=y7(Dr(s,"users",i.uid,"folders","watchLater"));var f=new Dx(o),p=new g7(ad,o,0),_=new _7(ad,o);Vi.now().getUTCWeekDate();const I=Bt(!1),A=Bt("rel"),P=Bt({inbox:!0,all:!1}),x=Bt(void 0);[e,t]=sa(()=>u.loadWeek(Vi.now())),await e,t(),[e,t]=sa(()=>Promise.all([h.loadingPromise,p.loadingPromise,_.loadingPromise])),await e,t(),c.value=([e,t]=sa(()=>o.transaction("videos").objectStore("videos").index("publishedAtIndex").getAll(IDBKeyRange.bound(Vi.now().getUTCMondayMidnight(),new Date(Date.now())))),e=await e,t(),e).map(he=>he.videoId),[e,t]=sa(async()=>(async(he=!1)=>{var Te=await p.refresh(),Re;if(!he&&Date.now()-(await f.get("subsciptionFeed.lastRefreshed")).getTime()<24*3600*1e3)if(Te.length>0)console.info("[INFO] Too early to refresh feed, but new channels found, so fetching new channels."),Re=Te;else{console.info("[INFO] Subscription feed wasn't fetched because too early and no new subscriptions found, so cancelling.");return}else console.info("[INFO] Fetching feed."),Re=p.keysRelevancyOrder.value;var St=new Array,an=new Array;const Ct=new Date(Date.now());for(var Ht of Re){const Ae=p.get(Ht),De=Ae.videosFetchedBefore?Ae.videosFetchedBefore:new Date(Ct.getTime()-30*24*3600*1e3);St.push(ad.getUploadsFromActivities(Ht,Ct,De)),an.push(p.update(Ht,{videosFetchedAfter:De,videosFetchedBefore:Ct}))}const jn=(await Promise.all(St)).flat().map(Ae=>Ae.videoId);await Promise.all(an);const ht=rf.merge(...await Promise.all([_.validateVideos(jn),_.validateVideos(h.value.videos)]));await _.fetchVideos(ht.notPresent),await _.delete(ht.presentNotChecked),await f.set("subsciptionFeed.lastRefreshed",new Date(Date.now())),c.value=(await o.transaction("videos").objectStore("videos").index("publishedAtIndex").getAll(IDBKeyRange.bound(Vi.now().getUTCMondayMidnight(),new Date(Date.now())))).map(Ae=>Ae.videoId)})()),await e,t(),c.value=_.getOrderedKeys(c.value),console.info("[INFO] Ready for rendering."),r.value=!0;const V=nr(()=>A.value==="atz"?p.keysAlphabeticalOrder.value:p.keysRelevancyOrder.value);function W(he){}async function K(he){alert("Not yet implemented")}function N(he){u.removeVideo(_.get(he))}function j(he){P.value={all:!0,inbox:!1}}function se(he){P.value={all:!1,inbox:!0}}function ue(he){var Te=!0;return x.value&&(Te=Te&&_.get(he).channelId==x.value),P.value.inbox&&(Te=Te&&!u.removedVideos.value.includes(he)),Te}return(he,Te)=>(Et(),en("div",C7,[ae("div",P7,[ae("aside",x7,[ae("div",k7,[Ft(e7,{modelValue:A.value,"onUpdate:modelValue":Te[0]||(Te[0]=Re=>A.value=Re)},null,8,["modelValue"]),D7,Ft(S7,{onClick:Te[1]||(Te[1]=Re=>x.value=void 0),active:x.value==null},null,8,["active"]),(Et(!0),en(_r,null,S0(V.value,Re=>(Et(),zc(jj,{onClick:St=>x.value=Re,active:x.value==Re,key:Re,"channel-name":Xe(p).get(Re).title,"thumbnail-url":Xe(p).get(Re).thumbnails.get("default").url,"channel-id":Re},null,8,["onClick","active","channel-name","thumbnail-url","channel-id"]))),128))])]),ae("main",{ref:"videoListElement",class:"overflow-y-scroll flex flex-col",onScroll:Te[2]||(Te[2]=Re=>Xe(rf.throttle)(W,500,{leading:!0})),onScrollend:W},[(Et(!0),en(_r,null,S0(Xe(c),Re=>(Et(),en(_r,null,[ue(Re)?(Et(),zc(p7,{key:Re,video:Xe(_).get(Re),channel:Xe(p).get(Xe(_).get(Re).channelId),onActionDelete:N},null,8,["video","channel"])):Kc("",!0)],64))),256)),ae("button",{onClick:K},"Load more")],544)]),ae("footer",N7,[ae("div",O7,[ae("button",{onClick:se,class:"flex flex-col items-center text-xs w-1/12 hover:bg-button-emph-1"},[ae("span",{class:ai([{"icon-active":P.value.inbox},"material-symbols-sharp icon-xs"])},"inbox",2),M7]),ae("button",{onClick:j,class:"flex flex-col items-center text-xs w-1/12 hover:bg-button-emph-1"},[ae("span",{class:ai([{"icon-active":P.value.all},"material-symbols-sharp icon-xs"])},"subscriptions",2),V7])]),ae("div",{class:ai(["status-bar",I.value?"open":""])}," I am a status bar. ",2)])]))}});const F7=gi(L7,[["__scopeId","data-v-455e6b8e"]]),Lx=J5({history:p5("/"),routes:[{path:"/",name:"home",component:sj},{path:"/login",name:"login",component:xj},{path:"/app",name:"app",component:hj,meta:{requiresAuthentication:!0,requiresAuthorization:!0},children:[{path:"",name:"main",component:F7},{path:"authorize",name:"authorize",component:Kj,meta:{requiresAuthorization:!1}}]}]});Lx.beforeEach(async n=>{if(n.meta.requiresAuthentication&&!await zd())return{path:"/login",query:{redirect:n.fullPath}};if(n.meta.requiresAuthorization){const e=cp(),t=await zd(),r=await fa(Dr(e,"users",t.uid));if(!r.data())return{path:"/app/authorize"};if(!r.data().authorized)return{path:"/app/authorize"}}});var Fx={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.serialize=n.parse=n.MultipleFractionsError=n.InvalidDurationError=void 0;const e={allowMultipleFractions:!0},t=[{unit:"years",symbol:"Y"},{unit:"months",symbol:"M"},{unit:"weeks",symbol:"W"},{unit:"days",symbol:"D"},{unit:"hours",symbol:"H"},{unit:"minutes",symbol:"M"},{unit:"seconds",symbol:"S"}],r=(h,f)=>`((?<${h}>-?\\d*[\\.,]?\\d+)${f})?`,i=new RegExp(["(?<negative>-)?P",r("years","Y"),r("months","M"),r("weeks","W"),r("days","D"),"(T",r("hours","H"),r("minutes","M"),r("seconds","S"),")?"].join(""));function s(h){if(!(h===""||h===void 0||h===null))return parseFloat(h.replace(",","."))}n.InvalidDurationError=new Error("Invalid duration"),n.MultipleFractionsError=new Error("Multiple fractions specified");function o(h,f=e){const p=i.exec(h);if(!p||!p.groups)throw n.InvalidDurationError;let _=!0,I=0;const A={};for(const{unit:x}of t)if(p.groups[x]&&(_=!1,A[x]=s(p.groups[x]),!f.allowMultipleFractions&&!Number.isInteger(A[x])&&(I++,I>1)))throw n.MultipleFractionsError;if(_)throw n.InvalidDurationError;const P=A;return p.groups.negative&&(P.negative=!0),P}n.parse=o;const c=(h,f)=>{if(!h)return;let p=h.toString();const _=p.indexOf("e");if(_>-1){const I=parseInt(p.slice(_+2),10);p=h.toFixed(I+_-2)}return p+f};function u(h){return!h.years&&!h.months&&!h.weeks&&!h.days&&!h.hours&&!h.minutes&&!h.seconds?"PT0S":[h.negative&&"-","P",c(h.years,"Y"),c(h.months,"M"),c(h.weeks,"W"),c(h.days,"D"),(h.hours||h.minutes||h.seconds)&&"T",c(h.hours,"H"),c(h.minutes,"M"),c(h.seconds,"S")].filter(Boolean).join("")}n.serialize=u})(Fx);var Yc,xa,Jc,Vm,Xc,Lm;class U7{constructor(e){xl(this,Jc);xl(this,Xc);xl(this,Yc,!1);xl(this,xa,void 0);bg(this,xa,e)}async init(){await new Promise((e,t)=>{(function r(){if(console.log("[INFO]: Checking if gapi script is already loaded."),typeof window.gapi>"u")setTimeout(r,500);else{console.log("[INFO]: gapi script loaded successfully."),e(null);return}})()}),console.log("[INFO]: Load gapi client."),await new Promise((e,t)=>{gapi.load("client",{callback:e,onerror:t})}),console.log("[INFO]: Init gapi client."),await gapi.client.init({apiKey:"AIzaSyDv-pdQo5kNXUmQkrsGKe7NDXyKXFxpaco"}).then(function(){console.log("[INFO]: Load YouTube API into gapi."),gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")}),await _h(this,xa).init(),bg(this,Yc,!0)}getInitOkay(){return _h(this,Yc)}async retryAfterGettingToken(e,t,...r){try{await _h(this,xa).getToken(e)}catch(i){throw i instanceof q7?alert("Please complete the authorization."):i instanceof W7?alert("Access was denied."):alert("Something has gone wrong, please try again later."),i}return t(...r)}async getPlaylistVideos(e,t=1/0,r=new Date(0)){try{var i=[],s=0,o=Date.now(),c=!1,u="";e:for(;;){const f=await gapi.client.youtube.playlistItems.list({part:["snippet,contentDetails"],maxResults:50,playlistId:e,fields:"nextPageToken,pageInfo(totalResults),items(snippet(publishedAt,title,description,thumbnails,resourceId(videoId)))",pageToken:u});for(var h of f.result.items){if(s>=t||new Date(h.snippet.publishedAt)<r)break e;i.push({publishedAt:new Date(h.snippet.publishedAt),title:h.snippet.title,description:h.snippet.description,thumbnails:h.snippet.thumbnails,videoId:h.snippet.resourceId.videoId,duration:void 0}),s++}if("nextPageToken"in f.result)u=f.result.nextPageToken;else break}return i}catch(f){return await this.retryAfterGettingToken(f,this.getPlaylistVideos,e,t)}}async getSubscriptions(e=!1){var t=await kl(this,Jc,Vm).call(this);if(e){var r=await kl(this,Xc,Lm).call(this,Array.from(t.keys()));for(var i of t.keys())t.get(i).uploadsPlaylist=r[i]}return t}async getUploadsFromActivities(e,t,r,i=1/0){try{var s=new Array,o=0,c="";e:for(;;){const h=await gapi.client.youtube.activities.list({part:["snippet,contentDetails"],maxResults:50,channelId:e,publishedBefore:t.toISOString(),publishedAfter:r.toISOString(),fields:"nextPageToken,items(snippet(publishedAt,type),contentDetails(upload(videoId)))",pageToken:c});for(var u of h.result.items)if(u.snippet.type==="upload"){if(o>=i)break e;s.push({videoId:u.contentDetails.upload.videoId,publishedAt:new Date(u.snippet.publishedAt)}),o++}if("nextPageToken"in h.result)c=h.result.nextPageToken;else break}return s}catch(h){return await this.retryAfterGettingToken(h,this.getUploadsFromActivities,e,t,r,i)}}async getVideos(e){try{for(var t=new Map,r=0;r<e.length;){const u=await gapi.client.youtube.videos.list({part:["contentDetails","statistics","snippet"],maxResults:50,id:e.slice(r,r+50),fields:"nextPageToken,items(id,snippet(publishedAt,channelId,title,description,thumbnails),contentDetails(duration),statistics(viewCount))"});r+=u.result.items.length;for(var i of u.result.items){var s=Fx.parse(i.contentDetails.duration),o="";o=(s.seconds?s.seconds.toString().padStart(2,"0"):"00")+o,o=(s.minutes?s.minutes.toString().padStart(2,"0"):"00")+":"+o,o=(s.hours?s.hours.toString().padStart(2,"0"):"00")+":"+o,o=(s.days?s.days.toString():"0")+":"+o,o=o.replace(/(^[0:]*)(?=[0-9:]{4,}$)/g,"");var c=new Map;c.set("default",{url:i.snippet.thumbnails.default.url}),c.set("medium",{url:i.snippet.thumbnails.medium.url}),c.set("high",{url:i.snippet.thumbnails.high.url}),t.set(i.id,{videoId:i.id,channelId:i.snippet.channelId,title:i.snippet.title,publishedAt:new Date(i.snippet.publishedAt),duration:o,viewCount:Number(i.statistics.viewCount),thumbnails:c})}}return t}catch(u){return await this.retryAfterGettingToken(u,this.getVideos,e)}}async getSubscriptionFeedVideos(e,t,r){var i=new Array,s=e.map(c=>this.getUploadsFromActivities(c,t,r));const o=(await Promise.all(s)).flat();return o.sort((c,u)=>u.publishedAt.getTime()-c.publishedAt.getTime()),i=o.map(c=>c.videoId),i}}Yc=new WeakMap,xa=new WeakMap,Jc=new WeakSet,Vm=async function(){try{for(var e=new Map,t=!1,r="";!t;){const c=await gapi.client.youtube.subscriptions.list({part:["snippet"],maxResults:50,mine:!0,fields:"nextPageToken,pageInfo(totalResults),items(snippet(title,description,resourceId(channelId),thumbnails))",pageToken:r});for(var i of c.result.items){var s=i.snippet.resourceId.channelId,o=new Map;o.set("default",{url:i.snippet.thumbnails.default.url}),o.set("medium",{url:i.snippet.thumbnails.medium.url}),o.set("high",{url:i.snippet.thumbnails.high.url}),e.set(s,{channelId:s,title:i.snippet.title,description:i.snippet.description,thumbnails:o})}"nextPageToken"in c.result?r=c.result.nextPageToken:t=!0}return e}catch(c){return await this.retryAfterGettingToken(c,kl(this,Jc,Vm))}},Xc=new WeakSet,Lm=async function(e){try{for(var t=new Map,r=e.length,i=0;i<r;){const c=await gapi.client.youtube.channels.list({part:["contentDetails"],id:e.slice(i,i+50),maxResults:50,fields:"items(id,contentDetails(relatedPlaylists(uploads)))"});i+=c.result.items.length;for(var s of c.result.items){var o=s.id;t.set(o,s.contentDetails.relatedPlaylists.uploads)}}return t}catch(c){return await this.retryAfterGettingToken(c,kl(this,Xc,Lm),e)}};class B7{async init(){}async getToken(e){throw new Error("getToken method must be implemented in derived classes.")}}class $7 extends B7{async init(){}async getToken(e){const r=await(await zd()).getIdToken(!0);var i="http://localhost:5000/",s=new URL("/get_token",i);const o=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:r})});if(o.ok){if(o.redirected)throw console.log(o),window.location.href=o.url,new u_("Redirected "+o.status+": "+o.url)}else throw console.error(o),new u_("Response was not ok: "+o.status+" "+o.statusText);const c=await o.json();if("token"in c)gapi.client.setToken({access_token:c.token});else throw console.error(o),console.log(c),new u_("Response invalid.")}}class u_ extends Error{constructor(e){super(e),this.name="RequestError"}}class W7 extends Error{constructor(e){super(e),this.name="AccessDeniedError"}}class q7 extends Error{constructor(e){super(e),this.name="BusyError"}}const Zv=oK(Y3);Zv.use(Lx);Zv.use(G3,{firebaseApp:eP,modules:[H3()]});Zv.mount("#app");const z7=new $7,ad=new U7(z7);ad.init();function eb(n){}"indexedDB"in window||console.error("This browser doesn't support IndexedDB!");
