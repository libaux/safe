import{_ as e,r as t,K as s,b as o,o as i,c as l,w as a,l as r,J as n,v as c,x as u,p as h,F as d,L as p,U as f,I as m,i as y}from"./index-CTufusbk.js";function g(e){let t="";for(let s in e){t+=`${s}:${e[s]};`}return t}const b=e({name:"uni-easyinput",emits:["click","iconClick","update:modelValue","input","focus","blur","confirm","clear","eyes","change","keyboardheightchange"],model:{prop:"modelValue",event:"update:modelValue"},options:{virtualHost:!0},inject:{form:{from:"uniForm",default:null},formItem:{from:"uniFormItem",default:null}},props:{name:String,value:[Number,String],modelValue:[Number,String],type:{type:String,default:"text"},clearable:{type:Boolean,default:!0},autoHeight:{type:Boolean,default:!1},placeholder:{type:String,default:" "},placeholderStyle:String,focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},clearSize:{type:[Number,String],default:24},inputBorder:{type:Boolean,default:!0},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},trim:{type:[Boolean,String],default:!1},cursorSpacing:{type:Number,default:0},passwordIcon:{type:Boolean,default:!0},primaryColor:{type:String,default:"#2979ff"},styles:{type:Object,default:()=>({color:"#333",backgroundColor:"#fff",disableColor:"#F7F6F6",borderColor:"#e5e5e5"})},errorMessage:{type:[String,Boolean],default:""}},data:()=>({focused:!1,val:"",showMsg:"",border:!1,isFirstBorder:!1,showClearIcon:!1,showPassword:!1,focusShow:!1,localMsg:"",isEnter:!1}),computed:{isVal(){const e=this.val;return!(!e&&0!==e)},msg(){return this.localMsg||this.errorMessage},inputMaxlength(){return Number(this.maxlength)},boxStyle(){return`color:${this.inputBorder&&this.msg?"#e43d33":this.styles.color};`},inputContentClass(){return function(e){let t="";for(let s in e)e[s]&&(t+=`${s} `);return t}({"is-input-border":this.inputBorder,"is-input-error-border":this.inputBorder&&this.msg,"is-textarea":"textarea"===this.type,"is-disabled":this.disabled,"is-focused":this.focusShow})},inputContentStyle(){const e=this.focusShow?this.primaryColor:this.styles.borderColor;return g({"border-color":(this.inputBorder&&this.msg?"#dd524d":e)||"#e5e5e5","background-color":this.disabled?this.styles.disableColor:this.styles.backgroundColor})},inputStyle(){return g({"padding-right":"password"===this.type||this.clearable||this.prefixIcon?"":"10px","padding-left":this.prefixIcon?"":"10px"})}},watch:{value(e){this.val=e},modelValue(e){this.val=e},focus(e){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))}},created(){this.init(),this.form&&this.formItem&&this.$watch("formItem.errMsg",(e=>{this.localMsg=e}))},mounted(){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))},methods:{init(){this.value||0===this.value?this.val=this.value:this.modelValue||0===this.modelValue||""===this.modelValue?this.val=this.modelValue:this.val=null},onClickIcon(e){this.$emit("iconClick",e)},onEyes(){this.showPassword=!this.showPassword,this.$emit("eyes",this.showPassword)},onInput(e){let t=e.detail.value;this.trim&&("boolean"==typeof this.trim&&this.trim&&(t=this.trimStr(t)),"string"==typeof this.trim&&(t=this.trimStr(t,this.trim))),this.errMsg&&(this.errMsg=""),this.val=t,this.$emit("input",t),this.$emit("update:modelValue",t)},onFocus(){this.$nextTick((()=>{this.focused=!0})),this.$emit("focus",null)},_Focus(e){this.focusShow=!0,this.$emit("focus",e)},onBlur(){this.focused=!1,this.$emit("focus",null)},_Blur(e){if(e.detail.value,this.focusShow=!1,this.$emit("blur",e),!1===this.isEnter&&this.$emit("change",this.val),this.form&&this.formItem){const{validateTrigger:e}=this.form;"blur"===e&&this.formItem.onFieldChange()}},onConfirm(e){this.$emit("confirm",this.val),this.isEnter=!0,this.$emit("change",this.val),this.$nextTick((()=>{this.isEnter=!1}))},onClear(e){this.val="",this.$emit("input",""),this.$emit("update:modelValue",""),this.$emit("clear")},onkeyboardheightchange(e){this.$emit("keyboardheightchange",e)},trimStr:(e,t="both")=>"both"===t?e.trim():"left"===t?e.trimLeft():"right"===t?e.trimRight():"start"===t?e.trimStart():"end"===t?e.trimEnd():"all"===t?e.replace(/\s+/g,""):e}},[["render",function(e,g,b,S,x,C){const w=t(o("uni-icons"),s),k=f,v=m,I=y;return i(),l(I,{class:n(["uni-easyinput",{"uni-easyinput-error":C.msg}]),style:c(C.boxStyle)},{default:a((()=>[r(I,{class:n(["uni-easyinput__content",C.inputContentClass]),style:c(C.inputContentStyle)},{default:a((()=>[b.prefixIcon?(i(),l(w,{key:0,class:"content-clear-icon",type:b.prefixIcon,color:"#c0c4cc",onClick:g[0]||(g[0]=e=>C.onClickIcon("prefix")),size:"22"},null,8,["type"])):u("",!0),"textarea"===b.type?(i(),l(k,{key:1,class:n(["uni-easyinput__content-textarea",{"input-padding":b.inputBorder}]),name:b.name,value:x.val,placeholder:b.placeholder,placeholderStyle:b.placeholderStyle,disabled:b.disabled,"placeholder-class":"uni-easyinput__placeholder-class",maxlength:C.inputMaxlength,focus:x.focused,autoHeight:b.autoHeight,"cursor-spacing":b.cursorSpacing,onInput:C.onInput,onBlur:C._Blur,onFocus:C._Focus,onConfirm:C.onConfirm,onKeyboardheightchange:C.onkeyboardheightchange},null,8,["class","name","value","placeholder","placeholderStyle","disabled","maxlength","focus","autoHeight","cursor-spacing","onInput","onBlur","onFocus","onConfirm","onKeyboardheightchange"])):(i(),l(v,{key:2,type:"password"===b.type?"text":b.type,class:"uni-easyinput__content-input",style:c(C.inputStyle),name:b.name,value:x.val,password:!x.showPassword&&"password"===b.type,placeholder:b.placeholder,placeholderStyle:b.placeholderStyle,"placeholder-class":"uni-easyinput__placeholder-class",disabled:b.disabled,maxlength:C.inputMaxlength,focus:x.focused,confirmType:b.confirmType,"cursor-spacing":b.cursorSpacing,onFocus:C._Focus,onBlur:C._Blur,onInput:C.onInput,onConfirm:C.onConfirm,onKeyboardheightchange:C.onkeyboardheightchange},null,8,["type","style","name","value","password","placeholder","placeholderStyle","disabled","maxlength","focus","confirmType","cursor-spacing","onFocus","onBlur","onInput","onConfirm","onKeyboardheightchange"])),"password"===b.type&&b.passwordIcon?(i(),h(d,{key:3},[C.isVal?(i(),l(w,{key:0,class:n(["content-clear-icon",{"is-textarea-icon":"textarea"===b.type}]),type:x.showPassword?"eye-slash-filled":"eye-filled",size:22,color:x.focusShow?b.primaryColor:"#c0c4cc",onClick:C.onEyes},null,8,["class","type","color","onClick"])):u("",!0)],64)):b.suffixIcon?(i(),h(d,{key:4},[b.suffixIcon?(i(),l(w,{key:0,class:"content-clear-icon",type:b.suffixIcon,color:"#c0c4cc",onClick:g[1]||(g[1]=e=>C.onClickIcon("suffix")),size:"22"},null,8,["type"])):u("",!0)],64)):(i(),h(d,{key:5},[b.clearable&&C.isVal&&!b.disabled&&"textarea"!==b.type?(i(),l(w,{key:0,class:n(["content-clear-icon",{"is-textarea-icon":"textarea"===b.type}]),type:"clear",size:b.clearSize,color:C.msg?"#dd524d":x.focusShow?b.primaryColor:"#c0c4cc",onClick:C.onClear},null,8,["class","size","color","onClick"])):u("",!0)],64)),p(e.$slots,"right",{},void 0,!0)])),_:3},8,["class","style"])])),_:3},8,["class","style"])}],["__scopeId","data-v-a08716d2"]]);export{b as _};
