import{V as A,W as U}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-J6VK3AW6.js";import{a as I,b,c as m,d as E}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-YMWJSZK3.js";import{a as P}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-TTAK5F5U.js";import{e as k,f,k as T}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-G7LL33IT.js";import{a as s,b as r,d as M,e as v,f as C,g as D}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-BMAKMPA2.js";import{b as a,c as w}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-UGELT6OI.js";import{a as x}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-RZYSPJF6.js";import{b as l}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-67K43HFM.js";import{a as y,c as F}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-55VYORUF.js";import{d as u}from"https://st-p.rmcdn.net/af2666fc/dist/c/c-UGUCNLQ2.js";var n=u(l()),R=u(P());w();var O=u(x()),d=u(l());E();w();T();U();D();var H={initialize:function(t){d.default.bindAll(this),d.default.extend(this,t),this.currentData=this._initCurrentData(),window.gtag&&this.currentData.userId&&!window.RM.common.isDownloadedSource&&window.gtag("set",{user_id:this.currentData.userId}),(0,O.default)(d.default.bind(function(){this.initialTracking()},this))},initialTracking(){let t=s("_rm_reg_cookie"),i=s("_rm_join_analytics_data");this.trackPage(),t&&(r("_rm_reg_cookie"),f.sendConversionEvent({CONVERSION_ID:a.GOOGLE_ADS_ID,CONVERSION_LABEL:a.GOOGLE_CONVERSION_LABEL_REGISTRATION,value:15,transaction_id:"",...this.currentData.userEmail&&{user_data:{email:this.currentData.userEmail}}}),f.sendEventToLinkedInInsights({partnerId:a.linkedInPartnerId,eventId:k.Registration})),i&&r("_rm_join_analytics_data")},sendEvent:function(t,i){if(!window.gtag||RM.constructorRouter&&RM.constructorRouter.previewMode)return;let e={};d.default.isObject(i)?e=d.default.extend(e,i):e.rm_parameter=i||void 0,window.gtag("event",t,{userId:this.currentData.userId,campaign:{name:this._rmdata?.first_campaign,source:this._rmdata?.first_source,medium:this._rmdata?.first_medium},c_id:this.currentData.gacid,rm_parameter:e.rm_parameter})},trackPage:function(){window.gtag&&(RM.constructorRouter&&RM.constructorRouter.previewMode||A()||window.gtag("event","page_view",{userId:this.currentData.userId,campaign:{name:this._rmdata?.first_campaign,source:this._rmdata?.first_source,medium:this._rmdata?.first_medium},c_id:this.currentData.gacid}))},_initCurrentData:function(){let t={};t.userId=null,window.ServerData.me&&(t.userId=window.ServerData.me._id||window.ServerData.me.user&&window.ServerData.me.user._id,t.userEmail=window.ServerData.me.email||window.ServerData.me.user&&window.ServerData.me.user.email),t.gacid=m.getGAcid();let i=s("_rmdata");return i&&(this._rmdata=JSON.parse(atob(i))),t}},g=H;var L={},h=L;var _=u(l());E();b();D();F();w();var N={initialize:function(t){_.default.bindAll(this),_.default.extend(this,t),this.shortlink_redirect=s("shortlink_redirect"),this.initialTracking(),this.ecommerceEvents=["add_to_cart","view_cart","remove_from_cart","begin_checkout","purchase"]},setClientIdFromCookie:function(){let t=s("_ga");if(t){let i=t.match(/GA[0-9]+\.[0-9]+\.(.*)/);this.clientId=i.length>1?i[1]:void 0,this.clientId&&window.gtag("set",{client_id:this.clientId})}},sendEvent:function(t,i){if(!window.gtag)return;if(!RM.common.isDomainViewer){let c=window.ServerData&&!window.ServerData.isCountryInEU&&window.Cookiebot&&!window.Cookiebot.declined,S=window.Cookiebot&&window.Cookiebot.consent.statistics;if(window.ServerData&&window.ServerData.isCountryInEU){if(!S&&!RM.common.isDomainViewer)return}else if(!c&&!RM.common.isDomainViewer)return}this.setClientIdFromCookie();let e={};if(_.default.isObject(i)?(e.rm_parameter=i.parameter,e.ecommerceData=i.ecommerceData):e.rm_parameter=i,RM.common.readymagTracker&&RM.common.isProjectOwnedByRM&&!this.ecommerceEvents.includes(t)){let c={userId:this.userId,firstCampaign:this._rmdata&&this._rmdata.first_campaign,firstMedium:this._rmdata&&this._rmdata.first_medium,campaign:{name:this._rmdata&&this._rmdata.first_campaign,source:this._rmdata&&this._rmdata.first_source,medium:this._rmdata&&this._rmdata.first_medium},c_id:this.clientId,rm_parameter:e.rm_parameter};window.gtag("event",t,c)}if(RM.common.userTracker&&!RM.common.homepageRewrite){let c={rm_parameter:e.rm_parameter,...e.ecommerceData?e.ecommerceData:void 0};window.gtag("event",t,c)}},trackPage:function(){window.gtag&&(this.setClientIdFromCookie(),RM.common.readymagTracker&&RM.common.isProjectOwnedByRM&&window.gtag("event","page_view",{userId:this.userId,firstCampaign:this._rmdata&&this._rmdata.first_campaign,firstMedium:this._rmdata&&this._rmdata.first_medium,campaign:{name:this._rmdata&&this._rmdata.first_campaign,source:this._rmdata&&this._rmdata.first_source,medium:this._rmdata&&this._rmdata.first_medium},c_id:this.clientId}),RM.common.userTracker&&window.gtag("event","page_view"),RM.common.readymagTracker&&RM.common.isProjectOwnedByRM&&(m.initLinkedInInsights(),m.trackPixelPageView()))},_processRedirectUTM:function(){if(!this.shortlink_redirect)return;let t=JSON.parse(atob(this.shortlink_redirect));return r("shortlink_redirect"),{campaignName:t.utm_campaign,campaignSource:t.utm_source,campaignMedium:t.utm_medium}},initialTracking:function(){this._rmdata=M(),C(),y("integration.firstpromoter")&&v(),RM.common.isDomainViewer?this.trackPage():m.loadLoggedUser(t=>{I.waitForCookieConsent().then(i=>{if(!i.statistics){r("_rmdata"),r("_rm_amp_data"),r(a.FIRSTPROMOTER_COOKIE_KEY),r(a.FIRSTPROMOTER_REF_COOKIE_KEY);return}t&&t._id&&(this.userId=t._id,window.gtag&&window.gtag("set",{user_id:t._id}),window?.amplitude?.setUserId(t._id),s("_rm_amp_data")&&r("_rm_amp_data")),this.trackPage()})})}},p=N;var o={};if(typeof window<"u"){if(location.origin===a.readymag_auth_host&&g?o=R.default.Model.extend(n.default.extend(n.default.extend(o,g),h)):p?o=R.default.Model.extend(n.default.extend(n.default.extend(o,p),h)):console.error("Analytics initialization error!"),window.RM&&window.RM.customAnalyticsHandlers&&!n.default.isEmpty(window.RM.customAnalyticsHandlers.event)){let t=o.prototype.sendEvent;o.prototype.sendEvent=function(){if(!window.ga)return;let i=t.apply(this,arguments);return window.RM.customAnalyticsHandlers&&n.default.isFunction(window.RM.customAnalyticsHandlers.run)&&window.RM.customAnalyticsHandlers.run("event",i),i}}if(window.RM&&window.RM.customAnalyticsHandlers&&!n.default.isEmpty(window.RM.customAnalyticsHandlers.track)){let t=o.prototype.trackPage;o.prototype.trackPage=function(){if(!window.ga)return;let i=t.apply(this,arguments);return i&&window.RM.customAnalyticsHandlers&&n.default.isFunction(window.RM.customAnalyticsHandlers.run)&&window.RM.customAnalyticsHandlers.run("track",i),i}}}var rt=o;export{rt as a};
