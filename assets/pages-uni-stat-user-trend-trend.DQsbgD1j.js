import{_ as e,Y as t,n as a,r as i,b as s,c as n,w as l,i as r,aN as o,o as u,l as d,m as c,J as h,x as p}from"./index-nI17xpur.js";import{_ as m}from"./uni-stat-breadcrumb.CcLttN9R.js";import{_ as g}from"./uni-data-select.CEFlldzA.js";import{_}from"./uni-stat-tabs.BvK5LJ_i.js";import{_ as f}from"./uni-stat-panel.DoJMShJL.js";import{_ as b}from"./qiun-data-charts.LvVhLFEC.js";import{_ as y}from"./uni-stat-table.aMK8zDdP.js";import{_ as D}from"./uni-pagination.CVUxf30B.js";import{s as q,d as v,g as C,a as T,b as x,m as w,h as V,c as P}from"./util.W5fjjh3k.js";import"./uni-tooltip.DPTzimuD.js";const S=[{title:"日期",field:"start_time",tooltip:"",formatter:"",stat:-1},{title:"新增用户",field:"new_user_count",tooltip:"首次访问应用的用户数（以设备为判断标准，去重）",value:0},{title:"活跃用户",field:"active_user_count",tooltip:"访问过应用内任意页面的总用户数（去重）",value:0},{title:"次均停留时长",field:"avg_user_session_time",formatter:":",tooltip:"平均每次打开应用停留在应用内的总时长，即应用停留总时长/启动次数",value:0,stat:"avg"},{title:"人均停留时长 ",field:"avg_user_time",formatter:":",tooltip:"平均每个用户停留在应用内的总时长，即应用停留总时长/活跃用户",value:0,stat:"avg"},{title:"总用户数",field:"total_users",tooltip:"从添加统计到当前选择时间的总用户数（去重）",value:0}];const z=e({data:()=>({fieldsMap:S,query:{dimension:"hour",appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:1,currentDimensionTab:0,tableData:[],panelData:S.filter((e=>e.hasOwnProperty("value"))),chartData:{},chartTab:"new_user_count",channelData:[],tabName:"新增用户",errorMessage:""}),computed:{chartTabs(){const e=[];return S.forEach((t=>{const{field:a,title:i}=t,s=t.hasOwnProperty("value");a&&i&&s&&e.push({_id:a,name:i})})),e},dimensionTabs(){const e=[{_id:"hour",name:"按时"},{_id:"day",name:"按日"},{_id:"week",name:"按周"},{_id:"month",name:"按月"}];return this.getDays()?(this.query.dimension="day",e.forEach(((e,t)=>{"hour"===e._id?e.disabled=!0:e.disabled=!1})),this.currentDimensionTab=1):(this.query.dimension="hour",e.forEach(((e,t)=>{"hour"===e._id?e.disabled=!1:e.disabled=!0})),this.currentDimensionTab=0),e},channelQuery(){const e=this.query.platform_id;return q({platform_id:e})},versionQuery(){const{appid:e,uni_platform:t}=this.query;return q({appid:e,uni_platform:t})}},created(){this.debounceGet=v((()=>{this.getAllData(this.query)}),300),this.getChannelData()},watch:{query:{deep:!0,handler(e){this.debounceGet()}}},methods:{getDays(){if(!this.query.start_time.length)return!0;const[e,t]=this.query.start_time;return t-e>=864e5},useDatetimePicker(){this.currentDateTab=-1},changeAppid(e){this.getChannelData(e,!1)},changePlatform(e,t,a,i){this.getChannelData(null,e),this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange(e,t){this.currentDateTab=t;let a,i;a=C(e),i=e?C(0)-1:C(0)+864e5-1,this.query.start_time=[a,i]},changePageCurrent(e){this.options.pageCurrent=e.current,this.getTabelData(this.query)},changePageSize(e){this.options.pageSize=e,this.getTabelData(this.query)},changeChartTab(e,t,a){this.tabName=a,this.getChartData(this.query,e,a)},getAllData(e){e.appid?(this.errorMessage="",this.getPanelData(),this.getChartData(e,this.chartTab,this.tabName),this.getTabelData(e)):this.errorMessage="请先选择应用"},getChartData(e,a=this.chartTab,i="新增用户"){e=q(e,!0,["uni_platform"]);const s=this.query.dimension;t.database().collection("uni-stat-result").where(e).field(`${T(S,a)}, start_time`).groupBy("start_time").groupField(x(S,a)).orderBy("start_time","asc").get({getCount:!0}).then((e=>{const{count:t,data:n}=e.result,l={categories:[],series:[{name:i,data:[]}]};let r=S.filter((e=>e.field===a));r=JSON.parse(JSON.stringify(r)),delete r[0].value,r[0].formatter="";for(const i of n){w(r,i,i);const e=V(i.start_time,s);let t=i[a];l.series[0].data.push(t),l.categories.push(e)}this.chartData=l})).catch((e=>{console.error(e)})).finally((()=>{this.loading=!1}))},getTabelData(e){const{pageCurrent:a}=this.options;e=q(e,!0,["uni_platform"]),this.options.pageCurrent=1,this.loading=!0;t.database().collection("uni-stat-result").where(e).field(T(S)).groupBy("start_time").groupField(x(S)).orderBy("start_time","desc").skip((a-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((e=>{const{count:t,data:a}=e.result;for(const i of a){let e=i.start_time;if(e){const t=this.query.dimension;i.start_time=V(e,t)}w(S,i,i)}this.tableData=[],this.options.total=t,this.tableData=a})).catch((e=>{console.error(e)})).finally((()=>{this.loading=!1}))},getPanelData(){let e=JSON.parse(JSON.stringify(this.query));e.dimension="day";let a=q(e,null,["uni_platform"]);t.database().collection("uni-stat-result").where(a).field(`${T(S)},stat_date`).groupBy("appid").groupField(x(S)).orderBy("stat_date","desc").get().then((e=>{const t=e.result.data[0];t&&(t.total_users=0),this.panelData=[],this.panelData=w(S,t),P.call(this,a,"total_users")}))},navTo(e){a({url:`/pages/uni-stat/overview/overview?id=${e}`})},getChannelData(e,a){this.query.channel_id="";const i=t.database(),s={};(e=e||this.query.appid)&&(s.appid=e),(a=a||this.query.platform_id)&&(s.platform_id=a);let n=i.collection("uni-stat-app-platforms").field("_id, name").getTemp(),l=i.collection("uni-stat-app-channels").where(s).field("_id, channel_name, create_time, platform_id").getTemp();i.collection(l,n).orderBy("platform_id","asc").get().then((e=>{let t=e.result.data,a=[];if(t.length>0){let e;for(let i in t)e=t[i].channel_name?t[i].channel_name:"默认",t[i].platform_id.length>0&&(e=t[i].platform_id[0].name+"-"+e),a.push({value:t[i]._id,text:e})}this.channelData=a})).catch((e=>{console.error(e)})).finally((()=>{}))}}},[["render",function(e,t,a,q,v,C){const T=i(s("uni-stat-breadcrumb"),m),x=r,w=i(s("uni-data-select"),g),V=i(s("uni-stat-tabs"),_),P=i(s("uni-datetime-picker"),o),S=i(s("uni-stat-panel"),f),z=i(s("qiun-data-charts"),b),j=i(s("uni-stat-table"),y),M=i(s("uni-pagination"),D);return u(),n(x,{class:"fix-top-window"},{default:l((()=>[d(x,{class:"uni-header"},{default:l((()=>[d(T,{class:"uni-stat-breadcrumb-on-phone"}),d(x,{class:"uni-group"},{default:l((()=>[d(x,{class:"uni-sub-title hide-on-phone"},{default:l((()=>[c("各指标趋势分析")])),_:1})])),_:1})])),_:1}),d(x,{class:"uni-container"},{default:l((()=>[d(x,{class:"uni-stat--x flex p-1015"},{default:l((()=>[d(w,{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",onChange:C.changeAppid,modelValue:v.query.appid,"onUpdate:modelValue":t[0]||(t[0]=e=>v.query.appid=e),clear:!1},null,8,["onChange","modelValue"]),d(w,{collection:"opendb-app-versions",where:C.versionQuery,class:"ml-m",field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择",modelValue:v.query.version_id,"onUpdate:modelValue":t[1]||(t[1]=e=>v.query.version_id=e)},null,8,["where","modelValue"])])),_:1}),d(x,{class:"uni-stat--x flex"},{default:l((()=>[d(V,{label:"日期选择",current:v.currentDateTab,mode:"date",onChange:C.changeTimeRange},null,8,["current","onChange"]),d(P,{type:"datetimerange",end:(new Date).getTime(),modelValue:v.query.start_time,"onUpdate:modelValue":t[2]||(t[2]=e=>v.query.start_time=e),returnType:"timestamp",clearIcon:!1,class:h(["uni-stat-datetime-picker",{"uni-stat__actived":v.currentDateTab<0&&!!v.query.start_time.length}]),onChange:C.useDatetimePicker},null,8,["end","modelValue","class","onChange"]),d(V,{label:"维度选择",type:"box",current:v.currentDimensionTab,tabs:C.dimensionTabs,modelValue:v.query.dimension,"onUpdate:modelValue":t[3]||(t[3]=e=>v.query.dimension=e)},null,8,["current","tabs","modelValue"])])),_:1}),d(x,{class:"uni-stat--x"},{default:l((()=>[d(V,{label:"平台选择",type:"boldLine",mode:"platform",modelValue:v.query.platform_id,"onUpdate:modelValue":t[4]||(t[4]=e=>v.query.platform_id=e),onChange:C.changePlatform},null,8,["modelValue","onChange"]),v.query.platform_id&&-1===v.query.platform_id.indexOf("==")?(u(),n(w,{key:0,ref:"version-select",collection:"uni-stat-app-channels",where:C.channelQuery,class:"p-channel",field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择",modelValue:v.query.channel_id,"onUpdate:modelValue":t[5]||(t[5]=e=>v.query.channel_id=e)},null,8,["where","modelValue"])):p("",!0)])),_:1}),d(S,{items:v.panelData},null,8,["items"]),d(x,{class:"uni-stat--x p-m"},{default:l((()=>[d(x,{class:"label-text mb-l"},{default:l((()=>[c(" 趋势图 ")])),_:1}),d(V,{type:"box",modelValue:v.chartTab,"onUpdate:modelValue":t[6]||(t[6]=e=>v.chartTab=e),tabs:C.chartTabs,class:"mb-l",onChange:C.changeChartTab},null,8,["modelValue","tabs","onChange"]),d(x,{class:"uni-charts-box"},{default:l((()=>[d(z,{type:"area",chartData:v.chartData,echartsH5:"",echartsApp:"",errorMessage:v.errorMessage},null,8,["chartData","errorMessage"])])),_:1})])),_:1}),d(x,{class:"uni-stat--x p-m"},{default:l((()=>[d(j,{data:v.tableData,filedsMap:v.fieldsMap,loading:v.loading},null,8,["data","filedsMap","loading"]),d(x,{class:"uni-pagination-box"},{default:l((()=>[d(M,{"show-icon":"","show-page-size":"","page-size":v.options.pageSize,current:v.options.pageCurrent,total:v.options.total,onChange:C.changePageCurrent,onPageSizeChange:C.changePageSize},null,8,["page-size","current","total","onChange","onPageSizeChange"])])),_:1})])),_:1})])),_:1})])),_:1})}]]);export{z as default};
