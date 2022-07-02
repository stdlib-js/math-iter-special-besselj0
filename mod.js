// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),v="get"in n,y="set"in n,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,t,n.get),y&&a&&a.call(r,t,n.set),r},v=e,y=l,p=n()?v:y;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},h=Object.prototype.toString,_=h;var g=function(r){return _.call(r)},A=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&A.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=O,N=E,S=h;var P=g,F=function(r){var t,n,e;if(null==r)return S.call(r);n=r[N],t=U(r,N);try{r[N]=void 0}catch(t){return S.call(r)}return e=S.call(r),t?r[N]=n:delete r[N],e},I=j()?F:P,T=Boolean.prototype.toString;var G=I,V=function(r){try{return T.call(r),!0}catch(r){return!1}},x=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(x?V(r):"[object Boolean]"===G(r)))},B=m,L=H;var M=s,k=function(r){return B(r)||L(r)},W=H;M(k,"isPrimitive",m),M(k,"isObject",W);var C=k;var R=function(){return new Function("return this;")()},X="object"==typeof self?self:null,Y="object"==typeof window?window:null,q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},z="object"==typeof q?q:null;module.exports=z;var D=C.isPrimitive,J=R,K=X,Q=Y,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,nr=Int8Array,er=d,or=tr,ur=nr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var ar=function(){return/^\s*function\s*([^(]*)/i},fr=ar;s(fr,"REGEXP",ar());var cr=fr,lr=I;var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},yr=vr;var pr=function(r){return null!==r&&"object"==typeof r};s(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(pr));var br=pr;var sr=I,dr=cr.REGEXP,mr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wr=function(r){var t,n,e;if(("Object"===(n=sr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=dr.exec(e.toString()))return t[1]}return mr(r)?"Buffer":n},jr=wr;var hr=wr;var _r=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t},gr=function(r){return hr(r).toLowerCase()},Ar=ir()?gr:_r;var Or=function(r){return"function"===Ar(r)},Er=Or;var Ur=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Er(r.next)};var Nr=function(r){return"number"==typeof r},Sr=Number,Pr=Sr.prototype.toString;var Fr=I,Ir=Sr,Tr=function(r){try{return Pr.call(r),!0}catch(r){return!1}},Gr=j();var Vr=function(r){return"object"==typeof r&&(r instanceof Ir||(Gr?Tr(r):"[object Number]"===Fr(r)))},xr=Nr,Hr=Vr;var Br=s,Lr=function(r){return xr(r)||Hr(r)},Mr=Vr;Br(Lr,"isPrimitive",Nr),Br(Lr,"isObject",Mr);var kr=Lr,Wr=O;var Cr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Wr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rr=vr;var Xr=function(r){return"object"==typeof r&&null!==r&&!Rr(r)},Yr=Object.getPrototypeOf;var qr=function(r){return r.__proto__},zr=I,Dr=qr;var Jr=function(r){var t=Dr(r);return t||null===t?t:"[object Function]"===zr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Kr=Yr,Qr=Jr,Zr=Or(Object.getPrototypeOf)?Kr:Qr;var $r=Xr,rt=Or,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},nt=O,et=I,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!nt(r,"constructor")&&nt(t,"constructor")&&rt(t.constructor)&&"[object Function]"===et(t.constructor)&&nt(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!nt(r,t))return!1;return!0}(r)))},it=ut,at=O;var ft=s,ct=Or,lt=Ur,vt=kr.isPrimitive,yt=Cr,pt=function(r,t){return it(t)?(at(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var bt=function r(t,n,e){var o,u,i,a;if(!lt(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ct(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=pt(o,e)))throw i;return ft(u={},"next",f),ft(u,"return",c),yt&&ct(t[yt])&&ft(u,yt,l),u;function f(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:vt(r.value)?n(r.value):o.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[yt](),n,o)}},st=bt,dt=Math.sqrt,mt=I,wt="function"==typeof Uint32Array;var jt="function"==typeof Uint32Array?Uint32Array:null,ht=function(r){return wt&&r instanceof Uint32Array||"[object Uint32Array]"===mt(r)},_t=jt;var gt=function(){var r,t;if("function"!=typeof _t)return!1;try{t=new _t(t=[1,3.14,-3.14,4294967296,4294967297]),r=ht(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var At="function"==typeof Uint32Array?Uint32Array:void 0,Ot=function(){throw new Error("not implemented")},Et=gt()?At:Ot,Ut=I,Nt="function"==typeof Float64Array;var St="function"==typeof Float64Array?Float64Array:null,Pt=function(r){return Nt&&r instanceof Float64Array||"[object Float64Array]"===Ut(r)},Ft=St;var It=function(){var r,t;if("function"!=typeof Ft)return!1;try{t=new Ft([1,3.14,-3.14,NaN]),r=Pt(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Tt="function"==typeof Float64Array?Float64Array:void 0,Gt=function(){throw new Error("not implemented")},Vt=It()?Tt:Gt,xt=I,Ht="function"==typeof Uint8Array;var Bt="function"==typeof Uint8Array?Uint8Array:null,Lt=function(r){return Ht&&r instanceof Uint8Array||"[object Uint8Array]"===xt(r)},Mt=Bt;var kt=function(){var r,t;if("function"!=typeof Mt)return!1;try{t=new Mt(t=[1,3.14,-3.14,256,257]),r=Lt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Wt="function"==typeof Uint8Array?Uint8Array:void 0,Ct=function(){throw new Error("not implemented")},Rt=kt()?Wt:Ct,Xt=I,Yt="function"==typeof Uint16Array;var qt="function"==typeof Uint16Array?Uint16Array:null,zt=function(r){return Yt&&r instanceof Uint16Array||"[object Uint16Array]"===Xt(r)},Dt=qt;var Jt=function(){var r,t;if("function"!=typeof Dt)return!1;try{t=new Dt(t=[1,3.14,-3.14,65536,65537]),r=zt(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Kt,Qt="function"==typeof Uint16Array?Uint16Array:void 0,Zt=function(){throw new Error("not implemented")},$t={uint16:Jt()?Qt:Zt,uint8:Rt};(Kt=new $t.uint16(1))[0]=4660;var rn=52===new $t.uint8(Kt.buffer)[0],tn=Et,nn=!0===rn?1:0,en=new Vt(1),on=new tn(en.buffer);var un=function(r){return en[0]=r,on[nn]},an=Et,fn=!0===rn?0:1,cn=new Vt(1),ln=new an(cn.buffer);var vn,yn,pn=function(r){return cn[0]=r,ln[fn]};!0===rn?(vn=1,yn=0):(vn=0,yn=1);var bn=Et,sn={HIGH:vn,LOW:yn},dn=new Vt(1),mn=new bn(dn.buffer),wn=sn.HIGH,jn=sn.LOW;var hn=function(r,t){return mn[wn]=r,mn[jn]=t,dn[0]},_n=hn,gn=Math.floor,An=Number.POSITIVE_INFINITY,On=Sr.NEGATIVE_INFINITY;var En=function(r){return r!=r},Un=An,Nn=On;var Sn,Pn,Fn=function(r){return r===Un||r===Nn};!0===rn?(Sn=1,Pn=0):(Sn=0,Pn=1);var In=Et,Tn={HIGH:Sn,LOW:Pn},Gn=new Vt(1),Vn=new In(Gn.buffer),xn=Tn.HIGH,Hn=Tn.LOW;var Bn=function(r,t){return Gn[0]=t,r[0]=Vn[xn],r[1]=Vn[Hn],r};var Ln=function(r,t){return 1===arguments.length?Bn([0,0],r):Bn(r,t)},Mn=Ln,kn=un,Wn=_n,Cn=[0,0];var Rn=Fn,Xn=En,Yn=function(r){return Math.abs(r)};var qn=function(r,t){return Xn(t)||Rn(t)?(r[0]=t,r[1]=0,r):0!==t&&Yn(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var zn=un;var Dn=function(r){var t=zn(r);return(t=(2146435072&t)>>>20)-1023|0},Jn=An,Kn=On,Qn=En,Zn=Fn,$n=function(r,t){var n,e;return Mn(Cn,r),n=Cn[0],n&=2147483647,e=kn(t),Wn(n|=e&=2147483648,Cn[1])},re=function(r,t){return 1===arguments.length?qn([0,0],r):qn(r,t)},te=Dn,ne=Ln,ee=_n,oe=[0,0],ue=[0,0];var ie=function(r,t){var n,e;return 0===t||0===r||Qn(r)||Zn(r)?r:(re(oe,r),t+=oe[1],(t+=te(r=oe[0]))<-1074?$n(0,r):t>1023?r<0?Kn:Jn:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,ne(ue,r),n=ue[0],n&=2148532223,e*ee(n|=t+1023<<20,ue[1])))};var ae=function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n};var fe=gn,ce=ie,le=function(r){return ae(0,r)},ve=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ye=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],pe=5.960464477539063e-8,be=le(20),se=le(20),de=le(20),me=le(20);function we(r,t,n,e,o,u,i,a,f){var c,l,v,y,p,b,s,d,m;for(y=u,m=e[n],d=n,p=0;d>0;p++)l=pe*m|0,me[p]=m-16777216*l|0,m=e[d-1]+l,d-=1;if(m=ce(m,o),m-=8*fe(.125*m),m-=s=0|m,v=0,o>0?(s+=p=me[n-1]>>24-o,me[n-1]-=p<<24-o,v=me[n-1]>>23-o):0===o?v=me[n-1]>>23:m>=.5&&(v=2),v>0){for(s+=1,c=0,p=0;p<n;p++)d=me[p],0===c?0!==d&&(c=1,me[p]=16777216-d):me[p]=16777215-d;if(o>0)switch(o){case 1:me[n-1]&=8388607;break;case 2:me[n-1]&=4194303}2===v&&(m=1-m,0!==c&&(m-=ce(1,o)))}if(0===m){for(d=0,p=n-1;p>=u;p--)d|=me[p];if(0===d){for(b=1;0===me[u-b];b++);for(p=n+1;p<=n+b;p++){for(f[a+p]=ve[i+p],l=0,d=0;d<=a;d++)l+=r[d]*f[a+(p-d)];e[p]=l}return we(r,t,n+=b,e,o,u,i,a,f)}}if(0===m)for(n-=1,o-=24;0===me[n];)n-=1,o-=24;else(m=ce(m,-o))>=16777216?(l=pe*m|0,me[n]=m-16777216*l|0,o+=24,me[n+=1]=l):me[n]=0|m;for(l=ce(1,o),p=n;p>=0;p--)e[p]=l*me[p],l*=pe;for(p=n;p>=0;p--){for(l=0,b=0;b<=y&&b<=n-p;b++)l+=ye[b]*e[p+b];de[n-p]=l}for(l=0,p=n;p>=0;p--)l+=de[p];for(t[0]=0===v?l:-l,l=de[0]-l,p=1;p<=n;p++)l+=de[p];return t[1]=0===v?l:-l,7&s}var je=function(r,t,n,e){var o,u,i,a,f,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),a=n-24*(u+1),c=u-(i=e-1),l=i+4,f=0;f<=l;f++)be[f]=c<0?0:ve[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=i;c++)o+=r[c]*be[i+(f-c)];se[f]=o}return 4,we(r,t,4,se,a,4,u,i,be)},he=Math.round,_e=un;var ge=un,Ae=pn,Oe=_n,Ee=je,Ue=function(r,t,n){var e,o,u,i,a;return u=r-1.5707963267341256*(e=he(.6366197723675814*r)),i=6077100506506192e-26*e,a=t>>20|0,n[0]=u-i,a-(_e(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,a-(_e(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e},Ne=1.5707963267341256,Se=6077100506506192e-26,Pe=2*Se,Fe=4*Se,Ie=[0,0,0],Te=[0,0];var Ge=function(r,t){var n,e,o,u,i,a,f;if((o=2147483647&ge(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Ue(r,o,t):o<=1073928572?r>0?(f=r-Ne,t[0]=f-Se,t[1]=f-t[0]-Se,1):(f=r+Ne,t[0]=f+Se,t[1]=f-t[0]+Se,-1):r>0?(f=r-2*Ne,t[0]=f-Pe,t[1]=f-t[0]-Pe,2):(f=r+2*Ne,t[0]=f+Pe,t[1]=f-t[0]+Pe,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Ue(r,o,t):r>0?(f=r-3*Ne,t[0]=f-1.8231301519518578e-10,t[1]=f-t[0]-1.8231301519518578e-10,3):(f=r+3*Ne,t[0]=f+1.8231301519518578e-10,t[1]=f-t[0]+1.8231301519518578e-10,-3):1075388923===o?Ue(r,o,t):r>0?(f=r-4*Ne,t[0]=f-Fe,t[1]=f-t[0]-Fe,4):(f=r+4*Ne,t[0]=f+Fe,t[1]=f-t[0]+Fe,-4);if(o<1094263291)return Ue(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=Ae(r),f=Oe(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)Ie[i]=0|f,f=16777216*(f-Ie[i]);for(Ie[2]=f,u=3;0===Ie[u-1];)u-=1;return a=Ee(Ie,Te,e,u),r<0?(t[0]=-Te[0],t[1]=-Te[1],-a):(t[0]=Te[0],t[1]=Te[1],a)},Ve=-.16666666666666632;var xe=un,He=Ge,Be=function(r,t,n){var e,o,u,i,a;return o=.00833333333332249+(a=t*t)*(27557313707070068e-22*a-.0001984126982985795)+a*(i=a*a)*(1.58969099521155e-10*a-2.5050760253406863e-8),u=a*t,r[0]=0===n?t+u*(Ve+a*o):t-(a*(.5*n-u*o)-n-u*Ve),o=a*(.0416666666666666+a*(2480158728947673e-20*a-.001388888888887411)),o+=i*i*(a*(2.087572321298175e-9+-11359647557788195e-27*a)-2.7557314351390663e-7),i=1-(e=.5*a),r[1]=i+(1-i-e+(a*o-t*n)),r},Le=[0,0];var Me=function(r,t){var n,e;if(n=xe(t),(n&=2147483647)<=1072243195)return n<1044381696&&0==(0|t)&&(r[0]=t,r[1]=0),Be(r,t,0);if(n>=2146435072)return r[0]=NaN,r[1]=NaN,r;switch(e=He(t,Le),Be(r,Le[0],Le[1]),3&e){case 1:return n=r[1],r[1]=-r[0],r[0]=n,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return n=-r[1],r[1]=r[0],r[0]=n,r;default:return r}};var ke=dt,We=function(r,t){return 1===arguments.length?Me([0,0],r):Me(r,t)},Ce=An,Re=function(r){var t,n;return 0===r?-.17291506903064494:((r<0?-r:r)<=1?(t=r*(27282507878.60594+r*(r*(6630299.79048338+r*(r*(103.44222815443189+-.12117036164593528*r)-36629.81465510709))-621407004.2354012))-412986685009.9087,n=2388378799633.229+r*(26328198300.85965+r*(139850973.72263435+r*(456126.9622421994+r*(936.1402239233771+r*(1+0*r)))))):(t=(r=1/r)*(103.44222815443189+r*(r*(6630299.79048338+r*(r*(27282507878.60594+-412986685009.9087*r)-621407004.2354012))-36629.81465510709))-.12117036164593528,n=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(139850973.72263435+r*(26328198300.85965+2388378799633.229*r)))))),t/n)},Xe=function(r){var t,n;return 0===r?.005119512965174424:((r<0?-r:r)<=1?(t=r*(r*(r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+48.5917033559165*r))))-7287.970246446462)-12254.07816137899)-1831.9397969392085,n=r*(245991.0226258631+r*(r*(18680.99000835919+r*(r*(333.07310774649073+r*(1*r-25.258076240801554))-2945.876654550934))-84055.06259116957))-357834.78026152303):(t=48.5917033559165+(r=1/r)*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(r*(-1831.9397969392085*r-12254.07816137899)-7287.970246446462))))),n=1+r*(r*(333.07310774649073+r*(r*(18680.99000835919+r*(r*(245991.0226258631+-357834.78026152303*r)-84055.06259116957))-2945.876654550934))-25.258076240801554)),t/n)},Ye=function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+.8896154842421046*r)))),n=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+1*r))))):(t=.8896154842421046+(r=1/r)*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+22779.090197304686*r)))),n=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+22779.090197304686*r))))),t/n)},qe=function(r){var t,n;return 0===r?-.015625:((r<0?-r:r)<=1?(t=r*(r*(r*(r*(-.008803330304868075*r-1.244102674583564)-22.300261666214197)-111.83429920482737)-185.91953644342993)-89.22660020080009,n=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+1*r))))):(t=(r=1/r)*(r*(r*(r*(-89.22660020080009*r-185.91953644342993)-111.83429920482737)-22.300261666214197)-1.244102674583564)-.008803330304868075,n=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+5710.502412851206*r))))),t/n)},ze=[0,0];var De=function(r){var t,n,e,o,u;return r<0&&(r=-r),r===Ce?0:0===r?1:r<=4?(u=(r+2.404825557695773)*(r-2.40625- -.0014244423042272315))*Re(o=r*r):r<=8?(u=(r+5.520078110286311)*(r-1413/256-.0005468602863106496))*Xe(o=1-r*r/64):(t=Ye(e=(o=8/r)*o),n=qe(e),u=.5641895835477563/ke(r),We(ze,r),u*(t*(ze[1]+ze[0])-o*n*(ze[0]-ze[1])))},Je=De;function Ke(r){return st(r,Je)}export{Ke as default};
//# sourceMappingURL=mod.js.map
