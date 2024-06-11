import{a as r}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-YAALJKSE.js";function L(t){return e=>{let n=(t?Math[t]:Math.trunc)(e);return n===0?0:n}}var G=r(()=>{"use strict"});var ha,ks,Q,ht,N,E,J,Z,K,ga,gt,Ss,Da,ya,Is,S=r(()=>{"use strict";ha=Math.pow(10,8)*24*60*60*1e3,ks=-ha,Q=6048e5,ht=864e5,N=6e4,E=36e5,J=525600,Z=43200,K=1440,ga=3600,gt=ga*24,Ss=gt*7,Da=gt*365.2425,ya=Da/12,Is=ya*3});function u(t){let e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}var x=r(()=>{"use strict"});function Dt(t,e){return+u(t)-+u(e)}var tt=r(()=>{"use strict";x()});function _s(t,e,o){let n=Dt(t,e)/E;return L(o?.roundingMethod)(n)}var yt=r(()=>{"use strict";G();S();tt()});var Ma,Mt,Ot=r(()=>{"use strict";Ma={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Mt=(t,e,o)=>{let n,a=Ma[t];return typeof a=="string"?n=a:e===1?n=a.one:n=a.other.replace("{{count}}",e.toString()),o?.addSuffix?o.comparison&&o.comparison>0?"in "+n:n+" ago":n}});function q(t){return(e={})=>{let o=e.width?String(e.width):t.defaultWidth;return t.formats[o]||t.formats[t.defaultWidth]}}var wt=r(()=>{"use strict"});var Oa,wa,ka,kt,St=r(()=>{"use strict";wt();Oa={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},wa={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ka={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},kt={date:q({formats:Oa,defaultWidth:"full"}),time:q({formats:wa,defaultWidth:"full"}),dateTime:q({formats:ka,defaultWidth:"full"})}});var Sa,It,Tt=r(()=>{"use strict";Sa={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},It=(t,e,o,n)=>Sa[t]});function F(t){return(e,o)=>{let n=o?.context?String(o.context):"standalone",a;if(n==="formatting"&&t.formattingValues){let i=t.defaultFormattingWidth||t.defaultWidth,d=o?.width?String(o.width):i;a=t.formattingValues[d]||t.formattingValues[i]}else{let i=t.defaultWidth,d=o?.width?String(o.width):t.defaultWidth;a=t.values[d]||t.values[i]}let s=t.argumentCallback?t.argumentCallback(e):e;return a[s]}}var Yt=r(()=>{"use strict"});var Ia,Ta,Ya,ba,Wa,Na,Fa,bt,Wt=r(()=>{"use strict";Yt();Ia={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ta={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ya={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ba={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Wa={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Na={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Fa=(t,e)=>{let o=Number(t),n=o%100;if(n>20||n<10)switch(n%10){case 1:return o+"st";case 2:return o+"nd";case 3:return o+"rd"}return o+"th"},bt={ordinalNumber:Fa,era:F({values:Ia,defaultWidth:"wide"}),quarter:F({values:Ta,defaultWidth:"wide",argumentCallback:t=>t-1}),month:F({values:Ya,defaultWidth:"wide"}),day:F({values:ba,defaultWidth:"wide"}),dayPeriod:F({values:Wa,defaultWidth:"wide",formattingValues:Na,defaultFormattingWidth:"wide"})}});function v(t){return(e,o={})=>{let n=o.width,a=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],s=e.match(a);if(!s)return null;let i=s[0],d=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(d)?_a(d,p=>p.test(i)):va(d,p=>p.test(i)),m;m=t.valueCallback?t.valueCallback(c):c,m=o.valueCallback?o.valueCallback(m):m;let l=e.slice(i.length);return{value:m,rest:l}}}function va(t,e){for(let o in t)if(Object.prototype.hasOwnProperty.call(t,o)&&e(t[o]))return o}function _a(t,e){for(let o=0;o<t.length;o++)if(e(t[o]))return o}var Nt=r(()=>{"use strict"});function Ft(t){return(e,o={})=>{let n=e.match(t.matchPattern);if(!n)return null;let a=n[0],s=e.match(t.parsePattern);if(!s)return null;let i=t.valueCallback?t.valueCallback(s[0]):s[0];i=o.valueCallback?o.valueCallback(i):i;let d=e.slice(a.length);return{value:i,rest:d}}}var vt=r(()=>{"use strict"});var Ha,Pa,Ca,Ea,Ra,$a,La,Qa,qa,Aa,Xa,Ua,_t,Ht=r(()=>{"use strict";Nt();vt();Ha=/^(\d+)(th|st|nd|rd)?/i,Pa=/\d+/i,Ca={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ea={any:[/^b/i,/^(a|c)/i]},Ra={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},$a={any:[/1/i,/2/i,/3/i,/4/i]},La={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Qa={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},qa={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Aa={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Xa={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ua={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},_t={ordinalNumber:Ft({matchPattern:Ha,parsePattern:Pa,valueCallback:t=>parseInt(t,10)}),era:v({matchPatterns:Ca,defaultMatchWidth:"wide",parsePatterns:Ea,defaultParseWidth:"any"}),quarter:v({matchPatterns:Ra,defaultMatchWidth:"wide",parsePatterns:$a,defaultParseWidth:"any",valueCallback:t=>t+1}),month:v({matchPatterns:La,defaultMatchWidth:"wide",parsePatterns:Qa,defaultParseWidth:"any"}),day:v({matchPatterns:qa,defaultMatchWidth:"wide",parsePatterns:Aa,defaultParseWidth:"any"}),dayPeriod:v({matchPatterns:Xa,defaultMatchWidth:"any",parsePatterns:Ua,defaultParseWidth:"any"})}});var I,Pt=r(()=>{"use strict";Ot();St();Tt();Wt();Ht();I={code:"en-US",formatDistance:Mt,formatLong:kt,formatRelative:It,localize:bt,match:_t,options:{weekStartsOn:0,firstWeekContainsDate:1}}});var A=r(()=>{"use strict";Pt()});function D(){return ja}var ja,T=r(()=>{"use strict";ja={}});function et(t){let e=u(t);return e.setHours(0,0,0,0),e}var rt=r(()=>{"use strict";x()});function _(t){let e=u(t),o=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return o.setUTCFullYear(e.getFullYear()),+t-+o}var ot=r(()=>{"use strict";x()});function Ct(t,e){let o=et(t),n=et(e),a=+o-_(o),s=+n-_(n);return Math.round((a-s)/ht)}var nt=r(()=>{"use strict";S();rt();ot()});function y(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}var Y=r(()=>{"use strict"});function Et(t){let e=u(t),o=y(t,0);return o.setFullYear(e.getFullYear(),0,1),o.setHours(0,0,0,0),o}var at=r(()=>{"use strict";x();Y()});function Rt(t){let e=u(t);return Ct(e,Et(e))+1}var st=r(()=>{"use strict";nt();at();x()});function O(t,e){let o=D(),n=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??o.weekStartsOn??o.locale?.options?.weekStartsOn??0,a=u(t),s=a.getDay(),i=(s<n?7:0)+s-n;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}var H=r(()=>{"use strict";x();T()});function b(t){return O(t,{weekStartsOn:1})}var R=r(()=>{"use strict";H()});function X(t){let e=u(t),o=e.getFullYear(),n=y(t,0);n.setFullYear(o+1,0,4),n.setHours(0,0,0,0);let a=b(n),s=y(t,0);s.setFullYear(o,0,4),s.setHours(0,0,0,0);let i=b(s);return e.getTime()>=a.getTime()?o+1:e.getTime()>=i.getTime()?o:o-1}var U=r(()=>{"use strict";Y();R();x()});function $t(t){let e=X(t),o=y(t,0);return o.setFullYear(e,0,4),o.setHours(0,0,0,0),b(o)}var it=r(()=>{"use strict";U();R();Y()});function Lt(t){let e=u(t),o=+b(e)-+$t(e);return Math.round(o/Q)+1}var ft=r(()=>{"use strict";S();R();it();x()});function j(t,e){let o=u(t),n=o.getFullYear(),a=D(),s=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=y(t,0);i.setFullYear(n+1,0,s),i.setHours(0,0,0,0);let d=O(i,e),c=y(t,0);c.setFullYear(n,0,s),c.setHours(0,0,0,0);let m=O(c,e);return o.getTime()>=d.getTime()?n+1:o.getTime()>=m.getTime()?n:n-1}var z=r(()=>{"use strict";Y();H();x();T()});function Qt(t,e){let o=D(),n=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,a=j(t,e),s=y(t,0);return s.setFullYear(a,0,n),s.setHours(0,0,0,0),O(s,e)}var ut=r(()=>{"use strict";Y();z();H();T()});function qt(t,e){let o=u(t),n=+O(o,e)-+Qt(o,e);return Math.round(n/Q)+1}var ct=r(()=>{"use strict";S();H();ut();x()});function f(t,e){let o=t<0?"-":"",n=Math.abs(t).toString().padStart(e,"0");return o+n}var B=r(()=>{"use strict"});var w,At=r(()=>{"use strict";B();w={y(t,e){let o=t.getFullYear(),n=o>0?o:1-o;return f(e==="yy"?n%100:n,e.length)},M(t,e){let o=t.getMonth();return e==="M"?String(o+1):f(o+1,2)},d(t,e){return f(t.getDate(),e.length)},a(t,e){let o=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return o.toUpperCase();case"aaa":return o;case"aaaaa":return o[0];case"aaaa":default:return o==="am"?"a.m.":"p.m."}},h(t,e){return f(t.getHours()%12||12,e.length)},H(t,e){return f(t.getHours(),e.length)},m(t,e){return f(t.getMinutes(),e.length)},s(t,e){return f(t.getSeconds(),e.length)},S(t,e){let o=e.length,n=t.getMilliseconds(),a=Math.trunc(n*Math.pow(10,o-3));return f(a,e.length)}}});function Xt(t,e=""){let o=t>0?"-":"+",n=Math.abs(t),a=Math.trunc(n/60),s=n%60;return s===0?o+String(a):o+String(a)+e+f(s,2)}function Ut(t,e){return t%60===0?(t>0?"-":"+")+f(Math.abs(t)/60,2):W(t,e)}function W(t,e=""){let o=t>0?"-":"+",n=Math.abs(t),a=f(Math.trunc(n/60),2),s=f(n%60,2);return o+a+e+s}var P,mt,jt=r(()=>{"use strict";st();ft();U();ct();z();B();At();P={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},mt={G:function(t,e,o){let n=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return o.era(n,{width:"abbreviated"});case"GGGGG":return o.era(n,{width:"narrow"});case"GGGG":default:return o.era(n,{width:"wide"})}},y:function(t,e,o){if(e==="yo"){let n=t.getFullYear(),a=n>0?n:1-n;return o.ordinalNumber(a,{unit:"year"})}return w.y(t,e)},Y:function(t,e,o,n){let a=j(t,n),s=a>0?a:1-a;if(e==="YY"){let i=s%100;return f(i,2)}return e==="Yo"?o.ordinalNumber(s,{unit:"year"}):f(s,e.length)},R:function(t,e){let o=X(t);return f(o,e.length)},u:function(t,e){let o=t.getFullYear();return f(o,e.length)},Q:function(t,e,o){let n=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return f(n,2);case"Qo":return o.ordinalNumber(n,{unit:"quarter"});case"QQQ":return o.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return o.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return o.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,e,o){let n=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return f(n,2);case"qo":return o.ordinalNumber(n,{unit:"quarter"});case"qqq":return o.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return o.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return o.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,e,o){let n=t.getMonth();switch(e){case"M":case"MM":return w.M(t,e);case"Mo":return o.ordinalNumber(n+1,{unit:"month"});case"MMM":return o.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return o.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return o.month(n,{width:"wide",context:"formatting"})}},L:function(t,e,o){let n=t.getMonth();switch(e){case"L":return String(n+1);case"LL":return f(n+1,2);case"Lo":return o.ordinalNumber(n+1,{unit:"month"});case"LLL":return o.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return o.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return o.month(n,{width:"wide",context:"standalone"})}},w:function(t,e,o,n){let a=qt(t,n);return e==="wo"?o.ordinalNumber(a,{unit:"week"}):f(a,e.length)},I:function(t,e,o){let n=Lt(t);return e==="Io"?o.ordinalNumber(n,{unit:"week"}):f(n,e.length)},d:function(t,e,o){return e==="do"?o.ordinalNumber(t.getDate(),{unit:"date"}):w.d(t,e)},D:function(t,e,o){let n=Rt(t);return e==="Do"?o.ordinalNumber(n,{unit:"dayOfYear"}):f(n,e.length)},E:function(t,e,o){let n=t.getDay();switch(e){case"E":case"EE":case"EEE":return o.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return o.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return o.day(n,{width:"short",context:"formatting"});case"EEEE":default:return o.day(n,{width:"wide",context:"formatting"})}},e:function(t,e,o,n){let a=t.getDay(),s=(a-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return f(s,2);case"eo":return o.ordinalNumber(s,{unit:"day"});case"eee":return o.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return o.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return o.day(a,{width:"short",context:"formatting"});case"eeee":default:return o.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,o,n){let a=t.getDay(),s=(a-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return f(s,e.length);case"co":return o.ordinalNumber(s,{unit:"day"});case"ccc":return o.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return o.day(a,{width:"narrow",context:"standalone"});case"cccccc":return o.day(a,{width:"short",context:"standalone"});case"cccc":default:return o.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,o){let n=t.getDay(),a=n===0?7:n;switch(e){case"i":return String(a);case"ii":return f(a,e.length);case"io":return o.ordinalNumber(a,{unit:"day"});case"iii":return o.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return o.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return o.day(n,{width:"short",context:"formatting"});case"iiii":default:return o.day(n,{width:"wide",context:"formatting"})}},a:function(t,e,o){let a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return o.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return o.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return o.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return o.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,o){let n=t.getHours(),a;switch(n===12?a=P.noon:n===0?a=P.midnight:a=n/12>=1?"pm":"am",e){case"b":case"bb":return o.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return o.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return o.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return o.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,o){let n=t.getHours(),a;switch(n>=17?a=P.evening:n>=12?a=P.afternoon:n>=4?a=P.morning:a=P.night,e){case"B":case"BB":case"BBB":return o.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return o.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return o.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,o){if(e==="ho"){let n=t.getHours()%12;return n===0&&(n=12),o.ordinalNumber(n,{unit:"hour"})}return w.h(t,e)},H:function(t,e,o){return e==="Ho"?o.ordinalNumber(t.getHours(),{unit:"hour"}):w.H(t,e)},K:function(t,e,o){let n=t.getHours()%12;return e==="Ko"?o.ordinalNumber(n,{unit:"hour"}):f(n,e.length)},k:function(t,e,o){let n=t.getHours();return n===0&&(n=24),e==="ko"?o.ordinalNumber(n,{unit:"hour"}):f(n,e.length)},m:function(t,e,o){return e==="mo"?o.ordinalNumber(t.getMinutes(),{unit:"minute"}):w.m(t,e)},s:function(t,e,o){return e==="so"?o.ordinalNumber(t.getSeconds(),{unit:"second"}):w.s(t,e)},S:function(t,e){return w.S(t,e)},X:function(t,e,o){let n=t.getTimezoneOffset();if(n===0)return"Z";switch(e){case"X":return Ut(n);case"XXXX":case"XX":return W(n);case"XXXXX":case"XXX":default:return W(n,":")}},x:function(t,e,o){let n=t.getTimezoneOffset();switch(e){case"x":return Ut(n);case"xxxx":case"xx":return W(n);case"xxxxx":case"xxx":default:return W(n,":")}},O:function(t,e,o){let n=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Xt(n,":");case"OOOO":default:return"GMT"+W(n,":")}},z:function(t,e,o){let n=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Xt(n,":");case"zzzz":default:return"GMT"+W(n,":")}},t:function(t,e,o){let n=Math.trunc(t.getTime()/1e3);return f(n,e.length)},T:function(t,e,o){let n=t.getTime();return f(n,e.length)}}});var zt,Bt,za,Vt,Gt=r(()=>{"use strict";zt=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Bt=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},za=(t,e)=>{let o=t.match(/(P+)(p+)?/)||[],n=o[1],a=o[2];if(!a)return zt(t,e);let s;switch(n){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",zt(n,e)).replace("{{time}}",Bt(a,e))},Vt={p:Bt,P:za}});function Jt(t){return Ba.test(t)}function Zt(t){return Va.test(t)}function Kt(t,e,o){let n=Ja(t,e,o);if(console.warn(n),Ga.includes(t))throw new RangeError(n)}function Ja(t,e,o){let n=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${n} to the input \`${o}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}var Ba,Va,Ga,te=r(()=>{"use strict";Ba=/^D+$/,Va=/^Y+$/,Ga=["D","DD","YY","YYYY"]});function ee(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}var dt=r(()=>{"use strict"});function re(t){if(!ee(t)&&typeof t!="number")return!1;let e=u(t);return!isNaN(Number(e))}var pt=r(()=>{"use strict";dt();x()});function kf(t,e,o){let n=D(),a=o?.locale??n.locale??I,s=o?.firstWeekContainsDate??o?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=o?.weekStartsOn??o?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,d=u(t);if(!re(d))throw new RangeError("Invalid time value");let c=e.match(Ka).map(l=>{let p=l[0];if(p==="p"||p==="P"){let M=Vt[p];return M(l,a.formatLong)}return l}).join("").match(Za).map(l=>{if(l==="''")return{isToken:!1,value:"'"};let p=l[0];if(p==="'")return{isToken:!1,value:os(l)};if(mt[p])return{isToken:!0,value:l};if(p.match(rs))throw new RangeError("Format string contains an unescaped latin alphabet character `"+p+"`");return{isToken:!1,value:l}});a.localize.preprocessor&&(c=a.localize.preprocessor(d,c));let m={firstWeekContainsDate:s,weekStartsOn:i,locale:a};return c.map(l=>{if(!l.isToken)return l.value;let p=l.value;(!o?.useAdditionalWeekYearTokens&&Zt(p)||!o?.useAdditionalDayOfYearTokens&&Jt(p))&&Kt(p,e,String(t));let M=mt[p[0]];return M(d,p,a.localize,m)}).join("")}function os(t){let e=t.match(ts);return e?e[1].replace(es,"'"):t}var Za,Ka,ts,es,rs,oe=r(()=>{"use strict";A();T();jt();Gt();te();pt();x();Za=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ka=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ts=/^'([^]*?)'?$/,es=/''/g,rs=/[a-zA-Z]/});function Tf(t,e){let o=e?.additionalDigits??2,n=is(t),a;if(n.date){let c=fs(n.date,o);a=us(c.restDateString,c.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);let s=a.getTime(),i=0,d;if(n.time&&(i=cs(n.time),isNaN(i)))return new Date(NaN);if(n.timezone){if(d=ms(n.timezone),isNaN(d))return new Date(NaN)}else{let c=new Date(s+i),m=new Date(0);return m.setFullYear(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()),m.setHours(c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds()),m}return new Date(s+i+d)}function is(t){let e={},o=t.split(V.dateTimeDelimiter),n;if(o.length>2)return e;if(/:/.test(o[0])?n=o[0]:(e.date=o[0],n=o[1],V.timeZoneDelimiter.test(e.date)&&(e.date=t.split(V.timeZoneDelimiter)[0],n=t.substr(e.date.length,t.length))),n){let a=V.timezone.exec(n);a?(e.time=n.replace(a[1],""),e.timezone=a[1]):e.time=n}return e}function fs(t,e){let o=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),n=t.match(o);if(!n)return{year:NaN,restDateString:""};let a=n[1]?parseInt(n[1]):null,s=n[2]?parseInt(n[2]):null;return{year:s===null?a:s*100,restDateString:t.slice((n[1]||n[2]).length)}}function us(t,e){if(e===null)return new Date(NaN);let o=t.match(ns);if(!o)return new Date(NaN);let n=!!o[4],a=$(o[1]),s=$(o[2])-1,i=$(o[3]),d=$(o[4]),c=$(o[5])-1;if(n)return hs(e,d,c)?ds(e,d,c):new Date(NaN);{let m=new Date(0);return!ls(e,s,i)||!xs(e,a)?new Date(NaN):(m.setUTCFullYear(e,s,Math.max(a,i)),m)}}function $(t){return t?parseInt(t):1}function cs(t){let e=t.match(as);if(!e)return NaN;let o=lt(e[1]),n=lt(e[2]),a=lt(e[3]);return gs(o,n,a)?o*E+n*N+a*1e3:NaN}function lt(t){return t&&parseFloat(t.replace(",","."))||0}function ms(t){if(t==="Z")return 0;let e=t.match(ss);if(!e)return 0;let o=e[1]==="+"?-1:1,n=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return Ds(n,a)?o*(n*E+a*N):NaN}function ds(t,e,o){let n=new Date(0);n.setUTCFullYear(t,0,4);let a=n.getUTCDay()||7,s=(e-1)*7+o+1-a;return n.setUTCDate(n.getUTCDate()+s),n}function ne(t){return t%400===0||t%4===0&&t%100!==0}function ls(t,e,o){return e>=0&&e<=11&&o>=1&&o<=(ps[e]||(ne(t)?29:28))}function xs(t,e){return e>=1&&e<=(ne(t)?366:365)}function hs(t,e,o){return e>=1&&e<=53&&o>=0&&o<=6}function gs(t,e,o){return t===24?e===0&&o===0:o>=0&&o<60&&e>=0&&e<60&&t>=0&&t<25}function Ds(t,e){return e>=0&&e<=59}var V,ns,as,ss,ps,ae=r(()=>{"use strict";S();V={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},ns=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,as=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,ss=/^([+-])(\d{2})(?::?(\d{2}))?$/;ps=[31,null,31,30,31,30,31,31,30,31,30,31]});var se=r(()=>{"use strict"});var ie=r(()=>{"use strict"});var fe=r(()=>{"use strict"});var ue=r(()=>{"use strict"});var ce=r(()=>{"use strict"});var me=r(()=>{"use strict"});var de=r(()=>{"use strict"});var pe=r(()=>{"use strict"});var le=r(()=>{"use strict"});var xe=r(()=>{"use strict"});var he=r(()=>{"use strict"});var ge=r(()=>{"use strict"});var De=r(()=>{"use strict"});var ye=r(()=>{"use strict"});var Me=r(()=>{"use strict"});var Oe=r(()=>{"use strict"});var we=r(()=>{"use strict"});var ke=r(()=>{"use strict"});var Se=r(()=>{"use strict"});var Ie=r(()=>{"use strict"});var Te=r(()=>{"use strict"});var Ye=r(()=>{"use strict"});function be(t,e){let o=u(t),n=u(e),a=o.getTime()-n.getTime();return a<0?-1:a>0?1:a}var xt=r(()=>{"use strict";x()});var We=r(()=>{"use strict"});var Ne=r(()=>{"use strict"});var Fe=r(()=>{"use strict"});var ve=r(()=>{"use strict"});var _e=r(()=>{"use strict"});var He=r(()=>{"use strict"});var Pe=r(()=>{"use strict"});var Ce=r(()=>{"use strict"});var Ee=r(()=>{"use strict"});var Re=r(()=>{"use strict"});var $e=r(()=>{"use strict"});var Le=r(()=>{"use strict"});var Qe=r(()=>{"use strict"});var qe=r(()=>{"use strict"});var Ae=r(()=>{"use strict"});var Xe=r(()=>{"use strict"});var Ue=r(()=>{"use strict"});var je=r(()=>{"use strict"});var ze=r(()=>{"use strict"});var Be=r(()=>{"use strict"});var Ve=r(()=>{"use strict"});var Ge=r(()=>{"use strict"});var Je=r(()=>{"use strict"});var Ze=r(()=>{"use strict"});var Ke=r(()=>{"use strict"});var tr=r(()=>{"use strict"});var er=r(()=>{"use strict"});var rr=r(()=>{"use strict"});var or=r(()=>{"use strict"});var nr=r(()=>{"use strict"});var ar=r(()=>{"use strict"});var sr=r(()=>{"use strict"});var ir=r(()=>{"use strict"});var fr=r(()=>{"use strict"});var ur=r(()=>{"use strict"});var cr=r(()=>{"use strict"});var mr=r(()=>{"use strict"});var dr=r(()=>{"use strict"});var pr=r(()=>{"use strict"});var lr=r(()=>{"use strict"});var xr=r(()=>{"use strict"});var hr=r(()=>{"use strict"});var gr=r(()=>{"use strict"});var Dr=r(()=>{"use strict"});var yr=r(()=>{"use strict"});var Mr=r(()=>{"use strict"});var Or=r(()=>{"use strict"});var wr=r(()=>{"use strict"});var kr=r(()=>{"use strict"});function tc(t,e,o){let n=D(),a=o?.locale??n.locale??I,s=be(t,e);if(isNaN(s))throw new RangeError("Invalid time value");let i=Object.assign({},o,{addSuffix:o?.addSuffix,comparison:s}),d,c;s>0?(d=u(e),c=u(t)):(d=u(t),c=u(e));let m=L(o?.roundingMethod??"round"),l=c.getTime()-d.getTime(),p=l/N,M=_(c)-_(d),k=(l-M)/N,C=o?.unit,h;if(C?h=C:p<1?h="second":p<60?h="minute":p<K?h="hour":k<Z?h="day":k<J?h="month":h="year",h==="second"){let g=m(l/1e3);return a.formatDistance("xSeconds",g,i)}else if(h==="minute"){let g=m(p);return a.formatDistance("xMinutes",g,i)}else if(h==="hour"){let g=m(p/60);return a.formatDistance("xHours",g,i)}else if(h==="day"){let g=m(k/K);return a.formatDistance("xDays",g,i)}else if(h==="month"){let g=m(k/Z);return g===12&&C!=="month"?a.formatDistance("xYears",1,i):a.formatDistance("xMonths",g,i)}else{let g=m(k/J);return a.formatDistance("xYears",g,i)}}var Sr=r(()=>{"use strict";A();T();G();ot();xt();S();x()});var Ir=r(()=>{"use strict"});var Tr=r(()=>{"use strict"});function sc(t,e){let o=D(),n=e?.locale??o.locale??I,a=e?.format??ys,s=e?.zero??!1,i=e?.delimiter??" ";return n.formatDistance?a.reduce((c,m)=>{let l=`x${m.replace(/(^.)/,M=>M.toUpperCase())}`,p=t[m];return p!==void 0&&(s||t[m])?c.concat(n.formatDistance(l,p)):c},[]).join(i):""}var ys,Yr=r(()=>{"use strict";A();T();ys=["years","months","weeks","days","hours","minutes","seconds"]});function cc(t,e){let o=u(t);if(isNaN(o.getTime()))throw new RangeError("Invalid time value");let n=e?.format??"extended",a=e?.representation??"complete",s="",i="",d=n==="extended"?"-":"",c=n==="extended"?":":"";if(a!=="time"){let m=f(o.getDate(),2),l=f(o.getMonth()+1,2);s=`${f(o.getFullYear(),4)}${d}${l}${d}${m}`}if(a!=="date"){let m=o.getTimezoneOffset();if(m!==0){let h=Math.abs(m),g=f(Math.trunc(h/60),2),xa=f(h%60,2);i=`${m<0?"+":"-"}${g}:${xa}`}else i="Z";let l=f(o.getHours(),2),p=f(o.getMinutes(),2),M=f(o.getSeconds(),2),k=s===""?"":"T",C=[l,p,M].join(c);s=`${s}${k}${C}${i}`}return s}var br=r(()=>{"use strict";x();B()});var Wr=r(()=>{"use strict"});var Nr=r(()=>{"use strict"});var Fr=r(()=>{"use strict"});var vr=r(()=>{"use strict"});var _r=r(()=>{"use strict"});var Hr=r(()=>{"use strict"});var Pr=r(()=>{"use strict"});var Cr=r(()=>{"use strict"});var Er=r(()=>{"use strict"});var Rr=r(()=>{"use strict"});var $r=r(()=>{"use strict"});var Lr=r(()=>{"use strict"});var Qr=r(()=>{"use strict"});var qr=r(()=>{"use strict"});var Ar=r(()=>{"use strict"});var Xr=r(()=>{"use strict"});var Ur=r(()=>{"use strict"});var jr=r(()=>{"use strict"});var zr=r(()=>{"use strict"});var Br=r(()=>{"use strict"});var Vr=r(()=>{"use strict"});var Gr=r(()=>{"use strict"});var Jr=r(()=>{"use strict"});var Zr=r(()=>{"use strict"});var Kr=r(()=>{"use strict"});var to=r(()=>{"use strict"});var eo=r(()=>{"use strict"});var ro=r(()=>{"use strict"});var oo=r(()=>{"use strict"});var no=r(()=>{"use strict"});var ao=r(()=>{"use strict"});var so=r(()=>{"use strict"});var io=r(()=>{"use strict"});var fo=r(()=>{"use strict"});var uo=r(()=>{"use strict"});var co=r(()=>{"use strict"});var mo=r(()=>{"use strict"});var po=r(()=>{"use strict"});var lo=r(()=>{"use strict"});var xo=r(()=>{"use strict"});var ho=r(()=>{"use strict"});var go=r(()=>{"use strict"});var Do=r(()=>{"use strict"});var yo=r(()=>{"use strict"});var Mo=r(()=>{"use strict"});var Oo=r(()=>{"use strict"});var wo=r(()=>{"use strict"});var ko=r(()=>{"use strict"});var So=r(()=>{"use strict"});var Io=r(()=>{"use strict"});var To=r(()=>{"use strict"});var Yo=r(()=>{"use strict"});var bo=r(()=>{"use strict"});var Wo=r(()=>{"use strict"});var No=r(()=>{"use strict"});var Fo=r(()=>{"use strict"});var vo=r(()=>{"use strict"});var _o=r(()=>{"use strict"});var Ho=r(()=>{"use strict"});var Po=r(()=>{"use strict"});var Co=r(()=>{"use strict"});var Eo=r(()=>{"use strict"});var Ro=r(()=>{"use strict"});var $o=r(()=>{"use strict"});var Lo=r(()=>{"use strict"});var Qo=r(()=>{"use strict"});var qo=r(()=>{"use strict"});var Ao=r(()=>{"use strict"});var Xo=r(()=>{"use strict"});var Uo=r(()=>{"use strict"});var jo=r(()=>{"use strict"});var zo=r(()=>{"use strict"});var Bo=r(()=>{"use strict"});var Vo=r(()=>{"use strict"});var Go=r(()=>{"use strict"});var Jo=r(()=>{"use strict"});var Zo=r(()=>{"use strict"});var Ko=r(()=>{"use strict"});var tn=r(()=>{"use strict"});var en=r(()=>{"use strict"});var rn=r(()=>{"use strict"});var on=r(()=>{"use strict"});var nn=r(()=>{"use strict"});var an=r(()=>{"use strict"});var sn=r(()=>{"use strict"});var fn=r(()=>{"use strict"});var un=r(()=>{"use strict"});var cn=r(()=>{"use strict"});var mn=r(()=>{"use strict"});var dn=r(()=>{"use strict"});var pn=r(()=>{"use strict"});var ln=r(()=>{"use strict"});var xn=r(()=>{"use strict"});var hn=r(()=>{"use strict"});var gn=r(()=>{"use strict"});var Dn=r(()=>{"use strict"});var yn=r(()=>{"use strict"});var Mn=r(()=>{"use strict"});var On=r(()=>{"use strict"});var wn=r(()=>{"use strict"});var kn=r(()=>{"use strict"});var Sn=r(()=>{"use strict"});var In=r(()=>{"use strict"});var Tn=r(()=>{"use strict"});var Yn=r(()=>{"use strict"});var bn=r(()=>{"use strict"});var Wn=r(()=>{"use strict"});var Nn=r(()=>{"use strict"});var Fn=r(()=>{"use strict"});var vn=r(()=>{"use strict"});var _n=r(()=>{"use strict"});var Hn=r(()=>{"use strict"});var Pn=r(()=>{"use strict"});var Cn=r(()=>{"use strict"});var En=r(()=>{"use strict"});var Rn=r(()=>{"use strict"});var $n=r(()=>{"use strict"});var Ln=r(()=>{"use strict"});var Qn=r(()=>{"use strict"});var qn=r(()=>{"use strict"});var An=r(()=>{"use strict"});var Xn=r(()=>{"use strict"});var Un=r(()=>{"use strict"});var jn=r(()=>{"use strict"});var zn=r(()=>{"use strict"});var Bn=r(()=>{"use strict"});var Vn=r(()=>{"use strict"});var Gn=r(()=>{"use strict"});var Jn=r(()=>{"use strict"});var Zn=r(()=>{"use strict"});var Kn=r(()=>{"use strict"});var ta=r(()=>{"use strict"});var ea=r(()=>{"use strict"});var ra=r(()=>{"use strict"});var oa=r(()=>{"use strict"});var na=r(()=>{"use strict"});var aa=r(()=>{"use strict"});var sa=r(()=>{"use strict"});var ia=r(()=>{"use strict"});var fa=r(()=>{"use strict"});var ua=r(()=>{"use strict"});var ca=r(()=>{"use strict"});var ma=r(()=>{"use strict"});var da=r(()=>{"use strict"});var pa=r(()=>{"use strict"});var la=r(()=>{"use strict"});var Ms=r(()=>{"use strict";fe();de();se();le();he();pe();ge();ie();De();ye();Me();Oe();we();Ie();Te();Ye();xt();We();Y();Ne();ve();nt();_e();He();Pe();Ee();Re();$e();Le();yt();qe();tt();Ae();ze();Be();Ve();Ge();Je();Ze();Ke();er();rr();nr();ar();sr();fr();cr();mr();Xe();dr();pr();xr();hr();gr();Ue();Dr();yr();Mr();Or();lr();ur();wr();oe();kr();Sr();Ir();Tr();Yr();br();Wr();Nr();Fr();vr();_r();Hr();Pr();Cr();st();Er();$r();Lr();Qr();qr();Ar();ft();U();Xr();Ur();jr();zr();Br();Ce();Vr();Gr();Jr();ct();Zr();z();to();eo();ro();oo();no();ao();so();io();fo();uo();co();dt();mo();po();lo();xo();ho();je();Rr();ko();So();Io();Fe();Yo();Wo();No();Fo();vo();_o();Po();bo();Co();ue();ce();Eo();Ro();$o();Lo();Qo();qo();Ao();Xo();Uo();jo();zo();Bo();pt();Vo();me();Go();Zo();Ko();en();rn();Kr();on();tn();nn();an();ke();sn();fn();un();cn();Se();mn();dn();pn();ln();xn();hn();gn();Dn();yn();Mn();On();wn();kn();wo();ae();Sn();In();Tn();Yn();bn();Wn();Nn();Fn();vn();_n();Hn();Pn();Cn();En();Rn();Ln();Qn();Mo();qn();An();Xn();Oo();yo();xe();Un();jn();$n();zn();Bn();Do();Vn();Gn();rt();Jn();To();R();it();tr();ir();or();Ho();Zn();Kn();H();ut();at();ta();ra();oa();Jo();na();Qe();aa();sa();ea();ia();fa();ua();ca();x();go();ma();da();pa();la()});export{_s as a,kf as b,tc as c,sc as d,cc as e,Tf as f,Ms as g};
