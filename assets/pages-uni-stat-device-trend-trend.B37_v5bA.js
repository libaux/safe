import{_ as e,V as t,n as a,r as i,b as n,c as s,w as l,i as r,aN as o,o as u,l as d,m as c,J as h,x as p}from"./index-BdDI6p4_.js";import{_ as m}from"./uni-stat-breadcrumb.CDsItGfh.js";import{_ as g}from"./uni-data-select.B45eKRSr.js";import{_}from"./uni-stat-tabs.CZpTusrL.js";import{_ as f}from"./uni-stat-panel.BshKYSxS.js";import{_ as b}from"./qiun-data-charts.BGalLaW5.js";import{_ as y}from"./uni-stat-table.Ce0zzHXz.js";import{_ as D}from"./uni-pagination.GfsLFm8f.js";import{s as v,d as q,g as C,a as T,b as x,m as w,h as V,c as P}from"./util.C4iP5xno.js";import"./uni-tooltip.DsbdAVZl.js";const S=[{title:"日期",field:"start_time",tooltip:"",formatter:"",stat:-1},{title:"新增设备",field:"new_device_count",tooltip:"首次访问应用的设备数（以设备为判断标准，去重）",value:0},{title:"活跃设备",field:"active_device_count",tooltip:"访问过应用内任意页面的总设备数（去重）",value:0},{title:"访问次数",field:"page_visit_count",tooltip:"访问过应用内任意页面总次数，多个页面之间跳转、同一页面的重复访问计为多次访问",value:0},{title:"启动次数",field:"app_launch_count",tooltip:"设备从打开应用到主动关闭应用或超时退出计为一次启动",value:0},{title:"次均停留时长",field:"avg_device_session_time",formatter:":",tooltip:"平均每次打开应用停留在应用内的总时长，即应用停留总时长/启动次数",value:0,stat:"avg"},{title:"设备平均停留时长 ",field:"avg_device_time",formatter:":",tooltip:"平均每个设备停留在应用内的总时长，即应用停留总时长/活跃设备",value:0,stat:"avg"},{title:"跳出率",field:"bounceRate",computed:"bounce_times/app_launch_count",formatter:"%",tooltip:"只浏览一个页面便离开应用的次数占总启动次数的百分比",value:0,contrast:0,fix:2},{field:"bounce_times",disable:!0},{title:"总设备数",field:"total_devices",tooltip:"从添加统计到当前选择时间的总设备数（去重）",value:0}];const z=e({data:()=>({tableName:"uni-stat-result",fieldsMap:S,query:{dimension:"hour",appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:1,currentDimensionTab:0,tableData:[],panelData:S.filter((e=>e.hasOwnProperty("value"))),chartData:{},chartTab:"new_user_count",channelData:[],tabIndex:0,errorMessage:""}),computed:{chartTabs(){const e=[];return S.forEach((t=>{const{field:a,title:i}=t,n=t.hasOwnProperty("value");a&&i&&n&&e.push({_id:a,name:i})})),e},dimensionTabs(){const e=[{_id:"hour",name:"按时"},{_id:"day",name:"按日"},{_id:"week",name:"按周"},{_id:"month",name:"按月"}];return this.getDays()?(this.query.dimension="day",e.forEach(((e,t)=>{"hour"===e._id?e.disabled=!0:e.disabled=!1})),this.currentDimensionTab=1):(this.query.dimension="hour",e.forEach(((e,t)=>{"hour"===e._id?e.disabled=!1:e.disabled=!0})),this.currentDimensionTab=0),e},channelQuery(){const e=this.query.platform_id;return v({platform_id:e})},versionQuery(){const{appid:e,uni_platform:t}=this.query;return v({appid:e,uni_platform:t})}},created(){this.debounceGet=q((()=>{this.getAllData(this.query)}),300),this.getChannelData()},watch:{query:{deep:!0,handler(e){this.debounceGet()}}},methods:{getDays(){if(!this.query.start_time.length)return!0;const[e,t]=this.query.start_time;return t-e>=864e5},useDatetimePicker(){this.currentDateTab=-1},changeAppid(e){this.getChannelData(e,!1)},changePlatform(e,t,a,i){this.getChannelData(null,e),this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange(e,t){this.currentDateTab=t;let a,i;a=C(e),i=e?C(0)-1:C(0)+864e5-1,this.query.start_time=[a,i]},changePageCurrent(e){this.options.pageCurrent=e.current,this.getTabelData(this.query)},changePageSize(e){this.options.pageSize=e,this.options.pageCurrent=1,this.getTabelData(this.query)},changeChartTab(e,t,a){this.tabIndex=t,this.getChartData(this.query,e,a)},getAllData(e){e.appid?(this.errorMessage="",this.getPanelData(),this.getChartData(e),this.getTabelData(e)):this.errorMessage="请先选择应用"},getChartData(e,a=this.chartTabs[this.tabIndex]._id,i=this.chartTabs[this.tabIndex].name){e=v(e,!0,["uni_platform"]);const n=this.query.dimension;t.database().collection(this.tableName).where(e).field(`${T(S,a)}, start_time`).groupBy("start_time").groupField(x(S,a)).orderBy("start_time","asc").get({getCount:!0}).then((e=>{const{count:t,data:s}=e.result,l={categories:[],series:[{name:i,data:[]}]};let r=S.filter((e=>e.field===a));r=JSON.parse(JSON.stringify(r)),delete r[0].value,r[0].formatter="";for(const i of s){w(r,i,i);const e=V(i.start_time,n);let t=i[a];l.series[0].data.push(t),l.categories.push(e)}this.chartData=l})).catch((e=>{console.error(e)})).finally((()=>{this.loading=!1}))},getTabelData(e){const{pageCurrent:a}=this.options;e=v(e,!0,["uni_platform"]),this.options.pageCurrent=1,this.loading=!0;t.database().collection(this.tableName).where(e).field(T(S)).groupBy("start_time").groupField(x(S)).orderBy("start_time","desc").skip((a-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((e=>{const{count:t,data:a}=e.result;for(const i of a){let e=i.start_time;if(e){const t=this.query.dimension;i.start_time=V(e,t)}w(S,i,i)}this.tableData=[],this.options.total=t,this.tableData=a})).catch((e=>{console.error(e)})).finally((()=>{this.loading=!1}))},getPanelData(){let e=JSON.parse(JSON.stringify(this.query));e.dimension="day";let a=v(e,!1,["uni_platform"]);t.database().collection(this.tableName).where(a).field(`${T(S)},stat_date`).groupBy("appid").groupField(x(S)).orderBy("stat_date","desc").get().then((t=>{const a=t.result.data[0];a&&(a.total_devices=0),P.call(this,e),this.panelData=[],this.panelData=w(S,a)}))},navTo(e){a({url:`/pages/uni-stat/overview/overview?id=${e}`})},getChannelData(e,a){this.query.channel_id="";const i=t.database(),n={};(e=e||this.query.appid)&&(n.appid=e),(a=a||this.query.platform_id)&&(n.platform_id=a);let s=i.collection("uni-stat-app-platforms").field("_id, name").getTemp(),l=i.collection("uni-stat-app-channels").where(n).field("_id, channel_name, create_time, platform_id").getTemp();i.collection(l,s).orderBy("platform_id","asc").get().then((e=>{let t=e.result.data,a=[];if(t.length>0){let e;for(let i in t)e=t[i].channel_name?t[i].channel_name:"默认",t[i].platform_id.length>0&&(e=t[i].platform_id[0].name+"-"+e),a.push({value:t[i]._id,text:e})}this.channelData=a})).catch((e=>{console.error(e)})).finally((()=>{}))}}},[["render",function(e,t,a,v,q,C){const T=i(n("uni-stat-breadcrumb"),m),x=r,w=i(n("uni-data-select"),g),V=i(n("uni-stat-tabs"),_),P=i(n("uni-datetime-picker"),o),S=i(n("uni-stat-panel"),f),z=i(n("qiun-data-charts"),b),j=i(n("uni-stat-table"),y),M=i(n("uni-pagination"),D);return u(),s(x,{class:"fix-top-window"},{default:l((()=>[d(x,{class:"uni-header"},{default:l((()=>[d(T,{class:"uni-stat-breadcrumb-on-phone"}),d(x,{class:"uni-group"},{default:l((()=>[d(x,{class:"uni-sub-title hide-on-phone"},{default:l((()=>[c("各指标趋势分析")])),_:1})])),_:1})])),_:1}),d(x,{class:"uni-container"},{default:l((()=>[d(x,{class:"uni-stat--x flex p-1015"},{default:l((()=>[d(w,{collection:"opendb-app-list",onChange:C.changeAppid,field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",modelValue:q.query.appid,"onUpdate:modelValue":t[0]||(t[0]=e=>q.query.appid=e),clear:!1},null,8,["onChange","modelValue"]),d(w,{collection:"opendb-app-versions",where:C.versionQuery,class:"ml-m",field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择",modelValue:q.query.version_id,"onUpdate:modelValue":t[1]||(t[1]=e=>q.query.version_id=e)},null,8,["where","modelValue"])])),_:1}),d(x,{class:"uni-stat--x flex"},{default:l((()=>[d(V,{label:"日期选择",current:q.currentDateTab,mode:"date",onChange:C.changeTimeRange},null,8,["current","onChange"]),d(P,{type:"datetimerange",end:(new Date).getTime(),modelValue:q.query.start_time,"onUpdate:modelValue":t[2]||(t[2]=e=>q.query.start_time=e),returnType:"timestamp",clearIcon:!1,class:h(["uni-stat-datetime-picker",{"uni-stat__actived":q.currentDateTab<0&&!!q.query.start_time.length}]),onChange:C.useDatetimePicker},null,8,["end","modelValue","class","onChange"]),d(V,{label:"维度选择",type:"box",current:q.currentDimensionTab,tabs:C.dimensionTabs,modelValue:q.query.dimension,"onUpdate:modelValue":t[3]||(t[3]=e=>q.query.dimension=e)},null,8,["current","tabs","modelValue"])])),_:1}),d(x,{class:"uni-stat--x"},{default:l((()=>[d(V,{label:"平台选择",type:"boldLine",mode:"platform",modelValue:q.query.platform_id,"onUpdate:modelValue":t[4]||(t[4]=e=>q.query.platform_id=e),onChange:C.changePlatform},null,8,["modelValue","onChange"]),q.query.platform_id&&-1===q.query.platform_id.indexOf("==")?(u(),s(w,{key:0,ref:"version-select",collection:"uni-stat-app-channels",where:C.channelQuery,class:"p-channel",field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择",modelValue:q.query.channel_id,"onUpdate:modelValue":t[5]||(t[5]=e=>q.query.channel_id=e)},null,8,["where","modelValue"])):p("",!0)])),_:1}),d(S,{items:q.panelData},null,8,["items"]),d(x,{class:"uni-stat--x p-m"},{default:l((()=>[d(x,{class:"label-text mb-l"},{default:l((()=>[c(" 趋势图 ")])),_:1}),d(V,{type:"box",modelValue:q.chartTab,"onUpdate:modelValue":t[6]||(t[6]=e=>q.chartTab=e),tabs:C.chartTabs,class:"mb-l",onChange:C.changeChartTab},null,8,["modelValue","tabs","onChange"]),d(x,{class:"uni-charts-box"},{default:l((()=>[d(z,{type:"area",chartData:q.chartData,echartsH5:"",echartsApp:"",tooltipFormat:"tooltipCustom",errorMessage:q.errorMessage},null,8,["chartData","errorMessage"])])),_:1})])),_:1}),d(x,{class:"uni-stat--x p-m"},{default:l((()=>[d(j,{data:q.tableData,filedsMap:q.fieldsMap,loading:q.loading},null,8,["data","filedsMap","loading"]),d(x,{class:"uni-pagination-box"},{default:l((()=>[d(M,{"show-icon":"","show-page-size":"","page-size":q.options.pageSize,current:q.options.pageCurrent,total:q.options.total,onChange:C.changePageCurrent,onPageSizeChange:C.changePageSize},null,8,["page-size","current","total","onChange","onPageSizeChange"])])),_:1})])),_:1})])),_:1})])),_:1})}]]);export{z as default};
