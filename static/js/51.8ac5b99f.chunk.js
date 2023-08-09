"use strict";(self.webpackChunktest_task_softryzen=self.webpackChunktest_task_softryzen||[]).push([[51],{262:function(e,t,a){a(791);t.Z=a.p+"static/media/sprite.c64a7db3bfc04f838c8dba18e0c572e0.svg"},281:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(87),i=a(262),r={header:"Header_header__OKWO7",header__container:"Header_header__container__7cHG5",header__padding:"Header_header__padding__sn6-d",nameLogo:"Header_nameLogo__DKuH8",selectLanguage:"Header_selectLanguage__JuShx",formSearch:"Header_formSearch__Q4BRi",btn__submit:"Header_btn__submit__96jWa",inputSearch:"Header_inputSearch__INGv6"},c=a(184),s=function(){return(0,c.jsx)("header",{className:r.header,children:(0,c.jsxs)("div",{className:"container "+r.header__padding,children:[(0,c.jsxs)("div",{className:r.header__container,children:[(0,c.jsx)("h2",{className:r.nameLogo,children:(0,c.jsx)(n.rU,{className:r.createNewEvent__linkBack,to:"/",children:"Event Planner"})}),(0,c.jsx)("select",{className:r.selectLanguage,children:(0,c.jsx)("option",{value:"option2",children:"UK"})})]}),(0,c.jsxs)("form",{className:r.formSearch,children:[(0,c.jsx)("button",{"aria-label":"button search",className:r.btn__submit,children:(0,c.jsx)("svg",{className:r.buttonsList__itemImg,width:"24",height:"24",children:(0,c.jsx)("use",{href:"".concat(i.Z,"#icon-search")})})}),(0,c.jsx)("input",{className:r.inputSearch,type:"text",placeholder:"Search by keywords"})]})]})})}},51:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(281),i=a(87),r=a(433),c=a(439),s=a(791),o=a(366),l="EventForm_eventForm__1w+zs",u="EventForm_form__title__JjxJ9",d="EventForm_form__input__B9+6G",m="EventForm_form__submit__BDOpp",h="EventForm_disabled__Ii09K",p="EventForm_errorInput__4RA8X",_="EventForm_error__ZZXzs",v=a(969),g=a(184),f=function(){var e=(0,s.useState)(""),t=(0,c.Z)(e,2),a=t[0],n=t[1],i=(0,s.useState)(""),f=(0,c.Z)(i,2),x=f[0],j=f[1],y=(0,s.useState)(""),b=(0,c.Z)(y,2),N=b[0],S=b[1],k=(0,s.useState)(""),E=(0,c.Z)(k,2),w=E[0],C=E[1],Z=(0,s.useState)(""),A=(0,c.Z)(Z,2),B=A[0],L=A[1],H=(0,s.useState)(""),F=(0,c.Z)(H,2),I=F[0],z=F[1],K=(0,s.useState)(""),R=(0,c.Z)(K,2),W=R[0],D=R[1],M=(0,s.useState)("Art"),T=(0,c.Z)(M,2),G=T[0],O=T[1],P=(0,s.useState)("High"),$=(0,c.Z)(P,2),J=$[0],U=$[1],X=(0,s.useState)(""),Q=(0,c.Z)(X,2),V=Q[0],Y=Q[1],q=function(e){var t=e.split("-"),a=(0,c.Z)(t,3),n=a[1],i=a[2];return"".concat(n,".").concat(i)},ee=function(){return""!==a.trim()&&""!==x.trim()&&""!==B&&""!==I&&/^[A-Za-z]+$/.test(W.trim())&&/^[A-Za-z]+$/.test(a.trim())&&/^[A-Za-z]+$/.test(x.trim())};return(0,g.jsxs)("form",{className:l,onSubmit:function(e){e.preventDefault();var t={id:(new Date).getTime(),title:a,description:x,date:q(B),time:I,city:W,category:G,src:o,priority:J};(0,v.o)(t);var i=JSON.parse(localStorage.getItem("events"))||[],c=[].concat((0,r.Z)(i),[t]);localStorage.setItem("events",JSON.stringify(c)),n(""),j(""),L(""),z(""),D(""),O("Art"),U("High")},children:[(0,g.jsx)("h2",{className:u,children:"Title"}),(0,g.jsx)("input",{className:"".concat(d," ").concat(N?p:""),type:"text",value:a,onChange:function(e){var t=e.target.value;n(t),/^[A-Za-z]+$/.test(t.trim())?S(""):S("Invalid input")}}),N&&(0,g.jsx)("p",{className:_,children:N}),(0,g.jsx)("h2",{className:u,children:"Description"}),(0,g.jsx)("input",{className:"".concat(d," ").concat(w?p:""),type:"text",value:x,onChange:function(e){var t=e.target.value;j(t),/^[A-Za-z]+$/.test(t.trim())?C(""):C("Invalid input")}}),w&&(0,g.jsx)("p",{className:_,children:w}),(0,g.jsx)("h2",{className:u,children:"Select date"}),(0,g.jsx)("input",{className:d,type:"date",value:B,onChange:function(e){return L(e.target.value)}}),(0,g.jsx)("h2",{className:u,children:"Select time"}),(0,g.jsx)("input",{className:d,type:"time",value:I,onChange:function(e){return z(e.target.value)}}),(0,g.jsx)("h2",{className:u,children:"Location"}),(0,g.jsx)("input",{className:"".concat(d," ").concat(V?p:""),type:"text",value:W,onChange:function(e){var t=e.target.value;D(t),/^[A-Za-z]+$/.test(t.trim())?Y(""):Y("Invalid input")}}),V&&(0,g.jsx)("p",{className:_,children:V}),(0,g.jsx)("h2",{className:u,children:"Category"}),(0,g.jsxs)("select",{className:d,value:G,onChange:function(e){return O(e.target.value)},children:[(0,g.jsx)("option",{value:"Art",children:"Art"}),(0,g.jsx)("option",{value:"Conference",children:"Conference"}),(0,g.jsx)("option",{value:"Workshop",children:"Workshop"}),(0,g.jsx)("option",{value:"Party",children:"Party"}),(0,g.jsx)("option",{value:"Business",children:"Business"}),(0,g.jsx)("option",{value:"Music",children:"Music"}),(0,g.jsx)("option",{value:"Sport",children:"Sport"})]}),(0,g.jsx)("h2",{className:u,children:"Add picture"}),(0,g.jsx)("input",{className:d,type:"text",value:o,disabled:!0}),(0,g.jsx)("h2",{className:u,children:"Priority"}),(0,g.jsxs)("select",{className:d,value:J,onChange:function(e){return U(e.target.value)},children:[(0,g.jsx)("option",{value:"High",children:"High"}),(0,g.jsx)("option",{value:"Medium",children:"Medium"}),(0,g.jsx)("option",{value:"Low",children:"Low"})]}),(0,g.jsx)("button",{"aria-label":"button submit",className:"".concat(m," ").concat(ee()?"":h),type:"submit",disabled:!ee(),children:"Add Event"})]})},x=a(262),j={event__container:"CreateNewEvent_event__container__s+gkB",createNewEvent__linkBack:"CreateNewEvent_createNewEvent__linkBack__PV15X",createNewEvent__Title:"CreateNewEvent_createNewEvent__Title__rmBjS",buttonsList__itemImg:"CreateNewEvent_buttonsList__itemImg__jTyzL",button__back:"CreateNewEvent_button__back__sIfhQ"},y=function(){return(0,g.jsx)("section",{className:j.createNewEvent,children:(0,g.jsxs)("div",{className:"container "+j.event__container,children:[(0,g.jsx)("button",{className:j.button__back,"aria-label":"button back",children:(0,g.jsxs)(i.rU,{className:j.createNewEvent__linkBack,to:"/",children:[(0,g.jsx)("svg",{className:j.buttonsList__itemImg,width:"24",height:"24",children:(0,g.jsx)("use",{href:"".concat(x.Z,"#icon-arrow-left")})}),(0,g.jsx)("p",{children:"Back"})]})}),(0,g.jsx)("h2",{className:j.createNewEvent__Title,children:"Create new event"}),(0,g.jsx)(f,{})]})})},b=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n.Z,{}),(0,g.jsx)("main",{children:(0,g.jsx)(y,{})})]})}},969:function(e,t,a){a.d(t,{U:function(){return n},o:function(){return i}});var n=[{id:1,title:"Gallery Opening",description:"Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.",date:"12.07",time:"12:00",city:"Kyiv",priority:"High",category:"Art",color:"#FF2B77",src:a(796),alt:"event image"},{id:2,title:"Innovation Summit",description:"Engage in a thought-provoking journey of knowledge and collaboration at our Innovation Summit.",date:"12.07",time:"12:00",city:"Kyiv",category:"Conference",priority:"Medium",color:"#E2A300",src:a(552),alt:"event image"},{id:3,title:"Empower Your Creativity",description:"Ignite your creativity and nurture your storytelling skills in our immersive Creative Writing Workshop.",date:"12.07",time:"12:00",city:"Kyiv",category:"Workshop",priority:"High",color:"#FF2B77",src:a(538),alt:"event image"},{id:4,title:"Summer Soiree",description:"Embrace the tropical vibes and escape to paradise at our Beach Luau Extravaganza.",date:"12.07",time:"12:00",city:"Kyiv",category:"Party",priority:"High",color:"#FF2B77",src:a(630),alt:"event image"},{id:5,title:"Leadership Conference",description:"Unlock the secrets of effective leadership at our transformative Success Leadership Conference.",date:"13.07",time:"12:00",city:"Kyiv",category:"Business",priority:"Medium",color:"#E2A300",src:a(413),alt:"event image"},{id:6,title:"Tech Startup Showcase",description:"Witness the future of technology as innovative startups showcase their groundbreaking ideas.",date:"15.07",time:"12:00",city:"Kyiv",category:"Workshop",priority:"Low",color:"#6BD475",src:a(566),alt:"event image"},{id:7,title:"Acoustic Garden Concert",description:"Experience the magic of live music amidst the serene beauty of nature at our Acoustic Garden Concert.",date:"12.07",time:"12:00",city:"Kyiv",category:"Music",priority:"High",color:"#FF2B77",src:a(580),alt:"event image"},{id:8,title:"Extreme Adventure Race",description:"Calling all thrill-seekers! Embark on an adrenaline-pumping journey at our Extreme Adventure Race.",date:"12.07",time:"12:00",city:"Kyiv",category:"Sport",priority:"Low",color:"#6BD475",src:a(338),alt:"event image"}];function i(e){n.push(e)}},796:function(e,t,a){e.exports=a.p+"static/media/Rectangle330.b2b57516d694e44eb309.jpg"},552:function(e,t,a){e.exports=a.p+"static/media/Rectangle344.535c207e7d0a7b82874a.jpg"},538:function(e,t,a){e.exports=a.p+"static/media/Rectangle345.4fa239e412a0ea7513b2.jpg"},630:function(e,t,a){e.exports=a.p+"static/media/Rectangle346.d6559dcf1023f83deda8.jpg"},413:function(e,t,a){e.exports=a.p+"static/media/Rectangle347.763cad11872d1a6e1378.jpg"},566:function(e,t,a){e.exports=a.p+"static/media/Rectangle348.74eacaf130497fab364c.jpg"},580:function(e,t,a){e.exports=a.p+"static/media/Rectangle349.6b8a0a630809c2ef820c.jpg"},338:function(e,t,a){e.exports=a.p+"static/media/Rectangle350.9fc86d53e62e94e1f2c1.jpg"},366:function(e,t,a){e.exports=a.p+"static/media/default.fc42fdb980b9e6cc1c1a.jpg"}}]);
//# sourceMappingURL=51.8ac5b99f.chunk.js.map