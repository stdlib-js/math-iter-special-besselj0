// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),v&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,t){return null!=r&&d.call(r,t)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(r){var t,n,e;if(null==r)return b.call(r);n=r[m],t=w(r,m);try{r[m]=void 0}catch(t){return b.call(r)}return e=b.call(r),t?r[m]=n:delete r[m],e}:function(r){return b.call(r)},g=Boolean.prototype.toString;var A=s();function h(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return v(r)||h(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",h);var U="object"==typeof self?self:null,N="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},E="object"==typeof S?S:null;var F=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(U)return U;if(N)return N;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,P=Int8Array;function T(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(T,"REGEXP",V);var G=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function H(r){return null!==r&&"object"==typeof r}function x(r){var t,n,e,o;if(("Object"===(n=j(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=V.exec(e.toString()))return t[1]}return H(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(H,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!G(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(H));var B="function"==typeof y||"object"==typeof P||"function"==typeof I?function(r){return x(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?x(r).toLowerCase():t};function L(r){return"function"===B(r)}function M(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&L(r.next)}function k(r){return"number"==typeof r}var W=Number,C=W.prototype.toString;var Y=s();function q(r){return"object"==typeof r&&(r instanceof W||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function R(r){return k(r)||q(r)}l(R,"isPrimitive",k),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!G(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),J(r))}(r),!t||!w(r,"constructor")&&w(t,"constructor")&&L(t.constructor)&&"[object Function]"===j(t.constructor)&&w(t,"isPrototypeOf")&&L(t.isPrototypeOf)&&(t===K||function(r){var t;for(t in r)if(!w(r,t))return!1;return!0}(r)))}function Z(r,t){return Q(t)?(w(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function $(r,t,n){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",f),l(o,"return",a),X&&L(r[X])&&l(o,X,c),o;function f(){var n;return i?{done:!0}:(n=r.next()).done?(i=!0,n):{value:k(n.value)?t(n.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[X](),t,e)}}var rr=Math.sqrt,tr="function"==typeof Uint32Array;var nr="function"==typeof Uint32Array?Uint32Array:null;var er,or="function"==typeof Uint32Array?Uint32Array:void 0;er=function(){var r,t,n;if("function"!=typeof nr)return!1;try{t=new nr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(tr&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur=er,ir="function"==typeof Float64Array;var fr="function"==typeof Float64Array?Float64Array:null;var ar,cr="function"==typeof Float64Array?Float64Array:void 0;ar=function(){var r,t,n;if("function"!=typeof fr)return!1;try{t=new fr([1,3.14,-3.14,NaN]),n=t,r=(ir&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var lr=ar,yr="function"==typeof Uint8Array;var vr="function"==typeof Uint8Array?Uint8Array:null;var pr,sr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,t,n;if("function"!=typeof vr)return!1;try{t=new vr(t=[1,3.14,-3.14,256,257]),n=t,r=(yr&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var br=pr,dr="function"==typeof Uint16Array;var wr="function"==typeof Uint16Array?Uint16Array:null;var mr,jr="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,t,n;if("function"!=typeof wr)return!1;try{t=new wr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(dr&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?jr:function(){throw new Error("not implemented")};var gr,Ar={uint16:mr,uint8:br};(gr=new Ar.uint16(1))[0]=4660;var hr=52===new Ar.uint8(gr.buffer)[0],_r=!0===hr?1:0,Or=new lr(1),Ur=new ur(Or.buffer);function Nr(r){return Or[0]=r,Ur[_r]}var Sr,Er,Fr=!0===hr?0:1,Ir=new lr(1),Pr=new ur(Ir.buffer);!0===hr?(Sr=1,Er=0):(Sr=0,Er=1);var Tr={HIGH:Sr,LOW:Er},Vr=new lr(1),Gr=new ur(Vr.buffer),Hr=Tr.HIGH,xr=Tr.LOW;function Br(r,t){return Gr[Hr]=r,Gr[xr]=t,Vr[0]}var Lr=Math.floor,Mr=Number.POSITIVE_INFINITY,kr=W.NEGATIVE_INFINITY;function Wr(r){return r!=r}function Cr(r){return r===Mr||r===kr}var Yr,qr;!0===hr?(Yr=1,qr=0):(Yr=0,qr=1);var Rr={HIGH:Yr,LOW:qr},Xr=new lr(1),zr=new ur(Xr.buffer),Dr=Rr.HIGH,Jr=Rr.LOW;function Kr(r,t,n,e){return Xr[0]=r,t[e]=zr[Dr],t[e+n]=zr[Jr],t}function Qr(r){return Kr(r,[0,0],1,0)}l(Qr,"assign",Kr);var Zr=[0,0];function $r(r,t,n,e){return Wr(r)||Cr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return $r(r,[0,0],1,0)}),"assign",$r);var rt=[0,0],tt=[0,0];function nt(r,t){var n,e,o,u,i,f;return 0===t||0===r||Wr(r)||Cr(r)?r:($r(r,rt,1,0),t+=rt[1],t+=function(r){var t=Nr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=rt[0]),t<-1074?(o=0,u=r,Qr.assign(o,Zr,1,0),i=Zr[0],i&=2147483647,f=Nr(u),Br(i|=f&=2147483648,Zr[1])):t>1023?r<0?kr:Mr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Qr.assign(r,tt,1,0),n=tt[0],n&=2148532223,e*Br(n|=t+1023<<20,tt[1])))}function et(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var ot=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ut=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],it=5.960464477539063e-8,ft=et(20),at=et(20),ct=et(20),lt=et(20);function yt(r,t,n,e,o,u,i,f,a){var c,l,y,v,p,s,b,d,w;for(v=u,w=e[n],d=n,p=0;d>0;p++)l=it*w|0,lt[p]=w-16777216*l|0,w=e[d-1]+l,d-=1;if(w=nt(w,o),w-=8*Lr(.125*w),w-=b=0|w,y=0,o>0?(b+=p=lt[n-1]>>24-o,lt[n-1]-=p<<24-o,y=lt[n-1]>>23-o):0===o?y=lt[n-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<n;p++)d=lt[p],0===c?0!==d&&(c=1,lt[p]=16777216-d):lt[p]=16777215-d;if(o>0)switch(o){case 1:lt[n-1]&=8388607;break;case 2:lt[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=nt(1,o)))}if(0===w){for(d=0,p=n-1;p>=u;p--)d|=lt[p];if(0===d){for(s=1;0===lt[u-s];s++);for(p=n+1;p<=n+s;p++){for(a[f+p]=ot[i+p],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(p-d)];e[p]=l}return yt(r,t,n+=s,e,o,u,i,f,a)}}if(0===w)for(n-=1,o-=24;0===lt[n];)n-=1,o-=24;else(w=nt(w,-o))>=16777216?(l=it*w|0,lt[n]=w-16777216*l|0,o+=24,lt[n+=1]=l):lt[n]=0|w;for(l=nt(1,o),p=n;p>=0;p--)e[p]=l*lt[p],l*=it;for(p=n;p>=0;p--){for(l=0,s=0;s<=v&&s<=n-p;s++)l+=ut[s]*e[p+s];ct[n-p]=l}for(l=0,p=n;p>=0;p--)l+=ct[p];for(t[0]=0===y?l:-l,l=ct[0]-l,p=1;p<=n;p++)l+=ct[p];return t[1]=0===y?l:-l,7&b}function vt(r,t,n,e){var o,u,i,f,a,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)ft[a]=c<0?0:ot[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*ft[i+(a-c)];at[a]=o}return 4,yt(r,t,4,at,f,4,u,i,ft)}var pt=Math.round;function st(r,t,n){var e,o,u,i,f;return u=r-1.5707963267341256*(e=pt(.6366197723675814*r)),i=6077100506506192e-26*e,f=t>>20|0,n[0]=u-i,f-(Nr(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,f-(Nr(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e}var bt=1.5707963267341256,dt=6077100506506192e-26,wt=2*dt,mt=4*dt,jt=[0,0,0],gt=[0,0];function At(r,t){var n,e,o,u,i,f,a;if((o=2147483647&Nr(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?st(r,o,t):o<=1073928572?r>0?(a=r-bt,t[0]=a-dt,t[1]=a-t[0]-dt,1):(a=r+bt,t[0]=a+dt,t[1]=a-t[0]+dt,-1):r>0?(a=r-2*bt,t[0]=a-wt,t[1]=a-t[0]-wt,2):(a=r+2*bt,t[0]=a+wt,t[1]=a-t[0]+wt,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?st(r,o,t):r>0?(a=r-3*bt,t[0]=a-1.8231301519518578e-10,t[1]=a-t[0]-1.8231301519518578e-10,3):(a=r+3*bt,t[0]=a+1.8231301519518578e-10,t[1]=a-t[0]+1.8231301519518578e-10,-3):1075388923===o?st(r,o,t):r>0?(a=r-4*bt,t[0]=a-mt,t[1]=a-t[0]-mt,4):(a=r+4*bt,t[0]=a+mt,t[1]=a-t[0]+mt,-4);if(o<1094263291)return st(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return Ir[0]=r,Pr[Fr]}(r),a=Br(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)jt[i]=0|a,a=16777216*(a-jt[i]);for(jt[2]=a,u=3;0===jt[u-1];)u-=1;return f=vt(jt,gt,e,u),r<0?(t[0]=-gt[0],t[1]=-gt[1],-f):(t[0]=gt[0],t[1]=gt[1],f)}var ht=-.16666666666666632;function _t(r,t,n,e,o){var u,i,f,a,c;return i=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(a=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),f=c*r,n[o]=0===t?r+f*(ht+c*i):r-(c*(.5*t-f*i)-t-f*ht),i=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),i+=a*a*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),a=1-(u=.5*c),n[o+e]=a+(1-a-u+(c*i-r*t)),n}var Ot=[0,0];function Ut(r,t,n,e){var o,u;if(o=Nr(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(t[e]=r,t[e+n]=0),_t(r,0,t,n,e);if(o>=2146435072)return t[e]=NaN,t[e+n]=NaN,t;switch(u=At(r,Ot),_t(Ot[0],Ot[1],t,n,e),3&u){case 1:return o=t[e+n],t[e+n]=-t[e],t[e]=o,t;case 2:return t[e]*=-1,t[e+n]*=-1,t;case 3:return o=-t[e+n],t[e+n]=t[e],t[e]=o,t;default:return t}}function Nt(r){return Ut(r,[0,0],1,0)}l(Nt,"assign",Ut);var St=[0,0];function Et(r){var t,n,e,o,u,i;return r<0&&(r=-r),r===Mr?0:0===r?1:r<=4?(o=function(r){var t,n;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(t=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,n=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(t=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,n=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),t/n)}(u=r*r),(i=(r+2.404825557695773)*(r-2.40625- -.0014244423042272315))*o):r<=8?(o=function(r){var t,n;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(t=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,n=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(t=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),n=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),t/n)}(u=1-r*r/64),(i=(r+5.520078110286311)*(r-1413/256-.0005468602863106496))*o):(t=function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),n=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(t=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),n=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),t/n)}(e=(u=8/r)*u),n=function(r){var t,n;return 0===r?-.015625:((r<0?-r:r)<=1?(t=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,n=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(t=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,n=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),t/n)}(e),i=.5641895835477563/rr(r),Nt(St),i*(t*(St[1]+St[0])-u*n*(St[0]-St[1])))}function Ft(r){return $(r,Et)}export{Ft as default};
//# sourceMappingURL=mod.js.map
