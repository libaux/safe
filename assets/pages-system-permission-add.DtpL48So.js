import{_ as e,Y as a,R as t,h as s,a as o,O as n,s as i,r as m,b as l,c as r,w as u,i as d,o as c,l as f,m as p,t as b,I as _,U as h,u as v,a0 as D}from"./index-nI17xpur.js";import{_ as y}from"./uni-forms-item.Dcp4oYwL.js";import{_ as V}from"./uni-forms.C-pi59MJ.js";import{v as g}from"./uni-id-permissions.DrKF0XvK.js";const k=a.database();k.command;function x(e){let a={};for(let t in g)e.includes(t)&&(a[t]=g[t]);return a}const I=e({data(){let e={permission_id:"",permission_name:"",comment:""};return{formData:e,formOptions:{},rules:{...x(Object.keys(e))}}},onReady(){this.$refs.form.setRules(this.rules)},methods:{submit(){t({mask:!0}),this.$refs.form.validate().then((e=>{this.submitForm(e)})).catch((()=>{s()}))},submitForm(e){k.collection("uni-id-permissions").add(e).then((e=>{o({title:"新增成功"}),this.getOpenerEventChannel().emit("refreshData"),setTimeout((()=>n()),500)})).catch((e=>{i({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{s()}))}}},[["render",function(e,a,t,s,o,n){const i=_,g=m(l("uni-forms-item"),y),k=h,x=v,I=D,j=d,w=m(l("uni-forms"),V);return c(),r(j,{class:"uni-container"},{default:u((()=>[f(w,{ref:"form",value:o.formData,validateTrigger:"bind"},{default:u((()=>[f(g,{name:"permission_id",label:"权限ID",required:""},{default:u((()=>[f(i,{placeholder:"权限唯一标识，不可修改，不允许重复",onInput:a[0]||(a[0]=a=>e.binddata("permission_id",a.detail.value)),class:"uni-input-border",modelValue:o.formData.permission_id,"onUpdate:modelValue":a[1]||(a[1]=e=>o.formData.permission_id=e),trim:"both"},null,8,["modelValue"])])),_:1}),f(g,{name:"permission_name",label:"权限名称",required:""},{default:u((()=>[f(i,{placeholder:"权限名称",onInput:a[2]||(a[2]=a=>e.binddata("permission_name",a.detail.value)),class:"uni-input-border",modelValue:o.formData.permission_name,"onUpdate:modelValue":a[3]||(a[3]=e=>o.formData.permission_name=e),trim:"both"},null,8,["modelValue"])])),_:1}),f(g,{name:"comment",label:"备注"},{default:u((()=>[f(k,{placeholder:"备注",onInput:a[4]||(a[4]=a=>e.binddata("comment",a.detail.value)),class:"uni-textarea-border",modelValue:o.formData.comment,"onUpdate:modelValue":a[5]||(a[5]=e=>o.formData.comment=e),trim:"both"},null,8,["modelValue"])])),_:1}),f(j,{class:"uni-button-group"},{default:u((()=>[f(x,{type:"primary",class:"uni-button",style:{width:"100px"},onClick:n.submit},{default:u((()=>[p(b(e.$t("common.button.submit")),1)])),_:1},8,["onClick"]),f(I,{"open-type":"navigateBack",style:{"margin-left":"15px"}},{default:u((()=>[f(x,{class:"uni-button",style:{width:"100px"}},{default:u((()=>[p(b(e.$t("common.button.back")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["value"])])),_:1})}],["__scopeId","data-v-0c01ac2c"]]);export{I as default};
