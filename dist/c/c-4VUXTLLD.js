import{c as g,d as w}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-PVHBLK4X.js";import{a as I,d as V}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-S77HWRL4.js";import{b as T,e as G}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-5QW7XRA7.js";import{r as b,v as R}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-ICCT4MUX.js";import{b as h,c as q}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-QQJB3JZA.js";import{C as E,D as P,E as B}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-KYZ3WW3Y.js";import{a as C}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-ZIBAUE4H.js";import{a as F,b as H}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-LBCA7TJT.js";import{b as p,c as y}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-ZSMXGSRM.js";import{a as d,d as N}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-YAALJKSE.js";var x,Z,$,k,J,Q,W,X,S=d(()=>{"use strict";x=N(C());R();G();q();V();B();Z=b("input")`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  cursor: pointer;
  width: 0;
  left: 0;
`,$=e=>e.isDirectory,k=e=>e.isFile,J=(e,r)=>{let i=[],t=()=>{e.readEntries(o=>{if(o.length)i=i.concat(o),t();else return r(i)})};t()},Q=async e=>{let r=[],i=0;return new Promise(t=>{let o=n=>{if($(n)){let s=n.createReader();i++,J(s,l=>{i--,l.forEach(f=>{if(o(f),i<=0)return t(r)})})}k(n)&&(i++,n.file(s=>{if(i--,r.push(s),i<=0)return t(r)}))};for(let n=0;n<e.length;n++){let s=e[n].webkitGetAsEntry();s&&o(s)}})},W=(0,x.forwardRef)(({children:e,id:r="rm-file-upload",readFileData:i=!0,dropFile:t=!1,name:o,onChange:n,onChangeMultiple:s,disabled:l,textStyle:f,multiple:c,...L},O)=>{let A=async a=>{if(a.target.files)if(c)s&&s(Array.from(a.target.files));else{let m=a.target.files[0],u=i?await h(m):null;n&&n(m,u)}},z=async a=>{a.preventDefault();let m;if(a.dataTransfer?.items?.[0]&&"webkitGetAsEntry"in a.dataTransfer.items[0]?m=await Q(a.dataTransfer.items):a.dataTransfer.files&&a.dataTransfer.files.length&&(m=Array.from(a.dataTransfer.files)),!!m)if(c)s&&s(m);else{let u=m[0],j=i?await h(u):null;n&&n(u,j)}};return P(T,{ref:O,as:"label",htmlFor:r,disabled:l,cursor:"pointer",onDrop:a=>t&&z(a),onDragOver:a=>t&&a.preventDefault(),...f,children:[e,E(Z,{type:"file",name:o||r,id:r,style:{opacity:0,visibility:"hidden",position:"absolute",cursor:"pointer",width:0,left:0},onChange:A,multiple:!!c,disabled:l,...L})]})}),X=I.withComponent(W)});var Y=d(()=>{"use strict";S();S()});var K,ee,te,_,D=d(()=>{"use strict";K=e=>e?new Promise((r,i)=>{try{let t=new FileReader;t.onloadend=()=>r(t.result),t.onerror=o=>i(o),t.readAsDataURL(e)}catch(t){i(t)}}):Promise.reject("No file data"),ee=e=>e?{"image/jpeg":"jpg","image/webp":"webp","image/png":"png","image/gif":"gif","image/svg+xml":"svg"}[e.toLowerCase()]:void 0,te=e=>new Promise((r,i)=>{let t=new Image;t.onload=()=>{(!t.width||!t.height)&&i("Unable to get image dimensions");let o={width:t.width,height:t.height};t.remove(),r(o)},t.onerror=o=>i(o),t.src=e}),_=e=>new Promise((r,i)=>{K(e).then(t=>{te(t).then(o=>{let n={width:o.width,height:o.height,type:e.type,size:e.size,ext:ee(e.type),content:t};r(n)}).catch(o=>i(o))})})});var v,Se,M,ye,U=d(()=>{"use strict";y();H();w();D();v=async(e,r)=>{let i=new FormData;return i.append("widgetId",r),i.append("upload",e.slice(0,Math.min(e.size,p.SHOTS_UPLOAD_SIZE_LIMT))),await fetch("/api/shots/upload/video",{method:"post",body:i}).then(t=>t.json())},Se=(e,r)=>F.post("/api/shots/convert/fromurl",{videoUrl:e,widgetId:r}),M=async(e,r)=>{let{width:i,height:t}=await _(e[0]),o=new FormData;o.append("widgetId",r),o.append("totalFilesNumber",e.length.toString()),e.sort((s,l)=>s.name.localeCompare(l.name,void 0,{numeric:!0}));for(let[s,l]of e.entries())o.append(`${s}.${g.getFileExt(l.name)||""}`,l);return{...await fetch("/api/shots/upload/sequence",{method:"post",body:o}).then(s=>s.json()),imageWidth:i,imageHeight:t}},ye=async()=>await fetch("/api/shots/templates").then(r=>r.json())});var Te,Fe,re=d(()=>{"use strict";U();y();w();Te=e=>{let r=["image/png","image/jpeg"],i=/(png|jpg|jpeg)/i;if(!e.length)return{errorMsg:"No suitable files to upload. Please use JPEG or PNG files."};if(e.length===1){let t=e[0];return/^image\//.test(t.type)||r.includes(t.type)||i.test(g.getFileExt(t.name))?{errorMsg:"Please upload single Video file or multiple Image files"}:t.size>p.UPLOAD_SHOTS_SIZE_LIMIT?{errorMsg:`Video file size must be less than ${Math.floor(p.UPLOAD_SHOTS_SIZE_LIMIT/1024/1024)} mb`}:{validated:e}}else{if(e.reduce((s,l)=>s+l.size,0)>p.UPLOAD_SHOTS_SEQUENCE_SIZE_LIMIT)return{errorMsg:`Total size of sequence files must be less than ${Math.floor(p.UPLOAD_SHOTS_SEQUENCE_SIZE_LIMIT/1024/1024)} mb`};let o,n=e.filter(s=>r.includes(s.type)||i.test(g.getFileExt(s.name)));if(!n.length)return{errorMsg:"No suitable files to upload. Please use JPEG or PNG files."};for(let s of n){if(o&&o!==s.type)return{errorMsg:"All image files in sequence must be of the same type"};o=s.type}return{validated:n}}},Fe=async(e,r)=>{if(e.length)return e.length===1?v(e[0],r):M(e,r)}});export{X as a,Y as b,te as c,_ as d,D as e,Se as f,ye as g,U as h,Te as i,Fe as j,re as k};
