(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const tr="/icare-lit/assets/rose-ed9a43c9.svg",nr="/icare-lit/assets/github-15128406.svg";function ie(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function rr(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function gn(e){let t,n,r;e.length!==2?(t=ie,n=(o,l)=>ie(e(o),l),r=(o,l)=>e(o)-l):(t=e===ie||e===rr?e:sr,n=e,r=e);function s(o,l,c=0,d=o.length){if(c<d){if(t(l,l)!==0)return d;do{const u=c+d>>>1;n(o[u],l)<0?c=u+1:d=u}while(c<d)}return c}function i(o,l,c=0,d=o.length){if(c<d){if(t(l,l)!==0)return d;do{const u=c+d>>>1;n(o[u],l)<=0?c=u+1:d=u}while(c<d)}return c}function a(o,l,c=0,d=o.length){const u=s(o,l,c,d-1);return u>c&&r(o[u-1],l)>-r(o[u],l)?u-1:u}return{left:s,center:a,right:i}}function sr(){return 0}function ir(e){return e===null?NaN:+e}function*ar(e,t){if(t===void 0)for(let n of e)n!=null&&(n=+n)>=n&&(yield n);else{let n=-1;for(let r of e)(r=t(r,++n,e))!=null&&(r=+r)>=r&&(yield r)}}const or=gn(ie),lr=or.right;gn(ir).center;const cr=lr;function Lt(e,t){let n,r;if(t===void 0)for(const s of e)s!=null&&(n===void 0?s>=s&&(n=r=s):(n>s&&(n=s),r<s&&(r=s)));else{let s=-1;for(let i of e)(i=t(i,++s,e))!=null&&(n===void 0?i>=i&&(n=r=i):(n>i&&(n=i),r<i&&(r=i)))}return[n,r]}function dr(e=ie){if(e===ie)return yn;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,n)=>{const r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function yn(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const ur=Math.sqrt(50),mr=Math.sqrt(10),fr=Math.sqrt(2);function je(e,t,n){const r=(t-e)/Math.max(0,n),s=Math.floor(Math.log10(r)),i=r/Math.pow(10,s),a=i>=ur?10:i>=mr?5:i>=fr?2:1;let o,l,c;return s<0?(c=Math.pow(10,-s)/a,o=Math.round(e*c),l=Math.round(t*c),o/c<e&&++o,l/c>t&&--l,c=-c):(c=Math.pow(10,s)*a,o=Math.round(e/c),l=Math.round(t/c),o*c<e&&++o,l*c>t&&--l),l<o&&.5<=n&&n<2?je(e,t,n*2):[o,l,c]}function hr(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[s,i,a]=r?je(t,e,n):je(e,t,n);if(!(i>=s))return[];const o=i-s+1,l=new Array(o);if(r)if(a<0)for(let c=0;c<o;++c)l[c]=(i-c)/-a;else for(let c=0;c<o;++c)l[c]=(i-c)*a;else if(a<0)for(let c=0;c<o;++c)l[c]=(s+c)/-a;else for(let c=0;c<o;++c)l[c]=(s+c)*a;return l}function ft(e,t,n){return t=+t,e=+e,n=+n,je(e,t,n)[2]}function pr(e,t,n){t=+t,e=+e,n=+n;const r=t<e,s=r?ft(t,e,n):ft(e,t,n);return(r?-1:1)*(s<0?1/-s:s)}function ht(e,t){let n;if(t===void 0)for(const r of e)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let s of e)(s=t(s,++r,e))!=null&&(n<s||n===void 0&&s>=s)&&(n=s)}return n}function pt(e,t){let n;if(t===void 0)for(const r of e)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let s of e)(s=t(s,++r,e))!=null&&(n>s||n===void 0&&s>=s)&&(n=s)}return n}function xn(e,t,n=0,r=1/0,s){if(t=Math.floor(t),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(e.length-1,r)),!(n<=t&&t<=r))return e;for(s=s===void 0?yn:dr(s);r>n;){if(r-n>600){const l=r-n+1,c=t-n+1,d=Math.log(l),u=.5*Math.exp(2*d/3),f=.5*Math.sqrt(d*u*(l-u)/l)*(c-l/2<0?-1:1),h=Math.max(n,Math.floor(t-c*u/l+f)),x=Math.min(r,Math.floor(t+(l-c)*u/l+f));xn(e,t,h,x,s)}const i=e[t];let a=n,o=r;for(fe(e,n,t),s(e[r],i)>0&&fe(e,n,r);a<o;){for(fe(e,a,o),++a,--o;s(e[a],i)<0;)++a;for(;s(e[o],i)>0;)--o}s(e[n],i)===0?fe(e,n,o):(++o,fe(e,o,r)),o<=t&&(n=o+1),t<=o&&(r=o-1)}return e}function fe(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function it(e,t,n){if(e=Float64Array.from(ar(e,n)),!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return pt(e);if(t>=1)return ht(e);var r,s=(r-1)*t,i=Math.floor(s),a=ht(xn(e,i).subarray(0,i+1)),o=pt(e.subarray(i+1));return a+(o-a)*(s-i)}}function gr(e,t){let n=0,r=0;if(t===void 0)for(let s of e)s!=null&&(s=+s)>=s&&(++n,r+=s);else{let s=-1;for(let i of e)(i=t(i,++s,e))!=null&&(i=+i)>=i&&(++n,r+=i)}if(n)return r/n}function Ft(e,t,n){e=+e,t=+t,n=(s=arguments.length)<2?(t=e,e=0,1):s<3?1:+n;for(var r=-1,s=Math.max(0,Math.ceil((t-e)/n))|0,i=new Array(s);++r<s;)i[r]=e+r*n;return i}function yr(e){return e}var De=1,at=2,gt=3,pe=4,Yt=1e-6;function xr(e){return"translate("+e+",0)"}function br(e){return"translate(0,"+e+")"}function vr(e){return t=>+e(t)}function wr(e,t){return t=Math.max(0,e.bandwidth()-t*2)/2,e.round()&&(t=Math.round(t)),n=>+e(n)+t}function kr(){return!this.__axis}function It(e,t){var n=[],r=null,s=null,i=6,a=6,o=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=e===De||e===pe?-1:1,d=e===pe||e===at?"x":"y",u=e===De||e===gt?xr:br;function f(h){var x=r??(t.ticks?t.ticks.apply(t,n):t.domain()),v=s??(t.tickFormat?t.tickFormat.apply(t,n):yr),k=Math.max(i,0)+o,E=t.range(),p=+E[0]+l,m=+E[E.length-1]+l,g=(t.bandwidth?wr:vr)(t.copy(),l),b=h.selection?h.selection():h,w=b.selectAll(".domain").data([null]),N=b.selectAll(".tick").data(x,t).order(),A=N.exit(),q=N.enter().append("g").attr("class","tick"),I=N.select("line"),y=N.select("text");w=w.merge(w.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),N=N.merge(q),I=I.merge(q.append("line").attr("stroke","currentColor").attr(d+"2",c*i)),y=y.merge(q.append("text").attr("fill","currentColor").attr(d,c*k).attr("dy",e===De?"0em":e===gt?"0.71em":"0.32em")),h!==b&&(w=w.transition(h),N=N.transition(h),I=I.transition(h),y=y.transition(h),A=A.transition(h).attr("opacity",Yt).attr("transform",function(M){return isFinite(M=g(M))?u(M+l):this.getAttribute("transform")}),q.attr("opacity",Yt).attr("transform",function(M){var _=this.parentNode.__axis;return u((_&&isFinite(_=_(M))?_:g(M))+l)})),A.remove(),w.attr("d",e===pe||e===at?a?"M"+c*a+","+p+"H"+l+"V"+m+"H"+c*a:"M"+l+","+p+"V"+m:a?"M"+p+","+c*a+"V"+l+"H"+m+"V"+c*a:"M"+p+","+l+"H"+m),N.attr("opacity",1).attr("transform",function(M){return u(g(M)+l)}),I.attr(d+"2",c*i),y.attr(d,c*k).text(v),b.filter(kr).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",e===at?"start":e===pe?"end":"middle"),b.each(function(){this.__axis=g})}return f.scale=function(h){return arguments.length?(t=h,f):t},f.ticks=function(){return n=Array.from(arguments),f},f.tickArguments=function(h){return arguments.length?(n=h==null?[]:Array.from(h),f):n.slice()},f.tickValues=function(h){return arguments.length?(r=h==null?null:Array.from(h),f):r&&r.slice()},f.tickFormat=function(h){return arguments.length?(s=h,f):s},f.tickSize=function(h){return arguments.length?(i=a=+h,f):i},f.tickSizeInner=function(h){return arguments.length?(i=+h,f):i},f.tickSizeOuter=function(h){return arguments.length?(a=+h,f):a},f.tickPadding=function(h){return arguments.length?(o=+h,f):o},f.offset=function(h){return arguments.length?(l=+h,f):l},f}function _r(e){return It(De,e)}function bn(e){return It(gt,e)}function Mr(e){return It(pe,e)}var Er={value:()=>{}};function $t(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new ze(n)}function ze(e){this._=e}function Nr(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",s=n.indexOf(".");if(s>=0&&(r=n.slice(s+1),n=n.slice(0,s)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}ze.prototype=$t.prototype={constructor:ze,on:function(e,t){var n=this._,r=Nr(e+"",n),s,i=-1,a=r.length;if(arguments.length<2){for(;++i<a;)if((s=(e=r[i]).type)&&(s=Ar(n[s],e.name)))return s;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<a;)if(s=(e=r[i]).type)n[s]=Vt(n[s],e.name,t);else if(t==null)for(s in n)n[s]=Vt(n[s],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new ze(e)},call:function(e,t){if((s=arguments.length-2)>0)for(var n=new Array(s),r=0,s,i;r<s;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],r=0,s=i.length;r<s;++r)i[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],s=0,i=r.length;s<i;++s)r[s].value.apply(t,n)}};function Ar(e,t){for(var n=0,r=e.length,s;n<r;++n)if((s=e[n]).name===t)return s.value}function Vt(e,t,n){for(var r=0,s=e.length;r<s;++r)if(e[r].name===t){e[r]=Er,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var yt="http://www.w3.org/1999/xhtml";const jt={svg:"http://www.w3.org/2000/svg",xhtml:yt,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function tt(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),jt.hasOwnProperty(t)?{space:jt[t],local:e}:e}function qr(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===yt&&t.documentElement.namespaceURI===yt?t.createElement(e):t.createElementNS(n,e)}}function Lr(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function vn(e){var t=tt(e);return(t.local?Lr:qr)(t)}function Ir(){}function Ct(e){return e==null?Ir:function(){return this.querySelector(e)}}function $r(e){typeof e!="function"&&(e=Ct(e));for(var t=this._groups,n=t.length,r=new Array(n),s=0;s<n;++s)for(var i=t[s],a=i.length,o=r[s]=new Array(a),l,c,d=0;d<a;++d)(l=i[d])&&(c=e.call(l,l.__data__,d,i))&&("__data__"in l&&(c.__data__=l.__data__),o[d]=c);return new P(r,this._parents)}function Cr(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Br(){return[]}function wn(e){return e==null?Br:function(){return this.querySelectorAll(e)}}function Sr(e){return function(){return Cr(e.apply(this,arguments))}}function Tr(e){typeof e=="function"?e=Sr(e):e=wn(e);for(var t=this._groups,n=t.length,r=[],s=[],i=0;i<n;++i)for(var a=t[i],o=a.length,l,c=0;c<o;++c)(l=a[c])&&(r.push(e.call(l,l.__data__,c,a)),s.push(l));return new P(r,s)}function kn(e){return function(){return this.matches(e)}}function _n(e){return function(t){return t.matches(e)}}var Pr=Array.prototype.find;function Hr(e){return function(){return Pr.call(this.children,e)}}function Or(){return this.firstElementChild}function Rr(e){return this.select(e==null?Or:Hr(typeof e=="function"?e:_n(e)))}var Dr=Array.prototype.filter;function zr(){return Array.from(this.children)}function Fr(e){return function(){return Dr.call(this.children,e)}}function Yr(e){return this.selectAll(e==null?zr:Fr(typeof e=="function"?e:_n(e)))}function Vr(e){typeof e!="function"&&(e=kn(e));for(var t=this._groups,n=t.length,r=new Array(n),s=0;s<n;++s)for(var i=t[s],a=i.length,o=r[s]=[],l,c=0;c<a;++c)(l=i[c])&&e.call(l,l.__data__,c,i)&&o.push(l);return new P(r,this._parents)}function Mn(e){return new Array(e.length)}function jr(){return new P(this._enter||this._groups.map(Mn),this._parents)}function We(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}We.prototype={constructor:We,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Wr(e){return function(){return e}}function Xr(e,t,n,r,s,i){for(var a=0,o,l=t.length,c=i.length;a<c;++a)(o=t[a])?(o.__data__=i[a],r[a]=o):n[a]=new We(e,i[a]);for(;a<l;++a)(o=t[a])&&(s[a]=o)}function Ur(e,t,n,r,s,i,a){var o,l,c=new Map,d=t.length,u=i.length,f=new Array(d),h;for(o=0;o<d;++o)(l=t[o])&&(f[o]=h=a.call(l,l.__data__,o,t)+"",c.has(h)?s[o]=l:c.set(h,l));for(o=0;o<u;++o)h=a.call(e,i[o],o,i)+"",(l=c.get(h))?(r[o]=l,l.__data__=i[o],c.delete(h)):n[o]=new We(e,i[o]);for(o=0;o<d;++o)(l=t[o])&&c.get(f[o])===l&&(s[o]=l)}function Gr(e){return e.__data__}function Kr(e,t){if(!arguments.length)return Array.from(this,Gr);var n=t?Ur:Xr,r=this._parents,s=this._groups;typeof e!="function"&&(e=Wr(e));for(var i=s.length,a=new Array(i),o=new Array(i),l=new Array(i),c=0;c<i;++c){var d=r[c],u=s[c],f=u.length,h=Jr(e.call(d,d&&d.__data__,c,r)),x=h.length,v=o[c]=new Array(x),k=a[c]=new Array(x),E=l[c]=new Array(f);n(d,u,v,k,E,h,t);for(var p=0,m=0,g,b;p<x;++p)if(g=v[p]){for(p>=m&&(m=p+1);!(b=k[m])&&++m<x;);g._next=b||null}}return a=new P(a,r),a._enter=o,a._exit=l,a}function Jr(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Zr(){return new P(this._exit||this._groups.map(Mn),this._parents)}function Qr(e,t,n){var r=this.enter(),s=this,i=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(s=t(s),s&&(s=s.selection())),n==null?i.remove():n(i),r&&s?r.merge(s).order():s}function es(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,s=n.length,i=r.length,a=Math.min(s,i),o=new Array(s),l=0;l<a;++l)for(var c=n[l],d=r[l],u=c.length,f=o[l]=new Array(u),h,x=0;x<u;++x)(h=c[x]||d[x])&&(f[x]=h);for(;l<s;++l)o[l]=n[l];return new P(o,this._parents)}function ts(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],s=r.length-1,i=r[s],a;--s>=0;)(a=r[s])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function ns(e){e||(e=rs);function t(u,f){return u&&f?e(u.__data__,f.__data__):!u-!f}for(var n=this._groups,r=n.length,s=new Array(r),i=0;i<r;++i){for(var a=n[i],o=a.length,l=s[i]=new Array(o),c,d=0;d<o;++d)(c=a[d])&&(l[d]=c);l.sort(t)}return new P(s,this._parents).order()}function rs(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function ss(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function is(){return Array.from(this)}function as(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],s=0,i=r.length;s<i;++s){var a=r[s];if(a)return a}return null}function os(){let e=0;for(const t of this)++e;return e}function ls(){return!this.node()}function cs(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var s=t[n],i=0,a=s.length,o;i<a;++i)(o=s[i])&&e.call(o,o.__data__,i,s);return this}function ds(e){return function(){this.removeAttribute(e)}}function us(e){return function(){this.removeAttributeNS(e.space,e.local)}}function ms(e,t){return function(){this.setAttribute(e,t)}}function fs(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function hs(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function ps(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function gs(e,t){var n=tt(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?us:ds:typeof t=="function"?n.local?ps:hs:n.local?fs:ms)(n,t))}function En(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function ys(e){return function(){this.style.removeProperty(e)}}function xs(e,t,n){return function(){this.style.setProperty(e,t,n)}}function bs(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function vs(e,t,n){return arguments.length>1?this.each((t==null?ys:typeof t=="function"?bs:xs)(e,t,n??"")):oe(this.node(),e)}function oe(e,t){return e.style.getPropertyValue(t)||En(e).getComputedStyle(e,null).getPropertyValue(t)}function ws(e){return function(){delete this[e]}}function ks(e,t){return function(){this[e]=t}}function _s(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function Ms(e,t){return arguments.length>1?this.each((t==null?ws:typeof t=="function"?_s:ks)(e,t)):this.node()[e]}function Nn(e){return e.trim().split(/^|\s+/)}function Bt(e){return e.classList||new An(e)}function An(e){this._node=e,this._names=Nn(e.getAttribute("class")||"")}An.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function qn(e,t){for(var n=Bt(e),r=-1,s=t.length;++r<s;)n.add(t[r])}function Ln(e,t){for(var n=Bt(e),r=-1,s=t.length;++r<s;)n.remove(t[r])}function Es(e){return function(){qn(this,e)}}function Ns(e){return function(){Ln(this,e)}}function As(e,t){return function(){(t.apply(this,arguments)?qn:Ln)(this,e)}}function qs(e,t){var n=Nn(e+"");if(arguments.length<2){for(var r=Bt(this.node()),s=-1,i=n.length;++s<i;)if(!r.contains(n[s]))return!1;return!0}return this.each((typeof t=="function"?As:t?Es:Ns)(n,t))}function Ls(){this.textContent=""}function Is(e){return function(){this.textContent=e}}function $s(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function Cs(e){return arguments.length?this.each(e==null?Ls:(typeof e=="function"?$s:Is)(e)):this.node().textContent}function Bs(){this.innerHTML=""}function Ss(e){return function(){this.innerHTML=e}}function Ts(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Ps(e){return arguments.length?this.each(e==null?Bs:(typeof e=="function"?Ts:Ss)(e)):this.node().innerHTML}function Hs(){this.nextSibling&&this.parentNode.appendChild(this)}function Os(){return this.each(Hs)}function Rs(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Ds(){return this.each(Rs)}function zs(e){var t=typeof e=="function"?e:vn(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Fs(){return null}function Ys(e,t){var n=typeof e=="function"?e:vn(e),r=t==null?Fs:typeof t=="function"?t:Ct(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function Vs(){var e=this.parentNode;e&&e.removeChild(this)}function js(){return this.each(Vs)}function Ws(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Xs(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Us(e){return this.select(e?Xs:Ws)}function Gs(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Ks(e){return function(t){e.call(this,t,this.__data__)}}function Js(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function Zs(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,s=t.length,i;n<s;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++r]=i;++r?t.length=r:delete this.__on}}}function Qs(e,t,n){return function(){var r=this.__on,s,i=Ks(t);if(r){for(var a=0,o=r.length;a<o;++a)if((s=r[a]).type===e.type&&s.name===e.name){this.removeEventListener(s.type,s.listener,s.options),this.addEventListener(s.type,s.listener=i,s.options=n),s.value=t;return}}this.addEventListener(e.type,i,n),s={type:e.type,name:e.name,value:t,listener:i,options:n},r?r.push(s):this.__on=[s]}}function ei(e,t,n){var r=Js(e+""),s,i=r.length,a;if(arguments.length<2){var o=this.node().__on;if(o){for(var l=0,c=o.length,d;l<c;++l)for(s=0,d=o[l];s<i;++s)if((a=r[s]).type===d.type&&a.name===d.name)return d.value}return}for(o=t?Qs:Zs,s=0;s<i;++s)this.each(o(r[s],t,n));return this}function In(e,t,n){var r=En(e),s=r.CustomEvent;typeof s=="function"?s=new s(t,n):(s=r.document.createEvent("Event"),n?(s.initEvent(t,n.bubbles,n.cancelable),s.detail=n.detail):s.initEvent(t,!1,!1)),e.dispatchEvent(s)}function ti(e,t){return function(){return In(this,e,t)}}function ni(e,t){return function(){return In(this,e,t.apply(this,arguments))}}function ri(e,t){return this.each((typeof t=="function"?ni:ti)(e,t))}function*si(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],s=0,i=r.length,a;s<i;++s)(a=r[s])&&(yield a)}var $n=[null];function P(e,t){this._groups=e,this._parents=t}function ue(){return new P([[document.documentElement]],$n)}function ii(){return this}P.prototype=ue.prototype={constructor:P,select:$r,selectAll:Tr,selectChild:Rr,selectChildren:Yr,filter:Vr,data:Kr,enter:jr,exit:Zr,join:Qr,merge:es,selection:ii,order:ts,sort:ns,call:ss,nodes:is,node:as,size:os,empty:ls,each:cs,attr:gs,style:vs,property:Ms,classed:qs,text:Cs,html:Ps,raise:Os,lower:Ds,append:zs,insert:Ys,remove:js,clone:Us,datum:Gs,on:ei,dispatch:ri,[Symbol.iterator]:si};function Fe(e){return typeof e=="string"?new P([[document.querySelector(e)]],[document.documentElement]):new P([[e]],$n)}function St(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Cn(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Ce(){}var Me=.7,Xe=1/Me,ae="\\s*([+-]?\\d+)\\s*",Ee="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",F="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",ai=/^#([0-9a-f]{3,8})$/,oi=new RegExp(`^rgb\\(${ae},${ae},${ae}\\)$`),li=new RegExp(`^rgb\\(${F},${F},${F}\\)$`),ci=new RegExp(`^rgba\\(${ae},${ae},${ae},${Ee}\\)$`),di=new RegExp(`^rgba\\(${F},${F},${F},${Ee}\\)$`),ui=new RegExp(`^hsl\\(${Ee},${F},${F}\\)$`),mi=new RegExp(`^hsla\\(${Ee},${F},${F},${Ee}\\)$`),Wt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};St(Ce,Q,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Xt,formatHex:Xt,formatHex8:fi,formatHsl:hi,formatRgb:Ut,toString:Ut});function Xt(){return this.rgb().formatHex()}function fi(){return this.rgb().formatHex8()}function hi(){return Bn(this).formatHsl()}function Ut(){return this.rgb().formatRgb()}function Q(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=ai.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Gt(t):n===3?new T(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Se(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Se(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=oi.exec(e))?new T(t[1],t[2],t[3],1):(t=li.exec(e))?new T(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=ci.exec(e))?Se(t[1],t[2],t[3],t[4]):(t=di.exec(e))?Se(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=ui.exec(e))?Zt(t[1],t[2]/100,t[3]/100,1):(t=mi.exec(e))?Zt(t[1],t[2]/100,t[3]/100,t[4]):Wt.hasOwnProperty(e)?Gt(Wt[e]):e==="transparent"?new T(NaN,NaN,NaN,0):null}function Gt(e){return new T(e>>16&255,e>>8&255,e&255,1)}function Se(e,t,n,r){return r<=0&&(e=t=n=NaN),new T(e,t,n,r)}function pi(e){return e instanceof Ce||(e=Q(e)),e?(e=e.rgb(),new T(e.r,e.g,e.b,e.opacity)):new T}function xt(e,t,n,r){return arguments.length===1?pi(e):new T(e,t,n,r??1)}function T(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}St(T,xt,Cn(Ce,{brighter(e){return e=e==null?Xe:Math.pow(Xe,e),new T(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Me:Math.pow(Me,e),new T(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new T(Z(this.r),Z(this.g),Z(this.b),Ue(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Kt,formatHex:Kt,formatHex8:gi,formatRgb:Jt,toString:Jt}));function Kt(){return`#${J(this.r)}${J(this.g)}${J(this.b)}`}function gi(){return`#${J(this.r)}${J(this.g)}${J(this.b)}${J((isNaN(this.opacity)?1:this.opacity)*255)}`}function Jt(){const e=Ue(this.opacity);return`${e===1?"rgb(":"rgba("}${Z(this.r)}, ${Z(this.g)}, ${Z(this.b)}${e===1?")":`, ${e})`}`}function Ue(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Z(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function J(e){return e=Z(e),(e<16?"0":"")+e.toString(16)}function Zt(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new R(e,t,n,r)}function Bn(e){if(e instanceof R)return new R(e.h,e.s,e.l,e.opacity);if(e instanceof Ce||(e=Q(e)),!e)return new R;if(e instanceof R)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,s=Math.min(t,n,r),i=Math.max(t,n,r),a=NaN,o=i-s,l=(i+s)/2;return o?(t===i?a=(n-r)/o+(n<r)*6:n===i?a=(r-t)/o+2:a=(t-n)/o+4,o/=l<.5?i+s:2-i-s,a*=60):o=l>0&&l<1?0:a,new R(a,o,l,e.opacity)}function yi(e,t,n,r){return arguments.length===1?Bn(e):new R(e,t,n,r??1)}function R(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}St(R,yi,Cn(Ce,{brighter(e){return e=e==null?Xe:Math.pow(Xe,e),new R(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Me:Math.pow(Me,e),new R(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,s=2*n-r;return new T(ot(e>=240?e-240:e+120,s,r),ot(e,s,r),ot(e<120?e+240:e-120,s,r),this.opacity)},clamp(){return new R(Qt(this.h),Te(this.s),Te(this.l),Ue(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Ue(this.opacity);return`${e===1?"hsl(":"hsla("}${Qt(this.h)}, ${Te(this.s)*100}%, ${Te(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Qt(e){return e=(e||0)%360,e<0?e+360:e}function Te(e){return Math.max(0,Math.min(1,e||0))}function ot(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const Tt=e=>()=>e;function xi(e,t){return function(n){return e+n*t}}function bi(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function vi(e){return(e=+e)==1?Sn:function(t,n){return n-t?bi(t,n,e):Tt(isNaN(t)?n:t)}}function Sn(e,t){var n=t-e;return n?xi(e,n):Tt(isNaN(e)?t:e)}const Ge=function e(t){var n=vi(t);function r(s,i){var a=n((s=xt(s)).r,(i=xt(i)).r),o=n(s.g,i.g),l=n(s.b,i.b),c=Sn(s.opacity,i.opacity);return function(d){return s.r=a(d),s.g=o(d),s.b=l(d),s.opacity=c(d),s+""}}return r.gamma=e,r}(1);function wi(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),s;return function(i){for(s=0;s<n;++s)r[s]=e[s]*(1-i)+t[s]*i;return r}}function ki(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function _i(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,s=new Array(r),i=new Array(n),a;for(a=0;a<r;++a)s[a]=Pt(e[a],t[a]);for(;a<n;++a)i[a]=t[a];return function(o){for(a=0;a<r;++a)i[a]=s[a](o);return i}}function Mi(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function O(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function Ei(e,t){var n={},r={},s;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(s in t)s in e?n[s]=Pt(e[s],t[s]):r[s]=t[s];return function(i){for(s in n)r[s]=n[s](i);return r}}var bt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,lt=new RegExp(bt.source,"g");function Ni(e){return function(){return e}}function Ai(e){return function(t){return e(t)+""}}function Tn(e,t){var n=bt.lastIndex=lt.lastIndex=0,r,s,i,a=-1,o=[],l=[];for(e=e+"",t=t+"";(r=bt.exec(e))&&(s=lt.exec(t));)(i=s.index)>n&&(i=t.slice(n,i),o[a]?o[a]+=i:o[++a]=i),(r=r[0])===(s=s[0])?o[a]?o[a]+=s:o[++a]=s:(o[++a]=null,l.push({i:a,x:O(r,s)})),n=lt.lastIndex;return n<t.length&&(i=t.slice(n),o[a]?o[a]+=i:o[++a]=i),o.length<2?l[0]?Ai(l[0].x):Ni(t):(t=l.length,function(c){for(var d=0,u;d<t;++d)o[(u=l[d]).i]=u.x(c);return o.join("")})}function Pt(e,t){var n=typeof t,r;return t==null||n==="boolean"?Tt(t):(n==="number"?O:n==="string"?(r=Q(t))?(t=r,Ge):Tn:t instanceof Q?Ge:t instanceof Date?Mi:ki(t)?wi:Array.isArray(t)?_i:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?Ei:O)(e,t)}function qi(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}var en=180/Math.PI,vt={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Pn(e,t,n,r,s,i){var a,o,l;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(l=e*n+t*r)&&(n-=e*l,r-=t*l),(o=Math.sqrt(n*n+r*r))&&(n/=o,r/=o,l/=o),e*r<t*n&&(e=-e,t=-t,l=-l,a=-a),{translateX:s,translateY:i,rotate:Math.atan2(t,e)*en,skewX:Math.atan(l)*en,scaleX:a,scaleY:o}}var Pe;function Li(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?vt:Pn(t.a,t.b,t.c,t.d,t.e,t.f)}function Ii(e){return e==null||(Pe||(Pe=document.createElementNS("http://www.w3.org/2000/svg","g")),Pe.setAttribute("transform",e),!(e=Pe.transform.baseVal.consolidate()))?vt:(e=e.matrix,Pn(e.a,e.b,e.c,e.d,e.e,e.f))}function Hn(e,t,n,r){function s(c){return c.length?c.pop()+" ":""}function i(c,d,u,f,h,x){if(c!==u||d!==f){var v=h.push("translate(",null,t,null,n);x.push({i:v-4,x:O(c,u)},{i:v-2,x:O(d,f)})}else(u||f)&&h.push("translate("+u+t+f+n)}function a(c,d,u,f){c!==d?(c-d>180?d+=360:d-c>180&&(c+=360),f.push({i:u.push(s(u)+"rotate(",null,r)-2,x:O(c,d)})):d&&u.push(s(u)+"rotate("+d+r)}function o(c,d,u,f){c!==d?f.push({i:u.push(s(u)+"skewX(",null,r)-2,x:O(c,d)}):d&&u.push(s(u)+"skewX("+d+r)}function l(c,d,u,f,h,x){if(c!==u||d!==f){var v=h.push(s(h)+"scale(",null,",",null,")");x.push({i:v-4,x:O(c,u)},{i:v-2,x:O(d,f)})}else(u!==1||f!==1)&&h.push(s(h)+"scale("+u+","+f+")")}return function(c,d){var u=[],f=[];return c=e(c),d=e(d),i(c.translateX,c.translateY,d.translateX,d.translateY,u,f),a(c.rotate,d.rotate,u,f),o(c.skewX,d.skewX,u,f),l(c.scaleX,c.scaleY,d.scaleX,d.scaleY,u,f),c=d=null,function(h){for(var x=-1,v=f.length,k;++x<v;)u[(k=f[x]).i]=k.x(h);return u.join("")}}}var $i=Hn(Li,"px, ","px)","deg)"),Ci=Hn(Ii,", ",")",")"),le=0,ge=0,he=0,On=1e3,Ke,ye,Je=0,ee=0,nt=0,Ne=typeof performance=="object"&&performance.now?performance:Date,Rn=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Ht(){return ee||(Rn(Bi),ee=Ne.now()+nt)}function Bi(){ee=0}function Ze(){this._call=this._time=this._next=null}Ze.prototype=Dn.prototype={constructor:Ze,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Ht():+n)+(t==null?0:+t),!this._next&&ye!==this&&(ye?ye._next=this:Ke=this,ye=this),this._call=e,this._time=n,wt()},stop:function(){this._call&&(this._call=null,this._time=1/0,wt())}};function Dn(e,t,n){var r=new Ze;return r.restart(e,t,n),r}function Si(){Ht(),++le;for(var e=Ke,t;e;)(t=ee-e._time)>=0&&e._call.call(void 0,t),e=e._next;--le}function tn(){ee=(Je=Ne.now())+nt,le=ge=0;try{Si()}finally{le=0,Pi(),ee=0}}function Ti(){var e=Ne.now(),t=e-Je;t>On&&(nt-=t,Je=e)}function Pi(){for(var e,t=Ke,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Ke=n);ye=e,wt(r)}function wt(e){if(!le){ge&&(ge=clearTimeout(ge));var t=e-ee;t>24?(e<1/0&&(ge=setTimeout(tn,e-Ne.now()-nt)),he&&(he=clearInterval(he))):(he||(Je=Ne.now(),he=setInterval(Ti,On)),le=1,Rn(tn))}}function nn(e,t,n){var r=new Ze;return t=t==null?0:+t,r.restart(s=>{r.stop(),e(s+t)},t,n),r}var Hi=$t("start","end","cancel","interrupt"),Oi=[],zn=0,rn=1,kt=2,Ye=3,sn=4,_t=5,Ve=6;function rt(e,t,n,r,s,i){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;Ri(e,n,{name:t,index:r,group:s,on:Hi,tween:Oi,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:zn})}function Ot(e,t){var n=D(e,t);if(n.state>zn)throw new Error("too late; already scheduled");return n}function Y(e,t){var n=D(e,t);if(n.state>Ye)throw new Error("too late; already running");return n}function D(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function Ri(e,t,n){var r=e.__transition,s;r[t]=n,n.timer=Dn(i,0,n.time);function i(c){n.state=rn,n.timer.restart(a,n.delay,n.time),n.delay<=c&&a(c-n.delay)}function a(c){var d,u,f,h;if(n.state!==rn)return l();for(d in r)if(h=r[d],h.name===n.name){if(h.state===Ye)return nn(a);h.state===sn?(h.state=Ve,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[d]):+d<t&&(h.state=Ve,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[d])}if(nn(function(){n.state===Ye&&(n.state=sn,n.timer.restart(o,n.delay,n.time),o(c))}),n.state=kt,n.on.call("start",e,e.__data__,n.index,n.group),n.state===kt){for(n.state=Ye,s=new Array(f=n.tween.length),d=0,u=-1;d<f;++d)(h=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(s[++u]=h);s.length=u+1}}function o(c){for(var d=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(l),n.state=_t,1),u=-1,f=s.length;++u<f;)s[u].call(e,d);n.state===_t&&(n.on.call("end",e,e.__data__,n.index,n.group),l())}function l(){n.state=Ve,n.timer.stop(),delete r[t];for(var c in r)return;delete e.__transition}}function Di(e,t){var n=e.__transition,r,s,i=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){i=!1;continue}s=r.state>kt&&r.state<_t,r.state=Ve,r.timer.stop(),r.on.call(s?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}i&&delete e.__transition}}function zi(e){return this.each(function(){Di(this,e)})}function Fi(e,t){var n,r;return function(){var s=Y(this,e),i=s.tween;if(i!==n){r=n=i;for(var a=0,o=r.length;a<o;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}s.tween=r}}function Yi(e,t,n){var r,s;if(typeof n!="function")throw new Error;return function(){var i=Y(this,e),a=i.tween;if(a!==r){s=(r=a).slice();for(var o={name:t,value:n},l=0,c=s.length;l<c;++l)if(s[l].name===t){s[l]=o;break}l===c&&s.push(o)}i.tween=s}}function Vi(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=D(this.node(),n).tween,s=0,i=r.length,a;s<i;++s)if((a=r[s]).name===e)return a.value;return null}return this.each((t==null?Fi:Yi)(n,e,t))}function Rt(e,t,n){var r=e._id;return e.each(function(){var s=Y(this,r);(s.value||(s.value={}))[t]=n.apply(this,arguments)}),function(s){return D(s,r).value[t]}}function Fn(e,t){var n;return(typeof t=="number"?O:t instanceof Q?Ge:(n=Q(t))?(t=n,Ge):Tn)(e,t)}function ji(e){return function(){this.removeAttribute(e)}}function Wi(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Xi(e,t,n){var r,s=n+"",i;return function(){var a=this.getAttribute(e);return a===s?null:a===r?i:i=t(r=a,n)}}function Ui(e,t,n){var r,s=n+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===s?null:a===r?i:i=t(r=a,n)}}function Gi(e,t,n){var r,s,i;return function(){var a,o=n(this),l;return o==null?void this.removeAttribute(e):(a=this.getAttribute(e),l=o+"",a===l?null:a===r&&l===s?i:(s=l,i=t(r=a,o)))}}function Ki(e,t,n){var r,s,i;return function(){var a,o=n(this),l;return o==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),l=o+"",a===l?null:a===r&&l===s?i:(s=l,i=t(r=a,o)))}}function Ji(e,t){var n=tt(e),r=n==="transform"?Ci:Fn;return this.attrTween(e,typeof t=="function"?(n.local?Ki:Gi)(n,r,Rt(this,"attr."+e,t)):t==null?(n.local?Wi:ji)(n):(n.local?Ui:Xi)(n,r,t))}function Zi(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Qi(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function ea(e,t){var n,r;function s(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&Qi(e,i)),n}return s._value=t,s}function ta(e,t){var n,r;function s(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&Zi(e,i)),n}return s._value=t,s}function na(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=tt(e);return this.tween(n,(r.local?ea:ta)(r,t))}function ra(e,t){return function(){Ot(this,e).delay=+t.apply(this,arguments)}}function sa(e,t){return t=+t,function(){Ot(this,e).delay=t}}function ia(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?ra:sa)(t,e)):D(this.node(),t).delay}function aa(e,t){return function(){Y(this,e).duration=+t.apply(this,arguments)}}function oa(e,t){return t=+t,function(){Y(this,e).duration=t}}function la(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?aa:oa)(t,e)):D(this.node(),t).duration}function ca(e,t){if(typeof t!="function")throw new Error;return function(){Y(this,e).ease=t}}function da(e){var t=this._id;return arguments.length?this.each(ca(t,e)):D(this.node(),t).ease}function ua(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;Y(this,e).ease=n}}function ma(e){if(typeof e!="function")throw new Error;return this.each(ua(this._id,e))}function fa(e){typeof e!="function"&&(e=kn(e));for(var t=this._groups,n=t.length,r=new Array(n),s=0;s<n;++s)for(var i=t[s],a=i.length,o=r[s]=[],l,c=0;c<a;++c)(l=i[c])&&e.call(l,l.__data__,c,i)&&o.push(l);return new W(r,this._parents,this._name,this._id)}function ha(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,s=n.length,i=Math.min(r,s),a=new Array(r),o=0;o<i;++o)for(var l=t[o],c=n[o],d=l.length,u=a[o]=new Array(d),f,h=0;h<d;++h)(f=l[h]||c[h])&&(u[h]=f);for(;o<r;++o)a[o]=t[o];return new W(a,this._parents,this._name,this._id)}function pa(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function ga(e,t,n){var r,s,i=pa(t)?Ot:Y;return function(){var a=i(this,e),o=a.on;o!==r&&(s=(r=o).copy()).on(t,n),a.on=s}}function ya(e,t){var n=this._id;return arguments.length<2?D(this.node(),n).on.on(e):this.each(ga(n,e,t))}function xa(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function ba(){return this.on("end.remove",xa(this._id))}function va(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Ct(e));for(var r=this._groups,s=r.length,i=new Array(s),a=0;a<s;++a)for(var o=r[a],l=o.length,c=i[a]=new Array(l),d,u,f=0;f<l;++f)(d=o[f])&&(u=e.call(d,d.__data__,f,o))&&("__data__"in d&&(u.__data__=d.__data__),c[f]=u,rt(c[f],t,n,f,c,D(d,n)));return new W(i,this._parents,t,n)}function wa(e){var t=this._name,n=this._id;typeof e!="function"&&(e=wn(e));for(var r=this._groups,s=r.length,i=[],a=[],o=0;o<s;++o)for(var l=r[o],c=l.length,d,u=0;u<c;++u)if(d=l[u]){for(var f=e.call(d,d.__data__,u,l),h,x=D(d,n),v=0,k=f.length;v<k;++v)(h=f[v])&&rt(h,t,n,v,f,x);i.push(f),a.push(d)}return new W(i,a,t,n)}var ka=ue.prototype.constructor;function _a(){return new ka(this._groups,this._parents)}function Ma(e,t){var n,r,s;return function(){var i=oe(this,e),a=(this.style.removeProperty(e),oe(this,e));return i===a?null:i===n&&a===r?s:s=t(n=i,r=a)}}function Yn(e){return function(){this.style.removeProperty(e)}}function Ea(e,t,n){var r,s=n+"",i;return function(){var a=oe(this,e);return a===s?null:a===r?i:i=t(r=a,n)}}function Na(e,t,n){var r,s,i;return function(){var a=oe(this,e),o=n(this),l=o+"";return o==null&&(l=o=(this.style.removeProperty(e),oe(this,e))),a===l?null:a===r&&l===s?i:(s=l,i=t(r=a,o))}}function Aa(e,t){var n,r,s,i="style."+t,a="end."+i,o;return function(){var l=Y(this,e),c=l.on,d=l.value[i]==null?o||(o=Yn(t)):void 0;(c!==n||s!==d)&&(r=(n=c).copy()).on(a,s=d),l.on=r}}function qa(e,t,n){var r=(e+="")=="transform"?$i:Fn;return t==null?this.styleTween(e,Ma(e,r)).on("end.style."+e,Yn(e)):typeof t=="function"?this.styleTween(e,Na(e,r,Rt(this,"style."+e,t))).each(Aa(this._id,e)):this.styleTween(e,Ea(e,r,t),n).on("end.style."+e,null)}function La(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function Ia(e,t,n){var r,s;function i(){var a=t.apply(this,arguments);return a!==s&&(r=(s=a)&&La(e,a,n)),r}return i._value=t,i}function $a(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,Ia(e,t,n??""))}function Ca(e){return function(){this.textContent=e}}function Ba(e){return function(){var t=e(this);this.textContent=t??""}}function Sa(e){return this.tween("text",typeof e=="function"?Ba(Rt(this,"text",e)):Ca(e==null?"":e+""))}function Ta(e){return function(t){this.textContent=e.call(this,t)}}function Pa(e){var t,n;function r(){var s=e.apply(this,arguments);return s!==n&&(t=(n=s)&&Ta(s)),t}return r._value=e,r}function Ha(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,Pa(e))}function Oa(){for(var e=this._name,t=this._id,n=jn(),r=this._groups,s=r.length,i=0;i<s;++i)for(var a=r[i],o=a.length,l,c=0;c<o;++c)if(l=a[c]){var d=D(l,t);rt(l,e,n,c,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new W(r,this._parents,e,n)}function Ra(){var e,t,n=this,r=n._id,s=n.size();return new Promise(function(i,a){var o={value:a},l={value:function(){--s===0&&i()}};n.each(function(){var c=Y(this,r),d=c.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(o),t._.interrupt.push(o),t._.end.push(l)),c.on=t}),s===0&&i()})}var Da=0;function W(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function Vn(e){return ue().transition(e)}function jn(){return++Da}var j=ue.prototype;W.prototype=Vn.prototype={constructor:W,select:va,selectAll:wa,selectChild:j.selectChild,selectChildren:j.selectChildren,filter:fa,merge:ha,selection:_a,transition:Oa,call:j.call,nodes:j.nodes,node:j.node,size:j.size,empty:j.empty,each:j.each,on:ya,attr:Ji,attrTween:na,style:qa,styleTween:$a,text:Sa,textTween:Ha,remove:ba,tween:Vi,delay:ia,duration:la,ease:da,easeVarying:ma,end:Ra,[Symbol.iterator]:j[Symbol.iterator]};function za(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Fa={time:null,delay:0,duration:250,ease:za};function Ya(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function Va(e){var t,n;e instanceof W?(t=e._id,e=e._name):(t=jn(),(n=Fa).time=Ht(),e=e==null?null:e+"");for(var r=this._groups,s=r.length,i=0;i<s;++i)for(var a=r[i],o=a.length,l,c=0;c<o;++c)(l=a[c])&&rt(l,e,t,c,a,n||Ya(l,t));return new W(r,this._parents,e,t)}ue.prototype.interrupt=zi;ue.prototype.transition=Va;const Mt=Math.PI,Et=2*Mt,K=1e-6,ja=Et-K;function Wn(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function Wa(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return Wn;const n=10**t;return function(r){this._+=r[0];for(let s=1,i=r.length;s<i;++s)this._+=Math.round(arguments[s]*n)/n+r[s]}}class Xa{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?Wn:Wa(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,s){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+s}`}bezierCurveTo(t,n,r,s,i,a){this._append`C${+t},${+n},${+r},${+s},${this._x1=+i},${this._y1=+a}`}arcTo(t,n,r,s,i){if(t=+t,n=+n,r=+r,s=+s,i=+i,i<0)throw new Error(`negative radius: ${i}`);let a=this._x1,o=this._y1,l=r-t,c=s-n,d=a-t,u=o-n,f=d*d+u*u;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(f>K)if(!(Math.abs(u*l-c*d)>K)||!i)this._append`L${this._x1=t},${this._y1=n}`;else{let h=r-a,x=s-o,v=l*l+c*c,k=h*h+x*x,E=Math.sqrt(v),p=Math.sqrt(f),m=i*Math.tan((Mt-Math.acos((v+f-k)/(2*E*p)))/2),g=m/p,b=m/E;Math.abs(g-1)>K&&this._append`L${t+g*d},${n+g*u}`,this._append`A${i},${i},0,0,${+(u*h>d*x)},${this._x1=t+b*l},${this._y1=n+b*c}`}}arc(t,n,r,s,i,a){if(t=+t,n=+n,r=+r,a=!!a,r<0)throw new Error(`negative radius: ${r}`);let o=r*Math.cos(s),l=r*Math.sin(s),c=t+o,d=n+l,u=1^a,f=a?s-i:i-s;this._x1===null?this._append`M${c},${d}`:(Math.abs(this._x1-c)>K||Math.abs(this._y1-d)>K)&&this._append`L${c},${d}`,r&&(f<0&&(f=f%Et+Et),f>ja?this._append`A${r},${r},0,1,${u},${t-o},${n-l}A${r},${r},0,1,${u},${this._x1=c},${this._y1=d}`:f>K&&this._append`A${r},${r},0,${+(f>=Mt)},${u},${this._x1=t+r*Math.cos(i)},${this._y1=n+r*Math.sin(i)}`)}rect(t,n,r,s){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+s}h${-r}Z`}toString(){return this._}}function Ua(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Qe(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function ce(e){return e=Qe(Math.abs(e)),e?e[1]:NaN}function Ga(e,t){return function(n,r){for(var s=n.length,i=[],a=0,o=e[0],l=0;s>0&&o>0&&(l+o+1>r&&(o=Math.max(1,r-l)),i.push(n.substring(s-=o,s+o)),!((l+=o+1)>r));)o=e[a=(a+1)%e.length];return i.reverse().join(t)}}function Ka(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var Ja=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function et(e){if(!(t=Ja.exec(e)))throw new Error("invalid format: "+e);var t;return new Dt({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}et.prototype=Dt.prototype;function Dt(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Dt.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Za(e){e:for(var t=e.length,n=1,r=-1,s;n<t;++n)switch(e[n]){case".":r=s=n;break;case"0":r===0&&(r=n),s=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(s+1):e}var Xn;function Qa(e,t){var n=Qe(e,t);if(!n)return e+"";var r=n[0],s=n[1],i=s-(Xn=Math.max(-8,Math.min(8,Math.floor(s/3)))*3)+1,a=r.length;return i===a?r:i>a?r+new Array(i-a+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+Qe(e,Math.max(0,t+i-1))[0]}function an(e,t){var n=Qe(e,t);if(!n)return e+"";var r=n[0],s=n[1];return s<0?"0."+new Array(-s).join("0")+r:r.length>s+1?r.slice(0,s+1)+"."+r.slice(s+1):r+new Array(s-r.length+2).join("0")}const on={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:Ua,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>an(e*100,t),r:an,s:Qa,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function ln(e){return e}var cn=Array.prototype.map,dn=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function eo(e){var t=e.grouping===void 0||e.thousands===void 0?ln:Ga(cn.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",s=e.decimal===void 0?".":e.decimal+"",i=e.numerals===void 0?ln:Ka(cn.call(e.numerals,String)),a=e.percent===void 0?"%":e.percent+"",o=e.minus===void 0?"−":e.minus+"",l=e.nan===void 0?"NaN":e.nan+"";function c(u){u=et(u);var f=u.fill,h=u.align,x=u.sign,v=u.symbol,k=u.zero,E=u.width,p=u.comma,m=u.precision,g=u.trim,b=u.type;b==="n"?(p=!0,b="g"):on[b]||(m===void 0&&(m=12),g=!0,b="g"),(k||f==="0"&&h==="=")&&(k=!0,f="0",h="=");var w=v==="$"?n:v==="#"&&/[boxX]/.test(b)?"0"+b.toLowerCase():"",N=v==="$"?r:/[%p]/.test(b)?a:"",A=on[b],q=/[defgprs%]/.test(b);m=m===void 0?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,m)):Math.max(0,Math.min(20,m));function I(y){var M=w,_=N,C,L,B;if(b==="c")_=A(y)+_,y="";else{y=+y;var H=y<0||1/y<0;if(y=isNaN(y)?l:A(Math.abs(y),m),g&&(y=Za(y)),H&&+y==0&&x!=="+"&&(H=!1),M=(H?x==="("?x:o:x==="-"||x==="("?"":x)+M,_=(b==="s"?dn[8+Xn/3]:"")+_+(H&&x==="("?")":""),q){for(C=-1,L=y.length;++C<L;)if(B=y.charCodeAt(C),48>B||B>57){_=(B===46?s+y.slice(C+1):y.slice(C))+_,y=y.slice(0,C);break}}}p&&!k&&(y=t(y,1/0));var X=M.length+y.length+_.length,$=X<E?new Array(E-X+1).join(f):"";switch(p&&k&&(y=t($+y,$.length?E-_.length:1/0),$=""),h){case"<":y=M+y+_+$;break;case"=":y=M+$+y+_;break;case"^":y=$.slice(0,X=$.length>>1)+M+y+_+$.slice(X);break;default:y=$+M+y+_;break}return i(y)}return I.toString=function(){return u+""},I}function d(u,f){var h=c((u=et(u),u.type="f",u)),x=Math.max(-8,Math.min(8,Math.floor(ce(f)/3)))*3,v=Math.pow(10,-x),k=dn[8+x/3];return function(E){return h(v*E)+k}}return{format:c,formatPrefix:d}}var He,Un,Gn;to({thousands:",",grouping:[3],currency:["$",""]});function to(e){return He=eo(e),Un=He.format,Gn=He.formatPrefix,He}function no(e){return Math.max(0,-ce(Math.abs(e)))}function ro(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(ce(t)/3)))*3-ce(Math.abs(e)))}function so(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,ce(t)-ce(e))+1}function io(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function ao(e){return function(){return e}}function oo(e){return+e}var un=[0,1];function se(e){return e}function Nt(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:ao(isNaN(t)?NaN:.5)}function lo(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function co(e,t,n){var r=e[0],s=e[1],i=t[0],a=t[1];return s<r?(r=Nt(s,r),i=n(a,i)):(r=Nt(r,s),i=n(i,a)),function(o){return i(r(o))}}function uo(e,t,n){var r=Math.min(e.length,t.length)-1,s=new Array(r),i=new Array(r),a=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++a<r;)s[a]=Nt(e[a],e[a+1]),i[a]=n(t[a],t[a+1]);return function(o){var l=cr(e,o,1,r)-1;return i[l](s[l](o))}}function mo(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function fo(){var e=un,t=un,n=Pt,r,s,i,a=se,o,l,c;function d(){var f=Math.min(e.length,t.length);return a!==se&&(a=lo(e[0],e[f-1])),o=f>2?uo:co,l=c=null,u}function u(f){return f==null||isNaN(f=+f)?i:(l||(l=o(e.map(r),t,n)))(r(a(f)))}return u.invert=function(f){return a(s((c||(c=o(t,e.map(r),O)))(f)))},u.domain=function(f){return arguments.length?(e=Array.from(f,oo),d()):e.slice()},u.range=function(f){return arguments.length?(t=Array.from(f),d()):t.slice()},u.rangeRound=function(f){return t=Array.from(f),n=qi,d()},u.clamp=function(f){return arguments.length?(a=f?!0:se,d()):a!==se},u.interpolate=function(f){return arguments.length?(n=f,d()):n},u.unknown=function(f){return arguments.length?(i=f,u):i},function(f,h){return r=f,s=h,d()}}function ho(){return fo()(se,se)}function po(e,t,n,r){var s=pr(e,t,n),i;switch(r=et(r??",f"),r.type){case"s":{var a=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(i=ro(s,a))&&(r.precision=i),Gn(r,a)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=so(s,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=no(s))&&(r.precision=i-(r.type==="%")*2);break}}return Un(r)}function go(e){var t=e.domain;return e.ticks=function(n){var r=t();return hr(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var s=t();return po(s[0],s[s.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),s=0,i=r.length-1,a=r[s],o=r[i],l,c,d=10;for(o<a&&(c=a,a=o,o=c,c=s,s=i,i=c);d-- >0;){if(c=ft(a,o,n),c===l)return r[s]=a,r[i]=o,t(r);if(c>0)a=Math.floor(a/c)*c,o=Math.ceil(o/c)*c;else if(c<0)a=Math.ceil(a*c)/c,o=Math.floor(o*c)/c;else break;l=c}return e},e}function Ae(){var e=ho();return e.copy=function(){return mo(e,Ae())},io.apply(e,arguments),go(e)}function ne(e){return function(){return e}}function yo(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new Xa(t)}function xo(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Kn(e){this._context=e}Kn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function bo(e){return new Kn(e)}function vo(e){return e[0]}function wo(e){return e[1]}function ko(e,t){var n=ne(!0),r=null,s=bo,i=null,a=yo(o);e=typeof e=="function"?e:e===void 0?vo:ne(e),t=typeof t=="function"?t:t===void 0?wo:ne(t);function o(l){var c,d=(l=xo(l)).length,u,f=!1,h;for(r==null&&(i=s(h=a())),c=0;c<=d;++c)!(c<d&&n(u=l[c],c,l))===f&&((f=!f)?i.lineStart():i.lineEnd()),f&&i.point(+e(u,c,l),+t(u,c,l));if(h)return i=null,h+""||null}return o.x=function(l){return arguments.length?(e=typeof l=="function"?l:ne(+l),o):e},o.y=function(l){return arguments.length?(t=typeof l=="function"?l:ne(+l),o):t},o.defined=function(l){return arguments.length?(n=typeof l=="function"?l:ne(!!l),o):n},o.curve=function(l){return arguments.length?(s=l,r!=null&&(i=s(r)),o):s},o.context=function(l){return arguments.length?(l==null?r=i=null:i=s(r=l),o):r},o}function mn(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function Jn(e){this._context=e}Jn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:mn(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:mn(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function _o(e){return new Jn(e)}function xe(e,t,n){this.k=e,this.x=t,this.y=n}xe.prototype={constructor:xe,scale:function(e){return e===1?this:new xe(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new xe(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};xe.prototype;function Mo(){let e,t,n,r,s,i;const a=$t("change"),o=l=>{l.attr("class","accent-slate-600 py-2 sm:py-4"),l.selectAll("label").data([null]).join("label").attr("for",e).attr("class","pr-2").text(t),l.selectAll("input").data([null]).join("input").attr("type","range").attr("id",e).attr("min",n).attr("max",r).attr("value",i).on("change",c=>{l.selectAll("output").data([null]).join("output").attr("id",e).text(c.target.value),a.call("change",null,c.target.value)}),l.selectAll("output").data([null]).join("output").attr("id",e).attr("class","pl-2 sm:pl-4").text(i)};return o.id=function(l){return arguments.length?(e=l,o):e},o.labelText=function(l){return arguments.length?(t=l,o):t},o.min=function(l){return arguments.length?(n=+l,o):n},o.max=function(l){return arguments.length?(r=+l,o):r},o.step=function(l){return arguments.length?(s=+l,o):s},o.value=function(l){return arguments.length?(i=+l,o):i},o.on=function(){let l=a.on.apply(a,arguments);return l===a?o:l},o}function Eo(){let e,t,n,r,s,i,a,o,l,c,d="rgb(122, 255, 248, 0.7)",u=1.5,f=1,h,x=15,v=0,k=0,E=!1;const p=m=>{const g=m.selectAll("svg.box-plot").data([null]).join("svg").attr("class","box-plot").attr("width",e).attr("height",t).attr("font-family","sans-serif").attr("font-size",x);let b=Lt(r);b[0]=s??b[0],b[1]=i??b[1];const w=Ae().domain(b).range([n.left,e-n.right]),N=it(r,.25),A=it(r,.5),q=it(r,.75),I=q-N;let y=N-I*1.5;const M=pt(r);y=M>y?M:y;let _=q+I*1.5;const C=ht(r);_=C<_?C:_;const L=r.filter($=>$<y||$>_),B=r.reduce(($,z)=>$+z,0)/r.length,H=m.selectAll("div.tooltip").data([null]).join("div").attr("class","p-2 text-white rounded-md border border-white border-opacity-50 shadow-sm pointer-events-none -translate-x-[40%] -translate-y-[75%] font-sans text-xs bg-black bg-opacity-60 transition-opacity duration-200 ease-out transition-border-color duration-100 ease-out backdrop-blur-md").style("position","absolute").style("opacity",0);g.on("mouseover",function($){const S=`
        Minimum: ${y.toFixed(1)} %<br>
        25th percentile: ${N.toFixed(1)} %<br>
        Median: ${A.toFixed(1)} %<br>
        75th percentile: ${q.toFixed(1)} %<br>
        Maximum: ${_.toFixed(1)} %<br>
        Inter-quartile range: ${I.toFixed(1)} %<br>
        Mean: ${B.toFixed(1)} %
        `;H.style("opacity",1).style("border-color",d).html(S)}).on("mouseout",()=>{H.style("opacity",0)}).on("mousemove",function($){H.style("left",$.pageX+v+"px").style("top",$.pageY+k+"px")});const X=L.filter($=>$<b[1]&&$>b[0]);g.selectAll("circle").data(X).join("circle").attr("cx",$=>w($)).attr("cy",()=>t/2+(Math.random()*(c/2)-c/4)).attr("r",h).attr("fill",d).attr("opacity",f).attr("stroke","black").attr("stroke-width",u),g.selectAll("rect").data([null]).join("rect").attr("x",w(N)).attr("y",t/2-c/2).attr("width",w(q)-w(N)).attr("height",c).attr("fill",d).attr("stroke","black").attr("stroke-width",u),g.selectAll("#median").data([null]).join("line").attr("id","median").attr("x1",w(A)).attr("y1",t/2-c/2).attr("x2",w(A)).attr("y2",t/2+c/2).attr("stroke","black").attr("stroke-width",u*2),g.selectAll("#lower-whisker").data([null]).join("line").attr("id","lower-whisker").attr("x1",w(y)).attr("y1",t/2).attr("x2",w(N)).attr("y2",t/2).attr("stroke","black").attr("stroke-width",u),g.selectAll("#lower-whisker-edge").data([null]).join("line").attr("id","lower-whisker-edge").attr("x1",w(y)).attr("y1",t/2-c/4).attr("x2",w(y)).attr("y2",t/2+c/4).attr("stroke","black").attr("stroke-width",u),g.selectAll("#upper-whisker").data([null]).join("line").attr("id","upper-whisker").attr("x1",w(q)).attr("y1",t/2).attr("x2",w(_)).attr("y2",t/2).attr("stroke","black").attr("stroke-width",u),g.selectAll("#upper-whisker-edge").data([null]).join("line").attr("id","upper-whisker-edge").attr("x1",w(_)).attr("y1",t/2-c/4).attr("x2",w(_)).attr("y2",t/2+c/4).attr("stroke","black").attr("stroke-width",u),E||(g.selectAll(".x-axis").data([null]).join("g").attr("class","x-axis").attr("transform",`translate(0,${t-n.bottom})`).call(bn(w)),o&&g.selectAll(".x-axis-label").data([null]).join("text").attr("class","x-axis-label").attr("text-anchor","end").attr("x",e).attr("y",t-n.bottom/3).text(o).style("font-size",x*(3/4))),a!==void 0&&g.selectAll("#vLine").data([null]).join("line").attr("id","vLine").attr("x1",w(a)).attr("y1",t/2-c/2).attr("x2",w(a)).attr("y2",t/2+c/2).attr("stroke","red").attr("stroke-width",1.5),l&&g.selectAll(".title").data([null]).join("text").attr("class","title").text(l).attr("text-anchor","middle").attr("x",e/2).attr("y",n.top/2)};return p.width=function(m){return arguments.length?(e=+m,p):e},p.height=function(m){return arguments.length?(t=+m,p):t},p.margin=function(m){return arguments.length?(n=m,p):n},p.data=function(m){return arguments.length?(r=m,p):r},p.xMin=function(m){return arguments.length?(s=+m,p):s},p.xMax=function(m){return arguments.length?(i=+m,p):i},p.vLine=function(m){return arguments.length?(a=+m,p):a},p.xLabel=function(m){return arguments.length?(o=m,p):o},p.title=function(m){return arguments.length?(l=m,p):l},p.boxWidth=function(m){return arguments.length?(c=+m,p):c},p.color=function(m){return arguments.length?(d=m,p):d},p.strokeWidth=function(m){return arguments.length?(u=+m,p):u},p.opacity=function(m){return arguments.length?(f=+m,p):f},p.radius=function(m){return arguments.length?(h=+m,p):h},p.fontSize=function(m){return arguments.length?(x=+m,p):x},p.hoverOffsetX=function(m){return arguments.length?(v=+m,p):v},p.hoverOffsetY=function(m){return arguments.length?(k=+m,p):k},p.removeAxis=function(m){return arguments.length?(E=m,p):E},p}function No(){let e,t,n,r,s,i,a,o,l,c,d=40,u,f="rgb(122, 255, 248, 0.7)",h=1,x,v,k=15;const E=g=>b=>Math.abs(b/=g)<=1?.75*(1-b*b)/g:0,p=(g,b,w)=>b.map(N=>[N,gr(w,A=>g(N-A))]),m=g=>{const b=g.selectAll("svg.density-plot").data([null]).join("svg").attr("class","density-plot").attr("width",e).attr("height",t).attr("font-family","sans-serif").attr("font-size",k);let w=Lt(r);w[0]=s??w[0],w[1]=i??w[1];const N=Ae().domain(w).range([n.left,e-n.right]),A=N.ticks(d),q=p(E(u),A,r),I=l??Math.max(...q.map(L=>L[1])),y=Ae().domain([0,I]).range([t-n.bottom,n.top]);q[0][1]!==0&&q.unshift([q[0][0],0]),q[q.length-1][1]!==0&&q.push([q[q.length-1][0],0]);const M=ko().curve(_o).x(L=>N(L[0])).y(L=>y(L[1])),_=Vn().duration(1e3);let C=b.selectAll("defs").data([null]).join("defs").append("linearGradient").attr("id","color-gradient");if(x&&v&&v.length===x.length+1){C.append("stop").attr("offset","0%").attr("stop-color",v[0]);for(let L=0;L<x.length;L++){let B=((x[L]-w[0])/(w[1]-w[0])*100).toFixed(1);B<0&&(B=0),B>100&&(B=100),C.append("stop").attr("offset",`${B}%`).attr("stop-color",v[L]),C.append("stop").attr("offset",`${B}%`).attr("stop-color",v[L+1])}C.append("stop").attr("offset","100%").attr("stop-color",v[v.length-1])}else C.append("stop").attr("offset","100%").attr("stop-color",f);b.selectAll("path").data([null]).join(L=>L.append("path").attr("stroke","black").attr("stroke-width",1.5).attr("stroke-linejoin","round").attr("opacity",h).attr("d",M(q)).style("fill","url(#color-gradient)"),L=>L.call(B=>B.transition(_).attr("d",M(q))),L=>L.remove()),b.selectAll(".y-axis").data([null]).join("g").attr("class","y-axis").attr("transform",`translate(${n.left},0)`).call(Mr(y)),b.selectAll(".y-axis-label").data([null]).join("text").attr("class","y-axis-label").text("Density →").attr("text-anchor","end").attr("transform","rotate(-90)").attr("x",-n.top).attr("y",n.left/3).style("font-size",k*(3/4)),b.selectAll(".x-axis").data([null]).join("g").attr("class","x-axis").attr("transform",`translate(0,${t-n.bottom})`).call(bn(N)),b.selectAll(".x-axis-label").data([null]).join("text").attr("class","x-axis-label").attr("text-anchor","end").attr("x",e).attr("y",t-n.bottom/3).text(a).style("font-size",k*(3/4)),c!==void 0&&b.selectAll(".vLine").data([null]).join("line").attr("class","vLine").attr("x1",N(c)).attr("y1",y(0)).attr("x2",N(c)).attr("y2",y(I)).attr("stroke","red").attr("stroke-width",1.5).attr("stroke-linejoin","round").attr("opacity",h),b.selectAll(".title").data([null]).join("text").attr("class","title").text(o).attr("text-anchor","middle").attr("x",e/2).attr("y",n.top/2)};return m.width=function(g){return arguments.length?(e=+g,m):e},m.height=function(g){return arguments.length?(t=+g,m):t},m.margin=function(g){return arguments.length?(n=g,m):n},m.data=function(g){return arguments.length?(r=g,m):r},m.xMin=function(g){return arguments.length?(s=+g,m):s},m.xMax=function(g){return arguments.length?(i=+g,m):i},m.xLabel=function(g){return arguments.length?(a=g,m):a},m.title=function(g){return arguments.length?(o=g,m):o},m.yMax=function(g){return arguments.length?(l=+g,m):l},m.vLine=function(g){return arguments.length?(c=+g,m):c},m.numBins=function(g){return arguments.length?(d=+g,m):d},m.bandwidth=function(g){return arguments.length?(u=+g,m):u},m.color=function(g){return arguments.length?(f=g,m):f},m.opacity=function(g){return arguments.length?(h=+g,m):h},m.cutoffs=function(g){return arguments.length?(x=g,m):x},m.cutoffColors=function(g){return arguments.length?(v=g,m):v},m.fontSize=function(g){return arguments.length?(k=+g,m):k},m}function Ao(){let e,t,n,r,s,i,a,o,l="rgb(122, 255, 248, 0.7)",c=1.5,d=1,u=3,f=1.5,h=15,x=15,v=!1,k="Value";const E=(m,g)=>{const b=new Float64Array(m.length),w=g**2,N=.001;let A=null,q=null;const I=(y,M)=>{let _=A;for(;_;){const C=_.index;if(w-N>(m[C]-y)**2+(b[C]-M)**2)return!0;_=_.next}return!1};for(const y of Ft(m.length).sort((M,_)=>m[M]-m[_])){for(;A&&m[A.index]<m[y]-w;)A=A.next;if(I(m[y],b[y]=0)){let _=A;b[y]=1/0;do{const C=_.index;let L=b[C]+Math.sqrt(w-(m[C]-m[y])**2);L<b[y]&&!I(m[y],L)&&(b[y]=L),_=_.next}while(_)}const M={index:y,next:null};A===null?A=q=M:q=q.next=M}return b},p=m=>{const g=m.selectAll("svg.beeswarm-plot").data([null]).join("svg").attr("class","beeswarm-plot").attr("width",e).attr("height",t).attr("font-family","sans-serif").attr("font-size",x);let b=Lt(r);b[0]=s??b[0],b[1]=i??b[1];const w=Ae().domain(b).range([n.left,e-n.right]),N=E(r.map(A=>w(A)),u*2+f).map(A=>A+n.top+h);g.selectAll("g.marker").data(Ft(r.length)).join("g").attr("class","marker").attr("transform",A=>`translate(${w(r[A])}, ${N[A]})`).each(function(A){const q=Fe(this);q.append("circle").attr("r",u).attr("fill",l).attr("opacity",d).attr("stroke","black").attr("stroke-width",c);const I=7*k.length;q.append("rect").attr("x",u-I/2).attr("y",u+5).attr("width",I).attr("height",20).attr("fill","white").attr("stroke","black").attr("stroke-width",c),q.append("text").attr("x",u-I/2+5).attr("y",u+20).attr("font-size","12px").text(`${k}: ${r[A].toFixed(1)} %`)}),v||(g.selectAll(".x-axis").data([null]).join("g").attr("class","x-axis").attr("transform",`translate(0,${n.top})`).call(_r(w)),a&&g.selectAll(".x-axis-label").data([null]).join("text").attr("class","x-axis-label").attr("text-anchor","end").attr("x",e).attr("y",n.top*(2/3)).text(a).style("font-size",x*(3/4)))};return p.width=function(m){return arguments.length?(e=+m,p):e},p.height=function(m){return arguments.length?(t=+m,p):t},p.margin=function(m){return arguments.length?(n=m,p):n},p.data=function(m){return arguments.length?(r=m,p):r},p.xMin=function(m){return arguments.length?(s=+m,p):s},p.xMax=function(m){return arguments.length?(i=+m,p):i},p.xLabel=function(m){return arguments.length?(a=m,p):a},p.title=function(m){return arguments.length?(o=m,p):o},p.color=function(m){return arguments.length?(l=m,p):l},p.strokeWidth=function(m){return arguments.length?(c=+m,p):c},p.opacity=function(m){return arguments.length?(d=+m,p):d},p.radius=function(m){return arguments.length?(u=+m,p):u},p.markerPadding=function(m){return arguments.length?(f=+m,p):f},p.plotPadding=function(m){return arguments.length?(h=+m,p):h},p.fontSize=function(m){return arguments.length?(x=+m,p):x},p.removeAxis=function(m){return arguments.length?(v=m,p):v},p.markerText=function(m){return arguments.length?(k=m,p):k},p}function qo(){let e,t,n,r,s,i,a,o,l;const c=d=>{const f=e/3.1,h=e-f,x=(h-l.left-l.right)/10,v=x/2,k=2,E=15,p=Math.floor(10*10*(n/100)),m=10*10*(n/100)-p,g=Array.from({length:10*10},(M,_)=>({index:_,color:_<p?r:s})),b="m62.096 8.5859c-5.208 0-9.424 4.2191-9.424 9.4261 0.001 5.203 4.217 9.424 9.424 9.424 5.202 0 9.422-4.221 9.422-9.424 0-5.208-4.22-9.4261-9.422-9.4261zm-10.41 21.268c-6.672 0-12.131 5.407-12.131 12.07v29.23c0 2.275 1.791 4.123 4.07 4.123 2.28 0 4.127-1.846 4.127-4.123v-26.355h2.102s0.048 68.811 0.048 73.331c0 3.05 2.478 5.53 5.532 5.53 3.052 0 5.525-2.48 5.525-5.53v-42.581h2.27v42.581c0 3.05 2.473 5.53 5.531 5.53 3.054 0 5.549-2.48 5.549-5.53v-73.331h2.127v26.355c0 2.275 1.85 4.123 4.126 4.123 2.28 0 4.073-1.846 4.073-4.123v-29.23c0-6.663-5.463-12.07-12.129-12.07h-20.82z",w=d.selectAll("svg#population-prevalence-plot").data([null]).join("svg").attr("id","population-prevalence-plot").attr("width",e).attr("height",t).attr("viewBox",`0 0 ${e} ${h}`).attr("font-family","sans-serif");w.selectAll(".population-border").data([null]).join("rect").attr("class","population-border").attr("width",h).attr("height",h).attr("fill","none").attr("stroke","black").attr("stroke-width",3).attr("transform",`translate(${k}, ${k})`);let N=w.selectAll("defs").data([null]).join("defs").append("linearGradient").attr("id","color-gradient-fraction").attr("x1","0%").attr("y1","0%").attr("x2","100%").attr("y2","0%");N.append("stop").attr("offset","0%").attr("stop-color",r),N.append("stop").attr("offset",`${m*100}%`).attr("stop-color",r),N.append("stop").attr("offset",`${m*100}%`).attr("stop-color",s),N.append("stop").attr("offset","100%").attr("stop-color",s);const A=w.selectAll("g.person").data(g);A.enter().append("g").attr("class","person").merge(A).attr("transform",(M,_)=>`translate(${l.left+_%10*x+k}, ${l.top+Math.floor(_/10)*x+k}) scale(${x/124.19})`).selectAll("path").data(M=>[M]).join("path").attr("d",b).attr("fill",M=>M.index===p&&m>0?"url(#color-gradient-fraction)":M.color),A.exit().remove();const y=w.selectAll("g.population-legend").data([null]).join("g").attr("class","color-legend").attr("transform",`translate(${h+E}, ${l.top+E})`);y.selectAll("rect.population-legend-border").data([null]).join("rect").attr("class","population-legend-border").attr("width",f-20).attr("height",v*4).attr("fill","none").attr("stroke","black").attr("stroke-width",2),y.selectAll("rect.population-legend-case-color").data([null]).join("rect").attr("class","population-legend-case-color").attr("x",v/2).attr("y",v/2).attr("width",v).attr("height",v).attr("fill",r).attr("stroke","black").attr("stroke-width",1),y.selectAll("rect.population-legend-case-labal").data([null]).join("text").attr("class","population-legend-case-labal").attr("x",v*2).attr("y",x/2).attr("dy",".35em").text(i??"Case").style("font-size",`${o??v/1.25}px`).style(),y.selectAll("rect.population-legend-control-color").data([null]).join("rect").attr("class","population-legend-control-color").attr("x",v/2).attr("y",v*4/2+v/2).attr("width",v).attr("height",v).attr("fill",s).attr("stroke","black").attr("stroke-width",1),y.selectAll("rect.population-legend-control-labal").data([null]).join("text").attr("class","population-legend-control-labal").attr("x",v*2).attr("y",x+x/2).attr("dy",".35em").text(a??"Control").style("font-size",`${o??v/1.25}px`)};return c.width=function(d){return arguments.length?(e=+d,c):e},c.height=function(d){return arguments.length?(t=+d,c):t},c.prevalence=function(d){return arguments.length?(n=+d,c):n},c.colorCase=function(d){return arguments.length?(r=d,c):r},c.colorControl=function(d){return arguments.length?(s=d,c):s},c.labelCase=function(d){return arguments.length?(i=d,c):i},c.labelControl=function(d){return arguments.length?(a=d,c):a},c.fontSize=function(d){return arguments.length?(o=+d,c):o},c.margin=function(d){return arguments.length?(l=d,c):l},c}const zt=document.querySelector("#app"),fn=new Worker(new URL("/icare-lit/assets/webWorker-240ef4f0.js",self.location),{type:"module"}),Lo=1,Io=80,$o=0,Co=84,Bo=5,Oe=Math.max(Lo,$o),Re=Math.min(Io,Co)-Bo;zt.innerHTML=`
  <div id="header" class="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8 bg-slate-900 rounded-b-lg">
    <div class="flex items-center justify-between">
      <div class="flex justify-start gap-2">
        <div class="flex items-center">
          <img src="${tr}" class="h-12 w-12 sm:h-16 sm:w-16 gap-2 logo vanilla" alt="rose logo" />
        </div>
        <div class="min-w-0 flex-1">
          <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:tracking-tight">iCARE-Lit</h2>
          <p class="py-2 pr-2 text-sm sm:text-base text-white">Absolute risk estimator for breast cancer</p>
        </div>
      </div>
      
      <div class="flex md:mt-0 md:ml-4 shrink-0">
        <a title="Source code" href="https://github.com/jeyabbalas/icare-lit">
          <img src="${nr}" class="h-10 w-10 sm:h-12 sm:w-12 fill-current" alt="github logo" />
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
                <input type="number" name="age" id="age" min="${Oe}" max="${Re}" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm" required>
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
                <p class="text-sm text-gray-500"><span class="font-medium">Note</span>: The current version of the model is developed for <em>non-Hispanic, white</em> populations only. Future versions will be developed for other populations.</p>
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
                <label for="weight" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">How much do you weigh without your clothes or shoes on?</label>
                <p class="text-sm text-gray-500">If you are pregnant, how much did you weigh before your pregnancy?</p>
              </div>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                  <input type="number" name="weight" id="weight" min="0" max="500" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0.00" aria-describedby="weight-units">
                <select id="weight-unit" name="weight-unit" class="block rounded-r-md border-0 py-1.5 text-gray-500 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6">
                  <option value="lbs">lbs.</option>
                  <option value="kgs">kgs.</option>
                </select>
                </div>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <div>
                <label class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">How tall are you with your shoes off?</label>
                <p class="text-sm text-gray-500">Please select the unit and enter your height.</p>
              </div>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <div class="space-y-2">
                  <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                    <select id="height-unit" name="height-unit" class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6">
                      <option value="ft-in">feet/inches</option>
                      <option value="m">meters</option>
                      <option value="cm">centimeters</option>
                    </select>
                  </div>
                  <div id="height-ft-in-container">
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
                  <div id="height-m-container" class="hidden">
                    <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                      <label for="height-m" class="sr-only">Height in meters</label>
                      <input type="number" name="height-m" min="0" max="3" step="0.01" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0.00" aria-describedby="height-m">
                      <span id="height-m" class="inline-block w-[70px] inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">meters</span>
                    </div>
                  </div>
                  <div id="height-cm-container" class="hidden">
                    <div class="flex max-w-lg rounded-md shadow-sm sm:max-w-xs">
                      <label for="height-cm" class="sr-only">Height in centimeters</label>
                      <input type="number" name="height-cm" min="0" max="300" step="0.1" class="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6" placeholder="0.0" aria-describedby="height-cm">
                      <span id="height-cm" class="inline-block w-[95px] inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">centimeters</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label for="menarche" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">How old were you when you had your first menstrual period?</label>
              <div class="mt-1 sm:col-span-2 sm:mt-0">
                <input type="number" name="menarche" id="menarche" min="${Oe}" max="${Re}" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm">
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
                  <input type="number" name="age-menopause" id="age-menopause" min="${Oe}" max="${Re}" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm">
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
                  <input type="number" name="age-first-child-birth" id="age-first-child-birth" min="${Oe}" max="${Re}" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm">
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
          <button id="reset-btn" type="reset" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">Reset</button>
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
        <span class="bg-white px-2 text-lg text-gray-500">iCARE-Lit results</span>
      </div>
    </div>
  </div>
  
  <div class="mx-auto max-w-7xl mt-4 px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 lg:mb-8 border rounded-lg">
    <div id="results" class="w-full mt-4 px-4 sm:px-6 lg:px-8"></div>
  </div>
`;const So=document.getElementById("height-unit"),ct=document.getElementById("height-ft-in-container"),dt=document.getElementById("height-m-container"),ut=document.getElementById("height-cm-container"),qe=document.getElementById("age-menopause-container"),mt=document.getElementById("children-container"),te=document.getElementById("births-container"),Le=document.getElementById("hormone-treatment-current-container"),Ie=document.getElementById("hormone-treatment-type-container"),$e=document.getElementById("hormonal-contraceptive-container"),de=document.getElementById("alcohol-container"),be=document.getElementById("wine-container"),ve=document.getElementById("blc-container"),we=document.getElementById("beer-container"),ke=document.getElementById("pop-container"),_e=document.getElementById("shots-container"),re=document.getElementById("submit-btn"),At=document.getElementById("results");So.addEventListener("change",e=>{e.target.value==="ft-in"?(ct.classList.remove("hidden"),dt.classList.add("hidden"),ut.classList.add("hidden")):e.target.value==="m"?(ct.classList.add("hidden"),dt.classList.remove("hidden"),ut.classList.add("hidden")):e.target.value==="cm"&&(ct.classList.add("hidden"),dt.classList.add("hidden"),ut.classList.remove("hidden"))});document.getElementById("menopause-yes").addEventListener("change",e=>{e.target.checked&&qe.classList.remove("hidden")});document.getElementById("menopause-no").addEventListener("change",e=>{e.target.checked&&!qe.classList.contains("hidden")&&qe.classList.add("hidden")});document.getElementById("menopause-unknown").addEventListener("change",e=>{e.target.checked&&!qe.classList.contains("hidden")&&qe.classList.add("hidden")});document.getElementById("num-pregnancies").addEventListener("input",e=>{parseInt(e.target.value)===0||e.target.value===""?(mt.classList.contains("hidden")||mt.classList.add("hidden"),te.classList.contains("hidden")||te.classList.add("hidden")):mt.classList.remove("hidden")});document.getElementById("parous-yes").addEventListener("change",e=>{e.target.checked&&te.classList.remove("hidden")});document.getElementById("parous-no").addEventListener("change",e=>{e.target.checked&&!te.classList.contains("hidden")&&te.classList.add("hidden")});document.getElementById("parous-unknown").addEventListener("change",e=>{e.target.checked&&!te.classList.contains("hidden")&&te.classList.add("hidden")});document.getElementById("hormone-treatment-yes").addEventListener("change",e=>{e.target.checked&&Le.classList.remove("hidden")});document.getElementById("hormone-treatment-no").addEventListener("change",e=>{e.target.checked&&!Le.classList.contains("hidden")&&Le.classList.add("hidden")});document.getElementById("hormone-treatment-unknown").addEventListener("change",e=>{e.target.checked&&!Le.classList.contains("hidden")&&Le.classList.add("hidden")});document.getElementById("hormone-treatment-current-yes").addEventListener("change",e=>{e.target.checked&&Ie.classList.remove("hidden")});document.getElementById("hormone-treatment-current-no").addEventListener("change",e=>{e.target.checked&&!Ie.classList.contains("hidden")&&Ie.classList.add("hidden")});document.getElementById("hormone-treatment-current-unknown").addEventListener("change",e=>{e.target.checked&&!Ie.classList.contains("hidden")&&Ie.classList.add("hidden")});document.getElementById("hormonal-contraceptive-yes").addEventListener("change",e=>{e.target.checked&&$e.classList.remove("hidden")});document.getElementById("hormonal-contraceptive-no").addEventListener("change",e=>{e.target.checked&&!$e.classList.contains("hidden")&&$e.classList.add("hidden")});document.getElementById("hormonal-contraceptive-unknown").addEventListener("change",e=>{e.target.checked&&!$e.classList.contains("hidden")&&$e.classList.add("hidden")});document.getElementById("alcohol-use-former").addEventListener("change",e=>{e.target.checked&&(de.classList.remove("hidden"),document.getElementById("alcohol-type-label").innerHTML="Please select any of the following alcoholic beverages that you had in the 12 months <em>before</em> you stopped drinking.",document.getElementById("wine-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink wine?",document.getElementById("wine-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank wine, how many servings did you drink per day?",document.getElementById("blc-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink glasses of beer/lager/cider?",document.getElementById("blc-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank beer/lager/cider, how many servings did you drink per day?",document.getElementById("beer-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink bottles of beer?",document.getElementById("beer-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank beer, how many servings did you drink per day?",document.getElementById("pop-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink alcoholic pop beverages?",document.getElementById("pop-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank alcoholic pop beverages, how many servings did you drink per day?",document.getElementById("shots-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually take shots of liquor?",document.getElementById("shot-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank liquor, how many servings did you drink per day?")});document.getElementById("alcohol-use-current").addEventListener("change",e=>{e.target.checked&&(de.classList.remove("hidden"),document.getElementById("alcohol-type-label").innerHTML="Please select any of the following alcoholic beverages that you have had in the past 12 months.",document.getElementById("wine-freq-label").innerHTML="Over the past 12 months, how often did you usually drink wine?",document.getElementById("wine-serving-label").innerHTML="Over the past 12 months, on the days that you drank wine, how many servings did you drink per day?",document.getElementById("blc-freq-label").innerHTML="Over the past 12 months, how often did you usually drink glasses of beer/lager/cider?",document.getElementById("blc-serving-label").innerHTML="Over the past 12 months, on the days that you drank beer/lager/cider, how many servings did you drink per day?",document.getElementById("beer-freq-label").innerHTML="Over the past 12 months, how often did you usually drink bottles of beer?",document.getElementById("beer-serving-label").innerHTML="Over the past 12 months, on the days that you drank beer, how many servings did you drink per day?",document.getElementById("pop-freq-label").innerHTML="Over the past 12 months, how often did you usually drink alcoholic pop beverages?",document.getElementById("pop-serving-label").innerHTML="Over the past 12 months, on the days that you drank alcoholic pop beverages, how many servings did you drink per day?",document.getElementById("shots-freq-label").innerHTML="Over the past 12 months, how often did you usually take shots of liquor?",document.getElementById("shot-serving-label").innerHTML="Over the past 12 months, on the days that you drank liquor, how many servings did you drink per day?")});document.getElementById("alcohol-use-never").addEventListener("change",e=>{e.target.checked&&!de.classList.contains("hidden")&&de.classList.add("hidden")});document.getElementById("alcohol-use-unknown").addEventListener("change",e=>{e.target.checked&&!de.classList.contains("hidden")&&de.classList.add("hidden")});document.getElementById("alcohol-type-wine").addEventListener("change",e=>{e.target.checked?(be.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):be.classList.contains("hidden")||be.classList.add("hidden")});document.getElementById("alcohol-type-blc").addEventListener("change",e=>{e.target.checked?(ve.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):ve.classList.contains("hidden")||ve.classList.add("hidden")});document.getElementById("alcohol-type-beer").addEventListener("change",e=>{e.target.checked?(we.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):we.classList.contains("hidden")||we.classList.add("hidden")});document.getElementById("alcohol-type-pop").addEventListener("change",e=>{e.target.checked?(ke.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):ke.classList.contains("hidden")||ke.classList.add("hidden")});document.getElementById("alcohol-type-shots").addEventListener("change",e=>{e.target.checked?(_e.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):_e.classList.contains("hidden")||_e.classList.add("hidden")});document.getElementById("alcohol-type-unknown").addEventListener("change",e=>{e.target.checked&&(document.getElementById("alcohol-type-wine").checked=!1,be.classList.contains("hidden")||be.classList.add("hidden"),document.getElementById("alcohol-type-blc").checked=!1,ve.classList.contains("hidden")||ve.classList.add("hidden"),document.getElementById("alcohol-type-beer").checked=!1,we.classList.contains("hidden")||we.classList.add("hidden"),document.getElementById("alcohol-type-pop").checked=!1,ke.classList.contains("hidden")||ke.classList.add("hidden"),document.getElementById("alcohol-type-shots").checked=!1,_e.classList.contains("hidden")||_e.classList.add("hidden"))});function qt(e,t,n,r,s){switch(e){case"ft-in":return isNaN(t)&&isNaN(n)?void 0:(isNaN(n)&&(n=0),(t*12+n)*2.54/10);case"m":return isNaN(r)?void 0:r*100/10;case"cm":return isNaN(s)?void 0:s/10;default:return}}function hn(e,t,n,r,s,i,a,o){const l=u=>o?u<18.5?"<18.5":u<25?"18.5-25":u<30?"25-30":">=30":u<25?"<25":u<30?"25-30":">=30";if(isNaN(e)||n===void 0)return;const c=t==="lbs"?e*.453592:e,d=qt(n,r,s,i,a)*10/100;if(!isNaN(d))return l(c/(d*d))}function To(e){const t=n=>n<=10?"<=10":n===11?"11":n===12?"12":n===13?"13":n===14?"14":n===15?"15":">=16";if(!isNaN(e))return t(e)}function Po(e,t,n){const r=s=>s===0?"0":s===1?"1":s===2?"2":">=3";if(!isNaN(e)){if(e===0)return r(0);if(!isNaN(t)){if(t===0)return r(0);if(!isNaN(n))return r(n)}}}function Ho(e,t,n,r){const s=i=>i<20?"<20":i<25?"20-25":i<30?"25-30":">=30";if(!(isNaN(e)||e===0||isNaN(t)||t===0||n===0||isNaN(r)))return s(r)}function Oo(e,t){if(!isNaN(e))return e===0?"never":isNaN(t)?void 0:t===0?"former":"current"}function Ro(e){if(!isNaN(e))return e}function Do(e){if(!isNaN(e))return e}function zo(e){if(!isNaN(e))return e}function Fo(e){if(!isNaN(e))return e}function Yo(e,t){const n=r=>r<40?"<40":r<45?"40-45":r<50?"45-50":r<55?"50-55":">=55";if(!(isNaN(e)||e===0||isNaN(t)))return n(t)}function Vo(e,t,n){if(!(isNaN(e)||e===0||isNaN(t)||t===0||isNaN(n)))return n}function jo(e,t,n,r,s,i,a,o,l,c,d,u){let f=0;const h=14,x=365.25,v=E=>E===0?"0":E<5?">0-5":E<15?"5-15":E<25?"15-25":E<35?"25-35":E<45?"35-45":">=45",k=E=>E==="lt-once-a-month"?0*12:E==="once-per-month"?12:E==="2-3-per-month"?2.5*12:E==="1-2-per-week"?1.5*52.14:E==="3-4-per-week"?3.5*52.14:E==="5-6-per-week"?5.5*52.14:E==="daily"?x:void 0;if(!(e===void 0||e==="")){if(e==="never")return v(f);if(!(t===void 0||t.length===0||t.includes(""))){if(t.includes("wine")){if(n===""||isNaN(r))return;f+=r*h*k(n)/x}if(t.includes("blc")){if(s===""||isNaN(i))return;f+=i*h*k(s)/x}if(t.includes("beer")){if(a===""||isNaN(o))return;f+=o*h*k(a)/x}if(t.includes("pop")){if(l===""||isNaN(c))return;f+=c*h*k(l)/x}if(t.includes("shots")){if(d===""||isNaN(u))return;f+=u*h*k(d)/x}return v(f)}}}function Wo(e){const t=Object.fromEntries(e.entries()),n={};return n.id=t.name,n.age=parseInt(t.age),n.height=qt(parseInt(t["height-feet"]),parseInt(t["height-inches"])),n.height=qt(t["height-unit"],parseInt(t["height-feet"]),parseInt(t["height-inches"]),parseFloat(t["height-m"]),parseFloat(t["height-cm"])),n.age_at_menarche=To(parseInt(t.menarche)),n.parity=Po(parseInt(t["num-pregnancies"]),parseInt(t.parous),parseInt(t.parity)),n.age_first_birth=Ho(parseInt(t["num-pregnancies"]),parseInt(t.parous),parseInt(t.parity),parseInt(t["age-first-child-birth"])),n.oc_ever=Ro(parseInt(t["hormonal-contraceptive"])),n.alcohol_intake=jo(t["alcohol-use"],e.getAll("alcohol-type"),t["wine-freq"],parseInt(t["wine-serving"]),t["blc-freq"],parseInt(t["blc-serving"]),t["beer-freq"],parseInt(t["beer-serving"]),t["pop-freq"],parseInt(t["pop-serving"]),t["shots-freq"],parseInt(t["shots-serving"])),n.bbd=zo(parseInt(t["benign-breast-disease"])),n.famhist=Fo(parseInt(t["family-history"])),n.age>=50?(n.bmi_curc=hn(parseFloat(t.weight),t["weight-unit"],t["height-unit"],parseInt(t["height-feet"]),parseInt(t["height-inches"]),parseFloat(t["height-m"]),parseFloat(t["height-cm"]),!1),n.age_at_menopause=Yo(parseInt(t.menopause),parseInt(t["age-menopause"])),n.hrt=Oo(parseInt(t["hormone-treatment"]),parseInt(t["hormone-treatment-current"])),n.hrt_type=Vo(parseInt(t["hormone-treatment"]),parseInt(t["hormone-treatment-current"]),parseInt(t["hormone-treatment-type"]))):(n.bmi_curc=hn(parseFloat(t.weight),t["weight-unit"],t["height-unit"],parseInt(t["height-feet"]),parseInt(t["height-inches"]),parseFloat(t["height-m"]),parseFloat(t["height-cm"]),!0),n.oc_current=Do(parseInt(t["hormonal-contraceptive-current"]))),n}function Xo(e,t){const n=[],r=.001*(Math.max(...t)-Math.min(...t)),s=Math.max(...t)-Math.min(...t);for(let i=0;i<e;i++){const a=Math.log10(r)+(Math.log10(s)-Math.log10(r))*i/(e-1);n.push(Math.pow(10,a))}return n}function Uo(e,t,n){n.innerHTML="";const r=document.createElement("div");r.className="relative overflow-x-auto shadow-md sm:rounded-lg my-4 w-full sm:w-[50%]";const s=document.createElement("table");s.className="w-full text-sm text-left text-gray-500";const i=document.createElement("thead");i.className="text-xs text-white uppercase bg-slate-900";const a=document.createElement("tr");e.forEach(l=>{const c=document.createElement("th");c.scope="col",c.className="px-6 py-3",c.textContent=l,a.appendChild(c)}),i.appendChild(a),s.appendChild(i);const o=document.createElement("tbody");for(const l in t){const c=document.createElement("tr");t[l]===void 0?c.className="bg-red-50 border-b hover:bg-red-100":c.className="bg-white border-b hover:bg-slate-50";const d=document.createElement("th");d.scope="row",d.className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap",d.textContent=l,c.appendChild(d);const u=document.createElement("td");u.className="px-4 py-2",u.textContent=t[l]??"-",c.appendChild(u),o.appendChild(c)}s.appendChild(o),r.appendChild(s),n.appendChild(r)}function pn(e,t){if(!Array.isArray(e)||e.length===0)throw new Error("Input must be a non-empty array of numbers.");if(typeof t!="number"||t<0||t>1)throw new Error("Percentile must be a number between 0 and 1.");const n=e.slice().sort((o,l)=>o-l),r=t*(n.length-1),s=Math.floor(r),i=Math.ceil(r);if(s===i)return n[r];const a=r-s;return n[s]*(1-a)+n[i]*a}function Go(e,t){const n=pn(e,.25),r=pn(e,.75),s=r-n,i=r+1.5*s,a=1.4,o=1.5;return i*a>t*o?i*a:t*o}function Ko(e){const t={},n={age:"Age",age_at_menarche:"Age at menarche (years)",age_at_menopause:"Age at menopause (years)",parity:"Number of children",age_first_birth:"Age at first child birth (years)",oc_ever:"Use of oral contraceptives",oc_current:"Current use of oral contraceptives",hrt:"Hormone replacement therapy use",hrt_type:"Hormone replacement therapy type",bmi_curc:"Body Mass Index (kg/m²)",height:"Height (cm)",alcohol_intake:"Alcohol intake (g/day)",bbd:"History of benign breast disease",famhist:"Family history of breast cancer in first degree relatives"};for(const[s,i]of Object.entries(e))s in n&&(s==="famhist"&&i!==void 0||s==="bbd"&&i!==void 0?t[n[s]]=i===1?"Yes":"No":s==="oc_ever"&&i!==void 0?t[n[s]]=i===1?"Ever":"Never":s==="oc_current"&&i!==void 0?t[n[s]]=i===1?"Current":"Former":s==="hrt"&&i!==void 0?t[n[s]]=i.charAt(0).toUpperCase()+i.slice(1):s==="age_first_birth"&&e.parity==="0"||s==="hrt_type"&&e.hrt==="never"?t[n[s]]="N/A":s==="hrt_type"&&i!==void 0?t[n[s]]=i===1?"Estrogen prescription hormone only":"Combined estrogen plus progestin prescription hormones":s==="height"&&i!==void 0?t[n[s]]=(i*10).toFixed(2):t[n[s]]=i);const r={};return Object.values(n).forEach(s=>{s in t&&(r[s]=t[s])}),r}function Jo(e){for(let t in e)if(e.hasOwnProperty(t)&&typeof e[t]>"u")return!0;return!1}function Zo(e,t){let n=Math.round(e/100*t);return`out of ${t} people with identical risk factor profiles, about ${n} ${n===1?"person":"people"} ${n===1?"is":"are"} expected`}function Qo(e,t,n){const r=n.id,s=t.reference_risks[0].population_risks.map(z=>z*100),i=t.profile[0].risk_estimates*100,a=1;e.innerHTML="",e.className="space-y-6 sm:space-y-5 w-full";const o=document.createElement("div");o.className="flex flex-col w-full",e.appendChild(o);const l=document.createElement("h1");l.className="text-xl font-bold text-center py-4",l.innerHTML=`${r}'s estimated 5-year absolute risk of breast cancer: <span class="border-2 border-red-500 rounded-lg px-2">${i.toFixed(a)} %</span>`,o.appendChild(l);const c=document.createElement("div");Fe(c).attr("class","flex justify-center w-full py-4").call(qo().width(450).height(350).prevalence(i).colorCase("purple").colorControl("lightgray").labelCase("Breast cancer").labelControl("No breast cancer").margin({top:5,right:5,bottom:5,left:5})),o.appendChild(c);const u=document.createElement("p");u.className="text-md",u.innerText=`
    In a population of breast cancer-free, non-Hispanic, white women in the US, with an identical risk factor profile as the one provided above for ${r}: ${i.toFixed(a)}% of them are expected to develop breast cancer over the next 5 years. In other words, ${Zo(i,100)} to develop breast cancer over the next 5 years.
    `,o.appendChild(u);const f=Ko(n),h=document.createElement("p");h.className="text-md";let x=`
    The risk is estimated based on the risk factors provided by the user. The provided values were processed, as shown below, to run the iCARE-Lit model.`;Jo(f)&&(x+=" The rows highlighted in red are used by iCARE-Lit for its calculations but were not provided by the user. For a more accurate risk estimation, please provide the missing risk factors."),h.innerText=x,o.appendChild(h);const v=document.createElement("div");v.className="flex justify-center w-full",Uo(["Risk factor","Value"],f,v),o.appendChild(v);const k=document.createElement("h1");k.className="text-xl font-bold text-center py-4 sm:border-t",k.innerHTML=`${r}'s estimated 5-year absolute risk of breast cancer compared to the non-Hispanic, white US population</span>`,o.appendChild(k);const E=300,p=100,m=75,g=e.clientWidth,b={left:50,right:20},w=0,N=Go(s,i),A=100,q=Xo(A,s),I=50,y=document.createElement("div"),M=Fe(y).attr("class","pr-10 py-4"),_=M.append("div").attr("class","slider-container"),C=No().width(g).height(E).margin({top:50,right:b.right,bottom:50,left:b.left}).data(s).xMin(w).xMax(N).vLine(i).xLabel("Absolute risk (%) →").title("Distribution of the 5-year absolute risk of breast cancer in adult women non-Hispanic, white US population.").bandwidth(q[I-1]),L=Eo().width(g).height(p).margin({top:0,right:b.right,bottom:0,left:b.left}).data(s).xMin(w).xMax(N).vLine(i).boxWidth(30).radius(1).hoverOffsetX(80).hoverOffsetY(100).removeAxis(!0),B=Ao().width(g).height(m).margin({top:5,right:b.right,bottom:0,left:b.left}).data([i]).xMin(w).xMax(N).radius(7).markerPadding(2).markerText(`${r}'s estimated absolute risk`).color("#FF0000").plotPadding(7).removeAxis(!0);M.call(C),M.call(L),M.call(B),_.call(Mo().id("bandwidth").labelText("Bandwidth: ").min(1).max(A).step(1).value(I).on("change",z=>{M.call(C.bandwidth(q[z-1]))})),e.appendChild(y);const H=M.append("div").attr("class","flex flex-row justify-center items-center mt-4"),X=H.append("button").attr("class","rounded-md border border-transparent bg-slate-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 py-2 px-4 mr-2").text("Download plot as PNG"),$=H.append("button").attr("class","rounded-md border border-transparent bg-slate-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 py-2 px-4").text("Download results as JSON");X.on("click",()=>{const z=Fe(y).selectAll("svg"),S=document.createElement("canvas"),st=S.getContext("2d");function Zn(V){return new Promise(Be=>{const me=new Image,G=new Blob([V],{type:"image/svg+xml;charset=utf-8"}),U=URL.createObjectURL(G);me.onload=()=>{Be(me)},me.src=U})}const Qn=z.nodes().map(V=>new XMLSerializer().serializeToString(V));Promise.all(Qn.map(V=>Zn(V))).then(V=>{let Be=0;S.width=Math.max(...V.map(U=>U.width)),S.height=V.reduce((U,er)=>U+er.height,0),st.fillStyle="white",st.fillRect(0,0,S.width,S.height);for(const U of V)st.drawImage(U,0,Be),Be+=U.height;const me=S.toDataURL("image/png"),G=document.createElement("a");G.href=me,G.download=`icare-lit_risk_plot_${r}.png`,document.body.appendChild(G),G.click(),document.body.removeChild(G)})}),$.on("click",()=>{const z="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t,null,2)),S=document.createElement("a");S.setAttribute("href",z),S.setAttribute("download",`icare-lit_output_${r}.json`),document.body.appendChild(S),S.click(),S.remove()})}zt.addEventListener("submit",e=>{e.preventDefault(),re.innerHTML=`<svg class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l1-1.647z"></path>
      </svg>Calculating...`,re.classList.add("cursor-not-allowed"),re.disabled=!0;const t=new FormData(e.target),n=Wo(t);fn.postMessage(n),fn.onmessage=r=>{const s=r.data;Qo(At,s,n),At.scrollIntoView({behavior:"smooth",block:"start"}),re.innerHTML="Estimate risk",re.classList.remove("cursor-not-allowed"),re.disabled=!1}});zt.addEventListener("reset",e=>{At.innerHTML="",document.getElementById("form-questionnaire").scrollIntoView({behavior:"smooth",block:"start"})});
