import{a as p,b as I}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-44JW5DSH.js";import{a as n,b as C}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-X7IU5XB4.js";import{a as S}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-WS6DNY26.js";import{d as g,g as b}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-DLACFTMW.js";import{a as c,b as T}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-V5XF5B7R.js";import{a as v}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-PAVEZMOD.js";import{a as M}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-RGT3NA2V.js";import{C as a,E as d}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-PUTLXSLD.js";import{a as y,d as l}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-57DIUWTR.js";var u,h,w,B,E=y(()=>{u=l(M());C();h=l(v());b();I();S();T();d();w=n.extend({triggerWidgets:[],initialize:function(e,s,t){this.model=new h.default.Model(e),this.isAllImagesLoaded=!1,n.prototype.initialize.apply(this,[e,s,t])},render:async function(){if(!this.basePath||!this.numberOfImages)return;this.makeBox("widget-shots");let{renderReact:e}=await import("https://st-p.rmcdn.net/62e91e4d/dist/c/c-URHT7IJQ.js"),{Shots:s}=await import("https://st-p.rmcdn.net/62e91e4d/dist/c/c-G2ZM35BS.js");return this.stateModel=new h.default.Model(this.getCurrentState()),e({component:()=>a(g,{context:p,model:this.stateModel,children:a(s,{mode:window.RM.screenshot?"screenshoter":"viewer",onFirstRender:this.onFirstRender,onFirstFrameLoaded:this.widgetIsLoaded,onAllImagesLoaded:this.onAllImagesLoaded})}),domElement:this.el,model:this.model,onDestroy:()=>{let i=this.el;u.default.unmountComponentAtNode(i),i&&i.parentNode&&i.parentNode.removeChild(i)}}),this},getCurrentState:function(){return{pageScale:this.page.scale,pageContentTop:this.page.contentPosition.top,magContainerHeight:this.page.mag.getContainerSizeCached().height,widgetBoxTop:this.calcBoxStyle({calcBBox:!0}).dimensions.top}},getViewerType:function(){return this.page.mag&&this.page.mag.viewOpts&&this.page.mag.viewOpts.viewertype||"vertical"},onFirstRender:function(){if(this.rendered=!0,this._scheduleStart&&this.start(),this.playbackType==="scroll"){let e;this.isAbove()&&this.getViewerType()==="vertical"?e=this.page.mag.getScroll():e=this.page.getScroll(),this.handleScroll(e)}},handleScroll:function(e){this.rendered&&this.stateModel.set({...this.getCurrentState(),currentScrollOffset:e})},handlePointerMovement:function(e){if(!this.rendered)return;"touches"in e&&this.getViewerType()==="horizontal"&&this.hoverDirection==="horizontally"&&e.stopPropagation();let s="touches"in e?e.touches[0].clientX:e.clientX,t="touches"in e?e.touches[0].clientY:e.clientY,i=e.target;if(!i)return;let o=i.getBoundingClientRect(),r=c.isCSSTransform()?1:this.page.scale,m=s/r-o.left,f=t/r-o.top;this.hoverDirection==="horizontally"?this.stateModel.set({hoverPercent:m/o.width}):this.hoverDirection==="vertically"&&this.stateModel.set({hoverPercent:f/o.height})},getTriggerWidgets:async function(){let e=[];for(let s of this.triggers){let t;try{t=await this.page.mag.getWidgetById(s,this.page)}catch{continue}t&&(t.rendered||await new Promise(i=>this.listenToOnce(t,"rendered",i)),e.push(t))}return e.length||e.push(this),e},async bindTriggers(e,s){this.triggerWidgets=await this.getTriggerWidgets(),this.triggerWidgets.forEach(t=>{if(t.el instanceof HTMLElement)for(let i of e)t.el.addEventListener(i,s)})},unbindTriggers(e,s){this.triggerWidgets.forEach(t=>{if(t.el instanceof HTMLElement)for(let i of e)t.el.removeEventListener(i,s)})},handleContext(e){e.preventDefault()},handlePointerHover(e){e.type==="touchstart"&&e.target.setAttribute("draggable","true"),(e.type==="touchend"||e.type==="touchcancel")&&e.target.removeAttribute("draggable"),this.stateModel.set({mouseIn:e.type==="mouseenter"||e.type==="touchstart"})},handleMouseHoverInitCursor(e){let s=e.target;if(s){let t=s.getBoundingClientRect(),i=e.pageX>=t.x&&e.pageX<=t.x+t.width,o=e.pageY>=t.y&&e.pageY<=t.y+t.height,r=i&&o;this.stateModel.set({mouseIn:r}),this.unbindTriggers(["mousemove"],this.handleMouseHoverInitCursor)}},handleClick(){this.stateModel.set({mouseIn:!this.stateModel.get("mouseIn")})},onAllImagesLoaded(){this.isAllImagesLoaded=!0,this.playbackType==="hover"?(this.bindTriggers(["mouseenter","mouseleave","touchstart","touchend","touchcancel"],this.handlePointerHover),Modernizr.ismobile&&this.bindTriggers(["contextmenu"],this.handleContext)):this.playbackType==="click"&&this.bindTriggers(["click"],this.handleClick).then(()=>{this.triggerWidgets.forEach(e=>{e.el instanceof HTMLElement&&e.el.classList.add("interactive")})})},start:function(...e){if(n.prototype.start.apply(this,e),!this.rendered){this._scheduleStart=!0;return}this.playbackType==="scroll"?this.isAbove()&&this.getViewerType()==="vertical"?this.listenTo(this.page.mag,"mag_scroll",this.handleScroll):this.listenTo(this.page,"page_scroll",this.handleScroll):(this.playbackType==="hover"&&this.pausable===void 0||this.playbackType==="mousemove")&&this.bindTriggers(["mousemove","touchmove"],this.handlePointerMovement),setTimeout(()=>{this.stateModel.set({isStarted:!0})},1),this.isAllImagesLoaded&&this.onAllImagesLoaded()},stop:function(...e){n.prototype.stop.apply(this,e),this.rendered&&(this.stopListening(),this.unbindTriggers(["mousemove","touchmove"],this.handlePointerMovement),this.unbindTriggers(["mouseenter","mouseleave","touchstart","touchend","touchcancel"],this.handlePointerHover),this.unbindTriggers(["contextmenu"],this.handleContext),this.unbindTriggers(["click"],this.handleClick),this.stateModel.set({isStarted:!1}))},destroy:function(...e){n.prototype.destroy.apply(this,e)}}),B=w});export{B as a,E as b};