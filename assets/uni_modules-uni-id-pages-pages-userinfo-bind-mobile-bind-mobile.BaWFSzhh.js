import{_ as o,a,V as e,a3 as t,O as s,r as i,b as n,c as l,w as m,i as r,o as u,l as c,m as d,y as p,z as f,u as b}from"./index-BdDI6p4_.js";import{_ as h}from"./uni-match-media.B0RAjeXY.js";import{_ as D}from"./uni-easyinput.WKvxAjIR.js";import{_ as g}from"./uni-id-pages-sms-form.xEOxPkp1.js";import{_ as y}from"./uni-popup-captcha.BgsLO_da.js";import"./uni-captcha.CHOqpmZe.js";const _=o({data:()=>({formData:{mobile:"",code:"",captcha:""},focusMobile:!0,logo:"/static/logo.png"}),computed:{tipText(){return`验证码已通过短信发送至 ${this.formData.mobile}。密码为6 - 20位`}},onLoad(o){},onReady(){},methods:{submit(){if(!/^1\d{10}$/.test(this.formData.mobile))return this.focusMobile=!0,a({title:"手机号码格式不正确",icon:"none",duration:3e3});if(!/^\d{6}$/.test(this.formData.code))return this.$refs.smsForm.focusSmsCodeInput=!0,a({title:"验证码格式不正确",icon:"none",duration:3e3});e.importObject("uni-id-co").bindMobileBySms(this.formData).then((o=>{a({title:o.errMsg,icon:"none",duration:3e3}),this.getOpenerEventChannel(),t.setUserInfo(this.formData),s()})).catch((o=>{console.log(o),"uni-id-captcha-required"==o.errCode&&this.$refs.popup.open()})).finally((o=>{this.formData.captcha=""}))}}},[["render",function(o,a,e,t,s,_){const V=p,C=r,j=f,x=i(n("uni-match-media"),h),M=i(n("uni-easyinput"),D),$=i(n("uni-id-pages-sms-form"),g),B=b,U=i(n("uni-popup-captcha"),y);return u(),l(C,{class:"uni-content"},{default:m((()=>[c(x,{"min-width":690},{default:m((()=>[c(C,{class:"login-logo"},{default:m((()=>[c(V,{src:s.logo},null,8,["src"])])),_:1}),c(j,{class:"title title-box"},{default:m((()=>[d("绑定手机号")])),_:1})])),_:1}),c(M,{clearable:"",focus:s.focusMobile,onBlur:a[0]||(a[0]=o=>s.focusMobile=!1),type:"number",class:"input-box",inputBorder:!1,modelValue:s.formData.mobile,"onUpdate:modelValue":a[1]||(a[1]=o=>s.formData.mobile=o),maxlength:"11",placeholder:"请输入手机号"},null,8,["focus","modelValue"]),c($,{ref:"smsForm",type:"bind-mobile-by-sms",modelValue:s.formData.code,"onUpdate:modelValue":a[2]||(a[2]=o=>s.formData.code=o),phone:s.formData.mobile},null,8,["modelValue","phone"]),c(B,{class:"uni-btn send-btn-box",type:"primary",onClick:_.submit},{default:m((()=>[d("提交")])),_:1},8,["onClick"]),c(U,{onConfirm:_.submit,modelValue:s.formData.captcha,"onUpdate:modelValue":a[3]||(a[3]=o=>s.formData.captcha=o),scene:"bind-mobile-by-sms",ref:"popup"},null,8,["onConfirm","modelValue"])])),_:1})}],["__scopeId","data-v-8ad2d767"]]);export{_ as default};
