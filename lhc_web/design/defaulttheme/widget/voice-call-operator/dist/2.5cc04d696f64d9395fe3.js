(window.webpackJsonpLHCVoiceCallAPP=window.webpackJsonpLHCVoiceCallAPP||[]).push([[2],{52:function(e,t,a){"use strict";a.r(t);var n=a(24),i=a.n(n),r=a(26),s=a.n(r),c=a(14),o=a.n(c),l=a(1),u=a.n(l),d=a(0),m=a.n(d),v=a(32),p=a.n(v),f=a(53);var h=function(e,t){var a=Object(d.useRef)();Object(d.useEffect)((function(){a.current=e}),[e]),Object(d.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])},b=a(50),_=a.n(b),y=function(e){return Object(d.useEffect)((function(){console.log(e),console.log(t);var t=e.media.shift();return function(){}}),[]),m.a.createElement("div",{className:"col bg-light mx-1 align-middle text-center d-flex pl-0 pr-0",id:"player-"+e.user.uid,title:"UID "+e.user.uid})};function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=_.a.createClient({mode:"rtc",codec:"vp8"});function g(e,t){switch(t.type){case"attr":return-1===(i=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[i]=j({},e.chats[i],{},t.value),e=j({},e));case"attr_remove":return-1===(i=e.chats.findIndex((function(e){return e[t.attr]==t.id})))?e:(e.chats[i]=j({},e.chats[i],{},t.value),e=j({},e));case"update":return j({},e,{},t.value);case"user_published":if(void 0===e.remoteUsers[t.user.uid]){var a={user:t.user,video:"video"==t.media,audio:"audio"==t.media,media:[t.media]};e.remoteUsers[t.user.uid]=a}else"audio"==t.media?e.remoteUsers[t.user.uid].audio=!0:"video"==t.media&&(e.remoteUsers[t.user.uid].video=!0),e.remoteUsers[t.user.uid].media.push(t.media);return j({},e);case"user_unpublished":return delete e.remoteUsers[t.user.uid],j({},e);case"add":return-1===(i=e.chats.findIndex((function(e){return e.id==t.value.id})))?e.chats.unshift(t.value):(e.chats[i].active=!0,e.chats[i].mn=0,e.chats[i].support_chat=!1),j({},e);case"remove":return-1===(i=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats.splice(i,1),j({},e));case"update_chat":return-1===(i=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[i]=j({},e.chats[i],{},t.value),j({},e));case"msg_received":if(-1===(i=e.chats.findIndex((function(e){return e.id==t.id}))))return e;e.chats[i].msg=t.value.msg;var n=document.getElementById("chat-tab-link-"+t.id);return null!==n&&n.classList.contains("active")?e.chats[i].active=!0:e.chats[i].active=!1,e.chats[i].mn=0==e.chats[i].active?e.chats[i].mn?e.chats[i].mn+t.value.mn:t.value.mn:0,e.chats.splice(0,0,e.chats.splice(i,1)[0]),j({},e);case"refocus":var i;if(-1!==(i=e.chats.findIndex((function(e){return 1==e.active})))){if(t.id==e.chats[i].id)return e;e.chats[i].active=!1}return-1!==(i=e.chats.findIndex((function(e){return e.id==t.id})))&&(e.chats[i].active=!0,e.chats[i].mn=0,e.chats[i].support_chat=!1),j({},e);case"group_offline":return e.group_offline=t.value,j({},e);default:throw new Error("Unknown action!")}}t.default=function(e){var t=Object(d.useReducer)(g,{chats:[],call:{},localTracks:{videoTrack:null,audioTrack:null},remoteUsers:{},uid:null,inCall:!1}),a=o()(t,2),n=a[0],r=a[1],c=Object(d.useRef)(n);Object(d.useEffect)((function(){c.current=n}),[n]);Object(d.useEffect)((function(){return p.a.get(WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id).then((function(e){r({type:"update",value:{call:e.data}})})),function(){}}),[]);var l=Object(f.a)("voice_call"),u=l.t,v=(l.i18n,function(){var t=s()(i.a.mark((function t(a){var s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=null,s=!0===e.isVisitor?WWW_DIR_JAVASCRIPT+"voicevideo/join/"+e.initParams.id+"/"+e.initParams.hash+"/(action)/"+a:WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id+"//(action)/"+a,p.a.get(s).then((function(e){r({type:"update",value:{call:e.data}})})),"leave"!=a&&"end"!=a&&"cancel"!=a){t.next=8;break}return Object.keys(n.localTracks).forEach((function(e){var t=n.localTracks[e];t&&(t.stop(),t.close(),n.localTracks[e]=void 0)})),r({type:"update",value:{remoteUsers:{},uid:null,localTracks:{videoTrack:null,audioTrack:null}}}),t.next=8,k.leave();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());h((function(){var t=null;t=!0===e.isVisitor?WWW_DIR_JAVASCRIPT+"voicevideo/join/"+e.initParams.id+"/"+e.initParams.hash:WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id,p.a.get(t).then((function(e){r({type:"update",value:{call:e.data}})}))}),2!=n.call.status||2!=n.call.vi_status||1!=n.call.op_status?2e3:null);var b=function(){var e=s()(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.uid,e.next=3,k.subscribe(t,a);case 3:r({type:"user_published",media:a,user:t});case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),E=function(e,t){b(e,t)},j=function(e){r({type:"user_unpublished",user:e})};Object(d.useEffect)((function(){return 2===n.call.vi_status&&1==e.isVisitor&&x(n.call),function(){}}),[n.call.vi_status]);var x=function(){var t=s()(i.a.mark((function t(a){var n,s,c,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return k.on("user-published",E),k.on("user-unpublished",j),n=null,s={audioTrack:null,videoTrack:null},t.next=6,Promise.all([k.join(e.initParams.appid,e.initParams.id+"_"+e.initParams.hash,a.token||null),_.a.createMicrophoneAudioTrack(),_.a.createCameraVideoTrack()]);case 6:return c=t.sent,l=o()(c,3),n=l[0],s.audioTrack=l[1],s.videoTrack=l[2],s.videoTrack.play("local-player"),r({type:"update",value:{uid:n,inCall:!0,localTracks:s}}),t.next=15,k.publish(Object.values(s));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),P=function(t){var a=null;a=!0===e.isVisitor?WWW_DIR_JAVASCRIPT+"voicevideo/join/"+e.initParams.id+"/"+e.initParams.hash+"/(action)/request":WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id+"/(action)/join",p.a.post(a).then((function(e){"audiovideo"==t&&x(e.data),r({type:"update",value:{call:e.data}})}))};return console.log(n.remoteUsers),m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"d-flex flex-row flex-grow-1 pt-2"},m.a.createElement("div",{className:"col bg-light mx-1 align-middle text-center d-flex pl-0 pr-0",title:"UID "+n.uid,id:"local-player"},1==e.isVisitor&&1==n.call.vi_status&&m.a.createElement("div",{className:"align-self-center mx-auto text-muted font-weight-bold"},"Please wait untill operator let's you join a room")),1==n.inCall&&Object.keys(n.remoteUsers).map((function(e,t){return m.a.createElement(y,{user:n.remoteUsers[e].user,key:"media_"+n.remoteUsers[e].user.uid+"_"+n.remoteUsers[e].media.join("_"),audio:n.remoteUsers[e].audio,video:n.remoteUsers[e].video,media:n.remoteUsers[e].media})}))),m.a.createElement("div",{className:"row header-chat desktop-header"},m.a.createElement("div",{className:"btn-toolbar p-2 text-center mx-auto btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups"},m.a.createElement("div",{className:"p-2 text-center mx-auto btn-group",role:"group"},1==e.isVisitor&&0==n.call.vi_status&&m.a.createElement("span",{className:"text-muted py-2"},"Please wait untill operator let's you in"),0==e.isVisitor&&2==n.call.vi_status&&m.a.createElement("span",{className:"text-muted py-2"},"Visitor has joined a call!"),0==e.isVisitor&&0==n.call.vi_status&&m.a.createElement("span",{className:"text-muted py-2"},"Pending visitor to join a call!"),0==e.isVisitor&&1==n.call.vi_status&&m.a.createElement("span",{className:"text-muted py-2"},"Visitor is waiting for someone to let him in!")),m.a.createElement("div",{className:"p-2 text-center mx-auto btn-group",role:"group"},0==e.isVisitor&&1==n.call.vi_status&&m.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){return v("letvisitorin")}},m.a.createElement("span",{className:"material-icons"},"face"),"Let visitor in"),0==e.isVisitor&&1==n.call.op_status&&m.a.createElement("button",{title:"Leave a call. Visitor still remain on the call",className:"btn btn-sm btn-outline-secondary",onClick:function(){return v("leave")}},m.a.createElement("span",{className:"material-icons"},"call_end"),"Leave a call"),0==e.isVisitor&&1==n.call.op_status&&m.a.createElement("button",{title:"Call for the visitor also will end.",className:"btn btn-sm btn-outline-secondary",onClick:function(){return v("end")}},m.a.createElement("span",{className:"material-icons"},"call_end"),"End a call"),(0==e.isVisitor&&0==n.call.op_status||1==e.isVisitor&&0==n.call.vi_status)&&m.a.createElement(m.a.Fragment,null,m.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){return P("audio")}},m.a.createElement("span",{className:"material-icons"},"call"),"Join with audio"),m.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){return P("audiovideo")}},m.a.createElement("span",{className:"material-icons"},"video_call"),"Join with audio & video")),1==e.isVisitor&&2==n.call.vi_status&&m.a.createElement("button",{className:"btn btn-primary w-100",onClick:function(){return v("cancel")}},u("voice_call.leave_room")),1==e.isVisitor&&1==n.call.vi_status&&m.a.createElement("button",{className:"btn btn-primary w-100",onClick:function(){return v("cancel")}},u("voice_call.cancel_join"))))))}}}]);
//# sourceMappingURL=2.5cc04d696f64d9395fe3.js.map