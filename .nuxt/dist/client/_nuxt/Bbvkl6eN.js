import{d as f,t as p,v as u,x as t,B as L,y as d,h as b,H as M,I as C,J as A,z as m,K as g,m as j,r as _,o as E}from"./BiEdBPzq.js";const S={class:"bg-white rounded-lg shadow-lg p-6 text-center"},D={class:"text-red-500 text-lg mb-4"},z=f({__name:"ErrorMessage",props:{message:{}},emits:["retry"],setup(a){return(n,s)=>(u(),p("div",S,[t("div",D,[s[1]||(s[1]=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-10 w-10 mx-auto mb-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})],-1)),L(" "+d(n.message||"Something went wrong"),1)]),t("button",{onClick:s[0]||(s[0]=r=>n.$emit("retry")),class:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"}," Try Again ")]))}}),I={class:"flex justify-center items-center py-12"},N=f({__name:"LoadingSpinner",setup(a){return(n,s)=>(u(),p("div",I,s[0]||(s[0]=[t("div",{class:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"},null,-1)])))}});/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),P=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,s,r)=>r?r.toUpperCase():s.toLowerCase()),B=a=>{const n=P(a);return n.charAt(0).toUpperCase()+n.slice(1)},H=(...a)=>a.filter((n,s,r)=>!!n&&n.trim()!==""&&r.indexOf(n)===s).join(" ").trim();/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=({size:a,strokeWidth:n=2,absoluteStrokeWidth:s,color:r,iconNode:o,name:e,class:l,...c},{slots:i})=>b("svg",{...v,width:a||v.width,height:a||v.height,stroke:r||v.stroke,"stroke-width":s?Number(n)*24/Number(a):n,class:H("lucide",...e?[`lucide-${k(B(e))}-icon`,`lucide-${k(e)}`]:["lucide-icon"]),...c},[...o.map(w=>b(...w)),...i.default?[i.default()]:[]]);/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(a,n)=>(s,{slots:r})=>b(U,{...s,iconNode:n,name:a},r);/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=h("cloud-fog",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]]);/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=h("cloud-lightning",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=h("cloud-rain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=h("cloud-snow",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M8 19h.01",key:"puxtts"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 21h.01",key:"h35vbk"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M16 19h.01",key:"1vcnzz"}]]);/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=h("cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=h("droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=h("gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=h("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=h("wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]),Y={class:"bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto"},Z={class:"p-6 text-center relative"},G={class:"absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-sm text-white backdrop-blur-sm"},J={class:"text-2xl font-bold text-white mt-2"},Q={key:0,class:"text-blue-100 text-sm"},X={class:"relative px-6 pb-8 pt-2 text-center"},ee={class:"flex justify-center mb-4"},te={class:"mb-6"},oe={class:"flex items-center justify-center"},se={class:"text-7xl font-bold text-white tracking-tighter"},ne={class:"text-2xl font-medium text-white/90 mt-2"},re={class:"text-sm text-blue-100 mt-2"},ae={class:"bg-white/10 backdrop-blur-md p-4 grid grid-cols-2 gap-3 text-white"},ie={class:"flex items-center p-3 rounded-xl bg-white/10"},ce={class:"p-2 rounded-lg bg-blue-500/30 mr-3"},de={class:"font-semibold"},le={class:"flex items-center p-3 rounded-xl bg-white/10"},ue={class:"p-2 rounded-lg bg-blue-500/30 mr-3"},he={class:"font-semibold"},pe={class:"flex items-center p-3 rounded-xl bg-white/10"},me={class:"p-2 rounded-lg bg-blue-500/30 mr-3"},we={class:"font-semibold"},ge={class:"flex items-center p-3 rounded-xl bg-white/10"},ve={class:"p-2 rounded-lg bg-blue-500/30 mr-3"},fe={class:"font-semibold"},ye=f({__name:"Dashboard",props:{weather:{}},setup(a){const n=o=>{const e={weekday:"long",month:"short",day:"numeric"};return new Date(o).toLocaleDateString("en-US",e)},s=()=>new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}),r=o=>{const e=o.toLowerCase();return e.includes("rain")||e.includes("drizzle")?x:e.includes("cloud")?K:e.includes("snow")||e.includes("ice")?q:e.includes("storm")||e.includes("thunder")?T:e.includes("fog")||e.includes("mist")||e.includes("haze")?W:V};return(o,e)=>{var l,c;return u(),p("div",Y,[t("div",Z,[t("div",G,d(s()),1),t("h2",J,d(((l=o.weather.location)==null?void 0:l.name)||"Your Location"),1),(c=o.weather.location)!=null&&c.region?(u(),p("p",Q,d(o.weather.location.region)+", "+d(o.weather.location.country),1)):M("",!0)]),t("div",X,[t("div",ee,[(u(),C(A(r(o.weather.current.condition)),{class:"h-16 w-16 text-white"}))]),t("div",te,[t("div",oe,[t("span",se,d(Math.round(o.weather.current.temp)),1),e[0]||(e[0]=t("span",{class:"text-5xl font-light text-white ml-1"},"°",-1))]),t("div",ne,d(o.weather.current.condition),1),t("div",re,d(n(o.weather.current.date)),1)])]),t("div",ae,[t("div",ie,[t("div",ce,[m(g(F),{class:"h-5 w-5"})]),t("div",null,[e[1]||(e[1]=t("div",{class:"text-xs text-blue-100"},"Wind",-1)),t("div",de,d(o.weather.current.wind)+" mph",1)])]),t("div",le,[t("div",ue,[m(g(O),{class:"h-5 w-5"})]),t("div",null,[e[2]||(e[2]=t("div",{class:"text-xs text-blue-100"},"Humidity",-1)),t("div",he,d(o.weather.current.humidity)+"%",1)])]),t("div",pe,[t("div",me,[m(g(x),{class:"h-5 w-5"})]),t("div",null,[e[3]||(e[3]=t("div",{class:"text-xs text-blue-100"},"Precipitation",-1)),t("div",we,d(o.weather.current.precipitation)+" in",1)])]),t("div",ge,[t("div",ve,[m(g(R),{class:"h-5 w-5"})]),t("div",null,[e[4]||(e[4]=t("div",{class:"text-xs text-blue-100"},"Pressure",-1)),t("div",fe,d(o.weather.current.pressure)+" hPa",1)])])])])}}}),_e=()=>({getLocation:()=>new Promise((n,s)=>{if(!navigator.geolocation){s(new Error("Geolocation is not supported by your browser"));return}navigator.geolocation.getCurrentPosition(r=>{const o={latitude:r.coords.latitude,longitude:r.coords.longitude};fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${o.latitude}&lon=${o.longitude}`).then(e=>e.json()).then(e=>{const l=e.address.city||e.address.town||e.address.village||e.address.municipality||e.address.county||"Unknown",c=e.address.state||e.address.province||"Unknown";n({...o,city:`${l}, ${c}`})}).catch(()=>{n(o)})},r=>{let o;switch(r.code){case r.PERMISSION_DENIED:o="Location access is required to fetch weather data";break;case r.POSITION_UNAVAILABLE:o="Location information is unavailable";break;case r.TIMEOUT:o="Request to get location timed out";break;default:o="An unknown error occurred"}s(new Error(o))})})}),be=()=>{const a=j();return{fetchWeather:async(s,r,o)=>{try{const l=`https://api.weatherapi.com/v1/current.json?key=${a.public.weatherApiKey||"3d9d6b00173f4017a5f152806252904"}&q=${s},${r}`,c=await fetch(l);if(!c.ok)throw new Error("Weather data unavailable");const i=await c.json();return console.log(i),{current:{temp:i.current.temp_c,condition:i.current.condition.text,date:new Date,humidity:i.current.humidity,wind:i.current.wind_mph,precipitation:i.current.precip_in,pressure:i.current.pressure_mb},location:{name:i.location.name,region:i.location.region,country:i.location.country}}}catch(e){throw console.error("Error fetching weather:",e),new Error("Failed to fetch weather data")}}}},ke={class:"max-w-md w-full"},xe={key:0,class:"w-full"},Me={key:1,class:"w-full flex justify-center"},$e=f({__name:"index",setup(a){const n=_(!0),s=_(null),r=_(null),{getLocation:o}=_e(),{fetchWeather:e}=be(),l=async()=>{n.value=!0,s.value=null;try{const{latitude:c,longitude:i,city:w}=await o(),y=await e(c,i,w||"");r.value=y}catch(c){c instanceof Error?s.value=c.message:s.value="Failed to fetch weather data"}finally{n.value=!1}};return E(l),(c,i)=>{const w=z,y=N,$=ye;return u(),p("div",ke,[s.value?(u(),p("div",xe,[m(w,{message:s.value,onRetry:l},null,8,["message"])])):n.value?(u(),p("div",Me,[m(y)])):r.value?(u(),C($,{key:2,weather:r.value},null,8,["weather"])):M("",!0)])}}});export{$e as default};
