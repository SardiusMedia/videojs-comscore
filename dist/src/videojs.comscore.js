var ns_=ns_||{};ns_.StreamSense=ns_.StreamSense||function(){function n(t){e=t}function r(e){t=e}function u(t,n){var r=t||"",i=f,u="undefined",a=s.comScore||s.sitestat||function(t){var n="comScore=",r=o.cookie,i="",a="indexOf",f="substring",l="length",c=2048,h,p="&ns_",d="&",v,m,g,y,b=s.encodeURIComponent||escape;if(r[a](n)+1)for(g=0,m=r.split(";"),y=m[l];g<y;g++)v=m[g][a](n),v+1&&(i=d+unescape(m[g][f](v+n[l])));t+=p+"_t="+ +(new Date)+p+"c="+(o.characterSet||o.defaultCharset||"")+i,t[l]>c&&t[a](d)>0&&(h=t[f](0,c-8).lastIndexOf(d),t=(t[f](0,h)+p+"cut="+b(t[f](h+1)))[f](0,c)),e(t),typeof ns_p===u&&(ns_p={src:t}),ns_p.lastMeasurement=t};if(typeof n!==u){var l=[],c=s.encodeURIComponent||escape;for(var h in n)n.hasOwnProperty(h)&&l.push(c(h)+"="+c(n[h]));/[\?\&]$/.test(r)||(r+="&"),r+=l.join("&")}return a(r)}function a(e,t){var n,r=2048,i=s.encodeURIComponent||escape,u=[],a=p.LABELS_ORDER,f=e.split("?"),l=f[0],c=f[1],h=c.split("&");for(var d=0,v=h.length;d<v;d++){var m=h[d].split("="),g=unescape(m[0]),y=unescape(m[1]);g&&(t[g]=y)}var b={};for(var d=0,v=a.length;d<v;d++){var w=a[d];t.hasOwnProperty(w)&&(b[w]=!0,u.push(i(w)+"="+i(t[w])))}for(var w in t){if(b[w])continue;t.hasOwnProperty(w)&&u.push(i(w)+"="+i(t[w]))}return n=l+"?"+u.join("&"),n=n+(n.indexOf("&c8=")<0?"&c8="+i(o.title):"")+(n.indexOf("&c7=")<0?"&c7="+i(o.URL):"")+(n.indexOf("&c9=")<0?"&c9="+i(o.referrer):""),n.length>r&&n.indexOf("&")>0&&(last=n.substr(0,r-8).lastIndexOf("&"),n=(n.substring(0,last)+"&ns_cut="+i(n.substring(last+1))).substr(0,r)),n}var e=function(e,t){},t=function(e,t,n){};n(function(e,t){var n=new Image;n.src=e,t&&setTimeout(t,0)}),r(function(e,t,n){n&&setTimeout(n,0)});var i=typeof window!="undefined"&&typeof document!="undefined",s,o;i?(s=window,o=document):(s={},o={location:{href:""},title:"",URL:"",referrer:"",cookie:""});var f=function(){var e={uid:function(){var e=1;return function(){return+(new Date)+"_"+e++}}(),filter:function(e,t){var n={};for(var r in t)t.hasOwnProperty(r)&&e(t[r])&&(n[r]=t[r]);return n},extend:function(e){var t=arguments.length,n;e=e||{};for(var r=1;r<t;r++){n=arguments[r];if(!n)continue;for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])}return e},getString:function(e,t){var n=String(e);return e==null?t||"na":n},getLong:function(e,t){var n=Number(e);return e==null||isNaN(n)?t||0:n},getInteger:function(e,t){var n=Number(e);return e==null||isNaN(n)?t||0:n},getBoolean:function(e,t){var n=String(e).toLowerCase()=="true";return e==null?t||!1:n},isNotEmpty:function(e){return e!=null&&e.length>0},indexOf:function(t,n){var r=-1;return e.forEach(n,function(e,n){e==t&&(r=n)}),r},forEach:function(e,t,n){try{if(typeof t=="function"){n=typeof n!="undefined"?n:null;if(typeof e["length"]!="number"||typeof e[0]=="undefined"){var r=typeof e.__proto__!="undefined";for(var i in e)(!r||r&&typeof e.__proto__[i]=="undefined")&&typeof e[i]!="function"&&t.call(n,e[i],i)}else for(var i=0,s=e.length;i<s;i++)t.call(n,e[i],i)}}catch(o){}},regionMatches:function(e,t,n,r,i){if(t<0||r<0||t+i>e.length||r+i>n.length)return!1;while(--i>=0){var s=e.charAt(t++),o=n.charAt(r++);if(s!=o)return!1}return!0},size:function(e){var t=0,n;for(var n in e)e.hasOwnProperty(n)&&t++;return t},log:function(e,t){if(typeof t!="undefined"&&t){var n=new Date,r=n.getHours()+":"+n.getMinutes()+":"+n.getSeconds();console.log(r,e)}},isTrue:function(e){return typeof e=="undefined"?!1:typeof e=="string"?(e=e.toLowerCase(),e==="true"||e==="1"||e==="on"):e?!0:!1},toString:function(t){if(typeof t=="undefined")return"undefined";if(typeof t=="string")return t;if(Object.prototype.toString.call(t)==="[object Array]")return t.join(",");if(e.size(t)>0){var n="";for(var r in t)t.hasOwnProperty(r)&&(n+=r+":"+t[r]+";");return n}return t.toString()},exists:function(e){return typeof e!="undefined"&&e!=null&&e},firstGreaterThan0:function(){for(var e=0,t=arguments.length;e<t;e++){var n=arguments[e];if(n>0)return n}return 0}};return e.filterMap=function(t,n){for(var r in t)e.indexOf(r,n)==-1&&delete t[r]},e.getKeys=function(e,t){var n,r=[];for(n in e)(!t||t.test(n))&&e.hasOwnProperty(n)&&(r[r.length]=n);return r},e}(),l=function(){var e=["play","pause","end","buffer","keep-alive","hb","custom","ad_play","ad_pause","ad_end","ad_click"];return{PLAY:0,PAUSE:1,END:2,BUFFER:3,KEEP_ALIVE:4,HEART_BEAT:5,CUSTOM:6,AD_PLAY:7,AD_PAUSE:8,AD_END:9,AD_CLICK:10,toString:function(t){return e[t]}}}(),c=function(){var e=[l.END,l.PLAY,l.PAUSE,l.BUFFER];return{IDLE:0,PLAYING:1,PAUSED:2,BUFFERING:3,toEventType:function(t){return e[t]}}}(),h={ADPLAY:l.AD_PLAY,ADPAUSE:l.AD_PAUSE,ADEND:l.AD_END,ADCLICK:l.AD_CLICK},p={STREAMSENSE_VERSION:"4.1311.28",BRIGHTCOVE_VERSION:"3.1401.20",FLOWPLAYER_VERSION:"4.1311.28",HTML5_VERSION:"4.1311.28",JWPLAYER_VERSION:"2.1401.20",VIDEOJS_VERSION:"4.1311.28",DEFAULT_PLAYERNAME:"streamsense",DEFAULT_HEARTBEAT_INTERVAL:[{playingtime:6e4,interval:1e4},{playingtime:null,interval:6e4}],KEEP_ALIVE_PERIOD:12e5,PAUSED_ON_BUFFERING_PERIOD:500,PAUSE_PLAY_SWITCH_DELAY:500,C1_VALUE:"19",C10_VALUE:"js",NS_AP_C12M_VALUE:"1",NS_NC_VALUE:"1",PAGE_NAME_LABEL:"name",LABELS_ORDER:["c1","c2","ns_site","ns_vsite","ns_ap_an","ns_ap_pn","ns_ap_pv","c12","name","ns_ak","ns_ap_ec","ns_ap_ev","ns_ap_device","ns_ap_id","ns_ap_csf","ns_ap_bi","ns_ap_pfm","ns_ap_pfv","ns_ap_ver","ns_ap_sv","ns_type","ns_radio","ns_nc","ns_ap_ui","ns_ap_gs","ns_st_sv","ns_st_pv","ns_st_it","ns_st_id","ns_st_ec","ns_st_sp","ns_st_sq","ns_st_cn","ns_st_ev","ns_st_po","ns_st_cl","ns_st_el","ns_st_pb","ns_st_hc","ns_st_mp","ns_st_mv","ns_st_pn","ns_st_tp","ns_st_pt","ns_st_pa","ns_st_ad","ns_st_li","ns_st_ci","ns_ap_jb","ns_ap_res","ns_ap_c12m","ns_ap_install","ns_ap_updated","ns_ap_lastrun","ns_ap_cs","ns_ap_runs","ns_ap_usage","ns_ap_fg","ns_ap_ft","ns_ap_dft","ns_ap_bt","ns_ap_dbt","ns_ap_dit","ns_ap_as","ns_ap_das","ns_ap_it","ns_ap_uc","ns_ap_aus","ns_ap_daus","ns_ap_us","ns_ap_dus","ns_ap_ut","ns_ap_oc","ns_ap_uxc","ns_ap_uxs","ns_ap_lang","ns_ap_miss","ns_ts","ns_st_ca","ns_st_cp","ns_st_er","ns_st_pe","ns_st_ui","ns_st_bc","ns_st_bt","ns_st_bp","ns_st_pc","ns_st_pp","ns_st_br","ns_st_ub","ns_st_vo","ns_st_ws","ns_st_pl","ns_st_pr","ns_st_ep","ns_st_ty","ns_st_cs","ns_st_ge","ns_st_st","ns_st_dt","ns_st_ct","ns_st_de","ns_st_pu","ns_st_cu","ns_st_fee","c7","c8","c9"]},d=function(){var e=function(){function h(e,t){var n=t[e];n!=null&&(a[e]=n)}var e=this,t=0,n=0,r=0,i=0,s=0,o=0,u,a;f.extend(this,{reset:function(t){t!=null&&t.length>0?f.filterMap(a,t):a={},a.hasOwnProperty("ns_st_cl")||(a.ns_st_cl="0"),a.hasOwnProperty("ns_st_pn")||(a.ns_st_pn="1"),a.hasOwnProperty("ns_st_tp")||(a.ns_st_tp="1"),e.setPauses(0),e.setStarts(0),e.setBufferingTime(0),e.setBufferingTimestamp(-1),e.setPlaybackTime(0),e.setPlaybackTimestamp(-1)},setLabels:function(t,n){t!=null&&f.extend(a,t),e.setRegisters(a,n)},getLabels:function(){return a},setLabel:function(t,n){var r={};r[t]=n,e.setLabels(r,null)},getLabel:function(e){return a[e]},getClipId:function(){return(typeof u=="undefined"||u==null)&&e.setClipId("1"),u},setClipId:function(e){u=e},setRegisters:function(i,o){var u=i.ns_st_cn;u!=null&&(e.setClipId(u),delete i.ns_st_cn),u=i.ns_st_bt,u!=null&&(r=Number(u),delete i.ns_st_bt),h("ns_st_cl",i),h("ns_st_pn",i),h("ns_st_tp",i),h("ns_st_ub",i),h("ns_st_br",i);if(o==c.PLAYING||o==null)u=i.ns_st_sq,u!=null&&(n=Number(u),delete i.ns_st_sq);o!=c.BUFFERING&&(u=i.ns_st_pt,u!=null&&(s=Number(u),delete i.ns_st_pt));if(o==c.PAUSED||o==c.IDLE||o==null)u=i.ns_st_pc,u!=null&&(t=Number(u),delete i.ns_st_pc)},createLabels:function(r,i){var s=i||{};s.ns_st_cn=e.getClipId(),s.ns_st_bt=String(e.getBufferingTime());if(r==l.PLAY||r==null)s.ns_st_sq=String(n);if(r==l.PAUSE||r==l.END||r==l.KEEP_ALIVE||r==l.HEART_BEAT||r==null)s.ns_st_pt=String(e.getPlaybackTime()),s.ns_st_pc=String(t);return f.extend(s,e.getLabels()),s},incrementPauses:function(){t++},incrementStarts:function(){n++},getBufferingTime:function(){var e=r;return i>=0&&(e+=+(new Date)-i),e},setBufferingTime:function(e){r=e},getPlaybackTime:function(){var e=s;return o>=0&&(e+=+(new Date)-o),e},setPlaybackTime:function(e){s=e},getPlaybackTimestamp:function(){return o},setPlaybackTimestamp:function(e){o=e},getBufferingTimestamp:function(){return i},setBufferingTimestamp:function(e){i=e},getPauses:function(){return t},setPauses:function(e){t=e},getStarts:function(){return n},setStarts:function(e){n=e}}),a={},e.reset()};return e}(),v=function(){var e=function(){var e=this,t=null,n,r=0,i=0,s=0,o=0,u=0,a,h=0,p=!1;f.extend(this,{reset:function(t){t!=null&&t.length>0?f.filterMap(a,t):a={},e.setPlaylistId(+(new Date)+"_"+h),e.setBufferingTime(0),e.setPlaybackTime(0),e.setPauses(0),e.setStarts(0),e.setRebufferCount(0),p=!1},setLabels:function(t,n){t!=null&&f.extend(a,t),e.setRegisters(a,n)},getLabels:function(){return a},setLabel:function(t,n){var r={};r[t]=n,e.setLabels(r,null)},getLabel:function(e){return a[e]},getClip:function(){return t},getPlaylistId:function(){return n},setPlaylistId:function(e){n=e},setRegisters:function(e,t){var a=e.ns_st_sp;a!=null&&(r=Number(a),delete e.ns_st_sp),a=e.ns_st_bc,a!=null&&(s=Number(a),delete e.ns_st_bc),a=e.ns_st_bp,a!=null&&(o=Number(a),delete e.ns_st_bp),a=e.ns_st_id,a!=null&&(n=a,delete e.ns_st_id),t!=c.BUFFERING&&(a=e.ns_st_pa,a!=null&&(u=Number(a),delete e.ns_st_pa));if(t==c.PAUSED||t==c.IDLE||t==null)a=e.ns_st_pp,a!=null&&(i=Number(a),delete e.ns_st_pp)},createLabels:function(t,o){var u=o||{};u.ns_st_bp=String(e.getBufferingTime()),u.ns_st_sp=String(r),u.ns_st_id=String(n),s>0&&(u.ns_st_bc=String(s));if(t==l.PAUSE||t==l.END||t==l.KEEP_ALIVE||t==l.HEART_BEAT||t==null)u.ns_st_pa=String(e.getPlaybackTime()),u.ns_st_pp=String(i);if(t==l.PLAY||t==null)e.didFirstPlayOccurred()||(u.ns_st_pb="1",e.setFirstPlayOccurred(!0));return f.extend(u,e.getLabels()),u},incrementStarts:function(){r++},incrementPauses:function(){i++,t.incrementPauses()},setPlaylistCounter:function(e){h=e},incrementPlaylistCounter:function(){h++},addPlaybackTime:function(n){if(t.getPlaybackTimestamp()>=0){var r=n-t.getPlaybackTimestamp();t.setPlaybackTimestamp(-1),t.setPlaybackTime(t.getPlaybackTime()+r),e.setPlaybackTime(e.getPlaybackTime()+r)}},addBufferingTime:function(n){if(t.getBufferingTimestamp()>=0){var r=n-t.getBufferingTimestamp();t.setBufferingTimestamp(-1),t.setBufferingTime(t.getBufferingTime()+r),e.setBufferingTime(e.getBufferingTime()+r)}},getBufferingTime:function(){var e=o;return t.getBufferingTimestamp()>=0&&(e+=+(new Date)-t.getBufferingTimestamp()),e},setBufferingTime:function(e){o=e},getPlaybackTime:function(){var e=u;return t.getPlaybackTimestamp()>=0&&(e+=+(new Date)-t.getPlaybackTimestamp()),e},setPlaybackTime:function(e){u=e},getStarts:function(){return r},setStarts:function(e){r=e},getPauses:function(){return i},setPauses:function(e){i=e},getRebufferCount:function(){return s},incrementRebufferCount:function(){s++},setRebufferCount:function(e){s=e},didFirstPlayOccurred:function(){return p},setFirstPlayOccurred:function(e){p=e}}),t=new d,a={},e.reset()};return e}(),m=function(){var t=function(t,i){function F(e){k=e}function I(e){var t=0;if(k!=null)for(var n=0;n<k.length;n++){var r=k[n],i=r.playingtime;if(!i||e<i){t=r.interval;break}}return t}function q(){W();var e=I(b.getClip().getPlaybackTime());if(e>0){var t=L>0?L:e;C=setTimeout(z,t)}L=0}function R(){W();var e=I(b.getClip().getPlaybackTime());L=e-b.getClip().getPlaybackTime()%e,C!=null&&W()}function U(){L=0,O=0,A=0}function z(){A++;var e=pt(l.HEART_BEAT,null);nt(e),L=0,q()}function W(){C!=null&&(clearTimeout(C),C=null)}function X(){$(),T=setTimeout(V,p.KEEP_ALIVE_PERIOD)}function V(){var e=pt(l.KEEP_ALIVE,null);nt(e),y++,X()}function $(){T!=null&&(clearTimeout(T),T=null)}function J(){Q(),s.isPauseOnBufferingEnabled()&&ut(c.PAUSED)&&(S=setTimeout(K,p.PAUSED_ON_BUFFERING_PERIOD))}function K(){if(_==c.PLAYING){b.incrementRebufferCount(),b.incrementPauses();var e=pt(l.PAUSE,null);nt(e),y++,_=c.PAUSED}}function Q(){S!=null&&(clearTimeout(S),S=null)}function G(){N!=null&&(clearTimeout(N),N=null)}function Y(e){return e==c.PLAYING||e==c.PAUSED}function Z(e){return e==l.PLAY?c.PLAYING:e==l.PAUSE?c.PAUSED:e==l.BUFFER?c.BUFFERING:e==l.END?c.IDLE:null}function et(e,t,n){G();if(lt(e))if(n)setTimeout(function(){et(e,t)},n);else{var r=ht(),i=d,s=ft(t),o=i>=0?s-i:0;st(ht(),t),ot(e,t),ct(e);for(var u=0,a=B.length;u<a;u++)B[u](r,e,t,o);tt(t),b.setRegisters(t,e),b.getClip().setRegisters(t,e);var l=pt(c.toEventType(e),t);f.extend(l,t),ut(g)&&(nt(l),_=g,y++)}}function tt(e){var t=e.ns_st_mp;t!=null&&(D=t,delete e.ns_st_mp),t=e.ns_st_mv,t!=null&&(P=t,delete e.ns_st_mv),t=e.ns_st_ec,t!=null&&(y=Number(t),delete e.ns_st_ec)}function nt(t,n){n===undefined&&(n=!0),n&&it(t);var r=s.getPixelURL();if(w){if(!rt()){var i=j.am,o=j.et,u=i.newApplicationMeasurement(w,o.HIDDEN,t,r);w.getQueue().offer(u)}}else r&&e(a(r,t))}function rt(){var e=w.getAppContext(),t=w.getSalt(),n=w.getPixelURL();return e==null||t==null||t.length==0||n==null||n.length==0}function it(e){H=pt(null),f.extend(H,e)}function st(e,t){var n=ft(t);if(e==c.PLAYING)b.addPlaybackTime(n),R(),$();else if(e==c.BUFFERING)b.addBufferingTime(n),Q();else if(e==c.IDLE){var r=f.getKeys(b.getClip().getLabels());b.getClip().reset(r)}}function ot(e,t){var n=ft(t),r=at(t);m=r,e==c.PLAYING?(q(),X(),b.getClip().setPlaybackTimestamp(n),ut(e)&&(b.getClip().incrementStarts(),b.getStarts()<1&&b.setStarts(1))):e==c.PAUSED?ut(e)&&b.incrementPauses():e==c.BUFFERING?(b.getClip().setBufferingTimestamp(n),x&&J()):e==c.IDLE&&U()}function ut(e){return e!=c.PAUSED||_!=c.IDLE&&_!=null?e!=c.BUFFERING&&_!=e:!1}function at(e){var t=-1;return e.hasOwnProperty("ns_st_po")&&(t=f.getInteger(e.ns_st_po)),t}function ft(e){var t=-1;return e.hasOwnProperty("ns_ts")&&(t=Number(e.ns_ts)),t}function lt(e){return e!=null&&ht()!=e}function ct(e){g=e,d=+(new Date)}function ht(){return g}function pt(){var e,t;arguments.length==1?(e=c.toEventType(g),t=arguments[0]):(e=arguments[0],t=arguments[1]);var n={};if(typeof document!="undefined"){var r=document;n.c7=r.URL,n.c8=r.title,n.c9=r.referrer}return t!=null&&f.extend(n,t),n.hasOwnProperty("ns_ts")||(n.ns_ts=String(+(new Date))),e!=null&&!n.hasOwnProperty("ns_st_ev")&&(n.ns_st_ev=l.toString(e)),s.isPersistentLabelsShared()&&w&&f.extend(n,w.getLabels()),f.extend(n,s.getLabels()),dt(e,n),b.createLabels(e,n),b.getClip().createLabels(e,n),n.hasOwnProperty("ns_st_mp")||(n.ns_st_mp=D),n.hasOwnProperty("ns_st_mv")||(n.ns_st_mv=P),n.hasOwnProperty("ns_st_ub")||(n.ns_st_ub="0"),n.hasOwnProperty("ns_st_br")||(n.ns_st_br="0"),n.hasOwnProperty("ns_st_pn")||(n.ns_st_pn="1"),n.hasOwnProperty("ns_st_tp")||(n.ns_st_tp="1"),n.hasOwnProperty("ns_st_it")||(n.ns_st_it="c"),n.ns_st_sv=p.STREAMSENSE_VERSION,n.ns_type="hidden",n}function dt(e,t){var n=t||{};n.ns_st_ec=String(y);if(!n.hasOwnProperty("ns_st_po")){var r=m,i=ft(n);if(e==l.PLAY||e==l.KEEP_ALIVE||e==l.HEART_BEAT||e==null&&g==c.PLAYING)r+=i-b.getClip().getPlaybackTimestamp();n.ns_st_po=f.getInteger(r)}return e==l.HEART_BEAT&&(n.ns_st_hc=String(A)),n}function vt(e){var t=ft(e);t<0&&(e.ns_ts=String(+(new Date)))}function mt(e,t,n){t=t||{},t.ns_st_ad=1,e>=l.AD_PLAY&&e<=l.AD_CLICK&&s.notify(e,t,n)}function gt(e,t){s.notify(l.CUSTOM,e,t)}var s=this,o,h=null,d=0,m=0,g,y=0,b=null,w,E=!0,S,x=!0,T,N,C,k=p.DEFAULT_HEARTBEAT_INTERVAL,L=0,A=0,O=0,M=!1,_,D,P,H,B,j={};f.extend(this,{reset:function(e){b.reset(e),b.setPlaylistCounter(0),b.setPlaylistId(+(new Date)+"_1"),b.getClip().reset(e),e!=null&&!e.isEmpty()?f.filterMap(o,e):o={},y=1,A=0,R(),U(),$(),Q(),G(),g=c.IDLE,d=-1,_=null,D=p.DEFAULT_PLAYERNAME,P=p.STREAMSENSE_VERSION,H=null},notify:function(){var e,t,n,r;t=arguments[0],arguments.length==3?(n=arguments[1],r=arguments[2]):(n={},r=arguments[1]),e=Z(t);var i=f.extend({},n);vt(i),i.hasOwnProperty("ns_st_po")||(i.ns_st_po=f.getInteger(r));if(t==l.PLAY||t==l.PAUSE||t==l.BUFFER||t==l.END)s.isPausePlaySwitchDelayEnabled()&&lt(e)&&Y(g)&&Y(e)?et(e,i,p.PAUSE_PLAY_SWITCH_DELAY):et(e,i);else{var o=pt(t,i);f.extend(o,i),nt(o,!1),y++}},getLabels:function(){return o},setLabels:function(e){e!=null&&(o==null?o=e:f.extend(o,e))},getLabel:function(e){return o[e]},setLabel:function(e,t){t==null?delete o[e]:o[e]=t},setPixelURL:function(e){if(e==null||e.length==0)return null;var t=e.indexOf("?");if(t>=0){if(t<e.length-1){var n=e.substring(t+1).split("&");for(var r=0,i=n.length;r<i;r++){var o=n[r],u=o.split("=");u.length==2?s.setLabel(u[0],u[1]):u.length==1&&s.setLabel(p.PAGE_NAME_LABEL,u[0])}e=e.substring(0,t+1)}}else e+="?";return h=e,h},getPixelURL:function(){return h?h:typeof ns_p!="undefined"&&typeof ns_p.src=="string"?h=ns_p.src.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):typeof ns_pixelUrl=="string"?h.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):null},isPersistentLabelsShared:function(){return E},setPersistentLabelsShared:function(e){E=e},isPauseOnBufferingEnabled:function(){return x},setPauseOnBufferingEnabled:function(e){x=e},isPausePlaySwitchDelayEnabled:function(){return M},setPausePlaySwitchDelayEnabled:function(e){M=e},setClip:function(e,t){g==c.IDLE&&(b.getClip().reset(),b.getClip().setLabels(e,null),t&&b.incrementStarts())},setPlaylist:function(e){g==c.IDLE&&(b.incrementPlaylistCounter(),b.reset(),b.getClip().reset(),b.setLabels(e,null))},importState:function(e){reset();var t=f.extend({},e);b.setRegisters(t,null),b.getClip().setRegisters(t,null),tt(t),y++},exportState:function(){return H},getVersion:function(){return p.STREAMSENSE_VERSION},addListener:function(e){B.push(e)},removeListener:function(e){B.splice(f.indexOf(e,B),1)},getClip:function(){return b.getClip()},getPlaylist:function(){return b},setHttpGet:n,setHttpPost:r}),f.extend(this,{adNotify:mt,customNotify:gt,viewNotify:function(e,t){e=e||s.getPixelURL(),e&&u(e,t)}}),ns_.comScore&&(j=ns_.comScore.exports,w=j.c()),o={},y=1,g=c.IDLE,b=new v,S=null,x=!0,C=null,A=0,U(),T=null,N=null,M=!1,_=null,m=0,B=[],s.reset(),t&&s.setLabels(t),i&&s.setPixelURL(i)};return function(e){function i(e,n){return t[r]||o(e,n)}function s(){r=-1;for(var e=0;e<=n;e++)if(t.hasOwnProperty(e)){r=e;break}return ns_.StreamSense.activeIndex=r,r}function o(e,r){return e=e||null,r=r||null,e&&typeof e=="object"&&(r=e,e=null),t[++n]=new ns_.StreamSense(r,e),s(),t[n]}function u(){var e=!1,n=r;if(typeof arguments[0]=="number"&&isFinite(arguments[0]))n=arguments[0];else if(arguments[0]instanceof ns_.StreamSense)for(var i in t)if(t[i]===arguments[0]){n=i;break}return t.hasOwnProperty(n)&&(e=t[n],delete t[n],e.reset(),s()),e}function a(e){return e=e||{},i().setPlaylist(e),i().getPlaylist()}function l(e,t,n){return e=e||{},typeof t=="number"&&(e.ns_st_cn=t),i().setClip(e,n),i().getClip()}function c(e,t,n){return typeof e=="undefined"?!1:(n=n||null,t=t||{},i().notify(e,t,n))}function h(e){typeof e!="undefined"&&i().setLabels(e)}function p(){return i().getLabels()}function d(e){typeof e!="undefined"&&i().getPlaylist().setLabels(e)}function v(){return i().getPlaylist().getLabels()}function m(e){typeof e!="undefined"&&i().getClip().setLabels(e)}function g(){return i().getClip().getLabels()}function y(e){return i().reset(e||{})}function b(e){return i().getPlaylist().reset(e||{})}function w(e){return i().getClip().reset(e||{})}function E(e){return e=e||{},i().viewNotify(null,e)}function S(e,t){return arguments.length>2&&(e=arguments[1],t=arguments[2]),e=e||{},typeof t=="number"&&(e.ns_st_po=t),i().customNotify(e,t)}function x(){return i().exportState()}function T(e){i().importState(e)}var t={},n=-1,r=-1;f.extend(e,{activeIndex:r,newInstance:o,"new":o,destroyInstance:u,destroy:u,newPlaylist:a,newClip:l,notify:c,setLabels:h,getLabels:p,setPlaylistLabels:d,getPlaylistLabels:v,setClipLabels:m,getClipLabels:g,resetInstance:y,resetPlaylist:b,resetClip:w,viewEvent:E,customEvent:S,exportState:x,importState:T})}(t),t}();return m.AdEvents=h,m.PlayerEvents=l,m}();
(function() {
  var __slice = [].slice;

  (function(vjs) {

    /*
    This keymap defines how to map the internal keys (left-hand side) to the
    user's key name (right-hand side).
     */
    var Clip, classificationTypes, comscore, extend, isArray, isNumber, keymap;
    isArray = function(obj) {
      return toString.call(obj) === "[object Array]";
    };
    isNumber = function(value) {
      return !isNaN(parseInt(value, 10));
    };
    extend = function(obj) {
      var arg, i, k;
      arg = void 0;
      i = void 0;
      k = void 0;
      i = 1;
      while (i < arguments.length) {
        arg = arguments[i];
        for (k in arg) {
          if (arg.hasOwnProperty(k)) {
            obj[k] = arg[k];
          }
        }
        i++;
      }
      return obj;
    };
    keymap = {
      ad: 'ad',
      premium: 'premium',
      ugc: 'ugc',
      live: 'live',
      duration: 'duration',
      index: 'index',
      id: 'id',
      name: 'name',
      publisher: 'publisher',
      show: 'show',
      url: 'url',
      classification: 'classificaiton'
    };
    classificationTypes = {
      video: {
        shortform: {
          premium: 'vc11',
          ugc: 'vc21'
        },
        longform: {
          premium: 'vc12',
          ugc: 'vc22'
        },
        live: {
          premium: 'vc13',
          ugc: 'vc23'
        },
        audio: 'ac00',
        "default": 'vc00'
      },
      ad: {
        preroll: 'va11',
        midroll: 'va12',
        postroll: 'va13',
        live: 'va21',
        audio: 'aa00',
        "default": 'va00'
      }
    };
    Clip = (function() {
      var live, premium, ugc;

      premium = false;

      ugc = false;

      live = false;

      Clip.prototype.ns_st_ad = false;

      Clip.prototype.ns_st_cl = null;

      Clip.prototype.ns_st_cn = null;

      Clip.prototype.ns_st_ci = null;

      Clip.prototype.ns_st_ep = null;

      Clip.prototype.ns_st_pu = null;

      Clip.prototype.ns_st_pr = null;

      Clip.prototype.ns_st_cu = null;

      Clip.prototype.ns_st_ct = null;

      function Clip(index, metadata) {
        this.ad(metadata[keymap.ad]);
        this.premium(metadata[keymap.premium]);
        this.ugc(metadata[keymap.ugc]);
        this.duration(metadata[keymap.duration]);
        this.index(index);
        this.id(metadata[keymap.id]);
        this.name(metadata[keymap.name]);
        this.publisher(metadata[keymap.publisher]);
        this.show(metadata[keymap.show]);
        this.url(metadata[keymap.url]);
        this.classification(metadata[keymap.classification]);
      }

      Clip.prototype.ad = function() {
        var args, flag;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        flag = args != null ? args[0] : void 0;
        if (flag != null ? flag.toString() : void 0) {
          this.ns_st_ad = flag;
        }
        return this.ns_st_ad;
      };

      Clip.prototype.ugc = function() {
        var args, flag;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        flag = args != null ? args[0] : void 0;
        if (flag != null ? flag.toString() : void 0) {
          ugc = flag;
        }
        return ugc;
      };

      Clip.prototype.premium = function() {
        var args, flag;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        flag = args != null ? args[0] : void 0;
        if (flag != null ? flag.toString() : void 0) {
          premium = flag;
        }
        return premium;
      };

      Clip.prototype.live = function() {
        var args, flag;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        flag = args != null ? args[0] : void 0;
        if (flag != null ? flag.toString() : void 0) {
          live = flag;
        }
        return live;
      };

      Clip.prototype.duration = function(length, inSeconds) {
        if (inSeconds) {
          length = length * 1000;
        }
        if (length) {
          this.ns_st_cl = Math.round(length);
        }
        return this.ns_st_cl || 0;
      };

      Clip.prototype.index = function(index) {
        if (index) {
          this.ns_st_cn = index;
        }
        return this.ns_st_cn;
      };

      Clip.prototype.id = function(id) {
        if (id) {
          this.ns_st_ci = id;
        }
        return this.ns_st_ci;
      };

      Clip.prototype.name = function(name) {
        if (name) {
          this.ns_st_ep = name;
        }
        return this.ns_st_ep;
      };

      Clip.prototype.publisher = function(name) {
        if (name) {
          this.ns_st_pu = name;
        }
        return this.ns_st_pu;
      };

      Clip.prototype.show = function(name) {
        if (name) {
          this.ns_st_pr = name;
        }
        return this.ns_st_pr;
      };

      Clip.prototype.url = function(url) {
        if (url) {
          this.ns_st_cu = url;
        }
        return this.ns_st_cu;
      };

      Clip.prototype.classification = function(classification) {
        var isLongForm;
        if (classification) {
          this.ns_st_ct = classification;
        }
        isLongForm = (function(_this) {
          return function() {
            return _this.duration() / 1000 >= 600;
          };
        })(this);
        if (this.ad()) {
          this.ns_st_ct = classificationTypes.ad.preroll;
        } else {
          if (this.live()) {
            if (this.premium()) {
              this.ns_st_ct = classificationTypes.video.live.premium;
            }
            if (this.ugc()) {
              this.ns_st_ct = classificationTypes.video.live.ugc;
            }
          } else if (isLongForm()) {
            if (this.premium()) {
              this.ns_st_ct = classificationTypes.video.longform.premium;
            }
            if (this.ugc()) {
              this.ns_st_ct = classificationTypes.video.longform.ugc;
            }
          } else {
            if (this.premium()) {
              this.ns_st_ct = classificationTypes.video.shortform.premium;
            }
            if (this.ugc()) {
              this.ns_st_ct = classificationTypes.video.shortform.ugc;
            }
          }
        }
        if (!this.ns_st_ct) {
          this.ns_st_ct = classificationTypes.video["default"];
        }
        return this.ns_st_ct;
      };

      return Clip;

    })();
    comscore = function(id, playlist, keymapOverride) {
      var buffer, checkIfStalled, clips, currentClip, currentPosition, end, events, getClipByUrl, getClips, getCurrentClip, getCurrentTime, initialize, makeClips, pause, play, player, progress, stallCounter, stalled, tracker, updateLoadedClip;
      if (!isNumber(id)) {
        throw new Error('The first argument should be your comScore ID');
      }
      if (!isArray(playlist)) {
        throw new Error('The second argument should be an array (can be empty)');
      }
      events = {
        BUFFER: ns_.StreamSense.PlayerEvents.BUFFER,
        END: ns_.StreamSense.PlayerEvents.END,
        PLAY: ns_.StreamSense.PlayerEvents.PLAY,
        PAUSE: ns_.StreamSense.PlayerEvents.PAUSE
      };
      player = this;
      tracker = new ns_.StreamSense({}, "http://b.scorecardresearch.com/p?c1=2&c2=" + id);
      currentClip = null;
      clips = [];
      if (keymapOverride) {
        keymap = extend({}, keymap, keymapOverride);
      }
      currentPosition = 0;
      stalled = false;
      stallCounter = 0;
      initialize = function() {
        clips = makeClips(playlist);
        if (clips.length > 0) {
          return tracker.setPlaylist(clips);
        }
      };
      makeClips = function(playlist) {
        return playlist.map(function(metadata, index) {
          return new Clip(index, metadata);
        });
      };
      getClipByUrl = function(url) {
        var clip, _i, _len;
        for (_i = 0, _len = clips.length; _i < _len; _i++) {
          clip = clips[_i];
          if (url === clip.url()) {
            return clip;
          }
        }
        return clips[0];
      };
      getCurrentClip = function() {
        return getClipByUrl(player.currentSrc());
      };
      getCurrentTime = function() {
        return Math.round(player.currentTime() * 1000);
      };
      getClips = function(index) {
        if (index >= 0) {
          return clips[index];
        }
        return clips;
      };
      updateLoadedClip = function() {
        currentClip = getCurrentClip();
        currentClip.url(player.currentSrc());
        currentClip.duration(player.duration(), true);
        tracker.getClip().setLabel( "ns_st_cu", player.currentSrc() );
        tracker.getClip().setLabel( "ns_st_cl", currentClip.duration(player.duration(), true) )
        return tracker.setClip(currentClip);
      };
      checkIfStalled = function() {
        var definitivelyStalled;
        definitivelyStalled = !stalled && stallCounter++ > 3;
        if (definitivelyStalled && currentPosition === getCurrentTime()) {
          stalled = true;
          stallCounter = 0;
          buffer(currentPosition);
          return true;
        } else if (stalled && currentPosition !== getCurrentTime()) {
          play(currentPosition);
          stalled = false;
          stallCounter = 0;
          return false;
        }
        return false;
      };
      play = function(position) {
        return tracker.notify(events.PLAY, {}, position);
      };
      pause = function(position) {
        return tracker.notify(events.PAUSE, {}, position);
      };
      end = function(duration) {
        return tracker.notify(events.END, {}, duration);
      };
      buffer = function(position) {
        return tracker.notify(events.BUFFER, {}, position);
      };
      progress = function() {
        checkIfStalled();
        updateLoadedClip();
        return currentPosition = getCurrentTime();
      };
      player.on('timeupdate', function() {
        return updateLoadedClip();
      });
      player.on('play', function() {
        return play(currentPosition);
      });
      player.on('ended', function() {
        return end(currentClip.duration());
      });
      player.on('pause', function() {
        return pause(currentPosition);
      });
      player.on('progress', progress);
      player.comscore = {
        play: play,
        pause: pause,
        end: end,
        buffer: buffer,
        getClips: getClips,
        getCurrentClip: getCurrentClip,
        updateLoadedClip: updateLoadedClip,
        classificationTypes: classificationTypes
      };
      initialize();
      return player.comscore;
    };
    return vjs.plugin("comscore", comscore);
  })(window.videojs);

}).call(this);