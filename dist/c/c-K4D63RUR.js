import{a as pt,b as Ht}from"https://st-p.rmcdn.net/8223b069/dist/c/c-ETQGGGFR.js";import{$ as L,H as tt,I as et,K as ot,L as rt,N as nt,O as it,S as Rt,V as g,Y as Ot,_ as w,ba as lt,ca as at,j as Y,k as Bt,l as h,n as q,o as D,ra as O,sa as At}from"https://st-p.rmcdn.net/8223b069/dist/c/c-KYSM6A2O.js";import{i as N}from"https://st-p.rmcdn.net/8223b069/dist/c/c-ZEVJDQYW.js";import{c as X,f as J,i as Q,p as Z,w as R}from"https://st-p.rmcdn.net/8223b069/dist/c/c-ZD4R6MOL.js";import{a as _t}from"https://st-p.rmcdn.net/8223b069/dist/c/c-B3TYTXNE.js";import{r as st,t as Nt}from"https://st-p.rmcdn.net/8223b069/dist/c/c-IAW2YDMS.js";import{a as Ut,j as ct,k as zt}from"https://st-p.rmcdn.net/8223b069/dist/c/c-2HKZQ3AU.js";import{C as T,E as C}from"https://st-p.rmcdn.net/8223b069/dist/c/c-TAZ5VF2F.js";import{a as K}from"https://st-p.rmcdn.net/8223b069/dist/c/c-XVJOBTSH.js";import{a as m,b as B}from"https://st-p.rmcdn.net/8223b069/dist/c/c-2ETNWXHR.js";import{A as It,t as W}from"https://st-p.rmcdn.net/8223b069/dist/c/c-LXB6CLOG.js";import{b as G,c as Ct}from"https://st-p.rmcdn.net/8223b069/dist/c/c-25TPOLAZ.js";import{a as V,c as Dt}from"https://st-p.rmcdn.net/8223b069/dist/c/c-4ZY5DMXY.js";import{a as b,d as I}from"https://st-p.rmcdn.net/8223b069/dist/c/c-LP3JJHSV.js";var yt,dt,qt,A,St=b(()=>{"use strict";B();yt=({userId:t})=>m.get(`/api/list-styles/global/${t}`),dt=({projectId:t})=>m.get(`/api/list-styles/project/${t}`),qt=({userId:t,styles:r})=>m.put(`/api/list-styles/global/${t}`,{styles:r}),A=({projectId:t,styles:r})=>m.put(`/api/list-styles/project/${t}`,{styles:r})});var mt,gt,Qt,z,ft=b(()=>{"use strict";B();mt=({userId:t})=>m.get(`/api/link-styles/global/${t}`),gt=({projectId:t})=>m.get(`/api/link-styles/project/${t}`),Qt=({userId:t,styles:r})=>m.put(`/api/link-styles/global/${t}`,{styles:r}),z=({projectId:t,styles:r})=>m.put(`/api/link-styles/project/${t}`,{styles:r})});var ut,xt,ee,H,ht=b(()=>{"use strict";B();ut=({userId:t})=>m.get(`/api/text-styles/global/${t}`),xt=({projectId:t})=>m.get(`/api/text-styles/project/${t}`),ee=({userId:t,styles:r})=>m.put(`/api/text-styles/global/${t}`,{styles:r}),H=({projectId:t,styles:r})=>m.put(`/api/text-styles/project/${t}`,{styles:r})});function _(){return Mt.map(t=>({...t,name:`style-${pt()}`}))}var Mt,ie,kt=b(()=>{"use strict";Ht();D();Mt=[{label:"H1",tag:"h1",cssProperties:{color:"22222264",fontFamily:"Roboto",fontStyle:"normal",textAlign:"left",fontSize:48,fontWeight:700,letterSpacing:0,lineHeight:60,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0}},{label:"H2",tag:"h2",cssProperties:{color:"22222264",fontFamily:"Georgia",fontStyle:"normal",textAlign:"left",fontSize:24,fontWeight:400,letterSpacing:0,lineHeight:30,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0}},{label:"Text",tag:"p",cssProperties:{color:"22222264",fontFamily:"Georgia",fontStyle:"normal",textAlign:"left",fontSize:18,fontWeight:400,letterSpacing:0,lineHeight:23,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0}},{label:"Caption",tag:"p",cssProperties:{color:"22222232",fontFamily:"Georgia",fontStyle:"italic",textAlign:"left",fontSize:14,lineHeight:18,letterSpacing:0,fontWeight:400,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0}}];ie=[{label:"List item",cssProperties:{color:"22222264",fontFamily:h.fontFamily,fontStyle:h.fontStyle,textAlign:"left",fontSize:h.fontSize,fontWeight:Number(h.fontWeight),letterSpacing:0,lineHeight:h.lineHeight,paddingRight:0,paddingLeft:0,width:26}}]});var M,$t=b(()=>{"use strict";R();M=(t,r)=>t?`${t}${X(typeof r=="number"?r:100)}`:""});var E,bt,wt,Lt=b(()=>{"use strict";Nt();D();N();R();Ct();$t();E=(t,r)=>{let i=u=>{switch(u){case"none":return"None";case"dotted":return"Dotted";case"dashed":return"Dashed";case"solid":return"Solid";default:break}},o=u=>r?`${r}-${u}`:u,p=typeof t[o("color")]<"u"?t[o("color")]:t.color,s=typeof t[o("opacity")]<"u"?t[o("opacity")]:t.opacity,y=typeof t[o("u-color")]<"u"?t[o("u-color")]:t["u-color"],f=typeof t[o("u-opacity")]<"u"?t[o("u-opacity")]:t["u-opacity"],x=typeof t[o("u-size")]<"u"?t[o("u-size")]:t["u-size"],d=typeof t[o("u-offset")]<"u"?t[o("u-offset")]:t["u-offset"],j=typeof t[o("u-style")]<"u"?t[o("u-style")]:t["u-style"];return{textColor:M(String(p==="inherit"?t.color:p),Number(s==="inherit"?t.opacity:s)),color:M(String(y==="inherit"?t["u-color"]:y),Number(f==="inherit"?t["u-opacity"]:f)),size:Number(x==="inherit"?t["u-size"]:x),padding:Number(d==="inherit"?t["u-offset"]:d),type:i(j)}},bt=t=>t.map(i=>{let{_name:o,_caption:p}=i,s=E(i),y=E(i,"hover"),f=E(i,"current");return{name:o,label:p,style:{link:s,hover:y,current:f}}}),wt=t=>{let r=["none",0,"baseline"],i=["opacity"];return t.map(o=>{let{_name:p,_caption:s,tag:y,_sort:f,...x}=o,d=Object.keys(x).reduce((u,a)=>{let l=st(a),c=x[a];if(i.includes(a)||r.includes(c))return{...u};if(l==="textAlign"&&c==="start")c="left";else if(l==="color"){let n=Number(x.opacity),e=n>0?parseFloat((n/100).toFixed(2)):1,S=Z(String(c),e);c=Q(S)}else l.includes("padding")?c=Number(c):l==="fontWeight"&&c==="normal"&&(c=h.fontWeight);return{...u,[l]:c}},{});return d.paddingLeft=d.paddingLeft||0,d.paddingRight=d.paddingRight||0,d.paddingTop=d.paddingTop||0,d.paddingBottom=d.paddingBottom||0,{name:p,label:s,tag:y||G.AVAILABLE_TEXT_TAGS[0],cssProperties:d}})}});var U,jt=b(()=>{"use strict";Bt();at();D();U={...Y,...lt,...q}});function Ft(t){if(!t)return T("div",{style:{width:"100%"}});let r=(0,Tt.useMemo)(()=>P(t),[t.type,t.size,t.color,t.padding]);return T("div",{style:{...r,width:"100%"}})}var Tt,P,Ie,Pt=b(()=>{"use strict";Tt=I(K());R();N();C();P=t=>{let{type:r="None",color:i="00000064",size:o=1,padding:p=0}=t||{},{r:s,g:y,b:f,a:x}=J(i),d=`rgba(${s}, ${y}, ${f}, ${x})`,j="repeat-x",u=o+p,a=u>0?"0 100%":`0 ${100+u}%`,l={textDecoration:"none",paddingBottom:Math.max(0,u)};switch(r){case"Solid":return{...l,background:`linear-gradient(to right, ${d} 0%, ${d} 100%) ${a}/1px ${o}px ${j}`};case"Dotted":return{...l,background:`linear-gradient(to right, ${d} 0%, ${d} 50%, transparent 50%, transparent 100%) ${a}/${o*2}px ${o}px ${j}`};case"Dashed":return{...l,background:`linear-gradient(to right, ${d} 0%, ${d} 66.6666%, transparent 66.6666%, transparent 100%) ${a}/${o*3}px ${o}px ${j}`};default:return{...l,background:"none"}}};Ie=Ft});function vt({mode:t}){let[r,i]=tt(),[o,p]=ot(),[s,y]=nt();(0,k.useEffect)(()=>{if(t==="constructor"){let a=[],l=[],c=[];if(!r.project.length){let e=window.ServerData.textStyles,S=_();if(!e||!e.project||!e.project.length){let $=window.ServerData?.editParams?.paragraph_styles;$&&$.length&&(S=wt($))}a=e?.project&&e?.project.length?e.project:S,i({global:e?.global||[],project:a})}if(!o.project.length){let e=window.ServerData.linkStyles,S=[O];if(!e||!e.project||!e.project.length){let $=window.ServerData.editParams&&window.ServerData.editParams.link_styles;$&&$.length&&(S=bt($))}l=e?.project&&e.project.length?e.project:S,p({global:e?.global||[],project:l})}if(!s.project.length){let e=window.ServerData.listStyles;c=e?.project&&e?.project.length?e.project:[],y({global:e?.global||[],project:c})}let n=[];a.length&&!(0,v.default)(a,window.ServerData.textStyles?.project||[])&&n.push(H({styles:a,projectId:window.ServerData.projectId})),l.length&&!(0,v.default)(l,window.ServerData.linkStyles?.project||[])&&n.push(z({styles:l,projectId:window.ServerData.projectId})),c.length&&!(0,v.default)(c,window.ServerData.listStyles?.project||[])&&n.push(A({styles:c,projectId:window.ServerData.projectId})),n.length&&Promise.all(n)}if(t==="viewer"||t==="screenshoter"){let a=t==="viewer",l=a?window.ServerData?.mags?.mag?.textStyles||window.RM?.viewerRouter?.mag?.textStyles:window.ServerData?.mag?.textStyles;l&&i({global:l?.global?.length?l.global:[],project:l?.project?.length?l.project:[]});let c=a?window.ServerData?.mags?.mag?.linkStyles||window.RM?.viewerRouter?.mag?.linkStyles:window.ServerData?.mag?.linkStyles;c&&p({global:c?.global?.length?c.global:[],project:c?.project?.length?c.project:[]});let n=a?window.ServerData?.mags?.mag?.listStyles||window.RM?.viewerRouter?.mag?.listStyles:window.ServerData?.mag?.listStyles;n&&y({global:n?.global?.length?n.global:[],project:n?.project?.length?n.project:[]})}},[]);let f=(0,k.useMemo)(()=>Object.keys(U).map(l=>U[l].style).join(" "),[U]),x=(0,k.useMemo)(()=>{let a=n=>{let e=Kt(n.cssProperties);return`${e.textAlign}`==="justify"&&(e.whiteSpace="normal"),` .${n.name} { ${g(e)} } `},l=r.global.map(a),c=r.project.map(a);return[...l,...c].join(" ")},[r]),d=(0,k.useMemo)(()=>{let a=W(h,["fontWeights","fontVariationSettings"]);return g(a)},[]),j=(0,k.useMemo)(()=>{let a=e=>{let S={...e.cssProperties};return typeof S.width=="number"&&(S.minWidth=S.width),S.lineHeight&&delete S.lineHeight,`
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
          counter-increment: ${w};
          content: counter(${w})".";
          display: ${!e.listPosition||e.listPosition==="inside"?"inline-block":"none"};
          white-space: nowrap;
        }

        .ordered-list-item.${e.name}.edit-mode .editor-block-wrapper:before {
          counter-increment: ${w};
          content: counter(${w})".";
          display: ${e.listPosition&&e.listPosition==="outside"?"inline-block":"none"};
          white-space: nowrap;
        }

        .unordered-list-item .${e.name}.view-mode:before {
          content: "${e.markerContent||"\u2022"}\\00a0";
        }`},l=`
      .${L}.edit-mode .editor-block-wrapper {
        display: flex;
      }
      .${L}.view-mode {
        display: flex;
      }
      .${L}.view-mode:before {
        display: inline-block;
      }

      .unordered-list-item.${L}.edit-mode .editor-block-wrapper:before {
        content: "\u2022\\00a0";
        display: inline-block;
      }
      .unordered-list-item.${L}.edit-mode div[data-offset-key]:before {
        content: "\u2022\\00a0";
        display: none;
      }

      .ordered-list-item.${L}.edit-mode .editor-block-wrapper:before {
        counter-increment: ${w};
        content: counter(${w})".";
        display: inline-block;
        white-space: nowrap;
      }
      .ordered-list-item.${L}.edit-mode div[data-offset-key]:before {
        counter-increment: ${w};
        content: counter(${w})".";
        display: none;
        white-space: nowrap;
      }

      .unordered-list-item .${L}.view-mode:before {
        content: "\u2022\\00a0";
      }`;V("constructor.textNoStylesByDefault")&&(l=`
        .unstyled {
          ${d}
        }
      `.concat(l));let c=s.global.map(a),n=s.project.map(a);return[l,...c,...n].join(" ")},[s]),u=(0,k.useMemo)(()=>{let a=n=>{let e=n.style?.link?`
        .${n.name} {
          ${g(P(n.style.link))}
          ${g({color:n.style.link.textColor})}
        }

        .${n.name} * {
          ${g({color:n.style.link.textColor})}
        }`:"",S=n.style?.hover?`
        .${n.name} .hover, .${n.name}:hover {
          ${g(P(n.style.hover))}
          ${g({color:n.style.hover.textColor},!0)}
        }

        .${n.name} .hover *, .${n.name}:hover * {
            ${g({color:n.style.hover.textColor},!0)}
        }`:"",$=n.style?.current?`
        .${n.name}.current {
          ${g(P(n.style.current))}
          ${g({color:n.style.current.textColor})}
        }

        .${n.name}.current * {
          ${g({color:n.style.current.textColor})}
        }`:"";return`
        ${e}
        ${S}
        ${$}
      `},l=o.global.map(a),c=o.project.map(a);return[...l,...c].join(" ")},[o]);return T(Gt,{blockStyles:f,textStyleSheet:x,linkStyleSheet:u,listStyleSheet:j})}var k,v,F,Wt,Gt,Kt,eo,oo,Vt=b(()=>{"use strict";k=I(K()),v=I(_t());It();F=I(Ut());zt();St();ft();ht();kt();Lt();At();Rt();jt();Ot();Pt();N();at();D();Dt();C();Wt=async()=>{let t=window.RM.constructorRouter.mag.get("_id"),r=window.RM.constructorRouter.mag.get("user")._id;if(!t||!r)throw new Error("Cannot load text styles");let[{data:i},{data:o},{data:p},{data:s},{data:y},{data:f}]=await Promise.all([xt({projectId:t}),ut({userId:r}),gt({projectId:t}),mt({userId:r}),dt({projectId:t}),yt({userId:r})]);return{textStyles:{global:o&&o.length?o:[],project:i&&i.length?i:_()},linkStyles:{global:s&&s.length?s:[],project:p&&p.length?p:[O]},listStyles:{global:f&&f.length?f:[],project:y&&y.length?y:[]}}},Gt=(0,k.memo)(t=>T("style",{dangerouslySetInnerHTML:{__html:ct(`
          ${t.blockStyles}
          ${t.linkStyleSheet}
          ${t.listStyleSheet}
          ${t.textStyleSheet}
        `)}}),(t,r)=>(0,v.default)(t,r)),Kt=t=>Object.keys(t).reduce((r,i)=>{let o=t[i];return typeof o=="string"&&`${o}`.includes("(")&&!String(o).includes(")")&&(o=`${o})`),o&&i==="opacity"&&parseInt(String(o))>1&&(o=parseInt(`${o}`)/100),{...r,[i]:o}},{});eo=t=>{let r="text-global-styles",i=document.querySelector(`#${r}`);i?F.default.render(T(vt,{mode:t}),i):(i=document.createElement("div"),i.id=r,document.body.appendChild(i),F.default.render(T(vt,{mode:t}),i))},oo=async({newTextStyles:t,newLinkStyles:r,newListStyles:i})=>{let o=await Wt();if(t&&t.length){let p=t.filter(s=>!o.textStyles.project.some(y=>y.name===s.name));if(p.length){let s=[...o.textStyles.project,...p];et({global:o.textStyles.global,project:s}),H({styles:s,projectId:window.ServerData.projectId})}}if(i&&i.length){let p=i.filter(s=>!o.listStyles.project.some(y=>y.name===s.name));if(p.length){let s=[...o.listStyles.project,...p];it({global:o.listStyles.global,project:s}),A({styles:s,projectId:window.ServerData.projectId})}}if(r&&r.length){let p=r.filter(s=>!o.linkStyles.project.some(y=>y.name===s.name));if(p.length){let s=[...o.linkStyles.project,...p];rt({global:o.linkStyles.global,project:s}),z({styles:s,projectId:window.ServerData.projectId})}}}});export{ee as a,H as b,ht as c,qt as d,A as e,St as f,Qt as g,z as h,ft as i,M as j,$t as k,bt as l,wt as m,Lt as n,Ie as o,Pt as p,Wt as q,vt as r,eo as s,oo as t,Vt as u};
