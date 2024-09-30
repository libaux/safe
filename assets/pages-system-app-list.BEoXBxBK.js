import{_ as e,Y as t,N as a,s as i,n,r as o,b as s,c as d,w as l,i as r,d as p,e as c,f as u,j as h,o as g,l as m,m as f,t as b,p as C,q as y,F as _,I as x,u as $}from"./index-nI17xpur.js";import{_ as w}from"./uni-stat-breadcrumb.CcLttN9R.js";import{_ as z}from"./uni-dateformat.XhJvGPjv.js";import{_ as k}from"./uni-pagination.CVUxf30B.js";import{_ as S}from"./unicloud-db.C5sq8uaK.js";import{e as D,f as T}from"./opendb-app-list.BrPUIYpy.js";const v=t.database(),I=[],j={ascending:"asc",descending:"desc"};const q=e({data:()=>({query:"",where:"",orderby:"create_date",orderByFieldName:"",selectedIndexs:[],options:{pageSize:20,pageCurrent:1,filterData:{},...D},imageStyles:{width:64,height:64},exportExcel:{filename:"opendb-app-list.xls",type:"xls",fields:{AppID:"appid","应用名称":"name","应用描述":"description","创建时间":"create_date"}},exportExcelData:[],addAppidLoading:!0,descriptionThWidth:380,buttonThWidth:400}),onLoad(){this._filter={}},onReady(){this.$refs.udb.loadData()},computed:{...a("app",["appName","appid"])},methods:{pageSizeChange(e){this.options.pageSize=e,this.options.pageCurrent=1,this.$nextTick((()=>{this.loadData()}))},onqueryload(e){e.find((e=>e.appid===this.appid))?this.addAppidLoading=!1:this.addCurrentAppid({appid:this.appid,name:this.appName,description:"admin 管理后台"}),this.exportExcelData=e},changeSize(e){this.pageSizeIndex=e.detail.value},addCurrentAppid(e){v.collection("opendb-app-list").add(e).then((e=>{this.loadData(),setTimeout((()=>{i({content:`检测到数据库中无当前应用, 已自动添加应用: ${this.appName}`,showCancel:!1})}),500)})).catch((e=>{})).finally((()=>{this.addAppidLoading=!1}))},getWhere(){const e=this.query.trim();if(!e)return"";const t=new RegExp(e,"i");return I.map((e=>t+".test("+e+")")).join(" || ")},search(){const e=this.getWhere();this.where=e,this.loadData()},loadData(e=!0){this.$refs.udb.loadData({clear:e})},onPageChanged(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo(e,t){n({url:e,events:{refreshData:()=>{this.loadData(t)}}})},selectedItems(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((t=>e[t]._id))},delTable(){console.warn("删除应用，只能删除应用表 opendb-app-list 中的应用数据记录，不能删除与应用关联的其他数据，例如：使用升级中心 uni-upgrade-center 等插件产生的数据（应用版本数据等）"),this.$refs.udb.remove(this.selectedItems(),{success:e=>{this.$refs.table.clearSelection()}})},selectionChange(e){this.selectedIndexs=e.detail.index},confirmDelete(e){console.warn("删除应用，只能删除应用表 opendb-app-list 中的应用数据记录，不能删除与应用关联的其他数据，例如：使用升级中心 uni-upgrade-center 等插件产生的数据（应用版本数据等）"),this.$refs.udb.remove(e,{confirmContent:"是否删除该应用",success:e=>{this.$refs.table.clearSelection()}})},sortChange(e,t){this.orderByFieldName=t,e.order?this.orderby=t+" "+j[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((()=>{this.$refs.udb.loadData()}))},filterChange(e,t){this._filter[t]={type:e.filterType,value:e.filter};let a=T(this._filter,v.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((()=>{this.$refs.udb.loadData()}))},publish(e){n({url:"/pages/system/app/uni-portal/uni-portal?id="+e})}}},[["render",function(e,t,a,i,n,D){const T=o(s("uni-stat-breadcrumb"),w),v=x,I=$,j=r,q=o(s("uni-th"),p),A=o(s("uni-tr"),c),L=o(s("uni-td"),u),F=o(s("uni-dateformat"),z),V=o(s("uni-table"),h),N=o(s("uni-pagination"),k),W=o(s("unicloud-db"),S);return g(),d(j,{class:"fix-top-window"},{default:l((()=>[m(j,{class:"uni-header"},{default:l((()=>[m(T,{class:"uni-stat-breadcrumb-on-phone"}),m(j,{class:"uni-group"},{default:l((()=>[m(v,{class:"uni-search",type:"text",modelValue:n.query,"onUpdate:modelValue":t[0]||(t[0]=e=>n.query=e),onConfirm:D.search,placeholder:e.$t("common.placeholder.query")},null,8,["modelValue","onConfirm","placeholder"]),m(I,{class:"uni-button hide-on-phone",type:"default",size:"mini",onClick:D.search},{default:l((()=>[f(b(e.$t("common.button.search")),1)])),_:1},8,["onClick"]),m(I,{class:"uni-button",type:"primary",size:"mini",onClick:t[1]||(t[1]=e=>D.navigateTo("./add"))},{default:l((()=>[f(b(e.$t("common.button.add")),1)])),_:1}),m(I,{class:"uni-button",type:"warn",size:"mini",disabled:!n.selectedIndexs.length,onClick:D.delTable},{default:l((()=>[f(b(e.$t("common.button.batchDelete")),1)])),_:1},8,["disabled","onClick"])])),_:1})])),_:1}),m(j,{class:"uni-container"},{default:l((()=>[m(W,{ref:"udb",collection:"opendb-app-list",field:"appid,name,description,create_date",where:n.where,"page-data":"replace",orderby:n.orderby,getcount:!0,"page-size":n.options.pageSize,"page-current":n.options.pageCurrent,options:n.options,loadtime:"manual",onLoad:D.onqueryload},{default:l((({data:a,pagination:i,loading:o,error:s,options:r})=>[m(V,{ref:"table",loading:o||n.addAppidLoading,emptyText:s.message||e.$t("common.empty"),border:"",stripe:"",type:"selection",onSelectionChange:D.selectionChange,class:"table-pc"},{default:l((()=>[m(A,null,{default:l((()=>[m(q,{align:"center","filter-type":"search",onFilterChange:t[2]||(t[2]=e=>D.filterChange(e,"appid")),sortable:"",onSortChange:t[3]||(t[3]=e=>D.sortChange(e,"appid"))},{default:l((()=>[f("AppID")])),_:1}),m(q,{align:"center","filter-type":"search",onFilterChange:t[4]||(t[4]=e=>D.filterChange(e,"name")),sortable:"",onSortChange:t[5]||(t[5]=e=>D.sortChange(e,"name"))},{default:l((()=>[f("应用名称")])),_:1}),m(q,{align:"center","filter-type":"search",onFilterChange:t[6]||(t[6]=e=>D.filterChange(e,"description")),sortable:"",onSortChange:t[7]||(t[7]=e=>D.sortChange(e,"description")),width:n.descriptionThWidth},{default:l((()=>[f("应用描述 ")])),_:1},8,["width"]),m(q,{align:"center","filter-type":"timestamp",onFilterChange:t[8]||(t[8]=e=>D.filterChange(e,"create_date")),sortable:"",onSortChange:t[9]||(t[9]=e=>D.sortChange(e,"create_date"))},{default:l((()=>[f("创建时间")])),_:1}),m(q,{align:"center",width:n.buttonThWidth},{default:l((()=>[f("操作")])),_:1},8,["width"])])),_:1}),(g(!0),C(_,null,y(a,((t,a)=>(g(),d(A,{key:a,disabled:t.appid===e.appid},{default:l((()=>[m(L,{align:"center"},{default:l((()=>[f(b(t.appid),1)])),_:2},1024),m(L,{align:"center"},{default:l((()=>[f(b(t.name),1)])),_:2},1024),m(L,{align:"left"},{default:l((()=>[f(b(t.description),1)])),_:2},1024),m(L,{align:"center"},{default:l((()=>[m(F,{threshold:[0,0],date:t.create_date},null,8,["date"])])),_:2},1024),m(L,{align:"center"},{default:l((()=>[t.appid===e.appid?(g(),d(j,{key:0},{default:l((()=>[f(" - ")])),_:1})):(g(),d(j,{key:1,class:"uni-group"},{default:l((()=>[m(I,{onClick:e=>D.publish(t._id),class:"uni-button",size:"mini",type:"primary"},{default:l((()=>[f(b(e.$t("common.button.publish")),1)])),_:2},1032,["onClick"]),m(I,{onClick:e=>D.navigateTo("/uni_modules/uni-upgrade-center/pages/version/list?appid="+t.appid,!1),class:"uni-button",size:"mini",type:"primary"},{default:l((()=>[f(b(e.$t("common.button.version")),1)])),_:2},1032,["onClick"]),m(I,{onClick:e=>D.navigateTo("./add?id="+t.appid,!1),class:"uni-button",size:"mini",type:"primary"},{default:l((()=>[f(b(e.$t("common.button.edit")),1)])),_:2},1032,["onClick"]),m(I,{onClick:e=>D.confirmDelete(t._id),class:"uni-button",size:"mini",type:"warn"},{default:l((()=>[f(b(e.$t("common.button.delete")),1)])),_:2},1032,["onClick"])])),_:2},1024))])),_:2},1024)])),_:2},1032,["disabled"])))),128))])),_:2},1032,["loading","emptyText","onSelectionChange"]),m(j,{class:"uni-pagination-box"},{default:l((()=>[m(N,{"show-icon":"","show-page-size":"","page-size":i.size,modelValue:i.current,"onUpdate:modelValue":e=>i.current=e,total:i.count,onChange:D.onPageChanged,onPageSizeChange:D.pageSizeChange},null,8,["page-size","modelValue","onUpdate:modelValue","total","onChange","onPageSizeChange"])])),_:2},1024)])),_:1},8,["where","orderby","page-size","page-current","options","onLoad"])])),_:1})])),_:1})}]]);export{q as default};
