import{_ as e,V as n,aq as t,n as a,s as i,R as s,h as r,a as u,r as o,b as l,c as d,w as c,i as m,al as p,d as _,e as g,f as b,j as f,o as h,l as y,J as v,m as w,t as C,x as k,T as M,X as x,p as T,q as j,F as $,u as S,W as z}from"./index-BdDI6p4_.js";import{_ as I}from"./uni-stat-breadcrumb.CDsItGfh.js";import{_ as D}from"./unicloud-db.2xOvspzz.js";const q=[{menu_id:"index",name:"首页",icon:"uni-icons-home",url:"/",sort:100,parent_id:"",permission:[],enable:!0,create_date:1602662469396},{menu_id:"system_management",name:"系统管理",icon:"admin-icons-fl-xitong",url:"",sort:1e3,parent_id:"",permission:[],enable:!0,create_date:1602662469396},{menu_id:"system_user",name:"用户管理",icon:"admin-icons-manager-user",url:"/pages/system/user/list",sort:1010,parent_id:"system_management",permission:[],enable:!0,create_date:1602662469398},{menu_id:"system_role",name:"角色管理",icon:"admin-icons-manager-role",url:"/pages/system/role/list",sort:1020,parent_id:"system_management",permission:[],enable:!0,create_date:1602662469397},{menu_id:"system_permission",name:"权限管理",icon:"admin-icons-manager-permission",url:"/pages/system/permission/list",sort:1030,parent_id:"system_management",permission:[],enable:!0,create_date:1602662469396},{menu_id:"system_menu",name:"菜单管理",icon:"admin-icons-manager-menu",url:"/pages/system/menu/list",sort:1040,parent_id:"system_management",permission:[],enable:!0,create_date:1602662469396},{menu_id:"system_app",name:"应用管理",icon:"admin-icons-manager-app",url:"/pages/system/app/list",sort:1035,parent_id:"system_management",permission:[],enable:!0,create_date:1602662469399},{menu_id:"system_update",name:"App升级中心",icon:"uni-icons-cloud-upload",url:"/uni_modules/uni-upgrade-center/pages/version/list",sort:1036,parent_id:"system_management",permission:[],enable:!0,create_date:1656491532434},{menu_id:"system_tag",name:"标签管理",icon:"admin-icons-manager-tag",url:"/pages/system/tag/list",sort:1037,parent_id:"system_management",permission:[],enable:!0,create_date:1602662479389},{permission:[],enable:!0,menu_id:"safety_statistics",name:"安全审计",icon:"admin-icons-safety",url:"",sort:3100,parent_id:"",create_date:1638356430871},{permission:[],enable:!0,menu_id:"safety_statistics_user_log",name:"用户日志",icon:"",url:"/pages/system/safety/list",sort:3101,parent_id:"safety_statistics",create_date:1638356430871},{permission:[],enable:!0,menu_id:"uni-stat",name:"uni 统计",icon:"admin-icons-tongji",url:"",sort:2100,parent_id:"",create_date:1638356430871},{parent_id:"uni-stat",permission:[],enable:!0,menu_id:"uni-stat-device",name:"设备统计",icon:"admin-icons-shebeitongji",url:"",sort:2120,create_date:1638356902516},{parent_id:"uni-stat-device",permission:[],enable:!0,menu_id:"uni-stat-device-overview",name:"概况",icon:"",url:"/pages/uni-stat/device/overview/overview",sort:2121,create_date:1638356902516},{parent_id:"uni-stat-device",permission:[],enable:!0,menu_id:"uni-stat-device-activity",name:"活跃度",icon:"",url:"/pages/uni-stat/device/activity/activity",sort:2122,create_date:1638356902516},{parent_id:"uni-stat-device",permission:[],enable:!0,menu_id:"uni-stat-device-trend",name:"趋势分析",icon:"",url:"/pages/uni-stat/device/trend/trend",sort:2123,create_date:1638356902516},{parent_id:"uni-stat-device",permission:[],enable:!0,menu_id:"uni-stat-device-retention",name:"留存",icon:"",url:"/pages/uni-stat/device/retention/retention",sort:2124,create_date:1638356902516},{parent_id:"uni-stat-device",permission:[],enable:!0,menu_id:"uni-stat-device-comparison",name:"平台对比",icon:"",url:"/pages/uni-stat/device/comparison/comparison",sort:2125,create_date:1638356902516},{parent_id:"uni-stat-device",permission:[],enable:!0,menu_id:"uni-stat-device-stickiness",name:"粘性",icon:"",url:"/pages/uni-stat/device/stickiness/stickiness",sort:2126,create_date:1638356902516},{parent_id:"uni-stat",permission:[],enable:!0,menu_id:"uni-stat-user",name:"注册用户统计",icon:"admin-icons-yonghutongji",url:"",sort:2122,create_date:1638356902516},{parent_id:"uni-stat-user",permission:[],enable:!0,menu_id:"uni-stat-user-overview",name:"概况",icon:"",url:"/pages/uni-stat/user/overview/overview",sort:2121,create_date:1638356902516},{parent_id:"uni-stat-user",permission:[],enable:!0,menu_id:"uni-stat-user-activity",name:"活跃度",icon:"",url:"/pages/uni-stat/user/activity/activity",sort:2122,create_date:1638356902516},{parent_id:"uni-stat-user",permission:[],enable:!0,icon:"",menu_id:"uni-stat-user-trend",name:"趋势分析",url:"/pages/uni-stat/user/trend/trend",sort:2123,create_date:1638356902516},{parent_id:"uni-stat-user",permission:[],enable:!0,menu_id:"uni-stat-user-retention",name:"留存",icon:"",url:"/pages/uni-stat/user/retention/retention",sort:2124,create_date:1638356902516},{parent_id:"uni-stat-user",permission:[],enable:!0,menu_id:"uni-stat-user-comparison",name:"平台对比",icon:"",url:"/pages/uni-stat/user/comparison/comparison",sort:2125,create_date:1638356902516},{parent_id:"uni-stat-user",permission:[],enable:!0,menu_id:"uni-stat-user-stickiness",name:"粘性",icon:"",url:"/pages/uni-stat/user/stickiness/stickiness",sort:2126,create_date:1638356902516},{parent_id:"uni-stat",permission:[],enable:!0,menu_id:"uni-stat-page-analysis",name:"页面统计",icon:"admin-icons-page-ent",url:"",sort:2123,create_date:1638356902516},{parent_id:"uni-stat-page-analysis",permission:[],enable:!0,menu_id:"uni-stat-page-res",name:"受访页",icon:"",url:"/pages/uni-stat/page-res/page-res",sort:2131,create_date:1638356902516},{parent_id:"uni-stat-page-analysis",permission:[],enable:!0,menu_id:"uni-stat-page-ent",name:"入口页",icon:"",url:"/pages/uni-stat/page-ent/page-ent",sort:2132,create_date:1638356902516},{parent_id:"uni-stat",permission:[],enable:!0,menu_id:"uni-stat-senceChannel",name:"渠道/场景值分析",icon:"admin-icons-qudaofenxi",url:"",sort:2150,create_date:1638356902516},{parent_id:"uni-stat-senceChannel",permission:[],enable:!0,menu_id:"uni-stat-senceChannel-scene",name:"场景值（小程序）",icon:"",url:"/pages/uni-stat/scene/scene",sort:2151,create_date:1638356902516},{parent_id:"uni-stat-senceChannel",permission:[],enable:!0,menu_id:"uni-stat-senceChannel-channel",name:"渠道（app）",icon:"",url:"/pages/uni-stat/channel/channel",sort:2152,create_date:1638356902516},{parent_id:"uni-stat",permission:[],enable:!0,menu_id:"uni-stat-event-event",name:"自定义事件",icon:"admin-icons-shijianfenxi",url:"/pages/uni-stat/event/event",sort:2160,create_date:1638356902516},{parent_id:"uni-stat",permission:[],enable:!0,menu_id:"uni-stat-error",name:"错误统计",icon:"admin-icons-cuowutongji",url:"",sort:2170,create_date:1638356902516},{parent_id:"uni-stat-error",permission:[],enable:!0,menu_id:"uni-stat-error-js",name:"js报错",icon:"",url:"/pages/uni-stat/error/js/js",sort:2171,create_date:1638356902516},{parent_id:"uni-stat-error",permission:[],enable:!0,menu_id:"uni-stat-error-app",name:"app崩溃",icon:"",url:"/pages/uni-stat/error/app/app",sort:2172,create_date:1638356902516},{menu_id:"uni-stat-pay",name:"支付统计",icon:"uni-icons-circle",url:"",sort:2122,parent_id:"uni-stat",permission:[],enable:!0,create_date:1667386977981},{menu_id:"uni-stat-pay-overview",name:"概况",icon:"",url:"/pages/uni-stat/pay-order/overview/overview",sort:21221,parent_id:"uni-stat-pay",permission:[],enable:!0,create_date:1667387038602},{menu_id:"uni-stat-pay-funnel",name:"转换漏斗分析",icon:"",url:"/pages/uni-stat/pay-order/funnel/funnel",sort:21222,parent_id:"uni-stat-pay",permission:[],enable:!0,create_date:1668430092890},{menu_id:"uni-stat-pay-ranking",name:"价值用户排行",icon:"",url:"/pages/uni-stat/pay-order/ranking/ranking",sort:21223,parent_id:"uni-stat-pay",permission:[],enable:!0,create_date:1668430128302},{menu_id:"uni-stat-pay-order-list",name:"订单明细",icon:"",url:"/pages/uni-stat/pay-order/list/list",sort:21224,parent_id:"uni-stat-pay",permission:[],enable:!0,create_date:1667387078947}],L=n.database(),P=[];function E(e,n,t=0){return e.forEach((a=>{a.menu_id===n&&a.parent_id&&(t=t+1+E(e,a.parent_id,t))})),t}function R(e,n,t=[]){return e.find((e=>e.parent_id===n))&&e.forEach((a=>{a.parent_id===n&&(t.push(a._id),R(e,a.menu_id,t))})),t}const B=e({data:()=>({query:"",where:"",orderby:"create_date asc",options:{pageSize:2e4,pageCurrent:1},selectedIndexs:[],loading:!0,menus:[],errMsg:"",currentTab:"menus",selectedPluginMenuIndexs:[]}),computed:{pluginMenus(){const e=[];if(!this.$hasRole("admin"))return e;const n=this.menus;return n.length?(P.forEach((t=>{n.find((e=>e.menu_id===t.menu_id))||e.push(t)})),e):e}},watch:{pluginMenus(e){e.length||(this.currentTab="menus")}},methods:{enableChange(e){e.enable=!e.enable,L.collection("opendb-admin-menus").doc(e._id).update({enable:e.enable})},getSortMenu:e=>(e.map((n=>{e.some((e=>e.parent_id===n.menu_id))||(n.isLeafNode=!0)})),t(e)),onqueryload(e){for(var n=0;n<e.length;n++){let t=e[n];const a=E(e,t.menu_id);t.name=(a?"　".repeat(a)+"|-":"")+t.name}const t=this.getSortMenu(e),a=[];this.patTree(t,a),e.length=0,e.push(...a),this.menus=e},patTree(e,n){return e.forEach((e=>{n.push(e),e.children.length&&this.patTree(e.children,n)})),n},switchTab(e){this.currentTab=e},loadData(e=!0){this.$refs.udb.loadData({clear:e})},navigateTo(e,n){a({url:e,events:{refreshData:()=>{this.loadData(n)}}})},confirmDelete(e){let n=e._id,t="是否删除该菜单？";const a=R(this.menus,e.menu_id);a.length&&(t="是否删除该菜单及其子菜单？"),n=[n,...a],i({title:"提示",content:t,success:e=>{e.confirm&&this.$refs.udb.remove(n,{needConfirm:!1})}})},pluginMenuSelectChange(e){this.selectedPluginMenuIndexs=e.detail.index},addPluginMenus(e){if(!this.selectedPluginMenuIndexs.length)return i({title:"提示",content:"请选择要添加的菜单！",showCancel:!1});const t=this.pluginMenus,a=[];this.selectedPluginMenuIndexs.forEach((e=>{const n=t[e];if(n){const e=JSON.parse(JSON.stringify(n));e.enable=!0,delete e.json,a.push(e)}})),i({title:"提示",content:"您确认要添加已选中的菜单吗？",success:e=>{if(!e.confirm)return;s({mask:!0});const u=a.length===t.length;n.database().collection("opendb-admin-menus").add(a).then((e=>{i({title:"提示",content:"添加菜单成功！",showCancel:!1,success:()=>{this.$refs.pluginMenusTable.clearSelection(),u&&(this.currentTab="menus"),this.loadData()}})})).catch((e=>{i({title:"提示",content:e.message,showCancel:!1})})).finally((()=>{r()}))}})},async updateBuiltInMenu(){i({title:"提示",content:"确定更新内置菜单吗？\n（该操作不会影响现有的菜单）",success:async e=>{if(e.confirm){const e=n.database(),a=e.command;let i=q.map(((e,n)=>e.menu_id));s({title:"更新中...",mask:!0});try{let n=[],t=(await e.collection("opendb-admin-menus").where({menu_id:a.in[i]}).limit(500).get()).result.data;if(q.map(((e,a)=>{t.find(((n,t,a)=>n.menu_id===e.menu_id))||n.push({...e,create_date:void 0})})),n&&n.length>0){let t=await e.collection("opendb-admin-menus").add(n);u({title:`新增了${t.result.inserted}个菜单，即将刷新`,icon:"none"}),setTimeout((()=>{window.location.reload()}),300)}else u({title:"菜单无变动",icon:"none"})}catch(t){console.error(t)}finally{r()}}}})}}},[["render",function(e,n,t,a,i,s){const r=o(l("uni-stat-breadcrumb"),I),u=m,q=o(l("uni-badge"),p),L=S,P=o(l("uni-th"),_),E=o(l("uni-tr"),g),R=o(l("uni-td"),b),B=z,J=o(l("uni-table"),f),N=o(l("unicloud-db"),D);return h(),d(u,null,{default:c((()=>[y(u,{class:"uni-header"},{default:c((()=>[y(r,{class:"uni-stat-breadcrumb-on-phone"})])),_:1}),y(u,{class:"uni-tabs__header"},{default:c((()=>[y(u,{class:"uni-tabs__nav-wrap"},{default:c((()=>[y(u,{class:"uni-tabs__nav-scroll"},{default:c((()=>[y(u,{class:"uni-tabs__nav"},{default:c((()=>[y(u,{onClick:n[0]||(n[0]=e=>s.switchTab("menus")),class:v([{"is-active":"menus"===i.currentTab},"uni-tabs__item"])},{default:c((()=>[w(C(e.$t("menu.text.menuManager")),1)])),_:1},8,["class"]),s.pluginMenus.length?(h(),d(u,{key:0,onClick:n[1]||(n[1]=e=>s.switchTab("pluginMenus")),class:v([{"is-active":"pluginMenus"===i.currentTab},"uni-tabs__item"])},{default:c((()=>[w(C(e.$t("menu.text.additiveMenu"))+" ",1),y(q,{class:"menu-badge",text:s.pluginMenus.length,type:"error"},null,8,["text"])])),_:1},8,["class"])):k("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),M(y(u,null,{default:c((()=>[y(u,{class:"uni-header",style:{"border-bottom":"0","margin-bottom":"-15px"}},{default:c((()=>[y(u,{class:"uni-group"},{default:c((()=>[y(L,{onClick:n[2]||(n[2]=e=>s.navigateTo("./add")),size:"mini",plain:"true",type:"primary"},{default:c((()=>[w(C(e.$t("menu.button.addFirstLevelMenu")),1)])),_:1}),y(L,{onClick:s.updateBuiltInMenu,size:"mini",plain:"true",style:{"margin-left":"10px"},type:"warn"},{default:c((()=>[w(C(e.$t("menu.button.updateBuiltInMenu")),1)])),_:1},8,["onClick"])])),_:1}),y(u,{class:"uni-group"})])),_:1}),y(u,{class:"uni-container"},{default:c((()=>[y(N,{ref:"udb",onLoad:s.onqueryload,collection:"opendb-admin-menus",options:i.options,where:i.where,"page-data":"replace",orderby:i.orderby,getcount:!0,"page-size":i.options.pageSize,"page-current":i.options.pageCurrent},{default:c((({data:n,pagination:t,loading:a,error:r})=>[y(J,{loading:a,class:"table-pc",emptyText:i.errMsg||e.$t("common.empty"),border:"",stripe:""},{default:c((()=>[y(E,null,{default:c((()=>[y(P,{align:"center"},{default:c((()=>[w("排序")])),_:1}),y(P,{width:"200",align:"center"},{default:c((()=>[w("名称")])),_:1}),y(P,{align:"center"},{default:c((()=>[w("标识")])),_:1}),y(P,{align:"center"},{default:c((()=>[w("URL")])),_:1}),y(P,{width:"100",align:"center"},{default:c((()=>[w("是否启用")])),_:1}),y(P,{align:"center"},{default:c((()=>[w("操作")])),_:1})])),_:1}),(h(!0),T($,null,j(n,((n,t)=>(h(),d(E,{key:t},{default:c((()=>[y(R,{align:"center"},{default:c((()=>[w(C(n.sort),1)])),_:2},1024),y(R,null,{default:c((()=>[w(C(n.name),1)])),_:2},1024),y(R,null,{default:c((()=>[w(C(n.menu_id),1)])),_:2},1024),y(R,null,{default:c((()=>[w(C(n.url),1)])),_:2},1024),y(R,{align:"center",class:v({"menu-disable":!n.enable})},{default:c((()=>[y(B,{checked:n.enable,onChange:e=>s.enableChange(n)},null,8,["checked","onChange"])])),_:2},1032,["class"]),y(R,{align:"center"},{default:c((()=>[y(u,{class:"uni-group",style:{"justify-content":"left"}},{default:c((()=>[y(L,{onClick:e=>s.navigateTo("./edit?id="+n._id,!1),class:"uni-button",size:"mini",type:"primary"},{default:c((()=>[w(C(e.$t("common.button.edit")),1)])),_:2},1032,["onClick"]),"system_menu"!==n.menu_id&&"system_management"!==n.menu_id?(h(),d(L,{key:0,onClick:e=>s.confirmDelete(n),class:"uni-button",size:"mini",type:"warn"},{default:c((()=>[w(C(e.$t("common.button.delete")),1)])),_:2},1032,["onClick"])):k("",!0),n.url?k("",!0):(h(),d(L,{key:1,onClick:e=>s.navigateTo("./add?parent_id="+n.menu_id,!1),class:"uni-button",size:"mini",type:"primary"},{default:c((()=>[w(C(e.$t("menu.button.addChildMenu")),1)])),_:2},1032,["onClick"]))])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1032,["loading","emptyText"])])),_:1},8,["onLoad","options","where","orderby","page-size","page-current"])])),_:1})])),_:1},512),[[x,"menus"===i.currentTab]]),M(y(u,null,{default:c((()=>[y(u,{class:"uni-header",style:{"border-bottom":"0","margin-bottom":"-15px"}},{default:c((()=>[y(u,{class:"uni-group"},{default:c((()=>[y(L,{style:{width:"130px"},onClick:s.addPluginMenus,size:"mini",type:"primary"},{default:c((()=>[w("添加选中的菜单 ")])),_:1},8,["onClick"])])),_:1}),y(u,{class:"uni-group"})])),_:1}),y(u,{class:"uni-container"},{default:c((()=>[y(J,{ref:"pluginMenusTable",type:"selection",border:"",stripe:"",onSelectionChange:s.pluginMenuSelectChange},{default:c((()=>[y(E,null,{default:c((()=>[y(P,{align:"center"},{default:c((()=>[w("名称（标识）")])),_:1}),y(P,{align:"center"},{default:c((()=>[w("URL")])),_:1}),y(P,{align:"center"},{default:c((()=>[w("插件菜单 json 文件")])),_:1})])),_:1}),(h(!0),T($,null,j(s.pluginMenus,((e,n)=>(h(),d(E,{key:n},{default:c((()=>[y(R,null,{default:c((()=>[w(C(e.name)+"（"+C(e.menu_id)+"）",1)])),_:2},1024),y(R,null,{default:c((()=>[w(C(e.url),1)])),_:2},1024),y(R,null,{default:c((()=>[w(C(e.json),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["onSelectionChange"]),y(u,{class:"uni-sub-title",style:{"margin-top":"15px"}},{default:c((()=>[w(" 以上待添加菜单来自于三方插件，添加后，将显示在菜单管理中，若不希望显示在上述表格中时，可手动删除项目中对应的`插件id-menu.json`文件。 ")])),_:1})])),_:1})])),_:1},512),[[x,"pluginMenus"===i.currentTab]])])),_:1})}],["__scopeId","data-v-57608cb1"]]);export{B as default};
