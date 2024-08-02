import{a as yt,b as _t}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-4V64DFCG.js";import{$ as T,H as et,I as ot,K as rt,L as nt,N as it,O as st,S as Nt,V as g,Y as At,_ as j,ba as at,ca as ct,j as q,k as Rt,l as h,n as X,o as U,ra as A,sa as zt}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-D7WEOKYM.js";import{i as O}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-7L6Z5QRK.js";import{c as J,f as Q,i as Z,p as tt,w as N}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-EPHISDO3.js";import{a as Et}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-6DFCTIRK.js";import{r as lt,t as Ot}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-6X52I75R.js";import{a as Bt,j as pt,k as Ht}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-RGT3NA2V.js";import{C as P,E as D}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-PUTLXSLD.js";import{a as V}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-VMBI6QWR.js";import{a as m,b as R}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-SO2RHLNQ.js";import{A as Ct,t as G}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-LXWGYRHK.js";import{b as K,c as Dt}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-NPIFV5PN.js";import{a as Y,c as Ut}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-SISGAMWZ.js";import{a as L,d as C}from"https://st-p.rmcdn.net/62e91e4d/dist/c/c-57DIUWTR.js";var dt,St,Xt,z,mt=L(()=>{"use strict";R();dt=({userId:t})=>m.get(`/api/list-styles/global/${t}`),St=({projectId:t})=>m.get(`/api/list-styles/project/${t}`),Xt=({userId:t,styles:r})=>m.put(`/api/list-styles/global/${t}`,{styles:r}),z=({projectId:t,styles:r})=>m.put(`/api/list-styles/project/${t}`,{styles:r})});var gt,ft,Zt,H,ut=L(()=>{"use strict";R();gt=({userId:t})=>m.get(`/api/link-styles/global/${t}`),ft=({projectId:t})=>m.get(`/api/link-styles/project/${t}`),Zt=({userId:t,styles:r})=>m.put(`/api/link-styles/global/${t}`,{styles:r}),H=({projectId:t,styles:r})=>m.put(`/api/link-styles/project/${t}`,{styles:r})});var xt,ht,oe,_,kt=L(()=>{"use strict";R();xt=({userId:t})=>m.get(`/api/text-styles/global/${t}`),ht=({projectId:t})=>m.get(`/api/text-styles/project/${t}`),oe=({userId:t,styles:r})=>m.put(`/api/text-styles/global/${t}`,{styles:r}),_=({projectId:t,styles:r})=>m.put(`/api/text-styles/project/${t}`,{styles:r})});function E(){return Mt.map(t=>({...t,name:`style-${yt()}`}))}var Mt,se,$t=L(()=>{"use strict";_t();U();Mt=[{label:"H1",tag:"h1",cssProperties:{color:"22222264",fontFamily:"Roboto",fontStyle:"normal",textAlign:"left",fontSize:48,fontWeight:700,letterSpacing:0,lineHeight:60,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0}},{label:"H2",tag:"h2",cssProperties:{color:"22222264",fontFamily:"Georgia",fontStyle:"normal",textAlign:"left",fontSize:24,fontWeight:400,letterSpacing:0,lineHeight:30,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0}},{label:"Text",tag:"p",cssProperties:{color:"22222264",fontFamily:"Georgia",fontStyle:"normal",textAlign:"left",fontSize:18,fontWeight:400,letterSpacing:0,lineHeight:23,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0}},{label:"Caption",tag:"p",cssProperties:{color:"22222232",fontFamily:"Georgia",fontStyle:"italic",textAlign:"left",fontSize:14,lineHeight:18,letterSpacing:0,fontWeight:400,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0}}];se=[{label:"List item",cssProperties:{color:"22222264",fontFamily:h.fontFamily,fontStyle:h.fontStyle,textAlign:"left",fontSize:h.fontSize,fontWeight:Number(h.fontWeight),letterSpacing:0,lineHeight:h.lineHeight,paddingRight:0,paddingLeft:0,width:26}}]});var M,bt=L(()=>{"use strict";N();M=(t,r)=>t?`${t}${J(typeof r=="number"?r:100)}`:""});var F,wt,Lt,jt=L(()=>{"use strict";Ot();U();O();N();Dt();bt();F=(t,r)=>{let i=u=>{switch(u){case"none":return"None";case"dotted":return"Dotted";case"dashed":return"Dashed";case"solid":return"Solid";default:break}},o=u=>r?`${r}-${u}`:u,c=typeof t[o("color")]<"u"?t[o("color")]:t.color,s=typeof t[o("opacity")]<"u"?t[o("opacity")]:t.opacity,p=typeof t[o("u-color")]<"u"?t[o("u-color")]:t["u-color"],f=typeof t[o("u-opacity")]<"u"?t[o("u-opacity")]:t["u-opacity"],x=typeof t[o("u-size")]<"u"?t[o("u-size")]:t["u-size"],y=typeof t[o("u-offset")]<"u"?t[o("u-offset")]:t["u-offset"],$=typeof t[o("u-style")]<"u"?t[o("u-style")]:t["u-style"];return{textColor:M(String(c==="inherit"?t.color:c),Number(s==="inherit"?t.opacity:s)),color:M(String(p==="inherit"?t["u-color"]:p),Number(f==="inherit"?t["u-opacity"]:f)),size:Number(x==="inherit"?t["u-size"]:x),padding:Number(y==="inherit"?t["u-offset"]:y),type:i($)}},wt=t=>t.map(i=>{let{_name:o,_caption:c}=i,s=F(i),p=F(i,"hover"),f=F(i,"current");return{name:o,label:c,style:{link:s,hover:p,current:f}}}),Lt=t=>{let r=["none",0,"baseline"],i=["opacity"];return t.map(o=>{let{_name:c,_caption:s,tag:p,_sort:f,...x}=o,y=Object.keys(x).reduce((u,b)=>{let l=lt(b),a=x[b];if(i.includes(b)||r.includes(a))return{...u};if(l==="textAlign"&&a==="start")a="left";else if(l==="color"){let d=Number(x.opacity),n=d>0?parseFloat((d/100).toFixed(2)):1,e=tt(String(a),n);a=Z(e)}else l.includes("padding")?a=Number(a):l==="fontWeight"&&a==="normal"&&(a=h.fontWeight);return{...u,[l]:a}},{});return y.paddingLeft=y.paddingLeft||0,y.paddingRight=y.paddingRight||0,y.paddingTop=y.paddingTop||0,y.paddingBottom=y.paddingBottom||0,{name:c,label:s,tag:p||K.AVAILABLE_TEXT_TAGS[0],cssProperties:y}})}});var B,Tt=L(()=>{"use strict";Rt();ct();U();B={...q,...at,...X}});function Wt(t){if(!t)return P("div",{style:{width:"100%"}});let r=(0,Pt.useMemo)(()=>v(t),[t.type,t.size,t.color,t.padding]);return P("div",{style:{...r,width:"100%"}})}var Pt,v,Ce,vt=L(()=>{"use strict";Pt=C(V());N();O();D();v=t=>{let{type:r="None",color:i="00000064",size:o=1,padding:c=0}=t||{},{r:s,g:p,b:f,a:x}=Q(i),y=`rgba(${s}, ${p}, ${f}, ${x})`,$="repeat-x",u=o+c,b=u>0?"0 100%":`0 ${100+u}%`,l={textDecoration:"none",paddingBottom:Math.max(0,u)};switch(r){case"Solid":return{...l,background:`linear-gradient(to right, ${y} 0%, ${y} 100%) ${b}/1px ${o}px ${$}`};case"Dotted":return{...l,background:`linear-gradient(to right, ${y} 0%, ${y} 50%, transparent 50%, transparent 100%) ${b}/${o*2}px ${o}px ${$}`};case"Dashed":return{...l,background:`linear-gradient(to right, ${y} 0%, ${y} 66.6666%, transparent 66.6666%, transparent 100%) ${b}/${o*3}px ${o}px ${$}`};default:return{...l,background:"none"}}};Ce=Wt});function It({mode:t}){let[r,i]=et(),[o,c]=rt(),[s,p]=it(),f=Y("constructor.textNoStylesByDefault");(0,k.useEffect)(()=>{if(t==="constructor"){let l=[],a=[],d=[];if(!r.project.length){let e=window.ServerData.textStyles,S=E();if(!e||!e.project||!e.project.length){let w=window.ServerData?.editParams?.paragraph_styles;w&&w.length&&(S=Lt(w))}l=e?.project&&e?.project.length?e.project:S,i({global:e?.global||[],project:l})}if(!o.project.length){let e=window.ServerData.linkStyles,S=[A];if(!e||!e.project||!e.project.length){let w=window.ServerData.editParams&&window.ServerData.editParams.link_styles;w&&w.length&&(S=wt(w))}a=e?.project&&e.project.length?e.project:S,c({global:e?.global||[],project:a})}if(!s.project.length){let e=window.ServerData.listStyles;d=e?.project&&e?.project.length?e.project:[],p({global:e?.global||[],project:d})}let n=[];l.length&&!(0,I.default)(l,window.ServerData.textStyles?.project||[])&&n.push(_({styles:l,projectId:window.ServerData.projectId})),a.length&&!(0,I.default)(a,window.ServerData.linkStyles?.project||[])&&n.push(H({styles:a,projectId:window.ServerData.projectId})),d.length&&!(0,I.default)(d,window.ServerData.listStyles?.project||[])&&n.push(z({styles:d,projectId:window.ServerData.projectId})),n.length&&Promise.all(n)}if(t==="viewer"||t==="screenshoter"){let l=t==="viewer",a=l?window.ServerData?.mags?.mag?.textStyles||window.RM?.viewerRouter?.mag?.textStyles:window.ServerData?.mag?.textStyles;a&&i({global:a?.global?.length?a.global:[],project:a?.project?.length?a.project:[]});let d=l?window.ServerData?.mags?.mag?.linkStyles||window.RM?.viewerRouter?.mag?.linkStyles:window.ServerData?.mag?.linkStyles;d&&c({global:d?.global?.length?d.global:[],project:d?.project?.length?d.project:[]});let n=l?window.ServerData?.mags?.mag?.listStyles||window.RM?.viewerRouter?.mag?.listStyles:window.ServerData?.mag?.listStyles;n&&p({global:n?.global?.length?n.global:[],project:n?.project?.length?n.project:[]})}},[]);let x=(0,k.useMemo)(()=>Object.keys(B).map(a=>B[a].style).join(" "),[B]),y=(0,k.useMemo)(()=>{let l=n=>{let e=Vt(n.cssProperties);return`${e.textAlign}`==="justify"&&(e.whiteSpace="normal"),` .${n.name} { ${g(e)} } `},a=r.global.map(l),d=r.project.map(l);return[...a,...d].join(" ")},[r]),$=(0,k.useMemo)(()=>{let l=G(h,["fontWeights","fontVariationSettings"]);return g(l)},[]),u=(0,k.useMemo)(()=>{let l=e=>{let S={...e.cssProperties};return typeof S.width=="number"&&(S.minWidth=S.width),S.lineHeight&&delete S.lineHeight,`
        .${e.name}-preview {
          ${g(e.cssProperties)}
        }
        .${e.name}.edit-mode .editor-block-wrapper {
          display: ${!e.listPosition||e.listPosition==="inside"?"block":"flex"};
        }
        .${e.name}.edit-mode .editor-block-wrapper:before, .${e.name}.edit-mode div[data-offset-key]:before {
          display: inline-block;
          ${g(S)}
          ${!e.listPosition||e.listPosition==="inside"?"line-height: 1;":""}
          ${e.baselineShift?`transform: translateY(${e.baselineShift}px);`:""}
        }
        .${e.name}.view-mode {
          display: ${!e.listPosition||e.listPosition==="inside"?"list-item":"flex"};
        }
        .${e.name}.view-mode:before {
          display: inline-block;
          ${g(S)}
          ${!e.listPosition||e.listPosition==="inside"?"line-height: 1;":""}
          ${e.baselineShift?`transform: translateY(${e.baselineShift}px);`:""}
        }

        .unordered-list-item.${e.name}.edit-mode div[data-offset-key]:before {
          content: "${e.markerContent||"\u2022"}\\00a0";
          display: ${!e.listPosition||e.listPosition==="inside"?"inline-block":"none"};
          white-space: nowrap;
        }
        .unordered-list-item.${e.name}.edit-mode .editor-block-wrapper:before {
          content: "${e.markerContent||"\u2022"}\\00a0";
          display: ${e.listPosition&&e.listPosition==="outside"?"inline-block":"none"};
          white-space: nowrap;
        }

        .ordered-list-item.${e.name}.edit-mode div[data-offset-key]:before {
          counter-increment: ${j};
          content: counter(${j})".";
          display: ${!e.listPosition||e.listPosition==="inside"?"inline-block":"none"};
          white-space: nowrap;
        }

        .ordered-list-item.${e.name}.edit-mode .editor-block-wrapper:before {
          counter-increment: ${j};
          content: counter(${j})".";
          display: ${e.listPosition&&e.listPosition==="outside"?"inline-block":"none"};
          white-space: nowrap;
        }

        .unordered-list-item .${e.name}.view-mode:before {
          content: "${e.markerContent||"\u2022"}\\00a0";
        }`},a=`
      .${T}.edit-mode .editor-block-wrapper {
        display: flex;
      }
      .${T}.view-mode {
        display: flex;
      }
      .${T}.view-mode:before {
        display: inline-block;
      }

      .unordered-list-item.${T}.edit-mode .editor-block-wrapper:before {
        content: "\u2022\\00a0";
        display: inline-block;
      }
      .unordered-list-item.${T}.edit-mode div[data-offset-key]:before {
        content: "\u2022\\00a0";
        display: none;
      }

      .ordered-list-item.${T}.edit-mode .editor-block-wrapper:before {
        counter-increment: ${j};
        content: counter(${j})".";
        display: inline-block;
        white-space: nowrap;
      }
      .ordered-list-item.${T}.edit-mode div[data-offset-key]:before {
        counter-increment: ${j};
        content: counter(${j})".";
        display: none;
        white-space: nowrap;
      }

      .unordered-list-item .${T}.view-mode:before {
        content: "\u2022\\00a0";
      }`;f&&(a=`
        .unstyled {
          ${$}
        }
      `.concat(a));let d=s.global.map(l),n=s.project.map(l);return[a,...d,...n].join(" ")},[s,f,$]),b=(0,k.useMemo)(()=>{let l=n=>{let e=n.style?.link?`
        .${n.name} {
          ${g(v(n.style.link))}
          ${g({color:n.style.link.textColor})}
        }

        .${n.name} * {
          ${g({color:n.style.link.textColor})}
        }`:"",S=n.style?.hover?`
        .${n.name} .hover, .${n.name}:hover {
          ${g(v(n.style.hover))}
          ${g({color:n.style.hover.textColor},!0)}
        }

        .${n.name} .hover *, .${n.name}:hover * {
            ${g({color:n.style.hover.textColor},!0)}
        }`:"",w=n.style?.current?`
        .${n.name}.current {
          ${g(v(n.style.current))}
          ${g({color:n.style.current.textColor})}
        }

        .${n.name}.current * {
          ${g({color:n.style.current.textColor})}
        }`:"";return`
        ${e}
        ${S}
        ${w}
      `},a=o.global.map(l),d=o.project.map(l);return[...a,...d].join(" ")},[o]);return P(Kt,{blockStyles:x,textStyleSheet:y,linkStyleSheet:b,listStyleSheet:u})}var k,I,W,Gt,Kt,Vt,oo,ro,Yt=L(()=>{"use strict";k=C(V()),I=C(Et());Ct();W=C(Bt());Ht();mt();ut();kt();$t();jt();zt();Nt();Tt();At();vt();O();ct();U();Ut();D();Gt=async()=>{let t=window.RM.constructorRouter.mag.get("_id"),r=window.RM.constructorRouter.mag.get("user")._id;if(!t||!r)throw new Error("Cannot load text styles");let[{data:i},{data:o},{data:c},{data:s},{data:p},{data:f}]=await Promise.all([ht({projectId:t}),xt({userId:r}),ft({projectId:t}),gt({userId:r}),St({projectId:t}),dt({userId:r})]);return{textStyles:{global:o&&o.length?o:[],project:i&&i.length?i:E()},linkStyles:{global:s&&s.length?s:[],project:c&&c.length?c:[A]},listStyles:{global:f&&f.length?f:[],project:p&&p.length?p:[]}}},Kt=(0,k.memo)(t=>P("style",{dangerouslySetInnerHTML:{__html:pt(`
          ${t.blockStyles}
          ${t.linkStyleSheet}
          ${t.listStyleSheet}
          ${t.textStyleSheet}
        `)}}),(t,r)=>(0,I.default)(t,r)),Vt=t=>Object.keys(t).reduce((r,i)=>{let o=t[i];return typeof o=="string"&&`${o}`.includes("(")&&!String(o).includes(")")&&(o=`${o})`),o&&i==="opacity"&&parseInt(String(o))>1&&(o=parseInt(`${o}`)/100),{...r,[i]:o}},{});oo=t=>{let r="text-global-styles",i=document.querySelector(`#${r}`);i?W.default.render(P(It,{mode:t}),i):(i=document.createElement("div"),i.id=r,document.body.appendChild(i),W.default.render(P(It,{mode:t}),i))},ro=async({newTextStyles:t,newLinkStyles:r,newListStyles:i})=>{let o=await Gt();if(t&&t.length){let c=t.filter(s=>!o.textStyles.project.some(p=>p.name===s.name));if(c.length){let s=[...o.textStyles.project,...c];ot({global:o.textStyles.global,project:s}),_({styles:s,projectId:window.ServerData.projectId})}}if(i&&i.length){let c=i.filter(s=>!o.listStyles.project.some(p=>p.name===s.name));if(c.length){let s=[...o.listStyles.project,...c];st({global:o.listStyles.global,project:s}),z({styles:s,projectId:window.ServerData.projectId})}}if(r&&r.length){let c=r.filter(s=>!o.linkStyles.project.some(p=>p.name===s.name));if(c.length){let s=[...o.linkStyles.project,...c];nt({global:o.linkStyles.global,project:s}),H({styles:s,projectId:window.ServerData.projectId})}}}});export{oe as a,_ as b,kt as c,Xt as d,z as e,mt as f,Zt as g,H as h,ut as i,M as j,bt as k,wt as l,Lt as m,jt as n,Ce as o,vt as p,Gt as q,It as r,oo as s,ro as t,Yt as u};
