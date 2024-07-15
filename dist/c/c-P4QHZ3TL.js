import{b as _,c as P}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-QI25MWMS.js";import{a as f}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-OL6RUHLY.js";import{b as d}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-UGUCNLQ2.js";var R=d((T,y)=>{var m=Object.create,n=Object.defineProperty,v=Object.getOwnPropertyDescriptor,b=Object.getOwnPropertyNames,g=Object.getPrototypeOf,O=Object.prototype.hasOwnProperty,w=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,D=(t,e)=>{for(var r in e)n(t,r,{get:e[r],enumerable:!0})},u=(t,e,r,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of b(e))!O.call(t,a)&&a!==r&&n(t,a,{get:()=>e[a],enumerable:!(l=v(e,a))||l.enumerable});return t},L=(t,e,r)=>(r=t!=null?m(g(t)):{},u(e||!t||!t.__esModule?n(r,"default",{value:t,enumerable:!0}):r,t)),M=t=>u(n({},"__esModule",{value:!0}),t),o=(t,e,r)=>(w(t,typeof e!="symbol"?e+"":e,r),r),c={};D(c,{default:()=>i});y.exports=M(c);var p=L(f()),h=_(),E=P(),S="https://player.vimeo.com/api/player.js",j="Vimeo",k=t=>t.replace("/manage/videos",""),i=class extends p.Component{constructor(){super(...arguments),o(this,"callPlayer",h.callPlayer),o(this,"duration",null),o(this,"currentTime",null),o(this,"secondsLoaded",null),o(this,"mute",()=>{this.setMuted(!0)}),o(this,"unmute",()=>{this.setMuted(!1)}),o(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){this.duration=null,(0,h.getSDK)(S,j).then(r=>{if(!this.container)return;let{playerOptions:l,title:a}=this.props.config;this.player=new r.Player(this.container,{url:k(e),autoplay:this.props.playing,muted:this.props.muted,loop:this.props.loop,playsinline:this.props.playsinline,controls:this.props.controls,...l}),this.player.ready().then(()=>{let s=this.container.querySelector("iframe");s.style.width="100%",s.style.height="100%",a&&(s.title=a)}).catch(this.props.onError),this.player.on("loaded",()=>{this.props.onReady(),this.refreshDuration()}),this.player.on("play",()=>{this.props.onPlay(),this.refreshDuration()}),this.player.on("pause",this.props.onPause),this.player.on("seeked",s=>this.props.onSeek(s.seconds)),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",({seconds:s})=>{this.currentTime=s}),this.player.on("progress",({seconds:s})=>{this.secondsLoaded=s}),this.player.on("bufferstart",this.props.onBuffer),this.player.on("bufferend",this.props.onBufferEnd),this.player.on("playbackratechange",s=>this.props.onPlaybackRateChange(s.playbackRate))},this.props.onError)}refreshDuration(){this.player.getDuration().then(e=>{this.duration=e})}play(){let e=this.callPlayer("play");e&&e.catch(this.props.onError)}pause(){this.callPlayer("pause")}stop(){this.callPlayer("unload")}seekTo(e,r=!0){this.callPlayer("setCurrentTime",e),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setMuted(e){this.callPlayer("setMuted",e)}setLoop(e){this.callPlayer("setLoop",e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){let{display:e}=this.props,r={width:"100%",height:"100%",overflow:"hidden",display:e};return p.default.createElement("div",{key:this.props.url,ref:this.ref,style:r})}};o(i,"displayName","Vimeo");o(i,"canPlay",E.canPlay.vimeo);o(i,"forceLoad",!0)});export default R();
