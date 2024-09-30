import{Y as t}from"./index-nI17xpur.js";function e(t){let{fieldsMap:e,data:n,formatter:r=!0}=t,i=JSON.parse(JSON.stringify(n));return i.map((t=>{for(let i in t){let o=e.find((t=>t.field==i));if("object"==typeof o){let{fix:e=0}=o;"number"==typeof o.multiple&&"number"==typeof t[i]&&(t[i]=Number((t[i]*o.multiple).toFixed(e))),r&&o.formatter&&"number"==typeof t[i]&&(","===o.formatter?t[i]=(n=t[i],String(n).replace(/\B(?=(\d{3})+(?!\d))/g,",")):"%"===o.formatter?t[i]=`${(100*t[i]).toFixed(e)}%`:"-"===o.formatter&&(t[i]=l(t[i])))}}var n})),i}function n(t,e,n){let{start_time:r,dimension:i}=e;if(["hour","day"].indexOf(i)>-1){let e,o=[];"hour"===i?e=36e5:"day"===i&&(e=864e5);let a=r[0],s=r[1],u=a;for(o=[a];u+e<=s;)u+=e,o.push(u);let f=[];for(let r=0;r<o.length;r++){let e=o[r],i=t.find(((t,n)=>t.start_time===e));if(i)f.push(i);else{let t={start_time:e};n.map(((e,n)=>{t[e.field]=0})),f.push(t)}}return f}return t}function r(t,e=!1,n=[]){const r=[],i=Object.keys(t),o=t.start_time;i.forEach((i=>{if("time_range"===i||-1!==n.indexOf(i))return;let a=t[i];a&&("string"==typeof a&&a.indexOf(i)>-1?r.push(a):("string"==typeof a&&(a=`"${a}"`),Array.isArray(a)?2===a.length&&i.indexOf("time")>-1?r.push(`${i} >= ${a[0]} && ${i} <= ${a[1]}`):(a=a.map((t=>`${i} == "${t}"`)).join(" || "),a&&r.push(`(${a})`)):e&&"dimension"===i?m(o)?r.push('dimension == "hour"'):a&&'"hour"'!==a?r.push(`${i} == ${a}`):r.push('dimension == "day"'):r.push(`${i} == ${a}`)))}));return r.join(" && ")||{}}function i(t,e={},n,r="",i="value"){const o=[],a=n;t=JSON.parse(JSON.stringify(t));const f=JSON.parse(JSON.stringify(e));for(const l of t){let{field:t,computed:p,formatter:c,disable:m,fix:d}=l;if(!m){const m=(n=a||l).hasOwnProperty(i),h=r+t;if(e){const o=e[h];if(p){const e=p.split("/");let[o,a]=e;o=Number(f[r+o]),a=Number(f[r+a]);const l=u(s(o,a),c,d);m&&t===n.field?n[i]=l:n[t]=l}else if(o){const e=u(o,c,d);m?n.field===t&&(n[i]=e):n[t]=e}}m&&o.push(n)}}return o}function o(t,e,n){e&&(t=t.filter((t=>t.field===e))),n&&(t=t.filter((t=>t.field&&t.hasOwnProperty(n))));return t.map((t=>{let e=[];return t.computed?e=t.computed.split("/"):e.push(t.field),e=e.map((e=>-1===t.stat?e:`${e} as ${"temp_"+e}`)),e.join()})).join()}function a(t,e,n){e&&(t=t.filter((t=>t.field===e))),n&&(t=t.filter((t=>t.field&&t.hasOwnProperty(n))));return t.map((t=>{const e=t.stat;let n=[];return t.computed?n=t.computed.split("/"):n.push(t.field),n=n.map((t=>{if(-1!==e)return`${e||"sum"}(${"temp_"+t}) as ${t}`})),n.filter(Boolean).join()})).filter(Boolean).join()}function s(t,e){return e?t/e:0}function u(t,e=",",n){if("number"!=typeof t)return t;if("%"===e)return t*=100,String(t).indexOf(".")>-1&&(t=t.toFixed(2)),t=t?t+e:t;if("%%"===e)return(t=Number(t)).toFixed(2)+"%";if("-"===e)return f(t,"day");if(":"===e){let n,r,i;t=Math.ceil(t),n=r=i=0;const o=3600,a=60;if(t>=o){n=Math.floor(t/o);const e=t%o;e>=a?(r=Math.floor(e/a),i=e%a):i=e}else o>=t&&t>=a?(r=Math.floor(t/a),i=t%a):i=t;return[n,r,i].map((t=>t<10?"0"+t:t)).join(e)}return","===e?t.toLocaleString():(String(t).indexOf(".")>-1&&(t=Math.abs(t)>1?t.toFixed(n||0):t.toFixed(n||2)),t)}function f(t,e){let n=new Date(t);if("hour"===e){let t=n.getHours();return t=t<10?"0"+t:t,`${t}:00 ~ ${t}:59`}if("week"===e){const t=n.getDate()-n.getDay()+1,e=t+6;let r=new Date(n.setDate(t));r=l(r);let i=new Date(n.setDate(e));return i=l(i),`${r} ~ ${i}`}if("month"===e){let t=new Date(n.getFullYear(),n.getMonth(),1);t=l(t);let e=new Date(n.getFullYear(),n.getMonth()+1,0);return e=l(e),`${t} ~ ${e}`}return l(n)}function l(t,e,n="-"){let r=t;"object"!=typeof r&&(r=new Date(r));const i=r.getFullYear(),o=r.getMonth()+1,a=r.getDate(),s=r.getHours(),u=r.getMinutes(),f=r.getSeconds(),l=[i,p(o),p(a)].join(n),c=[p(s),p(u),p(f)].join(":");return"dateTime"===e?l+" "+c:l}function p(t){return t<10?"0"+t:t}function c(t=0,e=Date.now()){const n=new Date(e);let r=[n.getFullYear(),n.getMonth()+1,n.getDate()].join("/");r+=" 00:00:00";return new Date(r).getTime()-864e5*t}function m(t,e=2){if(!t.length)return!0;const[n,r]=t;return r-n<864e5*e}function d(e=this.query,n="total_devices"){let i;"object"==typeof e&&(e=r(e,!1,["uni_platform"]));return t.database().collection("uni-stat-result").where(e).field(`${n} as temp_${n}, start_time`).groupBy("start_time").groupField(`sum(temp_${n}) as ${n}`).orderBy("start_time","desc").get().then((t=>{const e=t.result.data;return i=e.length&&e[0][n],i=u(i),this.panelData&&this.panelData.forEach((t=>{t.field===n&&(t.value=i)})),Promise.resolve(i)}))}function h(t,e=100){let n=null;return function(...r){n&&clearTimeout(n),n=setTimeout((()=>{t.apply(this,r)}),e)}}const g={};function y(t){for(const n in g)if(g.hasOwnProperty(n)){if(g[n]===t)return n}let e=(window.URL||window.webkitURL).createObjectURL(t);return g[e]=t,e}function $(t,e){let n=[],r=0;for(;e.getTime()-t.getTime()>=0;)n[r]=t.getTime(),t.setDate(t.getDate()+1),r+=1;return n}function w(t){return Object.assign({},t,{type:"native_app",create_env:"uni-stat"})}export{o as a,a as b,d as c,h as d,m as e,u as f,c as g,f as h,w as i,$ as j,y as k,e as l,i as m,n,l as p,r as s};
