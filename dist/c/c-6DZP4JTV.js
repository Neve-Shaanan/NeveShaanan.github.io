import{c as A,d as nt}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-4CBYAHYF.js";import{a as U,b as et}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-MMBBW6C3.js";import{c as D,d as tt}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-PVHBLK4X.js";import{a as _,b as Z}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-QNC3MJCF.js";import{b as N,c as Y}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-ZSMXGSRM.js";import{a as X}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-DTXEJGZZ.js";import{a as V,b as Q,d as B}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-YAALJKSE.js";var K=Q((ot,M)=>{"use strict";(function(){function o(t,n){document.addEventListener?t.addEventListener("scroll",n,!1):t.attachEvent("scroll",n)}function i(t){document.body?t():document.addEventListener?document.addEventListener("DOMContentLoaded",function n(){document.removeEventListener("DOMContentLoaded",n),t()}):document.attachEvent("onreadystatechange",function n(){(document.readyState=="interactive"||document.readyState=="complete")&&(document.detachEvent("onreadystatechange",n),t())})}function a(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function r(t,n){t.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+n+";"}function d(t){var n=t.a.offsetWidth,e=n+100;return t.f.style.width=e+"px",t.c.scrollLeft=e,t.b.scrollLeft=t.b.scrollWidth+100,t.g!==n?(t.g=n,!0):!1}function z(t,n){function e(){var f=C;d(f)&&f.a.parentNode&&n(f.g)}var C=t;o(t.b,e),o(t.c,e),d(t)}function y(t,n){var e=n||{};this.family=t,this.style=e.style||"normal",this.weight=e.weight||"normal",this.stretch=e.stretch||"normal"}var S=null,v=null,E=null,W=null;function H(){if(v===null)if(L()&&/Apple/.test(window.navigator.vendor)){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);v=!!t&&603>parseInt(t[1],10)}else v=!1;return v}function L(){return W===null&&(W=!!document.fonts),W}function q(){if(E===null){var t=document.createElement("div");try{t.style.font="condensed 100px sans-serif"}catch{}E=t.style.font!==""}return E}function g(t,n){return[t.style,t.weight,q()?t.stretch:"","100px",n].join(" ")}y.prototype.load=function(t,n){var e=this,C=t||"BESbswy",f=0,b=n||3e3,F=new Date().getTime();return new Promise(function(P,O){if(L()&&!H()){var G=new Promise(function(x,w){function h(){new Date().getTime()-F>=b?w(Error(""+b+"ms timeout exceeded")):document.fonts.load(g(e,'"'+e.family+'"'),C).then(function(p){1<=p.length?x():setTimeout(h,25)},w)}h()}),J=new Promise(function(x,w){f=setTimeout(function(){w(Error(""+b+"ms timeout exceeded"))},b)});Promise.race([J,G]).then(function(){clearTimeout(f),P(e)},O)}else i(function(){function x(){var s;(s=l!=-1&&u!=-1||l!=-1&&m!=-1||u!=-1&&m!=-1)&&((s=l!=u&&l!=m&&u!=m)||(S===null&&(s=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),S=!!s&&(536>parseInt(s[1],10)||parseInt(s[1],10)===536&&11>=parseInt(s[2],10))),s=S&&(l==T&&u==T&&m==T||l==j&&u==j&&m==j||l==$&&u==$&&m==$)),s=!s),s&&(c.parentNode&&c.parentNode.removeChild(c),clearTimeout(f),P(e))}function w(){if(new Date().getTime()-F>=b)c.parentNode&&c.parentNode.removeChild(c),O(Error(""+b+"ms timeout exceeded"));else{var s=document.hidden;(s===!0||s===void 0)&&(l=h.a.offsetWidth,u=p.a.offsetWidth,m=I.a.offsetWidth,x()),f=setTimeout(w,50)}}var h=new a(C),p=new a(C),I=new a(C),l=-1,u=-1,m=-1,T=-1,j=-1,$=-1,c=document.createElement("div");c.dir="ltr",r(h,g(e,"sans-serif")),r(p,g(e,"serif")),r(I,g(e,"monospace")),c.appendChild(h.a),c.appendChild(p.a),c.appendChild(I.a),document.body.appendChild(c),T=h.a.offsetWidth,j=p.a.offsetWidth,$=I.a.offsetWidth,w(),z(h,function(s){l=s,x()}),r(h,g(e,'"'+e.family+'",sans-serif')),z(p,function(s){u=s,x()}),r(p,g(e,'"'+e.family+'",serif')),z(I,function(s){m=s,x()}),r(I,g(e,'"'+e.family+'",monospace'))})})},typeof M=="object"?M.exports=y:(window.FontFaceObserver=y,window.FontFaceObserver.prototype.load=y.prototype.load)})()});var k,R,it,lt,st=V(()=>{k=B(X());nt();R=B(K());tt();Y();et();Z();it=A.extend({initialize:function(){A.prototype.initialize.apply(this,arguments),this.is_above&&this.mag.on("destroyed",this.destroy),this["bar-auto-open"]&&(this.mag.eCommerceCartManager.openSidebarOnAddItem=!0),this.mag.eCommerceManager.setCartWidgetExistState(!0)},render:function(){let o=!1;if(RM.screenshot)window.ServerData.userPermissions&&window.ServerData.userPermissions.can_use_e_commerce&&(o=!0);else{let i=U.getPermissions();i&&i.can_use_e_commerce&&(o=!0)}if(o){if(A.prototype.render.apply(this,[{withoutHoverCursor:!0}]),this.$el.addClass("e-com-cart-button"),!RM.screenshot){_.on("ecommerce:cartdata:changed",this.renderTotalItems);let i=this["font-family"];i&&!N.systemFontsList.includes(i.toLowerCase())?new R.default(this["font-family"]).load().then(()=>{this.renderTotalItems(this.mag.eCommerceCartManager.getCartData())}).catch(()=>{this.renderTotalItems(this.mag.eCommerceCartManager.getCartData())}):this.renderTotalItems(this.mag.eCommerceCartManager.getCartData())}return this}},renderTotalItems:function(o){if(!o||!o.skus&&!o.prices)return;let i=0;for(let d in o.skus)o.skus.hasOwnProperty(d)&&(i+=o.skus[d].cart_count);for(let d in o.prices)o.prices.hasOwnProperty(d)&&(i+=o.prices[d].cart_count);let a=i?`${this.text||""} ${i}`:this.text||"",r=this.recalcTextInputSize(a);this.renderButtonTextWithSizes(a,r)},onButtonClick:function(){this.mag.eCommerceCartManager.changeCartSidebarVisibility()},recalcTextInputSize:function(o){let i,a,r,d,z=this["font-size"],y=this["letter-spacing"],S=this["font-family"],v=this["font-style"],E=this["font-weight"];return this.$textInputSizeAdjuster||(this.$textInputSizeAdjuster=(0,k.default)("<div/>"),this.$textInputSizeAdjuster.css({position:"absolute",left:"-9999px",top:"-9999px","white-space":"pre",width:"auto"}),(0,k.default)(document.getElementById("tmp")).append(this.$textInputSizeAdjuster)),this.$textInputSizeAdjuster.addClass("for-text-size-calc").addClass(D.generateUUID()),this.$textInputSizeAdjuster.text(o.trim()),this.$textInputSizeAdjuster.css({"font-family":S,"font-style":v,"font-weight":E,"font-size":z+"px","letter-spacing":y+"px"}),i=this.$textInputSizeAdjuster.width(),a=this.$textInputSizeAdjuster.height(),this.$textInputSizeAdjuster.css("letter-spacing",0).text("M"),r=this.$textInputSizeAdjuster.width(),r=Math.ceil(r/2)*2,d=this.$textInputSizeAdjuster.height(),o.length===0&&(i=r,a=d),i=Math.ceil(i/2)*2,i=i+r,a=Math.ceil(a/2)*2,{text_w:i,text_h:a}},destroy:function(){return _.off("ecommerce:cartdata:changed",this.renderTotalItems),this.$textInputSizeAdjuster&&(this.$textInputSizeAdjuster.remove(),this.$textInputSizeAdjuster=null),A.prototype.destroy.apply(this,arguments)}}),lt=it});export{lt as a,st as b};
