import{b as n,e as m}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-M4WGPSYY.js";import{a as c,b as s}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-KJBRE2CN.js";import{n as a,o as h}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-TNUHHGT2.js";import{a as p}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-YAALJKSE.js";function i(t,e){if(typeof e=="object"){let d=Object.keys(e);if(d.length===1){let o=d[0];if(t.startsWith("html")){if(o.startsWith("html"))return{[`${t.replace(" &","")}${o.replace("html","")}`]:e[o]};if(o.startsWith("@media"))throw new c("Invalid css media query",{value:{query:t,styles:e},reason:"Cannot use media query inside css-class"})}else if(o.startsWith("@media"))throw new c("Invalid css media query",{value:{query:t,styles:e},reason:"Cannot merge two media queries"})}}return{[t]:e}}function l(){let{default:t,tablet_portrait:e}=a.dictionary;return t.width-(t.width-e.width)/2}function x(){let{phone_portrait:t,tablet_portrait:e}=a.dictionary;return e.width-(e.width-t.width)/2}function Q(t){return i(r.desktopDevice,t)}function W(t){return i(r.tabletViewport,t)}function k(t){return i(r.phoneViewport,t)}function v(t){return i(r.firefox,t)}function g(t){return i(r.nonFirefox,t)}function V(t){return i(r.safari,t)}function $(t){return i(r.chrome,t)}function P(t){return i(r.retina,t)}var S,f,u,b,r,C=p(()=>{"use strict";h();s();m();S=l(),f=1024,u=x(),b=599,r={tabletViewport:`@media (orientation: landscape) and (max-width: ${n(S)}),
  (orientation: portrait) and (max-width: ${n(f)})`,phoneViewport:`@media (orientation: landscape) and (max-width: ${n(u)}),
  (orientation: portrait) and (max-width: ${n(b)})`,retina:"@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)",desktopDevice:"html.desktop &",firefox:"html.firefox &",nonFirefox:"html:not(.firefox) &",safari:"html.safari &",chrome:"html.chrome &",desktopChrome:"html.desktop.chrome &"}});export{f as a,Q as b,W as c,k as d,v as e,g as f,V as g,$ as h,P as i,C as j};
