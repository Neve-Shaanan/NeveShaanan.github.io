import{a as f,b as X}from"https://st-p.rmcdn.net/8223b069/dist/c/c-DB7OI363.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-P6CQWWG2.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-FP4JTVBZ.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-CL4RRJGU.js";import{a as L,b as U,c as O,g as _,r as F}from"https://st-p.rmcdn.net/8223b069/dist/c/c-4FBJTGCL.js";import{a as w,b as J}from"https://st-p.rmcdn.net/8223b069/dist/c/c-JMI4WDJU.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-2HEIVH4G.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-FR3JPTPG.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-2DZPH7QU.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-KYSM6A2O.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-AX5EGHSK.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-ZEVJDQYW.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-ZD4R6MOL.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-Q67WV7LB.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-5WFZZCAU.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-TOIY2UKX.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-LZP7XPN2.js";import{a as E,b as N}from"https://st-p.rmcdn.net/8223b069/dist/c/c-LIYVLML3.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-BGFAOE6K.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-REQK2WLZ.js";import{a as A}from"https://st-p.rmcdn.net/8223b069/dist/c/c-PASVQO3S.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-72NVQS7J.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-RMPXSCYH.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-N7OSYKIN.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-D3MNZ4LH.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-YOQ4EUCI.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-IAW2YDMS.js";import{a as y,c as C,f as B,h as z}from"https://st-p.rmcdn.net/8223b069/dist/c/c-REBGOUKC.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-477BDZLP.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-GAJ3JSYZ.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-ODRKKDKR.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-GEFL5M4W.js";import{a as V}from"https://st-p.rmcdn.net/8223b069/dist/c/c-2HKZQ3AU.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-YSOFS7NH.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-OR6PCB22.js";import{C as P,E as T}from"https://st-p.rmcdn.net/8223b069/dist/c/c-TAZ5VF2F.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-XVJOBTSH.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-2ETNWXHR.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-LXB6CLOG.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-25TPOLAZ.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-CSMZBI5T.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-PR2FE6PP.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-4ZY5DMXY.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-FWG4ZALP.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-LKKQ5MIY.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-L5NKMJEA.js";import{d as b,f as a}from"https://st-p.rmcdn.net/8223b069/dist/c/c-LP3JJHSV.js";var x=b(V());X();var D=b(A());U();z();B();function M(m,v,t,e){let r=m[v];return C(m,()=>{let o=m[v];Object.is(r,o)||t(r=o)},e)}var $=Symbol();F();N();J();T();var S=class extends f{constructor(){super(...arguments);a(this,"sharedState");a(this,"unsubscribePlayerReady");a(this,"triggerWidgets",[]);a(this,"handleClick",function(){++this.sharedState.clickCount}.bind(this));a(this,"handlePointerHover",function(e){this.sharedState.isPointerIn=e.type==="mouseenter"}.bind(this));a(this,"handlePointerState",function(e){e.preventDefault(),this.sharedState.isPointerIn=e.type==="pointerdown"}.bind(this));a(this,"handleTouchSideEffects",function(e){e.preventDefault()}.bind(this));a(this,"handlePointerMovement",function(e){if(!this.rendered)return;let r=(this.model.attributes.interactions||[]).find(p=>p.type==="cursor");if(!r)return;let o=e;"touches"in o&&this.getViewerType()==="horizontal"&&r.cursorDirection==="vertical"&&o.stopPropagation();let n=o.currentTarget,i=n instanceof Window?{width:window.innerWidth,height:window.innerHeight,left:0,top:0}:n.getBoundingClientRect(),c,l;if(n instanceof Window)c=o.clientX,l=o.clientY;else{let p=n instanceof Window||E.isCSSTransform()?1:this.page.scale,g=w.mapPointerToElement(o,n,1,p);c=g.left,l=g.top}let s=Math.sqrt(i.width**2+i.height**2),d=w.percentFromRectangleCenter(i,{x:c,y:l}),h=0;switch(r.cursorDirection){case"vertical":this.sharedState.hoverPercent=l/i.height;break;case"descending":h=Math.sqrt(c**2+l**2),this.sharedState.hoverPercent=h/s;break;case"ascending":h=Math.sqrt(c**2+(i.height-l)**2),this.sharedState.hoverPercent=h/s;break;case"radial":this.sharedState.hoverPercent=1-d;break;default:this.sharedState.hoverPercent=c/i.width}}.bind(this))}initialize(t,e,r){this.model=new D.default.Model(t),this.page=e,f.prototype.initialize.apply(this,[t,e,r])}async render(){if(!this.model.attributes.uri)return;this.makeBox("widget-lottie");let{renderReact:t}=await import("https://st-p.rmcdn.net/8223b069/dist/c/c-IJ7ZBSF7.js"),{LottieViewerOld:e}=await import("https://st-p.rmcdn.net/8223b069/dist/c/c-RDNZDZOJ.js");this.sharedState=y({..._(),viewport:this.page.getPageViewport()});let r=this.model.attributes.interactions?.some(n=>n.type==="click");return this.el.classList.toggle("interactive",r),t({component:()=>P(e,{widget:this.model.attributes,sharedState:this.sharedState}),domElement:this.el,model:this.model,onDestroy:()=>{let n=this.el;x.default.unmountComponentAtNode(n),n&&n.parentNode&&n.parentNode.removeChild(n)}}),this.unsubscribePlayerReady=M(this.sharedState,"isPlayerReady",n=>{n&&(this.widgetIsLoaded(),this.unsubscribePlayerReady?.())}),this.checkLink(),this.rendered=!0,this.trigger("rendered"),this}start(...t){if(f.prototype.start.apply(this,t),!this.rendered){this.listenToOnce(this,"rendered",this.start);return}this.bindTriggers()}getWindow(){return window.RM?.constructorRouter?.previewMode&&this.page.getPageViewport()!=="default"&&document.querySelector("#mags .mag-pages-container")||window}async bindTriggers(){for(let t of this.model.attributes.interactions||[]){let e=t.triggers?.length?t.triggers:[this.model.attributes._id];for(let r of e){let o=await this.page.mag.getAllWidgetViewsByIdAsync(r,this.page);for(let n of o){let i=n.el;if(i instanceof HTMLElement){switch(t.type){case"click":i.addEventListener("click",this.handleClick);break;case"hover":i.addEventListener("mouseenter",this.handlePointerHover),i.addEventListener("mouseleave",this.handlePointerHover),i.addEventListener("pointerdown",this.handlePointerState),i.addEventListener("pointerup",this.handlePointerState),i.addEventListener("touchstart",this.handleTouchSideEffects),i.addEventListener("contextmenu",this.handleTouchSideEffects);break;case"cursor":(!t.cursorZone||t.cursorZone==="widget")&&i.addEventListener("pointermove",this.handlePointerMovement);break;case"scroll":this.isAbove()&&this.getViewerType()==="vertical"?this.listenTo(this.page.mag,"mag_scroll",this.handleScroll):(this.listenTo(this.page,"page_scroll_unlim",this.handleScroll),this.handleScroll(this.page.getScroll(!0)??0));break}this.triggerWidgets.push(n)}}}t.type==="cursor"&&t.cursorZone==="viewport"&&this.getWindow().addEventListener("pointermove",this.handlePointerMovement)}}unbindTriggers(){for(let t of this.triggerWidgets){let e=t.el;e instanceof HTMLElement&&(e.removeEventListener("click",this.handleClick),e.removeEventListener("mouseenter",this.handlePointerHover),e.removeEventListener("mouseleave",this.handlePointerHover),e.removeEventListener("pointerdown",this.handlePointerState),e.removeEventListener("pointerup",this.handlePointerState),e.removeEventListener("touchstart",this.handleTouchSideEffects),e.removeEventListener("contextmenu",this.handleTouchSideEffects),e.removeEventListener("pointermove",this.handlePointerMovement),this.stopListening(this.page.mag,"mag_scroll",this.handleScroll),this.stopListening(this.page,"page_scroll_unlim",this.handleScroll))}this.getWindow().removeEventListener("pointermove",this.handlePointerMovement)}handleScroll(t){let e=(this.model.attributes.interactions||[]).find(u=>u.type==="scroll");if(!e)return;let r=0,o=e.scrollType?e.scrollType:"absolute",n=this.model.attributes.is_above&&this.getViewerType()==="vertical",i=n?1:this.page.scale,l=this.page.contentPosition.top/i,s=0,d=0,h=e.scrollRange?.[0]??0,p=e.scrollRange?.[1]??100,g=e.scrollDelay??0,H=e.speed??1,I=e.scrollType!=="relative"?e.loopInfinite??!0:!1,W=e.loop?I?O:e.loopCount??1:1,R=this.sharedState.player?.state.totalFrames??0;if(o==="absolute")s=g*i,d=R*L*W/H*i+s;else if(this.model.attributes.fixed_position){let u=Math.max(n?this.mag.getContainerSizeCached().pagesContainerHeight-window.innerHeight/i:this.page.getCachedSizes().contentContainerHeight-window.innerHeight/i,0);s=u*i*h/100,d=u*i*p/100}else{let u=this.calcBoxStyle({calcBBox:!0}).dimensions.top*i,k=this.calcBoxStyle({calcBBox:!0}).dimensions.height*i;s=l+u-window.innerHeight,d=s+window.innerHeight+k,s=s+window.innerHeight*h/100,d=d-window.innerHeight*(1-p/100)}r=Math.min(Math.max(t-s,0)/(d-s),1),this.sharedState.scrollPercent=r}getViewerType(){return this.mag&&this.mag.viewOpts&&this.mag.viewOpts.viewertype||"vertical"}stop(){this.unbindTriggers(),f.prototype.stop.apply(this)}destroy(...t){this.unsubscribePlayerReady?.(),f.prototype.destroy.apply(this,t)}},pe=S;export{pe as default};
