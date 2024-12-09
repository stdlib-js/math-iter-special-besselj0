// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function O(r){var t,e,n,i,a,c,f,l,s,p,y,v,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))c+=n;else{if(t=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,d=void 0,(d=y-p.length)<0?p:p=v?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function U(r){var t,e,n,o;for(e=[],o=0,n=S.exec(r);n;)(t=r.slice(o,S.lastIndex-n[0].length)).length&&e.push(t),e.push(x(n)),o=S.lastIndex,n=S.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function T(r){var t,e;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[U(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return O.apply(null,t)}var F,I=Object.prototype,N=I.toString,k=I.__defineGetter__,V=I.__defineSetter__,P=I.__lookupGetter__,G=I.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(P.call(r,t)||G.call(r,t)?(n=r.__proto__,r.__proto__=I,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&k&&k.call(r,t,e.get),a&&V&&V.call(r,t,e.set),r};var L=F;function $(r,t,e){L(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var C=/./;function B(r){return"boolean"==typeof r}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return H&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,R=Object.prototype.hasOwnProperty;function Z(r,t){return null!=r&&R.call(r,t)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",q=W()?function(r){var t,e,n;if(null==r)return M.call(r);e=r[Y],t=Z(r,Y);try{r[Y]=void 0}catch(t){return M.call(r)}return n=M.call(r),t?r[Y]=e:delete r[Y],n}:function(r){return M.call(r)},z=Boolean,D=Boolean.prototype.toString,J=W();function K(r){return"object"==typeof r&&(r instanceof z||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Q(r){return B(r)||K(r)}$(Q,"isPrimitive",B),$(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,er="object"==typeof globalThis?globalThis:null,nr=function(r){if(arguments.length){if(!B(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(er)return er;if(rr)return rr;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),or=nr.document&&nr.document.childNodes,ir=Int8Array;function ar(){return/^\s*function\s*([^(]*)/i}var ur=/^\s*function\s*([^(]*)/i;$(ar,"REGEXP",ur);var cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function fr(r){return null!==r&&"object"==typeof r}function lr(r){var t,e,n,o;if(("Object"===(e=q(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=ur.exec(n.toString()))return t[1]}return fr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}$(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!cr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(fr));var sr="function"==typeof C||"object"==typeof ir||"function"==typeof or?function(r){return lr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?lr(r).toLowerCase():t};function pr(r){return"function"===sr(r)}function yr(r){return"number"==typeof r}var vr=Number,dr=vr.prototype.toString,gr=W();function br(r){return"object"==typeof r&&(r instanceof vr||(gr?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function hr(r){return yr(r)||br(r)}$(hr,"isPrimitive",yr),$(hr,"isObject",br);var wr,mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null,jr=Object,Ar=Object.getPrototypeOf;wr=pr(Object.getPrototypeOf)?Ar:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=wr,Er=Object.prototype;function Or(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!cr(r)}(r)&&(t=function(r){return null==r?null:(r=jr(r),_r(r))}(r),!t||!Z(r,"constructor")&&Z(t,"constructor")&&pr(t.constructor)&&"[object Function]"===q(t.constructor)&&Z(t,"isPrototypeOf")&&pr(t.isPrototypeOf)&&(t===Er||function(r){var t;for(t in r)if(!Z(r,t))return!1;return!0}(r)))}function Sr(r,t,e){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!pr(u.next))throw new TypeError(T("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!pr(t))throw new TypeError(T("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=function(r,t){return Or(t)?(Z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(T("invalid argument. Options argument must be an object. Value: `%s`.",t))}(n,e),i))throw i;return $(o={},"next",(function(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:yr(e.value)?t(e.value):n.invalid,done:!1}})),$(o,"return",(function(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}})),mr&&pr(r[mr])&&$(o,mr,(function(){return Sr(r[mr](),t,n)})),o}var xr,Ur=Math.sqrt,Tr=2147483647,Fr=2146435072,Ir="function"==typeof Uint32Array,Nr="function"==typeof Uint32Array?Uint32Array:null,kr="function"==typeof Uint32Array?Uint32Array:void 0;xr=function(){var r,t,e;if("function"!=typeof Nr)return!1;try{t=new Nr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Ir&&e instanceof Uint32Array||"[object Uint32Array]"===q(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var Vr,Pr=xr,Gr="function"==typeof Float64Array,Lr="function"==typeof Float64Array?Float64Array:null,$r="function"==typeof Float64Array?Float64Array:void 0;Vr=function(){var r,t,e;if("function"!=typeof Lr)return!1;try{t=new Lr([1,3.14,-3.14,NaN]),e=t,r=(Gr&&e instanceof Float64Array||"[object Float64Array]"===q(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Cr,Br=Vr,Hr="function"==typeof Uint8Array,Wr="function"==typeof Uint8Array?Uint8Array:null,Mr="function"==typeof Uint8Array?Uint8Array:void 0;Cr=function(){var r,t,e;if("function"!=typeof Wr)return!1;try{t=new Wr(t=[1,3.14,-3.14,256,257]),e=t,r=(Hr&&e instanceof Uint8Array||"[object Uint8Array]"===q(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Mr:function(){throw new Error("not implemented")};var Rr,Zr=Cr,Xr="function"==typeof Uint16Array,Yr="function"==typeof Uint16Array?Uint16Array:null,qr="function"==typeof Uint16Array?Uint16Array:void 0;Rr=function(){var r,t,e;if("function"!=typeof Yr)return!1;try{t=new Yr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Xr&&e instanceof Uint16Array||"[object Uint16Array]"===q(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var zr,Dr={uint16:Rr,uint8:Zr};(zr=new Dr.uint16(1))[0]=4660;var Jr=52===new Dr.uint8(zr.buffer)[0],Kr=!0===Jr?1:0,Qr=new Br(1),rt=new Pr(Qr.buffer);function tt(r){return Qr[0]=r,rt[Kr]}var et,nt,ot=1048575,it=!0===Jr?0:1,at=new Br(1),ut=new Pr(at.buffer);!0===Jr?(et=1,nt=0):(et=0,nt=1);var ct={HIGH:et,LOW:nt},ft=new Br(1),lt=new Pr(ft.buffer),st=ct.HIGH,pt=ct.LOW;function yt(r,t){return lt[st]=r,lt[pt]=t,ft[0]}var vt=Math.floor,dt=Number.POSITIVE_INFINITY,gt=vr.NEGATIVE_INFINITY,bt=1023,ht=1023,wt=-1023,mt=-1074;function jt(r){return r!=r}function At(r){return r===dt||r===gt}var _t,Et,Ot=2147483648;!0===Jr?(_t=1,Et=0):(_t=0,Et=1);var St={HIGH:_t,LOW:Et},xt=new Br(1),Ut=new Pr(xt.buffer),Tt=St.HIGH,Ft=St.LOW;function It(r,t,e,n){return xt[0]=r,t[n]=Ut[Tt],t[n+e]=Ut[Ft],t}function Nt(r){return It(r,[0,0],1,0)}$(Nt,"assign",It);var kt=[0,0],Vt=22250738585072014e-324,Pt=4503599627370496;function Gt(r,t,e,n){return jt(r)||At(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<Vt?(t[n]=r*Pt,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}$((function(r){return Gt(r,[0,0],1,0)}),"assign",Gt);var Lt=2220446049250313e-31,$t=2148532223,Ct=[0,0],Bt=[0,0];function Ht(r,t){var e,n,o,i,a,u;return 0===t||0===r||jt(r)||At(r)?r:(Gt(r,Ct,1,0),r=Ct[0],t+=Ct[1],t+=function(r){var t=tt(r);return(t=(t&Fr)>>>20)-bt|0}(r),t<mt?(o=0,i=r,Nt.assign(o,kt,1,0),a=kt[0],a&=Tr,u=tt(i),yt(a|=u&=Ot,kt[1])):t>ht?r<0?gt:dt:(t<=wt?(t+=52,n=Lt):n=1,Nt.assign(r,Bt,1,0),e=Bt[0],e&=$t,n*yt(e|=t+bt<<20,Bt[1])))}function Wt(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var Mt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Rt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Zt=16777216,Xt=5.960464477539063e-8,Yt=Wt(20),qt=Wt(20),zt=Wt(20),Dt=Wt(20);function Jt(r,t,e,n,o,i,a,u,c){var f,l,s,p,y,v,d,g,b;for(p=i,b=n[e],g=e,y=0;g>0;y++)l=Xt*b|0,Dt[y]=b-Zt*l|0,b=n[g-1]+l,g-=1;if(b=Ht(b,o),b-=8*vt(.125*b),b-=d=0|b,s=0,o>0?(d+=y=Dt[e-1]>>24-o,Dt[e-1]-=y<<24-o,s=Dt[e-1]>>23-o):0===o?s=Dt[e-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,f=0,y=0;y<e;y++)g=Dt[y],0===f?0!==g&&(f=1,Dt[y]=16777216-g):Dt[y]=16777215-g;if(o>0)switch(o){case 1:Dt[e-1]&=8388607;break;case 2:Dt[e-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=Ht(1,o)))}if(0===b){for(g=0,y=e-1;y>=i;y--)g|=Dt[y];if(0===g){for(v=1;0===Dt[i-v];v++);for(y=e+1;y<=e+v;y++){for(c[u+y]=Mt[a+y],l=0,g=0;g<=u;g++)l+=r[g]*c[u+(y-g)];n[y]=l}return Jt(r,t,e+=v,n,o,i,a,u,c)}}if(0===b)for(e-=1,o-=24;0===Dt[e];)e-=1,o-=24;else(b=Ht(b,-o))>=Zt?(l=Xt*b|0,Dt[e]=b-Zt*l|0,o+=24,Dt[e+=1]=l):Dt[e]=0|b;for(l=Ht(1,o),y=e;y>=0;y--)n[y]=l*Dt[y],l*=Xt;for(y=e;y>=0;y--){for(l=0,v=0;v<=p&&v<=e-y;v++)l+=Rt[v]*n[y+v];zt[e-y]=l}for(l=0,y=e;y>=0;y--)l+=zt[y];for(t[0]=0===s?l:-l,l=zt[0]-l,y=1;y<=e;y++)l+=zt[y];return t[1]=0===s?l:-l,7&d}function Kt(r,t,e,n){var o,i,a,u,c,f,l;for((i=(e-3)/24|0)<0&&(i=0),u=e-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)Yt[c]=f<0?0:Mt[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*Yt[a+(c-f)];qt[c]=o}return Jt(r,t,4,qt,u,4,i,a,Yt)}var Qt=Math.round,re=.6366197723675814,te=1.5707963267341256,ee=6077100506506192e-26,ne=6077100506303966e-26,oe=20222662487959506e-37,ie=20222662487111665e-37,ae=84784276603689e-45,ue=2047;function ce(r,t,e){var n,o,i,a,u;return i=r-(n=Qt(r*re))*te,a=n*ee,u=t>>20|0,e[0]=i-a,u-(tt(e[0])>>20&ue)>16&&(a=n*oe-((o=i)-(i=o-(a=n*ne))-a),e[0]=i-a,u-(tt(e[0])>>20&ue)>49&&(a=n*ae-((o=i)-(i=o-(a=n*ie))-a),e[0]=i-a)),e[1]=i-e[0]-a,n}var fe=0,le=16777216,se=1.5707963267341256,pe=6077100506506192e-26,ye=2*pe,ve=3*pe,de=4*pe,ge=598523,be=1072243195,he=1073928572,we=1074752122,me=1074977148,je=1075183036,Ae=1075388923,_e=1075594811,Ee=1094263291,Oe=[0,0,0],Se=[0,0];function xe(r,t){var e,n,o,i,a,u,c;if((o=tt(r)&Tr|0)<=be)return t[0]=r,t[1]=0,0;if(o<=we)return(o&ot)===ge?ce(r,o,t):o<=he?r>0?(c=r-se,t[0]=c-pe,t[1]=c-t[0]-pe,1):(c=r+se,t[0]=c+pe,t[1]=c-t[0]+pe,-1):r>0?(c=r-2*se,t[0]=c-ye,t[1]=c-t[0]-ye,2):(c=r+2*se,t[0]=c+ye,t[1]=c-t[0]+ye,-2);if(o<=_e)return o<=je?o===me?ce(r,o,t):r>0?(c=r-3*se,t[0]=c-ve,t[1]=c-t[0]-ve,3):(c=r+3*se,t[0]=c+ve,t[1]=c-t[0]+ve,-3):o===Ae?ce(r,o,t):r>0?(c=r-4*se,t[0]=c-de,t[1]=c-t[0]-de,4):(c=r+4*se,t[0]=c+de,t[1]=c-t[0]+de,-4);if(o<Ee)return ce(r,o,t);if(o>=Fr)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return at[0]=r,ut[it]}(r),c=yt(o-((n=(o>>20)-1046)<<20|0),e),a=0;a<2;a++)Oe[a]=0|c,c=(c-Oe[a])*le;for(Oe[2]=c,i=3;Oe[i-1]===fe;)i-=1;return u=Kt(Oe,Se,n,i),r<0?(t[0]=-Se[0],t[1]=-Se[1],-u):(t[0]=Se[0],t[1]=Se[1],u)}var Ue=-.16666666666666632,Te=.00833333333332249,Fe=-.0001984126982985795,Ie=27557313707070068e-22,Ne=-2.5050760253406863e-8,ke=1.58969099521155e-10,Ve=.0416666666666666,Pe=-.001388888888887411,Ge=2480158728947673e-20,Le=-2.7557314351390663e-7,$e=2.087572321298175e-9,Ce=-11359647557788195e-27;function Be(r,t,e,n,o){var i,a,u,c,f;return a=Te+(f=r*r)*(Fe+f*Ie)+f*(c=f*f)*(Ne+f*ke),u=f*r,e[o]=0===t?r+u*(Ue+f*a):r-(f*(.5*t-u*a)-t-u*Ue),a=f*(Ve+f*(Pe+f*Ge)),a+=c*c*(Le+f*($e+f*Ce)),c=1-(i=.5*f),e[o+n]=c+(1-c-i+(f*a-r*t)),e}var He=1072243195,We=1044381696,Me=[0,0];function Re(r,t,e,n){var o,i;if(o=tt(r),(o&=Tr)<=He)return o<We&&0==(0|r)&&(t[n]=r,t[n+e]=0),Be(r,0,t,e,n);if(o>=Fr)return t[n]=NaN,t[n+e]=NaN,t;switch(i=xe(r,Me),Be(Me[0],Me[1],t,e,n),3&i){case 1:return o=t[n+e],t[n+e]=-t[n],t[n]=o,t;case 2:return t[n]*=-1,t[n+e]*=-1,t;case 3:return o=-t[n+e],t[n+e]=t[n],t[n]=o,t;default:return t}}$((function(r){return Re(r,[0,0],1,0)}),"assign",Re);var Ze=.5641895835477563,Xe=2.404825557695773,Ye=5.520078110286311,qe=616,ze=-.0014244423042272315,De=1413,Je=.0005468602863106496,Ke=[0,0];function Qe(r){var t,e,n,o,i,a;return r<0&&(r=-r),r===dt?0:0===r?1:r<=4?(o=function(r){var t,e;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(t=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,e=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(t=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,e=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),t/e)}(i=r*r),(a=(r+Xe)*(r-qe/256-ze))*o):r<=8?(o=function(r){var t,e;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(t=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,e=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(t=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),e=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),t/e)}(i=1-r*r/64),(a=(r+Ye)*(r-De/256-Je))*o):(t=function(r){var t,e;return 0===r?1:((r<0?-r:r)<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),e=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(t=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),e=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),t/e)}(n=(i=8/r)*i),e=function(r){var t,e;return 0===r?-.015625:((r<0?-r:r)<=1?(t=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,e=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(t=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,e=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),t/e)}(n),a=Ze/Ur(r),Re(r,Ke,1,0),a*(t*(Ke[1]+Ke[0])-i*e*(Ke[0]-Ke[1])))}return function(r){return Sr(r,Qe)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterBesselj0=t();
//# sourceMappingURL=browser.js.map