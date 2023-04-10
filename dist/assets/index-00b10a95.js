(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Dn="/icare-lit/assets/rose-ed9a43c9.svg",Rn="/icare-lit/assets/github-15128406.svg";function ee(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Fn(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function tn(e){let t,n,r;e.length!==2?(t=ee,n=(o,l)=>ee(e(o),l),r=(o,l)=>e(o)-l):(t=e===ee||e===Fn?e:zn,n=e,r=e);function s(o,l,c=0,d=o.length){if(c<d){if(t(l,l)!==0)return d;do{const u=c+d>>>1;n(o[u],l)<0?c=u+1:d=u}while(c<d)}return c}function i(o,l,c=0,d=o.length){if(c<d){if(t(l,l)!==0)return d;do{const u=c+d>>>1;n(o[u],l)<=0?c=u+1:d=u}while(c<d)}return c}function a(o,l,c=0,d=o.length){const u=s(o,l,c,d-1);return u>c&&r(o[u-1],l)>-r(o[u],l)?u-1:u}return{left:s,center:a,right:i}}function zn(){return 0}function Yn(e){return e===null?NaN:+e}function*Vn(e,t){if(t===void 0)for(let n of e)n!=null&&(n=+n)>=n&&(yield n);else{let n=-1;for(let r of e)(r=t(r,++n,e))!=null&&(r=+r)>=r&&(yield r)}}const Xn=tn(ee),Wn=Xn.right;tn(Yn).center;const jn=Wn;function gt(e,t){let n,r;if(t===void 0)for(const s of e)s!=null&&(n===void 0?s>=s&&(n=r=s):(n>s&&(n=s),r<s&&(r=s)));else{let s=-1;for(let i of e)(i=t(i,++s,e))!=null&&(n===void 0?i>=i&&(n=r=i):(n>i&&(n=i),r<i&&(r=i)))}return[n,r]}function Un(e=ee){if(e===ee)return nn;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,n)=>{const r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function nn(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const Gn=Math.sqrt(50),Kn=Math.sqrt(10),Jn=Math.sqrt(2);function Pe(e,t,n){const r=(t-e)/Math.max(0,n),s=Math.floor(Math.log10(r)),i=r/Math.pow(10,s),a=i>=Gn?10:i>=Kn?5:i>=Jn?2:1;let o,l,c;return s<0?(c=Math.pow(10,-s)/a,o=Math.round(e*c),l=Math.round(t*c),o/c<e&&++o,l/c>t&&--l,c=-c):(c=Math.pow(10,s)*a,o=Math.round(e/c),l=Math.round(t/c),o*c<e&&++o,l*c>t&&--l),l<o&&.5<=n&&n<2?Pe(e,t,n*2):[o,l,c]}function Zn(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[s,i,a]=r?Pe(t,e,n):Pe(e,t,n);if(!(i>=s))return[];const o=i-s+1,l=new Array(o);if(r)if(a<0)for(let c=0;c<o;++c)l[c]=(i-c)/-a;else for(let c=0;c<o;++c)l[c]=(i-c)*a;else if(a<0)for(let c=0;c<o;++c)l[c]=(s+c)/-a;else for(let c=0;c<o;++c)l[c]=(s+c)*a;return l}function tt(e,t,n){return t=+t,e=+e,n=+n,Pe(e,t,n)[2]}function Qn(e,t,n){t=+t,e=+e,n=+n;const r=t<e,s=r?tt(t,e,n):tt(e,t,n);return(r?-1:1)*(s<0?1/-s:s)}function nt(e,t){let n;if(t===void 0)for(const r of e)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let s of e)(s=t(s,++r,e))!=null&&(n<s||n===void 0&&s>=s)&&(n=s)}return n}function rt(e,t){let n;if(t===void 0)for(const r of e)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let s of e)(s=t(s,++r,e))!=null&&(n>s||n===void 0&&s>=s)&&(n=s)}return n}function rn(e,t,n=0,r=1/0,s){if(t=Math.floor(t),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(e.length-1,r)),!(n<=t&&t<=r))return e;for(s=s===void 0?nn:Un(s);r>n;){if(r-n>600){const l=r-n+1,c=t-n+1,d=Math.log(l),u=.5*Math.exp(2*d/3),m=.5*Math.sqrt(d*u*(l-u)/l)*(c-l/2<0?-1:1),h=Math.max(n,Math.floor(t-c*u/l+m)),x=Math.min(r,Math.floor(t+(l-c)*u/l+m));rn(e,t,h,x,s)}const i=e[t];let a=n,o=r;for(oe(e,n,t),s(e[r],i)>0&&oe(e,n,r);a<o;){for(oe(e,a,o),++a,--o;s(e[a],i)<0;)++a;for(;s(e[o],i)>0;)--o}s(e[n],i)===0?oe(e,n,o):(++o,oe(e,o,r)),o<=t&&(n=o+1),t<=o&&(r=o-1)}return e}function oe(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function Ke(e,t,n){if(e=Float64Array.from(Vn(e,n)),!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return rt(e);if(t>=1)return nt(e);var r,s=(r-1)*t,i=Math.floor(s),a=nt(rn(e,i).subarray(0,i+1)),o=rt(e.subarray(i+1));return a+(o-a)*(s-i)}}function er(e,t){let n=0,r=0;if(t===void 0)for(let s of e)s!=null&&(s=+s)>=s&&(++n,r+=s);else{let s=-1;for(let i of e)(i=t(i,++s,e))!=null&&(i=+i)>=i&&(++n,r+=i)}if(n)return r/n}function At(e,t,n){e=+e,t=+t,n=(s=arguments.length)<2?(t=e,e=0,1):s<3?1:+n;for(var r=-1,s=Math.max(0,Math.ceil((t-e)/n))|0,i=new Array(s);++r<s;)i[r]=e+r*n;return i}function tr(e){return e}var Se=1,Je=2,st=3,ce=4,Lt=1e-6;function nr(e){return"translate("+e+",0)"}function rr(e){return"translate(0,"+e+")"}function sr(e){return t=>+e(t)}function ir(e,t){return t=Math.max(0,e.bandwidth()-t*2)/2,e.round()&&(t=Math.round(t)),n=>+e(n)+t}function ar(){return!this.__axis}function yt(e,t){var n=[],r=null,s=null,i=6,a=6,o=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=e===Se||e===ce?-1:1,d=e===ce||e===Je?"x":"y",u=e===Se||e===st?nr:rr;function m(h){var x=r??(t.ticks?t.ticks.apply(t,n):t.domain()),b=s??(t.tickFormat?t.tickFormat.apply(t,n):tr),M=Math.max(i,0)+o,N=t.range(),p=+N[0]+l,f=+N[N.length-1]+l,g=(t.bandwidth?ir:sr)(t.copy(),l),v=h.selection?h.selection():h,w=v.selectAll(".domain").data([null]),q=v.selectAll(".tick").data(x,t).order(),k=q.exit(),A=q.enter().append("g").attr("class","tick"),$=q.select("line"),y=q.select("text");w=w.merge(w.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),q=q.merge(A),$=$.merge(A.append("line").attr("stroke","currentColor").attr(d+"2",c*i)),y=y.merge(A.append("text").attr("fill","currentColor").attr(d,c*M).attr("dy",e===Se?"0em":e===st?"0.71em":"0.32em")),h!==v&&(w=w.transition(h),q=q.transition(h),$=$.transition(h),y=y.transition(h),k=k.transition(h).attr("opacity",Lt).attr("transform",function(E){return isFinite(E=g(E))?u(E+l):this.getAttribute("transform")}),A.attr("opacity",Lt).attr("transform",function(E){var _=this.parentNode.__axis;return u((_&&isFinite(_=_(E))?_:g(E))+l)})),k.remove(),w.attr("d",e===ce||e===Je?a?"M"+c*a+","+p+"H"+l+"V"+f+"H"+c*a:"M"+l+","+p+"V"+f:a?"M"+p+","+c*a+"V"+l+"H"+f+"V"+c*a:"M"+p+","+l+"H"+f),q.attr("opacity",1).attr("transform",function(E){return u(g(E)+l)}),$.attr(d+"2",c*i),y.attr(d,c*M).text(b),v.filter(ar).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",e===Je?"start":e===ce?"end":"middle"),v.each(function(){this.__axis=g})}return m.scale=function(h){return arguments.length?(t=h,m):t},m.ticks=function(){return n=Array.from(arguments),m},m.tickArguments=function(h){return arguments.length?(n=h==null?[]:Array.from(h),m):n.slice()},m.tickValues=function(h){return arguments.length?(r=h==null?null:Array.from(h),m):r&&r.slice()},m.tickFormat=function(h){return arguments.length?(s=h,m):s},m.tickSize=function(h){return arguments.length?(i=a=+h,m):i},m.tickSizeInner=function(h){return arguments.length?(i=+h,m):i},m.tickSizeOuter=function(h){return arguments.length?(a=+h,m):a},m.tickPadding=function(h){return arguments.length?(o=+h,m):o},m.offset=function(h){return arguments.length?(l=+h,m):l},m}function or(e){return yt(Se,e)}function sn(e){return yt(st,e)}function lr(e){return yt(ce,e)}var cr={value:()=>{}};function xt(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Te(n)}function Te(e){this._=e}function dr(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",s=n.indexOf(".");if(s>=0&&(r=n.slice(s+1),n=n.slice(0,s)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}Te.prototype=xt.prototype={constructor:Te,on:function(e,t){var n=this._,r=dr(e+"",n),s,i=-1,a=r.length;if(arguments.length<2){for(;++i<a;)if((s=(e=r[i]).type)&&(s=ur(n[s],e.name)))return s;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<a;)if(s=(e=r[i]).type)n[s]=It(n[s],e.name,t);else if(t==null)for(s in n)n[s]=It(n[s],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Te(e)},call:function(e,t){if((s=arguments.length-2)>0)for(var n=new Array(s),r=0,s,i;r<s;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],r=0,s=i.length;r<s;++r)i[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],s=0,i=r.length;s<i;++s)r[s].value.apply(t,n)}};function ur(e,t){for(var n=0,r=e.length,s;n<r;++n)if((s=e[n]).name===t)return s.value}function It(e,t,n){for(var r=0,s=e.length;r<s;++r)if(e[r].name===t){e[r]=cr,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var it="http://www.w3.org/1999/xhtml";const $t={svg:"http://www.w3.org/2000/svg",xhtml:it,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function je(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),$t.hasOwnProperty(t)?{space:$t[t],local:e}:e}function mr(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===it&&t.documentElement.namespaceURI===it?t.createElement(e):t.createElementNS(n,e)}}function fr(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function an(e){var t=je(e);return(t.local?fr:mr)(t)}function hr(){}function vt(e){return e==null?hr:function(){return this.querySelector(e)}}function pr(e){typeof e!="function"&&(e=vt(e));for(var t=this._groups,n=t.length,r=new Array(n),s=0;s<n;++s)for(var i=t[s],a=i.length,o=r[s]=new Array(a),l,c,d=0;d<a;++d)(l=i[d])&&(c=e.call(l,l.__data__,d,i))&&("__data__"in l&&(c.__data__=l.__data__),o[d]=c);return new H(r,this._parents)}function gr(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function yr(){return[]}function on(e){return e==null?yr:function(){return this.querySelectorAll(e)}}function xr(e){return function(){return gr(e.apply(this,arguments))}}function vr(e){typeof e=="function"?e=xr(e):e=on(e);for(var t=this._groups,n=t.length,r=[],s=[],i=0;i<n;++i)for(var a=t[i],o=a.length,l,c=0;c<o;++c)(l=a[c])&&(r.push(e.call(l,l.__data__,c,a)),s.push(l));return new H(r,s)}function ln(e){return function(){return this.matches(e)}}function cn(e){return function(t){return t.matches(e)}}var br=Array.prototype.find;function wr(e){return function(){return br.call(this.children,e)}}function kr(){return this.firstElementChild}function _r(e){return this.select(e==null?kr:wr(typeof e=="function"?e:cn(e)))}var Mr=Array.prototype.filter;function Nr(){return Array.from(this.children)}function qr(e){return function(){return Mr.call(this.children,e)}}function Er(e){return this.selectAll(e==null?Nr:qr(typeof e=="function"?e:cn(e)))}function Ar(e){typeof e!="function"&&(e=ln(e));for(var t=this._groups,n=t.length,r=new Array(n),s=0;s<n;++s)for(var i=t[s],a=i.length,o=r[s]=[],l,c=0;c<a;++c)(l=i[c])&&e.call(l,l.__data__,c,i)&&o.push(l);return new H(r,this._parents)}function dn(e){return new Array(e.length)}function Lr(){return new H(this._enter||this._groups.map(dn),this._parents)}function Oe(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Oe.prototype={constructor:Oe,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Ir(e){return function(){return e}}function $r(e,t,n,r,s,i){for(var a=0,o,l=t.length,c=i.length;a<c;++a)(o=t[a])?(o.__data__=i[a],r[a]=o):n[a]=new Oe(e,i[a]);for(;a<l;++a)(o=t[a])&&(s[a]=o)}function Br(e,t,n,r,s,i,a){var o,l,c=new Map,d=t.length,u=i.length,m=new Array(d),h;for(o=0;o<d;++o)(l=t[o])&&(m[o]=h=a.call(l,l.__data__,o,t)+"",c.has(h)?s[o]=l:c.set(h,l));for(o=0;o<u;++o)h=a.call(e,i[o],o,i)+"",(l=c.get(h))?(r[o]=l,l.__data__=i[o],c.delete(h)):n[o]=new Oe(e,i[o]);for(o=0;o<d;++o)(l=t[o])&&c.get(m[o])===l&&(s[o]=l)}function Sr(e){return e.__data__}function Tr(e,t){if(!arguments.length)return Array.from(this,Sr);var n=t?Br:$r,r=this._parents,s=this._groups;typeof e!="function"&&(e=Ir(e));for(var i=s.length,a=new Array(i),o=new Array(i),l=new Array(i),c=0;c<i;++c){var d=r[c],u=s[c],m=u.length,h=Cr(e.call(d,d&&d.__data__,c,r)),x=h.length,b=o[c]=new Array(x),M=a[c]=new Array(x),N=l[c]=new Array(m);n(d,u,b,M,N,h,t);for(var p=0,f=0,g,v;p<x;++p)if(g=b[p]){for(p>=f&&(f=p+1);!(v=M[f])&&++f<x;);g._next=v||null}}return a=new H(a,r),a._enter=o,a._exit=l,a}function Cr(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Hr(){return new H(this._exit||this._groups.map(dn),this._parents)}function Pr(e,t,n){var r=this.enter(),s=this,i=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(s=t(s),s&&(s=s.selection())),n==null?i.remove():n(i),r&&s?r.merge(s).order():s}function Or(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,s=n.length,i=r.length,a=Math.min(s,i),o=new Array(s),l=0;l<a;++l)for(var c=n[l],d=r[l],u=c.length,m=o[l]=new Array(u),h,x=0;x<u;++x)(h=c[x]||d[x])&&(m[x]=h);for(;l<s;++l)o[l]=n[l];return new H(o,this._parents)}function Dr(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],s=r.length-1,i=r[s],a;--s>=0;)(a=r[s])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function Rr(e){e||(e=Fr);function t(u,m){return u&&m?e(u.__data__,m.__data__):!u-!m}for(var n=this._groups,r=n.length,s=new Array(r),i=0;i<r;++i){for(var a=n[i],o=a.length,l=s[i]=new Array(o),c,d=0;d<o;++d)(c=a[d])&&(l[d]=c);l.sort(t)}return new H(s,this._parents).order()}function Fr(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function zr(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Yr(){return Array.from(this)}function Vr(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],s=0,i=r.length;s<i;++s){var a=r[s];if(a)return a}return null}function Xr(){let e=0;for(const t of this)++e;return e}function Wr(){return!this.node()}function jr(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var s=t[n],i=0,a=s.length,o;i<a;++i)(o=s[i])&&e.call(o,o.__data__,i,s);return this}function Ur(e){return function(){this.removeAttribute(e)}}function Gr(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Kr(e,t){return function(){this.setAttribute(e,t)}}function Jr(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function Zr(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function Qr(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function es(e,t){var n=je(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?Gr:Ur:typeof t=="function"?n.local?Qr:Zr:n.local?Jr:Kr)(n,t))}function un(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function ts(e){return function(){this.style.removeProperty(e)}}function ns(e,t,n){return function(){this.style.setProperty(e,t,n)}}function rs(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function ss(e,t,n){return arguments.length>1?this.each((t==null?ts:typeof t=="function"?rs:ns)(e,t,n??"")):ne(this.node(),e)}function ne(e,t){return e.style.getPropertyValue(t)||un(e).getComputedStyle(e,null).getPropertyValue(t)}function is(e){return function(){delete this[e]}}function as(e,t){return function(){this[e]=t}}function os(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function ls(e,t){return arguments.length>1?this.each((t==null?is:typeof t=="function"?os:as)(e,t)):this.node()[e]}function mn(e){return e.trim().split(/^|\s+/)}function bt(e){return e.classList||new fn(e)}function fn(e){this._node=e,this._names=mn(e.getAttribute("class")||"")}fn.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function hn(e,t){for(var n=bt(e),r=-1,s=t.length;++r<s;)n.add(t[r])}function pn(e,t){for(var n=bt(e),r=-1,s=t.length;++r<s;)n.remove(t[r])}function cs(e){return function(){hn(this,e)}}function ds(e){return function(){pn(this,e)}}function us(e,t){return function(){(t.apply(this,arguments)?hn:pn)(this,e)}}function ms(e,t){var n=mn(e+"");if(arguments.length<2){for(var r=bt(this.node()),s=-1,i=n.length;++s<i;)if(!r.contains(n[s]))return!1;return!0}return this.each((typeof t=="function"?us:t?cs:ds)(n,t))}function fs(){this.textContent=""}function hs(e){return function(){this.textContent=e}}function ps(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function gs(e){return arguments.length?this.each(e==null?fs:(typeof e=="function"?ps:hs)(e)):this.node().textContent}function ys(){this.innerHTML=""}function xs(e){return function(){this.innerHTML=e}}function vs(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function bs(e){return arguments.length?this.each(e==null?ys:(typeof e=="function"?vs:xs)(e)):this.node().innerHTML}function ws(){this.nextSibling&&this.parentNode.appendChild(this)}function ks(){return this.each(ws)}function _s(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Ms(){return this.each(_s)}function Ns(e){var t=typeof e=="function"?e:an(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function qs(){return null}function Es(e,t){var n=typeof e=="function"?e:an(e),r=t==null?qs:typeof t=="function"?t:vt(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function As(){var e=this.parentNode;e&&e.removeChild(this)}function Ls(){return this.each(As)}function Is(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function $s(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Bs(e){return this.select(e?$s:Is)}function Ss(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Ts(e){return function(t){e.call(this,t,this.__data__)}}function Cs(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function Hs(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,s=t.length,i;n<s;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++r]=i;++r?t.length=r:delete this.__on}}}function Ps(e,t,n){return function(){var r=this.__on,s,i=Ts(t);if(r){for(var a=0,o=r.length;a<o;++a)if((s=r[a]).type===e.type&&s.name===e.name){this.removeEventListener(s.type,s.listener,s.options),this.addEventListener(s.type,s.listener=i,s.options=n),s.value=t;return}}this.addEventListener(e.type,i,n),s={type:e.type,name:e.name,value:t,listener:i,options:n},r?r.push(s):this.__on=[s]}}function Os(e,t,n){var r=Cs(e+""),s,i=r.length,a;if(arguments.length<2){var o=this.node().__on;if(o){for(var l=0,c=o.length,d;l<c;++l)for(s=0,d=o[l];s<i;++s)if((a=r[s]).type===d.type&&a.name===d.name)return d.value}return}for(o=t?Ps:Hs,s=0;s<i;++s)this.each(o(r[s],t,n));return this}function gn(e,t,n){var r=un(e),s=r.CustomEvent;typeof s=="function"?s=new s(t,n):(s=r.document.createEvent("Event"),n?(s.initEvent(t,n.bubbles,n.cancelable),s.detail=n.detail):s.initEvent(t,!1,!1)),e.dispatchEvent(s)}function Ds(e,t){return function(){return gn(this,e,t)}}function Rs(e,t){return function(){return gn(this,e,t.apply(this,arguments))}}function Fs(e,t){return this.each((typeof t=="function"?Rs:Ds)(e,t))}function*zs(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],s=0,i=r.length,a;s<i;++s)(a=r[s])&&(yield a)}var yn=[null];function H(e,t){this._groups=e,this._parents=t}function ae(){return new H([[document.documentElement]],yn)}function Ys(){return this}H.prototype=ae.prototype={constructor:H,select:pr,selectAll:vr,selectChild:_r,selectChildren:Er,filter:Ar,data:Tr,enter:Lr,exit:Hr,join:Pr,merge:Or,selection:Ys,order:Dr,sort:Rr,call:zr,nodes:Yr,node:Vr,size:Xr,empty:Wr,each:jr,attr:es,style:ss,property:ls,classed:ms,text:gs,html:bs,raise:ks,lower:Ms,append:Ns,insert:Es,remove:Ls,clone:Bs,datum:Ss,on:Os,dispatch:Fs,[Symbol.iterator]:zs};function at(e){return typeof e=="string"?new H([[document.querySelector(e)]],[document.documentElement]):new H([[e]],yn)}function wt(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function xn(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function qe(){}var xe=.7,De=1/xe,te="\\s*([+-]?\\d+)\\s*",ve="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",F="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Vs=/^#([0-9a-f]{3,8})$/,Xs=new RegExp(`^rgb\\(${te},${te},${te}\\)$`),Ws=new RegExp(`^rgb\\(${F},${F},${F}\\)$`),js=new RegExp(`^rgba\\(${te},${te},${te},${ve}\\)$`),Us=new RegExp(`^rgba\\(${F},${F},${F},${ve}\\)$`),Gs=new RegExp(`^hsl\\(${ve},${F},${F}\\)$`),Ks=new RegExp(`^hsla\\(${ve},${F},${F},${ve}\\)$`),Bt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};wt(qe,U,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:St,formatHex:St,formatHex8:Js,formatHsl:Zs,formatRgb:Tt,toString:Tt});function St(){return this.rgb().formatHex()}function Js(){return this.rgb().formatHex8()}function Zs(){return vn(this).formatHsl()}function Tt(){return this.rgb().formatRgb()}function U(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Vs.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Ct(t):n===3?new T(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Ee(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Ee(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Xs.exec(e))?new T(t[1],t[2],t[3],1):(t=Ws.exec(e))?new T(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=js.exec(e))?Ee(t[1],t[2],t[3],t[4]):(t=Us.exec(e))?Ee(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Gs.exec(e))?Ot(t[1],t[2]/100,t[3]/100,1):(t=Ks.exec(e))?Ot(t[1],t[2]/100,t[3]/100,t[4]):Bt.hasOwnProperty(e)?Ct(Bt[e]):e==="transparent"?new T(NaN,NaN,NaN,0):null}function Ct(e){return new T(e>>16&255,e>>8&255,e&255,1)}function Ee(e,t,n,r){return r<=0&&(e=t=n=NaN),new T(e,t,n,r)}function Qs(e){return e instanceof qe||(e=U(e)),e?(e=e.rgb(),new T(e.r,e.g,e.b,e.opacity)):new T}function ot(e,t,n,r){return arguments.length===1?Qs(e):new T(e,t,n,r??1)}function T(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}wt(T,ot,xn(qe,{brighter(e){return e=e==null?De:Math.pow(De,e),new T(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?xe:Math.pow(xe,e),new T(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new T(j(this.r),j(this.g),j(this.b),Re(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Ht,formatHex:Ht,formatHex8:ei,formatRgb:Pt,toString:Pt}));function Ht(){return`#${W(this.r)}${W(this.g)}${W(this.b)}`}function ei(){return`#${W(this.r)}${W(this.g)}${W(this.b)}${W((isNaN(this.opacity)?1:this.opacity)*255)}`}function Pt(){const e=Re(this.opacity);return`${e===1?"rgb(":"rgba("}${j(this.r)}, ${j(this.g)}, ${j(this.b)}${e===1?")":`, ${e})`}`}function Re(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function j(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function W(e){return e=j(e),(e<16?"0":"")+e.toString(16)}function Ot(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new O(e,t,n,r)}function vn(e){if(e instanceof O)return new O(e.h,e.s,e.l,e.opacity);if(e instanceof qe||(e=U(e)),!e)return new O;if(e instanceof O)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,s=Math.min(t,n,r),i=Math.max(t,n,r),a=NaN,o=i-s,l=(i+s)/2;return o?(t===i?a=(n-r)/o+(n<r)*6:n===i?a=(r-t)/o+2:a=(t-n)/o+4,o/=l<.5?i+s:2-i-s,a*=60):o=l>0&&l<1?0:a,new O(a,o,l,e.opacity)}function ti(e,t,n,r){return arguments.length===1?vn(e):new O(e,t,n,r??1)}function O(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}wt(O,ti,xn(qe,{brighter(e){return e=e==null?De:Math.pow(De,e),new O(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?xe:Math.pow(xe,e),new O(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,s=2*n-r;return new T(Ze(e>=240?e-240:e+120,s,r),Ze(e,s,r),Ze(e<120?e+240:e-120,s,r),this.opacity)},clamp(){return new O(Dt(this.h),Ae(this.s),Ae(this.l),Re(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Re(this.opacity);return`${e===1?"hsl(":"hsla("}${Dt(this.h)}, ${Ae(this.s)*100}%, ${Ae(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Dt(e){return e=(e||0)%360,e<0?e+360:e}function Ae(e){return Math.max(0,Math.min(1,e||0))}function Ze(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const kt=e=>()=>e;function ni(e,t){return function(n){return e+n*t}}function ri(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function si(e){return(e=+e)==1?bn:function(t,n){return n-t?ri(t,n,e):kt(isNaN(t)?n:t)}}function bn(e,t){var n=t-e;return n?ni(e,n):kt(isNaN(e)?t:e)}const Fe=function e(t){var n=si(t);function r(s,i){var a=n((s=ot(s)).r,(i=ot(i)).r),o=n(s.g,i.g),l=n(s.b,i.b),c=bn(s.opacity,i.opacity);return function(d){return s.r=a(d),s.g=o(d),s.b=l(d),s.opacity=c(d),s+""}}return r.gamma=e,r}(1);function ii(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),s;return function(i){for(s=0;s<n;++s)r[s]=e[s]*(1-i)+t[s]*i;return r}}function ai(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function oi(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,s=new Array(r),i=new Array(n),a;for(a=0;a<r;++a)s[a]=_t(e[a],t[a]);for(;a<n;++a)i[a]=t[a];return function(o){for(a=0;a<r;++a)i[a]=s[a](o);return i}}function li(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function P(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function ci(e,t){var n={},r={},s;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(s in t)s in e?n[s]=_t(e[s],t[s]):r[s]=t[s];return function(i){for(s in n)r[s]=n[s](i);return r}}var lt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Qe=new RegExp(lt.source,"g");function di(e){return function(){return e}}function ui(e){return function(t){return e(t)+""}}function wn(e,t){var n=lt.lastIndex=Qe.lastIndex=0,r,s,i,a=-1,o=[],l=[];for(e=e+"",t=t+"";(r=lt.exec(e))&&(s=Qe.exec(t));)(i=s.index)>n&&(i=t.slice(n,i),o[a]?o[a]+=i:o[++a]=i),(r=r[0])===(s=s[0])?o[a]?o[a]+=s:o[++a]=s:(o[++a]=null,l.push({i:a,x:P(r,s)})),n=Qe.lastIndex;return n<t.length&&(i=t.slice(n),o[a]?o[a]+=i:o[++a]=i),o.length<2?l[0]?ui(l[0].x):di(t):(t=l.length,function(c){for(var d=0,u;d<t;++d)o[(u=l[d]).i]=u.x(c);return o.join("")})}function _t(e,t){var n=typeof t,r;return t==null||n==="boolean"?kt(t):(n==="number"?P:n==="string"?(r=U(t))?(t=r,Fe):wn:t instanceof U?Fe:t instanceof Date?li:ai(t)?ii:Array.isArray(t)?oi:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?ci:P)(e,t)}function mi(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}var Rt=180/Math.PI,ct={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function kn(e,t,n,r,s,i){var a,o,l;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(l=e*n+t*r)&&(n-=e*l,r-=t*l),(o=Math.sqrt(n*n+r*r))&&(n/=o,r/=o,l/=o),e*r<t*n&&(e=-e,t=-t,l=-l,a=-a),{translateX:s,translateY:i,rotate:Math.atan2(t,e)*Rt,skewX:Math.atan(l)*Rt,scaleX:a,scaleY:o}}var Le;function fi(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?ct:kn(t.a,t.b,t.c,t.d,t.e,t.f)}function hi(e){return e==null||(Le||(Le=document.createElementNS("http://www.w3.org/2000/svg","g")),Le.setAttribute("transform",e),!(e=Le.transform.baseVal.consolidate()))?ct:(e=e.matrix,kn(e.a,e.b,e.c,e.d,e.e,e.f))}function _n(e,t,n,r){function s(c){return c.length?c.pop()+" ":""}function i(c,d,u,m,h,x){if(c!==u||d!==m){var b=h.push("translate(",null,t,null,n);x.push({i:b-4,x:P(c,u)},{i:b-2,x:P(d,m)})}else(u||m)&&h.push("translate("+u+t+m+n)}function a(c,d,u,m){c!==d?(c-d>180?d+=360:d-c>180&&(c+=360),m.push({i:u.push(s(u)+"rotate(",null,r)-2,x:P(c,d)})):d&&u.push(s(u)+"rotate("+d+r)}function o(c,d,u,m){c!==d?m.push({i:u.push(s(u)+"skewX(",null,r)-2,x:P(c,d)}):d&&u.push(s(u)+"skewX("+d+r)}function l(c,d,u,m,h,x){if(c!==u||d!==m){var b=h.push(s(h)+"scale(",null,",",null,")");x.push({i:b-4,x:P(c,u)},{i:b-2,x:P(d,m)})}else(u!==1||m!==1)&&h.push(s(h)+"scale("+u+","+m+")")}return function(c,d){var u=[],m=[];return c=e(c),d=e(d),i(c.translateX,c.translateY,d.translateX,d.translateY,u,m),a(c.rotate,d.rotate,u,m),o(c.skewX,d.skewX,u,m),l(c.scaleX,c.scaleY,d.scaleX,d.scaleY,u,m),c=d=null,function(h){for(var x=-1,b=m.length,M;++x<b;)u[(M=m[x]).i]=M.x(h);return u.join("")}}}var pi=_n(fi,"px, ","px)","deg)"),gi=_n(hi,", ",")",")"),re=0,de=0,le=0,Mn=1e3,ze,ue,Ye=0,G=0,Ue=0,be=typeof performance=="object"&&performance.now?performance:Date,Nn=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Mt(){return G||(Nn(yi),G=be.now()+Ue)}function yi(){G=0}function Ve(){this._call=this._time=this._next=null}Ve.prototype=qn.prototype={constructor:Ve,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Mt():+n)+(t==null?0:+t),!this._next&&ue!==this&&(ue?ue._next=this:ze=this,ue=this),this._call=e,this._time=n,dt()},stop:function(){this._call&&(this._call=null,this._time=1/0,dt())}};function qn(e,t,n){var r=new Ve;return r.restart(e,t,n),r}function xi(){Mt(),++re;for(var e=ze,t;e;)(t=G-e._time)>=0&&e._call.call(void 0,t),e=e._next;--re}function Ft(){G=(Ye=be.now())+Ue,re=de=0;try{xi()}finally{re=0,bi(),G=0}}function vi(){var e=be.now(),t=e-Ye;t>Mn&&(Ue-=t,Ye=e)}function bi(){for(var e,t=ze,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:ze=n);ue=e,dt(r)}function dt(e){if(!re){de&&(de=clearTimeout(de));var t=e-G;t>24?(e<1/0&&(de=setTimeout(Ft,e-be.now()-Ue)),le&&(le=clearInterval(le))):(le||(Ye=be.now(),le=setInterval(vi,Mn)),re=1,Nn(Ft))}}function zt(e,t,n){var r=new Ve;return t=t==null?0:+t,r.restart(s=>{r.stop(),e(s+t)},t,n),r}var wi=xt("start","end","cancel","interrupt"),ki=[],En=0,Yt=1,ut=2,Ce=3,Vt=4,mt=5,He=6;function Ge(e,t,n,r,s,i){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;_i(e,n,{name:t,index:r,group:s,on:wi,tween:ki,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:En})}function Nt(e,t){var n=D(e,t);if(n.state>En)throw new Error("too late; already scheduled");return n}function z(e,t){var n=D(e,t);if(n.state>Ce)throw new Error("too late; already running");return n}function D(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function _i(e,t,n){var r=e.__transition,s;r[t]=n,n.timer=qn(i,0,n.time);function i(c){n.state=Yt,n.timer.restart(a,n.delay,n.time),n.delay<=c&&a(c-n.delay)}function a(c){var d,u,m,h;if(n.state!==Yt)return l();for(d in r)if(h=r[d],h.name===n.name){if(h.state===Ce)return zt(a);h.state===Vt?(h.state=He,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[d]):+d<t&&(h.state=He,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[d])}if(zt(function(){n.state===Ce&&(n.state=Vt,n.timer.restart(o,n.delay,n.time),o(c))}),n.state=ut,n.on.call("start",e,e.__data__,n.index,n.group),n.state===ut){for(n.state=Ce,s=new Array(m=n.tween.length),d=0,u=-1;d<m;++d)(h=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(s[++u]=h);s.length=u+1}}function o(c){for(var d=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(l),n.state=mt,1),u=-1,m=s.length;++u<m;)s[u].call(e,d);n.state===mt&&(n.on.call("end",e,e.__data__,n.index,n.group),l())}function l(){n.state=He,n.timer.stop(),delete r[t];for(var c in r)return;delete e.__transition}}function Mi(e,t){var n=e.__transition,r,s,i=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){i=!1;continue}s=r.state>ut&&r.state<mt,r.state=He,r.timer.stop(),r.on.call(s?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}i&&delete e.__transition}}function Ni(e){return this.each(function(){Mi(this,e)})}function qi(e,t){var n,r;return function(){var s=z(this,e),i=s.tween;if(i!==n){r=n=i;for(var a=0,o=r.length;a<o;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}s.tween=r}}function Ei(e,t,n){var r,s;if(typeof n!="function")throw new Error;return function(){var i=z(this,e),a=i.tween;if(a!==r){s=(r=a).slice();for(var o={name:t,value:n},l=0,c=s.length;l<c;++l)if(s[l].name===t){s[l]=o;break}l===c&&s.push(o)}i.tween=s}}function Ai(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=D(this.node(),n).tween,s=0,i=r.length,a;s<i;++s)if((a=r[s]).name===e)return a.value;return null}return this.each((t==null?qi:Ei)(n,e,t))}function qt(e,t,n){var r=e._id;return e.each(function(){var s=z(this,r);(s.value||(s.value={}))[t]=n.apply(this,arguments)}),function(s){return D(s,r).value[t]}}function An(e,t){var n;return(typeof t=="number"?P:t instanceof U?Fe:(n=U(t))?(t=n,Fe):wn)(e,t)}function Li(e){return function(){this.removeAttribute(e)}}function Ii(e){return function(){this.removeAttributeNS(e.space,e.local)}}function $i(e,t,n){var r,s=n+"",i;return function(){var a=this.getAttribute(e);return a===s?null:a===r?i:i=t(r=a,n)}}function Bi(e,t,n){var r,s=n+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===s?null:a===r?i:i=t(r=a,n)}}function Si(e,t,n){var r,s,i;return function(){var a,o=n(this),l;return o==null?void this.removeAttribute(e):(a=this.getAttribute(e),l=o+"",a===l?null:a===r&&l===s?i:(s=l,i=t(r=a,o)))}}function Ti(e,t,n){var r,s,i;return function(){var a,o=n(this),l;return o==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),l=o+"",a===l?null:a===r&&l===s?i:(s=l,i=t(r=a,o)))}}function Ci(e,t){var n=je(e),r=n==="transform"?gi:An;return this.attrTween(e,typeof t=="function"?(n.local?Ti:Si)(n,r,qt(this,"attr."+e,t)):t==null?(n.local?Ii:Li)(n):(n.local?Bi:$i)(n,r,t))}function Hi(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Pi(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Oi(e,t){var n,r;function s(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&Pi(e,i)),n}return s._value=t,s}function Di(e,t){var n,r;function s(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&Hi(e,i)),n}return s._value=t,s}function Ri(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=je(e);return this.tween(n,(r.local?Oi:Di)(r,t))}function Fi(e,t){return function(){Nt(this,e).delay=+t.apply(this,arguments)}}function zi(e,t){return t=+t,function(){Nt(this,e).delay=t}}function Yi(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Fi:zi)(t,e)):D(this.node(),t).delay}function Vi(e,t){return function(){z(this,e).duration=+t.apply(this,arguments)}}function Xi(e,t){return t=+t,function(){z(this,e).duration=t}}function Wi(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Vi:Xi)(t,e)):D(this.node(),t).duration}function ji(e,t){if(typeof t!="function")throw new Error;return function(){z(this,e).ease=t}}function Ui(e){var t=this._id;return arguments.length?this.each(ji(t,e)):D(this.node(),t).ease}function Gi(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;z(this,e).ease=n}}function Ki(e){if(typeof e!="function")throw new Error;return this.each(Gi(this._id,e))}function Ji(e){typeof e!="function"&&(e=ln(e));for(var t=this._groups,n=t.length,r=new Array(n),s=0;s<n;++s)for(var i=t[s],a=i.length,o=r[s]=[],l,c=0;c<a;++c)(l=i[c])&&e.call(l,l.__data__,c,i)&&o.push(l);return new V(r,this._parents,this._name,this._id)}function Zi(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,s=n.length,i=Math.min(r,s),a=new Array(r),o=0;o<i;++o)for(var l=t[o],c=n[o],d=l.length,u=a[o]=new Array(d),m,h=0;h<d;++h)(m=l[h]||c[h])&&(u[h]=m);for(;o<r;++o)a[o]=t[o];return new V(a,this._parents,this._name,this._id)}function Qi(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function ea(e,t,n){var r,s,i=Qi(t)?Nt:z;return function(){var a=i(this,e),o=a.on;o!==r&&(s=(r=o).copy()).on(t,n),a.on=s}}function ta(e,t){var n=this._id;return arguments.length<2?D(this.node(),n).on.on(e):this.each(ea(n,e,t))}function na(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function ra(){return this.on("end.remove",na(this._id))}function sa(e){var t=this._name,n=this._id;typeof e!="function"&&(e=vt(e));for(var r=this._groups,s=r.length,i=new Array(s),a=0;a<s;++a)for(var o=r[a],l=o.length,c=i[a]=new Array(l),d,u,m=0;m<l;++m)(d=o[m])&&(u=e.call(d,d.__data__,m,o))&&("__data__"in d&&(u.__data__=d.__data__),c[m]=u,Ge(c[m],t,n,m,c,D(d,n)));return new V(i,this._parents,t,n)}function ia(e){var t=this._name,n=this._id;typeof e!="function"&&(e=on(e));for(var r=this._groups,s=r.length,i=[],a=[],o=0;o<s;++o)for(var l=r[o],c=l.length,d,u=0;u<c;++u)if(d=l[u]){for(var m=e.call(d,d.__data__,u,l),h,x=D(d,n),b=0,M=m.length;b<M;++b)(h=m[b])&&Ge(h,t,n,b,m,x);i.push(m),a.push(d)}return new V(i,a,t,n)}var aa=ae.prototype.constructor;function oa(){return new aa(this._groups,this._parents)}function la(e,t){var n,r,s;return function(){var i=ne(this,e),a=(this.style.removeProperty(e),ne(this,e));return i===a?null:i===n&&a===r?s:s=t(n=i,r=a)}}function Ln(e){return function(){this.style.removeProperty(e)}}function ca(e,t,n){var r,s=n+"",i;return function(){var a=ne(this,e);return a===s?null:a===r?i:i=t(r=a,n)}}function da(e,t,n){var r,s,i;return function(){var a=ne(this,e),o=n(this),l=o+"";return o==null&&(l=o=(this.style.removeProperty(e),ne(this,e))),a===l?null:a===r&&l===s?i:(s=l,i=t(r=a,o))}}function ua(e,t){var n,r,s,i="style."+t,a="end."+i,o;return function(){var l=z(this,e),c=l.on,d=l.value[i]==null?o||(o=Ln(t)):void 0;(c!==n||s!==d)&&(r=(n=c).copy()).on(a,s=d),l.on=r}}function ma(e,t,n){var r=(e+="")=="transform"?pi:An;return t==null?this.styleTween(e,la(e,r)).on("end.style."+e,Ln(e)):typeof t=="function"?this.styleTween(e,da(e,r,qt(this,"style."+e,t))).each(ua(this._id,e)):this.styleTween(e,ca(e,r,t),n).on("end.style."+e,null)}function fa(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function ha(e,t,n){var r,s;function i(){var a=t.apply(this,arguments);return a!==s&&(r=(s=a)&&fa(e,a,n)),r}return i._value=t,i}function pa(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,ha(e,t,n??""))}function ga(e){return function(){this.textContent=e}}function ya(e){return function(){var t=e(this);this.textContent=t??""}}function xa(e){return this.tween("text",typeof e=="function"?ya(qt(this,"text",e)):ga(e==null?"":e+""))}function va(e){return function(t){this.textContent=e.call(this,t)}}function ba(e){var t,n;function r(){var s=e.apply(this,arguments);return s!==n&&(t=(n=s)&&va(s)),t}return r._value=e,r}function wa(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,ba(e))}function ka(){for(var e=this._name,t=this._id,n=$n(),r=this._groups,s=r.length,i=0;i<s;++i)for(var a=r[i],o=a.length,l,c=0;c<o;++c)if(l=a[c]){var d=D(l,t);Ge(l,e,n,c,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new V(r,this._parents,e,n)}function _a(){var e,t,n=this,r=n._id,s=n.size();return new Promise(function(i,a){var o={value:a},l={value:function(){--s===0&&i()}};n.each(function(){var c=z(this,r),d=c.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(o),t._.interrupt.push(o),t._.end.push(l)),c.on=t}),s===0&&i()})}var Ma=0;function V(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function In(e){return ae().transition(e)}function $n(){return++Ma}var Y=ae.prototype;V.prototype=In.prototype={constructor:V,select:sa,selectAll:ia,selectChild:Y.selectChild,selectChildren:Y.selectChildren,filter:Ji,merge:Zi,selection:oa,transition:ka,call:Y.call,nodes:Y.nodes,node:Y.node,size:Y.size,empty:Y.empty,each:Y.each,on:ta,attr:Ci,attrTween:Ri,style:ma,styleTween:pa,text:xa,textTween:wa,remove:ra,tween:Ai,delay:Yi,duration:Wi,ease:Ui,easeVarying:Ki,end:_a,[Symbol.iterator]:Y[Symbol.iterator]};function Na(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var qa={time:null,delay:0,duration:250,ease:Na};function Ea(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function Aa(e){var t,n;e instanceof V?(t=e._id,e=e._name):(t=$n(),(n=qa).time=Mt(),e=e==null?null:e+"");for(var r=this._groups,s=r.length,i=0;i<s;++i)for(var a=r[i],o=a.length,l,c=0;c<o;++c)(l=a[c])&&Ge(l,e,t,c,a,n||Ea(l,t));return new V(r,this._parents,e,t)}ae.prototype.interrupt=Ni;ae.prototype.transition=Aa;const ft=Math.PI,ht=2*ft,X=1e-6,La=ht-X;function Bn(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function Ia(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return Bn;const n=10**t;return function(r){this._+=r[0];for(let s=1,i=r.length;s<i;++s)this._+=Math.round(arguments[s]*n)/n+r[s]}}class $a{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?Bn:Ia(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,s){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+s}`}bezierCurveTo(t,n,r,s,i,a){this._append`C${+t},${+n},${+r},${+s},${this._x1=+i},${this._y1=+a}`}arcTo(t,n,r,s,i){if(t=+t,n=+n,r=+r,s=+s,i=+i,i<0)throw new Error(`negative radius: ${i}`);let a=this._x1,o=this._y1,l=r-t,c=s-n,d=a-t,u=o-n,m=d*d+u*u;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(m>X)if(!(Math.abs(u*l-c*d)>X)||!i)this._append`L${this._x1=t},${this._y1=n}`;else{let h=r-a,x=s-o,b=l*l+c*c,M=h*h+x*x,N=Math.sqrt(b),p=Math.sqrt(m),f=i*Math.tan((ft-Math.acos((b+m-M)/(2*N*p)))/2),g=f/p,v=f/N;Math.abs(g-1)>X&&this._append`L${t+g*d},${n+g*u}`,this._append`A${i},${i},0,0,${+(u*h>d*x)},${this._x1=t+v*l},${this._y1=n+v*c}`}}arc(t,n,r,s,i,a){if(t=+t,n=+n,r=+r,a=!!a,r<0)throw new Error(`negative radius: ${r}`);let o=r*Math.cos(s),l=r*Math.sin(s),c=t+o,d=n+l,u=1^a,m=a?s-i:i-s;this._x1===null?this._append`M${c},${d}`:(Math.abs(this._x1-c)>X||Math.abs(this._y1-d)>X)&&this._append`L${c},${d}`,r&&(m<0&&(m=m%ht+ht),m>La?this._append`A${r},${r},0,1,${u},${t-o},${n-l}A${r},${r},0,1,${u},${this._x1=c},${this._y1=d}`:m>X&&this._append`A${r},${r},0,${+(m>=ft)},${u},${this._x1=t+r*Math.cos(i)},${this._y1=n+r*Math.sin(i)}`)}rect(t,n,r,s){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+s}h${-r}Z`}toString(){return this._}}function Ba(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Xe(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function se(e){return e=Xe(Math.abs(e)),e?e[1]:NaN}function Sa(e,t){return function(n,r){for(var s=n.length,i=[],a=0,o=e[0],l=0;s>0&&o>0&&(l+o+1>r&&(o=Math.max(1,r-l)),i.push(n.substring(s-=o,s+o)),!((l+=o+1)>r));)o=e[a=(a+1)%e.length];return i.reverse().join(t)}}function Ta(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var Ca=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function We(e){if(!(t=Ca.exec(e)))throw new Error("invalid format: "+e);var t;return new Et({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}We.prototype=Et.prototype;function Et(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Et.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Ha(e){e:for(var t=e.length,n=1,r=-1,s;n<t;++n)switch(e[n]){case".":r=s=n;break;case"0":r===0&&(r=n),s=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(s+1):e}var Sn;function Pa(e,t){var n=Xe(e,t);if(!n)return e+"";var r=n[0],s=n[1],i=s-(Sn=Math.max(-8,Math.min(8,Math.floor(s/3)))*3)+1,a=r.length;return i===a?r:i>a?r+new Array(i-a+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+Xe(e,Math.max(0,t+i-1))[0]}function Xt(e,t){var n=Xe(e,t);if(!n)return e+"";var r=n[0],s=n[1];return s<0?"0."+new Array(-s).join("0")+r:r.length>s+1?r.slice(0,s+1)+"."+r.slice(s+1):r+new Array(s-r.length+2).join("0")}const Wt={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:Ba,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>Xt(e*100,t),r:Xt,s:Pa,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function jt(e){return e}var Ut=Array.prototype.map,Gt=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Oa(e){var t=e.grouping===void 0||e.thousands===void 0?jt:Sa(Ut.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",s=e.decimal===void 0?".":e.decimal+"",i=e.numerals===void 0?jt:Ta(Ut.call(e.numerals,String)),a=e.percent===void 0?"%":e.percent+"",o=e.minus===void 0?"−":e.minus+"",l=e.nan===void 0?"NaN":e.nan+"";function c(u){u=We(u);var m=u.fill,h=u.align,x=u.sign,b=u.symbol,M=u.zero,N=u.width,p=u.comma,f=u.precision,g=u.trim,v=u.type;v==="n"?(p=!0,v="g"):Wt[v]||(f===void 0&&(f=12),g=!0,v="g"),(M||m==="0"&&h==="=")&&(M=!0,m="0",h="=");var w=b==="$"?n:b==="#"&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",q=b==="$"?r:/[%p]/.test(v)?a:"",k=Wt[v],A=/[defgprs%]/.test(v);f=f===void 0?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,f)):Math.max(0,Math.min(20,f));function $(y){var E=w,_=q,I,L,B;if(v==="c")_=k(y)+_,y="";else{y=+y;var R=y<0||1/y<0;if(y=isNaN(y)?l:k(Math.abs(y),f),g&&(y=Ha(y)),R&&+y==0&&x!=="+"&&(R=!1),E=(R?x==="("?x:o:x==="-"||x==="("?"":x)+E,_=(v==="s"?Gt[8+Sn/3]:"")+_+(R&&x==="("?")":""),A){for(I=-1,L=y.length;++I<L;)if(B=y.charCodeAt(I),48>B||B>57){_=(B===46?s+y.slice(I+1):y.slice(I))+_,y=y.slice(0,I);break}}}p&&!M&&(y=t(y,1/0));var S=E.length+y.length+_.length,C=S<N?new Array(N-S+1).join(m):"";switch(p&&M&&(y=t(C+y,C.length?N-_.length:1/0),C=""),h){case"<":y=E+y+_+C;break;case"=":y=E+C+y+_;break;case"^":y=C.slice(0,S=C.length>>1)+E+y+_+C.slice(S);break;default:y=C+E+y+_;break}return i(y)}return $.toString=function(){return u+""},$}function d(u,m){var h=c((u=We(u),u.type="f",u)),x=Math.max(-8,Math.min(8,Math.floor(se(m)/3)))*3,b=Math.pow(10,-x),M=Gt[8+x/3];return function(N){return h(b*N)+M}}return{format:c,formatPrefix:d}}var Ie,Tn,Cn;Da({thousands:",",grouping:[3],currency:["$",""]});function Da(e){return Ie=Oa(e),Tn=Ie.format,Cn=Ie.formatPrefix,Ie}function Ra(e){return Math.max(0,-se(Math.abs(e)))}function Fa(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(se(t)/3)))*3-se(Math.abs(e)))}function za(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,se(t)-se(e))+1}function Ya(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Va(e){return function(){return e}}function Xa(e){return+e}var Kt=[0,1];function Q(e){return e}function pt(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:Va(isNaN(t)?NaN:.5)}function Wa(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function ja(e,t,n){var r=e[0],s=e[1],i=t[0],a=t[1];return s<r?(r=pt(s,r),i=n(a,i)):(r=pt(r,s),i=n(i,a)),function(o){return i(r(o))}}function Ua(e,t,n){var r=Math.min(e.length,t.length)-1,s=new Array(r),i=new Array(r),a=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++a<r;)s[a]=pt(e[a],e[a+1]),i[a]=n(t[a],t[a+1]);return function(o){var l=jn(e,o,1,r)-1;return i[l](s[l](o))}}function Ga(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Ka(){var e=Kt,t=Kt,n=_t,r,s,i,a=Q,o,l,c;function d(){var m=Math.min(e.length,t.length);return a!==Q&&(a=Wa(e[0],e[m-1])),o=m>2?Ua:ja,l=c=null,u}function u(m){return m==null||isNaN(m=+m)?i:(l||(l=o(e.map(r),t,n)))(r(a(m)))}return u.invert=function(m){return a(s((c||(c=o(t,e.map(r),P)))(m)))},u.domain=function(m){return arguments.length?(e=Array.from(m,Xa),d()):e.slice()},u.range=function(m){return arguments.length?(t=Array.from(m),d()):t.slice()},u.rangeRound=function(m){return t=Array.from(m),n=mi,d()},u.clamp=function(m){return arguments.length?(a=m?!0:Q,d()):a!==Q},u.interpolate=function(m){return arguments.length?(n=m,d()):n},u.unknown=function(m){return arguments.length?(i=m,u):i},function(m,h){return r=m,s=h,d()}}function Ja(){return Ka()(Q,Q)}function Za(e,t,n,r){var s=Qn(e,t,n),i;switch(r=We(r??",f"),r.type){case"s":{var a=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(i=Fa(s,a))&&(r.precision=i),Cn(r,a)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=za(s,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=Ra(s))&&(r.precision=i-(r.type==="%")*2);break}}return Tn(r)}function Qa(e){var t=e.domain;return e.ticks=function(n){var r=t();return Zn(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var s=t();return Za(s[0],s[s.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),s=0,i=r.length-1,a=r[s],o=r[i],l,c,d=10;for(o<a&&(c=a,a=o,o=c,c=s,s=i,i=c);d-- >0;){if(c=tt(a,o,n),c===l)return r[s]=a,r[i]=o,t(r);if(c>0)a=Math.floor(a/c)*c,o=Math.ceil(o/c)*c;else if(c<0)a=Math.ceil(a*c)/c,o=Math.floor(o*c)/c;else break;l=c}return e},e}function we(){var e=Ja();return e.copy=function(){return Ga(e,we())},Ya.apply(e,arguments),Qa(e)}function J(e){return function(){return e}}function eo(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new $a(t)}function to(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Hn(e){this._context=e}Hn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function no(e){return new Hn(e)}function ro(e){return e[0]}function so(e){return e[1]}function io(e,t){var n=J(!0),r=null,s=no,i=null,a=eo(o);e=typeof e=="function"?e:e===void 0?ro:J(e),t=typeof t=="function"?t:t===void 0?so:J(t);function o(l){var c,d=(l=to(l)).length,u,m=!1,h;for(r==null&&(i=s(h=a())),c=0;c<=d;++c)!(c<d&&n(u=l[c],c,l))===m&&((m=!m)?i.lineStart():i.lineEnd()),m&&i.point(+e(u,c,l),+t(u,c,l));if(h)return i=null,h+""||null}return o.x=function(l){return arguments.length?(e=typeof l=="function"?l:J(+l),o):e},o.y=function(l){return arguments.length?(t=typeof l=="function"?l:J(+l),o):t},o.defined=function(l){return arguments.length?(n=typeof l=="function"?l:J(!!l),o):n},o.curve=function(l){return arguments.length?(s=l,r!=null&&(i=s(r)),o):s},o.context=function(l){return arguments.length?(l==null?r=i=null:i=s(r=l),o):r},o}function Jt(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function Pn(e){this._context=e}Pn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Jt(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Jt(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function ao(e){return new Pn(e)}function me(e,t,n){this.k=e,this.x=t,this.y=n}me.prototype={constructor:me,scale:function(e){return e===1?this:new me(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new me(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};me.prototype;function oo(){let e,t,n,r,s,i;const a=xt("change"),o=l=>{l.attr("class","accent-slate-600 py-2 sm:py-4"),l.selectAll("label").data([null]).join("label").attr("for",e).attr("class","pr-2").text(t),l.selectAll("input").data([null]).join("input").attr("type","range").attr("id",e).attr("min",n).attr("max",r).attr("value",i).on("change",c=>{l.selectAll("output").data([null]).join("output").attr("id",e).text(c.target.value),a.call("change",null,c.target.value)}),l.selectAll("output").data([null]).join("output").attr("id",e).attr("class","pl-2 sm:pl-4").text(i)};return o.id=function(l){return arguments.length?(e=l,o):e},o.labelText=function(l){return arguments.length?(t=l,o):t},o.min=function(l){return arguments.length?(n=+l,o):n},o.max=function(l){return arguments.length?(r=+l,o):r},o.step=function(l){return arguments.length?(s=+l,o):s},o.value=function(l){return arguments.length?(i=+l,o):i},o.on=function(){let l=a.on.apply(a,arguments);return l===a?o:l},o}function lo(){let e,t,n,r,s,i,a,o,l,c,d="rgb(122, 255, 248, 0.7)",u=1.5,m=1,h,x=15,b=0,M=0,N=!1;const p=f=>{const g=f.selectAll("svg.box-plot").data([null]).join("svg").attr("class","box-plot").attr("width",e).attr("height",t);g.attr("font-family","sans-serif").attr("font-size",x);let v=gt(r);v[0]=s??v[0],v[1]=i??v[1];const w=we().domain(v).range([n.left,e-n.right]),q=Ke(r,.25),k=Ke(r,.5),A=Ke(r,.75),$=A-q;let y=q-$*1.5;const E=rt(r);y=E>y?E:y;let _=A+$*1.5;const I=nt(r);_=I<_?I:_;const L=r.filter(S=>S<y||S>_),B=r.reduce((S,C)=>S+C,0)/r.length,R=f.selectAll("div.tooltip").data([null]).join("div").attr("class","p-2 text-white rounded-md border border-white border-opacity-50 shadow-sm pointer-events-none -translate-x-1/2 -translate-y-full font-sans text-xs bg-black bg-opacity-60 transition-opacity duration-200 ease-out transition-border-color duration-100 ease-out backdrop-blur-md").style("position","absolute").style("opacity",0);g.on("mouseover",function(S){const C=`
        Minimum: ${y.toFixed(5)}<br>
        25th percentile: ${q.toFixed(5)}<br>
        Median: ${k.toFixed(5)}<br>
        75th percentile: ${A.toFixed(5)}<br>
        Maximum: ${_.toFixed(5)}<br>
        Inter-quartile range: ${$.toFixed(5)}<br>
        Mean: ${B.toFixed(5)}
        `;R.style("opacity",1).style("border-color",d).html(C)}).on("mouseout",()=>{R.style("opacity",0)}).on("mousemove",function(S){R.style("left",S.pageX+b+"px").style("top",S.pageY+M+"px")}),g.selectAll("circle").data(L).join("circle").attr("cx",S=>w(S)).attr("cy",()=>t/2+(Math.random()*(c/2)-c/4)).attr("r",h).attr("fill",d).attr("opacity",m).attr("stroke","black").attr("stroke-width",u),g.selectAll("rect").data([null]).join("rect").attr("x",w(q)).attr("y",t/2-c/2).attr("width",w(A)-w(q)).attr("height",c).attr("fill",d).attr("stroke","black").attr("stroke-width",u),g.selectAll("#median").data([null]).join("line").attr("id","median").attr("x1",w(k)).attr("y1",t/2-c/2).attr("x2",w(k)).attr("y2",t/2+c/2).attr("stroke","black").attr("stroke-width",u*2),g.selectAll("#lower-whisker").data([null]).join("line").attr("id","lower-whisker").attr("x1",w(y)).attr("y1",t/2).attr("x2",w(q)).attr("y2",t/2).attr("stroke","black").attr("stroke-width",u),g.selectAll("#lower-whisker-edge").data([null]).join("line").attr("id","lower-whisker-edge").attr("x1",w(y)).attr("y1",t/2-c/4).attr("x2",w(y)).attr("y2",t/2+c/4).attr("stroke","black").attr("stroke-width",u),g.selectAll("#upper-whisker").data([null]).join("line").attr("id","upper-whisker").attr("x1",w(A)).attr("y1",t/2).attr("x2",w(_)).attr("y2",t/2).attr("stroke","black").attr("stroke-width",u),g.selectAll("#upper-whisker-edge").data([null]).join("line").attr("id","upper-whisker-edge").attr("x1",w(_)).attr("y1",t/2-c/4).attr("x2",w(_)).attr("y2",t/2+c/4).attr("stroke","black").attr("stroke-width",u),N||(g.selectAll(".x-axis").data([null]).join("g").attr("class","x-axis").attr("transform",`translate(0,${t-n.bottom})`).call(sn(w)),o&&g.selectAll(".x-axis-label").data([null]).join("text").attr("class","x-axis-label").attr("text-anchor","end").attr("x",e).attr("y",t-n.bottom/3).text(o).style("font-size",x*(3/4))),a!==void 0&&g.selectAll("#vLine").data([null]).join("line").attr("id","vLine").attr("x1",w(a)).attr("y1",t/2-c/2).attr("x2",w(a)).attr("y2",t/2+c/2).attr("stroke","red").attr("stroke-width",1.5),l&&g.selectAll(".title").data([null]).join("text").attr("class","title").text(l).attr("text-anchor","middle").attr("x",e/2).attr("y",n.top/2)};return p.width=function(f){return arguments.length?(e=+f,p):e},p.height=function(f){return arguments.length?(t=+f,p):t},p.margin=function(f){return arguments.length?(n=f,p):n},p.data=function(f){return arguments.length?(r=f,p):r},p.xMin=function(f){return arguments.length?(s=+f,p):s},p.xMax=function(f){return arguments.length?(i=+f,p):i},p.vLine=function(f){return arguments.length?(a=+f,p):a},p.xLabel=function(f){return arguments.length?(o=f,p):o},p.title=function(f){return arguments.length?(l=f,p):l},p.boxWidth=function(f){return arguments.length?(c=+f,p):c},p.color=function(f){return arguments.length?(d=f,p):d},p.strokeWidth=function(f){return arguments.length?(u=+f,p):u},p.opacity=function(f){return arguments.length?(m=+f,p):m},p.radius=function(f){return arguments.length?(h=+f,p):h},p.fontSize=function(f){return arguments.length?(x=+f,p):x},p.hoverOffsetX=function(f){return arguments.length?(b=+f,p):b},p.hoverOffsetY=function(f){return arguments.length?(M=+f,p):M},p.removeAxis=function(f){return arguments.length?(N=f,p):N},p}function co(){let e,t,n,r,s,i,a,o,l,c,d=40,u,m="rgb(122, 255, 248, 0.7)",h=1,x,b,M=15;const N=g=>v=>Math.abs(v/=g)<=1?.75*(1-v*v)/g:0,p=(g,v,w)=>v.map(q=>[q,er(w,k=>g(q-k))]),f=g=>{const v=g.selectAll("svg.density-plot").data([null]).join("svg").attr("class","density-plot").attr("width",e).attr("height",t);v.attr("font-family","sans-serif").attr("font-size",M);let w=gt(r);w[0]=s??w[0],w[1]=i??w[1];const q=we().domain(w).range([n.left,e-n.right]),k=q.ticks(d),A=p(N(u),k,r),$=l??Math.max(...A.map(L=>L[1])),y=we().domain([0,$]).range([t-n.bottom,n.top]);A[0][1]!==0&&A.unshift([A[0][0],0]),A[A.length-1][1]!==0&&A.push([A[A.length-1][0],0]);const E=io().curve(ao).x(L=>q(L[0])).y(L=>y(L[1])),_=In().duration(1e3);let I=v.selectAll("defs").data([null]).join("defs").append("linearGradient").attr("id","color-gradient");if(x&&b&&b.length===x.length+1){I.append("stop").attr("offset","0%").attr("stop-color",b[0]);for(let L=0;L<x.length;L++){let B=((x[L]-w[0])/(w[1]-w[0])*100).toFixed(2);B<0&&(B=0),B>100&&(B=100),I.append("stop").attr("offset",`${B}%`).attr("stop-color",b[L]),I.append("stop").attr("offset",`${B}%`).attr("stop-color",b[L+1])}I.append("stop").attr("offset","100%").attr("stop-color",b[b.length-1])}else I.append("stop").attr("offset","100%").attr("stop-color",m);v.selectAll("path").data([null]).join(L=>L.append("path").attr("stroke","black").attr("stroke-width",1.5).attr("stroke-linejoin","round").attr("opacity",h).attr("d",E(A)).style("fill","url(#color-gradient)"),L=>L.call(B=>B.transition(_).attr("d",E(A))),L=>L.remove()),v.selectAll(".y-axis").data([null]).join("g").attr("class","y-axis").attr("transform",`translate(${n.left},0)`).call(lr(y)),v.selectAll(".y-axis-label").data([null]).join("text").attr("class","y-axis-label").text("Density →").attr("text-anchor","end").attr("transform","rotate(-90)").attr("x",-n.top).attr("y",n.left/3).style("font-size",M*(3/4)),v.selectAll(".x-axis").data([null]).join("g").attr("class","x-axis").attr("transform",`translate(0,${t-n.bottom})`).call(sn(q)),v.selectAll(".x-axis-label").data([null]).join("text").attr("class","x-axis-label").attr("text-anchor","end").attr("x",e).attr("y",t-n.bottom/3).text(a).style("font-size",M*(3/4)),c!==void 0&&v.selectAll(".vLine").data([null]).join("line").attr("class","vLine").attr("x1",q(c)).attr("y1",y(0)).attr("x2",q(c)).attr("y2",y($)).attr("stroke","red").attr("stroke-width",1.5).attr("stroke-linejoin","round").attr("opacity",h),v.selectAll(".title").data([null]).join("text").attr("class","title").text(o).attr("text-anchor","middle").attr("x",e/2).attr("y",n.top/2)};return f.width=function(g){return arguments.length?(e=+g,f):e},f.height=function(g){return arguments.length?(t=+g,f):t},f.margin=function(g){return arguments.length?(n=g,f):n},f.data=function(g){return arguments.length?(r=g,f):r},f.xMin=function(g){return arguments.length?(s=+g,f):s},f.xMax=function(g){return arguments.length?(i=+g,f):i},f.xLabel=function(g){return arguments.length?(a=g,f):a},f.title=function(g){return arguments.length?(o=g,f):o},f.yMax=function(g){return arguments.length?(l=+g,f):l},f.vLine=function(g){return arguments.length?(c=+g,f):c},f.numBins=function(g){return arguments.length?(d=+g,f):d},f.bandwidth=function(g){return arguments.length?(u=+g,f):u},f.color=function(g){return arguments.length?(m=g,f):m},f.opacity=function(g){return arguments.length?(h=+g,f):h},f.cutoffs=function(g){return arguments.length?(x=g,f):x},f.cutoffColors=function(g){return arguments.length?(b=g,f):b},f.fontSize=function(g){return arguments.length?(M=+g,f):M},f}function uo(){let e,t,n,r,s,i,a,o,l="rgb(122, 255, 248, 0.7)",c=1.5,d=1,u=3,m=1.5,h=15,x=15,b=!1,M="Value";const N=(f,g)=>{const v=new Float64Array(f.length),w=g**2,q=.001;let k=null,A=null;const $=(y,E)=>{let _=k;for(;_;){const I=_.index;if(w-q>(f[I]-y)**2+(v[I]-E)**2)return!0;_=_.next}return!1};for(const y of At(f.length).sort((E,_)=>f[E]-f[_])){for(;k&&f[k.index]<f[y]-w;)k=k.next;if($(f[y],v[y]=0)){let _=k;v[y]=1/0;do{const I=_.index;let L=v[I]+Math.sqrt(w-(f[I]-f[y])**2);L<v[y]&&!$(f[y],L)&&(v[y]=L),_=_.next}while(_)}const E={index:y,next:null};k===null?k=A=E:A=A.next=E}return v},p=f=>{const g=f.selectAll("svg.beeswarm-plot").data([null]).join("svg").attr("class","beeswarm-plot").attr("width",e).attr("height",t);g.attr("font-family","sans-serif").attr("font-size",x);let v=gt(r);v[0]=s??v[0],v[1]=i??v[1];const w=we().domain(v).range([n.left,e-n.right]),q=N(r.map(k=>w(k)),u*2+m).map(k=>k+n.top+h);g.selectAll("g.marker").data(At(r.length)).join("g").attr("class","marker").attr("transform",k=>`translate(${w(r[k])}, ${q[k]})`).each(function(k){const A=at(this);A.append("circle").attr("r",u).attr("fill",l).attr("opacity",d).attr("stroke","black").attr("stroke-width",c);const $=7*M.length+25;A.append("rect").attr("x",u-$/2).attr("y",u+5).attr("width",$).attr("height",20).attr("fill","white").attr("stroke","black").attr("stroke-width",c),A.append("text").attr("x",u-$/2+5).attr("y",u+20).attr("font-size","12px").text(`${M}: ${r[k].toFixed(5)}`)}),b||(g.selectAll(".x-axis").data([null]).join("g").attr("class","x-axis").attr("transform",`translate(0,${n.top})`).call(or(w)),a&&g.selectAll(".x-axis-label").data([null]).join("text").attr("class","x-axis-label").attr("text-anchor","end").attr("x",e).attr("y",n.top*(2/3)).text(a).style("font-size",x*(3/4)))};return p.width=function(f){return arguments.length?(e=+f,p):e},p.height=function(f){return arguments.length?(t=+f,p):t},p.margin=function(f){return arguments.length?(n=f,p):n},p.data=function(f){return arguments.length?(r=f,p):r},p.xMin=function(f){return arguments.length?(s=+f,p):s},p.xMax=function(f){return arguments.length?(i=+f,p):i},p.xLabel=function(f){return arguments.length?(a=f,p):a},p.title=function(f){return arguments.length?(o=f,p):o},p.color=function(f){return arguments.length?(l=f,p):l},p.strokeWidth=function(f){return arguments.length?(c=+f,p):c},p.opacity=function(f){return arguments.length?(d=+f,p):d},p.radius=function(f){return arguments.length?(u=+f,p):u},p.markerPadding=function(f){return arguments.length?(m=+f,p):m},p.plotPadding=function(f){return arguments.length?(h=+f,p):h},p.fontSize=function(f){return arguments.length?(x=+f,p):x},p.removeAxis=function(f){return arguments.length?(b=f,p):b},p.markerText=function(f){return arguments.length?(M=f,p):M},p}const On=document.querySelector("#app"),Zt=new Worker(new URL("/icare-lit/assets/webWorker-95d0401e.js",self.location)),mo=1,fo=80,ho=0,po=84,go=5,$e=Math.max(mo,ho),Be=Math.min(fo,po)-go;On.innerHTML=`
  <div id="header" class="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8 bg-slate-900 rounded-b-lg">
    <div class="flex items-center justify-between">
      <div class="flex justify-start gap-2">
        <div class="flex items-center">
          <img src="${Dn}" class="h-12 w-12 sm:h-16 sm:w-16 gap-2 logo vanilla" alt="rose logo" />
        </div>
        <div class="min-w-0 flex-1">
          <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:tracking-tight">iCARE-Lit</h2>
          <p class="py-2 pr-2 text-sm sm:text-base text-white">Absolute risk estimator for breast cancer</p>
        </div>
      </div>
      
      <div class="flex md:mt-0 md:ml-4 shrink-0">
        <a title="Source code" href="https://github.com/jeyabbalas/icare-lit">
          <img src="${Rn}" class="h-10 w-10 sm:h-12 sm:w-12 fill-current" alt="github logo" />
        </a>
      </div>
    </div>
  </div>
  
  <div id="info" class="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8">
    <div id="info-privacy" class="flex p-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50" role="alert">
      <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
      </svg>
      <span class="sr-only">Data privacy notice</span>
      <div>
        <span class="font-medium">Privacy notice</span>: All data is maintained and all calculations are performed within your browser. No data is sent to and no calculations are performed by any server. <a class="font-bold underline" href="https://github.com/jeyabbalas/icare-lit">This app's code</a> is open source and can be inspected by anyone.
      </div>
    </div>
    
    <div id="info-usage" class="flex p-4 mt-2 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50" role="alert">
      <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
      </svg>
      <span class="sr-only">App usage notice</span>
      <div>
        <span class="font-medium">Usage notice</span>: This app is intended for educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this app.
      </div>
    </div>
  </div>
  
  <div id="form" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border rounded-lg">
    <form id="form-icare-lit" autocomplete="off" class="space-y-8 divide-y divide-gray-200">
      <div id="form-questionnaire" class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div class="space-y-6 sm:space-y-5 pt-2 sm:pt-4">
          <div id="questionnaire-heading">
            <h3 class="text-lg leading-6 font-semibold text-gray-900">Questionnaire</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Please answer the following questions to the best of your knowledge.</p>
          </div>
          
          <div id="questions" class="space-y-6 sm:space-y-5">
          
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label for="name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Enter a name or an alias.</label>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <input type="text" name="name" id="name" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm" value="Jane Doe" required>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label for="age" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">What is your age?</label>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <input type="number" name="age" id="age" min="${$e}" max="${Be}" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm" required>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <div>
                <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Please specify your sex assigned at birth</label>
                <p class="text-sm text-gray-500"><span class="font-medium">Note</span>: The current version of this tool is developed for <em>females</em> only.</p>
              </div>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <fieldset class="mt-4">
                  <legend class="sr-only">Sex type</legend>
                  <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div class="flex items-center">
                      <input id="female" name="sex" type="radio" value="female" checked class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="female" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Female</label>
                    </div>
                    <div class="flex items-center">
                      <input id="male" name="sex" type="radio" value="male" class="h-4 w-4 border-gray-300 bg-gray-100 text-slate-600 focus:ring-slate-600" disabled>
                      <label for="male" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Male <span class="font-normal text-gray-500">(option currently unavailable)</span></label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <div>
                <label for="race-ethnicity" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Which race/ethnicity group do you most closely associate with?</label>
                <p class="text-sm text-gray-500"><span class="font-medium">Note</span>: The current version of the model is developed for <em>non-hispanic white</em> populations only. Future versions will be developed for other populations.</p>
              </div>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <select id="race-ethnicity" name="race-ethnicity" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm" required>
                  <option disabled selected value> -- select an option -- </option>
                  <option disabled>American Indian or Alaska Native</option>
                  <option disabled>Asian</option>
                  <option disabled>Black or African American</option>
                  <option disabled>Hispanic</option>
                  <option disabled>Native Hawaiian or Other Pacific Islander</option>
                  <option>Non-Hispanic White</option>
                  <option disabled>Other</option>
                </select>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <div>
                <label for="weight" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">How much do you weigh (in pounds) without your clothes or shoes on?</label>
                <p class="text-sm text-gray-500">If you are pregnant, how much did you weigh before your pregnancy?</p>
              </div>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                  <input type="number" name="weight" id="weight" min="0" max="500" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0.00" aria-describedby="weight-units">
                  <span id="weight-units" class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">lbs.</span>
                </div>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <div>
                <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">How tall (in feet and inches) are you with your shoes off?</label>
                <p class="text-sm text-gray-500">For example, if you are 5 feet 7 inches enter 5 in the feet box and 7 in the inches box.</p>
              </div>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <div class="space-y-2">
                  <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                    <label for="height-feet" class="sr-only">Feet portion of the height</label>
                    <input type="number" name="height-feet" min="2" max="8" step="1" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0" aria-describedby="height-feet">
                    <span id="height-feet" class="inline-block w-[70px] inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-5 text-gray-500 sm:text-sm">feet</span>
                  </div>
                  <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                    <label for="height-inches" class="sr-only">Inches portion of the height</label>
                    <input type="number" name="height-inches" min="0" max="11" step="1" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0" aria-describedby="height-inches">
                    <span id="height-inches" class="inline-block w-[70px] inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">inches</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label for="menarche" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">How old were you when you had your first menstrual period?</label>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <input type="number" name="menarche" id="menarche" min="${$e}" max="${Be}" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm">
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <div>
                <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Have your periods completely stopped?</label>
                <p class="text-sm text-gray-500">By <em>completely stopped</em>, we mean that you have gone at least 6 months without having a period, and you are not pregnant or using any form of hormonal contraception.</p>
              </div>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <fieldset class="mt-4">
                  <legend class="sr-only">Menopause status</legend>
                  <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div class="flex items-center">
                      <input id="menopause-yes" name="menopause" type="radio" value="1" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="menopause-yes" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes</label>
                    </div>
                    <div class="flex items-center">
                      <input id="menopause-no" name="menopause" type="radio" value="0" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="menopause-no" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No</label>
                    </div>
                    <div class="flex items-center">
                      <input id="menopause-unknown" name="menopause" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="menopause-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know</label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            
            <div id="age-menopause-container" class="hidden space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="age-menopause" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">How old were you when you had your last menstrual period?</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <input type="number" name="age-menopause" id="age-menopause" min="${$e}" max="${Be}" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm">
                </div>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <div>
                <label for="num-pregnancies" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">How many times have you been pregnant?</label>
                <p class="text-sm text-gray-500">Please include all live births, as well as pregnancies that ended as stillbirths, miscarriages, ectopic or tubal pregnancies, or termination. Twins, triplets, or higher multiples count as one pregnancy.</p>
              </div>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <input type="number" name="num-pregnancies" id="num-pregnancies" min="0" max="25" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm">
              </div>
            </div>
            
            <div id="children-container" class="hidden space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Have you ever had any children?</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <fieldset class="mt-4">
                    <legend class="sr-only">Had children status</legend>
                    <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                      <div class="flex items-center">
                        <input id="parous-yes" name="parous" type="radio" value="1" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="parous-yes" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes</label>
                      </div>
                      <div class="flex items-center">
                        <input id="parous-no" name="parous" type="radio" value="0" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="parous-no" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No</label>
                      </div>
                      <div class="flex items-center">
                        <input id="parous-unknown" name="parous" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="parous-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
            
            <div id="births-container" class="hidden space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="parity" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">How many children have you had?</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <input type="number" name="parity" id="parity" min="1" max="25" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm">
                </div>
              </div>
              
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="age-first-child-birth" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">How old were you when you had your first child?</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <input type="number" name="age-first-child-birth" id="age-first-child-birth" min="${$e}" max="${Be}" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm">
                </div>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Have you ever used menopausal hormone treatment prescribed by a doctor or other health professional?</label>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <fieldset class="mt-4">
                  <legend class="sr-only">Menopausal hormone treatment use status</legend>
                  <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div class="flex items-center">
                      <input id="hormone-treatment-yes" name="hormone-treatment" type="radio" value="1" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="hormone-treatment-yes" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes</label>
                    </div>
                    <div class="flex items-center">
                      <input id="hormone-treatment-no" name="hormone-treatment" type="radio" value="0" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="hormone-treatment-no" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No</label>
                    </div>
                    <div class="flex items-center">
                      <input id="hormone-treatment-unknown" name="hormone-treatment" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="hormone-treatment-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know</label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            
            <div id="hormone-treatment-current-container" class="hidden space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Do you currently use menopausal hormone treatment?</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <fieldset class="mt-4">
                    <legend class="sr-only">Current menopausal hormone treatment use status</legend>
                    <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                      <div class="flex items-center">
                        <input id="hormone-treatment-current-yes" name="hormone-treatment-current" type="radio" value="1" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="hormone-treatment-current-yes" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes</label>
                      </div>
                      <div class="flex items-center">
                        <input id="hormone-treatment-current-no" name="hormone-treatment-current" type="radio" value="0" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="hormone-treatment-current-no" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No</label>
                      </div>
                      <div class="flex items-center">
                        <input id="hormone-treatment-current-unknown" name="hormone-treatment-current" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="hormone-treatment-current-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
            
            
            <div id="hormone-treatment-type-container" class="hidden space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">What type of menopausal hormone treatment do you currently use?</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <fieldset class="mt-4">
                    <legend class="sr-only">Menopausal hormone treatment type</legend>
                    <div class="space-y-4">
                      <div class="flex items-center">
                        <input id="hormone-treatment-type-e" name="hormone-treatment-type" type="radio" value="1" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="hormone-treatment-type-e" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Estrogen prescription hormone only.</label>
                      </div>
                      <div class="flex items-center">
                        <input id="hormone-treatment-type-c" name="hormone-treatment-type" type="radio" value="0" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="hormone-treatment-type-c" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Combined estrogen plus progestin prescription hormones.</label>
                      </div>
                      <div class="flex items-center">
                        <input id="hormone-treatment-type-unknown" name="hormone-treatment-type" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="hormone-treatment-type-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know.</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <div>
                <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Have you ever used any hormonal contraceptive medication or device?</label>
                <p class="text-sm text-gray-500">This includes combined oral contraceptive pills containing both estrogen and progesterone/progestin (commonly called <em>the pill</em>), progesterone-only or progestin-only contraceptive pills (commonly called the <em>mini-pill</em>), <em>Norplant</em> (inserted under the skin of your upper arm, lasts several years), <em>Depo-provera</em> (birth control shot given once every three months), Vaginal ring (such as <em>Nuva Ring</em>, inserted vaginally each month), Birth control patch (such as <em>Ortho Evra</em>, applied to the skin), Hormonal IUD (such as <em>Mirena intrauterine device</em>), or other hormones prescribed by a health professional.</p>
              </div>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <fieldset class="mt-4">
                  <legend class="sr-only">Hormonal contraceptive use status</legend>
                  <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div class="flex items-center">
                      <input id="hormonal-contraceptive-yes" name="hormonal-contraceptive" type="radio" value="1" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="hormonal-contraceptive-yes" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes</label>
                    </div>
                    <div class="flex items-center">
                      <input id="hormonal-contraceptive-no" name="hormonal-contraceptive" type="radio" value="0" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="hormonal-contraceptive-no" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No</label>
                    </div>
                    <div class="flex items-center">
                      <input id="hormonal-contraceptive-unknown" name="hormonal-contraceptive" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="hormonal-contraceptive-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know</label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            
            <div id="hormonal-contraceptive-container" class="hidden space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Do you currently use any hormonal contraceptive medication or device?</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <fieldset class="mt-4">
                    <legend class="sr-only">Current hormonal contraceptive use status</legend>
                    <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                      <div class="flex items-center">
                        <input id="hormonal-contraceptive-current-yes" name="hormonal-contraceptive-current" type="radio" value="1" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="hormonal-contraceptive-current-yes" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes</label>
                      </div>
                      <div class="flex items-center">
                        <input id="hormonal-contraceptive-current-no" name="hormonal-contraceptive-current" type="radio" value="0" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="hormonal-contraceptive-current-no" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No</label>
                      </div>
                      <div class="flex items-center">
                        <input id="hormonal-contraceptive-current-unknown" name="hormonal-contraceptive-current" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="hormonal-contraceptive-current-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">During your entire life, have you had at least 12 drinks of any kind of alcoholic beverage?</label>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <fieldset class="mt-4">
                  <legend class="sr-only">Alcohol use status</legend>
                  <div class="space-y-4">
                    <div class="flex items-center">
                      <input id="alcohol-use-never" name="alcohol-use" type="radio" value="never" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="alcohol-use-never" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No.</label>
                    </div>
                    <div class="flex items-center">
                      <input id="alcohol-use-former" name="alcohol-use" type="radio" value="former" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="alcohol-use-former" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes, but I no longer drink alcohol. (former drinker)</label>
                    </div>
                    <div class="flex items-center">
                      <input id="alcohol-use-current" name="alcohol-use" type="radio" value="current" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="alcohol-use-current" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes, I still drink alcohol. (current drinker)</label>
                    </div>
                    <div class="flex items-center">
                      <input id="alcohol-use-unknown" name="alcohol-use" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="alcohol-use-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know.</label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            
            <div id="alcohol-container" class="hidden space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label id="alcohol-type-label" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Please select any of the following alcoholic beverages that you have had in the past 12 months.</label>
                <div class="mt-1 sm:col-span-2 sm:mt-0">
                  <fieldset class="mt-4">
                    <legend class="sr-only">Alcohol types</legend>
                    <div class="space-y-5">
                      <div class="flex h-6 items-center">
                        <input id="alcohol-type-wine" name="alcohol-type" type="checkbox" value="wine" class="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="alcohol-type-wine" class="ml-3 text-sm font-medium leading-6 text-gray-900">Glass of wine</label>
                      </div>
                      <div class="flex h-6 items-center">
                        <input id="alcohol-type-blc" name="alcohol-type" type="checkbox" value="blc" class="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="alcohol-type-blc" class="ml-3 text-sm font-medium leading-6 text-gray-900">Glass of beer/lager/cider</label>
                      </div>
                      <div class="flex h-6 items-center">
                        <input id="alcohol-type-beer" name="alcohol-type" type="checkbox" value="beer" class="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="alcohol-type-beer" class="ml-3 text-sm font-medium leading-6 text-gray-900">Bottle of beer</label>
                      </div>
                      <div class="relative flex items-start">
                        <div class="flex h-6 items-center">
                          <input id="alcohol-type-pop" aria-describedby="pop-description" name="alcohol-type" type="checkbox" value="pop" class="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600">
                        </div>
                        <div class="ml-3">
                          <label for="alcohol-type-pop" class="text-sm font-medium leading-6 text-gray-900">Alcoholic pop beverages</label>
                          <p id="pop-description" class="text-sm text-gray-500">Such as wine coolers, hard soda, spiked seltzer (sparkling water), Smirnoff Ice, malt liquor, or pre-mixed cocktails.</p>
                        </div>
                      </div>
                      <div class="flex h-6 items-center">
                        <input id="alcohol-type-shots" name="alcohol-type" type="checkbox" value="shots" class="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="alcohol-type-shots" class="ml-3 text-sm font-medium leading-6 text-gray-900">Shots of liquor</label>
                      </div>
                      <div class="flex h-6 items-center">
                        <input id="alcohol-type-unknown" name="alcohol-type" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 text-slate-600 focus:ring-slate-600">
                        <label for="alcohol-type-unknown" class="ml-3 text-sm font-medium leading-6 text-gray-900">Don't know</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              
              <div id="wine-container" class="hidden space-y-6 sm:space-y-5">
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <div>
                    <label id="wine-freq-label" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, how often did you usually drink wine?</label>
                    <p class="text-sm text-gray-500">This includes any kind of wine or wine cooler.</p>
                  </div>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <fieldset class="mt-4">
                      <legend class="sr-only">Wine consumption frequencies</legend>
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input id="wine-freq-lt-one-month" name="wine-freq" type="radio" value="lt-once-a-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="wine-freq-lt-one-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Less than once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="wine-freq-once-per-month" name="wine-freq" type="radio" value="once-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="wine-freq-once-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="wine-freq-2-3-per-month" name="wine-freq" type="radio" value="2-3-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="wine-freq-2-3-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">2-3 times a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="wine-freq-1-2-per-week" name="wine-freq" type="radio" value="1-2-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="wine-freq-1-2-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">1-2 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="wine-freq-3-4-per-week" name="wine-freq" type="radio" value="3-4-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="wine-freq-3-4-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">3-4 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="wine-freq-5-6-per-week" name="wine-freq" type="radio" value="5-6-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="wine-freq-5-6-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">5-6 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="wine-freq-daily" name="wine-freq" type="radio" value="daily" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="wine-freq-daily" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Every day.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="wine-freq-unknown" name="wine-freq" type="radio" value="unknown" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="wine-freq-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know.</label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <div>
                    <label id="wine-serving-label" for="wine-serving" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, on the days that you drank wine, how many servings did you drink per day?</label>
                    <p class="text-sm text-gray-500">A serving of wine is 5 ounces.</p>
                  </div>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                      <input type="number" name="wine-serving" id="wine-serving" min="1" step="1" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0" aria-describedby="wine-serving-units">
                      <span id="wine-serving-units" class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">glass(es)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div id="blc-container" class="hidden space-y-6 sm:space-y-5">
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label id="blc-freq-label" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, how often did you usually drink glasses of beer/lager/cider?</label>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <fieldset class="mt-4">
                      <legend class="sr-only">Beer, lager, and cider consumption frequencies</legend>
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input id="blc-freq-lt-one-month" name="blc-freq" type="radio" value="lt-once-a-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="blc-freq-lt-one-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Less than once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="blc-freq-once-per-month" name="blc-freq" type="radio" value="once-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="blc-freq-once-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="blc-freq-2-3-per-month" name="blc-freq" type="radio" value="2-3-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="blc-freq-2-3-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">2-3 times a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="blc-freq-1-2-per-week" name="blc-freq" type="radio" value="1-2-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="blc-freq-1-2-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">1-2 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="blc-freq-3-4-per-week" name="blc-freq" type="radio" value="3-4-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="blc-freq-3-4-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">3-4 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="blc-freq-5-6-per-week" name="blc-freq" type="radio" value="5-6-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="blc-freq-5-6-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">5-6 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="blc-freq-daily" name="blc-freq" type="radio" value="daily" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="blc-freq-daily" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Every day.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="blc-freq-unknown" name="blc-freq" type="radio" value="unknown" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="blc-freq-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know.</label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <div>
                    <label id="blc-serving-label" for="blc-serving" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, on the days that you drank beer/lager/cider, how many servings did you drink per day?</label>
                    <p class="text-sm text-gray-500">A serving of beer/lager/cider is a 12-ounce container.</p>
                  </div>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                      <input type="number" name="blc-serving" id="blc-serving" min="1" step="1" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0" aria-describedby="blc-serving-units">
                      <span id="blc-serving-units" class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">glass(es)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div id="beer-container" class="hidden space-y-6 sm:space-y-5">
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label id="beer-freq-label" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, how often did you usually drink bottles of beer?</label>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <fieldset class="mt-4">
                      <legend class="sr-only">Beer consumption frequencies</legend>
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input id="beer-freq-lt-one-month" name="beer-freq" type="radio" value="lt-once-a-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="beer-freq-lt-one-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Less than once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="beer-freq-once-per-month" name="beer-freq" type="radio" value="once-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="beer-freq-once-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="beer-freq-2-3-per-month" name="beer-freq" type="radio" value="2-3-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="beer-freq-2-3-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">2-3 times a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="beer-freq-1-2-per-week" name="beer-freq" type="radio" value="1-2-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="beer-freq-1-2-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">1-2 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="beer-freq-3-4-per-week" name="beer-freq" type="radio" value="3-4-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="beer-freq-3-4-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">3-4 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="beer-freq-5-6-per-week" name="beer-freq" type="radio" value="5-6-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="beer-freq-5-6-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">5-6 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="beer-freq-daily" name="beer-freq" type="radio" value="daily" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="beer-freq-daily" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Every day.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="beer-freq-unknown" name="beer-freq" type="radio" value="unknown" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="beer-freq-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know.</label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <div>
                    <label id="beer-serving-label" for="beer-serving" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, on the days that you drank beer, how many servings did you drink per day?</label>
                    <p class="text-sm text-gray-500">A serving of beer is a 12-ounce container.</p>
                  </div>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                      <input type="number" name="beer-serving" id="beer-serving" min="1" step="1" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0" aria-describedby="beer-serving-units">
                      <span id="beer-serving-units" class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">bottle(s)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div id="pop-container" class="hidden space-y-6 sm:space-y-5">
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <div>
                    <label id="pop-freq-label" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, how often did you usually drink alcoholic pop beverages?</label>
                    <p class="text-sm text-gray-500">These includes wine coolers, hard soda, spiked seltzer (sparkling water), Smirnoff Ice, malt liquor, or pre-mixed cocktails.</p>
                  </div>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <fieldset class="mt-4">
                      <legend class="sr-only">Alcoholic pop beverage consumption consumption frequencies</legend>
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input id="pop-freq-lt-one-month" name="pop-freq" type="radio" value="lt-once-a-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="pop-freq-lt-one-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Less than once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="pop-freq-once-per-month" name="pop-freq" type="radio" value="once-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="pop-freq-once-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="pop-freq-2-3-per-month" name="pop-freq" type="radio" value="2-3-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="pop-freq-2-3-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">2-3 times a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="pop-freq-1-2-per-week" name="pop-freq" type="radio" value="1-2-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="pop-freq-1-2-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">1-2 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="pop-freq-3-4-per-week" name="pop-freq" type="radio" value="3-4-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="pop-freq-3-4-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">3-4 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="pop-freq-5-6-per-week" name="pop-freq" type="radio" value="5-6-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="pop-freq-5-6-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">5-6 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="pop-freq-daily" name="pop-freq" type="radio" value="daily" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="pop-freq-daily" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Every day.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="pop-freq-unknown" name="pop-freq" type="radio" value="unknown" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="pop-freq-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know.</label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <div>
                    <label id="pop-serving-label" for="pop-serving" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, on the days that you drank alcoholic pop beverages, how many servings did you drink per day?</label>
                    <p class="text-sm text-gray-500">A serving of beer, hard cider, wine coolers, 'hard soda', spiked sparkling water, or malt liquor is a 12-ounce container. A serving of liquor or mixed drinks is one shot or 1.5 ounces of liquor.</p>
                  </div>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                      <input type="number" name="pop-serving" id="pop-serving" min="1" step="1" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0" aria-describedby="pop-serving-units">
                      <span id="pop-serving-units" class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">beverage(s)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div id="shots-container" class="hidden space-y-6 sm:space-y-5">
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <label id="shots-freq-label" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, how often did you usually take shots of liquor?</label>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <fieldset class="mt-4">
                      <legend class="sr-only">Shots of liquor consumption frequencies</legend>
                      <div class="space-y-4">
                        <div class="flex items-center">
                          <input id="shots-freq-lt-one-month" name="shots-freq" type="radio" value="lt-once-a-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="shots-freq-lt-one-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Less than once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="shots-freq-once-per-month" name="shots-freq" type="radio" value="once-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="shots-freq-once-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Once a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="shots-freq-2-3-per-month" name="shots-freq" type="radio" value="2-3-per-month" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="shots-freq-2-3-per-month" class="ml-3 block text-sm font-medium leading-6 text-gray-900">2-3 times a month.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="shots-freq-1-2-per-week" name="shots-freq" type="radio" value="1-2-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="shots-freq-1-2-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">1-2 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="shots-freq-3-4-per-week" name="shots-freq" type="radio" value="3-4-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="shots-freq-3-4-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">3-4 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="shots-freq-5-6-per-week" name="shots-freq" type="radio" value="5-6-per-week" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="shots-freq-5-6-per-week" class="ml-3 block text-sm font-medium leading-6 text-gray-900">5-6 times a week.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="shots-freq-daily" name="shots-freq" type="radio" value="daily" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="shots-freq-daily" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Every day.</label>
                        </div>
                        <div class="flex items-center">
                          <input id="shots-freq-unknown" name="shots-freq" type="radio" value="unknown" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                          <label for="shots-freq-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know.</label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                
                <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                  <div>
                    <label id="shot-serving-label" for="shot-serving" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Over the past 12 months, on the days that you drank liquor, how many servings did you drink per day?</label>
                    <p class="text-sm text-gray-500">A serving of liquor or mixed drinks is one shot or 1.5 ounces of liquor.</p>
                  </div>
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                      <input type="number" name="shot-serving" id="shot-serving" min="1" step="1" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0" aria-describedby="shot-serving-units">
                      <span id="shot-serving-units" class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">shot(s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Has a doctor or other health professional ever told you that you have or had fibrocystic breast or benign breast disease?</label>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <fieldset class="mt-4">
                  <legend class="sr-only">History of benign breast disease status</legend>
                  <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div class="flex items-center">
                      <input id="benign-breast-disease-yes" name="benign-breast-disease" type="radio" value="1" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="benign-breast-disease-yes" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes</label>
                    </div>
                    <div class="flex items-center">
                      <input id="benign-breast-disease-no" name="benign-breast-disease" type="radio" value="0" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="benign-breast-disease-no" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No</label>
                    </div>
                    <div class="flex items-center">
                      <input id="benign-breast-disease-unknown" name="benign-breast-disease" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="benign-breast-disease-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know</label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Has your biological mother, father, sister, or brother ever been diagnosed with breast cancer?</label>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <fieldset class="mt-4">
                  <legend class="sr-only">Family history of breast cancer status</legend>
                  <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div class="flex items-center">
                      <input id="family-history-yes" name="family-history" type="radio" value="1" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="family-history-yes" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Yes</label>
                    </div>
                    <div class="flex items-center">
                      <input id="family-history-no" name="family-history" type="radio" value="0" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="family-history-no" class="ml-3 block text-sm font-medium leading-6 text-gray-900">No</label>
                    </div>
                    <div class="flex items-center">
                      <input id="family-history-unknown" name="family-history" type="radio" value="" class="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-600">
                      <label for="family-history-unknown" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Don't know</label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div id="form-buttons" class="py-2 sm:py-4">
        <div class="flex justify-center gap-2">
          <button type="reset" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">Reset</button>
          <button id="submit-btn" type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-slate-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">Estimate risk</button>
        </div>
      </div>
    </form>
  </div>
  
  <div id="form-results-divider" class="pt-4">
    <div  class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300 mx-4 sm:mx-6 lg:mx-8"></div>
      </div>
      <div class="relative flex justify-center">
        <span class="bg-white px-2 text-sm text-gray-500">iCARE-Lit results</span>
      </div>
    </div>
  </div>
  
  <div class="mx-auto max-w-7xl mt-4 px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 lg:mb-8 border rounded-lg">
    <div id="results" class="w-full mt-4 px-4 sm:px-6 lg:px-8"></div>
  </div>
`;const ke=document.getElementById("age-menopause-container"),et=document.getElementById("children-container"),K=document.getElementById("births-container"),_e=document.getElementById("hormone-treatment-current-container"),Me=document.getElementById("hormone-treatment-type-container"),Ne=document.getElementById("hormonal-contraceptive-container"),ie=document.getElementById("alcohol-container"),fe=document.getElementById("wine-container"),he=document.getElementById("blc-container"),pe=document.getElementById("beer-container"),ge=document.getElementById("pop-container"),ye=document.getElementById("shots-container"),Z=document.getElementById("submit-btn"),Qt=document.getElementById("results");document.getElementById("menopause-yes").addEventListener("change",e=>{e.target.checked&&ke.classList.remove("hidden")});document.getElementById("menopause-no").addEventListener("change",e=>{e.target.checked&&!ke.classList.contains("hidden")&&ke.classList.add("hidden")});document.getElementById("menopause-unknown").addEventListener("change",e=>{e.target.checked&&!ke.classList.contains("hidden")&&ke.classList.add("hidden")});document.getElementById("num-pregnancies").addEventListener("input",e=>{parseInt(e.target.value)===0||e.target.value===""?(et.classList.contains("hidden")||et.classList.add("hidden"),K.classList.contains("hidden")||K.classList.add("hidden")):et.classList.remove("hidden")});document.getElementById("parous-yes").addEventListener("change",e=>{e.target.checked&&K.classList.remove("hidden")});document.getElementById("parous-no").addEventListener("change",e=>{e.target.checked&&!K.classList.contains("hidden")&&K.classList.add("hidden")});document.getElementById("parous-unknown").addEventListener("change",e=>{e.target.checked&&!K.classList.contains("hidden")&&K.classList.add("hidden")});document.getElementById("hormone-treatment-yes").addEventListener("change",e=>{e.target.checked&&_e.classList.remove("hidden")});document.getElementById("hormone-treatment-no").addEventListener("change",e=>{e.target.checked&&!_e.classList.contains("hidden")&&_e.classList.add("hidden")});document.getElementById("hormone-treatment-unknown").addEventListener("change",e=>{e.target.checked&&!_e.classList.contains("hidden")&&_e.classList.add("hidden")});document.getElementById("hormone-treatment-current-yes").addEventListener("change",e=>{e.target.checked&&Me.classList.remove("hidden")});document.getElementById("hormone-treatment-current-no").addEventListener("change",e=>{e.target.checked&&!Me.classList.contains("hidden")&&Me.classList.add("hidden")});document.getElementById("hormone-treatment-current-unknown").addEventListener("change",e=>{e.target.checked&&!Me.classList.contains("hidden")&&Me.classList.add("hidden")});document.getElementById("hormonal-contraceptive-yes").addEventListener("change",e=>{e.target.checked&&Ne.classList.remove("hidden")});document.getElementById("hormonal-contraceptive-no").addEventListener("change",e=>{e.target.checked&&!Ne.classList.contains("hidden")&&Ne.classList.add("hidden")});document.getElementById("hormonal-contraceptive-unknown").addEventListener("change",e=>{e.target.checked&&!Ne.classList.contains("hidden")&&Ne.classList.add("hidden")});document.getElementById("alcohol-use-former").addEventListener("change",e=>{e.target.checked&&(ie.classList.remove("hidden"),document.getElementById("alcohol-type-label").innerHTML="Please select any of the following alcoholic beverages that you had in the 12 months <em>before</em> you stopped drinking.",document.getElementById("wine-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink wine?",document.getElementById("wine-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank wine, how many servings did you drink per day?",document.getElementById("blc-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink glasses of beer/lager/cider?",document.getElementById("blc-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank beer/lager/cider, how many servings did you drink per day?",document.getElementById("beer-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink bottles of beer?",document.getElementById("beer-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank beer, how many servings did you drink per day?",document.getElementById("pop-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink alcoholic pop beverages?",document.getElementById("pop-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank alcoholic pop beverages, how many servings did you drink per day?",document.getElementById("shots-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually take shots of liquor?",document.getElementById("shot-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank liquor, how many servings did you drink per day?")});document.getElementById("alcohol-use-current").addEventListener("change",e=>{e.target.checked&&(ie.classList.remove("hidden"),document.getElementById("alcohol-type-label").innerHTML="Please select any of the following alcoholic beverages that you have had in the past 12 months.",document.getElementById("wine-freq-label").innerHTML="Over the past 12 months, how often did you usually drink wine?",document.getElementById("wine-serving-label").innerHTML="Over the past 12 months, on the days that you drank wine, how many servings did you drink per day?",document.getElementById("blc-freq-label").innerHTML="Over the past 12 months, how often did you usually drink glasses of beer/lager/cider?",document.getElementById("blc-serving-label").innerHTML="Over the past 12 months, on the days that you drank beer/lager/cider, how many servings did you drink per day?",document.getElementById("beer-freq-label").innerHTML="Over the past 12 months, how often did you usually drink bottles of beer?",document.getElementById("beer-serving-label").innerHTML="Over the past 12 months, on the days that you drank beer, how many servings did you drink per day?",document.getElementById("pop-freq-label").innerHTML="Over the past 12 months, how often did you usually drink alcoholic pop beverages?",document.getElementById("pop-serving-label").innerHTML="Over the past 12 months, on the days that you drank alcoholic pop beverages, how many servings did you drink per day?",document.getElementById("shots-freq-label").innerHTML="Over the past 12 months, how often did you usually take shots of liquor?",document.getElementById("shot-serving-label").innerHTML="Over the past 12 months, on the days that you drank liquor, how many servings did you drink per day?")});document.getElementById("alcohol-use-never").addEventListener("change",e=>{e.target.checked&&!ie.classList.contains("hidden")&&ie.classList.add("hidden")});document.getElementById("alcohol-use-unknown").addEventListener("change",e=>{e.target.checked&&!ie.classList.contains("hidden")&&ie.classList.add("hidden")});document.getElementById("alcohol-type-wine").addEventListener("change",e=>{e.target.checked?(fe.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):fe.classList.contains("hidden")||fe.classList.add("hidden")});document.getElementById("alcohol-type-blc").addEventListener("change",e=>{e.target.checked?(he.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):he.classList.contains("hidden")||he.classList.add("hidden")});document.getElementById("alcohol-type-beer").addEventListener("change",e=>{e.target.checked?(pe.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):pe.classList.contains("hidden")||pe.classList.add("hidden")});document.getElementById("alcohol-type-pop").addEventListener("change",e=>{e.target.checked?(ge.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):ge.classList.contains("hidden")||ge.classList.add("hidden")});document.getElementById("alcohol-type-shots").addEventListener("change",e=>{e.target.checked?(ye.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):ye.classList.contains("hidden")||ye.classList.add("hidden")});document.getElementById("alcohol-type-unknown").addEventListener("change",e=>{e.target.checked&&(document.getElementById("alcohol-type-wine").checked=!1,fe.classList.contains("hidden")||fe.classList.add("hidden"),document.getElementById("alcohol-type-blc").checked=!1,he.classList.contains("hidden")||he.classList.add("hidden"),document.getElementById("alcohol-type-beer").checked=!1,pe.classList.contains("hidden")||pe.classList.add("hidden"),document.getElementById("alcohol-type-pop").checked=!1,ge.classList.contains("hidden")||ge.classList.add("hidden"),document.getElementById("alcohol-type-shots").checked=!1,ye.classList.contains("hidden")||ye.classList.add("hidden"))});function yo(e,t){return isNaN(e)&&isNaN(t)||isNaN(e)?void 0:(isNaN(t)&&(t=0),(e*12+t)*2.54/10)}function en(e,t,n,r){const s=a=>r?a<18.5?"<18.5":a<25?"18.5-25":a<30?"25-30":">=30":a<25?"<25":a<30?"25-30":">=30";if(isNaN(t)&&isNaN(n)||isNaN(t)||(isNaN(n)&&(n=0),isNaN(e)))return;const i=t*12+n;return s(e/(i*i)*703)}function xo(e){const t=n=>n<=10?"<=10":n===11?"11":n===12?"12":n===13?"13":n===14?"14":n===15?"15":">=16";if(!isNaN(e))return t(e)}function vo(e,t,n){const r=s=>s===0?"0":s===1?"1":s===2?"2":">=3";if(!isNaN(e)){if(e===0)return r(0);if(!isNaN(t)){if(t===0)return r(0);if(!isNaN(n))return r(n)}}}function bo(e,t,n,r){const s=i=>i<20?"<20":i<25?"20-25":i<30?"25-30":">=30";if(!(isNaN(e)||e===0||isNaN(t)||t===0||n===0||isNaN(r)))return s(r)}function wo(e,t){if(!isNaN(e))return e===0?"never":isNaN(t)?void 0:t===0?"former":"current"}function ko(e){if(!isNaN(e))return e}function _o(e){if(!isNaN(e))return e}function Mo(e){if(!isNaN(e))return e}function No(e){if(!isNaN(e))return e}function qo(e,t){const n=r=>r<40?"<40":r<45?"40-45":r<50?"45-50":r<55?"50-55":">=55";if(!(isNaN(e)||e===0||isNaN(t)))return n(t)}function Eo(e,t,n){if(!(isNaN(e)||e===0||isNaN(t)||t===0||isNaN(n)))return n}function Ao(e,t,n,r,s,i,a,o,l,c,d,u){let m=0;const h=14,x=365.25,b=N=>N===0?"0":N<5?">0-5":N<15?"5-15":N<25?"15-25":N<35?"25-35":N<45?"35-45":">=45",M=N=>N==="lt-once-a-month"?0*12:N==="once-per-month"?12:N==="2-3-per-month"?2.5*12:N==="1-2-per-week"?1.5*52.14:N==="3-4-per-week"?3.5*52.14:N==="5-6-per-week"?5.5*52.14:N==="daily"?x:void 0;if(!(e===void 0||e==="")){if(e==="never")return b(m);if(!(t===void 0||t.length===0||t.includes(""))){if(t.includes("wine")){if(n===""||isNaN(r))return;m+=r*h*M(n)/x}if(t.includes("blc")){if(s===""||isNaN(i))return;m+=i*h*M(s)/x}if(t.includes("beer")){if(a===""||isNaN(o))return;m+=o*h*M(a)/x}if(t.includes("pop")){if(l===""||isNaN(c))return;m+=c*h*M(l)/x}if(t.includes("shots")){if(d===""||isNaN(u))return;m+=u*h*M(d)/x}return b(m)}}}function Lo(e){const t=Object.fromEntries(e.entries()),n={};return n.id=t.name,n.age=parseInt(t.age),n.height=yo(parseInt(t["height-feet"]),parseInt(t["height-inches"])),n.age_at_menarche=xo(parseInt(t.menarche)),n.parity=vo(parseInt(t["num-pregnancies"]),parseInt(t.parous),parseInt(t.parity)),n.age_first_birth=bo(parseInt(t["num-pregnancies"]),parseInt(t.parous),parseInt(t.parity),parseInt(t["age-first-child-birth"])),n.oc_ever=ko(parseInt(t["hormonal-contraceptive"])),n.alcohol_intake=Ao(t["alcohol-use"],e.getAll("alcohol-type"),t["wine-freq"],parseInt(t["wine-serving"]),t["blc-freq"],parseInt(t["blc-serving"]),t["beer-freq"],parseInt(t["beer-serving"]),t["pop-freq"],parseInt(t["pop-serving"]),t["shots-freq"],parseInt(t["shots-serving"])),n.bbd=Mo(parseInt(t["benign-breast-disease"])),n.famhist=No(parseInt(t["family-history"])),n.age>=50?(n.bmi_curc=en(parseFloat(t.weight),parseInt(t["height-feet"]),parseInt(t["height-inches"]),!1),n.age_at_menopause=qo(parseInt(t.menopause),parseInt(t["age-menopause"])),n.hrt=wo(parseInt(t["hormone-treatment"]),parseInt(t["hormone-treatment-current"])),n.hrt_type=Eo(parseInt(t["hormone-treatment"]),parseInt(t["hormone-treatment-current"]),parseInt(t["hormone-treatment-type"]))):(n.bmi_curc=en(parseFloat(t.weight),parseInt(t["height-feet"]),parseInt(t["height-inches"]),!0),n.oc_current=_o(parseInt(t["hormonal-contraceptive-current"]))),n}function Io(e,t){const n=[],r=.001*(Math.max(...t)-Math.min(...t)),s=Math.max(...t)-Math.min(...t);for(let i=0;i<e;i++){const a=Math.log10(r)+(Math.log10(s)-Math.log10(r))*i/(e-1);n.push(Math.pow(10,a))}return n}function $o(e,t,n){const r=t.reference_risks[0].population_risks.map(q=>q*100),s=t.profile[0].risk_estimates*100;e.innerHTML=`
    <div>
      <h1 class="text-lg px-4 pt-2 sm:pt-4 lg:pt-6">${n}'s estimated 5-year absolute risk of breast cancer: <span class="border-2 border-red-500 rounded-lg px-2">${s.toFixed(5)} %</span></h1>
      <h1 class="text-lg px-4 pt-4 pb-2 sm:pb-4 lg:pb-6">${n}'s estimated 5-year absolute risk of breast cancer compared to the US population:</h1>
    </div>
    `;const i=300,a=100,o=75,l=e.clientWidth,c={left:50,right:20},d=0,u=Math.max(...r),m=100,h=Io(m,r),x=50,b=at(e);b.attr("class","pr-10 py-4");const M=b.append("div").attr("class","slider-container"),N=co().width(l).height(i).margin({top:50,right:c.right,bottom:50,left:c.left}).data(r).xMin(d).xMax(u).vLine(s).xLabel("Absolute risk (%) →").title("Distribution of the 5-year absolute risk-percentage of breast cancer in the non-Hispanic white US population").bandwidth(h[x-1]),p=lo().width(l).height(a).margin({top:0,right:c.right,bottom:0,left:c.left}).data(r).xMin(d).xMax(u).vLine(s).boxWidth(30).radius(1).hoverOffsetX(80).hoverOffsetY(100).removeAxis(!0),f=uo().width(l).height(o).margin({top:5,right:c.right,bottom:0,left:c.left}).data([s]).xMin(d).xMax(u).radius(7).markerPadding(2).markerText(`${n}'s estimated absolute risk`).color("#FF0000").plotPadding(7).removeAxis(!0);b.call(N),b.call(p),b.call(f),M.call(oo().id("bandwidth").labelText("Bandwidth: ").min(1).max(m).step(1).value(x).on("change",q=>{b.call(N.bandwidth(h[q-1]))}));const g=b.append("div").attr("class","flex flex-row justify-center items-center mt-4"),v=g.append("button").attr("class","rounded-md border border-transparent bg-slate-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 py-2 px-4 mr-2").text("Download plot as PNG"),w=g.append("button").attr("class","rounded-md border border-transparent bg-slate-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 py-2 px-4").text("Download results as JSON");v.on("click",()=>{const q=at(e).selectAll("svg"),k=document.createElement("canvas"),A=k.getContext("2d");function $(E){return new Promise(_=>{const I=new Image,L=new Blob([E],{type:"image/svg+xml;charset=utf-8"}),B=URL.createObjectURL(L);I.onload=()=>{_(I)},I.src=B})}const y=q.nodes().map(E=>new XMLSerializer().serializeToString(E));Promise.all(y.map(E=>$(E))).then(E=>{let _=0;k.width=Math.max(...E.map(B=>B.width)),k.height=E.reduce((B,R)=>B+R.height,0),A.fillStyle="white",A.fillRect(0,0,k.width,k.height);for(const B of E)A.drawImage(B,0,_),_+=B.height;const I=k.toDataURL("image/png"),L=document.createElement("a");L.href=I,L.download=`icare-lit_risk_plot_${n}.png`,document.body.appendChild(L),L.click(),document.body.removeChild(L)})}),w.on("click",()=>{const q="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t,null,2)),k=document.createElement("a");k.setAttribute("href",q),k.setAttribute("download",`icare-lit_output_${n}.json`),document.body.appendChild(k),k.click(),k.remove()})}On.addEventListener("submit",e=>{e.preventDefault(),Z.innerHTML=`<svg class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l1-1.647z"></path>
      </svg>Calculating...`,Z.classList.add("cursor-not-allowed"),Z.disabled=!0;const t=new FormData(e.target),n=Lo(t);Zt.postMessage(n),console.log(n),Zt.onmessage=r=>{const s=r.data;$o(Qt,s,n.id),Qt.scrollIntoView({behavior:"smooth",block:"start"})},Z.innerHTML="Estimate risk",Z.classList.remove("cursor-not-allowed"),Z.disabled=!1});
