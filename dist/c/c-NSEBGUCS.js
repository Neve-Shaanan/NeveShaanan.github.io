import{a as n,b as E}from"https://st-p.rmcdn.net/8223b069/dist/c/c-DB7OI363.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-P6CQWWG2.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-FP4JTVBZ.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-CL4RRJGU.js";import{c as p,d as b,e as m,f as w}from"https://st-p.rmcdn.net/8223b069/dist/c/c-OUS45BUY.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-GZCDONJU.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-JIPMOUO7.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-2HEIVH4G.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-FR3JPTPG.js";import{o as f}from"https://st-p.rmcdn.net/8223b069/dist/c/c-2DZPH7QU.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-KYSM6A2O.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-AX5EGHSK.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-ZEVJDQYW.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-ZD4R6MOL.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-Q67WV7LB.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-5WFZZCAU.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-TOIY2UKX.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-LZP7XPN2.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-LIYVLML3.js";import{c as l,d as y}from"https://st-p.rmcdn.net/8223b069/dist/c/c-BGFAOE6K.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-REQK2WLZ.js";import{a as v}from"https://st-p.rmcdn.net/8223b069/dist/c/c-PASVQO3S.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-RMPXSCYH.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-N7OSYKIN.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-D3MNZ4LH.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-YOQ4EUCI.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-IAW2YDMS.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-REBGOUKC.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-477BDZLP.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-GAJ3JSYZ.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-ODRKKDKR.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-GEFL5M4W.js";import{a as S}from"https://st-p.rmcdn.net/8223b069/dist/c/c-2HKZQ3AU.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-YSOFS7NH.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-OR6PCB22.js";import{C as c,E as u}from"https://st-p.rmcdn.net/8223b069/dist/c/c-TAZ5VF2F.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-XVJOBTSH.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-2ETNWXHR.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-LXB6CLOG.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-25TPOLAZ.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-CSMZBI5T.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-PR2FE6PP.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-4ZY5DMXY.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-FWG4ZALP.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-LKKQ5MIY.js";import"https://st-p.rmcdn.net/8223b069/dist/c/c-L5NKMJEA.js";import{d as h,f as s}from"https://st-p.rmcdn.net/8223b069/dist/c/c-LP3JJHSV.js";E();w();var g=h(S()),a=h(v());b();y();f();u();var d=class extends n{constructor(t,e,o){super(t,e,o);s(this,"sharedState");s(this,"autoplay");s(this,"unsubscribeReady");s(this,"triggerWidgets",[]);s(this,"handleClick",function(){++this.sharedState.clickCount}.bind(this));s(this,"handlePointerHover",function(e){this.sharedState.isPointerIn=e.type==="mouseenter"}.bind(this));s(this,"handlePointerState",function(e){e.preventDefault(),this.sharedState.isPointerIn=e.type==="pointerdown"}.bind(this));s(this,"handleTouchSideEffects",function(e){e.preventDefault()}.bind(this));s(this,"player",{play:function(){this.sharedState.player.play()}.bind(this),pause:function(){this.sharedState.player.stop()}.bind(this)});return this.model=new a.default.Model(t),this.sharedState=new p(this.model.attributes),this.sharedState.controlsCursorStyle=e.mag.hoverCursorStyle,n.prototype.initialize.apply(this,[t,e,o]),this}async render(){(this.model.attributes.provider_name||"").toLowerCase()==="vimeo"&&m.brokenVimeoThumbnailRegexp.test(this.model.get("thumbnail_url"))&&this.model.unset("thumbnail_url"),this.makeBox("video"),this.$el.addClass("no-transparency");let{renderReact:t}=await import("https://st-p.rmcdn.net/8223b069/dist/c/c-IJ7ZBSF7.js"),{VideoPlayerViewerOld:e}=await import("https://st-p.rmcdn.net/8223b069/dist/c/c-GSKETMWV.js");return t({component:()=>c(e,{sharedState:this.sharedState,analytics:window.RM.analytics}),domElement:this.el,model:this.model,onDestroy:()=>{let i=this.el;g.default.unmountComponentAtNode(i),i&&i.parentNode&&i.parentNode.removeChild(i)}}),this.unsubscribeReady=this.sharedState.subscribe("isReady",i=>{i&&(this.widgetIsLoaded(),this.unsubscribeReady?.())}),this.checkLink(),this.rendered=!0,this.trigger("rendered"),this.sharedState.renderSimpleVersion=!!window.RM.screenshot,this}isValid(){return!!(this.model.attributes.url&&this.model.attributes.provider_name)}start(){return n.prototype.start.call(this),window.RM.screenshot||this.destroyed?this:(this.bindTriggers(),this.sharedState.isStarted=!0,this)}stop(){return n.prototype.stop.call(this),!window.RM.screenshot&&!this.destroyed&&this.sharedState.player&&this.rendered&&this.sharedState.player.stop(),this.unbindTriggers(),this}_needAutoStart(){return this.autoplay&&!l.PageVisibilityManager.isPageHidden()}getPageScale(){return this.page.mag.getScale(this.page.viewport)}async bindTriggers(){let t=this.model.attributes.triggers?.length?this.model.attributes.triggers:[this.model.attributes._id];for(let e of t){let o=await this.page.mag.getAllWidgetViewsByIdAsync(e,this.page);for(let i of o){let r=i.el;if(r instanceof HTMLElement){switch(this.model.attributes.custom_controls?.playbackType){case"Click":r.addEventListener("click",this.handleClick);break;case"Hover":r.addEventListener("mouseenter",this.handlePointerHover),r.addEventListener("mouseleave",this.handlePointerHover),"ontouchstart"in window&&(r.addEventListener("pointerdown",this.handlePointerState),r.addEventListener("pointerup",this.handlePointerState),r.addEventListener("pointerleave",this.handlePointerState)),r.addEventListener("touchstart",this.handleTouchSideEffects),r.addEventListener("contextmenu",this.handleTouchSideEffects);break}this.triggerWidgets.push(i)}}}}unbindTriggers(){for(let t of this.triggerWidgets){let e=t.el;e instanceof HTMLElement&&(e.removeEventListener("click",this.handleClick),e.removeEventListener("mouseenter",this.handlePointerHover),e.removeEventListener("mouseleave",this.handlePointerHover),e.removeEventListener("pointerdown",this.handlePointerState),e.removeEventListener("pointerup",this.handlePointerState),e.removeEventListener("pointerleave",this.handlePointerState),e.removeEventListener("touchstart",this.handleTouchSideEffects),e.removeEventListener("contextmenu",this.handleTouchSideEffects))}}destroy(...t){this.sharedState.player?.stop(),this.unsubscribeReady?.(),n.prototype.destroy.apply(this,t)}updateVideoWidget(t){this.unbindTriggers(),this.model=new a.default.Model(t),this.sharedState.widget=t,this.sharedState.pageScale=this.getPageScale(),this.bindTriggers()}},W=d;export{W as default};
