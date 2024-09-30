import{_ as e,Y as t,r as a,b as n,c as s,w as i,i as r,aN as o,o as l,l as u,m as c,J as d,x as h}from"./index-nI17xpur.js";import{_ as p}from"./uni-stat-breadcrumb.CcLttN9R.js";import{_ as m}from"./uni-data-select.CEFlldzA.js";import{_}from"./uni-stat-tabs.BvK5LJ_i.js";import{_ as g}from"./qiun-data-charts.LvVhLFEC.js";import{_ as f}from"./uni-stat-table.aMK8zDdP.js";import{_ as b}from"./uni-pagination.CVUxf30B.js";import{e as y,s as D,d as C,g as q,a as v,b as w,h as T,m as x}from"./util.W5fjjh3k.js";import"./uni-tooltip.DPTzimuD.js";const k=[{title:"日期",field:"start_time",tooltip:"",formatter:"-"},{title:"日活",field:"active_user_count",tooltip:"选中日期当天的访问用户数"},{title:"周活",field:"week_active_user_count",tooltip:"选中日期所在自然周（包括选中日期在内）的访问用户数"},{title:"日活/周活",field:"active_user_count/week_active_user_count",computed:"active_user_count/week_active_user_count",tooltip:"选中日期的访问用户数占周访问用户数的百分比",formatter:"%"},{title:"月活",field:"month_active_user_count",tooltip:"选中日期所在自然月（包括选中日期在内）的访问用户数"},{title:"日活/月活",field:"active_user_count/month_active_user_count",computed:"active_user_count/month_active_user_count",tooltip:"选中日期的访问用户数占月访问用户数的百分比",formatter:"%"}];const M=e({data:()=>({tableName:"uni-stat-result",fieldsMap:k,query:{dimension:"day",appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:0,currentChartTab:"day",tableData:[],chartData:{},defaultChart:{field:"new_user_count",name:"新增用户"},channelData:[],errorMessage:""}),computed:{chartTabs(){const e=[{_id:"day",name:"日活"},{_id:"week",name:"周活"},{_id:"month",name:"月活"}];return y(this.query.start_time,7)&&e.forEach(((e,t)=>{"month"===e._id?e.disabled=!0:e.disabled=!1})),e},channelQuery(){const e=this.query.platform_id;return D({platform_id:e})},versionQuery(){const{appid:e,uni_platform:t}=this.query;return D({appid:e,uni_platform:t})}},created(){this.debounceGet=C((()=>{this.getAllData(this.query)}),300),this.getChannelData()},watch:{query:{deep:!0,handler(e){this.options.pageCurrent=1,this.debounceGet()}}},methods:{useDatetimePicker(){this.currentDateTab=-1},changeAppid(e){this.getChannelData(e,!1)},changePlatform(e,t,a,n){this.getChannelData(null,e),this.query.version_id=0,this.query.uni_platform=n.code},changeTimeRange(e,t){this.currentDateTab=t;let a,n;a=q(e),n=e?q(0)-1:q(0)+864e5-1,this.query.start_time=[a,n]},changePageCurrent(e){this.options.pageCurrent=e.current,this.getTabelData(this.query)},changePageSize(e){this.options.pageSize=e,this.options.pageCurrent=1,this.getTabelData(this.query)},changeChartTab(e,t,a){this.currentChartTab=e,this.getChartData(this.query,e,a)},getAllData(e){e.appid?(this.errorMessage="",this.getChartData(e,this.currentChartTab),this.getTabelData(e)):this.errorMessage="请先选择应用"},getChartData(e,a,n="日活",s="active_user_count"){const i={categories:[],series:[{name:n,data:[]}]};e=D(e,null,["uni_platform"]);const r=t.database();"day"===a?r.collection(this.tableName).where(e).field(`${v(k,s)}, start_time`).groupBy("start_time").groupField(w(k,s)).orderBy("start_time","asc").get({getCount:!0}).then((e=>{const{count:t,data:a}=e.result;this.chartData=[];for(const n of a){const e=T(n.start_time,"day"),t=n[s];i.series[0].data.push(t),i.categories.push(e)}this.chartData=i})).catch((e=>{console.error(e)})):this.getRangeCountData(e,a).then((e=>{const t=a;"week"===a&&(a="isoWeek");const{count:n,data:r}=e.result;this.chartData=[];for(const o of r){const e=+new Date(o.year,0)+(6048e5*Number(o[a])-1),n=T(e,t),r=o[a+"_"+s];r&&(i.series[0].data.push(r),i.categories.push(n))}this.chartData=i}))},getTabelData(e,a="active_user_count"){const{pageCurrent:n}=this.options;e=D(e,null,["uni_platform"]),this.loading=!0;t.database().collection(this.tableName).where(e).field(`${v(k,a)}, start_time`).groupBy("start_time").groupField(w(k,a)).orderBy("start_time","desc").skip((n-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((t=>{const{count:a,data:n}=t.result;let s=n,i=a,r=[],o=[];this.getRangeCountData(e,"week").then((t=>{const{count:a,data:n}=t.result;r=n,this.getRangeCountData(e,"month").then((e=>{const{count:t,data:a}=e.result;o=a;const n=this.mapWithWeekAndMonth(s,r,o);for(const s of n)x(k,s,s);this.tableData=[],this.options.total=i,this.tableData=n})).finally((()=>{this.loading=!1}))}))})).catch((e=>{console.error(e)}))},getRangeCountData(e,a,n="active_user_count"){"week"===a&&(a="isoWeek"),this.options;return t.database().collection(this.tableName).where(e).field(`${n}, start_time, ${a}(add(new Date(0),start_time), "Asia/Shanghai") as ${a},year(add(new Date(0),start_time), "Asia/Shanghai") as year`).groupBy(`year, ${a}`).groupField(`sum(${n}) as ${a}_${n}`).orderBy(`year asc, ${a} asc`).get({getCount:!0})},mapWithWeekAndMonth(e,t,a,n="active_user_count"){for(const s of e){const e=new Date(s.start_time),i=e.getUTCFullYear(),r=e.getMonth()+1,o=this.getWeekNumber(e);for(const a of t)a.isoWeek===o&&a.year===i&&(s[`isoWeek_${n}`]=a[`week_${n}`]);for(const t of a)t.month===r&&t.year===i&&(s[`month_${n}`]=t[`month_${n}`])}return e},getWeekNumber(e){(e=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))).setUTCDate(e.getUTCDate()+4-(e.getUTCDay()||7));var t=new Date(Date.UTC(e.getUTCFullYear(),0,1));return Math.ceil(((e-t)/864e5+1)/7)},getChannelData(e,a){this.query.channel_id="";const n=t.database(),s={};(e=e||this.query.appid)&&(s.appid=e),(a=a||this.query.platform_id)&&(s.platform_id=a);let i=n.collection("uni-stat-app-platforms").field("_id, name").getTemp(),r=n.collection("uni-stat-app-channels").where(s).field("_id, channel_name, create_time, platform_id").getTemp();n.collection(r,i).orderBy("platform_id","asc").get().then((e=>{let t=e.result.data,a=[];if(t.length>0){let e;for(let n in t)e=t[n].channel_name?t[n].channel_name:"默认",t[n].platform_id.length>0&&(e=t[n].platform_id[0].name+"-"+e),a.push({value:t[n]._id,text:e})}this.channelData=a})).catch((e=>{console.error(e)})).finally((()=>{}))}}},[["render",function(e,t,y,D,C,q){const v=a(n("uni-stat-breadcrumb"),p),w=r,T=a(n("uni-data-select"),m),x=a(n("uni-stat-tabs"),_),k=a(n("uni-datetime-picker"),o),M=a(n("qiun-data-charts"),g),V=a(n("uni-stat-table"),f),$=a(n("uni-pagination"),b);return l(),s(w,{class:"fix-top-window"},{default:i((()=>[u(w,{class:"uni-header"},{default:i((()=>[u(v,{class:"uni-stat-breadcrumb-on-phone"}),u(w,{class:"uni-group"},{default:i((()=>[u(w,{class:"uni-sub-title hide-on-phone"},{default:i((()=>[c("用户活跃度分析")])),_:1})])),_:1})])),_:1}),u(w,{class:"uni-container"},{default:i((()=>[u(w,{class:"uni-stat--x flex p-1015"},{default:i((()=>[u(T,{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",onChange:q.changeAppid,modelValue:C.query.appid,"onUpdate:modelValue":t[0]||(t[0]=e=>C.query.appid=e),clear:!1},null,8,["onChange","modelValue"]),u(T,{collection:"opendb-app-versions",where:q.versionQuery,class:"ml-m",field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择",modelValue:C.query.version_id,"onUpdate:modelValue":t[1]||(t[1]=e=>C.query.version_id=e)},null,8,["where","modelValue"])])),_:1}),u(w,{class:"uni-stat--x flex"},{default:i((()=>[u(x,{label:"日期选择",current:C.currentDateTab,mode:"date",yesterday:!1,onChange:q.changeTimeRange},null,8,["current","onChange"]),u(k,{type:"datetimerange",end:(new Date).getTime(),modelValue:C.query.start_time,"onUpdate:modelValue":t[2]||(t[2]=e=>C.query.start_time=e),returnType:"timestamp",clearIcon:!1,class:d(["uni-stat-datetime-picker",{"uni-stat__actived":C.currentDateTab<0&&!!C.query.start_time.length}]),onChange:q.useDatetimePicker},null,8,["end","modelValue","class","onChange"])])),_:1}),u(w,{class:"uni-stat--x"},{default:i((()=>[u(x,{label:"平台选择",type:"boldLine",mode:"platform",modelValue:C.query.platform_id,"onUpdate:modelValue":t[3]||(t[3]=e=>C.query.platform_id=e),onChange:q.changePlatform},null,8,["modelValue","onChange"]),C.query.platform_id&&-1===C.query.platform_id.indexOf("==")?(l(),s(T,{key:0,ref:"version-select",collection:"uni-stat-app-channels",where:q.channelQuery,class:"p-channel",field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择",modelValue:C.query.channel_id,"onUpdate:modelValue":t[4]||(t[4]=e=>C.query.channel_id=e)},null,8,["where","modelValue"])):h("",!0)])),_:1}),u(w,{class:"uni-stat--x p-m"},{default:i((()=>[u(w,{class:"label-text mb-l"},{default:i((()=>[c(" 趋势图 ")])),_:1}),u(x,{type:"box",tabs:q.chartTabs,class:"mb-l",onChange:q.changeChartTab},null,8,["tabs","onChange"]),u(w,{class:"uni-charts-box"},{default:i((()=>[u(M,{type:"area",chartData:C.chartData,echartsH5:"",echartsApp:"",errorMessage:C.errorMessage},null,8,["chartData","errorMessage"])])),_:1})])),_:1}),u(w,{class:"uni-stat--x p-m"},{default:i((()=>[u(V,{data:C.tableData,filedsMap:C.fieldsMap,loading:C.loading,tooltip:""},null,8,["data","filedsMap","loading"]),u(w,{class:"uni-pagination-box"},{default:i((()=>[u($,{"show-icon":"","show-page-size":"","page-size":C.options.pageSize,current:C.options.pageCurrent,total:C.options.total,onChange:q.changePageCurrent,onPageSizeChange:q.changePageSize},null,8,["page-size","current","total","onChange","onPageSizeChange"])])),_:1})])),_:1})])),_:1})])),_:1})}]]);export{M as default};
