(self["webpackChunkbodega_moi"]=self["webpackChunkbodega_moi"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),i=n(6330),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,u=r(t),l=s(u),c=i(o,l);if(e&&n!=n){while(l>c)if(a=u[c++],a!=a)return!0}else for(;l>c;c++)if((e||c in u)&&u[c]===n)return e||c||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),u=Object,l="Arguments"==s(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=c(t=u(e),a))?n:l?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),u=o.f,l=s.f,c=0;c<a.length;c++){var d=a[c];r(e,d)||n&&r(n,d)||u(e,d,l(t,d))}}},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var u=a.enumerable,l=void 0!==a.name?a.name:t;if(r(n)&&s(n,l,a),a.global)u?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(u=!0):delete e[t]}catch(c){}u?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,u=s.Deno,l=a&&a.versions||u&&u.version,c=l&&l.v8;c&&(r=c.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,s=r("".replace),o=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,u=a.test(o);e.exports=function(e,t){if(u&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),u=n(9920),l=n(4705);e.exports=function(e,t){var n,c,d,h,f,p,m=e.target,g=e.global,v=e.stat;if(c=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,c)for(d in t){if(f=t[d],e.dontCallGetSet?(p=i(c,d),h=p&&p.value):h=c[d],n=l(g?d:m+(v?".":"#")+d,e.forced),!n&&void 0!==h){if(typeof f==typeof h)continue;u(f,h)}(e.sham||h&&h.sham)&&s(f,"sham",!0),o(c,d,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),u=a&&"something"===function(){}.name,l=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:u,CONFIGURABLE:l}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},9587:function(e,t,n){var r=n(614),i=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},9909:function(e,t,n){var r,i,s,o=n(4811),a=n(7854),u=n(111),l=n(8880),c=n(2597),d=n(5465),h=n(6200),f=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(e){return s(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var b=d.state||(d.state=new g);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw m(p);return t.facade=e,b.set(e,t),t},i=function(e){return b.get(e)||{}},s=function(e){return b.has(e)}}else{var w=h("state");f[w]=!0,r=function(e,t){if(c(e,w))throw m(p);return t.facade=e,l(e,w,t),t},i=function(e){return c(e,w)?e[w]:{}},s=function(e){return c(e,w)}}e.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=u[a(e)];return n==c||n!=l&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},u=o.data={},l=o.NATIVE="N",c=o.POLYFILL="P";e.exports=o},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),i=n(614),s=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),c=l.enforce,d=l.get,h=Object.defineProperty,f=o&&!r((function(){return 8!==h((function(){}),"length",{value:8}).length})),p=String(String).split("String"),m=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||a&&e.name!==t)&&(o?h(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&s(n,"arity")&&e.length!==n.arity&&h(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?o&&h(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=c(e);return s(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return i(this)&&d(this).source||u(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),u=TypeError,l=Object.defineProperty,c=Object.getOwnPropertyDescriptor,d="enumerable",h="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=c(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:d in n?n[d]:r[d],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),u=n(4948),l=n(2597),c=n(4664),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=u(t),c)try{return d(e,t)}catch(n){}if(l(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),u=r([].push);e.exports=function(e,t){var n,r=s(e),l=0,c=[];for(n in r)!i(a,n)&&i(r,n)&&u(c,n);while(t.length>l)i(r,n=t[l++])&&(~o(c,n)||u(c,n));return c}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),u=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?u(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.27.0",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),u=n(5112),l=TypeError,c=u("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,u=o(e,c);if(u){if(void 0===t&&(t="default"),n=r(u,e,t),!i(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),i=n(614),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),u=n(3307),l=i("wks"),c=r.Symbol,d=c&&c["for"],h=u?c:c&&c.withoutSetter||o;e.exports=function(e){if(!s(l,e)||!a&&"string"!=typeof l[e]){var t="Symbol."+e;a&&s(c,e)?l[e]=c[e]:l[e]=u&&d?d(t):h(t)}return l[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),u=n(7293),l=u((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:l||c},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var u=0;u<r;u++)t[n]=arguments[u],n++;return o(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(5117),u=n(7207),l=1!==[].unshift(0),c=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:l||c},{unshift:function(e){var t=i(this),n=s(t),r=arguments.length;if(r){u(n+r);var l=n;while(l--){var c=l+r;l in t?t[c]=t[l]:a(t,c)}for(var d=0;d<r;d++)t[d]=arguments[d]}return o(t,n+r)}})},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,u=n(2597),l=n(5787),c=n(9587),d=n(6277),h=n(3678),f=n(1060),p=n(9781),m=n(1913),g="DOMException",v=s("Error"),y=s(g),b=function(){l(this,w);var e=arguments.length,t=d(e<1?void 0:arguments[0]),n=d(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=v(t);return i.name=g,a(r,"stack",o(1,f(i.stack,1))),c(r,this,b),r},w=b.prototype=y.prototype,_="stack"in v(g),I="stack"in new y(1,2),S=y&&p&&Object.getOwnPropertyDescriptor(i,g),E=!!S&&!(S.writable&&S.configurable),T=_&&!E&&!I;r({global:!0,constructor:!0,forced:m||T},{DOMException:T?b:y});var k=s(g),x=k.prototype;if(x.constructor!==k)for(var C in m||a(x,"constructor",o(1,k)),h)if(u(h,C)){var A=h[C],N=A.s;u(k,N)||a(k,N,o(6,A.c))}},9773:function(){},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return C},G6:function(){return y},L:function(){return a},LL:function(){return O},Pz:function(){return x},Sg:function(){return A},UG:function(){return f},ZB:function(){return l},ZR:function(){return D},aH:function(){return k},b$:function(){return g},eu:function(){return w},hl:function(){return b},jU:function(){return p},m9:function(){return H},ne:function(){return $},pd:function(){return j},r3:function(){return L},ru:function(){return m},tV:function(){return u},uI:function(){return h},vZ:function(){return M},w1:function(){return v},xO:function(){return V},xb:function(){return F},z$:function(){return d},zd:function(){return B}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],u=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(1023&u))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,u=a?e[i+2]:0,l=t>>2,c=(3&t)<<4|o>>4;let d=(15&o)<<2|u>>6,h=63&u;a||(h=64,s||(d=64)),r.push(n[l],n[c],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,u=a?n[e.charAt(i)]:64;++i;const l=i<e.length,c=l?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==u||null==c)throw Error();const d=t<<2|o>>4;if(r.push(d),64!==u){const e=o<<4&240|u>>2;if(r.push(e),64!==c){const e=u<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&c(n)&&(e[n]=l(e[n],t[n]));return e}function c(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d())}function f(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function p(){return"object"===typeof self&&self.self===self}function m(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function g(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function v(){const e=d();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function y(){return!f()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function b(){try{return"object"===typeof indexedDB}catch(e){return!1}}function w(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function _(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=()=>_().__FIREBASE_DEFAULTS__,S=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},E=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},T=()=>{try{return I()||S()||E()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},k=()=>{var e;return null===(e=T())||void 0===e?void 0:e.config},x=e=>{var t;return null===(t=T())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),u="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),u].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N="FirebaseError";class D extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=N,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?R(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new D(r,o,n);return a}}function R(e,t){return e.replace(P,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const P=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function F(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function M(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(U(n)&&U(s)){if(!M(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function U(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function B(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function j(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){const n=new q(e,t);return n.subscribe.bind(n)}class q{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=W(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=z),void 0===r.error&&(r.error=z),void 0===r.complete&&(r.complete=z);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function W(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){"use strict";n.d(t,{B:function(){return o},BK:function(){return We},Bj:function(){return s},EB:function(){return u},Fl:function(){return Ye},IU:function(){return Ne},Jd:function(){return T},OT:function(){return Ee},PG:function(){return ke},SU:function(){return je},Um:function(){return Se},Vh:function(){return He},WL:function(){return qe},X$:function(){return A},X3:function(){return Ae},XI:function(){return Ue},Xl:function(){return De},dq:function(){return Fe},iH:function(){return Me},j:function(){return x},lk:function(){return k},qj:function(){return Ie},qq:function(){return _},yT:function(){return Ce}});n(7658);var r=n(7139);let i;class s{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this.active=!1}}}function o(e){return new s(e)}function a(e,t=i){t&&t.active&&t.effects.push(e)}function u(e){i&&i.cleanups.push(e)}const l=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&g)>0,d=e=>(e.n&g)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=g},f=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!d(i)?i.delete(e):t[n++]=i,i.w&=~g,i.n&=~g}t.length=n}},p=new WeakMap;let m=0,g=1;const v=30;let y;const b=Symbol(""),w=Symbol("");class _{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=y,t=S;while(e){if(e===this)return;e=e.parent}try{return this.parent=y,y=this,S=!0,g=1<<++m,m<=v?h(this):I(this),this.fn()}finally{m<=v&&f(this),g=1<<--m,y=this.parent,S=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(I(this),this.onStop&&this.onStop(),this.active=!1)}}function I(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let S=!0;const E=[];function T(){E.push(S),S=!1}function k(){const e=E.pop();S=void 0===e||e}function x(e,t,n){if(S&&y){let t=p.get(e);t||p.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=l());const i=void 0;C(r,i)}}function C(e,t){let n=!1;m<=v?d(e)||(e.n|=g,n=!c(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function A(e,t,n,i,s,o){const a=p.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=(0,r.He)(i);a.forEach(((t,n)=>{("length"===n||n>=e)&&u.push(t)}))}else switch(void 0!==n&&u.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(a.get("length")):(u.push(a.get(b)),(0,r._N)(e)&&u.push(a.get(w)));break;case"delete":(0,r.kJ)(e)||(u.push(a.get(b)),(0,r._N)(e)&&u.push(a.get(w)));break;case"set":(0,r._N)(e)&&u.push(a.get(b));break}if(1===u.length)u[0]&&N(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);N(l(e))}}function N(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&D(r,t);for(const r of n)r.computed||D(r,t)}function D(e,t){(e!==y||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const O=(0,r.fY)("__proto__,__v_isRef,__isVue"),R=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),P=V(),L=V(!1,!0),F=V(!0),M=U();function U(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ne(this);for(let t=0,i=this.length;t<i;t++)x(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ne)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){T();const n=Ne(this)[t].apply(this,e);return k(),n}})),e}function V(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?be:ye:t?ve:ge).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(M,i))return Reflect.get(M,i,s);const a=Reflect.get(n,i,s);return((0,r.yk)(i)?R.has(i):O(i))?a:(e||x(n,"get",i),t?a:Fe(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Ee(a):Ie(a):a)}}const B=$(),j=$(!0);function $(e=!1){return function(t,n,i,s){let o=t[n];if(xe(o)&&Fe(o)&&!Fe(i))return!1;if(!e&&(Ce(i)||xe(i)||(o=Ne(o),i=Ne(i)),!(0,r.kJ)(t)&&Fe(o)&&!Fe(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),u=Reflect.set(t,n,i,s);return t===Ne(s)&&(a?(0,r.aU)(i,o)&&A(t,"set",n,i,o):A(t,"add",n,i)),u}}function q(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&A(e,"delete",t,void 0,i),s}function W(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&R.has(t)||x(e,"has",t),n}function z(e){return x(e,"iterate",(0,r.kJ)(e)?"length":b),Reflect.ownKeys(e)}const H={get:P,set:B,deleteProperty:q,has:W,ownKeys:z},G={get:F,set(e,t){return!0},deleteProperty(e,t){return!0}},K=(0,r.l7)({},H,{get:L,set:j}),Y=e=>e,Q=e=>Reflect.getPrototypeOf(e);function J(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ne(e),s=Ne(t);n||(t!==s&&x(i,"get",t),x(i,"get",s));const{has:o}=Q(i),a=r?Y:n?Re:Oe;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function X(e,t=!1){const n=this["__v_raw"],r=Ne(n),i=Ne(e);return t||(e!==i&&x(r,"has",e),x(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Z(e,t=!1){return e=e["__v_raw"],!t&&x(Ne(e),"iterate",b),Reflect.get(e,"size",e)}function ee(e){e=Ne(e);const t=Ne(this),n=Q(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function te(e,t){t=Ne(t);const n=Ne(this),{has:i,get:s}=Q(n);let o=i.call(n,e);o||(e=Ne(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function ne(e){const t=Ne(this),{has:n,get:r}=Q(t);let i=n.call(t,e);i||(e=Ne(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&A(t,"delete",e,void 0,s),o}function re(){const e=Ne(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function ie(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ne(s),a=t?Y:e?Re:Oe;return!e&&x(o,"iterate",b),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function se(e,t,n){return function(...i){const s=this["__v_raw"],o=Ne(s),a=(0,r._N)(o),u="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,c=s[e](...i),d=n?Y:t?Re:Oe;return!t&&x(o,"iterate",l?w:b),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:u?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function oe(e){return function(...t){return"delete"!==e&&this}}function ae(){const e={get(e){return J(this,e)},get size(){return Z(this)},has:X,add:ee,set:te,delete:ne,clear:re,forEach:ie(!1,!1)},t={get(e){return J(this,e,!1,!0)},get size(){return Z(this)},has:X,add:ee,set:te,delete:ne,clear:re,forEach:ie(!1,!0)},n={get(e){return J(this,e,!0)},get size(){return Z(this,!0)},has(e){return X.call(this,e,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:ie(!0,!1)},r={get(e){return J(this,e,!0,!0)},get size(){return Z(this,!0)},has(e){return X.call(this,e,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:ie(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=se(i,!1,!1),n[i]=se(i,!0,!1),t[i]=se(i,!1,!0),r[i]=se(i,!0,!0)})),[e,n,t,r]}const[ue,le,ce,de]=ae();function he(e,t){const n=t?e?de:ce:e?le:ue;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const fe={get:he(!1,!1)},pe={get:he(!1,!0)},me={get:he(!0,!1)};const ge=new WeakMap,ve=new WeakMap,ye=new WeakMap,be=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _e(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we((0,r.W7)(e))}function Ie(e){return xe(e)?e:Te(e,!1,H,fe,ge)}function Se(e){return Te(e,!1,K,pe,ve)}function Ee(e){return Te(e,!0,G,me,ye)}function Te(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=_e(e);if(0===a)return e;const u=new Proxy(e,2===a?i:n);return s.set(e,u),u}function ke(e){return xe(e)?ke(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function xe(e){return!(!e||!e["__v_isReadonly"])}function Ce(e){return!(!e||!e["__v_isShallow"])}function Ae(e){return ke(e)||xe(e)}function Ne(e){const t=e&&e["__v_raw"];return t?Ne(t):e}function De(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Oe=e=>(0,r.Kn)(e)?Ie(e):e,Re=e=>(0,r.Kn)(e)?Ee(e):e;function Pe(e){S&&y&&(e=Ne(e),C(e.dep||(e.dep=l())))}function Le(e,t){e=Ne(e),e.dep&&N(e.dep)}function Fe(e){return!(!e||!0!==e.__v_isRef)}function Me(e){return Ve(e,!1)}function Ue(e){return Ve(e,!0)}function Ve(e,t){return Fe(e)?e:new Be(e,t)}class Be{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ne(e),this._value=t?e:Oe(e)}get value(){return Pe(this),this._value}set value(e){const t=this.__v_isShallow||Ce(e)||xe(e);e=t?e:Ne(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Oe(e),Le(this,e))}}function je(e){return Fe(e)?e.value:e}const $e={get:(e,t,n)=>je(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Fe(i)&&!Fe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function qe(e){return ke(e)?e:new Proxy(e,$e)}function We(e){const t=(0,r.kJ)(e)?new Array(e.length):{};for(const n in e)t[n]=He(e,n);return t}class ze{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}}function He(e,t,n){const r=e[t];return Fe(r)?r:new ze(e,t,n)}var Ge;class Ke{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Ge]=!1,this._dirty=!0,this.effect=new _(e,(()=>{this._dirty||(this._dirty=!0,Le(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ne(this);return Pe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ye(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new Ke(i,s,o||!s,n);return a}Ge="__v_isReadonly"},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return a},Ah:function(){return Ne},Cn:function(){return M},F4:function(){return vn},FN:function(){return Nn},Fl:function(){return Hn},HY:function(){return Yt},Ho:function(){return yn},JJ:function(){return G},Jd:function(){return Ae},Ko:function(){return We},LL:function(){return Be},Nv:function(){return ze},P$:function(){return oe},Q2:function(){return je},Q6:function(){return he},Rh:function(){return Q},Rr:function(){return Gn},U2:function(){return ue},Uk:function(){return bn},Us:function(){return Lt},WI:function(){return He},Wm:function(){return mn},Y3:function(){return b},Y8:function(){return re},YP:function(){return X},ZK:function(){return s},_:function(){return pn},aZ:function(){return fe},bv:function(){return ke},dD:function(){return F},dG:function(){return En},f3:function(){return K},h:function(){return Yn},iD:function(){return an},ic:function(){return Ce},j4:function(){return un},kq:function(){return wn},lR:function(){return Gt},m0:function(){return Y},mx:function(){return Ke},nK:function(){return de},qG:function(){return Xt},w5:function(){return U},wF:function(){return Te},wg:function(){return tn},wy:function(){return Le}});n(7658),n(541);var r=n(4870),i=n(7139);function s(e,...t){}function o(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){u(s,t,n)}return i}function a(e,t,n,r){if((0,i.mf)(e)){const s=o(e,t,n,r);return s&&(0,i.tI)(s)&&s.catch((e=>{u(e,t,n)})),s}const s=[];for(let i=0;i<e.length;i++)s.push(a(e[i],t,n,r));return s}function u(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void o(a,null,10,[e,i,s])}l(e,n,i,r)}function l(e,t,n,r=!0){console.error(e)}let c=!1,d=!1;const h=[];let f=0;const p=[];let m=null,g=0;const v=Promise.resolve();let y=null;function b(e){const t=y||v;return e?t.then(this?e.bind(this):e):t}function w(e){let t=f+1,n=h.length;while(t<n){const r=t+n>>>1,i=x(h[r]);i<e?t=r+1:n=r}return t}function _(e){h.length&&h.includes(e,c&&e.allowRecurse?f+1:f)||(null==e.id?h.push(e):h.splice(w(e.id),0,e),I())}function I(){c||d||(d=!0,y=v.then(A))}function S(e){const t=h.indexOf(e);t>f&&h.splice(t,1)}function E(e){(0,i.kJ)(e)?p.push(...e):m&&m.includes(e,e.allowRecurse?g+1:g)||p.push(e),I()}function T(e,t=(c?f+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function k(e){if(p.length){const e=[...new Set(p)];if(p.length=0,m)return void m.push(...e);for(m=e,m.sort(((e,t)=>x(e)-x(t))),g=0;g<m.length;g++)m[g]();m=null,g=0}}const x=e=>null==e.id?1/0:e.id,C=(e,t)=>{const n=x(e)-x(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function A(e){d=!1,c=!0,h.sort(C);i.dG;try{for(f=0;f<h.length;f++){const e=h[f];e&&!1!==e.active&&o(e,null,14)}}finally{f=0,h.length=0,k(e),c=!1,y=null,(h.length||p.length)&&A(e)}}new Set;new Map;function N(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const o=t.startsWith("update:"),u=o&&t.slice(7);if(u&&u in r){const e=`${"modelValue"===u?"model":u}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>(0,i.HD)(e)?e.trim():e))),t&&(s=n.map(i.He))}let l;let c=r[l=(0,i.hR)(t)]||r[l=(0,i.hR)((0,i._A)(t))];!c&&o&&(c=r[l=(0,i.hR)((0,i.rs)(t))]),c&&a(c,e,6,s);const d=r[l+"Once"];if(d){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,a(d,e,6,s)}}function D(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},u=!1;if(!(0,i.mf)(e)){const r=e=>{const n=D(e,t,!0);n&&(u=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||u?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function O(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let R=null,P=null;function L(e){const t=R;return R=e,P=e&&e.type.__scopeId||null,t}function F(e){P=e}function M(){P=null}function U(e,t=R,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&sn(-1);const i=L(t);let s;try{s=e(...n)}finally{L(i),r._d&&sn(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function V(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[a],slots:l,attrs:c,emit:d,render:h,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:v}=e;let y,b;const w=L(e);try{if(4&n.shapeFlag){const e=s||r;y=_n(h.call(e,e,f,o,m,p,g)),b=c}else{const e=t;0,y=_n(e.length>1?e(o,{attrs:c,slots:l,emit:d}):e(o,null)),b=t.props?c:B(c)}}catch(I){Zt.length=0,u(I,e,1),y=mn(Jt)}let _=y;if(b&&!1!==v){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(a&&e.some(i.tR)&&(b=j(b,a)),_=yn(_,b))}return n.dirs&&(_=yn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),y=_,L(w),y}const B=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},j=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function $(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:u}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&u>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||q(r,o,l):!!o);if(1024&u)return!0;if(16&u)return r?q(r,o,l):!!o;if(8&u){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!O(l,n))return!0}}return!1}function q(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!O(n,s))return!0}return!1}function W({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const z=e=>e.__isSuspense;function H(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):E(e)}function G(e,t){if(An){let n=An.provides;const r=An.parent&&An.parent.provides;r===n&&(n=An.provides=Object.create(r)),n[e]=t}else 0}function K(e,t,n=!1){const r=An||R;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}function Y(e,t){return Z(e,null,t)}function Q(e,t){return Z(e,null,{flush:"post"})}const J={};function X(e,t,n){return Z(e,t,n)}function Z(e,t,{immediate:n,deep:s,flush:u,onTrack:l,onTrigger:c}=i.kT){const d=An;let h,f,p=!1,m=!1;if((0,r.dq)(e)?(h=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(h=()=>e,s=!0):(0,i.kJ)(e)?(m=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),h=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?ne(e):(0,i.mf)(e)?o(e,d,2):void 0))):h=(0,i.mf)(e)?t?()=>o(e,d,2):()=>{if(!d||!d.isUnmounted)return f&&f(),a(e,d,3,[v])}:i.dG,t&&s){const e=h;h=()=>ne(e())}let g,v=e=>{f=I.onStop=()=>{o(e,d,4)}};if(Fn){if(v=i.dG,t?n&&a(t,d,3,[h(),m?[]:void 0,v]):h(),"sync"!==u)return i.dG;{const e=Jn();g=e.__watcherHandles||(e.__watcherHandles=[])}}let y=m?new Array(e.length).fill(J):J;const b=()=>{if(I.active)if(t){const e=I.run();(s||p||(m?e.some(((e,t)=>(0,i.aU)(e,y[t]))):(0,i.aU)(e,y)))&&(f&&f(),a(t,d,3,[e,y===J?void 0:m&&y[0]===J?[]:y,v]),y=e)}else I.run()};let w;b.allowRecurse=!!t,"sync"===u?w=b:"post"===u?w=()=>Pt(b,d&&d.suspense):(b.pre=!0,d&&(b.id=d.uid),w=()=>_(b));const I=new r.qq(h,w);t?n?b():y=I.run():"post"===u?Pt(I.run.bind(I),d&&d.suspense):I.run();const S=()=>{I.stop(),d&&d.scope&&(0,i.Od)(d.scope.effects,I)};return g&&g.push(S),S}function ee(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?te(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=An;Dn(this);const u=Z(s,o.bind(r),n);return a?Dn(a):On(),u}function te(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ne(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))ne(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)ne(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{ne(e,t)}));else if((0,i.PO)(e))for(const n in e)ne(e[n],t);return e}function re(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ke((()=>{e.isMounted=!0})),Ae((()=>{e.isUnmounting=!0})),e}const ie=[Function,Array],se={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ie,onEnter:ie,onAfterEnter:ie,onEnterCancelled:ie,onBeforeLeave:ie,onLeave:ie,onAfterLeave:ie,onLeaveCancelled:ie,onBeforeAppear:ie,onAppear:ie,onAfterAppear:ie,onAppearCancelled:ie},setup(e,{slots:t}){const n=Nn(),i=re();let s;return()=>{const o=t.default&&he(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Jt){0,a=t,e=!0;break}}const u=(0,r.IU)(e),{mode:l}=u;if(i.isLeaving)return le(a);const c=ce(a);if(!c)return le(a);const d=ue(c,u,i,n);de(c,d);const h=n.subTree,f=h&&ce(h);let p=!1;const{getTransitionKey:m}=c.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Jt&&(!cn(c,f)||p)){const e=ue(f,u,i,n);if(de(f,e),"out-in"===l)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},le(a);"in-out"===l&&c.type!==Jt&&(e.delayLeave=(e,t,n)=>{const r=ae(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=n})}return a}}},oe=se;function ae(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ue(e,t,n,r){const{appear:s,mode:o,persisted:u=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:d,onEnterCancelled:h,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:b,onAppearCancelled:w}=t,_=String(e.key),I=ae(n,e),S=(e,t)=>{e&&a(e,r,9,t)},E=(e,t)=>{const n=t[1];S(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},T={mode:o,persisted:u,beforeEnter(t){let r=l;if(!n.isMounted){if(!s)return;r=v||l}t._leaveCb&&t._leaveCb(!0);const i=I[_];i&&cn(e,i)&&i.el._leaveCb&&i.el._leaveCb(),S(r,[t])},enter(e){let t=c,r=d,i=h;if(!n.isMounted){if(!s)return;t=y||c,r=b||d,i=w||h}let o=!1;const a=e._enterCb=t=>{o||(o=!0,S(t?i:r,[e]),T.delayedLeave&&T.delayedLeave(),e._enterCb=void 0)};t?E(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();S(f,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),S(n?g:m,[t]),t._leaveCb=void 0,I[i]===e&&delete I[i])};I[i]=e,p?E(p,[t,o]):o()},clone(e){return ue(e,t,n,r)}};return T}function le(e){if(me(e))return e=yn(e),e.children=null,e}function ce(e){return me(e)?e.children?e.children[0]:void 0:e}function de(e,t){6&e.shapeFlag&&e.component?de(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function he(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Yt?(128&o.patchFlag&&i++,r=r.concat(he(o.children,t,a))):(t||o.type!==Jt)&&r.push(null!=a?yn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function fe(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const pe=e=>!!e.type.__asyncLoader;const me=e=>e.type.__isKeepAlive;RegExp,RegExp;function ge(e,t){return(0,i.kJ)(e)?e.some((e=>ge(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function ve(e,t){be(e,"a",t)}function ye(e,t){be(e,"da",t)}function be(e,t,n=An){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Se(t,r,n),n){let e=n.parent;while(e&&e.parent)me(e.parent.vnode)&&we(r,t,n,e),e=e.parent}}function we(e,t,n,r){const s=Se(t,e,r,!0);Ne((()=>{(0,i.Od)(r[t],s)}),n)}function _e(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ie(e){return 128&e.shapeFlag?e.ssContent:e}function Se(e,t,n=An,i=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),Dn(n);const s=a(t,n,e,i);return On(),(0,r.lk)(),s});return i?s.unshift(o):s.push(o),o}}const Ee=e=>(t,n=An)=>(!Fn||"sp"===e)&&Se(e,((...e)=>t(...e)),n),Te=Ee("bm"),ke=Ee("m"),xe=Ee("bu"),Ce=Ee("u"),Ae=Ee("bum"),Ne=Ee("um"),De=Ee("sp"),Oe=Ee("rtg"),Re=Ee("rtc");function Pe(e,t=An){Se("ec",e,t)}function Le(e,t){const n=R;if(null===n)return e;const r=qn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,u=i.kT]=t[o];e&&((0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&ne(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:u}))}return e}function Fe(e,t,n,i){const s=e.dirs,o=t&&t.dirs;for(let u=0;u<s.length;u++){const l=s[u];o&&(l.oldValue=o[u].value);let c=l.dir[i];c&&((0,r.Jd)(),a(c,n,8,[e.el,l,e,t]),(0,r.lk)())}}const Me="components",Ue="directives";const Ve=Symbol();function Be(e){return(0,i.HD)(e)?$e(Me,e,!1)||e:e||Ve}function je(e){return $e(Ue,e)}function $e(e,t,n=!0,r=!1){const s=R||An;if(s){const n=s.type;if(e===Me){const e=Wn(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=qe(s[e]||n[e],t)||qe(s.appContext[e],t);return!o&&r?n:o}}function qe(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function We(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function ze(e,t){for(let n=0;n<t.length;n++){const r=t[n];if((0,i.kJ)(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.key?(...e)=>{const t=r.fn(...e);return t&&(t.key=r.key),t}:r.fn)}return e}function He(e,t,n={},r,i){if(R.isCE||R.parent&&pe(R.parent)&&R.parent.isCE)return"default"!==t&&(n.name=t),mn("slot",n,r&&r());let s=e[t];s&&s._c&&(s._d=!1),tn();const o=s&&Ge(s(n)),a=un(Yt,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Ge(e){return e.some((e=>!ln(e)||e.type!==Jt&&!(e.type===Yt&&!Ge(e.children))))?e:null}function Ke(e,t){const n={};for(const r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:(0,i.hR)(r)]=e[r];return n}const Ye=e=>e?Rn(e)?qn(e)||e.proxy:Ye(e.parent):null,Qe=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ye(e.parent),$root:e=>Ye(e.root),$emit:e=>e.emit,$options:e=>it(e),$forceUpdate:e=>e.f||(e.f=()=>_(e.update)),$nextTick:e=>e.n||(e.n=b.bind(e.proxy)),$watch:e=>ee.bind(e)}),Je=(e,t)=>e!==i.kT&&!e.__isScriptSetup&&(0,i.RI)(e,t),Xe={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:u,type:l,appContext:c}=e;let d;if("$"!==t[0]){const r=u[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Je(s,t))return u[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return u[t]=2,o[t];if((d=e.propsOptions[0])&&(0,i.RI)(d,t))return u[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return u[t]=4,n[t];Ze&&(u[t]=0)}}const h=Qe[t];let f,p;return h?("$attrs"===t&&(0,r.j)(e,"get",t),h(e)):(f=l.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(u[t]=4,n[t]):(p=c.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Je(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let u;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||Je(t,a)||(u=o[0])&&(0,i.RI)(u,a)||(0,i.RI)(r,a)||(0,i.RI)(Qe,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ze=!0;function et(e){const t=it(e),n=e.proxy,s=e.ctx;Ze=!1,t.beforeCreate&&nt(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:u,watch:l,provide:c,inject:d,created:h,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:w,destroyed:_,unmounted:I,render:S,renderTracked:E,renderTriggered:T,errorCaptured:k,serverPrefetch:x,expose:C,inheritAttrs:A,components:N,directives:D,filters:O}=t,R=null;if(d&&tt(d,s,R,e.appContext.config.unwrapInjectedRef),u)for(const r in u){const e=u[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Ze=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,u=Hn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>u.value,set:e=>u.value=e})}if(l)for(const r in l)rt(l[r],s,n,r);if(c){const e=(0,i.mf)(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{G(t,e[t])}))}function P(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(h&&nt(h,e,"c"),P(Te,f),P(ke,p),P(xe,m),P(Ce,g),P(ve,v),P(ye,y),P(Pe,k),P(Re,E),P(Oe,T),P(Ae,w),P(Ne,I),P(De,x),(0,i.kJ)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});S&&e.render===i.dG&&(e.render=S),null!=A&&(e.inheritAttrs=A),N&&(e.components=N),D&&(e.directives=D)}function tt(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=lt(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?K(n.from||o,n.default,!0):K(n.from||o):K(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function nt(e,t,n){a((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function rt(e,t,n,r){const s=r.includes(".")?te(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&X(s,n)}else if((0,i.mf)(e))X(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>rt(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&X(s,r,e)}else 0}function it(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,u=o.get(t);let l;return u?l=u:s.length||n||r?(l={},s.length&&s.forEach((e=>st(l,e,a,!0))),st(l,t,a)):l=t,(0,i.Kn)(t)&&o.set(t,l),l}function st(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&st(e,s,n,!0),i&&i.forEach((t=>st(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=ot[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const ot={data:at,props:dt,emits:dt,methods:dt,computed:dt,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:dt,directives:dt,watch:ht,provide:at,inject:ut};function at(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function ut(e,t){return dt(lt(e),lt(t))}function lt(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ct(e,t){return e?[...new Set([].concat(e,t))]:t}function dt(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function ht(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=ct(e[r],t[r]);return n}function ft(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,dn,1),e.propsDefaults=Object.create(null),mt(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function pt(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:u}}=e,l=(0,r.IU)(o),[c]=e.propsOptions;let d=!1;if(!(s||u>0)||16&u){let r;mt(e,t,o,a)&&(d=!0);for(const s in l)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(c?!n||void 0===n[s]&&void 0===n[r]||(o[s]=gt(c,l,s,void 0,e,!0)):delete o[s]);if(a!==l)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],d=!0)}else if(8&u){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(O(e.emitsOptions,s))continue;const u=t[s];if(c)if((0,i.RI)(a,s))u!==a[s]&&(a[s]=u,d=!0);else{const t=(0,i._A)(s);o[t]=gt(c,l,t,u,e,!1)}else u!==a[s]&&(a[s]=u,d=!0)}}d&&(0,r.X$)(e,"set","$attrs")}function mt(e,t,n,s){const[o,a]=e.propsOptions;let u,l=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const c=t[r];let d;o&&(0,i.RI)(o,d=(0,i._A)(r))?a&&a.includes(d)?(u||(u={}))[d]=c:n[d]=c:O(e.emitsOptions,r)||r in s&&c===s[r]||(s[r]=c,l=!0)}if(a){const t=(0,r.IU)(n),s=u||i.kT;for(let r=0;r<a.length;r++){const u=a[r];n[u]=gt(o,t,u,s[u],e,!(0,i.RI)(s,u))}}return l}function gt(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(Dn(s),r=i[n]=e.call(null,t),On())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function vt(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},u=[];let l=!1;if(!(0,i.mf)(e)){const r=e=>{l=!0;const[n,r]=vt(e,t,!0);(0,i.l7)(a,n),r&&u.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!l)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let d=0;d<o.length;d++){0;const e=(0,i._A)(o[d]);yt(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(yt(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:Object.assign({},n);if(r){const e=_t(Boolean,r.type),n=_t(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&u.push(t)}}}}const c=[a,u];return(0,i.Kn)(e)&&r.set(e,c),c}function yt(e){return"$"!==e[0]}function bt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function wt(e,t){return bt(e)===bt(t)}function _t(e,t){return(0,i.kJ)(t)?t.findIndex((t=>wt(t,e))):(0,i.mf)(t)&&wt(t,e)?0:-1}const It=e=>"_"===e[0]||"$stable"===e,St=e=>(0,i.kJ)(e)?e.map(_n):[_n(e)],Et=(e,t,n)=>{if(t._n)return t;const r=U(((...e)=>St(t(...e))),n);return r._c=!1,r},Tt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(It(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=Et(s,n,r);else if(null!=n){0;const e=St(n);t[s]=()=>e}}},kt=(e,t)=>{const n=St(t);e.slots.default=()=>n},xt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):Tt(t,e.slots={})}else e.slots={},t&&kt(e,t);(0,i.Nj)(e.slots,dn,1)},Ct=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,Tt(t,s)),a=t}else t&&(kt(e,t),a={default:1});if(o)for(const i in s)It(i)||i in a||delete s[i]};function At(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nt=0;function Dt(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=At(),o=new Set;let a=!1;const u=s.app={_uid:Nt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Xn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(u,...t)):(0,i.mf)(e)&&(o.add(e),e(u,...t))),u},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),u},component(e,t){return t?(s.components[e]=t,u):s.components[e]},directive(e,t){return t?(s.directives[e]=t,u):s.directives[e]},mount(i,o,l){if(!a){0;const c=mn(n,r);return c.appContext=s,o&&t?t(c,i):e(c,i,l),a=!0,u._container=i,i.__vue_app__=u,qn(c.component)||c.component.proxy}},unmount(){a&&(e(null,u._container),delete u._container.__vue_app__)},provide(e,t){return s.provides[e]=t,u}};return u}}function Ot(e,t,n,s,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>Ot(e,t&&((0,i.kJ)(t)?t[r]:t),n,s,a)));if(pe(s)&&!a)return;const u=4&s.shapeFlag?qn(s.component)||s.component.proxy:s.el,l=a?null:u,{i:c,r:d}=e;const h=t&&t.r,f=c.refs===i.kT?c.refs={}:c.refs,p=c.setupState;if(null!=h&&h!==d&&((0,i.HD)(h)?(f[h]=null,(0,i.RI)(p,h)&&(p[h]=null)):(0,r.dq)(h)&&(h.value=null)),(0,i.mf)(d))o(d,c,12,[l,f]);else{const t=(0,i.HD)(d),s=(0,r.dq)(d);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,d)?p[d]:f[d]:d.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,u):(0,i.kJ)(n)?n.includes(u)||n.push(u):t?(f[d]=[u],(0,i.RI)(p,d)&&(p[d]=f[d])):(d.value=[u],e.k&&(f[e.k]=d.value))}else t?(f[d]=l,(0,i.RI)(p,d)&&(p[d]=l)):s&&(d.value=l,e.k&&(f[e.k]=l))};l?(r.id=-1,Pt(r,n)):r()}else 0}}function Rt(){}const Pt=H;function Lt(e){return Ft(e)}function Ft(e,t){Rt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:u,createText:l,createComment:c,setText:d,setElementText:h,parentNode:f,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=e,v=(e,t,n,r=null,i=null,s=null,o=!1,a=null,u=!!t.dynamicChildren)=>{if(e===t)return;e&&!cn(e,t)&&(r=X(e),G(e,i,s,!0),e=null),-2===t.patchFlag&&(u=!1,t.dynamicChildren=null);const{type:l,ref:c,shapeFlag:d}=t;switch(l){case Qt:y(e,t,n,r);break;case Jt:b(e,t,n,r);break;case Xt:null==e&&w(t,n,r,o);break;case Yt:P(e,t,n,r,i,s,o,a,u);break;default:1&d?x(e,t,n,r,i,s,o,a,u):6&d?L(e,t,n,r,i,s,o,a,u):(64&d||128&d)&&l.process(e,t,n,r,i,s,o,a,u,ee)}null!=c&&i&&Ot(c,e&&e.ref,s,t||e,!t)},y=(e,t,n,r)=>{if(null==e)s(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},b=(e,t,n,r)=>{null==e?s(t.el=c(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},E=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},x=(e,t,n,r,i,s,o,a,u)=>{o=o||"svg"===t.type,null==e?C(t,n,r,i,s,o,a,u):D(e,t,i,s,o,a,u)},C=(e,t,n,r,o,l,c,d)=>{let f,p;const{type:m,props:g,shapeFlag:v,transition:y,dirs:b}=e;if(f=e.el=u(e.type,l,g&&g.is,g),8&v?h(f,e.children):16&v&&N(e.children,f,null,r,o,l&&"foreignObject"!==m,c,d),b&&Fe(e,null,r,"created"),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(f,t,null,g[t],l,e.children,r,o,J);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&Tn(p,r,e)}A(f,e,e.scopeId,c,r),b&&Fe(e,null,r,"beforeMount");const w=(!o||o&&!o.pendingBranch)&&y&&!y.persisted;w&&y.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||w||b)&&Pt((()=>{p&&Tn(p,r,e),w&&y.enter(f),b&&Fe(e,null,r,"mounted")}),o)},A=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},N=(e,t,n,r,i,s,o,a,u=0)=>{for(let l=u;l<e.length;l++){const u=e[l]=a?In(e[l]):_n(e[l]);v(null,u,t,n,r,i,s,o,a)}},D=(e,t,n,r,s,o,u)=>{const l=t.el=e.el;let{patchFlag:c,dynamicChildren:d,dirs:f}=t;c|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&Mt(n,!1),(g=m.onVnodeBeforeUpdate)&&Tn(g,n,t,e),f&&Fe(t,e,n,"beforeUpdate"),n&&Mt(n,!0);const v=s&&"foreignObject"!==t.type;if(d?O(e.dynamicChildren,d,l,n,r,v,o):u||j(e,t,l,null,n,r,v,o,!1),c>0){if(16&c)R(l,t,p,m,n,r,s);else if(2&c&&p.class!==m.class&&a(l,"class",null,m.class,s),4&c&&a(l,"style",p.style,m.style,s),8&c){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],u=p[o],c=m[o];c===u&&"value"!==o||a(l,o,u,c,s,e.children,n,r,J)}}1&c&&e.children!==t.children&&h(l,t.children)}else u||null!=d||R(l,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&Pt((()=>{g&&Tn(g,n,t,e),f&&Fe(t,e,n,"updated")}),r)},O=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const u=e[a],l=t[a],c=u.el&&(u.type===Yt||!cn(u,l)||70&u.shapeFlag)?f(u.el):n;v(u,l,c,null,r,i,s,o,!0)}},R=(e,t,n,r,s,o,u)=>{if(n!==r){if(n!==i.kT)for(const l in n)(0,i.Gg)(l)||l in r||a(e,l,n[l],null,u,t.children,s,o,J);for(const l in r){if((0,i.Gg)(l))continue;const c=r[l],d=n[l];c!==d&&"value"!==l&&a(e,l,d,c,u,t.children,s,o,J)}"value"in r&&a(e,"value",n.value,r.value)}},P=(e,t,n,r,i,o,a,u,c)=>{const d=t.el=e?e.el:l(""),h=t.anchor=e?e.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(u=u?u.concat(m):m),null==e?(s(d,n,r),s(h,n,r),N(t.children,n,h,i,o,a,u,c)):f>0&&64&f&&p&&e.dynamicChildren?(O(e.dynamicChildren,p,n,i,o,a,u),(null!=t.key||i&&t===i.subTree)&&Ut(e,t,!0)):j(e,t,n,h,i,o,a,u,c)},L=(e,t,n,r,i,s,o,a,u)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,u):F(t,n,r,i,s,o,u):M(e,t,u)},F=(e,t,n,r,i,s,o)=>{const a=e.component=Cn(e,r,i);if(me(e)&&(a.ctx.renderer=ee),Mn(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=mn(Jt);b(null,e,t,n)}}else U(a,e,t,n,i,s,o)},M=(e,t,n)=>{const r=t.component=e.component;if($(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,S(r.update),r.update()}else t.el=e.el,r.vnode=t},U=(e,t,n,s,o,a,u)=>{const l=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:l,vnode:c}=e,d=n;0,Mt(e,!1),n?(n.el=c.el,B(e,n,u)):n=c,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Tn(t,l,n,c),Mt(e,!0);const h=V(e);0;const p=e.subTree;e.subTree=h,v(p,h,f(p.el),X(p),e,o,a),n.el=h.el,null===d&&W(e,h.el),s&&Pt(s,o),(t=n.props&&n.props.onVnodeUpdated)&&Pt((()=>Tn(t,l,n,c)),o)}else{let r;const{el:u,props:l}=t,{bm:c,m:d,parent:h}=e,f=pe(t);if(Mt(e,!1),c&&(0,i.ir)(c),!f&&(r=l&&l.onVnodeBeforeMount)&&Tn(r,h,t),Mt(e,!0),u&&ne){const n=()=>{e.subTree=V(e),ne(u,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=V(e);0,v(null,r,n,s,e,o,a),t.el=r.el}if(d&&Pt(d,o),!f&&(r=l&&l.onVnodeMounted)){const e=t;Pt((()=>Tn(r,h,e)),o)}(256&t.shapeFlag||h&&pe(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&Pt(e.a,o),e.isMounted=!0,t=n=s=null}},c=e.effect=new r.qq(l,(()=>_(d)),e.scope),d=e.update=()=>c.run();d.id=e.uid,Mt(e,!0),d()},B=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,pt(e,t.props,i,n),Ct(e,t.children,n),(0,r.Jd)(),T(),(0,r.lk)()},j=(e,t,n,r,i,s,o,a,u=!1)=>{const l=e&&e.children,c=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void z(l,d,n,r,i,s,o,a,u);if(256&f)return void q(l,d,n,r,i,s,o,a,u)}8&p?(16&c&&J(l,i,s),d!==l&&h(n,d)):16&c?16&p?z(l,d,n,r,i,s,o,a,u):J(l,i,s,!0):(8&c&&h(n,""),16&p&&N(d,n,r,i,s,o,a,u))},q=(e,t,n,r,s,o,a,u,l)=>{e=e||i.Z6,t=t||i.Z6;const c=e.length,d=t.length,h=Math.min(c,d);let f;for(f=0;f<h;f++){const r=t[f]=l?In(t[f]):_n(t[f]);v(e[f],r,n,null,s,o,a,u,l)}c>d?J(e,s,o,!0,!1,h):N(t,n,r,s,o,a,u,l,h)},z=(e,t,n,r,s,o,a,u,l)=>{let c=0;const d=t.length;let h=e.length-1,f=d-1;while(c<=h&&c<=f){const r=e[c],i=t[c]=l?In(t[c]):_n(t[c]);if(!cn(r,i))break;v(r,i,n,null,s,o,a,u,l),c++}while(c<=h&&c<=f){const r=e[h],i=t[f]=l?In(t[f]):_n(t[f]);if(!cn(r,i))break;v(r,i,n,null,s,o,a,u,l),h--,f--}if(c>h){if(c<=f){const e=f+1,i=e<d?t[e].el:r;while(c<=f)v(null,t[c]=l?In(t[c]):_n(t[c]),n,i,s,o,a,u,l),c++}}else if(c>f)while(c<=h)G(e[c],s,o,!0),c++;else{const p=c,m=c,g=new Map;for(c=m;c<=f;c++){const e=t[c]=l?In(t[c]):_n(t[c]);null!=e.key&&g.set(e.key,c)}let y,b=0;const w=f-m+1;let _=!1,I=0;const S=new Array(w);for(c=0;c<w;c++)S[c]=0;for(c=p;c<=h;c++){const r=e[c];if(b>=w){G(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=f;y++)if(0===S[y-m]&&cn(r,t[y])){i=y;break}void 0===i?G(r,s,o,!0):(S[i-m]=c+1,i>=I?I=i:_=!0,v(r,t[i],n,null,s,o,a,u,l),b++)}const E=_?Vt(S):i.Z6;for(y=E.length-1,c=w-1;c>=0;c--){const e=m+c,i=t[e],h=e+1<d?t[e+1].el:r;0===S[c]?v(null,i,n,h,s,o,a,u,l):_&&(y<0||c!==E[y]?H(i,n,h,2):y--)}}},H=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:u,children:l,shapeFlag:c}=e;if(6&c)return void H(e.component.subTree,t,n,r);if(128&c)return void e.suspense.move(t,n,r);if(64&c)return void a.move(e,t,n,ee);if(a===Yt){s(o,t,n);for(let e=0;e<l.length;e++)H(l[e],t,n,r);return void s(e.anchor,t,n)}if(a===Xt)return void I(e,t,n);const d=2!==r&&1&c&&u;if(d)if(0===r)u.beforeEnter(o),s(o,t,n),Pt((()=>u.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=u,a=()=>s(o,t,n),l=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,l):l()}else s(o,t,n)},G=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:u,dynamicChildren:l,shapeFlag:c,patchFlag:d,dirs:h}=e;if(null!=a&&Ot(a,null,n,e,!0),256&c)return void t.ctx.deactivate(e);const f=1&c&&h,p=!pe(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&Tn(m,t,e),6&c)Q(e.component,n,r);else{if(128&c)return void e.suspense.unmount(n,r);f&&Fe(e,null,t,"beforeUnmount"),64&c?e.type.remove(e,t,n,i,ee,r):l&&(s!==Yt||d>0&&64&d)?J(l,t,n,!1,!0):(s===Yt&&384&d||!i&&16&c)&&J(u,t,n),r&&K(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&Pt((()=>{m&&Tn(m,t,e),f&&Fe(e,null,t,"unmounted")}),n)},K=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Yt)return void Y(n,r);if(t===Xt)return void E(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},Y=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Q=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:u}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,G(a,e,t,n)),u&&Pt(u,t),Pt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},J=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)G(e[o],t,n,r,i)},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Z=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),T(),k(),t._vnode=e},ee={p:v,um:G,m:H,r:K,mt:F,mc:N,pc:j,pbc:O,n:X,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Z,hydrate:te,createApp:Dt(Z,te)}}function Mt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ut(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=In(s[i]),t.el=e.el),n||Ut(e,t)),t.type===Qt&&(t.el=e.el)}}function Vt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const u=e.length;for(r=0;r<u;r++){const u=e[r];if(0!==u){if(i=n[n.length-1],e[i]<u){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<u?s=a+1:o=a;u<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Bt=e=>e.__isTeleport,jt=e=>e&&(e.disabled||""===e.disabled),$t=e=>"undefined"!==typeof SVGElement&&e instanceof SVGElement,qt=(e,t)=>{const n=e&&e.to;if((0,i.HD)(n)){if(t){const e=t(n);return e}return null}return n},Wt={__isTeleport:!0,process(e,t,n,r,i,s,o,a,u,l){const{mc:c,pc:d,pbc:h,o:{insert:f,querySelector:p,createText:m,createComment:g}}=l,v=jt(t.props);let{shapeFlag:y,children:b,dynamicChildren:w}=t;if(null==e){const e=t.el=m(""),l=t.anchor=m("");f(e,n,r),f(l,n,r);const d=t.target=qt(t.props,p),h=t.targetAnchor=m("");d&&(f(h,d),o=o||$t(d));const g=(e,t)=>{16&y&&c(b,e,t,i,s,o,a,u)};v?g(n,l):d&&g(d,h)}else{t.el=e.el;const r=t.anchor=e.anchor,c=t.target=e.target,f=t.targetAnchor=e.targetAnchor,m=jt(e.props),g=m?n:c,y=m?r:f;if(o=o||$t(c),w?(h(e.dynamicChildren,w,g,i,s,o,a),Ut(e,t,!0)):u||d(e,t,g,y,i,s,o,a,!1),v)m||zt(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=qt(t.props,p);e&&zt(t,e,null,l,0)}else m&&zt(t,c,f,l,1)}Kt(t)},remove(e,t,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:u,anchor:l,targetAnchor:c,target:d,props:h}=e;if(d&&s(c),(o||!jt(h))&&(s(l),16&a))for(let f=0;f<u.length;f++){const e=u[f];i(e,t,n,!0,!!e.dynamicChildren)}},move:zt,hydrate:Ht};function zt(e,t,n,{o:{insert:r},m:i},s=2){0===s&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:u,children:l,props:c}=e,d=2===s;if(d&&r(o,t,n),(!d||jt(c))&&16&u)for(let h=0;h<l.length;h++)i(l[h],t,n,2);d&&r(a,t,n)}function Ht(e,t,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:u}},l){const c=t.target=qt(t.props,u);if(c){const u=c._lpa||c.firstChild;if(16&t.shapeFlag)if(jt(t.props))t.anchor=l(o(e),t,a(e),n,r,i,s),t.targetAnchor=u;else{t.anchor=o(e);let a=u;while(a)if(a=o(a),a&&8===a.nodeType&&"teleport anchor"===a.data){t.targetAnchor=a,c._lpa=t.targetAnchor&&o(t.targetAnchor);break}l(u,t,c,n,r,i,s)}Kt(t)}return t.anchor&&o(t.anchor)}const Gt=Wt;function Kt(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;while(n!==e.targetAnchor)1===n.nodeType&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Yt=Symbol(void 0),Qt=Symbol(void 0),Jt=Symbol(void 0),Xt=Symbol(void 0),Zt=[];let en=null;function tn(e=!1){Zt.push(en=e?null:[])}function nn(){Zt.pop(),en=Zt[Zt.length-1]||null}let rn=1;function sn(e){rn+=e}function on(e){return e.dynamicChildren=rn>0?en||i.Z6:null,nn(),rn>0&&en&&en.push(e),e}function an(e,t,n,r,i,s){return on(pn(e,t,n,r,i,s,!0))}function un(e,t,n,r,i){return on(mn(e,t,n,r,i,!0))}function ln(e){return!!e&&!0===e.__v_isVNode}function cn(e,t){return e.type===t.type&&e.key===t.key}const dn="__vInternal",hn=({key:e})=>null!=e?e:null,fn=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:R,r:e,k:t,f:!!n}:e:null;function pn(e,t=null,n=null,r=0,s=null,o=(e===Yt?0:1),a=!1,u=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&hn(t),ref:t&&fn(t),scopeId:P,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:R};return u?(Sn(l,n),128&o&&e.normalize(l)):n&&(l.shapeFlag|=(0,i.HD)(n)?8:16),rn>0&&!a&&en&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&en.push(l),l}const mn=gn;function gn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Ve||(e=Jt),ln(e)){const r=yn(e,t,!0);return n&&Sn(r,n),rn>0&&!a&&en&&(6&r.shapeFlag?en[en.indexOf(e)]=r:en.push(r)),r.patchFlag|=-2,r}if(zn(e)&&(e=e.__vccOpts),t){t=vn(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const u=(0,i.HD)(e)?1:z(e)?128:Bt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return pn(e,t,n,s,o,u,a,!0)}function vn(e){return e?(0,r.X3)(e)||dn in e?(0,i.l7)({},e):e:null}function yn(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,u=t?En(r||{},t):r,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&hn(u),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(fn(t)):[s,fn(t)]:fn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Yt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&yn(e.ssContent),ssFallback:e.ssFallback&&yn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx};return l}function bn(e=" ",t=0){return mn(Qt,null,e,t)}function wn(e="",t=!1){return t?(tn(),un(Jt,null,e)):mn(Jt,null,e)}function _n(e){return null==e||"boolean"===typeof e?mn(Jt):(0,i.kJ)(e)?mn(Yt,null,e.slice()):"object"===typeof e?In(e):mn(Qt,null,String(e))}function In(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:yn(e)}function Sn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Sn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||dn in t?3===r&&R&&(1===R.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=R}}else(0,i.mf)(t)?(t={default:t,_ctx:R},n=32):(t=String(t),64&r?(n=16,t=[bn(t)]):n=8);e.children=t,e.shapeFlag|=n}function En(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function Tn(e,t,n,r=null){a(e,t,7,[n,r])}const kn=At();let xn=0;function Cn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||kn,a={uid:xn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vt(s,o),emitsOptions:D(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=N.bind(null,a),e.ce&&e.ce(a),a}let An=null;const Nn=()=>An||R,Dn=e=>{An=e,e.scope.on()},On=()=>{An&&An.scope.off(),An=null};function Rn(e){return 4&e.vnode.shapeFlag}let Pn,Ln,Fn=!1;function Mn(e,t=!1){Fn=t;const{props:n,children:r}=e.vnode,i=Rn(e);ft(e,n,i,t),xt(e,r);const s=i?Un(e,t):void 0;return Fn=!1,s}function Un(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Xe));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?$n(e):null;Dn(e),(0,r.Jd)();const a=o(s,e,0,[e.props,n]);if((0,r.lk)(),On(),(0,i.tI)(a)){if(a.then(On,On),t)return a.then((n=>{Vn(e,n,t)})).catch((t=>{u(t,e,0)}));e.asyncDep=a}else Vn(e,a,t)}else Bn(e,t)}function Vn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Bn(e,n)}function Bn(e,t,n){const s=e.type;if(!e.render){if(!t&&Pn&&!s.render){const t=s.template||it(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,u=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=Pn(t,u)}}e.render=s.render||i.dG,Ln&&Ln(e)}Dn(e),(0,r.Jd)(),et(e),(0,r.lk)(),On()}function jn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function $n(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=jn(e))},slots:e.slots,emit:e.emit,expose:t}}function qn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Qe?Qe[n](e):void 0},has(e,t){return t in e||t in Qe}}))}function Wn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function zn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Hn=(e,t)=>(0,r.Fl)(e,t,Fn);function Gn(){return Kn().slots}function Kn(){const e=Nn();return e.setupContext||(e.setupContext=$n(e))}function Yn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?ln(t)?mn(e,null,[t]):mn(e,t):mn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&ln(n)&&(n=[n]),mn(e,t,n))}const Qn=Symbol(""),Jn=()=>{{const e=K(Qn);return e}};const Xn="3.2.45"},9242:function(e,t,n){"use strict";n.d(t,{F8:function(){return he},W3:function(){return ie},iM:function(){return de},ri:function(){return ve},sj:function(){return R},uT:function(){return U}});n(7658);var r=n(7139),i=n(3396),s=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,u=a&&a.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{u.innerHTML=r?`<svg>${e}</svg>`:e;const i=u.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function c(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function d(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){for(const e in n)f(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const h=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=g(e,t);h.test(n)?e.setProperty((0,r.rs)(i),n.replace(h,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],m={};function g(e,t){const n=m[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return m[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return m[t]=n}return t}const v="http://www.w3.org/1999/xlink";function y(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(v,t.slice(6,t.length)):e.setAttributeNS(v,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function b(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let u=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",u=!0):"number"===i&&(n=0,u=!0)}try{e[t]=n}catch(l){0}u&&e.removeAttribute(t)}function w(e,t,n,r){e.addEventListener(t,n,r)}function _(e,t,n,r){e.removeEventListener(t,n,r)}function I(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=E(t);if(r){const o=s[t]=C(r,i);w(e,n,o,a)}else o&&(_(e,n,o,a),s[t]=void 0)}}const S=/(?:Once|Passive|Capture)$/;function E(e){let t;if(S.test(e)){let n;t={};while(n=e.match(S))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let T=0;const k=Promise.resolve(),x=()=>T||(k.then((()=>T=0)),T=Date.now());function C(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(A(e,n.value),t,5,[e])};return n.value=e,n.attached=x(),n}function A(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const N=/^on[a-z]/,D=(e,t,n,i,s=!1,o,a,u,l)=>{"class"===t?c(e,i,s):"style"===t?d(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||I(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):O(e,t,i,s))?b(e,t,i,o,a,u,l):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,s))};function O(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&N.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!N.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;function R(e){const t=(0,i.FN)();if(!t)return;const n=t.ut=(n=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e=>L(e,n)))},r=()=>{const r=e(t.proxy);P(t.subTree,r),n(r)};(0,i.Rh)(r),(0,i.bv)((()=>{const e=new MutationObserver(r);e.observe(t.subTree.el.parentNode,{childList:!0}),(0,i.Ah)((()=>e.disconnect()))}))}function P(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{P(n.activeBranch,t)}))}while(e.component)e=e.component.subTree;if(1&e.shapeFlag&&e.el)L(e.el,t);else if(e.type===i.HY)e.children.forEach((e=>P(e,t)));else if(e.type===i.qG){let{el:n,anchor:r}=e;while(n){if(L(n,t),n===r)break;n=n.nextSibling}}}function L(e,t){if(1===e.nodeType){const n=e.style;for(const e in t)n.setProperty(`--${e}`,t[e])}}const F="transition",M="animation",U=(e,{slots:t})=>(0,i.h)(i.P$,q(e),t);U.displayName="Transition";const V={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},B=U.props=(0,r.l7)({},i.P$.props,V),j=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},$=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function q(e){const t={};for(const r in e)r in V||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:u=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:c=a,appearToClass:d=u,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=W(s),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:w,onLeave:_,onLeaveCancelled:I,onBeforeAppear:S=y,onAppear:E=b,onAppearCancelled:T=w}=t,k=(e,t,n)=>{G(e,t?d:u),G(e,t?c:a),n&&n()},x=(e,t)=>{e._isLeaving=!1,G(e,h),G(e,p),G(e,f),t&&t()},C=e=>(t,n)=>{const r=e?E:b,s=()=>k(t,e,n);j(r,[t,s]),K((()=>{G(t,e?l:o),H(t,e?d:u),$(r)||Q(t,i,g,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){j(y,[e]),H(e,o),H(e,a)},onBeforeAppear(e){j(S,[e]),H(e,l),H(e,c)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>x(e,t);H(e,h),ee(),H(e,f),K((()=>{e._isLeaving&&(G(e,h),H(e,p),$(_)||Q(e,i,v,n))})),j(_,[e,n])},onEnterCancelled(e){k(e,!1),j(w,[e])},onAppearCancelled(e){k(e,!0),j(T,[e])},onLeaveCancelled(e){x(e),j(I,[e])}})}function W(e){if(null==e)return null;if((0,r.Kn)(e))return[z(e.enter),z(e.leave)];{const t=z(e);return[t,t]}}function z(e){const t=(0,r.He)(e);return t}function H(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function G(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function K(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let Y=0;function Q(e,t,n,r){const i=e._endId=++Y,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:u}=J(e,t);if(!o)return r();const l=o+"end";let c=0;const d=()=>{e.removeEventListener(l,h),s()},h=t=>{t.target===e&&++c>=u&&d()};setTimeout((()=>{c<u&&d()}),a+1),e.addEventListener(l,h)}function J(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${F}Delay`),s=r(`${F}Duration`),o=X(i,s),a=r(`${M}Delay`),u=r(`${M}Duration`),l=X(a,u);let c=null,d=0,h=0;t===F?o>0&&(c=F,d=o,h=s.length):t===M?l>0&&(c=M,d=l,h=u.length):(d=Math.max(o,l),c=d>0?o>l?F:M:null,h=c?c===F?s.length:u.length:0);const f=c===F&&/\b(transform|all)(,|$)/.test(r(`${F}Property`).toString());return{type:c,timeout:d,propCount:h,hasTransform:f}}function X(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Z(t)+Z(e[n]))))}function Z(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ee(){return document.body.offsetHeight}const te=new WeakMap,ne=new WeakMap,re={name:"TransitionGroup",props:(0,r.l7)({},B,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!ue(o[0].el,n.vnode.el,t))return;o.forEach(se),o.forEach(oe);const r=o.filter(ae);ee(),r.forEach((e=>{const n=e.el,r=n.style;H(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,G(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const u=(0,s.IU)(e),l=q(u);let c=u.tag||i.HY;o=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,l,r,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,i.nK)(t,(0,i.U2)(t,l,r,n)),te.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(c,null,a)}}},ie=re;function se(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function oe(e){ne.set(e,e.el.getBoundingClientRect())}function ae(e){const t=te.get(e),n=ne.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function ue(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=J(r);return i.removeChild(r),s}const le=["ctrl","shift","alt","meta"],ce={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>le.some((n=>e[`${n}Key`]&&!t.includes(n)))},de=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=ce[t[e]];if(r&&r(n,t))return}return e(n,...r)},he={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):fe(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),fe(e,!0),r.enter(e)):r.leave(e,(()=>{fe(e,!1)})):fe(e,t))},beforeUnmount(e,{value:t}){fe(e,t)}};function fe(e,t){e.style.display=t?e._vod:"none"}const pe=(0,r.l7)({patchProp:D},l);let me;function ge(){return me||(me=(0,i.Us)(pe))}const ve=(...e)=>{const t=ge().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ye(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function ye(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";n.d(t,{C_:function(){return d},DM:function(){return P},E9:function(){return se},F7:function(){return k},Gg:function(){return H},HD:function(){return M},He:function(){return re},Kn:function(){return V},NO:function(){return E},Nj:function(){return ne},Od:function(){return A},PO:function(){return W},Pq:function(){return p},RI:function(){return D},S0:function(){return z},W7:function(){return q},WV:function(){return v},Z6:function(){return I},_A:function(){return Y},_N:function(){return R},aU:function(){return ee},dG:function(){return S},e1:function(){return s},fY:function(){return r},hR:function(){return Z},hq:function(){return y},ir:function(){return te},j5:function(){return o},kC:function(){return X},kJ:function(){return O},kT:function(){return _},l7:function(){return C},mf:function(){return F},rs:function(){return J},tI:function(){return B},tR:function(){return x},vs:function(){return h},yA:function(){return m},yk:function(){return U},zw:function(){return b}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);function o(e){if(O(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=M(r)?c(r):o(r);if(i)for(const e in i)t[e]=i[e]}return t}return M(e)||V(e)?e:void 0}const a=/;(?![^(]*\))/g,u=/:([^]+)/,l=/\/\*.*?\*\//gs;function c(e){const t={};return e.replace(l,"").split(a).forEach((e=>{if(e){const n=e.split(u);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function d(e){let t="";if(M(e))t=e;else if(O(e))for(let n=0;n<e.length;n++){const r=d(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function h(e){if(!e)return null;let{class:t,style:n}=e;return t&&!M(t)&&(e.class=d(t)),n&&(e.style=o(n)),e}const f="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",p=r(f);function m(e){return!!e||""===e}function g(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=v(e[r],t[r]);return n}function v(e,t){if(e===t)return!0;let n=L(e),r=L(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=U(e),r=U(t),n||r)return e===t;if(n=O(e),r=O(t),n||r)return!(!n||!r)&&g(e,t);if(n=V(e),r=V(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!v(e[n],t[n]))return!1}}return String(e)===String(t)}function y(e,t){return e.findIndex((e=>v(e,t)))}const b=e=>M(e)?e:null==e?"":O(e)||V(e)&&(e.toString===j||!F(e.toString))?JSON.stringify(e,w,2):String(e),w=(e,t)=>t&&t.__v_isRef?w(e,t.value):R(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:P(t)?{[`Set(${t.size})`]:[...t.values()]}:!V(t)||O(t)||W(t)?t:String(t),_={},I=[],S=()=>{},E=()=>!1,T=/^on[^a-z]/,k=e=>T.test(e),x=e=>e.startsWith("onUpdate:"),C=Object.assign,A=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},N=Object.prototype.hasOwnProperty,D=(e,t)=>N.call(e,t),O=Array.isArray,R=e=>"[object Map]"===$(e),P=e=>"[object Set]"===$(e),L=e=>"[object Date]"===$(e),F=e=>"function"===typeof e,M=e=>"string"===typeof e,U=e=>"symbol"===typeof e,V=e=>null!==e&&"object"===typeof e,B=e=>V(e)&&F(e.then)&&F(e.catch),j=Object.prototype.toString,$=e=>j.call(e),q=e=>$(e).slice(8,-1),W=e=>"[object Object]"===$(e),z=e=>M(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,H=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),G=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},K=/-(\w)/g,Y=G((e=>e.replace(K,((e,t)=>t?t.toUpperCase():"")))),Q=/\B([A-Z])/g,J=G((e=>e.replace(Q,"-$1").toLowerCase())),X=G((e=>e.charAt(0).toUpperCase()+e.slice(1))),Z=G((e=>e?`on${X(e)}`:"")),ee=(e,t)=>!Object.is(e,t),te=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ne=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},re=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ie;const se=()=>ie||(ie="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},5229:function(e,t,n){"use strict";n.d(t,{Z:function(){return De}});n(7658),n(541);var r=n(3396),i=n(9242),s=n(4870),o=n(7139),a=Object.defineProperty,u=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&f(e,n,t[n]);if(c)for(var n of c(t))h.call(t,n)&&f(e,n,t[n]);return e},m=(e,t)=>u(e,l(t)),g=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const v=e=>((0,r.dD)("data-v-e0a0b7f0"),e=e(),(0,r.Cn)(),e),y=["onClick"],b=["checked"],w=v((()=>(0,r._)("label",{for:"checbox"},null,-1))),_=(0,r.aZ)({__name:"MultipleSelectCheckBox",props:{status:{type:String,required:!0}},emits:["change"],setup(e,{emit:t}){const n=e;(0,i.sj)((e=>({"51ab8a49":(0,s.SU)(l)})));const a=(0,r.Fl)((()=>"allSelected"===n.status)),u=()=>{t("change",!a.value)},l=(0,r.f3)("themeColor");return(t,n)=>((0,r.wg)(),(0,r.iD)("div",{class:"easy-checkbox",onClick:(0,i.iM)(u,["stop","prevent"])},[(0,r._)("input",{type:"checkbox",checked:(0,s.SU)(a),class:(0,o.C_)(e.status)},null,10,b),w],8,y))}});var I=g(_,[["__scopeId","data-v-e0a0b7f0"]]);const S=e=>((0,r.dD)("data-v-7e69a276"),e=e(),(0,r.Cn)(),e),E=["checked"],T=S((()=>(0,r._)("label",{for:"checbox"},null,-1))),k=(0,r.aZ)({__name:"SingleSelectCheckBox",props:{checked:{type:Boolean,required:!0}},emits:["change"],setup(e,{emit:t}){(0,i.sj)((e=>({fdaf7e9e:(0,s.SU)(n)})));const n=(0,r.f3)("themeColor");return(n,s)=>((0,r.wg)(),(0,r.iD)("div",{class:"easy-checkbox",onClick:s[0]||(s[0]=(0,i.iM)((e=>t("change")),["stop","prevent"]))},[(0,r._)("input",{type:"checkbox",checked:e.checked},null,8,E),T]))}});var x=g(k,[["__scopeId","data-v-7e69a276"]]);const C=e=>((0,r.dD)("data-v-09dad912"),e=e(),(0,r.Cn)(),e),A={class:"easy-data-table__rows-selector"},N={class:"rows-input"},D=C((()=>(0,r._)("div",{class:"triangle"},null,-1))),O=["onClick"],R=(0,r.aZ)({__name:"RowsSelector",props:{modelValue:{type:Number,required:!0},rowsItems:{type:Array,required:!0}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e;(0,i.sj)((e=>({"7fe9410c":(0,s.SU)(p)})));const a=(0,s.iH)(!1),u=(0,s.iH)(!1),l=(0,r.f3)("dataTable");(0,r.YP)(a,(e=>{if(e&&l){const e=window.innerHeight,t=l.value.getBoundingClientRect().height,n=l.value.getBoundingClientRect().top;u.value=e-(t+n)<=100}}));const c=(0,r.Fl)({get:()=>n.modelValue,set:e=>{t("update:modelValue",e)}}),d=e=>{c.value=e,a.value=!1},h=(e,t)=>{let n=e.parentNode;while(null!=n){if(n.classList&&n.classList.contains(t))return!0;n=n.parentNode}return!1},f=e=>{h(e.target,"easy-data-table__rows-selector")||(a.value=!1)};(0,r.bv)((()=>{document.addEventListener("click",f)})),(0,r.Jd)((()=>{document.removeEventListener("click",f)}));const p=(0,r.f3)("themeColor");return(t,n)=>((0,r.wg)(),(0,r.iD)("div",A,[(0,r._)("div",{class:"rows-input__wrapper",onClick:n[0]||(n[0]=e=>a.value=!a.value)},[(0,r._)("div",N,(0,o.zw)((0,s.SU)(c)),1),D]),(0,r._)("ul",{class:(0,o.C_)(["select-items",{show:a.value,inside:u.value}])},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.rowsItems,(e=>((0,r.wg)(),(0,r.iD)("li",{key:e,class:(0,o.C_)({selected:e===(0,s.SU)(c)}),onClick:t=>d(e)},(0,o.zw)(e),11,O)))),128))],2)]))}});var P=g(R,[["__scopeId","data-v-09dad912"]]);const L=e=>((0,r.dD)("data-v-1fa3a520"),e=e(),(0,r.Cn)(),e),F={class:"lds-ring"},M=L((()=>(0,r._)("div",null,null,-1))),U=L((()=>(0,r._)("div",null,null,-1))),V=L((()=>(0,r._)("div",null,null,-1))),B=L((()=>(0,r._)("div",null,null,-1))),j=[M,U,V,B],$=(0,r.aZ)({__name:"Loading",setup(e){(0,i.sj)((e=>({26774109:(0,s.SU)(t)})));const t=(0,r.f3)("themeColor");return(e,t)=>((0,r.wg)(),(0,r.iD)("div",F,j))}});var q=g($,[["__scopeId","data-v-1fa3a520"]]);const W={class:"loader-line"},z=(0,r.aZ)({__name:"LoadingLine",setup(e){(0,i.sj)((e=>({"0d327f57":(0,s.SU)(t)})));const t=(0,r.f3)("themeColor");return(e,t)=>((0,r.wg)(),(0,r.iD)("div",W))}});var H=g(z,[["__scopeId","data-v-7d281cac"]]);const G={class:"buttons-pagination"},K=["onClick"],Y=(0,r.aZ)({__name:"ButtonsPagination",props:{maxPaginationNumber:{type:Number,required:!0},currentPaginationNumber:{type:Number,required:!0}},emits:["updatePage"],setup(e,{emit:t}){const n=e;(0,i.sj)((e=>({"40dd4f07":(0,s.SU)(c)})));const a=7,u=e=>{"button"!==e.type||e.active||t("updatePage",e.page)},l=(0,r.Fl)((()=>{const e=[];if(n.maxPaginationNumber<=a)for(let t=1;t<=n.maxPaginationNumber;t+=1)e.push({type:"button",page:t,active:t===n.currentPaginationNumber,activePrev:t+1===n.currentPaginationNumber});else if([1,2,n.maxPaginationNumber,n.maxPaginationNumber-1].includes(n.currentPaginationNumber))for(let t=1;t<=a;t+=1)if(t<=3)e.push({type:"button",page:t,active:t===n.currentPaginationNumber,activePrev:t+1===n.currentPaginationNumber});else if(4===t)e.push({type:"omission"});else{const r=n.maxPaginationNumber-(a-t);e.push({type:"button",page:r,active:r===n.currentPaginationNumber,activePrev:r+1===n.currentPaginationNumber})}else if([3,4].includes(n.currentPaginationNumber))for(let t=1;t<=a;t+=1)t<=5?e.push({type:"button",page:t,active:t===n.currentPaginationNumber,activePrev:t+1===n.currentPaginationNumber}):6===t?e.push({type:"omission"}):e.push({type:"button",page:n.maxPaginationNumber,active:n.maxPaginationNumber===n.currentPaginationNumber,activePrev:t+1===n.currentPaginationNumber});else if([n.maxPaginationNumber-2,n.maxPaginationNumber-3].includes(n.currentPaginationNumber))for(let t=1;t<=a;t+=1)if(1===t)e.push({type:"button",page:1,active:1===n.currentPaginationNumber,activePrev:t+1===n.currentPaginationNumber});else if(2===t)e.push({type:"omission"});else{const r=n.maxPaginationNumber-(a-t);e.push({type:"button",page:r,active:r===n.currentPaginationNumber,activePrev:r+1===n.currentPaginationNumber})}else for(let t=1;t<=a;t+=1)if(1===t)e.push({type:"button",page:1,active:1===n.currentPaginationNumber,activePrev:t+1===n.currentPaginationNumber});else if(2===t||6===t)e.push({type:"omission"});else if(7===t)e.push({type:"button",page:n.maxPaginationNumber,active:n.maxPaginationNumber===n.currentPaginationNumber,activePrev:t+1===n.currentPaginationNumber});else{const r=4-t,i=n.currentPaginationNumber-r;e.push({type:"button",page:i,active:i===n.currentPaginationNumber,activePrev:i+1===n.currentPaginationNumber})}return e})),c=(0,r.f3)("themeColor");return(e,t)=>((0,r.wg)(),(0,r.iD)("div",G,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,s.SU)(l),((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:(0,o.C_)(["item",{button:"button"===e.type,active:"button"===e.type&&e.active,"active-prev":"button"===e.type&&e.activePrev,omission:"omission"===e.type}]),onClick:t=>u(e)},(0,o.zw)("button"===e.type?e.page:"..."),11,K)))),128))]))}});var Q=g(Y,[["__scopeId","data-v-4c681fa2"]]);const J=e=>((0,r.dD)("data-v-c9da5286"),e=e(),(0,r.Cn)(),e),X=J((()=>(0,r._)("span",{class:"arrow arrow-right"},null,-1))),Z=[X],ee=J((()=>(0,r._)("span",{class:"arrow arrow-left"},null,-1))),te=[ee],ne=(0,r.aZ)({__name:"PaginationArrows",props:{isFirstPage:{type:Boolean,required:!1},isLastPage:{type:Boolean,required:!1}},emits:["clickPrevPage","clickNextPage"],setup(e,{emit:t}){const n=(0,r.Rr)();return(i,a)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",{class:(0,o.C_)(["previous-page__click-button",{"first-page":e.isFirstPage}]),onClick:a[0]||(a[0]=e=>t("clickPrevPage"))},Z,2),(0,s.SU)(n).buttonsPagination?(0,r.WI)(i.$slots,"buttonsPagination",{key:0},void 0,!0):(0,r.kq)("",!0),(0,r._)("div",{class:(0,o.C_)(["next-page__click-button",{"last-page":e.isLastPage}]),onClick:a[1]||(a[1]=e=>t("clickNextPage"))},te,2)],64))}});var re=g(ne,[["__scopeId","data-v-c9da5286"]]);function ie(e,t,n,r){const i=(i,s)=>{if(e.value!==s)return;const o=p({},i);if(t.value){const{checkbox:e}=i;delete o.checkbox,o.isSelected=e}if(n.value){const{index:e}=i;delete o.index,o.indexInCurrentPage=e}r("clickRow",o)};return{clickRow:i}}function se(e,t,n){const r=(0,s.iH)([]),i=(i,s,o)=>{o.stopPropagation();const a=r.value.indexOf(i);if(-1!==a)r.value.splice(a,1);else{const i=e.value.findIndex((e=>JSON.stringify(e)===JSON.stringify(s)));n("expandRow",t.value+i,s),r.value.push(t.value+i)}},o=()=>{r.value=[]};return{expandingItemIndexList:r,updateExpandingItemIndexList:i,clearExpandingItemIndexList:o}}function oe(e){const t=(0,r.Fl)((()=>e.value.filter((e=>e.fixed)))),n=(0,r.Fl)((()=>t.value.length?t.value[t.value.length-1].value:"")),i=(0,r.Fl)((()=>{if(!t.value.length)return[];const e=t.value.map((e=>{var t;return null!=(t=e.width)?t:100}));return t.value.map(((t,n)=>{var r,i;return{value:t.value,fixed:null==(r=t.fixed)||r,width:null!=(i=t.width)?i:100,distance:0===n?0:e.reduce(((e,t,r)=>{let i=e;return r<n&&(i+=t),i}))}}))}));return{fixedHeaders:t,lastFixedColumn:n,fixedColumnsInfos:i}}function ae(e,t,n,i,o,a,u,l,c,d,h,f,p,m,g,v,y,b){const w=(0,r.Fl)((()=>-1!==a.value.findIndex((e=>e.fixed)))),_=(0,r.Fl)((()=>w.value?a.value.filter((e=>e.fixed)):[])),I=(0,r.Fl)((()=>a.value.filter((e=>!e.fixed)))),S=(e,t)=>Array.isArray(e)&&Array.isArray(t)?{sortBy:e,sortDesc:t.map((e=>"desc"===e))}:""!==e?{sortBy:m.value,sortDesc:"desc"===g.value}:null,E=(0,s.iH)(S(m.value,g.value)),T=(0,r.Fl)((()=>{var r;const s=[..._.value,...I.value],a=s.map((e=>{const t=Object.assign(e);if(t.sortable&&(t.sortType="none"),f.value)if(Array.isArray(f.value.sortBy)&&Array.isArray(f.value.sortType)&&f.value.sortBy.includes(t.value)){const e=f.value.sortBy.indexOf(t.value);t.sortType=f.value.sortType[e]}else t.value===f.value.sortBy&&f.value.sortType&&(t.sortType=f.value.sortType);if(E.value&&Array.isArray(E.value.sortBy)&&Array.isArray(E.value.sortDesc)&&E.value.sortBy.includes(t.value)){const e=E.value.sortBy.indexOf(t.value);t.sortType=E.value.sortDesc[e]?"desc":"asc"}else E.value&&t.value===E.value.sortBy&&(t.sortType=E.value.sortDesc?"desc":"asc");return t}));let d=[];if(u.value){const e=i.value||w.value?{text:"",value:"expand",fixed:!0,width:t.value}:{text:"",value:"expand"};d=[e,...a]}else d=a;let h=[];if(p.value){const e=o.value||w.value?{text:"#",value:"index",fixed:!0,width:l.value}:{text:"#",value:"index"};h=[e,...d]}else h=d;let m=[];if(c.value){const t=n.value||w.value?{text:"checkbox",value:"checkbox",fixed:!0,width:null!=(r=e.value)?r:36}:{text:"checkbox",value:"checkbox"};m=[t,...h]}else m=h;return m})),k=(0,r.Fl)((()=>T.value.map((e=>e.value)))),x=(e,t)=>{let n=null;if(n="none"===t?"asc":"asc"===t?"desc":h.value?"asc":null,d.value&&y(e,n),E.value&&Array.isArray(E.value.sortBy)&&Array.isArray(E.value.sortDesc)){const t=E.value.sortBy.indexOf(e);-1===t?null!==n&&(E.value.sortBy.push(e),E.value.sortDesc.push("desc"===n)):null===n?(E.value.sortDesc.splice(t,1),E.value.sortBy.splice(t,1)):E.value.sortDesc[t]="desc"===n}else E.value=null===n?null:{sortBy:e,sortDesc:"desc"===n};b("updateSort",{sortType:n,sortBy:e})},C=e=>f.value&&Array.isArray(f.value.sortBy)?f.value.sortBy.includes(e):!(!E.value||!Array.isArray(E.value.sortBy))&&E.value.sortBy.includes(e),A=e=>f.value&&Array.isArray(f.value.sortBy)?f.value.sortBy.indexOf(e)+1:!(!E.value||!Array.isArray(E.value.sortBy))&&E.value.sortBy.indexOf(e)+1;return{clientSortOptions:E,headerColumns:k,headersForRender:T,updateSortField:x,isMultiSorting:C,getMultiSortNumber:A}}function ue(e,t,n,i,s,o,a,u,l){const c=(0,r.Fl)((()=>(e.value-1)*s.value+1)),d=(0,r.Fl)((()=>n.value?Math.min(l.value,e.value*s.value):Math.min(u.value.length,e.value*s.value))),h=(0,r.Fl)((()=>n.value?i.value:u.value.slice(c.value-1,d.value))),f=(0,r.Fl)((()=>a.value?h.value.map(((e,t)=>p({index:c.value+t},e))):h.value)),m=(0,r.Fl)((()=>{if(0===o.value.length)return"noneSelected";const e=o.value.every((e=>-1===u.value.findIndex((t=>JSON.stringify(e)===JSON.stringify(t)))));if(e)return"noneSelected";if(o.value.length===u.value.length){const e=o.value.every((e=>-1!==u.value.findIndex((t=>JSON.stringify(e)===JSON.stringify(t)))));return e?"allSelected":"partSelected"}return"partSelected"})),g=(0,r.Fl)((()=>t.value?"allSelected"===m.value?f.value.map((e=>p({checkbox:!0},e))):"noneSelected"===m.value?f.value.map((e=>p({checkbox:!1},e))):f.value.map((e=>{const t=-1!==o.value.findIndex((t=>{const n=p({},e);return delete n.index,JSON.stringify(t)===JSON.stringify(n)}));return p({checkbox:t},e)})):f.value));return{currentPageFirstIndex:c,currentPageLastIndex:d,multipleSelectStatus:m,pageItems:g}}function le(e,t,n,i,o,a,u){const l=(0,s.iH)(a.value?a.value.page:e.value),c=(0,r.Fl)((()=>Math.ceil(i.value/o.value))),d=(0,r.Fl)((()=>0===c.value||l.value===c.value)),h=(0,r.Fl)((()=>1===l.value)),f=()=>{if(0!==i.value&&!d.value&&!n.value)if(t.value){const e=l.value+1;u(e)}else l.value+=1},p=()=>{if(0!==i.value&&!h.value&&!n.value)if(t.value){const e=l.value-1;u(e)}else l.value-=1},m=e=>{n.value||(t.value?u(e):l.value=e)},g=e=>{l.value=e};return{currentPaginationNumber:l,maxPaginationNumber:c,isLastPage:d,isFirstPage:h,nextPage:f,prevPage:p,updatePage:m,updateCurrentPaginationNumber:g}}function ce(e,t,n,i){const o=(0,r.Fl)((()=>e.value||-1!==t.value.findIndex((e=>e===i.value))?t.value:[i.value,...t.value])),a=(0,s.iH)(n.value?n.value.rowsPerPage:i.value),u=e=>{a.value=e};return{rowsItemsComputed:o,rowsPerPageRef:a,updateRowsPerPage:u}}function de(e,t,n){const i=(0,r.Fl)({get:()=>{if(e.value){const{page:t,rowsPerPage:n,sortBy:r,sortType:i}=e.value;return{page:t,rowsPerPage:n,sortBy:null!=r?r:null,sortType:null!=i?i:null}}return null},set:e=>{n("update:serverOptions",e)}}),s=e=>{i.value&&(i.value=m(p({},i.value),{page:e}))},o=e=>{i.value&&(i.value=m(p({},i.value),{page:1,rowsPerPage:e}))},a=(e,n)=>{if(i.value)if(t.value&&Array.isArray(i.value.sortBy)&&Array.isArray(i.value.sortType)){const t=i.value.sortBy.findIndex((t=>t===e));-1===t&&null!==n&&(i.value.sortBy.push(e),i.value.sortType.push(n)),null===n?(i.value.sortBy.splice(t,1),i.value.sortType.splice(t,1)):i.value.sortType[t]=n}else i.value=m(p({},i.value),{sortBy:null!==n?e:null,sortType:n})};return{serverOptionsComputed:i,updateServerOptionsPage:s,updateServerOptionsSort:a,updateServerOptionsRowsPerPage:o}}function he(e,t){if(e.includes(".")){let n="";const r=e.split("."),{length:i}=r;let s=0;while(s<i)if(n=0===s?t[r[s]]:n[r[s]],s+=1,void 0===n)break;return n}return t[e]}function fe(e,t){const n=he(e,t);return Array.isArray(n)?n.join(","):n}function pe(e,t,n,i,s,o,a,u,l,c){const d=e=>{if("string"===typeof o.value&&""!==o.value)return he(o.value,e);if(Array.isArray(o.value)){let t="";return o.value.forEach((n=>{t+=he(n,e)})),t}return Object.values(e).join(" ")},h=(0,r.Fl)((()=>{if(!n.value&&""!==a.value){const e=new RegExp(a.value,"i");return i.value.filter((t=>e.test(d(t))))}return i.value})),f=(0,r.Fl)((()=>{let e=[...h.value];return t.value?(t.value.forEach((t=>{e=e.filter((e=>{const{field:n,comparison:r,criteria:i}=t;if("function"===typeof r)return r(he(n,e),i);const s=he(n,e);switch(r){case"=":return s===i;case"!=":return s!==i;case">":return s>i;case"<":return s<i;case"<=":return s<=i;case">=":return s>=i;case"between":return s>=Math.min(...i)&&s<=Math.max(...i);default:return s===i}}))})),e):h.value}));function p(e,t,n,r){const i=e[r],s=t[r],o=(0===r?n:p(e,t,n,r-1)).sort(((t,n)=>{let o=!0;for(let i=0;i<r;i+=1)if(he(e[i],t)!==he(e[i],n)){o=!1;break}return o?he(i,t)<he(i,n)?s?1:-1:he(i,t)>he(i,n)?s?-1:1:0:0}));return o}(0,r.YP)(f,(e=>{t.value&&c("updateFilter",e)}),{immediate:!0,deep:!0});const m=(0,r.Fl)((()=>{if(n.value)return i.value;if(null===e.value)return f.value;const{sortBy:t,sortDesc:r}=e.value,s=[...f.value];return l&&Array.isArray(t)&&Array.isArray(r)?0===t.length?s:p(t,r,s,t.length-1):s.sort(((e,n)=>he(t,e)<he(t,n)?r?1:-1:he(t,e)>he(t,n)?r?-1:1:0))})),g=(0,r.Fl)((()=>n.value?u.value:m.value.length)),v=(0,r.Fl)({get:()=>{var e;return null!=(e=s.value)?e:[]},set:e=>{c("update:itemsSelected",e)}}),y=e=>{v.value=e?m.value:[]},b=e=>{const t=e.checkbox;if(delete e.checkbox,delete e.index,t)v.value=v.value.filter((t=>JSON.stringify(t)!==JSON.stringify(e))),c("deselectRow",e);else{const t=v.value;t.unshift(e),v.value=t,c("selectRow",e)}};return{totalItems:m,selectItemsComputed:v,totalItemsLength:g,toggleSelectAll:y,toggleSelectItem:b}}var me={alternating:{type:Boolean,default:!1},buttonsPagination:{type:Boolean,default:!1},checkboxColumnWidth:{type:Number,default:null},currentPage:{type:Number,default:1},emptyMessage:{type:String,default:"No Available Data"},expandColumnWidth:{type:Number,default:36},filterOptions:{type:Array,default:null},fixedExpand:{type:Boolean,default:!1},fixedHeader:{type:Boolean,default:!0},fixedCheckbox:{type:Boolean,default:!1},fixedIndex:{type:Boolean,default:!1},headerTextDirection:{type:String,default:"left"},bodyTextDirection:{type:String,default:"left"},hideFooter:{type:Boolean,default:!1},hideRowsPerPage:{type:Boolean,default:!1},hideHeader:{type:Boolean,default:!1},indexColumnWidth:{type:Number,default:60},itemsSelected:{type:Array,default:null},loading:{type:Boolean,deault:!1},rowsPerPage:{type:Number,default:25},rowsItems:{type:Array,default:()=>[25,50,100]},rowsPerPageMessage:{type:String,default:"rows per page:"},searchField:{type:[String,Array],default:""},searchValue:{type:String,default:""},serverOptions:{type:Object,default:null},serverItemsLength:{type:Number,default:0},showIndex:{type:Boolean,default:!1},sortBy:{type:[String,Array],default:""},sortType:{type:[String,Array],default:"asc"},multiSort:{type:Boolean,default:!1},tableMinHeight:{type:Number,default:180},tableHeight:{type:Number,default:null},themeColor:{type:String,default:"#42b883"},tableClassName:{type:String,default:""},headerClassName:{type:String,default:""},headerItemClassName:{type:[Function,String],default:""},bodyRowClassName:{type:[Function,String],default:""},bodyExpandRowClassName:{type:[Function,String],default:""},bodyItemClassName:{type:[Function,String],default:""},noHover:{type:Boolean,default:!1},borderCell:{type:Boolean,default:!1},mustSort:{type:Boolean,default:!1},rowsOfPageSeparatorMessage:{type:String,default:"of"},clickEventType:{type:String,default:"single"},clickRowToExpand:{type:Boolean,default:!1}};const ge=e=>((0,r.dD)("data-v-0c7bc512"),e=e(),(0,r.Cn)(),e),ve=["onClick"],ye={key:2,class:"header-text"},be={key:4,class:"multi-sort__number"},we=["onClick","onDblclick"],_e=["onClick"],Ie=["colspan"],Se={key:0,class:"vue3-easy-data-table__loading"},Ee=ge((()=>(0,r._)("div",{class:"vue3-easy-data-table__loading-mask"},null,-1))),Te={class:"loading-entity"},ke={key:1,class:"vue3-easy-data-table__message"},xe={key:0,class:"vue3-easy-data-table__footer"},Ce={key:0,class:"pagination__rows-per-page"},Ae={class:"pagination__items-index"},Ne=(0,r.aZ)({__name:"DataTable",props:m(p({},me),{items:{type:Array,required:!0},headers:{type:Array,required:!0}}),emits:["clickRow","selectRow","deselectRow","expandRow","updateSort","updateFilter","update:itemsSelected","update:serverOptions"],setup(e,{expose:t,emit:n}){const a=e;(0,i.sj)((e=>({"02c8cecc":(0,s.SU)(W),"0f74ecd4":(0,s.SU)($)})));const{clickEventType:u,bodyTextDirection:l,checkboxColumnWidth:c,currentPage:d,expandColumnWidth:h,filterOptions:f,fixedCheckbox:p,fixedExpand:m,fixedHeader:g,fixedIndex:v,headers:y,headerTextDirection:b,indexColumnWidth:w,items:_,itemsSelected:S,loading:E,mustSort:T,multiSort:k,rowsItems:C,rowsPerPage:A,searchField:N,searchValue:D,serverItemsLength:O,serverOptions:R,showIndex:L,sortBy:F,sortType:M,tableHeight:U,tableMinHeight:V,themeColor:B,rowsOfPageSeparatorMessage:j}=(0,s.BK)(a),$=(0,r.Fl)((()=>U.value?`${U.value}px`:null)),W=(0,r.Fl)((()=>`${V.value}px`));(0,r.JJ)("themeColor",B.value);const z=(0,r.Rr)(),G=(0,r.Fl)((()=>!!z.pagination)),K=(0,r.Fl)((()=>!!z.loading)),Y=(0,r.Fl)((()=>!!z.expand)),J=(0,r.Fl)((()=>!!z.body)),X=(0,s.iH)(),Z=(0,s.iH)();(0,r.JJ)("dataTable",X);const ee=(0,s.iH)(!1);(0,r.bv)((()=>{Z.value.addEventListener("scroll",(()=>{ee.value=Z.value.scrollLeft>0}))}));const te=(0,r.Fl)((()=>null!==S.value)),ne=(0,r.Fl)((()=>null!==R.value)),{serverOptionsComputed:he,updateServerOptionsPage:me,updateServerOptionsSort:ge,updateServerOptionsRowsPerPage:Ne}=de(R,k,n),{clientSortOptions:De,headerColumns:Oe,headersForRender:Re,updateSortField:Pe,isMultiSorting:Le,getMultiSortNumber:Fe}=ae(c,h,p,m,v,y,Y,w,te,ne,T,he,L,F,M,k,ge,n),{rowsItemsComputed:Me,rowsPerPageRef:Ue,updateRowsPerPage:Ve}=ce(ne,C,R,A),{totalItems:Be,selectItemsComputed:je,totalItemsLength:$e,toggleSelectAll:qe,toggleSelectItem:We}=pe(De,f,ne,_,S,N,D,O,k,n),{currentPaginationNumber:ze,maxPaginationNumber:He,isLastPage:Ge,isFirstPage:Ke,nextPage:Ye,prevPage:Qe,updatePage:Je,updateCurrentPaginationNumber:Xe}=le(d,ne,E,$e,Ue,R,me),{currentPageFirstIndex:Ze,currentPageLastIndex:et,multipleSelectStatus:tt,pageItems:nt}=ue(ze,te,ne,_,Ue,je,L,Be,$e),rt=(0,r.Fl)((()=>0===ze.value?0:(ze.value-1)*Ue.value)),{expandingItemIndexList:it,updateExpandingItemIndexList:st,clearExpandingItemIndexList:ot}=se(nt,rt,n),{fixedHeaders:at,lastFixedColumn:ut,fixedColumnsInfos:lt}=oe(Re),{clickRow:ct}=ie(u,te,L,n),dt=e=>{var t;const n=null!=(t=e.width)?t:at.value.length?100:null;if(n)return`width: ${n}px; min-width: ${n}px;`},ht=(e,t="th")=>{if(!at.value.length)return;const n=lt.value.find((t=>t.value===e));return n?`left: ${n.distance}px;z-index: ${"th"===t?3:1};position: sticky;`:void 0};return(0,r.YP)(E,((e,t)=>{he.value&&!1===e&&!0===t&&(Xe(he.value.page),ot())})),(0,r.YP)(Ue,(e=>{ne.value?Ne(e):Je(1)})),(0,r.YP)([D,f],(()=>{ne.value||Je(1)})),(0,r.YP)([ze,De,N,D,f],(()=>{ot()}),{deep:!0}),t({currentPageFirstIndex:Ze,currentPageLastIndex:et,clientItemsLength:$e,maxPaginationNumber:He,currentPaginationNumber:ze,isLastPage:Ge,isFirstPage:Ke,nextPage:Ye,prevPage:Qe,updatePage:Je,rowsPerPageOptions:Me,rowsPerPageActiveOption:Ue,updateRowsPerPageActiveOption:Ve}),(e,t)=>((0,r.wg)(),(0,r.iD)("div",{ref_key:"dataTable",ref:X,class:(0,o.C_)(["vue3-easy-data-table",[e.tableClassName]])},[(0,r._)("div",{ref_key:"tableBody",ref:Z,class:(0,o.C_)(["vue3-easy-data-table__main",{"fixed-header":(0,s.SU)(g),"fixed-height":(0,s.SU)(U),"show-shadow":ee.value,"table-fixed":(0,s.SU)(at).length,hoverable:!e.noHover,"border-cell":e.borderCell}])},[(0,r._)("table",null,[(0,r._)("colgroup",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,s.SU)(Re),((e,t)=>((0,r.wg)(),(0,r.iD)("col",{key:t,style:(0,o.j5)(dt(e))},null,4)))),128))]),(0,s.SU)(Re).length&&!e.hideHeader?((0,r.wg)(),(0,r.iD)("thead",{key:0,class:(0,o.C_)(["vue3-easy-data-table__header",[e.headerClassName]])},[(0,r._)("tr",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,s.SU)(Re),((t,n)=>((0,r.wg)(),(0,r.iD)("th",{key:n,class:(0,o.C_)([{sortable:t.sortable,none:t.sortable&&"none"===t.sortType,desc:t.sortable&&"desc"===t.sortType,asc:t.sortable&&"asc"===t.sortType,shadow:t.value===(0,s.SU)(ut)},"string"===typeof e.headerItemClassName?e.headerItemClassName:e.headerItemClassName(t,n+1)]),style:(0,o.j5)(ht(t.value)),onClick:(0,i.iM)((e=>t.sortable&&t.sortType?(0,s.SU)(Pe)(t.value,t.sortType):null),["stop"])},["checkbox"===t.text?((0,r.wg)(),(0,r.j4)(I,{key:(0,s.SU)(tt),status:(0,s.SU)(tt),onChange:(0,s.SU)(qe)},null,8,["status","onChange"])):((0,r.wg)(),(0,r.iD)("span",{key:1,class:(0,o.C_)(["header",`direction-${(0,s.SU)(b)}`])},[(0,s.SU)(z)[`header-${t.value}`]?(0,r.WI)(e.$slots,`header-${t.value}`,(0,o.vs)((0,r.dG)({key:0},t)),void 0,!0):(0,s.SU)(z)[`header-${t.value.toLowerCase()}`]?(0,r.WI)(e.$slots,`header-${t.value.toLowerCase()}`,(0,o.vs)((0,r.dG)({key:1},t)),void 0,!0):((0,r.wg)(),(0,r.iD)("span",ye,(0,o.zw)(t.text),1)),t.sortable?((0,r.wg)(),(0,r.iD)("i",{key:t.sortType?t.sortType:"none",class:(0,o.C_)(["sortType-icon",{desc:"desc"===t.sortType}])},null,2)):(0,r.kq)("",!0),(0,s.SU)(k)&&(0,s.SU)(Le)(t.value)?((0,r.wg)(),(0,r.iD)("span",be,(0,o.zw)((0,s.SU)(Fe)(t.value)),1)):(0,r.kq)("",!0)],2))],14,ve)))),128))])],2)):(0,r.kq)("",!0),(0,s.SU)(J)?(0,r.WI)(e.$slots,"body",(0,o.vs)((0,r.dG)({key:1},(0,s.SU)(nt))),void 0,!0):(0,s.SU)(Oe).length?((0,r.wg)(),(0,r.iD)("tbody",{key:2,class:(0,o.C_)(["vue3-easy-data-table__body",{"row-alternation":e.alternating}])},[(0,r.WI)(e.$slots,"body-prepend",(0,o.vs)((0,r.F4)({items:(0,s.SU)(nt),pagination:{isFirstPage:(0,s.SU)(Ke),isLastPage:(0,s.SU)(Ge),currentPaginationNumber:(0,s.SU)(ze),maxPaginationNumber:(0,s.SU)(He),nextPage:(0,s.SU)(Ye),prevPage:(0,s.SU)(Qe)},headers:(0,s.SU)(Re)})),void 0,!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,s.SU)(nt),((t,n)=>((0,r.wg)(),(0,r.iD)(r.HY,{key:n},[(0,r._)("tr",{class:(0,o.C_)([{"even-row":(n+1)%2===0},"string"===typeof e.bodyRowClassName?e.bodyRowClassName:e.bodyRowClassName(t,n+1)]),onClick:r=>{(0,s.SU)(ct)(t,"single"),e.clickRowToExpand&&(0,s.SU)(st)(n+(0,s.SU)(rt),t,r)},onDblclick:e=>(0,s.SU)(ct)(t,"double")},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,s.SU)(Oe),((i,a)=>((0,r.wg)(),(0,r.iD)("td",{key:a,style:(0,o.j5)(ht(i,"td")),class:(0,o.C_)([{shadow:i===(0,s.SU)(ut),"can-expand":"expand"===i},"string"===typeof e.bodyItemClassName?e.bodyItemClassName:e.bodyItemClassName(i,n+1),`direction-${(0,s.SU)(l)}`]),onClick:e=>"expand"===i?(0,s.SU)(st)(n+(0,s.SU)(rt),t,e):null},[(0,s.SU)(z)[`item-${i}`]?(0,r.WI)(e.$slots,`item-${i}`,(0,o.vs)((0,r.dG)({key:0},t)),void 0,!0):(0,s.SU)(z)[`item-${i.toLowerCase()}`]?(0,r.WI)(e.$slots,`item-${i.toLowerCase()}`,(0,o.vs)((0,r.dG)({key:1},t)),void 0,!0):"expand"===i?((0,r.wg)(),(0,r.iD)("i",{key:2,class:(0,o.C_)(["expand-icon",{expanding:(0,s.SU)(it).includes((0,s.SU)(rt)+n)}])},null,2)):"checkbox"===i?((0,r.wg)(),(0,r.j4)(x,{key:3,checked:t[i],onChange:e=>(0,s.SU)(We)(t)},null,8,["checked","onChange"])):((0,r.wg)(),(0,r.iD)(r.HY,{key:4},[(0,r.Uk)((0,o.zw)((0,s.SU)(fe)(i,t)),1)],64))],14,_e)))),128))],42,we),(0,s.SU)(Y)&&(0,s.SU)(it).includes(n+(0,s.SU)(rt))?((0,r.wg)(),(0,r.iD)("tr",{key:0,class:(0,o.C_)([{"even-row":(n+1)%2===0},"string"===typeof e.bodyExpandRowClassName?e.bodyExpandRowClassName:e.bodyExpandRowClassName(t,n+1)])},[(0,r._)("td",{colspan:(0,s.SU)(Re).length,class:"expand"},[t.expandLoading?((0,r.wg)(),(0,r.j4)(H,{key:0,class:"expand-loading"})):(0,r.kq)("",!0),(0,r.WI)(e.$slots,"expand",(0,o.vs)((0,r.F4)(t)),void 0,!0)],8,Ie)],2)):(0,r.kq)("",!0)],64)))),128)),(0,r.WI)(e.$slots,"body-append",(0,o.vs)((0,r.F4)({items:(0,s.SU)(nt),pagination:{isFirstPage:(0,s.SU)(Ke),isLastPage:(0,s.SU)(Ge),currentPaginationNumber:(0,s.SU)(ze),maxPaginationNumber:(0,s.SU)(He),nextPage:(0,s.SU)(Ye),prevPage:(0,s.SU)(Qe),updatePage:(0,s.SU)(Je)},headers:(0,s.SU)(Re)})),void 0,!0)],2)):(0,r.kq)("",!0)]),(0,s.SU)(E)?((0,r.wg)(),(0,r.iD)("div",Se,[Ee,(0,r._)("div",Te,[(0,s.SU)(K)?(0,r.WI)(e.$slots,"loading",{key:0},void 0,!0):((0,r.wg)(),(0,r.j4)(q,{key:1}))])])):(0,r.kq)("",!0),(0,s.SU)(nt).length||(0,s.SU)(E)?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",ke,(0,o.zw)(e.emptyMessage),1))],2),e.hideFooter?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",xe,[e.hideRowsPerPage?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",Ce,[(0,r.Uk)((0,o.zw)(e.rowsPerPageMessage)+" ",1),(0,r.Wm)(P,{modelValue:(0,s.SU)(Ue),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,s.dq)(Ue)?Ue.value=e:null),"rows-items":(0,s.SU)(Me)},null,8,["modelValue","rows-items"])])),(0,r._)("div",Ae,(0,o.zw)(`${(0,s.SU)(Ze)}–${(0,s.SU)(et)}`)+" "+(0,o.zw)((0,s.SU)(j))+" "+(0,o.zw)((0,s.SU)($e)),1),(0,s.SU)(G)?(0,r.WI)(e.$slots,"pagination",(0,o.vs)((0,r.dG)({key:1},{isFirstPage:(0,s.SU)(Ke),isLastPage:(0,s.SU)(Ge),currentPaginationNumber:(0,s.SU)(ze),maxPaginationNumber:(0,s.SU)(He),nextPage:(0,s.SU)(Ye),prevPage:(0,s.SU)(Qe)})),void 0,!0):((0,r.wg)(),(0,r.j4)(re,{key:2,"is-first-page":(0,s.SU)(Ke),"is-last-page":(0,s.SU)(Ge),onClickNextPage:(0,s.SU)(Ye),onClickPrevPage:(0,s.SU)(Qe)},(0,r.Nv)({_:2},[e.buttonsPagination?{name:"buttonsPagination",fn:(0,r.w5)((()=>[(0,r.Wm)(Q,{"current-pagination-number":(0,s.SU)(ze),"max-pagination-number":(0,s.SU)(He),onUpdatePage:(0,s.SU)(Je)},null,8,["current-pagination-number","max-pagination-number","onUpdatePage"])])),key:"0"}:void 0]),1032,["is-first-page","is-last-page","onClickNextPage","onClickPrevPage"]))]))],2))}});var De=g(Ne,[["__scopeId","data-v-0c7bc512"]]);"undefined"!==typeof window&&window.Vue&&window.Vue.createApp({}).component("Vue3EasyDataTable",De)},2661:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(223),i=n(7142),s=n(7077),o=n(5168);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},l=new r.LL("app-compat","Firebase",u);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:c,removeApp:i,useAsService:d,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw l.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s.initializeApp(i,o);if((0,r.r3)(t,a.name))return t[a.name];const u=new e(a,n);return t[a.name]=u,u}function u(){return Object.keys(t).map((e=>t[e]))}function c(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw l.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function d(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:u}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){const e=c(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:d,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const h=d(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.2.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=h;g()},7077:function(e,t,n){"use strict";n.r(t),n.d(t,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return ye},_DEFAULT_ENTRY_NAME:function(){return se},_addComponent:function(){return le},_addOrOverwriteComponent:function(){return ce},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return ue},_getProvider:function(){return he},_registerComponent:function(){return de},_removeServiceInstance:function(){return fe},deleteApp:function(){return Ie},getApp:function(){return we},getApps:function(){return _e},initializeApp:function(){return be},onLog:function(){return Ee},registerVersion:function(){return Se},setLogLevel:function(){return Te}});n(7658);var r=n(7142),i=n(5168),s=n(223);n(2801);const o=(e,t)=>t.some((t=>e instanceof t));let a,u;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function c(){return u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,h=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(I(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(h.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));h.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?c().includes(e)?function(...t){return e.apply(S(this),t),I(d.get(this))}:function(...t){return I(e.apply(S(this),t))}:function(t,...n){const r=e.call(S(this),t,...n);return f.set(r,t.sort?t.sort():[t]),I(r)}}function _(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&v(e),o(e,l())?new Proxy(e,y):e)}function I(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const S=e=>m.get(e);function E(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=I(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(I(o.result),e.oldVersion,e.newVersion,I(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const T=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],x=new Map;function C(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(x.get(t))return x.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!T.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return x.set(t,s),s}b((e=>({...e,get:(t,n,r)=>C(t,n)||e.get(t,n,r),has:(t,n)=>!!C(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(N(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function N(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const D="@firebase/app",O="0.9.0",R=new i.Yd("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",F="@firebase/analytics",M="@firebase/app-check-compat",U="@firebase/app-check",V="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",$="@firebase/database-compat",q="@firebase/functions",W="@firebase/functions-compat",z="@firebase/installations",H="@firebase/installations-compat",G="@firebase/messaging",K="@firebase/messaging-compat",Y="@firebase/performance",Q="@firebase/performance-compat",J="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.15.0",se="[DEFAULT]",oe={[D]:"fire-core",[P]:"fire-core-compat",[F]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[M]:"fire-app-check-compat",[V]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[$]:"fire-rtdb-compat",[q]:"fire-fn",[W]:"fire-fn-compat",[z]:"fire-iid",[H]:"fire-iid-compat",[G]:"fire-fcm",[K]:"fire-fcm-compat",[Y]:"fire-perf",[Q]:"fire-perf-compat",[J]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ue=new Map;function le(e,t){try{e.container.addComponent(t)}catch(n){R.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ce(e,t){e.container.addOrOverwriteComponent(t)}function de(e){const t=e.name;if(ue.has(t))return R.debug(`There were multiple attempts to register component ${t}.`),!1;ue.set(t,e);for(const n of ae.values())le(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){he(e,t).clearInstance(n)}function pe(){ue.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ge=new s.LL("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=ie;function be(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw ge.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw ge.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw ge.create("duplicate-app",{appName:o})}const u=new r.H0(o);for(const r of ue.values())u.addComponent(r);const l=new ve(n,i,u);return ae.set(o,l),l}function we(e=se){const t=ae.get(e);if(!t&&e===se)return be();if(!t)throw ge.create("no-app",{appName:e});return t}function _e(){return Array.from(ae.values())}async function Ie(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Se(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void R.warn(e.join(" "))}de(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function Ee(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");(0,i.Am)(e,t)}function Te(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="firebase-heartbeat-database",xe=1,Ce="firebase-heartbeat-store";let Ae=null;function Ne(){return Ae||(Ae=E(ke,xe,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ce)}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),Ae}async function De(e){try{const t=await Ne();return t.transaction(Ce).objectStore(Ce).get(Re(e))}catch(t){if(t instanceof s.ZR)R.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});R.warn(e.message)}}}async function Oe(e,t){try{const n=await Ne(),r=n.transaction(Ce,"readwrite"),i=r.objectStore(Ce);return await i.put(t,Re(e)),r.done}catch(n){if(n instanceof s.ZR)R.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});R.warn(e.message)}}}function Re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=1024,Le=2592e6;class Fe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ve(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Me();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Le})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Me(),{heartbeatsToSend:t,unsentEntries:n}=Ue(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Me(){const e=new Date;return e.toISOString().substring(0,10)}function Ue(e,t=Pe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Be(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Be(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ve{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await De(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Oe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Oe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Be(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e){de(new r.wA("platform-logger",(e=>new A(e)),"PRIVATE")),de(new r.wA("heartbeat",(e=>new Fe(e)),"PRIVATE")),Se(D,O,e),Se(D,O,"esm2017"),Se("fire-js","")}je("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return l},wA:function(){return i}});var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(u(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function u(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Am:function(){return d},Ub:function(){return c},Yd:function(){return l},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function c(e){r.forEach((t=>{t.setLogLevel(e)}))}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},1509:function(e,t,n){"use strict";n.d(t,{Z:function(){return r.Z}});var r=n(2661),i="firebase",s="9.15.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.Z.registerVersion(i,s,"app-compat")},5274:function(e,t,n){"use strict";n(7658);var r=n(2661),i=n(223),s=n(7077),o=n(5168);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var u=n(7142);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const l={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},c={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f=d,p=h,m=new i.LL("auth","Firebase",h()),g=new o.Yd("@firebase/auth");function v(e,...t){g.logLevel<=o["in"].ERROR&&g.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e,...t){throw I(e,...t)}function b(e,...t){return I(e,...t)}function w(e,t,n){const r=Object.assign(Object.assign({},p()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}function _(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&y(e,"argument-error"),w(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return m.create(e,...t)}function S(e,t,...n){if(!e)throw I(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function T(e,t){e||E(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=new Map;function x(e){T(e instanceof Function,"Expected a class definition");let t=k.get(e);return t?(T(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,k.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(x);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function N(){return"http:"===D()||"https:"===D()}function D(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(N()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function R(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t){this.shortDelay=e,this.longDelay=t,T(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return O()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){T(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},U=new P(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function B(e,t,n,r,s={}){return j(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),F.fetch()(q(e,e.config.apiHost,n,a),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},s))}))}async function j(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},M),t);try{const t=new W(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw z(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw z(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw z(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw z(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw w(e,a,o);y(e,a)}}catch(s){if(s instanceof i.ZR)throw s;y(e,"network-request-failed")}}async function $(e,t,n,r,i={}){const s=await B(e,t,n,r,i);return"mfaPendingCredential"in s&&y(e,"multi-factor-auth-required",{_serverResponse:s}),s}function q(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?L(e.config,i):`${e.config.apiScheme}://${i}`}class W{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(b(this.auth,"network-request-failed"))),U.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function z(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=b(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t){return B(e,"POST","/v1/accounts:delete",t)}async function G(e,t){return B(e,"POST","/v1/accounts:update",t)}async function K(e,t){return B(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),s=X(r);S(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:Y(J(s.auth_time)),issuedAtTime:Y(J(s.iat)),expirationTime:Y(J(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function J(e){return 1e3*Number(e)}function X(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return v("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(n);return e?JSON.parse(e):(v("Failed to decode base64 JWT payload"),null)}catch(s){return v("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function Z(e){const t=X(e);return S(t,"internal-error"),S("undefined"!==typeof t.exp,"internal-error"),S("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&te(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function te({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Y(this.lastLoginAt),this.creationTime=Y(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ee(e,K(n,{idToken:r}));S(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ae(s.providerUserInfo):[],a=oe(e.providerData,o),u=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),c=!!u&&l,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new re(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function se(e){const t=(0,i.m9)(e);await ie(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oe(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ae(e){return e.map((e=>{var{providerId:t}=e,n=a(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(e,t){const n=await j(e,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=q(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",F.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S("undefined"!==typeof e.idToken,"internal-error"),S("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ue(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new le;return n&&(S("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(S("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(S("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new le,this.toJSON())}_performRefresh(){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t){S("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class de{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ne(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new re(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ee(this,this.stsTokenManager.getToken(this.auth,e));return S(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Q(this,e)}reload(){return se(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new de(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ie(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ee(this,H(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,u,l;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(u=t.createdAt)&&void 0!==u?u:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:I}=t;S(y&&I,e,"internal-error");const E=le.fromJSON(this.name,I);S("string"===typeof y,e,"internal-error"),ce(c,e.name),ce(d,e.name),S("boolean"===typeof b,e,"internal-error"),S("boolean"===typeof w,e,"internal-error"),ce(h,e.name),ce(f,e.name),ce(p,e.name),ce(m,e.name),ce(g,e.name),ce(v,e.name);const T=new de({uid:y,auth:e,email:d,emailVerified:b,displayName:c,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(T.providerData=_.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new le;r.updateFromServerResponse(t);const i=new de({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ie(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}he.type="NONE";const fe=he;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class me{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?de._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new me(x(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||x(fe);const s=pe(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=de._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(u){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(u){}}))),new me(i,e,n)):new me(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(we(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ve(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ie(t))return"Blackberry";if(Se(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||be(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ve(e=(0,i.z$)()){return/firefox\//i.test(e)}function ye(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function be(e=(0,i.z$)()){return/crios\//i.test(e)}function we(e=(0,i.z$)()){return/iemobile/i.test(e)}function _e(e=(0,i.z$)()){return/android/i.test(e)}function Ie(e=(0,i.z$)()){return/blackberry/i.test(e)}function Se(e=(0,i.z$)()){return/webos/i.test(e)}function Ee(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Te(e=(0,i.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function ke(e=(0,i.z$)()){var t;return Ee(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function xe(){return(0,i.w1)()&&10===document.documentMode}function Ce(e=(0,i.z$)()){return Ee(e)||_e(e)||Se(e)||Ie(e)||/windows phone/i.test(e)||we(e)}function Ae(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e,t=[]){let n;switch(e){case"Browser":n=ge((0,i.z$)());break;case"Worker":n=`${ge((0,i.z$)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pe(this),this.idTokenSubscription=new Pe(this),this.beforeStateQueue=new De(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=x(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ie(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&S(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(x(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&x(e)||this._popupRedirectResolver;S(t,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[x(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return S(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ne(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Re(e){return(0,i.m9)(e)}class Pe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Le(e,t,n){const r=Re(e);S(r._canInitEmulator,r,"emulator-config-failed"),S(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Fe(t),{host:o,port:a}=Me(t),u=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ve()}function Fe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Me(e){const t=Fe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ue(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ue(t)}}}function Ue(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ve(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(e,t){return B(e,"POST","/v1/accounts:resetPassword",V(e,t))}async function $e(e,t){return B(e,"POST","/v1/accounts:update",t)}async function qe(e,t){return B(e,"POST","/v1/accounts:update",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(e,t){return $(e,"POST","/v1/accounts:signInWithPassword",V(e,t))}async function ze(e,t){return B(e,"POST","/v1/accounts:sendOobCode",V(e,t))}async function He(e,t){return ze(e,t)}async function Ge(e,t){return ze(e,t)}async function Ke(e,t){return ze(e,t)}async function Ye(e,t){return ze(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,t){return $(e,"POST","/v1/accounts:signInWithEmailLink",V(e,t))}async function Je(e,t){return $(e,"POST","/v1/accounts:signInWithEmailLink",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Be{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Xe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Xe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return We(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qe(e,{email:this._email,oobCode:this._password});default:y(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return $e(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Je(e,{idToken:t,email:this._email,oobCode:this._password});default:y(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(e,t){return $(e,"POST","/v1/accounts:signInWithIdp",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="http://localhost";class tt extends Be{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):y("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=a(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new tt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}buildRequest(){const e={requestUri:et,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t){return B(e,"POST","/v1/accounts:sendVerificationCode",V(e,t))}async function rt(e,t){return $(e,"POST","/v1/accounts:signInWithPhoneNumber",V(e,t))}async function it(e,t){const n=await $(e,"POST","/v1/accounts:signInWithPhoneNumber",V(e,t));if(n.temporaryProof)throw z(e,"account-exists-with-different-credential",n);return n}const st={["USER_NOT_FOUND"]:"user-not-found"};async function ot(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return $(e,"POST","/v1/accounts:signInWithPhoneNumber",V(e,n),st)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Be{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new at({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new at({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return rt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return it(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ot(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new at({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lt(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||t||e}class ct{constructor(e){var t,n,r,s,o,a;const u=(0,i.zd)((0,i.pd)(e)),l=null!==(t=u["apiKey"])&&void 0!==t?t:null,c=null!==(n=u["oobCode"])&&void 0!==n?n:null,d=ut(null!==(r=u["mode"])&&void 0!==r?r:null);S(l&&c&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=c,this.continueUrl=null!==(s=u["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=u["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=u["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=lt(e);try{return new ct(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(){this.providerId=dt.PROVIDER_ID}static credential(e,t){return Xe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ct.parseLink(t);return S(n,"argument-error"),Xe._fromEmailAndCode(e,n.code,n.tenantId)}}dt.PROVIDER_ID="password",dt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",dt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends ht{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class pt extends ft{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return S("providerId"in t&&"signInMethod"in t,"argument-error"),tt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return S(e.idToken||e.accessToken,"argument-error"),tt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return pt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return pt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new pt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends ft{constructor(){super("facebook.com")}static credential(e){return tt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com",mt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends ft{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return gt.credential(t,n)}catch(r){return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com",gt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt extends ft{constructor(){super("github.com")}static credential(e){return tt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch(t){return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com",vt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yt="http://localhost";class bt extends Be{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new bt(n,i):null}static _create(e,t){return new bt(e,t)}buildRequest(){return{requestUri:yt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="saml.";class _t extends ht{constructor(e){S(e.startsWith(wt),"argument-error"),super(e)}static credentialFromResult(e){return _t.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return _t.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=bt.fromJSON(e);return S(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return bt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ft{constructor(){super("twitter.com")}static credential(e,t){return tt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return It.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function St(e,t){return $(e,"POST","/v1/accounts:signUp",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.TWITTER_SIGN_IN_METHOD="twitter.com",It.PROVIDER_ID="twitter.com";class Et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await de._fromIdTokenResponse(e,n,r),s=Tt(n),o=new Et({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Tt(n);return new Et({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Tt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(e){var t;const n=Re(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Et({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await St(n,{returnSecureToken:!0}),i=await Et._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,xt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new xt(e,t,n,r)}}function Ct(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw xt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(e,t){const n=(0,i.m9)(e);await Ot(!0,n,t);const{providerUserInfo:r}=await G(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=At(r||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Dt(e,t,n=!1){const r=await ee(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Et._forOperation(e,"link",r)}async function Ot(e,t,n){await ie(t);const r=At(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";S(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ee(e,Ct(r,i,t,e),n);S(s.idToken,r,"internal-error");const o=X(s.idToken);S(o,r,"internal-error");const{sub:a}=o;return S(e.uid===a,r,"user-mismatch"),Et._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&y(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(e,t,n=!1){const r="signIn",i=await Ct(e,r,t),s=await Et._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Lt(e,t){return Pt(Re(e),t)}async function Ft(e,t){const n=(0,i.m9)(e);return await Ot(!1,n,t.providerId),Dt(n,t)}async function Mt(e,t){return Rt((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(e,t){return $(e,"POST","/v1/accounts:signInWithCustomToken",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e,t){const n=Re(e),r=await Ut(n,{token:t,returnSecureToken:!0}),i=await Et._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?jt._fromServerResponse(e,t):y(e,"internal-error")}}class jt extends Bt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new jt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(e,t,n){var r;S((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),S("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(e,t,n){const r=(0,i.m9)(e),s={requestType:"PASSWORD_RESET",email:t};n&&$t(r,s,n),await Ge(r,s)}async function Wt(e,t,n){await je((0,i.m9)(e),{oobCode:t,newPassword:n})}async function zt(e,t){await qe((0,i.m9)(e),{oobCode:t})}async function Ht(e,t){const n=(0,i.m9)(e),r=await je(n,{oobCode:t}),s=r.requestType;switch(S(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":S(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":S(r.mfaInfo,n,"internal-error");default:S(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=Bt._fromServerResponse(Re(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function Gt(e,t){const{data:n}=await Ht((0,i.m9)(e),t);return n.email}async function Kt(e,t,n){const r=Re(e),i=await St(r,{returnSecureToken:!0,email:t,password:n}),s=await Et._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Yt(e,t,n){return Lt((0,i.m9)(e),dt.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(e,t,n){const r=(0,i.m9)(e),s={requestType:"EMAIL_SIGNIN",email:t};S(n.handleCodeInApp,r,"argument-error"),n&&$t(r,s,n),await Ke(r,s)}function Jt(e,t){const n=ct.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Xt(e,t,n){const r=(0,i.m9)(e),s=dt.credentialWithLink(t,n||A());return S(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Lt(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e,t){return B(e,"POST","/v1/accounts:createAuthUri",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(e,t){const n=N()?A():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:s}=await Zt((0,i.m9)(e),r);return s||[]}async function tn(e,t){const n=(0,i.m9)(e),r=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};t&&$t(n.auth,s,t);const{email:o}=await He(n.auth,s);o!==e.email&&await e.reload()}async function nn(e,t,n){const r=(0,i.m9)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&$t(r.auth,o,n);const{email:a}=await Ye(r.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(e,t){return B(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.m9)(e),s=await r.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await ee(r,rn(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const u=r.providerData.find((({providerId:e})=>"password"===e));u&&(u.displayName=r.displayName,u.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function on(e,t){return un((0,i.m9)(e),t,null)}function an(e,t){return un((0,i.m9)(e),null,t)}async function un(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await ee(e,$e(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=X(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new cn(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new hn(s,i);case"github.com":return new fn(s,i);case"google.com":return new pn(s,i);case"twitter.com":return new mn(s,i,e.screenName||null);case"custom":case"anonymous":return new cn(s,null);default:return new cn(s,r,i)}}class cn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class dn extends cn{constructor(e,t,n,r){super(e,t,n),this.username=r}}class hn extends cn{constructor(e,t){super(e,"facebook.com",t)}}class fn extends dn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class pn extends cn{constructor(e,t){super(e,"google.com",t)}}class mn extends dn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function gn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:ln(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new vn("enroll",e,t)}static _fromMfaPendingCredential(e){return new vn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return vn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return vn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Re(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>Bt._fromServerResponse(n,e)));S(r.mfaPendingCredential,n,"internal-error");const s=vn._fromMfaPendingCredential(r.mfaPendingCredential);return new yn(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Et._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return S(t.user,n,"internal-error"),Et._forOperation(t.user,t.operationType,o);default:y(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function bn(e,t){var n;const r=(0,i.m9)(e),s=t;return S(t.customData.operationType,r,"argument-error"),S(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),yn._fromError(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:start",V(e,t))}function _n(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:finalize",V(e,t))}function In(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:withdraw",V(e,t))}class Sn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Bt._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Sn(e)}async getSession(){return vn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,r=await this.getSession(),i=await ee(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),r=await ee(this.user,In(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==(null===i||void 0===i?void 0:i.code))throw i}}}const En=new WeakMap;function Tn(e){const t=(0,i.m9)(e);return En.has(t)||En.set(t,Sn._fromUser(t)),En.get(t)}const kn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(kn,"1"),this.storage.removeItem(kn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){const e=(0,i.z$)();return ye(e)||Ee(e)}const An=1e3,Nn=10;class Dn extends xn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Cn()&&Ae(),this.fallbackToPolling=Ce(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);xe()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Nn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),An)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dn.type="LOCAL";const On=Dn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends xn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rn.type="SESSION";const Pn=Rn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Fn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Ln(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fn.receivers=[];class Un{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const u=Mn("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function Bn(e){Vn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return"undefined"!==typeof Vn()["WorkerGlobalScope"]&&"function"===typeof Vn()["importScripts"]}async function $n(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function qn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Wn(){return jn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="firebaseLocalStorageDb",Hn=1,Gn="firebaseLocalStorage",Kn="fbase_key";class Yn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Qn(e,t){return e.transaction([Gn],t?"readwrite":"readonly").objectStore(Gn)}function Jn(){const e=indexedDB.deleteDatabase(zn);return new Yn(e).toPromise()}function Xn(){const e=indexedDB.open(zn,Hn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Gn,{keyPath:Kn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Gn)?t(n):(n.close(),await Jn(),t(await Xn()))}))}))}async function Zn(e,t,n){const r=Qn(e,!0).put({[Kn]:t,value:n});return new Yn(r).toPromise()}async function er(e,t){const n=Qn(e,!1).get(t),r=await new Yn(n).toPromise();return void 0===r?null:r.value}function tr(e,t){const n=Qn(e,!0).delete(t);return new Yn(n).toPromise()}const nr=800,rr=3;class ir{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Xn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>rr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fn._getInstance(Wn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await $n(),!this.activeServiceWorker)return;this.sender=new Un(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&qn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xn();return await Zn(e,kn,"1"),await tr(e,kn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Zn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>er(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>tr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Qn(e,!1).getAll();return new Yn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),nr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ir.type="LOCAL";const sr=ir;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:start",V(e,t))}function ar(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:finalize",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(e){return(await B(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function cr(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=b("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",lr().appendChild(r)}))}function dr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=500,fr=6e4,pr=1e12;class mr{constructor(e){this.auth=e,this.counter=pr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new gr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||pr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||pr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||pr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class gr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;S(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=vr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),fr)}),hr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function vr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=dr("rcb"),br=new P(3e4,6e4),wr="https://www.google.com/recaptcha/api.js?";class _r{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=Vn().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return S(Ir(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Vn().grecaptcha):new Promise(((n,r)=>{const s=Vn().setTimeout((()=>{r(b(e,"network-request-failed"))}),br.get());Vn()[yr]=()=>{Vn().clearTimeout(s),delete Vn()[yr];const i=Vn().grecaptcha;if(!i)return void r(b(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const o=`${wr}?${(0,i.xO)({onload:yr,render:"explicit",hl:t})}`;cr(o).catch((()=>{clearTimeout(s),r(b(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=Vn().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Ir(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Sr{async load(e){return new mr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="recaptcha",Tr={theme:"light",type:"image"};class kr{constructor(e,t=Object.assign({},Tr),n){this.parameters=t,this.type=Er,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Re(n),this.isInvisible="invisible"===this.parameters.size,S("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;S(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Sr:new _r,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){S(!this.parameters.sitekey,this.auth,"argument-error"),S(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),S("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=Vn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){S(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){S(N()&&!jn(),this.auth,"internal-error"),await xr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ur(this.auth);S(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return S(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function xr(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=at._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Ar(e,t,n){const r=Re(e),s=await Or(r,t,(0,i.m9)(n));return new Cr(s,(e=>Lt(r,e)))}async function Nr(e,t,n){const r=(0,i.m9)(e);await Ot(!1,r,"phone");const s=await Or(r.auth,t,(0,i.m9)(n));return new Cr(s,(e=>Ft(r,e)))}async function Dr(e,t,n){const r=(0,i.m9)(e),s=await Or(r.auth,t,(0,i.m9)(n));return new Cr(s,(e=>Mt(r,e)))}async function Or(e,t,n){var r;const i=await n.verify();try{let s;if(S("string"===typeof i,e,"argument-error"),S(n.type===Er,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){S("enroll"===t.type,e,"internal-error");const n=await wn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{S("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;S(n,e,"missing-multi-factor-info");const o=await or(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await nt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Rr(e,t){await Dt((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.providerId=Pr.PROVIDER_ID,this.auth=Re(e)}verifyPhoneNumber(e,t){return Or(this.auth,e,(0,i.m9)(t))}static credential(e,t){return at._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Pr.credentialFromTaggedObject(t)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?at._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lr(e,t){return t?x(t):(S(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr.PROVIDER_ID="phone",Pr.PHONE_SIGN_IN_METHOD="phone";class Fr extends Be{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ze(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ze(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ze(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mr(e){return Pt(e.auth,new Fr(e),e.bypassAuthState)}function Ur(e){const{auth:t,user:n}=e;return S(n,t,"internal-error"),Rt(n,new Fr(e),e.bypassAuthState)}async function Vr(e){const{auth:t,user:n}=e;return S(n,t,"internal-error"),Dt(n,new Fr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mr;case"linkViaPopup":case"linkViaRedirect":return Vr;case"reauthViaPopup":case"reauthViaRedirect":return Ur;default:y(this.auth,"internal-error")}}resolve(e){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new P(2e3,1e4);async function $r(e,t,n){const r=Re(e);_(e,t,ht);const i=Lr(r,n),s=new zr(r,"signInViaPopup",t,i);return s.executeNotNull()}async function qr(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,ht);const s=Lr(r.auth,n),o=new zr(r.auth,"reauthViaPopup",t,s,r);return o.executeNotNull()}async function Wr(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,ht);const s=Lr(r.auth,n),o=new zr(r.auth,"linkViaPopup",t,s,r);return o.executeNotNull()}class zr extends Br{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){T(1===this.filter.length,"Popup operations only handle one event");const e=Mn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(b(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(b(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(b(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,jr.get())};e()}}zr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hr="pendingRedirect",Gr=new Map;class Kr extends Br{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Gr.get(this.auth._key());if(!e){try{const t=await Yr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Gr.set(this.auth._key(),e)}return this.bypassAuthState||Gr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Yr(e,t){const n=ei(t),r=Zr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function Qr(e,t){return Zr(e)._set(ei(t),"true")}function Jr(){Gr.clear()}function Xr(e,t){Gr.set(e._key(),t)}function Zr(e){return x(e._redirectPersistence)}function ei(e){return pe(Hr,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(e,t,n){return ni(e,t,n)}async function ni(e,t,n){const r=Re(e);_(e,t,ht);const i=Lr(r,n);return await Qr(i,r),i._openRedirect(r,t,"signInViaRedirect")}function ri(e,t,n){return ii(e,t,n)}async function ii(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,ht);const s=Lr(r.auth,n);await Qr(s,r.auth);const o=await li(r);return s._openRedirect(r.auth,t,"reauthViaRedirect",o)}function si(e,t,n){return oi(e,t,n)}async function oi(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,ht);const s=Lr(r.auth,n);await Ot(!1,r,t.providerId),await Qr(s,r.auth);const o=await li(r);return s._openRedirect(r.auth,t,"linkViaRedirect",o)}async function ai(e,t){return await Re(e)._initializationPromise,ui(e,t,!1)}async function ui(e,t,n=!1){const r=Re(e),i=Lr(r,t),s=new Kr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function li(e){const t=Mn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=6e5;class di{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!pi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!fi(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(b(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ci&&this.cachedEventUids.clear(),this.cachedEventUids.has(hi(e))}saveEventToCache(e){this.cachedEventUids.add(hi(e)),this.lastProcessedEventTime=Date.now()}}function hi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function fi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function pi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fi(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(e,t={}){return B(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vi=/^https?/;async function yi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await mi(e);for(const r of t)try{if(bi(r))return}catch(n){}y(e,"unauthorized-domain")}function bi(e){const t=A(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!vi.test(n))return!1;if(gi.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new P(3e4,6e4);function _i(){const e=Vn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Ii(e){return new Promise(((t,n)=>{var r,i,s;function o(){_i(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{_i(),n(b(e,"network-request-failed"))},timeout:wi.get()})}if(null===(i=null===(r=Vn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Vn().gapi)||void 0===s?void 0:s.load)){const t=dr("iframefcb");return Vn()[t]=()=>{gapi.load?o():n(b(e,"network-request-failed"))},cr(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Si=null,e}))}let Si=null;function Ei(e){return Si=Si||Ii(e),Si}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new P(5e3,15e3),ki="__/auth/iframe",xi="emulator/auth/iframe",Ci={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ai=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ni(e){const t=e.config;S(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?L(t,xi):`https://${e.config.authDomain}/${ki}`,r={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=Ai.get(e.config.apiHost);o&&(r.eid=o);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}async function Di(e){const t=await Ei(e),n=Vn().gapi;return S(n,e,"internal-error"),t.open({where:document.body,url:Ni(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ci,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=b(e,"network-request-failed"),s=Vn().setTimeout((()=>{r(i)}),Ti.get());function o(){Vn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ri=500,Pi=600,Li="_blank",Fi="http://localhost";class Mi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ui(e,t,n,r=Ri,s=Pi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const l=Object.assign(Object.assign({},Oi),{width:r.toString(),height:s.toString(),top:o,left:a}),c=(0,i.z$)().toLowerCase();n&&(u=be(c)?Li:n),ve(c)&&(t=t||Fi,l.scrollbars="yes");const d=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ke(c)&&"_self"!==u)return Vi(t||"",u),new Mi(null);const h=window.open(t||"",u,d);S(h,e,"popup-blocked");try{h.focus()}catch(f){}return new Mi(h)}function Vi(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="__/auth/handler",ji="emulator/auth/handler";function $i(e,t,n,r,o,a){S(e.config.authDomain,e,"auth-domain-config-required"),S(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.SDK_VERSION,eventId:o};if(t instanceof ht){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))u[e]=t}if(t instanceof ft){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(u.scopes=e.join(","))}e.tenantId&&(u.tid=e.tenantId);const l=u;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];return`${qi(e)}?${(0,i.xO)(l).slice(1)}`}function qi({config:e}){return e.emulator?L(e,ji):`https://${e.authDomain}/${Bi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="webStorageSupport";class zi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pn,this._completeRedirectFn=ui,this._overrideRedirectResult=Xr}async _openPopup(e,t,n,r){var i;T(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=$i(e,t,n,A(),r);return Ui(e,s,Mn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Bn($i(e,t,n,A(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(T(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Di(e),n=new di(e);return t.register("authEvent",(t=>{S(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Wi,{type:Wi},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Wi];void 0!==i&&t(!!i),y(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ce()||ye()||Ee()}}const Hi=zi;class Gi{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}}class Ki extends Gi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ki(e)}_finalizeEnroll(e,t,n){return _n(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return ar(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Yi{constructor(){}static assertion(e){return Ki._fromCredential(e)}}Yi.FACTOR_ID="phone";var Qi="@firebase/auth",Ji="0.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function es(e){(0,s._registerComponent)(new u.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{S(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),S(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ne(e)},a=new Oe(t,r,i);return C(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,s._registerComponent)(new u.wA("auth-internal",(e=>{const t=Re(e.getProvider("auth").getImmediate());return(e=>new Xi(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(Qi,Ji,Zi(e)),(0,s.registerVersion)(Qi,Ji,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=300;(0,i.Pz)("authIdTokenMaxAge");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ns(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */es("Browser");const rs=2e3;async function is(e,t,n){var r;const{BuildInfo:i}=ns();T(t.sessionId,"AuthEvent did not contain a session ID");const s=await ls(t.sessionId),o={};return Ee()?o["ibi"]=i.packageName:_e()?o["apn"]=i.packageName:y(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,$i(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function ss(e){const{BuildInfo:t}=ns(),n={};Ee()?n.iosBundleId=t.packageName:_e()?n.androidPackageName=t.packageName:y(e,"operation-not-supported-in-this-environment"),await mi(e,n)}function os(e){const{cordova:t}=ns();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Te()?"_blank":"_system","location=yes"),n(i)}))}))}async function as(e,t,n){const{cordova:r}=ns();let i=()=>{};try{await new Promise(((s,o)=>{let a=null;function u(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function l(){a||(a=window.setTimeout((()=>{o(b(e,"redirect-cancelled-by-user"))}),rs))}function c(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&l()}t.addPassiveListener(u),document.addEventListener("resume",l,!1),_e()&&document.addEventListener("visibilitychange",c,!1),i=()=>{t.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}}))}finally{i()}}function us(e){var t,n,r,i,s,o,a,u,l,c;const d=ns();S("function"===typeof(null===(t=null===d||void 0===d?void 0:d.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),S("undefined"!==typeof(null===(n=null===d||void 0===d?void 0:d.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),S("function"===typeof(null===(s=null===(i=null===(r=null===d||void 0===d?void 0:d.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S("function"===typeof(null===(u=null===(a=null===(o=null===d||void 0===d?void 0:d.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===u?void 0:u.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S("function"===typeof(null===(c=null===(l=null===d||void 0===d?void 0:d.cordova)||void 0===l?void 0:l.InAppBrowser)||void 0===c?void 0:c.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ls(e){const t=cs(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function cs(e){if(T(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=20;class hs extends di{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function fs(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:vs(),postBody:null,tenantId:e.tenantId,error:b(e,"no-auth-event")}}function ps(e,t){return ys()._set(bs(e),t)}async function ms(e){const t=await ys()._get(bs(e));return t&&await ys()._remove(bs(e)),t}function gs(e,t){var n,r;const i=_s(t);if(i.includes("/__/auth/callback")){const t=Is(i),s=t["firebaseError"]?ws(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?b(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function vs(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<ds;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function ys(){return x(On)}function bs(e){return pe("authEvent",e.config.apiKey,e.name)}function ws(e){try{return JSON.parse(e)}catch(t){return null}}function _s(e){const t=Is(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=Is(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=Is(i)["link"];return s||i||r||n||e}function Is(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=500;class Es{constructor(){this._redirectPersistence=Pn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ui,this._overrideRedirectResult=Xr}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new hs(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){y(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){us(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Jr(),await this._originValidation(e);const s=fs(e,n,r);await ps(e,s);const o=await is(e,s,t),a=await os(o);return as(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ss(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=ns(),s=setTimeout((async()=>{await ms(e),t.onEvent(ks())}),Ss),o=async n=>{clearTimeout(s);const r=await ms(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=gs(r,n["url"])),t.onEvent(i||ks())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,u=`${i.packageName.toLowerCase()}://`;ns().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(u)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const Ts=Es;function ks(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:b("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(e,t){Re(e)._logFramework(t)}var Cs="@firebase/auth-compat",As="0.3.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ns=1e3;function Ds(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function Os(){return"http:"===Ds()||"https:"===Ds()}function Rs(e=(0,i.z$)()){return!("file:"!==Ds()&&"ionic:"!==Ds()&&"capacitor:"!==Ds()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Ps(){return(0,i.b$)()||(0,i.UG)()}function Ls(){return(0,i.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function Fs(e=(0,i.z$)()){return/Edge\/\d+/.test(e)}function Ms(e=(0,i.z$)()){return Ls()||Fs(e)}function Us(){try{const e=self.localStorage,t=Mn();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!Ms()||(0,i.hl)()}catch(e){return Vs()&&(0,i.hl)()}return!1}function Vs(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function Bs(){return(Os()||(0,i.ru)()||Rs())&&!Ps()&&Us()&&!Vs()}function js(){return Rs()&&"undefined"!==typeof document}async function $s(){return!!js()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),Ns);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function qs(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws={LOCAL:"local",NONE:"none",SESSION:"session"},zs=S,Hs="persistence";function Gs(e,t){zs(Object.values(Ws).includes(t),e,"invalid-persistence-type"),(0,i.b$)()?zs(t!==Ws.SESSION,e,"unsupported-persistence-type"):(0,i.UG)()?zs(t===Ws.NONE,e,"unsupported-persistence-type"):Vs()?zs(t===Ws.NONE||t===Ws.LOCAL&&(0,i.hl)(),e,"unsupported-persistence-type"):zs(t===Ws.NONE||Us(),e,"unsupported-persistence-type")}async function Ks(e){await e._initializationPromise;const t=Qs(),n=pe(Hs,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function Ys(e,t){const n=Qs();if(!n)return[];const r=pe(Hs,e,t),i=n.getItem(r);switch(i){case Ws.NONE:return[fe];case Ws.LOCAL:return[sr,Pn];case Ws.SESSION:return[Pn];default:return[]}}function Qs(){var e;try{return(null===(e=qs())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=S;class Xs{constructor(){this.browserResolver=x(Hi),this.cordovaResolver=x(Ts),this.underlyingResolver=null,this._redirectPersistence=Pn,this._completeRedirectFn=ui,this._overrideRedirectResult=Xr}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return js()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Js(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await $s();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(e){return e.unwrap()}function eo(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(e){return ro(e)}function no(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===t||void 0===t?void 0:t.code)){const n=t;n.resolver=new oo(e,bn(e,t))}else if(r){const e=ro(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function ro(e){const{_tokenResponse:t}=e instanceof i.ZR?e.customData:e;if(!t)return null;if(!(e instanceof i.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return Pr.credentialFromResult(e);const n=t.providerId;if(!n||n===l.PASSWORD)return null;let r;switch(n){case l.GOOGLE:r=gt;break;case l.FACEBOOK:r=mt;break;case l.GITHUB:r=vt;break;case l.TWITTER:r=It;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?bt._create(n,o):tt._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new pt(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof i.ZR?r.credentialFromError(e):r.credentialFromResult(e)}function io(e,t){return t.catch((t=>{throw t instanceof i.ZR&&no(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:to(e),additionalUserInfo:gn(e),user:ao.getOrCreate(n)}}))}async function so(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>io(e,n.confirm(t))}}class oo{constructor(e,t){this.resolver=t,this.auth=eo(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return io(Zs(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this._delegate=e,this.multiFactor=Tn(e)}static getOrCreate(e){return ao.USER_MAP.has(e)||ao.USER_MAP.set(e,new ao(e)),ao.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return io(this.auth,Ft(this._delegate,e))}async linkWithPhoneNumber(e,t){return so(this.auth,Nr(this._delegate,e,t))}async linkWithPopup(e){return io(this.auth,Wr(this._delegate,e,Xs))}async linkWithRedirect(e){return await Ks(Re(this.auth)),si(this._delegate,e,Xs)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return io(this.auth,Mt(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return so(this.auth,Dr(this._delegate,e,t))}reauthenticateWithPopup(e){return io(this.auth,qr(this._delegate,e,Xs))}async reauthenticateWithRedirect(e){return await Ks(Re(this.auth)),ri(this._delegate,e,Xs)}sendEmailVerification(e){return tn(this._delegate,e)}async unlink(e){return await Nt(this._delegate,e),this}updateEmail(e){return on(this._delegate,e)}updatePassword(e){return an(this._delegate,e)}updatePhoneNumber(e){return Rr(this._delegate,e)}updateProfile(e){return sn(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return nn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ao.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const uo=S;class lo{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;uo(n,"invalid-api-key",{appName:e.name}),uo(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?Xs:void 0;this._delegate=t.initialize({options:{persistence:ho(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(f),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ao.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Le(this._delegate,e,t)}applyActionCode(e){return zt(this._delegate,e)}checkActionCode(e){return Ht(this._delegate,e)}confirmPasswordReset(e,t){return Wt(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return io(this._delegate,Kt(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return en(this._delegate,e)}isSignInWithEmailLink(e){return Jt(this._delegate,e)}async getRedirectResult(){uo(Bs(),this._delegate,"operation-not-supported-in-this-environment");const e=await ai(this._delegate,Xs);return e?io(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){xs(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=co(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=co(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return Qt(this._delegate,e,t)}sendPasswordResetEmail(e,t){return qt(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(Gs(this._delegate,e),e){case Ws.SESSION:t=Pn;break;case Ws.LOCAL:const e=await x(sr)._isAvailable();t=e?sr:On;break;case Ws.NONE:t=fe;break;default:return y("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return io(this._delegate,kt(this._delegate))}signInWithCredential(e){return io(this._delegate,Lt(this._delegate,e))}signInWithCustomToken(e){return io(this._delegate,Vt(this._delegate,e))}signInWithEmailAndPassword(e,t){return io(this._delegate,Yt(this._delegate,e,t))}signInWithEmailLink(e,t){return io(this._delegate,Xt(this._delegate,e,t))}signInWithPhoneNumber(e,t){return so(this._delegate,Ar(this._delegate,e,t))}async signInWithPopup(e){return uo(Bs(),this._delegate,"operation-not-supported-in-this-environment"),io(this._delegate,$r(this._delegate,e,Xs))}async signInWithRedirect(e){return uo(Bs(),this._delegate,"operation-not-supported-in-this-environment"),await Ks(this._delegate),ti(this._delegate,e,Xs)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Gt(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function co(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&ao.getOrCreate(e));return{next:s,error:t,complete:n}}function ho(e,t){const n=Ys(e,t);if("undefined"===typeof self||n.includes(sr)||n.push(sr),"undefined"!==typeof window)for(const r of[On,Pn])n.includes(r)||n.push(r);return n.includes(fe)||n.push(fe),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lo.Persistence=Ws;class fo{constructor(){this.providerId="phone",this._delegate=new Pr(Zs(r.Z.auth()))}static credential(e,t){return Pr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}fo.PHONE_SIGN_IN_METHOD=Pr.PHONE_SIGN_IN_METHOD,fo.PROVIDER_ID=Pr.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const po=S;class mo{constructor(e,t,n=r.Z.app()){var i;po(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new kr(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go="auth-compat";function vo(e){e.INTERNAL.registerComponent(new u.wA(go,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new lo(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:c.EMAIL_SIGNIN,PASSWORD_RESET:c.PASSWORD_RESET,RECOVER_EMAIL:c.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:c.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:c.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:c.VERIFY_EMAIL}},EmailAuthProvider:dt,FacebookAuthProvider:mt,GithubAuthProvider:vt,GoogleAuthProvider:gt,OAuthProvider:pt,SAMLAuthProvider:_t,PhoneAuthProvider:fo,PhoneMultiFactorGenerator:Yi,RecaptchaVerifier:mo,TwitterAuthProvider:It,Auth:lo,AuthCredential:Be,Error:i.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(Cs,As)}vo(r.Z)},9476:function(e,t,n){"use strict";var r,i=n(2661),s=(n(7658),n(2801),n(7077)),o=n(7142),a=n(5168),u=n(223),l=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),c={},d=d||{},h=l||self;function f(){}function p(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function m(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e){return Object.prototype.hasOwnProperty.call(e,v)&&e[v]||(e[v]=++y)}var v="closure_uid_"+(1e9*Math.random()>>>0),y=0;function b(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _(e,t,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?b:w,_.apply(null,arguments)}function I(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function S(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.na=function(){this.s||(this.s=!0,this.M(),0==T)||g(this)},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function x(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function C(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(p(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function A(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",f,t),h.removeEventListener("test",f,t)}catch(n){}return e}();function D(e){return/^[\s\xa0]*$/.test(e)}var O=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function R(e,t){return e<t?-1:e>t?1:0}function P(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function L(e){return-1!=P().indexOf(e)}function F(e){return F[" "](e),e}function M(e){var t=Q;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}F[" "]=f;var U,V=L("Opera"),B=L("Trident")||L("MSIE"),j=L("Edge"),$=j||B,q=L("Gecko")&&!(-1!=P().toLowerCase().indexOf("webkit")&&!L("Edge"))&&!(L("Trident")||L("MSIE"))&&!L("Edge"),W=-1!=P().toLowerCase().indexOf("webkit")&&!L("Edge");function z(){var e=h.document;return e?e.documentMode:void 0}e:{var H="",G=function(){var e=P();return q?/rv:([^\);]+)(\)|;)/.exec(e):j?/Edge\/([\d\.]+)/.exec(e):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):W?/WebKit\/(\S+)/.exec(e):V?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(G&&(H=G?G[1]:""),B){var K=z();if(null!=K&&K>parseFloat(H)){U=String(K);break e}}U=H}var Y,Q={};function J(){return M((function(){let e=0;const t=O(String(U)).split("."),n=O("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=R(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||R(0==i[2].length,0==s[2].length)||R(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(h.document&&B){var X=z();Y=X||(parseInt(U,10)||void 0)}else Y=void 0;var Z=Y;function ee(e,t){if(A.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(q){e:{try{F(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:te[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ee.X.h.call(this)}}S(ee,A);var te={2:"touch",3:"pen",4:"mouse"};ee.prototype.h=function(){ee.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ne="closure_listenable_"+(1e6*Math.random()|0),re=0;function ie(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++re,this.ba=this.ea=!1}function se(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function oe(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ae(e){const t={};for(const n in e)t[n]=e[n];return t}const ue="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function le(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ue.length;t++)n=ue[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ce(e){this.src=e,this.g={},this.h=0}function de(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=k(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(se(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function he(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}ce.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=he(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new ie(t,this.src,s,!!r,i),t.ea=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function me(e,t,n,r,i){if(r&&r.once)return ye(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)me(e,t[s],n,r,i);return null}return n=Te(n),e&&e[ne]?e.N(t,n,m(r)?!!r.capture:!!r,i):ge(e,t,n,!1,r,i)}function ge(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=m(i)?!!i.capture:!!i,a=Se(e);if(a||(e[fe]=a=new ce(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ve(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)N||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(_e(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ve(){function e(n){return t.call(e.src,e.listener,n)}const t=Ie;return e}function ye(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ye(e,t[s],n,r,i);return null}return n=Te(n),e&&e[ne]?e.O(t,n,m(r)?!!r.capture:!!r,i):ge(e,t,n,!0,r,i)}function be(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)be(e,t[s],n,r,i);else r=m(r)?!!r.capture:!!r,n=Te(n),e&&e[ne]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=he(s,n,r,i),-1<n&&(se(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Se(e))&&(t=e.g[t.toString()],e=-1,t&&(e=he(t,n,r,i)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[ne])de(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(_e(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Se(t))?(de(n,e),0==n.h&&(n.src=null,t[fe]=null)):se(e)}}}function _e(e){return e in pe?pe[e]:pe[e]="on"+e}function Ie(e,t){if(e.ba)e=!0;else{t=new ee(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&we(e),e=n.call(r,t)}return e}function Se(e){return e=e[fe],e instanceof ce?e:null}var Ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function Te(e){return"function"===typeof e?e:(e[Ee]||(e[Ee]=function(t){return e.handleEvent(t)}),e[Ee])}function ke(){E.call(this),this.i=new ce(this),this.P=this,this.I=null}function xe(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new A(t,e);else if(t instanceof A)t.target=t.target||e;else{var i=t;t=new A(r,e),le(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ce(o,r,!0,t)&&i}if(o=t.g=e,i=Ce(o,r,!0,t)&&i,i=Ce(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ce(o,r,!1,t)&&i}function Ce(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&de(e.i,o),i=!1!==a.call(u,r)&&i}}return i&&!r.defaultPrevented}S(ke,E),ke.prototype[ne]=!0,ke.prototype.removeEventListener=function(e,t,n,r){be(this,e,t,n,r)},ke.prototype.M=function(){if(ke.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)se(n[r]);delete t.g[e],t.h--}}this.I=null},ke.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ke.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ae=h.JSON.stringify;function Ne(){var e=Ve;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class De{constructor(){this.h=this.g=null}add(e,t){const n=Re.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Oe,Re=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Pe),(e=>e.reset()));class Pe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Le(e){h.setTimeout((()=>{throw e}),0)}function Fe(e,t){Oe||Me(),Ue||(Oe(),Ue=!0),Ve.add(e,t)}function Me(){var e=h.Promise.resolve(void 0);Oe=function(){e.then(Be)}}var Ue=!1,Ve=new De;function Be(){for(var e;e=Ne();){try{e.h.call(e.g)}catch(n){Le(n)}var t=Re;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ue=!1}function je(e,t){ke.call(this),this.h=e||1,this.g=t||h,this.j=_(this.lb,this),this.l=Date.now()}function $e(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function qe(e,t,n){if("function"===typeof e)n&&(e=_(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=_(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function We(e){e.g=qe((()=>{e.g=null,e.i&&(e.i=!1,We(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}S(je,ke),r=je.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),xe(this,"tick"),this.ca&&($e(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){je.X.M.call(this),$e(this),delete this.g};class ze extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:We(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(e){E.call(this),this.h=e,this.g={}}S(He,E);var Ge=[];function Ke(e,t,n,r){Array.isArray(n)||(n&&(Ge[0]=n.toString()),n=Ge);for(var i=0;i<n.length;i++){var s=me(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ye(e){oe(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Qe(){this.g=!0}function Je(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var d=c.split("_");o=2<=d.length&&"type"==d[1]?o+(c+"=")+l+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Xe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,n)+(r?" "+r:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ae(n)}catch(a){return t}}He.prototype.M=function(){He.X.M.call(this),Ye(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qe.prototype.Aa=function(){this.g=!1},Qe.prototype.info=function(){};var nt={},rt=null;function it(){return rt=rt||new ke}function st(e){A.call(this,nt.Pa,e)}function ot(e){const t=it();xe(t,new st(t))}function at(e,t){A.call(this,nt.STAT_EVENT,e),this.stat=t}function ut(e){const t=it();xe(t,new at(t,e))}function lt(e,t){A.call(this,nt.Qa,e),this.size=t}function ct(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}nt.Pa="serverreachability",S(st,A),nt.STAT_EVENT="statevent",S(at,A),nt.Qa="timingevent",S(lt,A);var dt={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ht={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ft(){}function pt(e){return e.h||(e.h=e.i())}function mt(){}ft.prototype.h=null;var gt,vt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function yt(){A.call(this,"d")}function bt(){A.call(this,"c")}function wt(){}function _t(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new He(this),this.O=St,e=$?125:void 0,this.T=new je(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new It}function It(){this.i=null,this.g="",this.h=!1}S(yt,A),S(bt,A),S(wt,ft),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},gt=new wt;var St=45e3,Et={},Tt={};function kt(e,t,n){e.K=1,e.v=Kt(qt(t)),e.s=n,e.P=!0,xt(e,null)}function xt(e,t){e.F=Date.now(),Dt(e),e.A=qt(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),un(n.i,"t",r),e.C=0,n=e.l.H,e.h=new It,e.g=hr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new ze(_(e.La,e,e.g),e.N)),Ke(e.S,e.g,"readystatechange",e.ib),t=e.H?ae(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),ot(),Je(e.j,e.u,e.A,e.m,e.U,e.s)}function Ct(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function At(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Nt(e,n),r==Tt){4==t&&(e.o=4,ut(14),i=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==Et){e.o=4,ut(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ze(e.j,e.m,r,null),Ft(e,r)}Ct(e)&&r!=Tt&&r!=Et&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ut(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ir(t),t.K=!0,ut(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Lt(e),Pt(e))}function Nt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Tt:(n=Number(t.substring(n,r)),isNaN(n)?Et:(r+=1,r+n>t.length?Tt:(t=t.substr(r,n),e.C=r+n,t)))}function Dt(e){e.V=Date.now()+e.O,Ot(e,e.O)}function Ot(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ct(_(e.gb,e),t)}function Rt(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Pt(e){0==e.l.G||e.I||ar(e.l,e)}function Lt(e){Rt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,$e(e.T),Ye(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ft(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||gn(n.h,e)))if(!e.J&&gn(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;or(n),Yn(n)}rr(n),ut(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=ct(_(n.cb,n),6e3));if(1>=mn(n.h)&&n.ja){try{n.ja()}catch(l){}n.ja=void 0}}else lr(n,11)}else if((e.J||n.g==e)&&or(n),!D(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.I=l[1],n.ka=l[2];const t=l[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=l[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const c=l[5];null!=c&&"number"===typeof c&&0<c&&(r=1.5*c,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(vn(s,s.h),s.h=null))}if(r.D){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,Gt(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=dr(r,r.H?r.ka:null,r.V),o.J){yn(r.h,o);var a=o,u=r.J;u&&a.setTimeout(u),a.B&&(Rt(a),Dt(a)),r.g=o}else nr(r);0<n.i.length&&Jn(n)}else"stop"!=l[0]&&"close"!=l[0]||lr(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?lr(n,7):Kn(n):"noop"!=l[0]&&n.l&&n.l.wa(l),n.A=0)}ot(4)}catch(l){}}function Mt(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(p(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ut(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(p(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Vt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(p(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Ut(e),r=Mt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=_t.prototype,r.setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==$n(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const c=$n(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>c)&&(3!=c||$||this.g&&(this.h.h||this.g.fa()||qn(this.g)))){this.I||4!=c||7==t||ot(8==t||0>=d?3:2),Rt(this);var n=this.g.aa();this.Y=n;t:if(Ct(this)){var r=qn(this.g);e="";var i=r.length,s=4==$n(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Lt(this),Pt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Xe(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,ut(12),Lt(this),Pt(this);break e}Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ft(this,n)}this.P?(At(this,c,o),$&&this.i&&3==c&&(Ke(this.S,this.T,"tick",this.hb),this.T.start())):(Ze(this.j,this.m,o,null),Ft(this,o)),4==c&&Lt(this),this.i&&!this.I&&(4==c?ar(this.l,this):(this.i=!1,Dt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ut(12)):(this.o=0,ut(13)),Lt(this),Pt(this)}}}catch(c){}},r.hb=function(){if(this.g){var e=$n(this.g),t=this.g.fa();this.C<t.length&&(Rt(this),At(this,e,t),this.i&&4!=e&&Dt(this))}},r.cancel=function(){this.I=!0,Lt(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(et(this.j,this.A),2!=this.K&&(ot(),ut(17)),Lt(this),this.o=2,Pt(this)):Ot(this,this.V-e)};var Bt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $t(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof $t){this.h=void 0!==t?t:e.h,Wt(this,e.j),this.s=e.s,this.g=e.g,zt(this,e.m),this.l=e.l,t=e.i;var n=new rn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ht(this,n),this.o=e.o}else e&&(n=String(e).match(Bt))?(this.h=!!t,Wt(this,n[1]||"",!0),this.s=Yt(n[2]||""),this.g=Yt(n[3]||"",!0),zt(this,n[4]),this.l=Yt(n[5]||"",!0),Ht(this,n[6]||"",!0),this.o=Yt(n[7]||"")):(this.h=!!t,this.i=new rn(null,this.h))}function qt(e){return new $t(e)}function Wt(e,t,n){e.j=n?Yt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function zt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ht(e,t,n){t instanceof rn?(e.i=t,cn(e.i,e.h)):(n||(t=Qt(t,tn)),e.i=new rn(t,e.h))}function Gt(e,t,n){e.i.set(t,n)}function Kt(e){return Gt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Yt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Qt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Jt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Jt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}$t.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Qt(t,Xt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Qt(t,Xt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Qt(n,"/"==n.charAt(0)?en:Zt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Qt(n,nn)),e.join("")};var Xt=/[#\/\?@]/g,Zt=/[#\?:]/g,en=/[#\?]/g,tn=/[#\?@]/g,nn=/#/g;function rn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function sn(e){e.g||(e.g=new Map,e.h=0,e.i&&jt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function on(e,t){sn(e),t=ln(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function an(e,t){return sn(e),t=ln(e,t),e.g.has(t)}function un(e,t,n){on(e,t),0<n.length&&(e.i=null,e.g.set(ln(e,t),x(n)),e.h+=n.length)}function ln(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function cn(e,t){t&&!e.j&&(sn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(on(this,t),un(this,n,e))}),e)),e.j=t}r=rn.prototype,r.add=function(e,t){sn(this),this.i=null,e=ln(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){sn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){sn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.W=function(e){sn(this);let t=[];if("string"===typeof e)an(this,e)&&(t=t.concat(this.g.get(ln(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return sn(this),this.i=null,e=ln(this,e),an(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var dn=class{constructor(e,t){this.h=e,this.g=t}};function hn(e){this.l=e||fn,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fn=10;function pn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function mn(e){return e.h?1:e.g?e.g.size:0}function gn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function vn(e,t){e.g?e.g.add(t):e.h=t}function yn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function bn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return x(e.i)}function wn(){}function _n(){this.g=new wn}function In(e,t,n){const r=n||"";try{Vt(e,(function(e,n){let i=e;m(e)&&(i=Ae(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Sn(e,t){const n=new Qe;if(h.Image){const r=new Image;r.onload=I(En,n,r,"TestLoadImage: loaded",!0,t),r.onerror=I(En,n,r,"TestLoadImage: error",!1,t),r.onabort=I(En,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=I(En,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function En(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Tn(e){this.l=e.ac||null,this.j=e.jb||!1}function kn(e,t){ke.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=xn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=bn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},wn.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},wn.prototype.parse=function(e){return h.JSON.parse(e,void 0)},S(Tn,ft),Tn.prototype.g=function(){return new kn(this.l,this.j)},Tn.prototype.i=function(e){return function(){return e}}({}),S(kn,ke);var xn=0;function Cn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function An(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Nn(e)}function Nn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=kn.prototype,r.open=function(e,t){if(this.readyState!=xn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Nn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,An(this)),this.readyState=xn},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?An(this):Nn(this),3==this.readyState&&Cn(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,An(this))},r.Ua=function(e){this.g&&(this.response=e,An(this))},r.ga=function(){this.g&&An(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Dn=h.JSON.parse;function On(e){ke.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Rn,this.K=this.L=!1}S(On,ke);var Rn="",Pn=/^https?$/i,Ln=["POST","PUT"];function Fn(e){return B&&J()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Mn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Un(e),Bn(e)}function Un(e){e.D||(e.D=!0,xe(e,"complete"),xe(e,"error"))}function Vn(e){if(e.h&&"undefined"!=typeof d&&(!e.C[1]||4!=$n(e)||2!=e.aa()))if(e.v&&4==$n(e))qe(e.Ha,0,e);else if(xe(e,"readystatechange"),4==$n(e)){e.h=!1;try{const u=e.aa();e:switch(u){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===u){var i=String(e.H).match(Bt)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!Pn.test(i?i.toLowerCase():"")}n=r}if(n)xe(e,"complete"),xe(e,"success");else{e.m=6;try{var o=2<$n(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.aa()+"]",Un(e)}}finally{Bn(e)}}}function Bn(e,t){if(e.g){jn(e);const r=e.g,i=e.C[0]?f:null;e.g=null,e.C=null,t||xe(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function jn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function $n(e){return e.g?e.g.readyState:0}function qn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Rn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Cr){return null}}function Wn(e){let t="";return oe(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function zn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Wn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Gt(e,t,n))}function Hn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Gn(e){this.Ca=0,this.i=[],this.j=new Qe,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Hn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Hn("baseRetryDelayMs",5e3,e),this.bb=Hn("retryDelaySeedMs",1e4,e),this.$a=Hn("forwardChannelMaxRetries",2,e),this.ta=Hn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(e&&e.concurrentRequestLimit),this.Fa=new _n,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Kn(e){if(Qn(e),3==e.G){var t=e.U++,n=qt(e.F);Gt(n,"SID",e.I),Gt(n,"RID",t),Gt(n,"TYPE","terminate"),er(e,n),t=new _t(e,e.j,t,void 0),t.K=2,t.v=Kt(qt(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=hr(t.l,null),t.g.da(t.v)),t.F=Date.now(),Dt(t)}cr(e)}function Yn(e){e.g&&(ir(e),e.g.cancel(),e.g=null)}function Qn(e){Yn(e),e.u&&(h.clearTimeout(e.u),e.u=null),or(e),e.h.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Jn(e){pn(e.h)||e.m||(e.m=!0,Fe(e.Ja,e),e.C=0)}function Xn(e,t){return!(mn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=ct(_(e.Ja,e,t),ur(e,e.C)),e.C++,!0))}function Zn(e,t){var n;n=t?t.m:e.U++;const r=qt(e.F);Gt(r,"SID",e.I),Gt(r,"RID",n),Gt(r,"AID",e.T),er(e,r),e.o&&e.s&&zn(r,e.o,e.s),n=new _t(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=tr(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),vn(e.h,n),kt(n,r,t)}function er(e,t){e.ia&&oe(e.ia,(function(e,n){Gt(t,n,e)})),e.l&&Vt({},(function(e,n){Gt(t,n,e)}))}function tr(e,t,n){n=Math.min(e.i.length,n);var r=e.l?_(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{In(a,e,"req"+n+"_")}catch(Br){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function nr(e){e.g||e.u||(e.Z=1,Fe(e.Ia,e),e.A=0)}function rr(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ct(_(e.Ia,e),ur(e,e.A)),e.A++,!0)}function ir(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function sr(e){e.g=new _t(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=qt(e.sa);Gt(t,"RID","rpc"),Gt(t,"SID",e.I),Gt(t,"CI",e.L?"0":"1"),Gt(t,"AID",e.T),Gt(t,"TYPE","xmlhttp"),er(e,t),e.o&&e.s&&zn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Kt(qt(t)),n.s=null,n.P=!0,xt(n,e)}function or(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function ar(e,t){var n=null;if(e.g==t){or(e),ir(e),e.g=null;var r=2}else{if(!gn(e.h,t))return;n=t.D,yn(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=it(),xe(r,new lt(r,n)),Jn(e)}else nr(e);else if(i=t.o,3==i||0==i&&0<e.pa||!(1==r&&Xn(e,t)||2==r&&rr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:lr(e,5);break;case 4:lr(e,10);break;case 3:lr(e,6);break;default:lr(e,2)}}function ur(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function lr(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=_(e.kb,e);n||(n=new $t("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Wt(n,"https"),Kt(n)),Sn(n.toString(),r)}else ut(2);e.G=0,e.l&&e.l.va(t),cr(e),Qn(e)}function cr(e){if(e.G=0,e.la=[],e.l){const t=bn(e.h);0==t.length&&0==e.i.length||(C(e.la,t),C(e.la,e.i),e.h.i.length=0,x(e.i),e.i.length=0),e.l.ua()}}function dr(e,t,n){var r=n instanceof $t?qt(n):new $t(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),zt(r,r.m);else{var i=h.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new $t(null,void 0);r&&Wt(s,r),t&&(s.g=t),i&&zt(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&Gt(r,n,t),Gt(r,"VER",e.ma),er(e,r),r}function hr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new On(new Tn({jb:!0})):new On(e.ra),t.Ka(e.H),t}function fr(){}function pr(){if(B&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function mr(e,t){ke.call(this),this.g=new Gn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!D(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!D(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new yr(this)}function gr(e){yt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function vr(){bt.call(this),this.status=1}function yr(e){this.g=e}r=On.prototype,r.Ka=function(e){this.L=e},r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gt.g(),this.C=this.u?pt(this.u):pt(gt),this.g.onreadystatechange=_(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Mn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=h.FormData&&e instanceof h.FormData,!(0<=k(Ln,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{jn(this),0<this.B&&((this.K=Fn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.qa,this)):this.A=qe(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Mn(this,s)}},r.qa=function(){"undefined"!=typeof d&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xe(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,xe(this,"complete"),xe(this,"abort"),Bn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bn(this,!0)),On.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Vn(this):this.fb())},r.fb=function(){Vn(this)},r.aa=function(){try{return 2<$n(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Dn(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Gn.prototype,r.ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new _t(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=ae(s),le(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=tr(this,i,t),n=qt(this.F),Gt(n,"RID",e),Gt(n,"CVER",22),this.D&&Gt(n,"X-HTTP-Session-Id",this.D),er(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(Wn(s)))+"&"+t:this.o&&zn(n,this.o,s)),vn(this.h,i),this.Ya&&Gt(n,"TYPE","init"),this.O?(Gt(n,"$req",t),Gt(n,"SID","null"),i.Z=!0,kt(i,n,null)):kt(i,n,t),this.G=2}}else 3==this.G&&(e?Zn(this,e):0==this.i.length||pn(this.h)||Zn(this))},r.Ia=function(){if(this.u=null,sr(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ct(_(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ut(10),Yn(this),sr(this))},r.cb=function(){null!=this.v&&(this.v=null,Yn(this),rr(this),ut(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))},r=fr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},pr.prototype.g=function(e,t){return new mr(e,t)},S(mr,ke),mr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;ut(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=dr(e,null,e.V),Jn(e)},mr.prototype.close=function(){Kn(this.g)},mr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ae(e),e=n);t.i.push(new dn(t.ab++,e)),3==t.G&&Jn(t)},mr.prototype.M=function(){this.g.l=null,delete this.j,Kn(this.g),delete this.g,mr.X.M.call(this)},S(gr,yt),S(vr,bt),S(yr,fr),yr.prototype.xa=function(){xe(this.g,"a")},yr.prototype.wa=function(e){xe(this.g,new gr(e))},yr.prototype.va=function(e){xe(this.g,new vr)},yr.prototype.ua=function(){xe(this.g,"b")},pr.prototype.createWebChannel=pr.prototype.g,mr.prototype.send=mr.prototype.u,mr.prototype.open=mr.prototype.m,mr.prototype.close=mr.prototype.close,dt.NO_ERROR=0,dt.TIMEOUT=8,dt.HTTP_ERROR=6,ht.COMPLETE="complete",mt.EventType=vt,vt.OPEN="a",vt.CLOSE="b",vt.ERROR="c",vt.MESSAGE="d",ke.prototype.listen=ke.prototype.N,On.prototype.listenOnce=On.prototype.O,On.prototype.getLastError=On.prototype.Oa,On.prototype.getLastErrorCode=On.prototype.Ea,On.prototype.getStatus=On.prototype.aa,On.prototype.getResponseJson=On.prototype.Sa,On.prototype.getResponseText=On.prototype.fa,On.prototype.send=On.prototype.da,On.prototype.setWithCredentials=On.prototype.Ka;var br=c.createWebChannelTransport=function(){return new pr},wr=c.getStatEventTarget=function(){return it()},_r=c.ErrorCode=dt,Ir=c.EventType=ht,Sr=c.Event=nt,Er=c.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Tr=c.FetchXmlHttpFactory=Tn,kr=c.WebChannel=mt,xr=c.XhrIo=On;const Cr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ar.UNAUTHENTICATED=new Ar(null),Ar.GOOGLE_CREDENTIALS=new Ar("google-credentials-uid"),Ar.FIRST_PARTY=new Ar("first-party-uid"),Ar.MOCK_USER=new Ar("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Nr="9.15.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new a.Yd("@firebase/firestore");function Or(){return Dr.logLevel}function Rr(e){Dr.setLogLevel(e)}function Pr(e,...t){if(Dr.logLevel<=a["in"].DEBUG){const n=t.map(Mr);Dr.debug(`Firestore (${Nr}): ${e}`,...n)}}function Lr(e,...t){if(Dr.logLevel<=a["in"].ERROR){const n=t.map(Mr);Dr.error(`Firestore (${Nr}): ${e}`,...n)}}function Fr(e,...t){if(Dr.logLevel<=a["in"].WARN){const n=t.map(Mr);Dr.warn(`Firestore (${Nr}): ${e}`,...n)}}function Mr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(e="Unexpected state"){const t=`FIRESTORE (${Nr}) INTERNAL ASSERTION FAILED: `+e;throw Lr(t),new Error(t)}function Vr(e,t){e||Ur()}function Br(e,t){e||Ur()}function jr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class qr extends u.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ar.UNAUTHENTICATED)))}shutdown(){}}class Gr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Kr{constructor(e){this.t=e,this.currentUser=Ar.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Wr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wr,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Pr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Pr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wr)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Pr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Vr("string"==typeof t.accessToken),new zr(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Vr(null===e||"string"==typeof e),new Ar(e)}}class Yr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=Ar.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Vr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Qr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new Yr(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(Ar.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Jr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xr{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&Pr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,Pr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Pr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):Pr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Vr("string"==typeof e.token),this.A=e.token,new Jr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Zr(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function ti(e,t){return e<t?-1:e>t?1:0}function ni(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function ri(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new qr($r.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new qr($r.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new qr($r.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new qr($r.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ii.fromMillis(Date.now())}static fromDate(e){return ii.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ii(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ti(this.nanoseconds,e.nanoseconds):ti(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.timestamp=e}static fromTimestamp(e){return new si(e)}static min(){return new si(new ii(0,0))}static max(){return new si(new ii(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t,n){void 0===t?t=0:t>e.length&&Ur(),void 0===n?n=e.length-t:n>e.length-t&&Ur(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===oi.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof oi?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ai extends oi{construct(e,t,n){return new ai(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new qr($r.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ai(t)}static emptyPath(){return new ai([])}}const ui=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class li extends oi{construct(e,t,n){return new li(e,t,n)}static isValidIdentifier(e){return ui.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),li.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new li(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new qr($r.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new qr($r.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new qr($r.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new qr($r.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new li(t)}static emptyPath(){return new li([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.path=e}static fromPath(e){return new ci(ai.fromString(e))}static fromName(e){return new ci(ai.fromString(e).popFirst(5))}static empty(){return new ci(ai.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ai.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ai.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ci(new ai(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function hi(e){return e.fields.find((e=>2===e.kind))}function fi(e){return e.fields.filter((e=>2!==e.kind))}di.UNKNOWN_ID=-1;class pi{constructor(e,t){this.fieldPath=e,this.kind=t}}class mi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new mi(0,yi.min())}}function gi(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=si.fromTimestamp(1e9===r?new ii(n+1,0):new ii(n,r));return new yi(i,ci.empty(),t)}function vi(e){return new yi(e.readTime,e.key,-1)}class yi{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new yi(si.min(),ci.empty(),-1)}static max(){return new yi(si.max(),ci.empty(),-1)}}function bi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ci.comparator(e.documentKey,t.documentKey),0!==n?n:ti(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _i{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(e){if(e.code!==$r.FAILED_PRECONDITION||e.message!==wi)throw e;Pr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ur(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Si(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Si?t:Si.resolve(t)}catch(e){return Si.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Si.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Si.reject(t)}static resolve(e){return new Si(((t,n)=>{t(e)}))}static reject(e){return new Si(((t,n)=>{n(e)}))}static waitFor(e){return new Si(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Si.resolve(!1);for(const n of e)t=t.next((e=>e?Si.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Si(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const u=a;t(e[u]).next((e=>{s[u]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Si(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new Wr,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new xi(e,t.error)):this.P.resolve()},this.transaction.onerror=t=>{const n=Oi(t.target.error);this.P.reject(new xi(e,n))}}static open(e,t,n,r){try{return new Ei(t,e.transaction(r,n))}catch(e){throw new xi(t,e)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(Pr("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Ai(t)}}class Ti{constructor(e,t,n){this.name=e,this.version=t,this.S=n,12.2===Ti.D((0,u.z$)())&&Lr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Pr("SimpleDb","Removing database:",e),Ni(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!(0,u.hl)())return!1;if(Ti.N())return!0;const e=(0,u.z$)(),t=Ti.D(e),n=0<t&&t<10,r=Ti.k(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static N(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/"})||void 0===e?void 0:e.O)}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static k(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async F(e){return this.db||(Pr("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new xi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new qr($r.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new qr($r.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new xi(e,r))},r.onupgradeneeded=e=>{Pr("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.S.$(t,r.transaction,e.oldVersion,this.version).next((()=>{Pr("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.F(e);const t=Ei.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.V(),e))).catch((e=>(t.abort(e),Si.reject(e)))).toPromise();return s.catch((()=>{})),await t.v,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(Pr("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class ki{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return Ni(this.q.delete())}}class xi extends qr{constructor(e,t){super($r.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ci(e){return"IndexedDbTransactionError"===e.name}class Ai{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Pr("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Pr("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Ni(n)}add(e){return Pr("SimpleDb","ADD",this.store.name,e,e),Ni(this.store.add(e))}get(e){return Ni(this.store.get(e)).next((t=>(void 0===t&&(t=null),Pr("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Pr("SimpleDb","DELETE",this.store.name,e),Ni(this.store.delete(e))}count(){return Pr("SimpleDb","COUNT",this.store.name),Ni(this.store.count())}W(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.H(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Si(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}J(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Si(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}Y(e,t){Pr("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const r=this.cursor(n);return this.H(r,((e,t,n)=>n.delete()))}Z(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.H(r,t)}tt(e){const t=this.cursor({});return new Si(((n,r)=>{t.onerror=e=>{const t=Oi(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}H(e,t){const n=[];return new Si(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new ki(i),o=t(i.primaryKey,i.value,s);if(o instanceof Si){const e=o.catch((e=>(s.done(),Si.reject(e))));n.push(e)}s.isDone?r():null===s.G?i.continue():i.continue(s.G)}})).next((()=>Si.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ni(e){return new Si(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Oi(e.target.error);n(t)}}))}let Di=!1;function Oi(e){const t=Ti.D((0,u.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new qr("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Di||(Di=!0,setTimeout((()=>{throw e}),0)),e}}return e}class Ri{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(e){Pr("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{Pr("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(e){Ci(e)?Pr("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await Ii(e)}await this.nt(6e4)}))}}class Pi{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.it(t,e)))}it(e,t){const n=new Set;let r=t,i=!0;return Si.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return Pr("IndexBackiller",`Processing collection: ${t}`),this.rt(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}rt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.ot(r,n))).next((n=>(Pr("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}ot(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=vi(t);bi(r,n)>0&&(n=r)})),new yi(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Li.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fi{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Mi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Mi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Mi&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Vi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Bi(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(e){return null==e}function $i(e){return 0===e&&1/e==-1/0}function qi(e){return"number"==typeof e&&Number.isInteger(e)&&!$i(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new zi(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new zi(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ti(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}zi.EMPTY_BYTE_STRING=new zi("");const Hi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gi(e){if(Vr(!!e),"string"==typeof e){let t=0;const n=Hi.exec(e);if(Vr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ki(e.seconds),nanos:Ki(e.nanos)}}function Ki(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Yi(e){return"string"==typeof e?zi.fromBase64String(e):zi.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ji(e){const t=e.mapValue.fields.__previous_value__;return Qi(t)?Ji(t):t}function Xi(e){const t=Gi(e.mapValue.fields.__local_write_time__.timestampValue);return new ii(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},es={nullValue:"NULL_VALUE"};function ts(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Qi(e)?4:ms(e)?9007199254740991:10:Ur()}function ns(e,t){if(e===t)return!0;const n=ts(e);if(n!==ts(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Xi(e).isEqual(Xi(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Gi(e.timestampValue),r=Gi(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Yi(e.bytesValue).isEqual(Yi(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ki(e.geoPointValue.latitude)===Ki(t.geoPointValue.latitude)&&Ki(e.geoPointValue.longitude)===Ki(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ki(e.integerValue)===Ki(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ki(e.doubleValue),r=Ki(t.doubleValue);return n===r?$i(n)===$i(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return ni(e.arrayValue.values||[],t.arrayValue.values||[],ns);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ui(n)!==Ui(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ns(n[i],r[i])))return!1;return!0}(e,t);default:return Ur()}}function rs(e,t){return void 0!==(e.values||[]).find((e=>ns(e,t)))}function is(e,t){if(e===t)return 0;const n=ts(e),r=ts(t);if(n!==r)return ti(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ti(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ki(e.integerValue||e.doubleValue),r=Ki(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ss(e.timestampValue,t.timestampValue);case 4:return ss(Xi(e),Xi(t));case 5:return ti(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Yi(e),r=Yi(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=ti(n[i],r[i]);if(0!==e)return e}return ti(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=ti(Ki(e.latitude),Ki(t.latitude));return 0!==n?n:ti(Ki(e.longitude),Ki(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=is(n[i],r[i]);if(e)return e}return ti(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Zi.mapValue&&t===Zi.mapValue)return 0;if(e===Zi.mapValue)return 1;if(t===Zi.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=ti(r[o],s[o]);if(0!==e)return e;const t=is(n[r[o]],i[s[o]]);if(0!==t)return t}return ti(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Ur()}}function ss(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ti(e,t);const n=Gi(e),r=Gi(t),i=ti(n.seconds,r.seconds);return 0!==i?i:ti(n.nanos,r.nanos)}function os(e){return as(e)}function as(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Gi(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Yi(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ci.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=as(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${as(e.fields[i])}`;return n+"}"}(e.mapValue):Ur();var t,n}function us(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ls(e){return!!e&&"integerValue"in e}function cs(e){return!!e&&"arrayValue"in e}function ds(e){return!!e&&"nullValue"in e}function hs(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function fs(e){return!!e&&"mapValue"in e}function ps(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Vi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=ps(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ps(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ms(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function gs(e){return"nullValue"in e?es:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?us(Mi.empty(),ci.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:Ur()}function vs(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?us(Mi.empty(),ci.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?Zi:Ur()}function ys(e,t){const n=is(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function bs(e,t){const n=is(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t){this.position=e,this.inclusive=t}}function _s(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ci.comparator(ci.fromName(o.referenceValue),n.key):is(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Is(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ns(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{}class Es extends Ss{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ps(e,t,n):"array-contains"===t?new Us(e,n):"in"===t?new Vs(e,n):"not-in"===t?new Bs(e,n):"array-contains-any"===t?new js(e,n):new Es(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ls(e,n):new Fs(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(is(t,this.value)):null!==t&&ts(this.value)===ts(t)&&this.matchesComparison(is(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ur()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ts extends Ss{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new Ts(e,t)}matches(e){return ks(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function ks(e){return"and"===e.op}function xs(e){return"or"===e.op}function Cs(e){return As(e)&&ks(e)}function As(e){for(const t of e.filters)if(t instanceof Ts)return!1;return!0}function Ns(e){if(e instanceof Es)return e.field.canonicalString()+e.op.toString()+os(e.value);{const t=e.filters.map((e=>Ns(e))).join(",");return`${e.op}(${t})`}}function Ds(e,t){return e instanceof Es?function(e,t){return t instanceof Es&&e.op===t.op&&e.field.isEqual(t.field)&&ns(e.value,t.value)}(e,t):e instanceof Ts?function(e,t){return t instanceof Ts&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Ds(n,t.filters[r])),!0)}(e,t):void Ur()}function Os(e,t){const n=e.filters.concat(t);return Ts.create(n,e.op)}function Rs(e){return e instanceof Es?function(e){return`${e.field.canonicalString()} ${e.op} ${os(e.value)}`}(e):e instanceof Ts?function(e){return e.op.toString()+" {"+e.getFilters().map(Rs).join(" ,")+"}"}(e):"Filter"}class Ps extends Es{constructor(e,t,n){super(e,t,n),this.key=ci.fromName(n.referenceValue)}matches(e){const t=ci.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ls extends Es{constructor(e,t){super(e,"in",t),this.keys=Ms("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Fs extends Es{constructor(e,t){super(e,"not-in",t),this.keys=Ms("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ms(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ci.fromName(e.referenceValue)))}class Us extends Es{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cs(t)&&rs(t.arrayValue,this.value)}}class Vs extends Es{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&rs(this.value.arrayValue,t)}}class Bs extends Es{constructor(e,t){super(e,"not-in",t)}matches(e){if(rs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!rs(this.value.arrayValue,t)}}class js extends Es{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cs(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>rs(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t="asc"){this.field=e,this.dir=t}}function qs(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t){this.comparator=e,this.root=t||Hs.EMPTY}insert(e,t){return new Ws(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Hs.BLACK,null,null))}remove(e){return new Ws(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Hs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zs(this.root,e,this.comparator,!1)}getReverseIterator(){return new zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zs(this.root,e,this.comparator,!0)}}class zs{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Hs{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Hs.RED,this.left=null!=r?r:Hs.EMPTY,this.right=null!=i?i:Hs.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Hs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Hs.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Hs.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Hs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Hs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ur();if(this.right.isRed())throw Ur();const e=this.left.check();if(e!==this.right.check())throw Ur();return e+(this.isRed()?0:1)}}Hs.EMPTY=null,Hs.RED=!0,Hs.BLACK=!1,Hs.EMPTY=new class{constructor(){this.size=0}get key(){throw Ur()}get value(){throw Ur()}get color(){throw Ur()}get left(){throw Ur()}get right(){throw Ur()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Hs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gs{constructor(e){this.comparator=e,this.data=new Ws(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ks(this.data.getIterator())}getIteratorFrom(e){return new Ks(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Gs))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Gs(this.comparator);return t.data=e,t}}class Ks{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ys(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.fields=e,e.sort(li.comparator)}static empty(){return new Qs([])}unionWith(e){let t=new Gs(li.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Qs(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ni(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.value=e}static empty(){return new Js({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!fs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ps(t)}setAll(e){let t=li.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=ps(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());fs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ns(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];fs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Vi(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Js(ps(this.value))}}function Xs(e){const t=[];return Vi(e.fields,((e,n)=>{const r=new li([e]);if(fs(n)){const e=Xs(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Qs(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Zs{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Zs(e,0,si.min(),si.min(),si.min(),Js.empty(),0)}static newFoundDocument(e,t,n,r){return new Zs(e,1,t,si.min(),n,r,0)}static newNoDocument(e,t){return new Zs(e,2,t,si.min(),si.min(),Js.empty(),0)}static newUnknownDocument(e,t){return new Zs(e,3,t,si.min(),si.min(),Js.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(si.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Js.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Js.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=si.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Zs&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zs(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function to(e,t=null,n=[],r=[],i=null,s=null,o=null){return new eo(e,t,n,r,i,s,o)}function no(e){const t=jr(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Ns(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),ji(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>os(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>os(e))).join(",")),t.ft=e}return t.ft}function ro(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!qs(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ds(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Is(e.startAt,t.startAt)&&Is(e.endAt,t.endAt)}function io(e){return ci.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function so(e,t){return e.filters.filter((e=>e instanceof Es&&e.field.isEqual(t)))}function oo(e,t,n){let r=es,i=!0;for(const s of so(e,t)){let e=es,t=!0;switch(s.op){case"<":case"<=":e=gs(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=es}ys({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];ys({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function ao(e,t,n){let r=Zi,i=!0;for(const s of so(e,t)){let e=Zi,t=!0;switch(s.op){case">=":case">":e=vs(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=Zi}bs({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];bs({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function lo(e,t,n,r,i,s,o,a){return new uo(e,t,n,r,i,s,o,a)}function co(e){return new uo(e)}function ho(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function fo(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function po(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function mo(e){return null!==e.collectionGroup}function go(e){const t=jr(e);if(null===t.dt){t.dt=[];const e=po(t),n=fo(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new $s(e)),t.dt.push(new $s(li.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new $s(li.keyField(),e))}}}return t.dt}function vo(e){const t=jr(e);if(!t._t)if("F"===t.limitType)t._t=to(t.path,t.collectionGroup,go(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of go(t)){const t="desc"===i.dir?"asc":"desc";e.push(new $s(i.field,t))}const n=t.endAt?new ws(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ws(t.startAt.position,t.startAt.inclusive):null;t._t=to(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function yo(e,t){t.getFirstInequalityField(),po(e);const n=e.filters.concat([t]);return new uo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function bo(e,t,n){return new uo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function wo(e,t){return ro(vo(e),vo(t))&&e.limitType===t.limitType}function _o(e){return`${no(vo(e))}|lt:${e.limitType}`}function Io(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Rs(e))).join(", ")}]`),ji(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>os(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>os(e))).join(",")),`Target(${t})`}(vo(e))}; limitType=${e.limitType})`}function So(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ci.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of go(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=_s(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,go(e),t))&&!(e.endAt&&!function(e,t,n){const r=_s(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,go(e),t))}(e,t)}function Eo(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function To(e){return(t,n)=>{let r=!1;for(const i of go(e)){const e=ko(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function ko(e,t,n){const r=e.field.isKeyField()?ci.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?is(r,i):Ur()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Ur()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$i(t)?"-0":t}}function Co(e){return{integerValue:""+e}}function Ao(e,t){return qi(t)?Co(t):xo(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this._=void 0}}function Do(e,t,n){return e instanceof Po?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Lo?Fo(e,t):e instanceof Mo?Uo(e,t):function(e,t){const n=Ro(e,t),r=Bo(n)+Bo(e.gt);return ls(n)&&ls(e.gt)?Co(r):xo(e.yt,r)}(e,t)}function Oo(e,t,n){return e instanceof Lo?Fo(e,t):e instanceof Mo?Uo(e,t):n}function Ro(e,t){return e instanceof Vo?ls(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Po extends No{}class Lo extends No{constructor(e){super(),this.elements=e}}function Fo(e,t){const n=jo(t);for(const r of e.elements)n.some((e=>ns(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Mo extends No{constructor(e){super(),this.elements=e}}function Uo(e,t){let n=jo(t);for(const r of e.elements)n=n.filter((e=>!ns(e,r)));return{arrayValue:{values:n}}}class Vo extends No{constructor(e,t){super(),this.yt=e,this.gt=t}}function Bo(e){return Ki(e.integerValue||e.doubleValue)}function jo(e){return cs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t){this.field=e,this.transform=t}}function qo(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Lo&&t instanceof Lo||e instanceof Mo&&t instanceof Mo?ni(e.elements,t.elements,ns):e instanceof Vo&&t instanceof Vo?ns(e.gt,t.gt):e instanceof Po&&t instanceof Po}(e.transform,t.transform)}class Wo{constructor(e,t){this.version=e,this.transformResults=t}}class zo{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new zo}static exists(e){return new zo(void 0,e)}static updateTime(e){return new zo(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ho(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Go{}function Ko(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new ia(e.key,zo.none()):new Zo(e.key,e.data,zo.none());{const n=e.data,r=Js.empty();let i=new Gs(li.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new ea(e.key,r,new Qs(i.toArray()),zo.none())}}function Yo(e,t,n){e instanceof Zo?function(e,t,n){const r=e.value.clone(),i=na(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof ea?function(e,t,n){if(!Ho(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=na(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(ta(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Qo(e,t,n,r){return e instanceof Zo?function(e,t,n,r){if(!Ho(e.precondition,t))return n;const i=e.value.clone(),s=ra(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof ea?function(e,t,n,r){if(!Ho(e.precondition,t))return n;const i=ra(e.fieldTransforms,r,t),s=t.data;return s.setAll(ta(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Ho(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Jo(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Ro(r.transform,e||null);null!=i&&(null===n&&(n=Js.empty()),n.set(r.field,i))}return n||null}function Xo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&ni(e,t,((e,t)=>qo(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Zo extends Go{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ea extends Go{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ta(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function na(e,t,n){const r=new Map;Vr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Oo(o,a,n[i]))}return r}function ra(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Do(e,s,t))}return r}class ia extends Go{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sa extends Go{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var aa,ua;function la(e){switch(e){default:return Ur();case $r.CANCELLED:case $r.UNKNOWN:case $r.DEADLINE_EXCEEDED:case $r.RESOURCE_EXHAUSTED:case $r.INTERNAL:case $r.UNAVAILABLE:case $r.UNAUTHENTICATED:return!1;case $r.INVALID_ARGUMENT:case $r.NOT_FOUND:case $r.ALREADY_EXISTS:case $r.PERMISSION_DENIED:case $r.FAILED_PRECONDITION:case $r.ABORTED:case $r.OUT_OF_RANGE:case $r.UNIMPLEMENTED:case $r.DATA_LOSS:return!0}}function ca(e){if(void 0===e)return Lr("GRPC error has no .code"),$r.UNKNOWN;switch(e){case aa.OK:return $r.OK;case aa.CANCELLED:return $r.CANCELLED;case aa.UNKNOWN:return $r.UNKNOWN;case aa.DEADLINE_EXCEEDED:return $r.DEADLINE_EXCEEDED;case aa.RESOURCE_EXHAUSTED:return $r.RESOURCE_EXHAUSTED;case aa.INTERNAL:return $r.INTERNAL;case aa.UNAVAILABLE:return $r.UNAVAILABLE;case aa.UNAUTHENTICATED:return $r.UNAUTHENTICATED;case aa.INVALID_ARGUMENT:return $r.INVALID_ARGUMENT;case aa.NOT_FOUND:return $r.NOT_FOUND;case aa.ALREADY_EXISTS:return $r.ALREADY_EXISTS;case aa.PERMISSION_DENIED:return $r.PERMISSION_DENIED;case aa.FAILED_PRECONDITION:return $r.FAILED_PRECONDITION;case aa.ABORTED:return $r.ABORTED;case aa.OUT_OF_RANGE:return $r.OUT_OF_RANGE;case aa.UNIMPLEMENTED:return $r.UNIMPLEMENTED;case aa.DATA_LOSS:return $r.DATA_LOSS;default:return Ur()}}(ua=aa||(aa={}))[ua.OK=0]="OK",ua[ua.CANCELLED=1]="CANCELLED",ua[ua.UNKNOWN=2]="UNKNOWN",ua[ua.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ua[ua.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ua[ua.NOT_FOUND=5]="NOT_FOUND",ua[ua.ALREADY_EXISTS=6]="ALREADY_EXISTS",ua[ua.PERMISSION_DENIED=7]="PERMISSION_DENIED",ua[ua.UNAUTHENTICATED=16]="UNAUTHENTICATED",ua[ua.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ua[ua.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ua[ua.ABORTED=10]="ABORTED",ua[ua.OUT_OF_RANGE=11]="OUT_OF_RANGE",ua[ua.UNIMPLEMENTED=12]="UNIMPLEMENTED",ua[ua.INTERNAL=13]="INTERNAL",ua[ua.UNAVAILABLE=14]="UNAVAILABLE",ua[ua.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class da{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Vi(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Bi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=new Ws(ci.comparator);function fa(){return ha}const pa=new Ws(ci.comparator);function ma(...e){let t=pa;for(const n of e)t=t.insert(n.key,n);return t}function ga(e){let t=pa;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function va(){return ba()}function ya(){return ba()}function ba(){return new da((e=>e.toString()),((e,t)=>e.isEqual(t)))}const wa=new Ws(ci.comparator),_a=new Gs(ci.comparator);function Ia(...e){let t=_a;for(const n of e)t=t.add(n);return t}const Sa=new Gs(ti);function Ea(){return Sa}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,ka.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ta(si.min(),r,Ea(),fa(),Ia())}}class ka{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ka(n,t,Ia(),Ia(),Ia())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class Ca{constructor(e,t){this.targetId=e,this.Et=t}}class Aa{constructor(e,t,n=zi.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Na{constructor(){this.At=0,this.Rt=Ra(),this.bt=zi.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Ia(),t=Ia(),n=Ia();return this.Rt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Ur()}})),new ka(this.bt,this.Pt,e,t,n)}xt(){this.vt=!1,this.Rt=Ra()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Da{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=fa(),this.qt=Oa(),this.Ut=new Gs(ti)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,(t=>{const n=this.Wt(t);switch(e.state){case 0:this.zt(t)&&n.Dt(e.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(n.Ft(),n.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:Ur()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.zt(n)&&t(n)}))}Jt(e){const t=e.targetId,n=e.Et.count,r=this.Yt(t);if(r){const e=r.target;if(io(e))if(0===n){const n=new ci(e.path);this.Qt(t,n,Zs.newNoDocument(n,si.min()))}else Vr(1===n);else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach(((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&io(i.target)){const t=new ci(i.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,Zs.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}}));let n=Ia();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const r=new Ta(e,t,this.Ut,this.Lt,n);return this.Lt=fa(),this.qt=Oa(),this.Ut=new Gs(ti),r}Gt(e,t){if(!this.zt(e))return;const n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new Na,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new Gs(ti),this.qt=this.qt.insert(e,t)),t}zt(e){const t=null!==this.Yt(e);return t||Pr("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Na),this.$t.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function Oa(){return new Ws(ci.comparator)}function Ra(){return new Ws(ci.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),La=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),Fa=(()=>{const e={and:"AND",or:"OR"};return e})();class Ma{constructor(e,t){this.databaseId=e,this.wt=t}}function Ua(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Va(e,t){return e.wt?t.toBase64():t.toUint8Array()}function Ba(e,t){return Ua(e,t.toTimestamp())}function ja(e){return Vr(!!e),si.fromTimestamp(function(e){const t=Gi(e);return new ii(t.seconds,t.nanos)}(e))}function $a(e,t){return function(e){return new ai(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function qa(e){const t=ai.fromString(e);return Vr(mu(t)),t}function Wa(e,t){return $a(e.databaseId,t.path)}function za(e,t){const n=qa(t);if(n.get(1)!==e.databaseId.projectId)throw new qr($r.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new qr($r.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ci(Ya(n))}function Ha(e,t){return $a(e.databaseId,t)}function Ga(e){const t=qa(e);return 4===t.length?ai.emptyPath():Ya(t)}function Ka(e){return new ai(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ya(e){return Vr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Qa(e,t,n){return{name:Wa(e,t),fields:n.value.mapValue.fields}}function Ja(e,t,n){const r=za(e,t.name),i=ja(t.updateTime),s=t.createTime?ja(t.createTime):si.min(),o=new Js({mapValue:{fields:t.fields}}),a=Zs.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function Xa(e,t){return"found"in t?function(e,t){Vr(!!t.found),t.found.name,t.found.updateTime;const n=za(e,t.found.name),r=ja(t.found.updateTime),i=t.found.createTime?ja(t.found.createTime):si.min(),s=new Js({mapValue:{fields:t.found.fields}});return Zs.newFoundDocument(n,r,i,s)}(e,t):"missing"in t?function(e,t){Vr(!!t.missing),Vr(!!t.readTime);const n=za(e,t.missing),r=ja(t.readTime);return Zs.newNoDocument(n,r)}(e,t):Ur()}function Za(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Ur()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.wt?(Vr(void 0===t||"string"==typeof t),zi.fromBase64String(t||"")):(Vr(void 0===t||t instanceof Uint8Array),zi.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?$r.UNKNOWN:ca(e.code);return new qr(t,e.message||"")}(o);n=new Aa(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=za(e,r.document.name),s=ja(r.document.updateTime),o=r.document.createTime?ja(r.document.createTime):si.min(),a=new Js({mapValue:{fields:r.document.fields}}),u=Zs.newFoundDocument(i,s,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];n=new xa(l,c,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=za(e,r.document),s=r.readTime?ja(r.readTime):si.min(),o=Zs.newNoDocument(i,s),a=r.removedTargetIds||[];n=new xa([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=za(e,r.document),s=r.removedTargetIds||[];n=new xa([],s,i,null)}else{if(!("filter"in t))return Ur();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new oa(r),s=e.targetId;n=new Ca(s,i)}}return n}function eu(e,t){let n;if(t instanceof Zo)n={update:Qa(e,t.key,t.value)};else if(t instanceof ia)n={delete:Wa(e,t.key)};else if(t instanceof ea)n={update:Qa(e,t.key,t.data),updateMask:pu(t.fieldMask)};else{if(!(t instanceof sa))return Ur();n={verify:Wa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Po)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Lo)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Mo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Vo)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw Ur()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Ba(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Ur()}(e,t.precondition)),n}function tu(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?zo.updateTime(ja(e.updateTime)):void 0!==e.exists?zo.exists(e.exists):zo.none()}(t.currentDocument):zo.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Vr("REQUEST_TIME"===t.setToServerValue),n=new Po;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Lo(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Mo(e)}else"increment"in t?n=new Vo(e,t.increment):Ur();const r=li.fromServerFormat(t.fieldPath);return new $o(r,n)}(e,t))):[];if(t.update){t.update.name;const i=za(e,t.update.name),s=new Js({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Qs(t.map((e=>li.fromServerFormat(e))))}(t.updateMask);return new ea(i,s,e,n,r)}return new Zo(i,s,n,r)}if(t.delete){const r=za(e,t.delete);return new ia(r,n)}if(t.verify){const r=za(e,t.verify);return new sa(r,n)}return Ur()}function nu(e,t){return e&&e.length>0?(Vr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ja(e.updateTime):ja(t);return n.isEqual(si.min())&&(n=ja(t)),new Wo(n,e.transformResults||[])}(e,t)))):[]}function ru(e,t){return{documents:[Ha(e,t.path)]}}function iu(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Ha(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ha(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return fu(Ts.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:du(e.field),direction:uu(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.wt||ji(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function su(e){let t=Ga(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Vr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=au(e);return t instanceof Ts&&Cs(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new $s(hu(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ji(t)?null:t}(n.limit));let u=null;n.startAt&&(u=function(e){const t=!!e.before,n=e.values||[];return new ws(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new ws(n,t)}(n.endAt)),lo(t,i,o,s,a,"F",u,l)}function ou(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ur()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function au(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=hu(e.unaryFilter.field);return Es.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=hu(e.unaryFilter.field);return Es.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=hu(e.unaryFilter.field);return Es.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=hu(e.unaryFilter.field);return Es.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ur()}}(e):void 0!==e.fieldFilter?function(e){return Es.create(hu(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ur()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Ts.create(e.compositeFilter.filters.map((e=>au(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Ur()}}(e.compositeFilter.op))}(e):Ur()}function uu(e){return Pa[e]}function lu(e){return La[e]}function cu(e){return Fa[e]}function du(e){return{fieldPath:e.canonicalString()}}function hu(e){return li.fromServerFormat(e.fieldPath)}function fu(e){return e instanceof Es?function(e){if("=="===e.op){if(hs(e.value))return{unaryFilter:{field:du(e.field),op:"IS_NAN"}};if(ds(e.value))return{unaryFilter:{field:du(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(hs(e.value))return{unaryFilter:{field:du(e.field),op:"IS_NOT_NAN"}};if(ds(e.value))return{unaryFilter:{field:du(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:du(e.field),op:lu(e.op),value:e.value}}}(e):e instanceof Ts?function(e){const t=e.getFilters().map((e=>fu(e)));return 1===t.length?t[0]:{compositeFilter:{op:cu(e.op),filters:t}}}(e):Ur()}function pu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function mu(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=yu(t)),t=vu(e.get(n),t);return yu(t)}function vu(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function yu(e){return e+""}function bu(e){const t=e.length;if(Vr(t>=2),2===t)return Vr(""===e.charAt(0)&&""===e.charAt(1)),ai.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&Ur(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:Ur()}s=t+2}return new ai(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(e,t){return[e,gu(t)]}function Iu(e,t,n){return[e,gu(t),n]}const Su={},Eu=["prefixPath","collectionGroup","readTime","documentId"],Tu=["prefixPath","collectionGroup","documentId"],ku=["collectionGroup","readTime","prefixPath","documentId"],xu=["canonicalId","targetId"],Cu=["targetId","path"],Au=["path","targetId"],Nu=["collectionId","parent"],Du=["indexId","uid"],Ou=["uid","sequenceNumber"],Ru=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Pu=["indexId","uid","orderedDocumentKey"],Lu=["userId","collectionPath","documentId"],Fu=["userId","collectionPath","largestBatchId"],Mu=["userId","collectionGroup","largestBatchId"],Uu=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Vu=[...Uu,"documentOverlays"],Bu=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ju=Bu,$u=[...ju,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends _i{constructor(e,t){super(),this.se=e,this.currentSequenceNumber=t}}function Wu(e,t){const n=jr(e);return Ti.M(n.se,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Yo(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Qo(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Qo(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=ya();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Ko(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(si.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ia())}isEqual(e){return this.batchId===e.batchId&&ni(this.mutations,e.mutations,((e,t)=>Xo(e,t)))&&ni(this.baseMutations,e.baseMutations,((e,t)=>Xo(e,t)))}}class Hu{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Vr(e.mutations.length===n.length);let r=wa;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Hu(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t,n,r,i=si.min(),s=si.min(),o=zi.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Ku(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ku(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ku(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e){this.ie=e}}function Qu(e,t){let n;if(t.document)n=Ja(e.ie,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=ci.fromSegments(t.noDocument.path),r=el(t.noDocument.readTime);n=Zs.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Ur();{const e=ci.fromSegments(t.unknownDocument.path),r=el(t.unknownDocument.version);n=Zs.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new ii(e[0],e[1]);return si.fromTimestamp(t)}(t.readTime)),n}function Ju(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Xu(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Wa(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Ua(e,t.version.toTimestamp()),createTime:Ua(e,t.createTime.toTimestamp())}}(e.ie,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Zu(t.version)};else{if(!t.isUnknownDocument())return Ur();r.unknownDocument={path:n.path.toArray(),version:Zu(t.version)}}return r}function Xu(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Zu(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function el(e){const t=new ii(e.seconds,e.nanoseconds);return si.fromTimestamp(t)}function tl(e,t){const n=(t.baseMutations||[]).map((t=>tu(e.ie,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>tu(e.ie,t))),i=ii.fromMillis(t.localWriteTimeMs);return new zu(t.batchId,i,n,r)}function nl(e){const t=el(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?el(e.lastLimboFreeSnapshotVersion):si.min();let r;var i;return void 0!==e.query.documents?(Vr(1===(i=e.query).documents.length),r=vo(co(Ga(i.documents[0])))):r=function(e){return vo(su(e))}(e.query),new Ku(r,e.targetId,0,e.lastListenSequenceNumber,t,n,zi.fromBase64String(e.resumeToken))}function rl(e,t){const n=Zu(t.snapshotVersion),r=Zu(t.lastLimboFreeSnapshotVersion);let i;i=io(t.target)?ru(e.ie,t.target):iu(e.ie,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:no(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function il(e){const t=su({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?bo(t,t.limit,"L"):t}function sl(e,t){return new Gu(t.largestBatchId,tu(e.ie,t.overlayMutation))}function ol(e,t){const n=t.path.lastSegment();return[e,gu(t.path.popLast()),n]}function al(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Zu(r.readTime),documentKey:gu(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{getBundleMetadata(e,t){return ll(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:el(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return ll(e).put({bundleId:(n=t).id,createTime:Zu(ja(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return cl(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:il(t.bundledQuery),readTime:el(t.readTime)};var t}))}saveNamedQuery(e,t){return cl(e).put(function(e){return{name:e.name,readTime:Zu(ja(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function ll(e){return Wu(e,"bundles")}function cl(e){return Wu(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t){this.yt=e,this.userId=t}static re(e,t){const n=t.uid||"";return new dl(e,n)}getOverlay(e,t){return hl(e).get(ol(this.userId,t)).next((e=>e?sl(this.yt,e):null))}getOverlays(e,t){const n=va();return Si.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new Gu(t,i);r.push(this.oe(e,s))})),Si.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(gu(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(hl(e).Y("collectionPathOverlayIndex",r))})),Si.waitFor(i)}getOverlaysForCollection(e,t,n){const r=va(),i=gu(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return hl(e).W("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=sl(this.yt,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=va();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return hl(e).Z({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=sl(this.yt,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}oe(e,t){return hl(e).put(function(e,t,n){const[r,i,s]=ol(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:eu(e.ie,n.mutation)}}(this.yt,this.userId,t))}}function hl(e){return Wu(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(Ki(e.integerValue));else if("doubleValue"in e){const n=Ki(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),$i(n)?t.le(0):t.le(n))}else if("timestampValue"in e){const n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(`${n.seconds||""}`),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(Yi(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?ms(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):Ur()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const n=e.fields||{};this.he(t,55);for(const r of Object.keys(n))this.de(r,t),this.ce(n[r],t)}ye(e,t){const n=e.values||[];this.he(t,50);for(const r of n)this.ce(r,t)}me(e,t){this.he(t,37),ci.fromName(e).path.forEach((e=>{this.he(t,60),this.pe(e,t)}))}he(e,t){e.le(t)}_e(e){e.le(2)}}function pl(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function ml(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=pl(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}fl.Ie=new fl;class gl{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ee(n.value),n=t.next();this.Ae()}Re(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.be(n.value),n=t.next();this.Pe()}ve(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ee(e);else if(e<2048)this.Ee(960|e>>>6),this.Ee(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ee(480|e>>>12),this.Ee(128|63&e>>>6),this.Ee(128|63&e);else{const e=t.codePointAt(0);this.Ee(240|e>>>18),this.Ee(128|63&e>>>12),this.Ee(128|63&e>>>6),this.Ee(128|63&e)}}this.Ae()}Ve(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.be(e);else if(e<2048)this.be(960|e>>>6),this.be(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.be(480|e>>>12),this.be(128|63&e>>>6),this.be(128|63&e);else{const e=t.codePointAt(0);this.be(240|e>>>18),this.be(128|63&e>>>12),this.be(128|63&e>>>6),this.be(128|63&e)}}this.Pe()}Se(e){const t=this.De(e),n=ml(t);this.Ce(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}xe(e){const t=this.De(e),n=ml(t);this.Ce(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Ee(e){const t=255&e;0===t?(this.ke(0),this.ke(255)):255===t?(this.ke(255),this.ke(0)):this.ke(t)}be(e){const t=255&e;0===t?(this.Me(0),this.Me(255)):255===t?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class vl{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class yl{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class bl{constructor(){this.$e=new gl,this.Be=new vl(this.$e),this.Le=new yl(this.$e)}seed(e){this.$e.seed(e)}qe(e){return 0===e?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Ue(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new wl(this.indexId,this.documentKey,this.arrayValue,n)}}function _l(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Il(e.arrayValue,t.arrayValue),0!==n?n:(n=Il(e.directionalValue,t.directionalValue),0!==n?n:ci.comparator(e.documentKey,t.documentKey)))}function Il(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const t of e.filters){const e=t;e.isInequality()?this.Qe=e:this.Ge.push(e)}}je(e){Vr(e.collectionGroup===this.collectionId);const t=hi(e);if(void 0!==t&&!this.We(t))return!1;const n=fi(e);let r=0,i=0;for(;r<n.length&&this.We(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Qe){const e=n[r];if(!this.ze(this.Qe,e)||!this.He(this.Ke[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Ke.length||!this.He(this.Ke[i++],e))return!1}return!0}We(e){for(const t of this.Ge)if(this.ze(t,e))return!0;return!1}ze(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}He(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(e){var t,n;if(Vr(e instanceof Es||e instanceof Ts),e instanceof Es){if(e instanceof Vs){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map((t=>Es.create(e.field,"==",t))))||[];return Ts.create(r,"or")}return e}const r=e.filters.map((e=>El(e)));return Ts.create(r,e.op)}function Tl(e){if(0===e.getFilters().length)return[];const t=Al(El(e));return Vr(Cl(t)),kl(t)||xl(t)?[t]:t.getFilters()}function kl(e){return e instanceof Es}function xl(e){return e instanceof Ts&&Cs(e)}function Cl(e){return kl(e)||xl(e)||function(e){if(e instanceof Ts&&xs(e)){for(const t of e.getFilters())if(!kl(t)&&!xl(t))return!1;return!0}return!1}(e)}function Al(e){if(Vr(e instanceof Es||e instanceof Ts),e instanceof Es)return e;if(1===e.filters.length)return Al(e.filters[0]);const t=e.filters.map((e=>Al(e)));let n=Ts.create(t,e.op);return n=Ol(n),Cl(n)?n:(Vr(n instanceof Ts),Vr(ks(n)),Vr(n.filters.length>1),n.filters.reduce(((e,t)=>Nl(e,t))))}function Nl(e,t){let n;return Vr(e instanceof Es||e instanceof Ts),Vr(t instanceof Es||t instanceof Ts),n=e instanceof Es?t instanceof Es?function(e,t){return Ts.create([e,t],"and")}(e,t):Dl(e,t):t instanceof Es?Dl(t,e):function(e,t){if(Vr(e.filters.length>0&&t.filters.length>0),ks(e)&&ks(t))return Os(e,t.getFilters());const n=xs(e)?e:t,r=xs(e)?t:e,i=n.filters.map((e=>Nl(e,r)));return Ts.create(i,"or")}(e,t),Ol(n)}function Dl(e,t){if(ks(t))return Os(t,e.getFilters());{const n=t.filters.map((t=>Nl(e,t)));return Ts.create(n,"or")}}function Ol(e){if(Vr(e instanceof Es||e instanceof Ts),e instanceof Es)return e;const t=e.getFilters();if(1===t.length)return Ol(t[0]);if(As(e))return e;const n=t.map((e=>Ol(e))),r=[];return n.forEach((t=>{t instanceof Es?r.push(t):t instanceof Ts&&(t.op===e.op?r.push(...t.filters):r.push(t))})),1===r.length?r[0]:Ts.create(r,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Rl{constructor(){this.Je=new Pl}addToCollectionParentIndex(e,t){return this.Je.add(t),Si.resolve()}getCollectionParents(e,t){return Si.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return Si.resolve()}deleteFieldIndex(e,t){return Si.resolve()}getDocumentsMatchingTarget(e,t){return Si.resolve(null)}getIndexType(e,t){return Si.resolve(0)}getFieldIndexes(e,t){return Si.resolve([])}getNextCollectionGroupToUpdate(e){return Si.resolve(null)}getMinOffset(e,t){return Si.resolve(yi.min())}getMinOffsetFromCollectionGroup(e,t){return Si.resolve(yi.min())}updateCollectionGroup(e,t,n){return Si.resolve()}updateIndexEntries(e,t){return Si.resolve()}}class Pl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Gs(ai.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Gs(ai.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=new Uint8Array(0);class Fl{constructor(e,t){this.user=e,this.databaseId=t,this.Ye=new Pl,this.Xe=new da((e=>no(e)),((e,t)=>ro(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ye.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.Ye.add(t)}));const i={collectionId:n,parent:gu(r)};return Ml(e).put(i)}return Si.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[ri(t),""],!1,!0);return Ml(e).W(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(bu(r.parent))}return n}))}addFieldIndex(e,t){const n=Vl(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=Bl(e);return i.next((e=>{n.put(al(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=Vl(e),r=Bl(e),i=Ul(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=Ul(e);let r=!0;const i=new Map;return Si.forEach(this.Ze(t),(t=>this.tn(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=Ia();const r=[];return Si.forEach(i,((i,s)=>{var o;Pr("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${no(t)}`);const a=function(e,t){const n=hi(t);if(void 0===n)return null;for(const r of so(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),u=function(e,t){const n=new Map;for(const r of fi(t))for(const t of so(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of fi(t)){const t=0===i.kind?oo(e,i.fieldPath,e.startAt):ao(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new ws(n,r)}(s,i),c=function(e,t){const n=[];let r=!0;for(const i of fi(t)){const t=0===i.kind?ao(e,i.fieldPath,e.endAt):oo(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new ws(n,r)}(s,i),d=this.en(i,s,l),h=this.en(i,s,c),f=this.nn(i,s,u),p=this.sn(i.indexId,a,d,l.inclusive,h,c.inclusive,f);return Si.forEach(p,(i=>n.J(i,t.limit).next((t=>{t.forEach((t=>{const n=ci.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return Si.resolve(null)}))}Ze(e){let t=this.Xe.get(e);return t||(t=0===e.filters.length?[e]:Tl(Ts.create(e.filters,"and")).map((t=>to(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt))),this.Xe.set(e,t),t)}sn(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),u=a/(null!=t?t.length:1),l=[];for(let c=0;c<a;++c){const a=t?this.rn(t[c/u]):Ll,d=this.on(e,a,n[c%u],r),h=this.un(e,a,i[c%u],s),f=o.map((t=>this.on(e,a,t,!0)));l.push(...this.createRange(d,h,f))}return l}on(e,t,n,r){const i=new wl(e,ci.empty(),t,n);return r?i:i.Ue()}un(e,t,n,r){const i=new wl(e,ci.empty(),t,n);return r?i.Ue():i}tn(e,t){const n=new Sl(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.je(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;const r=this.Ze(t);return Si.forEach(r,(t=>this.tn(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new Gs(li.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n))}cn(e,t){const n=new bl;for(const r of fi(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.qe(r.kind);fl.Ie.ue(e,i)}return n.Fe()}rn(e){const t=new bl;return fl.Ie.ue(e,t.qe(0)),t.Fe()}an(e,t){const n=new bl;return fl.Ie.ue(us(this.databaseId,t),n.qe(function(e){const t=fi(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Fe()}nn(e,t,n){if(null===n)return[];let r=[];r.push(new bl);let i=0;for(const s of fi(e)){const e=n[i++];for(const n of r)if(this.hn(t,s.fieldPath)&&cs(e))r=this.ln(r,s,e);else{const t=n.qe(s.kind);fl.Ie.ue(e,t)}}return this.fn(r)}en(e,t,n){return this.nn(e,t,n.position)}fn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Fe();return t}ln(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new bl;n.seed(e.Fe()),fl.Ie.ue(s,n.qe(t.kind)),i.push(n)}return i}hn(e,t){return!!e.filters.find((e=>e instanceof Es&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=Vl(e),r=Bl(e);return(t?n.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.W()).next((e=>{const t=[];return Si.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new mi(t.sequenceNumber,new yi(el(t.readTime),new ci(bu(t.documentKey)),t.largestBatchId)):mi.empty(),r=e.fields.map((([e,t])=>new pi(li.fromServerFormat(e),t)));return new di(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:ti(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=Vl(e),i=Bl(e);return this.dn(e).next((e=>r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Si.forEach(t,(t=>i.put(al(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Si.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?Si.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),Si.forEach(i,(n=>this._n(e,t,n).next((t=>{const i=this.wn(r,n);return t.isEqual(i)?Si.resolve():this.mn(e,r,n,t,i)})))))))}))}gn(e,t,n,r){return Ul(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.an(n,t.key),documentKey:t.key.path.toArray()})}yn(e,t,n,r){return Ul(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.an(n,t.key),t.key.path.toArray()])}_n(e,t,n){const r=Ul(e);let i=new Gs(_l);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.an(n,t)])},((e,r)=>{i=i.add(new wl(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}wn(e,t){let n=new Gs(_l);const r=this.cn(t,e);if(null==r)return n;const i=hi(t);if(null!=i){const s=e.data.field(i.fieldPath);if(cs(s))for(const i of s.arrayValue.values||[])n=n.add(new wl(t.indexId,e.key,this.rn(i),r))}else n=n.add(new wl(t.indexId,e.key,Ll,r));return n}mn(e,t,n,r,i){Pr("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=Ys(s),u=Ys(o);for(;a||u;){let e=!1,t=!1;if(a&&u){const r=n(a,u);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(u),u=Ys(o)):t?(i(a),a=Ys(s)):(a=Ys(s),u=Ys(o))}}(r,i,_l,(r=>{s.push(this.gn(e,t,n,r))}),(r=>{s.push(this.yn(e,t,n,r))})),Si.waitFor(s)}dn(e){let t=1;return Bl(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>_l(e,t))).filter(((e,t,n)=>!t||0!==_l(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=_l(s,e),i=_l(s,t);if(0===n)r[0]=e.Ue();else if(n>0&&i<0)r.push(s),r.push(s.Ue());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2){if(this.pn(r[s],r[s+1]))return[];const e=[r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,Ll,[]],t=[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,Ll,[]];i.push(IDBKeyRange.bound(e,t))}return i}pn(e,t){return _l(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(jl)}getMinOffset(e,t){return Si.mapArray(this.Ze(t),(t=>this.tn(e,t).next((e=>e||Ur())))).next(jl)}}function Ml(e){return Wu(e,"collectionParents")}function Ul(e){return Wu(e,"indexEntries")}function Vl(e){return Wu(e,"indexConfiguration")}function Bl(e){return Wu(e,"indexState")}function jl(e){Vr(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;bi(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new yi(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ql{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ql(e,ql.DEFAULT_COLLECTION_PERCENTILE,ql.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Z({range:o},((e,t,n)=>(a++,n.delete())));s.push(u.next((()=>{Vr(1===a)})));const l=[];for(const c of n.mutations){const e=Iu(t,c.key.path,n.batchId);s.push(i.delete(e)),l.push(c.key)}return Si.waitFor(s).next((()=>l))}function zl(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Ur();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ql.DEFAULT_COLLECTION_PERCENTILE=10,ql.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ql.DEFAULT=new ql(41943040,ql.DEFAULT_COLLECTION_PERCENTILE,ql.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ql.DISABLED=new ql(-1,0,0);class Hl{constructor(e,t,n,r){this.userId=e,this.yt=t,this.indexManager=n,this.referenceDelegate=r,this.In={}}static re(e,t,n,r){Vr(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Hl(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Kl(e).Z({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=Yl(e),s=Kl(e);return s.add({}).next((o=>{Vr("number"==typeof o);const a=new zu(o,t,n,r),u=function(e,t,n){const r=n.baseMutations.map((t=>eu(e.ie,t))),i=n.mutations.map((t=>eu(e.ie,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.yt,this.userId,a),l=[];let c=new Gs(((e,t)=>ti(e.canonicalString(),t.canonicalString())));for(const e of r){const t=Iu(this.userId,e.key.path,o);c=c.add(e.key.path.popLast()),l.push(s.put(u)),l.push(i.put(t,Su))}return c.forEach((t=>{l.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.In[o]=a.keys()})),Si.waitFor(l).next((()=>a))}))}lookupMutationBatch(e,t){return Kl(e).get(t).next((e=>e?(Vr(e.userId===this.userId),tl(this.yt,e)):null))}Tn(e,t){return this.In[t]?Si.resolve(this.In[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.In[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Kl(e).Z({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(Vr(t.batchId>=n),i=tl(this.yt,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Kl(e).Z({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Kl(e).W("userMutationsIndex",t).next((e=>e.map((e=>tl(this.yt,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=_u(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Yl(e).Z({range:r},((n,r,s)=>{const[o,a,u]=n,l=bu(a);if(o===this.userId&&t.path.isEqual(l))return Kl(e).get(u).next((e=>{if(!e)throw Ur();Vr(e.userId===this.userId),i.push(tl(this.yt,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Gs(ti);const r=[];return t.forEach((t=>{const i=_u(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Yl(e).Z({range:s},((e,r,i)=>{const[s,o,a]=e,u=bu(o);s===this.userId&&t.path.isEqual(u)?n=n.add(a):i.done()}));r.push(o)})),Si.waitFor(r).next((()=>this.En(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=_u(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Gs(ti);return Yl(e).Z({range:s},((e,t,i)=>{const[s,a,u]=e,l=bu(a);s===this.userId&&n.isPrefixOf(l)?l.length===r&&(o=o.add(u)):i.done()})).next((()=>this.En(e,o)))}En(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Kl(e).get(t).next((e=>{if(null===e)throw Ur();Vr(e.userId===this.userId),n.push(tl(this.yt,e))})))})),Si.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Wl(e.se,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.An(t.batchId)})),Si.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Si.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return Yl(e).Z({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=bu(e[1]);r.push(t)}else n.done()})).next((()=>{Vr(0===r.length)}))}))}containsKey(e,t){return Gl(e,this.userId,t)}Rn(e){return Ql(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Gl(e,t,n){const r=_u(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Yl(e).Z({range:s,X:!0},((e,n,r)=>{const[s,a,u]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function Kl(e){return Wu(e,"mutations")}function Yl(e){return Wu(e,"documentMutations")}function Ql(e){return Wu(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Jl(0)}static vn(){return new Jl(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t){this.referenceDelegate=e,this.yt=t}allocateTargetId(e){return this.Vn(e).next((t=>{const n=new Jl(t.highestTargetId);return t.highestTargetId=n.next(),this.Sn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Vn(e).next((e=>si.fromTimestamp(new ii(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Vn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Vn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Sn(e,r))))}addTargetData(e,t){return this.Dn(e,t).next((()=>this.Vn(e).next((n=>(n.targetCount+=1,this.Cn(t,n),this.Sn(e,n))))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Zl(e).delete(t.targetId))).next((()=>this.Vn(e))).next((t=>(Vr(t.targetCount>0),t.targetCount-=1,this.Sn(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return Zl(e).Z(((s,o)=>{const a=nl(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>Si.waitFor(i))).next((()=>r))}forEachTarget(e,t){return Zl(e).Z(((e,n)=>{const r=nl(n);t(r)}))}Vn(e){return ec(e).get("targetGlobalKey").next((e=>(Vr(null!==e),e)))}Sn(e,t){return ec(e).put("targetGlobalKey",t)}Dn(e,t){return Zl(e).put(rl(this.yt,t))}Cn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Vn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=no(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Zl(e).Z({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=nl(n);ro(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=tc(e);return t.forEach((t=>{const s=gu(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),Si.waitFor(r)}removeMatchingKeys(e,t,n){const r=tc(e);return Si.forEach(t,(t=>{const i=gu(t.path);return Si.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=tc(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=tc(e);let i=Ia();return r.Z({range:n,X:!0},((e,t,n)=>{const r=bu(e[1]),s=new ci(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=gu(t.path),r=IDBKeyRange.bound([n],[ri(n)],!1,!0);let i=0;return tc(e).Z({index:"documentTargetsIndex",X:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}ne(e,t){return Zl(e).get(t).next((e=>e?nl(e):null))}}function Zl(e){return Wu(e,"targets")}function ec(e){return Wu(e,"targetGlobal")}function tc(e){return Wu(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc([e,t],[n,r]){const i=ti(e,n);return 0===i?ti(t,r):i}class rc{constructor(e){this.xn=e,this.buffer=new Gs(nc),this.Nn=0}kn(){return++this.Nn}On(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();nc(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ic{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Mn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return null!==this.Mn}Fn(e){Pr("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ci(e)?Pr("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Ii(e)}await this.Fn(3e5)}))}}class sc{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Si.resolve(Li.at);const n=new rc(t);return this.$n.forEachTarget(e,(e=>n.On(e.sequenceNumber))).next((()=>this.$n.Ln(e,(e=>n.On(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.$n.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Pr("LruGarbageCollector","Garbage collection skipped; disabled"),Si.resolve($l)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Pr("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$l):this.qn(e,t)))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,t){let n,r,i,s,o,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Pr("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,u=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(l=Date.now(),Or()<=a["in"].DEBUG&&Pr("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-c}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(u-o)+"ms\n"+`\tRemoved ${e} documents in `+(l-u)+"ms\n"+`Total Duration: ${l-c}ms`),Si.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new sc(e,t)}(this,t)}Bn(e){const t=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Un(e){let t=0;return this.Ln(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,((e,n)=>t(n)))}addReference(e,t,n){return ac(e,n)}removeReference(e,t,n){return ac(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return ac(e,t)}Gn(e,t){return function(e,t){let n=!1;return Ql(e).tt((r=>Gl(e,r,t).next((e=>(e&&(n=!0),Si.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Kn(e,((s,o)=>{if(o<=t){const t=this.Gn(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,si.min()),tc(e).delete([0,gu(s.path)]))))}));r.push(t)}})).next((()=>Si.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return ac(e,t)}Kn(e,t){const n=tc(e);let r,i=Li.at;return n.Z({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==Li.at&&t(new ci(bu(r)),i),i=o,r=s):i=Li.at})).next((()=>{i!==Li.at&&t(new ci(bu(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ac(e,t){return tc(e).put(function(e,t){return{targetId:0,path:gu(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.changes=new da((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Zs.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Si.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return fc(e).put(n)}removeEntry(e,t,n){return fc(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Xu(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Qn(e,n))))}getEntry(e,t){let n=Zs.newInvalidDocument(t);return fc(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(pc(t))},((e,r)=>{n=this.jn(t,r)})).next((()=>n))}Wn(e,t){let n={size:0,document:Zs.newInvalidDocument(t)};return fc(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(pc(t))},((e,r)=>{n={document:this.jn(t,r),size:zl(r)}})).next((()=>n))}getEntries(e,t){let n=fa();return this.zn(e,t,((e,t)=>{const r=this.jn(e,t);n=n.insert(e,r)})).next((()=>n))}Hn(e,t){let n=fa(),r=new Ws(ci.comparator);return this.zn(e,t,((e,t)=>{const i=this.jn(e,t);n=n.insert(e,i),r=r.insert(e,zl(t))})).next((()=>({documents:n,Jn:r})))}zn(e,t,n){if(t.isEmpty())return Si.resolve();let r=new Gs(gc);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(pc(r.first()),pc(r.last())),s=r.getIterator();let o=s.getNext();return fc(e).Z({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=ci.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&gc(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.j(pc(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),Xu(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return fc(e).W(IDBKeyRange.bound(r,i,!0)).next((e=>{let t=fa();for(const n of e){const e=this.jn(ci.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t}))}getAllFromCollectionGroup(e,t,n,r){let i=fa();const s=mc(t,n),o=mc(t,yi.max());return fc(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.jn(ci.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new dc(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return hc(e).get("remoteDocumentGlobalKey").next((e=>(Vr(!!e),e)))}Qn(e,t){return hc(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const e=Qu(this.yt,t);if(!e.isNoDocument()||!e.version.isEqual(si.min()))return e}return Zs.newInvalidDocument(e)}}function cc(e){return new lc(e)}class dc extends uc{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new da((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new Gs(((e,t)=>ti(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.Xn.get(i);if(t.push(this.Yn.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=Ju(this.Yn.yt,s);r=r.add(i.path.popLast());const u=zl(a);n+=u-o.size,t.push(this.Yn.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=Ju(this.Yn.yt,s.convertToNoDocument(si.min()));t.push(this.Yn.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.Yn.updateMetadata(e,n)),Si.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next((e=>(this.Xn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next((({documents:e,Jn:t})=>(t.forEach(((t,n)=>{this.Xn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function hc(e){return Wu(e,"remoteDocumentGlobal")}function fc(e){return Wu(e,"remoteDocumentsV14")}function pc(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function mc(e,t){const n=t.documentKey.path.toArray();return[e,Xu(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function gc(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ti(n[s],r[s]),i)return i;return i=ti(n.length,r.length),i||(i=ti(n[n.length-2],r[r.length-2]),i||ti(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class vc{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Qo(n.mutation,e,Qs.empty(),ii.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Ia()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Ia()){const r=va();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=ma();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=va();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Ia())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=fa();const s=ba(),o=ba();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof ea)?i=i.insert(t.key,t):void 0!==o&&(s.set(t.key,o.mutation.getFieldMask()),Qo(o.mutation,t,o.mutation.getFieldMask(),ii.now()))})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new vc(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=ba();let r=new Ws(((e,t)=>e-t)),i=Ia();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Qs.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Ia()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,u=r.value,l=ya();u.forEach((e=>{if(!i.has(e)){const r=Ko(t.get(e),n.get(e));null!==r&&l.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,l))}return Si.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return ci.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):mo(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Si.resolve(va());let o=-1,a=i;return s.next((t=>Si.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Si.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Ia()))).next((e=>({batchId:o,changes:ga(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ci(t)).next((e=>{let t=ma();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=ma();return this.indexManager.getCollectionParents(e,r).next((s=>Si.forEach(s,(s=>{const o=function(e,t){return new uo(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,Zs.newInvalidDocument(n)))}));let n=ma();return r.forEach(((r,i)=>{const s=e.get(r);void 0!==s&&Qo(s.mutation,i,Qs.empty(),ii.now()),So(t,i)&&(n=n.insert(r,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return Si.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:ja(n.createTime)}),Si.resolve()}getNamedQuery(e,t){return Si.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:il(e.bundledQuery),readTime:ja(e.readTime)}}(t)),Si.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.overlays=new Ws(ci.comparator),this.es=new Map}getOverlay(e,t){return Si.resolve(this.overlays.get(t))}getOverlays(e,t){const n=va();return Si.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.oe(e,t,r)})),Si.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),Si.resolve()}getOverlaysForCollection(e,t,n){const r=va(),i=t.length+1,s=new ci(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Si.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Ws(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=va(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=va(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Si.resolve(o)}oe(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Gu(t,n));let i=this.es.get(t);void 0===i&&(i=Ia(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this.ns=new Gs(Ic.ss),this.rs=new Gs(Ic.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new Ic(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new Ic(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new ci(new ai([])),n=new Ic(t,e),r=new Ic(t,e+1),i=[];return this.rs.forEachInRange([n,r],(e=>{this.cs(e),i.push(e.key)})),i}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new ci(new ai([])),n=new Ic(t,e),r=new Ic(t,e+1);let i=Ia();return this.rs.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Ic(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Ic{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return ci.comparator(e.key,t.key)||ti(e._s,t._s)}static os(e,t){return ti(e._s,t._s)||ci.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new Gs(Ic.ss)}checkEmpty(e){return Si.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new zu(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.gs=this.gs.add(new Ic(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Si.resolve(s)}lookupMutationBatch(e,t){return Si.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),i=r<0?0:r;return Si.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Si.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return Si.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ic(t,0),r=new Ic(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(e=>{const t=this.ys(e._s);i.push(t)})),Si.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Gs(ti);return t.forEach((e=>{const t=new Ic(e,0),r=new Ic(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],(e=>{n=n.add(e._s)}))})),Si.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ci.isDocumentKey(i)||(i=i.child(""));const s=new Ic(new ci(i),0);let o=new Gs(ti);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)}),s),Si.resolve(this.Is(o))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Vr(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return Si.forEach(t.mutations,(r=>{const i=new Ic(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new Ic(t,0),r=this.gs.firstAfterOrEqual(n);return Si.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Si.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e){this.Es=e,this.docs=new Ws(ci.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Si.resolve(n?n.document.mutableCopy():Zs.newInvalidDocument(t))}getEntries(e,t){let n=fa();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Zs.newInvalidDocument(e))})),Si.resolve(n)}getAllFromCollection(e,t,n){let r=fa();const i=new ci(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||bi(vi(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Si.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Ur()}As(e,t){return Si.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Tc(this)}getSize(e){return Si.resolve(this.size)}}class Tc extends uc{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)})),Si.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e){this.persistence=e,this.Rs=new da((e=>no(e)),ro),this.lastRemoteSnapshotVersion=si.min(),this.highestTargetId=0,this.bs=0,this.Ps=new _c,this.targetCount=0,this.vs=Jl.Pn()}forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),Si.resolve()}getLastRemoteSnapshotVersion(e){return Si.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Si.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),Si.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),Si.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Jl(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,Si.resolve()}updateTargetData(e,t){return this.Dn(t),Si.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,Si.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Rs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Si.waitFor(i).next((()=>r))}getTargetCount(e){return Si.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return Si.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),Si.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Si.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),Si.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return Si.resolve(n)}containsKey(e,t){return Si.resolve(this.Ps.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new Li(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new kc(this),this.indexManager=new Rl,this.remoteDocumentCache=function(e){return new Ec(e)}((e=>this.referenceDelegate.xs(e))),this.yt=new Yu(t),this.Ns=new bc(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new wc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new Sc(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){Pr("MemoryPersistence","Starting transaction:",e);const r=new Cc(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((e=>this.referenceDelegate.Os(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ms(e,t){return Si.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}}class Cc extends _i{constructor(e){super(),this.currentSequenceNumber=e}}class Ac{constructor(e){this.persistence=e,this.Fs=new _c,this.$s=null}static Bs(e){return new Ac(e)}get Ls(){if(this.$s)return this.$s;throw Ur()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),Si.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),Si.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),Si.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Si.forEach(this.Ls,(n=>{const r=ci.fromPath(n);return this.qs(e,r).next((e=>{e||t.removeEntry(r,si.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.qs(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}qs(e,t){return Si.or([()=>Si.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e){this.yt=e}$(e,t,n,r){const i=new Ei("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",wu,{unique:!0}),e.createObjectStore("documentMutations")}(e),Dc(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Si.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Dc(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:si.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").W().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",wu,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return Si.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Us(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(i))))),n<7&&r>=7&&(s=s.next((()=>this.Gs(i)))),n<8&&r>=8&&(s=s.next((()=>this.Qs(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.js(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Lu});t.createIndex("collectionPathOverlayIndex",Fu,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",Mu,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Eu});t.createIndex("documentKeyIndex",Tu),t.createIndex("collectionGroupIndex",ku)}(e))).next((()=>this.Ws(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>this.zs(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Du}).createIndex("sequenceNumberIndex",Ou,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Ru}).createIndex("documentKeyIndex",Pu,{unique:!1})}(e)))),s}Ks(e){let t=0;return e.store("remoteDocuments").Z(((e,n)=>{t+=zl(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Us(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.W().next((t=>Si.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.W("userMutationsIndex",r).next((n=>Si.forEach(n,(n=>{Vr(n.userId===t.userId);const r=tl(this.yt,n);return Wl(e,t.userId,r).next((()=>{}))}))))}))))}Gs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.Z(((n,i)=>{const s=new ai(n),o=function(e){return[0,gu(e)]}(s);r.push(t.get(o).next((n=>n?Si.resolve():(n=>t.put({targetId:0,path:gu(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>Si.waitFor(r)))}))}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:Nu});const n=t.store("collectionParents"),r=new Pl,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:gu(r)})}};return t.store("remoteDocuments").Z({X:!0},((e,t)=>{const n=new ai(e);return i(n.popLast())})).next((()=>t.store("documentMutations").Z({X:!0},(([e,t,n],r)=>{const s=bu(t);return i(s.popLast())}))))}js(e){const t=e.store("targets");return t.Z(((e,n)=>{const r=nl(n),i=rl(this.yt,r);return t.put(i)}))}Ws(e,t){const n=t.store("remoteDocuments"),r=[];return n.Z(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new ci(ai.fromString(o.document.name).popFirst(5)):o.noDocument?ci.fromSegments(o.noDocument.path):o.unknownDocument?ci.fromSegments(o.unknownDocument.path):Ur()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))})).next((()=>Si.waitFor(r)))}zs(e,t){const n=t.store("mutations"),r=cc(this.yt),i=new xc(Ac.Bs,this.yt.ie);return n.W().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Ia();tl(this.yt,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),Si.forEach(n,((e,n)=>{const s=new Ar(n),o=dl.re(this.yt,s),a=i.getIndexManager(s),u=Hl.re(s,this.yt,a,i.referenceDelegate);return new yc(r,u,o,a).recalculateAndSaveOverlaysForDocumentKeys(new qu(t,Li.at),e).next()}))}))}}function Dc(e){e.createObjectStore("targetDocuments",{keyPath:Cu}).createIndex("documentTargetsIndex",Au,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",xu,{unique:!0}),e.createObjectStore("targetGlobal")}const Oc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Rc{constructor(e,t,n,r,i,s,o,a,u,l,c=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Hs=i,this.window=s,this.document=o,this.Js=u,this.Ys=l,this.Xs=c,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=e=>Promise.resolve(),!Rc.C())throw new qr($r.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new oc(this,r),this.ii=t+"main",this.yt=new Yu(a),this.ri=new Ti(this.ii,this.Xs,new Nc(this.yt)),this.Cs=new Xl(this.referenceDelegate,this.yt),this.remoteDocumentCache=cc(this.yt),this.Ns=new ul,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===l&&Lr("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new qr($r.FAILED_PRECONDITION,Oc);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Cs.getHighestSequenceNumber(e)))})).then((e=>{this.Ss=new Li(e,this.Js)})).then((()=>{this.Ds=!0})).catch((e=>(this.ri&&this.ri.close(),Promise.reject(e))))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget((async()=>{this.started&&await this.ui()})))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Lc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.fi(e).next((e=>{e||(this.isPrimary=!1,this.Hs.enqueueRetryable((()=>this.si(!1))))}))})).next((()=>this.di(e))).next((t=>this.isPrimary&&!t?this._i(e).next((()=>!1)):!!t&&this.wi(e).next((()=>!0)))))).catch((e=>{if(Ci(e))return Pr("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Pr("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable((()=>this.si(e))),this.isPrimary=e}))}fi(e){return Pc(e).get("owner").next((e=>Si.resolve(this.mi(e))))}gi(e){return Lc(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Wu(e,"clientMetadata");return t.W().next((e=>{const n=this.Ii(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Si.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ui().then((()=>this.yi())).then((()=>this.hi()))))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?Si.resolve(!0):Pc(e).get("owner").next((t=>{if(null!==t&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new qr($r.FAILED_PRECONDITION,Oc);return!1}}return!(!this.networkEnabled||!this.inForeground)||Lc(e).W().next((e=>void 0===this.Ii(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Pr("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new qu(e,Li.at);return this._i(t).next((()=>this.gi(t)))})),this.ri.close(),this.Pi()}Ii(e,t){return e.filter((e=>this.pi(e.updateTimeMs,t)&&!this.Ei(e.clientId)))}vi(){return this.runTransaction("getActiveClients","readonly",(e=>Lc(e).W().next((e=>this.Ii(e,18e5).map((e=>e.clientId))))))}get started(){return this.Ds}getMutationQueue(e,t){return Hl.re(e,this.yt,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Fl(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return dl.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,t,n){Pr("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(s=this.Xs)?$u:14===s?ju:13===s?Bu:12===s?Vu:11===s?Uu:void Ur();var s;let o;return this.ri.runTransaction(e,r,i,(r=>(o=new qu(r,this.Ss?this.Ss.next():Li.at),"readwrite-primary"===t?this.fi(o).next((e=>!!e||this.di(o))).next((t=>{if(!t)throw Lr(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable((()=>this.si(!1))),new qr($r.FAILED_PRECONDITION,wi);return n(o)})).next((e=>this.wi(o).next((()=>e)))):this.Vi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}Vi(e){return Pc(e).get("owner").next((e=>{if(null!==e&&this.pi(e.leaseTimestampMs,5e3)&&!this.Ei(e.ownerId)&&!this.mi(e)&&!(this.Ys||this.allowTabSynchronization&&e.allowTabSynchronization))throw new qr($r.FAILED_PRECONDITION,Oc)}))}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Pc(e).put("owner",t)}static C(){return Ti.C()}_i(e){const t=Pc(e);return t.get("owner").next((e=>this.mi(e)?(Pr("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Si.resolve()))}pi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Lr(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ui())))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Zs=()=>{this.Ai(),(0,u.G6)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const n=null!==(null===(t=this.oi)||void 0===t?void 0:t.getItem(this.Ti(e)));return Pr("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return Lr("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(S){Lr("Failed to set zombie client id.",S)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(S){}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Pc(e){return Wu(e,"owner")}function Lc(e){return Wu(e,"clientMetadata")}function Fc(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Mc{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=Ia(),r=Ia();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Mc(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next((i=>i||this.Oi(e,t,r,n))).next((n=>n||this.Mi(e,t)))}ki(e,t){if(ho(t))return Si.resolve(null);let n=vo(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=bo(t,null,"F"),n=vo(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Ia(...r);return this.Ni.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,bo(t,null,"F")):this.Bi(e,s,t,n)}))))})))))}Oi(e,t,n,r){return ho(t)||r.isEqual(si.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((i=>{const s=this.Fi(t,i);return this.$i(t,s,n,r)?this.Mi(e,t):(Or()<=a["in"].DEBUG&&Pr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Io(t)),this.Bi(e,s,t,gi(r,-1)))}))}Fi(e,t){let n=new Gs(To(e));return t.forEach(((t,r)=>{So(e,r)&&(n=n.add(r))})),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return Or()<=a["in"].DEBUG&&Pr("QueryEngine","Using full collection scan to execute query:",Io(t)),this.Ni.getDocumentsMatchingQuery(e,t,yi.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.yt=r,this.qi=new Ws(ti),this.Ui=new da((e=>no(e)),ro),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yc(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qi)))}}function Bc(e,t,n,r){return new Vc(e,t,n,r)}async function jc(e,t){const n=jr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Ia();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ji:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function $c(e,t){const n=jr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Si.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Vr(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Ia();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function qc(e){const t=jr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function Wc(e,t){const n=jr(e),r=t.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const o=[];t.targetChanges.forEach(((s,a)=>{const u=i.get(a);if(!u)return;o.push(n.Cs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,s.addedDocuments,a))));let l=u.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?l=l.withResumeToken(zi.EMPTY_BYTE_STRING,si.min()).withLastLimboFreeSnapshotVersion(si.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,r)),i=i.insert(a,l),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,l,s)&&o.push(n.Cs.updateTargetData(e,l))}));let a=fa(),u=Ia();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(zc(e,s,t.documentUpdates).next((e=>{a=e.Wi,u=e.zi}))),!r.isEqual(si.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Si.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,u))).next((()=>a))})).then((e=>(n.qi=i,e)))}function zc(e,t,n){let r=Ia(),i=Ia();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=fa();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(si.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Pr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Wi:r,zi:i}}))}function Hc(e,t){const n=jr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Gc(e,t){const n=jr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Cs.getTargetData(e,t).next((i=>i?(r=i,Si.resolve(r)):n.Cs.allocateTargetId(e).next((i=>(r=new Ku(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.qi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e}))}async function Kc(e,t,n){const r=jr(e),i=r.qi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Ci(e))throw e;Pr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qi=r.qi.remove(t),r.Ui.delete(i.target)}function Yc(e,t,n){const r=jr(e);let i=si.min(),s=Ia();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=jr(e),i=r.Ui.get(n);return void 0!==i?Si.resolve(r.qi.get(i)):r.Cs.getTargetData(t,n)}(r,e,vo(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Li.getDocumentsMatchingQuery(e,t,n?i:si.min(),n?s:Ia()))).next((e=>(Xc(r,Eo(t),e),{documents:e,Hi:s})))))}function Qc(e,t){const n=jr(e),r=jr(n.Cs),i=n.qi.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.ne(e,t).next((e=>e?e.target:null))))}function Jc(e,t){const n=jr(e),r=n.Ki.get(t)||si.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Gi.getAllFromCollectionGroup(e,t,gi(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(Xc(n,t,e),e)))}function Xc(e,t,n){let r=e.Ki.get(t)||si.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}async function Zc(e,t,n,r){const i=jr(e);let s=Ia(),o=fa();for(const l of n){const e=t.Ji(l.metadata.name);l.document&&(s=s.add(e));const n=t.Yi(l);n.setReadTime(t.Xi(l.metadata.readTime)),o=o.insert(e,n)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),u=await Gc(i,function(e){return vo(co(ai.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>zc(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.Cs.removeMatchingKeysForTargetId(e,u.targetId).next((()=>i.Cs.addMatchingKeys(e,s,u.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(e,t.Wi,t.zi))).next((()=>t.Wi))))))}async function ed(e,t,n=Ia()){const r=await Gc(e,vo(il(t.bundledQuery))),i=jr(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=ja(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ns.saveNamedQuery(e,t);const o=r.withResumeToken(zi.EMPTY_BYTE_STRING,s);return i.qi=i.qi.insert(o.targetId,o),i.Cs.updateTargetData(e,o).next((()=>i.Cs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.Cs.addMatchingKeys(e,n,r.targetId))).next((()=>i.Ns.saveNamedQuery(e,t)))}))}function td(e,t){return`firestore_clients_${e}_${t}`}function nd(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function rd(e,t){return`firestore_targets_${e}_${t}`}class id{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Zi(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new qr(r.error.code,r.error.message))),s?new id(e,t,r.state,i):(Lr("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class sd{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Zi(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new qr(n.error.code,n.error.message))),i?new sd(e,n.state,r):(Lr("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class od{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=Ea();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=qi(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new od(e,i):(Lr("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class ad{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new ad(t.clientId,t.onlineState):(Lr("SharedClientState",`Failed to parse online state: ${e}`),null)}}class ud{constructor(){this.activeTargetIds=Ea()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ld{constructor(e,t,n,r,i){this.window=e,this.Hs=t,this.persistenceKey=n,this.sr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Ws(ti),this.started=!1,this.cr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ar=td(this.persistenceKey,this.sr),this.hr=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.ur=this.ur.insert(this.sr,new ud),this.lr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.wr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.mr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const n of e){if(n===this.sr)continue;const e=this.getItem(td(this.persistenceKey,n));if(e){const t=od.Zi(n,e);t&&(this.ur=this.ur.insert(t.clientId,t))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const e=this.yr(t);e&&this.pr(e)}for(const n of this.cr)this.rr(n);this.cr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,n){this.Tr(e,t,n),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(rd(this.persistenceKey,e));if(n){const r=sd.Zi(e,n);r&&(t=r.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(rd(this.persistenceKey,e))}updateQueryState(e,t,n){this.Rr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Er(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Pr("SharedClientState","READ",e,t),t}setItem(e,t){Pr("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Pr("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(Pr("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void Lr("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.lr.test(t.key)){if(null==t.newValue){const e=this.vr(t.key);return this.Vr(e,null)}{const e=this.Sr(t.key,t.newValue);if(e)return this.Vr(e.clientId,e)}}else if(this.dr.test(t.key)){if(null!==t.newValue){const e=this.Dr(t.key,t.newValue);if(e)return this.Cr(e)}}else if(this._r.test(t.key)){if(null!==t.newValue){const e=this.Nr(t.key,t.newValue);if(e)return this.kr(e)}}else if(t.key===this.wr){if(null!==t.newValue){const e=this.yr(t.newValue);if(e)return this.pr(e)}}else if(t.key===this.hr){const e=function(e){let t=Li.at;if(null!=e)try{const n=JSON.parse(e);Vr("number"==typeof n),t=n}catch(e){Lr("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==Li.at&&this.sequenceNumberHandler(e)}else if(t.key===this.mr){const e=this.Or(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Mr(e))))}}else this.cr.push(t)}))}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,n){const r=new id(this.currentUser,e,t,n),i=nd(this.persistenceKey,this.currentUser,e);this.setItem(i,r.tr())}Er(e){const t=nd(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,n){const r=rd(this.persistenceKey,e),i=new sd(e,t,n);this.setItem(r,i.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const n=this.vr(e);return od.Zi(n,t)}Dr(e,t){const n=this.dr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return id.Zi(new Ar(i),r,t)}Nr(e,t){const n=this._r.exec(e),r=Number(n[1]);return sd.Zi(r,t)}yr(e){return ad.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);Pr("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const n=t?this.ur.insert(e,t):this.ur.remove(e),r=this.Ir(this.ur),i=this.Ir(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.Br(s,o).then((()=>{this.ur=n}))}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=Ea();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class cd{constructor(){this.Lr=new ud,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new ud,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{Ur(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Pr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Pr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){const s=this.ho(e,t);Pr("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(e,s,o,n).then((e=>(Pr("RestConnection","Received: ",e),e)),(t=>{throw Fr("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}_o(e,t,n,r,i,s){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Nr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=fd[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise(((i,s)=>{const o=new xr;o.setWithCredentials(!0),o.listenOnce(Ir.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case _r.NO_ERROR:const t=o.getResponseJson();Pr("Connection","XHR received:",JSON.stringify(t)),i(t);break;case _r.TIMEOUT:Pr("Connection",'RPC "'+e+'" timed out'),s(new qr($r.DEADLINE_EXCEEDED,"Request time out"));break;case _r.HTTP_ERROR:const n=o.getStatus();if(Pr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values($r).indexOf(t)>=0?t:$r.UNKNOWN}(t.status);s(new qr(e,t.message))}else s(new qr($r.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new qr($r.UNAVAILABLE,"Connection failed."));break;default:Ur()}}finally{Pr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}wo(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=br(),s=wr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Tr({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const a=r.join("");Pr("Connection","Creating WebChannel: "+a,o);const u=i.createWebChannel(a,o);let l=!1,c=!1;const d=new pd({Hr:e=>{c?Pr("Connection","Not sending because WebChannel is closed:",e):(l||(Pr("Connection","Opening WebChannel transport."),u.open(),l=!0),Pr("Connection","WebChannel sending:",e),u.send(e))},Jr:()=>u.close()}),h=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return h(u,kr.EventType.OPEN,(()=>{c||Pr("Connection","WebChannel transport opened.")})),h(u,kr.EventType.CLOSE,(()=>{c||(c=!0,Pr("Connection","WebChannel transport closed"),d.io())})),h(u,kr.EventType.ERROR,(e=>{c||(c=!0,Fr("Connection","WebChannel transport errored:",e),d.io(new qr($r.UNAVAILABLE,"The operation could not be completed")))})),h(u,kr.EventType.MESSAGE,(e=>{var t;if(!c){const n=e.data[0];Vr(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Pr("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=aa[e];if(void 0!==t)return ca(t)}(e),n=i.message;void 0===t&&(t=$r.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),c=!0,d.io(new qr(t,n)),u.close()}else Pr("Connection","WebChannel received:",n),d.ro(n)}})),h(s,Sr.STAT_EVENT,(e=>{e.stat===Er.PROXY?Pr("Connection","Detected buffering proxy"):e.stat===Er.NOPROXY&&Pr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.so()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(){return"undefined"!=typeof window?window:null}function vd(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(e){return new Ma(e,!0)}class bd{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&Pr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t,n,r,i,s,o,a){this.Hs=e,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new bd(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===$r.RESOURCE_EXHAUSTED?(Lr(t.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===$r.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new qr($r.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(e){return Pr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(Pr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class _d extends wd{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.yt=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=Za(this.yt,e),n=function(e){if(!("targetChange"in e))return si.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?si.min():t.readTime?ja(t.readTime):si.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=Ka(this.yt),t.addTarget=function(e,t){let n;const r=t.target;return n=io(r)?{documents:ru(e,r)}:{query:iu(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Va(e,t.resumeToken):t.snapshotVersion.compareTo(si.min())>0&&(n.readTime=Ua(e,t.snapshotVersion.toTimestamp())),n}(this.yt,e);const n=ou(this.yt,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=Ka(this.yt),t.removeTarget=e,this.Bo(t)}}class Id extends wd{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Vr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=nu(e.writeResults,e.commitTime),n=ja(e.commitTime);return this.listener.Zo(n,t)}return Vr(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Ka(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>eu(this.yt,e)))};this.Bo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=r,this.nu=!1}su(){if(this.nu)throw new qr($r.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.ao(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===$r.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new qr($r.UNKNOWN,e.toString())}))}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection._o(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===$r.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new qr($r.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}}class Ed{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Lr(t),this.ou=!1):Pr("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur((e=>{n.enqueueAndForget((async()=>{Pd(this)&&(Pr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=jr(e);t._u.add(4),await xd(t),t.gu.set("Unknown"),t._u.delete(4),await kd(t)}(this))}))})),this.gu=new Ed(n,r)}}async function kd(e){if(Pd(e))for(const t of e.wu)await t(!0)}async function xd(e){for(const t of e.wu)await t(!1)}function Cd(e,t){const n=jr(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Rd(n)?Od(n):Xd(n).ko()&&Nd(n,t))}function Ad(e,t){const n=jr(e),r=Xd(n);n.du.delete(t),r.ko()&&Dd(n,t),0===n.du.size&&(r.ko()?r.Fo():Pd(n)&&n.gu.set("Unknown"))}function Nd(e,t){e.yu.Ot(t.targetId),Xd(e).zo(t)}function Dd(e,t){e.yu.Ot(t),Xd(e).Ho(t)}function Od(e){e.yu=new Da({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),Xd(e).start(),e.gu.uu()}function Rd(e){return Pd(e)&&!Xd(e).No()&&e.du.size>0}function Pd(e){return 0===jr(e)._u.size}function Ld(e){e.yu=void 0}async function Fd(e){e.du.forEach(((t,n)=>{Nd(e,t)}))}async function Md(e,t){Ld(e),Rd(e)?(e.gu.hu(t),Od(e)):e.gu.set("Unknown")}async function Ud(e,t,n){if(e.gu.set("Online"),t instanceof Aa&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){Pr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Vd(e,n)}else if(t instanceof xa?e.yu.Kt(t):t instanceof Ca?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(si.min()))try{const t=await qc(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.Zt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(zi.EMPTY_BYTE_STRING,n.snapshotVersion)),Dd(e,t);const r=new Ku(n.target,t,1,n.sequenceNumber);Nd(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Pr("RemoteStore","Failed to raise snapshot:",t),await Vd(e,t)}}async function Vd(e,t,n){if(!Ci(t))throw t;e._u.add(1),await xd(e),e.gu.set("Offline"),n||(n=()=>qc(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Pr("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await kd(e)}))}function Bd(e,t){return t().catch((n=>Vd(e,n,t)))}async function jd(e){const t=jr(e),n=Zd(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;$d(t);)try{const e=await Hc(t.localStore,r);if(null===e){0===t.fu.length&&n.Fo();break}r=e.batchId,qd(t,e)}catch(e){await Vd(t,e)}Wd(t)&&zd(t)}function $d(e){return Pd(e)&&e.fu.length<10}function qd(e,t){e.fu.push(t);const n=Zd(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Wd(e){return Pd(e)&&!Zd(e).No()&&e.fu.length>0}function zd(e){Zd(e).start()}async function Hd(e){Zd(e).eu()}async function Gd(e){const t=Zd(e);for(const n of e.fu)t.Xo(n.mutations)}async function Kd(e,t,n){const r=e.fu.shift(),i=Hu.from(r,t,n);await Bd(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await jd(e)}async function Yd(e,t){t&&Zd(e).Yo&&await async function(e,t){if(n=t.code,la(n)&&n!==$r.ABORTED){const n=e.fu.shift();Zd(e).Mo(),await Bd(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await jd(e)}var n}(e,t),Wd(e)&&zd(e)}async function Qd(e,t){const n=jr(e);n.asyncQueue.verifyOperationInProgress(),Pr("RemoteStore","RemoteStore received new credentials");const r=Pd(n);n._u.add(3),await xd(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await kd(n)}async function Jd(e,t){const n=jr(e);t?(n._u.delete(2),await kd(n)):t||(n._u.add(2),await xd(n),n.gu.set("Unknown"))}function Xd(e){return e.pu||(e.pu=function(e,t,n){const r=jr(e);return r.su(),new _d(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Yr:Fd.bind(null,e),Zr:Md.bind(null,e),Wo:Ud.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Mo(),Rd(e)?Od(e):e.gu.set("Unknown")):(await e.pu.stop(),Ld(e))}))),e.pu}function Zd(e){return e.Iu||(e.Iu=function(e,t,n){const r=jr(e);return r.su(),new Id(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(e.datastore,e.asyncQueue,{Yr:Hd.bind(null,e),Zr:Yd.bind(null,e),tu:Gd.bind(null,e),Zo:Kd.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Mo(),await jd(e)):(await e.Iu.stop(),e.fu.length>0&&(Pr("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class eh{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new eh(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new qr($r.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function th(e,t){if(Lr("AsyncQueue",`${t}: ${e}`),Ci(e))return new qr($r.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ci.comparator(t.key,n.key):(e,t)=>ci.comparator(e.key,t.key),this.keyedMap=ma(),this.sortedSet=new Ws(this.comparator)}static emptySet(e){return new nh(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof nh))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new nh;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.Tu=new Ws(ci.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):Ur():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class ih{constructor(e,t,n,r,i,s,o,a,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new ih(e,t,nh.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.Au=void 0,this.listeners=[]}}class oh{constructor(){this.queries=new da((e=>_o(e)),wo),this.onlineState="Unknown",this.Ru=new Set}}async function ah(e,t){const n=jr(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new sh),i)try{s.Au=await n.onListen(r)}catch(e){const n=th(e,`Initialization of query '${Io(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.bu(n.onlineState),s.Au&&t.Pu(s.Au)&&dh(n)}async function uh(e,t){const n=jr(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function lh(e,t){const n=jr(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Pu(i)&&(r=!0);t.Au=i}}r&&dh(n)}function ch(e,t,n){const r=jr(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function dh(e){e.Ru.forEach((e=>{e.next()}))}class hh{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new ih(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=ih.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.yt=e}Ji(e){return za(this.yt,e)}Yi(e){return e.metadata.exists?Ja(this.yt,e.document,!1):Zs.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return ja(e)}}class mh{constructor(e,t,n){this.Mu=e,this.localStore=t,this.yt=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=gh(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;const n=ai.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,n=new ph(this.yt);for(const r of e)if(r.metadata.queries){const e=n.Ji(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Ia()).add(e);t.set(n,r)}}return t}async complete(){const e=await Zc(this.localStore,new ph(this.yt),this.documents,this.Mu.id),t=this.$u(this.documents);for(const n of this.queries)await ed(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function gh(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){this.key=e}}class yh{constructor(e){this.key=e}}class bh{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Ia(),this.mutatedKeys=Ia(),this.Gu=To(e),this.Qu=new nh(this.Gu)}get ju(){return this.qu}Wu(e,t){const n=t?t.zu:new rh,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),c=So(this.query,t)?t:null,d=!!l&&this.mutatedKeys.has(l.key),h=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;l&&c?l.data.isEqual(c.data)?d!==h&&(n.track({type:3,doc:c}),f=!0):this.Hu(l,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Gu(c,a)>0||u&&this.Gu(c,u)<0)&&(o=!0)):!l&&c?(n.track({type:0,doc:c}),f=!0):l&&!c&&(n.track({type:1,doc:l}),f=!0,(a||u)&&(o=!0)),f&&(c?(s=s.add(c),i=h?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ur()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const s=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==i.length||a?{snapshot:new ih(this.query,e.Qu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new rh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.qu=this.qu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.qu=this.qu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Ia(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new yh(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new vh(n))})),t}tc(e){this.qu=e.Hi,this.Ku=Ia();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return ih.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class wh{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class _h{constructor(e){this.key=e,this.nc=!1}}class Ih{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new da((e=>_o(e)),wo),this.rc=new Map,this.oc=new Set,this.uc=new Ws(ci.comparator),this.cc=new Map,this.ac=new _c,this.hc={},this.lc=new Map,this.fc=Jl.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Sh(e,t){const n=Xh(e);let r,i;const s=n.ic.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const e=await Gc(n.localStore,vo(t));n.isPrimaryClient&&Cd(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Eh(n,t,r,"current"===s,e.resumeToken)}return i}async function Eh(e,t,n,r,i){e._c=(t,n,r)=>async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await Yc(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Mh(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const s=await Yc(e.localStore,t,!0),o=new bh(t,s.Hi),a=o.Wu(s.documents),u=ka.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),l=o.applyChanges(a,e.isPrimaryClient,u);Mh(e,n,l.Xu);const c=new wh(t,n,o);return e.ic.set(t,c),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),l.snapshot}async function Th(e,t){const n=jr(e),r=n.ic.get(t),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter((e=>!wo(e,t)))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Kc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Ad(n.remoteStore,r.targetId),Lh(n,r.targetId)})).catch(Ii)):(Lh(n,r.targetId),await Kc(n.localStore,r.targetId,!0))}async function kh(e,t,n){const r=Zh(e);try{const e=await function(e,t){const n=jr(e),r=ii.now(),i=t.reduce(((e,t)=>e.add(t.key)),Ia());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=fa(),u=Ia();return n.Gi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(u=u.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=Jo(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new ea(e.key,t,Xs(t.value.mapValue),zo.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,u);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:ga(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.hc[e.currentUser.toKey()];r||(r=new Ws(ti)),r=r.insert(t,n),e.hc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Bh(r,e.changes),await jd(r.remoteStore)}catch(e){const t=th(e,"Failed to persist write");n.reject(t)}}async function xh(e,t){const n=jr(e);try{const e=await Wc(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.cc.get(t);r&&(Vr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.nc=!0:e.modifiedDocuments.size>0?Vr(r.nc):e.removedDocuments.size>0&&(Vr(r.nc),r.nc=!1))})),await Bh(n,e,t)}catch(e){await Ii(e)}}function Ch(e,t,n){const r=jr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ic.forEach(((n,r)=>{const i=r.view.bu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=jr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.bu(t)&&(r=!0)})),r&&dh(n)}(r.eventManager,t),e.length&&r.sc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ah(e,t,n){const r=jr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.cc.get(t),s=i&&i.key;if(s){let e=new Ws(ci.comparator);e=e.insert(s,Zs.newNoDocument(s,si.min()));const n=Ia().add(s),i=new Ta(si.min(),new Map,new Gs(ti),e,n);await xh(r,i),r.uc=r.uc.remove(s),r.cc.delete(t),Vh(r)}else await Kc(r.localStore,t,!1).then((()=>Lh(r,t,n))).catch(Ii)}async function Nh(e,t){const n=jr(e),r=t.batch.batchId;try{const e=await $c(n.localStore,t);Ph(n,r,null),Rh(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Bh(n,e)}catch(e){await Ii(e)}}async function Dh(e,t,n){const r=jr(e);try{const e=await function(e,t){const n=jr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Vr(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Ph(r,t,n),Rh(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Bh(r,e)}catch(n){await Ii(n)}}async function Oh(e,t){const n=jr(e);Pd(n.remoteStore)||Pr("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=jr(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.lc.get(e)||[];r.push(t),n.lc.set(e,r)}catch(e){const n=th(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function Rh(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function Ph(e,t,n){const r=jr(e);let i=r.hc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function Lh(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||Fh(e,t)}))}function Fh(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(Ad(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Vh(e))}function Mh(e,t,n){for(const r of n)r instanceof vh?(e.ac.addReference(r.key,t),Uh(e,r)):r instanceof yh?(Pr("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||Fh(e,r.key)):Ur()}function Uh(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(Pr("SyncEngine","New document in limbo: "+n),e.oc.add(r),Vh(e))}function Vh(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new ci(ai.fromString(t)),r=e.fc.next();e.cc.set(r,new _h(n)),e.uc=e.uc.insert(n,r),Cd(e.remoteStore,new Ku(vo(co(n.path)),r,2,Li.at))}}async function Bh(e,t,n){const r=jr(e),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((e,a)=>{o.push(r._c(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=Mc.Ci(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.sc.Wo(i),await async function(e,t){const n=jr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Si.forEach(t,(t=>Si.forEach(t.Si,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Si.forEach(t.Di,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Ci(e))throw e;Pr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.qi.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(e,i)}}}(r.localStore,s))}async function jh(e,t){const n=jr(e);if(!n.currentUser.isEqual(t)){Pr("SyncEngine","User change. New user:",t.toKey());const e=await jc(n.localStore,t);n.currentUser=t,function(e,t){e.lc.forEach((e=>{e.forEach((e=>{e.reject(new qr($r.CANCELLED,t))}))})),e.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Bh(n,e.ji)}}function $h(e,t){const n=jr(e),r=n.cc.get(t);if(r&&r.nc)return Ia().add(r.key);{let e=Ia();const r=n.rc.get(t);if(!r)return e;for(const t of r){const r=n.ic.get(t);e=e.unionWith(r.view.ju)}return e}}async function qh(e,t){const n=jr(e),r=await Yc(n.localStore,t.query,!0),i=t.view.tc(r);return n.isPrimaryClient&&Mh(n,t.targetId,i.Xu),i}async function Wh(e,t){const n=jr(e);return Jc(n.localStore,t).then((e=>Bh(n,e)))}async function zh(e,t,n,r){const i=jr(e),s=await function(e,t){const n=jr(e),r=jr(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Tn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):Si.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await jd(i.remoteStore):"acknowledged"===n||"rejected"===n?(Ph(i,t,r||null),Rh(i,t),function(e,t){jr(jr(e).mutationQueue).An(t)}(i.localStore,t)):Ur(),await Bh(i,s)):Pr("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Hh(e,t){const n=jr(e);if(Xh(n),Zh(n),!0===t&&!0!==n.dc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Gh(n,e.toArray());n.dc=!0,await Jd(n.remoteStore,!0);for(const r of t)Cd(n.remoteStore,r)}else if(!1===t&&!1!==n.dc){const e=[];let t=Promise.resolve();n.rc.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(Lh(n,i),Kc(n.localStore,i,!0)))),Ad(n.remoteStore,i)})),await t,await Gh(n,e),function(e){const t=jr(e);t.cc.forEach(((e,n)=>{Ad(t.remoteStore,n)})),t.ac.fs(),t.cc=new Map,t.uc=new Ws(ci.comparator)}(n),n.dc=!1,await Jd(n.remoteStore,!1)}}async function Gh(e,t,n){const r=jr(e),i=[],s=[];for(const o of t){let e;const t=r.rc.get(o);if(t&&0!==t.length){e=await Gc(r.localStore,vo(t[0]));for(const e of t){const t=r.ic.get(e),n=await qh(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Qc(r.localStore,o);e=await Gc(r.localStore,t),await Eh(r,Kh(t),o,!1,e.resumeToken)}i.push(e)}return r.sc.Wo(s),i}function Kh(e){return lo(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Yh(e){const t=jr(e);return jr(jr(t.localStore).persistence).vi()}async function Qh(e,t,n,r){const i=jr(e);if(i.dc)return void Pr("SyncEngine","Ignoring unexpected query state notification.");const s=i.rc.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await Jc(i.localStore,Eo(s[0])),r=Ta.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,zi.EMPTY_BYTE_STRING);await Bh(i,e,r);break}case"rejected":await Kc(i.localStore,t,!0),Lh(i,t,r);break;default:Ur()}}async function Jh(e,t,n){const r=Xh(e);if(r.dc){for(const e of t){if(r.rc.has(e)){Pr("SyncEngine","Adding an already active target "+e);continue}const t=await Qc(r.localStore,e),n=await Gc(r.localStore,t);await Eh(r,Kh(t),n.targetId,!1,n.resumeToken),Cd(r.remoteStore,n)}for(const e of n)r.rc.has(e)&&await Kc(r.localStore,e,!1).then((()=>{Ad(r.remoteStore,e),Lh(r,e)})).catch(Ii)}}function Xh(e){const t=jr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=xh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=$h.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ah.bind(null,t),t.sc.Wo=lh.bind(null,t.eventManager),t.sc.wc=ch.bind(null,t.eventManager),t}function Zh(e){const t=jr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Nh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Dh.bind(null,t),t}function ef(e,t,n){const r=jr(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=jr(e),r=ja(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Ns.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(gh(r));const i=new mh(r,e.localStore,t.yt);let s=await t.mc();for(;s;){const e=await i.Fu(s);e&&n._updateProgress(e),s=await t.mc()}const o=await i.complete();return await Bh(e,o.Lu,void 0),await function(e,t){const n=jr(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Ns.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Bu)}catch(e){return Fr("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class tf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=yd(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return Bc(this.persistence,new Uc,e.initialUser,this.yt)}yc(e){return new xc(Ac.Bs,this.yt)}gc(e){return new cd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nf extends tf{constructor(e,t,n){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await Zh(this.Ac.syncEngine),await jd(this.Ac.remoteStore),await this.persistence.li((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}Ic(e){return Bc(this.persistence,new Uc,e.initialUser,this.yt)}Tc(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new ic(n,e.asyncQueue,t)}Ec(e,t){const n=new Pi(t,this.persistence);return new Ri(e.asyncQueue,n)}yc(e){const t=Fc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ql.withCacheSize(this.cacheSizeBytes):ql.DEFAULT;return new Rc(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,gd(),vd(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new cd}}class rf extends nf{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ac.syncEngine;this.sharedClientState instanceof ld&&(this.sharedClientState.syncEngine={Fr:zh.bind(null,t),$r:Qh.bind(null,t),Br:Jh.bind(null,t),vi:Yh.bind(null,t),Mr:Wh.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li((async e=>{await Hh(this.Ac.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}gc(e){const t=gd();if(!ld.C(t))throw new qr($r.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Fc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ld(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class sf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Ch(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=jh.bind(null,this.syncEngine),await Jd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new oh}createDatastore(e){const t=yd(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new md(r));var r;return function(e,t,n,r){return new Sd(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Ch(this.syncEngine,e,0),s=hd.C()?new hd:new dd,new Td(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Ih(e,t,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=jr(e);Pr("RemoteStore","RemoteStore shutting down."),t._u.add(5),await xd(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(e,t,n){if(!n)throw new qr($r.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function af(e,t,n,r){if(!0===t&&!0===r)throw new qr($r.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function uf(e){if(!ci.isDocumentKey(e))throw new qr($r.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function lf(e){if(ci.isDocumentKey(e))throw new qr($r.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function cf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Ur()}function df(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new qr($r.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cf(e);throw new qr($r.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function hf(e,t){if(t<=0)throw new qr($r.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=new Map;class pf{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new qr($r.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new qr($r.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,af("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new qr($r.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new qr($r.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Hr;switch(e.type){case"gapi":const t=e.client;return new Qr(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new qr($r.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ff.get(e);t&&(Pr("ComponentProvider","Removing Datastore"),ff.delete(e),t.terminate())}(this),Promise.resolve()}}function gf(e,t,n,r={}){var i;const s=(e=df(e,mf))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Fr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Ar.MOCK_USER;else{t=(0,u.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new qr($r.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ar(s)}e._authCredentials=new Gr(new zr(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vf(this.firestore,e,this._key)}}class yf{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new yf(this.firestore,e,this._query)}}class bf extends yf{constructor(e,t,n){super(e,t,co(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vf(this.firestore,null,new ci(e))}withConverter(e){return new bf(this.firestore,e,this._path)}}function wf(e,t,...n){if(e=(0,u.m9)(e),of("collection","path",t),e instanceof mf){const r=ai.fromString(t,...n);return lf(r),new bf(e,null,r)}{if(!(e instanceof vf||e instanceof bf))throw new qr($r.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ai.fromString(t,...n));return lf(r),new bf(e.firestore,null,r)}}function _f(e,t){if(e=df(e,mf),of("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new qr($r.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new yf(e,null,function(e){return new uo(ai.emptyPath(),e)}(t))}function If(e,t,...n){if(e=(0,u.m9)(e),1===arguments.length&&(t=ei.R()),of("doc","path",t),e instanceof mf){const r=ai.fromString(t,...n);return uf(r),new vf(e,null,new ci(r))}{if(!(e instanceof vf||e instanceof bf))throw new qr($r.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ai.fromString(t,...n));return uf(r),new vf(e.firestore,e instanceof bf?e.converter:null,new ci(r))}}function Sf(e,t){return e=(0,u.m9)(e),t=(0,u.m9)(t),(e instanceof vf||e instanceof bf)&&(t instanceof vf||t instanceof bf)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Ef(e,t){return e=(0,u.m9)(e),t=(0,u.m9)(t),e instanceof yf&&t instanceof yf&&e.firestore===t.firestore&&wo(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function Tf(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Lr("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t){this.Pc=e,this.yt=t,this.metadata=new Wr,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then((e=>{e&&e.Ou()?this.metadata.resolve(e.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.ku)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(null===e)return null;const t=this.vc.decode(e),n=Number(t);isNaN(n)&&this.Dc(`length string (${t}) is not valid number`);const r=await this.Cc(n);return new fh(JSON.parse(r),e.length+n)}xc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Sc(){for(;this.xc()<0;)if(await this.Nc())break;if(0===this.buffer.length)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cf{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new qr($r.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=jr(e),r=Ka(n.yt)+"/documents",i={documents:t.map((e=>Wa(n.yt,e)))},s=await n._o("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach((e=>{const t=Xa(n.yt,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());Vr(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new ia(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=ci.fromPath(t);this.mutations.push(new sa(n,this.precondition(n)))})),await async function(e,t){const n=jr(e),r=Ka(n.yt)+"/documents",i={writes:t.map((e=>eu(n.yt,e)))};await n.ao("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Ur();t=si.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new qr($r.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(si.min())?zo.exists(!1):zo.updateTime(t):zo.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(si.min()))throw new qr($r.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return zo.updateTime(t)}return zo.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.kc=n.maxAttempts,this.xo=new bd(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro((async()=>{const e=new Cf(this.datastore),t=this.Mc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Fc(e)}))))})).catch((e=>{this.Fc(e)}))}))}Mc(e){try{const t=this.updateFunction(e);return!ji(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Oc(),Promise.resolve())))):this.deferred.reject(e)}$c(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!la(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ar.UNAUTHENTICATED,this.clientId=ei.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Pr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Pr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new qr($r.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=th(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Df(e,t){e.asyncQueue.verifyOperationInProgress(),Pr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await jc(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Of(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Rf(e);Pr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Qd(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Qd(t.remoteStore,n))),e.onlineComponents=t}async function Rf(e){return e.offlineComponents||(Pr("FirestoreClient","Using default OfflineComponentProvider"),await Df(e,new tf)),e.offlineComponents}async function Pf(e){return e.onlineComponents||(Pr("FirestoreClient","Using default OnlineComponentProvider"),await Of(e,new sf)),e.onlineComponents}function Lf(e){return Rf(e).then((e=>e.persistence))}function Ff(e){return Rf(e).then((e=>e.localStore))}function Mf(e){return Pf(e).then((e=>e.remoteStore))}function Uf(e){return Pf(e).then((e=>e.syncEngine))}function Vf(e){return Pf(e).then((e=>e.datastore))}async function Bf(e){const t=await Pf(e),n=t.eventManager;return n.onListen=Sh.bind(null,t.syncEngine),n.onUnlisten=Th.bind(null,t.syncEngine),n}function jf(e){return e.asyncQueue.enqueue((async()=>{const t=await Lf(e),n=await Mf(e);return t.setNetworkEnabled(!0),function(e){const t=jr(e);return t._u.delete(0),kd(t)}(n)}))}function $f(e){return e.asyncQueue.enqueue((async()=>{const t=await Lf(e),n=await Mf(e);return t.setNetworkEnabled(!1),async function(e){const t=jr(e);t._u.add(0),await xd(t),t.gu.set("Offline")}(n)}))}function qf(e,t){const n=new Wr;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=jr(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new qr($r.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=th(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Ff(e),t,n))),n.promise}function Wf(e,t,n={}){const r=new Wr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new kf({next:s=>{t.enqueueAndForget((()=>uh(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new qr($r.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new qr($r.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new hh(co(n.path),s,{includeMetadataChanges:!0,Nu:!0});return ah(e,o)}(await Bf(e),e.asyncQueue,t,n,r))),r.promise}function zf(e,t){const n=new Wr;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await Yc(e,t,!0),i=new bh(t,r.Hi),s=i.Wu(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=th(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Ff(e),t,n))),n.promise}function Hf(e,t,n={}){const r=new Wr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new kf({next:n=>{t.enqueueAndForget((()=>uh(e,o))),n.fromCache&&"server"===r.source?i.reject(new qr($r.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new hh(n,s,{includeMetadataChanges:!0,Nu:!0});return ah(e,o)}(await Bf(e),e.asyncQueue,t,n,r))),r.promise}function Gf(e,t){const n=new kf(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){jr(e).Ru.add(t),t.next()}(await Bf(e),n))),()=>{n.bc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){jr(e).Ru.delete(t)}(await Bf(e),n)))}}function Kf(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new xf(e,t)}(function(e,t){if(e instanceof Uint8Array)return Tf(e,t);if(e instanceof ArrayBuffer)return Tf(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,yd(t));e.asyncQueue.enqueueAndForget((async()=>{ef(await Uf(e),i,r)}))}function Yf(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=jr(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Ns.getNamedQuery(e,t)))}(await Ff(e),t)))}class Qf{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new bd(this,"async_queue_retry"),this.Wc=()=>{const e=vd();e&&Pr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=vd();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=vd();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise((()=>{}));const t=new Wr;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Lc.push(e),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(S){if(!Ci(S))throw S;Pr("AsyncQueue","Operation failed with retryable error: "+S)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(e){const t=this.Bc.then((()=>(this.Gc=!0,e().catch((e=>{this.Kc=e,this.Gc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Lr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=eh.createAndSchedule(this,e,t,n,(e=>this.Yc(e)));return this.Uc.push(r),r}zc(){this.Kc&&Ur()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.Uc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function Jf(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Xf{constructor(){this._progressObserver={},this._taskCompletionResolver=new Wr,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=-1;class ep extends mf{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Qf,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||np(this),this._firestoreClient.terminate()}}function tp(e){return e._firestoreClient||np(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function np(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Fi(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Nf(e._authCredentials,e._appCheckCredentials,e._queue,r)}function rp(e,t){hp(e=df(e,ep));const n=tp(e),r=e._freezeSettings(),i=new sf;return sp(n,i,new nf(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function ip(e){hp(e=df(e,ep));const t=tp(e),n=e._freezeSettings(),r=new sf;return sp(t,r,new rf(r,n.cacheSizeBytes))}function sp(e,t,n){const r=new Wr;return e.asyncQueue.enqueue((async()=>{try{await Df(e,n),await Of(e,t),r.resolve()}catch(e){const n=e;if(!function(e){return"FirebaseError"===e.name?e.code===$r.FAILED_PRECONDITION||e.code===$r.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(n))throw n;Fr("Error enabling offline persistence. Falling back to persistence disabled: "+n),r.reject(n)}})).then((()=>r.promise))}function op(e){if(e._initialized&&!e._terminated)throw new qr($r.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new Wr;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Ti.C())return Promise.resolve();const t=e+"main";await Ti.delete(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Fc(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function ap(e){return function(e){const t=new Wr;return e.asyncQueue.enqueueAndForget((async()=>Oh(await Uf(e),t))),t.promise}(tp(e=df(e,ep)))}function up(e){return jf(tp(e=df(e,ep)))}function lp(e){return $f(tp(e=df(e,ep)))}function cp(e,t){const n=tp(e=df(e,ep)),r=new Xf;return Kf(n,e._databaseId,t,r),r}function dp(e,t){return Yf(tp(e=df(e,ep)),t).then((t=>t?new yf(e,null,t.query):null))}function hp(e){if(e._initialized||e._terminated)throw new qr($r.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fp(zi.fromBase64String(e))}catch(e){throw new qr($r.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new fp(zi.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new qr($r.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new li(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mp{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new qr($r.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new qr($r.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ti(this._lat,e._lat)||ti(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=/^__.*__$/;class yp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ea(e,this.data,this.fieldMask,t,this.fieldTransforms):new Zo(e,this.data,t,this.fieldTransforms)}}class bp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new ea(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function wp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ur()}}class _p{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new _p(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return jp(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(wp(this.sa)&&vp.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Ip{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||yd(e)}da(e,t,n,r=!1){return new _p({sa:e,methodName:t,fa:n,path:li.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Sp(e){const t=e._freezeSettings(),n=yd(e._databaseId);return new Ip(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ep(e,t,n,r,i,s={}){const o=e.da(s.merge||s.mergeFields?2:0,t,n,i);Mp("Data must be an object, but it was:",o,r);const a=Lp(r,o);let u,l;if(s.merge)u=new Qs(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Up(t,r,n);if(!o.contains(i))throw new qr($r.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);$p(e,i)||e.push(i)}u=new Qs(e),l=o.fieldTransforms.filter((e=>u.covers(e.field)))}else u=null,l=o.fieldTransforms;return new yp(new Js(a),u,l)}class Tp extends mp{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Tp}}function kp(e,t,n){return new _p({sa:3,fa:t.settings.fa,methodName:e._methodName,oa:n},t.databaseId,t.yt,t.ignoreUndefinedProperties)}class xp extends mp{_toFieldTransform(e){return new $o(e.path,new Po)}isEqual(e){return e instanceof xp}}class Cp extends mp{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=kp(this,e,!0),n=this._a.map((e=>Pp(e,t))),r=new Lo(n);return new $o(e.path,r)}isEqual(e){return this===e}}class Ap extends mp{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=kp(this,e,!0),n=this._a.map((e=>Pp(e,t))),r=new Mo(n);return new $o(e.path,r)}isEqual(e){return this===e}}class Np extends mp{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){const t=new Vo(e.yt,Ao(e.yt,this.wa));return new $o(e.path,t)}isEqual(e){return this===e}}function Dp(e,t,n,r){const i=e.da(1,t,n);Mp("Data must be an object, but it was:",i,r);const s=[],o=Js.empty();Vi(r,((e,r)=>{const a=Bp(t,e,n);r=(0,u.m9)(r);const l=i.ca(a);if(r instanceof Tp)s.push(a);else{const e=Pp(r,l);null!=e&&(s.push(a),o.set(a,e))}}));const a=new Qs(s);return new bp(o,a,i.fieldTransforms)}function Op(e,t,n,r,i,s){const o=e.da(1,t,n),a=[Up(t,r,n)],l=[i];if(s.length%2!=0)throw new qr($r.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let u=0;u<s.length;u+=2)a.push(Up(t,s[u])),l.push(s[u+1]);const c=[],d=Js.empty();for(let f=a.length-1;f>=0;--f)if(!$p(c,a[f])){const e=a[f];let t=l[f];t=(0,u.m9)(t);const n=o.ca(e);if(t instanceof Tp)c.push(e);else{const r=Pp(t,n);null!=r&&(c.push(e),d.set(e,r))}}const h=new Qs(c);return new bp(d,h,o.fieldTransforms)}function Rp(e,t,n,r=!1){return Pp(n,e.da(r?4:3,t))}function Pp(e,t){if(Fp(e=(0,u.m9)(e)))return Mp("Unsupported field value:",t,e),Lp(e,t);if(e instanceof mp)return function(e,t){if(!wp(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Pp(i,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,u.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Ao(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ii.fromDate(e);return{timestampValue:Ua(t.yt,n)}}if(e instanceof ii){const n=new ii(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ua(t.yt,n)}}if(e instanceof gp)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof fp)return{bytesValue:Va(t.yt,e._byteString)};if(e instanceof vf){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:$a(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${cf(e)}`)}(e,t)}function Lp(e,t){const n={};return Bi(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Vi(e,((e,r)=>{const i=Pp(r,t.ra(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Fp(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ii||e instanceof gp||e instanceof fp||e instanceof vf||e instanceof mp)}function Mp(e,t,n){if(!Fp(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=cf(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function Up(e,t,n){if((t=(0,u.m9)(t))instanceof pp)return t._internalPath;if("string"==typeof t)return Bp(e,t);throw jp("Field path arguments must be of type string or ",e,!1,void 0,n)}const Vp=new RegExp("[~\\*/\\[\\]]");function Bp(e,t,n){if(t.search(Vp)>=0)throw jp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new pp(...t.split("."))._internalPath}catch(r){throw jp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function jp(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new qr($r.INVALID_ARGUMENT,a+e+u)}function $p(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Wp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zp("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Wp extends qp{data(){return super.data()}}function zp(e,t){return"string"==typeof t?Bp(e,t):t instanceof pp?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new qr($r.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gp{}class Kp extends Gp{}function Yp(e,t,...n){let r=[];t instanceof Gp&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof Xp)).length,n=e.filter((e=>e instanceof Qp)).length;if(t>1||t>0&&n>0)throw new qr($r.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)e=i._apply(e);return e}class Qp extends Kp{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Qp(e,t,n)}_apply(e){const t=this._parse(e);return fm(e._query,t),new yf(e.firestore,e.converter,yo(e._query,t))}_parse(e){const t=Sp(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new qr($r.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){hm(o,s);const t=[];for(const n of o)t.push(dm(r,e,n));a={arrayValue:{values:t}}}else a=dm(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||hm(o,s),a=Rp(n,t,o,"in"===s||"not-in"===s);return Es.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Jp(e,t,n){const r=t,i=zp("where",e);return Qp._create(i,r,n)}class Xp extends Gp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Xp(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Ts.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)fm(n,i),n=yo(n,i)}(e._query,t),new yf(e.firestore,e.converter,yo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Zp extends Kp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Zp(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new qr($r.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new qr($r.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new $s(t,n);return function(e,t){if(null===fo(e)){const n=po(e);null!==n&&pm(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new yf(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new uo(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function em(e,t="asc"){const n=t,r=zp("orderBy",e);return Zp._create(r,n)}class tm extends Kp{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new tm(e,t,n)}_apply(e){return new yf(e.firestore,e.converter,bo(e._query,this._limit,this._limitType))}}function nm(e){return hf("limit",e),tm._create("limit",e,"F")}function rm(e){return hf("limitToLast",e),tm._create("limitToLast",e,"L")}class im extends Kp{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new im(e,t,n)}_apply(e){const t=cm(e,this.type,this._docOrFields,this._inclusive);return new yf(e.firestore,e.converter,function(e,t){return new uo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function sm(...e){return im._create("startAt",e,!0)}function om(...e){return im._create("startAfter",e,!1)}class am extends Kp{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new am(e,t,n)}_apply(e){const t=cm(e,this.type,this._docOrFields,this._inclusive);return new yf(e.firestore,e.converter,function(e,t){return new uo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function um(...e){return am._create("endBefore",e,!1)}function lm(...e){return am._create("endAt",e,!0)}function cm(e,t,n,r){if(n[0]=(0,u.m9)(n[0]),n[0]instanceof qp)return function(e,t,n,r,i){if(!r)throw new qr($r.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of go(e))if(o.field.isKeyField())s.push(us(t,r.key));else{const e=r.data.field(o.field);if(Qi(e))throw new qr($r.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new qr($r.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new ws(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=Sp(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new qr($r.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let u=0;u<i.length;u++){const s=i[u];if(o[u].field.isKeyField()){if("string"!=typeof s)throw new qr($r.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!mo(e)&&-1!==s.indexOf("/"))throw new qr($r.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(ai.fromString(s));if(!ci.isDocumentKey(n))throw new qr($r.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new ci(n);a.push(us(t,i))}else{const e=Rp(n,r,s);a.push(e)}}return new ws(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function dm(e,t,n){if("string"==typeof(n=(0,u.m9)(n))){if(""===n)throw new qr($r.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mo(t)&&-1!==n.indexOf("/"))throw new qr($r.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ai.fromString(n));if(!ci.isDocumentKey(r))throw new qr($r.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return us(e,new ci(r))}if(n instanceof vf)return us(e,n._key);throw new qr($r.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${cf(n)}.`)}function hm(e,t){if(!Array.isArray(e)||0===e.length)throw new qr($r.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new qr($r.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function fm(e,t){if(t.isInequality()){const n=po(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new qr($r.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=fo(e);null!==i&&pm(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new qr($r.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new qr($r.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function pm(e,t,n){if(!n.isEqual(t))throw new qr($r.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class mm{convertValue(e,t="none"){switch(ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ki(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Ur()}}convertObject(e,t){const n={};return Vi(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new gp(Ki(e.latitude),Ki(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ji(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Xi(e));default:return null}}convertTimestamp(e){const t=Gi(e);return new ii(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ai.fromString(e);Vr(mu(n));const r=new Mi(n.get(1),n.get(3)),i=new ci(n.popFirst(5));return r.isEqual(t)||Lr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class vm extends mm{constructor(e){super(),this.firestore=e}convertBytes(e){return new fp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vf(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bm extends qp{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(zp("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class wm extends bm{data(e={}){return super.data(e)}}class _m{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ym(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new wm(this._firestore,this._userDataWriter,n.key,n,new ym(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new qr($r.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new wm(e._firestore,e._userDataWriter,n.doc.key,n.doc,new ym(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new wm(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ym(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Im(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Im(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ur()}}function Sm(e,t){return e instanceof bm&&t instanceof bm?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof _m&&t instanceof _m&&e._firestore===t._firestore&&Ef(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(e){e=df(e,vf);const t=df(e.firestore,ep);return Wf(tp(t),e._key).then((n=>Um(t,e,n)))}class Tm extends mm{constructor(e){super(),this.firestore=e}convertBytes(e){return new fp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new vf(this.firestore,null,t)}}function km(e){e=df(e,vf);const t=df(e.firestore,ep),n=tp(t),r=new Tm(t);return qf(n,e._key).then((n=>new bm(t,r,e._key,n,new ym(null!==n&&n.hasLocalMutations,!0),e.converter)))}function xm(e){e=df(e,vf);const t=df(e.firestore,ep);return Wf(tp(t),e._key,{source:"server"}).then((n=>Um(t,e,n)))}function Cm(e){e=df(e,yf);const t=df(e.firestore,ep),n=tp(t),r=new Tm(t);return Hp(e._query),Hf(n,e._query).then((n=>new _m(t,r,e,n)))}function Am(e){e=df(e,yf);const t=df(e.firestore,ep),n=tp(t),r=new Tm(t);return zf(n,e._query).then((n=>new _m(t,r,e,n)))}function Nm(e){e=df(e,yf);const t=df(e.firestore,ep),n=tp(t),r=new Tm(t);return Hf(n,e._query,{source:"server"}).then((n=>new _m(t,r,e,n)))}function Dm(e,t,n){e=df(e,vf);const r=df(e.firestore,ep),i=gm(e.converter,t,n);return Mm(r,[Ep(Sp(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,zo.none())])}function Om(e,t,n,...r){e=df(e,vf);const i=df(e.firestore,ep),s=Sp(i);let o;return o="string"==typeof(t=(0,u.m9)(t))||t instanceof pp?Op(s,"updateDoc",e._key,t,n,r):Dp(s,"updateDoc",e._key,t),Mm(i,[o.toMutation(e._key,zo.exists(!0))])}function Rm(e){return Mm(df(e.firestore,ep),[new ia(e._key,zo.none())])}function Pm(e,t){const n=df(e.firestore,ep),r=If(e),i=gm(e.converter,t);return Mm(n,[Ep(Sp(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,zo.exists(!1))]).then((()=>r))}function Lm(e,...t){var n,r,i;e=(0,u.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Jf(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Jf(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let l,c,d;if(e instanceof vf)c=df(e.firestore,ep),d=co(e._key.path),l={next:n=>{t[o]&&t[o](Um(c,e,n))},error:t[o+1],complete:t[o+2]};else{const n=df(e,yf);c=df(n.firestore,ep),d=n._query;const r=new Tm(c);l={next:e=>{t[o]&&t[o](new _m(c,r,n,e))},error:t[o+1],complete:t[o+2]},Hp(e._query)}return function(e,t,n,r){const i=new kf(r),s=new hh(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>ah(await Bf(e),s))),()=>{i.bc(),e.asyncQueue.enqueueAndForget((async()=>uh(await Bf(e),s)))}}(tp(c),d,a,l)}function Fm(e,t){return Gf(tp(e=df(e,ep)),Jf(t)?t:{next:t})}function Mm(e,t){return function(e,t){const n=new Wr;return e.asyncQueue.enqueueAndForget((async()=>kh(await Uf(e),t,n))),n.promise}(tp(e),t)}function Um(e,t,n){const r=n.docs.get(t._key),i=new Tm(e);return new bm(e,i,t._key,r,new ym(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vm={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Sp(e)}set(e,t,n){this._verifyNotCommitted();const r=jm(e,this._firestore),i=gm(r.converter,t,n),s=Ep(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,zo.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=jm(e,this._firestore);let s;return s="string"==typeof(t=(0,u.m9)(t))||t instanceof pp?Op(this._dataReader,"WriteBatch.update",i._key,t,n,r):Dp(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,zo.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=jm(e,this._firestore);return this._mutations=this._mutations.concat(new ia(t._key,zo.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new qr($r.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function jm(e,t){if((e=(0,u.m9)(e)).firestore!==t)throw new qr($r.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Sp(e)}get(e){const t=jm(e,this._firestore),n=new vm(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Ur();const r=e[0];if(r.isFoundDocument())return new qp(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new qp(this._firestore,n,t._key,null,t.converter);throw Ur()}))}set(e,t,n){const r=jm(e,this._firestore),i=gm(r.converter,t,n),s=Ep(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=jm(e,this._firestore);let s;return s="string"==typeof(t=(0,u.m9)(t))||t instanceof pp?Op(this._dataReader,"Transaction.update",i._key,t,n,r):Dp(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=jm(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=jm(e,this._firestore),n=new Tm(this._firestore);return super.get(e).then((e=>new bm(this._firestore,n,t._key,e._document,new ym(!1,!1),t.converter)))}}function qm(e,t,n){e=df(e,ep);const r=Object.assign(Object.assign({},Vm),n);return function(e){if(e.maxAttempts<1)throw new qr($r.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new Wr;return e.asyncQueue.enqueueAndForget((async()=>{const i=await Vf(e);new Af(e.asyncQueue,i,n,t,r).run()})),r.promise}(tp(e),(n=>t(new $m(e,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(){return new Tp("deleteField")}function zm(){return new xp("serverTimestamp")}function Hm(...e){return new Cp("arrayUnion",e)}function Gm(...e){return new Ap("arrayRemove",e)}function Km(e){return new Np("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Nr=e}(s.SDK_VERSION),(0,s._registerComponent)(new o.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new ep(new Kr(e.getProvider("auth-internal")),new Xr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new qr($r.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mi(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(Cr,"3.8.0",e),(0,s.registerVersion)(Cr,"3.8.0","esm2017")}();const Ym="@firebase/firestore-compat",Qm="0.3.0";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jm(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new qr("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(){if("undefined"===typeof Uint8Array)throw new qr("unimplemented","Uint8Arrays are not available in this environment.")}function Zm(){if(!Wi())throw new qr("unimplemented","Blobs are unavailable in Firestore in this environment.")}class eg{constructor(e){this._delegate=e}static fromBase64String(e){return Zm(),new eg(fp.fromBase64String(e))}static fromUint8Array(e){return Xm(),new eg(fp.fromUint8Array(e))}toBase64(){return Zm(),this._delegate.toBase64()}toUint8Array(){return Xm(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(e){return ng(e,["next","error","complete"])}function ng(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{enableIndexedDbPersistence(e,t){return rp(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return ip(e._delegate)}clearIndexedDbPersistence(e){return op(e._delegate)}}class ig{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Mi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Fr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){gf(this._delegate,e,t,n)}enableNetwork(){return up(this._delegate)}disableNetwork(){return lp(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,af("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return ap(this._delegate)}onSnapshotsInSync(e){return Fm(this._delegate,e)}get app(){if(!this._appCompat)throw new qr("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new bg(this,wf(this._delegate,e))}catch(t){throw dg(t,"collection()","Firestore.collection()")}}doc(e){try{return new cg(this,If(this._delegate,e))}catch(t){throw dg(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new gg(this,_f(this._delegate,e))}catch(t){throw dg(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return qm(this._delegate,(t=>e(new ag(this,t))))}batch(){return tp(this._delegate),new ug(new Bm(this._delegate,(e=>Mm(this._delegate,e))))}loadBundle(e){return cp(this._delegate,e)}namedQuery(e){return dp(this._delegate,e).then((e=>e?new gg(this,e):null))}}class sg extends mm{constructor(e){super(),this.firestore=e}convertBytes(e){return new eg(new fp(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return cg.forKey(t,this.firestore,null)}}function og(e){Rr(e)}class ag{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new sg(e)}get(e){const t=wg(e);return this._delegate.get(t).then((e=>new pg(this._firestore,new bm(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=wg(e);return n?(Jm("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=wg(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=wg(e);return this._delegate.delete(t),this}}class ug{constructor(e){this._delegate=e}set(e,t,n){const r=wg(e);return n?(Jm("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=wg(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=wg(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class lg{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new wm(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new mg(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=lg.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new lg(e,new sg(e),t),r.set(t,i)),i}}lg.INSTANCES=new WeakMap;class cg{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new sg(e)}static forPath(e,t,n){if(e.length%2!==0)throw new qr("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new cg(t,new vf(t._delegate,n,new ci(e)))}static forKey(e,t,n){return new cg(t,new vf(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new bg(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new bg(this.firestore,wf(this._delegate,e))}catch(t){throw dg(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,u.m9)(e),e instanceof vf&&Sf(this._delegate,e)}set(e,t){t=Jm("DocumentReference.set",t);try{return t?Dm(this._delegate,e,t):Dm(this._delegate,e)}catch(n){throw dg(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Om(this._delegate,e):Om(this._delegate,e,t,...n)}catch(r){throw dg(r,"updateDoc()","DocumentReference.update()")}}delete(){return Rm(this._delegate)}onSnapshot(...e){const t=hg(e),n=fg(e,(e=>new pg(this.firestore,new bm(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return Lm(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?km(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?xm(this._delegate):Em(this._delegate),t.then((e=>new pg(this.firestore,new bm(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new cg(this.firestore,e?this._delegate.withConverter(lg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function dg(e,t,n){return e.message=e.message.replace(t,n),e}function hg(e){for(const t of e)if("object"===typeof t&&!tg(t))return t;return{}}function fg(e,t){var n,r;let i;return i=tg(e[0])?e[0]:tg(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class pg{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new cg(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Sm(this._delegate,e._delegate)}}class mg extends pg{data(e){const t=this._delegate.data(e);return Br(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class gg{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new sg(e)}where(e,t,n){try{return new gg(this.firestore,Yp(this._delegate,Jp(e,t,n)))}catch(r){throw dg(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new gg(this.firestore,Yp(this._delegate,em(e,t)))}catch(n){throw dg(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new gg(this.firestore,Yp(this._delegate,nm(e)))}catch(t){throw dg(t,"limit()","Query.limit()")}}limitToLast(e){try{return new gg(this.firestore,Yp(this._delegate,rm(e)))}catch(t){throw dg(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new gg(this.firestore,Yp(this._delegate,sm(...e)))}catch(t){throw dg(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new gg(this.firestore,Yp(this._delegate,om(...e)))}catch(t){throw dg(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new gg(this.firestore,Yp(this._delegate,um(...e)))}catch(t){throw dg(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new gg(this.firestore,Yp(this._delegate,lm(...e)))}catch(t){throw dg(t,"endAt()","Query.endAt()")}}isEqual(e){return Ef(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Am(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Nm(this._delegate):Cm(this._delegate),t.then((e=>new yg(this.firestore,new _m(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=hg(e),n=fg(e,(e=>new yg(this.firestore,new _m(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return Lm(this._delegate,t,n)}withConverter(e){return new gg(this.firestore,e?this._delegate.withConverter(lg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class vg{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new mg(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class yg{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new gg(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new mg(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new vg(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new mg(this._firestore,n))}))}isEqual(e){return Sm(this._delegate,e._delegate)}}class bg extends gg{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new cg(this.firestore,e):null}doc(e){try{return new cg(this.firestore,void 0===e?If(this._delegate):If(this._delegate,e))}catch(t){throw dg(t,"doc()","CollectionReference.doc()")}}add(e){return Pm(this._delegate,e).then((e=>new cg(this.firestore,e)))}isEqual(e){return Sf(this._delegate,e._delegate)}withConverter(e){return new bg(this.firestore,e?this._delegate.withConverter(lg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function wg(e){return df(e,vf)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(...e){this._delegate=new pp(...e)}static documentId(){return new _g(li.keyField().canonicalString())}isEqual(e){return e=(0,u.m9)(e),e instanceof pp&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){this._delegate=e}static serverTimestamp(){const e=zm();return e._methodName="FieldValue.serverTimestamp",new Ig(e)}static delete(){const e=Wm();return e._methodName="FieldValue.delete",new Ig(e)}static arrayUnion(...e){const t=Hm(...e);return t._methodName="FieldValue.arrayUnion",new Ig(t)}static arrayRemove(...e){const t=Gm(...e);return t._methodName="FieldValue.arrayRemove",new Ig(t)}static increment(e){const t=Km(e);return t._methodName="FieldValue.increment",new Ig(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg={Firestore:ig,GeoPoint:gp,Timestamp:ii,Blob:eg,Transaction:ag,WriteBatch:ug,DocumentReference:cg,DocumentSnapshot:pg,Query:gg,QueryDocumentSnapshot:mg,QuerySnapshot:yg,CollectionReference:bg,FieldPath:_g,FieldValue:Ig,setLogLevel:og,CACHE_SIZE_UNLIMITED:Zf};function Eg(e,t){e.INTERNAL.registerComponent(new o.wA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},Sg)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(e){Eg(e,((e,t)=>new ig(e,t,new rg))),e.registerVersion(Ym,Qm)}Tg(i.Z)},4924:function(e,t,n){"use strict";n.d(t,{Z:function(){return rn}});var r={createDocument:function(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}},i=(n(7658),n(541),Uint8Array),s=Uint16Array,o=Uint32Array,a=new i([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),u=new i([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),l=new i([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),c=function(e,t){for(var n=new s(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];var i=new o(n[30]);for(r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return[n,i]},d=c(a,2),h=d[0],f=d[1];h[28]=258,f[258]=28;for(var p=c(u,0),m=p[0],g=(p[1],new s(32768)),v=0;v<32768;++v){var y=(43690&v)>>>1|(21845&v)<<1;y=(52428&y)>>>2|(13107&y)<<2,y=(61680&y)>>>4|(3855&y)<<4,g[v]=((65280&y)>>>8|(255&y)<<8)>>>1}var b=function(e,t,n){for(var r=e.length,i=0,o=new s(t);i<r;++i)e[i]&&++o[e[i]-1];var a,u=new s(t);for(i=0;i<t;++i)u[i]=u[i-1]+o[i-1]<<1;if(n){a=new s(1<<t);var l=15-t;for(i=0;i<r;++i)if(e[i])for(var c=i<<4|e[i],d=t-e[i],h=u[e[i]-1]++<<d,f=h|(1<<d)-1;h<=f;++h)a[g[h]>>>l]=c}else for(a=new s(r),i=0;i<r;++i)e[i]&&(a[i]=g[u[e[i]-1]++]>>>15-e[i]);return a},w=new i(288);for(v=0;v<144;++v)w[v]=8;for(v=144;v<256;++v)w[v]=9;for(v=256;v<280;++v)w[v]=7;for(v=280;v<288;++v)w[v]=8;var _=new i(32);for(v=0;v<32;++v)_[v]=5;var I=b(w,9,1),S=b(_,5,1),E=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},T=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(7&t)&n},k=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(7&t)},x=function(e){return(e+7)/8|0},C=function(e,t,n){(null==t||t<0)&&(t=0),(null==n||n>e.length)&&(n=e.length);var r=new(2==e.BYTES_PER_ELEMENT?s:4==e.BYTES_PER_ELEMENT?o:i)(n-t);return r.set(e.subarray(t,n)),r},A=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],N=function(e,t,n){var r=new Error(t||A[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,N),!n)throw r;return r},D=function(e,t,n){var r=e.length;if(!r||n&&n.f&&!n.l)return t||new i(0);var s=!t||n,o=!n||n.i;n||(n={}),t||(t=new i(3*r));var c=function(e){var n=t.length;if(e>n){var r=new i(Math.max(2*n,e));r.set(t),t=r}},d=n.f||0,f=n.p||0,p=n.b||0,g=n.l,v=n.d,y=n.m,w=n.n,_=8*r;do{if(!g){d=T(e,f,1);var A=T(e,f+1,3);if(f+=3,!A){var D=x(f)+4,O=e[D-4]|e[D-3]<<8,R=D+O;if(R>r){o&&N(0);break}s&&c(p+O),t.set(e.subarray(D,R),p),n.b=p+=O,n.p=f=8*R,n.f=d;continue}if(1==A)g=I,v=S,y=9,w=5;else if(2==A){var P=T(e,f,31)+257,L=T(e,f+10,15)+4,F=P+T(e,f+5,31)+1;f+=14;for(var M=new i(F),U=new i(19),V=0;V<L;++V)U[l[V]]=T(e,f+3*V,7);f+=3*L;var B=E(U),j=(1<<B)-1,$=b(U,B,1);for(V=0;V<F;){var q=$[T(e,f,j)];f+=15&q;D=q>>>4;if(D<16)M[V++]=D;else{var W=0,z=0;16==D?(z=3+T(e,f,3),f+=2,W=M[V-1]):17==D?(z=3+T(e,f,7),f+=3):18==D&&(z=11+T(e,f,127),f+=7);while(z--)M[V++]=W}}var H=M.subarray(0,P),G=M.subarray(P);y=E(H),w=E(G),g=b(H,y,1),v=b(G,w,1)}else N(1);if(f>_){o&&N(0);break}}s&&c(p+131072);for(var K=(1<<y)-1,Y=(1<<w)-1,Q=f;;Q=f){W=g[k(e,f)&K];var J=W>>>4;if(f+=15&W,f>_){o&&N(0);break}if(W||N(2),J<256)t[p++]=J;else{if(256==J){Q=f,g=null;break}var X=J-254;if(J>264){V=J-257;var Z=a[V];X=T(e,f,(1<<Z)-1)+h[V],f+=Z}var ee=v[k(e,f)&Y],te=ee>>>4;ee||N(3),f+=15&ee;G=m[te];if(te>3){Z=u[te];G+=k(e,f)&(1<<Z)-1,f+=Z}if(f>_){o&&N(0);break}s&&c(p+131072);for(var ne=p+X;p<ne;p+=4)t[p]=t[p-G],t[p+1]=t[p+1-G],t[p+2]=t[p+2-G],t[p+3]=t[p+3-G];p=ne}}n.l=g,n.p=Q,n.b=p,n.f=d,g&&(d=1,n.m=y,n.d=v,n.n=w)}while(!d);return p==t.length?t:C(t,0,p)},O=new i(0),R=function(e,t){return e[t]|e[t+1]<<8},P=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},L=function(e,t){return P(e,t)+4294967296*P(e,t+4)};function F(e,t){return D(e,t)}var M="undefined"!=typeof TextDecoder&&new TextDecoder;try{M.decode(O,{stream:!0}),1}catch(sn){}var U=function(e){for(var t="",n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return[t,C(e,n-1)];i?3==i?(r=((15&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536,t+=String.fromCharCode(55296|r>>10,56320|1023&r)):t+=1&i?String.fromCharCode((31&r)<<6|63&e[n++]):String.fromCharCode((15&r)<<12|(63&e[n++])<<6|63&e[n++]):t+=String.fromCharCode(r)}};function V(e,t){if(t){for(var n="",r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}if(M)return M.decode(e);var i=U(e),s=i[0],o=i[1];return o.length&&N(8),s}var B=function(e,t){return t+30+R(e,t+26)+R(e,t+28)},j=function(e,t,n){var r=R(e,t+28),i=V(e.subarray(t+46,t+46+r),!(2048&R(e,t+8))),s=t+46+r,o=P(e,t+20),a=n&&4294967295==o?$(e,s):[o,P(e,t+24),P(e,t+42)],u=a[0],l=a[1],c=a[2];return[R(e,t+10),u,l,i,s+R(e,t+30)+R(e,t+32),c]},$=function(e,t){for(;1!=R(e,t);t+=4+R(e,t+2));return[L(e,t+12),L(e,t+4),L(e,t+20)]};"function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout&&setTimeout;function q(e,t){for(var n={},r=e.length-22;101010256!=P(e,r);--r)(!r||e.length-r>65558)&&N(13);var s=R(e,r+8);if(!s)return{};var o=P(e,r+16),a=4294967295==o||65535==s;if(a){var u=P(e,r-12);a=101075792==P(e,u),a&&(s=P(e,u+32),o=P(e,u+48))}for(var l=t&&t.filter,c=0;c<s;++c){var d=j(e,o,a),h=d[0],f=d[1],p=d[2],m=d[3],g=d[4],v=d[5],y=B(e,v);o=g,l&&!l({name:m,size:f,originalSize:p,compression:h})||(h?8==h?n[m]=F(e.subarray(y,y+f),new i(p)):N(14,"unknown compression type "+h):n[m]=C(e,y,y+f))}return n}function W(e){return e instanceof File||e instanceof Blob?e.arrayBuffer().then(z):z(e)}function z(e){var t=new Uint8Array(e),n=q(t);return Promise.resolve(H(n))}function H(e){for(var t=[],n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];t[i]=V(e[i])}return t}function G(e,t){var n=0;while(n<e.childNodes.length){var r=e.childNodes[n];if(1===r.nodeType&&X(r)===t)return r;n++}}function K(e,t){var n=[],r=0;while(r<e.childNodes.length){var i=e.childNodes[r];1===i.nodeType&&X(i)===t&&n.push(i),r++}return n}function Y(e,t,n){var r=0;while(r<e.childNodes.length){var i=e.childNodes[r];t?1===i.nodeType&&X(i)===t&&n(i,r):n(i,r),r++}}function Q(e,t,n){var r=[];return Y(e,t,(function(e,t){r.push(n(e,t))})),r}var J=/.+\:/;function X(e){return e.tagName.replace(J,"")}function Z(e){if(1!==e.nodeType)return e.textContent;var t="<"+X(e),n=0;while(n<e.attributes.length)t+=" "+e.attributes[n].name+'="'+e.attributes[n].value+'"',n++;t+=">";var r=0;while(r<e.childNodes.length)t+=Z(e.childNodes[r]),r++;return t+="</"+X(e)+">",t}function ee(e){var t=e.documentElement,n=G(t,"sheetData"),r=[];return Y(n,"row",(function(e){Y(e,"c",(function(e){r.push(e)}))})),r}function te(e,t){return G(t,"v")}function ne(e,t){if(t.firstChild&&"is"===X(t.firstChild)&&t.firstChild.firstChild&&"t"===X(t.firstChild.firstChild))return t.firstChild.firstChild.textContent}function re(e){var t=e.documentElement,n=G(t,"dimension");if(n)return n.getAttribute("ref")}function ie(e){var t=e.documentElement,n=G(t,"cellStyleXfs");return n?K(n,"xf"):[]}function se(e){var t=e.documentElement,n=G(t,"cellXfs");return n?K(n,"xf"):[]}function oe(e){var t=e.documentElement,n=G(t,"numFmts");return n?K(n,"numFmt"):[]}function ae(e){var t=e.documentElement;return Q(t,"si",(function(e){var t=G(e,"t");if(t)return t.textContent;var n="";return Y(e,"r",(function(e){n+=G(e,"t").textContent})),n}))}function ue(e){var t=e.documentElement;return G(t,"workbookPr")}function le(e){var t=e.documentElement;return K(t,"Relationship")}function ce(e){var t=e.documentElement,n=G(t,"sheets");return K(n,"sheet")}function de(e,t){var n=t.createDocument(e),r={},i=ue(n);i&&"1"===i.getAttribute("date1904")&&(r.epoch1904=!0),r.sheets=[];var s=function(e){e.getAttribute("name")&&r.sheets.push({id:e.getAttribute("sheetId"),name:e.getAttribute("name"),relationId:e.getAttribute("r:id")})};return ce(n).forEach(s),r}function he(e,t){var n=t.createDocument(e),r={sheets:{},sharedStrings:void 0,styles:void 0},i=function(e){var t=e.getAttribute("Target"),n=e.getAttribute("Type");switch(n){case"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles":r.styles=fe(t);break;case"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings":r.sharedStrings=fe(t);break;case"http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet":r.sheets[e.getAttribute("Id")]=fe(t);break}};return le(n).forEach(i),r}function fe(e){return"/"===e[0]?e.slice("/".length):"xl/"+e}function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){ge(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ve(e,t){if(!e)return{};var n=t.createDocument(e),r=ie(n).map(be),i=oe(n).map(ye).reduce((function(e,t){return e[t.id]=t,e}),[]),s=function(e){return e.hasAttribute("xfId")?me(me({},r[e.xfId]),be(e,i)):be(e,i)};return se(n).map(s)}function ye(e){return{id:e.getAttribute("numFmtId"),template:e.getAttribute("formatCode")}}function be(e,t){var n={};if(e.hasAttribute("numFmtId")){var r=e.getAttribute("numFmtId");t[r]?n.numberFormat=t[r]:n.numberFormat={id:r}}return n}function we(e,t){return e?ae(t.createDocument(e)):[]}function _e(e,t){t&&t.epoch1904&&(e+=1462);var n=25569,r=36e5;return new Date(Math.round(24*(e-n)*r))}function Ie(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=Se(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Se(e,t){if(e){if("string"===typeof e)return Ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ee(e,t):void 0}}function Ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Te(e,t,n,r){if(t){var i=n[t];if(!i)throw new Error("Cell style not found: ".concat(t));if(ke.indexOf(parseInt(i.numberFormat.id))>=0||r.dateFormat&&i.numberFormat.template===r.dateFormat||!1!==r.smartDateParser&&i.numberFormat.template&&Ae(i.numberFormat.template))return!0}}var ke=[14,15,16,17,18,19,20,21,22,27,30,36,45,46,47,50,57],xe=/^\[\$-414\]/,Ce=/;@$/;function Ae(e){e=e.toLowerCase(),e=e.replace(xe,""),e=e.replace(Ce,"");for(var t,n=e.split(/\W+/),r=Ie(n);!(t=r()).done;){var i=t.value;if(Ne.indexOf(i)<0)return!1}return!0}var Ne=["ss","mm","h","hh","am","pm","d","dd","m","mm","mmm","mmmm","yy","yyyy","e"];function De(e,t,n){var r=n.getInlineStringValue,i=n.getInlineStringXml,s=n.getStyleId,o=n.styles,a=n.values,u=n.properties,l=n.options;switch(t||(t="n"),t){case"str":e=Re(e,l);break;case"inlineStr":if(e=r(),void 0===e)throw new Error('Unsupported "inline string" cell value structure: '.concat(i()));e=Re(e,l);break;case"s":var c=Number(e);if(isNaN(c))throw new Error('Invalid "shared" string index: '.concat(e));if(c>=a.length)throw new Error('An out-of-bounds "shared" string index: '.concat(e));e=a[c],e=Re(e,l);break;case"b":if("1"===e)e=!0;else{if("0"!==e)throw new Error('Unsupported "boolean" cell value: '.concat(e));e=!1}break;case"z":e=void 0;break;case"e":e=Oe(e);break;case"d":if(void 0===e)break;var d=new Date(e);if(isNaN(d.valueOf()))throw new Error('Unsupported "date" cell value: '.concat(e));e=d;break;case"n":if(void 0===e)break;var h=Number(e);if(isNaN(h))throw new Error('Invalid "numeric" cell value: '.concat(e));e=h,Te(e,s(),o,l)&&(e=_e(e,u));break;default:throw new TypeError("Cell type not supported: ".concat(t))}return void 0===e&&(e=null),e}function Oe(e){switch(e){case 0:return"#NULL!";case 7:return"#DIV/0!";case 15:return"#VALUE!";case 23:return"#REF!";case 29:return"#NAME?";case 36:return"#NUM!";case 42:return"#N/A";case 43:return"#GETTING_DATA";default:return"#ERROR_".concat(e)}}function Re(e,t){return!1!==t.trim&&(e=e.trim()),""===e&&(e=void 0),e}var Pe=["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];function Le(e){var t=function(e,t){return e-t},n=e.map((function(e){return e.row})).sort(t),r=e.map((function(e){return e.column})).sort(t),i=n[0],s=n[n.length-1],o=r[0],a=r[r.length-1];return[{row:i,column:o},{row:s,column:a}]}function Fe(e){var t=0,n=0;while(n<e.length)t*=26,t+=Pe.indexOf(e[n]),n++;return t}function Me(e){return e=e.split(/(\d+)/),[parseInt(e[1]),Fe(e[0].trim())]}function Ue(e,t,n,r,i,s,o){var a,u=Me(e.getAttribute("r")),l=te(t,e),c=l&&l.textContent;return e.hasAttribute("t")&&(a=e.getAttribute("t")),{row:u[0],column:u[1],value:De(c,a,{getInlineStringValue:function(){return ne(t,e)},getInlineStringXml:function(){return Z(e)},getStyleId:function(){return e.getAttribute("s")},styles:i,values:r,properties:s,options:o})}}function Ve(e,t,n,r,i,s){var o=ee(e);return 0===o.length?[]:o.map((function(o){return Ue(o,e,t,n,r,i,s)}))}function Be(e,t){return ze(e)||We(e,t)||$e(e,t)||je()}function je(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function $e(e,t){if(e){if("string"===typeof e)return qe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?qe(e,t):void 0}}function qe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function We(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(s.push(r.value),t&&s.length===t)break}catch(N){a=!0,i=N}finally{try{o||null==n["return"]||n["return"]()}finally{if(a)throw i}}return s}}function ze(e){if(Array.isArray(e))return e}function He(e){var t=re(e);if(t)return t=t.split(":").map(Me).map((function(e){var t=Be(e,2),n=t[0],r=t[1];return{row:n,column:r}})),1===t.length&&(t=[t[0],t[0]]),t}function Ge(e,t,n,r,i,s){var o=t.createDocument(e),a=Ve(o,t,n,r,i,s),u=He(o)||Le(a);return{cells:a,dimensions:u}}function Ke(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=Ye(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Ye(e,t){if(e){if("string"===typeof e)return Qe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Qe(e,t):void 0}}function Qe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Je(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.rowMap,r=t.accessor,i=void 0===r?function(e){return e}:r,s=t.onlyTrimAtTheEnd,o=e.length-1;while(o>=0){for(var a,u=!0,l=Ke(e[o]);!(a=l()).done;){var c=a.value;if(null!==i(c)){u=!1;break}}if(u)e.splice(o,1),n&&n.splice(o,1);else if(s)break;o--}return e}function Xe(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=Ze(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Ze(e,t){if(e){if("string"===typeof e)return et(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?et(e,t):void 0}}function et(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.accessor,r=void 0===n?function(e){return e}:n,i=t.onlyTrimAtTheEnd,s=e[0].length-1;while(s>=0){for(var o,a=!0,u=Xe(e);!(o=u()).done;){var l=o.value;if(null!==r(l[s])){a=!1;break}}if(a){var c=0;while(c<e.length)e[c].splice(s,1),c++}else if(i)break;s--}return e}function nt(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=st(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function rt(e,t){return ut(e)||at(e,t)||st(e,t)||it()}function it(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function st(e,t){if(e){if("string"===typeof e)return ot(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ot(e,t):void 0}}function ot(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function at(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(s.push(r.value),t&&s.length===t)break}catch(N){a=!0,i=N}finally{try{o||null==n["return"]||n["return"]()}finally{if(a)throw i}}return s}}function ut(e){if(Array.isArray(e))return e}function lt(e,t){var n=e.dimensions,r=e.cells;if(0===r.length)return[];var i=rt(n,2),s=(i[0],i[1]),o=s.column,a=s.row,u=new Array(a),l=0;while(l<a){u[l]=new Array(o);var c=0;while(c<o)u[l][c]=null,c++;l++}for(var d,h=nt(r);!(d=h()).done;){var f=d.value,p=f.row-1,m=f.column-1;m<o&&p<a&&(u[p][m]=f.value)}var g=t.rowMap;if(g){var v=0;while(v<u.length)g[v]=v,v++}return u=Je(tt(u,{onlyTrimAtTheEnd:!0}),{onlyTrimAtTheEnd:!0,rowMap:g}),t.transformData&&(u=t.transformData(u)),u}function ct(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=dt(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function dt(e,t){if(e){if("string"===typeof e)return ht(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ht(e,t):void 0}}function ht(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ft(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ft(Object(n),!0).forEach((function(t){mt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ft(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function mt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n.sheet||(n=pt({sheet:1},n));var r=function(t){if(!e[t])throw new Error('"'.concat(t,'" file not found inside the *.xlsx file zip archive'));return e[t]},i=he(r("xl/_rels/workbook.xml.rels"),t),s=i.sharedStrings?we(r(i.sharedStrings),t):[],o=i.styles?ve(r(i.styles),t):{},a=de(r("xl/workbook.xml"),t);if(n.getSheets)return a.sheets.map((function(e){var t=e.name;return{name:t}}));var u=vt(n.sheet,a.sheets);if(!u||!i.sheets[u])throw yt(n.sheet,a.sheets);var l=Ge(r(i.sheets[u]),t,s,o,a,n),c=lt(l,n);return n.properties?{data:c,properties:a}:c}function vt(e,t){if("number"===typeof e){var n=t[e-1];return n&&n.relationId}for(var r,i=ct(t);!(r=i()).done;){var s=r.value;if(s.name===e)return s.relationId}}function yt(e,t){var n=t&&t.map((function(e,t){return'"'.concat(e.name,'" (#').concat(t+1,")")})).join(", ");return new Error("Sheet ".concat("number"===typeof e?"#"+e:'"'+e+'"'," not found in the *.xlsx file.").concat(t?" Available sheets: "+n+".":""))}function bt(){}function wt(e){return(0|e)===e}function _t(){}var It=/^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)*(?:[a-z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:[/?#]\S*)?$/i;function St(e){return It.test(e)}function Et(){}var Tt=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;function kt(e){return Tt.test(e)}function xt(e,t){return Nt(e)||At(e,t)||Rt(e,t)||Ct()}function Ct(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function At(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(s.push(r.value),t&&s.length===t)break}catch(N){a=!0,i=N}finally{try{o||null==n["return"]||n["return"]()}finally{if(a)throw i}}return s}}function Nt(e){if(Array.isArray(e))return e}function Dt(e){return Dt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Dt(e)}function Ot(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=Rt(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Rt(e,t){if(e){if("string"===typeof e)return Pt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Pt(e,t):void 0}}function Pt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Lt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ft(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Lt(Object(n),!0).forEach((function(t){Mt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Mt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ut={isColumnOriented:!1};function Vt(e,t,n){n=n?Ft(Ft({},Ut),n):Ut;var r=n,i=r.isColumnOriented,s=r.rowMap,o=r.ignoreEmptyRows;Gt(t),i&&(e=Ht(e));for(var a=e[0],u=[],l=[],c=1;c<e.length;c++){var d=Bt(t,e[c],c,a,l,n);null===d&&!1!==o||u.push(d)}if(s)for(var h,f=Ot(l);!(h=f()).done;){var p=h.value;p.row=s[p.row-1]+1}return{rows:u,errors:l}}function Bt(e,t,n,r,i,s){for(var o={},a=!0,u=function(){var u=c[l],d=e[u],h="object"===Dt(d.type)&&!Array.isArray(d.type),f=t[r.indexOf(u)];void 0===f&&(f=null);var p=void 0,m=void 0,g=void 0;if(h)p=Bt(d.type,t,n,r,i,s);else if(null===f)p=null;else if(Array.isArray(d.type)){var v=!1,y=zt(f).map((function(e){var t=jt(e,d,s);return t.error&&(p=e,m=t.error,g=t.reason),null!==t.value&&(v=!0),t.value}));m||(p=v?y:null)}else{var b=jt(f,d,s);m=b.error,g=b.reason,p=m?f:b.value}!m&&null===p&&d.required&&(m="required"),m?(m={error:m,row:n+1,column:u,value:p},g&&(m.reason=g),d.type&&(m.type=d.type),i.push(m)):(a&&null!==p&&(a=!1),(null!==p||s.includeNullValues)&&(o[d.prop]=p))},l=0,c=Object.keys(e);l<c.length;l++)u();return a?null:o}function jt(e,t,n){if(null===e)return{value:null};var r;if(r=t.parse?$t(e,t.parse):t.type?qt(e,Array.isArray(t.type)?t.type[0]:t.type,n):{value:e},r.error)return r;if(null!==r.value){if(t.oneOf&&t.oneOf.indexOf(r.value)<0)return{error:"invalid",reason:"unknown"};if(t.validate)try{t.validate(r.value)}catch(i){return{error:i.message}}}return r}function $t(e,t){try{return e=t(e),void 0===e?{value:null}:{value:e}}catch(n){return{error:n.message}}}function qt(e,t,n){switch(t){case String:return"string"===typeof e?{value:e}:"number"===typeof e?isNaN(e)?{error:"invalid",reason:"invalid_number"}:isFinite(e)?{value:String(e)}:{error:"invalid",reason:"out_of_bounds"}:{error:"invalid",reason:"not_a_string"};case Number:case bt:if("string"===typeof e){var r=e;if(e=Number(e),String(e)!==r)return{error:"invalid",reason:"not_a_number"}}return"number"!==typeof e?{error:"invalid",reason:"not_a_number"}:isNaN(e)?{error:"invalid",reason:"invalid_number"}:isFinite(e)?t!==bt||wt(e)?{value:e}:{error:"invalid",reason:"not_an_integer"}:{error:"invalid",reason:"out_of_bounds"};case _t:return"string"===typeof e?St(e)?{value:e}:{error:"invalid",reason:"not_a_url"}:{error:"invalid",reason:"not_a_string"};case Et:return"string"===typeof e?kt(e)?{value:e}:{error:"invalid",reason:"not_an_email"}:{error:"invalid",reason:"not_a_string"};case Date:if(e instanceof Date)return isNaN(e.valueOf())?{error:"invalid",reason:"out_of_bounds"}:{value:e};if("number"===typeof e){if(isNaN(e))return{error:"invalid",reason:"invalid_number"};if(!isFinite(e))return{error:"invalid",reason:"out_of_bounds"};var i=_e(e,n.properties);return isNaN(i.valueOf())?{error:"invalid",reason:"out_of_bounds"}:{value:i}}return{error:"invalid",reason:"not_a_date"};case Boolean:return"boolean"===typeof e?{value:e}:{error:"invalid",reason:"not_a_boolean"};default:if("function"===typeof t)return $t(e,t);throw new Error("Unknown schema type: ".concat(t&&t.name||t))}}function Wt(e,t,n){var r=0,i="";while(n+r<e.length){var s=e[n+r];if(s===t)return[i,r];if('"'===s){var o=Wt(e,'"',n+r+1);i+=o[0],r+='"'.length+o[1]+'"'.length}else i+=s,r++}return[i,r]}function zt(e){var t=[],n=0;while(n<e.length){var r=Wt(e,",",n),i=xt(r,2),s=i[0],o=i[1];n+=o+",".length,t.push(s.trim())}return t}var Ht=function(e){return e[0].map((function(t,n){return e.map((function(e){return e[n]}))}))};function Gt(e){for(var t=0,n=Object.keys(e);t<n.length;t++){var r=n[t],i=e[r];if(!i.prop)throw new Error('"prop" not defined for schema entry "'.concat(r,'".'))}}function Kt(e){return Kt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kt(e)}function Yt(e){for(var t={},n=0,r=Object.keys(e);n<r.length;n++){var i=r[n],s=e[i],o=void 0;"object"===Kt(s)&&(s=Object.keys(e[i])[0],o=Yt(e[i][s])),t[i]={prop:s},o&&(t[i].type=o)}return t}var Qt=["schema","map"];function Jt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Xt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Jt(Object(n),!0).forEach((function(t){Zt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Zt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function en(e,t){if(null==e)return{};var n,r,i=tn(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function tn(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function nn(e,t,n){var r=n.schema,i=n.map,s=en(n,Qt);!r&&i&&(r=Yt(i));var o=gt(e,t,Xt(Xt({},s),{},{properties:r||s.properties}));return r?Vt(o.data,r,Xt(Xt({},s),{},{properties:o.properties})):o}function rn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return W(e).then((function(e){return nn(e,r,t)}))}},4852:function(e,t,n){"use strict";n.d(t,{q:function(){return b}});var r=n(3396),i=(n(7658),n(3712)),s=n(4870),o=n(3766),a=n(131),u=n(7514);const l=Symbol.for("vuetify:layout"),c=Symbol.for("vuetify:layout-item"),d=1e3,h=(0,o.U)({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");(0,o.U)({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");const f=(e,t,n,r)=>{let i={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...i}}];for(const o of e){const e=t.get(o),a=n.get(o),u=r.get(o);if(!e||!a||!u)continue;const l={...i,[e.value]:parseInt(i[e.value],10)+(u.value?parseInt(a.value,10):0)};s.push({id:o,layer:l}),i=l}return s};function p(e){const t=(0,r.f3)(l,null),n=(0,r.Fl)((()=>t?t.rootZIndex.value-100:d)),o=(0,s.iH)([]),h=(0,s.qj)(new Map),p=(0,s.qj)(new Map),m=(0,s.qj)(new Map),g=(0,s.qj)(new Map),v=(0,s.qj)(new Map),{resizeRef:y,contentRect:b}=(0,i.y)(),w=(0,r.Fl)((()=>{const t=new Map,n=e.overlaps??[];for(const e of n.filter((e=>e.includes(":")))){const[n,r]=e.split(":");if(!o.value.includes(n)||!o.value.includes(r))continue;const i=h.get(n),s=h.get(r),a=p.get(n),u=p.get(r);i&&s&&a&&u&&(t.set(r,{position:i.value,amount:parseInt(a.value,10)}),t.set(n,{position:s.value,amount:-parseInt(u.value,10)}))}return t})),_=(0,r.Fl)((()=>{const e=[...new Set([...m.values()].map((e=>e.value)))].sort(((e,t)=>e-t)),t=[];for(const n of e){const e=o.value.filter((e=>{var t;return(null==(t=m.get(e))?void 0:t.value)===n}));t.push(...e)}return f(t,h,p,g)})),I=(0,r.Fl)((()=>!Array.from(v.values()).some((e=>e.value)))),S=(0,r.Fl)((()=>_.value[_.value.length-1].layer)),E=(0,r.Fl)((()=>({"--v-layout-left":(0,a.kb)(S.value.left),"--v-layout-right":(0,a.kb)(S.value.right),"--v-layout-top":(0,a.kb)(S.value.top),"--v-layout-bottom":(0,a.kb)(S.value.bottom),...I.value?void 0:{transition:"none"}}))),T=(0,r.Fl)((()=>_.value.slice(1).map(((e,t)=>{let{id:n}=e;const{layer:r}=_.value[t],i=p.get(n),s=h.get(n);return{id:n,...r,size:Number(i.value),position:s.value}})))),k=e=>T.value.find((t=>t.id===e)),x=(0,u.FN)("createLayout"),C=(0,s.iH)(!1);(0,r.bv)((()=>{C.value=!0})),(0,r.JJ)(l,{register:(e,t)=>{let{id:i,order:s,position:u,layoutSize:l,elementSize:f,active:y,disableTransitions:b,absolute:S}=t;m.set(i,s),h.set(i,u),p.set(i,l),g.set(i,y),b&&v.set(i,b);const E=(0,a.bY)(c,null==x?void 0:x.vnode),k=E.indexOf(e);k>-1?o.value.splice(k,0,i):o.value.push(i);const A=(0,r.Fl)((()=>T.value.findIndex((e=>e.id===i)))),N=(0,r.Fl)((()=>n.value+2*_.value.length-2*A.value)),D=(0,r.Fl)((()=>{const e="left"===u.value||"right"===u.value,t="right"===u.value,r="bottom"===u.value,s={[u.value]:0,zIndex:N.value,transform:`translate${e?"X":"Y"}(${(y.value?0:-110)*(t||r?-1:1)}%)`,position:S.value||n.value!==d?"absolute":"fixed",...I.value?void 0:{transition:"none"}};if(!C.value)return s;const o=T.value[A.value];if(!o)throw new Error(`[Vuetify] Could not find layout item "${i}"`);const a=w.value.get(i);return a&&(o[a.position]+=a.amount),{...s,height:e?`calc(100% - ${o.top}px - ${o.bottom}px)`:f.value?`${f.value}px`:void 0,left:t?void 0:`${o.left}px`,right:t?`${o.right}px`:void 0,top:"bottom"!==u.value?`${o.top}px`:void 0,bottom:"top"!==u.value?`${o.bottom}px`:void 0,width:e?f.value?`${f.value}px`:void 0:`calc(100% - ${o.left}px - ${o.right}px)`}})),O=(0,r.Fl)((()=>({zIndex:N.value-1})));return{layoutItemStyles:D,layoutItemScrimStyles:O,zIndex:N}},unregister:e=>{m.delete(e),h.delete(e),p.delete(e),g.delete(e),v.delete(e),o.value=o.value.filter((t=>t!==e))},mainRect:S,mainStyles:E,getLayoutItem:k,items:T,layoutRect:b,rootZIndex:n});const A=(0,r.Fl)((()=>["v-layout",{"v-layout--full-height":e.fullHeight}])),N=(0,r.Fl)((()=>({zIndex:n.value,position:t?"relative":void 0,overflow:t?"hidden":void 0})));return{layoutClasses:A,layoutStyles:N,getLayoutItem:k,items:T,layoutRect:b,layoutRef:y}}var m=n(7041),g=n(1629),v=n(320),y=n(9888);const b=(0,v.a)({name:"VApp",props:{...h({fullHeight:!0}),...(0,m.x$)()},setup(e,t){let{slots:n}=t;const i=(0,m.ER)(e),{layoutClasses:s,layoutStyles:o,getLayoutItem:a,items:u,layoutRef:l}=p(e),{rtlClasses:c}=(0,g.Vw)();return(0,y.L)((()=>{var e;return(0,r.Wm)("div",{ref:l,class:["v-application",i.themeClasses.value,s.value,c.value],style:o.value},[(0,r.Wm)("div",{class:"v-application__wrap"},[null==(e=n.default)?void 0:e.call(n)])])})),{getLayoutItem:a,items:u,theme:i}}})},702:function(e,t,n){"use strict";n.d(t,{T:function(){return W}});var r=n(3396),i=n(2718),s=n(9694),o=n(2465),a=n(4231),u=n(1138),l=n(7041),c=n(5221),d=n(8434),h=n(320),f=n(9888),p=n(4870);const m=(0,h.a)({name:"VBtnGroup",props:{divided:Boolean,...(0,i.m)(),...(0,s.f)(),...(0,o.c)(),...(0,a.I)(),...(0,u.Q)(),...(0,l.x$)(),...(0,c.bk)()},setup(e,t){let{slots:n}=t;const{themeClasses:u}=(0,l.ER)(e),{densityClasses:c}=(0,s.t)(e),{borderClasses:h}=(0,i.P)(e),{elevationClasses:m}=(0,o.Y)(e),{roundedClasses:g}=(0,a.b)(e);(0,d.AF)({VBtn:{height:"auto",color:(0,p.Vh)(e,"color"),density:(0,p.Vh)(e,"density"),flat:!0,variant:(0,p.Vh)(e,"variant")}}),(0,f.L)((()=>(0,r.Wm)(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},u.value,h.value,c.value,m.value,g.value]},n)))}});n(7658);var g=n(8717),v=n(3766),y=n(7514),b=n(131),w=n(6033);const _=(0,v.U)({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),I=(0,v.U)({value:null,disabled:Boolean,selectedClass:String},"group-item");function S(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const i=(0,y.FN)("useGroupItem");if(!i)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=(0,y.sq)();(0,r.JJ)(Symbol.for(`${t.description}:id`),s);const o=(0,r.f3)(t,null);if(!o){if(!n)return o;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const a=(0,p.Vh)(e,"value"),u=(0,r.Fl)((()=>o.disabled.value||e.disabled));o.register({id:s,value:a,disabled:u},i),(0,r.Jd)((()=>{o.unregister(s)}));const l=(0,r.Fl)((()=>o.isSelected(s))),c=(0,r.Fl)((()=>l.value&&[o.selectedClass.value,e.selectedClass]));return(0,r.YP)(l,(e=>{i.emit("group:selected",{value:e})})),{id:s,isSelected:l,toggle:()=>o.select(s,!l.value),select:e=>o.select(s,e),selectedClass:c,value:a,disabled:u,group:o}}function E(e,t){let n=!1;const i=(0,p.qj)([]),s=(0,g.z)(e,"modelValue",[],(e=>null==e?[]:k(i,(0,b.FT)(e))),(t=>{const n=x(i,t);return e.multiple?n:n[0]})),o=(0,y.FN)("useGroup");function a(e,n){const r=e,s=Symbol.for(`${t.description}:id`),a=(0,b.bY)(s,null==o?void 0:o.vnode),u=a.indexOf(n);u>-1?i.splice(u,0,r):i.push(r)}function u(e){if(n)return;l();const t=i.findIndex((t=>t.id===e));i.splice(t,1)}function l(){const t=i.find((e=>!e.disabled));t&&"force"===e.mandatory&&!s.value.length&&(s.value=[t.id])}function c(t,n){const r=i.find((e=>e.id===t));if(!n||null==r||!r.disabled)if(e.multiple){const r=s.value.slice(),i=r.findIndex((e=>e===t)),o=~i;if(n=n??!o,o&&e.mandatory&&r.length<=1)return;if(!o&&null!=e.max&&r.length+1>e.max)return;i<0&&n?r.push(t):i>=0&&!n&&r.splice(i,1),s.value=r}else{const r=s.value.includes(t);if(e.mandatory&&r)return;s.value=n??!r?[t]:[]}}function d(t){if(e.multiple&&(0,w.Kd)('This method is not supported when using "multiple" prop'),s.value.length){const e=s.value[0],n=i.findIndex((t=>t.id===e));let r=(n+t)%i.length,o=i[r];while(o.disabled&&r!==n)r=(r+t)%i.length,o=i[r];if(o.disabled)return;s.value=[i[r].id]}else{const e=i.find((e=>!e.disabled));e&&(s.value=[e.id])}}(0,r.bv)((()=>{l()})),(0,r.Jd)((()=>{n=!0}));const h={register:a,unregister:u,selected:s,select:c,disabled:(0,p.Vh)(e,"disabled"),prev:()=>d(i.length-1),next:()=>d(1),isSelected:e=>s.value.includes(e),selectedClass:(0,r.Fl)((()=>e.selectedClass)),items:(0,r.Fl)((()=>i)),getItemIndex:e=>T(i,e)};return(0,r.JJ)(t,h),h}function T(e,t){const n=k(e,[t]);return n.length?e.findIndex((e=>e.id===n[0])):-1}function k(e,t){const n=[];for(let r=0;r<e.length;r++){const i=e[r];null!=i.value?null!=t.find((e=>(0,b.vZ)(e,i.value)))&&n.push(i.id):t.includes(r)&&n.push(i.id)}return n}function x(e,t){const n=[];for(let r=0;r<e.length;r++){const i=e[r];t.includes(i.id)&&n.push(null!=i.value?i.value:r)}return n}const C=Symbol.for("vuetify:v-btn-toggle");(0,h.e)()({name:"VBtnToggle",props:_(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{isSelected:i,next:s,prev:o,select:a,selected:u}=E(e,C);return(0,f.L)((()=>{var e;return(0,r.Wm)(m,{class:"v-btn-toggle"},{default:()=>[null==(e=n.default)?void 0:e.call(n,{isSelected:i,next:s,prev:o,select:a,selected:u})]})})),{next:s,prev:o,select:a}}});var A=n(836),N=n(3289),D=n(9374),O=n(1477),R=n(3712),P=n(2370);const L=(0,h.a)({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...(0,D.Z)(),...(0,u.Q)({tag:"div"}),...(0,l.x$)()},setup(e,t){let{slots:n}=t;const i=20,s=2*Math.PI*i,o=(0,p.iH)(),{themeClasses:a}=(0,l.ER)(e),{sizeClasses:u,sizeStyles:c}=(0,D.t)(e),{textColorClasses:d,textColorStyles:h}=(0,P.rY)((0,p.Vh)(e,"color")),{textColorClasses:m,textColorStyles:g}=(0,P.rY)((0,p.Vh)(e,"bgColor")),{intersectionRef:v,isIntersecting:y}=(0,O.S)(),{resizeRef:w,contentRect:_}=(0,R.y)(),I=(0,r.Fl)((()=>Math.max(0,Math.min(100,parseFloat(e.modelValue))))),S=(0,r.Fl)((()=>Number(e.width))),E=(0,r.Fl)((()=>c.value?Number(e.size):_.value?_.value.width:Math.max(S.value,32))),T=(0,r.Fl)((()=>i/(1-S.value/E.value)*2)),k=(0,r.Fl)((()=>S.value/E.value*T.value)),x=(0,r.Fl)((()=>(0,b.kb)((100-I.value)/100*s)));return(0,r.m0)((()=>{v.value=o.value,w.value=o.value})),(0,f.L)((()=>(0,r.Wm)(e.tag,{ref:o,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":y.value,"v-progress-circular--disable-shrink":"disable-shrink"===e.indeterminate},a.value,u.value,d.value],style:[c.value,h.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:I.value},{default:()=>[(0,r.Wm)("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${T.value} ${T.value}`},[(0,r.Wm)("circle",{class:["v-progress-circular__underlay",m.value],style:g.value,fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":k.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),(0,r.Wm)("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:i,"stroke-width":k.value,"stroke-dasharray":s,"stroke-dashoffset":x.value},null)]),n.default&&(0,r.Wm)("div",{class:"v-progress-circular__content"},[n.default({value:I.value})])]}))),{}}});var F=n(3824),M=n(4960),U=n(4544),V=n(6791),B=n(5180),j=n(489),$=n(6183);function q(e,t){(0,r.YP)((()=>{var t;return null==(t=e.isActive)?void 0:t.value}),(n=>{e.isLink.value&&n&&t&&(0,r.Y3)((()=>{t(!0)}))}),{immediate:!0})}const W=(0,h.a)({name:"VBtn",directives:{Ripple:F.H},props:{active:{type:Boolean,default:void 0},symbol:{type:null,default:C},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:M.lE,appendIcon:M.lE,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...(0,i.m)(),...(0,a.I)(),...(0,s.f)(),...(0,U.x)(),...(0,o.c)(),...I(),...(0,V.fF)(),...(0,B.y)(),...(0,j.F)(),...(0,$.GN)(),...(0,D.Z)(),...(0,u.Q)({tag:"button"}),...(0,l.x$)(),...(0,c.bk)({variant:"elevated"})},emits:{"group:selected":e=>!0},setup(e,t){let{attrs:n,slots:u}=t;const{themeClasses:d}=(0,l.ER)(e),{borderClasses:h}=(0,i.P)(e),{colorClasses:p,colorStyles:m,variantClasses:g}=(0,c.c1)(e),{densityClasses:v}=(0,s.t)(e),{dimensionStyles:y}=(0,U.$)(e),{elevationClasses:b}=(0,o.Y)(e),{loaderClasses:w}=(0,V.U2)(e),{locationStyles:_}=(0,B.T)(e),{positionClasses:I}=(0,j.K)(e),{roundedClasses:E}=(0,a.b)(e),{sizeClasses:T,sizeStyles:k}=(0,D.t)(e),x=S(e,e.symbol,!1),C=(0,$.nB)(e,n),O=(0,r.Fl)((()=>{var t;return!1!==e.active&&(e.active||(null==(t=C.isActive)?void 0:t.value)||(null==x?void 0:x.isSelected.value))})),R=(0,r.Fl)((()=>(null==x?void 0:x.disabled.value)||e.disabled)),P=(0,r.Fl)((()=>"elevated"===e.variant&&!(e.disabled||e.flat||e.border)));return q(C,null==x?void 0:x.select),(0,f.L)((()=>{var t,n,i,s;const o=C.isLink.value?"a":e.tag,a=!x||x.isSelected.value,l=!(!e.prependIcon&&!u.prepend),f=!(!e.appendIcon&&!u.append),S=!(!e.icon||!0===e.icon);return(0,r.wy)((0,r.Wm)(o,{type:"a"===o?void 0:"button",class:["v-btn",null==x?void 0:x.selectedClass.value,{"v-btn--active":O.value,"v-btn--block":e.block,"v-btn--disabled":R.value,"v-btn--elevated":P.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},d.value,h.value,a?p.value:void 0,v.value,b.value,w.value,I.value,E.value,T.value,g.value],style:[a?m.value:void 0,y.value,_.value,k.value],disabled:R.value||void 0,href:C.href.value,onClick:e=>{var t;R.value||(null==(t=C.navigate)||t.call(C,e),null==x||x.toggle())}},{default:()=>[(0,c.Ux)(!0,"v-btn"),!e.icon&&l&&(0,r.Wm)(A.z,{key:"prepend",defaults:{VIcon:{icon:e.prependIcon}}},{default:()=>[(0,r.Wm)("span",{class:"v-btn__prepend"},[(null==(t=u.prepend)?void 0:t.call(u))??(0,r.Wm)(N.t,null,null)])]}),(0,r.Wm)("span",{class:"v-btn__content","data-no-activator":""},[(0,r.Wm)(A.z,{key:"content",defaults:{VIcon:{icon:S?e.icon:void 0}}},{default:()=>[(null==(n=u.default)?void 0:n.call(u))??(S&&(0,r.Wm)(N.t,{key:"icon"},null))]})]),!e.icon&&f&&(0,r.Wm)(A.z,{key:"append",defaults:{VIcon:{icon:e.appendIcon}}},{default:()=>[(0,r.Wm)("span",{class:"v-btn__append"},[(null==(i=u.append)?void 0:i.call(u))??(0,r.Wm)(N.t,null,null)])]}),!!e.loading&&(0,r.Wm)("span",{key:"loader",class:"v-btn__loader"},[(null==(s=u.loader)?void 0:s.call(u))??(0,r.Wm)(L,{color:"boolean"===typeof e.loading?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}),[[(0,r.Q2)("ripple"),!R.value&&e.ripple,null]])})),{}}})},385:function(e,t,n){"use strict";n.d(t,{_:function(){return j}});var r=n(3396),i=n(1334),s=n(3289),o=n(4544),a=n(320),u=n(9888);function l(e){return{aspectStyles:(0,r.Fl)((()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0}))}}const c=(0,a.a)({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...(0,o.x)()},setup(e,t){let{slots:n}=t;const{aspectStyles:i}=l(e),{dimensionStyles:s}=(0,o.$)(e);return(0,u.L)((()=>{var t;return(0,r.Wm)("div",{class:"v-responsive",style:s.value},[(0,r.Wm)("div",{class:"v-responsive__sizer",style:i.value},null),null==(t=n.additional)?void 0:t.call(n),n.default&&(0,r.Wm)("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])})),{}}});var d=n(7052),h=n(4906),f=n(4870),p=n(9242),m=n(2385),g=n(131);const v=(0,a.a)({name:"VImg",directives:{intersect:d.Z},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...(0,h.X)()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:i}=t;const s=(0,f.iH)(""),o=(0,f.iH)(),a=(0,f.iH)(e.eager?"loading":"idle"),l=(0,f.iH)(),d=(0,f.iH)(),v=(0,r.Fl)((()=>e.src&&"object"===typeof e.src?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)})),y=(0,r.Fl)((()=>v.value.aspect||l.value/d.value||0));function b(t){if((!e.eager||!t)&&(!m.cu||t||e.eager)){if(a.value="loading",v.value.lazySrc){const e=new Image;e.src=v.value.lazySrc,E(e,null)}v.value.src&&(0,r.Y3)((()=>{var e,t;if(n("loadstart",(null==(e=o.value)?void 0:e.currentSrc)||v.value.src),null!=(t=o.value)&&t.complete){if(o.value.naturalWidth||_(),"error"===a.value)return;y.value||E(o.value,null),w()}else y.value||E(o.value),I()}))}}function w(){var e;I(),a.value="loaded",n("load",(null==(e=o.value)?void 0:e.currentSrc)||v.value.src)}function _(){var e;a.value="error",n("error",(null==(e=o.value)?void 0:e.currentSrc)||v.value.src)}function I(){const e=o.value;e&&(s.value=e.currentSrc||e.src)}(0,r.YP)((()=>e.src),(()=>{b("idle"!==a.value)})),(0,r.YP)(y,((e,t)=>{!e&&t&&o.value&&E(o.value)})),(0,r.wF)((()=>b()));let S=-1;function E(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=()=>{clearTimeout(S);const{naturalHeight:r,naturalWidth:i}=e;r||i?(l.value=i,d.value=r):e.complete||"loading"!==a.value||null==t?(e.currentSrc.endsWith(".svg")||e.currentSrc.startsWith("data:image/svg+xml"))&&(l.value=1,d.value=1):S=window.setTimeout(n,t)};n()}const T=(0,r.Fl)((()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover}))),k=()=>{var t;if(!v.value.src||"idle"===a.value)return null;const n=(0,r.Wm)("img",{class:["v-img__img",T.value],src:v.value.src,srcset:v.value.srcset,alt:"",sizes:e.sizes,ref:o,onLoad:w,onError:_},null),s=null==(t=i.sources)?void 0:t.call(i);return(0,r.Wm)(h.J,{transition:e.transition,appear:!0},{default:()=>[(0,r.wy)(s?(0,r.Wm)("picture",{class:"v-img__picture"},[s,n]):n,[[p.F8,"loaded"===a.value]])]})},x=()=>(0,r.Wm)(h.J,{transition:e.transition},{default:()=>[v.value.lazySrc&&"loaded"!==a.value&&(0,r.Wm)("img",{class:["v-img__img","v-img__img--preload",T.value],src:v.value.lazySrc,alt:""},null)]}),C=()=>i.placeholder?(0,r.Wm)(h.J,{transition:e.transition,appear:!0},{default:()=>[("loading"===a.value||"error"===a.value&&!i.error)&&(0,r.Wm)("div",{class:"v-img__placeholder"},[i.placeholder()])]}):null,A=()=>i.error?(0,r.Wm)(h.J,{transition:e.transition,appear:!0},{default:()=>["error"===a.value&&(0,r.Wm)("div",{class:"v-img__error"},[i.error()])]}):null,N=()=>e.gradient?(0,r.Wm)("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,D=(0,f.iH)(!1);{const e=(0,r.YP)(y,(t=>{t&&(requestAnimationFrame((()=>{requestAnimationFrame((()=>{D.value=!0}))})),e())}))}return(0,u.L)((()=>(0,r.wy)((0,r.Wm)(c,{class:["v-img",{"v-img--booting":!D.value}],style:{width:(0,g.kb)("auto"===e.width?l.value:e.width)},aspectRatio:y.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>(0,r.Wm)(r.HY,null,[(0,r.Wm)(k,null,null),(0,r.Wm)(x,null,null),(0,r.Wm)(N,null,null),(0,r.Wm)(C,null,null),(0,r.Wm)(A,null,null)]),default:i.default}),[[(0,r.Q2)("intersect"),{handler:b,options:e.options},null,{once:!0}]]))),{currentSrc:s,image:o,state:a,naturalWidth:l,naturalHeight:d}}});var y=n(5221),b=n(4960),w=n(9694),_=n(4231),I=n(9374),S=n(1138),E=n(7041),T=n(3766);const k=(0,T.U)({start:Boolean,end:Boolean,icon:b.lE,image:String,...(0,w.f)(),...(0,_.I)(),...(0,I.Z)(),...(0,S.Q)(),...(0,E.x$)(),...(0,y.bk)({variant:"flat"})},"v-avatar"),x=(0,a.a)({name:"VAvatar",props:k(),setup(e,t){let{slots:n}=t;const{themeClasses:i}=(0,E.ER)(e),{colorClasses:o,colorStyles:a,variantClasses:l}=(0,y.c1)(e),{densityClasses:c}=(0,w.t)(e),{roundedClasses:d}=(0,_.b)(e),{sizeClasses:h,sizeStyles:f}=(0,I.t)(e);return(0,u.L)((()=>{var t;return(0,r.Wm)(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},i.value,o.value,c.value,d.value,h.value,l.value],style:[a.value,f.value]},{default:()=>[e.image?(0,r.Wm)(v,{key:"image",src:e.image,alt:""},null):e.icon?(0,r.Wm)(s.t,{key:"icon",icon:e.icon},null):null==(t=n.default)?void 0:t.call(n),(0,y.Ux)(!1,"v-avatar")]})})),{}}});var C=n(1114);const A=(0,C.J)("v-card-subtitle"),N=(0,C.J)("v-card-title");var D=n(836);const O=(0,a.a)({name:"VCardItem",props:{appendAvatar:String,appendIcon:b.lE,prependAvatar:String,prependIcon:b.lE,subtitle:String,title:String,...(0,w.f)()},setup(e,t){let{slots:n}=t;return(0,u.L)((()=>{var t,i,s,o,a;const u=!!(e.prependAvatar||e.prependIcon||n.prepend),l=!!(e.appendAvatar||e.appendIcon||n.append),c=!(!e.title&&!n.title),d=!(!e.subtitle&&!n.subtitle);return(0,r.Wm)("div",{class:"v-card-item"},[u&&(0,r.Wm)(D.z,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>[(0,r.Wm)("div",{class:"v-card-item__prepend"},[(null==(t=n.prepend)?void 0:t.call(n))??(0,r.Wm)(x,null,null)])]}),(0,r.Wm)("div",{class:"v-card-item__content"},[c&&(0,r.Wm)(N,{key:"title"},{default:()=>[(null==(i=n.title)?void 0:i.call(n))??e.title]}),d&&(0,r.Wm)(A,{key:"subtitle"},{default:()=>[(null==(s=n.subtitle)?void 0:s.call(n))??e.subtitle]}),null==(o=n.default)?void 0:o.call(n)]),l&&(0,r.Wm)(D.z,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>[(0,r.Wm)("div",{class:"v-card-item__append"},[(null==(a=n.append)?void 0:a.call(n))??(0,r.Wm)(x,null,null)])]})])})),{}}});var R=n(1888),P=n(3824),L=n(6791),F=n(2718),M=n(2465),U=n(5180),V=n(489),B=n(6183);const j=(0,a.a)({name:"VCard",directives:{Ripple:P.H},props:{appendAvatar:String,appendIcon:b.lE,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:b.lE,ripple:Boolean,subtitle:String,text:String,title:String,...(0,E.x$)(),...(0,F.m)(),...(0,w.f)(),...(0,o.x)(),...(0,M.c)(),...(0,L.fF)(),...(0,U.y)(),...(0,V.F)(),...(0,_.I)(),...(0,B.GN)(),...(0,S.Q)(),...(0,y.bk)({variant:"elevated"})},setup(e,t){let{attrs:n,slots:s}=t;const{themeClasses:a}=(0,E.ER)(e),{borderClasses:l}=(0,F.P)(e),{colorClasses:c,colorStyles:d,variantClasses:h}=(0,y.c1)(e),{densityClasses:f}=(0,w.t)(e),{dimensionStyles:p}=(0,o.$)(e),{elevationClasses:m}=(0,M.Y)(e),{loaderClasses:g}=(0,L.U2)(e),{locationStyles:b}=(0,U.T)(e),{positionClasses:I}=(0,V.K)(e),{roundedClasses:S}=(0,_.b)(e),T=(0,B.nB)(e,n),k=(0,r.Fl)((()=>!1!==e.link&&T.isLink.value)),x=(0,r.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||T.isClickable.value)));return(0,u.L)((()=>{var t,n,o;const u=k.value?"a":e.tag,w=!(!s.title&&!e.title),_=!(!s.subtitle&&!e.subtitle),E=w||_,C=!!(s.append||e.appendAvatar||e.appendIcon),A=!!(s.prepend||e.prependAvatar||e.prependIcon),N=!(!s.image&&!e.image),P=E||A||C,F=!(!s.text&&!e.text);return(0,r.wy)((0,r.Wm)(u,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":x.value},a.value,l.value,c.value,f.value,m.value,g.value,I.value,S.value,h.value],style:[d.value,p.value,b.value],href:T.href.value,onClick:x.value&&T.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[N&&(0,r.Wm)(D.z,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[(0,r.Wm)("div",{class:"v-card__image"},[(null==(t=s.image)?void 0:t.call(s))??(0,r.Wm)(v,null,null)])]}),(0,r.Wm)(L.rD,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:s.loader}),P&&(0,r.Wm)(O,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:s.item,prepend:s.prepend,title:s.title,subtitle:s.subtitle,append:s.append}),F&&(0,r.Wm)(R.Z,{key:"text"},{default:()=>[(null==(n=s.text)?void 0:n.call(s))??e.text]}),null==(o=s.default)?void 0:o.call(s),s.actions&&(0,r.Wm)(i.h,null,{default:s.actions}),(0,y.Ux)(x.value,"v-card")]}),[[(0,r.Q2)("ripple"),x.value]])})),{}}})},1334:function(e,t,n){"use strict";n.d(t,{h:function(){return a}});var r=n(3396),i=n(8434),s=n(320),o=n(9888);const a=(0,s.a)({name:"VCardActions",setup(e,t){let{slots:n}=t;return(0,i.AF)({VBtn:{variant:"text"}}),(0,o.L)((()=>{var e;return(0,r.Wm)("div",{class:"v-card-actions"},[null==(e=n.default)?void 0:e.call(n)])})),{}}})},1888:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(1114);const i=(0,r.J)("v-card-text")},836:function(e,t,n){"use strict";n.d(t,{z:function(){return o}});var r=n(8434),i=n(3396),s=n(4870);const o=(0,i.aZ)({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:n}=t;const{defaults:i,reset:o,root:a,scoped:u}=(0,s.BK)(e);return(0,r.AF)(i,{reset:o,root:a,scoped:u}),()=>{var e;return null==(e=n.default)?void 0:e.call(n)}}})},3849:function(e,t,n){"use strict";n.d(t,{B:function(){return Ae}});var r=n(3396),i=n(9242),s=n(320),o=n(3122),a=n(8587);const u=(0,s.a)({name:"VDialogTransition",props:{target:Object},setup(e,t){let{slots:n}=t;const s={onBeforeEnter(e){e.style.pointerEvents="none",e.style.visibility="hidden"},async onEnter(t,n){var r;await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>requestAnimationFrame(e))),t.style.visibility="";const{x:i,y:s,sx:u,sy:d,speed:h}=c(e.target,t),f=(0,o.j)(t,[{transform:`translate(${i}px, ${s}px) scale(${u}, ${d})`,opacity:0},{transform:""}],{duration:225*h,easing:a.uX});null==(r=l(t))||r.forEach((e=>{(0,o.j)(e,[{opacity:0},{opacity:0,offset:.33},{opacity:1}],{duration:450*h,easing:a.Ly})})),f.finished.then((()=>n()))},onAfterEnter(e){e.style.removeProperty("pointer-events")},onBeforeLeave(e){e.style.pointerEvents="none"},async onLeave(t,n){var r;await new Promise((e=>requestAnimationFrame(e)));const{x:i,y:s,sx:u,sy:d,speed:h}=c(e.target,t),f=(0,o.j)(t,[{transform:""},{transform:`translate(${i}px, ${s}px) scale(${u}, ${d})`,opacity:0}],{duration:125*h,easing:a.x0});f.finished.then((()=>n())),null==(r=l(t))||r.forEach((e=>{(0,o.j)(e,[{},{opacity:0,offset:.2},{opacity:0}],{duration:250*h,easing:a.Ly})}))},onAfterLeave(e){e.style.removeProperty("pointer-events")}};return()=>e.target?(0,r.Wm)(i.uT,(0,r.dG)({name:"dialog-transition"},s,{css:!1}),n):(0,r.Wm)(i.uT,{name:"dialog-transition"},n)}});function l(e){var t;const n=null==(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))?void 0:t.children;return n&&[...n]}function c(e,t){const n=e.getBoundingClientRect(),r=(0,o.G)(t),[i,s]=getComputedStyle(t).transformOrigin.split(" ").map((e=>parseFloat(e))),[a,u]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");let l=n.left+n.width/2;"left"===a||"left"===u?l-=n.width/2:"right"!==a&&"right"!==u||(l+=n.width/2);let c=n.top+n.height/2;"top"===a||"top"===u?c-=n.height/2:"bottom"!==a&&"bottom"!==u||(c+=n.height/2);const d=n.width/r.width,h=n.height/r.height,f=Math.max(1,d,h),p=d/f||0,m=h/f||0,g=r.width*r.height/(window.innerWidth*window.innerHeight),v=g>.12?Math.min(1.5,10*(g-.12)+1):1;return{x:l-(i+r.left),y:c-(s+r.top),sx:p,sy:m,speed:v}}var d=n(836),h=n(3766),f=n(2385);const p=(0,h.U)({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function m(e,t){const n={},r=r=>()=>{if(!f.BR)return Promise.resolve(!0);const i="openDelay"===r;return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise((s=>{const o=parseInt(e[r]??0,10);n[r]=window.setTimeout((()=>{null==t||t(i),s(i)}),o)}))};return{runCloseDelay:r("closeDelay"),runOpenDelay:r("openDelay")}}const g=Symbol.for("vuetify:v-menu");var v=n(131),y=n(7514),b=n(4870);const w=(0,h.U)({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...p()},"v-overlay-activator");function _(e,t){let{isActive:n,isTop:i}=t;const s=(0,b.iH)();let o=!1,a=!1,u=!0;const l=(0,r.Fl)((()=>e.openOnFocus||null==e.openOnFocus&&e.openOnHover)),c=(0,r.Fl)((()=>e.openOnClick||null==e.openOnClick&&!e.openOnHover&&!l.value)),{runOpenDelay:d,runCloseDelay:h}=m(e,(t=>{t!==(e.openOnHover&&o||l.value&&a)||e.openOnHover&&n.value&&!i.value||(n.value!==t&&(u=!0),n.value=t)})),p={click:e=>{e.stopPropagation(),s.value=e.currentTarget||e.target,n.value=!n.value},mouseenter:e=>{o=!0,s.value=e.currentTarget||e.target,d()},mouseleave:e=>{o=!1,h()},focus:e=>{f.Z1&&!e.target.matches(":focus-visible")||(a=!0,e.stopPropagation(),s.value=e.currentTarget||e.target,d())},blur:e=>{a=!1,e.stopPropagation(),h()}},w=(0,r.Fl)((()=>{const t={};return c.value&&(t.click=p.click),e.openOnHover&&(t.mouseenter=p.mouseenter,t.mouseleave=p.mouseleave),l.value&&(t.focus=p.focus,t.blur=p.blur),t})),_=(0,r.Fl)((()=>{const t={};if(e.openOnHover&&(t.mouseenter=()=>{o=!0,d()},t.mouseleave=()=>{o=!1,h()}),e.closeOnContentClick){const e=(0,r.f3)(g,null);t.click=()=>{n.value=!1,null==e||e.closeParents()}}return t})),S=(0,r.Fl)((()=>{const t={};return e.openOnHover&&(t.mouseenter=()=>{u&&(o=!0,u=!1,d())},t.mouseleave=()=>{o=!1,h()}),t}));(0,r.YP)(i,(t=>{!t||(!e.openOnHover||o||l.value&&a)&&(!l.value||a||e.openOnHover&&o)||(n.value=!1)}));const E=(0,b.iH)();(0,r.m0)((()=>{E.value&&(0,r.Y3)((()=>{const e=E.value;s.value=(0,v.rU)(e)?e.$el:e}))}));const T=(0,y.FN)("useActivator");let k;return(0,r.YP)((()=>!!e.activator),(t=>{t&&f.BR?(k=(0,b.B)(),k.run((()=>{I(e,T,{activatorEl:s,activatorEvents:w})}))):k&&k.stop()}),{flush:"post",immediate:!0}),(0,b.EB)((()=>{var e;null==(e=k)||e.stop()})),{activatorEl:s,activatorRef:E,activatorEvents:w,contentEvents:_,scrimEvents:S}}function I(e,t,n){let{activatorEl:i,activatorEvents:s}=n;function o(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u(),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.activatorProps;t&&(Object.entries(s.value).forEach((e=>{let[n,r]=e;t.addEventListener(n,r)})),Object.keys(n).forEach((e=>{null==n[e]?t.removeAttribute(e):t.setAttribute(e,n[e])})))}function a(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u(),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.activatorProps;t&&(Object.entries(s.value).forEach((e=>{let[n,r]=e;t.removeEventListener(n,r)})),Object.keys(n).forEach((e=>{t.removeAttribute(e)})))}function u(){var n;let r,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.activator;if(s)if("parent"===s){var o,a;let e=null==t||null==(o=t.proxy)||null==(a=o.$el)?void 0:a.parentNode;while(e.hasAttribute("data-no-activator"))e=e.parentNode;r=e}else r="string"===typeof s?document.querySelector(s):"$el"in s?s.$el:s;return i.value=(null==(n=r)?void 0:n.nodeType)===Node.ELEMENT_NODE?r:null,i.value}(0,r.YP)((()=>e.activator),((e,t)=>{if(t&&e!==t){const e=u(t);e&&a(e)}e&&(0,r.Y3)((()=>o()))}),{immediate:!0}),(0,r.YP)((()=>e.activatorProps),(()=>{o()})),(0,b.EB)((()=>{a()}))}var S=n(4544);const E=(0,h.U)({eager:Boolean},"lazy");function T(e,t){const n=(0,b.iH)(!1),i=(0,r.Fl)((()=>n.value||e.eager||t.value));function s(){e.eager||(n.value=!1)}return(0,r.YP)(t,(()=>n.value=!0)),{isBooted:n,hasContent:i,onAfterLeave:s}}n(7658);function k(e){while(e){if("fixed"===window.getComputedStyle(e).position)return!0;e=e.offsetParent}return!1}var x=n(2879);function C(e){while(e){if(N(e))return e;e=e.parentElement}return document.scrollingElement}function A(e,t){const n=[];if(t&&e&&!t.contains(e))return n;while(e){if(N(e)&&n.push(e),e===t)break;e=e.parentElement}return n}function N(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return"scroll"===t.overflowY||"auto"===t.overflowY&&e.scrollHeight>e.clientHeight}var D=n(6033),O=n(6309);function R(e,t){return{x:e.x+t.x,y:e.y+t.y}}function P(e,t){return{x:e.x-t.x,y:e.y-t.y}}function L(e,t){if("top"===e.side||"bottom"===e.side){const{side:n,align:r}=e,i="left"===r?0:"center"===r?t.width/2:"right"===r?t.width:r,s="top"===n?0:"bottom"===n?t.height:n;return R({x:i,y:s},t)}if("left"===e.side||"right"===e.side){const{side:n,align:r}=e,i="left"===n?0:"right"===n?t.width:n,s="top"===r?0:"center"===r?t.height/2:"bottom"===r?t.height:r;return R({x:i,y:s},t)}return R({x:t.width/2,y:t.height/2},t)}const F={static:V,connected:j},M=(0,h.U)({locationStrategy:{type:[String,Function],default:"static",validator:e=>"function"===typeof e||e in F},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function U(e,t){const n=(0,b.iH)({}),i=(0,b.iH)();let s;function o(e){var t;null==(t=i.value)||t.call(i,e)}return(0,r.m0)((async()=>{var o;null==(o=s)||o.stop(),i.value=void 0,f.BR&&t.isActive.value&&e.locationStrategy&&(s=(0,b.B)(),"connected"!==e.locationStrategy&&await(0,r.Y3)(),s.run((()=>{var r,s;"function"===typeof e.locationStrategy?i.value=null==(r=e.locationStrategy(t,e,n))?void 0:r.updateLocation:i.value=null==(s=F[e.locationStrategy](t,e,n))?void 0:s.updateLocation})))})),f.BR&&window.addEventListener("resize",o,{passive:!0}),(0,b.EB)((()=>{var e;f.BR&&window.removeEventListener("resize",o),i.value=void 0,null==(e=s)||e.stop()})),{contentStyles:n,updateLocation:i}}function V(){}function B(e){const t=(0,o.G)(e);return t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function j(e,t,n){const i=k(e.activatorEl.value);i&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:s,preferredOrigin:o}=(0,v.S3)((()=>{const n=(0,x.wW)(t.location,e.isRtl.value),r="overlap"===t.origin?n:"auto"===t.origin?(0,x.tb)(n):(0,x.wW)(t.origin,e.isRtl.value);return n.side===r.side&&n.align===(0,x.aw)(r).align?{preferredAnchor:(0,x.Oe)(n),preferredOrigin:(0,x.Oe)(r)}:{preferredAnchor:n,preferredOrigin:r}})),[a,u,l,c]=["minWidth","minHeight","maxWidth","maxHeight"].map((e=>(0,r.Fl)((()=>{const n=parseFloat(t[e]);return isNaN(n)?1/0:n})))),d=(0,r.Fl)((()=>{if(Array.isArray(t.offset))return t.offset;if("string"===typeof t.offset){const e=t.offset.split(" ").map(parseFloat);return e.length<2&&e.push(0),e}return"number"===typeof t.offset?[t.offset,0]:[0,0]}));let h=!1;const f=new ResizeObserver((()=>{h&&p()}));function p(){if(h=!1,requestAnimationFrame((()=>{requestAnimationFrame((()=>h=!0))})),!e.activatorEl.value||!e.contentEl.value)return;const t=e.activatorEl.value.getBoundingClientRect(),r=B(e.contentEl.value),i=A(e.contentEl.value),f=12;i.length||(i.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(r.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),r.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const p=i.reduce(((e,t)=>{const n=t.getBoundingClientRect(),r=new O.x({x:t===document.documentElement?0:n.x,y:t===document.documentElement?0:n.y,width:t.clientWidth,height:t.clientHeight});return e?new O.x({x:Math.max(e.left,r.left),y:Math.max(e.top,r.top),width:Math.min(e.right,r.right)-Math.max(e.left,r.left),height:Math.min(e.bottom,r.bottom)-Math.max(e.top,r.top)}):r}),void 0);p.x+=f,p.y+=f,p.width-=2*f,p.height-=2*f;let m={anchor:s.value,origin:o.value};function g(e){const n=new O.x(r),i=L(e.anchor,t),s=L(e.origin,n);let{x:o,y:a}=P(i,s);switch(e.anchor.side){case"top":a-=d.value[0];break;case"bottom":a+=d.value[0];break;case"left":o-=d.value[0];break;case"right":o+=d.value[0];break}switch(e.anchor.align){case"top":a-=d.value[1];break;case"bottom":a+=d.value[1];break;case"left":o-=d.value[1];break;case"right":o+=d.value[1];break}n.x+=o,n.y+=a,n.width=Math.min(n.width,l.value),n.height=Math.min(n.height,c.value);const u=(0,O.p)(n,p);return{overflows:u,x:o,y:a}}let y=0,b=0;const w={x:0,y:0},_={x:!1,y:!1};let I=-1;while(1){if(I++>10){(0,D.N6)("Infinite loop detected in connectedLocationStrategy");break}const{x:e,y:t,overflows:n}=g(m);y+=e,b+=t,r.x+=e,r.y+=t;{const e=(0,x.dd)(m.anchor),t=n.x.before||n.x.after,r=n.y.before||n.y.after;let i=!1;if(["x","y"].forEach((s=>{if("x"===s&&t&&!_.x||"y"===s&&r&&!_.y){const t={anchor:{...m.anchor},origin:{...m.origin}},r="x"===s?"y"===e?x.aw:x.tb:"y"===e?x.tb:x.aw;t.anchor=r(t.anchor),t.origin=r(t.origin);const{overflows:o}=g(t);(o[s].before<=n[s].before&&o[s].after<=n[s].after||o[s].before+o[s].after<(n[s].before+n[s].after)/2)&&(m=t,i=_[s]=!0)}})),i)continue}n.x.before&&(y+=n.x.before,r.x+=n.x.before),n.x.after&&(y-=n.x.after,r.x-=n.x.after),n.y.before&&(b+=n.y.before,r.y+=n.y.before),n.y.after&&(b-=n.y.after,r.y-=n.y.after);{const e=(0,O.p)(r,p);w.x=p.width-e.x.before-e.x.after,w.y=p.height-e.y.before-e.y.after,y+=e.x.before,r.x+=e.x.before,b+=e.y.before,r.y+=e.y.before}break}const S=(0,x.dd)(m.anchor);Object.assign(n.value,{"--v-overlay-anchor-origin":`${m.anchor.side} ${m.anchor.align}`,transformOrigin:`${m.origin.side} ${m.origin.align}`,top:(0,v.kb)($(b)),left:(0,v.kb)($(y)),minWidth:(0,v.kb)("y"===S?Math.min(a.value,t.width):a.value),maxWidth:(0,v.kb)(q((0,v.uZ)(w.x,a.value===1/0?0:a.value,l.value))),maxHeight:(0,v.kb)(q((0,v.uZ)(w.y,u.value===1/0?0:u.value,c.value)))})}return(0,r.YP)([e.activatorEl,e.contentEl],((e,t)=>{let[n,r]=e,[i,s]=t;i&&f.unobserve(i),n&&f.observe(n),s&&f.unobserve(s),r&&f.observe(r)}),{immediate:!0}),(0,b.EB)((()=>{f.disconnect()})),(0,r.YP)((()=>[s.value,o.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight]),(()=>p()),{immediate:!i}),i&&(0,r.Y3)((()=>p())),requestAnimationFrame((()=>{n.value.maxHeight&&p()})),{updateLocation:p}}function $(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function q(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let W=!0;const z=[];function H(e){!W||z.length?(z.push(e),K()):(W=!1,e(),K())}let G=-1;function K(){cancelAnimationFrame(G),G=requestAnimationFrame((()=>{const e=z.shift();e&&e(),z.length?K():W=!0}))}const Y={none:null,close:X,block:Z,reposition:ee},Q=(0,h.U)({scrollStrategy:{type:[String,Function],default:"block",validator:e=>"function"===typeof e||e in Y}},"v-overlay-scroll-strategies");function J(e,t){if(!f.BR)return;let n;(0,r.m0)((async()=>{var i;null==(i=n)||i.stop(),t.isActive.value&&e.scrollStrategy&&(n=(0,b.B)(),await(0,r.Y3)(),n.run((()=>{var n;"function"===typeof e.scrollStrategy?e.scrollStrategy(t,e):null==(n=Y[e.scrollStrategy])||n.call(Y,t,e)})))})),(0,b.EB)((()=>{var e;null==(e=n)||e.stop()}))}function X(e){function t(t){e.isActive.value=!1}te(e.activatorEl.value??e.contentEl.value,t)}function Z(e,t){var n;const r=null==(n=e.root.value)?void 0:n.offsetParent,i=[...new Set([...A(e.activatorEl.value,t.contained?r:void 0),...A(e.contentEl.value,t.contained?r:void 0)])].filter((e=>!e.classList.contains("v-overlay-scroll-blocked"))),s=window.innerWidth-document.documentElement.offsetWidth,o=(e=>N(e)&&e)(r||document.documentElement);o&&e.root.value.classList.add("v-overlay--scroll-blocked"),i.forEach(((e,t)=>{e.style.setProperty("--v-body-scroll-x",(0,v.kb)(-e.scrollLeft)),e.style.setProperty("--v-body-scroll-y",(0,v.kb)(-e.scrollTop)),e.style.setProperty("--v-scrollbar-offset",(0,v.kb)(s)),e.classList.add("v-overlay-scroll-blocked")})),(0,b.EB)((()=>{i.forEach(((e,t)=>{const n=parseFloat(e.style.getPropertyValue("--v-body-scroll-x")),r=parseFloat(e.style.getPropertyValue("--v-body-scroll-y"));e.style.removeProperty("--v-body-scroll-x"),e.style.removeProperty("--v-body-scroll-y"),e.style.removeProperty("--v-scrollbar-offset"),e.classList.remove("v-overlay-scroll-blocked"),e.scrollLeft=-n,e.scrollTop=-r})),o&&e.root.value.classList.remove("v-overlay--scroll-blocked")}))}function ee(e){let t=!1,n=-1;function r(n){H((()=>{var r,i;const s=performance.now();null==(r=(i=e.updateLocation).value)||r.call(i,n);const o=performance.now()-s;t=o/(1e3/60)>2}))}te(e.activatorEl.value??e.contentEl.value,(e=>{t?(cancelAnimationFrame(n),n=requestAnimationFrame((()=>{n=requestAnimationFrame((()=>{r(e)}))}))):r(e)}))}function te(e,t){const n=[document,...A(e)];n.forEach((e=>{e.addEventListener("scroll",t,{passive:!0})})),(0,b.EB)((()=>{n.forEach((e=>{e.removeEventListener("scroll",t)}))}))}var ne=n(7041),re=n(4906),ie=n(6183),se=n(2370),oe=n(8717),ae=n(8157);function ue(){if(!f.BR)return(0,b.iH)(!1);const{ssr:e}=(0,ae.AW)();if(e){const e=(0,b.iH)(!1);return(0,r.bv)((()=>{e.value=!0})),e}return(0,b.iH)(!0)}var le=n(1629);function ce(){const e=(0,y.FN)("useScopeId"),t=e.vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}var de=n(4770);const he=Symbol.for("vuetify:stack"),fe=(0,b.qj)([]);function pe(e,t,n){const i=(0,y.FN)("useStack"),s=!n,o=(0,r.f3)(he,void 0),a=(0,b.qj)({activeChildren:new Set});(0,r.JJ)(he,a);const u=(0,b.iH)(+t.value);(0,de.U)(e,(()=>{var e;const n=null==(e=fe.at(-1))?void 0:e[1];u.value=n?n+10:+t.value,s&&fe.push([i.uid,u.value]),null==o||o.activeChildren.add(i.uid),(0,b.EB)((()=>{if(s){const e=fe.findIndex((e=>e[0]===i.uid));fe.splice(e,1)}null==o||o.activeChildren.delete(i.uid)}))}));const l=(0,b.iH)(!0);s&&(0,r.m0)((()=>{var e;const t=(null==(e=fe.at(-1))?void 0:e[0])===i.uid;setTimeout((()=>l.value=t))}));const c=(0,r.Fl)((()=>!a.activeChildren.size));return{globalTop:(0,b.OT)(l),localTop:c,stackStyles:(0,r.Fl)((()=>({zIndex:u.value})))}}function me(e){const t=(0,r.Fl)((()=>{const t=e.value;if(!0===t||!f.BR)return;const n=!1===t?document.body:"string"===typeof t?document.querySelector(t):t;if(null!=n){if(!me.cache.has(n)){const e=document.createElement("div");e.className="v-overlay-container",n.appendChild(e),me.cache.set(n,e)}return me.cache.get(n)}(0,r.ZK)(`Unable to locate target ${t}`)}));return{teleportTarget:t}}function ge(e){if("function"!==typeof e.getRootNode){while(e.parentNode)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function ve(){return!0}function ye(e,t,n){if(!e||!1===be(e,n))return!1;const r=ge(t);if("undefined"!==typeof ShadowRoot&&r instanceof ShadowRoot&&r.host===e.target)return!1;const i=("object"===typeof n.value&&n.value.include||(()=>[]))();return i.push(t),!i.some((t=>null==t?void 0:t.contains(e.target)))}function be(e,t){const n="object"===typeof t.value&&t.value.closeConditional||ve;return n(e)}function we(e,t,n){const r="function"===typeof n.value?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&ye(e,t,n)&&setTimeout((()=>{be(e,n)&&r&&r(e)}),0)}function _e(e,t){const n=ge(e);t(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&t(n)}me.cache=new WeakMap;const Ie={mounted(e,t){const n=n=>we(n,e,t),r=n=>{e._clickOutside.lastMousedownWasOutside=ye(n,e,t)};_e(e,(e=>{e.addEventListener("click",n,!0),e.addEventListener("mousedown",r,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:r}},unmounted(e,t){e._clickOutside&&(_e(e,(n=>{var r;if(!n||null==(r=e._clickOutside)||!r[t.instance.$.uid])return;const{onClick:i,onMousedown:s}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",i,!0),n.removeEventListener("mousedown",s,!0)})),delete e._clickOutside[t.instance.$.uid])}};var Se=n(9888);function Ee(e){const{modelValue:t,color:n,...s}=e;return(0,r.Wm)(i.uT,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&(0,r.Wm)("div",(0,r.dG)({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},s),null)]})}const Te=(0,h.U)({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...w(),...(0,S.x)(),...E(),...M(),...Q(),...(0,ne.x$)(),...(0,re.X)()},"v-overlay"),ke=(0,s.e)()({name:"VOverlay",directives:{ClickOutside:Ie},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Te()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:s,emit:u}=t;const l=(0,oe.z)(e,"modelValue"),c=(0,r.Fl)({get:()=>l.value,set:t=>{t&&e.disabled||(l.value=t)}}),{teleportTarget:d}=me((0,r.Fl)((()=>e.attach||e.contained))),{themeClasses:h}=(0,ne.ER)(e),{rtlClasses:p,isRtl:m}=(0,le.Vw)(),{hasContent:g,onAfterLeave:y}=T(e,c),w=(0,se.Y5)((0,r.Fl)((()=>"string"===typeof e.scrim?e.scrim:null))),{globalTop:I,localTop:E,stackStyles:k}=pe(c,(0,b.Vh)(e,"zIndex"),e._disableGlobalStack),{activatorEl:x,activatorRef:A,activatorEvents:N,contentEvents:D,scrimEvents:O}=_(e,{isActive:c,isTop:E}),{dimensionStyles:R}=(0,S.$)(e),P=ue(),{scopeId:L}=ce();(0,r.YP)((()=>e.disabled),(e=>{e&&(c.value=!1)}));const F=(0,b.iH)(),M=(0,b.iH)(),{contentStyles:V,updateLocation:B}=U(e,{isRtl:m,contentEl:M,activatorEl:x,isActive:c});function j(t){u("click:outside",t),e.persistent?H():c.value=!1}function $(){return c.value&&I.value}function q(t){"Escape"===t.key&&I.value&&(e.persistent?H():c.value=!1)}J(e,{root:F,contentEl:M,activatorEl:x,isActive:c,updateLocation:B}),f.BR&&(0,r.YP)(c,(e=>{e?window.addEventListener("keydown",q):window.removeEventListener("keydown",q)}),{immediate:!0});const W=(0,ie.tv)();(0,de.U)((()=>e.closeOnBack),(()=>{(0,ie.Kx)(W,(t=>{I.value&&c.value?(t(!1),e.persistent?H():c.value=!1):t()}))}));const z=(0,b.iH)();function H(){e.noClickAnimation||M.value&&(0,o.j)(M.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:a.Ly})}return(0,r.YP)((()=>c.value&&(e.absolute||e.contained)&&null==d.value),(e=>{if(e){const e=C(F.value);e&&e!==document.scrollingElement&&(z.value=e.scrollTop)}})),(0,Se.L)((()=>{var t,o;return(0,r.Wm)(r.HY,null,[null==(t=n.activator)?void 0:t.call(n,{isActive:c.value,props:(0,r.dG)({ref:A},(0,r.mx)(N.value),e.activatorProps)}),P.value&&(0,r.Wm)(r.lR,{disabled:!d.value,to:d.value},{default:()=>[g.value&&(0,r.Wm)("div",(0,r.dG)({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":c.value,"v-overlay--contained":e.contained},h.value,p.value],style:[k.value,{top:(0,v.kb)(z.value)}],ref:F},L,s),[(0,r.Wm)(Ee,(0,r.dG)({color:w,modelValue:c.value&&!!e.scrim},(0,r.mx)(O.value)),null),(0,r.Wm)(re.J,{appear:!0,persisted:!0,transition:e.transition,target:x.value,onAfterLeave:()=>{y(),u("afterLeave")}},{default:()=>[(0,r.wy)((0,r.Wm)("div",(0,r.dG)({ref:M,class:["v-overlay__content",e.contentClass],style:[R.value,V.value]},(0,r.mx)(D.value),e.contentProps),[null==(o=n.default)?void 0:o.call(n,{isActive:c})]),[[i.F8,c.value],[(0,r.Q2)("click-outside"),{handler:j,closeConditional:$,include:()=>[x.value]}]])]})])]})])})),{activatorEl:x,animateClick:H,contentEl:M,globalTop:I,localTop:E,updateLocation:B}}});function xe(e){return(0,v.ei)(e,Object.keys(ke.props))}var Ce=n(3185);const Ae=(0,s.e)()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Te({origin:"center center",scrollStrategy:"block",transition:{component:u},zIndex:2400})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const i=(0,oe.z)(e,"modelValue"),{scopeId:s}=ce(),o=(0,b.iH)();function a(e){var t,n;const r=e.relatedTarget,i=e.target;if(r!==i&&null!=(t=o.value)&&t.contentEl&&null!=(n=o.value)&&n.globalTop&&![document,o.value.contentEl].includes(i)&&!o.value.contentEl.contains(i)){const e=[...o.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter((e=>!e.hasAttribute("disabled")&&!e.matches('[tabindex="-1"]')));if(!e.length)return;const t=e[0],n=e[e.length-1];r===t?n.focus():t.focus()}}return f.BR&&(0,r.YP)((()=>i.value&&e.retainFocus),(e=>{e?document.addEventListener("focusin",a):document.removeEventListener("focusin",a)}),{immediate:!0}),(0,r.YP)(i,(async e=>{var t,n;(await(0,r.Y3)(),e)?null==(t=o.value.contentEl)||t.focus({preventScroll:!0}):null==(n=o.value.activatorEl)||n.focus({preventScroll:!0})})),(0,Se.L)((()=>{const[t]=xe(e);return(0,r.Wm)(ke,(0,r.dG)({ref:o,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable}]},t,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,"aria-role":"dialog","aria-modal":"true",activatorProps:(0,r.dG)({"aria-haspopup":"dialog","aria-expanded":String(i.value)},e.activatorProps)},s),{activator:n.activator,default:function(){for(var e,t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return(0,r.Wm)(d.z,{root:!0},{default:()=>[null==(e=n.default)?void 0:e.call(n,...i)]})}})})),(0,Ce.F)({},o)}})},9234:function(e,t,n){"use strict";n.d(t,{C:function(){return i}});var r=n(1114);const i=(0,r.J)("flex-grow-1","div","VSpacer")},3289:function(e,t,n){"use strict";n.d(t,{t:function(){return m}});var r=n(3396),i=n(4960),s=n(9374),o=n(1138),a=n(7041),u=n(2370),l=n(4870),c=n(3766),d=n(320),h=n(131),f=n(9888);const p=(0,c.U)({color:String,start:Boolean,end:Boolean,icon:i.lE,...(0,s.Z)(),...(0,o.Q)({tag:"i"}),...(0,a.x$)()},"v-icon"),m=(0,d.a)({name:"VIcon",props:p(),setup(e,t){let n,{attrs:o,slots:c}=t;c.default&&(n=(0,r.Fl)((()=>{var e,t;const n=null==(e=c.default)?void 0:e.call(c);if(n)return null==(t=(0,h.RA)(n).filter((e=>e.children&&"string"===typeof e.children))[0])?void 0:t.children})));const{themeClasses:d}=(0,a.ER)(e),{iconData:p}=(0,i.bi)(n||e),{sizeClasses:m}=(0,s.t)(e),{textColorClasses:g,textColorStyles:v}=(0,u.rY)((0,l.Vh)(e,"color"));return(0,f.L)((()=>(0,r.Wm)(p.value.component,{tag:e.tag,icon:p.value.icon,class:["v-icon","notranslate",d.value,m.value,g.value,{"v-icon--clickable":!!o.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[m.value?void 0:{fontSize:(0,h.kb)(e.size),height:(0,h.kb)(e.size),width:(0,h.kb)(e.size)},v.value],role:o.onClick?"button":void 0,"aria-hidden":!o.onClick},null))),{}}})},4413:function(e,t,n){"use strict";n.d(t,{Y:function(){return c}});var r=n(3396),i=n(9694),s=n(1138),o=n(7041),a=n(320),u=n(9888),l=n(131);const c=(0,a.a)({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...(0,i.f)(),...(0,s.Q)(),...(0,o.x$)()},setup(e,t){let{slots:n}=t;const{themeClasses:s}=(0,o.ER)(e),{densityClasses:a}=(0,i.t)(e);return(0,u.L)((()=>{var t,i;return(0,r.Wm)(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!n.top,"v-table--has-bottom":!!n.bottom,"v-table--hover":e.hover},s.value,a.value]},{default:()=>[null==(t=n.top)?void 0:t.call(n),n.default&&(0,r.Wm)("div",{class:"v-table__wrapper",style:{height:(0,l.kb)(e.height)}},[(0,r.Wm)("table",null,[n.default()])]),null==(i=n.bottom)?void 0:i.call(n)]})})),{}}})},3906:function(e,t,n){"use strict";n.d(t,{hw:function(){return J}});var r=n(3396),i=n(9242),s=n(320);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return(0,s.a)({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:t}},setup(t,n){let{slots:s}=n;return()=>{const n=t.group?i.W3:i.uT;return(0,r.h)(n,{name:e,mode:t.mode,onBeforeEnter(e){e.style.transformOrigin=t.origin},onLeave(e){if(t.leaveAbsolute){const{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${t}px`,e.style.left=`${n}px`,e.style.width=`${r}px`,e.style.height=`${i}px`}t.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(t.leaveAbsolute&&null!=e&&e._transitionInitialStyles){const{position:t,top:n,left:r,width:i,height:s}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=n||"",e.style.left=r||"",e.style.width=i||"",e.style.height=s||""}}},s.default)}}})}function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return(0,s.a)({name:e,props:{mode:{type:String,default:n}},setup(n,s){let{slots:o}=s;return()=>(0,r.h)(i.uT,{name:e,...t},o.default)}})}var u=n(7139);function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=t?"width":"height",r=(0,u._A)(`offset-${n}`);return{onBeforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[n]:e.style[n]}},onEnter(t){const i=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const s=`${t[r]}px`;t.style[n]="0",t.offsetHeight,t.style.transition=i.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[n]=s}))},onAfterEnter:s,onEnterCancelled:s,onLeave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[n]:e.style[n]},e.style.overflow="hidden",e.style[n]=`${e[r]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[n]="0"))},onAfterLeave:i,onLeaveCancelled:i};function i(t){e&&t._parent&&t._parent.classList.remove(e),s(t)}function s(e){const t=e._initialStyle[n];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[n]=t),delete e._initialStyle}}o("fab-transition","center center","out-in"),o("dialog-bottom-transition"),o("dialog-top-transition"),o("fade-transition"),o("scale-transition"),o("scroll-x-transition"),o("scroll-x-reverse-transition"),o("scroll-y-transition"),o("scroll-y-reverse-transition"),o("slide-x-transition"),o("slide-x-reverse-transition");const c=o("slide-y-transition"),d=(o("slide-y-reverse-transition"),a("expand-transition",l()),a("expand-x-transition",l("",!0)));var h=n(3289),f=n(1629);function p(e){const{t:t}=(0,f.bU)();function n(n){let{name:i}=n;const s={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[i],o=e[`onClick:${i}`],a=o&&s?t(`$vuetify.input.${s}`,e.label??""):void 0;return(0,r.Wm)(h.t,{icon:e[`${i}Icon`],"aria-label":a,onClick:o},null)}return{InputIcon:n}}var m=n(7041),g=n(9888);const v=(0,s.a)({name:"VLabel",props:{text:String,clickable:Boolean,...(0,m.x$)()},setup(e,t){let{slots:n}=t;return(0,g.L)((()=>{var t;return(0,r.Wm)("label",{class:["v-label",{"v-label--clickable":e.clickable}]},[e.text,null==(t=n.default)?void 0:t.call(n)])})),{}}}),y=(0,s.a)({name:"VFieldLabel",props:{floating:Boolean},setup(e,t){let{slots:n}=t;return(0,g.L)((()=>(0,r.Wm)(v,{class:["v-field-label",{"v-field-label--floating":e.floating}],"aria-hidden":e.floating||void 0},n))),{}}});var b=n(4960),w=n(6791),_=n(8717),I=n(3766),S=n(7514);const E=(0,I.U)({focused:Boolean},"focus");function T(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,S.BL)();const n=(0,_.z)(e,"focused"),i=(0,r.Fl)((()=>({[`${t}--focused`]:n.value})));function s(){n.value=!0}function o(){n.value=!1}return{focusClasses:i,isFocused:n,focus:s,blur:o}}var k=n(2370),x=n(4870),C=n(131),A=n(3122),N=n(8587);const D=["underlined","outlined","filled","solo","plain"],O=(0,I.U)({appendInnerIcon:b.lE,bgColor:String,clearable:Boolean,clearIcon:{type:b.lE,default:"$clear"},active:Boolean,color:String,dirty:Boolean,disabled:Boolean,error:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:b.lE,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>D.includes(e)},"onClick:clear":C.as,"onClick:appendInner":C.as,"onClick:prependInner":C.as,...(0,m.x$)(),...(0,w.fF)()},"v-field"),R=(0,s.e)()({name:"VField",inheritAttrs:!1,props:{id:String,...E(),...O()},emits:{"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:s,slots:o}=t;const{themeClasses:a}=(0,m.ER)(e),{loaderClasses:u}=(0,w.U2)(e),{focusClasses:l,isFocused:c,focus:h,blur:f}=T(e),{InputIcon:v}=p(e),b=(0,r.Fl)((()=>e.dirty||e.active)),_=(0,r.Fl)((()=>!e.singleLine&&!(!e.label&&!o.label))),I=(0,S.sq)(),E=(0,r.Fl)((()=>e.id||`input-${I}`)),D=(0,x.iH)(),O=(0,x.iH)(),R=(0,x.iH)(),{backgroundColorClasses:P,backgroundColorStyles:L}=(0,k.Y5)((0,x.Vh)(e,"bgColor")),{textColorClasses:F,textColorStyles:M}=(0,k.rY)((0,r.Fl)((()=>b.value&&c.value&&!e.error&&!e.disabled?e.color:void 0)));(0,r.YP)(b,(e=>{if(_.value){const t=D.value.$el,n=O.value.$el,r=(0,A.G)(t),i=n.getBoundingClientRect(),s=i.x-r.x,o=i.y-r.y-(r.height/2-i.height/2),a=i.width/.75,u=Math.abs(a-r.width)>1?{maxWidth:(0,C.kb)(a)}:void 0,l=getComputedStyle(t),c=getComputedStyle(n),d=1e3*parseFloat(l.transitionDuration)||150,h=parseFloat(c.getPropertyValue("--v-field-label-scale")),f=c.getPropertyValue("color");t.style.visibility="visible",n.style.visibility="hidden",(0,A.j)(t,{transform:`translate(${s}px, ${o}px) scale(${h})`,color:f,...u},{duration:d,easing:N.Ly,direction:e?"normal":"reverse"}).finished.then((()=>{t.style.removeProperty("visibility"),n.style.removeProperty("visibility")}))}}),{flush:"post"});const U=(0,r.Fl)((()=>({isActive:b,isFocused:c,controlRef:R,blur:f,focus:h})));function V(e){e.target!==document.activeElement&&e.preventDefault(),s("click:control",e)}return(0,g.L)((()=>{var t,s,c;const p="outlined"===e.variant,m=o["prepend-inner"]||e.prependInnerIcon,g=!(!e.clearable&&!o.clear),I=!!(o["append-inner"]||e.appendInnerIcon||g),S=o.label?o.label({label:e.label,props:{for:E.value}}):e.label;return(0,r.Wm)("div",(0,r.dG)({class:["v-field",{"v-field--active":b.value,"v-field--appended":I,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":m,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!S,[`v-field--variant-${e.variant}`]:!0},a.value,P.value,l.value,u.value],style:[L.value,M.value],onClick:V},n),[(0,r.Wm)("div",{class:"v-field__overlay"},null),(0,r.Wm)(w.rD,{name:"v-field",active:!!e.loading,color:e.error?"error":e.color},{default:o.loader}),m&&(0,r.Wm)("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&(0,r.Wm)(v,{key:"prepend-icon",name:"prependInner"},null),null==(t=o["prepend-inner"])?void 0:t.call(o,U.value)]),(0,r.Wm)("div",{class:"v-field__field","data-no-activator":""},[["solo","filled"].includes(e.variant)&&_.value&&(0,r.Wm)(y,{key:"floating-label",ref:O,class:[F.value],floating:!0,for:E.value},{default:()=>[S]}),(0,r.Wm)(y,{ref:D,for:E.value},{default:()=>[S]}),null==(s=o.default)?void 0:s.call(o,{...U.value,props:{id:E.value,class:"v-field__input"},focus:h,blur:f})]),g&&(0,r.Wm)(d,{key:"clear"},{default:()=>[(0,r.wy)((0,r.Wm)("div",{class:"v-field__clearable"},[o.clear?o.clear():(0,r.Wm)(v,{name:"clear"},null)]),[[i.F8,e.dirty]])]}),I&&(0,r.Wm)("div",{key:"append",class:"v-field__append-inner"},[null==(c=o["append-inner"])?void 0:c.call(o,U.value),e.appendInnerIcon&&(0,r.Wm)(v,{key:"append-icon",name:"appendInner"},null)]),(0,r.Wm)("div",{class:["v-field__outline",F.value]},[p&&(0,r.Wm)(r.HY,null,[(0,r.Wm)("div",{class:"v-field__outline__start"},null),_.value&&(0,r.Wm)("div",{class:"v-field__outline__notch"},[(0,r.Wm)(y,{ref:O,floating:!0,for:E.value},{default:()=>[S]})]),(0,r.Wm)("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(e.variant)&&_.value&&(0,r.Wm)(y,{ref:O,floating:!0,for:E.value},{default:()=>[S]})])])})),{controlRef:R}}});function P(e){const t=Object.keys(R.props).filter((e=>!(0,C.F7)(e)));return(0,C.ei)(e,t)}var L=n(4906);const F=(0,s.a)({name:"VMessages",props:{active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...(0,L.X)({transition:{component:c,leaveAbsolute:!0,group:!0}})},setup(e,t){let{slots:n}=t;const i=(0,r.Fl)((()=>(0,C.FT)(e.messages))),{textColorClasses:s,textColorStyles:o}=(0,k.rY)((0,r.Fl)((()=>e.color)));return(0,g.L)((()=>(0,r.Wm)(L.J,{transition:e.transition,tag:"div",class:["v-messages",s.value],style:o.value},{default:()=>[e.active&&i.value.map(((e,t)=>(0,r.Wm)("div",{class:"v-messages__message",key:`${t}-${i.value}`},[n.message?n.message({message:e}):e])))]}))),{}}});var M=n(9694);n(7658);const U=Symbol.for("vuetify:form");(0,I.U)({disabled:Boolean,fastFail:Boolean,lazyValidation:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function V(){return(0,r.f3)(U,null)}var B=n(4770);const j=(0,I.U)({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...E()},"validation");function $(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,S.BL)(),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,S.sq)();const i=(0,_.z)(e,"modelValue"),s=(0,r.Fl)((()=>void 0===e.validationValue?i.value:e.validationValue)),o=V(),a=(0,x.iH)([]),u=(0,x.iH)(!0),l=(0,r.Fl)((()=>!(!(0,C.FT)(""===i.value?null:i.value).length&&!(0,C.FT)(""===s.value?null:s.value).length))),c=(0,r.Fl)((()=>!!(e.disabled||null!=o&&o.isDisabled.value))),d=(0,r.Fl)((()=>!!(e.readonly||null!=o&&o.isReadonly.value))),h=(0,r.Fl)((()=>e.errorMessages.length?(0,C.FT)(e.errorMessages).slice(0,Math.max(0,+e.maxErrors)):a.value)),f=(0,r.Fl)((()=>!e.error&&!h.value.length&&(!e.rules.length||(!u.value||null)))),p=(0,x.iH)(!1),m=(0,r.Fl)((()=>({[`${t}--error`]:!1===f.value,[`${t}--dirty`]:l.value,[`${t}--disabled`]:c.value,[`${t}--readonly`]:d.value}))),g=(0,r.Fl)((()=>e.name??(0,x.SU)(n)));(0,r.wF)((()=>{null==o||o.register({id:g.value,validate:w,reset:y,resetValidation:b})})),(0,r.Jd)((()=>{null==o||o.unregister(g.value)}));const v=(0,r.Fl)((()=>e.validateOn||(null==o?void 0:o.validateOn.value)||"input"));function y(){b(),i.value=null}function b(){u.value=!0,a.value=[]}async function w(){const t=[];p.value=!0;for(const n of e.rules){if(t.length>=(e.maxErrors??1))break;const r="function"===typeof n?n:()=>n,i=await r(s.value);!0!==i&&("string"===typeof i?t.push(i):console.warn(`${i} is not a valid value. Rule functions must return boolean true or a string.`))}return a.value=t,p.value=!1,u.value=!1,a.value}return(0,r.bv)((()=>null==o?void 0:o.update(g.value,f.value,h.value))),(0,B.U)((()=>"input"===v.value),(()=>{(0,r.YP)(s,(()=>{if(null!=s.value)w();else if(e.focused){const t=(0,r.YP)((()=>e.focused),(e=>{e||w(),t()}))}}))})),(0,B.U)((()=>"blur"===v.value),(()=>{(0,r.YP)((()=>e.focused),(e=>{e||w()}))})),(0,r.YP)(f,(()=>{null==o||o.update(g.value,f.value,h.value)})),{errorMessages:h,isDirty:l,isDisabled:c,isReadonly:d,isPristine:u,isValid:f,isValidating:p,reset:y,resetValidation:b,validate:w,validationClasses:m}}const q=(0,I.U)({id:String,appendIcon:b.lE,prependIcon:b.lE,hideDetails:[Boolean,String],messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":C.as,"onClick:append":C.as,...(0,M.f)(),...j()},"v-input"),W=(0,s.e)()({name:"VInput",props:{...q()},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:i,emit:s}=t;const{densityClasses:o}=(0,M.t)(e),{InputIcon:a}=p(e),u=(0,S.sq)(),l=(0,r.Fl)((()=>e.id||`input-${u}`)),{errorMessages:c,isDirty:d,isDisabled:h,isReadonly:f,isPristine:m,isValid:v,isValidating:y,reset:b,resetValidation:w,validate:_,validationClasses:I}=$(e,"v-input",l),E=(0,r.Fl)((()=>({id:l,isDirty:d,isDisabled:h,isReadonly:f,isPristine:m,isValid:v,isValidating:y,reset:b,resetValidation:w,validate:_})));return(0,g.L)((()=>{var t,n,s,u,l;const d=!(!i.prepend&&!e.prependIcon),h=!(!i.append&&!e.appendIcon),f=!!(null!=(t=e.messages)&&t.length||c.value.length),p=!e.hideDetails||"auto"===e.hideDetails&&(f||!!i.details);return(0,r.Wm)("div",{class:["v-input",`v-input--${e.direction}`,o.value,I.value]},[d&&(0,r.Wm)("div",{key:"prepend",class:"v-input__prepend"},[null==(n=i.prepend)?void 0:n.call(i,E.value),e.prependIcon&&(0,r.Wm)(a,{key:"prepend-icon",name:"prepend"},null)]),i.default&&(0,r.Wm)("div",{class:"v-input__control"},[null==(s=i.default)?void 0:s.call(i,E.value)]),h&&(0,r.Wm)("div",{key:"append",class:"v-input__append"},[e.appendIcon&&(0,r.Wm)(a,{key:"append-icon",name:"append"},null),null==(u=i.append)?void 0:u.call(i,E.value)]),p&&(0,r.Wm)("div",{class:"v-input__details"},[(0,r.Wm)(F,{active:f,messages:c.value.length>0?c.value:e.messages},{message:i.message}),null==(l=i.details)?void 0:l.call(i,E.value)])])})),{reset:b,resetValidation:w,validate:_}}});function z(e){const t=Object.keys(W.props).filter((e=>!(0,C.F7)(e)));return(0,C.ei)(e,t)}const H=(0,s.a)({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...(0,L.X)({transition:{component:c}})},setup(e,t){let{slots:n}=t;const s=(0,r.Fl)((()=>e.max?`${e.value} / ${e.max}`:String(e.value)));return(0,g.L)((()=>(0,r.Wm)(L.J,{transition:e.transition},{default:()=>[(0,r.wy)((0,r.Wm)("div",{class:"v-counter"},[n.default?n.default({counter:s.value,max:e.max,value:e.value}):s.value]),[[i.F8,e.active]])]}))),{}}});var G=n(7052),K=n(3185);const Y=["color","file","time","date","datetime-local","week","month"],Q=(0,I.U)({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...q(),...O()},"v-text-field"),J=(0,s.e)()({name:"VTextField",directives:{Intersect:G.Z},inheritAttrs:!1,props:Q(),emits:{"click:control":e=>!0,"click:input":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:i,slots:s}=t;const o=(0,_.z)(e,"modelValue"),{isFocused:a,focus:u,blur:l}=T(e),c=(0,r.Fl)((()=>"function"===typeof e.counterValue?e.counterValue(o.value):(o.value??"").toString().length)),d=(0,r.Fl)((()=>n.maxlength?n.maxlength:!e.counter||"number"!==typeof e.counter&&"string"!==typeof e.counter?void 0:e.counter));function h(t,n){var r,i;e.autofocus&&t&&(null==(r=n[0].target)||null==(i=r.focus)||i.call(r))}const f=(0,x.iH)(),p=(0,x.iH)(),m=(0,x.iH)(),v=(0,r.Fl)((()=>Y.includes(e.type)||e.persistentPlaceholder||a.value)),y=(0,r.Fl)((()=>e.messages.length?e.messages:a.value||e.persistentHint?e.hint:""));function b(){var e;m.value!==document.activeElement&&(null==(e=m.value)||e.focus());a.value||u()}function w(e){b(),i("click:control",e)}function I(t){t.stopPropagation(),b(),(0,r.Y3)((()=>{o.value=null,(0,C.dr)(e["onClick:clear"],t)}))}function S(e){o.value=e.target.value}return(0,g.L)((()=>{const t=!!(s.counter||e.counter||e.counterValue),u=!(!t&&!s.details),[g,_]=(0,C.An)(n),[{modelValue:E,...T}]=z(e),[k]=P(e);return(0,r.Wm)(W,(0,r.dG)({ref:f,modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},g,T,{focused:a.value,messages:y.value}),{...s,default:t=>{let{id:n,isDisabled:u,isDirty:c,isReadonly:d,isValid:f}=t;return(0,r.Wm)(R,(0,r.dG)({ref:p,onMousedown:e=>{e.target!==m.value&&e.preventDefault()},"onClick:control":w,"onClick:clear":I,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},k,{id:n.value,active:v.value||c.value,dirty:c.value||e.dirty,focused:a.value,error:!1===f.value}),{...s,default:t=>{let{props:{class:n,...a}}=t;const c=(0,r.wy)((0,r.Wm)("input",(0,r.dG)({ref:m,value:o.value,onInput:S,autofocus:e.autofocus,readonly:d.value,disabled:u.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:b,onBlur:l},a,_),null),[[(0,r.Q2)("intersect"),{handler:h},null,{once:!0}]]);return(0,r.Wm)(r.HY,null,[e.prefix&&(0,r.Wm)("span",{class:"v-text-field__prefix"},[e.prefix]),s.default?(0,r.Wm)("div",{class:n,onClick:e=>i("click:input",e),"data-no-activator":""},[s.default(),c]):(0,r.Ho)(c,{class:n}),e.suffix&&(0,r.Wm)("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:u?n=>{var i;return(0,r.Wm)(r.HY,null,[null==(i=s.details)?void 0:i.call(s,n),t&&(0,r.Wm)(r.HY,null,[(0,r.Wm)("span",null,null),(0,r.Wm)(H,{active:e.persistentCounter||a.value,value:c.value,max:d.value},s.counter)])])}:void 0})})),(0,K.F)({},f,p,m)}})},2718:function(e,t,n){"use strict";n.d(t,{P:function(){return u},m:function(){return a}});n(7658);var r=n(3396),i=n(4870),s=n(3766),o=n(7514);const a=(0,s.U)({border:[Boolean,Number,String]},"border");function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.BL)();const n=(0,r.Fl)((()=>{const n=(0,i.dq)(e)?e.value:e.border,r=[];if(!0===n||""===n)r.push(`${t}--border`);else if("string"===typeof n||0===n)for(const e of String(n).split(" "))r.push(`border-${e}`);return r}));return{borderClasses:n}}},2370:function(e,t,n){"use strict";n.d(t,{Y5:function(){return l},rY:function(){return u},rd:function(){return a}});n(7658);var r=n(3396),i=n(4870),s=n(131),o=n(661);function a(e){return(0,s.S3)((()=>{const t=[],n={};return e.value.background&&((0,o.NA)(e.value.background)?n.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&((0,o.NA)(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}}))}function u(e,t){const n=(0,r.Fl)((()=>({text:(0,i.dq)(e)?e.value:t?e[t]:null}))),{colorClasses:s,colorStyles:o}=a(n);return{textColorClasses:s,textColorStyles:o}}function l(e,t){const n=(0,r.Fl)((()=>({background:(0,i.dq)(e)?e.value:t?e[t]:null}))),{colorClasses:s,colorStyles:o}=a(n);return{backgroundColorClasses:s,backgroundColorStyles:o}}},8434:function(e,t,n){"use strict";n.d(t,{AF:function(){return l},qy:function(){return u},tI:function(){return o},yB:function(){return a}});var r=n(4870),i=n(3396),s=n(131);const o=Symbol.for("vuetify:defaults");function a(e){return(0,r.iH)(e??{})}function u(){const e=(0,i.f3)(o);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function l(e,t){const n=u(),a=(0,r.iH)(e),l=(0,i.Fl)((()=>{const e=(0,r.SU)(null==t?void 0:t.scoped),i=(0,r.SU)(null==t?void 0:t.reset),o=(0,r.SU)(null==t?void 0:t.root);let u=(0,s.Ee)(a.value,{prev:n.value});if(e)return u;if(i||o){const e=Number(i||1/0);for(let t=0;t<=e;t++){if(!u.prev)break;u=u.prev}return u}return(0,s.Ee)(u.prev,u)}));return(0,i.JJ)(o,l),l}},9694:function(e,t,n){"use strict";n.d(t,{f:function(){return a},t:function(){return u}});var r=n(3396),i=n(3766),s=n(7514);const o=[null,"default","comfortable","compact"],a=(0,i.U)({density:{type:String,default:"default",validator:e=>o.includes(e)}},"density");function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,s.BL)();const n=(0,r.Fl)((()=>`${t}--density-${e.density}`));return{densityClasses:n}}},4544:function(e,t,n){"use strict";n.d(t,{$:function(){return a},x:function(){return o}});var r=n(3396),i=n(3766),s=n(131);const o=(0,i.U)({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function a(e){const t=(0,r.Fl)((()=>({height:(0,s.kb)(e.height),maxHeight:(0,s.kb)(e.maxHeight),maxWidth:(0,s.kb)(e.maxWidth),minHeight:(0,s.kb)(e.minHeight),minWidth:(0,s.kb)(e.minWidth),width:(0,s.kb)(e.width)})));return{dimensionStyles:t}}},8157:function(e,t,n){"use strict";n.d(t,{AW:function(){return p},fT:function(){return f},x6:function(){return a}});var r=n(4870),i=n(3396),s=n(131),o=n(2385);const a=Symbol.for("vuetify:display"),u={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;return(0,s.Ee)(u,e)};function c(e){return o.BR&&!e?window.innerWidth:0}function d(e){return o.BR&&!e?window.innerHeight:0}function h(){const e=o.BR?window.navigator.userAgent:"ssr";function t(t){return Boolean(e.match(t))}const n=t(/android/i),r=t(/iphone|ipad|ipod/i),i=t(/cordova/i),s=t(/electron/i),a=t(/chrome/i),u=t(/edge/i),l=t(/firefox/i),c=t(/opera/i),d=t(/win/i),h=t(/mac/i),f=t(/linux/i),p=t(/ssr/i);return{android:n,ios:r,cordova:i,electron:s,chrome:a,edge:u,firefox:l,opera:c,win:d,mac:h,linux:f,touch:o.sR,ssr:p}}function f(e,t){const{thresholds:n,mobileBreakpoint:s}=l(e),a=(0,r.iH)(d(t)),u=h(),f=(0,r.qj)({}),p=(0,r.iH)(c(t));function m(){a.value=d(),p.value=c()}return(0,i.m0)((()=>{const e=p.value<n.sm,t=p.value<n.md&&!e,r=p.value<n.lg&&!(t||e),i=p.value<n.xl&&!(r||t||e),o=p.value<n.xxl&&!(i||r||t||e),l=p.value>=n.xxl,c=e?"xs":t?"sm":r?"md":i?"lg":o?"xl":"xxl",d="number"===typeof s?s:n[s],h=u.ssr?u.android||u.ios||u.opera:p.value<d;f.xs=e,f.sm=t,f.md=r,f.lg=i,f.xl=o,f.xxl=l,f.smAndUp=!e,f.mdAndUp=!(e||t),f.lgAndUp=!(e||t||r),f.xlAndUp=!(e||t||r||i),f.smAndDown=!(r||i||o||l),f.mdAndDown=!(i||o||l),f.lgAndDown=!(o||l),f.xlAndDown=!l,f.name=c,f.height=a.value,f.width=p.value,f.mobile=h,f.mobileBreakpoint=s,f.platform=u,f.thresholds=n})),o.BR&&window.addEventListener("resize",m,{passive:!0}),{...(0,r.BK)(f),update:m,ssr:!!t}}function p(){const e=(0,i.f3)(a);if(!e)throw new Error("Could not find Vuetify display injection");return e}},2465:function(e,t,n){"use strict";n.d(t,{Y:function(){return a},c:function(){return o}});n(7658);var r=n(3396),i=n(4870),s=n(3766);const o=(0,s.U)({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function a(e){const t=(0,r.Fl)((()=>{const t=(0,i.dq)(e)?e.value:e.elevation,n=[];return null==t||n.push(`elevation-${t}`),n}));return{elevationClasses:t}}},3185:function(e,t,n){"use strict";n.d(t,{F:function(){return i}});n(7658);const r=Symbol("Forwarded refs");function i(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return e[r]=n,new Proxy(e,{get(e,t){if(Reflect.has(e,t))return Reflect.get(e,t);for(const r of n)if(r.value&&Reflect.has(r.value,t)){const e=Reflect.get(r.value,t);return"function"===typeof e?e.bind(r.value):e}},getOwnPropertyDescriptor(e,t){const i=Reflect.getOwnPropertyDescriptor(e,t);if(i)return i;if("symbol"!==typeof t&&!t.startsWith("__")){for(const e of n){if(!e.value)continue;const n=Reflect.getOwnPropertyDescriptor(e.value,t);if(n)return n;if("_"in e.value&&"setupState"in e.value._){const n=Reflect.getOwnPropertyDescriptor(e.value._.setupState,t);if(n)return n}}for(const e of n){let n=e.value&&Object.getPrototypeOf(e.value);while(n){const e=Reflect.getOwnPropertyDescriptor(n,t);if(e)return e;n=Object.getPrototypeOf(n)}}for(const e of n){const n=e.value&&e.value[r];if(!n)continue;const i=n.slice();while(i.length){const e=i.shift(),n=Reflect.getOwnPropertyDescriptor(e.value,t);if(n)return n;const s=e.value&&e.value[r];s&&i.push(...s)}}}}})}},4960:function(e,t,n){"use strict";n.d(t,{YK:function(){return d},lE:function(){return c},$0:function(){return m},_i:function(){return v},bi:function(){return y}});var r=n(3396);const i={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},s={component:e=>(0,r.h)(m,{...e,class:"mdi"})};var o=n(4870),a=n(3766),u=n(320),l=n(131);const c=[String,Function,Object],d=Symbol.for("vuetify:icons"),h=(0,a.U)({icon:{type:c,required:!0},tag:{type:String,required:!0}},"icon"),f=(0,u.a)({name:"VComponentIcon",props:h(),setup(e){return()=>(0,r.Wm)(e.tag,null,{default:()=>[(0,r.Wm)(e.icon,null,null)]})}}),p=(0,u.a)({name:"VSvgIcon",inheritAttrs:!1,props:h(),setup(e,t){let{attrs:n}=t;return()=>(0,r.Wm)(e.tag,(0,r.dG)(n,{style:null}),{default:()=>[(0,r.Wm)("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[(0,r.Wm)("path",{d:e.icon},null)])]})}}),m=((0,u.a)({name:"VLigatureIcon",props:h(),setup(e){return()=>(0,r.Wm)(e.tag,null,{default:()=>[e.icon]})}}),(0,u.a)({name:"VClassIcon",props:h(),setup(e){return()=>(0,r.Wm)(e.tag,{class:e.icon},null)}})),g={svg:{component:p},class:{component:m}};function v(e){return(0,l.Ee)({defaultSet:"mdi",sets:{...g,mdi:s},aliases:i},e)}const y=e=>{const t=(0,r.f3)(d);if(!t)throw new Error("Missing Vuetify Icons provide!");const n=(0,r.Fl)((()=>{const n=(0,o.dq)(e)?e.value:e.icon;if(!n)throw new Error("Icon value is undefined or null");let r=n;var i;"string"===typeof r&&(r=r.trim(),r.startsWith("$")&&(r=null==(i=t.aliases)?void 0:i[r.slice(1)]));if(!r)throw new Error(`Could not find aliased icon "${n}"`);if("string"!==typeof r)return{component:f,icon:r};const s=Object.keys(t.sets).find((e=>"string"===typeof r&&r.startsWith(`${e}:`))),a=s?r.slice(s.length+1):r,u=t.sets[s??t.defaultSet];return{component:u.component,icon:a}}));return{iconData:n}}},1477:function(e,t,n){"use strict";n.d(t,{S:function(){return o}});var r=n(4870),i=n(3396),s=n(2385);function o(e){const t=(0,r.iH)(),n=(0,r.iH)(!1);if(s.cu){const r=new IntersectionObserver((t=>{null==e||e(t,r),n.value=!!t.find((e=>e.isIntersecting))}));(0,i.Jd)((()=>{r.disconnect()})),(0,i.YP)(t,((e,t)=>{t&&(r.unobserve(t),n.value=!1),e&&r.observe(e)}),{flush:"post"})}return{intersectionRef:t,isIntersecting:n}}},6791:function(e,t,n){"use strict";n.d(t,{rD:function(){return w},fF:function(){return y},U2:function(){return b}});var r=n(3396),i=n(4231),s=n(1138),o=n(7041),a=n(2370),u=n(1477),l=n(8717),c=n(1629),d=n(9242),h=n(320),f=n(9888),p=n(131);const m=(0,h.a)({name:"VProgressLinear",props:{active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...(0,i.I)(),...(0,s.Q)(),...(0,o.x$)()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const s=(0,l.z)(e,"modelValue"),{isRtl:h}=(0,c.Vw)(),{themeClasses:m}=(0,o.ER)(e),{textColorClasses:g,textColorStyles:v}=(0,a.rY)(e,"color"),{backgroundColorClasses:y,backgroundColorStyles:b}=(0,a.Y5)((0,r.Fl)((()=>e.bgColor||e.color))),{backgroundColorClasses:w,backgroundColorStyles:_}=(0,a.Y5)(e,"color"),{roundedClasses:I}=(0,i.b)(e),{intersectionRef:S,isIntersecting:E}=(0,u.S)(),T=(0,r.Fl)((()=>parseInt(e.max,10))),k=(0,r.Fl)((()=>parseInt(e.height,10))),x=(0,r.Fl)((()=>parseFloat(e.bufferValue)/T.value*100)),C=(0,r.Fl)((()=>parseFloat(s.value)/T.value*100)),A=(0,r.Fl)((()=>h.value!==e.reverse)),N=(0,r.Fl)((()=>e.indeterminate?"fade-transition":"slide-x-transition")),D=(0,r.Fl)((()=>null==e.bgOpacity?e.bgOpacity:parseFloat(e.bgOpacity)));function O(e){if(!S.value)return;const{left:t,right:n,width:r}=S.value.getBoundingClientRect(),i=A.value?r-e.clientX+(n-r):e.clientX-t;s.value=Math.round(i/r*T.value)}return(0,f.L)((()=>(0,r.Wm)(e.tag,{ref:S,class:["v-progress-linear",{"v-progress-linear--active":e.active&&E.value,"v-progress-linear--reverse":A.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},I.value,m.value],style:{height:e.active?(0,p.kb)(k.value):0,"--v-progress-linear-height":(0,p.kb)(k.value)},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:C.value,onClick:e.clickable&&O},{default:()=>[e.stream&&(0,r.Wm)("div",{key:"stream",class:["v-progress-linear__stream",g.value],style:{...v.value,[A.value?"left":"right"]:(0,p.kb)(-k.value),borderTop:`${(0,p.kb)(k.value/2)} dotted`,opacity:D.value,top:`calc(50% - ${(0,p.kb)(k.value/4)})`,width:(0,p.kb)(100-x.value,"%"),"--v-progress-linear-stream-to":(0,p.kb)(k.value*(A.value?1:-1))}},null),(0,r.Wm)("div",{class:["v-progress-linear__background",y.value],style:[b.value,{opacity:D.value,width:(0,p.kb)(e.stream?x.value:100,"%")}]},null),(0,r.Wm)(d.uT,{name:N.value},{default:()=>[e.indeterminate?(0,r.Wm)("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map((e=>(0,r.Wm)("div",{key:e,class:["v-progress-linear__indeterminate",e,w.value],style:_.value},null)))]):(0,r.Wm)("div",{class:["v-progress-linear__determinate",w.value],style:[_.value,{width:(0,p.kb)(C.value,"%")}]},null)]}),n.default&&(0,r.Wm)("div",{class:"v-progress-linear__content"},[n.default({value:C.value,buffer:x.value})])]}))),{}}});var g=n(3766),v=n(7514);const y=(0,g.U)({loading:[Boolean,String]},"loader");function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,v.BL)();const n=(0,r.Fl)((()=>({[`${t}--loading`]:e.loading})));return{loaderClasses:n}}function w(e,t){var n;let{slots:i}=t;return(0,r.Wm)("div",{class:`${e.name}__loader`},[(null==(n=i.default)?void 0:n.call(i,{color:e.color,isActive:e.active}))||(0,r.Wm)(m,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}},1629:function(e,t,n){"use strict";n.d(t,{O:function(){return v},$2:function(){return b},bU:function(){return w},Vw:function(){return I}});var r=n(3396),i=n(4870),s=n(131),o=n(6033),a=n(8717),u={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Page {0}, Current Page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}}};const l="$vuetify.",c=(e,t)=>e.replace(/\{(\d+)\}/g,((e,n)=>String(t[+n]))),d=(e,t,n)=>function(r){for(var i=arguments.length,a=new Array(i>1?i-1:0),u=1;u<i;u++)a[u-1]=arguments[u];if(!r.startsWith(l))return c(r,a);const d=r.replace(l,""),h=e.value&&n.value[e.value],f=t.value&&n.value[t.value];let p=(0,s.vO)(h,d,null);return p||((0,o.Kd)(`Translation key "${r}" not found in "${e.value}", trying fallback locale`),p=(0,s.vO)(f,d,null)),p||((0,o.N6)(`Translation key "${r}" not found in fallback`),p=r),"string"!==typeof p&&((0,o.N6)(`Translation key "${r}" has a non-string value`),p=r),c(p,a)};function h(e,t){return(n,r)=>{const i=new Intl.NumberFormat([e.value,t.value],r);return i.format(n)}}function f(e,t,n){const i=(0,a.z)(e,t,e[t]??n.value);return i.value=e[t]??n.value,(0,r.YP)(n,(r=>{null==e[t]&&(i.value=n.value)})),i}function p(e){return t=>{const n=f(t,"locale",e.current),r=f(t,"fallback",e.fallback),i=f(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:r,messages:i,t:d(n,r,i),n:h(n,r),provide:p({current:n,fallback:r,messages:i})}}}function m(e){const t=(0,i.iH)((null==e?void 0:e.locale)??"en"),n=(0,i.iH)((null==e?void 0:e.fallback)??"en"),r=(0,i.iH)({en:u,...null==e?void 0:e.messages});return{name:"vuetify",current:t,fallback:n,messages:r,t:d(t,n,r),n:h(t,n),provide:p({current:t,fallback:n,messages:r})}}const g={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!1,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},v=Symbol.for("vuetify:locale");function y(e){return null!=e.name}function b(e){const t=null!=e&&e.adapter&&y(null==e?void 0:e.adapter)?null==e?void 0:e.adapter:m(e),n=_(t,e);return{...t,...n}}function w(){const e=(0,r.f3)(v);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}Symbol.for("vuetify:rtl");function _(e,t){const n=(0,i.iH)((null==t?void 0:t.rtl)??g),s=(0,r.Fl)((()=>n.value[e.current.value]??!1));return{isRtl:s,rtl:n,rtlClasses:(0,r.Fl)((()=>"v-locale--is-"+(s.value?"rtl":"ltr")))}}function I(){const e=(0,r.f3)(v);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}},5180:function(e,t,n){"use strict";n.d(t,{T:function(){return l},y:function(){return u}});var r=n(1629),i=n(3396),s=n(3766),o=n(2879);const a={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},u=(0,s.U)({location:String},"location");function l(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=(0,r.Vw)(),u=(0,i.Fl)((()=>{if(!e.location)return{};const{side:r,align:i}=(0,o.wW)(e.location.split(" ").length>1?e.location:`${e.location} center`,s.value);function u(e){return n?n(e):0}const l={};return"center"!==r&&(t?l[a[r]]=`calc(100% - ${u(r)}px)`:l[r]=0),"center"!==i?t?l[a[i]]=`calc(100% - ${u(i)}px)`:l[i]=0:("center"===r?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),l}));return{locationStyles:u}}},489:function(e,t,n){"use strict";n.d(t,{F:function(){return a},K:function(){return u}});var r=n(3396),i=n(3766),s=n(7514);const o=["static","relative","fixed","absolute","sticky"],a=(0,i.U)({position:{type:String,validator:e=>o.includes(e)}},"position");function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,s.BL)();const n=(0,r.Fl)((()=>e.position?`${t}--${e.position}`:void 0));return{positionClasses:n}}},8717:function(e,t,n){"use strict";n.d(t,{z:function(){return u}});var r=n(4870),i=n(3396),s=n(7514),o=n(131),a=n(4770);function u(e,t,n){let u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>e,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e=>e;const c=(0,s.FN)("useProxiedModel"),d=(0,r.iH)(void 0!==e[t]?e[t]:n),h=(0,o.mA)(t),f=h!==t,p=f?(0,i.Fl)((()=>{var n,r,i,s;return e[t],!(!(null!=(n=c.vnode.props)&&n.hasOwnProperty(t)||null!=(r=c.vnode.props)&&r.hasOwnProperty(h))||!(null!=(i=c.vnode.props)&&i.hasOwnProperty(`onUpdate:${t}`)||null!=(s=c.vnode.props)&&s.hasOwnProperty(`onUpdate:${h}`)))})):(0,i.Fl)((()=>{var n,r;return e[t],!(null==(n=c.vnode.props)||!n.hasOwnProperty(t)||null==(r=c.vnode.props)||!r.hasOwnProperty(`onUpdate:${t}`))}));(0,a.U)((()=>!p.value),(()=>{(0,i.YP)((()=>e[t]),(e=>{d.value=e}))}));const m=(0,i.Fl)({get(){return u(p.value?e[t]:d.value)},set(n){const r=l(n);(p.value?e[t]:d.value)!==r&&u(p.value?e[t]:d.value)!==n&&(d.value=r,null==c||c.emit(`update:${t}`,r))}});return Object.defineProperty(m,"externalValue",{get:()=>p.value?e[t]:d.value}),m}},3712:function(e,t,n){"use strict";n.d(t,{y:function(){return o}});var r=n(4870),i=n(3396),s=n(2385);function o(e){const t=(0,r.iH)(),n=(0,r.iH)();if(s.BR){const r=new ResizeObserver((t=>{null==e||e(t,r),t.length&&(n.value=t[0].contentRect)}));(0,i.Jd)((()=>{r.disconnect()})),(0,i.YP)(t,((e,t)=>{t&&(r.unobserve(t),n.value=void 0),e&&r.observe(e)}),{flush:"post"})}return{resizeRef:t,contentRect:(0,r.OT)(n)}}},4231:function(e,t,n){"use strict";n.d(t,{I:function(){return a},b:function(){return u}});n(7658);var r=n(3396),i=n(4870),s=n(3766),o=n(7514);const a=(0,s.U)({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.BL)();const n=(0,r.Fl)((()=>{const n=(0,i.dq)(e)?e.value:e.rounded,r=[];if(!0===n||""===n)r.push(`${t}--rounded`);else if("string"===typeof n||0===n)for(const e of String(n).split(" "))r.push(`rounded-${e}`);return r}));return{roundedClasses:n}}},6183:function(e,t,n){"use strict";n.d(t,{GN:function(){return d},Kx:function(){return f},nB:function(){return c},tv:function(){return l}});var r=n(7514),i=n(131),s=n(3766),o=n(2385),a=n(3396),u=n(4870);function l(){var e,t;return null==(e=(0,r.FN)("useRouter"))||null==(t=e.proxy)?void 0:t.$router}function c(e,t){const n=(0,a.LL)("RouterLink"),r=(0,a.Fl)((()=>!(!e.href&&!e.to))),s=(0,a.Fl)((()=>(null==r?void 0:r.value)||(0,i.B0)(t,"click")||(0,i.B0)(e,"click")));if("string"===typeof n)return{isLink:r,isClickable:s,href:(0,u.Vh)(e,"href")};const o=e.to?n.useLink(e):void 0;return{isLink:r,isClickable:s,route:null==o?void 0:o.route,navigate:null==o?void 0:o.navigate,isActive:o&&(0,a.Fl)((()=>{var t,n;return e.exact?null==(t=o.isExactActive)?void 0:t.value:null==(n=o.isActive)?void 0:n.value})),href:(0,a.Fl)((()=>e.to?null==o?void 0:o.route.value.href:e.href))}}const d=(0,s.U)({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let h=!1;function f(e,t){let n,r,i=!1;function s(e){var t;null!=(t=e.state)&&t.replaced||(i=!0,setTimeout((()=>i=!1)))}o.BR&&((0,a.Y3)((()=>{window.addEventListener("popstate",s),n=null==e?void 0:e.beforeEach(((e,n,r)=>{h?i?t(r):r():setTimeout((()=>i?t(r):r())),h=!0})),r=null==e?void 0:e.afterEach((()=>{h=!1}))})),(0,u.EB)((()=>{var e,t;window.removeEventListener("popstate",s),null==(e=n)||e(),null==(t=r)||t()})))}},9374:function(e,t,n){"use strict";n.d(t,{Z:function(){return a},t:function(){return u}});var r=n(3766),i=n(7514),s=n(131);const o=["x-small","small","default","large","x-large"],a=(0,r.U)({size:{type:[String,Number],default:"default"}},"size");function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,i.BL)();return(0,s.S3)((()=>{let n,r;return(0,s.q9)(o,e.size)?n=`${t}--size-${e.size}`:e.size&&(r={width:(0,s.kb)(e.size),height:(0,s.kb)(e.size)}),{sizeClasses:n,sizeStyles:r}}))}},1138:function(e,t,n){"use strict";n.d(t,{Q:function(){return i}});var r=n(3766);const i=(0,r.U)({tag:{type:String,default:"div"}},"tag")},7041:function(e,t,n){"use strict";n.d(t,{bo:function(){return C},jG:function(){return O},x$:function(){return A},ER:function(){return R}});n(7658);var r=n(4870),i=n(3396),s=n(3766),o=n(131),a=n(661),u=n(2385),l=n(7514);
/**
 * WCAG 3.0 APCA perceptual contrast algorithm from https://github.com/Myndex/SAPC-APCA
 * @licence https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @see https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup
 */
const c=2.4,d=.2126729,h=.7151522,f=.072175,p=.55,m=.58,g=.57,v=.62,y=.03,b=1.45,w=5e-4,_=1.25,I=1.25,S=.078,E=12.82051282051282,T=.06,k=.001;function x(e,t){const n=(e.r/255)**c,r=(e.g/255)**c,i=(e.b/255)**c,s=(t.r/255)**c,o=(t.g/255)**c,a=(t.b/255)**c;let u,l=n*d+r*h+i*f,x=s*d+o*h+a*f;if(l<=y&&(l+=(y-l)**b),x<=y&&(x+=(y-x)**b),Math.abs(x-l)<w)return 0;if(x>l){const e=(x**p-l**m)*_;u=e<k?0:e<S?e-e*E*T:e-T}else{const e=(x**v-l**g)*I;u=e>-k?0:e>-S?e-e*E*T:e+T}return 100*u}const C=Symbol.for("vuetify:theme"),A=(0,s.U)({theme:String},"theme"),N={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function D(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N;if(!e)return{...N,isDisabled:!0};const t={};for(const[i,s]of Object.entries(e.themes??{})){var n,r;const e=s.dark||"dark"===i?null==(n=N.themes)?void 0:n.dark:null==(r=N.themes)?void 0:r.light;t[i]=(0,o.Ee)(e,s)}return(0,o.Ee)(N,{...e,themes:t})}function O(e){const t=(0,r.qj)(D(e)),n=(0,r.iH)(t.defaultTheme),s=(0,r.iH)(t.themes),l=(0,i.Fl)((()=>{const e={};for(const[n,r]of Object.entries(s.value)){const i=e[n]={...r,colors:{...r.colors}};if(t.variations)for(const e of t.variations.colors){const n=i.colors[e];if(n)for(const r of["lighten","darken"]){const s="lighten"===r?a.$n:a._j;for(const u of(0,o.MT)(t.variations[r],1))i.colors[`${e}-${r}-${u}`]=(0,a.qX)(s((0,a.lu)(n),u))}}for(const e of Object.keys(i.colors)){if(/^on-[a-z]/.test(e)||i.colors[`on-${e}`])continue;const t=`on-${e}`,n=(0,a.lu)(i.colors[e]),r=Math.abs(x((0,a.lu)(0),n)),s=Math.abs(x((0,a.lu)(16777215),n));i.colors[t]=s>Math.min(r,50)?"#fff":"#000"}}return e})),c=(0,i.Fl)((()=>l.value[n.value])),d=(0,i.Fl)((()=>{const e=[];c.value.dark&&P(e,":root",["color-scheme: dark"]);for(const[i,s]of Object.entries(l.value)){const{variables:t,dark:n}=s;P(e,`.v-theme--${i}`,["color-scheme: "+(n?"dark":"normal"),...L(s),...Object.keys(t).map((e=>{const n=t[e],r="string"===typeof n&&n.startsWith("#")?(0,a.lu)(n):void 0,i=r?`${r.r}, ${r.g}, ${r.b}`:void 0;return`--v-${e}: ${i??n}`}))])}const t=[],n=[],r=new Set(Object.values(l.value).flatMap((e=>Object.keys(e.colors))));for(const i of r)/^on-[a-z]/.test(i)?P(n,`.${i}`,[`color: rgb(var(--v-theme-${i})) !important`]):(P(t,`.bg-${i}`,[`--v-theme-overlay-multiplier: var(--v-theme-${i}-overlay-multiplier)`,`background: rgb(var(--v-theme-${i})) !important`,`color: rgb(var(--v-theme-on-${i})) !important`]),P(n,`.text-${i}`,[`color: rgb(var(--v-theme-${i})) !important`]),P(n,`.border-${i}`,[`--v-border-color: var(--v-theme-${i})`]));return e.push(...t,...n),e.map(((e,t)=>0===t?e:`    ${e}`)).join("")}));function h(e){const n=e._context.provides.usehead;if(n)n.addHeadObjs((0,i.Fl)((()=>{const e={children:d.value,type:"text/css",id:"vuetify-theme-stylesheet"};return t.cspNonce&&(e.nonce=t.cspNonce),{style:[e]}}))),u.BR&&(0,i.m0)((()=>n.updateDOM()));else{let r=u.BR?document.getElementById("vuetify-theme-stylesheet"):null;function s(){if(!t.isDisabled){if("undefined"!==typeof document&&!r){const e=document.createElement("style");e.type="text/css",e.id="vuetify-theme-stylesheet",t.cspNonce&&e.setAttribute("nonce",t.cspNonce),r=e,document.head.appendChild(r)}r&&(r.innerHTML=d.value)}}(0,i.YP)(d,s,{immediate:!0})}}const f=(0,i.Fl)((()=>t.isDisabled?void 0:`v-theme--${n.value}`));return{install:h,isDisabled:t.isDisabled,name:n,themes:s,current:c,computedThemes:l,themeClasses:f,styles:d,global:{name:n,current:c}}}function R(e){(0,l.FN)("provideTheme");const t=(0,i.f3)(C,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=(0,i.Fl)((()=>e.theme??(null==t?void 0:t.name.value))),r=(0,i.Fl)((()=>t.isDisabled?void 0:`v-theme--${n.value}`)),s={...t,name:n,themeClasses:r};return(0,i.JJ)(C,s),s}function P(e,t,n){e.push(`${t} {\n`,...n.map((e=>`  ${e};\n`)),"}\n")}function L(e){const t=e.dark?2:1,n=e.dark?1:2,r=[];for(const[i,s]of Object.entries(e.colors)){const e=(0,a.lu)(s);r.push(`--v-theme-${i}: ${e.r},${e.g},${e.b}`),i.startsWith("on-")||r.push(`--v-theme-${i}-overlay-multiplier: ${(0,a.zT)(s)>.18?t:n}`)}return r}},4770:function(e,t,n){"use strict";n.d(t,{U:function(){return s}});var r=n(3396),i=n(4870);function s(e,t){let n;(0,r.YP)(e,(e=>{if(e&&!n)n=(0,i.B)(),n.run(t);else if(!e){var r;null==(r=n)||r.stop(),n=void 0}}),{immediate:!0}),(0,i.EB)((()=>{var e;null==(e=n)||e.stop()}))}},4906:function(e,t,n){"use strict";n.d(t,{J:function(){return a},X:function(){return o}});var r=n(9242),i=n(3396),s=n(3766);const o=(0,s.U)({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>!0!==e}},"transition"),a=(e,t)=>{let{slots:n}=t;const{transition:s,...o}=e,{component:a=r.uT,...u}="object"===typeof s?s:{};return(0,i.h)(a,(0,i.dG)("string"===typeof s?{name:s}:u,o),n)}},5221:function(e,t,n){"use strict";n.d(t,{Ux:function(){return l},bk:function(){return c},c1:function(){return d}});var r=n(3396),i=n(2370),s=n(4870),o=n(3766),a=n(7514);const u=["elevated","flat","tonal","outlined","text","plain"];function l(e,t){return(0,r.Wm)(r.HY,null,[e&&(0,r.Wm)("span",{key:"overlay",class:`${t}__overlay`},null),(0,r.Wm)("span",{key:"underlay",class:`${t}__underlay`},null)])}const c=(0,o.U)({color:String,variant:{type:String,default:"elevated",validator:e=>u.includes(e)}},"variant");function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.BL)();const n=(0,r.Fl)((()=>{const{variant:n}=(0,s.SU)(e);return`${t}--variant-${n}`})),{colorClasses:o,colorStyles:u}=(0,i.rd)((0,r.Fl)((()=>{const{variant:t,color:n}=(0,s.SU)(e);return{[["elevated","flat"].includes(t)?"background":"text"]:n}})));return{colorClasses:o,colorStyles:u,variantClasses:n}}},7052:function(e,t,n){"use strict";var r=n(2385);function i(e,t){if(!r.cu)return;const n=t.modifiers||{},i=t.value,{handler:o,options:a}="object"===typeof i?i:{handler:i,options:{}},u=new IntersectionObserver((function(){var r;let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;const u=null==(r=e._observe)?void 0:r[t.instance.$.uid];if(!u)return;const l=i.some((e=>e.isIntersecting));!o||n.quiet&&!u.init||n.once&&!l&&!u.init||o(l,i,a),l&&n.once?s(e,t):u.init=!0}),a);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:u},u.observe(e)}function s(e,t){var n;const r=null==(n=e._observe)?void 0:n[t.instance.$.uid];r&&(r.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const o={mounted:i,unmounted:s};t["Z"]=o},3824:function(e,t,n){"use strict";n.d(t,{H:function(){return k}});var r=n(131);const i=Symbol("rippleStop"),s=80;function o(e,t){e.style.transform=t,e.style.webkitTransform=t}function a(e,t){e.style.opacity=`calc(${t} * var(--v-theme-overlay-multiplier))`}function u(e){return"TouchEvent"===e.constructor.name}function l(e){return"KeyboardEvent"===e.constructor.name}const c=function(e,t){var n;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=0,s=0;if(!l(e)){const n=t.getBoundingClientRect(),r=u(e)?e.touches[e.touches.length-1]:e;i=r.clientX-n.left,s=r.clientY-n.top}let o=0,a=.3;null!=(n=t._ripple)&&n.circle?(a=.15,o=t.clientWidth/2,o=r.center?o:o+Math.sqrt((i-o)**2+(s-o)**2)/4):o=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const c=(t.clientWidth-2*o)/2+"px",d=(t.clientHeight-2*o)/2+"px",h=r.center?c:i-o+"px",f=r.center?d:s-o+"px";return{radius:o,scale:a,x:h,y:f,centerX:c,centerY:d}},d={show(e,t){var n;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==t||null==(n=t._ripple)||!n.enabled)return;const i=document.createElement("span"),s=document.createElement("span");i.appendChild(s),i.className="v-ripple__container",r.class&&(i.className+=` ${r.class}`);const{radius:u,scale:l,x:d,y:h,centerX:f,centerY:p}=c(e,t,r),m=2*u+"px";s.className="v-ripple__animation",s.style.width=m,s.style.height=m,t.appendChild(i);const g=window.getComputedStyle(t);g&&"static"===g.position&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),o(s,`translate(${d}, ${h}) scale3d(${l},${l},${l})`),a(s,0),s.dataset.activated=String(performance.now()),setTimeout((()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),o(s,`translate(${f}, ${p}) scale3d(1,1,1)`),a(s,.08)}),0)},hide(e){var t;if(null==e||null==(t=e._ripple)||!t.enabled)return;const n=e.getElementsByClassName("v-ripple__animation");if(0===n.length)return;const r=n[n.length-1];if(r.dataset.isHiding)return;r.dataset.isHiding="true";const i=performance.now()-Number(r.dataset.activated),s=Math.max(250-i,0);setTimeout((()=>{r.classList.remove("v-ripple__animation--in"),r.classList.add("v-ripple__animation--out"),a(r,0),setTimeout((()=>{const t=e.getElementsByClassName("v-ripple__animation");1===t.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),r.parentNode&&e.removeChild(r.parentNode)}),300)}),s)}};function h(e){return"undefined"===typeof e||!!e}function f(e){const t={},n=e.currentTarget;if(null!=n&&n._ripple&&!n._ripple.touched&&!e[i]){if(e[i]=!0,u(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||l(e),n._ripple.class&&(t.class=n._ripple.class),u(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{d.show(e,n,t)},n._ripple.showTimer=window.setTimeout((()=>{var e;null!=n&&null!=(e=n._ripple)&&e.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),s)}else d.show(e,n,t)}}function p(e){e[i]=!0}function m(e){const t=e.currentTarget;if(t&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=window.setTimeout((()=>{m(e)})));window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),d.hide(t)}}function g(e){const t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let v=!1;function y(e){v||e.keyCode!==r.Do.enter&&e.keyCode!==r.Do.space||(v=!0,f(e))}function b(e){v=!1,m(e)}function w(e){v&&(v=!1,m(e))}function _(e,t,n){const{value:i,modifiers:s}=t,o=h(i);if(o||d.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=o,e._ripple.centered=s.center,e._ripple.circle=s.circle,(0,r.Kn)(i)&&i.class&&(e._ripple.class=i.class),o&&!n){if(s.stop)return e.addEventListener("touchstart",p,{passive:!0}),void e.addEventListener("mousedown",p);e.addEventListener("touchstart",f,{passive:!0}),e.addEventListener("touchend",m,{passive:!0}),e.addEventListener("touchmove",g,{passive:!0}),e.addEventListener("touchcancel",m),e.addEventListener("mousedown",f),e.addEventListener("mouseup",m),e.addEventListener("mouseleave",m),e.addEventListener("keydown",y),e.addEventListener("keyup",b),e.addEventListener("blur",w),e.addEventListener("dragstart",m,{passive:!0})}else!o&&n&&I(e)}function I(e){e.removeEventListener("mousedown",f),e.removeEventListener("touchstart",f),e.removeEventListener("touchend",m),e.removeEventListener("touchmove",g),e.removeEventListener("touchcancel",m),e.removeEventListener("mouseup",m),e.removeEventListener("mouseleave",m),e.removeEventListener("keydown",y),e.removeEventListener("keyup",b),e.removeEventListener("dragstart",m),e.removeEventListener("blur",w)}function S(e,t){_(e,t,!1)}function E(e){delete e._ripple,I(e)}function T(e,t){if(t.value===t.oldValue)return;const n=h(t.oldValue);_(e,t,n)}const k={mounted:S,unmounted:E,updated:T}},8957:function(e,t,n){"use strict";n.d(t,{Rd:function(){return p}});var r=n(8434),i=n(8157),s=n(4960),o=n(1629),a=n(7041),u=n(131),l=n(320),c=n(2385),d=n(7514),h=n(3396),f=n(4870);function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{blueprint:t,...n}=e,p=(0,u.Ee)(t,n),{aliases:m={},components:v={},directives:y={}}=p,b=(0,r.yB)(p.defaults),w=(0,i.fT)(p.display,p.ssr),_=(0,a.jG)(p.theme),I=(0,s._i)(p.icons),S=(0,o.$2)(p.locale),E=e=>{for(const t in y)e.directive(t,y[t]);for(const t in v)e.component(t,v[t]);for(const t in m)e.component(t,(0,l.a)({...m[t],name:t,aliasName:m[t].name}));if(_.install(e),e.provide(r.tI,b),e.provide(i.x6,w),e.provide(a.bo,_),e.provide(s.YK,I),e.provide(o.O,S),c.BR&&p.ssr)if(e.$nuxt)e.$nuxt.hook("app:suspense:resolve",(()=>{w.update()}));else{const{mount:t}=e;e.mount=function(){const n=t(...arguments);return(0,h.Y3)((()=>w.update())),e.mount=t,n}}d.sq.reset(),e.mixin({computed:{$vuetify(){return(0,f.qj)({defaults:g.call(this,r.tI),display:g.call(this,i.x6),theme:g.call(this,a.bo),icons:g.call(this,s.YK),locale:g.call(this,o.O)})}}})};return{install:E,defaults:b,display:w,theme:_,icons:I,locale:S}}const m="3.0.6";function g(e){var t,n;const r=this.$,i=(null==(t=r.parent)?void 0:t.provides)??(null==(n=r.vnode.appContext)?void 0:n.provides);if(i&&e in i)return i[e]}p.version=m},2879:function(e,t,n){"use strict";n.d(t,{Oe:function(){return c},aw:function(){return l},dd:function(){return d},tb:function(){return u},wW:function(){return o}});var r=n(131);const i=["top","bottom"],s=["start","end","left","right"];function o(e,t){let[n,o]=e.split(" ");return o||(o=(0,r.q9)(i,n)?"start":(0,r.q9)(s,n)?"top":"center"),{side:a(n,t),align:a(o,t)}}function a(e,t){return"start"===e?t?"right":"left":"end"===e?t?"left":"right":e}function u(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function l(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function c(e){return{side:e.align,align:e.side}}function d(e){return(0,r.q9)(i,e.side)?"y":"x"}},3122:function(e,t,n){"use strict";n.d(t,{G:function(){return i},j:function(){return s}});var r=n(6309);function i(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),i=n.transform;if(i){let s,o,a,u,l;if(i.startsWith("matrix3d("))s=i.slice(9,-1).split(/, /),o=+s[0],a=+s[5],u=+s[12],l=+s[13];else{if(!i.startsWith("matrix("))return new r.x(t);s=i.slice(7,-1).split(/, /),o=+s[0],a=+s[3],u=+s[4],l=+s[5]}const c=n.transformOrigin,d=t.x-u-(1-o)*parseFloat(c),h=t.y-l-(1-a)*parseFloat(c.slice(c.indexOf(" ")+1)),f=o?t.width/o:e.offsetWidth+1,p=a?t.height/a:e.offsetHeight+1;return new r.x({x:d,y:h,width:f,height:p})}return new r.x(t)}function s(e,t,n){if("undefined"===typeof e.animate)return{finished:Promise.resolve()};const r=e.animate(t,n);return"undefined"===typeof r.finished&&(r.finished=new Promise((e=>{r.onfinish=()=>{e(r)}}))),r}},6309:function(e,t,n){"use strict";n.d(t,{p:function(){return i},x:function(){return r}});class r{constructor(e){let{x:t,y:n,width:r,height:i}=e;this.x=t,this.y=n,this.width=r,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function i(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}},661:function(e,t,n){"use strict";n.d(t,{qX:function(){return b},_j:function(){return I},zT:function(){return S},NA:function(){return g},$n:function(){return _},lu:function(){return v}});var r=n(6033),i=n(131);const s=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],o=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,a=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],u=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function l(e){const t=Array(3),n=o,r=s;for(let s=0;s<3;++s)t[s]=Math.round(255*(0,i.uZ)(n(r[s][0]*e[0]+r[s][1]*e[1]+r[s][2]*e[2])));return{r:t[0],g:t[1],b:t[2]}}function c(e){let{r:t,g:n,b:r}=e;const i=[0,0,0],s=u,o=a;t=s(t/255),n=s(n/255),r=s(r/255);for(let a=0;a<3;++a)i[a]=o[a][0]*t+o[a][1]*n+o[a][2]*r;return i}const d=.20689655172413793,h=e=>e>d**3?Math.cbrt(e):e/(3*d**2)+4/29,f=e=>e>d?e**3:3*d**2*(e-4/29);function p(e){const t=h,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function m(e){const t=f,n=(e[0]+16)/116;return[.95047*t(n+e[1]/500),t(n),1.08883*t(n-e[2]/200)]}function g(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function v(e){if("number"===typeof e)return(isNaN(e)||e<0||e>16777215)&&(0,r.Kd)(`'${e}' is not a valid hex color`),{r:(16711680&e)>>16,g:(65280&e)>>8,b:255&e};if("string"===typeof e){let t=e.startsWith("#")?e.slice(1):e;[3,4].includes(t.length)?t=t.split("").map((e=>e+e)).join(""):[6,8].includes(t.length)||(0,r.Kd)(`'${e}' is not a valid hex(a) color`);const n=parseInt(t,16);return(isNaN(n)||n<0||n>4294967295)&&(0,r.Kd)(`'${e}' is not a valid hex(a) color`),w(t)}throw new TypeError(`Colors can only be numbers or strings, recieved ${null==e?e:e.constructor.name} instead`)}function y(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function b(e){let{r:t,g:n,b:r,a:i}=e;return`#${[y(t),y(n),y(r),void 0!==i?y(Math.round(255*i)):"FF"].join("")}`}function w(e){let[t,n,r,s]=(0,i.yo)(e,2).map((e=>parseInt(e,16)));return s=void 0===s?s:Math.round(s/255*100)/100,{r:t,g:n,b:r,a:s}}function _(e,t){const n=p(c(e));return n[0]=n[0]+10*t,l(m(n))}function I(e,t){const n=p(c(e));return n[0]=n[0]-10*t,l(m(n))}function S(e){const t=v(e);return c(t)[1]}},6033:function(e,t,n){"use strict";n.d(t,{Kd:function(){return i},N6:function(){return s}});n(7658);function r(e,t,n){if(n&&(t={__isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?l(t):"")}function i(e,t,n){const i=r(e,t,n);null!=i&&console.warn(i)}function s(e,t,n){const i=r(e,t,n);null!=i&&console.error(i)}const o=/(?:^|[-_])(\w)/g,a=e=>e.replace(o,(e=>e.toUpperCase())).replace(/[-_]/g,"");function u(e,t){if(e.$root===e)return"<Root>";const n="function"===typeof e&&null!=e.cid?e.options:e.__isVue?e.$options||e.constructor.options:e||{};let r=n.name||n._componentTag;const i=n.__file;if(!r&&i){const e=i.match(/([^/\\]+)\.vue$/);r=null==e?void 0:e[1]}return(r?`<${a(r)}>`:"<Anonymous>")+(i&&!1!==t?` at ${i}`:"")}function l(e){if(e.__isVue&&e.$parent){const t=[];let n=0;while(e){if(t.length>0){const r=t[t.length-1];if(r.constructor===e.constructor){n++,e=e.$parent;continue}n>0&&(t[t.length-1]=[r,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map(((e,t)=>`${0===t?"---\x3e ":" ".repeat(5+2*t)}${Array.isArray(e)?`${u(e[0])}... (${e[1]} recursive calls)`:u(e)}`)).join("\n")}return`\n\n(found in ${u(e)})`}},1114:function(e,t,n){"use strict";n.d(t,{J:function(){return o}});var r=n(7139),i=n(3396),s=n(320);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return(0,s.a)({name:n??(0,r.kC)((0,r._A)(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t}},setup(t,n){let{slots:r}=n;return()=>{var n;return(0,i.h)(t.tag,{class:e},null==(n=r.default)?void 0:n.call(r))}}})}},320:function(e,t,n){"use strict";n.d(t,{a:function(){return f},e:function(){return p}});var r=n(3396),i=n(4870),s=n(6033),o=n(131),a=n(7514);function u(e){const{provides:t}=(0,a.FN)("injectSelf");if(t&&e in t)return t[e]}var l=n(8434),c=n(4770),d=n(3766);function h(e,t){var n,r;return(null==(n=e.props)?void 0:n.hasOwnProperty(t))||(null==(r=e.props)?void 0:r.hasOwnProperty((0,o.mA)(t)))}const f=function(e){return e._setup=e._setup??e.setup,e.name?(e._setup&&(e.props=e.props??{},e.props=(0,d.U)(e.props,(0,o.mA)(e.name))(),e.props._as=String,e.setup=function(t,n){const s=(0,r.FN)(),a=(0,l.qy)(),d=(0,i.XI)(),f=(0,i.Um)({...(0,i.IU)(t)});(0,r.m0)((()=>{const n=a.value.global,r=a.value[t._as??e.name];if(r){const e=Object.entries(r).filter((e=>{let[t]=e;return t.startsWith(t[0].toUpperCase())}));e.length&&(d.value=Object.fromEntries(e))}for(const e of Object.keys(t)){let i=t[e];h(s.vnode,e)||(i=(null==r?void 0:r[e])??(null==n?void 0:n[e])??t[e]),f[e]!==i&&(f[e]=i)}}));const p=e._setup(f,n);return(0,c.U)(d,(()=>{var e;(0,l.AF)((0,o.Ee)((null==(e=u(l.tI))?void 0:e.value)??{},d.value))})),p}),e):((0,s.Kd)("The component is missing an explicit name, unable to generate default prop value"),e)};function p(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return t=>(e?f:r.aZ)(t)}},8587:function(e,t,n){"use strict";n.d(t,{Ly:function(){return r},uX:function(){return i},x0:function(){return s}});const r="cubic-bezier(0.4, 0, 0.2, 1)",i="cubic-bezier(0.0, 0, 0.2, 1)",s="cubic-bezier(0.4, 0, 1, 1)"},7514:function(e,t,n){"use strict";n.d(t,{BL:function(){return o},FN:function(){return s},sq:function(){return l}});var r=n(3396),i=n(131);function s(e,t){const n=(0,r.FN)();if(!n)throw new Error(`[Vuetify] ${e} ${t||"must be called from inside a setup function"}`);return n}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"composables";const t=s(e).type;return(0,i.mA)((null==t?void 0:t.aliasName)||(null==t?void 0:t.name))}let a=0,u=new WeakMap;function l(){const e=s("getUid");if(u.has(e))return u.get(e);{const t=a++;return u.set(e,t),t}}l.reset=()=>{a=0,u=new WeakMap}},2385:function(e,t,n){"use strict";n.d(t,{BR:function(){return r},Z1:function(){return o},cu:function(){return i},sR:function(){return s}});const r="undefined"!==typeof window,i=r&&"IntersectionObserver"in window,s=r&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),o=r&&"undefined"!==typeof CSS&&CSS.supports("selector(:focus-visible)")},131:function(e,t,n){"use strict";n.d(t,{An:function(){return m},B0:function(){return C},Do:function(){return f},Ee:function(){return b},F7:function(){return k},FT:function(){return g},Kn:function(){return d},MT:function(){return l},RA:function(){return w},S3:function(){return S},as:function(){return x},bY:function(){return I},dr:function(){return A},ei:function(){return p},kb:function(){return c},mA:function(){return _},q9:function(){return E},rU:function(){return h},uZ:function(){return v},vO:function(){return u},vZ:function(){return a},yo:function(){return y}});n(7658);var r=n(3396),i=n(4870),s=n(7139);function o(e,t,n){const r=t.length-1;if(r<0)return void 0===e?n:e;for(let i=0;i<r;i++){if(null==e)return n;e=e[t[i]]}return null==e||void 0===e[t[r]]?n:e[t[r]]}function a(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((n=>a(e[n],t[n])))}function u(e,t,n){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),o(e,t.split("."),n)):n}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from({length:e},((e,n)=>t+n))}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==e||""===e?void 0:isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function d(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function h(e){return null==e?void 0:e.$el}const f=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function p(e,t){const n=Object.create(null),r=Object.create(null);for(const i in e)t.some((e=>e instanceof RegExp?e.test(i):e===i))?n[i]=e[i]:r[i]=e[i];return[n,r]}function m(e){return p(e,["class","style","id",/^data-/])}function g(e){return null==e?[]:Array.isArray(e)?e:[e]}function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.max(t,Math.min(n,e))}function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const n=[];let r=0;while(r<e.length)n.push(e.substr(r,t)),r+=t;return n}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const i in e)r[i]=e[i];for(const i in t){const s=e[i],o=t[i];d(s)&&d(o)?r[i]=b(s,o,n):Array.isArray(s)&&Array.isArray(o)&&n?r[i]=n(s,o):r[i]=o}return r}function w(e){return e.map((e=>e.type===r.HY?w(e.children):e)).flat()}function _(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()}function I(e,t){if(!t||"object"!==typeof t)return[];if(Array.isArray(t))return t.map((t=>I(e,t))).flat(1);if(Array.isArray(t.children))return t.children.map((t=>I(e,t))).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return I(e,t.component.subTree).flat(1)}return[]}function S(e){const t=(0,i.qj)({}),n=(0,r.Fl)(e);return(0,r.m0)((()=>{for(const e in n.value)t[e]=n.value[e]}),{flush:"sync"}),(0,i.BK)(t)}function E(e,t){return e.includes(t)}const T=/^on[^a-z]/,k=e=>T.test(e),x=[Function,Array];function C(e,t){return t="on"+(0,s.kC)(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function A(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(Array.isArray(e))for(const i of e)i(...n);else"function"===typeof e&&e(...n)}},3766:function(e,t,n){"use strict";function r(e,t){return n=>Object.keys(e).reduce(((r,i)=>{const s="object"===typeof e[i]&&null!=e[i]&&!Array.isArray(e[i]),o=s?e[i]:{type:e[i]};return r[i]=n&&i in n?{...o,default:n[i]}:o,t&&!r[i].source&&(r[i].source=t),r}),{})}n.d(t,{U:function(){return r}})},9888:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var r=n(7514);function i(e){const t=(0,r.FN)("useRender");t.render=e}}}]);
//# sourceMappingURL=chunk-vendors.c0c7934a.js.map