import{_ as t,a as e,s as i,o as s,c as r,w as l,L as a,l as o,J as n,v as u,m as h,x as m,t as d,z as f,i as c}from"./index-ChMB-C2t.js";const b=t({name:"uniFormsItem",options:{virtualHost:!0},provide(){return{uniFormItem:this}},inject:{form:{from:"uniForm",default:null}},props:{rules:{type:Array,default:()=>null},name:{type:[String,Array],default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:""},errorMessage:{type:[String,Boolean],default:""},leftIcon:String,iconColor:{type:String,default:"#606266"}},data:()=>({errMsg:"",userRules:null,localLabelAlign:"left",localLabelWidth:"65px",localLabelPos:"left",border:!1,isFirstBorder:!1}),computed:{msg(){return this.errorMessage||this.errMsg}},watch:{"form.formRules"(t){this.init()},"form.labelWidth"(t){this.localLabelWidth=this._labelWidthUnit(t)},"form.labelPosition"(t){this.localLabelPos=this._labelPosition()},"form.labelAlign"(t){}},created(){this.init(!0),this.name&&this.form&&this.$watch((()=>this.form._getDataValue(this.name,this.form.localData)),((t,e)=>{if(!this.form._isEqual(t,e)){const e=this.itemSetValue(t);this.onFieldChange(e,!1)}}),{immediate:!1})},unmounted(){this.__isUnmounted=!0,this.unInit()},methods:{setRules(t=null){this.userRules=t,this.init(!1)},setValue(){},async onFieldChange(t,s=!0){const{formData:r,localData:l,errShowType:a,validateCheck:o,validateTrigger:n,_isRequiredField:u,_realName:h}=this.form,m=h(this.name);t||(t=this.form.formData[m]);const d=this.itemRules.rules&&this.itemRules.rules.length;if(!this.validator||!d||0===d)return;const f=u(this.itemRules.rules||[]);let c=null;return"bind"===n||s?(c=await this.validator.validateUpdate({[m]:t},r),f||void 0!==t&&""!==t||(c=null),c&&c.errorMessage?("undertext"===a&&(this.errMsg=c?c.errorMessage:""),"toast"===a&&e({title:c.errorMessage||"校验错误",icon:"none"}),"modal"===a&&i({title:"提示",content:c.errorMessage||"校验错误"})):this.errMsg="",o(c||null)):this.errMsg="",c||null},init(t=!1){const{validator:e,formRules:i,childrens:s,formData:r,localData:l,_realName:a,labelWidth:o,_getDataValue:n,_setDataValue:u}=this.form||{};if(this.localLabelAlign=this._justifyContent(),this.localLabelWidth=this._labelWidthUnit(o),this.localLabelPos=this._labelPosition(),this.form&&t&&s.push(this),!e||!i)return;this.form.isFirstBorder||(this.form.isFirstBorder=!0,this.isFirstBorder=!0),this.group&&(this.group.isFirstBorder||(this.group.isFirstBorder=!0,this.isFirstBorder=!0)),this.border=this.form.border;const h=a(this.name),m=this.userRules||this.rules;"object"==typeof i&&m&&(i[h]={rules:m},e.updateSchema(i));const d=i[h]||{};this.itemRules=d,this.validator=e,this.itemSetValue(n(this.name,l))},unInit(){if(this.form){const{childrens:t,formData:e,_realName:i}=this.form;t.forEach(((t,s)=>{t===this&&(this.form.childrens.splice(s,1),delete e[i(t.name)])}))}},itemSetValue(t){const e=this.form._realName(this.name),i=this.itemRules.rules||[],s=this.form._getValue(e,t,i);return this.form._setDataValue(e,this.form.formData,s),s},clearValidate(){this.errMsg=""},_isRequired(){return this.required},_justifyContent(){if(this.form){const{labelAlign:t}=this.form;let e=this.labelAlign?this.labelAlign:t;if("left"===e)return"flex-start";if("center"===e)return"center";if("right"===e)return"flex-end"}return"flex-start"},_labelWidthUnit(t){return this.num2px(this.labelWidth?this.labelWidth:t||(this.label?65:"auto"))},_labelPosition(){return this.form&&this.form.labelPosition||"left"},isTrigger:(t,e,i)=>"submit"!==t&&t?"bind":void 0===t?"bind"!==e?e?"submit":""===i?"bind":"submit":"bind":"submit",num2px:t=>"number"==typeof t?`${t}px`:t}},[["render",function(t,e,i,b,g,_){const p=f,y=c;return s(),r(y,{class:n(["uni-forms-item",["is-direction-"+g.localLabelPos,g.border?"uni-forms-item--border":"",g.border&&g.isFirstBorder?"is-first-border":""]])},{default:l((()=>[a(t.$slots,"label",{},(()=>[o(y,{class:n(["uni-forms-item__label",{"no-label":!i.label&&!i.required}]),style:u({width:g.localLabelWidth,justifyContent:g.localLabelAlign})},{default:l((()=>[i.required?(s(),r(p,{key:0,class:"is-required"},{default:l((()=>[h("*")])),_:1})):m("",!0),o(p,null,{default:l((()=>[h(d(i.label),1)])),_:1})])),_:1},8,["class","style"])]),!0),o(y,{class:"uni-forms-item__content"},{default:l((()=>[a(t.$slots,"default",{},void 0,!0),o(y,{class:n(["uni-forms-item__error",{"msg--active":_.msg}])},{default:l((()=>[o(p,null,{default:l((()=>[h(d(_.msg),1)])),_:1})])),_:1},8,["class"])])),_:3})])),_:3},8,["class"])}],["__scopeId","data-v-540b8126"]]);export{b as _};
