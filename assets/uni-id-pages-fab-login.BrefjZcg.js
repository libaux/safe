import{_ as e,aa as t,ad as i,ae as n,O as o,n as s,H as a,a as l,R as u,h as r,a5 as p,Y as g,a3 as c,s as d,o as f,c as h,w as m,l as y,p as w,F as v,q as _,m as b,t as x,y as C,z as S,i as T}from"./index-CTufusbk.js";const k=e({computed:{agreements(){if(!t.agreements)return[];let{serviceUrl:e,privacyUrl:i}=t.agreements;return[{url:e,title:"用户服务协议"},{url:i,title:"隐私政策条款"}]},agree:{get(){return this.getParentComponent().agree},set(e){return this.getParentComponent().agree=e}}},data:()=>({servicesList:[{id:"username",text:"账号登录",logo:"/uni_modules/uni-id-pages/static/login/uni-fab-login/user.png",path:"/uni_modules/uni-id-pages/pages/login/login-withpwd"},{id:"smsCode",text:"短信验证码",logo:"/uni_modules/uni-id-pages/static/login/uni-fab-login/sms.png",path:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd?type=smsCode"},{id:"weixin",text:"微信登录",logo:"/uni_modules/uni-id-pages/static/login/uni-fab-login/weixin.png"},{id:"apple",text:"苹果登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/apple.png"},{id:"univerify",text:"一键登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/univerify.png"},{id:"taobao",text:"淘宝登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/taobao.png"},{id:"facebook",text:"脸书登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/facebook.png"},{id:"alipay",text:"支付宝登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/alipay.png"},{id:"qq",text:"QQ登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/qq.png"},{id:"google",text:"谷歌登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/google.png"},{id:"douyin",text:"抖音登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/douyin.png"},{id:"sinaweibo",text:"新浪微博",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/sinaweibo.png"}],univerifyStyle:{fullScreen:!0,backgroundColor:"#ffffff",buttons:{iconWidth:"45px",list:[]},privacyTerms:{defaultCheckBoxState:!1,textColor:"#BBBBBB",termsColor:"#5496E3",prefix:"我已阅读并同意",suffix:"并使用本机号码登录",privacyItems:[]}}}),watch:{agree(e){this.univerifyStyle.privacyTerms.defaultCheckBoxState=e}},async created(){let e=this.servicesList,i=t.loginTypes;e=e.filter((e=>"apple"!=e.id&&i.includes(e.id))),i.includes("univerify")&&(this.univerifyStyle.privacyTerms.privacyItems=this.agreements,e.forEach((({id:e,logo:t,path:i})=>{"univerify"!=e&&this.univerifyStyle.buttons.list.push({iconPath:t,provider:e,path:i})}))),this.servicesList=e.filter((e=>(e.path?e.path.split("?")[0]:"")!=this.getRoute(1)))},methods:{getParentComponent(){return this.$parent.$parent},setUserInfo(e){console.log("setUserInfo",e)},getRoute(e=0){let t=i();return e>t.length?"":"/"+t[t.length-e].route},toPage(e,t=0){if(this.getRoute(1)==e.split("?")[0]&&"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"==this.getRoute(1)){let t=e.split("?")[1].split("=")[1];n("uni-id-pages-setLoginType",t)}else this.getRoute(2)==e?o():this.getRoute(1)!=e?0===t?s({url:e,animationType:"slide-in-left",complete(e){}}):a({url:e,animationType:"slide-in-left",complete(e){}}):console.log("出乎意料的情况,path："+e)},async login_before(e,i=!0,n={}){var s,a;if(console.log(e),["qq","xiaomi","sinaweibo","taobao","facebook","google","alipay","douyin"].includes(e))return l({title:"该登录方式暂未实现，欢迎提交pr",icon:"none",duration:3e3});if(["univerify","apple"].includes(e))return l({title:"当前设备不支持此登录，请选择其他登录方式",icon:"none",duration:3e3});let g=((null==(a=null==(s=t)?void 0:s.agreements)?void 0:a.scope)||[]).includes("register");if("univerify"!=e&&g&&!this.agree){return this.getParentComponent().$refs.agreements.popup((()=>{this.login_before(e,i,n)}))}if("weixin"==e){const e="/safe/";let i=location.protocol+"//"+location.host+e.replace(/\/$/,"")+(window.location.href.includes("#")?"/#":"")+"/uni_modules/uni-id-pages/pages/login/login-withoutpwd?is_weixin_redirect=true&type=weixin";return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)?window.open(`https://open.weixin.qq.com/connect/oauth2/authorize?\n\t\t\t\t\t\t\t\t\t\tappid=${t.appid.weixin.h5}\n\t\t\t\t\t\t\t\t\t\t&redirect_uri=${encodeURIComponent(i)}\n\t\t\t\t\t\t\t\t\t\t&response_type=code\n\t\t\t\t\t\t\t\t\t\t&scope=snsapi_userinfo\n\t\t\t\t\t\t\t\t\t\t&state=STATE&connect_redirect=1#wechat_redirect`):location.href=`https://open.weixin.qq.com/connect/qrconnect?appid=${t.appid.weixin.web}\n\t\t\t\t\t\t\t\t\t\t\t&redirect_uri=${encodeURIComponent(i)}\n\t\t\t\t\t\t\t\t\t\t\t&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect`}if(u({mask:!0}),"univerify"==e){let e=function(){r(),t.close(),t.offButtonsClick(n)},t=uni.getUniverifyManager(),i=!1,n=async t=>{console.log("点击了第三方登录，provider：",t,t.provider,this.univerifyStyle.buttons.list),i=!0;let n=await uni.getCheckBoxState();this.agree=n.state;let{path:o}=this.univerifyStyle.buttons.list[t.index];o?(this.getRoute(1).includes("login-withoutpwd")&&o.includes("login-withoutpwd")&&this.getParentComponent().showCurrentWebview(),this.toPage(o,1),e()):this.agree?(e(),setTimeout((()=>{this.login_before(t.provider)}),500)):l({title:"你未同意隐私政策协议",icon:"none",duration:3e3})};return t.onButtonsClick(n),t.login({univerifyStyle:this.univerifyStyle,success:e=>{this.login(e.authResult,"univerify")},fail(e){console.log(e),i||o()},complete:async e=>{r(),t.offButtonsClick(n)}})}if("weixinMobile"===e)return this.login({phoneCode:n.phoneNumberCode},e);p({provider:e,onlyAuthorize:!0,success:async t=>{if("apple"==e){let e=await this.getUserInfo({provider:"apple"});Object.assign(t.authResult,e.userInfo),r()}this.login("weixin"==e?{code:t.code}:t.authResult,e)},fail:async e=>{console.log(e),r()}})},login(e,t){console.log({params:e,type:t});let i="loginBy"+t.trim().replace(t[0],t[0].toUpperCase());g.importObject("uni-id-co",{customUI:!0})[i](e).then((e=>{l({title:"登录成功",icon:"none",duration:2e3}),e.loginType=t,c.loginSuccess(e)})).catch((e=>{d({content:e.message,confirmText:"知道了",showCancel:!1})})).finally((e=>{"univerify"==t&&uni.closeAuthView(),r()}))},getUserInfo:async e=>new Promise(((t,i)=>{uni.getUserInfo({...e,success:e=>{t(e)},fail:e=>{d({content:JSON.stringify(e),showCancel:!1}),i(e)}})}))}},[["render",function(e,t,i,n,o,s){const a=C,l=S,u=T;return f(),h(u,null,{default:m((()=>[y(u,{class:"fab-login-box"},{default:m((()=>[(f(!0),w(v,null,_(o.servicesList,((e,t)=>(f(),h(u,{class:"item",key:t,onClick:t=>e.path?s.toPage(e.path):s.login_before(e.id,!1)},{default:m((()=>[y(a,{class:"logo",src:e.logo,mode:"scaleToFill"},null,8,["src"]),y(l,{class:"login-title"},{default:m((()=>[b(x(e.text),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})}],["__scopeId","data-v-8f11f023"]]);export{k as _};
