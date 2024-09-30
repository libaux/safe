import{_ as e,Y as t,n as a,a as r,r as n,b as l,c as i,w as o,i as d,d as s,e as u,f,j as p,k as _,o as c,l as h,m as g,p as m,q as y,F as C,t as b,u as x,z as F}from"./index-ChMB-C2t.js";import{_ as v}from"./uni-stat-breadcrumb.mR06vjM8.js";import{_ as D}from"./download-excel.DURbGBmN.js";import{_ as S}from"./uni-stat-tabs.BieK4wFj.js";import{_ as $}from"./uni-dateformat.C8jVgjvI.js";import{_ as k}from"./uni-pagination.BkPProof.js";import{_ as V}from"./unicloud-db.BatFX0cf.js";import{_ as w}from"./uni-easyinput.CzLBTCKg.js";import{_ as I}from"./uni-forms-item.CbwkBOSJ.js";import{_ as j}from"./uni-forms.Cz-Mo-Oc.js";import{e as z,f as q}from"./uni-pay-orders.CqmY5J70.js";import{s as T}from"./util.CRPBdIOi.js";import"./uni-tooltip.C01MddUW.js";const U=t.importObject("uni-pay-co"),E=t.database(),R={ascending:"asc",descending:"desc"};const L=e({data:()=>({collectionList:"uni-pay-orders",query:{appid:"",platform_id:"",uni_platform:"",version:"",pay_date:[]},where:"",orderby:"create_date desc",orderByFieldName:"",selectedIndexs:[],filterDefaultValueUserId:"",refundFormData:{out_trade_no:"",max_refund_fee:"",refund_fee:"",refund_desc:""},refundFormRules:{refund_fee:{rules:[{required:!0,errorMessage:"退款金额必须>0"},{minimum:.01,maximum:0,errorMessage:"最大可退 {maximum} 元"}]},refund_desc:{rules:[{required:!0,errorMessage:"请输入退款原因"}]}},options:{pageSize:20,pageCurrent:1,filterData:{provider_localdata:[{text:"微信支付",value:"wxpay"},{text:"支付宝",value:"alipay"},{text:"苹果应用内支付",value:"appleiap"}],status_localdata:[{text:"已关闭",value:-1},{text:"未支付",value:0},{text:"已支付",value:1},{text:"已部分退款",value:2},{text:"已全额退款",value:3}]},...z},imageStyles:{width:64,height:64},exportExcel:{filename:"uni-pay-orders.xls",type:"xls",fields:{"用户ID":"user_id","用户昵称":"nickname","支付供应商":"provider","支付方式":"provider_pay_type","应用平台":"uni_platform","订单状态":"status","支付失败原因":"err_msg","订单类型":"type","业务系统订单号":"order_no","支付插件订单号":"out_trade_no","交易单号":"transaction_id","支付描述":"description","订单支付金额":"total_fee","订单退款金额":"refund_fee","当前退款笔数":"refund_count","退款详情":"refund_list","回调状态":"user_order_success","创建时间":"create_date","支付时间":"pay_date","异步通知时间":"notify_date","取消时间":"cancel_date","开放平台appid":"provider_appid","DCloud AppId":"appid","设备ID":"device_id","客户端IP":"client_ip",openid:"openid"}},exportExcelData:[]}),onLoad(e){this._filter={},e.user_id&&(this.filterDefaultValueUserId=e.user_id,this.filterChange({filterType:"search",filter:e.user_id},"user_id"))},onReady(){this.$refs.udb.loadData()},methods:{onqueryload(e){this.exportExcelData=e},getWhere(){let e="",{pay_date:t,appid:a,version:r,uni_platform:n}=this.query;return t&&2==t.length&&(e+=` && pay_date>=${t[0]} && pay_date<=${t[1]}`),a&&(e+=` && appid=='${a}'`),r&&(e+=` && stat_data.app_version=='${r}'`),n&&(e+=` && stat_data.platform=='${n}'`),e=e.substring(3).trim(),e},search(){const e=this.getWhere();this.where=e,this.$nextTick((()=>{this.loadData()}))},loadData(e=!0){this.$refs.udb.loadData({clear:e})},onPageChanged(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo(e,t){a({url:e,events:{refreshData:()=>{this.loadData(t)}}})},selectedItems(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((t=>e[t]._id))},delTable(){this.$refs.udb.remove(this.selectedItems(),{success:e=>{this.$refs.table.clearSelection()}})},selectionChange(e){this.selectedIndexs=e.detail.index},refundPopup(e,t){if(e){let{total_fee:e=0,refund_fee:a=0,out_trade_no:r}=t,n=Number(((e-a)/100).toFixed(2));this.refundFormData.max_refund_fee=n,this.refundFormData.refund_fee=n,this.refundFormData.out_trade_no=r,this.refundFormRules.refund_fee.rules[1].maximum=n,this.$refs.popup.open()}else this.refundFormData.max_refund_fee="",this.refundFormData.refund_fee="",this.refundFormData.out_trade_no="",this.refundFormRules.refund_fee.rules[1].maximum=0,this.$refs.popup.close()},async confirmRefund(e){let{total_fee:t=0,refund_fee:a=0,out_trade_no:n,refund_desc:l}=e;e.refund_fee=Number(e.refund_fee.toFixed(2)),this.$refs.refundForm.validate().then((async t=>{let i=Number(a);if(isNaN(i)||i<=0)return void r({title:"请输入正确的退款金额",icon:"none",success:()=>{setTimeout((()=>{this.confirmRefund(e)}),500)}});let o={out_trade_no:n,refund_fee:parseInt(100*i),refund_desc:l};(await U.refund(o)).errCode||(this.refundPopup(!1),this.loadData(!1))})).catch((e=>{}))},sortChange(e,t){this.orderByFieldName=t,e.order?this.orderby=t+" "+R[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((()=>{this.$refs.udb.loadData()}))},filterChange(e,t,a){a&&e.filter&&"object"==typeof e.filter&&("number"==typeof e.filter[0]&&(e.filter[0]=e.filter[0]/a),"number"==typeof e.filter[1]&&(e.filter[1]=e.filter[1]/a)),this._filter[t]={type:e.filterType,value:e.filter};let r=q(this._filter,E.command);Object.keys(r).length?this.where=r:this.where="",this.$nextTick((()=>{this.$refs.udb.loadData()}))},platformChange(e,t,a,r){this.query.version=0,this.query.uni_platform=r.code},nameFormat:e=>e.user_id?e.nickname?`${e.user_id}（${e.nickname}）`:e.user_id:"匿名用户",pageToUser(e){let{user_id:t}=e;a({url:`/pages/system/user/list?id=${t}`})}},watch:{query:{deep:!0,handler(e){this.search()}}},computed:{versionQuery(){const{appid:e,uni_platform:t}=this.query;return T({appid:e,uni_platform:t})}}},[["render",function(e,t,a,r,z,q){const T=n(l("uni-stat-breadcrumb"),v),U=d,E=x,R=n(l("download-excel"),D),L=n(l("uni-stat-tabs"),S),N=n(l("uni-th"),s),P=n(l("uni-tr"),u),M=n(l("uni-td"),f),O=F,W=n(l("uni-dateformat"),$),A=n(l("uni-table"),p),B=n(l("uni-pagination"),k),Q=n(l("unicloud-db"),V),Y=n(l("uni-easyinput"),w),G=n(l("uni-forms-item"),I),H=n(l("uni-forms"),j),J=n(l("uni-popup"),_);return c(),i(U,null,{default:o((()=>[h(U,{class:"uni-header"},{default:o((()=>[h(U,{class:"uni-group"},{default:o((()=>[h(T)])),_:1}),h(U,{class:"uni-group"},{default:o((()=>[h(E,{class:"uni-button",type:"default",size:"mini",onClick:q.search},{default:o((()=>[g("搜索")])),_:1},8,["onClick"]),h(R,{class:"hide-on-phone",fields:z.exportExcel.fields,data:z.exportExcelData,type:z.exportExcel.type,name:z.exportExcel.filename},{default:o((()=>[h(E,{class:"uni-button",type:"primary",size:"mini"},{default:o((()=>[g("导出 Excel")])),_:1})])),_:1},8,["fields","data","type","name"])])),_:1})])),_:1}),h(U,{class:"uni-container"},{default:o((()=>[h(U,{class:"uni-stat--x"},{default:o((()=>[h(L,{label:"平台选择",type:"boldLine",mode:"platform",modelValue:z.query.platform,"onUpdate:modelValue":t[0]||(t[0]=e=>z.query.platform=e),onChange:q.platformChange},null,8,["modelValue","onChange"])])),_:1}),h(Q,{ref:"udb",collection:z.collectionList,field:"user_id,nickname,provider,provider_pay_type,uni_platform,status,type,order_no,out_trade_no,transaction_id,device_id,client_ip,openid,description,err_msg,total_fee,refund_fee,refund_count,refund_list,provider_appid,appid,user_order_success,create_date,pay_date,notify_date,cancel_date",where:z.where,"page-data":"replace",orderby:z.orderby,getcount:!0,"page-size":z.options.pageSize,"page-current":z.options.pageCurrent,options:z.options,loadtime:"manual",onLoad:q.onqueryload},{default:o((({data:e,pagination:a,loading:r,error:n,options:l})=>[h(A,{ref:"table",loading:r,emptyText:n.message||r?"请求中...":"没有更多数据",border:"",stripe:"",type:"",onSelectionChange:q.selectionChange,style:{"min-height":"900px"}},{default:o((()=>[h(P,null,{default:o((()=>[h(N,{align:"center"},{default:o((()=>[g("序号")])),_:1}),h(N,{ref:"user_id",align:"center",filterDefaultValue:z.filterDefaultValueUserId,"filter-type":"search",onFilterChange:t[1]||(t[1]=e=>q.filterChange(e,"user_id")),sortable:"",onSortChange:t[2]||(t[2]=e=>q.sortChange(e,"user_id"))},{default:o((()=>[g("用户")])),_:1},8,["filterDefaultValue"]),h(N,{align:"center","filter-type":"select","filter-data":l.filterData.provider_localdata,onFilterChange:t[3]||(t[3]=e=>q.filterChange(e,"provider"))},{default:o((()=>[g("支付供应商")])),_:2},1032,["filter-data"]),h(N,{align:"center","filter-type":"search",onFilterChange:t[4]||(t[4]=e=>q.filterChange(e,"provider_pay_type")),sortable:"",onSortChange:t[5]||(t[5]=e=>q.sortChange(e,"provider_pay_type"))},{default:o((()=>[g("支付方式")])),_:1}),h(N,{align:"center","filter-type":"search",onFilterChange:t[6]||(t[6]=e=>q.filterChange(e,"uni_platform")),sortable:"",onSortChange:t[7]||(t[7]=e=>q.sortChange(e,"uni_platform"))},{default:o((()=>[g("应用平台")])),_:1}),h(N,{align:"center","filter-type":"select","filter-data":l.filterData.status_localdata,onFilterChange:t[8]||(t[8]=e=>q.filterChange(e,"status"))},{default:o((()=>[g("订单状态")])),_:2},1032,["filter-data"]),h(N,{align:"center","filter-type":"search",onFilterChange:t[9]||(t[9]=e=>q.filterChange(e,"type")),sortable:"",onSortChange:t[10]||(t[10]=e=>q.sortChange(e,"type"))},{default:o((()=>[g("订单类型")])),_:1}),h(N,{align:"center","filter-type":"search",onFilterChange:t[11]||(t[11]=e=>q.filterChange(e,"order_no")),sortable:"",onSortChange:t[12]||(t[12]=e=>q.sortChange(e,"order_no"))},{default:o((()=>[g("业务系统订单号")])),_:1}),h(N,{align:"center","filter-type":"search",onFilterChange:t[13]||(t[13]=e=>q.filterChange(e,"out_trade_no")),sortable:"",onSortChange:t[14]||(t[14]=e=>q.sortChange(e,"out_trade_no"))},{default:o((()=>[g("支付插件订单号")])),_:1}),h(N,{align:"center","filter-type":"search",onFilterChange:t[15]||(t[15]=e=>q.filterChange(e,"transaction_id")),sortable:"",onSortChange:t[16]||(t[16]=e=>q.sortChange(e,"transaction_id"))},{default:o((()=>[g("交易单号")])),_:1}),h(N,{align:"center","filter-type":"search",onFilterChange:t[17]||(t[17]=e=>q.filterChange(e,"description")),sortable:"",onSortChange:t[18]||(t[18]=e=>q.sortChange(e,"description"))},{default:o((()=>[g("支付描述")])),_:1}),h(N,{align:"center","filter-type":"range",onFilterChange:t[19]||(t[19]=e=>q.filterChange(e,"total_fee",.01)),sortable:"",onSortChange:t[20]||(t[20]=e=>q.sortChange(e,"total_fee"))},{default:o((()=>[g("订单支付金额")])),_:1}),h(N,{align:"center","filter-type":"range",onFilterChange:t[21]||(t[21]=e=>q.filterChange(e,"refund_fee",.01)),sortable:"",onSortChange:t[22]||(t[22]=e=>q.sortChange(e,"refund_fee"))},{default:o((()=>[g("订单退款金额")])),_:1}),h(N,{align:"center","filter-type":"range",onFilterChange:t[23]||(t[23]=e=>q.filterChange(e,"refund_count")),sortable:"",onSortChange:t[24]||(t[24]=e=>q.sortChange(e,"refund_count"))},{default:o((()=>[g("当前退款笔数")])),_:1}),h(N,{align:"center",sortable:"",onSortChange:t[25]||(t[25]=e=>q.sortChange(e,"user_order_success"))},{default:o((()=>[g("回调状态")])),_:1}),h(N,{align:"center","filter-type":"timestamp",onFilterChange:t[26]||(t[26]=e=>q.filterChange(e,"create_date")),sortable:"",onSortChange:t[27]||(t[27]=e=>q.sortChange(e,"create_date"))},{default:o((()=>[g("创建时间")])),_:1}),h(N,{align:"center","filter-type":"timestamp",onFilterChange:t[28]||(t[28]=e=>q.filterChange(e,"pay_date")),sortable:"",onSortChange:t[29]||(t[29]=e=>q.sortChange(e,"pay_date"))},{default:o((()=>[g("支付时间")])),_:1}),h(N,{align:"center","filter-type":"timestamp",onFilterChange:t[30]||(t[30]=e=>q.filterChange(e,"cancel_date")),sortable:"",onSortChange:t[31]||(t[31]=e=>q.sortChange(e,"cancel_date"))},{default:o((()=>[g("取消时间")])),_:1}),h(N,{align:"center","filter-type":"search",onFilterChange:t[32]||(t[32]=e=>q.filterChange(e,"provider_appid")),sortable:"",onSortChange:t[33]||(t[33]=e=>q.sortChange(e,"provider_appid"))},{default:o((()=>[g("开放平台appid")])),_:1}),h(N,{align:"center","filter-type":"search",onFilterChange:t[34]||(t[34]=e=>q.filterChange(e,"appid")),sortable:"",onSortChange:t[35]||(t[35]=e=>q.sortChange(e,"appid"))},{default:o((()=>[g("DCloud AppId")])),_:1}),h(N,{align:"center","filter-type":"search",onFilterChange:t[36]||(t[36]=e=>q.filterChange(e,"device_id")),sortable:"",onSortChange:t[37]||(t[37]=e=>q.sortChange(e,"device_id"))},{default:o((()=>[g("设备ID")])),_:1}),h(N,{align:"center","filter-type":"search",onFilterChange:t[38]||(t[38]=e=>q.filterChange(e,"client_ip")),sortable:"",onSortChange:t[39]||(t[39]=e=>q.sortChange(e,"client_ip"))},{default:o((()=>[g("客户端IP")])),_:1}),h(N,{align:"center","filter-type":"search",onFilterChange:t[40]||(t[40]=e=>q.filterChange(e,"openid")),sortable:"",onSortChange:t[41]||(t[41]=e=>q.sortChange(e,"openid"))},{default:o((()=>[g("openid")])),_:1})])),_:2},1024),(c(!0),m(C,null,y(e,((e,t)=>(c(),i(P,{key:t},{default:o((()=>[h(M,{align:"center"},{default:o((()=>[g(b(parseInt(t+1+(a.current-1)*a.size)),1)])),_:2},1024),h(M,{align:"center"},{default:o((()=>[h(O,{class:"text-btn",onClick:t=>q.pageToUser(e)},{default:o((()=>[g(b(q.nameFormat(e)),1)])),_:2},1032,["onClick"])])),_:2},1024),h(M,{align:"center"},{default:o((()=>[g(b(l.provider_valuetotext[e.provider]),1)])),_:2},1024),h(M,{align:"center"},{default:o((()=>[g(b(e.provider_pay_type),1)])),_:2},1024),h(M,{align:"center"},{default:o((()=>[g(b(e.uni_platform),1)])),_:2},1024),h(M,{align:"center"},{default:o((()=>[g(b(l.status_valuetotext[e.status]),1)])),_:2},1024),h(M,{align:"center"},{default:o((()=>[g(b(e.type),1)])),_:2},1024),h(M,{align:"center"},{default:o((()=>[g(b(e.order_no),1)])),_:2},1024),h(M,{align:"center"},{default:o((()=>[g(b(e.out_trade_no),1)])),_:2},1024),h(M,{align:"center"},{default:o((()=>[g(b(e.transaction_id),1)])),_:2},1024),h(M,{align:"center"},{default:o((()=>[g(b(e.description),1)])),_:2},1024),h(M,{align:"center"},{default:o((()=>[g(b((.01*e.total_fee).toFixed(2)),1)])),_:2},1024),h(M,{align:"center"},{default:o((()=>[g(b((.01*e.refund_fee).toFixed(2)),1)])),_:2},1024),h(M,{align:"center"},{default:o((()=>[g(b(e.refund_count),1)])),_:2},1024),h(M,{align:"center"},{default:o((()=>[!0===e.user_order_success?(c(),i(U,{key:0,style:{color:"#18bc37"}},{default:o((()=>[g("✔正常")])),_:1})):[-1,0].indexOf(e.status)>-1?(c(),i(U,{key:1},{default:o((()=>[g("-")])),_:1})):(c(),i(U,{key:2,style:{color:"#e43d33"}},{default:o((()=>[g("●异常")])),_:1}))])),_:2},1024),h(M,{align:"center"},{default:o((()=>[h(W,{threshold:[0,0],date:e.create_date},null,8,["date"])])),_:2},1024),h(M,{align:"center"},{default:o((()=>[h(W,{threshold:[0,0],date:e.pay_date},null,8,["date"])])),_:2},1024),h(M,{align:"center"},{default:o((()=>[h(W,{threshold:[0,0],date:e.cancel_date},null,8,["date"])])),_:2},1024),h(M,{align:"center"},{default:o((()=>[g(b(e.provider_appid),1)])),_:2},1024),h(M,{align:"center"},{default:o((()=>[g(b(e.appid),1)])),_:2},1024),h(M,{align:"center"},{default:o((()=>[g(b(e.device_id),1)])),_:2},1024),h(M,{align:"center"},{default:o((()=>[g(b(e.client_ip),1)])),_:2},1024),h(M,{align:"center"},{default:o((()=>[g(b(e.openid),1)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1032,["loading","emptyText","onSelectionChange"]),h(U,{class:"uni-pagination-box"},{default:o((()=>[h(B,{"show-icon":"","page-size":a.size,modelValue:a.current,"onUpdate:modelValue":e=>a.current=e,total:a.count,onChange:q.onPageChanged},null,8,["page-size","modelValue","onUpdate:modelValue","total","onChange"])])),_:2},1024)])),_:1},8,["collection","where","orderby","page-size","page-current","options","onLoad"])])),_:1}),h(J,{ref:"popup",type:"center",animation:!1},{default:o((()=>[h(U,{style:{padding:"30px","background-color":"#ffffff",width:"500px"}},{default:o((()=>[h(U,{style:{"margin-bottom":"20px","text-align":"center","font-size":"20px","font-weight":"bold"}},{default:o((()=>[g("退款确认")])),_:1}),h(H,{ref:"refundForm",modelValue:z.refundFormData,"label-position":"left",labelWidth:"100px",rules:z.refundFormRules},{default:o((()=>[h(G,{label:"退款金额",name:"refund_fee"},{default:o((()=>[h(Y,{type:"text",modelValue:z.refundFormData.refund_fee,"onUpdate:modelValue":t[42]||(t[42]=e=>z.refundFormData.refund_fee=e),modelModifiers:{number:!0},placeholder:"请输入退款金额",clearable:!1},null,8,["modelValue"]),h(U,{style:{color:"#666","margin-top":"5px","font-size":"12px"}},{default:o((()=>[g("最大可退："+b(z.refundFormData.max_refund_fee),1)])),_:1})])),_:1}),h(G,{label:"退款原因",name:"refund_desc"},{default:o((()=>[h(Y,{type:"textarea",modelValue:z.refundFormData.refund_desc,"onUpdate:modelValue":t[43]||(t[43]=e=>z.refundFormData.refund_desc=e),placeholder:"请输入退款原因",clearable:!1},null,8,["modelValue"])])),_:1}),h(E,{type:"warn",style:{width:"100px",height:"40px","font-size":"16px"},onClick:t[44]||(t[44]=e=>{q.confirmRefund(z.refundFormData)})},{default:o((()=>[g("确定")])),_:1})])),_:1},8,["modelValue","rules"])])),_:1})])),_:1},512)])),_:1})}],["__scopeId","data-v-c58737a6"]]);export{L as default};
