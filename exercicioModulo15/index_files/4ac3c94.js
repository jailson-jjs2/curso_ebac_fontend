/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4,9,10,11,16,26,27,28,29,30,34,37,39,40,45,46,47,51,52,56,59,70,72,74],{1101:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(1142),c=n(1154);o.a.core.registerPlugin("LmsPlugin",c.LmsPlugin),r.default.prototype.$kaltura=o.a,console.info("%c Kaltura player: %c ".concat(o.b?"v7":"default"," "),"color: #fff; background: #000","color: #fff; background: #cc6666")},1141:function(t,e,n){var r=n(37),o=n(668);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},1142:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));var r=window.KalturaPlayer,o=!!r;e.a=r},1143:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},1144:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(349),o=n.n(r);function c(t,e){return!e||"object"!==o()(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}},1145:function(t,e,n){"use strict";var r=n(20),o=n(172),c=n(1146),l=n(670),f=n(37),d=1..toFixed,h=Math.floor,M=function(t,e,n){return 0===e?n:e%2==1?M(t,e-1,n*t):M(t*t,e/2,n)},y=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=h(r/1e7)},N=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=h(n/t),n=n%t*1e7},I=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+l.call("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:d&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!f((function(){d.call({})}))},{toFixed:function(t){var e,n,r,f,d=c(this),h=o(t),data=[0,0,0,0,0,0],v="",x="0";if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return String(d);if(d<0&&(v="-",d=-d),d>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(d*M(2,69,1))-69)<0?d*M(2,-e,1):d/M(2,e,1),n*=4503599627370496,(e=52-e)>0){for(y(data,0,n),r=h;r>=7;)y(data,1e7,0),r-=7;for(y(data,M(10,r,1),0),r=e-1;r>=23;)N(data,1<<23),r-=23;N(data,1<<r),y(data,1,1),N(data,2),x=I(data)}else y(data,0,n),y(data,1<<-e,0),x=I(data)+l.call("0",h);return x=h>0?v+((f=x.length)<=h?"0."+l.call("0",h-f)+x:x.slice(0,f-h)+"."+x.slice(f-h)):v+x}})},1146:function(t,e){var n=1..valueOf;t.exports=function(t){return n.call(t)}},1147:function(t,e,n){"use strict";n.r(e),n.d(e,"LmsFullscreen",(function(){return T}));n(669);var r=n(170),o=n(171),c=n(347),l=n(1144),f=n(1143),d=n(48),h=(n(14),n(1142));function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},N=h.a.ui.h,I=h.a.ui.preact.Component,v=h.a.ui.components,x=v.Tooltip,j=v.Button,m=v.withPlayer,T=function(t){Object(c.a)(n,t);var e=M(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(t){return N("div",{name:"lms-fullscreen",className:"playkit-control-button-container playkit-control-fullscreen"},N(x,{label:"FS"},N(j,{className:"playkit-control-button",tabIndex:1,ariaLabel:"FS-Label",onClick:function(){var e=t.player.config.targetId,n=document.getElementById(e);if(n){var r=new CustomEvent("togglefullscreen");n.dispatchEvent(r)}}},N("i",{className:"playkit-icon playkit-icon-lms-fullscreen"}))))}}]),n}(I);T=y([m],T)},1148:function(t,e,n){"use strict";n.r(e),n.d(e,"LmsSubtitles",(function(){return T}));n(669);var r=n(170),o=n(171),c=n(347),l=n(1144),f=n(1143),d=n(48),h=(n(14),n(1142));function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},N=h.a.ui.h,I=h.a.ui.preact.Component,v=h.a.ui.components,x=v.Tooltip,j=v.Button,m=v.withPlayer,T=function(t){Object(c.a)(n,t);var e=M(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(t){return t.hasSubtitles?N("div",{name:"lms-language",className:"playkit-control-button-container playkit-control-language"},N(x,{label:"Subtitles"},N(j,{className:"playkit-control-button",tabIndex:0,ariaLabel:"Lang-Label",onClick:function(){var e=t.player.config.targetId,n=document.getElementById(e);if(n){var r=new CustomEvent("togglesubtitles");n.dispatchEvent(r)}}},N("i",{className:"playkit-icon playkit-icon-lms-subtitles"})))):""}}]),n}(I);T=y([m],T)},1149:function(t,e,n){"use strict";n.r(e),n.d(e,"LmsCaptions",(function(){return T}));n(669);var r=n(170),o=n(171),c=n(347),l=n(1144),f=n(1143),d=n(48),h=(n(14),n(1142));function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},N=h.a.ui.h,I=h.a.ui.preact.Component,v=h.a.ui.components,x=v.Tooltip,j=v.withPlayer,m=v.Language,T=function(t){Object(c.a)(n,t);var e=M(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(t){return t.hasSubtitles?N("div",{name:"lms-captions",className:"playkit-control-button-container playkit-control-captions"},N(x,{label:"Captions"},N(m,{className:"playkit-control-button",tabIndex:2,ariaLabel:"Captions-Label"}))):""}}]),n}(I);T=y([j],T)},1150:function(t,e,n){"use strict";n.r(e),n.d(e,"LMSSnapshot",(function(){return T}));n(669);var r=n(170),o=n(171),c=n(347),l=n(1144),f=n(1143),d=n(48),h=(n(14),n(1142));function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},N=h.a.ui.h,I=h.a.ui.preact.Component,v=h.a.ui.components,x=v.Tooltip,j=v.withPlayer,m=v.Button,T=function(t){Object(c.a)(n,t);var e=M(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(t){return N("div",{name:"lms-snapshot",alt:t,className:"playkit-control-button-container playkit-control-snapshot"},N(x,{label:"Snapshot"},N(m,{className:"playkit-control-button",tabIndex:0,ariaLabel:"Snapshot-Label",onClick:function(){var e=t.player.config.targetId,n=document.getElementById(e);if(n){var r=new CustomEvent("sendSnapshot");n.dispatchEvent(r)}}},N("i",{className:"playkit-icon playkit-icon-lms-snapshot"}))))}}]),n}(I);T=y([j],T)},1154:function(t,e,n){"use strict";n.r(e),n.d(e,"LmsPlugin",(function(){return v}));n(669);var r=n(170),o=n(171),c=n(347),l=n(1144),f=n(1143),d=n(1142),h=n(1147),M=n(1148),y=n(1149),N=n(1150);function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t){Object(c.a)(n,t);var e=I(n);function n(t,o,c){var l;return Object(r.a)(this,n),(l=e.call(this,t,o,c)).config=c,l}return Object(o.a)(n,[{key:"getUIComponents",value:function(){return[{label:"lmsFullScreen",presets:["Playback"],container:"BottomBarRightControls",get:h.LmsFullscreen,replaceComponent:"Fullscreen",props:this.config},{label:"lmsSubtitles",presets:["Playback"],container:"BottomBarRightControls",get:M.LmsSubtitles,props:this.config},{label:"lmsCaptions",presets:["Playback"],container:"BottomBarRightControls",get:y.LmsCaptions,replaceComponent:"Language",props:this.config},{label:"lmsShapshot",presets:["Playback"],container:"BottomBarRightControls",get:N.LMSSnapshot,props:this.config}]}}],[{key:"isValid",value:function(){return!0}}]),n}(d.a.core.BasePlugin)},169:function(t,e,n){"use strict";var r=n(20),o=n(667).trim;r({target:"String",proto:!0,forced:n(1141)("trim")},{trim:function(){return o(this)}})},195:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAgNDBDMjUuMzA0MyA0MCAzMC4zOTE0IDM3Ljg5MjkgMzQuMTQyMSAzNC4xNDIxQzM3Ljg5MjkgMzAuMzkxNCA0MCAyNS4zMDQzIDQwIDIwQzQwIDE0LjY5NTcgMzcuODkyOSA5LjYwODU5IDM0LjE0MjEgNS44NTc4NkMzMC4zOTE0IDIuMTA3MTQgMjUuMzA0MyAwIDIwIDBDMTQuNjk1NyAwIDkuNjA4NTkgMi4xMDcxNCA1Ljg1Nzg2IDUuODU3ODZDMi4xMDcxNCA5LjYwODU5IDAgMTQuNjk1NyAwIDIwQzAgMjUuMzA0MyAyLjEwNzE0IDMwLjM5MTQgNS44NTc4NiAzNC4xNDIxQzkuNjA4NTkgMzcuODkyOSAxNC42OTU3IDQwIDIwIDQwVjQwWk0xNy4wODU3IDI4LjJIMTUuMDU3MUw4LjU3MTQzIDIxLjcxNDNMMTAuNiAxOS42ODU3TDE2LjA4NTcgMjUuMTcxNEwyOC4wODU3IDEzLjE0MjlMMzAuMTE0MyAxNS4xNzE0TDE3LjA4NTcgMjguMlYyOC4yWiIgZmlsbD0iIzYyQkExMiIvPgo8L3N2Zz4K"},216:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC42NDg5IDAuMzUxMDg3QzI1LjExNyAwLjgxOTIwMiAyNS4xMTcgMS41NzgxNyAyNC42NDg5IDIuMDQ2MjhMMTQuMTk1MiAxMi41TDI0LjY0ODkgMjIuOTUzN0MyNS4xMTcgMjMuNDIxOCAyNS4xMTcgMjQuMTgwOCAyNC42NDg5IDI0LjY0ODlDMjQuMTgwOCAyNS4xMTcgMjMuNDIxOCAyNS4xMTcgMjIuOTUzNyAyNC42NDg5TDEyLjUgMTQuMTk1MkwyLjA0NjI4IDI0LjY0ODlDMS41NzgxNyAyNS4xMTcgMC44MTkyMDIgMjUuMTE3IDAuMzUxMDg3IDI0LjY0ODlDLTAuMTE3MDI5IDI0LjE4MDggLTAuMTE3MDI5IDIzLjQyMTggMC4zNTEwODcgMjIuOTUzN0wxMC44MDQ4IDEyLjVMMC4zNTEwODcgMi4wNDYyOEMtMC4xMTcwMjkgMS41NzgxNyAtMC4xMTcwMjkgMC44MTkyMDIgMC4zNTEwODcgMC4zNTEwODdDMC44MTkyMDIgLTAuMTE3MDI5IDEuNTc4MTcgLTAuMTE3MDI5IDIuMDQ2MjggMC4zNTEwODdMMTIuNSAxMC44MDQ4TDIyLjk1MzcgMC4zNTEwODdDMjMuNDIxOCAtMC4xMTcwMjkgMjQuMTgwOCAtMC4xMTcwMjkgMjQuNjQ4OSAwLjM1MTA4N1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="},280:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(1145);var r=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=function(t){for(var e=0,n=t;n>=1024&&++e;)n/=1024;return(n=parseFloat("".concat(n))).toFixed(n<10&&e>0?1:0)+" "+r[e]}},322:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(91),o=function(t){var e,n=(null===(e=(new r.a).config)||void 0===e?void 0:e.maxPdfSizeForPreview)||null;return!n||n>t/1024/1024}},338:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return h}));var r=n(356);n(21),n(28),n(69),n(49),n(25),n(58),n(27),n(11),n(56),n(59),n(196),n(31);function o(text){return text.charAt(0).toUpperCase()+text.slice(1)}function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var f;function d(t){var e,n=t.length,o=0,l=c(t.entries());try{for(l.s();!(e=l.n()).done;){var d=Object(r.a)(e.value,2),h=d[0],sub=d[1];if(!t[h+1])break;sub.data.end!==t[h+1].data.start&&o++}}catch(t){l.e(t)}finally{l.f()}return 0===o?f.Auto:o>0&&o<n-1?f.Edited:f.Professional}function h(t){var e,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=d(t);switch("string"==typeof(null===(e=t[0])||void 0===e?void 0:e.data)&&t.shift(),o){case f.Auto:n=M(t,r);break;case f.Edited:n=y(t);break;case f.Professional:n=N(t)}return{paragraphs:n,subtitlesGenerationType:o}}function M(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=null,l=[],f=[],d=c(t);try{for(d.s();!(e=d.n()).done;){var sub=e.value;r&&sub.data.start-r.data.start>1e3*n&&(r.data.end-=100,l&&f.push(l),l=[]),0===l.length&&sub.data.text&&(sub.data.text=o(sub.data.text)),l.push(sub),r=sub}}catch(t){d.e(t)}finally{d.f()}return l&&f.push(l),f}function y(t){var e,n=[],o=[],l=c(t.entries());try{for(l.s();!(e=l.n()).done;){var f=Object(r.a)(e.value,2),d=f[0],sub=f[1];0!==n.length?sub.data.start>t[d-1].data.end?(o.push(n),(n=[]).push(sub)):n.push(sub):n.push(sub)}}catch(t){l.e(t)}finally{l.f()}return n&&o.push(n),o}function N(t){var e,n=[],o=[],l=c(t.entries());try{for(l.s();!(e=l.n()).done;){var f=Object(r.a)(e.value,2),d=f[0],sub=f[1];if(0!==n.length){var h=t[d-1].data.end.toString();sub.data.start-+h>500||49==+h.substring(h.length-2)?(o.push(n),(n=[]).push(sub)):n.push(sub)}else n.push(sub)}}catch(t){l.e(t)}finally{l.f()}return n&&o.push(n),o}!function(t){t.Auto="auto",t.Edited="edited",t.Professional="professional"}(f||(f={}))},562:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={kalturaPlayer:{captions:{selectedTextTrack:"off"}},courses:{compactContinueLearning:!1,hideCompletedCourses:!1,closeInterestingCourses:!1}}},671:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMTUiIGZpbGw9IiNGNjNDNEUiLz4KPHBhdGggZD0iTTE5LjE5MiA5LjM0Mzc1TDE0Ljk0OSAxMy41ODU4TDEwLjcwNyA5LjM0Mzc1TDkuMjkyOTcgMTAuNzU3OEwxMy41MzUgMTQuOTk5OEw5LjI5Mjk3IDE5LjI0MThMMTAuNzA3IDIwLjY1NThMMTQuOTQ5IDE2LjQxMzdMMTkuMTkyIDIwLjY1NThMMjAuNjA2IDE5LjI0MThMMTYuMzY0IDE0Ljk5OThMMjAuNjA2IDEwLjc1NzhMMTkuMTkyIDkuMzQzNzVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},687:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return o})),function(t){t.srt="1",t.dfxp="2",t.vtt="3",t.cap="4",t.scc="5"}(r||(r={}));var o;r.srt,r.dfxp,r.vtt,r.scc;!function(t){t.En="en",t.Es="es",t.Pt="pt",t.Off="off"}(o||(o={}))},688:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(31),n(52),n(281),n(45),n(196),n(69),n(107);var r=function(){try{if(!window)return}catch(t){return}var t="first",e=document,n={}.hasOwnProperty;function r(){return o.apply(null,arguments)||c.apply(null,arguments)}function o(t,e,n,o,l){if(e&&!e.nodeType&&arguments.length<=2)return!1;var f,d="function"==typeof n;d&&(f=n,n=function(t,e){return f(t.text,e.startIndex)});var h=c(e,{find:t,wrap:d?null:n,replace:d?n:"$"+(o||"&"),prepMatch:function(t,e){if(!t[0])throw"findAndReplaceDOMText cannot handle zero-length matches";if(o>0){var n=t[o];t.index+=t[0].indexOf(n),t[0]=n}return t.endIndex=t.index+t[0].length,t.startIndex=t.index,t.index=e,t},filterElements:l});return r.revert=function(){return h.revert()},!0}function c(t,e){return new l(t,e)}function l(t,e){var o=e.preset&&r.PRESETS[e.preset];if(e.portionMode=e.portionMode||"retain",o)for(var i in o)n.call(o,i)&&!n.call(e,i)&&(e[i]=o[i]);this.node=t,this.options=e,this.prepMatch=e.prepMatch||this.prepMatch,this.reverts=[],this.matches=this.search(),this.matches.length&&this.processMatches()}return r.NON_PROSE_ELEMENTS={br:1,hr:1,script:1,style:1,img:1,video:1,audio:1,canvas:1,svg:1,map:1,object:1,input:1,textarea:1,select:1,option:1,optgroup:1,button:1},r.NON_CONTIGUOUS_PROSE_ELEMENTS={address:1,article:1,aside:1,blockquote:1,dd:1,div:1,dl:1,fieldset:1,figcaption:1,figure:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,hr:1,main:1,nav:1,noscript:1,ol:1,output:1,p:1,pre:1,section:1,ul:1,br:1,li:1,summary:1,dt:1,details:1,rp:1,rt:1,rtc:1,script:1,style:1,img:1,video:1,audio:1,canvas:1,svg:1,map:1,object:1,input:1,textarea:1,select:1,option:1,optgroup:1,button:1,table:1,tbody:1,thead:1,th:1,tr:1,td:1,caption:1,col:1,tfoot:1,colgroup:1},r.NON_INLINE_PROSE=function(t){return n.call(r.NON_CONTIGUOUS_PROSE_ELEMENTS,t.nodeName.toLowerCase())},r.PRESETS={prose:{forceContext:r.NON_INLINE_PROSE,filterElements:function(t){return!n.call(r.NON_PROSE_ELEMENTS,t.nodeName.toLowerCase())}}},r.Finder=l,l.prototype={search:function(){var t,e=0,n=0,r=this.options.find,o=this.getAggregateText(),c=[],l=this;return r="string"==typeof r?RegExp(String(r).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1"),"g"):r,function o(f){for(var i=0,d=f.length;i<d;++i){var text=f[i];if("string"==typeof text){if(r.global)for(;t=r.exec(text);)c.push(l.prepMatch(t,e++,n));else(t=text.match(r))&&c.push(l.prepMatch(t,0,n));n+=text.length}else o(text)}}(o),c},prepMatch:function(t,e,n){if(!t[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches");return t.endIndex=n+t.index+t[0].length,t.startIndex=n+t.index,t.index=e,t},getAggregateText:function(){var t=this.options.filterElements,e=this.options.forceContext;return function n(r){if(r.nodeType===Node.TEXT_NODE)return[r.data];if(t&&!t(r))return[];var o=[""],i=0;if(r=r.firstChild)do{if(r.nodeType!==Node.TEXT_NODE){var c=n(r);e&&r.nodeType===Node.ELEMENT_NODE&&(!0===e||e(r))?(o[++i]=c,o[++i]=""):("string"==typeof c[0]&&(o[i]+=c.shift()),c.length&&(o[++i]=c,o[++i]=""))}else o[i]+=r.data}while(r=r.nextSibling);return o}(this.node)},processMatches:function(){var t,e,n,r=this.matches,o=this.node,c=this.options.filterElements,l=[],f=o,d=r.shift(),h=0,M=0,y=[o];t:for(;;){if(f.nodeType===Node.TEXT_NODE&&(!e&&f.length+h>=d.endIndex?e={node:f,index:M++,text:f.data.substring(d.startIndex-h,d.endIndex-h),indexInMatch:0===h?0:h-d.startIndex,indexInNode:d.startIndex-h,endIndexInNode:d.endIndex-h,isEnd:!0}:t&&l.push({node:f,index:M++,text:f.data,indexInMatch:h-d.startIndex,indexInNode:0}),!t&&f.length+h>d.startIndex&&(t={node:f,index:M++,indexInMatch:0,indexInNode:d.startIndex-h,endIndexInNode:d.endIndex-h,text:f.data.substring(d.startIndex-h,d.endIndex-h)}),h+=f.data.length),n=f.nodeType===Node.ELEMENT_NODE&&c&&!c(f),t&&e){if(f=this.replaceMatch(d,t,l,e),h-=e.node.data.length-e.endIndexInNode,t=null,e=null,l=[],M=0,!(d=r.shift()))break}else if(!n&&(f.firstChild||f.nextSibling)){f.firstChild?(y.push(f),f=f.firstChild):f=f.nextSibling;continue}for(;;){if(f.nextSibling){f=f.nextSibling;break}if((f=y.pop())===o)break t}}},revert:function(){for(var t=this.reverts.length;t--;)this.reverts[t]();this.reverts=[]},prepareReplacementString:function(e,n,r){var o=this.options.portionMode;return o===t&&n.indexInMatch>0?"":(e=e.replace(/\$(\d+|&|`|')/g,(function(t,e){var n;switch(e){case"&":n=r[0];break;case"`":n=r.input.substring(0,r.startIndex);break;case"'":n=r.input.substring(r.endIndex);break;default:n=r[+e]||""}return n})),o===t?e:n.isEnd?e.substring(n.indexInMatch):e.substring(n.indexInMatch,n.indexInMatch+n.text.length))},getPortionReplacementNode:function(t,n){var r=this.options.replace||"$&",o=this.options.wrap,c=this.options.wrapClass;if(o&&o.nodeType){var l=e.createElement("div");l.innerHTML=o.outerHTML||(new XMLSerializer).serializeToString(o),o=l.firstChild}if("function"==typeof r)return(r=r(t,n))&&r.nodeType?r:e.createTextNode(String(r));var f="string"==typeof o?e.createElement(o):o;return f&&c&&(f.className=c),(r=e.createTextNode(this.prepareReplacementString(r,t,n))).data&&f?(f.appendChild(r),f):r},replaceMatch:function(t,n,r,o){var c,l,f=n.node,d=o.node;if(f===d){var h=f;n.indexInNode>0&&(c=e.createTextNode(h.data.substring(0,n.indexInNode)),h.parentNode.insertBefore(c,h));var M=this.getPortionReplacementNode(o,t);return h.parentNode.insertBefore(M,h),o.endIndexInNode<h.length&&(l=e.createTextNode(h.data.substring(o.endIndexInNode)),h.parentNode.insertBefore(l,h)),h.parentNode.removeChild(h),this.reverts.push((function(){c===M.previousSibling&&c.parentNode.removeChild(c),l===M.nextSibling&&l.parentNode.removeChild(l),M.parentNode.replaceChild(h,M)})),M}c=e.createTextNode(f.data.substring(0,n.indexInNode)),l=e.createTextNode(d.data.substring(o.endIndexInNode));for(var y=this.getPortionReplacementNode(n,t),N=[],i=0,I=r.length;i<I;++i){var v=r[i],x=this.getPortionReplacementNode(v,t);v.node.parentNode.replaceChild(x,v.node),this.reverts.push(function(t,e){return function(){e.parentNode.replaceChild(t.node,e)}}(v,x)),N.push(x)}var j=this.getPortionReplacementNode(o,t);return f.parentNode.insertBefore(c,f),f.parentNode.insertBefore(y,f),f.parentNode.removeChild(f),d.parentNode.insertBefore(j,d),d.parentNode.insertBefore(l,d),d.parentNode.removeChild(d),this.reverts.push((function(){c.parentNode.removeChild(c),y.parentNode.replaceChild(f,y),l.parentNode.removeChild(l),j.parentNode.replaceChild(d,j)})),j}},r}()}}]);