import{a as i,b as f}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-CLZTSTX5.js";import{o as u}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-TNUHHGT2.js";import{a as h}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-YAALJKSE.js";function S(r,t){let e=r.split(".");return e.length>1?(e[e.length-2]+="_"+t,e.join(".")):r+"_"+t}function d(r){let t=r.split(".");if(t.length>1){let e=t[t.length-2].split("_");if(e.length>1&&!isNaN(Number(e[e.length-1]))){e.pop();let n=e.join("_");return t[t.length-2]=n,t.join(".")}}return r}function w(r){let t=r.split("."),e;return t.length>1&&(e=t[t.length-2].split("_")),e&&Array.isArray(e)&&e.length>1?e=e[e.length-1]:e=void 0,e}function z(r,t="default"){let e=r*(window.devicePixelRatio>1?2:1),n=Object.values(l[t])||[];return n.indexOf(e)===-1&&(e=n.filter(s=>s>e)[0]),n.indexOf(e)===-1?(console.error("Unknown screenshot size",r,"for viewport",t),o):e}function x(r,t="default"){return l[t]?.[r]||o}var o,l,a,b,c=h(()=>{"use strict";u();f();o=512,l={default:{quarter:256,halfCover:608,half:512,cover:608,full:1024},phone_portrait:{half:160,full:320},tablet_portrait:{quarter:192,half:384,full:768}};a={default:{width:1024,height:672},phone_portrait:{width:320,height:568},tablet_portrait:{width:768,height:926}},b=(r,t)=>{let e=a[r||"default"],n=t?i.getScaleToFit(e,t):1;return{width:e.width*n,height:e.height*n}}});export{S as a,d as b,w as c,z as d,x as e,a as f,b as g,c as h};
