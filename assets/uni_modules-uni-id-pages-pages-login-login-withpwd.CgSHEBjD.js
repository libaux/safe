import{_ as e,Y as s,n as a,a as t,r as i,b as n,c as o,w as r,i as u,o as l,l as d,m as c,x as p,y as m,z as h,u as f}from"./index-ChMB-C2t.js";import{_ as g}from"./uni-easyinput.CzLBTCKg.js";import{_ as w}from"./uni-forms-item.CbwkBOSJ.js";import{_}from"./uni-forms.Cz-Mo-Oc.js";import{_ as b}from"./uni-captcha.CqTuD6Ro.js";import{_ as y}from"./uni-id-pages-agreements.B1Q3v-C3.js";import{_ as C}from"./uni-id-pages-fab-login.BqdRyBVt.js";import{m as k}from"./login-page.mixin.pSgIgqeE.js";import"./uni-popup-dialog.DztJQDsh.js";const j=s.importObject("uni-id-co",{errorOptions:{type:"toast"}});const x=e({mixins:[k],data:()=>({password:"",username:"",captcha:"",needCaptcha:!1,focusUsername:!1,focusPassword:!1,logo:"/static/logo.png",existAdmin:!0}),onShow(){document.onkeydown=e=>{var s=e||window.event;s&&13==s.keyCode&&this.pwdLogin()}},async onLoad(){},methods:{toRetrievePwd(){let e="/uni_modules/uni-id-pages/pages/retrieve/retrieve";/^1\d{10}$/.test(this.username)&&(e+=`?phoneNumber=${this.username}`),a({url:e})},pwdLogin(){if(!this.password.length)return this.focusPassword=!0,t({title:"请输入密码",icon:"none",duration:3e3});if(!this.username.length)return this.focusUsername=!0,t({title:"请输入手机号/用户名/邮箱",icon:"none",duration:3e3});if(this.needCaptcha&&4!=this.captcha.length)return this.$refs.captcha.getImageCaptcha(),t({title:"请输入验证码",icon:"none",duration:3e3});if(this.needAgreements&&!this.agree)return this.$refs.agreements.popup(this.pwdLogin);let e={password:this.password,captcha:this.captcha};/^1\d{10}$/.test(this.username)?e.mobile=this.username:/@/.test(this.username)?e.email=this.username:e.username=this.username,j.login(e).then((e=>{this.loginSuccess(e)})).catch((e=>{"uni-id-captcha-required"==e.errCode?this.needCaptcha=!0:this.needCaptcha&&this.$refs.captcha.getImageCaptcha()}))},toRegister(){a({url:this.config.isAdmin?"/uni_modules/uni-id-pages/pages/register/register-admin":"/uni_modules/uni-id-pages/pages/register/register",fail(e){console.error(e)}})}}},[["render",function(e,s,a,t,k,j){const x=m,V=u,v=h,U=i(n("uni-easyinput"),g),L=i(n("uni-forms-item"),w),P=i(n("uni-forms"),_),$=i(n("uni-captcha"),b),A=i(n("uni-id-pages-agreements"),y),B=f,I=i(n("uni-id-pages-fab-login"),C);return l(),o(V,{class:"uni-content"},{default:r((()=>[d(V,{class:"login-logo"},{default:r((()=>[d(x,{src:k.logo},null,8,["src"])])),_:1}),d(v,{class:"title title-box"},{default:r((()=>[c("账号密码登录")])),_:1}),d(P,null,{default:r((()=>[d(L,{name:"username"},{default:r((()=>[d(U,{focus:k.focusUsername,onBlur:s[0]||(s[0]=e=>k.focusUsername=!1),class:"input-box",inputBorder:!1,modelValue:k.username,"onUpdate:modelValue":s[1]||(s[1]=e=>k.username=e),placeholder:"请输入手机号/用户名/邮箱"},null,8,["focus","modelValue"])])),_:1}),d(L,{name:"password"},{default:r((()=>[d(U,{focus:k.focusPassword,onBlur:s[2]||(s[2]=e=>k.focusPassword=!1),class:"input-box",clearable:"",type:"password",inputBorder:!1,modelValue:k.password,"onUpdate:modelValue":s[3]||(s[3]=e=>k.password=e),placeholder:"请输入密码"},null,8,["focus","modelValue"])])),_:1})])),_:1}),k.needCaptcha?(l(),o($,{key:0,focus:"",ref:"captcha",scene:"login-by-pwd",modelValue:k.captcha,"onUpdate:modelValue":s[4]||(s[4]=e=>k.captcha=e)},null,8,["modelValue"])):p("",!0),d(A,{scope:"login",ref:"agreements"},null,512),d(B,{class:"uni-btn",type:"primary",onClick:j.pwdLogin},{default:r((()=>[c("登录")])),_:1},8,["onClick"]),d(V,{class:"link-box"},{default:r((()=>[e.config.isAdmin?p("",!0):(l(),o(V,{key:0},{default:r((()=>[d(v,{class:"forget"},{default:r((()=>[c("忘记了？")])),_:1}),d(v,{class:"link",onClick:j.toRetrievePwd},{default:r((()=>[c("找回密码")])),_:1},8,["onClick"])])),_:1}))])),_:1}),d(I,{ref:"uniFabLogin"},null,512)])),_:1})}],["__scopeId","data-v-a7937e81"]]);export{x as default};
