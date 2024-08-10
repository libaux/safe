import{_ as e,V as t,n as a,r as n,b as i,c as s,w as o,i as r,d as l,e as d,f as c,j as u,o as m,l as h,m as p,t as f,p as g,q as _,F as b,I as y,u as C}from"./index-BdDI6p4_.js";import{_ as x}from"./uni-stat-breadcrumb.CDsItGfh.js";import{_ as $}from"./download-excel.CU7a5LHn.js";import{_ as z}from"./uni-dateformat.Dpn8wxxF.js";import{_ as w}from"./uni-pagination.GfsLFm8f.js";import{_ as D}from"./unicloud-db.2xOvspzz.js";import{e as S,f as k}from"./uni-id-permissions.DrKF0XvK.js";const T=t.database(),j=["permission_id","permission_name"],E={ascending:"asc",descending:"desc"};const I=e({data:()=>({query:"",where:"",orderby:"create_date desc",orderByFieldName:"",selectedIndexs:[],options:{pageSize:20,pageCurrent:1,filterData:{},...S},imageStyles:{width:64,height:64},exportExcel:{filename:"uni-id-permissions.xls",type:"xls",fields:{"权限ID":"permission_id","权限名称":"permission_name","备注":"comment"}},exportExcelData:[]}),onLoad(){this._filter={}},onReady(){this.$refs.udb.loadData()},methods:{onqueryload(e){this.exportExcelData=e},changeSize(e){this.options.pageSize=e,this.options.pageCurrent=1,this.$nextTick((()=>{this.loadData()}))},getWhere(){const e=this.query.trim();if(!e)return"";const t=new RegExp(e,"i");return j.map((e=>t+".test("+e+")")).join(" || ")},search(){const e=this.getWhere();this.where=e,this.$nextTick((()=>{this.loadData()}))},loadData(e=!0){this.$refs.udb.loadData({clear:e})},onPageChanged(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo(e,t){a({url:e,events:{refreshData:()=>{this.loadData(t)}}})},selectedItems(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((t=>e[t]._id))},delTable(){this.$refs.udb.remove(this.selectedItems(),{success:e=>{this.$refs.table.clearSelection()}})},selectionChange(e){this.selectedIndexs=e.detail.index},confirmDelete(e){this.$refs.udb.remove(e,{success:e=>{this.$refs.table.clearSelection()}})},sortChange(e,t){this.orderByFieldName=t,e.order?this.orderby=t+" "+E[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((()=>{this.$refs.udb.loadData()}))},filterChange(e,t){this._filter[t]={type:e.filterType,value:e.filter};let a=k(this._filter,T.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((()=>{this.$refs.udb.loadData()}))}}},[["render",function(e,t,a,S,k,T){const j=n(i("uni-stat-breadcrumb"),x),E=y,I=C,q=n(i("download-excel"),$),v=r,V=n(i("uni-th"),l),F=n(i("uni-tr"),d),L=n(i("uni-td"),c),P=n(i("uni-dateformat"),z),U=n(i("uni-table"),u),B=n(i("uni-pagination"),w),N=n(i("unicloud-db"),D);return m(),s(v,{class:"fix-top-window"},{default:o((()=>[h(v,{class:"uni-header"},{default:o((()=>[h(j,{class:"uni-stat-breadcrumb-on-phone"}),h(v,{class:"uni-group"},{default:o((()=>[h(E,{class:"uni-search",type:"text",modelValue:k.query,"onUpdate:modelValue":t[0]||(t[0]=e=>k.query=e),onConfirm:T.search,placeholder:e.$t("common.placeholder.query")},null,8,["modelValue","onConfirm","placeholder"]),h(I,{class:"uni-button hide-on-phone",type:"default",size:"mini",onClick:T.search},{default:o((()=>[p(f(e.$t("common.button.search")),1)])),_:1},8,["onClick"]),h(I,{class:"uni-button",type:"primary",size:"mini",onClick:t[1]||(t[1]=e=>T.navigateTo("./add"))},{default:o((()=>[p(f(e.$t("common.button.add")),1)])),_:1}),h(I,{class:"uni-button",type:"warn",size:"mini",disabled:!k.selectedIndexs.length,onClick:T.delTable},{default:o((()=>[p(f(e.$t("common.button.batchDelete")),1)])),_:1},8,["disabled","onClick"]),h(q,{class:"hide-on-phone",fields:k.exportExcel.fields,data:k.exportExcelData,type:k.exportExcel.type,name:k.exportExcel.filename},{default:o((()=>[h(I,{class:"uni-button",type:"primary",size:"mini"},{default:o((()=>[p(f(e.$t("common.button.exportExcel")),1)])),_:1})])),_:1},8,["fields","data","type","name"])])),_:1})])),_:1}),h(v,{class:"uni-container"},{default:o((()=>[h(N,{ref:"udb",collection:"uni-id-permissions",field:"permission_id,permission_name,comment,create_date",where:k.where,"page-data":"replace",orderby:k.orderby,getcount:!0,"page-size":k.options.pageSize,"page-current":k.options.pageCurrent,options:k.options,loadtime:"manual",onLoad:T.onqueryload},{default:o((({data:a,pagination:n,loading:i,error:r,options:l})=>[h(U,{ref:"table",loading:i,emptyText:r.message||e.$t("common.empty"),border:"",stripe:"",type:"selection",onSelectionChange:T.selectionChange},{default:o((()=>[h(F,null,{default:o((()=>[h(V,{align:"center","filter-type":"search",onFilterChange:t[2]||(t[2]=e=>T.filterChange(e,"permission_id")),sortable:"",onSortChange:t[3]||(t[3]=e=>T.sortChange(e,"permission_id"))},{default:o((()=>[p("权限标识")])),_:1}),h(V,{align:"center","filter-type":"search",onFilterChange:t[4]||(t[4]=e=>T.filterChange(e,"permission_name")),sortable:"",onSortChange:t[5]||(t[5]=e=>T.sortChange(e,"permission_name"))},{default:o((()=>[p("权限名称")])),_:1}),h(V,{align:"center","filter-type":"search",onFilterChange:t[6]||(t[6]=e=>T.filterChange(e,"comment")),sortable:"",onSortChange:t[7]||(t[7]=e=>T.sortChange(e,"comment"))},{default:o((()=>[p("备注")])),_:1}),h(V,{align:"center","filter-type":"timestamp",onFilterChange:t[8]||(t[8]=e=>T.filterChange(e,"create_date")),sortable:"",onSortChange:t[9]||(t[9]=e=>T.sortChange(e,"create_date"))},{default:o((()=>[p("创建时间")])),_:1}),h(V,{align:"center"},{default:o((()=>[p("操作")])),_:1})])),_:1}),(m(!0),g(b,null,_(a,((t,a)=>(m(),s(F,{key:a},{default:o((()=>[h(L,{align:"center"},{default:o((()=>[p(f(t.permission_id),1)])),_:2},1024),h(L,{align:"center"},{default:o((()=>[p(f(t.permission_name),1)])),_:2},1024),h(L,{align:"center"},{default:o((()=>[p(f(t.comment),1)])),_:2},1024),h(L,{align:"center"},{default:o((()=>[h(P,{threshold:[0,0],date:t.create_date},null,8,["date"])])),_:2},1024),h(L,{align:"center"},{default:o((()=>[h(v,{class:"uni-group"},{default:o((()=>[h(I,{onClick:e=>T.navigateTo("./edit?id="+t._id,!1),class:"uni-button",size:"mini",type:"primary"},{default:o((()=>[p(f(e.$t("common.button.edit")),1)])),_:2},1032,["onClick"]),h(I,{onClick:e=>T.confirmDelete(t._id),class:"uni-button",size:"mini",type:"warn"},{default:o((()=>[p(f(e.$t("common.button.delete")),1)])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1032,["loading","emptyText","onSelectionChange"]),h(v,{class:"uni-pagination-box"},{default:o((()=>[h(B,{"show-icon":"","show-page-size":"","page-size":n.size,modelValue:n.current,"onUpdate:modelValue":e=>n.current=e,total:n.count,onChange:T.onPageChanged,onPageSizeChange:T.changeSize},null,8,["page-size","modelValue","onUpdate:modelValue","total","onChange","onPageSizeChange"])])),_:2},1024)])),_:1},8,["where","orderby","page-size","page-current","options","onLoad"])])),_:1})])),_:1})}]]);export{I as default};
