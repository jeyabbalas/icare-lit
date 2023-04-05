(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Fn="/icare-lit/assets/rose-ed9a43c9.svg",zn="/icare-lit/assets/github-15128406.svg";function ee(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Yn(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function tn(e){let t,n,r;e.length!==2?(t=ee,n=(o,l)=>ee(e(o),l),r=(o,l)=>e(o)-l):(t=e===ee||e===Yn?e:Vn,n=e,r=e);function s(o,l,c=0,d=o.length){if(c<d){if(t(l,l)!==0)return d;do{const m=c+d>>>1;n(o[m],l)<0?c=m+1:d=m}while(c<d)}return c}function i(o,l,c=0,d=o.length){if(c<d){if(t(l,l)!==0)return d;do{const m=c+d>>>1;n(o[m],l)<=0?c=m+1:d=m}while(c<d)}return c}function a(o,l,c=0,d=o.length){const m=s(o,l,c,d-1);return m>c&&r(o[m-1],l)>-r(o[m],l)?m-1:m}return{left:s,center:a,right:i}}function Vn(){return 0}function Xn(e){return e===null?NaN:+e}function*Wn(e,t){if(t===void 0)for(let n of e)n!=null&&(n=+n)>=n&&(yield n);else{let n=-1;for(let r of e)(r=t(r,++n,e))!=null&&(r=+r)>=r&&(yield r)}}const jn=tn(ee),Un=jn.right;tn(Xn).center;const nn=Un;function Gn(e,t){let n=0;if(t===void 0)for(let r of e)r!=null&&(r=+r)>=r&&++n;else{let r=-1;for(let s of e)(s=t(s,++r,e))!=null&&(s=+s)>=s&&++n}return n}function te(e,t){let n,r;if(t===void 0)for(const s of e)s!=null&&(n===void 0?s>=s&&(n=r=s):(n>s&&(n=s),r<s&&(r=s)));else{let s=-1;for(let i of e)(i=t(i,++s,e))!=null&&(n===void 0?i>=i&&(n=r=i):(n>i&&(n=i),r<i&&(r=i)))}return[n,r]}function Kn(e){return e}function Jn(e=ee){if(e===ee)return rn;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,n)=>{const r=e(t,n);return r||r===0?r:(e(n,n)===0)-(e(t,t)===0)}}function rn(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}var Zn=Array.prototype,Qn=Zn.slice;function Qe(e){return()=>e}const er=Math.sqrt(50),tr=Math.sqrt(10),nr=Math.sqrt(2);function Re(e,t,n){const r=(t-e)/Math.max(0,n),s=Math.floor(Math.log10(r)),i=r/Math.pow(10,s),a=i>=er?10:i>=tr?5:i>=nr?2:1;let o,l,c;return s<0?(c=Math.pow(10,-s)/a,o=Math.round(e*c),l=Math.round(t*c),o/c<e&&++o,l/c>t&&--l,c=-c):(c=Math.pow(10,s)*a,o=Math.round(e/c),l=Math.round(t/c),o*c<e&&++o,l*c>t&&--l),l<o&&.5<=n&&n<2?Re(e,t,n*2):[o,l,c]}function sn(e,t,n){if(t=+t,e=+e,n=+n,!(n>0))return[];if(e===t)return[e];const r=t<e,[s,i,a]=r?Re(t,e,n):Re(e,t,n);if(!(i>=s))return[];const o=i-s+1,l=new Array(o);if(r)if(a<0)for(let c=0;c<o;++c)l[c]=(i-c)/-a;else for(let c=0;c<o;++c)l[c]=(i-c)*a;else if(a<0)for(let c=0;c<o;++c)l[c]=(s+c)/-a;else for(let c=0;c<o;++c)l[c]=(s+c)*a;return l}function re(e,t,n){return t=+t,e=+e,n=+n,Re(e,t,n)[2]}function rr(e,t,n){t=+t,e=+e,n=+n;const r=t<e,s=r?re(t,e,n):re(e,t,n);return(r?-1:1)*(s<0?1/-s:s)}function sr(e,t,n){let r;for(;;){const s=re(e,t,n);if(s===r||s===0||!isFinite(s))return[e,t];s>0?(e=Math.floor(e/s)*s,t=Math.ceil(t/s)*s):s<0&&(e=Math.ceil(e*s)/s,t=Math.floor(t*s)/s),r=s}}function ir(e){return Math.max(1,Math.ceil(Math.log(Gn(e))/Math.LN2)+1)}function ar(){var e=Kn,t=te,n=ir;function r(s){Array.isArray(s)||(s=Array.from(s));var i,a=s.length,o,l,c=new Array(a);for(i=0;i<a;++i)c[i]=e(s[i],i,s);var d=t(c),m=d[0],u=d[1],f=n(c,m,u);if(!Array.isArray(f)){const h=u,y=+f;if(t===te&&([m,u]=sr(m,u,y)),f=sn(m,u,y),f[0]<=m&&(l=re(m,u,y)),f[f.length-1]>=u)if(h>=u&&t===te){const p=re(m,u,y);isFinite(p)&&(p>0?u=(Math.floor(u/p)+1)*p:p<0&&(u=(Math.ceil(u*-p)+1)/-p))}else f.pop()}for(var v=f.length,w=0,_=v;f[w]<=m;)++w;for(;f[_-1]>u;)--_;(w||_<v)&&(f=f.slice(w,_),v=_-w);var M=new Array(v+1),g;for(i=0;i<=v;++i)g=M[i]=[],g.x0=i>0?f[i-1]:m,g.x1=i<v?f[i]:u;if(isFinite(l)){if(l>0)for(i=0;i<a;++i)(o=c[i])!=null&&m<=o&&o<=u&&M[Math.min(v,Math.floor((o-m)/l))].push(s[i]);else if(l<0){for(i=0;i<a;++i)if((o=c[i])!=null&&m<=o&&o<=u){const h=Math.floor((m-o)*l);M[Math.min(v,h+(f[h]<=o))].push(s[i])}}}else for(i=0;i<a;++i)(o=c[i])!=null&&m<=o&&o<=u&&M[nn(f,o,0,v)].push(s[i]);return M}return r.value=function(s){return arguments.length?(e=typeof s=="function"?s:Qe(s),r):e},r.domain=function(s){return arguments.length?(t=typeof s=="function"?s:Qe([s[0],s[1]]),r):t},r.thresholds=function(s){return arguments.length?(n=typeof s=="function"?s:Qe(Array.isArray(s)?Qn.call(s):s),r):n},r}function De(e,t){let n;if(t===void 0)for(const r of e)r!=null&&(n<r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let s of e)(s=t(s,++r,e))!=null&&(n<s||n===void 0&&s>=s)&&(n=s)}return n}function it(e,t){let n;if(t===void 0)for(const r of e)r!=null&&(n>r||n===void 0&&r>=r)&&(n=r);else{let r=-1;for(let s of e)(s=t(s,++r,e))!=null&&(n>s||n===void 0&&s>=s)&&(n=s)}return n}function an(e,t,n=0,r=1/0,s){if(t=Math.floor(t),n=Math.floor(Math.max(0,n)),r=Math.floor(Math.min(e.length-1,r)),!(n<=t&&t<=r))return e;for(s=s===void 0?rn:Jn(s);r>n;){if(r-n>600){const l=r-n+1,c=t-n+1,d=Math.log(l),m=.5*Math.exp(2*d/3),u=.5*Math.sqrt(d*m*(l-m)/l)*(c-l/2<0?-1:1),f=Math.max(n,Math.floor(t-c*m/l+u)),v=Math.min(r,Math.floor(t+(l-c)*m/l+u));an(e,t,f,v,s)}const i=e[t];let a=n,o=r;for(ce(e,n,t),s(e[r],i)>0&&ce(e,n,r);a<o;){for(ce(e,a,o),++a,--o;s(e[a],i)<0;)++a;for(;s(e[o],i)>0;)--o}s(e[n],i)===0?ce(e,n,o):(++o,ce(e,o,r)),o<=t&&(n=o+1),t<=o&&(r=o-1)}return e}function ce(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function et(e,t,n){if(e=Float64Array.from(Wn(e,n)),!(!(r=e.length)||isNaN(t=+t))){if(t<=0||r<2)return it(e);if(t>=1)return De(e);var r,s=(r-1)*t,i=Math.floor(s),a=De(an(e,i).subarray(0,i+1)),o=it(e.subarray(i+1));return a+(o-a)*(s-i)}}function or(e,t){let n=0,r=0;if(t===void 0)for(let s of e)s!=null&&(s=+s)>=s&&(++n,r+=s);else{let s=-1;for(let i of e)(i=t(i,++s,e))!=null&&(i=+i)>=i&&(++n,r+=i)}if(n)return r/n}function Lt(e,t,n){e=+e,t=+t,n=(s=arguments.length)<2?(t=e,e=0,1):s<3?1:+n;for(var r=-1,s=Math.max(0,Math.ceil((t-e)/n))|0,i=new Array(s);++r<s;)i[r]=e+r*n;return i}function lr(e){return e}var Ce=1,tt=2,at=3,ue=4,It=1e-6;function cr(e){return"translate("+e+",0)"}function dr(e){return"translate(0,"+e+")"}function ur(e){return t=>+e(t)}function mr(e,t){return t=Math.max(0,e.bandwidth()-t*2)/2,e.round()&&(t=Math.round(t)),n=>+e(n)+t}function fr(){return!this.__axis}function xt(e,t){var n=[],r=null,s=null,i=6,a=6,o=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=e===Ce||e===ue?-1:1,d=e===ue||e===tt?"x":"y",m=e===Ce||e===at?cr:dr;function u(f){var v=r??(t.ticks?t.ticks.apply(t,n):t.domain()),w=s??(t.tickFormat?t.tickFormat.apply(t,n):lr),_=Math.max(i,0)+o,M=t.range(),g=+M[0]+l,h=+M[M.length-1]+l,y=(t.bandwidth?mr:ur)(t.copy(),l),p=f.selection?f.selection():f,b=p.selectAll(".domain").data([null]),q=p.selectAll(".tick").data(v,t).order(),N=q.exit(),A=q.enter().append("g").attr("class","tick"),L=q.select("line"),x=q.select("text");b=b.merge(b.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),q=q.merge(A),L=L.merge(A.append("line").attr("stroke","currentColor").attr(d+"2",c*i)),x=x.merge(A.append("text").attr("fill","currentColor").attr(d,c*_).attr("dy",e===Ce?"0em":e===at?"0.71em":"0.32em")),f!==p&&(b=b.transition(f),q=q.transition(f),L=L.transition(f),x=x.transition(f),N=N.transition(f).attr("opacity",It).attr("transform",function(E){return isFinite(E=y(E))?m(E+l):this.getAttribute("transform")}),A.attr("opacity",It).attr("transform",function(E){var k=this.parentNode.__axis;return m((k&&isFinite(k=k(E))?k:y(E))+l)})),N.remove(),b.attr("d",e===ue||e===tt?a?"M"+c*a+","+g+"H"+l+"V"+h+"H"+c*a:"M"+l+","+g+"V"+h:a?"M"+g+","+c*a+"V"+l+"H"+h+"V"+c*a:"M"+g+","+l+"H"+h),q.attr("opacity",1).attr("transform",function(E){return m(y(E)+l)}),L.attr(d+"2",c*i),x.attr(d,c*_).text(w),p.filter(fr).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",e===tt?"start":e===ue?"end":"middle"),p.each(function(){this.__axis=y})}return u.scale=function(f){return arguments.length?(t=f,u):t},u.ticks=function(){return n=Array.from(arguments),u},u.tickArguments=function(f){return arguments.length?(n=f==null?[]:Array.from(f),u):n.slice()},u.tickValues=function(f){return arguments.length?(r=f==null?null:Array.from(f),u):r&&r.slice()},u.tickFormat=function(f){return arguments.length?(s=f,u):s},u.tickSize=function(f){return arguments.length?(i=a=+f,u):i},u.tickSizeInner=function(f){return arguments.length?(i=+f,u):i},u.tickSizeOuter=function(f){return arguments.length?(a=+f,u):a},u.tickPadding=function(f){return arguments.length?(o=+f,u):o},u.offset=function(f){return arguments.length?(l=+f,u):l},u}function hr(e){return xt(Ce,e)}function on(e){return xt(at,e)}function pr(e){return xt(ue,e)}var gr={value:()=>{}};function vt(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new He(n)}function He(e){this._=e}function yr(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",s=n.indexOf(".");if(s>=0&&(r=n.slice(s+1),n=n.slice(0,s)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}He.prototype=vt.prototype={constructor:He,on:function(e,t){var n=this._,r=yr(e+"",n),s,i=-1,a=r.length;if(arguments.length<2){for(;++i<a;)if((s=(e=r[i]).type)&&(s=xr(n[s],e.name)))return s;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++i<a;)if(s=(e=r[i]).type)n[s]=$t(n[s],e.name,t);else if(t==null)for(s in n)n[s]=$t(n[s],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new He(e)},call:function(e,t){if((s=arguments.length-2)>0)for(var n=new Array(s),r=0,s,i;r<s;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(i=this._[e],r=0,s=i.length;r<s;++r)i[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],s=0,i=r.length;s<i;++s)r[s].value.apply(t,n)}};function xr(e,t){for(var n=0,r=e.length,s;n<r;++n)if((s=e[n]).name===t)return s.value}function $t(e,t,n){for(var r=0,s=e.length;r<s;++r)if(e[r].name===t){e[r]=gr,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var ot="http://www.w3.org/1999/xhtml";const Bt={svg:"http://www.w3.org/2000/svg",xhtml:ot,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ke(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Bt.hasOwnProperty(t)?{space:Bt[t],local:e}:e}function vr(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===ot&&t.documentElement.namespaceURI===ot?t.createElement(e):t.createElementNS(n,e)}}function br(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function ln(e){var t=Ke(e);return(t.local?br:vr)(t)}function wr(){}function bt(e){return e==null?wr:function(){return this.querySelector(e)}}function kr(e){typeof e!="function"&&(e=bt(e));for(var t=this._groups,n=t.length,r=new Array(n),s=0;s<n;++s)for(var i=t[s],a=i.length,o=r[s]=new Array(a),l,c,d=0;d<a;++d)(l=i[d])&&(c=e.call(l,l.__data__,d,i))&&("__data__"in l&&(c.__data__=l.__data__),o[d]=c);return new C(r,this._parents)}function _r(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Mr(){return[]}function cn(e){return e==null?Mr:function(){return this.querySelectorAll(e)}}function Nr(e){return function(){return _r(e.apply(this,arguments))}}function qr(e){typeof e=="function"?e=Nr(e):e=cn(e);for(var t=this._groups,n=t.length,r=[],s=[],i=0;i<n;++i)for(var a=t[i],o=a.length,l,c=0;c<o;++c)(l=a[c])&&(r.push(e.call(l,l.__data__,c,a)),s.push(l));return new C(r,s)}function dn(e){return function(){return this.matches(e)}}function un(e){return function(t){return t.matches(e)}}var Ar=Array.prototype.find;function Er(e){return function(){return Ar.call(this.children,e)}}function Lr(){return this.firstElementChild}function Ir(e){return this.select(e==null?Lr:Er(typeof e=="function"?e:un(e)))}var $r=Array.prototype.filter;function Br(){return Array.from(this.children)}function Sr(e){return function(){return $r.call(this.children,e)}}function Tr(e){return this.selectAll(e==null?Br:Sr(typeof e=="function"?e:un(e)))}function Cr(e){typeof e!="function"&&(e=dn(e));for(var t=this._groups,n=t.length,r=new Array(n),s=0;s<n;++s)for(var i=t[s],a=i.length,o=r[s]=[],l,c=0;c<a;++c)(l=i[c])&&e.call(l,l.__data__,c,i)&&o.push(l);return new C(r,this._parents)}function mn(e){return new Array(e.length)}function Hr(){return new C(this._enter||this._groups.map(mn),this._parents)}function Fe(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Fe.prototype={constructor:Fe,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Pr(e){return function(){return e}}function Or(e,t,n,r,s,i){for(var a=0,o,l=t.length,c=i.length;a<c;++a)(o=t[a])?(o.__data__=i[a],r[a]=o):n[a]=new Fe(e,i[a]);for(;a<l;++a)(o=t[a])&&(s[a]=o)}function Rr(e,t,n,r,s,i,a){var o,l,c=new Map,d=t.length,m=i.length,u=new Array(d),f;for(o=0;o<d;++o)(l=t[o])&&(u[o]=f=a.call(l,l.__data__,o,t)+"",c.has(f)?s[o]=l:c.set(f,l));for(o=0;o<m;++o)f=a.call(e,i[o],o,i)+"",(l=c.get(f))?(r[o]=l,l.__data__=i[o],c.delete(f)):n[o]=new Fe(e,i[o]);for(o=0;o<d;++o)(l=t[o])&&c.get(u[o])===l&&(s[o]=l)}function Dr(e){return e.__data__}function Fr(e,t){if(!arguments.length)return Array.from(this,Dr);var n=t?Rr:Or,r=this._parents,s=this._groups;typeof e!="function"&&(e=Pr(e));for(var i=s.length,a=new Array(i),o=new Array(i),l=new Array(i),c=0;c<i;++c){var d=r[c],m=s[c],u=m.length,f=zr(e.call(d,d&&d.__data__,c,r)),v=f.length,w=o[c]=new Array(v),_=a[c]=new Array(v),M=l[c]=new Array(u);n(d,m,w,_,M,f,t);for(var g=0,h=0,y,p;g<v;++g)if(y=w[g]){for(g>=h&&(h=g+1);!(p=_[h])&&++h<v;);y._next=p||null}}return a=new C(a,r),a._enter=o,a._exit=l,a}function zr(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Yr(){return new C(this._exit||this._groups.map(mn),this._parents)}function Vr(e,t,n){var r=this.enter(),s=this,i=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(s=t(s),s&&(s=s.selection())),n==null?i.remove():n(i),r&&s?r.merge(s).order():s}function Xr(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,s=n.length,i=r.length,a=Math.min(s,i),o=new Array(s),l=0;l<a;++l)for(var c=n[l],d=r[l],m=c.length,u=o[l]=new Array(m),f,v=0;v<m;++v)(f=c[v]||d[v])&&(u[v]=f);for(;l<s;++l)o[l]=n[l];return new C(o,this._parents)}function Wr(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],s=r.length-1,i=r[s],a;--s>=0;)(a=r[s])&&(i&&a.compareDocumentPosition(i)^4&&i.parentNode.insertBefore(a,i),i=a);return this}function jr(e){e||(e=Ur);function t(m,u){return m&&u?e(m.__data__,u.__data__):!m-!u}for(var n=this._groups,r=n.length,s=new Array(r),i=0;i<r;++i){for(var a=n[i],o=a.length,l=s[i]=new Array(o),c,d=0;d<o;++d)(c=a[d])&&(l[d]=c);l.sort(t)}return new C(s,this._parents).order()}function Ur(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Gr(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function Kr(){return Array.from(this)}function Jr(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],s=0,i=r.length;s<i;++s){var a=r[s];if(a)return a}return null}function Zr(){let e=0;for(const t of this)++e;return e}function Qr(){return!this.node()}function es(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var s=t[n],i=0,a=s.length,o;i<a;++i)(o=s[i])&&e.call(o,o.__data__,i,s);return this}function ts(e){return function(){this.removeAttribute(e)}}function ns(e){return function(){this.removeAttributeNS(e.space,e.local)}}function rs(e,t){return function(){this.setAttribute(e,t)}}function ss(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function is(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function as(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function os(e,t){var n=Ke(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?ns:ts:typeof t=="function"?n.local?as:is:n.local?ss:rs)(n,t))}function fn(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function ls(e){return function(){this.style.removeProperty(e)}}function cs(e,t,n){return function(){this.style.setProperty(e,t,n)}}function ds(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function us(e,t,n){return arguments.length>1?this.each((t==null?ls:typeof t=="function"?ds:cs)(e,t,n??"")):se(this.node(),e)}function se(e,t){return e.style.getPropertyValue(t)||fn(e).getComputedStyle(e,null).getPropertyValue(t)}function ms(e){return function(){delete this[e]}}function fs(e,t){return function(){this[e]=t}}function hs(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function ps(e,t){return arguments.length>1?this.each((t==null?ms:typeof t=="function"?hs:fs)(e,t)):this.node()[e]}function hn(e){return e.trim().split(/^|\s+/)}function wt(e){return e.classList||new pn(e)}function pn(e){this._node=e,this._names=hn(e.getAttribute("class")||"")}pn.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function gn(e,t){for(var n=wt(e),r=-1,s=t.length;++r<s;)n.add(t[r])}function yn(e,t){for(var n=wt(e),r=-1,s=t.length;++r<s;)n.remove(t[r])}function gs(e){return function(){gn(this,e)}}function ys(e){return function(){yn(this,e)}}function xs(e,t){return function(){(t.apply(this,arguments)?gn:yn)(this,e)}}function vs(e,t){var n=hn(e+"");if(arguments.length<2){for(var r=wt(this.node()),s=-1,i=n.length;++s<i;)if(!r.contains(n[s]))return!1;return!0}return this.each((typeof t=="function"?xs:t?gs:ys)(n,t))}function bs(){this.textContent=""}function ws(e){return function(){this.textContent=e}}function ks(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function _s(e){return arguments.length?this.each(e==null?bs:(typeof e=="function"?ks:ws)(e)):this.node().textContent}function Ms(){this.innerHTML=""}function Ns(e){return function(){this.innerHTML=e}}function qs(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function As(e){return arguments.length?this.each(e==null?Ms:(typeof e=="function"?qs:Ns)(e)):this.node().innerHTML}function Es(){this.nextSibling&&this.parentNode.appendChild(this)}function Ls(){return this.each(Es)}function Is(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function $s(){return this.each(Is)}function Bs(e){var t=typeof e=="function"?e:ln(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Ss(){return null}function Ts(e,t){var n=typeof e=="function"?e:ln(e),r=t==null?Ss:typeof t=="function"?t:bt(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function Cs(){var e=this.parentNode;e&&e.removeChild(this)}function Hs(){return this.each(Cs)}function Ps(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Os(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Rs(e){return this.select(e?Os:Ps)}function Ds(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Fs(e){return function(t){e.call(this,t,this.__data__)}}function zs(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function Ys(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,s=t.length,i;n<s;++n)i=t[n],(!e.type||i.type===e.type)&&i.name===e.name?this.removeEventListener(i.type,i.listener,i.options):t[++r]=i;++r?t.length=r:delete this.__on}}}function Vs(e,t,n){return function(){var r=this.__on,s,i=Fs(t);if(r){for(var a=0,o=r.length;a<o;++a)if((s=r[a]).type===e.type&&s.name===e.name){this.removeEventListener(s.type,s.listener,s.options),this.addEventListener(s.type,s.listener=i,s.options=n),s.value=t;return}}this.addEventListener(e.type,i,n),s={type:e.type,name:e.name,value:t,listener:i,options:n},r?r.push(s):this.__on=[s]}}function Xs(e,t,n){var r=zs(e+""),s,i=r.length,a;if(arguments.length<2){var o=this.node().__on;if(o){for(var l=0,c=o.length,d;l<c;++l)for(s=0,d=o[l];s<i;++s)if((a=r[s]).type===d.type&&a.name===d.name)return d.value}return}for(o=t?Vs:Ys,s=0;s<i;++s)this.each(o(r[s],t,n));return this}function xn(e,t,n){var r=fn(e),s=r.CustomEvent;typeof s=="function"?s=new s(t,n):(s=r.document.createEvent("Event"),n?(s.initEvent(t,n.bubbles,n.cancelable),s.detail=n.detail):s.initEvent(t,!1,!1)),e.dispatchEvent(s)}function Ws(e,t){return function(){return xn(this,e,t)}}function js(e,t){return function(){return xn(this,e,t.apply(this,arguments))}}function Us(e,t){return this.each((typeof t=="function"?js:Ws)(e,t))}function*Gs(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],s=0,i=r.length,a;s<i;++s)(a=r[s])&&(yield a)}var vn=[null];function C(e,t){this._groups=e,this._parents=t}function le(){return new C([[document.documentElement]],vn)}function Ks(){return this}C.prototype=le.prototype={constructor:C,select:kr,selectAll:qr,selectChild:Ir,selectChildren:Tr,filter:Cr,data:Fr,enter:Hr,exit:Yr,join:Vr,merge:Xr,selection:Ks,order:Wr,sort:jr,call:Gr,nodes:Kr,node:Jr,size:Zr,empty:Qr,each:es,attr:os,style:us,property:ps,classed:vs,text:_s,html:As,raise:Ls,lower:$s,append:Bs,insert:Ts,remove:Hs,clone:Rs,datum:Ds,on:Xs,dispatch:Us,[Symbol.iterator]:Gs};function lt(e){return typeof e=="string"?new C([[document.querySelector(e)]],[document.documentElement]):new C([[e]],vn)}function kt(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function bn(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function Ee(){}var be=.7,ze=1/be,ne="\\s*([+-]?\\d+)\\s*",we="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",R="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Js=/^#([0-9a-f]{3,8})$/,Zs=new RegExp(`^rgb\\(${ne},${ne},${ne}\\)$`),Qs=new RegExp(`^rgb\\(${R},${R},${R}\\)$`),ei=new RegExp(`^rgba\\(${ne},${ne},${ne},${we}\\)$`),ti=new RegExp(`^rgba\\(${R},${R},${R},${we}\\)$`),ni=new RegExp(`^hsl\\(${we},${R},${R}\\)$`),ri=new RegExp(`^hsla\\(${we},${R},${R},${we}\\)$`),St={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};kt(Ee,j,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Tt,formatHex:Tt,formatHex8:si,formatHsl:ii,formatRgb:Ct,toString:Ct});function Tt(){return this.rgb().formatHex()}function si(){return this.rgb().formatHex8()}function ii(){return wn(this).formatHsl()}function Ct(){return this.rgb().formatRgb()}function j(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Js.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Ht(t):n===3?new S(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Le(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Le(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Zs.exec(e))?new S(t[1],t[2],t[3],1):(t=Qs.exec(e))?new S(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=ei.exec(e))?Le(t[1],t[2],t[3],t[4]):(t=ti.exec(e))?Le(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=ni.exec(e))?Rt(t[1],t[2]/100,t[3]/100,1):(t=ri.exec(e))?Rt(t[1],t[2]/100,t[3]/100,t[4]):St.hasOwnProperty(e)?Ht(St[e]):e==="transparent"?new S(NaN,NaN,NaN,0):null}function Ht(e){return new S(e>>16&255,e>>8&255,e&255,1)}function Le(e,t,n,r){return r<=0&&(e=t=n=NaN),new S(e,t,n,r)}function ai(e){return e instanceof Ee||(e=j(e)),e?(e=e.rgb(),new S(e.r,e.g,e.b,e.opacity)):new S}function ct(e,t,n,r){return arguments.length===1?ai(e):new S(e,t,n,r??1)}function S(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}kt(S,ct,bn(Ee,{brighter(e){return e=e==null?ze:Math.pow(ze,e),new S(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?be:Math.pow(be,e),new S(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new S(W(this.r),W(this.g),W(this.b),Ye(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Pt,formatHex:Pt,formatHex8:oi,formatRgb:Ot,toString:Ot}));function Pt(){return`#${X(this.r)}${X(this.g)}${X(this.b)}`}function oi(){return`#${X(this.r)}${X(this.g)}${X(this.b)}${X((isNaN(this.opacity)?1:this.opacity)*255)}`}function Ot(){const e=Ye(this.opacity);return`${e===1?"rgb(":"rgba("}${W(this.r)}, ${W(this.g)}, ${W(this.b)}${e===1?")":`, ${e})`}`}function Ye(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function W(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function X(e){return e=W(e),(e<16?"0":"")+e.toString(16)}function Rt(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new P(e,t,n,r)}function wn(e){if(e instanceof P)return new P(e.h,e.s,e.l,e.opacity);if(e instanceof Ee||(e=j(e)),!e)return new P;if(e instanceof P)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,s=Math.min(t,n,r),i=Math.max(t,n,r),a=NaN,o=i-s,l=(i+s)/2;return o?(t===i?a=(n-r)/o+(n<r)*6:n===i?a=(r-t)/o+2:a=(t-n)/o+4,o/=l<.5?i+s:2-i-s,a*=60):o=l>0&&l<1?0:a,new P(a,o,l,e.opacity)}function li(e,t,n,r){return arguments.length===1?wn(e):new P(e,t,n,r??1)}function P(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}kt(P,li,bn(Ee,{brighter(e){return e=e==null?ze:Math.pow(ze,e),new P(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?be:Math.pow(be,e),new P(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,s=2*n-r;return new S(nt(e>=240?e-240:e+120,s,r),nt(e,s,r),nt(e<120?e+240:e-120,s,r),this.opacity)},clamp(){return new P(Dt(this.h),Ie(this.s),Ie(this.l),Ye(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Ye(this.opacity);return`${e===1?"hsl(":"hsla("}${Dt(this.h)}, ${Ie(this.s)*100}%, ${Ie(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Dt(e){return e=(e||0)%360,e<0?e+360:e}function Ie(e){return Math.max(0,Math.min(1,e||0))}function nt(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const _t=e=>()=>e;function ci(e,t){return function(n){return e+n*t}}function di(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function ui(e){return(e=+e)==1?kn:function(t,n){return n-t?di(t,n,e):_t(isNaN(t)?n:t)}}function kn(e,t){var n=t-e;return n?ci(e,n):_t(isNaN(e)?t:e)}const Ve=function e(t){var n=ui(t);function r(s,i){var a=n((s=ct(s)).r,(i=ct(i)).r),o=n(s.g,i.g),l=n(s.b,i.b),c=kn(s.opacity,i.opacity);return function(d){return s.r=a(d),s.g=o(d),s.b=l(d),s.opacity=c(d),s+""}}return r.gamma=e,r}(1);function mi(e,t){t||(t=[]);var n=e?Math.min(t.length,e.length):0,r=t.slice(),s;return function(i){for(s=0;s<n;++s)r[s]=e[s]*(1-i)+t[s]*i;return r}}function fi(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function hi(e,t){var n=t?t.length:0,r=e?Math.min(n,e.length):0,s=new Array(r),i=new Array(n),a;for(a=0;a<r;++a)s[a]=Mt(e[a],t[a]);for(;a<n;++a)i[a]=t[a];return function(o){for(a=0;a<r;++a)i[a]=s[a](o);return i}}function pi(e,t){var n=new Date;return e=+e,t=+t,function(r){return n.setTime(e*(1-r)+t*r),n}}function H(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}function gi(e,t){var n={},r={},s;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(s in t)s in e?n[s]=Mt(e[s],t[s]):r[s]=t[s];return function(i){for(s in n)r[s]=n[s](i);return r}}var dt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,rt=new RegExp(dt.source,"g");function yi(e){return function(){return e}}function xi(e){return function(t){return e(t)+""}}function _n(e,t){var n=dt.lastIndex=rt.lastIndex=0,r,s,i,a=-1,o=[],l=[];for(e=e+"",t=t+"";(r=dt.exec(e))&&(s=rt.exec(t));)(i=s.index)>n&&(i=t.slice(n,i),o[a]?o[a]+=i:o[++a]=i),(r=r[0])===(s=s[0])?o[a]?o[a]+=s:o[++a]=s:(o[++a]=null,l.push({i:a,x:H(r,s)})),n=rt.lastIndex;return n<t.length&&(i=t.slice(n),o[a]?o[a]+=i:o[++a]=i),o.length<2?l[0]?xi(l[0].x):yi(t):(t=l.length,function(c){for(var d=0,m;d<t;++d)o[(m=l[d]).i]=m.x(c);return o.join("")})}function Mt(e,t){var n=typeof t,r;return t==null||n==="boolean"?_t(t):(n==="number"?H:n==="string"?(r=j(t))?(t=r,Ve):_n:t instanceof j?Ve:t instanceof Date?pi:fi(t)?mi:Array.isArray(t)?hi:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?gi:H)(e,t)}function vi(e,t){return e=+e,t=+t,function(n){return Math.round(e*(1-n)+t*n)}}var Ft=180/Math.PI,ut={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Mn(e,t,n,r,s,i){var a,o,l;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(l=e*n+t*r)&&(n-=e*l,r-=t*l),(o=Math.sqrt(n*n+r*r))&&(n/=o,r/=o,l/=o),e*r<t*n&&(e=-e,t=-t,l=-l,a=-a),{translateX:s,translateY:i,rotate:Math.atan2(t,e)*Ft,skewX:Math.atan(l)*Ft,scaleX:a,scaleY:o}}var $e;function bi(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?ut:Mn(t.a,t.b,t.c,t.d,t.e,t.f)}function wi(e){return e==null||($e||($e=document.createElementNS("http://www.w3.org/2000/svg","g")),$e.setAttribute("transform",e),!(e=$e.transform.baseVal.consolidate()))?ut:(e=e.matrix,Mn(e.a,e.b,e.c,e.d,e.e,e.f))}function Nn(e,t,n,r){function s(c){return c.length?c.pop()+" ":""}function i(c,d,m,u,f,v){if(c!==m||d!==u){var w=f.push("translate(",null,t,null,n);v.push({i:w-4,x:H(c,m)},{i:w-2,x:H(d,u)})}else(m||u)&&f.push("translate("+m+t+u+n)}function a(c,d,m,u){c!==d?(c-d>180?d+=360:d-c>180&&(c+=360),u.push({i:m.push(s(m)+"rotate(",null,r)-2,x:H(c,d)})):d&&m.push(s(m)+"rotate("+d+r)}function o(c,d,m,u){c!==d?u.push({i:m.push(s(m)+"skewX(",null,r)-2,x:H(c,d)}):d&&m.push(s(m)+"skewX("+d+r)}function l(c,d,m,u,f,v){if(c!==m||d!==u){var w=f.push(s(f)+"scale(",null,",",null,")");v.push({i:w-4,x:H(c,m)},{i:w-2,x:H(d,u)})}else(m!==1||u!==1)&&f.push(s(f)+"scale("+m+","+u+")")}return function(c,d){var m=[],u=[];return c=e(c),d=e(d),i(c.translateX,c.translateY,d.translateX,d.translateY,m,u),a(c.rotate,d.rotate,m,u),o(c.skewX,d.skewX,m,u),l(c.scaleX,c.scaleY,d.scaleX,d.scaleY,m,u),c=d=null,function(f){for(var v=-1,w=u.length,_;++v<w;)m[(_=u[v]).i]=_.x(f);return m.join("")}}}var ki=Nn(bi,"px, ","px)","deg)"),_i=Nn(wi,", ",")",")"),ie=0,me=0,de=0,qn=1e3,Xe,fe,We=0,U=0,Je=0,ke=typeof performance=="object"&&performance.now?performance:Date,An=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Nt(){return U||(An(Mi),U=ke.now()+Je)}function Mi(){U=0}function je(){this._call=this._time=this._next=null}je.prototype=En.prototype={constructor:je,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Nt():+n)+(t==null?0:+t),!this._next&&fe!==this&&(fe?fe._next=this:Xe=this,fe=this),this._call=e,this._time=n,mt()},stop:function(){this._call&&(this._call=null,this._time=1/0,mt())}};function En(e,t,n){var r=new je;return r.restart(e,t,n),r}function Ni(){Nt(),++ie;for(var e=Xe,t;e;)(t=U-e._time)>=0&&e._call.call(void 0,t),e=e._next;--ie}function zt(){U=(We=ke.now())+Je,ie=me=0;try{Ni()}finally{ie=0,Ai(),U=0}}function qi(){var e=ke.now(),t=e-We;t>qn&&(Je-=t,We=e)}function Ai(){for(var e,t=Xe,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Xe=n);fe=e,mt(r)}function mt(e){if(!ie){me&&(me=clearTimeout(me));var t=e-U;t>24?(e<1/0&&(me=setTimeout(zt,e-ke.now()-Je)),de&&(de=clearInterval(de))):(de||(We=ke.now(),de=setInterval(qi,qn)),ie=1,An(zt))}}function Yt(e,t,n){var r=new je;return t=t==null?0:+t,r.restart(s=>{r.stop(),e(s+t)},t,n),r}var Ei=vt("start","end","cancel","interrupt"),Li=[],Ln=0,Vt=1,ft=2,Pe=3,Xt=4,ht=5,Oe=6;function Ze(e,t,n,r,s,i){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;Ii(e,n,{name:t,index:r,group:s,on:Ei,tween:Li,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:Ln})}function qt(e,t){var n=O(e,t);if(n.state>Ln)throw new Error("too late; already scheduled");return n}function D(e,t){var n=O(e,t);if(n.state>Pe)throw new Error("too late; already running");return n}function O(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function Ii(e,t,n){var r=e.__transition,s;r[t]=n,n.timer=En(i,0,n.time);function i(c){n.state=Vt,n.timer.restart(a,n.delay,n.time),n.delay<=c&&a(c-n.delay)}function a(c){var d,m,u,f;if(n.state!==Vt)return l();for(d in r)if(f=r[d],f.name===n.name){if(f.state===Pe)return Yt(a);f.state===Xt?(f.state=Oe,f.timer.stop(),f.on.call("interrupt",e,e.__data__,f.index,f.group),delete r[d]):+d<t&&(f.state=Oe,f.timer.stop(),f.on.call("cancel",e,e.__data__,f.index,f.group),delete r[d])}if(Yt(function(){n.state===Pe&&(n.state=Xt,n.timer.restart(o,n.delay,n.time),o(c))}),n.state=ft,n.on.call("start",e,e.__data__,n.index,n.group),n.state===ft){for(n.state=Pe,s=new Array(u=n.tween.length),d=0,m=-1;d<u;++d)(f=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(s[++m]=f);s.length=m+1}}function o(c){for(var d=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(l),n.state=ht,1),m=-1,u=s.length;++m<u;)s[m].call(e,d);n.state===ht&&(n.on.call("end",e,e.__data__,n.index,n.group),l())}function l(){n.state=Oe,n.timer.stop(),delete r[t];for(var c in r)return;delete e.__transition}}function $i(e,t){var n=e.__transition,r,s,i=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){i=!1;continue}s=r.state>ft&&r.state<ht,r.state=Oe,r.timer.stop(),r.on.call(s?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}i&&delete e.__transition}}function Bi(e){return this.each(function(){$i(this,e)})}function Si(e,t){var n,r;return function(){var s=D(this,e),i=s.tween;if(i!==n){r=n=i;for(var a=0,o=r.length;a<o;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}s.tween=r}}function Ti(e,t,n){var r,s;if(typeof n!="function")throw new Error;return function(){var i=D(this,e),a=i.tween;if(a!==r){s=(r=a).slice();for(var o={name:t,value:n},l=0,c=s.length;l<c;++l)if(s[l].name===t){s[l]=o;break}l===c&&s.push(o)}i.tween=s}}function Ci(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=O(this.node(),n).tween,s=0,i=r.length,a;s<i;++s)if((a=r[s]).name===e)return a.value;return null}return this.each((t==null?Si:Ti)(n,e,t))}function At(e,t,n){var r=e._id;return e.each(function(){var s=D(this,r);(s.value||(s.value={}))[t]=n.apply(this,arguments)}),function(s){return O(s,r).value[t]}}function In(e,t){var n;return(typeof t=="number"?H:t instanceof j?Ve:(n=j(t))?(t=n,Ve):_n)(e,t)}function Hi(e){return function(){this.removeAttribute(e)}}function Pi(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Oi(e,t,n){var r,s=n+"",i;return function(){var a=this.getAttribute(e);return a===s?null:a===r?i:i=t(r=a,n)}}function Ri(e,t,n){var r,s=n+"",i;return function(){var a=this.getAttributeNS(e.space,e.local);return a===s?null:a===r?i:i=t(r=a,n)}}function Di(e,t,n){var r,s,i;return function(){var a,o=n(this),l;return o==null?void this.removeAttribute(e):(a=this.getAttribute(e),l=o+"",a===l?null:a===r&&l===s?i:(s=l,i=t(r=a,o)))}}function Fi(e,t,n){var r,s,i;return function(){var a,o=n(this),l;return o==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),l=o+"",a===l?null:a===r&&l===s?i:(s=l,i=t(r=a,o)))}}function zi(e,t){var n=Ke(e),r=n==="transform"?_i:In;return this.attrTween(e,typeof t=="function"?(n.local?Fi:Di)(n,r,At(this,"attr."+e,t)):t==null?(n.local?Pi:Hi)(n):(n.local?Ri:Oi)(n,r,t))}function Yi(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function Vi(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Xi(e,t){var n,r;function s(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&Vi(e,i)),n}return s._value=t,s}function Wi(e,t){var n,r;function s(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&Yi(e,i)),n}return s._value=t,s}function ji(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=Ke(e);return this.tween(n,(r.local?Xi:Wi)(r,t))}function Ui(e,t){return function(){qt(this,e).delay=+t.apply(this,arguments)}}function Gi(e,t){return t=+t,function(){qt(this,e).delay=t}}function Ki(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Ui:Gi)(t,e)):O(this.node(),t).delay}function Ji(e,t){return function(){D(this,e).duration=+t.apply(this,arguments)}}function Zi(e,t){return t=+t,function(){D(this,e).duration=t}}function Qi(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Ji:Zi)(t,e)):O(this.node(),t).duration}function ea(e,t){if(typeof t!="function")throw new Error;return function(){D(this,e).ease=t}}function ta(e){var t=this._id;return arguments.length?this.each(ea(t,e)):O(this.node(),t).ease}function na(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;D(this,e).ease=n}}function ra(e){if(typeof e!="function")throw new Error;return this.each(na(this._id,e))}function sa(e){typeof e!="function"&&(e=dn(e));for(var t=this._groups,n=t.length,r=new Array(n),s=0;s<n;++s)for(var i=t[s],a=i.length,o=r[s]=[],l,c=0;c<a;++c)(l=i[c])&&e.call(l,l.__data__,c,i)&&o.push(l);return new Y(r,this._parents,this._name,this._id)}function ia(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,s=n.length,i=Math.min(r,s),a=new Array(r),o=0;o<i;++o)for(var l=t[o],c=n[o],d=l.length,m=a[o]=new Array(d),u,f=0;f<d;++f)(u=l[f]||c[f])&&(m[f]=u);for(;o<r;++o)a[o]=t[o];return new Y(a,this._parents,this._name,this._id)}function aa(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function oa(e,t,n){var r,s,i=aa(t)?qt:D;return function(){var a=i(this,e),o=a.on;o!==r&&(s=(r=o).copy()).on(t,n),a.on=s}}function la(e,t){var n=this._id;return arguments.length<2?O(this.node(),n).on.on(e):this.each(oa(n,e,t))}function ca(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function da(){return this.on("end.remove",ca(this._id))}function ua(e){var t=this._name,n=this._id;typeof e!="function"&&(e=bt(e));for(var r=this._groups,s=r.length,i=new Array(s),a=0;a<s;++a)for(var o=r[a],l=o.length,c=i[a]=new Array(l),d,m,u=0;u<l;++u)(d=o[u])&&(m=e.call(d,d.__data__,u,o))&&("__data__"in d&&(m.__data__=d.__data__),c[u]=m,Ze(c[u],t,n,u,c,O(d,n)));return new Y(i,this._parents,t,n)}function ma(e){var t=this._name,n=this._id;typeof e!="function"&&(e=cn(e));for(var r=this._groups,s=r.length,i=[],a=[],o=0;o<s;++o)for(var l=r[o],c=l.length,d,m=0;m<c;++m)if(d=l[m]){for(var u=e.call(d,d.__data__,m,l),f,v=O(d,n),w=0,_=u.length;w<_;++w)(f=u[w])&&Ze(f,t,n,w,u,v);i.push(u),a.push(d)}return new Y(i,a,t,n)}var fa=le.prototype.constructor;function ha(){return new fa(this._groups,this._parents)}function pa(e,t){var n,r,s;return function(){var i=se(this,e),a=(this.style.removeProperty(e),se(this,e));return i===a?null:i===n&&a===r?s:s=t(n=i,r=a)}}function $n(e){return function(){this.style.removeProperty(e)}}function ga(e,t,n){var r,s=n+"",i;return function(){var a=se(this,e);return a===s?null:a===r?i:i=t(r=a,n)}}function ya(e,t,n){var r,s,i;return function(){var a=se(this,e),o=n(this),l=o+"";return o==null&&(l=o=(this.style.removeProperty(e),se(this,e))),a===l?null:a===r&&l===s?i:(s=l,i=t(r=a,o))}}function xa(e,t){var n,r,s,i="style."+t,a="end."+i,o;return function(){var l=D(this,e),c=l.on,d=l.value[i]==null?o||(o=$n(t)):void 0;(c!==n||s!==d)&&(r=(n=c).copy()).on(a,s=d),l.on=r}}function va(e,t,n){var r=(e+="")=="transform"?ki:In;return t==null?this.styleTween(e,pa(e,r)).on("end.style."+e,$n(e)):typeof t=="function"?this.styleTween(e,ya(e,r,At(this,"style."+e,t))).each(xa(this._id,e)):this.styleTween(e,ga(e,r,t),n).on("end.style."+e,null)}function ba(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function wa(e,t,n){var r,s;function i(){var a=t.apply(this,arguments);return a!==s&&(r=(s=a)&&ba(e,a,n)),r}return i._value=t,i}function ka(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,wa(e,t,n??""))}function _a(e){return function(){this.textContent=e}}function Ma(e){return function(){var t=e(this);this.textContent=t??""}}function Na(e){return this.tween("text",typeof e=="function"?Ma(At(this,"text",e)):_a(e==null?"":e+""))}function qa(e){return function(t){this.textContent=e.call(this,t)}}function Aa(e){var t,n;function r(){var s=e.apply(this,arguments);return s!==n&&(t=(n=s)&&qa(s)),t}return r._value=e,r}function Ea(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,Aa(e))}function La(){for(var e=this._name,t=this._id,n=Sn(),r=this._groups,s=r.length,i=0;i<s;++i)for(var a=r[i],o=a.length,l,c=0;c<o;++c)if(l=a[c]){var d=O(l,t);Ze(l,e,n,c,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Y(r,this._parents,e,n)}function Ia(){var e,t,n=this,r=n._id,s=n.size();return new Promise(function(i,a){var o={value:a},l={value:function(){--s===0&&i()}};n.each(function(){var c=D(this,r),d=c.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(o),t._.interrupt.push(o),t._.end.push(l)),c.on=t}),s===0&&i()})}var $a=0;function Y(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function Bn(e){return le().transition(e)}function Sn(){return++$a}var z=le.prototype;Y.prototype=Bn.prototype={constructor:Y,select:ua,selectAll:ma,selectChild:z.selectChild,selectChildren:z.selectChildren,filter:sa,merge:ia,selection:ha,transition:La,call:z.call,nodes:z.nodes,node:z.node,size:z.size,empty:z.empty,each:z.each,on:la,attr:zi,attrTween:ji,style:va,styleTween:ka,text:Na,textTween:Ea,remove:da,tween:Ci,delay:Ki,duration:Qi,ease:ta,easeVarying:ra,end:Ia,[Symbol.iterator]:z[Symbol.iterator]};function Ba(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Sa={time:null,delay:0,duration:250,ease:Ba};function Ta(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function Ca(e){var t,n;e instanceof Y?(t=e._id,e=e._name):(t=Sn(),(n=Sa).time=Nt(),e=e==null?null:e+"");for(var r=this._groups,s=r.length,i=0;i<s;++i)for(var a=r[i],o=a.length,l,c=0;c<o;++c)(l=a[c])&&Ze(l,e,t,c,a,n||Ta(l,t));return new Y(r,this._parents,e,t)}le.prototype.interrupt=Bi;le.prototype.transition=Ca;const pt=Math.PI,gt=2*pt,V=1e-6,Ha=gt-V;function Tn(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function Pa(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return Tn;const n=10**t;return function(r){this._+=r[0];for(let s=1,i=r.length;s<i;++s)this._+=Math.round(arguments[s]*n)/n+r[s]}}class Oa{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?Tn:Pa(t)}moveTo(t,n){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,n){this._append`L${this._x1=+t},${this._y1=+n}`}quadraticCurveTo(t,n,r,s){this._append`Q${+t},${+n},${this._x1=+r},${this._y1=+s}`}bezierCurveTo(t,n,r,s,i,a){this._append`C${+t},${+n},${+r},${+s},${this._x1=+i},${this._y1=+a}`}arcTo(t,n,r,s,i){if(t=+t,n=+n,r=+r,s=+s,i=+i,i<0)throw new Error(`negative radius: ${i}`);let a=this._x1,o=this._y1,l=r-t,c=s-n,d=a-t,m=o-n,u=d*d+m*m;if(this._x1===null)this._append`M${this._x1=t},${this._y1=n}`;else if(u>V)if(!(Math.abs(m*l-c*d)>V)||!i)this._append`L${this._x1=t},${this._y1=n}`;else{let f=r-a,v=s-o,w=l*l+c*c,_=f*f+v*v,M=Math.sqrt(w),g=Math.sqrt(u),h=i*Math.tan((pt-Math.acos((w+u-_)/(2*M*g)))/2),y=h/g,p=h/M;Math.abs(y-1)>V&&this._append`L${t+y*d},${n+y*m}`,this._append`A${i},${i},0,0,${+(m*f>d*v)},${this._x1=t+p*l},${this._y1=n+p*c}`}}arc(t,n,r,s,i,a){if(t=+t,n=+n,r=+r,a=!!a,r<0)throw new Error(`negative radius: ${r}`);let o=r*Math.cos(s),l=r*Math.sin(s),c=t+o,d=n+l,m=1^a,u=a?s-i:i-s;this._x1===null?this._append`M${c},${d}`:(Math.abs(this._x1-c)>V||Math.abs(this._y1-d)>V)&&this._append`L${c},${d}`,r&&(u<0&&(u=u%gt+gt),u>Ha?this._append`A${r},${r},0,1,${m},${t-o},${n-l}A${r},${r},0,1,${m},${this._x1=c},${this._y1=d}`:u>V&&this._append`A${r},${r},0,${+(u>=pt)},${m},${this._x1=t+r*Math.cos(i)},${this._y1=n+r*Math.sin(i)}`)}rect(t,n,r,s){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${r=+r}v${+s}h${-r}Z`}toString(){return this._}}function Ra(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Ue(e,t){if((n=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"))<0)return null;var n,r=e.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+e.slice(n+1)]}function ae(e){return e=Ue(Math.abs(e)),e?e[1]:NaN}function Da(e,t){return function(n,r){for(var s=n.length,i=[],a=0,o=e[0],l=0;s>0&&o>0&&(l+o+1>r&&(o=Math.max(1,r-l)),i.push(n.substring(s-=o,s+o)),!((l+=o+1)>r));)o=e[a=(a+1)%e.length];return i.reverse().join(t)}}function Fa(e){return function(t){return t.replace(/[0-9]/g,function(n){return e[+n]})}}var za=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Ge(e){if(!(t=za.exec(e)))throw new Error("invalid format: "+e);var t;return new Et({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}Ge.prototype=Et.prototype;function Et(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Et.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Ya(e){e:for(var t=e.length,n=1,r=-1,s;n<t;++n)switch(e[n]){case".":r=s=n;break;case"0":r===0&&(r=n),s=n;break;default:if(!+e[n])break e;r>0&&(r=0);break}return r>0?e.slice(0,r)+e.slice(s+1):e}var Cn;function Va(e,t){var n=Ue(e,t);if(!n)return e+"";var r=n[0],s=n[1],i=s-(Cn=Math.max(-8,Math.min(8,Math.floor(s/3)))*3)+1,a=r.length;return i===a?r:i>a?r+new Array(i-a+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+Ue(e,Math.max(0,t+i-1))[0]}function Wt(e,t){var n=Ue(e,t);if(!n)return e+"";var r=n[0],s=n[1];return s<0?"0."+new Array(-s).join("0")+r:r.length>s+1?r.slice(0,s+1)+"."+r.slice(s+1):r+new Array(s-r.length+2).join("0")}const jt={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:Ra,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>Wt(e*100,t),r:Wt,s:Va,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function Ut(e){return e}var Gt=Array.prototype.map,Kt=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Xa(e){var t=e.grouping===void 0||e.thousands===void 0?Ut:Da(Gt.call(e.grouping,Number),e.thousands+""),n=e.currency===void 0?"":e.currency[0]+"",r=e.currency===void 0?"":e.currency[1]+"",s=e.decimal===void 0?".":e.decimal+"",i=e.numerals===void 0?Ut:Fa(Gt.call(e.numerals,String)),a=e.percent===void 0?"%":e.percent+"",o=e.minus===void 0?"−":e.minus+"",l=e.nan===void 0?"NaN":e.nan+"";function c(m){m=Ge(m);var u=m.fill,f=m.align,v=m.sign,w=m.symbol,_=m.zero,M=m.width,g=m.comma,h=m.precision,y=m.trim,p=m.type;p==="n"?(g=!0,p="g"):jt[p]||(h===void 0&&(h=12),y=!0,p="g"),(_||u==="0"&&f==="=")&&(_=!0,u="0",f="=");var b=w==="$"?n:w==="#"&&/[boxX]/.test(p)?"0"+p.toLowerCase():"",q=w==="$"?r:/[%p]/.test(p)?a:"",N=jt[p],A=/[defgprs%]/.test(p);h=h===void 0?6:/[gprs]/.test(p)?Math.max(1,Math.min(21,h)):Math.max(0,Math.min(20,h));function L(x){var E=b,k=q,$,I,B;if(p==="c")k=N(x)+k,x="";else{x=+x;var T=x<0||1/x<0;if(x=isNaN(x)?l:N(Math.abs(x),h),y&&(x=Ya(x)),T&&+x==0&&v!=="+"&&(T=!1),E=(T?v==="("?v:o:v==="-"||v==="("?"":v)+E,k=(p==="s"?Kt[8+Cn/3]:"")+k+(T&&v==="("?")":""),A){for($=-1,I=x.length;++$<I;)if(B=x.charCodeAt($),48>B||B>57){k=(B===46?s+x.slice($+1):x.slice($))+k,x=x.slice(0,$);break}}}g&&!_&&(x=t(x,1/0));var K=E.length+x.length+k.length,F=K<M?new Array(M-K+1).join(u):"";switch(g&&_&&(x=t(F+x,F.length?M-k.length:1/0),F=""),f){case"<":x=E+x+k+F;break;case"=":x=E+F+x+k;break;case"^":x=F.slice(0,K=F.length>>1)+E+x+k+F.slice(K);break;default:x=F+E+x+k;break}return i(x)}return L.toString=function(){return m+""},L}function d(m,u){var f=c((m=Ge(m),m.type="f",m)),v=Math.max(-8,Math.min(8,Math.floor(ae(u)/3)))*3,w=Math.pow(10,-v),_=Kt[8+v/3];return function(M){return f(w*M)+_}}return{format:c,formatPrefix:d}}var Be,Hn,Pn;Wa({thousands:",",grouping:[3],currency:["$",""]});function Wa(e){return Be=Xa(e),Hn=Be.format,Pn=Be.formatPrefix,Be}function ja(e){return Math.max(0,-ae(Math.abs(e)))}function Ua(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(ae(t)/3)))*3-ae(Math.abs(e)))}function Ga(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,ae(t)-ae(e))+1}function Ka(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Ja(e){return function(){return e}}function Za(e){return+e}var Jt=[0,1];function Q(e){return e}function yt(e,t){return(t-=e=+e)?function(n){return(n-e)/t}:Ja(isNaN(t)?NaN:.5)}function Qa(e,t){var n;return e>t&&(n=e,e=t,t=n),function(r){return Math.max(e,Math.min(t,r))}}function eo(e,t,n){var r=e[0],s=e[1],i=t[0],a=t[1];return s<r?(r=yt(s,r),i=n(a,i)):(r=yt(r,s),i=n(i,a)),function(o){return i(r(o))}}function to(e,t,n){var r=Math.min(e.length,t.length)-1,s=new Array(r),i=new Array(r),a=-1;for(e[r]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++a<r;)s[a]=yt(e[a],e[a+1]),i[a]=n(t[a],t[a+1]);return function(o){var l=nn(e,o,1,r)-1;return i[l](s[l](o))}}function no(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function ro(){var e=Jt,t=Jt,n=Mt,r,s,i,a=Q,o,l,c;function d(){var u=Math.min(e.length,t.length);return a!==Q&&(a=Qa(e[0],e[u-1])),o=u>2?to:eo,l=c=null,m}function m(u){return u==null||isNaN(u=+u)?i:(l||(l=o(e.map(r),t,n)))(r(a(u)))}return m.invert=function(u){return a(s((c||(c=o(t,e.map(r),H)))(u)))},m.domain=function(u){return arguments.length?(e=Array.from(u,Za),d()):e.slice()},m.range=function(u){return arguments.length?(t=Array.from(u),d()):t.slice()},m.rangeRound=function(u){return t=Array.from(u),n=vi,d()},m.clamp=function(u){return arguments.length?(a=u?!0:Q,d()):a!==Q},m.interpolate=function(u){return arguments.length?(n=u,d()):n},m.unknown=function(u){return arguments.length?(i=u,m):i},function(u,f){return r=u,s=f,d()}}function so(){return ro()(Q,Q)}function io(e,t,n,r){var s=rr(e,t,n),i;switch(r=Ge(r??",f"),r.type){case"s":{var a=Math.max(Math.abs(e),Math.abs(t));return r.precision==null&&!isNaN(i=Ua(s,a))&&(r.precision=i),Pn(r,a)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(i=Ga(s,Math.max(Math.abs(e),Math.abs(t))))&&(r.precision=i-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(i=ja(s))&&(r.precision=i-(r.type==="%")*2);break}}return Hn(r)}function ao(e){var t=e.domain;return e.ticks=function(n){var r=t();return sn(r[0],r[r.length-1],n??10)},e.tickFormat=function(n,r){var s=t();return io(s[0],s[s.length-1],n??10,r)},e.nice=function(n){n==null&&(n=10);var r=t(),s=0,i=r.length-1,a=r[s],o=r[i],l,c,d=10;for(o<a&&(c=a,a=o,o=c,c=s,s=i,i=c);d-- >0;){if(c=re(a,o,n),c===l)return r[s]=a,r[i]=o,t(r);if(c>0)a=Math.floor(a/c)*c,o=Math.ceil(o/c)*c;else if(c<0)a=Math.ceil(a*c)/c,o=Math.floor(o*c)/c;else break;l=c}return e},e}function _e(){var e=so();return e.copy=function(){return no(e,_e())},Ka.apply(e,arguments),ao(e)}function J(e){return function(){return e}}function oo(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{const r=Math.floor(n);if(!(r>=0))throw new RangeError(`invalid digits: ${n}`);t=r}return e},()=>new Oa(t)}function lo(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function On(e){this._context=e}On.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function co(e){return new On(e)}function uo(e){return e[0]}function mo(e){return e[1]}function fo(e,t){var n=J(!0),r=null,s=co,i=null,a=oo(o);e=typeof e=="function"?e:e===void 0?uo:J(e),t=typeof t=="function"?t:t===void 0?mo:J(t);function o(l){var c,d=(l=lo(l)).length,m,u=!1,f;for(r==null&&(i=s(f=a())),c=0;c<=d;++c)!(c<d&&n(m=l[c],c,l))===u&&((u=!u)?i.lineStart():i.lineEnd()),u&&i.point(+e(m,c,l),+t(m,c,l));if(f)return i=null,f+""||null}return o.x=function(l){return arguments.length?(e=typeof l=="function"?l:J(+l),o):e},o.y=function(l){return arguments.length?(t=typeof l=="function"?l:J(+l),o):t},o.defined=function(l){return arguments.length?(n=typeof l=="function"?l:J(!!l),o):n},o.curve=function(l){return arguments.length?(s=l,r!=null&&(i=s(r)),o):s},o.context=function(l){return arguments.length?(l==null?r=i=null:i=s(r=l),o):r},o}function Zt(e,t,n){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+n)/6)}function Rn(e){this._context=e}Rn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Zt(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Zt(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function ho(e){return new Rn(e)}function he(e,t,n){this.k=e,this.x=t,this.y=n}he.prototype={constructor:he,scale:function(e){return e===1?this:new he(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new he(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};he.prototype;function po(){let e,t,n,r,s,i;const a=vt("change"),o=l=>{l.attr("class","accent-slate-600 py-2 sm:py-4"),l.selectAll("label").data([null]).join("label").attr("for",e).attr("class","pr-2").text(t),l.selectAll("input").data([null]).join("input").attr("type","range").attr("id",e).attr("min",n).attr("max",r).attr("value",i).on("change",c=>{l.selectAll("output").data([null]).join("output").attr("id",e).text(c.target.value),a.call("change",null,c.target.value)}),l.selectAll("output").data([null]).join("output").attr("id",e).attr("class","pl-2 sm:pl-4").text(i)};return o.id=function(l){return arguments.length?(e=l,o):e},o.labelText=function(l){return arguments.length?(t=l,o):t},o.min=function(l){return arguments.length?(n=+l,o):n},o.max=function(l){return arguments.length?(r=+l,o):r},o.step=function(l){return arguments.length?(s=+l,o):s},o.value=function(l){return arguments.length?(i=+l,o):i},o.on=function(){let l=a.on.apply(a,arguments);return l===a?o:l},o}function go(){let e,t,n,r,s,i,a,o,l,c,d="rgb(122, 255, 248, 0.7)",m=1.5,u=1,f,v=15,w=0,_=0,M=!1;const g=h=>{const y=h.selectAll("svg.box-plot").data([null]).join("svg").attr("class","box-plot").attr("width",e).attr("height",t);y.attr("font-family","sans-serif").attr("font-size",v);let p=te(r);p[0]=s??p[0],p[1]=i??p[1];const b=_e().domain(p).range([n.left,e-n.right]),q=et(r,.25),N=et(r,.5),A=et(r,.75),L=A-q;let x=q-L*1.5;const E=it(r);x=E>x?E:x;let k=A+L*1.5;const $=De(r);k=$<k?$:k;const I=r.filter(T=>T<x||T>k),B=h.selectAll("div.tooltip").data([null]).join("div").attr("class","p-2 text-white rounded-md border border-white border-opacity-50 shadow-sm pointer-events-none -translate-x-1/2 -translate-y-full font-sans text-xs bg-black bg-opacity-60 transition-opacity duration-200 ease-out transition-border-color duration-100 ease-out backdrop-blur-md").style("position","absolute").style("opacity",0);y.on("mouseover",function(T){const K=`
        Minimum: ${x.toFixed(2)}<br>
        25th percentile: ${q.toFixed(2)}<br>
        Median: ${N.toFixed(2)}<br>
        75th percentile: ${A.toFixed(2)}<br>
        Maximum: ${k.toFixed(2)}<br>
        Inter-quartile range: ${L.toFixed(2)}
        `;B.style("opacity",1).style("border-color",d).html(K)}).on("mouseout",()=>{B.style("opacity",0)}).on("mousemove",function(T){B.style("left",T.pageX+w+"px").style("top",T.pageY+_+"px")}),y.selectAll("circle").data(I).join("circle").attr("cx",T=>b(T)).attr("cy",()=>t/2+(Math.random()*(c/2)-c/4)).attr("r",f).attr("fill",d).attr("opacity",u).attr("stroke","black").attr("stroke-width",m),y.selectAll("rect").data([null]).join("rect").attr("x",b(q)).attr("y",t/2-c/2).attr("width",b(A)-b(q)).attr("height",c).attr("fill",d).attr("stroke","black").attr("stroke-width",m),y.selectAll("#median").data([null]).join("line").attr("id","median").attr("x1",b(N)).attr("y1",t/2-c/2).attr("x2",b(N)).attr("y2",t/2+c/2).attr("stroke","black").attr("stroke-width",m*2),y.selectAll("#lower-whisker").data([null]).join("line").attr("id","lower-whisker").attr("x1",b(x)).attr("y1",t/2).attr("x2",b(q)).attr("y2",t/2).attr("stroke","black").attr("stroke-width",m),y.selectAll("#lower-whisker-edge").data([null]).join("line").attr("id","lower-whisker-edge").attr("x1",b(x)).attr("y1",t/2-c/4).attr("x2",b(x)).attr("y2",t/2+c/4).attr("stroke","black").attr("stroke-width",m),y.selectAll("#upper-whisker").data([null]).join("line").attr("id","upper-whisker").attr("x1",b(A)).attr("y1",t/2).attr("x2",b(k)).attr("y2",t/2).attr("stroke","black").attr("stroke-width",m),y.selectAll("#upper-whisker-edge").data([null]).join("line").attr("id","upper-whisker-edge").attr("x1",b(k)).attr("y1",t/2-c/4).attr("x2",b(k)).attr("y2",t/2+c/4).attr("stroke","black").attr("stroke-width",m),M||(y.selectAll(".x-axis").data([null]).join("g").attr("class","x-axis").attr("transform",`translate(0,${t-n.bottom})`).call(on(b)),o&&y.selectAll(".x-axis-label").data([null]).join("text").attr("class","x-axis-label").attr("text-anchor","end").attr("x",e).attr("y",t-n.bottom/3).text(o).style("font-size",v*(3/4))),a!==void 0&&y.selectAll("#vLine").data([null]).join("line").attr("id","vLine").attr("x1",b(a)).attr("y1",t/2-c/2).attr("x2",b(a)).attr("y2",t/2+c/2).attr("stroke","red").attr("stroke-width",1.5),l&&y.selectAll(".title").data([null]).join("text").attr("class","title").text(l).attr("text-anchor","middle").attr("x",e/2).attr("y",n.top/2)};return g.width=function(h){return arguments.length?(e=+h,g):e},g.height=function(h){return arguments.length?(t=+h,g):t},g.margin=function(h){return arguments.length?(n=h,g):n},g.data=function(h){return arguments.length?(r=h,g):r},g.xMin=function(h){return arguments.length?(s=+h,g):s},g.xMax=function(h){return arguments.length?(i=+h,g):i},g.vLine=function(h){return arguments.length?(a=+h,g):a},g.xLabel=function(h){return arguments.length?(o=h,g):o},g.title=function(h){return arguments.length?(l=h,g):l},g.boxWidth=function(h){return arguments.length?(c=+h,g):c},g.color=function(h){return arguments.length?(d=h,g):d},g.strokeWidth=function(h){return arguments.length?(m=+h,g):m},g.opacity=function(h){return arguments.length?(u=+h,g):u},g.radius=function(h){return arguments.length?(f=+h,g):f},g.fontSize=function(h){return arguments.length?(v=+h,g):v},g.hoverOffsetX=function(h){return arguments.length?(w=+h,g):w},g.hoverOffsetY=function(h){return arguments.length?(_=+h,g):_},g.removeAxis=function(h){return arguments.length?(M=h,g):M},g}function yo(){let e,t,n,r,s,i,a,o,l,c,d=40,m,u="rgb(122, 255, 248, 0.7)",f=1,v,w,_=15;const M=p=>b=>Math.abs(b/=p)<=1?.75*(1-b*b)/p:0,g=(p,b,q)=>b.map(N=>[N,or(q,A=>p(N-A))]),h=(p,b,q)=>{const N=ar().domain(p.domain()).thresholds(b)(q);return De(N,A=>A.length)/q.length},y=p=>{const b=p.selectAll("svg.density-plot").data([null]).join("svg").attr("class","density-plot").attr("width",e).attr("height",t);b.attr("font-family","sans-serif").attr("font-size",_);let q=te(r);q[0]=s??q[0],q[1]=i??q[1];const N=_e().domain(q).range([n.left,e-n.right]),A=N.ticks(d),L=_e().domain([0,l||h(N,A,r)]).range([t-n.bottom,n.top]),x=g(M(m),A,r);x[0][1]!==0&&x.unshift([x[0][0],0]),x[x.length-1][1]!==0&&x.push([x[x.length-1][0],0]);const E=fo().curve(ho).x(I=>N(I[0])).y(I=>L(I[1])),k=Bn().duration(1e3);let $=b.selectAll("defs").data([null]).join("defs").append("linearGradient").attr("id","color-gradient");if(v&&w&&w.length===v.length+1){$.append("stop").attr("offset","0%").attr("stop-color",w[0]);for(let I=0;I<v.length;I++){let B=((v[I]-q[0])/(q[1]-q[0])*100).toFixed(2);B<0&&(B=0),B>100&&(B=100),$.append("stop").attr("offset",`${B}%`).attr("stop-color",w[I]),$.append("stop").attr("offset",`${B}%`).attr("stop-color",w[I+1])}$.append("stop").attr("offset","100%").attr("stop-color",w[w.length-1])}else $.append("stop").attr("offset","100%").attr("stop-color",u);b.selectAll("path").data([null]).join(I=>I.append("path").attr("stroke","black").attr("stroke-width",1.5).attr("stroke-linejoin","round").attr("opacity",f).attr("d",E(x)).style("fill","url(#color-gradient)"),I=>I.call(B=>B.transition(k).attr("d",E(x))),I=>I.remove()),b.selectAll(".y-axis").data([null]).join("g").attr("class","y-axis").attr("transform",`translate(${n.left},0)`).call(pr(L)),b.selectAll(".y-axis-label").data([null]).join("text").attr("class","y-axis-label").text("Density →").attr("text-anchor","end").attr("transform","rotate(-90)").attr("x",-n.top).attr("y",n.left/3).style("font-size",_*(3/4)),b.selectAll(".x-axis").data([null]).join("g").attr("class","x-axis").attr("transform",`translate(0,${t-n.bottom})`).call(on(N)),b.selectAll(".x-axis-label").data([null]).join("text").attr("class","x-axis-label").attr("text-anchor","end").attr("x",e).attr("y",t-n.bottom/3).text(a).style("font-size",_*(3/4)),c!==void 0&&b.selectAll(".vLine").data([null]).join("line").attr("class","vLine").attr("x1",N(c)).attr("y1",L(0)).attr("x2",N(c)).attr("y2",L(l)).attr("stroke","red").attr("stroke-width",1.5).attr("stroke-linejoin","round").attr("opacity",f),b.selectAll(".title").data([null]).join("text").attr("class","title").text(o).attr("text-anchor","middle").attr("x",e/2).attr("y",n.top/2)};return y.width=function(p){return arguments.length?(e=+p,y):e},y.height=function(p){return arguments.length?(t=+p,y):t},y.margin=function(p){return arguments.length?(n=p,y):n},y.data=function(p){return arguments.length?(r=p,y):r},y.xMin=function(p){return arguments.length?(s=+p,y):s},y.xMax=function(p){return arguments.length?(i=+p,y):i},y.xLabel=function(p){return arguments.length?(a=p,y):a},y.title=function(p){return arguments.length?(o=p,y):o},y.yMax=function(p){return arguments.length?(l=+p,y):l},y.vLine=function(p){return arguments.length?(c=+p,y):c},y.numBins=function(p){return arguments.length?(d=+p,y):d},y.bandwidth=function(p){return arguments.length?(m=+p,y):m},y.color=function(p){return arguments.length?(u=p,y):u},y.opacity=function(p){return arguments.length?(f=+p,y):f},y.cutoffs=function(p){return arguments.length?(v=p,y):v},y.cutoffColors=function(p){return arguments.length?(w=p,y):w},y.fontSize=function(p){return arguments.length?(_=+p,y):_},y}function xo(){let e,t,n,r,s,i,a,o,l="rgb(122, 255, 248, 0.7)",c=1.5,d=1,m=3,u=1.5,f=15,v=15,w=!1,_="Value";const M=(h,y)=>{const p=new Float64Array(h.length),b=y**2,q=.001;let N=null,A=null;const L=(x,E)=>{let k=N;for(;k;){const $=k.index;if(b-q>(h[$]-x)**2+(p[$]-E)**2)return!0;k=k.next}return!1};for(const x of Lt(h.length).sort((E,k)=>h[E]-h[k])){for(;N&&h[N.index]<h[x]-b;)N=N.next;if(L(h[x],p[x]=0)){let k=N;p[x]=1/0;do{const $=k.index;let I=p[$]+Math.sqrt(b-(h[$]-h[x])**2);I<p[x]&&!L(h[x],I)&&(p[x]=I),k=k.next}while(k)}const E={index:x,next:null};N===null?N=A=E:A=A.next=E}return p},g=h=>{const y=h.selectAll("svg.beeswarm-plot").data([null]).join("svg").attr("class","beeswarm-plot").attr("width",e).attr("height",t);y.attr("font-family","sans-serif").attr("font-size",v);let p=te(r);p[0]=s??p[0],p[1]=i??p[1];const b=_e().domain(p).range([n.left,e-n.right]),q=M(r.map(N=>b(N)),m*2+u).map(N=>N+n.top+f);y.selectAll("g.marker").data(Lt(r.length)).join("g").attr("class","marker").attr("transform",N=>`translate(${b(r[N])}, ${q[N]})`).each(function(N){const A=lt(this);A.append("circle").attr("r",m).attr("fill",l).attr("opacity",d).attr("stroke","black").attr("stroke-width",c);const L=7*_.length+25;A.append("rect").attr("x",m-L/2).attr("y",m+5).attr("width",L).attr("height",20).attr("fill","white").attr("stroke","black").attr("stroke-width",c),A.append("text").attr("x",m-L/2+5).attr("y",m+20).attr("font-size","12px").text(`${_}: ${r[N].toFixed(5)}`)}),w||(y.selectAll(".x-axis").data([null]).join("g").attr("class","x-axis").attr("transform",`translate(0,${n.top})`).call(hr(b)),a&&y.selectAll(".x-axis-label").data([null]).join("text").attr("class","x-axis-label").attr("text-anchor","end").attr("x",e).attr("y",n.top*(2/3)).text(a).style("font-size",v*(3/4)))};return g.width=function(h){return arguments.length?(e=+h,g):e},g.height=function(h){return arguments.length?(t=+h,g):t},g.margin=function(h){return arguments.length?(n=h,g):n},g.data=function(h){return arguments.length?(r=h,g):r},g.xMin=function(h){return arguments.length?(s=+h,g):s},g.xMax=function(h){return arguments.length?(i=+h,g):i},g.xLabel=function(h){return arguments.length?(a=h,g):a},g.title=function(h){return arguments.length?(o=h,g):o},g.color=function(h){return arguments.length?(l=h,g):l},g.strokeWidth=function(h){return arguments.length?(c=+h,g):c},g.opacity=function(h){return arguments.length?(d=+h,g):d},g.radius=function(h){return arguments.length?(m=+h,g):m},g.markerPadding=function(h){return arguments.length?(u=+h,g):u},g.plotPadding=function(h){return arguments.length?(f=+h,g):f},g.fontSize=function(h){return arguments.length?(v=+h,g):v},g.removeAxis=function(h){return arguments.length?(w=h,g):w},g.markerText=function(h){return arguments.length?(_=h,g):_},g}const Dn=document.querySelector("#app"),vo=new Worker("webWorker.js"),bo=1,wo=80,ko=0,_o=84,Mo=5,Se=Math.max(bo,ko),Te=Math.min(wo,_o)-Mo;Dn.innerHTML=`
  <div id="header" class="mx-auto max-w-7xl px-4 py-2 sm:px-6 sm:py-4 lg:px-8 bg-slate-900 rounded-b-lg">
    <div class="flex items-center justify-between">
      <div class="flex justify-start gap-2">
        <div class="flex items-center">
          <img src="${Fn}" class="h-12 w-12 sm:h-16 sm:w-16 gap-2 logo vanilla" alt="rose logo" />
        </div>
        <div class="min-w-0 flex-1">
          <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:tracking-tight">iCARE-Lit</h2>
          <p class="py-2 pr-2 text-sm sm:text-base text-white">Absolute risk estimator for breast cancer</p>
        </div>
      </div>
      
      <div class="flex md:mt-0 md:ml-4 shrink-0">
        <a title="Source code" href="https://github.com/jeyabbalas/icare-lit">
          <img src="${zn}" class="h-10 w-10 sm:h-12 sm:w-12 fill-current" alt="github logo" />
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
`;const Me=document.getElementById("age-menopause-container"),st=document.getElementById("children-container"),G=document.getElementById("births-container"),Ne=document.getElementById("hormone-treatment-current-container"),qe=document.getElementById("hormone-treatment-type-container"),Ae=document.getElementById("hormonal-contraceptive-container"),oe=document.getElementById("alcohol-container"),pe=document.getElementById("wine-container"),ge=document.getElementById("blc-container"),ye=document.getElementById("beer-container"),xe=document.getElementById("pop-container"),ve=document.getElementById("shots-container"),Z=document.getElementById("submit-btn"),Qt=document.getElementById("results");document.getElementById("menopause-yes").addEventListener("change",e=>{e.target.checked&&Me.classList.remove("hidden")});document.getElementById("menopause-no").addEventListener("change",e=>{e.target.checked&&!Me.classList.contains("hidden")&&Me.classList.add("hidden")});document.getElementById("menopause-unknown").addEventListener("change",e=>{e.target.checked&&!Me.classList.contains("hidden")&&Me.classList.add("hidden")});document.getElementById("num-pregnancies").addEventListener("input",e=>{parseInt(e.target.value)===0||e.target.value===""?(st.classList.contains("hidden")||st.classList.add("hidden"),G.classList.contains("hidden")||G.classList.add("hidden")):st.classList.remove("hidden")});document.getElementById("parous-yes").addEventListener("change",e=>{e.target.checked&&G.classList.remove("hidden")});document.getElementById("parous-no").addEventListener("change",e=>{e.target.checked&&!G.classList.contains("hidden")&&G.classList.add("hidden")});document.getElementById("parous-unknown").addEventListener("change",e=>{e.target.checked&&!G.classList.contains("hidden")&&G.classList.add("hidden")});document.getElementById("hormone-treatment-yes").addEventListener("change",e=>{e.target.checked&&Ne.classList.remove("hidden")});document.getElementById("hormone-treatment-no").addEventListener("change",e=>{e.target.checked&&!Ne.classList.contains("hidden")&&Ne.classList.add("hidden")});document.getElementById("hormone-treatment-unknown").addEventListener("change",e=>{e.target.checked&&!Ne.classList.contains("hidden")&&Ne.classList.add("hidden")});document.getElementById("hormone-treatment-current-yes").addEventListener("change",e=>{e.target.checked&&qe.classList.remove("hidden")});document.getElementById("hormone-treatment-current-no").addEventListener("change",e=>{e.target.checked&&!qe.classList.contains("hidden")&&qe.classList.add("hidden")});document.getElementById("hormone-treatment-current-unknown").addEventListener("change",e=>{e.target.checked&&!qe.classList.contains("hidden")&&qe.classList.add("hidden")});document.getElementById("hormonal-contraceptive-yes").addEventListener("change",e=>{e.target.checked&&Ae.classList.remove("hidden")});document.getElementById("hormonal-contraceptive-no").addEventListener("change",e=>{e.target.checked&&!Ae.classList.contains("hidden")&&Ae.classList.add("hidden")});document.getElementById("hormonal-contraceptive-unknown").addEventListener("change",e=>{e.target.checked&&!Ae.classList.contains("hidden")&&Ae.classList.add("hidden")});document.getElementById("alcohol-use-former").addEventListener("change",e=>{e.target.checked&&(oe.classList.remove("hidden"),document.getElementById("alcohol-type-label").innerHTML="Please select any of the following alcoholic beverages that you had in the 12 months <em>before</em> you stopped drinking.",document.getElementById("wine-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink wine?",document.getElementById("wine-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank wine, how many servings did you drink per day?",document.getElementById("blc-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink glasses of beer/lager/cider?",document.getElementById("blc-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank beer/lager/cider, how many servings did you drink per day?",document.getElementById("beer-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink bottles of beer?",document.getElementById("beer-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank beer, how many servings did you drink per day?",document.getElementById("pop-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually drink alcoholic pop beverages?",document.getElementById("pop-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank alcoholic pop beverages, how many servings did you drink per day?",document.getElementById("shots-freq-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, how often did you usually take shots of liquor?",document.getElementById("shot-serving-label").innerHTML="Over the 12 months <em>before</em> you stopped drinking, on the days that you drank liquor, how many servings did you drink per day?")});document.getElementById("alcohol-use-current").addEventListener("change",e=>{e.target.checked&&(oe.classList.remove("hidden"),document.getElementById("alcohol-type-label").innerHTML="Please select any of the following alcoholic beverages that you have had in the past 12 months.",document.getElementById("wine-freq-label").innerHTML="Over the past 12 months, how often did you usually drink wine?",document.getElementById("wine-serving-label").innerHTML="Over the past 12 months, on the days that you drank wine, how many servings did you drink per day?",document.getElementById("blc-freq-label").innerHTML="Over the past 12 months, how often did you usually drink glasses of beer/lager/cider?",document.getElementById("blc-serving-label").innerHTML="Over the past 12 months, on the days that you drank beer/lager/cider, how many servings did you drink per day?",document.getElementById("beer-freq-label").innerHTML="Over the past 12 months, how often did you usually drink bottles of beer?",document.getElementById("beer-serving-label").innerHTML="Over the past 12 months, on the days that you drank beer, how many servings did you drink per day?",document.getElementById("pop-freq-label").innerHTML="Over the past 12 months, how often did you usually drink alcoholic pop beverages?",document.getElementById("pop-serving-label").innerHTML="Over the past 12 months, on the days that you drank alcoholic pop beverages, how many servings did you drink per day?",document.getElementById("shots-freq-label").innerHTML="Over the past 12 months, how often did you usually take shots of liquor?",document.getElementById("shot-serving-label").innerHTML="Over the past 12 months, on the days that you drank liquor, how many servings did you drink per day?")});document.getElementById("alcohol-use-never").addEventListener("change",e=>{e.target.checked&&!oe.classList.contains("hidden")&&oe.classList.add("hidden")});document.getElementById("alcohol-use-unknown").addEventListener("change",e=>{e.target.checked&&!oe.classList.contains("hidden")&&oe.classList.add("hidden")});document.getElementById("alcohol-type-wine").addEventListener("change",e=>{e.target.checked?(pe.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):pe.classList.contains("hidden")||pe.classList.add("hidden")});document.getElementById("alcohol-type-blc").addEventListener("change",e=>{e.target.checked?(ge.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):ge.classList.contains("hidden")||ge.classList.add("hidden")});document.getElementById("alcohol-type-beer").addEventListener("change",e=>{e.target.checked?(ye.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):ye.classList.contains("hidden")||ye.classList.add("hidden")});document.getElementById("alcohol-type-pop").addEventListener("change",e=>{e.target.checked?(xe.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):xe.classList.contains("hidden")||xe.classList.add("hidden")});document.getElementById("alcohol-type-shots").addEventListener("change",e=>{e.target.checked?(ve.classList.remove("hidden"),document.getElementById("alcohol-type-unknown").checked=!1):ve.classList.contains("hidden")||ve.classList.add("hidden")});document.getElementById("alcohol-type-unknown").addEventListener("change",e=>{e.target.checked&&(document.getElementById("alcohol-type-wine").checked=!1,pe.classList.contains("hidden")||pe.classList.add("hidden"),document.getElementById("alcohol-type-blc").checked=!1,ge.classList.contains("hidden")||ge.classList.add("hidden"),document.getElementById("alcohol-type-beer").checked=!1,ye.classList.contains("hidden")||ye.classList.add("hidden"),document.getElementById("alcohol-type-pop").checked=!1,xe.classList.contains("hidden")||xe.classList.add("hidden"),document.getElementById("alcohol-type-shots").checked=!1,ve.classList.contains("hidden")||ve.classList.add("hidden"))});function No(e,t){return isNaN(e)&&isNaN(t)||isNaN(e)?void 0:(isNaN(t)&&(t=0),(e*12+t)*2.54/10)}function en(e,t,n,r){const s=a=>r?a<18.5?"<18.5":a<25?"18.5-25":a<30?"25-30":">=30":a<25?"<25":a<30?"25-30":">=30";if(isNaN(t)&&isNaN(n)||isNaN(t)||(isNaN(n)&&(n=0),isNaN(e)))return;const i=t*12+n;return s(e/(i*i)*703)}function qo(e){const t=n=>n<=10?"<=10":n===11?"11":n===12?"12":n===13?"13":n===14?"14":n===15?"15":">=16";if(!isNaN(e))return t(e)}function Ao(e,t,n){const r=s=>s===0?"0":s===1?"1":s===2?"2":">=3";if(!isNaN(e)){if(e===0)return r(0);if(!isNaN(t)){if(t===0)return r(0);if(!isNaN(n))return r(n)}}}function Eo(e,t,n,r){const s=i=>i<20?"<20":i<25?"20-25":i<30?"25-30":">=30";if(!(isNaN(e)||e===0||isNaN(t)||t===0||n===0||isNaN(r)))return s(r)}function Lo(e,t){if(!isNaN(e))return e===0?"never":isNaN(t)?void 0:t===0?"former":"current"}function Io(e){if(!isNaN(e))return e}function $o(e){if(!isNaN(e))return e}function Bo(e){if(!isNaN(e))return e}function So(e){if(!isNaN(e))return e}function To(e,t){const n=r=>r<40?"<40":r<45?"40-45":r<50?"45-50":r<55?"50-55":">=55";if(!(isNaN(e)||e===0||isNaN(t)))return n(t)}function Co(e,t,n){if(!(isNaN(e)||e===0||isNaN(t)||t===0||isNaN(n)))return n}function Ho(e,t,n,r,s,i,a,o,l,c,d,m){let u=0;const f=14,v=365.25,w=M=>M===0?"0":M<5?">0-5":M<15?"5-15":M<25?"15-25":M<35?"25-35":M<45?"35-45":">=45",_=M=>M==="lt-once-a-month"?0*12:M==="once-per-month"?12:M==="2-3-per-month"?2.5*12:M==="1-2-per-week"?1.5*52.14:M==="3-4-per-week"?3.5*52.14:M==="5-6-per-week"?5.5*52.14:M==="daily"?v:void 0;if(!(e===void 0||e==="")){if(e==="never")return w(u);if(!(t===void 0||t.length===0||t.includes(""))){if(t.includes("wine")){if(n===""||isNaN(r))return;u+=r*f*_(n)/v}if(t.includes("blc")){if(s===""||isNaN(i))return;u+=i*f*_(s)/v}if(t.includes("beer")){if(a===""||isNaN(o))return;u+=o*f*_(a)/v}if(t.includes("pop")){if(l===""||isNaN(c))return;u+=c*f*_(l)/v}if(t.includes("shots")){if(d===""||isNaN(m))return;u+=m*f*_(d)/v}return w(u)}}}function Po(e){const t=Object.fromEntries(e.entries()),n={};return n.id=t.name,n.age=parseInt(t.age),n.height=No(parseInt(t["height-feet"]),parseInt(t["height-inches"])),n.age_at_menarche=qo(parseInt(t.menarche)),n.parity=Ao(parseInt(t["num-pregnancies"]),parseInt(t.parous),parseInt(t.parity)),n.age_first_birth=Eo(parseInt(t["num-pregnancies"]),parseInt(t.parous),parseInt(t.parity),parseInt(t["age-first-child-birth"])),n.oc_ever=Io(parseInt(t["hormonal-contraceptive"])),n.alcohol_intake=Ho(t["alcohol-use"],e.getAll("alcohol-type"),t["wine-freq"],parseInt(t["wine-serving"]),t["blc-freq"],parseInt(t["blc-serving"]),t["beer-freq"],parseInt(t["beer-serving"]),t["pop-freq"],parseInt(t["pop-serving"]),t["shots-freq"],parseInt(t["shots-serving"])),n.bbd=Bo(parseInt(t["benign-breast-disease"])),n.famhist=So(parseInt(t["family-history"])),n.age>=50?(n.bmi_curc=en(parseFloat(t.weight),parseInt(t["height-feet"]),parseInt(t["height-inches"]),!1),n.age_at_menopause=To(parseInt(t.menopause),parseInt(t["age-menopause"])),n.hrt=Lo(parseInt(t["hormone-treatment"]),parseInt(t["hormone-treatment-current"])),n.hrt_type=Co(parseInt(t["hormone-treatment"]),parseInt(t["hormone-treatment-current"]),parseInt(t["hormone-treatment-type"]))):(n.bmi_curc=en(parseFloat(t.weight),parseInt(t["height-feet"]),parseInt(t["height-inches"]),!0),n.oc_current=$o(parseInt(t["hormonal-contraceptive-current"]))),n}function Oo(e,t,n){e.innerHTML=`
    <div>
      <h1 class="text-lg px-4 pt-2 sm:pt-4 lg:pt-6">${n}'s estimated 5-year absolute risk of breast cancer: <span class="border-2 border-red-500 rounded-lg px-2">${t.profileRisk.toFixed(5)}</span></h1>
      <h1 class="text-lg px-4 pt-4 pb-2 sm:pb-4 lg:pb-6"> Here's how ${n}'s estimated 5-year absolute risk compares to the US population:</h1>
    </div>
    `;const r=300,s=100,i=75,a=e.clientWidth,o={left:50,right:10},l=0-.02,c=Math.max(.18,t.profileRisk)+.02,d=7,m=1e5,u=lt(e);u.attr("class","pr-10 py-4");const f=u.append("div").attr("class","slider-container"),v=yo().width(a).height(r).margin({top:50,right:o.right,bottom:50,left:o.left}).data(t.populationRisks).xMin(l).xMax(c).yMax(40).vLine(t.profileRisk).xLabel("Absolute risk →").title("Distribution of the 5-year absolute risk of breast cancer in the US population").bandwidth(d/m),w=go().width(a).height(s).margin({top:0,right:o.right,bottom:0,left:o.left}).data(t.populationRisks).xMin(l).xMax(c).vLine(t.profileRisk).boxWidth(30).radius(1).hoverOffsetX(80).hoverOffsetY(100).removeAxis(!0),_=xo().width(a).height(i).margin({top:5,right:o.right,bottom:0,left:o.left}).data([t.profileRisk]).xMin(l).xMax(c).radius(7).markerPadding(2).markerText(`${n}'s estimated absolute risk`).color("#FF0000").plotPadding(7).removeAxis(!0);u.call(v),u.call(w),u.call(_),f.call(po().id("bandwidth").labelText("Bandwidth: ").min(1).max(50).step(1).value(d).on("change",y=>{u.call(v.bandwidth(y/m))}));const M=u.append("div").attr("class","flex flex-row justify-center items-center mt-4"),g=M.append("button").attr("class","rounded-md border border-transparent bg-slate-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 py-2 px-4 mr-2").text("Download plot as PNG"),h=M.append("button").attr("class","rounded-md border border-transparent bg-slate-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 py-2 px-4").text("Download results as JSON");g.on("click",()=>{const y=lt(e).selectAll("svg"),p=document.createElement("canvas"),b=p.getContext("2d");function q(A){return new Promise(L=>{const x=new Image,E=new Blob([A],{type:"image/svg+xml;charset=utf-8"}),k=URL.createObjectURL(E);x.onload=()=>{L(x)},x.src=k})}const N=y.nodes().map(A=>new XMLSerializer().serializeToString(A));Promise.all(N.map(A=>q(A))).then(A=>{let L=0;p.width=Math.max(...A.map(k=>k.width)),p.height=A.reduce((k,$)=>k+$.height,0),b.fillStyle="white",b.fillRect(0,0,p.width,p.height);for(const k of A)b.drawImage(k,0,L),L+=k.height;const x=p.toDataURL("image/png"),E=document.createElement("a");E.href=x,E.download=`icare-lit_risk_plot_${n}.png`,document.body.appendChild(E),E.click(),document.body.removeChild(E)})}),h.on("click",()=>{const y="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t,null,2)),p=document.createElement("a");p.setAttribute("href",y),p.setAttribute("download",`icare-lit_output_${n}.json`),document.body.appendChild(p),p.click(),p.remove()})}Dn.addEventListener("submit",e=>{e.preventDefault(),Z.innerHTML=`<svg class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l1-1.647z"></path>
      </svg>Calculating...`,Z.classList.add("cursor-not-allowed"),Z.disabled=!0;const t=new FormData(e.target),n=Po(t);vo.postMessage(n),console.log(n);const r={};r.populationRisks=[.06268705621300674,.06985544781675102,.06420716781315527,.06357496275800009,.09034930355983407,.07187698895796937,.09116516578745766,.0842421691113666,.08432320731015194,.06436679294493725,.11134636825220658,.0925365829768286,.09284563317523976,.12388874031357318,.11498805883255396,.06058540553788736,.07662170963658609,.08801284021759458,.10086168942994496,.0866820984796862,.10469033809012741,.0807324646897301,.09570231792701187,.07637821535429662,.19732217505432997,.057142772069325797,.07789780952212431,.08545423514611636,.13042154130912745,.06717185640670569,.12380196431974635,.10740505086998156,.10099976554935523,.08149035800961656,.21847356767084483,.06687595974605469,.08727434369365632,.08742240518327732,.07481986638931754,.08089184494820913,.10625724467379918,.0613898540394232,.11483569256637757,.0658658814391023,.06890007597880737,.053023256620995704,.1129479287558172,.09672002882609736,.09695617459091843,.07621741491175424,.12479918753451338,.05810084943331084,.10351801157048879,.06869563095048498,.09803622469521568,.062017234933736926,.08802732200538639,.11815488401369689,.08689136459428051,.1894759157036423,.07328106218584247,.11315580703752147,.15232412313922275,.1096215977416084,.05146163849630005,.10462962432390345,.07699540565432719,.1465076494525544,.15596927786487894,.07791559719293763,.10601803466626178,.0813172186766127,.06961116682044834,.11327866674641324,.11321250416027266,.09909511972459945,.08441436801349021,.13761319950001702,.04777095797774448,.09333318238503766,.09018324972702861,.09015606571249256,.17049175851455262,.08554036853379748,.15017600703564815,.1995461427234165,.05538729348148224,.05471910916172543,.055662476404608155,.07245985036186597,.14018733557247168,.13695773643732662,.07444921813524527,.10060324753972895],r.profileRisk=.09737466832126535,Oo(Qt,r,n.id),Qt.scrollIntoView({behavior:"smooth",block:"start"}),Z.innerHTML="Estimate risk",Z.classList.remove("cursor-not-allowed"),Z.disabled=!1});
