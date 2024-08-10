import{_ as e,V as t,g as a,n as l,s,a as i,h as o,r as n,b as r,c as d,w as c,i as u,d as h,e as g,f as p,j as f,k as m,o as b,l as y,m as _,t as x,p as C,q as k,F as w,I as v,u as $,v as S,x as T}from"./index-BdDI6p4_.js";import{_ as z}from"./uni-stat-breadcrumb.CDsItGfh.js";import{_ as j}from"./download-excel.CU7a5LHn.js";import{_ as I}from"./uni-dateformat.Dpn8wxxF.js";import{_ as D}from"./uni-tooltip.DsbdAVZl.js";import{_ as q}from"./uni-tag.DLpztVWK.js";import{_ as L}from"./uni-pagination.GfsLFm8f.js";import{_ as F}from"./unicloud-db.2xOvspzz.js";import{_ as E}from"./uni-data-checkbox.C4GWdZT-.js";import{_ as R}from"./batch-sms.BDBiLVEO.js";import{e as P,f as V}from"./uni-id-users.DAe4ZmBF.js";import"./uni-load-more.Cq3wWmex.js";import"./uni-data-select.B45eKRSr.js";import"./uni-forms-item._y2BL_uA.js";import"./uni-easyinput.WKvxAjIR.js";import"./uni-forms.VaLhD47k.js";const M=t.database(),U=["mobile","nickname","notename","school"],A={ascending:"asc",descending:"desc"};const O=e({data(){return{collectionList:[M.collection("libraux-users").where(this.$hasRole("admin")?{}:"belong==$cloudEnv_uid").field((this.$hasRole("admin")?"realname,dcloud_appid,role,":"")+"_id,avatar,comment,my_invite_code,belong,\n\t\t\t\t\t\t\tmobile,nickname,notename,school,vip_date,vip_cnts,tags,last_login_date,register_date,status").getTemp(),M.collection("libraux-pupu").field("uid, schedules, oftenseats").getTemp()],query:"",where:"",searchCondField:"belong==$cloudEnv_uid || belong==null",orderby:"last_login_date desc",orderByFieldName:"",selectedIndexs:[],pageSizeIndex:0,pageSizeOption:[10,50,500],tags:{},managerTags:[],queryTagid:"",queryUserId:"",dataList:[],agentList:[],selfInfo:{},options:{pageSize:10,pageCurrent:1,filterData:{status_localdata:[{text:"正常",value:0,checked:!0},{text:"禁用",value:1},{text:"审核中",value:2},{text:"审核拒绝",value:3}]},...P},imageStyles:{width:64,height:64},exportExcel:{filename:"libraux-users.xls",type:"xls",fields:{"用户昵称":"nickname","手机号码":"mobile","用户状态":"status","邮箱":"email","角色":"role",last_login_date:"last_login_date"}},exportExcelData:[],noAppidWhatShouldIDoLink:"https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=makeup-dcloud-appid",smsCondition:{},taskType:{reserve:"primary",prereserve:"error",cancel:"warning",signout:"warning"},labelDefault:"width: 45px; font-weight: bold; font-size:10px;",labelStyle:{reserve:"border-color:#78b2dd;background-color:#ebf8ff;color:#82beef;",prereserve:"border-color:#ff696b;background-color:#fff5f7;color:#ff9c9e;",cancel:"border-color:#efc78f;background-color:#fff8ec;color:#fac48e;",signout:"border-color:#efc78f;background-color:#fff8ec;color:#fac48e;",purple:"background-color:#fcfafe;border-color:#b8a1f8;color:#b8a1f8;",success:"background-color:#F0F9EB;border-color:#92c477;color:#92c477;",default:"border-color:#C0C4CC;background-color:#ffffff;color:#C0C4CC;"}}},onLoad(e){this._filter={};const a=e.tagid,l=e.id;if(a){this.queryTagid=a;const e={filterType:"select",filter:[a]};this.filterChange(e,"tags")}if(l){this.queryUserId=l;const e={filterType:"select",filter:[l]};this.filterChange(e,"_id")}t.importObject("libauxAdmin",{customUI:!0}).queryUserTree({role:"agent"}).then((e=>{var t;this.agentList=(null==(t=e.data)?void 0:t.children)||[],this.$hasRole("admin")&&this.agentList.unshift({_id:e.data._id,nickname:""})}))},onReady(){this.selfInfo=a("uni-id-pages-userInfo");const e=a("uni_id_token_expired");!e||e<Date.now()||(this.queryTagid||this.queryUserId||this.$refs.udb.loadData(),this.loadTags())},computed:{clashStyle:()=>e=>{e??(e=-1);const t={style:"font-weight:bold;font-size:14px;",score:Number(100*e).toFixed(1)+"%"};return e<=0&&(t.score=""),t.style+=e>=.8?"color:#fa3534":e>.5?"color:#ff9900":"color:#909399",t},taskLabel(){return(e,t,a,l)=>t&&a>(new Date).getTime()||t&&l>0?this.labelDefault+this.labelStyle[e]:this.labelDefault+this.labelStyle.default},belongLabel(){return()=>"height: 11px;width: 40px; font-size:10px;"+this.labelStyle.purple},tagsData(){const e=[];for(const t in this.tags){const a={value:t,text:this.tags[t]};t===this.queryTagid&&(a.checked=!0),e.push(a)}return e},smsReceiver(){if(this.selectedIndexs.length){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((t=>e[t]._id))}}},methods:{belongTag(e){var t;for(let a of this.agentList)if(a._id==e)return null==(t=null==a?void 0:a.nickname)?void 0:t.slice(0,3)},onqueryload(e){for(var t=0;t<e.length;t++){let a=e[t];const l=a._id["libraux-pupu"][0];a.showSeatInfo=[...l.tmrrowseats||[],...l.oftenseats||[]];const s=a.tags&&a.tags.map((e=>this.tags[e]));a.tags=s,Array.isArray(a.role),Array.isArray(a.dcloud_appid)&&(a.dcloud_appid=a.dcloud_appid.join("、")),a.last_login_date=this.$formatDate(a.last_login_date)}this.exportExcelData=e},changeSize(e){this.options.pageSize=e,this.options.pageCurrent=1,this.$nextTick((()=>{this.loadData()}))},openTagsPopup(){this.$refs.tagsPopup.open()},closeTagsPopup(){this.$refs.tagsPopup.close()},getWhere(){const e=this.query.trim();if(!e)return"";/^\d{1,2}$/.test(e)&&(this.searchCondField="belong==$cloudEnv_uid");const t=new RegExp(e,"i");return M.command.or(U.map((e=>({[e]:t}))))},async queryClash(e,a){const l=t.importObject("libauxConfig",{customUI:!0});a.showSeatInfo=await l.querySeatClash.call(this,{uid:e})},async queryAllclash(){const e=[],t=this.$refs.udb.dataList;for(const a in t){const l=this.queryClash(t[a]._id._value,t[a]);e.push(l)}await Promise.all(e)},search(){const e=this.getWhere();this.where=e,this.collectionList=[M.collection("libraux-users").where(this.$hasRole("admin")?{}:this.searchCondField).field((this.$hasRole("admin")?"realname,dcloud_appid,role,":"")+"_id,avatar,comment,my_invite_code,\n\t\t\t\t\t\tmobile,nickname,notename,school,vip_date,tags,last_login_date,register_date,status").getTemp(),M.collection("libraux-pupu").field("uid, schedules, oftenseats").getTemp()],this.$nextTick((()=>{this.loadData()}))},loadData(e=!0){this.$refs.udb.loadData({clear:e})},onPageChanged(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo(e,t){l({url:e,events:{refreshData:()=>{this.loadTags(),this.loadData(t)}}})},selectedItems(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((t=>e[t]._id))},delTable(){this.$refs.udb.remove(this.selectedItems(),{success:e=>{this.$refs.table.clearSelection()}})},selectionChange(e){this.selectedIndexs=e.detail.index},confirmDelete(e){this.$refs.udb.remove(e,{success:e=>{this.$refs.table.clearSelection()}})},sortChange(e,t){this.orderByFieldName=t,e.order?this.orderby=t+" "+A[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((()=>{this.$refs.udb.loadData()}))},async sortSeats(e){const t=`first_seats ${A[e.order]}`;this.orderByFieldName=t,e.order?this.orderby=t:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((()=>{this.$refs.udb.loadData()}))},filterChange(e,t){this._filter[t]={type:e.filterType,value:e.filter};let a=V(this._filter,M.command);Object.keys(a).length?this.where=a:this.where="",Object.keys(this._filter).length?this.smsCondition=this._filter:this.smsCondition={},this.$nextTick((()=>{this.$refs.udb.loadData()}))},loadTags(){M.collection("uni-id-tag").limit(500).get().then((e=>{e.result.data.map((e=>{this.$set(this.tags,e.tagid,e.name)}))})).catch((e=>{s({title:"提示",content:e.message,showCancel:!1})}))},managerMultiTag(){const e=this.selectedItems().map((e=>e._value));M.collection("libraux-users").where({_id:M.command.in(e)}).update({tags:this.managerTags}).then((()=>{i({title:"修改标签成功",duration:1500}),this.$refs.table.clearSelection(),this.managerTags=[],this.loadData(),this.closeTagsPopup()})).catch((e=>{s({content:e.message||"请求服务失败",showCancel:!1})})).finally((e=>{o()}))}}},[["render",function(e,t,a,l,s,i){const o=n(r("uni-stat-breadcrumb"),z),P=v,V=$,M=n(r("download-excel"),j),U=u,A=n(r("uni-th"),h),O=n(r("uni-tr"),g),B=n(r("uni-td"),p),N=n(r("uni-dateformat"),I),W=n(r("uni-tooltip"),D),G=n(r("uni-tag"),q),H=n(r("uni-table"),f),J=n(r("uni-pagination"),L),K=n(r("unicloud-db"),F),Q=n(r("uni-data-checkbox"),E),X=n(r("uni-popup"),m),Y=n(r("batch-sms"),R);return b(),d(U,{class:"fix-top-window"},{default:c((()=>[y(U,{class:"uni-header"},{default:c((()=>[y(o,{class:"uni-stat-breadcrumb-on-phone"}),y(U,{class:"uni-group"},{default:c((()=>[y(P,{class:"uni-search",style:{height:"33px"},type:"text",modelValue:s.query,"onUpdate:modelValue":t[0]||(t[0]=e=>s.query=e),onConfirm:i.search,placeholder:"请输入搜索内容"},null,8,["modelValue","onConfirm"]),y(V,{class:"uni-button",type:"primary",size:"mini",plain:"",onClick:i.search},{default:c((()=>[_("搜索")])),_:1},8,["onClick"]),y(V,{class:"uni-button",type:"primary",size:"mini",onClick:i.queryAllclash},{default:c((()=>[_("扫描")])),_:1},8,["onClick"]),y(V,{class:"uni-button hide-on-phone",type:"primary",size:"mini",disabled:!s.selectedIndexs.length,onClick:i.openTagsPopup},{default:c((()=>[_("标签")])),_:1},8,["disabled","onClick"]),y(M,{class:"hide-on-phone",fields:s.exportExcel.fields,data:s.exportExcelData,type:s.exportExcel.type,name:s.exportExcel.filename},{default:c((()=>[y(V,{class:"uni-button",type:"primary",size:"mini"},{default:c((()=>[_(x(e.$t("common.button.exportExcel")),1)])),_:1})])),_:1},8,["fields","data","type","name"])])),_:1})])),_:1}),y(U,{class:"uni-container"},{default:c((()=>[y(K,{ref:"udb",collection:s.collectionList,where:s.where,"page-data":"replace",orderby:s.orderby,getcount:!0,"page-size":s.options.pageSize,"page-current":s.options.pageCurrent,options:s.options,loadtime:"manual",onLoad:i.onqueryload,field:"mobile, nickname, notename, realname, school, tags, belong,\r\n\t\t\t\t\t vip_date, vip_cnts, last_login_date, register_date,\r\n\t\t\t\t\t'_id.libraux-pupu.schedules' as schedules, \r\n\t\t\t\t\t'_id.libraux-pupu.tmrrowseats' as tmrrowseats,\r\n\t\t\t\t\t'_id.libraux-pupu.oftenseats' as oftenseats,\r\n\t\t\t\t\tconcatArrays('$_id.libraux-pupu.tmrrowseats.info', '$_id.libraux-pupu.oftenseats.info' ) as first_seats\r\n\t\t\t\t"},{default:c((({data:a,pagination:l,loading:o,options:n,error:r})=>[r?(b(),d(U,{key:0},{default:c((()=>[_(x(r.message),1)])),_:2},1024)):(b(),d(H,{key:1,ref:"table",loading:o,border:"",stripe:"",type:"selection",onSelectionChange:i.selectionChange},{default:c((()=>[y(O,null,{default:c((()=>[y(A,{align:"center",width:"20px",style:{color:"#c0c4cc"}},{default:c((()=>[_("序")])),_:1}),y(A,{align:"center",width:"120px","filter-type":"search",onFilterChange:t[1]||(t[1]=e=>i.filterChange(e,"mobile")),sortable:"",onSortChange:t[2]||(t[2]=e=>i.sortChange(e,"mobile"))},{default:c((()=>[_("手机号码")])),_:1}),y(A,{align:"center",width:"200px","filter-type":"search",onFilterChange:t[3]||(t[3]=e=>i.filterChange(e,"nickname")),sortable:"",onSortChange:t[4]||(t[4]=e=>i.sortChange(e,"nickname"))},{default:c((()=>[_("用户昵称")])),_:1}),y(A,{align:"center",width:"135px","filter-type":"search",onFilterChange:t[5]||(t[5]=e=>i.filterChange(e,"school")),sortable:"",onSortChange:t[6]||(t[6]=e=>i.sortChange(e,"school"))},{default:c((()=>[_("用户学校")])),_:1}),y(A,{align:"center",width:"100px","filter-type":"timestamp",sortable:"",onSortChange:t[7]||(t[7]=e=>i.sortChange(e,"vip_date"))},{default:c((()=>[_("会员")])),_:1}),y(A,{align:"center",width:"100px",sortable:"",onSortChange:t[8]||(t[8]=e=>i.sortChange(e,"register_date"))},{default:c((()=>[_("注册")])),_:1}),y(A,{align:"center",sortable:"",onSortChange:t[9]||(t[9]=e=>i.sortSeats(e))},{default:c((()=>[_("用户座位")])),_:1}),y(A,{align:"center",width:"80px","filter-type":"select","filter-data":i.tagsData,onFilterChange:t[10]||(t[10]=e=>i.filterChange(e,"tags"))},{default:c((()=>[_("用户标签")])),_:1},8,["filter-data"]),y(A,{align:"center",width:"160px"},{default:c((()=>[_("操作")])),_:1})])),_:1}),(b(!0),C(w,null,k(a,((t,a)=>(b(),d(O,{key:a},{default:c((()=>[y(B,{align:"center",style:{color:"#c0c4cc"}},{default:c((()=>[_(x((l.current-1)*l.size+(a+1)),1)])),_:2},1024),y(B,{align:"center"},{default:c((()=>[_(x(t.mobile),1)])),_:2},1024),y(B,{align:"center"},{default:c((()=>[y(U,null,{default:c((()=>[_(x(t.notename||t.nickname)+" ",1),this.$hasRole("admin")?(b(),C("span",{key:0,style:{color:"#c0c4cc"}},x(t.notename?` |${t.nickname}`:"")+" "+x(t.realname?` |${t.realname}`:""),1)):(b(),C("span",{key:1,style:{color:"#c0c4cc"}},x(t.notename?` |${t.nickname}`:""),1))])),_:2},1024)])),_:2},1024),y(B,{align:"center"},{default:c((()=>[_(x(t.school),1)])),_:2},1024),y(B,{align:"center"},{default:c((()=>[y(W,{placement:"left"},{content:c((()=>[y(U,{style:{width:"120px"}},{default:c((()=>[_("登录时间: "),y(N,{format:"yyyy/MM/dd - hh:mm",date:t.last_login_date},null,8,["date"])])),_:2},1024)])),default:c((()=>[y(N,{format:"yy/MM/dd hh:mm",date:t.vip_date,style:{"font-size":"13px"}},null,8,["date"])])),_:2},1024)])),_:2},1024),y(B,{align:"center"},{default:c((()=>[y(W,null,{content:c((()=>[y(U,{style:{width:"120px"}},{default:c((()=>[_("登录时间: "),y(N,{format:"yyyy/MM/dd - hh:mm",date:t.last_login_date},null,8,["date"])])),_:2},1024)])),default:c((()=>[y(N,{threshold:[0,0],format:"yy/MM/dd hh:mm",date:t.register_date,style:{"font-size":"13px"}},null,8,["date"])])),_:2},1024)])),_:2},1024),y(B,{align:"center"},{default:c((()=>[y(U,{style:{"text-align":"left",width:"10",display:"grid","justify-content":"center","grid-template-rows":"auto auto auto auto"}},{default:c((()=>[0!=t.showSeatInfo?(b(),d(U,{key:0},{default:c((()=>[(b(!0),C(w,null,k(t.showSeatInfo.slice(0,2),(e=>(b(),d(U,{style:{"font-size":"13px","line-height":"16px"}},{default:c((()=>[y(U,{style:{display:"grid","grid-template-columns":"auto auto","column-gap":"10px","justify-content":"space-between","margin-bottom":"15px"}},{default:c((()=>[e.clashScore?(b(),d(U,{key:0},{default:c((()=>[y(U,{style:S(i.clashStyle(e.clashScore).style)},{default:c((()=>[_(x(i.clashStyle(e.clashScore).score),1)])),_:2},1032,["style"])])),_:2},1024)):T("",!0),y(U,null,{default:c((()=>[_(x(e.seatInfo||e.info),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256))])),_:2},1024)):T("",!0)])),_:2},1024)])),_:2},1024),y(B,{align:"center",style:{padding:"0"}},{default:c((()=>[y(U,{style:{transform:"scale(0.85)","transform-origin":"center"}},{default:c((()=>[y(U,{style:{display:"grid","justify-content":"start","grid-template-columns":"auto auto","grid-gap":"5px"}},{default:c((()=>[(b(!0),C(w,null,k(t.schedules[0],(e=>(b(),d(G,{size:"small",text:e.time,style:S(i.taskLabel(e.type,e.isRun,t.vip_date,t.vip_cnts)),inverted:""},null,8,["text","style"])))),256))])),_:2},1024),t.tags?(b(),d(U,{key:0,style:{"margin-top":"5px",display:"grid","justify-content":"start","grid-template-columns":"auto auto","grid-gap":"5px"}},{default:c((()=>[(b(!0),C(w,null,k(t.tags,((e,t)=>(b(),d(G,{key:t,style:{width:"45px","font-weight":"bold","font-size":"10px",background:"linear-gradient(to top right,#d6b37b, #ce8467)","border-color":"#d1af78"},size:"small",text:e},null,8,["text"])))),128)),t.belong?(b(),d(G,{key:0,text:i.belongTag(t.belong),style:S(i.belongLabel())},null,8,["text","style"])):(b(),d(G,{key:1,text:"无归属",style:S(i.belongLabel())},null,8,["style"]))])),_:2},1024)):T("",!0)])),_:2},1024)])),_:2},1024),y(B,{align:"center"},{default:c((()=>[y(U,{class:"uni-group"},{default:c((()=>[y(V,{onClick:e=>i.navigateTo(`./detail?id=${t._id._value}&notename=${t.notename||t.nickname}&school=${t.school}&mobile=${t.mobile}`,!1),type:"primary",class:"uni-button",style:{"margin-right":"10px"},size:"mini",plain:""},{default:c((()=>[_("详情 ")])),_:2},1032,["onClick"]),y(V,{onClick:e=>i.navigateTo("./edit?id="+t._id._value,!1),type:"warn",class:"uni-button",style:{margin:"0px"},size:"mini",plain:""},{default:c((()=>[_(x(e.$t("common.button.edit")),1)])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1032,["loading","onSelectionChange"])),y(U,{class:"uni-pagination-box"},{default:c((()=>[y(J,{"show-iconn":"","show-page-size":"","page-size":l.size,modelValue:l.current,"onUpdate:modelValue":e=>l.current=e,pageSizeRange:s.pageSizeOption,total:l.count,onChange:i.onPageChanged,onPageSizeChange:i.changeSize},null,8,["page-size","modelValue","onUpdate:modelValue","pageSizeRange","total","onChange","onPageSizeChange"])])),_:2},1024)])),_:1},8,["collection","where","orderby","page-size","page-current","options","onLoad"])])),_:1}),y(X,{ref:"tagsPopup",type:"center"},{default:c((()=>[y(U,{class:"tags-manager--x"},{default:c((()=>[y(U,{class:"tags-manager--header mb"},{default:c((()=>[_("管理标签")])),_:1}),y(Q,{ref:"checkbox",modelValue:s.managerTags,"onUpdate:modelValue":t[11]||(t[11]=e=>s.managerTags=e),class:"mb ml",multiple:!0,collection:"uni-id-tag",field:"tagid as value, name as text"},null,8,["modelValue"]),y(U,{class:"uni-group"},{default:c((()=>[y(V,{onClick:i.managerMultiTag,class:"uni-button",type:"primary",style:{"margin-right":"75px"}},{default:c((()=>[_("保存")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},512),y(Y,{ref:"batchSms",toType:"user",receiver:i.smsReceiver,condition:s.smsCondition},null,8,["receiver","condition"])])),_:1})}],["__scopeId","data-v-b081ea30"]]);export{O as default};
