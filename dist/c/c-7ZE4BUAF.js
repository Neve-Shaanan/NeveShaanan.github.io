import{a as u,d as y}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-24U533ZX.js";import{a as p,b as x}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-IDNXBTON.js";import{b as i,c as b}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-UGELT6OI.js";import{o as I}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-55VYORUF.js";import{a as l}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-UGUCNLQ2.js";var w,s,d,T,m,g,L=l(()=>{"use strict";w=10,s=(r=>(r.Load="load",r.Scroll="scroll",r.Hover="hover",r.Cursor="cursor",r.Click="click",r))(s||{}),d={load:"Page load",scroll:"Scroll",hover:"Hover",cursor:"Cursor move",click:"Click"},T={hover:"Hold",cursor:"Press\u2009&\u2009Drag",click:"Tap"},m=Object.freeze(Object.entries(s).map(([,e])=>[d[e],e])),g=Object.freeze(Object.entries(s).map(([,e])=>[T[e]||d[e],e]))});async function D(e,o){let t=h(e);if(t)throw new Error(t);let n=new FormData;return n.append("projectId",o),n.append("upload",e),await fetch("/api/lottie/upload",{method:"post",body:n}).then(async a=>{let r=await a.json();if(a.ok)return r;throw new Error(r.message||"Lottie uploading error")})}async function F(e,o){try{return await p.post("/api/lottie/upload-from-url",{url:e,projectId:o})}catch(t){throw new Error(t.message)}}function h(e){if(!/(\.json|\.lottie)$/gi.test(e.name))return"Only .json or .lottie files are supported";if(e.size>i.UPLOAD_LOTTIE_SIZE_LIMIT)return`File size must be less then ${u(i.UPLOAD_LOTTIE_SIZE_LIMIT)}`}function U(e){return/^http(s?):\/\/.+(\.lottie|\.json)$/.test(e)}function z(){return{isPlayerReady:!1,clickCount:0,hoverPercent:0}}function A(e,o){return e?.find(t=>t.type===o)}function V(e){return[e[0]+1,e[1]+1]}function N(e){return[e[0]-1,e[1]-1]}function B(e){switch(e){case"click":return"On 2nd click";case"hover":return"On unhover";default:return""}}function $(){return"pause"}function f(){let e=Math.floor(Math.random()*i.lottie_preset_uris.length);return i.lottie_preset_uris[e]}function X(e){let o=i.lottie_preset_uris,t=o.indexOf(e);if(t===-1)return f();let n=t===o.length-1?0:t+1;return o[n]||f()}function Z(){return{type:"load",direction:1,speed:1,loop:!1}}function P(e){return e==="default"?m:g}function K(e,o){return P(o).find(([,t])=>t===e)?.[0]}async function q(e){return new Promise((t,n)=>{let a=setTimeout(()=>{clearInterval(r),n()},1e3),r=setInterval(()=>{let c=e.getBoundingClientRect()?.height;c&&(clearInterval(r),clearTimeout(a),t(c))},100)})}var C,S=l(()=>{"use strict";L();b();x();I();y();C=9999});export{w as a,L as b,C as c,D as d,F as e,U as f,z as g,A as h,V as i,N as j,B as k,$ as l,X as m,Z as n,P as o,K as p,q,S as r};