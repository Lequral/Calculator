(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function $(){}function oe(e){return e()}function Y(){return Object.create(null)}function T(e){e.forEach(oe)}function ie(e){return typeof e=="function"}function j(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ae(e){return Object.keys(e).length===0}function fe(e,...t){if(e==null)return $;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function L(e,t,n){e.$$.on_destroy.push(fe(t,n))}function y(e,t){e.appendChild(t)}function U(e,t,n){e.insertBefore(t,n||null)}function q(e){e.parentNode&&e.parentNode.removeChild(e)}function he(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function V(e){return document.createTextNode(e)}function O(){return V(" ")}function P(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function de(e){return Array.from(e.childNodes)}function le(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Z(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function ee(e,t,n){e.classList[n?"add":"remove"](t)}let W;function I(e){W=e}const A=[],te=[],X=[],ne=[],pe=Promise.resolve();let Q=!1;function ve(){Q||(Q=!0,pe.then(ue))}function R(e){X.push(e)}const J=new Set;let H=0;function ue(){const e=W;do{for(;H<A.length;){const t=A[H];H++,I(t),me(t.$$)}for(I(null),A.length=0,H=0;te.length;)te.pop()();for(let t=0;t<X.length;t+=1){const n=X[t];J.has(n)||(J.add(n),n())}X.length=0}while(A.length);for(;ne.length;)ne.pop()();Q=!1,J.clear(),I(e)}function me(e){if(e.fragment!==null){e.update(),T(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(R)}}const D=new Set;let M;function _e(){M={r:0,c:[],p:M}}function ge(){M.r||T(M.c),M=M.p}function k(e,t){e&&e.i&&(D.delete(e),e.i(t))}function S(e,t,n,r){if(e&&e.o){if(D.has(e))return;D.add(e),M.c.push(()=>{D.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function G(e){e&&e.c()}function K(e,t,n,r){const{fragment:s,after_update:o}=e.$$;s&&s.m(t,n),r||R(()=>{const c=e.$$.on_mount.map(oe).filter(ie);e.$$.on_destroy?e.$$.on_destroy.push(...c):T(c),e.$$.on_mount=[]}),o.forEach(R)}function F(e,t){const n=e.$$;n.fragment!==null&&(T(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(e,t){e.$$.dirty[0]===-1&&(A.push(e),ve(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function z(e,t,n,r,s,o,c,i=[-1]){const a=W;I(e);const l=e.$$={fragment:null,ctx:[],props:o,update:$,not_equal:s,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:Y(),dirty:i,skip_bound:!1,root:t.target||a.$$.root};c&&c(l.root);let m=!1;if(l.ctx=n?n(e,t.props||{},(_,d,...p)=>{const u=p.length?p[0]:d;return l.ctx&&s(l.ctx[_],l.ctx[_]=u)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](u),m&&ye(e,_)),d}):[],l.update(),m=!0,T(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const _=de(t.target);l.fragment&&l.fragment.l(_),_.forEach(q)}else l.fragment&&l.fragment.c();t.intro&&k(e.$$.fragment),K(e,t.target,t.anchor,t.customElement),ue()}I(a)}class B{$destroy(){F(this,1),this.$destroy=$}$on(t,n){if(!ie(n))return $;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!ae(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const E=[];function ce(e,t=$){let n;const r=new Set;function s(i){if(j(e,i)&&(e=i,n)){const a=!E.length;for(const l of r)l[1](),E.push(l,e);if(a){for(let l=0;l<E.length;l+=2)E[l][0](E[l+1]);E.length=0}}}function o(i){s(i(e))}function c(i,a=$){const l=[i,a];return r.add(l),r.size===1&&(n=t(s)||$),i(e),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:s,update:o,subscribe:c}}const be=()=>{const{subscribe:e,update:t}=ce(1);return{subscribe:e,next:()=>t(n=>n===3?1:n+1)}},C=be();/*!
Math Evaluator by morriswmz (https://github.com/morriswmz/MathEvaluator.js)
===========================
Based on http://effbot.org/zone/simple-top-down-parsing.htm
*/const we=function(){var e={},t={sin:Math.sin,cos:Math.cos,tan:Math.tan,cot:function(u){return 1/Math.tan(u)},asin:Math.asin,acos:Math.acos,atan:Math.atan,atan2:Math.atan2,sqrt:Math.sqrt,exp:Math.exp,log:Math.log,floor:Math.floor,round:Math.round,ceil:Math.ceil,rand:function(){return Math.random()},sum:function(u,f,h){var v=0,b;for(h<0&&(h=0),h=h||1,b=u;b<=f;b+=h)v+=b;return v}};function n(u,f){f=f??0;var h=function(){};return h.prototype.id=u,h.prototype.lbp=f,h.prototype.nud=function(){throw new Error("Syntax error near %1.".replace("%1",this.id))},h.prototype.led=function(){throw new Error("Unknown operator %1.".replace("%1",this.id))},h.prototype.val=function(){throw new Error("Unknown operation with %1.".replace("%1",this.id))},h.prototype._repr=function(){var v=this;if(v.id=="(literal)")return"(%1 %2)".replace("%1",v.id).replace("%2",v.val);var b=[v.id];return["first","second","third"].forEach(function(x){v[x]&&(v[x]._repr?b.push(v[x]._repr()):b.push(v[x].toString()))}),"("+b.join(" ")+")"},e[u]=h,h}function r(u,f){var h=e[u];h&&(h.prototype.led=function(v){return this.first=v,this.second=l(f),this})}function s(u,f){var h=e[u];h&&(h.prototype.led=function(v){return this.first=v,this.second=l(f-1),this})}function o(u,f){var h=e[u];h&&(h.prototype.nud=function(){return this.first=l(f),this})}function c(u,f){var h=e[u];h&&(h.prototype.val=f)}var i,a;function l(u){var f=i;i=m();for(var h=f.nud();u<i.lbp;)f=i,i=m(),h=f.led(h);return h}function m(){return a.shift()}function _(u){if(u&&i.id!=u)throw new Error("Expected %1".replace("%1",u));i=m()}var d={whitespace:{r:/^(\s+)/,f:function(u){}},separator:{r:/^(,)/,f:function(u){var f=new e[","];return f}},operator:{r:/^([+\-*\/\^%]|>{2,3}|<<)/,f:function(u){return new e[u]}},bracket:{r:/^(\(|\))/,f:function(u){return new e[u]}},hex:{r:/^(0x[0-9a-f]+)/,f:function(u){var f=new e["(literal)"];return f.value=parseInt(u),f}},bin:{r:/^(0b[01]+)/,f:function(u){}},float:{r:/^(\d*\.\d+(e\d+)*)/,f:function(u){var f=new e["(literal)"];return f.value=parseFloat(u),f}},integer:{r:/^(\d+)/,f:function(u){var f=new e["(literal)"];return f.value=parseInt(u),f}},name:{r:/^(\w+)/,f:function(u){var f;return u=="e"?(f=new e["(literal)"],f.value=Math.E):u=="pi"?(f=new e["(literal)"],f.value=Math.PI):(f=new e["(name)"],f.value=u),f}}};function p(u){a=[];var f,h,v,b,x;for(f=0;u.length>0;){h=!1;for(v in d)if(b=u.match(d[v].r),b&&b[1]){h=!0,x=d[v].f(b[1]),x&&a.push(x),f+=b[1].length,u=u.slice(b[1].length);break}if(!h)throw new Error('Unknow syntax at "'+u+'"')}a.push(new e["(end)"]),i=a.shift()}return n("(literal)",null).prototype.nud=function(){return this},n("(name)",null).prototype.nud=function(){return this},n("<<",100),n(">>",100),n(">>>",100),n("+",110),n("-",110),n("*",120),n("/",120),n("%",120),n("^",130),n("(",150),n(")",null),e["("].prototype.nud=function(){var u=l(0);return _(")"),u},e["("].prototype.led=function(u){if(this.first=u,this.second=[],i.id!=")")for(;this.second.push(l(0)),i.id==",";)_(",");return _(")"),this},n(",",null),n("(end)",null),r("<<",100),r(">>",100),r(">>>",100),r("+",110),r("-",110),r("*",120),r("/",120),r("%",120),s("^",140),o("+",130),o("-",130),c("(literal)",function(){return this.value}),c("+",function(){return this.second!=null?this.first.val()+this.second.val():this.first.val()}),c("-",function(){return this.second!=null?this.first.val()-this.second.val():-this.first.val()}),c("*",function(){return this.first.val()*this.second.val()}),c("/",function(){return this.first.val()/this.second.val()}),c("%",function(){return this.first.val()%this.second.val()}),c("^",function(){return Math.pow(this.first.val(),this.second.val())}),c("<<",function(){return this.first.val()<<this.second.val()}),c(">>",function(){return this.first.val()>>this.second.val()}),c(">>>",function(){return this.first.val()>>>this.second.val()}),c("(",function(){var u=t[this.first.value],f=[];if(!(u instanceof Function))throw new Error("Unknown function %1.".replace("%1",this.first.value));for(var h=0,v=this.second.length;h<v;h++)f.push(this.second[h].val());return u.apply(null,f)}),{evaluate:function(u){var f,h={success:!0,answer:0,msg:null};try{p(u.toLowerCase()),f=l(0),h.answer=f.val()}catch(v){h.success=!1,h.msg=v.toString()}return h}}}();function $e(){const{subscribe:e,update:t,set:n}=ce("0");return{subscribe:e,append:r=>t(s=>s==="0"?r:s.concat(r)),delete:()=>t(r=>1<r.length?r.slice(0,r.length-1):"0"),evaluate:()=>t(r=>{const s=we.evaluate(r);return s.success?s.answer.toString():s.msg}),reset:()=>n("0")}}const N=$e();function xe(e){let t,n,r,s,o,c;return{c(){t=w("button"),n=w("p"),r=V(e[1]),g(n,"class","svelte-90vr77"),g(t,"class",s=e[0]+" "+e[3]+" theme"+e[4]+" svelte-90vr77"),ee(t,"pressed",e[2])},m(i,a){U(i,t,a),y(t,n),y(n,r),o||(c=[P(t,"mousedown",e[5]),P(t,"mouseup",e[6]),P(t,"mouseleave",e[6]),P(t,"click",e[7])],o=!0)},p(i,[a]){a&2&&le(r,i[1]),a&25&&s!==(s=i[0]+" "+i[3]+" theme"+i[4]+" svelte-90vr77")&&g(t,"class",s),a&29&&ee(t,"pressed",i[2])},i:$,o:$,d(i){i&&q(t),o=!1,T(c)}}}function ke(e,t,n){let r;L(e,C,d=>n(4,r=d));let{value:s}=t,{color:o="white"}=t,c;s==="*"?c="x":c=s;let i=!1,a;s==="reset"||s==="="?a="long":a="short";const l=()=>n(2,i=!0),m=()=>n(2,i=!1),_=()=>{s==="del"?N.delete():s==="reset"?N.reset():s==="="?N.evaluate():N.append(s)};return e.$$set=d=>{"value"in d&&n(8,s=d.value),"color"in d&&n(0,o=d.color)},[o,c,i,a,r,l,m,_,s]}class Me extends B{constructor(t){super(),z(this,t,ke,xe,j,{value:8,color:0})}}function re(e,t,n){const r=e.slice();return r[3]=t[n],r[5]=n,r}function se(e){let t,n;return t=new Me({props:{value:e[3],color:e[2][e[5]]}}),{c(){G(t.$$.fragment)},m(r,s){K(t,r,s),n=!0},p:$,i(r){n||(k(t.$$.fragment,r),n=!0)},o(r){S(t.$$.fragment,r),n=!1},d(r){F(t,r)}}}function Ee(e){let t,n,r,s=e[1],o=[];for(let i=0;i<s.length;i+=1)o[i]=se(re(e,s,i));const c=i=>S(o[i],1,1,()=>{o[i]=null});return{c(){t=w("div");for(let i=0;i<o.length;i+=1)o[i].c();g(t,"class",n="keypad theme"+e[0]+" svelte-18ts7nm")},m(i,a){U(i,t,a);for(let l=0;l<o.length;l+=1)o[l].m(t,null);r=!0},p(i,[a]){if(a&6){s=i[1];let l;for(l=0;l<s.length;l+=1){const m=re(i,s,l);o[l]?(o[l].p(m,a),k(o[l],1)):(o[l]=se(m),o[l].c(),k(o[l],1),o[l].m(t,null))}for(_e(),l=s.length;l<o.length;l+=1)c(l);ge()}(!r||a&1&&n!==(n="keypad theme"+i[0]+" svelte-18ts7nm"))&&g(t,"class",n)},i(i){if(!r){for(let a=0;a<s.length;a+=1)k(o[a]);r=!0}},o(i){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)S(o[a]);r=!1},d(i){i&&q(t),he(o,i)}}}function Se(e,t,n){let r;return L(e,C,c=>n(0,r=c)),[r,["7","8","9","del","4","5","6","+","1","2","3","-",".","0","/","*","reset","="],{3:"blue",16:"blue",17:"red"}]}class Le extends B{constructor(t){super(),z(this,t,Se,Ee,j,{})}}function Te(e){let t,n,r,s;return{c(){t=w("div"),n=w("h1"),r=V(e[1]),g(n,"class","svelte-emjp4q"),g(t,"class",s="theme"+e[0]+" svelte-emjp4q")},m(o,c){U(o,t,c),y(t,n),y(n,r)},p(o,[c]){c&2&&le(r,o[1]),c&1&&s!==(s="theme"+o[0]+" svelte-emjp4q")&&g(t,"class",s)},i:$,o:$,d(o){o&&q(t)}}}function je(e,t,n){let r,s;return L(e,C,o=>n(0,r=o)),L(e,N,o=>n(1,s=o)),[r,s]}class qe extends B{constructor(t){super(),z(this,t,je,Te,j,{})}}function Ce(e){let t,n,r,s,o,c,i,a,l,m,_;return{c(){t=w("div"),n=w("ul"),n.innerHTML=`<li class="svelte-1kc9xy2">1</li> 
        <li class="svelte-1kc9xy2">2</li> 
        <li class="svelte-1kc9xy2">3</li>`,r=O(),s=w("div"),o=w("label"),o.textContent="theme",c=O(),i=w("button"),a=w("div"),g(n,"class","legend svelte-1kc9xy2"),g(o,"for","theme-changer"),g(a,"class","cursor svelte-1kc9xy2"),g(i,"id","theme-changer"),g(i,"tabindex","0"),Z(i,"justify-content",e[1]),g(i,"class",l="theme"+e[0]+" svelte-1kc9xy2"),g(s,"class","interactible svelte-1kc9xy2"),g(t,"class","container svelte-1kc9xy2")},m(d,p){U(d,t,p),y(t,n),y(t,r),y(t,s),y(s,o),y(s,c),y(s,i),y(i,a),m||(_=P(i,"click",C.next),m=!0)},p(d,[p]){p&2&&Z(i,"justify-content",d[1]),p&1&&l!==(l="theme"+d[0]+" svelte-1kc9xy2")&&g(i,"class",l)},i:$,o:$,d(d){d&&q(t),m=!1,_()}}}function Pe(e,t,n){let r,s;return L(e,C,o=>n(0,s=o)),e.$$.update=()=>{e.$$.dirty&1&&n(1,r=["flex-start","center","flex-end"][s-1])},[s,r]}class Ae extends B{constructor(t){super(),z(this,t,Pe,Ce,j,{})}}function Ne(e){let t,n,r,s,o,c,i,a,l,m,_,d;return c=new Ae({}),a=new qe({}),m=new Le({}),{c(){t=w("div"),n=w("main"),r=w("header"),s=w("h4"),s.textContent="calc",o=O(),G(c.$$.fragment),i=O(),G(a.$$.fragment),l=O(),G(m.$$.fragment),g(r,"class","svelte-odx06"),g(n,"class","svelte-odx06"),g(t,"class",_="body theme"+e[0]+" svelte-odx06")},m(p,u){U(p,t,u),y(t,n),y(n,r),y(r,s),y(r,o),K(c,r,null),y(n,i),K(a,n,null),y(n,l),K(m,n,null),d=!0},p(p,[u]){(!d||u&1&&_!==(_="body theme"+p[0]+" svelte-odx06"))&&g(t,"class",_)},i(p){d||(k(c.$$.fragment,p),k(a.$$.fragment,p),k(m.$$.fragment,p),d=!0)},o(p){S(c.$$.fragment,p),S(a.$$.fragment,p),S(m.$$.fragment,p),d=!1},d(p){p&&q(t),F(c),F(a),F(m)}}}function Oe(e,t,n){let r;return L(e,C,s=>n(0,r=s)),[r]}class Ie extends B{constructor(t){super(),z(this,t,Oe,Ne,j,{})}}new Ie({target:document.querySelector("body")});
