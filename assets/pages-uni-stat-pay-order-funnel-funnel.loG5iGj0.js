import{_ as e}from"./uni-stat-breadcrumb.hcid91PT.js";import{_ as t,Y as a,r as s,b as i,aN as r,o as n,c as d,w as l,l as o,m as u,t as m,x as c,i as h,C as p}from"./index-CTufusbk.js";import{_ as b}from"./uni-data-select.BSOJnljY.js";import{_ as f}from"./uni-stat-tabs.l-rdimJn.js";import{d as g,s as y,a as _,b as C,n as T,p as x,g as D}from"./util.jfAKteEU.js";import{t as q}from"./timeUtil.wwvjgelv.js";import{_ as v}from"./qiun-data-charts.DmZlK_RP.js";import"./uni-tooltip.CS5MNpjh.js";const F=[{title:"活跃设备数",field:"activity_device_count",tooltip:"统计时间内，访问设备数，一台设备多次访问被计为一台（包含未登录的用户）。",formatter:",",value:0,contrast:0,stat:"sum"},{title:"活跃用户数",field:"activity_user_count",tooltip:"活跃用户数：统计时间内，访问人数，一人多次访问被计为一人（只统计已登录的用户）。",formatter:",",value:0,contrast:0,stat:"sum"},{title:"支付用户数",field:"pay_user_count",tooltip:"统计时间内，成功支付的人数（不剔除退款订单）（只统计已登录的用户）。",formatter:",",value:0,contrast:0,stat:"sum"}];const M=t({components:{funnelChart:t({props:{query:{type:[Object],default:function(){return{}}}},data:()=>({tableName:"uni-stat-pay-result",fieldsMap:F,chartData:{},errorMessage:"",notData:!1,opts:{color:["#91CB74","#1890FF","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],padding:[15,15,0,15],extra:{funnel:{activeOpacity:.3,activeWidth:10,border:!0,borderWidth:2,borderColor:"#FFFFFF",fillOpacity:1,labelAlign:"right",linearType:"custom",minSize:20}}},dateTabs:{time:Date.now(),timeStr:"",index:0,list:[{_id:"day",name:"日维度"},{_id:"week",name:"周维度"},{_id:"month",name:"月维度"}]}}),created(){this.getCloudDataDebounce=g((()=>{this.getCloudData()}),400),this.getCloudDataDebounce()},methods:{calcPercentage:(e,t)=>t>0?parseFloat((e/t*100).toFixed(2)):0,getCloudData(){let e=this.query;if(!e.appid)return void(this.errorMessage="请先选择应用");let t=this.getWhere(),s={...e,...t};s=y(s,!1,["uni_platform"]);a.database().collection(this.tableName).where(s).field(`${_(F)}, dimension, stat_date.date_str as stat_time, start_time`).groupBy("null").groupField(C(F)).get().then((e=>{let t=e.result.data;if(!t.length)return void(this.errorMessage="暂无数据");this.errorMessage="",t.map((e=>{for(let t in e)t.indexOf("_amount")>1&&(e[t]=Number((e[t]/100).toFixed(2)))}));let{activity_device_count:a=0,activity_user_count:s=0,pay_user_count:i=0}=t[0]||{};this.notData=!(a||s||i);let r={series:[{data:[{name:"活跃设备数量",value:a,centerText:`${a}`,labelText:"活跃设备数"},{name:"活跃用户数量",value:s,centerText:`${s}`,labelText:`活跃用户数（用户转化率：${this.calcPercentage(s,a)}%）`},{name:"支付用户数量",value:i,centerText:`${i}`,labelText:`支付用户数（支付转化率：${this.calcPercentage(i,s)}%）`}]}]};this.chartData=r}))},dateTabsChange(e,t){this.dateTabs.index=t,this.getCloudData()},datePickerChange(e){this.dateTabs.time=e,this.getCloudData()},getWhere(){let e=this.dateTabs.time,t=this.dateTabs.list[this.dateTabs.index]._id||"day",a=[];if("day"===t){let{startTime:t,endTime:s}=q.getOffsetStartAndEnd("day",0,e);a=[t,s]}else if("week"===t){let{startTime:t,endTime:s}=q.getOffsetStartAndEnd("week",0,e);a=[t,s]}else if("month"===t){let{startTime:t,endTime:s}=q.getOffsetStartAndEnd("month",0,e);a=[t,s]}return this.dateTabs.timeStr=`${q.timeFormat(a[0])} ~ ${q.timeFormat(a[1])}`,{dimension:t,start_time:a}}},watch:{query:{deep:!0,handler(e){this.getCloudDataDebounce()}}},computed:{}},[["render",function(e,t,a,p,b,g){const y=h,_=s(i("uni-stat-tabs"),f),C=s(i("uni-datetime-picker"),r),T=s(i("qiun-data-charts"),v);return n(),d(y,{class:"uni-stat--x p-m"},{default:l((()=>[o(y,{class:"uni-stat-card-header"},{default:l((()=>[u("漏斗分析")])),_:1}),o(y,{class:"flex"},{default:l((()=>[o(_,{type:"box",current:b.dateTabs.index,tabs:b.dateTabs.list,onChange:g.dateTabsChange},null,8,["current","tabs","onChange"]),o(C,{type:"date",modelValue:b.dateTabs.time,"onUpdate:modelValue":t[0]||(t[0]=e=>b.dateTabs.time=e),end:Date.now(),"return-type":"timestamp","clear-icon":!1,class:"uni-stat-datetime-picker",onChange:g.datePickerChange},null,8,["modelValue","end","onChange"]),b.dateTabs.timeStr?(n(),d(y,{key:0,class:"uni-stat--tips"},{default:l((()=>[u("当前时间范围："+m(b.dateTabs.timeStr),1)])),_:1})):c("",!0)])),_:1}),b.notData?(n(),d(y,{key:1,class:"uni-charts-box flex center"},{default:l((()=>[o(y,null,{default:l((()=>[u("暂无数据")])),_:1})])),_:1})):(n(),d(y,{key:0,class:"uni-charts-box"},{default:l((()=>[o(T,{type:"funnel",chartData:b.chartData,opts:b.opts,errorMessage:b.errorMessage},null,8,["chartData","opts","errorMessage"])])),_:1}))])),_:1})}],["__scopeId","data-v-7a3e0971"]]),trendChart:t({props:{query:{type:[Object],default:function(){return{}}}},data:()=>({tableName:"uni-stat-pay-result",chartData:{},errorMessage:"",opts:{color:["#91CB74","#1890FF","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],padding:[15,15,0,15],legend:{},enableScroll:!0,xAxis:{disableGrid:!0,itemCount:24,fontSize:12},yAxis:{gridType:"dash",dashLength:2,data:[{tofix:2,unit:"%"}]},extra:{area:{type:"straight",opacity:.2,addLine:!0,width:2,gradient:!1}}},dateTabs:{time:[],timeStr:"",index:0,list:[{_id:7,name:"最近七天",dimension:"day"},{_id:30,name:"最近30天",dimension:"day"},{_id:90,name:"最近90天",dimension:"day"},{_id:372,name:"月维度",dimension:"month"},{_id:1116,name:"季维度",dimension:"quarter"},{_id:4392,name:"年维度",dimension:"year"}]},statTabs:{index:0,list:[{_id:1,name:"支付转化率"}]},queryMode:0}),created(){this.getCloudDataDebounce=g((()=>{this.getCloudData()}),300),this.getCloudDataDebounce()},methods:{getCloudData(e={}){let t=this.query;if(!t.appid)return void(this.errorMessage="请先选择应用");this.errorMessage="";let s=this.getWhere(),i={...t,...s};i=y(i,!0,["uni_platform"]);a.database().collection(this.tableName).where(i).field(`${_(F)}, start_time`).groupBy("start_time, dimension").groupField(C(F)).orderBy("start_time","asc").limit(100).get({getCount:!0}).then((e=>{let{count:t,data:a}=e.result;a=T(a,s,F),a.map(((e,t)=>{e.value=Number((e.pay_user_count/e.activity_user_count*100).toFixed(2)),isNaN(e.value)&&(e.value=0)})),this.setChartData(a,s.dimension)})).catch((e=>{console.error(e)})).finally((()=>{}))},setChartData(e,t){let a={categories:[],series:[{name:"支付转化率",data:[]}]};for(const s of e){const e=this.formatDate(s.start_time,t);a.categories.push(e);let i=Number(s.value);a.series[0].data.push(i)}this.chartData=a},formatDate(e,t){let a=new Date(e),s=a.getFullYear(),i=a.getMonth()+1;a.getDate();let r=a.getHours(),n=Math.floor((a.getMonth()+3)/3);return i<10&&(i="0"+i),"hour"===t?`${r}时`:"month"===t?`${s}-${i}`:"quarter"===t?`${s}/Q${n}`:"year"===t?`${s}`:x(a)},datePickerChange(e){this.dateTabs.time=e,this.queryMode=1,this.getCloudData()},dateTabsChange(e,t){this.dateTabs.index=t,this.queryMode=0,this.getCloudData()},statTabsChange(e,t,a){this.statTabs.index=t,this.getCloudData({field:e,name:a})},getWhere(){let e=[],t=this.dateTabs.list[this.dateTabs.index]||{};if("number"==typeof t._id&&0===this.queryMode){let a=D(t._id),s=q.getOffsetStartAndEnd("day",0).endTime;1==t._id&&(s=q.getOffsetStartAndEnd("day",0,a).endTime),e=[a,s]}else this.dateTabs.time&&(e=this.dateTabs.time);let a=t.dimension||"day";return this.dateTabs.timeStr=`${q.timeFormat(e[0])} ~ ${q.timeFormat(e[1])}`,this.dateTabs.time=e,{dimension:a,start_time:e}}},watch:{query:{deep:!0,handler(e){this.getCloudDataDebounce()}}},computed:{}},[["render",function(e,t,a,p,b,g){const y=h,_=s(i("uni-stat-tabs"),f),C=s(i("uni-datetime-picker"),r),T=s(i("qiun-data-charts"),v);return n(),d(y,{class:"uni-stat--x p-m"},{default:l((()=>[o(y,{class:"uni-stat-card-header"},{default:l((()=>[u("趋势图")])),_:1}),o(y,{class:"flex"},{default:l((()=>[o(_,{type:"box",current:b.dateTabs.index,tabs:b.dateTabs.list,onChange:g.dateTabsChange},null,8,["current","tabs","onChange"]),o(C,{type:"datetimerange",modelValue:b.dateTabs.time,"onUpdate:modelValue":t[0]||(t[0]=e=>b.dateTabs.time=e),end:Date.now(),"return-type":"timestamp","clear-icon":!1,class:"uni-stat-datetime-picker",onChange:g.datePickerChange},null,8,["modelValue","end","onChange"]),b.dateTabs.timeStr?(n(),d(y,{key:0,class:"uni-stat--tips"},{default:l((()=>[u("当前时间范围："+m(b.dateTabs.timeStr),1)])),_:1})):c("",!0)])),_:1}),o(_,{type:"box",current:b.statTabs.index,tabs:b.statTabs.list,class:"mb-l",onChange:g.statTabsChange},null,8,["current","tabs","onChange"]),o(y,{class:"uni-charts-box"},{default:l((()=>[o(T,{type:"area",chartData:b.chartData,opts:b.opts,errorMessage:b.errorMessage},null,8,["chartData","opts","errorMessage"])])),_:1})])),_:1})}]])},data:()=>({tableName:"uni-stat-pay-result",query:{dimension:"hour",appid:"",platform_id:"",uni_platform:"",version_id:"",start_time:[]},loading:!1}),onLoad(e){const{appid:t}=e;t&&(this.query.appid=t)},created(){},methods:{platformChange(e,t,a,s){this.query.version_id=0,this.query.uni_platform=s.code}},watch:{},computed:{versionQuery(){const{appid:e,uni_platform:t}=this.query;return y({appid:e,uni_platform:t})},channelQuery(){const{appid:e,platform_id:t}=this.query;return y({appid:e,platform_id:t})}}},[["render",function(t,a,r,u,m,g){const y=s(i("uni-stat-breadcrumb"),e),_=h,C=s(i("uni-data-select"),b),T=s(i("uni-stat-tabs"),f),x=p("funnelChart"),D=p("trendChart");return n(),d(_,{class:"fix-top-window"},{default:l((()=>[o(_,{class:"uni-header"},{default:l((()=>[o(y,{class:"uni-stat-breadcrumb-on-phone"})])),_:1}),o(_,{class:"uni-container"},{default:l((()=>[o(_,{class:"uni-stat--x flex p-1015"},{default:l((()=>[o(C,{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc","def-item":1,label:"应用选择",modelValue:m.query.appid,"onUpdate:modelValue":a[0]||(a[0]=e=>m.query.appid=e),clear:!1},null,8,["modelValue"]),o(C,{collection:"opendb-app-versions",where:g.versionQuery,class:"ml-m",field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择",modelValue:m.query.version_id,"onUpdate:modelValue":a[1]||(a[1]=e=>m.query.version_id=e)},null,8,["where","modelValue"])])),_:1}),o(_,{class:"uni-stat--x"},{default:l((()=>[o(T,{label:"平台选择",type:"boldLine",mode:"platform",modelValue:m.query.platform_id,"onUpdate:modelValue":a[2]||(a[2]=e=>m.query.platform_id=e),onChange:g.platformChange},null,8,["modelValue","onChange"]),m.query.platform_id&&-1===m.query.platform_id.indexOf("==")?(n(),d(C,{key:0,ref:"version-select",collection:"uni-stat-app-channels",where:g.channelQuery,class:"p-channel",field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择",modelValue:m.query.channel_id,"onUpdate:modelValue":a[3]||(a[3]=e=>m.query.channel_id=e)},null,8,["where","modelValue"])):c("",!0)])),_:1}),o(x,{query:m.query},null,8,["query"]),o(D,{query:m.query},null,8,["query"])])),_:1})])),_:1})}]]);export{M as default};
