import{_ as e,aJ as l,A as a,B as t,Y as s,R as o,s as u,h as n,r,b as i,C as c,c as d,w as f,ax as p,i as m,ar as v,K as y,k as g,o as x,l as h,v as b,m as _,t as k,an as w,x as C,p as z,q as I,F as S,D as R,aK as T,z as j,Q as F,V as O}from"./index-CTufusbk.js";import{_ as N}from"./uni-tooltip.CS5MNpjh.js";import{_ as J}from"./uni-forms-item.DdbxB9a0.js";import{_ as V}from"./uni-tag.B323AB0c.js";import{_ as D}from"./uni-forms.Dq28Hf7X.js";import{_ as E}from"./uni-number-box.CETNTF2t.js";import{_ as L}from"./uni-popup-dialog.tVQKrdlX.js";import{_ as A}from"./uni-dateformat.C-wpljgu.js";import{_ as U}from"./uni-pagination.BD5KDJr5.js";const P="width: 45px; font-weight: bold; font-size:10px; margin-left:10px;",B="width:30px; text-align:center; font-weight: bold; font-size:10px;",K=e({__name:"detail",setup(e){const{proxy:K}=p(),M=async()=>{const e=s.importObject("libauxConfig",{customUI:!0});await e.forceSysOftenSeats(ge.value),be()},W={reserve:"当日预约",prereserve:"明日预约",cancel:"智能取消",signout:"座位签退",addschedle:"新增任务"},$=l((()=>e=>e?"":"color: #8f939c;")),q=a(["当日预约","明日预约","智能取消","离馆签退"]),Q=a(["reserve","prereserve","cancel","signout"]),Y=a(["PupuFlag","WeChat"]),G=a(["噗噗Flag","微信模式"]),H=[["05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","00","01","02","03","04"],["00","05","10","15","20","25","30","35","40","45","50","55"]],X=l((()=>{const e=oe.value.time.split(":");return[H[0].indexOf(e[0]),H[1].indexOf(e[1])]})),Z=e=>{const l=H[0][e.detail.value[0]],a=H[1][e.detail.value[1]];oe.value.time=l+":"+a},ee=e=>{oe.value.type=Q.value[e.detail.value]},le=e=>{oe.value.channel=Y.value[e.detail.value]},ae=e=>{oe.value.earlyRandom=e.detail.value},te=e=>{oe.value.isRun=e.detail.value},se=a({name:"系统创建",channel:"PupuFlag",type:"addschedle",time:"· + ·",leadTime:0,earlyRandom:!1,isRun:!1,weekRun:[]}),oe=a({}),ue=a({}),ne=a(null);let re=!1,ie=!1;const ce=async()=>{const e=s.importObject("libauxAdmin",{customUI:!0});if(re)/\d/.test(oe.value.time)&&"addschedle"!=oe.value.type?(oe.value.isRun=!0,await e.addSchedules(ge.value,oe.value)):u({title:"提示",content:"缺少任务类型或时间"});else if(JSON.stringify(ue.value)!=JSON.stringify(oe.value)){const l=JSON.parse(JSON.stringify(ue.value)),a=JSON.parse(JSON.stringify(oe.value));delete l.isRun,delete a.isRun,JSON.stringify(l)!=JSON.stringify(a)&&ie&&(oe.value.isRun=!0),await e.updateSchedules(ge.value,ue.value,oe.value)}be()},de=()=>{ne.value.close(),oe.value=ue.value},fe=l((()=>e=>{let l=[];for(const a in e)!0===e[a]&&l.push(Number(a)+1);return 0==e?"每天":l.join(" ")})),pe=l((()=>(e,l)=>l?P+me[e]:P+me.default)),me={primary:"background-color:#ebf8ff;border-color:#409EFF;color:#409EFF;",success:"background-color:#F0F9EB;border-color:#67C23A;color:#67C23A;",warning:"background-color:#fff8ec;border-color:#E6A23C;color:#E6A23C;",danger:"background-color:#fff5f7;border-color:#F56C6C;color:#F56C6C;",reserve:"background-color:#ebf8ff;border-color:#78b2dd;color:#82beef;",prereserve:"background-color:#fff5f7;border-color:#ff696b;color:#ff9c9e;",cancel:"background-color:#fff8ec;border-color:#efc78f;color:#fac48e;",signout:"background-color:#fff8ec;border-color:#efc78f;color:#fac48e;",haspush:"background-color:#f7f3ff;border-color:#ad95e6;color:#ad95e6;",firsts:"background-color:#ebf8ff;border-color:#78b2dd;color:#82beef;",ofents:"background-color:#F0F9EB;border-color:#92c477;color:#92c477;",random:"background-color:#fff8ec;border-color:#efc78f;color:#fab87b;",errors:"background-color:#fff5f7;border-color:#ff696b;color:#ff9c9e;",default:"background-color:#ffffff;border-color:#C0C4CC;color:#C0C4CC;"},ve=l((()=>(e=null)=>{const l={style:B,text:""};switch(e){case"first":l.style+=me.firsts,l.text+="固定";break;case"oftens":l.style+=me.ofents,l.text+="常用";break;case"random":l.style+=me.random,l.text+="随机";break;case"black":l.style+=me.firsts,l.text+="黑名";break;case"except":l.style+=me.random,l.text+="异常";break;case"fail":l.style+=me.errors,l.text+="失败";break;case"error":l.style+=me.errors,l.text+="错误";break;default:l.style+=me.firsts,l.text+="未知"}return l})),ye=a({notename:"",mobile:"",school:"",pupuForeToken:"",schedules:[],oftenseats:[],tmrrowseats:[]}),ge=a("");t((async e=>{ye.value.notename=e.notename,ye.value.mobile=e.mobile,ye.value.school=e.school,ye.value.isAdmin=!1,ge.value=e.id,be(),je(e.id)}));const xe=s.database(),he=a([]),be=async()=>{let e="uid,schedules,oftenseats";K.$hasRole("admin")&&(e+=",pupuForeToken");const l=ge.value;o({mask:!0});const a=xe.collection("libraux-users").where({_id:l}).field("_id,nickname,notename,mobile,register_date,vip_date,push").getTemp(),t=xe.collection("libraux-pupu").where({uid:l}).field(e).getTemp();xe.collection(a,t).get().then((e=>{(e=e.result.data[0]).notename||(e.notename=e.nickname);const l=e._id["libraux-pupu"][0];delete e._id,Object.assign(ye.value,e,l)})).catch((e=>{u({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{n()})),_e()},_e=async()=>{var e;const l=xe.collection("libraux-logs").aggregate().match({mobile:ye.value.mobile}).project({_id:!1,logsLst:!0}).unwind("$logsLst"),a=l.count("uid").end(),t=l.sort({"logsLst.endTime":-1,"logsLst.exeTime":-1}).skip(ke.value.size*(ke.value.current-1)).limit(ke.value.size).end(),s=await a,o=await t;ke.value.count=(null==(e=s.result.data[0])?void 0:e.uid)||0,he.value=o.result.data.map((e=>(e.logsLst.endTime=e.logsLst.endTime||e.logsLst.exeTime,delete e.logsLst.exeTime,e.logsLst))),he.value=he.value.sort(((e,l)=>e.endTime-l.endTime>=0?-1:1))||[],n()},ke=a({size:10,current:1,count:0}),we=async e=>{ke.value.current=e.current,Ie.value?ze.value=he.value.map((e=>e.endTime)):ze.value=[],await T((async()=>{await _e()}))},Ce=async e=>{ke.value.size=e,ke.value.current=1,await T((async()=>{await _e()}))},ze=a([]),Ie=a(!1),Se=e=>{e.detail.value?(ze.value=he.value.map((e=>e.endTime)),Ie.value=!0):(ze.value=[],Ie.value=!1)},Re=e=>{ze.value=[e.endTime]},Te=a([]),je=async e=>{const l=s.importObject("libauxConfig",{customUI:!0});Te.value=await l.querySeatClash.call(this,{uid:e})},Fe=l((()=>e=>{e??(e=-1);const l={style:"font-weight:500;",score:Number(100*e).toFixed(1)+"%"};return e<0&&(l.score="扫描失败"),l.style+=e>=.8?"color:#fa3534":e>.5?"color:#ff9900":"color:#909399",l}));return(e,l)=>{const a=m,t=r(i("uni-tooltip"),N),s=r(i("uni-forms-item"),J),o=r(i("uni-link"),v),u=r(i("uni-tag"),V),n=r(i("uni-forms"),D),p=r(i("uni-icons"),y),T=j,P=F,ge=O,xe=r(i("uni-number-box"),E),be=r(i("uni-popup-dialog"),L),_e=r(i("uni-popup"),g),je=c("el-table-column"),Oe=r(i("uni-dateformat"),A),Ne=c("el-table"),Je=r(i("uni-pagination"),U);return x(),d(a,{class:"uni-container edit-container"},{default:f((()=>[h(a,null,{default:f((()=>[h(n,{class:"edit-forms",ref:"form",modelValue:ye.value,"onUpdate:modelValue":l[0]||(l[0]=e=>ye.value=e)},{default:f((()=>[h(s,{name:"notename",label:"用户备注"},{default:f((()=>[h(t,null,{content:f((()=>{var e,l;return[h(a,{style:b((null==(l=null==(e=ye.value.push)?void 0:e.WxPusher)?void 0:l.active)?"color:#AD95E6;":"")},{default:f((()=>{var e,l;return[_(k((null==(l=null==(e=ye.value.push)?void 0:e.WxPusher)?void 0:l.token)||"未配置推送"),1)]})),_:1},8,["style"])]})),default:f((()=>[h(a,{class:"grid-tow-cols text-item"},{default:f((()=>[h(a,null,{default:f((()=>[_(k(ye.value.notename),1)])),_:1}),h(a,null,{default:f((()=>[_(k(ye.value.school),1)])),_:1})])),_:1})])),_:1})])),_:1}),h(s,{label:"用户信息"},{default:f((()=>[h(a,{class:"grid-tow-cols text-item"},{default:f((()=>[w(K).$hasRole("admin")?(x(),d(o,{key:0,class:"link-btn text-item",href:"http://wechat.v2.traceint.com/index.php/urlNew/flagSeat?token="+ye.value.pupuForeToken},{default:f((()=>[_(" 点击查看 ")])),_:1},8,["href"])):C("",!0),h(a,null,{default:f((()=>[_(k(ye.value.mobile),1)])),_:1})])),_:1})])),_:1}),h(s,{label:"常用座位"},{default:f((()=>[0!=ye.value.oftenseats?(x(),d(a,{key:0,class:"grid-tow-cols text-item"},{default:f((()=>[(x(!0),z(S,null,I(Te.value,(e=>(x(),d(a,{style:{display:"grid","grid-template-columns":"auto auto","column-gap":"10px","justify-content":"space-between","margin-bottom":"15px"}},{default:f((()=>[h(a,{onClick:M},{default:f((()=>[_(k(e.seatInfo),1)])),_:2},1024),h(a,{style:b(Fe.value(e.clashScore).style)},{default:f((()=>[_(k(Fe.value(e.clashScore).score),1)])),_:2},1032,["style"])])),_:2},1024)))),256))])),_:1})):C("",!0)])),_:1}),h(s,{label:"每日任务",style:{"z-index":"2"}},{default:f((()=>[h(a,{class:"grid-tow-cols text-item"},{default:f((()=>[(x(!0),z(S,null,I([...ye.value.schedules,se.value].slice(0,40),(e=>(x(),d(a,{onClick:l=>(async e=>{ne.value.open(),re=!1,ie=!e.isRun,"addschedle"==e.type&&(re=!0),oe.value=JSON.parse(JSON.stringify(e)),ue.value=JSON.parse(JSON.stringify(e))})(e)},{default:f((()=>[h(t,{style:{width:"250px"}},{content:f((()=>[h(a,null,{default:f((()=>[_("运行周期："+k(fe.value(e.weekRun)),1)])),_:2},1024),h(a,null,{default:f((()=>[_("运行模式："+k(e.channel),1)])),_:2},1024),e.type.includes("reserve")?(x(),d(a,{key:0},{default:f((()=>[_("尽早随机："+k(e.earlyRandom),1)])),_:2},1024)):C("",!0),"reserve"==e.type?(x(),d(a,{key:1},{default:f((()=>[_("提前的量："+k(e.leadTime)+"ms",1)])),_:2},1024)):C("",!0)])),default:f((()=>[(x(),z("span",{key:e.type},k(W[e.type]),1)),h(u,{size:"mini",text:e.time,style:b(pe.value(e.type,e.isRun)),inverted:""},null,8,["text","style"])])),_:2},1024)])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1}),h(_e,{ref_key:"taskConfigDialog",ref:ne,type:"dialog"},{default:f((()=>[h(be,{type:"info",title:"配置面板",onConfirm:ce,onClose:de},{default:f((()=>[(x(),d(a,{class:"popContainer",key:oe.value.time+oe.value.type},{default:f((()=>[h(a,{class:"flexBetween"},{default:f((()=>[h(P,{class:"popItemRow",value:Q.value.findIndex((e=>e==oe.value.type)),range:q.value,onChange:ee},{default:f((()=>[h(a,{class:"flexItem"},{default:f((()=>[h(p,{class:"popDialogIcon",type:"bars",size:"22",color:"#c0c4cc"}),h(T,null,{default:f((()=>[_(k(q.value[Q.value.findIndex((e=>e==oe.value.type))]||"选择类型"),1)])),_:1})])),_:1})])),_:1},8,["value","range"]),h(P,{class:"popItemRow",mode:"multiSelector",range:H,value:X.value,onChange:Z},{default:f((()=>[h(a,{class:"flexItem",style:{"padding-left":"10px"}},{default:f((()=>[h(p,{class:"popDialogIcon",type:"calendar",size:"22",color:"#c0c4cc"}),h(T,{style:b($.value(oe.value.time))},{default:f((()=>[_(k(oe.value.time||"任务时间"),1)])),_:1},8,["style"])])),_:1})])),_:1},8,["value"])])),_:1}),h(a,{class:"flexItem",style:{"justify-content":"space-between"}},{default:f((()=>[h(a,{class:"flexItem"},{default:f((()=>[h(p,{class:"popDialogIcon",type:"refresh",size:"22",color:"#c0c4cc"}),h(a,{style:{"font-size":"16px","line-height":"32px"}},{default:f((()=>[_("是否启用任务")])),_:1})])),_:1}),h(ge,{checked:oe.value.isRun,onChange:te,color:"#3893FE",style:{transform:"scale(0.7)"}},null,8,["checked"])])),_:1}),oe.value.type.includes("reserve")?(x(),d(a,{key:0,class:"flexItem",style:{"justify-content":"space-between"}},{default:f((()=>[h(a,{class:"flexItem"},{default:f((()=>[h(p,{class:"popDialogIcon",type:"refresh",size:"22",color:"#c0c4cc"}),h(a,{style:{"font-size":"16px","line-height":"32px"}},{default:f((()=>[_("尽早开始随机")])),_:1})])),_:1}),h(ge,{checked:oe.value.earlyRandom,onChange:ae,color:"#3893FE",style:{transform:"scale(0.7)"}},null,8,["checked"])])),_:1})):C("",!0),h(a,{class:"flexItem",style:{"justify-content":"space-between"}},{default:f((()=>[h(a,{class:"flexItem"},{default:f((()=>[h(p,{class:"popDialogIcon",type:"navigate",size:"22",color:"#c0c4cc"}),h(a,{style:{"font-size":"16px","line-height":"32px"}},{default:f((()=>[_("服务运行模式")])),_:1})])),_:1}),h(P,{value:Y.value.findIndex((e=>e==oe.value.channel)),range:G.value,onChange:le},{default:f((()=>[h(a,{style:{"font-size":"16px","line-height":"32px","padding-right":"10px"}},{default:f((()=>[_(k(G.value[Y.value.findIndex((e=>e==oe.value.channel))]||G.value[0]),1)])),_:1})])),_:1},8,["value","range"])])),_:1}),"reserve"==oe.value.type?(x(),d(a,{key:1,class:"flexItem",style:{"justify-content":"space-between"}},{default:f((()=>[h(a,{class:"flexItem"},{default:f((()=>[h(p,{class:"popDialogIcon",type:"cloud-upload",size:"22",color:"#c0c4cc"}),h(a,{style:{"font-size":"16px","line-height":"32px"}},{default:f((()=>[_("运行提前量ms")])),_:1})])),_:1}),h(xe,{style:{"padding-right":"10px"},max:2e3,step:5,modelValue:oe.value.leadTime,"onUpdate:modelValue":l[1]||(l[1]=e=>oe.value.leadTime=e)},null,8,["modelValue"])])),_:1})):C("",!0)])),_:1}))])),_:1})])),_:1},512),h(a,{class:"table-container"},{default:f((()=>[h(Ne,{data:he.value,"row-key":"endTime","expand-row-keys":ze.value,onRowClick:Re,border:!1,stripe:"",style:{width:"100%"}},{default:f((()=>[h(je,{type:"expand"},{header:f((()=>[h(ge,{checked:Ie.value,onChange:Se,style:{transform:"scale(0.7)","transform-origin":"-15px"}},null,8,["checked"])])),default:f((e=>[h(a,{style:{"margin-left":"60px"}},{default:f((()=>[R("h3",null,k(e.row.title),1),(x(!0),z(S,null,I(e.row.content,((e,l)=>(x(),z("p",{key:l},[R("p",null,k("["+e.timeStr+"]  "+e.msg),1)])))),128)),R("p",null,"任务类型: "+k(e.row.taskType)+" "+k(e.row.status),1)])),_:2},1024)])),_:1}),h(je,{prop:"taskTime",label:"任务时间",width:"150"}),h(je,{prop:"title",label:"运行日志","min-width":"300"},{header:f((()=>[h(a,{style:{display:"flex",gap:"30px"}},{default:f((()=>[h(a,{style:{"font-size":"12px","font-weight":"normal"}},{default:f((()=>[h(a,null,{default:f((()=>[_(" 注册时间 "),h(Oe,{format:"yy/MM/dd hh:mm",date:ye.value.register_date},null,8,["date"])])),_:1}),h(a,{class:""},{default:f((()=>[_(" 到期时间 "),h(Oe,{format:"yy/MM/dd hh:mm",date:ye.value.vip_date},null,8,["date"])])),_:1})])),_:1})])),_:1})])),_:1}),h(je,{label:"状态",width:"120"},{default:f((e=>[h(a,{style:{display:"grid","justify-content":"start","grid-template-columns":"auto auto","grid-gap":"10px"}},{default:f((()=>["success"==e.row.status?(x(),d(u,{key:0,size:"small",inverted:"",style:b(ve.value(e.row.successKind).style),text:ve.value(e.row.successKind).text},null,8,["style","text"])):"except"==e.row.status?(x(),d(u,{key:1,size:"small",inverted:"",style:b(ve.value("except").style),text:ve.value("except").text},null,8,["style","text"])):"fail"==e.row.status?(x(),d(u,{key:2,size:"small",inverted:"",style:b(ve.value("fail").style),text:ve.value("fail").text},null,8,["style","text"])):"error"==e.row.status?(x(),d(u,{key:3,size:"small",inverted:"",style:b(ve.value("error").style),text:ve.value("error").text},null,8,["style","text"])):(x(),d(u,{key:4,size:"small",inverted:"",style:b(ve.value().style),text:ve.value().text},null,8,["style","text"])),e.row.pushed?(x(),d(u,{key:5,size:"small",inverted:"",style:b(B+me.haspush),text:"push"},null,8,["style"])):C("",!0)])),_:2},1024)])),_:1})])),_:1},8,["data","expand-row-keys"]),h(a,{class:"uni-pagination-box",style:{"margin-bottom":"20px"}},{default:f((()=>[h(Je,{"show-iconn":"","show-page-size":"",onChange:we,onPageSizeChange:Ce,pageSizeRange:[10,30,100,500],modelValue:ke.value.current,"onUpdate:modelValue":l[2]||(l[2]=e=>ke.value.current=e),"page-size":ke.value.size,total:ke.value.count},null,8,["pageSizeRange","modelValue","page-size","total"])])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-8a9ea9f7"]]);export{K as default};
