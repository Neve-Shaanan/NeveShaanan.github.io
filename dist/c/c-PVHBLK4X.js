import{a as O,b as Y}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-QNC3MJCF.js";import{g as R,i as F,j as W}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-BEFXBQGU.js";import{a as B,c as z,f as J}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-5VNVVAIX.js";import{A as D,q as P}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-Q2IRYA5C.js";import{b as f,c as L}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-ZSMXGSRM.js";import{a as A}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-DTXEJGZZ.js";import{b as S}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-FSSZW7T5.js";import{a as N,c as X,k as U,n as E,o as V}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-TNUHHGT2.js";import{a as k,d as x}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-YAALJKSE.js";var p,g,u,b,j=k(()=>{"use strict";p=x(A()),g=x(S());W();H();L();V();X();D();J();u={isPageNativelyScaled:function(){return window.innerWidth!=document.documentElement.clientWidth},declination:function(e,t,i,n,o){let s=[e,t,i],r=n%100;return r>=11&&r<=14?r=0:r=(r%=10)<5?r>2?2:r:0,o||(r=n==1?1:0),s[r]},autoWindowScroll:function(e,t,i){this.autoWindowScrollClear();let n=10,o=0,s=100,r=(0,p.default)(window).height();e.pageY<n&&(o=-Math.abs(Math.floor((n-e.pageY)*3))),e.pageY>r-n&&(o=Math.abs(Math.floor((n-(r-e.pageY))*3))),o=Math.max(Math.min(20,o),-20),o!=0&&(t.scrollTop(t.scrollTop()+o),RM.common.autoWindowScrollTimeout=setTimeout(function(){i&&i()},s))},autoWindowScrollClear:function(){clearTimeout(RM.common.autoWindowScrollTimeout)},getRGBA:function(e,t){let i="";if(e){let n=[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4,6),16)];t>.99?i="rgb("+n[0]+","+n[1]+","+n[2]+")":i="rgba("+n[0]+","+n[1]+","+n[2]+", "+t+")"}return i},generateUUID:function(){let e=new Date().getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(i){let n=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(i=="x"?n:n&3|8).toString(16)})},escapeSpecial:function(e,t){return e=(e+"").replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g,"\\$1"),e&&t&&(e="'"+e+"'"),e},isEqual:(e,t)=>e instanceof Array&&t instanceof Array?e.length!==t.length?!1:e.every((i,n)=>u.isEqual(i,t[n])):e instanceof Object&&t instanceof Object?g.default.uniq([...Object.keys(e),...Object.keys(t)]).every(n=>{let o=e[n];return u.isEqual(o,t[n])}):g.default.isEqual(e,t),scanForURIs:function(e,t,i){function n(c,d,y,w){let _=c;(d==null||d=="")&&(_="http://"+_);let v=y;return w!=null&&w!=""&&(v+="."+w),a++,i||(v=_,v=v.replace(/^https?:\/\//,"")),r[a]="<a "+(t?'class = "'+t+'"':"")+' href="'+_+'" target="_blank" title="'+_+'">'+v+"</a>","INNER_TMP_BLOCK_"+a+"_INNER_TMP_BLOCK"}function o(c){return a++,r[a]="<a "+(t?'class = "'+t+'"':"")+' href="mailto:'+c+'">'+c+"</a>","INNER_TMP_BLOCK_"+a+"_INNER_TMP_BLOCK"}function s(c,d){return r[d]}var r=[],a=0;return e+=" ",e=e.replace(/\b([a-z0-9_\.-]+)@([\da-z\.-]+)\.(biz|com|edu|gov|net|org|us|ru|ua|uk|su|se|co|no|jp|it|in|il|gb|fr|fi|es|de|cz|ch|ca|by|at|au)/gim,o),e=e.replace(/\b(https?:\/\/)?([\da-z\.-]+)\.(biz|com|edu|gov|net|org|us|ru|ua|uk|su|se|co|no|jp|it|in|il|gb|fr|fi|es|de|cz|ch|ca|by|at|au)(\/[^\s\(\)\[\]\{\}\<\>]*)*/gim,n),e=e.replace(/INNER_TMP_BLOCK_([\d]+)_INNER_TMP_BLOCK/gim,s),e},plainTextToHtml:function(e,t){return e=e||"",e=e.replace(/\&/gim,"&amp;"),e=e.replace(/\</gim,"&lt;"),e=e.replace(/\>/gim,"&gt;"),e=e.replace(/\n/gim,"<br/>"),e=e.replace(/\s\s/gim," &nbsp;"),t&&t.detectLinks&&(e=u.scanForURIs(e)),e},URLParts:function(e){let i=/(.+:\/\/)?([^\/]+)(\/.*)*/i.exec(e);return i=i||[],{url:i[0]||"",protocol:i[1]||"",hostname:i[2]||"",path:i[3]||""}},filterNonAscii:function(e){if(!e||!e.val)return;let t=e.val();return/[^\x00-\x7f]/.test(t)?(t=t.replace(/[^\x00-\x7f]/g,""),e.val(t),!0):!1},applyTransform:function(e,t){e.css({"-webkit-transform":t,transform:t})},getElementScale(e){let t=window.getComputedStyle(e),i=t.transform||t.webkitTransform,n;if(i==="none"||typeof i>"u")return n;let o=i.match(/matrix.*\((.+)\)/)?.[1].split(", ");return{x:+o[0],y:+o[3]}},getElementTranslateByString(e){if(e.style.transform){let t=e.style.transform.match(/translate\(([-\.\d]+\w*),\s([-\.\d]+\w*)\)/);if(t&&t[1]&&t[2]){let i=parseFloat(t[1],10),n=parseFloat(t[2],10);return{x:i,y:n}}}return{x:0,y:0}},getElementTranslate(e,t=!1){let i=window.getComputedStyle(e),n=i.transform||i.webkitTransform,o={x:0,y:0,z:0};if(n==="none"||typeof n>"u")return o;let s=n.includes("3d")?"3d":"2d",r=n.match(/matrix.*\((.+)\)/)?.[1].split(", ");return r&&r.length&&(s==="2d"&&(o={x:+r[4]/(t?r[0]:1),y:+r[5]/(t?r[3]:1),z:0}),s==="3d"&&(o={x:+r[12],y:+r[13],z:+r[14]})),o},getElementRotationAngle(e){let t=window.getComputedStyle(e),i=t.transform||t.webkitTransform,n=0;if(i==="none"||typeof i>"u")return n;let o=i.match(/matrix.*\((.+)\)/)?.[1].split(", ");return o&&o.length&&(n=Math.round(Math.atan2(+o[1],+o[0])*(180/Math.PI))),n},getCurrentTranslate:function(e){let t=window.getComputedStyle(e,null),i=t.getPropertyValue("-webkit-transform")||t.getPropertyValue("transform");if(!i||i=="none")return[0,0];var n=i.split("(")[1],n=n.split(")")[0],n=n.split(",");return[n[4]-0,n[5]-0]},applyTransition:function(e,t){e.css({"-webkit-transition":t.replace("transform","-webkit-transform"),transition:t})},waitForTransitionEnd:function(e,t,i,n){return this.animationTransitionEndHandler("transition",e,t,i,n)},waitForAnimationEnd:function(e,t,i,n){return this.animationTransitionEndHandler("animation",e,t,i,n)},animationTransitionEndHandler:function(e,t,i,n,o){t=t instanceof p.default?t:(0,p.default)(t);let a=e==="transition"?{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"}[Modernizr.prefixed("transition")]:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OTransition:"oAnimationEnd",msTransition:"MSAnimationEnd",animation:"animationend"}[Modernizr.prefixed("animation")];var c=function(w){if(w){let _=e==="transition"?w.originalEvent.propertyName.toLowerCase():w.originalEvent.animationName.toLowerCase();if(e==="transition"&&!(0,p.default)(w.target).is(t)||_.indexOf(n)===-1)return}t.off(a,c),clearTimeout(y),o()},d=function(){t.off(a,c),clearTimeout(y)};t.on(a,c);var y=setTimeout(c,i);return d},vueTransitionsShow:function(e,t){let i=t+"-enter",n=t+"-enter-active";e.addClass(i),window.requestAnimationFrame(function(){e.removeClass(i),e.addClass(n),u.waitForTransitionEnd(e,200,"opacity",function(){e.removeClass(n)})})},vueTransitionsHide:function(e,t){let i=t+"-leave-to",n=t+"-leave-active";return e.addClass(i+" "+n),new window.Promise(function(o){u.waitForTransitionEnd(e,200,"opacity",o)}).then(function(){e.removeClass(i+" "+n)})},getFixedPositionCSS:function(e,t,i){let n=t.left*i,o=t.top*i,s=t.width,r=t.height,a=s*(1-i)/2,c=r*(1-i)/2,d={left:"",top:"",bottom:"",right:"","margin-left":"","margin-top":""};return e?(e!="c"&&(e.indexOf("n")>-1&&(d.top=o-c),e.indexOf("w")>-1&&(d.left=n-a),e.indexOf("e")>-1&&(d.right=n-a),e.indexOf("s")>-1&&(d.bottom=o-c)),["n","c","s"].indexOf(e)>-1&&(d.left="50%",d["margin-left"]=-s/2+n),["w","c","e"].indexOf(e)>-1&&(d.top="50%",d["margin-top"]=-r/2+o),d):g.default.extend({},d,t)},hex2rgb:function(e){if(e)return[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4,6),16)]},getCursorStylesString({cusrsorUrl:e,cursorSize:t,isLambda:i,isHover:n}){let o=`url(${e}), ${n?"pointer":"auto"}`;if(t&&i){let s=Math.max(t.width,t.height);o=`
      -webkit-image-set(
        url(${e}?w=${Math.round(s/2)}) 1x,
        url(${e}) 2x
      ), ${n?"pointer":"auto"}`}return o},loadLoggedUser:function(e){if(window.RM?.common.isDownloadedSource&&!window.RM?.common.homepageRewrite)return e&&e();if(window.ServerData?.me?.user)return e&&e(window.ServerData.me.user);if(u.__loadLoggedUserCallbackStack=u.__loadLoggedUserCallbackStack||[],e&&typeof e=="function"&&u.__loadLoggedUserCallbackStack.push(e),u.__loadLoggedUserLoadStarted)return;u.__loadLoggedUserLoadStarted=!0,(0,p.default)(window).on("message",g.default.bind(function(i){if(i=i.originalEvent||{},i.origin===f.readymag_auth_host){if(typeof i.data!="string")return;let n=JSON.parse(i.data);if(n.event!=="user")return;let o=n.message;o&&window.location.href===`${f.readymag_host}/`&&(z("_rm_redirect","profile",60,"lax"),window.location.href=f.readymag_auth_host),window.ServerData&&(window.ServerData.me={user:o});for(let s=0;s<u.__loadLoggedUserCallbackStack.length;s++)u.__loadLoggedUserCallbackStack[s].call(this,o);u.__loadLoggedUserCallbackStack=[],u.__loadLoggedUserLoadStarted=!1,t.remove()}},this));let t=(0,p.default)("<iframe>").attr("width","0").attr("height","0").css({position:"absolute",top:"-999px"}).on("load",function(){t[0].contentWindow.postMessage("GetLoggedUser","*")}).attr("src",f.readymag_auth_host+"/get_user_cookies."+Date.now()).appendTo("body")},selectProtocol:function(e){return!e||!e.length||e.indexOf("//")==0&&f.IS_FILE_PROTOCOL&&(e="http:"+e),e},_sendFBGraphRequest:function(e){fetch("https://graph.facebook.com/?id="+encodeURIComponent(e)+"&scrape=true&method=post")},facebookGraphRefresh:function(e){let i=f.readymag_viewer_host||window.location.origin,n,o,s;s=i+"/"+e.user_uri+"/"+e.mag_uri+"/",this._sendFBGraphRequest(s);let r=i+"/"+e.mag_numid+"/";this._sendFBGraphRequest(r),e.mag_domain?(n="http://"+e.mag_domain+"/",this._sendFBGraphRequest(n)):e.user_domain&&(o="http://"+e.user_domain+"/"+e.mag_uri+"/",this._sendFBGraphRequest(o));let a=e.pages;if(a.length!=0)for(let c in a){c=a[c];let d=i+"p"+c.num_id+"/";this._sendFBGraphRequest(d)}},simulateEvent:function(e,t){if(!e)return;let i={HTMLEvents:/^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,MouseEvents:/^(?:click|dblclick|mouse(?:down|up|over|move|out))$/},o=a({pointerX:0,pointerY:0,button:0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,bubbles:!0,cancelable:!0},arguments[2]||{}),s,r=null;for(let c in i)if(i[c].test(t)){r=c;break}if(!r)throw new SyntaxError("Only HTMLEvents and MouseEvents interfaces are supported");if(document.createEvent)s=document.createEvent(r),r==="HTMLEvents"?s.initEvent(t,o.bubbles,o.cancelable):s.initMouseEvent(t,o.bubbles,o.cancelable,document.defaultView,o.button,o.pointerX,o.pointerY,o.pointerX,o.pointerY,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey,o.button,e),e.dispatchEvent(s);else{o.clientX=o.pointerX,o.clientY=o.pointerY;let c=document.createEventObject();s=a(c,o),e.fireEvent("on"+t,s)}return e;function a(c,d){for(let y in d)c[y]=d[y];return c}},getTestIndexes:function(){if(RM.common.rm_test)return RM.common.rm_test;let e=2,t=5,i={},n,o;for(n=e;n<=t;n++)i["_test_"+n]=-1;if(Modernizr.localstorage)for(n=e;n<=t;n++)o="_test_"+n,i[o]=localStorage.getItem("rm_test_"+n),(parseInt(i[o])!=i[o]||i[o]<0||i[o]>=n)&&(i[o]=Math.floor(Math.random()*n),localStorage.setItem("rm_test_"+n,i[o])),i[o]-=0;return RM.common.rm_test=i,i},setInputSize:function(e,t,i){let n=(0,p.default)('<div style="position:absolute; left:-9999px; right:auto; margin:0; white-space:pre; width:auto"></div>').appendTo(e.parent());n[0].className=e[0].className,n.text(i||e.val());let o=n.width();o=Math.ceil(o/2)*2+2,t&&o>t&&(o=t),e.width(o),n.remove()},PageVisibilityManager:function(){let e,t;return typeof document<"u"&&(typeof document.hidden<"u"?(e="hidden",t="visibilitychange"):typeof document.mozHidden<"u"?(e="mozHidden",t="mozvisibilitychange"):typeof document.msHidden<"u"?(e="msHidden",t="msvisibilitychange"):typeof document.webkitHidden<"u"&&(e="webkitHidden",t="webkitvisibilitychange")),{addEventListener:function(s){if(!e)return!1;document.addEventListener(t,s)},removeEventListener:function(s){if(!e)return!1;document.removeEventListener(t,s)},isPageHidden:function(){return document[e]}}}(),isMongoObjectId:function(e){let t;return t=/^[0-9a-fA-F]{24}$/,t.test(e)},setNoTransitions:function(e){return e=!!e||e===void 0,f.noanimations=e,(0,p.default)("html").toggleClass("notransitions"),"Transitions are "+(e?"disabled":"enabled")},getGAcid:function(){let e=B("_ga"),t;return e&&(e=e.match(/GA[0-9]+\.[0-9]+\.(.*)/),e.length>1&&(t=e[1])),t},initLinkedInInsights:async function(){try{if(!(await I.waitForCookieConsent()).marketing)return;R.initLinkedInInsights({partnerId:f.linkedInPartnerId})}catch(e){console.log(e)}},trackPixelPageView:async function(){try{if(!(await I.waitForCookieConsent()).marketing)return;F({id:f.fbPixelId,eventName:"ViewContent"})}catch(e){console.log(e)}},isNounSearchAvailable:function(){let e=RM.constructorRouter&&RM.constructorRouter.me&&RM.constructorRouter.me.get("permissions");return e&&e.can_use_noun_icons},escapeRegExp:function(e){let t=["$","^","*","(",")","+","[","]","{","}","\\","|",".","?","/"],i=new RegExp("(\\"+t.join("|\\")+")","g");return e.replace(i,"\\$1")},capitalize:function(e){return!e||typeof e!="string"?"":e.charAt(0).toUpperCase()+e.slice(1)},getSvgSizesByUrl:async function(e,t){if(!e||!t)return;let i=await fetch(e),n;if(i.headers.get("content-type")?.includes("image/svg"))n=await i.text();else throw new Error("incorrect svg content-type");if(!n)return;let o=document.createElement("div");o.className="svg-size-checker",o.style.position="relative",o.style.left="-99999px",o.style.bottom="-99999px",o.style.visibility="hidden",o.style.zIndex="-1",o.innerHTML=n,t.append(o);let s=o.getElementsByTagName("svg");if(!s[0])return;let r=s[0].getBBox(),a=s[0].getBoundingClientRect();return o.remove(),{bbox:{width:r.width,height:r.height},clientRect:{width:a.width,height:a.height}}},cleanupSVG:function(e){let t=(0,p.default)(e),i=t&&t[0]?t[0].outerHTML:void 0;return i?(g.default.chain(t.find("[id]")).map(function(n){return{id:n.getAttribute("id"),newId:u.generateUUID()}}).sortBy(function(n){return-n.id.length}).each(function(n){i=i.split("#"+n.id).join("#"+n.newId),i=i.split('id="'+n.id+'"').join('id="'+n.newId+'"')}),i):e},usedWidgets:function(e,t=[]){let i={};return g.default.each([...e,{wids:t}],n=>{g.default.each(n.wids,o=>{o.type&&(i[o.type]=1)})}),Object.keys(i)},canUseMinimalViewport:function(e){return(e?e.is_mag_use_minimal_viewport:RM.constructorRouter?.mag?.get("is_mag_use_minimal_viewport"))||N("constructor.viewportMinimal")},isLegacyWidgetFormat(e={}){if(!e.viewport_phone_portrait&&!e.viewport_tablet_portrait)return!1;let t=U(e.type,e.version,!1),i=g.default.difference(t,[...E.primitiveFields,...E.primitiveFieldsByWidgetType[e.type]||[]]);for(let n of E.viewport_list){let o=e[n];if(o)for(let s of i){let r=e[s],a=o[s];if(a!==void 0&&r!==void 0&&u.isEqual(a,r))return!0}}return!1},getFileExt:function(e){let t=e.split(".");return t.length>1?t.pop():void 0},isIframe:function(){try{return window.self!==window.top}catch{return!0}},isFreePlan(e){return e?["free","beginner"].includes(e):!0},isSubscriptionPaused(e={}){return window?.RM?.constructorRouter?.isOwner||P(e)?window?.RM?.constructorRouter?.me?.get("permissions")?._reasons?.limited_usage?.code==="reason_subscription_paused":e.get("permissions")?._reasons?.limited_usage?.code==="reason_subscription_paused"},forceRepaint(e){let t=e instanceof p.default?e[0]:e,i=t.style.display;t.style.display="none",t.offsetHeight,t.style.display=i}},b=u});var h,m,C,G,q,T,M,K,l,I,H=k(()=>{"use strict";h=x(A()),m=x(S());L();j();Y();C=[],G=[],q=[],T=[],M=null;typeof window<"u"&&(window.googleMapsAPIAuthError=!1,window.gm_authFailure=()=>{O.trigger("gmaps:auth_error",!0),window.googleMapsAPIAuthError=!0});K="//maps.googleapis.com/maps/api/js",l={initGMapsAPI:function(e,t){if(window.googleMapsAPIAuthError&&e&&l.destroyGMapsAPI(),window.google&&window.google.maps)return t();if(!window.processGoogleMapsAPICallbacks){window.processGoogleMapsAPICallbacks=function(){m.default.each(C,function(s){m.default.isFunction(s)&&s()})};let i=document.createElement("script");i.type="text/javascript";let n={libraries:"places",callback:"processGoogleMapsAPICallbacks"};e?n.key=e:window.googleMapsAPIAuthError=!0;let o=f.IS_FILE_PROTOCOL?"":h.default.param(n);i.src=b.selectProtocol(K+"?"+o),document.body.appendChild(i)}C.push(t)},destroyGMapsAPI:function(){let e=document.querySelectorAll("script[src*='"+K+"']");for(let t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t]);window.google&&window.google.maps&&delete window.google.maps,delete window.processGoogleMapsAPICallbacks,C=[],window.googleMapsAPIAuthError=!1},initFacebookAPI:function(e){let t,i=f.FACEBOOK_APP_ID||"";if(typeof e=="function"){if(l.isFacebookInited)return e();G.push(e),t=(0,h.default)("#fb-root"),t.length||(0,h.default)("body").prepend((0,h.default)('<div id="fb-root"></div>')),window.fbAsyncInit=function(){FB.init({appId:i,xfbml:!1,version:"v"+f.FACEBOOK_API_VERSION}),m.default.each(G,function(n){m.default.isFunction(n)&&n()}),l.isFacebookInited=!0},function(n,o,s){let r,a=n.getElementsByTagName(o)[0];n.getElementById(s)||(r=n.createElement(o),r.id=s,r.src=b.selectProtocol("//connect.facebook.net/en_US/sdk.js"),a.parentNode.insertBefore(r,a))}(document,"script","facebook-jssdk")}},initTwitterAPI:function(e){if(l.isTwitterInited){m.default.isFunction(e)&&e();return}else m.default.isFunction(e)&&q.push(e);l.isTwitterLoading||(l.isTwitterLoading=!0,(0,h.default)('body > script[src^="//syndication.twimg.com/tweets.json"]').remove(),h.default.ajax({url:b.selectProtocol("//platform.twitter.com/widgets.js"),dataType:"script",cache:!1,success:function(){m.default.each(q,function(t){m.default.isFunction(t)&&t()}),twttr.events.bind("click",b.getFocusBack),l.isTwitterInited=!0,l.isTwitterLoading=!1}}))},initMailchimpAPI:function(e){if(l.isMailchimpInited){m.default.isFunction(e)&&e(l.mailchimp);return}else m.default.isFunction(e)&&T.push(e);l.isMailchimpLoading||(l.isMailchimpLoading=!0,h.default.ajax({url:b.selectProtocol("//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js"),dataType:"script",cache:!1,success:function(){if(!window.require){T=[];return}window.require(["mojo/signup-forms/Loader"],function(t){l.mailchimp=t,m.default.each(T,function(i){m.default.isFunction(i)&&i(l.mailchimp)}),l.isMailchimpInited=!0})},complete:function(){l.isMailchimpLoading=!1}}))},waitForCookieConsent:function(){return M||(M=new Promise(e=>{let t={necessary:!0,preferences:!0,statistics:!0,marketing:!0};if(window.RM?.common.mode==="constructor")return e(t);if(window.Cookiebot?.consented)return e(window.Cookiebot?.consent);if(!window.ServerData?.isCountryInEU&&!window.Cookiebot?.declined)return e(t);window.addEventListener("CookiebotOnAccept",()=>{e(window.Cookiebot?.consent)},{once:!0}),window.addEventListener("CookiebotOnDecline",()=>{e(window.Cookiebot?.consent)},{once:!0})}),M)}},I=l});export{I as a,H as b,b as c,j as d};
