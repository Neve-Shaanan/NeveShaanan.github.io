import{a as n,b}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-EYHB5AKT.js";import{a as f,e as u,g}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-IRSSJLEM.js";import{a as r,b as T}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-Y67TPK6I.js";import{vc as y,wc as V}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-WL4S6QJS.js";import{a as v}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-SQDDRFKF.js";import{a as p,j as B}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-4RCXAU7Q.js";import{a as $}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-2QPS7MPS.js";import{C as c,E as h}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-KYZ3WW3Y.js";import{a as z}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-ZIBAUE4H.js";import{a as H}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-DTXEJGZZ.js";import{o as D}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-TNUHHGT2.js";import{a as l,d as s}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-YAALJKSE.js";function w(){let{model:e}=(0,i.useContext)(f),{model:t}=(0,i.useContext)(F);return c(y,{activeLink:t?.activeLink||e?.activeLink,isFullSize:t?.isFullSize||e?.isFullSize,style:e?.style||t?.style||{},fixedPosition:e?.fixedPosition})}var i,F,x=l(()=>{"use strict";i=s(z());g();V();h();F=(0,i.createContext)({})});var C,S,a,L,X,M=l(()=>{C=s(v()),S=s(H()),a=s($());b();x();g();T();D();B();L=n.extend({propsModel:void 0,render:function(){let e=this.mag.viewport,t=this.mag.containerSize.width>p;return this.h=t?72:60,this.w=this.mag.getViewportWidth(e),this.makeBox("widget-rm-header"),this.$header=(0,S.default)("<div>").appendTo(this.$el).get(0),this.propsModel=new C.default.Model({activeLink:this.activeLink,fixedPosition:this.fixed_position,isFullSize:t,style:this.getStyles()}),u({component:w,domElement:this.$header,model:this.propsModel,onDestroy:()=>{let o=this.$header;a.default.unmountComponentAtNode(o),o&&o.parentNode&&o.parentNode.removeChild(o)}}),this.rendered=!0,this.widgetIsLoaded(),this},destroy:function(){return this.$header&&a.default.unmountComponentAtNode(this.$header),n.prototype.destroy.apply(this,arguments)},getStyles:function(){let e=this.page.pageViewport,t=this.mag.viewport,o=this.mag.getViewportWidth(e);if(e==="default"&&t==="default"&&!r.isOn(e,o,this.mag.viewOpts))return;let m=this.mag.getScale(e),d=1/m,k=r.isCSSZoom(),R=r.isCSSTransform(),P=e==="default"&&t==="tablet_portrait";return k?{width:"100%",zoom:d}:R||P?{width:`${o*m}px`,transform:`scale(${d})`,"transform-origin":"left top"}:{}},onPageResize:function(){n.prototype.onPageResize.apply(this,arguments);let e=window.innerWidth>p;this.propsModel?.set({style:this.getStyles(),isFullSize:e})}}),X=L});export{F as a,w as b,x as c,X as d,M as e};
