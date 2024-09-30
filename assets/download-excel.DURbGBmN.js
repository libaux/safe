import{_ as e,o as t,p as o,L as a,m as n,t as r}from"./index-ChMB-C2t.js";function s(e,t,o){var a,n,r=window,i="application/octet-stream",l=o||i,d=e,c=!t&&!o&&d,h=document.createElement("a"),u=function(e){return String(e)},p=r.Blob||r.MozBlob||r.WebKitBlob||u,f=t||"download";if(p=p.call?p.bind(r):Blob,"true"===String(this)&&(l=(d=[d,l])[0],d=d[1]),c&&c.length<2048&&(f=c.split("/").pop().split("?")[0],h.href=c,-1!==h.href.indexOf(c))){var m=new XMLHttpRequest;return m.open("GET",c,!0),m.responseType="blob",m.onload=function(e){s(e.target.response,f,i)},setTimeout((function(){m.send()}),0),m}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(d)){if(!(d.length>2096103.424&&p!==u))return navigator.msSaveBlob?navigator.msSaveBlob(x(d),f):w(d);l=(d=x(d)).type||i}else if(/([\x80-\xff])/.test(d)){for(var y=0,b=new Uint8Array(d.length),g=b.length;y<g;++y)b[y]=d.charCodeAt(y);d=new p([b],{type:l})}function x(e){for(var t=e.split(/[:;,]/),o=t[1],a=("base64"==t[2]?atob:decodeURIComponent)(t.pop()),n=a.length,r=0,s=new Uint8Array(n);r<n;++r)s[r]=a.charCodeAt(r);return new p([s],{type:o})}function w(e,t){if("download"in h)return h.href=e,h.setAttribute("download",f),h.className="download-js-link",h.innerHTML="downloading...",h.style.display="none",document.body.appendChild(h),setTimeout((function(){h.click(),document.body.removeChild(h),!0===t&&setTimeout((function(){r.URL.revokeObjectURL(h.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,i)),window.open(e)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=e),!0;var o=document.createElement("iframe");document.body.appendChild(o),!t&&/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,i)),o.src=e,setTimeout((function(){document.body.removeChild(o)}),333)}if(a=d instanceof p?d:new p([d],{type:l}),navigator.msSaveBlob)return navigator.msSaveBlob(a,f);if(r.URL)w(r.URL.createObjectURL(a),!0);else{if("string"==typeof a||a.constructor===u)try{return w("data:"+l+";base64,"+r.btoa(a))}catch(v){return w("data:"+l+","+encodeURIComponent(a))}(n=new FileReader).onload=function(e){w(this.result)},n.readAsDataURL(a)}return!0}const i=e({name:"downloadExcel",props:{type:{type:String,default:"xls"},data:{type:Array,required:!1,default:null},fields:{type:Object,default:()=>null},exportFields:{type:Object,default:()=>null},defaultValue:{type:String,required:!1,default:""},header:{default:null},footer:{default:null},name:{type:String,default:"data.xls"},fetch:{type:Function},meta:{type:Array,default:()=>[]},worksheet:{type:String,default:"Sheet1"},beforeGenerate:{type:Function},beforeFinish:{type:Function},escapeCsv:{type:Boolean,default:!0},stringifyLongNum:{type:Boolean,default:!1}},computed:{idName:()=>"export_"+(new Date).getTime(),downloadFields(){return this.fields?this.fields:this.exportFields?this.exportFields:void 0}},methods:{async generate(){"function"==typeof this.beforeGenerate&&await this.beforeGenerate();let e=this.data;if("function"!=typeof this.fetch&&e||(e=await this.fetch()),!e||!e.length)return;let t=this.getProcessedJson(e,this.downloadFields);return"html"===this.type?this.export(this.jsonToXLS(t),this.name.replace(".xls",".html"),"text/html"):"csv"===this.type?this.export(this.jsonToCSV(t),this.name.replace(".xls",".csv"),"application/csv"):this.export(this.jsonToXLS(t),this.name,"application/vnd.ms-excel")},export:async function(e,t,o){let a=this.base64ToBlob(e,o);"function"==typeof this.beforeFinish&&await this.beforeFinish(),s(a,t,o)},jsonToXLS(e){let t="<thead>";const o=Object.keys(e[0]).length;let a=this;const n=this.header||this.$attrs.title;n&&(t+=this.parseExtraData(n,'<tr><th colspan="'+o+'">${data}</th></tr>')),t+="<tr>";for(let r in e[0])t+="<th>"+r+"</th>";return t+="</tr>",t+="</thead>",t+="<tbody>",e.map((function(e,o){t+="<tr>";for(let n in e)t+="<td>"+a.preprocessLongNum(a.valueReformattedForMultilines(e[n]))+"</td>";t+="</tr>"})),t+="</tbody>",null!=this.footer&&(t+="<tfoot>",t+=this.parseExtraData(this.footer,'<tr><td colspan="'+o+'">${data}</td></tr>'),t+="</tfoot>"),'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e<style scoped>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>'.replace("${table}",t).replace("${worksheet}",this.worksheet)},jsonToCSV(e){let t=this;var o=[];const a=this.header||this.$attrs.title;a&&o.push(this.parseExtraData(a,"${data}\r\n"));for(let n in e[0])o.push(n),o.push(",");return o.pop(),o.push("\r\n"),e.map((function(e){for(let a in e){let n=e[a]+"";t.escapeCsv&&(n='="'+n+'"',n.match(/[,"\n]/)&&(n='"'+n.replace(/\"/g,'""')+'"')),o.push(n),o.push(",")}o.pop(),o.push("\r\n")})),null!=this.footer&&o.push(this.parseExtraData(this.footer,"${data}\r\n")),o.join("")},getProcessedJson(e,t){let o=this.getKeys(e,t),a=[],n=this;return e.map((function(e,t){let r={};for(let a in o){let t=o[a];r[a]=n.getValue(t,e)}a.push(r)})),a},getKeys(e,t){if(t)return t;let o={};for(let a in e[0])o[a]=a;return o},parseExtraData(e,t){let o="";if(Array.isArray(e))for(var a=0;a<e.length;a++)e[a]&&(o+=t.replace("${data}",e[a]));else o+=t.replace("${data}",e);return o},getValue(e,t){const o="object"!=typeof e?e:e.field;let a="string"!=typeof o?[]:o.split("."),n=this.defaultValue;return n=o?a.length>1?this.getValueFromNestedItem(t,a):this.parseValue(t[o]):t,e.hasOwnProperty("callback")&&(n=this.getValueFromCallback(n,e.callback)),n},valueReformattedForMultilines:e=>"string"==typeof e?e.replace(/\n/gi,"<br/>"):e,preprocessLongNum(e){if(this.stringifyLongNum){if(String(e).startsWith("0x"))return e;if(!isNaN(e)&&""!=e&&(e>99999999999||e<1e-13))return'="'+e+'"'}return e},getValueFromNestedItem(e,t){let o=e;for(let a of t)o&&(o=o[a]);return this.parseValue(o)},getValueFromCallback(e,t){if("function"!=typeof t)return this.defaultValue;const o=t(e);return this.parseValue(o)},parseValue(e){return e||0===e||"boolean"==typeof e?e:this.defaultValue},base64ToBlob(e,t){let o=window.btoa(window.unescape(encodeURIComponent(e))),a=atob(o),n=a.length,r=new Uint8ClampedArray(n);for(;n--;)r[n]=a.charCodeAt(n);return new Blob([r],{type:t})}}},[["render",function(e,s,i,l,d,c){return t(),o("div",{id:c.idName,onClick:s[0]||(s[0]=(...e)=>c.generate&&c.generate(...e))},[a(e.$slots,"default",{},(()=>[n(" Download "+r(i.name),1)]))],8,["id"])}]]);export{i as _};
