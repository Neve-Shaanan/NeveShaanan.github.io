import{a}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-YAALJKSE.js";function s(){if(!u&&(u=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(c)}var u,c,p=a(()=>{"use strict";c=new Uint8Array(16)});var m,i=a(()=>{"use strict";m=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i});function R(t){return typeof t=="string"&&m.test(t)}var l,g=a(()=>{"use strict";i();l=R});function h(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=(o[t[e+0]]+o[t[e+1]]+o[t[e+2]]+o[t[e+3]]+"-"+o[t[e+4]]+o[t[e+5]]+"-"+o[t[e+6]]+o[t[e+7]]+"-"+o[t[e+8]]+o[t[e+9]]+"-"+o[t[e+10]]+o[t[e+11]]+o[t[e+12]]+o[t[e+13]]+o[t[e+14]]+o[t[e+15]]).toLowerCase();if(!l(r))throw TypeError("Stringified UUID is invalid");return r}var o,d,x,v=a(()=>{"use strict";g();o=[];for(d=0;d<256;++d)o.push((d+256).toString(16).substr(1));x=h});function V(t,e,r){t=t||{};var f=t.random||(t.rng||s)();if(f[6]=f[6]&15|64,f[8]=f[8]&63|128,e){r=r||0;for(var n=0;n<16;++n)e[r+n]=f[n];return e}return x(f)}var w,y=a(()=>{"use strict";p();v();w=V});var C=a(()=>{"use strict";y()});export{w as a,C as b};
