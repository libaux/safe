import{_ as e,a as t,V as s,r as a,b as n,o,c as i,w as r,l as u,J as c,m as l,t as h,z as m,i as d}from"./index-BdDI6p4_.js";import{_ as p}from"./uni-captcha.CHOqpmZe.js";import{_ as f}from"./uni-easyinput.WKvxAjIR.js";const b=e({name:"uni-sms-form",model:{prop:"modelValue",event:"update:modelValue"},props:{event:["update:modelValue"],count:{type:[String,Number],default:60},phone:{type:[String,Number],default:""},type:{type:String,default:()=>"login"},focusCaptchaInput:{type:Boolean,default:()=>!1}},data:()=>({captcha:"",reverseNumber:0,reverseTimer:null,modelValue:"",focusSmsCodeInput:!1}),watch:{captcha(e,t){4==e.length&&4!=t.length&&this.start()},modelValue(e){this.$emit("input",e),this.$emit("update:modelValue",e)}},computed:{innerText(){return 0==this.reverseNumber?"获取短信验证码":"重新发送("+this.reverseNumber+"s)"}},created(){this.initClick()},methods:{getImageCaptcha(e){this.$refs.captcha.getImageCaptcha(e)},initClick(){this.start=function(e,t){let s;return t=t||500,function(){let a=this,n=arguments;s&&clearTimeout(s);let o=!s;s=setTimeout((()=>{s=null}),t),o&&e.apply(a,n)}}((()=>{0==this.reverseNumber&&this.sendMsg()}))},sendMsg(){if(4!=this.captcha.length)return this.$refs.captcha.focusCaptchaInput=!0,t({title:"请先输入图形验证码",icon:"none",duration:3e3});if(!/^1\d{10}$/.test(this.phone))return t({title:"手机号格式错误",icon:"none",duration:3e3});const e=s.importObject("uni-id-co",{customUI:!0});console.log("sendSmsCode",{mobile:this.phone,scene:this.type,captcha:this.captcha}),e.sendSmsCode({mobile:this.phone,scene:this.type,captcha:this.captcha}).then((e=>{t({title:"短信验证码发送成功",icon:"none",duration:3e3}),this.reverseNumber=Number(this.count),this.getCode()})).catch((e=>{"uni-id-invalid-sms-template-id"==e.code?(this.modelValue="123456",t({title:"已启动测试模式,详情【控制台信息】",icon:"none",duration:3e3}),console.warn(e.message)):(this.getImageCaptcha(),this.captcha="",t({title:e.message,icon:"none",duration:3e3}))}))},getCode(){if(0==this.reverseNumber)return clearTimeout(this.reverseTimer),void(this.reverseTimer=null);this.reverseNumber--,this.reverseTimer=setTimeout((()=>{this.getCode()}),1e3)}}},[["render",function(e,t,s,b,g,v){const C=a(n("uni-captcha"),p),V=a(n("uni-easyinput"),f),y=m,I=d;return o(),i(I,null,{default:r((()=>[u(C,{focus:s.focusCaptchaInput,ref:"captcha",scene:"send-sms-code",modelValue:g.captcha,"onUpdate:modelValue":t[0]||(t[0]=e=>g.captcha=e)},null,8,["focus","modelValue"]),u(I,{class:"box"},{default:r((()=>[u(V,{focus:g.focusSmsCodeInput,onBlur:t[1]||(t[1]=e=>g.focusSmsCodeInput=!1),type:"number",class:"input-box",inputBorder:!1,modelValue:g.modelValue,"onUpdate:modelValue":t[2]||(t[2]=e=>g.modelValue=e),maxlength:"6",clearable:!1,placeholder:"请输入短信验证码"},null,8,["focus","modelValue"]),u(I,{class:"short-code-btn","hover-class":"hover",onClick:e.start},{default:r((()=>[u(y,{class:c(["inner-text",0==g.reverseNumber?"inner-text-active":""])},{default:r((()=>[l(h(v.innerText),1)])),_:1},8,["class"])])),_:1},8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-c9fb6b9d"]]);export{b as _};
