import{b as r}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-YAALJKSE.js";var b=r((d,o)=>{"use strict";o.exports=a;o.exports.isMobile=a;o.exports.default=a;var n=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,s=/CrOS/,l=/android|ipad|playbook|silk/i;function a(i){i||(i={});let e=i.ua;if(!e&&typeof navigator<"u"&&(e=navigator.userAgent),e&&e.headers&&typeof e.headers["user-agent"]=="string"&&(e=e.headers["user-agent"]),typeof e!="string")return!1;let t=n.test(e)&&!s.test(e)||!!i.tablet&&l.test(e);return!t&&i.tablet&&i.featureDetect&&navigator&&navigator.maxTouchPoints>1&&e.indexOf("Macintosh")!==-1&&e.indexOf("Safari")!==-1&&(t=!0),t}});export{b as a};
