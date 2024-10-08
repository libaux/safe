import{_ as t}from"./uni-stat-breadcrumb.hcid91PT.js";import{_ as e,Y as a,r as n,d as l,b as i,e as s,K as r,f as d,j as o,o as u,c as m,w as c,l as _,m as p,p as f,q as h,F as y,i as g,aE as b,t as D,aN as C,C as x,x as q}from"./index-CTufusbk.js";import{_ as T}from"./uni-data-select.BSOJnljY.js";import{_ as v}from"./uni-stat-tabs.l-rdimJn.js";import{d as $,s as w,a as M,b as k,l as O,g as A,p as E,n as V}from"./util.jfAKteEU.js";import{_ as S}from"./uni-tooltip.CS5MNpjh.js";import{t as j}from"./timeUtil.wwvjgelv.js";import{_ as F}from"./qiun-data-charts.DmZlK_RP.js";const P=[{title:"订单金额",group:"total_amount",list:[{title:"下单金额",field:"create_total_amount",tooltip:"下单：统计时间内，下单金额（包含未支付订单和退款订单）。",formatter:",",value:"-",contrast:0,stat:"sum",fix:2,trendChart:!0,multiple:.01},{title:"收款金额",field:"pay_total_amount",tooltip:"收款：统计时间内，成功支付的订单金额（包含退款订单）。",formatter:",",value:"-",contrast:0,stat:"sum",fix:2,trendChart:!0,multiple:.01},{title:"退款金额",field:"refund_total_amount",tooltip:"退款：统计时间内，发生退款的金额。",formatter:",",value:"-",contrast:0,stat:"sum",fix:2,multiple:.01}]},{title:"订单数量",group:"order_count",list:[{title:"下单数量",field:"create_order_count",tooltip:"下单：统计时间内，成功下单的订单笔数（包含未支付订单和退款订单）。",formatter:",",value:"-",contrast:0,stat:"sum",fix:0,trendChart:!0},{title:"收款数量",field:"pay_order_count",tooltip:"收款：统计时间内，成功支付的订单数（包含退款订单）。",formatter:"",value:"-",contrast:0,stat:"sum",fix:0,trendChart:!0},{title:"退款数量",field:"refund_order_count",tooltip:"退款：统计时间内，发生退款的订单数。",formatter:"",value:"-",contrast:0,stat:"sum",fix:0}]},{title:"用户数量",group:"user_count",list:[{title:"下单用户数",field:"create_user_count",tooltip:"下单：统计时间内，成功下单的客户数（包含未支付订单和退款订单）。",formatter:",",value:"-",contrast:0,stat:"sum",fix:0,trendChart:!0},{title:"收款用户数",field:"pay_user_count",tooltip:"收款：统计时间内，成功支付的用户数（包含退款订单）。",formatter:",",value:"-",contrast:0,stat:"sum",fix:0,trendChart:!0},{title:"退款用户数",field:"refund_user_count",tooltip:"退款：统计时间内，发生退款的用户数。",formatter:",",value:"-",contrast:0,stat:"sum",fix:0}]},{title:"设备数量",group:"device_count",list:[{title:"下单设备数",field:"create_device_count",tooltip:"下单：统计时间内，成功下单的设备数（包含未支付订单和退款订单）。",formatter:",",value:"-",contrast:0,stat:"sum",fix:0,trendChart:!0},{title:"收款设备数",field:"pay_device_count",tooltip:"收款：统计时间内，成功支付的设备数（包含退款订单）。",formatter:",",value:"-",contrast:0,stat:"sum",fix:0,trendChart:!0},{title:"退款设备数",field:"refund_device_count",tooltip:"退款：统计时间内，发生退款的设备数。",formatter:",",value:"-",contrast:0,stat:"sum",fix:0}]}];let N=[];P.map(((t,e)=>{t.list.map(((t,e)=>{N.push(t)}))}));let B=[{title:"下单金额（GMV）",field:"create_total_amount",tooltip:"统计时间内，下单金额（包含未支付订单和退款订单）。",formatter:",",value:"-",contrast:0,stat:"sum",fix:2,trendChart:!0,multiple:.01},{title:"收款金额（GPV）",field:"pay_total_amount",tooltip:"统计时间内，成功支付的订单金额（包含退款订单）。",formatter:",",value:"-",contrast:0,stat:"sum",fix:2,trendChart:!0,multiple:.01},{title:"退款金额",field:"refund_total_amount",tooltip:"统计时间内，发生退款的金额。",formatter:",",value:"-",contrast:0,stat:"sum",fix:2,trendChart:!0,multiple:.01},{title:"实收金额",field:"actual_total_amount",tooltip:"实收金额=收款金额-退款金额",formatter:",",value:"-",contrast:0,stat:"sum",fix:2,trendChart:!0,multiple:.01}];const U=e({props:{query:{type:[Object],default:function(){return{}}}},data:()=>({tableName:"uni-stat-pay-result",fieldsMap:B,panelData:{today:{pay_total_amount:"-",pay_order_count:"-"},yesterday:{pay_total_amount:"-",pay_order_count:"-"},beforeyesterday:{pay_total_amount:"-",pay_order_count:"-"},week:{pay_total_amount:"-",pay_order_count:"-"},month:{pay_total_amount:"-",pay_order_count:"-"},quarter:{pay_total_amount:"-",pay_order_count:"-"},year:{pay_total_amount:"-",pay_order_count:"-"},total:{pay_total_amount:"-",pay_order_count:"-"}},loading:!1}),created(){this.getCloudDataDebounce=$((()=>{this.getCloudData()}),300),this.getCloudDataDebounce()},methods:{getCloudData(){let t=this.query;if(!t.appid)return;this.loading=!0,t=w(t,!0,["uni_platform"]);let e=this.getWhere(t);t&&(e=`${t} && (${e})`);const n=a.database();n.collection(this.tableName).where(e).field(`${M(B)}, dimension, stat_date.date_str as stat_time, start_time`).groupBy("stat_time, dimension").groupField(k(B)+",last(start_time) as start_time").get().then((t=>{let e=t.result.data;e.map(((t,e)=>{t.actual_total_amount||(t.actual_total_amount=t.pay_total_amount-t.refund_total_amount)})),e=O({fieldsMap:B,data:e}),this.loading=!1,Object.assign(this.panelData,this.setPanelData(e))}));let l=`${t} && dimension == "year"`;n.collection(this.tableName).where(l).field(`${M(B)}, dimension`).groupBy("dimension").groupField(k(B)).get().then((t=>{let e=t.result.data;e.map(((t,e)=>{t.actual_total_amount=t.pay_total_amount-t.refund_total_amount})),e=O({fieldsMap:B,data:e}),Object.assign(this.panelData,{total:e[0]||{pay_total_amount:0,pay_order_count:0,create_total_amount:0,refund_total_amount:0,actual_total_amount:0}})}))},getWhere(t){let e,a=Date.now(),n=j.getOffsetStartAndEnd("day",0,a),l=j.getOffsetStartAndEnd("day",-1,a),i=j.getOffsetStartAndEnd("day",-2,a),s=j.getOffsetStartAndEnd("week",0,a),r=j.getOffsetStartAndEnd("month",0,a),d=j.getOffsetStartAndEnd("quarter",0,a),o=j.getOffsetStartAndEnd("year",0,a);return e=`(dimension=="day" && start_time==${n.startTime} && end_time==${n.endTime}) || (dimension=="day" && start_time==${l.startTime} && end_time==${l.endTime}) || (dimension=="day" && start_time==${i.startTime} && end_time==${i.endTime}) || (dimension=="week" && start_time==${s.startTime} && end_time==${s.endTime}) || (dimension=="month" && start_time==${r.startTime} && end_time==${r.endTime}) || (dimension=="quarter" && start_time==${d.startTime} && end_time==${d.endTime}) || (dimension=="year" && start_time==${o.startTime} && end_time==${o.endTime})`,e},setPanelData(t){let e=Date.now(),a=j.getOffsetStartAndEnd("day",0,e),n=j.getOffsetStartAndEnd("day",-1,e),l=j.getOffsetStartAndEnd("day",-2,e),i={pay_total_amount:0,pay_order_count:0,create_total_amount:0,refund_total_amount:0,actual_total_amount:0};return{today:t.find((t=>"day"===t.dimension&&t.start_time===a.startTime))||i,yesterday:t.find((t=>"day"===t.dimension&&t.start_time===n.startTime))||i,beforeyesterday:t.find((t=>"day"===t.dimension&&t.start_time===l.startTime))||i,week:t.find((t=>"week"===t.dimension))||i,month:t.find((t=>"month"===t.dimension))||i,quarter:t.find((t=>"quarter"===t.dimension))||i,year:t.find((t=>"year"===t.dimension))||i}}},watch:{query:{deep:!0,handler(t){this.getCloudDataDebounce()}}}},[["render",function(t,e,a,C,x,q){const T=g,v=n(i("uni-th"),l),$=n(i("uni-tr"),s),w=n(i("uni-icons"),r),M=n(i("uni-tooltip"),S),k=n(i("uni-td"),d),O=n(i("uni-table"),o);return u(),m(T,{class:"uni-stat--x p-m"},{default:c((()=>[_(T,{class:"uni-stat-card-header"},{default:c((()=>[p("概况")])),_:1}),_(O,{loading:x.loading,border:"",stripe:"",emptyText:"暂无更多数据",style:{"min-height":"100px"}},{default:c((()=>[_($,null,{default:c((()=>[_(v,{align:"center",class:"th"}),_(v,{align:"center",class:"th"},{default:c((()=>[p("今日")])),_:1}),_(v,{align:"center",class:"th"},{default:c((()=>[p("昨日")])),_:1}),_(v,{align:"center",class:"th"},{default:c((()=>[p("前日")])),_:1}),_(v,{align:"center",class:"th"},{default:c((()=>[p("本周")])),_:1}),_(v,{align:"center",class:"th"},{default:c((()=>[p("本月")])),_:1}),_(v,{align:"center",class:"th"},{default:c((()=>[p("本季度")])),_:1}),_(v,{align:"center",class:"th"},{default:c((()=>[p("本年度")])),_:1}),_(v,{align:"center",class:"th"},{default:c((()=>[p("累计")])),_:1})])),_:1}),(u(!0),f(y,null,h(x.fieldsMap,((t,e)=>(u(),m($,{key:e},{default:c((()=>[_(k,{align:"center",class:"td"},{default:c((()=>[_(M,null,b({default:c((()=>[_(T,{class:"uni-stat--sum-item-title"},{default:c((()=>[p(D(t.title)+" ",1),_(w,{class:"ml-s",type:"help",color:"#666"})])),_:2},1024)])),_:2},[t.tooltip?{name:"content",fn:c((()=>[_(T,{class:"uni-stat-tooltip-s"},{default:c((()=>[p(D(t.tooltip),1)])),_:2},1024)])),key:"0"}:void 0]),1024)])),_:2},1024),_(k,{align:"center",class:"td"},{default:c((()=>[p(D(x.panelData.today[t.field]),1)])),_:2},1024),_(k,{align:"center",class:"td"},{default:c((()=>[p(D(x.panelData.yesterday[t.field]),1)])),_:2},1024),_(k,{align:"center",class:"td"},{default:c((()=>[p(D(x.panelData.beforeyesterday[t.field]),1)])),_:2},1024),_(k,{align:"center",class:"td"},{default:c((()=>[p(D(x.panelData.week[t.field]),1)])),_:2},1024),_(k,{align:"center",class:"td"},{default:c((()=>[p(D(x.panelData.month[t.field]),1)])),_:2},1024),_(k,{align:"center",class:"td"},{default:c((()=>[p(D(x.panelData.quarter[t.field]),1)])),_:2},1024),_(k,{align:"center",class:"td"},{default:c((()=>[p(D(x.panelData.year[t.field]),1)])),_:2},1024),_(k,{align:"center",class:"td"},{default:c((()=>[p(D(x.panelData.total[t.field]),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["loading"])])),_:1})}],["__scopeId","data-v-9f2e867a"]]);const L=e({props:{query:{type:[Object],default:function(){return{}}}},data:()=>({tableName:"uni-stat-pay-result",panelData:P,loading:!1}),created(){this.getCloudDataDebounce=$((()=>{this.getCloudData()}),300),this.getCloudDataDebounce()},methods:{getCloudData(){let t=this.query;if(!t.appid)return;this.loading=!0;const e=w({...t,start_time:[A(0),Date.now()]},!0,["uni_platform"]);a.database().collection(this.tableName).where(e).field(`${M(N)}, dimension, stat_date.date_str as stat_time, start_time`).groupBy("stat_time, dimension").groupField(k(N)).orderBy("stat_time","desc").get().then((t=>{let e=t.result.data;e=O({fieldsMap:N,data:e});let a=e.find((t=>"day"===t.dimension&&t.stat_time===E(A(0),"")));a||(a=e.find((t=>"hour"===t.dimension&&t.stat_time===E(A(0),"")))||{}),this.loading=!1,this.panelData=this.setPanelData(a)}))},setPanelData(t){let e=this.panelData;return e.map(((e,a)=>{e.list.map(((e,a)=>{e.value=t[e.field]||0}))})),e}},watch:{query:{deep:!0,handler(t){this.getCloudDataDebounce()}}}},[["render",function(t,e,a,b,C,x){const q=g,T=n(i("uni-th"),l),v=n(i("uni-icons"),r),$=n(i("uni-tooltip"),S),w=n(i("uni-tr"),s),M=n(i("uni-td"),d),k=n(i("uni-table"),o);return u(),m(q,{class:"uni-stat--x p-m"},{default:c((()=>[_(q,{class:"uni-stat-card-header"},{default:c((()=>[p("今日数据")])),_:1}),_(k,{loading:C.loading,border:"",stripe:"",emptyText:"暂无更多数据",style:{"min-height":"100px"}},{default:c((()=>[_(w,null,{default:c((()=>[_(T,{align:"center",class:"th"}),(u(!0),f(y,null,h(C.panelData,((t,e)=>(u(),m(T,{align:"center",class:"th",key:e},{default:c((()=>[_($,null,{content:c((()=>[_(q,{class:"uni-stat-tooltip-s"},{default:c((()=>[(u(!0),f(y,null,h(t.list,((t,e)=>(u(),m(q,{key:e},{default:c((()=>[p(D(t.tooltip),1)])),_:2},1024)))),128))])),_:2},1024)])),default:c((()=>[_(q,{class:"uni-stat--sum-item-title"},{default:c((()=>[p(D(t.title)+" ",1),_(v,{class:"ml-s",type:"help",color:"#666"})])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),_(w,null,{default:c((()=>[_(M,{align:"center",class:"td"},{default:c((()=>[p("下单")])),_:1}),(u(!0),f(y,null,h(C.panelData,((t,e)=>(u(),m(M,{align:"center",class:"td",key:e},{default:c((()=>[p(D(t.list[0].value),1)])),_:2},1024)))),128))])),_:1}),_(w,null,{default:c((()=>[_(M,{align:"center",class:"td"},{default:c((()=>[p("收款")])),_:1}),(u(!0),f(y,null,h(C.panelData,((t,e)=>(u(),m(M,{align:"center",class:"td",key:e},{default:c((()=>[p(D(t.list[1].value),1)])),_:2},1024)))),128))])),_:1}),_(w,null,{default:c((()=>[_(M,{align:"center",class:"td"},{default:c((()=>[p("退款")])),_:1}),(u(!0),f(y,null,h(C.panelData,((t,e)=>(u(),m(M,{align:"center",class:"td",key:e},{default:c((()=>[p(D(t.list[2].value),1)])),_:2},1024)))),128))])),_:1})])),_:1},8,["loading"])])),_:1})}],["__scopeId","data-v-2f62b91c"]]);let Q=[];P.forEach((t=>{const e=t.group,a=t.title;e&&a&&Q.push({_id:e,name:a,list:t.list})}));const G=e({components:{statPanelTotal:U,statPanelToday:L,trendChart:e({props:{query:{type:[Object],default:function(){return{}}}},data:()=>({tableName:"uni-stat-pay-result",chartData:{},errorMessage:"",opts:{color:["#91CB74","#1890FF","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],padding:[15,15,0,15],legend:{},enableScroll:!0,dataLabel:!1,xAxis:{disableGrid:!0,itemCount:24,fontSize:12,boundaryGap:"center"},yAxis:{gridType:"dash",dashLength:2,data:[{tofix:2}]},extra:{area:{type:"straight",opacity:.2,addLine:!0,width:2,gradient:!1}},legend:{position:"bottom"}},dateTabs:{time:[],timeStr:"",index:2,list:[{_id:1,name:"昨天",dimension:"hour"},{_id:0,name:"今天",dimension:"hour"},{_id:7,name:"最近七天",dimension:"day"},{_id:30,name:"最近30天",dimension:"day"},{_id:90,name:"最近90天",dimension:"day"},{_id:372,name:"月纬度",dimension:"month"},{_id:1116,name:"季纬度",dimension:"quarter"},{_id:4392,name:"年纬度",dimension:"year"}]},statTabs:{index:0,list:Q},queryMode:0}),created(){this.getCloudDataDebounce=$((()=>{this.getCloudData()}),300),this.getCloudDataDebounce()},methods:{getCloudData(t={}){let e=this.query;if(!e.appid)return void(this.errorMessage="请先选择应用");this.errorMessage="";let n=this.getWhere(),l={...e,...n},i=this.statTabs.list[this.statTabs.index].list;l=w(l,!0,["uni_platform"]);a.database().collection(this.tableName).where(l).field(`${M(i)}, start_time`).groupBy("start_time").groupField(k(i)).orderBy("start_time","asc").limit(100).get({getCount:!0}).then((t=>{let{count:e,data:a}=t.result;a=V(a,n,i),a=O({fieldsMap:i,data:a,formatter:!1}),this.setChartData(a,i,n)})).catch((t=>{console.error(t)})).finally((()=>{}))},setChartData(t,e,a){let n={categories:[],series:[]};e.map(((t,e)=>{t.trendChart&&n.series.push({name:t.title,data:[]})}));for(const l of t){const t=this.formatDate(l.start_time,a.dimension);n.categories.push(t),e.map(((t,e)=>{if(t.trendChart){let a=Number(l[t.field]);n.series[e].data.push(a)}}))}this.chartData=n},formatDate(t,e){let a=new Date(t),n=a.getFullYear(),l=a.getMonth()+1;a.getDate();let i=a.getHours(),s=Math.floor((a.getMonth()+3)/3);return l<10&&(l="0"+l),"hour"===e?`${i}时`:"month"===e?`${n}-${l}`:"quarter"===e?`${n}/Q${s}`:"year"===e?`${n}`:E(a)},datePickerChange(t){this.dateTabs.time=t,this.queryMode=1,this.getCloudData()},dateTabsChange(t,e){this.dateTabs.index=e,this.queryMode=0,this.getCloudData()},statTabsChange(t,e,a){this.statTabs.index=e,this.getCloudData({field:t,name:a})},getWhere(){let t=[],e=this.dateTabs.list[this.dateTabs.index]||{};if("number"==typeof e._id&&0===this.queryMode){let a=A(e._id),n=j.getOffsetStartAndEnd("day",0).endTime;1==e._id&&(n=j.getOffsetStartAndEnd("day",0,a).endTime),t=[a,n]}else this.dateTabs.time&&(t=this.dateTabs.time);let a=e.dimension||"day";return this.dateTabs.timeStr=`${j.timeFormat(t[0])} ~ ${j.timeFormat(t[1])}`,this.dateTabs.time=t,{dimension:a,start_time:t}}},watch:{query:{deep:!0,handler(t){this.getCloudDataDebounce()}}},computed:{}},[["render",function(t,e,a,l,s,r){const d=g,o=n(i("uni-stat-tabs"),v),f=n(i("uni-datetime-picker"),C),h=n(i("qiun-data-charts"),F);return u(),m(d,{class:"uni-stat--x p-m"},{default:c((()=>[_(d,{class:"uni-stat-card-header"},{default:c((()=>[p("趋势图")])),_:1}),_(d,{class:"flex"},{default:c((()=>[_(o,{type:"box",current:s.dateTabs.index,tabs:s.dateTabs.list,onChange:r.dateTabsChange},null,8,["current","tabs","onChange"]),_(f,{type:"datetimerange",modelValue:s.dateTabs.time,"onUpdate:modelValue":e[0]||(e[0]=t=>s.dateTabs.time=t),end:Date.now(),"return-type":"timestamp","clear-icon":!1,class:"uni-stat-datetime-picker",onChange:r.datePickerChange},null,8,["modelValue","end","onChange"])])),_:1}),_(o,{type:"box",current:s.statTabs.index,tabs:s.statTabs.list,onChange:r.statTabsChange},null,8,["current","tabs","onChange"]),_(d,{class:"uni-charts-box"},{default:c((()=>[_(h,{type:"area",chartData:s.chartData,opts:s.opts,errorMessage:s.errorMessage},null,8,["chartData","opts","errorMessage"])])),_:1})])),_:1})}],["__scopeId","data-v-90241fc4"]])},data:()=>({query:{appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:""}}),onLoad(t){const{appid:e}=t;e&&(this.query.appid=e)},computed:{versionQuery(){const{appid:t,uni_platform:e}=this.query;return w({appid:t,uni_platform:e})},channelQuery(){const{appid:t,platform_id:e}=this.query;return w({appid:t,platform_id:e})}},created(){},methods:{platformChange(t,e,a,n){this.query.version_id=0,this.query.uni_platform=n.code}},watch:{}},[["render",function(e,a,l,s,r,d){const o=n(i("uni-stat-breadcrumb"),t),p=g,f=n(i("uni-data-select"),T),h=n(i("uni-stat-tabs"),v),y=x("statPanelTotal"),b=x("statPanelToday"),D=x("trendChart");return u(),m(p,{class:"fix-top-window"},{default:c((()=>[_(p,{class:"uni-header"},{default:c((()=>[_(o,{class:"uni-stat-breadcrumb-on-phone"})])),_:1}),_(p,{class:"uni-container"},{default:c((()=>[_(p,{class:"uni-stat--x flex p-1015"},{default:c((()=>[_(f,{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",modelValue:r.query.appid,"onUpdate:modelValue":a[0]||(a[0]=t=>r.query.appid=t),clear:!1},null,8,["modelValue"]),_(f,{collection:"opendb-app-versions",where:d.versionQuery,class:"ml-m",field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择",modelValue:r.query.version_id,"onUpdate:modelValue":a[1]||(a[1]=t=>r.query.version_id=t)},null,8,["where","modelValue"])])),_:1}),_(p,{class:"uni-stat--x"},{default:c((()=>[_(h,{label:"平台选择",type:"boldLine",mode:"platform",modelValue:r.query.platform_id,"onUpdate:modelValue":a[2]||(a[2]=t=>r.query.platform_id=t),onChange:d.platformChange},null,8,["modelValue","onChange"]),r.query.platform_id&&-1===r.query.platform_id.indexOf("==")?(u(),m(f,{key:0,collection:"uni-stat-app-channels",where:d.channelQuery,class:"p-channel",field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择",modelValue:r.query.channel_id,"onUpdate:modelValue":a[3]||(a[3]=t=>r.query.channel_id=t)},null,8,["where","modelValue"])):q("",!0)])),_:1}),_(y,{query:r.query},null,8,["query"]),_(b,{query:r.query},null,8,["query"]),_(D,{query:r.query},null,8,["query"])])),_:1})])),_:1})}]]);export{G as default};
