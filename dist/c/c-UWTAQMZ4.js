import{a as r,b as F}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-JDEGW4PC.js";import{a as c,e as u,g as d}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-57Q5F5WO.js";import{a as s,b as P}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-A4BLOG47.js";import{a as g,b as M}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-B53M36TP.js";import{a as z}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-4IWT7JHB.js";import{C as h,E as f}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-CDKT2ROD.js";import{a as x}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-OL6RUHLY.js";import{a as V}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-RZYSPJF6.js";import{o as O}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-55VYORUF.js";import{a as m,d as p}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-UGUCNLQ2.js";function D(){let{model:t}=(0,w.useContext)(c);return h(g,{isFullSize:t?.isFullSize,style:t?.style})}var w,y=m(()=>{"use strict";w=p(x());d();M();f()});var S,l,R,q,v=m(()=>{S=p(V()),l=p(z());F();P();d();y();O();R=r.extend({render:function(){let t=this.mag.viewport,i=this.page.pageViewport==="default"&&t==="phone_portrait",n=["default","tablet_portrait"].includes(t)||i;return this.h=n?400:1199,this.w=this.mag.getViewportWidth(t),this.makeBox("widget-rm-footer"),this.propsModel=new Backbone.Model({isFullSize:n,style:this.getStyles()}),this.$footer=(0,S.default)('<div style="height: 100%">').appendTo(this.$el).get(0),u({component:D,domElement:this.$footer,model:this.propsModel,onDestroy:()=>{let e=this.$footer;l.default.unmountComponentAtNode(e),e&&e.parentNode&&e.parentNode.removeChild(e)}}),this.rendered=!0,this.widgetIsLoaded(),this},destroy:function(){return l.default.unmountComponentAtNode(this.$footer),r.prototype.destroy.apply(this,arguments)},getStyles:function(){let t=this.page.pageViewport,o=this.mag.viewport,i=this.mag.getViewportWidth(t);if(t==="default"&&o==="default"&&!s.isOn(t,i,this.mag.viewOpts))return;let e=this.mag.getScale(t),a=1/e,b=s.isCSSZoom()&&o==="default"&&t==="default",$=s.isCSSTransform()&&o==="default"&&t==="default",k=t==="default"&&o==="phone_portrait",C=t==="default"&&o==="tablet_portrait";return k?{height:`${this.h}px`,"transform-origin":"left bottom"}:b?{zoom:a,width:"100%",height:`${this.h}px`,position:"absolute",bottom:0}:$||C?{width:`${i*e}px`,height:`${this.h}px`,transform:`scale(${a})`,"transform-origin":"left bottom"}:{}},onPageResize:function(){r.prototype.onPageResize.apply(this,arguments),this.propsModel?.set({style:this.getStyles()})}}),q=R});export{D as a,y as b,q as c,v as d};