import{_ as e,Y as t,r as a,b as i,c as s,w as l,i as n,aN as r,K as o,d,e as u,f as c,j as p,o as h,l as m,m as f,J as _,x as g,p as y,q as b,F as D,t as q}from"./index-CTufusbk.js";import{_ as C}from"./uni-stat-breadcrumb.hcid91PT.js";import{_ as x}from"./uni-data-select.BSOJnljY.js";import{_ as k}from"./uni-stat-tabs.l-rdimJn.js";import{_ as $}from"./qiun-data-charts.DmZlK_RP.js";import{_ as V}from"./uni-pagination.BD5KDJr5.js";import{s as w,d as v,g as T,b as M,h as j,m as z}from"./util.jfAKteEU.js";import"./uni-tooltip.CS5MNpjh.js";const S=e({data:()=>({query:{dimension:"day",appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:0,tableData:[],chartData:{},field:"new_user",fields:[{_id:"new_user",name:"新增留存",tooltip:"指定时间新增（即首次访问应用）用户，在之后的第N天，再次访问应用的用户数占比"},{_id:"active_user",name:"活跃留存",tooltip:"指定时间活跃（即访问应用）用户，在之后的第N天，再次访问应用的用户数占比"}],key:1,channelData:[],errorMessage:""}),computed:{fieldsMap(){return function(e=[{title:"新增用户",field:"new_user_count",stat:0}]){let t=[{title:"日期",field:"start_time",tooltip:"",formatter:"-",stat:-1}];e&&t.push(...e);const a=[1,2,3,4,5,6,7,14,30].map((t=>({title:`${t}天后`,field:`d_${t}`,computed:`d_${t}/${e[0].field}`,formatter:"%",tooltip:""})));return t=t.concat(a),t}([{title:"active_user"===this.field?"活跃用户":"新增用户",field:`${this.field}_count`,stat:0}])},fieldName(){let e="";return this.fields.forEach((t=>{t._id===this.field&&(e=t.name)})),e},keyName(){return this.keys.forEach((e=>{if(e._id===this.key)return e.name}))},keys:()=>[1,2,3,4,5,6,7,14,30].map((e=>({_id:e,name:`${e}天后`}))),channelQuery(){const e=this.query.platform_id;return w({platform_id:e})},versionQuery(){const{appid:e,uni_platform:t}=this.query;return w({appid:e,uni_platform:t})}},created(){this.debounceGet=v((()=>{this.getAllData(this.query)}),300),this.getChannelData()},watch:{query:{deep:!0,handler(e){this.options.pageCurrent=1,this.debounceGet()}},key(){this.debounceGet()},field(){this.debounceGet()}},methods:{useDatetimePicker(){this.currentDateTab=-1},changeAppid(e){this.getChannelData(e,!1)},changePlatform(e,t,a,i){this.getChannelData(null,e),this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange(e,t){this.currentDateTab=t;const a=T(e),i=T(0)-1;this.query.start_time=[a,i]},changePageCurrent(e){this.options.pageCurrent=e.current,this.getTabelData(this.query)},changePageSize(e){this.options.pageSize=e,this.options.pageCurrent=1,this.getTabelData(this.query)},stringifyField(e,t,a){t&&(e=e.filter((e=>e.field===t))),a&&(e=e.filter((e=>e.field&&e.hasOwnProperty(a))));return e.map((e=>-1===e.stat?e.field:0===e.stat?`${e.field} as ${"temp_"+e.field}`:`retention.${this.field}.${e.field}.user_count as ${"temp_"+e.field}`)).join()},createStr(e="user_count",t,a,i){const s=t||[1,2,3,4,5,6,7,14,30],l=this.fields.map((e=>e._id));a=a||l;const n=s.map((t=>a.map((a=>`retention.${a}.${"d_"+t}.${e} as ${"d_"+t}`))));i&&n.push(i);return n.join()},getAllData(e){e.appid?(this.errorMessage="",this.getChartData(e,this.key,this.keyName),this.getTabelData(e)):this.errorMessage="请先选择应用"},getChartData(e,a=this.key,i="访问人数"){this.options,e=w(e,null,["uni_platform"]),this.createStr("user_count",[a],[this.field]);t.database().collection("uni-stat-result").where(e).field(`${this.stringifyField(this.fieldsMap,`d_${a}`)}, start_time`).groupBy("start_time").groupField(M(this.fieldsMap,`d_${a}`)).orderBy("start_time","asc").get({getCount:!0}).then((e=>{let{count:t,data:i}=e.result;const s={categories:[],series:[{name:`${a}天后${this.fieldName}`,data:[]}]};for(const l of i){const e=j(l.start_time,"day"),t=l[`d_${a}`];s.series[0].data.push(t),s.categories.push(e)}this.chartData=s})).catch((e=>{console.error(e)})).finally((()=>{this.loading=!1}))},getTabelData(e){const{pageCurrent:a}=this.options;e=w(e,null,["uni_platform"]);const i=this.field+"_count";this.createStr("user_rate","",[this.field],i),this.loading=!0;t.database().collection("uni-stat-result").where(e).field(this.stringifyField(this.fieldsMap)).groupBy("start_time").groupField(M(this.fieldsMap)).orderBy("start_time","desc").skip((a-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((e=>{const{count:t,data:a}=e.result;for(const i of a)z(this.fieldsMap,i,i);this.options.total=t,this.tableData=[],this.tableData=a})).catch((e=>{console.error(e)})).finally((()=>{this.loading=!1}))},getChannelData(e,a){this.query.channel_id="";const i=t.database(),s={};(e=e||this.query.appid)&&(s.appid=e),(a=a||this.query.platform_id)&&(s.platform_id=a);let l=i.collection("uni-stat-app-platforms").field("_id, name").getTemp(),n=i.collection("uni-stat-app-channels").where(s).field("_id, channel_name, create_time, platform_id").getTemp();i.collection(n,l).orderBy("platform_id","asc").get().then((e=>{let t=e.result.data,a=[];if(t.length>0){let e;for(let i in t)e=t[i].channel_name?t[i].channel_name:"默认",t[i].platform_id.length>0&&(e=t[i].platform_id[0].name+"-"+e),a.push({value:t[i]._id,text:e})}this.channelData=a})).catch((e=>{console.error(e)})).finally((()=>{}))}}},[["render",function(e,t,w,v,T,M){const j=a(i("uni-stat-breadcrumb"),C),z=n,S=a(i("uni-data-select"),x),P=a(i("uni-stat-tabs"),k),N=a(i("uni-datetime-picker"),r),U=a(i("qiun-data-charts"),$),F=a(i("uni-icons"),o),A=a(i("uni-th"),d),B=a(i("uni-tr"),u),G=a(i("uni-td"),c),Q=a(i("uni-table"),p),I=a(i("uni-pagination"),V);return h(),s(z,{class:"fix-top-window"},{default:l((()=>[m(z,{class:"uni-header"},{default:l((()=>[m(j,{class:"uni-stat-breadcrumb-on-phone"}),m(z,{class:"uni-group"},{default:l((()=>[m(z,{class:"uni-sub-title hide-on-phone"},{default:l((()=>[f("用户留存趋势分析")])),_:1})])),_:1})])),_:1}),m(z,{class:"uni-container"},{default:l((()=>[m(z,{class:"uni-stat--x flex p-1015"},{default:l((()=>[m(S,{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",onChange:M.changeAppid,modelValue:T.query.appid,"onUpdate:modelValue":t[0]||(t[0]=e=>T.query.appid=e),clear:!1},null,8,["onChange","modelValue"]),m(S,{collection:"opendb-app-versions",where:M.versionQuery,class:"ml-m",field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择",modelValue:T.query.version_id,"onUpdate:modelValue":t[1]||(t[1]=e=>T.query.version_id=e)},null,8,["where","modelValue"])])),_:1}),m(z,{class:"uni-stat--x flex"},{default:l((()=>[m(P,{label:"日期选择",current:T.currentDateTab,mode:"date",yesterday:!1,onChange:M.changeTimeRange},null,8,["current","onChange"]),m(N,{type:"datetimerange",end:(new Date).getTime(),modelValue:T.query.start_time,"onUpdate:modelValue":t[2]||(t[2]=e=>T.query.start_time=e),returnType:"timestamp",clearIcon:!1,class:_(["uni-stat-datetime-picker",{"uni-stat__actived":T.currentDateTab<0&&!!T.query.start_time.length}]),onChange:M.useDatetimePicker},null,8,["end","modelValue","class","onChange"])])),_:1}),m(z,{class:"uni-stat--x"},{default:l((()=>[m(P,{label:"平台选择",type:"boldLine",mode:"platform",modelValue:T.query.platform_id,"onUpdate:modelValue":t[3]||(t[3]=e=>T.query.platform_id=e),onChange:M.changePlatform},null,8,["modelValue","onChange"]),T.query.platform_id&&-1===T.query.platform_id.indexOf("==")?(h(),s(S,{key:0,ref:"version-select",collection:"uni-stat-app-channels",where:M.channelQuery,class:"p-channel",field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择",modelValue:T.query.channel_id,"onUpdate:modelValue":t[4]||(t[4]=e=>T.query.channel_id=e)},null,8,["where","modelValue"])):g("",!0)])),_:1}),m(z,{class:"uni-stat--x mb-m",style:{"padding-top":"0"}},{default:l((()=>[m(z,{class:"mb-m line-bottom"},{default:l((()=>[m(P,{type:"boldLine",tabs:T.fields,modelValue:T.field,"onUpdate:modelValue":t[5]||(t[5]=e=>T.field=e),tooltip:"",style:{"line-height":"40px","margin-bottom":"-17px"}},null,8,["tabs","modelValue"])])),_:1}),m(P,{type:"box",tabs:M.keys,modelValue:T.key,"onUpdate:modelValue":t[6]||(t[6]=e=>T.key=e),class:"mb-l"},null,8,["tabs","modelValue"]),m(z,{class:"p-m"},{default:l((()=>[m(z,{class:"uni-charts-box"},{default:l((()=>[m(U,{type:"area",chartData:T.chartData,echartsH5:"",echartsApp:"",errorMessage:T.errorMessage},null,8,["chartData","errorMessage"])])),_:1})])),_:1})])),_:1}),m(z,{class:"uni-stat--x p-m"},{default:l((()=>[m(z,{class:"uni-tips mb-s flex"},{default:l((()=>[m(F,{type:"info"}),f(" 表格中显示为空，表示留存为 0 或无数据 ")])),_:1}),m(Q,{loading:T.loading,stripe:"",emptyText:e.$t("common.empty")},{default:l((()=>[m(B,{style:{"background-color":"#eee"}},{default:l((()=>[(h(!0),y(D,null,b(M.fieldsMap,((e,t)=>(h(),y(D,{key:t},[e.title?(h(),s(A,{key:t,align:"center"},{default:l((()=>[f(q(e.title),1)])),_:2},1024)):g("",!0)],64)))),128))])),_:1}),(h(!0),y(D,null,b(T.tableData,((e,t)=>(h(),s(B,{key:t},{default:l((()=>[(h(!0),y(D,null,b(M.fieldsMap,((t,a)=>(h(),y(D,{key:a},[t.title?(h(),s(G,{key:a,align:"center",class:_(/[d|w|m]_\d/.test(t.field)&&[e[t.field]?"uni-stat-table-bg":""])},{default:l((()=>[f(q(e[t.field]?e[t.field]:""),1)])),_:2},1032,["class"])):g("",!0)],64)))),128))])),_:2},1024)))),128))])),_:1},8,["loading","emptyText"]),m(z,{class:"uni-pagination-box"},{default:l((()=>[m(I,{"show-icon":"","show-page-size":"","page-size":T.options.pageSize,current:T.options.pageCurrent,total:T.options.total,onChange:M.changePageCurrent,onPageSizeChange:M.changePageSize},null,8,["page-size","current","total","onChange","onPageSizeChange"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-ce939740"]]);export{S as default};
