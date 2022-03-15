(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fhir-primary","fhir-name"],{1131:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ihris-element",{attrs:{edit:t.edit,loading:t.loading},scopedSlots:t._u([{key:"form",fn:function(){return[r("v-select",{attrs:{loading:t.loading,label:t.display,items:t.items,outlined:"","hide-details":"auto","error-messages":t.errors,"item-text":"display","item-value":"code",disabled:t.disabled,rules:t.rules,dense:""},on:{change:function(e){t.errors=[]}},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(t._s(t.display)+" "),t.required?r("span",{staticClass:"red--text font-weight-bold"},[t._v("*")]):t._e()]},proxy:!0}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})]},proxy:!0},{key:"header",fn:function(){return[t._v(" "+t._s(t.display)+" ")]},proxy:!0},{key:"value",fn:function(){return[t._v(" "+t._s(t.displayValue)+" ")]},proxy:!0}])})},n=[],s=(r("7db0"),r("b287")),a={name:"fhir-code",props:["field","min","max","base-min","base-max","label","binding","slotProps","path","edit","sliceName","readOnlyIfSet","constraints"],components:{IhrisElement:s["a"]},data:function(){return{value:"",loading:!0,errors:[],items:[],source:{path:"",data:{},binding:this.binding},disabled:!1,lockWatch:!1}},created:function(){this.setupData()},watch:{slotProps:{handler:function(){this.lockWatch||this.setupData()},deep:!0}},methods:{setupData:function(){var t=this;if(this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data,this.value=this.source.data,this.lockWatch=!0;else{var e=this.$fhirutils.pathFieldExpression(this.field);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,e),1==this.source.data.length&&(this.value=this.source.data[0],this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&!!this.value}var r=this.binding||this.slotProps.source.binding;this.$fhirutils.expand(r).then((function(e){t.items=e,t.loading=!1})).catch((function(e){console.log(e),t.errors.push(e.message),t.loading=!1}))}},computed:{index:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.index:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},displayValue:function(){var t=this,e=this.items.find((function(e){return e.code===t.value}));return e?e.display:""},required:function(){return(this.index||0)<this.min},rules:function(){var t=this;return this.required?[function(e){return!!e||t.display+" is required"}]:[]}}},o=a,l=r("2877"),c=r("6544"),u=r.n(c),h=r("b974"),d=Object(l["a"])(o,i,n,!1,null,null,null);e["default"]=d.exports;u()(d,{VSelect:h["a"]})},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("d3b7"),r("e6cf");function i(t,e,r,i,n,s,a){try{var o=t[s](a),l=o.value}catch(c){return void r(c)}o.done?e(l):Promise.resolve(l).then(i,n)}function n(t){return function(){var e=this,r=arguments;return new Promise((function(n,s){var a=t.apply(e,r);function o(t){i(a,n,s,o,l,"next",t)}function l(t){i(a,n,s,o,l,"throw",t)}o(void 0)}))}}},"309c":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._t("default",null,{source:t.source})],2)},n=[],s={name:"fhir-codeable-concept",props:["field","slotProps","sliceName","min","max","base-min","base-max","label","path","binding","edit","constraints"],data:function(){return{source:{path:"",data:{},binding:this.binding},errors:[]}},created:function(){this.setupData()},watch:{slotProps:{handler:function(){this.setupData()},deep:!0}},methods:{setupData:function(){if(this.slotProps&&this.slotProps.source)if(this.source={path:this.slotProps.source.path+"."+this.field,data:{},binding:this.binding},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data;else{var t=this.$fhirutils.pathFieldExpression(this.field);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,t)}}},computed:{display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label}}},a=s,o=r("2877"),l=Object(o["a"])(a,i,n,!1,null,null,null);e["default"]=l.exports},"39e1":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.edit?t._e():r("v-container",{staticClass:"my-3"},[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.columns,items:t.items,"item-key":"id","items-per-page":5,loading:t.loading,dense:""},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:"",color:"white"}},[r("v-toolbar-title",[t._v(" "+t._s(t.title)+" ")]),r("v-spacer"),t._l(t.topActions,(function(e){return r("v-btn",{key:e.text,attrs:{to:t.setupLink(e.link,{}),color:e.class,small:""}},[t._v(" "+t._s(e.text)+" ")])}))],2)]},proxy:!0},{key:"item._action",fn:function(e){var i=e.item;return t._l(i.actions,(function(e){return r("v-btn",{key:e.text,attrs:{to:t.setupLink(e.link,i),color:e.class,small:"",rounded:""}},[t._v(" "+t._s(e.text)+" ")])}))}}],null,!1,3813068814)})],1)},n=[],s=(r("a623"),r("4de4"),r("7db0"),r("c975"),r("a15b"),r("d81d"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("1276"),r("9911"),r("ddb0"),r("b85c")),a=(r("96cf"),r("1da1")),o=function(t){return!!t&&t.constructor===Object},l={name:"ihris-secondary",props:["title","field","profile","slotProps","link-id","link-field","search-field","edit","columns","actions"],data:function(){return{source:{data:{},path:this.field},empty:!0,items:[],loading:!0,topActions:[]}},mounted:function(){this.setupData()},watch:{},methods:{setupData:function(){var t;if(2===this.searchField.split(":").length){var e=this.searchField.split(":")[0];t="fhir/"+e+"?_id="+this.linkId+"&_include="+this.searchField}else{t="/fhir/"+this.field;var r=[];this.profile&&r.push("_profile="+this.profile),this.searchField?r.push(this.searchField+"="+this.linkId):r.push(this.linkField.substring(this.linkField.indexOf(".")+1)+"="+this.linkId),t+="?"+r.join("&")}this.items=[],this.loading=!0,this.addItems(t)},addItems:function(t){var e=this;fetch(t).then((function(r){200===r.status?r.json().then(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(r){var i,n,a,o,l,c,u,h,d,f,p,v,m,y,b,g,x;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(r.entry&&r.entry.length>0)){t.next=52;break}i=Object(s["a"])(r.entry),t.prev=2,i.s();case 4:if((n=i.n()).done){t.next=42;break}if(a=n.value,2!==e.searchField.split(":").length||a.resource.resourceType!==e.searchField.split(":")[0]){t.next=8;break}return t.abrupt("continue",40);case 8:o={id:a.resource.id},l=Object(s["a"])(e.columns),t.prev=10,l.s();case 12:if((c=l.n()).done){t.next=28;break}if(u=c.value,"_action"!==u.value){t.next=16;break}return t.abrupt("continue",26);case 16:return t.prev=16,h=e.$fhirpath.evaluate(a.resource,u.value),t.next=20,e.processContent(h);case 20:o[u.value]=t.sent,t.next=26;break;case 23:t.prev=23,t.t0=t["catch"](16),console.log(t.t0);case 26:t.next=12;break;case 28:t.next=33;break;case 30:t.prev=30,t.t1=t["catch"](10),l.e(t.t1);case 33:return t.prev=33,l.f(),t.finish(33);case 36:o.actions||(o.actions=[]),d=Object(s["a"])(e.actions);try{for(d.s();!(f=d.n()).done;)p=f.value,p.row?p.condition?(v=e.$fhirpath.evaluate(a.resource,p.condition),v.every((function(t){return t}))&&o.actions.push(p)):o.actions.push(p):p.condition?(m=e.$fhirpath.evaluate(a.resource,p.condition),p.hasOwnProperty("meets")?p.meets=p.meets&&m.every((function(t){return t})):p.meets=m.every((function(t){return t}))):p.meets=!0}catch(k){d.e(k)}finally{d.f()}e.items.push(o);case 40:t.next=4;break;case 42:t.next=47;break;case 44:t.prev=44,t.t2=t["catch"](2),i.e(t.t2);case 47:return t.prev=47,i.f(),t.finish(47);case 50:t.next=54;break;case 52:y=Object(s["a"])(e.actions);try{for(y.s();!(b=y.n()).done;)g=b.value,g.row||(g.meets=g.emptyDisplay)}catch(k){y.e(k)}finally{y.f()}case 54:e.topActions=e.actions.filter((function(t){return!t.row&&t.meets})),r.link?(x=r.link.find((function(t){return"next"===t.relation})),x?e.addItems(x.url):e.loading=!1):e.loading=!1;case 56:case"end":return t.stop()}}),t,null,[[2,44,47,50],[10,30,33,36],[16,23]])})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,console.log(t)})):(e.loading=!1,console.log("Unable to fetch",t,r.status))})).catch((function(t){e.loading=!1,console.log(t)}))},processContent:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!Array.isArray(e)){t.next=7;break}return t.next=3,Promise.all(e.map(this.processContent));case 3:return r=t.sent,t.abrupt("return",r.join(" "));case 7:if(!o(e)){t.next=32;break}if(!e.code||!e.system){t.next=14;break}return t.next=11,this.$fhirutils.codeLookup(e.system,e.code);case 11:return t.abrupt("return",t.sent);case 14:if(!e.display){t.next=18;break}return t.abrupt("return",e.display);case 18:if(!e.code){t.next=22;break}return t.abrupt("return",e.code);case 22:if(!e.reference){t.next=28;break}return t.next=25,this.$fhirutils.resourceLookup(e.reference);case 25:return t.abrupt("return",t.sent);case 28:return console.log("Unable to process content:",e),t.abrupt("return","Unknown");case 30:t.next=33;break;case 32:return t.abrupt("return",e);case 33:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),setupLink:function(t,e){return t.replace("ITEMID",e.id).replace("FHIRID",this.linkId)}}},c=l,u=r("2877"),h=r("6544"),d=r.n(h),f=r("8336"),p=r("a523"),v=r("8fea"),m=r("2fa4"),y=r("71d9"),b=r("2a7f"),g=Object(u["a"])(c,i,n,!1,null,null,null);e["default"]=g.exports;d()(g,{VBtn:f["a"],VContainer:p["a"],VDataTable:v["a"],VSpacer:m["a"],VToolbar:y["a"],VToolbarTitle:b["a"]})},"6b10":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._t("default",null,{source:t.source})],2)},n=[],s=(r("ac1f"),r("5319"),{name:"fhir-extension",props:["field","sliceName","min","max","base-min","base-max","profile","slotProps","path","edit","constraints"],data:function(){return{source:{path:"",data:[]},errors:[]}},created:function(){this.setupData()},watch:{slotProps:{handler:function(){this.setupData()},deep:!0}},methods:{setupData:function(){if(this.slotProps&&this.slotProps.source)if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data;else{var t;t=this.profile?this.profile:this.sliceName;var e=this.field.replace(/([^:]+):(.+)/,"$1.where(url='"+t+"')");this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,e)}}}}),a=s,o=r("2877"),l=Object(o["a"])(a,i,n,!1,null,null,null);e["default"]=l.exports},7372:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"my-3"},[r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[t._t("default",null,{source:t.source}),r("v-overlay",{attrs:{value:t.overlay}},[r("v-progress-circular",{attrs:{size:"50",color:"primary",indeterminate:""}})],1),r("v-navigation-drawer",{staticClass:"primary darken-1 white--text",staticStyle:{"z-index":"3"},attrs:{app:"",right:"",permanent:"",clipped:""}},[r("v-list",{staticClass:"white--text"},[r("v-list-item",[t.edit?r("v-btn",{staticClass:"secondary",attrs:{dark:""},on:{click:function(e){return t.$router.go(-1)}}},[r("v-icon",{attrs:{light:""}},[t._v("mdi-pencil-off")]),r("span",[t._v("Cancel")])],1):r("v-btn",{staticClass:"secondary",attrs:{dark:""},on:{click:function(e){return t.$emit("set-edit",!t.edit)}}},[r("v-icon",{attrs:{light:""}},[t._v("mdi-pencil")]),r("span",[t._v("Edit")])],1),r("v-spacer"),t.edit?[t.valid?r("v-btn",{staticClass:"success darken-1",attrs:{dark:"",disabled:!t.valid},on:{click:function(e){return t.processFHIR()}}},[r("v-icon",{attrs:{light:""}},[t._v("mdi-content-save")]),r("span",[t._v("Save")])],1):r("v-btn",{staticClass:"warning",attrs:{dark:""},on:{click:function(e){return t.$refs.form.validate()}}},[r("v-icon",{attrs:{light:""}},[t._v("mdi-content-save")]),r("span",[t._v("Save")])],1)]:t._e()],2),r("v-divider",{attrs:{color:"white"}}),!t.edit&&t.links&&t.links.length?t._l(t.links,(function(e,i){return r("v-list-item",{key:e.url},[r("v-btn",{key:e.url,staticClass:"primary",attrs:{text:!e.button,to:t.getLinkUrl(e)}},[e.icon?r("v-icon",{attrs:{light:""}},[t._v(t._s(e.icon))]):t._e(),t._v(" "+t._s(t.linktext[i])+" ")],1)],1)})):t._e(),t.sectionMenu?r("v-subheader",{staticClass:"white--text"},[r("h2",[t._v("Sections")])]):t._e(),t._l(t.sectionMenu,(function(e){return r("v-list-item",{key:e.name,class:"#section-"+e.name===t.path?"highlighted":"",attrs:{href:"#section-"+e.name}},[t.edit&&e.secondary?t._e():r("v-list-item-content",{staticClass:"white--text"},[r("v-list-item-title",{staticClass:"text-uppercase"},[r("h4",[t._v(t._s(e.title))])]),r("v-list-item-subtitle",{staticClass:"white--text"},[t._v(t._s(e.desc))])],1)],1)}))],2)],1)],2)],1)},n=[],s=(r("caad"),r("d81d"),r("fb6a"),r("b0c0"),r("b64b"),r("d3b7"),r("ac1f"),r("2532"),r("5319"),r("1276"),r("2ca0"),r("96cf"),r("1da1")),a=r("b85c"),o={name:"ihris-resource",props:["title","field","fhir-id","page","profile","section-menu","edit","links","constraints"],data:function(){return{fhir:{},orig:{},valid:!0,source:{data:{},path:""},path:"",loading:!1,overlay:!1,isEdit:!1,linktext:[],advancedValid:!0}},mounted:function(){this.isQuestionnaire?window.removeEventListener("scroll",this.handleScroll):window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},created:function(){var t=this;if(this.fhirId)this.loading=!0,fetch("/fhir/"+this.field+"/"+this.fhirId).then((function(e){e.json().then((function(e){t.orig=e,t.source={data:e,path:t.field},t.setLinkText(),t.loading=!1})).catch((function(e){console.log(t.field,t.fhirId,e)}))})).catch((function(e){console.log(t.field,t.fhirId,e)}));else if(this.$route.query){for(var e={resourceType:this.field},r=!1,i=0,n=Object.keys(this.$route.query);i<n.length;i++){var s=n[i];if(s.startsWith(this.field+".")){r=!0;var o,l=s.substring(this.field.length+1).split("."),c=l.pop(),u=e,h=Object(a["a"])(l);try{for(h.s();!(o=h.n()).done;){var d=o.value;if(d.includes("["))try{var f=d.split("["),p=f[0],v=f[1].slice(0,-1);if(u.hasOwnProperty(p)||(u[p]=[]),v){var m={};u[p][parseInt(v)]=m,u=m}else{var y={};u[p].push(y),u=y}}catch(k){console.log("Unable to process",s);continue}else u.hasOwnProperty(d)||(u[d]={},u=u[d])}}catch(k){h.e(k)}finally{h.f()}if(c.includes("["))try{var b=c.split("["),g=b[0],x=b[1].slice(0,-1);u.hasOwnProperty(g)||(u[g]=[]),x?u[g][parseInt(x)]=this.$route.query[s]:u[g].push(this.$route.query[s])}catch(k){console.log("Unable to process",s);continue}else u[c]=this.$route.query[s]}}r&&(this.source={data:e,path:this.field})}},computed:{hasFhirId:function(){return""!=this.fhirId&&!!this.fhirId}},methods:{handleScroll:function(){var t=this;this.hasScrolled=window.top.scrollY>=100,this.sectionMenu.map((function(e){var r=document.getElementById("section-".concat(e.name)),i=r.offsetTop;pageYOffset>=i&&(t.path="#section-".concat(e.name))}))},getLinkField:function(t){var e=this.$fhirpath.evaluate(this.source.data,t);return!!e&&e[0]},getLinkUrl:function(t){var e;if(t.field&&(e=this.getLinkField(t.field)),e){if(e.includes("/")){var r=e.split("/");e=r[1]}return t.url.replace("FIELD",e)}return t.url},setLinkText:function(){var t=this,e=function(e){var r=t.links[e];if(r.text)t.linktext[e]=r.text;else if(r.field){var i=t.getLinkField(r.field);i&&t.$fhirutils.lookup(i).then((function(r){t.$set(t.linktext,e,r)}))}};for(var r in this.links)e(r)},processFHIR:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r,i,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.$refs.form.validate(),this.valid){t.next=3;break}return t.abrupt("return");case 3:return this.advancedValid=!0,this.overlay=!0,this.loading=!0,e=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r,i,s){var o,l,c,u,h,d,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o=Object(a["a"])(s),t.prev=1,o.s();case 3:if((l=o.n()).done){t.next=36;break}if(c=l.value,u=r,h=i,c.field&&!c.fieldType&&(d=void 0,c.sliceName?c.field.startsWith("value[x]")?(d=c.field.substring(9),u+="."+d):(d=c.field.replace(":"+c.sliceName,""),u+="."+d):(d=c.field,u+="."+d),"1"!==c.max||"1"!==c.baseMax?i.hasOwnProperty(d)||(h[d]=[]):h[d]={},c.hasOwnProperty("value")?(Array.isArray(h[d])?h[d].push(c.value):h[d]=c.value,h=h[d]):Array.isArray(h[d])?(f={},c.profile?f.url=c.profile:"extension"===d&&c.sliceName&&(f.url=c.sliceName),h[d].push(f),h=f):h=h[d]),!c.$children){t.next=18;break}return t.prev=9,t.next=12,e(u,h,c.$children);case 12:t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](9),n.advancedValid=!1,console.log(t.t0);case 18:if(!c.constraints){t.next=34;break}if(c.errors=[],t.prev=20,t.t1=n.advancedValid,!t.t1){t.next=26;break}return t.next=25,n.$fhirutils.checkConstraints(c.constraints,n.constraints,h,c.errors,n.fhirId);case 25:t.t1=t.sent;case 26:n.advancedValid=t.t1,t.next=34;break;case 29:t.prev=29,t.t2=t["catch"](20),n.advancedValid=!1,c.errors.push("An unknown error occurred."),console.log(t.t2);case 34:t.next=3;break;case 36:t.next=41;break;case 38:t.prev=38,t.t3=t["catch"](1),o.e(t.t3);case 41:return t.prev=41,o.f(),t.finish(41);case 44:case"end":return t.stop()}}),t,null,[[1,38,41,44],[9,14],[20,29]])})));return function(e,r,i){return t.apply(this,arguments)}}(),this.fhir={resourceType:this.field,meta:{profile:[this.profile]}},t.prev=8,t.next=11,e(this.field,this.fhir,this.$children);case 11:t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](8),this.advancedValid=!1,console.log(t.t0);case 17:if(this.advancedValid){t.next=22;break}return this.overlay=!1,this.loading=!1,this.$store.commit("setMessage",{type:"error",text:"There were errors on the form."}),t.abrupt("return");case 22:console.log("FINISHED PROCESS AND CHECK."),r="/fhir/"+this.field,i={method:"POST",headers:{"Content-Type":"application/fhir+json"},redirect:"manual"},this.fhirId&&(this.fhir.id=this.fhirId,r+="/"+this.fhirId,i.method="PUT"),i.body=JSON.stringify(this.fhir),fetch(r,i).then((function(t){201!==t.status&&200!==t.status||t.json().then((function(t){n.overlay=!1,n.loading=!1,n.fhirId?(n.$store.commit("setMessage",{type:"success",text:"Update successful."}),setTimeout((function(){return n.$router.go(0)}),1e3)):n.$router.push({name:"resource_view",params:{page:n.page,id:t.id}})}))}));case 28:case"end":return t.stop()}}),t,this,[[8,13]])})));function e(){return t.apply(this,arguments)}return e}()}},l=o,c=(r("7f06"),r("2877")),u=r("6544"),h=r.n(u),d=r("8336"),f=r("a523"),p=r("ce7e"),v=r("4bd4"),m=r("132d"),y=r("8860"),b=r("da13"),g=r("5d23"),x=r("f774"),k=r("a797"),_=r("490a"),w=r("2fa4"),P=r("e0c7"),C=Object(c["a"])(l,i,n,!1,null,null,null);e["default"]=C.exports;h()(C,{VBtn:d["a"],VContainer:f["a"],VDivider:p["a"],VForm:v["a"],VIcon:m["a"],VList:y["a"],VListItem:b["a"],VListItemContent:g["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VNavigationDrawer:x["a"],VOverlay:k["a"],VProgressCircular:_["a"],VSpacer:w["a"],VSubheader:P["a"]})},"7f06":function(t,e,r){"use strict";var i=r("9090"),n=r.n(i);n.a},"89c1":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ihris-complex-card",{attrs:{complexField:t.field,slotProps:t.slotProps,label:t.label,errors:t.errors},scopedSlots:t._u([{key:"default",fn:function(e){return[t._t("default",null,{source:e.source})]}}],null,!0)})},n=[],s=r("fa57"),a={name:"fhir-human-name",props:["field","slotProps","sliceName","min","max","base-min","base-max","label","path","edit","constraints"],data:function(){return{errors:[]}},components:{IhrisComplexCard:s["a"]}},o=a,l=r("2877"),c=Object(l["a"])(o,i,n,!1,null,null,null);e["default"]=c.exports},9090:function(t,e,r){},"96cf":function(t,e,r){var i=function(t){"use strict";var e,r=Object.prototype,i=r.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function l(t,e,r,i){var n=e&&e.prototype instanceof v?e:v,s=Object.create(n.prototype),a=new E(i||[]);return s._invoke=P(t,r,a),s}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(i){return{type:"throw",arg:i}}}t.wrap=l;var u="suspendedStart",h="suspendedYield",d="executing",f="completed",p={};function v(){}function m(){}function y(){}var b={};b[s]=function(){return this};var g=Object.getPrototypeOf,x=g&&g(g(O([])));x&&x!==r&&i.call(x,s)&&(b=x);var k=y.prototype=v.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function w(t,e){function r(n,s,a,o){var l=c(t[n],t,s);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"===typeof h&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,o)}),(function(t){r("throw",t,a,o)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,o)}))}o(l.arg)}var n;function s(t,i){function s(){return new e((function(e,n){r(t,i,e,n)}))}return n=n?n.then(s,s):s()}this._invoke=s}function P(t,e,r){var i=u;return function(n,s){if(i===d)throw new Error("Generator is already running");if(i===f){if("throw"===n)throw s;return I()}r.method=n,r.arg=s;while(1){var a=r.delegate;if(a){var o=C(a,r);if(o){if(o===p)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===u)throw i=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=d;var l=c(t,e,r);if("normal"===l.type){if(i=r.done?f:h,l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(i=f,r.method="throw",r.arg=l.arg)}}}function C(t,r){var i=t.iterator[r.method];if(i===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=c(i,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,p;var s=n.arg;return s?s.done?(r[t.resultName]=s.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):s:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function O(t){if(t){var r=t[s];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function r(){while(++n<t.length)if(i.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:I}}function I(){return{value:e,done:!0}}return m.prototype=k.constructor=y,y.constructor=m,y[o]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,o in t||(t[o]="GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},_(w.prototype),w.prototype[a]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,i,n,s){void 0===s&&(s=Promise);var a=new w(l(e,r,i,n),s);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(k),k[o]="Generator",k[s]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var i=e.pop();if(i in t)return r.value=i,r.done=!1,r}return r.done=!0,r}},t.values=O,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(i,n){return o.type="throw",o.arg=t,r.next=i,n&&(r.method="next",r.arg=e),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var a=this.tryEntries[s],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var a=s?s.completion:{};return a.type=t,a.arg=e,s?(this.method="next",this.next=s.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var i=r.completion;if("throw"===i.type){var n=i.arg;L(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,i){return this.delegate={iterator:O(t),resultName:r,nextLoc:i},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=i}catch(n){Function("r","regeneratorRuntime = r")(i)}},b287:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.edit?r("v-container",[t._t("form")],2):r("div",[r("v-row",{attrs:{dense:""}},[r("v-col",{staticClass:"font-weight-bold",attrs:{cols:t.$store.state.cols.header}},[t._t("header")],2),t.loading?r("v-col",{attrs:{cols:t.$store.state.cols.content}},[r("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}})],1):r("v-col",{attrs:{cols:t.$store.state.cols.content}},[t._t("value")],2)],1),r("v-divider")],1)],1)},n=[],s={name:"ihris-element",props:["edit","loading"]},a=s,o=r("2877"),l=r("6544"),c=r.n(l),u=r("62ad"),h=r("a523"),d=r("ce7e"),f=r("8e36"),p=r("0fd9"),v=Object(o["a"])(a,i,n,!1,null,null,null);e["a"]=v.exports;c()(v,{VCol:u["a"],VContainer:h["a"],VDivider:d["a"],VProgressLinear:f["a"],VRow:p["a"]})},c408:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ihris-complex-card",{attrs:{complexField:t.field,slotProps:t.slotProps,label:t.label,errors:t.errors},scopedSlots:t._u([{key:"default",fn:function(e){return[t._t("default",null,{source:e.source})]}}],null,!0)})},n=[],s=r("fa57"),a={name:"fhir-identifier",props:["field","slotProps","sliceName","min","max","base-min","base-max","label","path","edit","constraints"],data:function(){return{errors:[]}},components:{IhrisComplexCard:s["a"]}},o=a,l=r("2877"),c=Object(l["a"])(o,i,n,!1,null,null,null);e["default"]=c.exports},e07f:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.edit&&t.secondary?t._e():r("div",{staticClass:"ihris-section",attrs:{id:"section-"+t.name}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"700",outlined:""}},[r("v-card-title",{staticClass:"primary darken-1 white--text text-uppercase font-weight-bold"},[t._v(t._s(t.title)+" ")]),r("v-card-text",{staticClass:"my-3"},[t._t("default",null,{source:t.slotProps.source})],2)],1)],1)},n=[],s={name:"ihris-section",props:["name","slotProps","title","description","edit","secondary"],data:function(){return{}},created:function(){},watch:{},methods:{}},a=s,o=r("2877"),l=r("6544"),c=r.n(l),u=r("b0af"),h=r("99d9"),d=Object(o["a"])(a,i,n,!1,null,null,null);e["default"]=d.exports;c()(d,{VCard:u["a"],VCardText:h["c"],VCardTitle:h["d"]})},eee9:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ihris-element",{attrs:{edit:t.edit,loading:t.loading},scopedSlots:t._u([{key:"form",fn:function(){return[r("v-select",{attrs:{loading:t.loading,label:t.display,items:t.items,outlined:"","hide-details":"auto","error-messages":t.errors,"item-text":"display","item-value":"code",disabled:t.disabled,rules:t.rules,dense:""},on:{change:function(e){t.errors=[]}},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(t._s(t.display)+" "),t.required?r("span",{staticClass:"red--text font-weight-bold"},[t._v("*")]):t._e()]},proxy:!0}]),model:{value:t.valueCode,callback:function(e){t.valueCode=e},expression:"valueCode"}})]},proxy:!0},{key:"header",fn:function(){return[t._v(" "+t._s(t.display)+" ")]},proxy:!0},{key:"value",fn:function(){return[t._v(" "+t._s(t.valueDisplay||t.value.display||"")+" ")]},proxy:!0}])})},n=[],s=(r("7db0"),r("b287")),a={name:"fhir-coding",props:["field","label","sliceName","targetprofile","min","max","base-min","base-max","slotProps","path","binding","edit","readOnlyIfSet","constraints"],components:{IhrisElement:s["a"]},data:function(){return{value:{system:"",code:"",display:""},valueCode:"",valueDisplay:"",loading:!0,errors:[],items:[],source:{path:"",data:{},binding:this.binding},disabled:!1,lockWatch:!1}},created:function(){this.setupData()},watch:{slotProps:{handler:function(){this.lockWatch||this.setupData()},deep:!0},valueCode:function(t){var e=this;if(this.items){var r=this.items.find((function(e){return e.code===t}));r&&(this.value=r)}this.value.system&&this.value.code&&this.$fhirutils.codeLookup(this.value.system,this.value.code,this.binding||this.source.binding).then((function(t){e.valueDisplay=t}))}},methods:{setupData:function(){var t=this;if(this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{},binding:this.binding||this.slotProps.source.binding},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data,this.source.data&&(this.value=this.source.data,this.valueCode=this.value.code,this.lockWatch=!0);else{var e=this.$fhirutils.pathFieldExpression(this.field);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,e),this.source.data[0]&&(this.value=this.source.data[0],this.valueCode=this.value.code,this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&!!this.valueCode}var r=this.binding||this.slotProps.source.binding;this.$fhirutils.expand(r).then((function(e){t.items=e,t.loading=!1})).catch((function(e){console.log(e),t.errors=e.message,t.loading=!1}))}},computed:{index:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.index:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){var t=this;return this.required?[function(e){return!!e||t.display+" is required"}]:[]}}},o=a,l=r("2877"),c=r("6544"),u=r.n(c),h=r("b974"),d=Object(l["a"])(o,i,n,!1,null,null,null);e["default"]=d.exports;u()(d,{VSelect:h["a"]})},fa57:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-subtitle",{staticClass:"primary--text text-uppercase font-weight-bold"},[t._v(t._s(t.display))]),t._l(t.errors,(function(e,i){return r("v-card-text",{key:i,staticClass:"error white--text font-weight-bold"},[t._v(t._s(e))])})),r("v-card-text",[t._t("default",null,{source:t.source})],2)],2)},n=[],s={name:"ihris-complex-card",props:["complexField","slotProps","label","errors"],data:function(){return{source:{path:"",data:{}}}},created:function(){this.setupData()},watch:{slotProps:{handler:function(){this.setupData()},deep:!0}},methods:{setupData:function(){if(this.slotProps&&this.slotProps.source)if(this.source={path:this.slotProps.source.path+"."+this.complexField,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data;else{var t=this.$fhirutils.pathFieldExpression(this.complexField);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,t)}}},computed:{display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label}}},a=s,o=r("2877"),l=r("6544"),c=r.n(l),u=r("b0af"),h=r("99d9"),d=Object(o["a"])(a,i,n,!1,null,null,null);e["a"]=d.exports;c()(d,{VCard:u["a"],VCardSubtitle:h["b"],VCardText:h["c"]})}}]);
//# sourceMappingURL=fhir-primary.498d00e3.js.map