"use strict";(self.webpackChunkLHCReactAPP=self.webpackChunkLHCReactAPP||[]).push([[472],{5472:function(t,e,a){a.r(e);var i,s=a(3029),o=a(2901),n=a(6822),p=a(3954),c=a(5361),r=a(4467),d=a(6540),h=a(1225),l=a(5580),g=a(7912),v=a(2828);function m(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(m=function(){return!!t})()}var u=(0,h.Ng)((function(t){return{chatwidget:t.chatwidget}}))(i=function(t){function e(t){var a,i,o,c;return(0,s.A)(this,e),i=this,o=e,c=[t],o=(0,p.A)(o),a=(0,n.A)(i,m()?Reflect.construct(o,c||[],(0,p.A)(i).constructor):o.apply(i,c)),(0,r.A)(a,"state",{shown:!1}),a.hideInvitation=a.hideInvitation.bind(a),a.fullInvitation=a.fullInvitation.bind(a),a.setBotPayload=a.setBotPayload.bind(a),a.expireTimeout=null,a}return(0,c.A)(e,t),(0,o.A)(e,[{key:"componentDidMount",value:function(){var t=this;g.q.sendMessageParent("showInvitation",[{name:this.props.chatwidget.getIn(["proactive","data","invitation_name"])}]),this.props.chatwidget.getIn(["proactive","data","play_sound"])&&g.q.emitEvent("play_sound",[{type:"new_invitation",sound_on:!0===this.props.chatwidget.getIn(["proactive","data","play_sound"]),widget_open:this.props.chatwidget.get("shown")&&"widget"==this.props.chatwidget.get("mode")||document.hasFocus()}]),this.props.chatwidget.hasIn(["proactive","data","full_widget"])&&!this.props.chatwidget.get("isMobile")||document.getElementById("id-invitation-height")&&setTimeout((function(){if(document.getElementById("id-invitation-height")){var e=document.getElementById("id-invitation-height").offsetHeight+20;g.q.sendMessageParent("hideAction",[]),g.q.sendMessageParent("widgetHeight",[{force_width:t.props.chatwidget.hasIn(["proactive","data","message_width"])?t.props.chatwidget.getIn(["proactive","data","message_width"])+40:240,force_height:e,force_bottom:t.props.chatwidget.hasIn(["proactive","data","message_bottom"])?t.props.chatwidget.getIn(["proactive","data","message_bottom"]):75,force_right:t.props.chatwidget.hasIn(["proactive","data","message_right"])?t.props.chatwidget.getIn(["proactive","data","message_right"]):75}]),setTimeout((function(){g.q.sendMessageParent("showAction",[]),t.setState({shown:!0})}),100)}}),50),this.props.chatwidget.hasIn(["proactive","data","inv_expires"])&&(this.expireTimeout=setTimeout((function(){t.props.dispatch((0,l.Ox)(!0))}),1e3*this.props.chatwidget.getIn(["proactive","data","inv_expires"]))),this.props.chatwidget.hasIn(["proactive","data","on_click"])&&this.appendScript(this.props.chatwidget.getIn(["proactive","data","on_click","src"]),this.props.chatwidget.getIn(["proactive","data","on_click","id"])),this.props.chatwidget.hasIn(["proactive","data","site_css"])&&this.appendCSS(this.props.chatwidget.getIn(["proactive","data","site_css"]),this.props.chatwidget.getIn(["proactive","data","site_css_id"]))}},{key:"appendScript",value:function(t,e){var a=document.createElement("script");a.src=t,a.id=e,a.async=!0,document.body.appendChild(a)}},{key:"appendCSS",value:function(t,e){var a=document.createElement("style");a.innerHTML=t,a.id=e,document.body.appendChild(a)}},{key:"componentWillUnmount",value:function(){if(clearTimeout(this.expireTimeout),g.q.sendMessageParent("widgetHeight",[{reset_height:!0}]),this.props.chatwidget.hasIn(["proactive","data","on_click"])){var t=null;(t=document.getElementById(this.props.chatwidget.getIn(["proactive","data","on_click","id"])))&&t.parentNode.removeChild(t)}this.props.chatwidget.hasIn(["proactive","data","site_css_id"])&&(t=null,(t=document.getElementById(this.props.chatwidget.getIn(["proactive","data","site_css_id"])))&&t.parentNode.removeChild(t))}},{key:"hideInvitation",value:function(t){this.props.dispatch((0,l.Ox)(this.props.chatwidget.hasIn(["proactive","data","hide_on_open"]))),t.preventDefault(),t.stopPropagation()}},{key:"fullInvitation",value:function(){this.props.chatwidget.hasIn(["proactive","data","hide_on_open"])?(this.props.dispatch((0,l.Ox)(!0,!0)),this.props.chatwidget.hasIn(["proactive","data","on_click"])&&window["callback_"+this.props.chatwidget.getIn(["proactive","data","on_click","id"])]()):(g.q.sendMessageParentDirect("hideInvitation",[{full:!0,name:this.props.chatwidget.getIn(["proactive","data","invitation_name"])}]),this.props.dispatch({type:"FULL_INVITATION"}))}},{key:"setBotPayload",value:function(t){this.props.setBotPayload(t),this.fullInvitation()}},{key:"render",value:function(){var t=this;this.props.chatwidget.hasIn(["proactive","data","full_widget"])&&!this.props.chatwidget.get("isMobile")&&this.fullInvitation();var e="";return!1===this.state.shown?e+=" invisible":e+=" fade-in",d.createElement("div",{id:"id-invitation-height",className:e},this.props.chatwidget.hasIn(["proactive","data","close_above_msg"])&&d.createElement("div",{className:"text-right"},d.createElement("button",{title:"Close",onClick:function(e){return t.hideInvitation(e)},id:"invitation-close-btn",className:"btn btn-sm rounded"},d.createElement("i",{className:"material-icons me-0"},""))),d.createElement("div",{className:"p-2 pointer clearfix proactive-need-help",id:"proactive-wrapper",style:{width:this.props.chatwidget.hasIn(["proactive","data","message_width"])?this.props.chatwidget.getIn(["proactive","data","message_width"]):200},onClick:this.fullInvitation},!this.props.chatwidget.hasIn(["proactive","data","close_above_msg"])&&d.createElement("button",{title:"Close",onClick:function(e){return t.hideInvitation(e)},id:"invitation-close-btn",className:"float-end btn btn-sm rounded"},d.createElement("i",{className:"material-icons me-0"},"")),this.props.chatwidget.hasIn(["proactive","data","photo_left_column"])&&this.props.chatwidget.getIn(["proactive","data","photo"])&&d.createElement("div",{className:"d-flex"},d.createElement("div",{className:"proactive-image"},d.createElement("img",{width:"30",alt:this.props.chatwidget.getIn(["proactive","data","name_support"])||this.props.chatwidget.getIn(["proactive","data","extra_profile"]),title:this.props.chatwidget.getIn(["proactive","data","name_support"])||this.props.chatwidget.getIn(["proactive","data","extra_profile"]),className:"me-2 rounded",src:this.props.chatwidget.getIn(["proactive","data","photo"])})),d.createElement("div",{className:"flex-grow-1"},!this.props.chatwidget.hasIn(["proactive","data","hide_op_name"])&&d.createElement("div",{className:"fs14"},d.createElement("b",null,this.props.chatwidget.getIn(["proactive","data","name_support"])||this.props.chatwidget.getIn(["proactive","data","extra_profile"]))),d.createElement("div",{id:"inv-msg-wrapper"},d.createElement("p",{className:"fs13 mb-0 inv-msg-cnt",dangerouslySetInnerHTML:{__html:this.props.chatwidget.getIn(["proactive","data","message"])}}),this.props.chatwidget.hasIn(["proactive","data","bot_intro"])&&d.createElement(v.A,{printButton:!1,setBotPayload:this.setBotPayload,content:this.props.chatwidget.getIn(["proactive","data","message_full"])})))),(!this.props.chatwidget.hasIn(["proactive","data","photo_left_column"])||!this.props.chatwidget.getIn(["proactive","data","photo"]))&&d.createElement("div",null,d.createElement("div",{className:"fs14"},this.props.chatwidget.getIn(["proactive","data","photo"])&&d.createElement("img",{width:"30",height:"30",alt:this.props.chatwidget.getIn(["proactive","data","name_support"])||this.props.chatwidget.getIn(["proactive","data","extra_profile"]),title:this.props.chatwidget.getIn(["proactive","data","name_support"])||this.props.chatwidget.getIn(["proactive","data","extra_profile"]),className:"me-2 rounded",src:this.props.chatwidget.getIn(["proactive","data","photo"])}),!this.props.chatwidget.hasIn(["proactive","data","hide_op_name"])&&d.createElement("b",null,this.props.chatwidget.getIn(["proactive","data","name_support"])||this.props.chatwidget.getIn(["proactive","data","extra_profile"]))),d.createElement("div",{id:"inv-msg-wrapper"},d.createElement("p",{className:"fs13 mb-0 inv-msg-cnt",dangerouslySetInnerHTML:{__html:this.props.chatwidget.getIn(["proactive","data","message"])}}),this.props.chatwidget.hasIn(["proactive","data","bot_intro"])&&d.createElement(v.A,{printButton:!1,setBotPayload:this.setBotPayload,content:this.props.chatwidget.getIn(["proactive","data","message_full"])})))))}}])}(d.Component))||i;e.default=u}}]);
//# sourceMappingURL=472.045d7029d0be887844e5.js.map