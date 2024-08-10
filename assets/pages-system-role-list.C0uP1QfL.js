import{_ as e,V as t,n as a,r as n,b as i,c as o,w as s,i as l,d as r,e as d,f as c,j as u,o as m,l as h,m as p,t as f,p as g,q as _,F as b,I as y,u as C}from"./index-BdDI6p4_.js";import{_ as x}from"./uni-stat-breadcrumb.CDsItGfh.js";import{_ as $}from"./download-excel.CU7a5LHn.js";import{_ as D}from"./uni-dateformat.Dpn8wxxF.js";import{_ as z}from"./uni-pagination.GfsLFm8f.js";import{_ as w}from"./unicloud-db.2xOvspzz.js";import{e as S,f as k}from"./uni-id-roles.JCQZzCUG.js";const T=t.database(),j=["role_id","role_name","permission.permission_name"],I={ascending:"asc",descending:"desc"};const v=e({data:()=>({collectionList:[T.collection("uni-id-roles").field("comment,permission,role_id,role_name,create_date").getTemp(),T.collection("uni-id-permissions").field("permission_name, permission_id").getTemp()],query:"",where:"",orderby:"create_date desc",orderByFieldName:"",selectedIndexs:[],options:{pageSize:20,pageCurrent:1,filterData:{},...S},imageStyles:{width:64,height:64},exportExcel:{filename:"uni-id-roles.xls",type:"xls",fields:{"唯一ID":"role_id","名称":"role_name","权限":"permission","备注":"comment",create_date:"create_date"}},exportExcelData:[]}),onLoad(){this._filter={}},onReady(){this.$refs.udb.loadData()},methods:{onqueryload(e){for(var t=0;t<e.length;t++){let a=e[t];a.permission=a.permission.map((e=>e.permission_name)).join("、"),a.create_date=this.$formatDate(a.create_date)}this.exportExcelData=e},changeSize(e){this.options.pageSize=e,this.options.pageCurrent=1,this.$nextTick((()=>{this.loadData()}))},getWhere(){const e=this.query.trim();if(!e)return"";const t=new RegExp(e,"i");return j.map((e=>t+".test("+e+")")).join(" || ")},search(){const e=this.getWhere();this.where=e,this.$nextTick((()=>{this.loadData()}))},loadData(e=!0){this.$refs.udb.loadData({clear:e})},onPageChanged(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo(e,t){a({url:e,events:{refreshData:()=>{this.loadData(t)}}})},selectedItems(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((t=>e[t]._id))},delTable(){this.$refs.udb.remove(this.selectedItems(),{success:e=>{this.$refs.table.clearSelection()}})},selectionChange(e){this.selectedIndexs=e.detail.index},confirmDelete(e){this.$refs.udb.remove(e,{success:e=>{this.$refs.table.clearSelection()}})},sortChange(e,t){this.orderByFieldName=t,e.order?this.orderby=t+" "+I[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((()=>{this.$refs.udb.loadData()}))},filterChange(e,t){this._filter[t]={type:e.filterType,value:e.filter};let a=k(this._filter,T.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((()=>{this.$refs.udb.loadData()}))}}},[["render",function(e,t,a,S,k,T){const j=n(i("uni-stat-breadcrumb"),x),I=y,v=C,E=n(i("download-excel"),$),q=l,V=n(i("uni-th"),r),F=n(i("uni-tr"),d),L=n(i("uni-td"),c),P=n(i("uni-dateformat"),D),U=n(i("uni-table"),u),B=n(i("uni-pagination"),z),N=n(i("unicloud-db"),w);return m(),o(q,{class:"fix-top-window"},{default:s((()=>[h(q,{class:"uni-header"},{default:s((()=>[h(j,{class:"uni-stat-breadcrumb-on-phone"}),h(q,{class:"uni-group"},{default:s((()=>[h(I,{class:"uni-search",type:"text",modelValue:k.query,"onUpdate:modelValue":t[0]||(t[0]=e=>k.query=e),onConfirm:T.search,placeholder:e.$t("common.placeholder.query")},null,8,["modelValue","onConfirm","placeholder"]),h(v,{class:"uni-button hide-on-phone",type:"default",size:"mini",onClick:T.search},{default:s((()=>[p(f(e.$t("common.button.search")),1)])),_:1},8,["onClick"]),h(v,{class:"uni-button",type:"primary",size:"mini",onClick:t[1]||(t[1]=e=>T.navigateTo("./add"))},{default:s((()=>[p(f(e.$t("common.button.add")),1)])),_:1}),h(v,{class:"uni-button",type:"warn",size:"mini",disabled:!k.selectedIndexs.length,onClick:T.delTable},{default:s((()=>[p(f(e.$t("common.button.batchDelete")),1)])),_:1},8,["disabled","onClick"]),h(E,{class:"hide-on-phone",fields:k.exportExcel.fields,data:k.exportExcelData,type:k.exportExcel.type,name:k.exportExcel.filename},{default:s((()=>[h(v,{class:"uni-button",type:"primary",size:"mini"},{default:s((()=>[p(f(e.$t("common.button.exportExcel")),1)])),_:1})])),_:1},8,["fields","data","type","name"])])),_:1})])),_:1}),h(q,{class:"uni-container"},{default:s((()=>[h(N,{ref:"udb",collection:k.collectionList,where:k.where,"page-data":"replace",orderby:k.orderby,getcount:!0,"page-size":k.options.pageSize,"page-current":k.options.pageCurrent,options:k.options,loadtime:"manual",onLoad:T.onqueryload},{default:s((({data:a,pagination:n,loading:i,error:l,options:r})=>[h(U,{ref:"table",loading:i,emptyText:l.message||e.$t("common.empty"),border:"",stripe:"",type:"selection",onSelectionChange:T.selectionChange},{default:s((()=>[h(F,null,{default:s((()=>[h(V,{align:"center","filter-type":"search",onFilterChange:t[2]||(t[2]=e=>T.filterChange(e,"role_id")),sortable:"",onSortChange:t[3]||(t[3]=e=>T.sortChange(e,"role_id"))},{default:s((()=>[p("唯一ID")])),_:1}),h(V,{align:"center","filter-type":"search",onFilterChange:t[4]||(t[4]=e=>T.filterChange(e,"role_name")),sortable:"",onSortChange:t[5]||(t[5]=e=>T.sortChange(e,"role_name"))},{default:s((()=>[p("名称")])),_:1}),h(V,{align:"center"},{default:s((()=>[p("权限")])),_:1}),h(V,{align:"center","filter-type":"search",onFilterChange:t[6]||(t[6]=e=>T.filterChange(e,"comment")),sortable:"",onSortChange:t[7]||(t[7]=e=>T.sortChange(e,"comment"))},{default:s((()=>[p("备注")])),_:1}),h(V,{align:"center","filter-type":"timestamp",onFilterChange:t[8]||(t[8]=e=>T.filterChange(e,"create_date")),sortable:"",onSortChange:t[9]||(t[9]=e=>T.sortChange(e,"create_date"))},{default:s((()=>[p("创建时间")])),_:1}),h(V,{align:"center"},{default:s((()=>[p("操作")])),_:1})])),_:1}),(m(!0),g(b,null,_(a,((t,a)=>(m(),o(F,{key:a},{default:s((()=>[h(L,{align:"center"},{default:s((()=>[p(f(t.role_id),1)])),_:2},1024),h(L,{align:"center"},{default:s((()=>[p(f(t.role_name),1)])),_:2},1024),h(L,{align:"center"},{default:s((()=>[p(f(t.permission),1)])),_:2},1024),h(L,{align:"center"},{default:s((()=>[p(f(t.comment),1)])),_:2},1024),h(L,{align:"center"},{default:s((()=>[h(P,{threshold:[0,0],date:t.create_date},null,8,["date"])])),_:2},1024),h(L,{align:"center"},{default:s((()=>[h(q,{class:"uni-group"},{default:s((()=>[h(v,{onClick:e=>T.navigateTo("./edit?id="+t._id,!1),class:"uni-button",size:"mini",type:"primary"},{default:s((()=>[p(f(e.$t("common.button.edit")),1)])),_:2},1032,["onClick"]),h(v,{onClick:e=>T.confirmDelete(t._id),class:"uni-button",size:"mini",type:"warn"},{default:s((()=>[p(f(e.$t("common.button.delete")),1)])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1032,["loading","emptyText","onSelectionChange"]),h(q,{class:"uni-pagination-box"},{default:s((()=>[h(B,{"show-icon":"","show-page-size":"","page-size":n.size,modelValue:n.current,"onUpdate:modelValue":e=>n.current=e,total:n.count,onChange:T.onPageChanged,onPageSizeChange:T.changeSize},null,8,["page-size","modelValue","onUpdate:modelValue","total","onChange","onPageSizeChange"])])),_:2},1024)])),_:1},8,["collection","where","orderby","page-size","page-current","options","onLoad"])])),_:1})])),_:1})}]]);export{v as default};
