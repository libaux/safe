import{_ as s,Y as o,E as a,G as e,H as r,s as t,r as d,b as l,c as n,w as u,i,o as m,l as w,m as f,y as c,z as p,u as P}from"./index-ChMB-C2t.js";import{_}from"./uni-match-media.B8fOjb6J.js";import{_ as h}from"./uni-easyinput.CzLBTCKg.js";import{_ as g}from"./uni-forms-item.CbwkBOSJ.js";import{_ as y}from"./uni-forms.Cz-Mo-Oc.js";import{m as b}from"./login-page.mixin.pSgIgqeE.js";import{p as x}from"./password.BKEqNzmo.js";const D=o.importObject("uni-id-co",{customUI:!0});const V=s({mixins:[b],data:()=>({focusOldPassword:!1,focusNewPassword:!1,focusNewPassword2:!1,formData:{oldPassword:"",newPassword:"",newPassword2:""},rules:{oldPassword:{rules:[{required:!0,errorMessage:"请输入新密码"},{pattern:/^.{6,20}$/,errorMessage:"密码为6 - 20位"}]},...x.getPwdRules("newPassword","newPassword2")},logo:"/static/logo.png"}),onReady(){this.$refs.form.setRules(this.rules)},onShow(){document.onkeydown=s=>{var o=s||window.event;o&&13==o.keyCode&&this.submit()}},methods:{submit(){this.$refs.form.validate().then((s=>{let{oldPassword:o,newPassword:d}=this.formData;D.updatePwd({oldPassword:o,newPassword:d}).then((s=>{a("uni_id_token"),e("uni_id_token_expired",0),r({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})})).catch((s=>{t({content:s.message,showCancel:!1})}))})).catch((s=>{let o=s[0].key;o=o.replace(o[0],o[0].toUpperCase()),this["focus"+o]=!0}))}}},[["render",function(s,o,a,e,r,t){const b=c,x=i,D=p,V=d(l("uni-match-media"),_),j=d(l("uni-easyinput"),h),k=d(l("uni-forms-item"),g),v=P,B=d(l("uni-forms"),y);return m(),n(x,{class:"uni-content"},{default:u((()=>[w(V,{"min-width":690},{default:u((()=>[w(x,{class:"login-logo"},{default:u((()=>[w(b,{src:r.logo},null,8,["src"])])),_:1}),w(D,{class:"title title-box"},{default:u((()=>[f("修改密码")])),_:1})])),_:1}),w(B,{ref:"form",value:r.formData,"err-show-type":"toast"},{default:u((()=>[w(k,{name:"oldPassword"},{default:u((()=>[w(j,{focus:r.focusOldPassword,onBlur:o[0]||(o[0]=s=>r.focusOldPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:r.formData.oldPassword,"onUpdate:modelValue":o[1]||(o[1]=s=>r.formData.oldPassword=s),placeholder:"请输入旧密码"},null,8,["focus","modelValue"])])),_:1}),w(k,{name:"newPassword"},{default:u((()=>[w(j,{focus:r.focusNewPassword,onBlur:o[2]||(o[2]=s=>r.focusNewPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:r.formData.newPassword,"onUpdate:modelValue":o[3]||(o[3]=s=>r.formData.newPassword=s),placeholder:"请输入新密码"},null,8,["focus","modelValue"])])),_:1}),w(k,{name:"newPassword2"},{default:u((()=>[w(j,{focus:r.focusNewPassword2,onBlur:o[4]||(o[4]=s=>r.focusNewPassword2=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:r.formData.newPassword2,"onUpdate:modelValue":o[5]||(o[5]=s=>r.formData.newPassword2=s),placeholder:"请再次输入新密码"},null,8,["focus","modelValue"])])),_:1}),w(v,{class:"uni-btn send-btn-box",type:"primary",onClick:t.submit},{default:u((()=>[f("提交")])),_:1},8,["onClick"])])),_:1},8,["value"])])),_:1})}],["__scopeId","data-v-310f3ac4"]]);export{V as default};
