import{a as l,d as T,s as c,t as E}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-6X52I75R.js";import{d as u,e as a}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-SPWXVVAX.js";import{a as m}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-57DIUWTR.js";function g(e){let n=e.getBoundingClientRect();return n.top<=0&&n.bottom>=0}function w(e){let n=e||window,{pageXOffset:t,pageYOffset:r,document:o}=n;if(typeof o<"u")return{left:t||o.documentElement.scrollLeft||o.body.scrollLeft||0,top:r||o.documentElement.scrollTop||o.body.scrollTop||0};{let{scrollLeft:i,scrollTop:s}=n;return{left:i,top:s}}}function L(e){function n(t){return Math.floor(t*100/20)*20}return e.sort((t,r)=>{let o=typeof t.y=="number"?n(t.y):0,i=typeof r.y=="number"?n(r.y):0;if(o>i)return 1;if(o<i)return-1;{let s=typeof t.x=="number"?n(t.x):0,f=typeof r.x=="number"?n(t.x):0;return s>f?1:s<f?-1:0}})}function p(e){let n=e.offsetParent,t=e.offsetTop;return n?t||p(n):t||0}function d(e){let n=e.offsetParent,t=e.offsetLeft;return n?t||d(n):t||0}function M(e){if(!e)return{left:0,top:0,width:0,height:0};let{top:n,left:t,width:r,height:o}=e.getBoundingClientRect();return{top:n,left:t,width:r,height:o}}function H(e){return e?{top:p(e),left:d(e)}:{left:0,top:0}}function v(e,n){let t=l.createElement(n);for(;e.firstChild;)t.appendChild(e.firstChild);let r=Array.from(e.attributes);for(let o of r)t.setAttribute(o.name,o.value||"");e.parentNode?.replaceChild(t,e)}function P(e){let n=e.height/e.width,t=window.innerHeight,r=window.innerWidth,o=t/n,i=o*n;return o>r&&(o=r,i=o*n),{width:o,height:i}}function C(e,n){if(e)for(let[t,r]of Object.entries(n))e.style.setProperty(c(t),r)}function S({element:e,events:n,callback:t,passive:r=!1}){if(!e)return()=>{};let o=[];for(let i of n)e.addEventListener(i,t,{passive:r}),o.push(()=>e?.removeEventListener(i,t));return()=>{for(let i of o)typeof i=="function"&&i()}}function R(e){return!e||!(e instanceof HTMLElement)?!1:["INPUT","TEXTAREA","SELECT"].includes(e.tagName)}function k(e){return!!(e instanceof HTMLElement&&e.closest("[data-scrollable]"))}function B(){if(u.isTouch())return;let e=l.createElement("input");e.type="text",e.style.position="absolute",e.style.left="-9999px",e.style.top=`${window.scrollY}px`,l.body.appendChild(e),e.focus(),e.remove()}var b=m(()=>{"use strict";E();T();a()});export{g as a,w as b,L as c,p as d,d as e,M as f,H as g,v as h,P as i,C as j,S as k,R as l,k as m,B as n,b as o};