import{b as p,c as u}from"https://st-p.rmcdn.net/8223b069/dist/c/c-25TPOLAZ.js";import{a as g}from"https://st-p.rmcdn.net/8223b069/dist/c/c-LP3JJHSV.js";async function r(n,e){let t={...e,headers:{"Content-Type":"application/json",...e?.headers}};n.startsWith("/api")&&(t.headers={...t.headers,[p.RMVersionHeader]:p.RELEASE});let s=await fetch(n,t),o=s.headers.get("content-type")?.includes("application/json")?await s.json():await s.text();if(s.ok)return o;{let i=!o||typeof o=="string"?o:o.message,c=o.statusCode||s.status,d={};if(typeof o=="object"&&o!==null)for(let a of Object.keys(o))a!=="message"&&a!=="statusCode"&&(d[a]=o[a]);throw{message:i,statusCode:c,errorOptions:d}}}var y,b=g(()=>{"use strict";u();y={get:(n,e={},t={})=>{let s=Object.keys(e).map(o=>{let i=e[o];return Array.isArray(i)?i.map(c=>`${encodeURIComponent(`${o}[]`)}=${encodeURIComponent(c)}`).join("&"):`${encodeURIComponent(o)}=${encodeURIComponent(i)}`}).join("&");return r(`${n}${s?`?${s}`:""}`,t)},post:(n,e={},t={})=>r(n,{method:"POST",body:JSON.stringify(e),...t}),patch:(n,e,t={})=>r(n,{method:"PATCH",body:JSON.stringify(e),...t}),put:(n,e,t={})=>r(n,{method:"PUT",body:JSON.stringify(e),...t}),delete:(n,e,t={})=>r(n,{method:"DELETE",body:e?JSON.stringify(e):void 0,...t}),sendBeacon:(n,e={})=>new Promise((t,s)=>{navigator.sendBeacon?navigator.sendBeacon(n,new Blob([JSON.stringify(e)],{type:"application/json; charset=UTF-8"}))?t(!0):s(new Error("Failed to queue the request")):r(n,{method:"POST",body:JSON.stringify(e)}).then(t).catch(s)})}});export{y as a,b};