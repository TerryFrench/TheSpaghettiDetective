(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={print_shot_feedback:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static/frontend/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([4,"chunk-vendors"]),n()})({0:function(t,e){},1807:function(t,e,n){"use strict";n("99af");e["a"]={printShotFeedback:function(t,e){return"/api/v1/printshotfeedbacks/".concat(t,"/?print_id=").concat(e)},print:function(t){return"/api/v1/prints/".concat(t,"/")},prints:function(){return"/api/v1/prints/"},printsBulkDelete:function(){return"/api/v1/prints/bulk_delete/"},printAlertOverwrite:function(t){return"/api/v1/prints/".concat(t,"/alert_overwrite/")},printers:function(){return"/api/v1/printers/"},printer:function(t){return"/api/v1/printers/".concat(t,"/")},printerAction:function(t,e){return"/api/v1/printers/".concat(t).concat(e)},pubPrinter:function(){return"/api/v1p/printer/"},gcodes:function(){return"/api/v1/gcodes/"},tunnelUsage:function(){return"/api/v1/tunnelusage/"},printerControl:function(t){return"/printers/".concat(t,"/control/")},printerWS:function(t){return"/ws/web/".concat(t,"/")},printerSharedWS:function(t){return"/ws/share_token/web/".concat(t,"/")}}},"3c33":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(t,e){var n=localStorage.getItem(t)||e;try{return JSON.parse(n)}catch(r){return n}},a=function(t,e){return localStorage.setItem(t,e)}},4:function(t,e,n){t.exports=n("84bc")},"502a":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return u}));n("caad"),n("b0c0"),n("d3b7"),n("25f0"),n("2532");var r=n("c1df"),a=n.n(r),s=n("9b02"),i=n.n(s),o=function(t){return t?a()(t):null},c=function(t){return t.ended_at=o(t.cancelled_at||t.finished_at),t.started_at=o(t.started_at),t.uploaded_at=o(t.uploaded_at),t.has_alerts=Boolean(t.alerted_at),t},l=function(t){return t.name=t.name||"Printer #"+t.id.toString(),t.created_at=o(t.created_at),t.isOffline=null===i()(t,"status",null),t.isPaused=i()(t,"status.state.flags.paused",!1),t.isIdle="Operational"===i()(t,"status.state.text",""),t.isDisconnected=i()(t,"status.state.flags.closedOrError",!0),t.isPrinting=!t.isDisconnected&&"Operational"!==i()(t,"status.state.text",""),t.hasError=i()(t,"status.state.flags.error")||i()(t,"status.state.text","").toLowerCase().includes("error"),t.alertUnacknowledged=i()(t,"current_print.alerted_at")&&a()(i()(t,"current_print.alerted_at")).isAfter(a()(i()(t,"current_print.alert_acknowledged_at")||0)),t},u=function(t,e){var n=Math.round(t.length*e);return i()(t[n],"fields.normalized_p",0)}},5237:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card bg-dark text-white"},[r("img",{staticClass:"card-img",attrs:{src:n("6e05"),alt:"The Detective is still working"}}),t._m(0)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-img-overlay",staticStyle:{"background-color":"rgba(0,0,0,0.6)"}},[n("h5",{staticClass:"card-title text-center",staticStyle:{padding:"70px 0"}},[t._v("The Detective is still busy working on your time-lapse")])])}],s={name:"DetectiveWorking"},i=s,o=n("2877"),c=Object(o["a"])(i,r,a,!1,null,null,null);e["a"]=c.exports},"6e05":function(t,e,n){t.exports=n.p+"img/detective-working.gif"},"7a8a":function(t,e,n){"use strict";var r=n("c8fe"),a=n.n(r);a.a},"84bc":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),a=n("f357"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"printshots-container row justify-content-center"},[n("div",{staticClass:"col-sm-12 col-lg-6"},[n("div",{staticClass:"card"},[t._m(0),n("loading",{attrs:{active:null===t.print,"is-full-page":!0}}),null!==t.print?n("div",[t.print.access_consented_at?n("div",[n("div",[n("vue-slick-carousel",{ref:"carousel",attrs:{arrows:!0,dots:!0},on:{afterChange:t.onNextShot},scopedSlots:t._u([{key:"customPaging",fn:function(e){return[n("div",{class:t.pageClass(e)},[t._v("•")])]}}],null,!1,3226812120)},t._l(this.shots,(function(e,r){return n("print-shot-card",{key:r,attrs:{shot:e},on:{shotChanged:t.onShotChanged}})})),1)],1),n("br"),n("div",{staticClass:"card-body p-3"},[n("a",{attrs:{href:"/prints/"}},[n("i",{staticClass:"fas fa-chevron-left"}),t._v(" Time-lapse ")])])]):n("consent",{attrs:{print:this.print},on:{"continue-btn-pressed":this.consentBtnPressed}})],1):t._e()],1)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h5",{staticClass:"card-header text-center"},[t._v(" F "),n("i",{staticClass:"fas fa-search focused-feedback-icon"}),t._v("CUSED FEEDBACK ")])}],o=n("bc3a"),c=n.n(o),l=n("c1df"),u=n.n(l),d=n("c707"),p=n.n(d),f=n("51f5"),h=n.n(f),v=n("a7ab"),m=n.n(v),b=(n("7b8d"),n("6a2c"),n("9062")),_=n.n(b),g=(n("e40d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-body consent-section"},[n("div",[t._v(" Number of snapshots: "),n("span",{staticClass:"feedback-estimate"},[t._v(t._s(this.print.printshotfeedback_set.length))])]),n("p",[t._v(" Estimated time to finish: "),n("span",{staticClass:"feedback-estimate"},[t._v(t._s(this.estimatedFeedbackTime))])]),t._m(0),n("br"),n("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:!t.consentChecked,type:"button"},on:{click:function(e){return t.$emit("continue-btn-pressed")}}},[t._v("Start Focused Feedback")]),n("br"),n("div",{staticClass:"custom-control custom-checkbox form-check-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.consentChecked,expression:"consentChecked"}],staticClass:"custom-control-input",attrs:{type:"checkbox",name:"consented",id:"consented-checkbox"},domProps:{checked:Array.isArray(t.consentChecked)?t._i(t.consentChecked,null)>-1:t.consentChecked},on:{change:function(e){var n=t.consentChecked,r=e.target,a=!!r.checked;if(Array.isArray(n)){var s=null,i=t._i(n,s);r.checked?i<0&&(t.consentChecked=n.concat([s])):i>-1&&(t.consentChecked=n.slice(0,i).concat(n.slice(i+1)))}else t.consentChecked=a}}}),t._m(1)]),n("br"),n("div",[n("span",{staticClass:"text-muted"},[t._v("File:")]),t._v(" "+t._s(t.print.filename)+" ")]),n("div",[n("span",{staticClass:"text-muted"},[t._v("Printed:")]),t._v(" "+t._s(t.print.started_at.fromNow())+" ")]),n("br"),t.print.video_url?n("video-box",{attrs:{videoUrl:t.print.video_url,posterUrl:t.print.poster_url,fullScreenBtn:!1}}):n("div",[n("detective-working")],1)],1)}),k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-muted font-weight-light"},[t._v(" Help The Detective get better by giving her in-depth feedback on the snapshots of the print. You will earn "),n("strong",{staticClass:"text-light"},[t._v("2 non-expirable Detective Hours")]),t._v(" after you finish this Focused Feedback. "),n("a",{attrs:{target:"_blank",href:"https://www.thespaghettidetective.com/docs/how-does-credits-work/"}},[t._v("Learn more. "),n("small",[n("i",{staticClass:"fas fa-external-link-alt"})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"custom-control-label",staticStyle:{"font-size":"16px"},attrs:{for:"consented-checkbox"}},[t._v(" I grant The Spaghetti Detective the permission to review the time-lapse video of the print shown on this page. "),n("a",{attrs:{target:"_blank",href:"https://www.thespaghettidetective.com/docs/how-does-credits-work/#you-need-to-grant-permission-to-tsd-team-to-review-your-time-lapse"}},[t._v("Why is this necessary? "),n("small",[n("i",{staticClass:"fas fa-external-link-alt"})])])])}],w=n("c1ee"),y=n("5237"),C={name:"Consent",props:{print:Object},components:{VideoBox:w["a"],DetectiveWorking:y["a"]},data:function(){return{consentChecked:!1}},computed:{estimatedFeedbackTime:function(){var t=12*this.print.printshotfeedback_set.length;return t<60?"".concat(t," seconds"):u.a.duration(t,"seconds").humanize()}}},x=C,O=(n("b855"),n("2877")),S=Object(O["a"])(x,g,k,!1,null,"84e321f8",null),j=S.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{staticClass:"card-img-top",attrs:{src:t.shot.image_url}}),n("div",{staticClass:"px-3 pt-4"},[n("b-form-group",{attrs:{label:"Do you see any spaghetti in this picture?"}},[n("b-form-radio-group",{attrs:{options:t.options},on:{change:t.updateShot},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}})],1),t._m(0)],1)])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",{staticClass:"text-muted"},[t._v(" Not sure? Look at "),n("a",{attrs:{target:"_blank",href:"https://www.thespaghettidetective.com/docs/how-does-credits-work/#spaghetti-examples"}},[t._v("some examples. "),n("small",[n("i",{staticClass:"fas fa-external-link-alt"})])])])}],$=n("1807"),D=n("8226"),T=n("2924"),E={name:"PrintShotCard",components:{BFormGroup:D["a"],BFormRadioGroup:T["a"]},props:{shot:Object},data:function(){return{answer:this.shot.answer,options:[{text:"Yes",value:"LOOKS_BAD"},{text:"No",value:"LOOKS_OK"},{text:"I am not sure",value:"UNDECIDED"}]}},methods:{updateShot:function(t){var e=this;c.a.put($["a"].printShotFeedback(this.shot.id,this.shot.print_id),{answer:t}).then((function(t){var n=t.data,r=n.instance,a=n.credited_dhs;e.$emit("shotChanged",r),a>0&&e.$swal({title:"You are awesome!",html:"<p>The Detective just got a little smarter because of your feedback!</p><p>You just earned 2 non-expirable Detective Hours - Yay!</p>",confirmButtonText:"I'm done!",showCancelButton:!0,cancelButtonText:"Change feedback"}).then((function(t){t.isConfirmed&&(window.location.href="/prints/")}))}))}}},F=E,A=Object(O["a"])(F,B,P,!1,null,null,null),U=A.exports,N=n("502a"),W={name:"PrintShotFeedbackApp",components:{Consent:j,Loading:_.a,PrintShotCard:U,VueSlickCarousel:m.a},props:{config:{default:function(){},type:Object}},data:function(){return{shots:[],currentShot:0,print:null}},computed:{},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;c.a.get($["a"].print(this.config.printId)).then((function(e){t.print=Object(N["b"])(e.data),t.shots=p()(t.print.printshotfeedback_set,"id")}))},updatePrint:function(t){var e=this;c.a.patch($["a"].print(this.print.id),t).then((function(t){return e.print=t.data}))},consentBtnPressed:function(){this.updatePrint({access_consented_at:u()()})},onShotChanged:function(t){var e=h()(this.shots,(function(e){return e.id==t.id}));this.$set(this.shots,e,t),this.$refs.carousel.next()},onNextShot:function(t){this.currentShot=t},pageClass:function(t){return t===this.currentShot?"page-visiting":this.shots[t].answered_at?"text-success":"page-unvisited"}}},I=W,M=(n("9292"),Object(O["a"])(I,s,i,!1,null,"e28dbba8",null)),L=M.exports;r["default"].use(a["a"]),new r["default"]({components:{App:L}}).$mount("#print-shot-feedback-mount")},"85f6":function(t,e,n){},9292:function(t,e,n){"use strict";var r=n("f44b"),a=n.n(r);a.a},b855:function(t,e,n){"use strict";var r=n("85f6"),a=n.n(r);a.a},c1ee:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-img-top"},[n("video-player",{ref:"videoPlayer",staticClass:"vjs-default-skin vjs-big-play-centered",attrs:{options:t.playerOptions,playsinline:!0},on:{timeupdate:t.onTimeUpdate}}),t.fullscreenBtn?n("a",{staticClass:"fullscreen-btn",attrs:{role:"button"},on:{click:function(e){return t.$emit("fullscreen")}}},[n("i",{staticClass:"fa fa-expand fa-2x",attrs:{"aria-hidden":"true"}})]):t._e()],1)},a=[],s=n("d6d3"),i={name:"VideoBox",components:{videoPlayer:s["videoPlayer"]},props:{videoUrl:String,posterUrl:String,fullscreenBtn:{default:function(){return!0},type:Boolean},fluid:{type:Boolean,default:function(){return!0}},autoplay:{type:Boolean,default:function(){return!1}}},computed:{playerOptions:function(){return{muted:!0,preload:"none",language:"en",playbackRates:[.5,1,1.5,2],fluid:this.fluid,fill:!this.fluid,autoplay:this.autoplay,sources:[{type:"video/mp4",src:this.videoUrl}],controlBar:{fullscreenToggle:!1},poster:this.posterUrl}}},methods:{onTimeUpdate:function(t){this.$emit("timeupdate",t.currentTime()/t.duration())}}},o=i,c=(n("7a8a"),n("2877")),l=Object(c["a"])(o,r,a,!1,null,"2ae6d05e",null);e["a"]=l.exports},c8fe:function(t,e,n){},f357:function(t,e,n){"use strict";var r=n("f3f3"),a=n("a026"),s=n("5886"),i=n("3c33"),o=function(t,e,n){var s=document.createElement("div"),i=new a["default"]({render:function(n){return n(t,{props:e})}}).$mount(s);return a["default"].swal(Object(r["a"])(Object(r["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(t){t.querySelector("#replace-here").replaceWith(i.$el)},onDestroy:function(){i.$destroy(),s.remove()}}))},c=function(t,e,n){return a["default"].swal(Object(r["a"])(Object(r["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(e){e.querySelector("#replace-here").replaceWith(t)}}))},l=function(t,e){t.use(s["a"],e);var n=t.swal.mixin({title:"Are you sure?",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",customClass:{container:"dark-backdrop"}}),a=t.swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:5e3}),l=function(e,n){if(!Object(i["a"])(n,!1)){var a=Object(r["a"])(Object(r["a"])({},e),{},{position:"top-end",confirmButtonText:"Gotcha! Don't show this again."});return t.swal(a).then((function(t){t.value&&(Object(i["b"])(n,!0),console.log(t))}))}};t.prototype.$swal["openModalWithComponent"]=o,t.prototype.$swal["openModalWithElement"]=c,t.prototype.$swal["Confirm"]=n,t.prototype.$swal["Toast"]=a,t.prototype.$swal["DismissableToast"]=l};e["a"]={install:l}},f44b:function(t,e,n){}});
//# sourceMappingURL=print_shot_feedback.js.map