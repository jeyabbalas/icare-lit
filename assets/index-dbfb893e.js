(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const zn="/icare-lit/assets/rose-ed9a43c9.svg",Yn="/icare-lit/assets/github-15128406.svg";function ee(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Vn(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function nn(e){let t,n,r;e.length!==2?(t=ee,n=(o,l)=>ee(e(o),l),r=(o,l)=>e(o)-l):(t=e===ee||e===Vn?e:Xn,n=e,r=e);function s(o,l,c=0,d=o.length){if(c<d){if(t(l,l)!==0)return d;do{const u=c+d>>>1;n(o[u],l)<0?c=u+1:d=u}while(c<d)}return c}function i(o,l,c=0,d=o.length){if(c<d){if(t(l,l)!==0)return d;do{const u=c+d>>>1;n(o[u],l)<=0?c=u+1:d=u}while(c<d)}return c}function a(o,l,c=0,d=o.length){const u=s(o,l,c,d-1);return u>c&&r(o[u-1],l)>-r(o[u],l)?u-1:u}return{left:s,center:a,right:i}}function Xn(){return 0}function Wn(e){return e===null?NaN:+e}function*jn(e,t){if(t===void 0)for(let n of e)n!=null&&(n=+n)>=n&&(yield n);else{let n=-1;for(let r of e)(r=t(r,++n,e))!=null&&(r=+r)>=r&&(yield r)}}const Un=nn(ee),Gn=Un.right;nn(Wn).center;const rn=Gn;function Kn(e,t){let n=0;if(t===void 0)for(let r of e)r!=null&&(r=+r)>=r&&++n;else{let r=-1;for(let s of e)(s=t(s,++r,e))!=null&&(s=+s)>=s&&++n}return n}function te(e,t){let n,r;if(t===void 0)for(const s of e)s!=null&&(n===void 0?s>=s&&(n=r=s):(n>s&&(n=s),r<s&&(r=s)));else{let s=-1;for(let i of e)(i=t(i,++s,e))!=null&&(n===void 0?i>=i&&(n=r=i):(n>i&&(n=i),r<i&&(r=i)))}return[n,r]}function Jn(e){return e}function Zn(e=ee){if(e===ee)return sn;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,n)=>{const r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function sn(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}var Qn=Array.prototype,er=Qn.slice;function Qe(e){return()=>e}const tr=Math.sqrt(50),nr=Math.sqrt(10),rr=Math.sqrt(2);function De(e,t,n){const r=(t-e)/Math.max(0,n),s=Math.floor(Math.log10(r)),i=r/Math.pow(10,s),a=i>=tr?10:i>=nr?5:i>=rr?2:1;let o,l,c;return s<0?(c=Math.pow(10,-s)/a,o=Math.round(e*c),l=Math.round(t*c),o/c<e&&++o,l/c>t&&--l,c=-c):(c=Math.pow(10,s)*a,o=Math.round(e/c),l=Math.round(t/c),o*c<e&&++o,l*c>t&&--l),l<o&&.5<=n&&n<2?De(e,t,n*2):[o,l,c]}function an(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[s,i,a]=r?De(t,e,n):De(e,t,n);if(!(i>=s))return[];const o=i-s+1,l=new Array(o);if(r)if(a<0)for(let c=0;c<o;++c)l[c]=(i-c)/-a;else for(let c=0;c<o;++c)l[c]=(i-c)*a;else if(a<0)for(let c=0;c<o;++c)l[c]=(s+c)/-a;else for(let c=0;c<o;++c)l[c]=(s+c)*a;return l}function re(e,t,n){return t=+t,e=+e,n=+n,De(e,t,n)[2]}function sr(e,t,n){t=+t,e=+e,n=+n;const r=t<e,s=r?re(t,e,n):re(e,t,n);return(r?-1:1)*(s<0?1/-s:s)}function ir(e,t,n){let r;for(;;){const s=re(e,t,n);if(s===r||s===0||!isFinite(s))return[e,t];s>0?(e=Math.floor(e/s)*s,t=Math.ceil(t/s)*s):s<0&&(e=Math.ceil(e*s)/s,t=Math.floor(t*s)/s),r=s}}function ar(e){return Math.max(1,Math.ceil(Math.log(Kn(e))/Math.LN2)+1)}function or(){var e=Jn,t=te,n=ar;function r(s){Array.isArray(s)||(s=Array.from(s));var i,a=s.length,o,l,c=new Array(a);for(i=0;i<a;++i)c[i]=e(s[i],i,s);var d=t(c),u=d[0],m=d[1],f=n(c,u,m);if(!Array.isArray(f)){const h=m,v=+f;if(t===te&&([u,m]=ir(u,m,v)),f=an(u,m,v),f[0]<=u&&(l=re(u,m,v)),f[f.length-1]>=m)if(h>=m&&t===te){const g=re(u,m,v);isFinite(g)&&(g>0?m=(Math.floor(m/g)+1)*g:g<0&&(m=(Math.ceil(m*-g)+1)/-g))}else f.pop()}for(var y=f.length,w=0,k=y;f[w]<=u;)++w;for(;f[k-1]>m;)--k;(w||k<y)&&(f=f.slice(w,k),y=k-w);var N=new Array(y+1),p;for(i=0;i<=y;++i)p=N[i]=[],p.x0=i>0?f[i-1]:u,p.x1=i<y?f[i]:m;if(isFinite(l)){if(l>0)for(i=0;i<a;++i)(o=c[i])!=null&&u<=o&&o<=m&&N[Math.min(y,Math.floor((o-u)/l))].push(s[i]);else if(l<0){for(i=0;i<a;++i)if((o=c[i])!=null&&u<=o&&o<=m){const h=Math.floor((u-o)*l);N[Math.min(y,h+(f[h]<=o))].push(s[i])}}}else for(i=0;i<a;++i)(o=c[i])!=null&&u<=o&&o<=m&&N[rn(f,o,0,y)].push(s[i]);return N}return r.value=function(s){return arguments.length?(e=typeof s=="function"?s:Qe(s),r):e},r.domain=function(s){return arguments.length?(t=typeof s=="function"?s:Qe([s[0],s[1]]),r):t},r.thresholds=function(s){return arguments.length?(n=typeof s=="function"?s:Qe(Array.isArray(s)?er.call(s):s),r):n},r}function Re(e,t){let n;if(t===void 0)for(const r of e)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let s of e)(s=t(s,++r,e))!=null&&(n<s||n===void 0&&s>=s)&&(n=s)}return n}function it(e,t){let n;if(t===void 0)for(const r of e)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let s of e)(s=t(s,++r,e))!=null&&(n>s||n===void 0&&s>=s)&&(n=s)}return n}function on(e,t,n=0,r=1/0,s){if(t=Math.floor(t),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(e.length-1,r)),!(n<=t&&t<=r))return e;for(s=s===void 0?sn:Zn(s);r>n;){if(r-n>600){const l=r-n+1,c=t-n+1,d=Math.log(l),u=.5*Math.exp(2*d/3),m=.5*Math.sqrt(d*u*(l-u)/l)*(c-l/2<0?-1:1),f=Math.max(n,Math.floor(t-c*u/l+m)),y=Math.min(r,Math.floor(t+(l-c)*u/l+m));on(e,t,f,y,s)}const i=e[t];let a=n,o=r;for(ce(e,n,t),s(e[r],i)>0&&ce(e,n,r);a<o;){for(ce(e,a,o),++a,--o;s(e[a],i)<0;)++a;for(;s(e[o],i)>0;)--o}s(e[n],i)===0?ce(e,n,o):(++o,ce(e,o,r)),o<=t&&(n=o+1),t<=o&&(r=o-1)}return e}function ce(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function et(e,t,n){if(e=Float64Array.from(jn(e,n)),!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return it(e);if(t>=1)return Re(e);var r,s=(r-1)*t,i=Math.floor(s),a=Re(on(e,i).subarray(0,i+1)),o=it(e.subarray(i+1));return a+(o-a)*(s-i)}}function lr(e,t){let n=0,r=0;if(t===void 0)for(let s of e)s!=null&&(s=+s)>=s&&(++n,r+=s);else{let s=-1;for(let i of e)(i=t(i,++s,e))!=null&&(i=+i)>=i&&(++n,r+=i)}if(n)return r/n}function Lt(e,t,n){e=+e,t=+t,n=(s=arguments.length)<2?(t=e,e=0,1):s<3?1:+n;for(var r=-1,s=Math.max(0,Math.ceil((t-e)/n))|0,i=new Array(s);++r<s;)i[r]=e+r*n;return i}function cr(e){return e}var Ce=1,tt=2,at=3,ue=4,It=1e-6;function dr(e){return"translate("+e+",0)"}function ur(e){return"translate(0,"+e+")"}function mr(e){return t=>+e(t)}function fr(e,t){return t=Math.max(0,e.bandwidth()-t*2)/2,e.round()&&(t=Math.round(t)),n=>+e(n)+t}function hr(){return!this.__axis}function xt(e,t){var n=[],r=null,s=null,i=6,a=6,o=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=e===Ce||e===ue?-1:1,d=e===ue||e===tt?"x":"y",u=e===Ce||e===at?dr:ur;function m(f){var y=r??(t.ticks?t.ticks.apply(t,n):t.domain()),w=s??(t.tickFormat?t.tickFormat.apply(t,n):cr),k=Math.max(i,0)+o,N=t.range(),p=+N[0]+l,h=+N[N.length-1]+l,v=(t.bandwidth?fr:mr)(t.copy(),l),g=f.selection?f.selection():f,b=g.selectAll(".domain").data([null]),_=g.selectAll(".tick").data(y,t).order(),q=_.exit(),L=_.enter().append("g").attr("class","tick"),$=_.select("line"),x=_.select("text");b=b.merge(b.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),_=_.merge(L),$=$.merge(L.append("line").attr("stroke","currentColor").attr(d+"2",c*i)),x=x.merge(L.append("text").attr("fill","currentColor").attr(d,c*k).attr("dy",e===Ce?"0em":e===at?"0.71em":"0.32em")),f!==g&&(b=b.transition(f),_=_.transition(f),$=$.transition(f),x=x.transition(f),q=q.transition(f).attr("opacity",It).attr("transform",function(A){return isFinite(A=v(A))?u(A+l):this.getAttribute("transform")}),L.attr("opacity",It).attr("transform",function(A){var M=this.parentNode.__axis;return u((M&&isFinite(M=M(A))?M:v(A))+l)})),q.remove(),b.attr("d",e===ue||e===tt?a?"M"+c*a+","+p+"H"+l+"V"+h+"H"+c*a:"M"+l+","+p+"V"+h:a?"M"+p+","+c*a+"V"+l+"H"+h+"V"+c*a:"M"+p+","+l+"H"+h),_.attr("opacity",1).attr("transform",function(A){return u(v(A)+l)}),$.attr(d+"2",c*i),x.attr(d,c*k).text(w),g.filter(hr).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",e===tt?"start":e===ue?"end":"middle"),g.each(function(){this.__axis=v})}return m.scale=function(f){return arguments.length?(t=f,m):t},m.ticks=function(){return n=Array.from(arguments),m},m.tickArguments=function(f){return arguments.length?(n=f==null?[]:Array.from(f),m):n.slice()},m.tickValues=function(f){return arguments.length?(r=f==null?null:Array.from(f),m):r&&r.slice()},m.tickFormat=function(f){return arguments.length?(s=f,m):s},m.tickSize=function(f){return arguments.length?(i=a=+f,m):i},m.tickSizeInner=function(f){return arguments.length?(i=+f,m):i},m.tickSizeOuter=function(f){return arguments.length?(a=+f,m):a},m.tickPadding=function(f){return arguments.length?(o=+f,m):o},m.offset=function(f){return arguments.length?(l=+f,m):l},m}function pr(e){return xt(Ce,e)}function ln(e){return xt(at,e)}function gr(e){return xt(ue,e)}var yr={value:()=>{}};function vt(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new He(n)}function He(e){this._=e}function xr(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",s=n.indexOf(".");if(s>=0&&(r=n.slice(s+1),n=n.slice(0,s)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}He.prototype=vt.prototype={constructor:He,on:function(e,t){var n=this._,r=xr(e+"",n),s,i=-1,a=r.length;if(arguments.length<2){for(;++i<a;)if((s=(e=r[i]).type)&&(s=vr(n[s],e.name)))return s;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<a;)if(s=(e=r[i]).type)n[s]=$t(n[s],e.name,t);else if(t==null)for(s in n)n[s]=$t(n[s],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new He(e)},call:function(e,t){if((s=arguments.length-2)>0)for(var n=new Array(s),r=0,s,i;r<s;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],r=0,s=i.length;r<s;++r)i[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],s=0,i=r.length;s<i;++s)r[s].value.apply(t,n)}};function vr(e,t){for(var n=0,r=e.length,s;n<r;++n)if((s=e[n]).name===t)return s.value}function $t(e,t,n){for(var r=0,s=e.length;r<s;++r)if(e[r].name===t){e[r]=yr,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var ot="http://www.w3.org/1999/xhtml";const Bt={svg:"http://www.w3.org/2000/svg",xhtml:ot,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ke(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Bt.hasOwnProperty(t)?{space:Bt[t],local:e}:e}function br(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===ot&&t.documentElement.namespaceURI===ot?t.createElement(e):t.createElementNS(n,e)}}function wr(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function cn(e){var t=Ke(e);return(t.local?wr:br)(t)}function kr(){}function bt(e){return e==null?kr:function(){return this.querySelector(e)}}function _r(e){typeof e!="function"&&(e=bt(e));for(var t=this._groups,n=t.length,r=new Array(n),s=0;s<n;++s)for(var i=t[s],a=i.length,o=r[s]=new Array(a),l,c,d=0;d<a;++d)(l=i[d])&&(c=e.call(l,l.__data__,d,i))&&("__data__"in l&&(c.__data__=l.__data__),o[d]=c);return new C(r,this._parents)}function Mr(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Nr(){return[]}function dn(e){return e==null?Nr:function(){return this.querySelectorAll(e)}}function qr(e){return function(){return Mr(e.apply(this,arguments))}}function Ar(e){typeof e=="function"?e=qr(e):e=dn(e);for(var t=this._groups,n=t.length,r=[],s=[],i=0;i<n;++i)for(var a=t[i],o=a.length,l,c=0;c<o;++c)(l=a[c])&&(r.push(e.call(l,l.__data__,c,a)),s.push(l));return new C(r,s)}function un(e){return function(){return this.matches(e)}}function mn(e){return function(t){return t.matches(e)}}var Er=Array.prototype.find;function Lr(e){return function(){return Er.call(this.children,e)}}function Ir(){return this.firstElementChild}function $r(e){return this.select(e==null?Ir:Lr(typeof e=="function"?e:mn(e)))}var Br=Array.prototype.filter;function Sr(){return Array.from(this.children)}function Tr(e){return function(){return Br.call(this.children,e)}}function Cr(e){return this.selectAll(e==null?Sr:Tr(typeof e=="function"?e:mn(e)))}function Hr(e){typeof e!="function"&&(e=un(e));for(var t=this._groups,n=t.length,r=new Array(n),s=0;s<n;++s)for(var i=t[s],a=i.length,o=r[s]=[],l,c=0;c<a;++c)(l=i[c])&&e.call(l,l.__data__,c,i)&&o.push(l);return new C(r,this._parents)}function fn(e){return new Array(e.length)}function Pr(){return new C(this._enter||this._groups.map(fn),this._parents)}function Fe(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Fe.prototype={constructor:Fe,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Or(e){return function(){return e}}function Dr(e,t,n,r,s,i){for(var a=0,o,l=t.length,c=i.length;a<c;++a)(o=t[a])?(o.__data__=i[a],r[a]=o):n[a]=new Fe(e,i[a]);for(;a<l;++a)(o=t[a])&&(s[a]=o)}function Rr(e,t,n,r,s,i,a){var o,l,c=new Map,d=t.length,u=i.length,m=new Array(d),f;for(o=0;o<d;++o)(l=t[o])&&(m[o]=f=a.call(l,l.__data__,o,t)+"",c.has(f)?s[o]=l:c.set(f,l));for(o=0;o<u;++o)f=a.call(e,i[o],o,i)+"",(l=c.get(f))?(r[o]=l,l.__data__=i[o],c.delete(f)):n[o]=new Fe(e,i[o]);for(o=0;o<d;++o)(l=t[o])&&c.get(m[o])===l&&(s[o]=l)}function Fr(e){return e.__data__}function zr(e,t){if(!arguments.length)return Array.from(this,Fr);var n=t?Rr:Dr,r=this._parents,s=this._groups;typeof e!="function"&&(e=Or(e));for(var i=s.length,a=new Array(i),o=new Array(i),l=new Array(i),c=0;c<i;++c){var d=r[c],u=s[c],m=u.length,f=Yr(e.call(d,d&&d.__data__,c,r)),y=f.length,w=o[c]=new Array(y),k=a[c]=new Array(y),N=l[c]=new Array(m);n(d,u,w,k,N,f,t);for(var p=0,h=0,v,g;p<y;++p)if(v=w[p]){for(p>=h&&(h=p+1);!(g=k[h])&&++h<y;);v._next=g||null}}return a=new C(a,r),a._enter=o,a._exit=l,a}function Yr(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Vr(){return new C(this._exit||this._groups.map(fn),this._parents)}function Xr(e,t,n){var r=this.enter(),s=this,i=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(s=t(s),s&&(s=s.selection())),n==null?i.remove():n(i),r&&s?r.merge(s).order():s}function Wr(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,s=n.length,i=r.length,a=Math.min(s,i),o=new Array(s),l=0;l<a;++l)for(var c=n[l],d=r[l],u=c.length,m=o[l]=new Array(u),f,y=0;y<u;++y)(f=c[y]||d[y])&&(m[y]=f);for(;l<s;++l)o[l]=n[l];return new C(o,this._parents)}function jr(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],s=r.length-1,i=r[s],a;--s>=0;)(a=r[s])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function Ur(e){e||(e=Gr);function t(u,m){return u&&m?e(u.__data__,m.__data__):!u-!m}for(var n=this._groups,r=n.length,s=new Array(r),i=0;i<r;++i){for(var a=n[i],o=a.length,l=s[i]=new Array(o),c,d=0;d<o;++d)(c=a[d])&&(l[d]=c);l.sort(t)}return new C(s,this._parents).order()}function Gr(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Kr(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Jr(){return Array.from(this)}function Zr(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],s=0,i=r.length;s<i;++s){var a=r[s];if(a)return a}return null}function Qr(){let e=0;for(const t of this)++e;return e}function es(){return!this.node()}function ts(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var s=t[n],i=0,a=s.length,o;i<a;++i)(o=s[i])&&e.call(o,o.__data__,i,s);return this}function ns(e){return function(){this.removeAttribute(e)}}function rs(e){return function(){this.removeAttributeNS(e.space,e.local)}}function ss(e,t){return function(){this.setAttribute(e,t)}}function is(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function as(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function os(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function ls(e,t){var n=Ke(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?rs:ns:typeof t=="function"?n.local?os:as:n.local?is:ss)(n,t))}function hn(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function cs(e){return function(){this.style.removeProperty(e)}}function ds(e,t,n){return function(){this.style.setProperty(e,t,n)}}function us(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function ms(e,t,n){return arguments.length>1?this.each((t==null?cs:typeof t=="function"?us:ds)(e,t,n??"")):se(this.node(),e)}function se(e,t){return e.style.getPropertyValue(t)||hn(e).getComputedStyle(e,null).getPropertyValue(t)}function fs(e){return function(){delete this[e]}}function hs(e,t){return function(){this[e]=t}}function ps(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function gs(e,t){return arguments.length>1?this.each((t==null?fs:typeof t=="function"?ps:hs)(e,t)):this.node()[e]}function pn(e){return e.trim().split(/^|\s+/)}function wt(e){return e.classList||new gn(e)}function gn(e){this._node=e,this._names=pn(e.getAttribute("class")||"")}gn.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function yn(e,t){for(var n=wt(e),r=-1,s=t.length;++r<s;)n.add(t[r])}function xn(e,t){for(var n=wt(e),r=-1,s=t.length;++r<s;)n.remove(t[r])}function ys(e){return function(){yn(this,e)}}function xs(e){return function(){xn(this,e)}}function vs(e,t){return function(){(t.apply(this,arguments)?yn:xn)(this,e)}}function bs(e,t){var n=pn(e+"");if(arguments.length<2){for(var r=wt(this.node()),s=-1,i=n.length;++s<i;)if(!r.contains(n[s]))return!1;return!0}return this.each((typeof t=="function"?vs:t?ys:xs)(n,t))}function ws(){this.textContent=""}function ks(e){return function(){this.textContent=e}}function _s(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function Ms(e){return arguments.length?this.each(e==null?ws:(typeof e=="function"?_s:ks)(e)):this.node().textContent}function Ns(){this.innerHTML=""}function qs(e){return function(){this.innerHTML=e}}function As(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Es(e){return arguments.length?this.each(e==null?Ns:(typeof e=="function"?As:qs)(e)):this.node().innerHTML}function Ls(){this.nextSibling&&this.parentNode.appendChild(this)}function Is(){return this.each(Ls)}function $s(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Bs(){return this.each($s)}function Ss(e){var t=typeof e=="function"?e:cn(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Ts(){return null}function Cs(e,t){var n=typeof e=="function"?e:cn(e),r=t==null?Ts:typeof t=="function"?t:bt(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function Hs(){var e=this.parentNode;e&&e.removeChild(this)}function Ps(){return this.each(Hs)}function Os(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Ds(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Rs(e){return this.select(e?Ds:Os)}function Fs(e){return arguments.length?this.property("__data__",e):this.node().__data__}function zs(e){return function(t){e.call(this,t,this.__data__)}}function Ys(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function Vs(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,s=t.length,i;n<s;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++r]=i;++r?t.length=r:delete this.__on}}}function Xs(e,t,n){return function(){var r=this.__on,s,i=zs(t);if(r){for(var a=0,o=r.length;a<o;++a)if((s=r[a]).type===e.type&&s.name===e.name){this.removeEventListener(s.type,s.listener,s.options),this.addEventListener(s.type,s.listener=i,s.options=n),s.value=t;return}}this.addEventListener(e.type,i,n),s={type:e.type,name:e.name,value:t,listener:i,options:n},r?r.push(s):this.__on=[s]}}function Ws(e,t,n){var r=Ys(e+""),s,i=r.length,a;if(arguments.length<2){var o=this.node().__on;if(o){for(var l=0,c=o.length,d;l<c;++l)for(s=0,d=o[l];s<i;++s)if((a=r[s]).type===d.type&&a.name===d.name)return d.value}return}for(o=t?Xs:Vs,s=0;s<i;++s)this.each(o(r[s],t,n));return this}function vn(e,t,n){var r=hn(e),s=r.CustomEvent;typeof s=="function"?s=new s(t,n):(s=r.document.createEvent("Event"),n?(s.initEvent(t,n.bubbles,n.cancelable),s.detail=n.detail):s.initEvent(t,!1,!1)),e.dispatchEvent(s)}function js(e,t){return function(){return vn(this,e,t)}}function Us(e,t){return function(){return vn(this,e,t.apply(this,arguments))}}function Gs(e,t){return this.each((typeof t=="function"?Us:js)(e,t))}function*Ks(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],s=0,i=r.length,a;s<i;++s)(a=r[s])&&(yield a)}var bn=[null];function C(e,t){this._groups=e,this._parents=t}function le(){return new C([[document.documentElement]],bn)}function Js(){return this}C.prototype=le.prototype={constructor:C,select:_r,selectAll:Ar,selectChild:$r,selectChildren:Cr,filter:Hr,data:zr,enter:Pr,exit:Vr,join:Xr,merge:Wr,selection:Js,order:jr,sort:Ur,call:Kr,nodes:Jr,node:Zr,size:Qr,empty:es,each:ts,attr:ls,style:ms,property:gs,classed:bs,text:Ms,html:Es,raise:Is,lower:Bs,append:Ss,insert:Cs,remove:Ps,clone:Rs,datum:Fs,on:Ws,dispatch:Gs,[Symbol.iterator]:Ks};function lt(e){return typeof e=="string"?new C([[document.querySelector(e)]],[document.documentElement]):new C([[e]],bn)}function kt(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function wn(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Ee(){}var be=.7,ze=1/be,ne="\\s*([+-]?\\d+)\\s*",we="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",D="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Zs=/^#([0-9a-f]{3,8})$/,Qs=new RegExp(`^rgb\\(${ne},${ne},${ne}\\)$`),ei=new RegExp(`^rgb\\(${D},${D},${D}\\)$`),ti=new RegExp(`^rgba\\(${ne},${ne},${ne},${we}\\)$`),ni=new RegExp(`^rgba\\(${D},${D},${D},${we}\\)$`),ri=new RegExp(`^hsl\\(${we},${D},${D}\\)$`),si=new RegExp(`^hsla\\(${we},${D},${D},${we}\\)$`),St={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};kt(Ee,j,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Tt,formatHex:Tt,formatHex8:ii,formatHsl:ai,formatRgb:Ct,toString:Ct});function Tt(){return this.rgb().formatHex()}function ii(){return this.rgb().formatHex8()}function ai(){return kn(this).formatHsl()}function Ct(){return this.rgb().formatRgb()}function j(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Zs.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Ht(t):n===3?new S(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Le(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Le(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Qs.exec(e))?new S(t[1],t[2],t[3],1):(t=ei.exec(e))?new S(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=ti.exec(e))?Le(t[1],t[2],t[3],t[4]):(t=ni.exec(e))?Le(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=ri.exec(e))?Dt(t[1],t[2]/100,t[3]/100,1):(t=si.exec(e))?Dt(t[1],t[2]/100,t[3]/100,t[4]):St.hasOwnProperty(e)?Ht(St[e]):e==="transparent"?new S(NaN,NaN,NaN,0):null}function Ht(e){return new S(e>>16&255,e>>8&255,e&255,1)}function Le(e,t,n,r){return r<=0&&(e=t=n=NaN),new S(e,t,n,r)}function oi(e){return e instanceof Ee||(e=j(e)),e?(e=e.rgb(),new S(e.r,e.g,e.b,e.opacity)):new S}function ct(e,t,n,r){return arguments.length===1?oi(e):new S(e,t,n,r??1)}function S(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}kt(S,ct,wn(Ee,{brighter(e){return e=e==null?ze:Math.pow(ze,e),new S(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?be:Math.pow(be,e),new S(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new S(W(this.r),W(this.g),W(this.b),Ye(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Pt,formatHex:Pt,formatHex8:li,formatRgb:Ot,toString:Ot}));function Pt(){return`#${X(this.r)}${X(this.g)}${X(this.b)}`}function li(){return`#${X(this.r)}${X(this.g)}${X(this.b)}${X((isNaN(this.opacity)?1:this.opacity)*255)}`}function Ot(){const e=Ye(this.opacity);return`${e===1?"rgb(":"rgba("}${W(this.r)}, ${W(this.g)}, ${W(this.b)}${e===1?")":`, ${e})`}`}function Ye(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function W(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function X(e){return e=W(e),(e<16?"0":"")+e.toString(16)}function Dt(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new P(e,t,n,r)}function kn(e){if(e instanceof P)return new P(e.h,e.s,e.l,e.opacity);if(e instanceof Ee||(e=j(e)),!e)return new P;if(e instanceof P)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,s=Math.min(t,n,r),i=Math.max(t,n,r),a=NaN,o=i-s,l=(i+s)/2;return o?(t===i?a=(n-r)/o+(n<r)*6:n===i?a=(r-t)/o+2:a=(t-n)/o+4,o/=l<.5?i+s:2-i-s,a*=60):o=l>0&&l<1?0:a,new P(a,o,l,e.opacity)}function ci(e,t,n,r){return arguments.length===1?kn(e):new P(e,t,n,r??1)}function P(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}kt(P,ci,wn(Ee,{brighter(e){return e=e==null?ze:Math.pow(ze,e),new P(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?be:Math.pow(be,e),new P(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,s=2*n-r;return new S(nt(e>=240?e-240:e+120,s,r),nt(e,s,r),nt(e<120?e+240:e-120,s,r),this.opacity)},clamp(){return new P(Rt(this.h),Ie(this.s),Ie(this.l),Ye(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Ye(this.opacity);return`${e===1?"hsl(":"hsla("}${Rt(this.h)}, ${Ie(this.s)*100}%, ${Ie(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Rt(e){return e=(e||0)%360,e<0?e+360:e}function Ie(e){return Math.max(0,Math.min(1,e||0))}function nt(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const _t=e=>()=>e;function di(e,t){return function(n){return e+n*t}}function ui(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function mi(e){return(e=+e)==1?_n:function(t,n){return n-t?ui(t,n,e):_t(isNaN(t)?n:t)}}function _n(e,t){var n=t-e;return n?di(e,n):_t(isNaN(e)?t:e)}const Ve=function e(t){var n=mi(t);function r(s,i){var a=n((s=ct(s)).r,(i=ct(i)).r),o=n(s.g,i.g),l=n(s.b,i.b),c=_n(s.opacity,i.opacity);return function(d){return s.r=a(d),s.g=o(d),s.b=l(d),s.opacity=c(d),s+""}}return r.gamma=e,r}(1);function fi(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),s;return function(i){for(s=0;s<n;++s)r[s]=e[s]*(1-i)+t[s]*i;return r}}function hi(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function pi(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,s=new Array(r),i=new Array(n),a;for(a=0;a<r;++a)s[a]=Mt(e[a],t[a]);for(;a<n;++a)i[a]=t[a];return function(o){for(a=0;a<r;++a)i[a]=s[a](o);return i}}function gi(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function H(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function yi(e,t){var n={},r={},s;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(s in t)s in e?n[s]=Mt(e[s],t[s]):r[s]=t[s];return function(i){for(s in n)r[s]=n[s](i);return r}}var dt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,rt=new RegExp(dt.source,"g");function xi(e){return function(){return e}}function vi(e){return function(t){return e(t)+""}}function Mn(e,t){var n=dt.lastIndex=rt.lastIndex=0,r,s,i,a=-1,o=[],l=[];for(e=e+"",t=t+"";(r=dt.exec(e))&&(s=rt.exec(t));)(i=s.index)>n&&(i=t.slice(n,i),o[a]?o[a]+=i:o[++a]=i),(r=r[0])===(s=s[0])?o[a]?o[a]+=s:o[++a]=s:(o[++a]=null,l.push({i:a,x:H(r,s)})),n=rt.lastIndex;return n<t.length&&(i=t.slice(n),o[a]?o[a]+=i:o[++a]=i),o.length<2?l[0]?vi(l[0].x):xi(t):(t=l.length,function(c){for(var d=0,u;d<t;++d)o[(u=l[d]).i]=u.x(c);return o.join("")})}function Mt(e,t){var n=typeof t,r;return t==null||n==="boolean"?_t(t):(n==="number"?H:n==="string"?(r=j(t))?(t=r,Ve):Mn:t instanceof j?Ve:t instanceof Date?gi:hi(t)?fi:Array.isArray(t)?pi:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?yi:H)(e,t)}function bi(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}var Ft=180/Math.PI,ut={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Nn(e,t,n,r,s,i){var a,o,l;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(l=e*n+t*r)&&(n-=e*l,r-=t*l),(o=Math.sqrt(n*n+r*r))&&(n/=o,r/=o,l/=o),e*r<t*n&&(e=-e,t=-t,l=-l,a=-a),{translateX:s,translateY:i,rotate:Math.atan2(t,e)*Ft,skewX:Math.atan(l)*Ft,scaleX:a,scaleY:o}}var $e;function wi(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?ut:Nn(t.a,t.b,t.c,t.d,t.e,t.f)}function ki(e){return e==null||($e||($e=document.createElementNS("http://www.w3.org/2000/svg","g")),$e.setAttribute("transform",e),!(e=$e.transform.baseVal.consolidate()))?ut:(e=e.matrix,Nn(e.a,e.b,e.c,e.d,e.e,e.f))}function qn(e,t,n,r){function s(c){return c.length?c.pop()+" ":""}function i(c,d,u,m,f,y){if(c!==u||d!==m){var w=f.push("translate(",null,t,null,n);y.push({i:w-4,x:H(c,u)},{i:w-2,x:H(d,m)})}else(u||m)&&f.push("translate("+u+t+m+n)}function a(c,d,u,m){c!==d?(c-d>180?d+=360:d-c>180&&(c+=360),m.push({i:u.push(s(u)+"rotate(",null,r)-2,x:H(c,d)})):d&&u.push(s(u)+"rotate("+d+r)}function o(c,d,u,m){c!==d?m.push({i:u.push(s(u)+"skewX(",null,r)-2,x:H(c,d)}):d&&u.push(s(u)+"skewX("+d+r)}function l(c,d,u,m,f,y){if(c!==u||d!==m){var w=f.push(s(f)+"scale(",null,",",null,")");y.push({i:w-4,x:H(c,u)},{i:w-2,x:H(d,m)})}else(u!==1||m!==1)&&f.push(s(f)+"scale("+u+","+m+")")}return function(c,d){var u=[],m=[];return c=e(c),d=e(d),i(c.translateX,c.translateY,d.translateX,d.translateY,u,m),a(c.rotate,d.rotate,u,m),o(c.skewX,d.skewX,u,m),l(c.scaleX,c.scaleY,d.scaleX,d.scaleY,u,m),c=d=null,function(f){for(var y=-1,w=m.length,k;++y<w;)u[(k=m[y]).i]=k.x(f);return u.join("")}}}var _i=qn(wi,"px, ","px)","deg)"),Mi=qn(ki,", ",")",")"),ie=0,me=0,de=0,An=1e3,Xe,fe,We=0,U=0,Je=0,ke=typeof performance=="object"&&performance.now?performance:Date,En=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Nt(){return U||(En(Ni),U=ke.now()+Je)}function Ni(){U=0}function je(){this._call=this._time=this._next=null}je.prototype=Ln.prototype={constructor:je,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Nt():+n)+(t==null?0:+t),!this._next&&fe!==this&&(fe?fe._next=this:Xe=this,fe=this),this._call=e,this._time=n,mt()},stop:function(){this._call&&(this._call=null,this._time=1/0,mt())}};function Ln(e,t,n){var r=new je;return r.restart(e,t,n),r}function qi(){Nt(),++ie;for(var e=Xe,t;e;)(t=U-e._time)>=0&&e._call.call(void 0,t),e=e._next;--ie}function zt(){U=(We=ke.now())+Je,ie=me=0;try{qi()}finally{ie=0,Ei(),U=0}}function Ai(){var e=ke.now(),t=e-We;t>An&&(Je-=t,We=e)}function Ei(){for(var e,t=Xe,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Xe=n);fe=e,mt(r)}function mt(e){if(!ie){me&&(me=clearTimeout(me));var t=e-U;t>24?(e<1/0&&(me=setTimeout(zt,e-ke.now()-Je)),de&&(de=clearInterval(de))):(de||(We=ke.now(),de=setInterval(Ai,An)),ie=1,En(zt))}}function Yt(e,t,n){var r=new je;return t=t==null?0:+t,r.restart(s=>{r.stop(),e(s+t)},t,n),r}var Li=vt("start","end","cancel","interrupt"),Ii=[],In=0,Vt=1,ft=2,Pe=3,Xt=4,ht=5,Oe=6;function Ze(e,t,n,r,s,i){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;$i(e,n,{name:t,index:r,group:s,on:Li,tween:Ii,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:In})}function qt(e,t){var n=O(e,t);if(n.state>In)throw new Error("too late; already scheduled");return n}function R(e,t){var n=O(e,t);if(n.state>Pe)throw new Error("too late; already running");return n}function O(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function $i(e,t,n){var r=e.__transition,s;r[t]=n,n.timer=Ln(i,0,n.time);function i(c){n.state=Vt,n.timer.restart(a,n.delay,n.time),n.delay<=c&&a(c-n.delay)}function a(c){var d,u,m,f;if(n.state!==Vt)return l();for(d in r)if(f=r[d],f.name===n.name){if(f.state===Pe)return Yt(a);f.state===Xt?(f.state=Oe,f.timer.stop(),f.on.call("interrupt",e,e.__data__,f.index,f.group),delete r[d]):+d<t&&(f.state=Oe,f.timer.stop(),f.on.call("cancel",e,e.__data__,f.index,f.group),delete r[d])}if(Yt(function(){n.state===Pe&&(n.state=Xt,n.timer.restart(o,n.delay,n.time),o(c))}),n.state=ft,n.on.call("start",e,e.__data__,n.index,n.group),n.state===ft){for(n.state=Pe,s=new Array(m=n.tween.length),d=0,u=-1;d<m;++d)(f=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(s[++u]=f);s.length=u+1}}function o(c){for(var d=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(l),n.state=ht,1),u=-1,m=s.length;++u<m;)s[u].call(e,d);n.state===ht&&(n.on.call("end",e,e.__data__,n.index,n.group),l())}function l(){n.state=Oe,n.timer.stop(),delete r[t];for(var c in r)return;delete e.__transition}}function Bi(e,t){var n=e.__transition,r,s,i=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){i=!1;continue}s=r.state>ft&&r.state<ht,r.state=Oe,r.timer.stop(),r.on.call(s?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}i&&delete e.__transition}}function Si(e){return this.each(function(){Bi(this,e)})}function Ti(e,t){var n,r;return function(){var s=R(this,e),i=s.tween;if(i!==n){r=n=i;for(var a=0,o=r.length;a<o;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}s.tween=r}}function Ci(e,t,n){var r,s;if(typeof n!="function")throw new Error;return function(){var i=R(this,e),a=i.tween;if(a!==r){s=(r=a).slice();for(var o={name:t,value:n},l=0,c=s.length;l<c;++l)if(s[l].name===t){s[l]=o;break}l===c&&s.push(o)}i.tween=s}}function Hi(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=O(this.node(),n).tween,s=0,i=r.length,a;s<i;++s)if((a=r[s]).name===e)return a.value;return null}return this.each((t==null?Ti:Ci)(n,e,t))}function At(e,t,n){var r=e._id;return e.each(function(){var s=R(this,r);(s.value||(s.value={}))[t]=n.apply(this,arguments)}),function(s){return O(s,r).value[t]}}function $n(e,t){var n;return(typeof t=="number"?H:t instanceof j?Ve:(n=j(t))?(t=n,Ve):Mn)(e,t)}function Pi(e){return function(){this.removeAttribute(e)}}function Oi(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Di(e,t,n){var r,s=n+"",i;return function(){var a=this.getAttribute(e);return a===s?null:a===r?i:i=t(r=a,n)}}function Ri(e,t,n){var r,s=n+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===s?null:a===r?i:i=t(r=a,n)}}function Fi(e,t,n){var r,s,i;return function(){var a,o=n(this),l;return o==null?void this.removeAttribute(e):(a=this.getAttribute(e),l=o+"",a===l?null:a===r&&l===s?i:(s=l,i=t(r=a,o)))}}function zi(e,t,n){var r,s,i;return function(){var a,o=n(this),l;return o==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),l=o+"",a===l?null:a===r&&l===s?i:(s=l,i=t(r=a,o)))}}function Yi(e,t){var n=Ke(e),r=n==="transform"?Mi:$n;return this.attrTween(e,typeof t=="function"?(n.local?zi:Fi)(n,r,At(this,"attr."+e,t)):t==null?(n.local?Oi:Pi)(n):(n.local?Ri:Di)(n,r,t))}function Vi(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Xi(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Wi(e,t){var n,r;function s(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&Xi(e,i)),n}return s._value=t,s}function ji(e,t){var n,r;function s(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&Vi(e,i)),n}return s._value=t,s}function Ui(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=Ke(e);return this.tween(n,(r.local?Wi:ji)(r,t))}function Gi(e,t){return function(){qt(this,e).delay=+t.apply(this,arguments)}}function Ki(e,t){return t=+t,function(){qt(this,e).delay=t}}function Ji(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Gi:Ki)(t,e)):O(this.node(),t).delay}function Zi(e,t){return function(){R(this,e).duration=+t.apply(this,arguments)}}function Qi(e,t){return t=+t,function(){R(this,e).duration=t}}function ea(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Zi:Qi)(t,e)):O(this.node(),t).duration}function ta(e,t){if(typeof t!="function")throw new Error;return function(){R(this,e).ease=t}}function na(e){var t=this._id;return arguments.length?this.each(ta(t,e)):O(this.node(),t).ease}function ra(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;R(this,e).ease=n}}function sa(e){if(typeof e!="function")throw new Error;return this.each(ra(this._id,e))}function ia(e){typeof e!="function"&&(e=un(e));for(var t=this._groups,n=t.length,r=new Array(n),s=0;s<n;++s)for(var i=t[s],a=i.length,o=r[s]=[],l,c=0;c<a;++c)(l=i[c])&&e.call(l,l.__data__,c,i)&&o.push(l);return new Y(r,this._parents,this._name,this._id)}function aa(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,s=n.length,i=Math.min(r,s),a=new Array(r),o=0;o<i;++o)for(var l=t[o],c=n[o],d=l.length,u=a[o]=new Array(d),m,f=0;f<d;++f)(m=l[f]||c[f])&&(u[f]=m);for(;o<r;++o)a[o]=t[o];return new Y(a,this._parents,this._name,this._id)}function oa(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function la(e,t,n){var r,s,i=oa(t)?qt:R;return function(){var a=i(this,e),o=a.on;o!==r&&(s=(r=o).copy()).on(t,n),a.on=s}}function ca(e,t){var n=this._id;return arguments.length<2?O(this.node(),n).on.on(e):this.each(la(n,e,t))}function da(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function ua(){return this.on("end.remove",da(this._id))}function ma(e){var t=this._name,n=this._id;typeof e!="function"&&(e=bt(e));for(var r=this._groups,s=r.length,i=new Array(s),a=0;a<s;++a)for(var o=r[a],l=o.length,c=i[a]=new Array(l),d,u,m=0;m<l;++m)(d=o[m])&&(u=e.call(d,d.__data__,m,o))&&("__data__"in d&&(u.__data__=d.__data__),c[m]=u,Ze(c[m],t,n,m,c,O(d,n)));return new Y(i,this._parents,t,n)}function fa(e){var t=this._name,n=this._id;typeof e!="function"&&(e=dn(e));for(var r=this._groups,s=r.length,i=[],a=[],o=0;o<s;++o)for(var l=r[o],c=l.length,d,u=0;u<c;++u)if(d=l[u]){for(var m=e.call(d,d.__data__,u,l),f,y=O(d,n),w=0,k=m.length;w<k;++w)(f=m[w])&&Ze(f,t,n,w,m,y);i.push(m),a.push(d)}return new Y(i,a,t,n)}var ha=le.prototype.constructor;function pa(){return new ha(this._groups,this._parents)}function ga(e,t){var n,r,s;return function(){var i=se(this,e),a=(this.style.removeProperty(e),se(this,e));return i===a?null:i===n&&a===r?s:s=t(n=i,r=a)}}function Bn(e){return function(){this.style.removeProperty(e)}}function ya(e,t,n){var r,s=n+"",i;return function(){var a=se(this,e);return a===s?null:a===r?i:i=t(r=a,n)}}function xa(e,t,n){var r,s,i;return function(){var a=se(this,e),o=n(this),l=o+"";return o==null&&(l=o=(this.style.removeProperty(e),se(this,e))),a===l?null:a===r&&l===s?i:(s=l,i=t(r=a,o))}}function va(e,t){var n,r,s,i="style."+t,a="end."+i,o;return function(){var l=R(this,e),c=l.on,d=l.value[i]==null?o||(o=Bn(t)):void 0;(c!==n||s!==d)&&(r=(n=c).copy()).on(a,s=d),l.on=r}}function ba(e,t,n){var r=(e+="")=="transform"?_i:$n;return t==null?this.styleTween(e,ga(e,r)).on("end.style."+e,Bn(e)):typeof t=="function"?this.styleTween(e,xa(e,r,At(this,"style."+e,t))).each(va(this._id,e)):this.styleTween(e,ya(e,r,t),n).on("end.style."+e,null)}function wa(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function ka(e,t,n){var r,s;function i(){var a=t.apply(this,arguments);return a!==s&&(r=(s=a)&&wa(e,a,n)),r}return i._value=t,i}function _a(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,ka(e,t,n??""))}function Ma(e){return function(){this.textContent=e}}function Na(e){return function(){var t=e(this);this.textContent=t??""}}function qa(e){return this.tween("text",typeof e=="function"?Na(At(this,"text",e)):Ma(e==null?"":e+""))}function Aa(e){return function(t){this.textContent=e.call(this,t)}}function Ea(e){var t,n;function r(){var s=e.apply(this,arguments);return s!==n&&(t=(n=s)&&Aa(s)),t}return r._value=e,r}function La(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,Ea(e))}function Ia(){for(var e=this._name,t=this._id,n=Tn(),r=this._groups,s=r.length,i=0;i<s;++i)for(var a=r[i],o=a.length,l,c=0;c<o;++c)if(l=a[c]){var d=O(l,t);Ze(l,e,n,c,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Y(r,this._parents,e,n)}function $a(){var e,t,n=this,r=n._id,s=n.size();return new Promise(function(i,a){var o={value:a},l={value:function(){--s===0&&i()}};n.each(function(){var c=R(this,r),d=c.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(o),t._.interrupt.push(o),t._.end.push(l)),c.on=t}),s===0&&i()})}var Ba=0;function Y(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function Sn(e){return le().transition(e)}function Tn(){return++Ba}var z=le.prototype;Y.prototype=Sn.prototype={constructor:Y,select:ma,selectAll:fa,selectChild:z.selectChild,selectChildren:z.selectChildren,filter:ia,merge:aa,selection:pa,transition:Ia,call:z.call,nodes:z.nodes,node:z.node,size:z.size,empty:z.empty,each:z.each,on:ca,attr:Yi,attrTween:Ui,style:ba,styleTween:_a,text:qa,textTween:La,remove:ua,tween:Hi,delay:Ji,duration:ea,ease:na,easeVarying:sa,end:$a,[Symbol.iterator]:z[Symbol.iterator]};function Sa(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Ta={time:null,delay:0,duration:250,ease:Sa};function Ca(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function Ha(e){var t,n;e instanceof Y?(t=e._id,e=e._name):(t=Tn(),(n=Ta).time=Nt(),e=e==null?null:e+"");for(var r=this._groups,s=r.length,i=0;i<s;++i)for(var a=r[i],o=a.length,l,c=0;c<o;++c)(l=a[c])&&Ze(l,e,t,c,a,n||Ca(l,t));return new Y(r,this._parents,e,t)}le.prototype.interrupt=Si;le.prototype.transition=Ha;const pt=Math.PI,gt=2*pt,V=1e-6,Pa=gt-V;function Cn(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function Oa(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return Cn;const n=10**t;return function(r){this._+=r[0];for(let s=1,i=r.length;s<i;++s)this._+=Math.round(arguments[s]*n)/n+r[s]}}class Da{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?Cn:Oa(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,s){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+s}`}bezierCurveTo(t,n,r,s,i,a){this._append`C${+t},${+n},${+r},${+s},${this._x1=+i},${this._y1=+a}`}arcTo(t,n,r,s,i){if(t=+t,n=+n,r=+r,s=+s,i=+i,i<0)throw new Error(`negative radius: ${i}`);let a=this._x1,o=this._y1,l=r-t,c=s-n,d=a-t,u=o-n,m=d*d+u*u;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(m>V)if(!(Math.abs(u*l-c*d)>V)||!i)this._append`L${this._x1=t},${this._y1=n}`;else{let f=r-a,y=s-o,w=l*l+c*c,k=f*f+y*y,N=Math.sqrt(w),p=Math.sqrt(m),h=i*Math.tan((pt-Math.acos((w+m-k)/(2*N*p)))/2),v=h/p,g=h/N;Math.abs(v-1)>V&&this._append`L${t+v*d},${n+v*u}`,this._append`A${i},${i},0,0,${+(u*f>d*y)},${this._x1=t+g*l},${this._y1=n+g*c}`}}arc(t,n,r,s,i,a){if(t=+t,n=+n,r=+r,a=!!a,r<0)throw new Error(`negative radius: ${r}`);let o=r*Math.cos(s),l=r*Math.sin(s),c=t+o,d=n+l,u=1^a,m=a?s-i:i-s;this._x1===null?this._append`M${c},${d}`:(Math.abs(this._x1-c)>V||Math.abs(this._y1-d)>V)&&this._append`L${c},${d}`,r&&(m<0&&(m=m%gt+gt),m>Pa?this._append`A${r},${r},0,1,${u},${t-o},${n-l}A${r},${r},0,1,${u},${this._x1=c},${this._y1=d}`:m>V&&this._append`A${r},${r},0,${+(m>=pt)},${u},${this._x1=t+r*Math.cos(i)},${this._y1=n+r*Math.sin(i)}`)}rect(t,n,r,s){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+s}h${-r}Z`}toString(){return this._}}function Ra(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Ue(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function ae(e){return e=Ue(Math.abs(e)),e?e[1]:NaN}function Fa(e,t){return function(n,r){for(var s=n.length,i=[],a=0,o=e[0],l=0;s>0&&o>0&&(l+o+1>r&&(o=Math.max(1,r-l)),i.push(n.substring(s-=o,s+o)),!((l+=o+1)>r));)o=e[a=(a+1)%e.length];return i.reverse().join(t)}}function za(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var Ya=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Ge(e){if(!(t=Ya.exec(e)))throw new Error("invalid format: "+e);var t;return new Et({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Ge.prototype=Et.prototype;function Et(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Et.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Va(e){e:for(var t=e.length,n=1,r=-1,s;n<t;++n)switch(e[n]){case".":r=s=n;break;case"0":r===0&&(r=n),s=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(s+1):e}var Hn;function Xa(e,t){var n=Ue(e,t);if(!n)return e+"";var r=n[0],s=n[1],i=s-(Hn=Math.max(-8,Math.min(8,Math.floor(s/3)))*3)+1,a=r.length;return i===a?r:i>a?r+new Array(i-a+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+Ue(e,Math.max(0,t+i-1))[0]}function Wt(e,t){var n=Ue(e,t);if(!n)return e+"";var r=n[0],s=n[1];return s<0?"0."+new Array(-s).join("0")+r:r.length>s+1?r.slice(0,s+1)+"."+r.slice(s+1):r+new Array(s-r.length+2).join("0")}const jt={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:Ra,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>Wt(e*100,t),r:Wt,s:Xa,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function Ut(e){return e}var Gt=Array.prototype.map,Kt=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Wa(e){var t=e.grouping===void 0||e.thousands===void 0?Ut:Fa(Gt.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",s=e.decimal===void 0?".":e.decimal+"",i=e.numerals===void 0?Ut:za(Gt.call(e.numerals,String)),a=e.percent===void 0?"%":e.percent+"",o=e.minus===void 0?"−":e.minus+"",l=e.nan===void 0?"NaN":e.nan+"";function c(u){u=Ge(u);var m=u.fill,f=u.align,y=u.sign,w=u.symbol,k=u.zero,N=u.width,p=u.comma,h=u.precision,v=u.trim,g=u.type;g==="n"?(p=!0,g="g"):jt[g]||(h===void 0&&(h=12),v=!0,g="g"),(k||m==="0"&&f==="=")&&(k=!0,m="0",f="=");var b=w==="$"?n:w==="#"&&/[boxX]/.test(g)?"0"+g.toLowerCase():"",_=w==="$"?r:/[%p]/.test(g)?a:"",q=jt[g],L=/[defgprs%]/.test(g);h=h===void 0?6:/[gprs]/.test(g)?Math.max(1,Math.min(21,h)):Math.max(0,Math.min(20,h));function $(x){var A=b,M=_,I,E,B;if(g==="c")M=q(x)+M,x="";else{x=+x;var T=x<0||1/x<0;if(x=isNaN(x)?l:q(Math.abs(x),h),v&&(x=Va(x)),T&&+x==0&&y!=="+"&&(T=!1),A=(T?y==="("?y:o:y==="-"||y==="("?"":y)+A,M=(g==="s"?Kt[8+Hn/3]:"")+M+(T&&y==="("?")":""),L){for(I=-1,E=x.length;++I<E;)if(B=x.charCodeAt(I),48>B||B>57){M=(B===46?s+x.slice(I+1):x.slice(I))+M,x=x.slice(0,I);break}}}p&&!k&&(x=t(x,1/0));var K=A.length+x.length+M.length,F=K<N?new Array(N-K+1).join(m):"";switch(p&&k&&(x=t(F+x,F.length?N-M.length:1/0),F=""),f){case"<":x=A+x+M+F;break;case"=":x=A+F+x+M;break;case"^":x=F.slice(0,K=F.length>>1)+A+x+M+F.slice(K);break;default:x=F+A+x+M;break}return i(x)}return $.toString=function(){return u+""},$}function d(u,m){var f=c((u=Ge(u),u.type="f",u)),y=Math.max(-8,Math.min(8,Math.floor(ae(m)/3)))*3,w=Math.pow(10,-y),k=Kt[8+y/3];return function(N){return f(w*N)+k}}return{format:c,formatPrefix:d}}var Be,Pn,On;ja({thousands:",",grouping:[3],currency:["$",""]});function ja(e){return Be=Wa(e),Pn=Be.format,On=Be.formatPrefix,Be}function Ua(e){return Math.max(0,-ae(Math.abs(e)))}function Ga(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(ae(t)/3)))*3-ae(Math.abs(e)))}function Ka(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,ae(t)-ae(e))+1}function Ja(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Za(e){return function(){return e}}function Qa(e){return+e}var Jt=[0,1];function Q(e){return e}function yt(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:Za(isNaN(t)?NaN:.5)}function eo(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function to(e,t,n){var r=e[0],s=e[1],i=t[0],a=t[1];return s<r?(r=yt(s,r),i=n(a,i)):(r=yt(r,s),i=n(i,a)),function(o){return i(r(o))}}function no(e,t,n){var r=Math.min(e.length,t.length)-1,s=new Array(r),i=new Array(r),a=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++a<r;)s[a]=yt(e[a],e[a+1]),i[a]=n(t[a],t[a+1]);return function(o){var l=rn(e,o,1,r)-1;return i[l](s[l](o))}}function ro(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function so(){var e=Jt,t=Jt,n=Mt,r,s,i,a=Q,o,l,c;function d(){var m=Math.min(e.length,t.length);return a!==Q&&(a=eo(e[0],e[m-1])),o=m>2?no:to,l=c=null,u}function u(m){return m==null||isNaN(m=+m)?i:(l||(l=o(e.map(r),t,n)))(r(a(m)))}return u.invert=function(m){return a(s((c||(c=o(t,e.map(r),H)))(m)))},u.domain=function(m){return arguments.length?(e=Array.from(m,Qa),d()):e.slice()},u.range=function(m){return arguments.length?(t=Array.from(m),d()):t.slice()},u.rangeRound=function(m){return t=Array.from(m),n=bi,d()},u.clamp=function(m){return arguments.length?(a=m?!0:Q,d()):a!==Q},u.interpolate=function(m){return arguments.length?(n=m,d()):n},u.unknown=function(m){return arguments.length?(i=m,u):i},function(m,f){return r=m,s=f,d()}}function io(){return so()(Q,Q)}function ao(e,t,n,r){var s=sr(e,t,n),i;switch(r=Ge(r??",f"),r.type){case"s":{var a=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(i=Ga(s,a))&&(r.precision=i),On(r,a)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=Ka(s,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=Ua(s))&&(r.precision=i-(r.type==="%")*2);break}}return Pn(r)}function oo(e){var t=e.domain;return e.ticks=function(n){var r=t();return an(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var s=t();return ao(s[0],s[s.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),s=0,i=r.length-1,a=r[s],o=r[i],l,c,d=10;for(o<a&&(c=a,a=o,o=c,c=s,s=i,i=c);d-- >0;){if(c=re(a,o,n),c===l)return r[s]=a,r[i]=o,t(r);if(c>0)a=Math.floor(a/c)*c,o=Math.ceil(o/c)*c;else if(c<0)a=Math.ceil(a*c)/c,o=Math.floor(o*c)/c;else break;l=c}return e},e}function _e(){var e=io();return e.copy=function(){return ro(e,_e())},Ja.apply(e,arguments),oo(e)}function J(e){return function(){return e}}function lo(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new Da(t)}function co(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Dn(e){this._context=e}Dn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function uo(e){return new Dn(e)}function mo(e){return e[0]}function fo(e){return e[1]}function ho(e,t){var n=J(!0),r=null,s=uo,i=null,a=lo(o);e=typeof e=="function"?e:e===void 0?mo:J(e),t=typeof t=="function"?t:t===void 0?fo:J(t);function o(l){var c,d=(l=co(l)).length,u,m=!1,f;for(r==null&&(i=s(f=a())),c=0;c<=d;++c)!(c<d&&n(u=l[c],c,l))===m&&((m=!m)?i.lineStart():i.lineEnd()),m&&i.point(+e(u,c,l),+t(u,c,l));if(f)return i=null,f+""||null}return o.x=function(l){return arguments.length?(e=typeof l=="function"?l:J(+l),o):e},o.y=function(l){return arguments.length?(t=typeof l=="function"?l:J(+l),o):t},o.defined=function(l){return arguments.length?(n=typeof l=="function"?l:J(!!l),o):n},o.curve=function(l){return arguments.length?(s=l,r!=null&&(i=s(r)),o):s},o.context=function(l){return arguments.length?(l==null?r=i=null:i=s(r=l),o):r},o}function Zt(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function Rn(e){this._context=e}Rn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Zt(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Zt(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function po(e){return new Rn(e)}function he(e,t,n){this.k=e,this.x=t,this.y=n}he.prototype={constructor:he,scale:function(e){return e===1?this:new he(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new he(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};he.prototype;function go(){let e,t,n,r,s,i;const a=vt("change"),o=l=>{l.attr("class","accent-slate-600 py-2 sm:py-4"),l.selectAll("label").data([null]).join("label").attr("for",e).attr("class","pr-2").text(t),l.selectAll("input").data([null]).join("input").attr("type","range").attr("id",e).attr("min",n).attr("max",r).attr("value",i).on("change",c=>{l.selectAll("output").data([null]).join("output").attr("id",e).text(c.target.value),a.call("change",null,c.target.value)}),l.selectAll("output").data([null]).join("output").attr("id",e).attr("class","pl-2 sm:pl-4").text(i)};return o.id=function(l){return arguments.length?(e=l,o):e},o.labelText=function(l){return arguments.length?(t=l,o):t},o.min=function(l){return arguments.length?(n=+l,o):n},o.max=function(l){return arguments.length?(r=+l,o):r},o.step=function(l){return arguments.length?(s=+l,o):s},o.value=function(l){return arguments.length?(i=+l,o):i},o.on=function(){let l=a.on.apply(a,arguments);return l===a?o:l},o}function yo(){let e,t,n,r,s,i,a,o,l,c,d="rgb(122, 255, 248, 0.7)",u=1.5,m=1,f,y=15,w=0,k=0,N=!1;const p=h=>{const v=h.selectAll("svg.box-plot").data([null]).join("svg").attr("class","box-plot").attr("width",e).attr("height",t);v.attr("font-family","sans-serif").attr("font-size",y);let g=te(r);g[0]=s??g[0],g[1]=i??g[1];const b=_e().domain(g).range([n.left,e-n.right]),_=et(r,.25),q=et(r,.5),L=et(r,.75),$=L-_;let x=_-$*1.5;const A=it(r);x=A>x?A:x;let M=L+$*1.5;const I=Re(r);M=I<M?I:M;const E=r.filter(T=>T<x||T>M),B=h.selectAll("div.tooltip").data([null]).join("div").attr("class","p-2 text-white rounded-md border border-white border-opacity-50 shadow-sm pointer-events-none -translate-x-1/2 -translate-y-full font-sans text-xs bg-black bg-opacity-60 transition-opacity duration-200 ease-out transition-border-color duration-100 ease-out backdrop-blur-md").style("position","absolute").style("opacity",0);v.on("mouseover",function(T){const K=`
        Minimum: ${x.toFixed(5)}<br>
        25th percentile: ${_.toFixed(5)}<br>
        Median: ${q.toFixed(5)}<br>
        75th percentile: ${L.toFixed(5)}<br>
        Maximum: ${M.toFixed(5)}<br>
        Inter-quartile range: ${$.toFixed(5)}
        `;B.style("opacity",1).style("border-color",d).html(K)}).on("mouseout",()=>{B.style("opacity",0)}).on("mousemove",function(T){B.style("left",T.pageX+w+"px").style("top",T.pageY+k+"px")}),v.selectAll("circle").data(E).join("circle").attr("cx",T=>b(T)).attr("cy",()=>t/2+(Math.random()*(c/2)-c/4)).attr("r",f).attr("fill",d).attr("opacity",m).attr("stroke","black").attr("stroke-width",u),v.selectAll("rect").data([null]).join("rect").attr("x",b(_)).attr("y",t/2-c/2).attr("width",b(L)-b(_)).attr("height",c).attr("fill",d).attr("stroke","black").attr("stroke-width",u),v.selectAll("#median").data([null]).join("line").attr("id","median").attr("x1",b(q)).attr("y1",t/2-c/2).attr("x2",b(q)).attr("y2",t/2+c/2).attr("stroke","black").attr("stroke-width",u*2),v.selectAll("#lower-whisker").data([null]).join("line").attr("id","lower-whisker").attr("x1",b(x)).attr("y1",t/2).attr("x2",b(_)).attr("y2",t/2).attr("stroke","black").attr("stroke-width",u),v.selectAll("#lower-whisker-edge").data([null]).join("line").attr("id","lower-whisker-edge").attr("x1",b(x)).attr("y1",t/2-c/4).attr("x2",b(x)).attr("y2",t/2+c/4).attr("stroke","black").attr("stroke-width",u),v.selectAll("#upper-whisker").data([null]).join("line").attr("id","upper-whisker").attr("x1",b(L)).attr("y1",t/2).attr("x2",b(M)).attr("y2",t/2).attr("stroke","black").attr("stroke-width",u),v.selectAll("#upper-whisker-edge").data([null]).join("line").attr("id","upper-whisker-edge").attr("x1",b(M)).attr("y1",t/2-c/4).attr("x2",b(M)).attr("y2",t/2+c/4).attr("stroke","black").attr("stroke-width",u),N||(v.selectAll(".x-axis").data([null]).join("g").attr("class","x-axis").attr("transform",`translate(0,${t-n.bottom})`).call(ln(b)),o&&v.selectAll(".x-axis-label").data([null]).join("text").attr("class","x-axis-label").attr("text-anchor","end").attr("x",e).attr("y",t-n.bottom/3).text(o).style("font-size",y*(3/4))),a!==void 0&&v.selectAll("#vLine").data([null]).join("line").attr("id","vLine").attr("x1",b(a)).attr("y1",t/2-c/2).attr("x2",b(a)).attr("y2",t/2+c/2).attr("stroke","red").attr("stroke-width",1.5),l&&v.selectAll(".title").data([null]).join("text").attr("class","title").text(l).attr("text-anchor","middle").attr("x",e/2).attr("y",n.top/2)};return p.width=function(h){return arguments.length?(e=+h,p):e},p.height=function(h){return arguments.length?(t=+h,p):t},p.margin=function(h){return arguments.length?(n=h,p):n},p.data=function(h){return arguments.length?(r=h,p):r},p.xMin=function(h){return arguments.length?(s=+h,p):s},p.xMax=function(h){return arguments.length?(i=+h,p):i},p.vLine=function(h){return arguments.length?(a=+h,p):a},p.xLabel=function(h){return arguments.length?(o=h,p):o},p.title=function(h){return arguments.length?(l=h,p):l},p.boxWidth=function(h){return arguments.length?(c=+h,p):c},p.color=function(h){return arguments.length?(d=h,p):d},p.strokeWidth=function(h){return arguments.length?(u=+h,p):u},p.opacity=function(h){return arguments.length?(m=+h,p):m},p.radius=function(h){return arguments.length?(f=+h,p):f},p.fontSize=function(h){return arguments.length?(y=+h,p):y},p.hoverOffsetX=function(h){return arguments.length?(w=+h,p):w},p.hoverOffsetY=function(h){return arguments.length?(k=+h,p):k},p.removeAxis=function(h){return arguments.length?(N=h,p):N},p}function xo(){let e,t,n,r,s,i,a,o,l,c,d=40,u,m="rgb(122, 255, 248, 0.7)",f=1,y,w,k=15;const N=g=>b=>Math.abs(b/=g)<=1?.75*(1-b*b)/g:0,p=(g,b,_)=>b.map(q=>[q,lr(_,L=>g(q-L))]),h=(g,b,_)=>{const q=or().domain(g.domain()).thresholds(b)(_);return Re(q,L=>L.length)/_.length},v=g=>{const b=g.selectAll("svg.density-plot").data([null]).join("svg").attr("class","density-plot").attr("width",e).attr("height",t);b.attr("font-family","sans-serif").attr("font-size",k);let _=te(r);_[0]=s??_[0],_[1]=i??_[1];const q=_e().domain(_).range([n.left,e-n.right]),L=q.ticks(d),$=_e().domain([0,l||h(q,L,r)]).range([t-n.bottom,n.top]),x=p(N(u),L,r);x[0][1]!==0&&x.unshift([x[0][0],0]),x[x.length-1][1]!==0&&x.push([x[x.length-1][0],0]);const A=ho().curve(po).x(E=>q(E[0])).y(E=>$(E[1])),M=Sn().duration(1e3);let I=b.selectAll("defs").data([null]).join("defs").append("linearGradient").attr("id","color-gradient");if(y&&w&&w.length===y.length+1){I.append("stop").attr("offset","0%").attr("stop-color",w[0]);for(let E=0;E<y.length;E++){let B=((y[E]-_[0])/(_[1]-_[0])*100).toFixed(2);B<0&&(B=0),B>100&&(B=100),I.append("stop").attr("offset",`${B}%`).attr("stop-color",w[E]),I.append("stop").attr("offset",`${B}%`).attr("stop-color",w[E+1])}I.append("stop").attr("offset","100%").attr("stop-color",w[w.length-1])}else I.append("stop").attr("offset","100%").attr("stop-color",m);b.selectAll("path").data([null]).join(E=>E.append("path").attr("stroke","black").attr("stroke-width",1.5).attr("stroke-linejoin","round").attr("opacity",f).attr("d",A(x)).style("fill","url(#color-gradient)"),E=>E.call(B=>B.transition(M).attr("d",A(x))),E=>E.remove()),b.selectAll(".y-axis").data([null]).join("g").attr("class","y-axis").attr("transform",`translate(${n.left},0)`).call(gr($)),b.selectAll(".y-axis-label").data([null]).join("text").attr("class","y-axis-label").text("Density →").attr("text-anchor","end").attr("transform","rotate(-90)").attr("x",-n.top).attr("y",n.left/3).style("font-size",k*(3/4)),b.selectAll(".x-axis").data([null]).join("g").attr("class","x-axis").attr("transform",`translate(0,${t-n.bottom})`).call(ln(q)),b.selectAll(".x-axis-label").data([null]).join("text").attr("class","x-axis-label").attr("text-anchor","end").attr("x",e).attr("y",t-n.bottom/3).text(a).style("font-size",k*(3/4)),c!==void 0&&b.selectAll(".vLine").data([null]).join("line").attr("class","vLine").attr("x1",q(c)).attr("y1",$(0)).attr("x2",q(c)).attr("y2",$(l)).attr("stroke","red").attr("stroke-width",1.5).attr("stroke-linejoin","round").attr("opacity",f),b.selectAll(".title").data([null]).join("text").attr("class","title").text(o).attr("text-anchor","middle").attr("x",e/2).attr("y",n.top/2)};return v.width=function(g){return arguments.length?(e=+g,v):e},v.height=function(g){return arguments.length?(t=+g,v):t},v.margin=function(g){return arguments.length?(n=g,v):n},v.data=function(g){return arguments.length?(r=g,v):r},v.xMin=function(g){return arguments.length?(s=+g,v):s},v.xMax=function(g){return arguments.length?(i=+g,v):i},v.xLabel=function(g){return arguments.length?(a=g,v):a},v.title=function(g){return arguments.length?(o=g,v):o},v.yMax=function(g){return arguments.length?(l=+g,v):l},v.vLine=function(g){return arguments.length?(c=+g,v):c},v.numBins=function(g){return arguments.length?(d=+g,v):d},v.bandwidth=function(g){return arguments.length?(u=+g,v):u},v.color=function(g){return arguments.length?(m=g,v):m},v.opacity=function(g){return arguments.length?(f=+g,v):f},v.cutoffs=function(g){return arguments.length?(y=g,v):y},v.cutoffColors=function(g){return arguments.length?(w=g,v):w},v.fontSize=function(g){return arguments.length?(k=+g,v):k},v}function vo(){let e,t,n,r,s,i,a,o,l="rgb(122, 255, 248, 0.7)",c=1.5,d=1,u=3,m=1.5,f=15,y=15,w=!1,k="Value";const N=(h,v)=>{const g=new Float64Array(h.length),b=v**2,_=.001;let q=null,L=null;const $=(x,A)=>{let M=q;for(;M;){const I=M.index;if(b-_>(h[I]-x)**2+(g[I]-A)**2)return!0;M=M.next}return!1};for(const x of Lt(h.length).sort((A,M)=>h[A]-h[M])){for(;q&&h[q.index]<h[x]-b;)q=q.next;if($(h[x],g[x]=0)){let M=q;g[x]=1/0;do{const I=M.index;let E=g[I]+Math.sqrt(b-(h[I]-h[x])**2);E<g[x]&&!$(h[x],E)&&(g[x]=E),M=M.next}while(M)}const A={index:x,next:null};q===null?q=L=A:L=L.next=A}return g},p=h=>{const v=h.selectAll("svg.beeswarm-plot").data([null]).join("svg").attr("class","beeswarm-plot").attr("width",e).attr("height",t);v.attr("font-family","sans-serif").attr("font-size",y);let g=te(r);g[0]=s??g[0],g[1]=i??g[1];const b=_e().domain(g).range([n.left,e-n.right]),_=N(r.map(q=>b(q)),u*2+m).map(q=>q+n.top+f);v.selectAll("g.marker").data(Lt(r.length)).join("g").attr("class","marker").attr("transform",q=>`translate(${b(r[q])}, ${_[q]})`).each(function(q){const L=lt(this);L.append("circle").attr("r",u).attr("fill",l).attr("opacity",d).attr("stroke","black").attr("stroke-width",c);const $=7*k.length+25;L.append("rect").attr("x",u-$/2).attr("y",u+5).attr("width",$).attr("height",20).attr("fill","white").attr("stroke","black").attr("stroke-width",c),L.append("text").attr("x",u-$/2+5).attr("y",u+20).attr("font-size","12px").text(`${k}: ${r[q].toFixed(5)}`)}),w||(v.selectAll(".x-axis").data([null]).join("g").attr("class","x-axis").attr("transform",`translate(0,${n.top})`).call(pr(b)),a&&v.selectAll(".x-axis-label").data([null]).join("text").attr("class","x-axis-label").attr("text-anchor","end").attr("x",e).attr("y",n.top*(2/3)).text(a).style("font-size",y*(3/4)))};return p.width=function(h){return arguments.length?(e=+h,p):e},p.height=function(h){return arguments.length?(t=+h,p):t},p.margin=function(h){return arguments.length?(n=h,p):n},p.data=function(h){return arguments.length?(r=h,p):r},p.xMin=function(h){return arguments.length?(s=+h,p):s},p.xMax=function(h){return arguments.length?(i=+h,p):i},p.xLabel=function(h){return arguments.length?(a=h,p):a},p.title=function(h){return arguments.length?(o=h,p):o},p.color=function(h){return arguments.length?(l=h,p):l},p.strokeWidth=function(h){return arguments.length?(c=+h,p):c},p.opacity=function(h){return arguments.length?(d=+h,p):d},p.radius=function(h){return arguments.length?(u=+h,p):u},p.markerPadding=function(h){return arguments.length?(m=+h,p):m},p.plotPadding=function(h){return arguments.length?(f=+h,p):f},p.fontSize=function(h){return arguments.length?(y=+h,p):y},p.removeAxis=function(h){return arguments.length?(w=h,p):w},p.markerText=function(h){return arguments.length?(k=h,p):k},p}const Fn=document.querySelector("#app"),Qt=new Worker(new URL("/icare-lit/assets/webWorker-95d0401e.js",self.location)),bo=1,wo=80,ko=0,_o=84,Mo=5,Se=Math.max(bo,ko),Te=Math.min(wo,_o)-Mo;Fn.innerHTML=`
  <div id="header" class="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8 bg-slate-900 rounded-b-lg">
    <div class="flex items-center justify-between">
      <div class="flex justify-start gap-2">
        <div class="flex items-center">
          <img src="${zn}" class="h-12 w-12 sm:h-16 sm:w-16 gap-2 logo vanilla" alt="rose logo" />
        </div>
        <div class="min-w-0 flex-1">
          <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:tracking-tight">iCARE-Lit</h2>
          <p class="py-2 pr-2 text-sm sm:text-base text-white">Absolute risk estimator for breast cancer</p>
        </div>
      </div>
      
      <div class="flex md:mt-0 md:ml-4 shrink-0">
        <a title="Source code" href="https://github.com/jeyabbalas/icare-lit">
          <img src="${Yn}" class="h-10 w-10 sm:h-12 sm:w-12 fill-current" alt="github logo" />
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
                <input type="number" name="age" id="age" min="${Se}" max="${Te}" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm" required>
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
                <input type="number" name="menarche" id="menarche" min="${Se}" max="${Te}" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm">
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
                  <input type="number" name="age-menopause" id="age-menopause" min="${Se}" max="${Te}" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm">
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
                  <input type="number" name="age-first-child-birth" id="age-first-child-birth" min="${Se}" max="${Te}" step="1" class="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:max-w-xs sm:text-sm">
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
`;const Me=document.getElementById("age-menopause-container"),st=document.getElementById("children-container"),G=document.getElementById("births-container"),Ne=document.getElementById("hormone-treatment-current-container"),qe=document.getElementById("hormone-treatment-type-container"),Ae=document.getElementById("hormonal-contraceptive-container"),oe=document.getElementById("alcohol-container"),pe=document.getElementById("wine-container"),ge=document.getElementById("blc-container"),ye=document.getElementById("beer-container"),xe=document.getElementById("pop-container"),ve=document.getElementById("shots-container"),Z=document.getElementById("submit-btn"),en=document.getElementById("results");document.getElementById("menopause-yes").addEventListener("change",e=>{e.target.checked&&Me.classList.remove("hidden")});document.getElementById("menopause-no").addEventListener("change",e=>{e.target.checked&&!Me.classList.contains("hidden")&&Me.classList.add("hidden")});document.getElementById("menopause-unknown").addEventListener("change",e=>{e.target.checked&&!Me.classList.contains("hidden")&&Me.classList.add("hidden")});document.getElementById("num-pregnancies").addEventListener("input",e=>{parseInt(e.target.value)===0||e.target.value===""?(st.classList.contains("hidden")||st.classList.add("hidden"),G.classList.contains("hidden")||G.classList.add("hidden")):st.classList.remove("hidden")});document.getElementById("parous-yes").addEventListener("change",e=>{e.target.checked&&G.classList.remove("hidden")});document.getElementById("parous-no").addEventListener("change",e=>{e.target.checked&&!G.classList.contains("hidden")&&G.classList.add("hidden")});document.getElementById("parous-unknown").addEventListener("change",e=>{e.target.checked&&!G.classList.contains("hidden")&&G.classList.add("hidden")});document.getElementById("hormone-treatment-yes").addEventListener("change",e=>{e.target.checked&&Ne.classList.remove("hidden")});document.getElementById("hormone-treatment-no").addEventListener("change",e=>{e.target.checked&&!Ne.classList.contains("hidden")&&Ne.classList.add("hidden")});document.getElementById("hormone-treatment-unknown").addEventListener("change",e=>{e.target.checked&&!Ne.classList.contains("hidden")&&Ne.classList.add("hidden")});document.getElementById("hormone-treatment-current-yes").addEventListener("change",e=>{e.target.checked&&qe.classList.remove("hidden")});document.getElementById("hormone-treatment-current-no").addEventListener("change",e=>{e.target.checked&&!qe.classList.contains("hidden")&&qe.classList.add("hidden")});document.getElementById("hormone-treatment-current-unknown").addEventListener("change",e=>{e.target.checked&&!qe.classList.contains("hidden")&&qe.classList.add("hidden")});document.getElementById("hormonal-contraceptive-yes").addEventListener("change",e=>{e.target.checked&&Ae.classList.remove("hidden")});document.getElementById("hormonal-contraceptive-no").addEventListener("change",e=>{e.target.checked&&!Ae.classList.contains("hidden")&&Ae.classList.add("hidden")});document.getElementById("hormonal-contraceptive-unknown").addEventListener("change",e=>{e.target.checked&&!Ae.classList.contains("hidden")&&Ae.classList.add("hidden")});document.getElementById("alcohol-use-former").addEventListener("change",e=>{e.target.checked&&(oe.classList.remove("hidden"),document.getElementById("alcohol-type-label").innerHTML="Please select any of the following alcoholic beverages that you had in the 12 months <em>before</em> you stopped drinking.",document.getElementById("wine-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink wine?",document.getElementById("wine-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank wine, how many servings did you drink per day?",document.getElementById("blc-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink glasses of beer/lager/cider?",document.getElementById("blc-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank beer/lager/cider, how many servings did you drink per day?",document.getElementById("beer-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink bottles of beer?",document.getElementById("beer-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank beer, how many servings did you drink per day?",document.getElementById("pop-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink alcoholic pop beverages?",document.getElementById("pop-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank alcoholic pop beverages, how many servings did you drink per day?",document.getElementById("shots-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually take shots of liquor?",document.getElementById("shot-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank liquor, how many servings did you drink per day?")});document.getElementById("alcohol-use-current").addEventListener("change",e=>{e.target.checked&&(oe.classList.remove("hidden"),document.getElementById("alcohol-type-label").innerHTML="Please select any of the following alcoholic beverages that you have had in the past 12 months.",document.getElementById("wine-freq-label").innerHTML="Over the past 12 months, how often did you usually drink wine?",document.getElementById("wine-serving-label").innerHTML="Over the past 12 months, on the days that you drank wine, how many servings did you drink per day?",document.getElementById("blc-freq-label").innerHTML="Over the past 12 months, how often did you usually drink glasses of beer/lager/cider?",document.getElementById("blc-serving-label").innerHTML="Over the past 12 months, on the days that you drank beer/lager/cider, how many servings did you drink per day?",document.getElementById("beer-freq-label").innerHTML="Over the past 12 months, how often did you usually drink bottles of beer?",document.getElementById("beer-serving-label").innerHTML="Over the past 12 months, on the days that you drank beer, how many servings did you drink per day?",document.getElementById("pop-freq-label").innerHTML="Over the past 12 months, how often did you usually drink alcoholic pop beverages?",document.getElementById("pop-serving-label").innerHTML="Over the past 12 months, on the days that you drank alcoholic pop beverages, how many servings did you drink per day?",document.getElementById("shots-freq-label").innerHTML="Over the past 12 months, how often did you usually take shots of liquor?",document.getElementById("shot-serving-label").innerHTML="Over the past 12 months, on the days that you drank liquor, how many servings did you drink per day?")});document.getElementById("alcohol-use-never").addEventListener("change",e=>{e.target.checked&&!oe.classList.contains("hidden")&&oe.classList.add("hidden")});document.getElementById("alcohol-use-unknown").addEventListener("change",e=>{e.target.checked&&!oe.classList.contains("hidden")&&oe.classList.add("hidden")});document.getElementById("alcohol-type-wine").addEventListener("change",e=>{e.target.checked?(pe.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):pe.classList.contains("hidden")||pe.classList.add("hidden")});document.getElementById("alcohol-type-blc").addEventListener("change",e=>{e.target.checked?(ge.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):ge.classList.contains("hidden")||ge.classList.add("hidden")});document.getElementById("alcohol-type-beer").addEventListener("change",e=>{e.target.checked?(ye.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):ye.classList.contains("hidden")||ye.classList.add("hidden")});document.getElementById("alcohol-type-pop").addEventListener("change",e=>{e.target.checked?(xe.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):xe.classList.contains("hidden")||xe.classList.add("hidden")});document.getElementById("alcohol-type-shots").addEventListener("change",e=>{e.target.checked?(ve.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):ve.classList.contains("hidden")||ve.classList.add("hidden")});document.getElementById("alcohol-type-unknown").addEventListener("change",e=>{e.target.checked&&(document.getElementById("alcohol-type-wine").checked=!1,pe.classList.contains("hidden")||pe.classList.add("hidden"),document.getElementById("alcohol-type-blc").checked=!1,ge.classList.contains("hidden")||ge.classList.add("hidden"),document.getElementById("alcohol-type-beer").checked=!1,ye.classList.contains("hidden")||ye.classList.add("hidden"),document.getElementById("alcohol-type-pop").checked=!1,xe.classList.contains("hidden")||xe.classList.add("hidden"),document.getElementById("alcohol-type-shots").checked=!1,ve.classList.contains("hidden")||ve.classList.add("hidden"))});function No(e,t){return isNaN(e)&&isNaN(t)||isNaN(e)?void 0:(isNaN(t)&&(t=0),(e*12+t)*2.54/10)}function tn(e,t,n,r){const s=a=>r?a<18.5?"<18.5":a<25?"18.5-25":a<30?"25-30":">=30":a<25?"<25":a<30?"25-30":">=30";if(isNaN(t)&&isNaN(n)||isNaN(t)||(isNaN(n)&&(n=0),isNaN(e)))return;const i=t*12+n;return s(e/(i*i)*703)}function qo(e){const t=n=>n<=10?"<=10":n===11?"11":n===12?"12":n===13?"13":n===14?"14":n===15?"15":">=16";if(!isNaN(e))return t(e)}function Ao(e,t,n){const r=s=>s===0?"0":s===1?"1":s===2?"2":">=3";if(!isNaN(e)){if(e===0)return r(0);if(!isNaN(t)){if(t===0)return r(0);if(!isNaN(n))return r(n)}}}function Eo(e,t,n,r){const s=i=>i<20?"<20":i<25?"20-25":i<30?"25-30":">=30";if(!(isNaN(e)||e===0||isNaN(t)||t===0||n===0||isNaN(r)))return s(r)}function Lo(e,t){if(!isNaN(e))return e===0?"never":isNaN(t)?void 0:t===0?"former":"current"}function Io(e){if(!isNaN(e))return e}function $o(e){if(!isNaN(e))return e}function Bo(e){if(!isNaN(e))return e}function So(e){if(!isNaN(e))return e}function To(e,t){const n=r=>r<40?"<40":r<45?"40-45":r<50?"45-50":r<55?"50-55":">=55";if(!(isNaN(e)||e===0||isNaN(t)))return n(t)}function Co(e,t,n){if(!(isNaN(e)||e===0||isNaN(t)||t===0||isNaN(n)))return n}function Ho(e,t,n,r,s,i,a,o,l,c,d,u){let m=0;const f=14,y=365.25,w=N=>N===0?"0":N<5?">0-5":N<15?"5-15":N<25?"15-25":N<35?"25-35":N<45?"35-45":">=45",k=N=>N==="lt-once-a-month"?0*12:N==="once-per-month"?12:N==="2-3-per-month"?2.5*12:N==="1-2-per-week"?1.5*52.14:N==="3-4-per-week"?3.5*52.14:N==="5-6-per-week"?5.5*52.14:N==="daily"?y:void 0;if(!(e===void 0||e==="")){if(e==="never")return w(m);if(!(t===void 0||t.length===0||t.includes(""))){if(t.includes("wine")){if(n===""||isNaN(r))return;m+=r*f*k(n)/y}if(t.includes("blc")){if(s===""||isNaN(i))return;m+=i*f*k(s)/y}if(t.includes("beer")){if(a===""||isNaN(o))return;m+=o*f*k(a)/y}if(t.includes("pop")){if(l===""||isNaN(c))return;m+=c*f*k(l)/y}if(t.includes("shots")){if(d===""||isNaN(u))return;m+=u*f*k(d)/y}return w(m)}}}function Po(e){const t=Object.fromEntries(e.entries()),n={};return n.id=t.name,n.age=parseInt(t.age),n.height=No(parseInt(t["height-feet"]),parseInt(t["height-inches"])),n.age_at_menarche=qo(parseInt(t.menarche)),n.parity=Ao(parseInt(t["num-pregnancies"]),parseInt(t.parous),parseInt(t.parity)),n.age_first_birth=Eo(parseInt(t["num-pregnancies"]),parseInt(t.parous),parseInt(t.parity),parseInt(t["age-first-child-birth"])),n.oc_ever=Io(parseInt(t["hormonal-contraceptive"])),n.alcohol_intake=Ho(t["alcohol-use"],e.getAll("alcohol-type"),t["wine-freq"],parseInt(t["wine-serving"]),t["blc-freq"],parseInt(t["blc-serving"]),t["beer-freq"],parseInt(t["beer-serving"]),t["pop-freq"],parseInt(t["pop-serving"]),t["shots-freq"],parseInt(t["shots-serving"])),n.bbd=Bo(parseInt(t["benign-breast-disease"])),n.famhist=So(parseInt(t["family-history"])),n.age>=50?(n.bmi_curc=tn(parseFloat(t.weight),parseInt(t["height-feet"]),parseInt(t["height-inches"]),!1),n.age_at_menopause=To(parseInt(t.menopause),parseInt(t["age-menopause"])),n.hrt=Lo(parseInt(t["hormone-treatment"]),parseInt(t["hormone-treatment-current"])),n.hrt_type=Co(parseInt(t["hormone-treatment"]),parseInt(t["hormone-treatment-current"]),parseInt(t["hormone-treatment-type"]))):(n.bmi_curc=tn(parseFloat(t.weight),parseInt(t["height-feet"]),parseInt(t["height-inches"]),!0),n.oc_current=$o(parseInt(t["hormonal-contraceptive-current"]))),n}function Oo(e,t,n){const r=t.reference_risks[0].population_risks,s=t.profile[0].risk_estimates;e.innerHTML=`
    <div>
      <h1 class="text-lg px-4 pt-2 sm:pt-4 lg:pt-6">${n}'s estimated 5-year absolute risk of breast cancer: <span class="border-2 border-red-500 rounded-lg px-2">${s.toFixed(5)}</span></h1>
      <h1 class="text-lg px-4 pt-4 pb-2 sm:pb-4 lg:pb-6">${n}'s estimated 5-year absolute risk of breast cancer compared to the US population:</h1>
    </div>
    `;const i=300,a=100,o=75,l=e.clientWidth,c={left:50,right:20},d=-.002,u=Math.max(.01,s),m=7,f=1e5,y=lt(e);y.attr("class","pr-10 py-4");const w=y.append("div").attr("class","slider-container"),k=xo().width(l).height(i).margin({top:50,right:c.right,bottom:50,left:c.left}).data(r).xMin(d).xMax(u).yMax(600).vLine(s).xLabel("Absolute risk →").title("Distribution of the 5-year absolute risk of breast cancer in the US population").bandwidth(m/f),N=yo().width(l).height(a).margin({top:0,right:c.right,bottom:0,left:c.left}).data(r).xMin(d).xMax(u).vLine(s).boxWidth(30).radius(1).hoverOffsetX(80).hoverOffsetY(100).removeAxis(!0),p=vo().width(l).height(o).margin({top:5,right:c.right,bottom:0,left:c.left}).data([s]).xMin(d).xMax(u).radius(7).markerPadding(2).markerText(`${n}'s estimated absolute risk`).color("#FF0000").plotPadding(7).removeAxis(!0);y.call(k),y.call(N),y.call(p),w.call(go().id("bandwidth").labelText("Bandwidth: ").min(1).max(50).step(1).value(m).on("change",b=>{y.call(k.bandwidth(b/f))}));const h=y.append("div").attr("class","flex flex-row justify-center items-center mt-4"),v=h.append("button").attr("class","rounded-md border border-transparent bg-slate-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 py-2 px-4 mr-2").text("Download plot as PNG"),g=h.append("button").attr("class","rounded-md border border-transparent bg-slate-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 py-2 px-4").text("Download results as JSON");v.on("click",()=>{const b=lt(e).selectAll("svg"),_=document.createElement("canvas"),q=_.getContext("2d");function L(x){return new Promise(A=>{const M=new Image,I=new Blob([x],{type:"image/svg+xml;charset=utf-8"}),E=URL.createObjectURL(I);M.onload=()=>{A(M)},M.src=E})}const $=b.nodes().map(x=>new XMLSerializer().serializeToString(x));Promise.all($.map(x=>L(x))).then(x=>{let A=0;_.width=Math.max(...x.map(E=>E.width)),_.height=x.reduce((E,B)=>E+B.height,0),q.fillStyle="white",q.fillRect(0,0,_.width,_.height);for(const E of x)q.drawImage(E,0,A),A+=E.height;const M=_.toDataURL("image/png"),I=document.createElement("a");I.href=M,I.download=`icare-lit_risk_plot_${n}.png`,document.body.appendChild(I),I.click(),document.body.removeChild(I)})}),g.on("click",()=>{const b="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t,null,2)),_=document.createElement("a");_.setAttribute("href",b),_.setAttribute("download",`icare-lit_output_${n}.json`),document.body.appendChild(_),_.click(),_.remove()})}Fn.addEventListener("submit",e=>{e.preventDefault(),Z.innerHTML=`<svg class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l1-1.647z"></path>
      </svg>Calculating...`,Z.classList.add("cursor-not-allowed"),Z.disabled=!0;const t=new FormData(e.target),n=Po(t);Qt.postMessage(n),console.log(n),Qt.onmessage=r=>{const s=r.data;console.log(s),s.profileRisk=.01,Oo(en,s,n.id),en.scrollIntoView({behavior:"smooth",block:"start"}),Z.innerHTML="Estimate risk",Z.classList.remove("cursor-not-allowed"),Z.disabled=!1}});
