!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.JsonView=t(require("vue")):e.JsonView=t(e.vue)}("undefined"!=typeof self?self:this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=13)}([function(e,t){e.exports=function(e,t,n,o,r,i){var a,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(a=e,s=e.default);var l="function"==typeof s?s.options:s;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var c;if(i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=c):o&&(c=o),c){var d=l.functional,f=d?l.render:l.beforeCreate;d?(l._injectStyles=c,l.render=function(e,t){return c.call(t),f(e,t)}):l.beforeCreate=f?[].concat(f,c):[c]}return{esModule:a,exports:s,options:l}}},function(e,t,n){"use strict";function o(e){s||n(21)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var s=!1,u=n(0),l=o,c=u(i.a,null,!1,l,null,null);c.options.__file="lib/json-box.vue",t.default=c.exports},function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function o(e){for(var t=0;t<e.length;t++){var n=e[t],o=c[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(i(n.parts[r]));c[n.id]={id:n.id,refs:1,parts:a}}}}function r(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,o=document.querySelector("style["+m+'~="'+e.id+'"]');if(o){if(v)return h;o.parentNode.removeChild(o)}if(g){var i=p++;o=f||(f=r()),t=a.bind(null,o,i,!1),n=a.bind(null,o,i,!0)}else o=r(),t=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}function a(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),y.ssrId&&e.setAttribute(m,t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(19),c={},d=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},y=null,m="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,r){v=n,y=r||{};var i=l(e,t);return o(i),function(t){for(var n=[],r=0;r<i.length;r++){var a=i[r],s=c[a.id];s.refs--,n.push(s)}t?(i=l(e,t),o(i)):i=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete c[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(20),i=(o(r),n(1)),a=o(i),s=n(30),u=o(s);t.default={name:"JsonViewer",components:{JsonBox:a.default},props:{value:{type:[Object,Array,String,Number,Boolean,Function],required:!0},expandDepth:{type:Number,default:1},copyable:{type:Boolean,default:!1},sort:{type:Boolean,default:!1},boxed:{type:Boolean,default:!1},theme:{type:String,default:"jv-light"}},provide:function(){return{expandDepth:this.expandDepth}},data:function(){return{copied:!1,expandableCode:!1,expandCode:!1}},computed:{jvClass:function(){return"jv-container "+this.theme+(this.boxed?" boxed":"")}},mounted:function(){this.onResized(),this.$el.addEventListener("resized",this.onResized,!0)},methods:{onResized:function(){var e=this;this.$nextTick(function(){e.$refs.jsonBox.$el.clientHeight>=250?e.expandableCode=!0:e.expandableCode=!1})},clip:function(){var e=this;if(!this.copied){var t=new u.default(this.$refs.clip,{text:function(){return JSON.stringify(e.value,null,2)}});t.on("success",function(){e.copied=!0,setTimeout(function(){e.copied=!1},2e3),e.$emit("copied"),t.destroy()})}},toggleExpandCode:function(){this.expandCode=!this.expandCode}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(23),a=o(i),s=n(24),u=o(s),l=n(25),c=o(l),d=n(26),f=o(d),p=n(27),v=o(p),h=n(28),y=o(h),m=n(29),g=o(m);t.default={name:"JsonBox",inject:["expandDepth"],props:{value:{type:[Object,Array,String,Number,Boolean,Function],default:null},keyName:{type:String,default:""},sort:Boolean,depth:{type:Number,default:0}},data:function(){return{expand:!0}},mounted:function(){this.expand=!(this.depth>=this.expandDepth)},methods:{toggle:function(){this.expand=!this.expand;try{this.$el.dispatchEvent(new Event("resized"))}catch(t){var e=document.createEvent("Event");e.initEvent("resized",!0,!1),this.$el.dispatchEvent(e)}}},render:function(e){var t=this,n=[],o=void 0;return null===this.value||void 0===this.value?o=u.default:Array.isArray(this.value)?o=y.default:"object"===r(this.value)?o=v.default:"number"==typeof this.value?o=c.default:"string"==typeof this.value?o=a.default:"boolean"==typeof this.value?o=f.default:"function"==typeof this.value&&(o=g.default),this.keyName&&this.value&&(Array.isArray(this.value)||"object"===r(this.value))&&n.push(e("span",{class:{"jv-toggle":!0,open:!!this.expand},on:{click:this.toggle}})),this.keyName&&n.push(e("span",{class:{"jv-key":!0},domProps:{innerHTML:this.keyName+":"}})),n.push(e(o,{class:{"jv-push":!0},props:{jsonValue:this.value,keyName:this.keyName,sort:this.sort,depth:this.depth,expand:this.expand},on:{"update:expand":function(e){t.expand=e}}})),e("div",{class:{"jv-node":!0}},n)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"JsonString",functional:!0,props:{jsonValue:{type:String,required:!0}},render:function(e,t){return e("span",{class:{"jv-item":!0,"jv-string":!0},domProps:{innerHTML:'"'+t.props.jsonValue.toString()+'"'}})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"JsonUndefined",functional:!0,props:{jsonValue:{type:Object,default:null}},render:function(e,t){return e("span",{class:{"jv-item":!0,"jv-undefined":!0},domProps:{innerHTML:null===t.props.jsonValue?"null":"undefined"}})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"JsonNumber",functional:!0,props:{jsonValue:{type:Number,required:!0}},render:function(e,t){return e("span",{class:{"jv-item":!0,"jv-number":!0},domProps:{innerHTML:t.props.jsonValue.toString()}})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"JsonBoolean",functional:!0,props:{jsonValue:Boolean},render:function(e,t){return e("span",{class:{"jv-item":!0,"jv-boolean":!0},domProps:{innerHTML:t.props.jsonValue.toString()}})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={name:"JsonObject",props:{jsonValue:{type:Object,required:!0},keyName:{type:String,default:""},depth:{type:Number,default:0},expand:Boolean,sort:Boolean},computed:{ordered:function(){var e=this;if(!this.sort)return this.jsonValue;var t={};return Object.keys(this.jsonValue).sort().forEach(function(n){t[n]=e.jsonValue[n]}),t}},methods:{toggle:function(){this.$emit("update:expand",!this.expand);try{this.$el.dispatchEvent(new Event("resized"))}catch(t){var e=document.createEvent("Event");e.initEvent("resized",!0,!1),this.$el.dispatchEvent(e)}}},render:function(e){var t=[];this.keyName||t.push(e("span",{class:{"jv-toggle":!0,open:!!this.expand},on:{click:this.toggle}})),t.push(e("span",{class:{"jv-item":!0,"jv-object":!0},domProps:{innerHTML:"{"}}));for(var n in this.ordered)if(this.ordered.hasOwnProperty(n)){var o=this.ordered[n];t.push(e(r.default,{key:n,style:{display:this.expand?void 0:"none"},props:{sort:this.sort,keyName:n,depth:this.depth+1,value:o}}))}return this.expand||t.push(e("span",{style:{display:this.expand?"none":void 0},class:{"jv-ellipsis":!0},on:{click:this.toggle},attrs:{title:"click to reveal object content (keys: "+Object.keys(this.ordered).join(", ")+")"},domProps:{innerHTML:"..."}})),t.push(e("span",{class:{"jv-item":!0,"jv-object":!0},domProps:{innerHTML:"}"}})),e("span",t)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={name:"JsonArray",props:{jsonValue:{type:Array,required:!0},keyName:{type:String,default:""},depth:{type:Number,default:0},sort:Boolean,expand:Boolean},computed:{ordered:function(){var e=this.jsonValue;return this.sort?e.sort():e}},methods:{toggle:function(){this.$emit("update:expand",!this.expand);try{this.$el.dispatchEvent(new Event("resized"))}catch(t){var e=document.createEvent("Event");e.initEvent("resized",!0,!1),this.$el.dispatchEvent(e)}}},render:function(e){var t=[];this.keyName||t.push(e("span",{class:{"jv-toggle":!0,open:!!this.expand},on:{click:this.toggle}})),t.push(e("span",{class:{"jv-item":!0,"jv-array":!0},domProps:{innerHTML:"["}}));for(var n in this.ordered){var o=this.ordered[n];t.push(e(r.default,{key:n,style:{display:this.expand?void 0:"none"},props:{sort:this.sort,depth:this.depth+1,value:o}}))}return this.expand||t.push(e("span",{style:{display:this.expand?"none":void 0},class:{"jv-ellipsis":!0},on:{click:this.toggle},attrs:{title:"click to reveal "+this.jsonValue.length+" hidden items"},domProps:{innerHTML:"..."}})),t.push(e("span",{class:{"jv-item":!0,"jv-array":!0},domProps:{innerHTML:"]"}})),e("span",t)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"JsonFunction",functional:!0,props:{jsonValue:{type:Function,required:!0}},render:function(e,t){return e("span",{class:{"jv-item":!0,"jv-function":!0},attrs:{title:t.props.jsonValue.toString()},domProps:{innerHTML:"&lt;function&gt;"}})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(14),r=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){e.component("JsonViewer",r.default)};t.default=Object.assign(r.default,{install:i})},function(e,t,n){"use strict";function o(e){u||n(15)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var s=n(38),u=!1,l=n(0),c=o,d=l(i.a,s.a,!1,c,null,null);d.options.__file="lib/json-viewer.vue",t.default=d.exports},function(e,t,n){var o=n(16);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(3)("4d5be11a",o,!1,{})},function(e,t,n){var o=n(17);t=e.exports=n(2)(!1),t.push([e.i,"\n.jv-container {\n  box-sizing: border-box;\n  position: relative;\n}\n.jv-container.boxed {\n    border: 1px solid #eee;\n    border-radius: 6px;\n}\n.jv-container.boxed:hover {\n      box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n      border-color: transparent;\n      position: relative;\n}\n.jv-container.jv-light {\n    background: #fff;\n    white-space: nowrap;\n    color: #525252;\n    font-size: 14px;\n    font-family: Consolas, Menlo, Courier, monospace;\n}\n.jv-container.jv-light .jv-ellipsis {\n      color: #999;\n      background-color: #eee;\n      display: inline-block;\n      line-height: 0.9;\n      font-size: 0.9em;\n      padding: 0px 4px 2px 4px;\n      margin: 0 4px;\n      border-radius: 3px;\n      vertical-align: 2px;\n      cursor: pointer;\n      user-select: none;\n}\n.jv-container.jv-light .jv-button {\n      color: #49b3ff;\n}\n.jv-container.jv-light .jv-key {\n      color: #111111;\n      margin-right: 4px;\n}\n.jv-container.jv-light .jv-item.jv-array {\n      color: #111111;\n}\n.jv-container.jv-light .jv-item.jv-boolean {\n      color: #fc1e70;\n}\n.jv-container.jv-light .jv-item.jv-function {\n      color: #067bca;\n}\n.jv-container.jv-light .jv-item.jv-number {\n      color: #fc1e70;\n}\n.jv-container.jv-light .jv-item.jv-object {\n      color: #111111;\n}\n.jv-container.jv-light .jv-item.jv-undefined {\n      color: #e08331;\n}\n.jv-container.jv-light .jv-item.jv-string {\n      color: #42b983;\n      word-break: break-word;\n      white-space: normal;\n}\n.jv-container.jv-light .jv-code .jv-toggle:before {\n      padding: 0px 2px;\n      border-radius: 2px;\n}\n.jv-container.jv-light .jv-code .jv-toggle:hover:before {\n      background: #eee;\n}\n.jv-container .jv-code {\n    max-height: 300px;\n    overflow: hidden;\n    padding: 20px;\n}\n.jv-container .jv-code.open {\n      max-height: initial;\n      overflow: visible;\n      overflow-x: auto;\n      padding-bottom: 45px;\n}\n.jv-container .jv-toggle {\n    background-image: url("+o(n(18))+');\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center center;\n    cursor: pointer;\n    width: 10px;\n    height: 10px;\n    margin-right: 2px;\n    display: inline-block;\n    transition: transform 0.1s;\n}\n.jv-container .jv-toggle.open {\n      transform: rotate(90deg);\n}\n.jv-container .jv-more {\n    position: absolute;\n    z-index: 1;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 40px;\n    width: 100%;\n    text-align: center;\n    cursor: pointer;\n}\n.jv-container .jv-more .jv-toggle {\n      position: relative;\n      top: 40%;\n      z-index: 2;\n      color: #888;\n      transition: all 0.1s;\n      transform: rotate(-90deg);\n}\n.jv-container .jv-more:after {\n      content: "";\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      z-index: 1;\n      background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(230, 230, 230, 0.3) 100%);\n      transition: all 0.1s;\n}\n.jv-container .jv-more:hover .jv-toggle {\n      top: 50%;\n      color: #111;\n}\n.jv-container .jv-more:hover:after {\n      background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(230, 230, 230, 0.3) 100%);\n}\n.jv-container .jv-button {\n    position: relative;\n    cursor: pointer;\n    display: inline-block;\n    padding: 5px;\n    z-index: 5;\n}\n.jv-container .jv-button.copied {\n      opacity: 0.4;\n      cursor: default;\n}\n.jv-container .jv-tooltip {\n    position: absolute;\n    right: 15px;\n    top: 10px;\n}\n.jv-container .j-icon {\n    font-size: 12px;\n}\n',""])},function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE2IiB3aWR0aD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIAo8cG9seWdvbiBwb2ludHM9IjAsMCA4LDggMCwxNiIKc3R5bGU9ImZpbGw6IzY2NjtzdHJva2U6cHVycGxlO3N0cm9rZS13aWR0aDowIiAvPgo8L3N2Zz4="},function(e,t){e.exports=function(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=i[0],s=i[1],u=i[2],l=i[3],c={id:e+":"+r,css:s,media:u,sourceMap:l};o[a]?o[a].parts.push(c):n.push(o[a]={id:a,parts:[c]})}return n}},function(t,n){t.exports=e},function(e,t,n){var o=n(22);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(3)("47a4fafd",o,!1,{})},function(e,t,n){t=e.exports=n(2)(!1),t.push([e.i,"\n.jv-node {\n  position: relative;\n}\n.jv-node:after {\n    content: ',';\n}\n.jv-node:last-of-type:after {\n    content: '';\n}\n.jv-node .jv-node {\n    margin-left: 25px;\n}\n",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);var a=n(0),s=a(r.a,null,!1,null,null,null);s.options.__file="lib/types/json-string.vue",t.default=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);var a=n(0),s=a(r.a,null,!1,null,null,null);s.options.__file="lib/types/json-undefined.vue",t.default=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);var a=n(0),s=a(r.a,null,!1,null,null,null);s.options.__file="lib/types/json-number.vue",t.default=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(9),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);var a=n(0),s=a(r.a,null,!1,null,null,null);s.options.__file="lib/types/json-boolean.vue",t.default=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);var a=n(0),s=a(r.a,null,!1,null,null,null);s.options.__file="lib/types/json-object.vue",t.default=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(11),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);var a=n(0),s=a(r.a,null,!1,null,null,null);s.options.__file="lib/types/json-array.vue",t.default=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(12),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);var a=n(0),s=a(r.a,null,!1,null,null,null);s.options.__file="lib/types/json-function.vue",t.default=s.exports},function(e,t,n){var o,r,i;!function(a,s){r=[e,n(31),n(33),n(34)],o=s,void 0!==(i="function"==typeof o?o.apply(t,r):o)&&(e.exports=i)}(0,function(e,t,n,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var l=r(t),c=r(n),d=r(o),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),v=function(e){function t(e,n){i(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.resolveOptions(n),o.listenClick(e),o}return s(t,e),p(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===f(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,d.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return u("action",e)}},{key:"defaultTarget",value:function(e){var t=u("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return u("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)}),n}}]),t}(c.default);e.exports=v})},function(e,t,n){var o,r,i;!function(a,s){r=[e,n(32)],o=s,void 0!==(i="function"==typeof o?o.apply(t,r):o)&&(e.exports=i)}(0,function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(e){return e&&e.__esModule?e:{default:e}}(t),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=function(){function e(t){n(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}();e.exports=a})},function(e,t){function n(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(e),o.removeAllRanges(),o.addRange(r),t=o.toString()}return t}e.exports=n},function(e,t){function n(){}n.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function o(){r.off(e,o),t.apply(n,arguments)}var r=this;return o._=t,this.on(e,o,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,r=n.length;for(o;o<r;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],r=[];if(o&&t)for(var i=0,a=o.length;i<a;i++)o[i].fn!==t&&o[i].fn._!==t&&r.push(o[i]);return r.length?n[e]=r:delete n[e],this}},e.exports=n},function(e,t,n){function o(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!s.string(t))throw new TypeError("Second argument must be a String");if(!s.fn(n))throw new TypeError("Third argument must be a Function");if(s.node(e))return r(e,t,n);if(s.nodeList(e))return i(e,t,n);if(s.string(e))return a(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function i(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function a(e,t,n){return u(document.body,e,t,n)}var s=n(35),u=n(36);e.exports=o},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){function o(e,t,n,o,r){var a=i.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function r(e,t,n,r,i){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return o(e,t,n,r,i)}))}function i(e,t,n,o){return function(n){n.delegateTarget=a(n.target,t),n.delegateTarget&&o.call(e,n)}}var a=n(37);e.exports=r},function(e,t){function n(e,t){for(;e&&e.nodeType!==o;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}var o=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}e.exports=n},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.jvClass},[e.copyable?n("div",{staticClass:"jv-tooltip"},[n("span",{ref:"clip",staticClass:"jv-button",class:{copied:e.copied},on:{click:e.clip}},[e._v(e._s(e.copied?"copied!":"copy"))])]):e._e(),e._v(" "),n("div",{staticClass:"jv-code",class:{open:e.expandCode}},[n("json-box",{ref:"jsonBox",attrs:{value:e.value,sort:e.sort}})],1),e._v(" "),e.expandableCode?n("div",{staticClass:"jv-more",on:{click:e.toggleExpandCode}},[n("span",{staticClass:"jv-toggle",class:{open:!!e.expandCode}})]):e._e()])},r=[];o._withStripped=!0;var i={render:o,staticRenderFns:r};t.a=i}])});