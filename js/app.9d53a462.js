(function(e){function t(t){for(var n,c,r=t[0],a=t[1],o=t[2],d=0,h=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&h.push(s[c][0]),s[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);u&&u(t);while(h.length)h.shift()();return l.push.apply(l,o||[]),i()}function i(){for(var e,t=0;t<l.length;t++){for(var i=l[t],n=!0,r=1;r<i.length;r++){var a=i[r];0!==s[a]&&(n=!1)}n&&(l.splice(t--,1),e=c(c.s=i[0]))}return e}var n={},s={app:0},l=[];function c(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=e,c.c=n,c.d=function(e,t,i){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(i,n,function(t){return e[t]}.bind(null,n));return i},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/home-screener/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var u=a;l.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0c73":function(e,t,i){"use strict";var n=i("63e4"),s=i.n(n);s.a},"0d46":function(e,t,i){"use strict";var n=i("69aa"),s=i.n(n);s.a},"110f":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-main",{attrs:{transition:"fade-transition"}},[i("div",{staticClass:"background d-flex justify-start align-center flex-column"},[i("quickLinks"),i("clock",{staticClass:"my-16"}),i("searchBar")],1)])],1)},l=[],c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-sheet",{staticClass:"quick-links",attrs:{color:"accent"}},[i("v-slide-group",{ref:"chipGroup",staticClass:"px-2 py-1",attrs:{"show-arrows":"always"}},e._l(e.quicklinks,(function(t){return i("v-slide-item",{key:t.id},[i("v-chip",{staticClass:"mx-1 my-1 body-2",attrs:{href:0==e.editing?t.link:void 0,close:1==e.editing,color:null!=e.selectedLink&&e.selectedLink.id==t.id&&1==e.editing?"primary":"#cecece","close-icon":"mdi-close",outlined:"",link:""},on:{"click:close":function(i){return e.deleteLink(t.id)},click:function(i){return e.selectLink(t.id)}}},[i("v-icon",{attrs:{left:"",small:""}},[e._v(e._s(t.icon))]),e._v(" "+e._s(t.title)+" ")],1)],1)})),1)],1),i("div",{staticClass:"toolbar"},[i("v-btn",{staticClass:"ma-1",attrs:{outlined:"","x-small":"",fab:"",color:"#FFFFFF",disabled:1==e.editing},on:{click:function(t){return e.toggleEditing()}}},[i("v-icon",[e._v("mdi-pencil")])],1),i("v-btn",{staticClass:"ma-1",attrs:{outlined:"","x-small":"",fab:"",color:"#FFFFFF",disabled:1==e.creating},on:{click:function(t){return e.toggleCreating()}}},[i("v-icon",[e._v("mdi-plus")])],1)],1),i("v-expand-transition",[1==e.editing||1==e.creating?i("v-sheet",{staticClass:"new-link-sheet",attrs:{color:"accent"}},[i("div",{staticClass:"d-flex flex-column justify-center align-start mt-12 mb-5 mx-5"},[i("v-text-field",{staticClass:"form",attrs:{color:"primary",label:"Title",required:""},model:{value:e.selectedLink.title,callback:function(t){e.$set(e.selectedLink,"title",t)},expression:"selectedLink.title"}}),i("v-text-field",{staticClass:"form",attrs:{color:"primary",label:"Link",required:""},model:{value:e.selectedLink.link,callback:function(t){e.$set(e.selectedLink,"link",t)},expression:"selectedLink.link"}}),i("v-text-field",{staticClass:"form",attrs:{color:"primary",label:"Icon"},model:{value:e.selectedLink.icon,callback:function(t){e.$set(e.selectedLink,"icon",t)},expression:"selectedLink.icon"}}),i("div",{staticClass:"form d-flex justify-space-between"},[i("v-btn",{attrs:{tile:"",outlined:"",color:"#FFFFFF"},on:{click:function(t){return e.resetForm()}}},[e._v(" Cancel ")]),1==e.creating?i("v-btn",{attrs:{tile:"",outlined:"",color:"primary",disabled:!e.formIsValid},on:{click:function(t){return e.addLink()}}},[e._v(" Create ")]):e._e(),1==e.editing?i("div",{staticClass:"d-flex align-center"},[i("v-btn",{staticClass:"mx-1",attrs:{tile:"",outlined:"",icon:"",color:"primary",disabled:!e.selecting||0==e.selectedLink.id},on:{click:function(t){return e.shiftLinkLeft()}}},[i("v-icon",[e._v("mdi-arrow-left")])],1),i("v-btn",{staticClass:"mx-1",attrs:{tile:"",outlined:"",icon:"",color:"primary",disabled:!e.selecting||e.selectedLink.id==e.quicklinks.length-1},on:{click:function(t){return e.shiftLinkRight()}}},[i("v-icon",[e._v("mdi-arrow-right")])],1),i("v-btn",{attrs:{outlined:"",tile:"",color:"primary",disabled:!e.formIsValid},on:{click:function(t){return e.editLink()}}},[e._v(" Save ")])],1):e._e()],1)],1)]):e._e()],1)],1)},r=[],a=(i("a434"),i("9911"),{data:function(){return{editing:!1,creating:!1,selecting:!1,quicklinks:[],selectedLink:null,defaultLinks:[{id:0,title:"Youtube",link:"https://www.youtube.com/",icon:"mdi-youtube"},{id:1,title:"Gmail",link:"https://mail.google.com/",icon:"mdi-gmail"},{id:2,title:"Github",link:"https://github.com/sYntaxHub",icon:"mdi-github"}]}},created:function(){if(localStorage.getItem("links"))try{this.quicklinks=JSON.parse(localStorage.getItem("links"))}catch(e){localStorage.removeItem("links"),this.quicklinks=this.defaultLinks}else this.quicklinks=this.defaultLinks;this.selectedLink=this.defaultSelectedLink},beforeDestroy:function(){this.localStoreLinks(this.quicklinks)},watch:{quicklinks:function(e){this.localStoreLinks(e)}},methods:{deleteLink:function(e){this.quicklinks.splice(e,1);for(var t=e;t<this.quicklinks.length;++t)this.quicklinks[t].id--;e==this.selectedLink.id&&(this.selecting=!1,this.resetSelectedLink())},addLink:function(){""==this.selectedLink.icon&&(this.selectedLink.icon="mdi-link-variant");var e={id:this.quicklinks.length,title:this.selectedLink.title,link:this.selectedLink.link,icon:this.selectedLink.icon};this.quicklinks.push(e),this.resetForm()},editLink:function(){""==this.selectedLink.icon&&(this.selectedLink.icon="mdi-link-variant"),this.quicklinks[this.selectedLink.id]=this.selectedLink,this.localStoreLinks(this.quicklinks),this.resetForm()},selectLink:function(e){this.selectedLink={id:this.quicklinks[e].id,title:this.quicklinks[e].title,link:this.quicklinks[e].link,icon:this.quicklinks[e].icon},this.selecting=!0},shiftLinkRight:function(){if(1==this.selecting){var e=this.quicklinks[this.selectedLink.id];this.quicklinks[this.selectedLink.id]=this.quicklinks[this.selectedLink.id+1],this.quicklinks[this.selectedLink.id+1]=e,this.quicklinks[this.selectedLink.id].id--,this.quicklinks[this.selectedLink.id+1].id++,this.selectLink(this.selectedLink.id+1),this.localStoreLinks(this.quicklinks)}},shiftLinkLeft:function(){if(1==this.selecting){var e=this.quicklinks[this.selectedLink.id];this.quicklinks[this.selectedLink.id]=this.quicklinks[this.selectedLink.id-1],this.quicklinks[this.selectedLink.id-1]=e,this.quicklinks[this.selectedLink.id].id++,this.quicklinks[this.selectedLink.id-1].id--,this.selectLink(this.selectedLink.id-1),this.localStoreLinks(this.quicklinks)}},resetForm:function(){this.resetSelectedLink(),this.editing=!1,this.creating=!1,this.selecting=!1,this.$refs.chipGroup.scrollOffset=0},toggleEditing:function(){this.resetSelectedLink(),console.log(this.selectedLink),this.editing=!this.editing,this.$refs.chipGroup.scrollOffset=0,this.creating=!1},toggleCreating:function(){this.resetSelectedLink(),this.creating=!this.creating,this.$refs.chipGroup.scrollOffset=0,this.editing=!1},localStoreLinks:function(e){localStorage.setItem("links",JSON.stringify(e))},resetSelectedLink:function(){this.selectedLink={id:-1,title:"",link:"",icon:""}}},computed:{formIsValid:function(){return this.selectedLink.title&&this.selectedLink.link}}}),o=a,u=(i("d9fe"),i("2877")),d=i("6544"),h=i.n(d),k=i("8336"),f=i("cc20"),p=i("0789"),m=i("132d"),g=i("8dd9"),v=i("7efd"),b=i("9dbe"),L=i("8654"),y=Object(u["a"])(o,c,r,!1,null,"d442e1b0",null),x=y.exports;h()(y,{VBtn:k["a"],VChip:f["a"],VExpandTransition:p["a"],VIcon:m["a"],VSheet:g["a"],VSlideGroup:v["a"],VSlideItem:b["a"],VTextField:L["a"]});var q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",[i("div",{staticClass:"clock unselectable"},[e._v(e._s(this.hour)+" : "+e._s(this.minute))])]),i("div",{staticClass:"d-flex align-start justify-center mb-8"},[i("div",{staticClass:"date unselectable"},[e._v(" "+e._s(this.weekday)+" "+e._s(this.day)+" "+e._s(this.month)+" "+e._s(this.year)+" ")])])])},_=[],w=(i("d3b7"),i("25f0"),{data:function(){return{minute:"",hour:"",day:"",month:"",year:"",weekday:""}},created:function(){this.setCurrentTime(),setInterval(this.setCurrentTime,1e3)},methods:{setCurrentTime:function(){var e=new Date;this.hour=(e.getHours()<10?"0":"")+e.getHours().toString(),this.minute=(e.getMinutes()<10?"0":"")+e.getMinutes().toString();var t=["january","february","march","april","may","june","july","august","september","october","november","december"];this.month=t[e.getMonth()],this.year=e.getFullYear(),this.day=e.getDate();var i=["MON","TUE","WED","THU","FRI","SAT","SUN"];this.weekday=i[e.getDay()]}}}),S=w,C=(i("0d46"),Object(u["a"])(S,q,_,!1,null,"55dbe806",null)),V=C.exports,F=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-text-field",{staticClass:"search-bar",attrs:{type:"text",solo:"",label:"Search...",rounded:"",clearable:"","background-color":"secondary","prepend-inner-icon":"mdi-google",autofocus:"",filled:"","hide-details":"auto"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search()}},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}})],1)},O=[],j=(i("ac1f"),i("5319"),{data:function(){return{searchValue:""}},computed:{webSearchValue:function(){return this.searchValue.replace(" ","+")},requestSearchValue:function(){return this.searchValue.replace(" ","_")},searching:function(){return this.searchValue.length>0}},methods:{search:function(){if(console.log(this.searchValue),this.searching){var e="https://www.google.ro/search?authuser=0&sxsrf=ALeKk00dRF1sQx40V4ouhuvVpt3SQDwzeQ%3A1601834766468&ei=Dg96X7iMHKGalwT5iK6ABQ&q=";window.location.href=e+this.webSearchValue,this.suggestValues=null}}}}),T=j,I=(i("d8ba"),Object(u["a"])(T,F,O,!1,null,"354e8334",null)),$=I.exports;h()(I,{VTextField:L["a"]});var E={name:"App",components:{quickLinks:x,clock:V,searchBar:$}},M=E,G=(i("0c73"),i("7496")),D=i("f6c4"),P=Object(u["a"])(M,s,l,!1,null,"5b4b7142",null),A=P.exports;h()(P,{VApp:G["a"],VMain:D["a"]});var H=i("f309");n["a"].use(H["a"]);var B=new H["a"]({theme:{themes:{dark:{primary:"#41796b",secondary:"#2b2b2b",accent:"#3b3b3b",error:"#b71c1c"}},dark:!0}}),J=B;n["a"].config.productionTip=!1,new n["a"]({vuetify:J,render:function(e){return e(A)}}).$mount("#app")},"63e4":function(e,t,i){},"69aa":function(e,t,i){},d25a:function(e,t,i){},d8ba:function(e,t,i){"use strict";var n=i("110f"),s=i.n(n);s.a},d9fe:function(e,t,i){"use strict";var n=i("d25a"),s=i.n(n);s.a}});
//# sourceMappingURL=app.9d53a462.js.map