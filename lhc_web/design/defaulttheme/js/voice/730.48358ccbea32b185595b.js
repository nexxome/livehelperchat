"use strict";(self.webpackChunkLHCVoiceCallAPP=self.webpackChunkLHCVoiceCallAPP||[]).push([[730],{730:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var n=a(848),i=a(75),r=a(467),c=a(756),s=a.n(c),l=a(540),o=a(83),u=a(907);var d=a(969);const m=function(e){var t=(0,l.useState)(!1),a=(0,i.A)(t,2),n=a[0],r=a[1];return(0,l.useEffect)((function(){e.user.videoTrack.play("player-"+e.user.uid)}),[]),l.createElement("div",{className:(n?"col-12":"col")+" bg-light m-0 align-middle text-center d-flex p-0",id:"player-"+e.user.uid,title:"UID "+e.user.uid},l.createElement("div",{className:"full-screen-icon",onClick:function(e){return r(!n)}},l.createElement("span",{className:"material-icons"},n?"fullscreen_exit":"fullscreen")))},p=function(e){var t=(0,u.B)("voice_call"),a=t.t;return t.i18n,1==e.video?l.createElement(m,{user:e.user,key:"video-stream-"+e.user.uid}):l.createElement("div",{className:"col bg-light m-0 align-middle text-center d-flex p-0",id:"player-"+e.user.uid,title:"UID "+e.user.uid},l.createElement("div",{className:"align-self-center mx-auto text-muted font-weight-bold",title:"UID "+e.user.uid},l.createElement("span",{className:"material-icons"},"graphic_eq"),a("voice_call.audio_call")))};function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){(0,r.A)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=d.A.createClient({mode:"rtc",codec:"vp8"});function b(e,t){switch(t.type){case"update":return _(_({},e),t.value);case"user_published":if(void 0===e.remoteUsers[t.user.uid]){var a={user:t.user,video:"video"==t.media,audio:"audio"==t.media,media:[t.media]};e.remoteUsers[t.user.uid]=a}else"audio"==t.media?e.remoteUsers[t.user.uid].audio=!0:"video"==t.media&&(e.remoteUsers[t.user.uid].video=!0),e.remoteUsers[t.user.uid].media.push(t.media);return _({},e);case"user_update":return void 0!==e.remoteUsers[t.user.uid]&&("audio"==t.media?e.remoteUsers[t.user.uid].audio=!1:"video"==t.media&&(e.remoteUsers[t.user.uid].video=!1),e.remoteUsers[t.user.uid]),_({},e);case"user_unpublished":return delete e.remoteUsers[t.user.uid],_({},e);default:throw new Error("Unknown action!")}}const k=function(e){var t=(0,l.useReducer)(b,{call:{},localTracks:{videoTrack:null,audioTrack:null},hasAudio:!1,hasVideo:!1,screenShare:!1,remoteUsers:{},uid:null,inCall:!1,pendingJoin:!1,type:"",isMuted:!1}),a=(0,i.A)(t,2),r=a[0],c=a[1],m=(0,l.useRef)(r);(0,l.useEffect)((function(){m.current=r}),[r]),(0,l.useEffect)((function(){g(),d.A.getDevices().then((function(e){var t=e.filter((function(e){return"audioinput"===e.kind})),a=e.filter((function(e){return"videoinput"===e.kind}));c({type:"update",value:{hasAudio:t.length>0,hasVideo:a.length>0}})}))}),[]);var v,_,k,h=(0,u.B)("voice_call"),y=h.t,T=(h.i18n,function(t){var a;a=!0===e.isVisitor?WWW_DIR_JAVASCRIPT+"voicevideo/join/"+e.initParams.id+"/"+e.initParams.hash+"/(action)/request":WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id+"/(action)/join",o.A.post(a,{type:t}).then((function(e){c({type:"update",value:{call:e.data,type:t,pendingJoin:!0}})}))}),E=function(){var t=(0,n.A)(s().mark((function t(a){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null,n=!0===e.isVisitor?WWW_DIR_JAVASCRIPT+"voicevideo/join/"+e.initParams.id+"/"+e.initParams.hash+"/(action)/"+a:WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id+"//(action)/"+a,o.A.get(n).then((function(e){c({type:"update",value:{call:e.data}})})),"leave"!=a&&"end"!=a&&"cancel"!=a){t.next=8;break}return Object.keys(r.localTracks).forEach((function(e){var t=r.localTracks[e];t&&(t.stop(),t.close(),r.localTracks[e]=void 0)})),c({type:"update",value:{remoteUsers:{},uid:null,inCall:!1,localTracks:{videoTrack:null,audioTrack:null}}}),t.next=8,f.leave();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){null!==r.localTracks.audioTrack&&(r.localTracks.audioTrack.setEnabled(r.isMuted),c({type:"update",value:{isMuted:!r.isMuted}}))},g=function(){var t;t=!0===e.isVisitor?WWW_DIR_JAVASCRIPT+"voicevideo/join/"+e.initParams.id+"/"+e.initParams.hash:WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id,o.A.get(t).then((function(e){c({type:"update",value:{call:e.data}})}))};v=function(){g()},_=2!=r.call.status||2!=r.call.vi_status||1!=r.call.op_status?2e3:null,k=(0,l.useRef)(),(0,l.useEffect)((function(){k.current=v}),[v]),(0,l.useEffect)((function(){if(null!==_){var e=setInterval((function(){k.current()}),_);return function(){return clearInterval(e)}}}),[_]);var C=function(){var e=(0,n.A)(s().mark((function e(t,a){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.uid,e.next=3,f.subscribe(t,a);case 3:c({type:"user_published",media:a,user:t}),"audio"===a&&t.audioTrack.play();case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),N=function(e,t){C(e,t)},A=function(e){c({type:"user_unpublished",user:e}),g()},P=function(e,t){c({type:"user_update",media:t,user:e})};(0,l.useEffect)((function(){!0===e.isVisitor&&1==r.pendingJoin&&(2===r.call.vi_status?S(r.call):!0===r.inCall&&2!==r.call.vi_status&&E("cancel"))}),[r.call.vi_status,r.pendingJoin]),(0,l.useEffect)((function(){1===r.call.op_status&&!1===e.isVisitor&&!1===r.inCall&&1==r.pendingJoin&&S(r.call)}),[r.call.op_status,r.pendingJoin]);var V=function(){var e=(0,n.A)(s().mark((function e(){var t,a,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!=r.screenShare){e.next=11;break}if(!(t=r.localTracks).videoTrack){e.next=7;break}return e.next=5,f.unpublish(t.videoTrack);case 5:t.videoTrack.stop(),t.videoTrack.close();case 7:return t.videoTrack=null,c({type:"update",value:{inCall:!0,screenShare:!1,localTracks:t}}),"audiovideo"==r.type&&w(),e.abrupt("return");case 11:return e.prev=11,e.next=14,d.A.createScreenVideoTrack();case 14:if(a=e.sent,n=r.localTracks,!r.localTracks.videoTrack){e.next=21;break}return e.next=19,f.unpublish(r.localTracks.videoTrack);case 19:r.localTracks.videoTrack.stop(),r.localTracks.videoTrack.close();case 21:return n.videoTrack=a,n.videoTrack.play("local-player"),c({type:"update",value:{inCall:!0,screenShare:!0,localTracks:n}}),e.next=26,f.publish(a);case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(11),alert("Screen could not be shared!");case 31:case"end":return e.stop()}}),e,null,[[11,28]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=(0,n.A)(s().mark((function e(){var t,a,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.localTracks.videoTrack||null===r.localTracks.videoTrack){e.next=12;break}if(!(t=r.localTracks).videoTrack){e.next=7;break}return e.next=5,f.unpublish(t.videoTrack);case 5:t.videoTrack.stop(),t.videoTrack.close();case 7:return t.videoTrack=null,c({type:"update",value:{inCall:!0,type:"audio",localTracks:t}}),e.abrupt("return");case 12:return e.next=14,d.A.createCameraVideoTrack();case 14:return a=e.sent,(n=r.localTracks).videoTrack=a,n.videoTrack.play("local-player"),c({type:"update",value:{inCall:!0,type:"audiovideo",localTracks:n}}),e.next=21,f.publish(a);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var t;t=!0===e.isVisitor?WWW_DIR_JAVASCRIPT+"voicevideo/join/"+e.initParams.id+"/"+e.initParams.hash+"/(action)/token":WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id+"//(action)/token",o.A.get(t).then((function(e){c({type:"update",value:{call:e.data}}),f.renewToken(e.data.token)}))},S=function(){var t=(0,n.A)(s().mark((function t(a){var n,i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==r.inCall&&(!0!==e.isVisitor||2==a.vi_status)){t.next=2;break}return t.abrupt("return");case 2:return f.on("user-published",N),f.on("user-unpublished",P),f.on("user-left",A),f.on("token-privilege-will-expire",j),t.next=8,f.join(e.initParams.appid,e.initParams.id+"_"+e.initParams.hash,a.token||null);case 8:return n=t.sent,t.next=11,d.A.createMicrophoneAudioTrack();case 11:if(t.t0=t.sent,i={audioTrack:t.t0},"audiovideo"!=r.type&&(1!=e.isVisitor||1!=r.call.video)){t.next=18;break}return t.next=16,d.A.createCameraVideoTrack();case 16:i.videoTrack=t.sent,i.videoTrack.play("local-player");case 18:return c({type:"update",value:{uid:n,inCall:!0,localTracks:i}}),t.next=21,f.publish(Object.values(i));case 21:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return l.createElement(l.Fragment,null,l.createElement("div",{className:"d-flex flex-md-row flex-column flex-grow-1 pt-0"},l.createElement("div",{className:"col bg-light m-0 align-middle text-center d-flex p-0",title:"UID "+r.uid,id:"local-player"},1==e.isVisitor&&1==r.call.vi_status&&l.createElement("div",{className:"align-self-center mx-auto text-muted fw-bold"},y("voice_call.wait_join_long")),null==r.localTracks.videoTrack&&1==r.inCall&&l.createElement("div",{className:"align-self-center mx-auto text-muted fw-bold"},l.createElement("span",{className:"material-icons"},"graphic_eq"),y("voice_call.me_audio"))),1==r.inCall&&Object.keys(r.remoteUsers).map((function(e,t){return l.createElement(p,{user:r.remoteUsers[e].user,key:"media_"+r.remoteUsers[e].user.uid+"_"+r.remoteUsers[e].media.join("_"),audio:r.remoteUsers[e].audio,video:r.remoteUsers[e].video,media:r.remoteUsers[e].media})}))),l.createElement("div",{className:"row border-top"},l.createElement("div",{className:"btn-toolbar p-2 text-center mx-auto btn-toolbar",role:"toolbar"},l.createElement("div",{className:"p-2 text-center mx-auto btn-group",role:"group"},1==e.isVisitor&&1==r.call.vi_status&&l.createElement("span",{className:"text-muted py-2"},y("voice_call.wait_let_in")," "),1==e.isVisitor&&(0==r.call.vi_status||!1===r.pendingJoin)&&l.createElement("span",{className:"text-muted py-2"},y("voice_call.join_to_start")," "),0==e.isVisitor&&2==r.call.vi_status&&l.createElement("span",{className:"text-muted py-2"},y("voice_call.visitor_joined")),0==e.isVisitor&&0==r.call.vi_status&&l.createElement("span",{className:"text-muted py-2"},y("voice_call.pending_visitor_join")),0==e.isVisitor&&1==r.call.vi_status&&l.createElement("span",{className:"text-muted py-2"},y("voice_call.visitor_waiting_in"))),l.createElement("div",{className:"p-2 text-center mx-auto btn-group",role:"group"},0==e.isVisitor&&""!=r.call.token&&1==r.call.vi_status&&l.createElement("button",{className:"btn btn-sm btn-outline-primary",onClick:function(){return E("letvisitorin")}},l.createElement("span",{className:"material-icons"},"face"),y("voice_call.let_visitor_in")),0==e.isVisitor&&1==r.inCall&&l.createElement(l.Fragment,null,l.createElement("button",{title:y("voice_call.leave_a_call"),className:"btn btn-sm btn-outline-secondary",onClick:function(){return E("leave")}},l.createElement("span",{className:"material-icons"},"exit_to_app"),y("voice_call.leave_call_op")),l.createElement("button",{title:y("voice_call.end_call_op"),className:"btn btn-sm btn-outline-secondary",onClick:function(){return E("end")}},l.createElement("span",{className:"material-icons"},"call_end"),y("voice_call.end_call_button")),l.createElement("button",{title:1==r.isMuted?y("voice_call.unmute_mic"):y("voice_call.mute_mic"),className:"btn btn-sm btn-outline-secondary",onClick:function(){return x()}},l.createElement("span",{className:"material-icons mr-0"},1==r.isMuted?"mic_off":"mic")),1==e.initParams.options.video&&!0===r.hasVideo&&l.createElement("button",{className:"btn btn-sm btn-outline-secondary",disabled:r.screenShare,onClick:function(){return w()},title:"audio"==r.type?y("voice_call.share_video"):y("voice_call.stop_sharing_video")},l.createElement("span",{className:"material-icons mr-0"},"audio"==r.type||1==r.screenShare?"videocam_off":"videocam")),1==e.initParams.options.screenshare&&l.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){return V()},title:1==r.screenShare?y("voice_call.stop_share_screen"):y("voice_call.share_your_screen")},l.createElement("span",{className:"material-icons mr-0"},1==r.screenShare?"stop_screen_share":"screen_share"))),(0==e.isVisitor&&0==r.call.op_status||1==e.isVisitor&&0==r.call.vi_status||0==r.pendingJoin)&&l.createElement(l.Fragment,null,!0===r.hasAudio&&l.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){return T("audio")}},l.createElement("span",{className:"material-icons"},"call"),y("voice_call.join_with_audio")),1==e.initParams.options.video&&!0===r.hasVideo&&l.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){return T("audiovideo")}},l.createElement("span",{className:"material-icons"},"video_call"),y("voice_call.join_with_audio_video"))),1==e.isVisitor&&1==r.inCall&&l.createElement(l.Fragment,null,l.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(){return E("cancel")}},l.createElement("span",{className:"material-icons"},"call_end"),y("voice_call.leave_room")),l.createElement("button",{title:1==r.isMuted?y("voice_call.unmute_mic"):y("voice_call.mute_mic"),className:"btn btn-outline-secondary btn-sm",onClick:function(){return x()}},l.createElement("span",{className:"material-icons mr-0"},1==r.isMuted?"mic_off":"mic")),1==e.initParams.options.video&&!0===r.hasVideo&&l.createElement("button",{disabled:r.screenShare,className:"btn btn-outline-secondary btn-sm",onClick:function(){return w()},title:"audio"==r.type?y("voice_call.share_video"):y("voice_call.stop_sharing_video")},l.createElement("span",{className:"material-icons mr-0"},"audio"==r.type||1==r.screenShare?"videocam_off":"videocam")),1==e.initParams.options.screenshare&&l.createElement("button",{className:"btn btn-outline-secondary btn-sm",onClick:function(){return V()},title:1==r.screenShare?y("voice_call.stop_share_screen"):y("voice_call.share_your_screen")},l.createElement("span",{className:"material-icons mr-0"},1==r.screenShare?"stop_screen_share":"screen_share"))),1==e.isVisitor&&!0===r.pendingJoin&&1==r.call.vi_status&&l.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(){return E("cancel")}},y("voice_call.cancel_join"))))))}}}]);
//# sourceMappingURL=730.48358ccbea32b185595b.js.map