// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,_=/\.0$/,g=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,g,"e"),n=s.call(n,_,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,b,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):l.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function j(r,t,e){var n=t-r.length;return n<0?r:r=e?r+m(n):m(n)+r}var A=String.fromCharCode,E=isNaN,O=Array.isArray;function F(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,i,a,f,l,p,s;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,p=0;p<r.length;p++)if(c(n=r[p]))f+=n;else{if(t=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function V(r){var t,e,n,o;for(e=[],o=0,n=T.exec(r);n;)(t=r.slice(o,T.lastIndex-n[0].length)).length&&e.push(t),e.push(P(n)),o=T.lastIndex,n=T.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function k(r){return"string"==typeof r}function x(r){var t,e,n;if(!k(r))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=V(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return S.apply(null,e)}var N,G=Object.prototype,U=G.toString,B=G.__defineGetter__,I=G.__defineSetter__,C=G.__lookupGetter__,L=G.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===U.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===U.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(C.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=G,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&B&&B.call(r,t,e.get),a&&I&&I.call(r,t,e.set),r};var M=N;function R(r,t,e){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var $=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function q(r,t){return null!=r&&Y.call(r,t)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"",J=X()?function(r){var t,e,n;if(null==r)return Z.call(r);e=r[D],t=q(r,D);try{r[D]=void 0}catch(t){return Z.call(r)}return n=Z.call(r),t?r[D]=e:delete r[D],n}:function(r){return Z.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=X();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return H(r)||tr(r)}function nr(){return new Function("return this;")()}R(er,"isPrimitive",H),R(er,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof globalThis?globalThis:null,ur=function(r){if(arguments.length){if(!H(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ar)return ar;if(or)return or;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ur.document&&ur.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var pr,sr=/^\s*function\s*([^(]*)/i;R(lr,"REGEXP",sr),pr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var yr=pr;function br(r){return null!==r&&"object"==typeof r}var vr=function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!yr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(br);function dr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=sr.exec(n.toString()))return t[1]}return br(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}R(br,"isObjectLikeArray",vr);var _r="function"==typeof $||"object"==typeof fr||"function"==typeof cr?function(r){return dr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?dr(r).toLowerCase():t};function gr(r){return"function"===_r(r)}var wr,hr=/./,mr="function"==typeof Object.defineProperty?Object.defineProperty:null,jr=Object.defineProperty,Ar=Object.prototype,Er=Ar.toString,Or=Ar.__defineGetter__,Fr=Ar.__defineSetter__,Sr=Ar.__lookupGetter__,Tr=Ar.__lookupSetter__;wr=function(){try{return mr({},"x",{}),!0}catch(r){return!1}}()?jr:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Er.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Er.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Sr.call(r,t)||Tr.call(r,t)?(n=r.__proto__,r.__proto__=Ar,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Or&&Or.call(r,t,e.get),a&&Fr&&Fr.call(r,t,e.set),r};var Pr=wr;function Vr(r,t,e){Pr(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function kr(r){return"boolean"==typeof r}var xr=Boolean.prototype.toString,Nr=X();function Gr(r){return"object"==typeof r&&(r instanceof K||(Nr?function(r){try{return xr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Ur(r){return kr(r)||Gr(r)}function Br(){return new Function("return this;")()}Vr(Ur,"isPrimitive",kr),Vr(Ur,"isObject",Gr);var Ir="object"==typeof self?self:null,Cr="object"==typeof window?window:null,Lr="object"==typeof globalThis?globalThis:null,Mr=function(r){if(arguments.length){if(!kr(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Br()}if(Lr)return Lr;if(Ir)return Ir;if(Cr)return Cr;throw new Error("unexpected error. Unable to resolve global object.")}(),Rr=Mr.document&&Mr.document.childNodes,$r=Int8Array;function Hr(){return/^\s*function\s*([^(]*)/i}var Wr=/^\s*function\s*([^(]*)/i;function Xr(r){return null!==r&&"object"==typeof r}Vr(Hr,"REGEXP",Wr);var Zr=function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!yr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Xr);function Yr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Wr.exec(n.toString()))return t[1]}return Xr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Vr(Xr,"isObjectLikeArray",Zr);var qr="function"==typeof hr||"object"==typeof $r||"function"==typeof Rr?function(r){return Yr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?Yr(r).toLowerCase():t};function zr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===qr(r)}(r.next)}var Dr,Jr="function"==typeof Object.defineProperty?Object.defineProperty:null,Kr=Object.defineProperty,Qr=Object.prototype,rt=Qr.toString,tt=Qr.__defineGetter__,et=Qr.__defineSetter__,nt=Qr.__lookupGetter__,ot=Qr.__lookupSetter__;Dr=function(){try{return Jr({},"x",{}),!0}catch(r){return!1}}()?Kr:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===rt.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===rt.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(nt.call(r,t)||ot.call(r,t)?(n=r.__proto__,r.__proto__=Qr,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&tt&&tt.call(r,t,e.get),a&&et&&et.call(r,t,e.set),r};var it=Dr;function at(r,t,e){it(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function ut(r){return"number"==typeof r}var ct=Number,ft=ct.prototype.toString,lt=X();function pt(r){return"object"==typeof r&&(r instanceof ct||(lt?function(r){try{return ft.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function st(r){return ut(r)||pt(r)}at(st,"isPrimitive",ut),at(st,"isObject",pt);var yt,bt="function"==typeof z&&"symbol"==typeof z("foo")&&q(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null,vt=/./,dt="function"==typeof Object.defineProperty?Object.defineProperty:null,_t=Object.defineProperty,gt=Object.prototype,wt=gt.toString,ht=gt.__defineGetter__,mt=gt.__defineSetter__,jt=gt.__lookupGetter__,At=gt.__lookupSetter__;yt=function(){try{return dt({},"x",{}),!0}catch(r){return!1}}()?_t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===wt.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===wt.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(jt.call(r,t)||At.call(r,t)?(n=r.__proto__,r.__proto__=gt,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ht&&ht.call(r,t,e.get),a&&mt&&mt.call(r,t,e.set),r};var Et=yt;function Ot(r,t,e){Et(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Ft(r){return"boolean"==typeof r}var St=Boolean.prototype.toString,Tt=X();function Pt(r){return"object"==typeof r&&(r instanceof K||(Tt?function(r){try{return St.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Vt(r){return Ft(r)||Pt(r)}function kt(){return new Function("return this;")()}Ot(Vt,"isPrimitive",Ft),Ot(Vt,"isObject",Pt);var xt="object"==typeof self?self:null,Nt="object"==typeof window?window:null,Gt="object"==typeof globalThis?globalThis:null,Ut=function(r){if(arguments.length){if(!Ft(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return kt()}if(Gt)return Gt;if(xt)return xt;if(Nt)return Nt;throw new Error("unexpected error. Unable to resolve global object.")}(),Bt=Ut.document&&Ut.document.childNodes,It=Int8Array;function Ct(){return/^\s*function\s*([^(]*)/i}var Lt=/^\s*function\s*([^(]*)/i;function Mt(r){return null!==r&&"object"==typeof r}Ot(Ct,"REGEXP",Lt);var Rt=function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!yr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Mt);function $t(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Lt.exec(n.toString()))return t[1]}return Mt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Ot(Mt,"isObjectLikeArray",Rt);var Ht="function"==typeof vt||"object"==typeof It||"function"==typeof Bt?function(r){return $t(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?$t(r).toLowerCase():t};function Wt(r){return"function"===Ht(r)}var Xt,Zt=Object,Yt=/./,qt="function"==typeof Object.defineProperty?Object.defineProperty:null,zt=Object.defineProperty,Dt=Object.prototype,Jt=Dt.toString,Kt=Dt.__defineGetter__,Qt=Dt.__defineSetter__,re=Dt.__lookupGetter__,te=Dt.__lookupSetter__;Xt=function(){try{return qt({},"x",{}),!0}catch(r){return!1}}()?zt:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Jt.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Jt.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(re.call(r,t)||te.call(r,t)?(n=r.__proto__,r.__proto__=Dt,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Kt&&Kt.call(r,t,e.get),a&&Qt&&Qt.call(r,t,e.set),r};var ee=Xt;function ne(r,t,e){ee(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function oe(r){return"boolean"==typeof r}var ie=Boolean.prototype.toString,ae=X();function ue(r){return"object"==typeof r&&(r instanceof K||(ae?function(r){try{return ie.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function ce(r){return oe(r)||ue(r)}function fe(){return new Function("return this;")()}ne(ce,"isPrimitive",oe),ne(ce,"isObject",ue);var le="object"==typeof self?self:null,pe="object"==typeof window?window:null,se="object"==typeof globalThis?globalThis:null,ye=function(r){if(arguments.length){if(!oe(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return fe()}if(se)return se;if(le)return le;if(pe)return pe;throw new Error("unexpected error. Unable to resolve global object.")}(),be=ye.document&&ye.document.childNodes,ve=Int8Array;function de(){return/^\s*function\s*([^(]*)/i}var _e=/^\s*function\s*([^(]*)/i;function ge(r){return null!==r&&"object"==typeof r}ne(de,"REGEXP",_e);var we=function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!yr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(ge);function he(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=_e.exec(n.toString()))return t[1]}return ge(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}ne(ge,"isObjectLikeArray",we);var me,je,Ae="function"==typeof Yt||"object"==typeof ve||"function"==typeof be?function(r){return he(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?he(r).toLowerCase():t},Ee=Object.getPrototypeOf;je=Object.getPrototypeOf,me="function"===Ae(je)?Ee:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Oe=me,Fe=Object.prototype;function Se(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(t=function(r){return null==r?null:(r=Zt(r),Oe(r))}(r),!t||!q(r,"constructor")&&q(t,"constructor")&&Wt(t.constructor)&&"[object Function]"===J(t.constructor)&&q(t,"isPrototypeOf")&&Wt(t.isPrototypeOf)&&(t===Fe||function(r){var t;for(t in r)if(!q(r,t))return!1;return!0}(r)))}function Te(r,t){return Se(t)?(q(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(x("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Pe(r,t,e){var n,o,i,a;if(!zr(r))throw new TypeError(x("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!gr(t))throw new TypeError(x("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=Te(n,e)))throw i;return R(o={},"next",u),R(o,"return",c),bt&&gr(r[bt])&&R(o,bt,f),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:ut(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Pe(r[bt](),t,n)}}var Ve,ke=Math.sqrt,xe="function"==typeof Object.defineProperty?Object.defineProperty:null,Ne=Object.defineProperty,Ge=Object.prototype,Ue=Ge.toString,Be=Ge.__defineGetter__,Ie=Ge.__defineSetter__,Ce=Ge.__lookupGetter__,Le=Ge.__lookupSetter__;Ve=function(){try{return xe({},"x",{}),!0}catch(r){return!1}}()?Ne:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Ue.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Ue.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Ce.call(r,t)||Le.call(r,t)?(n=r.__proto__,r.__proto__=Ge,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Be&&Be.call(r,t,e.get),a&&Ie&&Ie.call(r,t,e.set),r};var Me,Re=Ve,$e=2147483647,He=2146435072,We="function"==typeof Uint32Array,Xe="function"==typeof Uint32Array?Uint32Array:null,Ze="function"==typeof Uint32Array?Uint32Array:void 0;Me=function(){var r,t;if("function"!=typeof Xe)return!1;try{r=function(r){return We&&r instanceof Uint32Array||"[object Uint32Array]"===J(r)}(t=new Xe(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ze:function(){throw new Error("not implemented")};var Ye,qe=Me,ze="function"==typeof Float64Array,De="function"==typeof Float64Array?Float64Array:null,Je="function"==typeof Float64Array?Float64Array:void 0;Ye=function(){var r,t;if("function"!=typeof De)return!1;try{r=function(r){return ze&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new De([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Je:function(){throw new Error("not implemented")};var Ke,Qe=Ye,rn="function"==typeof Uint8Array,tn="function"==typeof Uint8Array?Uint8Array:null,en="function"==typeof Uint8Array?Uint8Array:void 0;Ke=function(){var r,t;if("function"!=typeof tn)return!1;try{r=function(r){return rn&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}(t=new tn(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?en:function(){throw new Error("not implemented")};var nn,on=Ke,an="function"==typeof Uint16Array,un="function"==typeof Uint16Array?Uint16Array:null,cn="function"==typeof Uint16Array?Uint16Array:void 0;nn=function(){var r,t;if("function"!=typeof un)return!1;try{r=function(r){return an&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)}(t=new un(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?cn:function(){throw new Error("not implemented")};var fn,ln={uint16:nn,uint8:on};(fn=new ln.uint16(1))[0]=4660;var pn=52===new ln.uint8(fn.buffer)[0],sn=!0===pn?1:0,yn=new Qe(1),bn=new qe(yn.buffer);function vn(r){return yn[0]=r,bn[sn]}var dn,_n="function"==typeof Float64Array,gn="function"==typeof Float64Array?Float64Array:null,wn="function"==typeof Float64Array?Float64Array:void 0;dn=function(){var r,t;if("function"!=typeof gn)return!1;try{r=function(r){return _n&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new gn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?wn:function(){throw new Error("not implemented")};var hn,mn,jn,An=!0===pn?0:1,En=new dn(1),On=new qe(En.buffer),Fn="function"==typeof Float64Array,Sn="function"==typeof Float64Array?Float64Array:null,Tn="function"==typeof Float64Array?Float64Array:void 0;hn=function(){var r,t;if("function"!=typeof Sn)return!1;try{r=function(r){return Fn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new Sn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Tn:function(){throw new Error("not implemented")},!0===pn?(mn=1,jn=0):(mn=0,jn=1);var Pn={HIGH:mn,LOW:jn},Vn=new hn(1),kn=new qe(Vn.buffer),xn=Pn.HIGH,Nn=Pn.LOW;function Gn(r,t){return kn[xn]=r,kn[Nn]=t,Vn[0]}var Un=Math.floor,Bn=Number.POSITIVE_INFINITY,In=ct.NEGATIVE_INFINITY;function Cn(r){return r!=r}function Ln(r){return r===Bn||r===In}var Mn,Rn="function"==typeof Object.defineProperty?Object.defineProperty:null,$n=Object.defineProperty,Hn=Object.prototype,Wn=Hn.toString,Xn=Hn.__defineGetter__,Zn=Hn.__defineSetter__,Yn=Hn.__lookupGetter__,qn=Hn.__lookupSetter__;Mn=function(){try{return Rn({},"x",{}),!0}catch(r){return!1}}()?$n:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Wn.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Wn.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Yn.call(r,t)||qn.call(r,t)?(n=r.__proto__,r.__proto__=Hn,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Xn&&Xn.call(r,t,e.get),a&&Zn&&Zn.call(r,t,e.set),r};var zn,Dn,Jn,Kn=Mn,Qn="function"==typeof Float64Array,ro="function"==typeof Float64Array?Float64Array:null,to="function"==typeof Float64Array?Float64Array:void 0;zn=function(){var r,t;if("function"!=typeof ro)return!1;try{r=function(r){return Qn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new ro([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?to:function(){throw new Error("not implemented")},!0===pn?(Dn=1,Jn=0):(Dn=0,Jn=1);var eo={HIGH:Dn,LOW:Jn},no=new zn(1),oo=new qe(no.buffer),io=eo.HIGH,ao=eo.LOW;function uo(r,t,e,n){return no[0]=r,t[n]=oo[io],t[n+e]=oo[ao],t}function co(r){return uo(r,[0,0],1,0)}!function(r,t,e){Kn(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}(co,"assign",uo);var fo,lo=[0,0],po="function"==typeof Object.defineProperty?Object.defineProperty:null,so=Object.defineProperty,yo=Object.prototype,bo=yo.toString,vo=yo.__defineGetter__,_o=yo.__defineSetter__,go=yo.__lookupGetter__,wo=yo.__lookupSetter__;fo=function(){try{return po({},"x",{}),!0}catch(r){return!1}}()?so:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===bo.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===bo.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(go.call(r,t)||wo.call(r,t)?(n=r.__proto__,r.__proto__=yo,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&vo&&vo.call(r,t,e.get),a&&_o&&_o.call(r,t,e.set),r};var ho=fo;function mo(r,t,e,n){return Cn(r)||Ln(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}!function(r,t,e){ho(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}((function(r){return mo(r,[0,0],1,0)}),"assign",mo);var jo=[0,0],Ao=[0,0];function Eo(r,t){var e,n,o,i,a,u;return 0===t||0===r||Cn(r)||Ln(r)?r:(mo(r,jo,1,0),t+=jo[1],t+=function(r){var t=vn(r);return(t=(t&He)>>>20)-1023|0}(r=jo[0]),t<-1074?(o=0,i=r,co.assign(o,lo,1,0),a=lo[0],a&=$e,u=vn(i),Gn(a|=u&=2147483648,lo[1])):t>1023?r<0?In:Bn:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,co.assign(r,Ao,1,0),e=Ao[0],e&=2148532223,n*Gn(e|=t+1023<<20,Ao[1])))}function Oo(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var Fo=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],So=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],To=16777216,Po=5.960464477539063e-8,Vo=Oo(20),ko=Oo(20),xo=Oo(20),No=Oo(20);function Go(r,t,e,n,o,i,a,u,c){var f,l,p,s,y,b,v,d,_;for(s=i,_=n[e],d=e,y=0;d>0;y++)l=Po*_|0,No[y]=_-To*l|0,_=n[d-1]+l,d-=1;if(_=Eo(_,o),_-=8*Un(.125*_),_-=v=0|_,p=0,o>0?(v+=y=No[e-1]>>24-o,No[e-1]-=y<<24-o,p=No[e-1]>>23-o):0===o?p=No[e-1]>>23:_>=.5&&(p=2),p>0){for(v+=1,f=0,y=0;y<e;y++)d=No[y],0===f?0!==d&&(f=1,No[y]=16777216-d):No[y]=16777215-d;if(o>0)switch(o){case 1:No[e-1]&=8388607;break;case 2:No[e-1]&=4194303}2===p&&(_=1-_,0!==f&&(_-=Eo(1,o)))}if(0===_){for(d=0,y=e-1;y>=i;y--)d|=No[y];if(0===d){for(b=1;0===No[i-b];b++);for(y=e+1;y<=e+b;y++){for(c[u+y]=Fo[a+y],l=0,d=0;d<=u;d++)l+=r[d]*c[u+(y-d)];n[y]=l}return Go(r,t,e+=b,n,o,i,a,u,c)}}if(0===_)for(e-=1,o-=24;0===No[e];)e-=1,o-=24;else(_=Eo(_,-o))>=To?(l=Po*_|0,No[e]=_-To*l|0,o+=24,No[e+=1]=l):No[e]=0|_;for(l=Eo(1,o),y=e;y>=0;y--)n[y]=l*No[y],l*=Po;for(y=e;y>=0;y--){for(l=0,b=0;b<=s&&b<=e-y;b++)l+=So[b]*n[y+b];xo[e-y]=l}for(l=0,y=e;y>=0;y--)l+=xo[y];for(t[0]=0===p?l:-l,l=xo[0]-l,y=1;y<=e;y++)l+=xo[y];return t[1]=0===p?l:-l,7&v}function Uo(r,t,e,n){var o,i,a,u,c,f,l;for((i=(e-3)/24|0)<0&&(i=0),u=e-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)Vo[c]=f<0?0:Fo[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*Vo[a+(c-f)];ko[c]=o}return Go(r,t,4,ko,u,4,i,a,Vo)}var Bo=Math.round;function Io(r,t,e){var n,o,i,a,u;return i=r-1.5707963267341256*(n=Bo(.6366197723675814*r)),a=6077100506506192e-26*n,u=t>>20|0,e[0]=i-a,u-(vn(e[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((o=i)-(i=o-(a=6077100506303966e-26*n))-a),e[0]=i-a,u-(vn(e[0])>>20&2047)>49&&(a=84784276603689e-45*n-((o=i)-(i=o-(a=20222662487111665e-37*n))-a),e[0]=i-a)),e[1]=i-e[0]-a,n}var Co=1.5707963267341256,Lo=6077100506506192e-26,Mo=2*Lo,Ro=3*Lo,$o=4*Lo,Ho=[0,0,0],Wo=[0,0];function Xo(r,t){var e,n,o,i,a,u,c;if((o=vn(r)&$e|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Io(r,o,t):o<=1073928572?r>0?(c=r-Co,t[0]=c-Lo,t[1]=c-t[0]-Lo,1):(c=r+Co,t[0]=c+Lo,t[1]=c-t[0]+Lo,-1):r>0?(c=r-2*Co,t[0]=c-Mo,t[1]=c-t[0]-Mo,2):(c=r+2*Co,t[0]=c+Mo,t[1]=c-t[0]+Mo,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Io(r,o,t):r>0?(c=r-3*Co,t[0]=c-Ro,t[1]=c-t[0]-Ro,3):(c=r+3*Co,t[0]=c+Ro,t[1]=c-t[0]+Ro,-3):1075388923===o?Io(r,o,t):r>0?(c=r-4*Co,t[0]=c-$o,t[1]=c-t[0]-$o,4):(c=r+4*Co,t[0]=c+$o,t[1]=c-t[0]+$o,-4);if(o<1094263291)return Io(r,o,t);if(o>=He)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return En[0]=r,On[An]}(r),c=Gn(o-((n=(o>>20)-1046)<<20|0),e),a=0;a<2;a++)Ho[a]=0|c,c=16777216*(c-Ho[a]);for(Ho[2]=c,i=3;0===Ho[i-1];)i-=1;return u=Uo(Ho,Wo,n,i),r<0?(t[0]=-Wo[0],t[1]=-Wo[1],-u):(t[0]=Wo[0],t[1]=Wo[1],u)}var Zo=-.16666666666666632;function Yo(r,t,e,n,o){var i,a,u,c,f;return a=.00833333333332249+(f=r*r)*(27557313707070068e-22*f-.0001984126982985795)+f*(c=f*f)*(1.58969099521155e-10*f-2.5050760253406863e-8),u=f*r,e[o]=0===t?r+u*(Zo+f*a):r-(f*(.5*t-u*a)-t-u*Zo),a=f*(.0416666666666666+f*(2480158728947673e-20*f-.001388888888887411)),a+=c*c*(f*(2.087572321298175e-9+-11359647557788195e-27*f)-2.7557314351390663e-7),c=1-(i=.5*f),e[o+n]=c+(1-c-i+(f*a-r*t)),e}var qo=[0,0];function zo(r,t,e,n){var o,i;if(o=vn(r),(o&=$e)<=1072243195)return o<1044381696&&0==(0|r)&&(t[n]=r,t[n+e]=0),Yo(r,0,t,e,n);if(o>=He)return t[n]=NaN,t[n+e]=NaN,t;switch(i=Xo(r,qo),Yo(qo[0],qo[1],t,e,n),3&i){case 1:return o=t[n+e],t[n+e]=-t[n],t[n]=o,t;case 2:return t[n]*=-1,t[n+e]*=-1,t;case 3:return o=-t[n+e],t[n+e]=t[n],t[n]=o,t;default:return t}}!function(r,t,e){Re(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}((function(r){return zo(r,[0,0],1,0)}),"assign",zo);var Do=[0,0];function Jo(r){var t,e,n,o,i,a;return r<0&&(r=-r),r===Bn?0:0===r?1:r<=4?(o=function(r){var t,e;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(t=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,e=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(t=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,e=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),t/e)}(i=r*r),(a=(r+2.404825557695773)*(r-2.40625- -.0014244423042272315))*o):r<=8?(o=function(r){var t,e;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(t=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,e=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(t=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),e=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),t/e)}(i=1-r*r/64),(a=(r+5.520078110286311)*(r-1413/256-.0005468602863106496))*o):(t=function(r){var t,e;return 0===r?1:((r<0?-r:r)<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),e=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(t=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),e=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),t/e)}(n=(i=8/r)*i),e=function(r){var t,e;return 0===r?-.015625:((r<0?-r:r)<=1?(t=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,e=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(t=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,e=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),t/e)}(n),a=.5641895835477563/ke(r),zo(r,Do,1,0),a*(t*(Do[1]+Do[0])-i*e*(Do[0]-Do[1])))}return function(r){return Pe(r,Jo)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterBesselj0=t();
//# sourceMappingURL=browser.js.map
