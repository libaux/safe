import{_ as t,V as e,n as a,r as s,b as l,c as i,w as o,i as r,aN as n,K as d,d as u,e as c,f as p,j as h,o as m,l as _,J as f,x as g,m as y,p as b,q as v,F as D,aE as T,t as q}from"./index-BdDI6p4_.js";import{_ as x}from"./uni-stat-breadcrumb.CDsItGfh.js";import{_ as C}from"./uni-data-select.B45eKRSr.js";import{_ as F}from"./uni-stat-tabs.CZpTusrL.js";import{_ as k}from"./uni-stat-panel.BshKYSxS.js";import{_ as w}from"./qiun-data-charts.BGalLaW5.js";import{_ as S}from"./uni-tooltip.DsbdAVZl.js";import{s as V,d as M,g as N,a as P,b as j,p as O,m as I,c as $,h as A}from"./util.C4iP5xno.js";const z=[{value:"今天",contrast:"昨天"},{title:"新增设备",field:"new_device_count",tooltip:"首次访问应用的设备数（以设备为判断标准，去重）",value:0,contrast:0},{title:"活跃设备",field:"active_device_count",tooltip:"访问过应用内任意页面的总设备数，今日数据为每小时活跃设备累加（未虑重），昨日数据为全天活跃设备虑重后结果",value:0,contrast:0},{title:"访问次数",field:"page_visit_count",tooltip:"访问过应用内任意页面总次数，多个页面之间跳转、同一页面的重复访问计为多次访问",value:0,contrast:0},{title:"启动次数",field:"app_launch_count",tooltip:"设备从打开应用到主动关闭应用或超时退出计为一次启动",value:0,contrast:0},{title:"次均停留时长",field:"avg_device_session_time",formatter:":",tooltip:"平均每次打开应用停留在应用内的总时长，即应用停留总时长/启动次数",value:0,contrast:0,stat:"avg"},{title:"设备平均停留时长 ",field:"avg_device_time",formatter:":",tooltip:"平均每个设备停留在应用内的总时长，即应用停留总时长/活跃设备",value:0,contrast:0,stat:"avg"},{title:"跳出率",field:"bounceRate",computed:"bounce_times/app_launch_count",formatter:"%",tooltip:"只浏览一个页面便离开应用的次数占总启动次数的百分比",value:0,contrast:0,fix:2},{title:"总设备数",field:"total_devices",tooltip:"从添加统计到当前选择时间的总设备数（去重）",value:0,contrast:0}],B=[{title:"受访页",field:"path",tooltip:"设备进入应用访问的所有页面，例如设备从页面1进入应用，跳转到页面2，1,2均为受访页",formatter:""},{title:"访问次数",field:"visit_times",tooltip:"访问该页面的总次数",value:0},{title:"占比",field:"rate",computed:"visit_times/total_app_access",tooltip:"页面的访问次数占所有页面访问次数的比例",formatter:"%"}],J=[{title:"入口页",field:"path",tooltip:"设备进入应用访问的第一个页面，例如设备从页面1进入应用，跳转到页面2，1为入口页，而2不是",formatter:""},{title:"入口页次数",field:"entry_count",tooltip:"访问该入口页的总次数",value:0},{title:"占比",field:"rate",computed:"entry_count/total_app_access",tooltip:"页面的入口页次数占所有页面访问次数的比例",formatter:"%"}],U=z.filter((t=>t.hasOwnProperty("value")));const R=t({data:()=>({tableName:"uni-stat-result",fieldsMap:z,resFieldsMap:B,entFieldsMap:J,query:{dimension:"hour",appid:"",version_id:"",platform_id:"",uni_platform:"",start_time:[],channel_id:""},options:{pageCurrent:1,total:0,pageSizeIndex:0,pageSizeRange:[10,20,50,100]},errorMessage:"",loading:!1,currentDateTab:2,chartTab:"new_user_count",tableData:[],resTableData:[],entTableData:[],panelData:U,chartData:{},eopts:{seriesTemplate:[{itemStyle:{borderWidth:2,borderColor:"#1890FF",color:"#1890FF"},areaStyle:{color:{colorStops:[{offset:0,color:"#1890FF"},{offset:1,color:"#FFFFFF"}]}}},{lineStyle:{color:"#ea7ccc",width:2,type:"dashed"},itemStyle:{borderWidth:1,borderColor:"#ea7ccc",color:"#ea7ccc"},areaStyle:null}]},tabIndex:0,tabName:"新增设备"}),onLoad(t){const{appid:e}=t;e&&(this.query.appid=e)},computed:{pageSize(){const{pageSizeRange:t,pageSizeIndex:e}=this.options;return t[e]},chartTabs(){const t=[];return z.forEach((e=>{const a=e.field,s=e.title;a&&s&&t.push({_id:a,name:s})})),t},versionQuery(){const{appid:t,uni_platform:e}=this.query;return V({appid:t,uni_platform:e})},channelQuery(){const{appid:t,platform_id:e}=this.query;return V({appid:t,platform_id:e})}},created(){this.debounceGet=M((()=>{this.getAllData(this.query)}),300)},watch:{query:{deep:!0,handler(t){this.options.pageCurrent=1,this.debounceGet()}}},methods:{useDatetimePicker(){this.currentDateTab=null},changePlatform(t,e,a,s){this.query.version_id=0,this.query.uni_platform=s.code},changeTimeRange(t,e){this.currentDateTab=e;let a,s;a=N(t),s=t?N(0)-1:N(0)+864e5-1,this.query.start_time=[a,s]},changePageCurrent(t){this.options.pageCurrent=t.current,this.getChartData(this.query)},changePageSize(t){const{value:e}=t.detail;this.options.pageCurrent=1,this.options.pageSizeIndex=e,this.getChartData(this.query)},changeChartTab(t,e,a){this.tabIndex=e,this.tabName=a,this.getChartData(this.query,t,a)},getAllData(t){t.appid?(this.errorMessage="",this.getPanelData(),this.getChartData(t),this.getPageData(t,"res"),this.getPageData(t,"ent")):this.errorMessage="请先选择应用"},getDays(){if(!this.query.start_time.length)return!0;const[t,e]=this.query.start_time;return e-t>=864e5},getPanelData(){const{appid:t,platform_id:a,version_id:s,channel_id:l}=this.query;let i=V({appid:t,platform_id:a,version_id:s,channel_id:l,start_time:[N(1),(new Date).getTime()]});e.database().collection(this.tableName).where(i).field(`${P(z)},dimension,stat_date`).groupBy("stat_date, dimension").groupField(j(z)).orderBy("stat_date","desc").get().then((t=>{const e=t.result.data,a=e.find((t=>t.stat_date===O(N(0),"","")))||{};a.total_devices=0;const s=e.find((t=>"day"===t.dimension&&t.stat_date===O(N(1),"","")));this.panelData=[],this.panelData=I(z,a),this.panelData.map((t=>{I(z,s,t,"","contrast")})),$.call(this,i)}))},getChartData(t,a=this.chartTabs[this.tabIndex]._id,s=this.chartTabs[this.tabIndex].name){this.options;const l=this.currentDateTab,i=N(l),o=864e5;let r;if(!this.getDays()){const e=i-o,a=i+o-1;t=JSON.parse(JSON.stringify(t)),r=t.start_time=[e,a]}t=V(t,!0,["uni_platform"]);e.database().collection(this.tableName).where(t).field(`${P(z,a)}, start_time`).groupBy("start_time").groupField(j(z,a)).orderBy("start_time","asc").get({getCount:!0}).then((t=>{const{count:e,data:l}=t.result,o={categories:[],series:[{name:s,data:[]}]};let n=z.filter((t=>t.field===a));if(n=JSON.parse(JSON.stringify(n)),delete n[0].value,n[0].formatter="",this.getDays())for(const s of l){I(n,s,s);const t=A(s.start_time,"day");let e=Number(s[a]);o.series[0].data.push(e),o.categories.push(t)}else{const[t,e]=r,s=o.series[1]={name:A(t),data:[]},d=o.series[0]={name:A(e),data:[]};for(let r=0;r<24;++r){const t=r<10?"0"+r:r,e=`${t}:00 ~ ${t}:59`;o.categories.push(e),s.data[r]=0,d.data[r]=0,l.forEach((t=>{I(n,t,t);let e=Number(t[a]);const l=new Date(t.start_time);t.start_time<i?l.getHours()===r&&(s.data[r]=e):l.getHours()===r&&(d.data[r]=e)}))}}this.chartData=o})).catch((t=>{console.error(t)})).finally((()=>{}))},getAppAccessTimes(t){return e.database().collection(this.tableName).where(t).groupBy("appid").groupField("sum(page_visit_count) as total_app_access").get()},getPageData(t,a){(t=JSON.parse(JSON.stringify(t))).dimension="day",t=V(t,!1,["uni_platform"]),this.options;const s=this[`${a}FieldsMap`],l=s[1].field;this.loading=!0;const i=e.database(),o=V({appid:this.query.appid}),r=i.collection("uni-stat-pages").where(o).field("_id, title, path").getTemp(),n=i.collection("uni-stat-page-result").where(`${t} && ${l} > 0`).getTemp();i.collection(n,r).field(`${P(s,l)}, stat_date, page_id`).groupBy("page_id").groupField(j(s,l)).orderBy(l,"desc").limit(10).get({getCount:!0}).then((e=>{const{count:l,data:i}=e.result;let o;this.getAppAccessTimes(t).then((t=>{const e=t.result.data[0];o=e&&e.total_app_access})).finally((()=>{this[`${a}TableData`]=[];for(const t of i){t.total_app_access=o;const e=t.page_id;if(Array.isArray(e)){delete t.page_id;const a=e[0];if(a&&Object.keys(a).length)for(const e in a)"_id"!==e&&(t[e]=a[e])}I(s,t,t),this[`${a}TableData`].push(t)}this.loading=!1}))})).catch((t=>{console.error(t)})).finally((()=>{}))},navTo(t){t&&a({url:t})}}},[["render",function(t,e,a,V,M,N){const P=s(l("uni-stat-breadcrumb"),x),j=r,O=s(l("uni-data-select"),C),I=s(l("uni-stat-tabs"),F),$=s(l("uni-datetime-picker"),n),A=s(l("uni-stat-panel"),k),z=s(l("qiun-data-charts"),w),B=s(l("uni-icons"),d),J=s(l("uni-tooltip"),S),U=s(l("uni-th"),u),R=s(l("uni-tr"),c),Q=s(l("uni-td"),p),E=s(l("uni-table"),h);return m(),i(j,{class:"fix-top-window"},{default:o((()=>[_(j,{class:"uni-header"},{default:o((()=>[_(P,{class:"uni-stat-breadcrumb-on-phone"})])),_:1}),_(j,{class:"uni-container"},{default:o((()=>[_(j,{class:"uni-stat--x flex p-1015"},{default:o((()=>[_(O,{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",modelValue:M.query.appid,"onUpdate:modelValue":e[0]||(e[0]=t=>M.query.appid=t),clear:!1},null,8,["modelValue"]),_(O,{collection:"opendb-app-versions",where:N.versionQuery,class:"ml-m",field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择",modelValue:M.query.version_id,"onUpdate:modelValue":e[1]||(e[1]=t=>M.query.version_id=t)},null,8,["where","modelValue"])])),_:1}),_(j,{class:"uni-stat--x flex"},{default:o((()=>[_(I,{label:"日期选择",current:M.currentDateTab,mode:"date",today:!0,onChange:N.changeTimeRange},null,8,["current","onChange"]),_($,{type:"datetimerange",end:(new Date).getTime(),modelValue:M.query.start_time,"onUpdate:modelValue":e[2]||(e[2]=t=>M.query.start_time=t),returnType:"timestamp",clearIcon:!1,class:f(["uni-stat-datetime-picker",{"uni-stat__actived":M.currentDateTab<0&&!!M.query.start_time.length}]),onChange:N.useDatetimePicker},null,8,["end","modelValue","class","onChange"])])),_:1}),_(j,{class:"uni-stat--x"},{default:o((()=>[_(I,{label:"平台选择",type:"boldLine",mode:"platform",modelValue:M.query.platform_id,"onUpdate:modelValue":e[3]||(e[3]=t=>M.query.platform_id=t),onChange:N.changePlatform},null,8,["modelValue","onChange"]),M.query.platform_id&&-1===M.query.platform_id.indexOf("==")?(m(),i(O,{key:0,collection:"uni-stat-app-channels",where:N.channelQuery,class:"p-channel",field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择",modelValue:M.query.channel_id,"onUpdate:modelValue":e[4]||(e[4]=t=>M.query.channel_id=t)},null,8,["where","modelValue"])):g("",!0)])),_:1}),_(A,{items:M.panelData,contrast:!0},null,8,["items"]),_(j,{class:"uni-stat--x p-m"},{default:o((()=>[_(j,{class:"uni-stat-card-header"},{default:o((()=>[y(" 趋势图 ")])),_:1}),_(I,{type:"box",modelValue:M.chartTab,"onUpdate:modelValue":e[5]||(e[5]=t=>M.chartTab=t),tabs:N.chartTabs,class:"mb-l",onChange:N.changeChartTab},null,8,["modelValue","tabs","onChange"]),_(j,{class:"uni-charts-box"},{default:o((()=>[_(z,{type:"area",chartData:M.chartData,eopts:M.eopts,echartsH5:"",echartsApp:"",tooltipFormat:"tooltipCustom",errorMessage:M.errorMessage},null,8,["chartData","eopts","errorMessage"])])),_:1})])),_:1}),_(j,{class:"dispaly-grid"},{default:o((()=>[_(j,{class:"uni-stat--x p-m"},{default:o((()=>[_(j,{class:"uni-stat-card-header"},{default:o((()=>[_(j,null,{default:o((()=>[y("受访页 TOP10")])),_:1}),_(j,{class:"uni-stat-card-header-link",onClick:e[6]||(e[6]=t=>N.navTo("/pages/uni-stat/page-res/page-res"))},{default:o((()=>[y("查看更多 ")])),_:1})])),_:1}),_(E,{loading:M.loading,border:"",stripe:"",emptyText:"暂无数据"},{default:o((()=>[_(R,null,{default:o((()=>[(m(!0),b(D,null,v(M.resFieldsMap,((t,e)=>(m(),b(D,{key:e},[t.title?(m(),i(U,{key:e,align:"center"},{default:o((()=>[_(J,null,T({default:o((()=>[y(q(t.title)+" ",1),t.tooltip?(m(),i(B,{key:0,type:"help",color:"#666"})):g("",!0)])),_:2},[t.tooltip?{name:"content",fn:o((()=>[_(j,{class:"uni-stat-tooltip-s"},{default:o((()=>[y(q(t.tooltip),1)])),_:2},1024)])),key:"0"}:void 0]),1024)])),_:2},1024)):g("",!0)],64)))),128))])),_:1}),(m(!0),b(D,null,v(M.resTableData,((t,e)=>(m(),i(R,{key:e},{default:o((()=>[(m(!0),b(D,null,v(M.resFieldsMap,((e,a)=>(m(),b(D,{key:a},[e.title?(m(),i(Q,{key:a,align:0===a?"left":"center"},{default:o((()=>[y(q(void 0!==t[e.field]?t[e.field]:"-"),1)])),_:2},1032,["align"])):g("",!0)],64)))),128))])),_:2},1024)))),128))])),_:1},8,["loading"])])),_:1}),_(j,{class:"uni-stat--x uni-stat-card p-m"},{default:o((()=>[_(j,{class:"uni-stat-card-header"},{default:o((()=>[_(j,null,{default:o((()=>[y("入口页 TOP10")])),_:1}),_(j,{class:"uni-stat-card-header-link",onClick:e[7]||(e[7]=t=>N.navTo("/pages/uni-stat/page-ent/page-ent"))},{default:o((()=>[y("查看更多 ")])),_:1})])),_:1}),_(E,{loading:M.loading,border:"",stripe:"",emptyText:"暂无数据"},{default:o((()=>[_(R,null,{default:o((()=>[(m(!0),b(D,null,v(M.entFieldsMap,((t,e)=>(m(),b(D,{key:e},[t.title?(m(),i(U,{key:e,align:"center"},{default:o((()=>[_(J,null,T({default:o((()=>[y(q(t.title)+" ",1),t.tooltip?(m(),i(B,{key:0,type:"help",color:"#666"})):g("",!0)])),_:2},[t.tooltip?{name:"content",fn:o((()=>[_(j,{class:"uni-stat-tooltip-s"},{default:o((()=>[y(q(t.tooltip),1)])),_:2},1024)])),key:"0"}:void 0]),1024)])),_:2},1024)):g("",!0)],64)))),128))])),_:1}),(m(!0),b(D,null,v(M.entTableData,((t,e)=>(m(),i(R,{key:e},{default:o((()=>[(m(!0),b(D,null,v(M.entFieldsMap,((e,a)=>(m(),b(D,{key:a},[e.title?(m(),i(Q,{key:a,align:0===a?"left":"center"},{default:o((()=>[y(q(void 0!==t[e.field]?t[e.field]:"-"),1)])),_:2},1032,["align"])):g("",!0)],64)))),128))])),_:2},1024)))),128))])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-fcc0eea3"]]);export{R as default};
