import{a,h as f}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-GUAW3NSU.js";import{b as i,c as h}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-UGELT6OI.js";import{a as l}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-UGUCNLQ2.js";function g(e){let t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}function O(e,t={}){if(!i.readymag_host||!i.readymag_auth_host)return;let o=i.readymag_host.replace(/https?:\/\//i,"").replace("/",""),r=i.readymag_auth_host.replace(/https?:\/\//i,"").replace("/",""),n=new Date(1e3).toUTCString();document.cookie=`${e}=; path=${t.path?t.path:"/"}; domain=${o}; expires=${n};`,document.cookie=`${e}=; path=${t.path?t.path:"/"}; domain=.${o}; expires=${n};`,document.cookie=`${e}=; path=${t.path?t.path:"/"}; domain=${r}; expires=${n};`,document.cookie=`${e}=; path=${t.path?t.path:"/"}; domain=.${r}; expires=${n};`,document.cookie=`${e}=; path=${t.path?t.path:"/"}; expires=${n};`}function _(e,t,o=100*365,r){if(!i.readymag_host)return;let c=new Date;c.setTime(c.getTime()+o*24*60*60*1e3);let n=`; expires=${c.toUTCString()}`,u=r?`; samesite=${r}`:"",m=i.readymag_host.replace(/https?:\/\//i,"").replace("/","");document.cookie=e+"="+t+n+"; path=/; domain=."+m+u}function $(){let e="_rmdata",t=g(e);if(t)return JSON.parse(atob(t));let o=document.referrer||"direct",r=encodeURI(window.location.href),c=a("utm_campaign"),n=a("utm_source"),m={first_medium:a("utm_medium"),first_campaign:c,first_source:n,rm_url:r,rm_referrer:o},d=btoa(JSON.stringify(m));return _(e,d),m}function I(){let e=encodeURIComponent(a(i.FIRSTPROMOTER_LINK_PARAM)||"");if(!e.length)return;g(i.FIRSTPROMOTER_COOKIE_KEY)||_(i.FIRSTPROMOTER_REF_COOKIE_KEY,e,i.FIRSTPROMOTER_COOKIE_MAX_AGE)}function x(){let e="_rm_amp_data",t=[],o=encodeURIComponent(a("utm_campaign")||""),r=encodeURIComponent(a("utm_source")||""),c=encodeURIComponent(a("utm_medium")||""),n=encodeURIComponent(a("utm_content")||""),u=encodeURIComponent(a("utm_term")||""),m=encodeURIComponent(a("utm_id")||""),d=g(e);if(d)try{let s=JSON.parse(atob(decodeURIComponent(d)));if(t=s.all_utm_campaigns||[],!o||t.includes(o))return;t.push(o),s.all_utm_campaigns=t;let p=btoa(JSON.stringify(s));_(e,p)}catch(s){console.log("Error: "+s)}else{o&&t.push(o);let p=btoa(JSON.stringify({initial_utm_source:r,initial_utm_medium:c,initial_utm_campaign:o,initial_utm_content:n,initial_utm_term:u,initial_utm_id:m,all_utm_campaigns:t}));_(e,p)}}var C=l(()=>{"use strict";h();f()});export{g as a,O as b,_ as c,$ as d,I as e,x as f,C as g};
