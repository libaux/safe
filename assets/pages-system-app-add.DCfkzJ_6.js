import{R as e,h as t,a,_ as l,V as o,af as i,O as s,s as r,r as n,b as d,c as m,w as c,i as u,k as p,o as f,l as h,m as _,x as b,p as x,q as g,F as k,D as y,U as D,u as V,z as F,a0 as w,J as C,t as P,Y as S,Z as U,$ as v}from"./index-BdDI6p4_.js";import{_ as A}from"./uni-notice-bar.C4RHxKqy.js";import{_ as j}from"./uni-easyinput.WKvxAjIR.js";import{_ as I}from"./uni-forms-item._y2BL_uA.js";import{b as E,a as O,_ as q}from"./uni-card.DcpnbmvP.js";import{_ as z}from"./uni-forms.VaLhD47k.js";import{m as L,v as K}from"./opendb-app-list.BrPUIYpy.js";const $=e=>e?{name:"",extname:"",url:e}:{};function W(e){let t={};for(let a in K)e.includes(a)&&(t[a]=K[a]);return t}const M=["mimarket","samsungapps","appmarket","oppomarket","vivomarket"],N=["xiaomi","samsung","huawei","oppo","vivo"],T={data(){let e={appid:"",name:"",icon_url:"",introduction:"",alias:"",description:"",screenshot:[],store_list:[],app_android:{},app_ios:{},mp_weixin:{},mp_alipay:{},mp_baidu:{},mp_toutiao:{},mp_qq:{},mp_lark:{},mp_kuaishou:{},mp_dingtalk:{},mp_jd:{},h5:{},quickapp:{}};const t={formData:e,rules:Object.freeze(W(Object.keys(e))),mpPlatform:Object.freeze(L),screenshotList:[],middleware_img:{},middleware_checkbox:{},appPackageInfo:{},appPlatformKeys:Object.freeze(["app_ios","app_android"]),appPlatformValues:Object.freeze({app_android:"Android",app_ios:"iOS"}),keepItems:Object.freeze([]),isEdit:!1,deletedStore:[]},a=Object.keys(L);return t.mpPlatformKeys=Object.freeze(a),[].concat(a,["icon_url","quickapp"]).forEach((e=>t.middleware_img[e]={})),t.platFormKeys=Object.freeze([].concat(a,t.appPlatformKeys)),t.platFormKeys.forEach((e=>t.middleware_checkbox[e]=!1)),t},methods:{requestCloudFunction(e,t={}){return this.$request(e,t,{functionName:"uni-upgrade-center"})},hasValue:e=>"object"!=typeof e?!!e:e instanceof Array?!!e.length:!(!e||!Object.keys(e).length),initFormData(e){if(e&&Object.keys(e).length)for(let t in e){const a=e[t];switch(t){case"icon_url":this.middleware_img[t]=$(a);break;case"screenshot":this.screenshotList=a.map((e=>$(e)));break;default:-1===t.indexOf("mp")&&-1===t.indexOf("app")||!this.hasValue(a)||(this.setPlatformChcekbox(t,!0),a.qrcode_url&&(this.middleware_img[t]=$(a.qrcode_url)))}this.setFormData(t,a)}},setFormData(e,t){const a=-1!==e.indexOf(".")?e.split("."):[e],l=a.length-1;let o=this.formData;a.forEach(((e,a)=>{const i=o[e];"object"==typeof i&&a<l?o=i:o[e]=t}))},getFormData(e){const t=-1!==e.indexOf(".")?e.split("."):[e];t.length;let a=this.formData;for(let l=0;l<t.length;l++){if(a=a[t[l]],null==a)return!1}return a},formatFormData(){this.setFormData("screenshot",this.screenshotList.map((e=>e.fileID||e.url)));for(let e=0;e<this.formData.store_list.length;e++){const t=this.formData.store_list[e];if(0===t.scheme.trim().length){this.formData.store_list.splice(e,1),e--;continue}const a=M.indexOf((t.scheme.match(/(.*):\/\//)||[])[1]);-1!==a&&(t.id!==N[a]&&this.deletedStore.push(t.id),t.id=N[a]),t.priority=parseFloat(t.priority)}this.keepItems=this.platFormKeys.filter((e=>this.getPlatformChcekbox(e)&&(this.formData[e].url||this.formData[e].qrcode_url))).concat(["icon_url","screenshot","create_date","store_list"]),this.formData.h5&&this.formData.h5.url&&this.keepItems.push("h5")},autoFill(){const a=this.getFormData("appid");a&&(e({mask:!0}),this.requestCloudFunction("getAppInfo",{appid:a}).then((e=>{if(e.success)return this.setFormData("description",e.description),void this.setFormData("name",e.name)})).catch((e=>{console.error(e)})).finally((()=>{t()})))},autoFillApp(){const e=this.getFormData("appid");e&&this.appPlatformKeys.forEach((t=>{this.fetchAppInfo(e,this.appPlatformValues[t]).then((e=>{if(e&&e.success)return this.setPlatformChcekbox(t,!0),void this.setFormData(t,{name:e.name,url:e.url})}))}))},fetchAppInfo(a,l){return e({mask:!0}),this.requestCloudFunction("getAppVersionInfo",{appid:a,platform:l}).then((e=>e)).catch((e=>{console.error(e)})).finally((()=>{t()}))},iconUrlSuccess(e,t){a({icon:"success",title:"上传成功",duration:500}),this.setFormData(t,e.tempFilePaths[0])},async iconUrlDelete(e,t){let l=await this.requestCloudFunction("deleteFile",{fileList:[e.tempFile.fileID||e.tempFile.url]});if(l=l.fileList?l.fileList[0]:l[0],l.success||"SUCCESS"===l.code){if(a({icon:"success",title:"删除成功",duration:800}),!t)return;this.setFormData(t,""),this.$refs.form.clearValidate(t)}},getPlatformChcekbox(e){return this.middleware_checkbox[e]},setPlatformChcekbox(e,t=!1){this.middleware_checkbox[e]=t},selectFile(){this.hasPackage&&a({icon:"none",title:"只可上传一个文件，请删除已上传后重试",duration:1e3})}},computed:{hasPackage(){return this.appPackageInfo&&!!Object.keys(this.appPackageInfo).length}}},X=o.database();X.command;function J(e){for(var t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a="",l=0;l<e;l++)a+=t[Math.floor(26*Math.random())];return a}const R=l({mixins:[T],data:()=>({mpExtra:" ",mpAccordionStatus:1,labelWidth:"80px"}),onLoad(e){e.id?(this.isEdit=!0,i({title:"修改应用"}),this.setFormData("appid",e.id),this.getDetail(e.id)):this.$watch("formData.name",(e=>{this.platFormKeys.forEach((t=>{this.setFormData(`${t}.name`,e)}))}))},onReady(){this.mpExtra="折叠"},methods:{resolvestableVersionStoreList(){const e={},t=[];return this.formData.store_list.forEach(((a,l)=>{t.push(a.id),e[a.id]=l})),this.fetchAppInfo(this.getFormData("appid"),"Android").then((a=>{if(a.success){if(a.store_list){const l={},o=[];a.store_list.forEach(((e,t)=>{o.push(e.id),l[e.id]=t})),t.forEach(((t,i)=>{const s=this.formData.store_list[e[t]];-1===o.indexOf(t)?a.store_list.push(s):(a.store_list[l[t]].name=s.name,a.store_list[l[t]].scheme=s.scheme)}));for(let e=0;e<a.store_list.length;e++){let l=a.store_list[e].id;-1!==this.deletedStore.indexOf(l)&&-1===t.indexOf(l)&&(a.store_list.splice(e,1),e--)}}else a.store_list=this.formData.store_list;return this.updateAppVersion(a._id,{store_list:a.store_list})}}))},updateAppVersion:(e,t)=>X.collection("opendb-app-versions").doc(e).update(t),submit(){e({mask:!0}),this.formatFormData(),this.$refs.form.validate(this.keepItems).then((e=>this.submitForm(e))).catch((e=>{console.error(e)})).finally((()=>{t()}))},submitForm(e){(this.isEdit?this.requestCloudFunction("setNewAppData",{id:this.formDataId,value:e}):X.collection("opendb-app-list").add(e)).then((e=>{if(this.isEdit)return this.resolvestableVersionStoreList()})).then((()=>{a({title:(this.isEdit?"更新":"新增")+"成功"}),this.getOpenerEventChannel().emit("refreshData"),setTimeout((()=>s()),500)})).catch((e=>{r({content:e.message||"请求服务失败",showCancel:!1})}))},getDetail(a){e({mask:!0}),X.collection("opendb-app-list").where({appid:a}).get().then((e=>{const t=e.result.data[0];t?(this.formDataId=t._id,this.initFormData(t)):(this.autoFill(),this.autoFillApp())})).catch((e=>{r({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{t()}))},mpAccordion(){this.mpAccordionStatus?(this.mpExtra="展开",this.mpAccordionStatus=0):(this.mpExtra="折叠",this.mpAccordionStatus=1)},addStoreScheme(){this.formData.store_list.push({enable:!1,priority:0,id:J(5)+"_"+Date.now()})},deleteStore(e,t){t.scheme&&t.scheme.trim().length&&this.isEdit?r({content:"是否同步删除线上版本此条商店记录？",success:t=>{const a=this.formData.store_list.splice(e,1)[0];a&&t.confirm&&this.deletedStore.push(a.id)}}):this.formData.store_list.splice(e,1)[0]},schemeDemo(){window.open("https://ask.dcloud.net.cn/article/39960","_blank")}}},[["render",function(e,t,a,l,o,i){const s=n(d("uni-notice-bar"),A),r=n(d("uni-easyinput"),j),L=n(d("uni-forms-item"),I),K=D,$=n(d("uni-card"),E),W=n(d("uni-file-picker"),O),M=V,N=n(d("show-info"),q),T=u,X=S,J=F,R=U,B=v,Y=n(d("uni-popup"),p),Z=w,G=n(d("uni-forms"),z);return f(),m(T,{class:"uni-container"},{default:c((()=>[h(s,{style:{margin:"0"},showIcon:"",text:"本页面信息，在应用发布、app升级模块中，都会关联使用，请认真填写"}),h(G,{ref:"form",modelValue:e.formData,"onUpdate:modelValue":t[11]||(t[11]=t=>e.formData=t),validateTrigger:"bind",style:{"max-width":"792px"},labelWidth:o.labelWidth,rules:e.rules},{default:c((()=>[h($,{title:"基础信息"},{default:c((()=>[h(L,{class:"forn-item__flex",name:"appid",label:"AppID",required:""},{default:c((()=>[h(r,{disabled:e.isEdit,placeholder:"应用的AppID",modelValue:e.formData.appid,"onUpdate:modelValue":t[0]||(t[0]=t=>e.formData.appid=t),trim:"both"},null,8,["disabled","modelValue"])])),_:1}),h(L,{name:"name",label:"应用名称",required:""},{default:c((()=>[h(r,{disabled:e.isEdit,placeholder:"应用名称",modelValue:e.formData.name,"onUpdate:modelValue":t[1]||(t[1]=t=>e.formData.name=t),trim:"both"},null,8,["disabled","modelValue"])])),_:1}),h(L,{name:"introduction",label:"应用简介"},{default:c((()=>[h(r,{placeholder:"应用简介",modelValue:e.formData.introduction,"onUpdate:modelValue":t[2]||(t[2]=t=>e.formData.introduction=t),trim:"both"},null,8,["modelValue"])])),_:1}),h(L,{name:"description",label:"应用描述"},{default:c((()=>[h(K,{maxlength:-1,"auto-height":"",placeholder:"应用描述",onInput:t[3]||(t[3]=t=>e.binddata("description",t.detail.value)),class:"uni-textarea-border",modelValue:e.formData.description,"onUpdate:modelValue":t[4]||(t[4]=t=>e.formData.description=t)},null,8,["modelValue"])])),_:1})])),_:1}),h($,{title:"图标素材"},{default:c((()=>[h(L,{label:"应用图标"},{default:c((()=>[h(W,{modelValue:e.middleware_img.icon_url,"onUpdate:modelValue":t[5]||(t[5]=t=>e.middleware_img.icon_url=t),"image-styles":{width:"200rpx"},"return-type":"object","file-mediatype":"image",limit:"1",mode:"grid",onSuccess:t[6]||(t[6]=t=>e.iconUrlSuccess(t,"icon_url")),onDelete:t[7]||(t[7]=t=>e.iconUrlDelete(t,"icon_url"))},null,8,["modelValue"])])),_:1}),h(L,{label:"应用截图"},{default:c((()=>[h(W,{modelValue:e.screenshotList,"onUpdate:modelValue":t[8]||(t[8]=t=>e.screenshotList=t),"file-mediatype":"image",mode:"grid","image-styles":{height:"500rpx",width:"300rpx"},onDelete:e.iconUrlDelete},null,8,["modelValue","onDelete"])])),_:1})])),_:1}),h($,{class:"app_platform",title:"App 信息"},{default:c((()=>[e.isEdit?(f(),m(T,{key:0,class:"extra-button"},{default:c((()=>[h(M,{type:"primary",plain:"",size:"mini",onClick:e.autoFillApp},{default:c((()=>[_("自动填充")])),_:1},8,["onClick"]),h(N,{left:-10,top:-35,width:"230",content:"从App升级中心同步应用安装包信息"})])),_:1})):b("",!0),(f(!0),x(k,null,g(e.appPlatformKeys,(a=>(f(),m(T,{key:a},{default:c((()=>[h(B,{onChange:({detail:{value:t}})=>{e.setPlatformChcekbox(a,!!t.length)}},{default:c((()=>[h(R,{class:C(["title_padding",{font_bold:e.getPlatformChcekbox(a)}])},{default:c((()=>[h(X,{value:a,checked:e.middleware_checkbox[a]},null,8,["value","checked"]),h(J,null,{default:c((()=>[_(P(e.appPlatformValues[a]),1)])),_:2},1024)])),_:2},1032,["class"])])),_:2},1032,["onChange"]),e.getPlatformChcekbox(a)?(f(),x(k,{key:0},[h(L,{label:"名称"},{default:c((()=>[h(r,{modelValue:e.formData[a].name,"onUpdate:modelValue":t=>e.formData[a].name=t,trim:"both"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),"app_android"===a?(f(),m(L,{key:0,class:"forn-item__flex",label:"上传apk包"},{default:c((()=>[h(W,{modelValue:e.appPackageInfo,"onUpdate:modelValue":t[9]||(t[9]=t=>e.appPackageInfo=t),"file-extname":"apk",disabled:e.hasPackage,returnType:"object","file-mediatype":"all",limit:"1",onSuccess:t=>e.iconUrlSuccess(t,`${a}.url`),onDelete:t=>e.iconUrlDelete(t,`${a}.url`),style:{flex:"1"}},{default:c((()=>[h(T,{class:"flex"},{default:c((()=>[h(M,{type:"primary",size:"mini",onClick:e.selectFile,style:{margin:"0"}},{default:c((()=>[_("选择文件")])),_:1},8,["onClick"]),h(J,{style:{padding:"10px","font-size":"12px",color:"#666"}},{default:c((()=>[_(" 上传apk到当前服务空间的云存储中，上传成功后，会自动使用云存储地址填充下载链接 ")])),_:1})])),_:1})])),_:2},1032,["modelValue","disabled","onSuccess","onDelete"]),e.hasPackage?(f(),m(J,{key:0,style:{"padding-left":"20px",color:"#a8a8a8"}},{default:c((()=>[_(P(e.appPackageInfo.size&&Number(e.appPackageInfo.size/1024/1024).toFixed(2)+"M"),1)])),_:1})):b("",!0)])),_:2},1024)):b("",!0),h(L,{label:"app_ios"===a?"AppStore":"下载链接"},{default:c((()=>[h(r,{maxlength:-1,modelValue:e.formData[a].url,"onUpdate:modelValue":t=>e.formData[a].url=t,trim:"both"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])],64)):b("",!0)])),_:2},1024)))),128)),h(Y,{ref:"scheme","background-color":"#fff"},{default:c((()=>[h(T,{class:"popup-content"},{default:c((()=>[h(J,{style:{"font-size":"15px","font-weight":"bold"}},{default:c((()=>[_(" 常见的应用商店 scheme 地址 ")])),_:1}),h(T),h(J,null,{default:c((()=>[_(" 应用宝：tmast://appdetails?r=XXX&pname=xxx； 小米：mimarket://details?id=com.xx.xx； 三星：samsungapps://ProductDetail/com.xx.xx； 华为：appmarket://details?id=com.xx.xx； oppo：oppomarket://details?packagename=com.xx.xx； vivo：vivomarket://details?id=com.xx.xx； ")])),_:1})])),_:1})])),_:1},512),h(L,{name:"store_schemes",label:"Android应用市场",labelWidth:"120"},{default:c((()=>[h(T,{style:{height:"100%"}},{default:c((()=>[h(T,{class:"flex",style:{"justify-content":"end"}},{default:c((()=>[h(J,{class:"pointer",style:{"text-decoration":"underline",color:"#666","font-size":"12px","padding-left":"10rpx"},onClick:i.schemeDemo},{default:c((()=>[_("常见应用商店schema汇总")])),_:1},8,["onClick"]),h(M,{type:"primary",size:"mini",onClick:i.addStoreScheme,style:{margin:"0 0 0 10px"}},{default:c((()=>[_("新增")])),_:1},8,["onClick"])])),_:1}),(f(!0),x(k,null,g(e.formData.store_list,((e,t)=>(f(),m(T,{key:e.id},{default:c((()=>[h($,{title:"",style:{margin:"20px 0px 0px 0px"}},{default:c((()=>[h(T,{style:{display:"flex"}},{default:c((()=>[h(T,{style:{"padding-left":"10px"}},{default:c((()=>[h(M,{type:"warn",size:"mini",onClick:a=>i.deleteStore(t,e)},{default:c((()=>[_("删除")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024),h(L,{label:"商店名称"},{default:c((()=>[h(r,{modelValue:e.name,"onUpdate:modelValue":t=>e.name=t,trim:"both"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),h(L,{label:"Scheme"},{default:c((()=>[h(r,{maxlength:-1,modelValue:e.scheme,"onUpdate:modelValue":t=>e.scheme=t,trim:"both"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1}),h($,{class:"mp_platform",title:"小程序/快应用信息"},{default:c((()=>[(f(!0),x(k,null,g(e.mpPlatformKeys,(t=>(f(),m(T,{key:t},{default:c((()=>[h(B,{onChange:({detail:{value:a}})=>{e.setPlatformChcekbox(t,!!a.length)}},{default:c((()=>[h(R,{class:C(["title_padding",{font_bold:e.getPlatformChcekbox(t)}])},{default:c((()=>[h(X,{value:t,checked:e.middleware_checkbox[t]},null,8,["value","checked"]),h(J,null,{default:c((()=>[_(P(e.mpPlatform[t]),1)])),_:2},1024)])),_:2},1032,["class"])])),_:2},1032,["onChange"]),o.mpAccordionStatus&&e.getPlatformChcekbox(t)?(f(),x(k,{key:0},[h(L,{label:"名称"},{default:c((()=>[h(r,{modelValue:e.formData[t].name,"onUpdate:modelValue":a=>e.formData[t].name=a,trim:"both"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),h(L,{label:e.mpPlatform[t].slice(-3)+"码"},{default:c((()=>[h(W,{modelValue:e.middleware_img[t],"onUpdate:modelValue":a=>e.middleware_img[t]=a,"image-styles":{width:"200rpx"},"return-type":"object","file-mediatype":"image",limit:"1",mode:"grid",onSuccess:a=>e.iconUrlSuccess(a,`${t}.qrcode_url`),onDelete:a=>e.iconUrlDelete(a,`${t}.qrcode_url`)},null,8,["modelValue","onUpdate:modelValue","onSuccess","onDelete"])])),_:2},1032,["label"])],64)):b("",!0)])),_:2},1024)))),128))])),_:1}),h($,{title:"web信息"},{default:c((()=>[h(L,{label:"链接地址"},{default:c((()=>[h(r,{maxlength:-1,modelValue:e.formData.h5.url,"onUpdate:modelValue":t[10]||(t[10]=t=>e.formData.h5.url=t),trim:"both"},null,8,["modelValue"]),y("span",{style:{"font-size":"13px",color:"#999"}},[_("如需免费的前端网页托管，请开通 "),y("a",{style:{color:"inherit"},href:"https://unicloud.dcloud.net.cn"},"uniCloud"),_(" ，创建服务空间，并在 “前端网页托管” 里上传你的网页")])])),_:1})])),_:1}),e.isEdit?(f(),m($,{key:0,isShadow:!1},{default:c((()=>[h(J,null,{default:c((()=>[h(J,{style:{"font-weight":"bold"}},{default:c((()=>[_("提示：")])),_:1}),_("保存后需重新生成发布页")])),_:1})])),_:1})):b("",!0),h(T,{class:"uni-button-group"},{default:c((()=>[h(M,{type:"primary",class:"uni-button",style:{width:"100px"},onClick:i.submit},{default:c((()=>[_("保存")])),_:1},8,["onClick"]),h(Z,{"open-type":"navigateBack",style:{"margin-left":"15px"}},{default:c((()=>[h(M,{class:"uni-button",style:{width:"100px"}},{default:c((()=>[_("返回")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","labelWidth","rules"])])),_:1})}],["__scopeId","data-v-3a3fbd06"]]);export{R as default};
