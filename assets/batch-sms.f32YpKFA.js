import{Y as e,_ as s,s as t,aA as a,r as l,b as n,K as o,k as r,o as i,c as d,w as m,l as u,m as c,t as p,x as h,p as f,F as _,D as g,q as y,i as C,X as v,$ as D,z as k,u as T}from"./index-nI17xpur.js";import{_ as b}from"./uni-data-select.CEFlldzA.js";import{_ as w}from"./uni-forms-item.Dcp4oYwL.js";import{_ as M}from"./uni-easyinput.Bgc1tsO3.js";import{_ as S}from"./uni-forms.C-pi59MJ.js";const P=e.importObject("uni-sms-co");const x=s({name:"batchSms",props:{toType:String,receiver:{type:Array,default:()=>[]},condition:{type:Object,default:()=>({})}},data:()=>({smsTemplateLoading:!1,smsPresetList:[{value:"all",text:"全部用户"},{value:"7-day-offline-users",text:"7天内未登录用户"},{value:"15-day-offline-users",text:"15天内未登录用户"},{value:"30-day-offline-users",text:"30天内未登录用户"}],smsTemplate:[],smsTemplateDataErrorMessage:"",smsDataModel:{name:"",templateId:"",templateData:[],smsPreset:"",filtered:!1},smsTemplateContent:"",smsPreviewContent:[],smsSendUserCount:0}),computed:{isSelectedReceiver(){return!!this.receiver.length},sendAll(){return"all"===this.smsDataModel.smsPreset||"userTags"===this.toType},hasCondition(){return!!Object.keys(this.condition).length}},watch:{smsDataModel:{handler(e){if(!e.templateId)return"";const s=this.smsTemplate.find((s=>s.value===e.templateId));let t=e.templateData.reduce(((e,s)=>{const t=new RegExp(`\\$\\{${s.field}\\}`);return e.replace(t,(e=>s.value||e))}),s.content);this.smsTemplateContent=`【${s.sign}】${t}`},deep:!0}},methods:{smsFilteredChange(){this.smsDataModel.filtered=!this.smsDataModel.filtered},popupChange(e){e.show||this.reset()},open(){this.$refs.smsPopup.open(),this.loadSmsTemplate()},close(){this.reset(),this.$refs.smsPopup.close()},async loadSmsTemplate(){if(!(this.smsTemplate.length>0||this.smsTemplateLoading)){this.smsTemplateLoading=!0;try{const s=e.importObject("uni-sms-co",{customUI:!0}),t=await s.template();this.smsTemplate=t.map((e=>({...e,value:e._id,text:e.name})))}finally{this.smsTemplateLoading=!1}}},onSmsTemplateSelected(e){const s=this.smsTemplate.find((s=>s.value===e));if(!s)return;const t=new RegExp(/\$\{(.*?)\}/g);let a,l=[];for(;a=t.exec(s.content);){const e=a[1];e&&l.push({field:e,value:""})}this.smsDataModel.templateData=l},async sendSms(e=!1){const s=await this.$refs.smsForm.validate(),a=this.receiver;for(const t of this.smsDataModel.templateData)if(!t.value)return void(this.smsTemplateDataErrorMessage="字段/值不可为空");this.smsTemplateDataErrorMessage="";const l={type:this.toType,receiver:a};if((this.smsDataModel.filtered||this.smsDataModel.smsPreset)&&(l.condition=this.smsDataModel.smsPreset||this.condition),e){const e=await P.preview(l,s.templateId,this.smsDataModel.templateData);if(0===e.errCode)return this.smsPreviewContent=e.list,this.$refs.previewPopup.open(),void(this.smsSendUserCount=e.total)}t({title:"发送确认",content:`短信${this.sendAll?"将发送给所有用户":this.smsSendUserCount?`预计发送${this.smsSendUserCount}人`:"将发送给符合条件的用户"}，确定发送？`,success:async e=>{if(this.smsSendUserCount=0,e.cancel)return;(await P.createSmsTask(l,s.templateId,this.smsDataModel.templateData,{taskName:s.name})).taskId&&t({content:"短信任务已提交，您可在DCloud开发者后台查看短信发送记录",confirmText:"立即查看",cancelText:"关闭",success:e=>{e.cancel?(this.reset(),this.$refs.smsPopup.close()):(window.open("https://dev.dcloud.net.cn/#/pages/sms/sendLog","_blank"),this.reset(),this.$refs.smsPopup.close())}})}})},chooseFile(){void 0!==window.FileReader?a({count:1,extension:[".json"],success:({tempFiles:e})=>{if(e.length<=0)return;const[s]=e,t=new FileReader;t.readAsText(s),t.onload=()=>this.parserFileJson(null,t.result),t.onerror=()=>this.parserFileJson(t.error)},fail:()=>{t({content:"打开选择文件框失败",showCancel:!1})}}):t({content:"当前浏览器不支持文件上传，请升级浏览器重试",showCancel:!1})},async parserFileJson(e,s){if(e)return console.error(e),void t({content:"文件读取失败，请重新上传文件",showCancel:!1});let a=[];try{a=JSON.parse(s)}catch(l){return console.error(l),void t({content:"短信模板解析失败，请检查模板格式",showCancel:!1})}0===(await P.updateTemplates(a)).errCode&&t({content:"短信模板更新成功",showCancel:!1,success:()=>{this.loadSmsTemplate()}})},reset(){this.smsDataModel.name="",this.smsDataModel.smsPreset="",this.smsDataModel.templateId="",this.smsDataModel.templateData=[],this.smsPreviewContent=[],this.smsTemplateContent="",this.smsSendUserCount=0}}},[["render",function(e,s,t,a,P,x){const V=C,U=l(n("uni-data-select"),b),$=l(n("uni-forms-item"),w),F=v,I=D,j=l(n("uni-easyinput"),M),L=k,R=T,q=l(n("uni-forms"),S),E=l(n("uni-icons"),o),z=l(n("uni-popup"),r);return i(),d(V,null,{default:m((()=>[u(z,{ref:"smsPopup",type:"center",onChange:x.popupChange,"is-mask-click":!1},{default:m((()=>[u(V,{class:"sms-manager"},{default:m((()=>[u(V,{class:"sms-manager--header mb"},{default:m((()=>[c("群发短信")])),_:1}),u(q,{"label-width":100,modelValue:P.smsDataModel,ref:"smsForm"},{default:m((()=>["user"!==t.toType||x.isSelectedReceiver?"user"===t.toType&&x.isSelectedReceiver?(i(),d($,{key:1,label:"目标对象"},{default:m((()=>[u(V,null,{default:m((()=>[c("当前已选择"+p(t.receiver.length)+"人",1)])),_:1})])),_:1})):"userTags"===t.toType?(i(),d($,{key:2,label:"目标对象"},{default:m((()=>[u(V,null,{default:m((()=>[c("当前已选择"+p(t.receiver.length)+"个标签",1)])),_:1}),u(V,{class:"sms-data-tip"},{default:m((()=>[c("如标签关联的用户没有绑定手机号，将不会发送短信。")])),_:1})])),_:1})):h("",!0):(i(),d($,{key:0,label:"目标对象",name:"smsPreset",rules:[{required:!0,errorMessage:"请选择目标对象"}],required:""},{default:m((()=>[u(U,{class:"type m",placeholder:"预设条件",size:"mini",clear:!1,localdata:P.smsPresetList,modelValue:P.smsDataModel.smsPreset,"onUpdate:modelValue":s[0]||(s[0]=e=>P.smsDataModel.smsPreset=e)},null,8,["localdata","modelValue"]),u(V,{class:"sms-data-tip"},{default:m((()=>[c("如需给指定用户发送，请在列表选择要发送的用户。")])),_:1})])),_:1})),x.isSelectedReceiver&&x.hasCondition?(i(),d($,{key:3,label:"跨分页选择"},{default:m((()=>[u(I,{onChange:x.smsFilteredChange},{default:m((()=>[u(F,{style:{transform:"scale(.9)"},checked:P.smsDataModel.filtered},null,8,["checked"])])),_:1},8,["onChange"]),u(V,{class:"sms-data-tip"},{default:m((()=>[c("对用户进行了筛选后，可能存在分页无法全部选中时，请勾选跨分页选中")])),_:1})])),_:1})):h("",!0),u($,{label:"任务名称",name:"name",required:"",rules:[{required:!0,errorMessage:"请输入任务名称"}]},{default:m((()=>[u(j,{modelValue:P.smsDataModel.name,"onUpdate:modelValue":s[1]||(s[1]=e=>P.smsDataModel.name=e),placeholder:"请输入任务名称，例如 “7日内未登录用户召回”"},null,8,["modelValue"])])),_:1}),u($,{required:"",label:"短信模板",name:"templateId",rules:[{required:!0,errorMessage:"请选择短信模板"}]},{default:m((()=>[P.smsTemplateLoading?(i(),f(_,{key:1},[c(" 模板加载中... ")],64)):(i(),f(_,{key:0},[P.smsTemplate.length?(i(),d(V,{key:0},{default:m((()=>[u(U,{class:"type m",placeholder:"请选择短信模板",size:"mini",clear:!1,localdata:P.smsTemplate,modelValue:P.smsDataModel.templateId,"onUpdate:modelValue":s[2]||(s[2]=e=>P.smsDataModel.templateId=e),onChange:x.onSmsTemplateSelected},null,8,["localdata","modelValue","onChange"]),u(V,{class:"sms-data-tip"},{default:m((()=>[c(" 导入短信模版参考"),g("a",{class:"a-link",href:"https://uniapp.dcloud.net.cn/uniCloud/admin.html#群发短信",target:"_blank"},"教程"),c("；若有新的短信模版，可 "),u(L,{onClick:x.chooseFile,class:"a-link"},{default:m((()=>[c("点此导入 ")])),_:1},8,["onClick"])])),_:1})])),_:1})):(i(),d(V,{key:1},{default:m((()=>[u(R,{onClick:x.chooseFile,type:"primary",style:{width:"120px"},size:"mini"},{default:m((()=>[c("上传短信模板 ")])),_:1},8,["onClick"]),u(V,{class:"sms-data-tip"},{default:m((()=>[c("当前未导入短信模板，请从dev.dcloud.net.cn的短信-"),g("a",{href:"https://dev.dcloud.net.cn/pages/sms/template",target:"_blank"},"模板配置"),c("中导出短信模版，并在此导入。教程"),g("a",{href:"https://uniapp.dcloud.net.cn/uniCloud/admin.html#batch-sms",target:"_blank"},"详见")])),_:1})])),_:1}))],64))])),_:1}),P.smsTemplateContent?(i(),d($,{key:4,label:"短信内容"},{default:m((()=>[u(V,{class:"form-item-flex-center"},{default:m((()=>[c(p(P.smsTemplateContent),1)])),_:1})])),_:1})):h("",!0),P.smsDataModel.templateData.length?(i(),d($,{key:5,label:"模板变量配置","error-message":P.smsTemplateDataErrorMessage},{default:m((()=>[(i(!0),f(_,null,y(P.smsDataModel.templateData,((e,s)=>(i(),d(V,{class:"sms-data-item",key:e.field},{default:m((()=>[u(j,{class:"field m",modelValue:e.field,"onUpdate:modelValue":s=>e.field=s,placeholder:"字段",clearable:!1,disabled:!0,style:{width:"120px",flex:"none"}},null,8,["modelValue","onUpdate:modelValue"]),u(j,{class:"value m",modelValue:e.value,"onUpdate:modelValue":s=>e.value=s,placeholder:"例 {libraux-users.username}",clearable:!1},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)))),128)),u(V,{class:"sms-data-tip"},{default:m((()=>[c(" 短信变量支持固定值和数据表查询两种方式；固定值如：各位同事，数据表查询如：{libraux-users.username}；请注意，若使用数据表查询方式，目前仅支持查询 libraux-users 表；并注意确保数据库中查询字段值不为空，否则短信将发送失败。 ")])),_:1})])),_:1},8,["error-message"])):h("",!0)])),_:1},8,["modelValue"]),u(V,{class:"uni-group"},{default:m((()=>[u(R,{onClick:s[3]||(s[3]=e=>x.sendSms(!0)),class:"uni-button"},{default:m((()=>[c("预览")])),_:1}),u(R,{onClick:s[4]||(s[4]=e=>x.sendSms()),class:"uni-button",type:"primary"},{default:m((()=>[c("提交")])),_:1})])),_:1})])),_:1}),u(E,{type:"closeempty",size:"24",class:"close",onClick:x.close},null,8,["onClick"])])),_:1},8,["onChange"]),u(z,{ref:"previewPopup",type:"center","is-mask-click":!1},{default:m((()=>[u(V,{class:"sms-manager preview"},{default:m((()=>[u(V,{class:"sms-manager--header mb"},{default:m((()=>[u(V,null,{default:m((()=>[c("短信预览")])),_:1}),u(V,{class:"sub-title"},{default:m((()=>[c("仅预览第一条短信内容")])),_:1}),u(V,{class:"sub-title"},{default:m((()=>[c("预计送达 "),u(L,{style:{color:"red"}},{default:m((()=>[c(p(P.smsSendUserCount),1)])),_:1}),c(" 位用户")])),_:1})])),_:1}),u(V,{class:"content"},{default:m((()=>[(i(!0),f(_,null,y(P.smsPreviewContent,((e,s)=>(i(),d(V,{key:s},{default:m((()=>[c(p(e),1)])),_:2},1024)))),128)),u(V,{class:"length"},{default:m((()=>[c("短信字数： "),u(L,{class:"num"},{default:m((()=>[c(p(P.smsPreviewContent.length?P.smsPreviewContent[0].length:0),1)])),_:1}),c(" 字 ")])),_:1})])),_:1}),u(V,{class:"tip"},{default:m((()=>[u(V,null,{default:m((()=>[c("说明：")])),_:1}),u(V,null,{default:m((()=>[c("若从数据表中查询，字段内容长度会影响总字数，短信字数＝短信签名字数+短信内容字数。")])),_:1}),u(V,null,{default:m((()=>[c("短信长度不超过70个字，按照一条短信计费；超过70个字，按照67字/条拆分成多条计费。")])),_:1})])),_:1}),u(V,{class:"uni-group"},{default:m((()=>[u(R,{onClick:s[5]||(s[5]=s=>e.$refs.previewPopup.close()),class:"uni-button"},{default:m((()=>[c("关闭")])),_:1})])),_:1})])),_:1})])),_:1},512)])),_:1})}],["__scopeId","data-v-78d022b9"]]);export{x as _};
