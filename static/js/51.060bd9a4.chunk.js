"use strict";(self.webpackChunktest_task_softryzen=self.webpackChunktest_task_softryzen||[]).push([[51],{262:function(e,t,a){a(791);t.Z=a.p+"static/media/sprite.c64a7db3bfc04f838c8dba18e0c572e0.svg"},281:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(87),i=a(262),r={header:"Header_header__OKWO7",header__container:"Header_header__container__7cHG5",header__padding:"Header_header__padding__sn6-d",nameLogo:"Header_nameLogo__DKuH8",selectLanguage:"Header_selectLanguage__JuShx",formSearch:"Header_formSearch__Q4BRi",btn__submit:"Header_btn__submit__96jWa",inputSearch:"Header_inputSearch__INGv6"},c=a(184),s=function(){return(0,c.jsx)("header",{className:r.header,children:(0,c.jsxs)("div",{className:"container "+r.header__padding,children:[(0,c.jsxs)("div",{className:r.header__container,children:[(0,c.jsx)("h2",{className:r.nameLogo,children:(0,c.jsx)(n.rU,{className:r.createNewEvent__linkBack,to:"/",children:"Event Planner"})}),(0,c.jsx)("select",{className:r.selectLanguage,children:(0,c.jsx)("option",{value:"option2",children:"UK"})})]}),(0,c.jsxs)("form",{className:r.formSearch,children:[(0,c.jsx)("button",{"aria-label":"button search",className:r.btn__submit,children:(0,c.jsx)("svg",{className:r.buttonsList__itemImg,width:"24",height:"24",children:(0,c.jsx)("use",{href:"".concat(i.Z,"#icon-search")})})}),(0,c.jsx)("input",{className:r.inputSearch,type:"text",placeholder:"Search by keywords"})]})]})})}},51:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var n=a(281),i=a(87),r=a(433),c=a(439),s=a(791),o=a(366),l="EventForm_eventForm__1w+zs",u="EventForm_form__title__JjxJ9",d="EventForm_form__input__B9+6G",m="EventForm_form__submit__BDOpp",h="EventForm_disabled__Ii09K",_="EventForm_errorInput__4RA8X",p="EventForm_error__ZZXzs",v="EventForm_left__container__ZkeUq",g="EventForm_right__container__s3InE",f=a(969),x=a(184),j=function(){var e=(0,s.useState)(""),t=(0,c.Z)(e,2),a=t[0],n=t[1],i=(0,s.useState)(""),j=(0,c.Z)(i,2),y=j[0],b=j[1],N=(0,s.useState)(""),S=(0,c.Z)(N,2),E=S[0],k=S[1],w=(0,s.useState)(""),C=(0,c.Z)(w,2),Z=C[0],A=C[1],B=(0,s.useState)(""),F=(0,c.Z)(B,2),L=F[0],H=F[1],I=(0,s.useState)(""),z=(0,c.Z)(I,2),K=z[0],R=z[1],W=(0,s.useState)(""),D=(0,c.Z)(W,2),M=D[0],T=D[1],G=(0,s.useState)("Art"),O=(0,c.Z)(G,2),P=O[0],U=O[1],$=(0,s.useState)("High"),J=(0,c.Z)($,2),X=J[0],Q=J[1],q=(0,s.useState)(""),V=(0,c.Z)(q,2),Y=V[0],ee=V[1],te=function(e){var t=e.split("-"),a=(0,c.Z)(t,3),n=a[1],i=a[2];return"".concat(n,".").concat(i)},ae=function(){return""!==a.trim()&&""!==y.trim()&&""!==L&&""!==K&&/^[A-Za-z]+$/.test(M.trim())&&/^[A-Za-z]+$/.test(a.trim())&&/^[A-Za-z]+$/.test(y.trim())};return(0,x.jsxs)("form",{className:l,onSubmit:function(e){e.preventDefault();var t={id:(new Date).getTime(),title:a,description:y,date:te(L),time:K,city:M,category:P,src:o,priority:X};(0,f.o)(t);var i=JSON.parse(localStorage.getItem("events"))||[],c=[].concat((0,r.Z)(i),[t]);localStorage.setItem("events",JSON.stringify(c)),n(""),b(""),H(""),R(""),T(""),U("Art"),Q("High")},children:[(0,x.jsxs)("div",{className:v,children:[(0,x.jsx)("h2",{className:u,children:"Title"}),(0,x.jsx)("input",{className:"".concat(d," ").concat(E?_:""),type:"text",value:a,onChange:function(e){var t=e.target.value;n(t),/^[A-Za-z]+$/.test(t.trim())?k(""):k("Invalid input")}}),E&&(0,x.jsx)("p",{className:p,children:E}),(0,x.jsx)("h2",{className:u,children:"Description"}),(0,x.jsx)("input",{style:{height:"156px"},className:"".concat(d," ").concat(Z?_:""),type:"text",value:y,onChange:function(e){var t=e.target.value;b(t),/^[A-Za-z]+$/.test(t.trim())?A(""):A("Invalid input")}}),Z&&(0,x.jsx)("p",{className:p,children:Z}),(0,x.jsx)("h2",{className:u,children:"Select date"}),(0,x.jsx)("input",{className:d,type:"date",value:L,onChange:function(e){return H(e.target.value)}}),(0,x.jsx)("h2",{className:u,children:"Select time"}),(0,x.jsx)("input",{className:d,type:"time",value:K,onChange:function(e){return R(e.target.value)}})]}),(0,x.jsxs)("div",{className:g,children:[(0,x.jsx)("h2",{className:u,children:"Location"}),(0,x.jsx)("input",{className:"".concat(d," ").concat(Y?_:""),type:"text",value:M,onChange:function(e){var t=e.target.value;T(t),/^[A-Za-z]+$/.test(t.trim())?ee(""):ee("Invalid input")}}),Y&&(0,x.jsx)("p",{className:p,children:Y}),(0,x.jsx)("h2",{className:u,children:"Category"}),(0,x.jsxs)("select",{className:d,value:P,onChange:function(e){return U(e.target.value)},children:[(0,x.jsx)("option",{value:"Art",children:"Art"}),(0,x.jsx)("option",{value:"Conference",children:"Conference"}),(0,x.jsx)("option",{value:"Workshop",children:"Workshop"}),(0,x.jsx)("option",{value:"Party",children:"Party"}),(0,x.jsx)("option",{value:"Business",children:"Business"}),(0,x.jsx)("option",{value:"Music",children:"Music"}),(0,x.jsx)("option",{value:"Sport",children:"Sport"})]}),(0,x.jsx)("h2",{className:u,children:"Add picture"}),(0,x.jsx)("input",{className:d,type:"text",value:o,disabled:!0}),(0,x.jsx)("h2",{className:u,children:"Priority"}),(0,x.jsxs)("select",{className:d,value:X,onChange:function(e){return Q(e.target.value)},children:[(0,x.jsx)("option",{value:"High",children:"High"}),(0,x.jsx)("option",{value:"Medium",children:"Medium"}),(0,x.jsx)("option",{value:"Low",children:"Low"})]}),(0,x.jsx)("button",{"aria-label":"button submit",className:"".concat(m," ").concat(ae()?"":h),type:"submit",disabled:!ae(),children:"Add Event"})]})]})},y=a(262),b={event__container:"CreateNewEvent_event__container__s+gkB",createNewEvent__linkBack:"CreateNewEvent_createNewEvent__linkBack__PV15X",createNewEvent__Title:"CreateNewEvent_createNewEvent__Title__rmBjS",buttonsList__itemImg:"CreateNewEvent_buttonsList__itemImg__jTyzL",button__back:"CreateNewEvent_button__back__sIfhQ"},N=function(){return(0,x.jsx)("section",{className:b.createNewEvent,children:(0,x.jsxs)("div",{className:"container "+b.event__container,children:[(0,x.jsx)("button",{className:b.button__back,"aria-label":"button back",children:(0,x.jsxs)(i.rU,{className:b.createNewEvent__linkBack,to:"/",children:[(0,x.jsx)("svg",{className:b.buttonsList__itemImg,width:"24",height:"24",children:(0,x.jsx)("use",{href:"".concat(y.Z,"#icon-arrow-left")})}),(0,x.jsx)("p",{children:"Back"})]})}),(0,x.jsx)("h2",{className:b.createNewEvent__Title,children:"Create new event"}),(0,x.jsx)(j,{})]})})},S=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n.Z,{}),(0,x.jsx)("main",{children:(0,x.jsx)(N,{})})]})}},969:function(e,t,a){a.d(t,{U:function(){return n},o:function(){return i}});var n=[{id:1,title:"Gallery Opening",description:"Discover an enchanting evening celebrating the world of art at our exclusive gallery opening.",date:"12.07",time:"12:00",city:"Kyiv",priority:"High",category:"Art",color:"#FF2B77",src:a(796),alt:"event image"},{id:2,title:"Innovation Summit",description:"Engage in a thought-provoking journey of knowledge and collaboration at our Innovation Summit.",date:"12.07",time:"12:00",city:"Kyiv",category:"Conference",priority:"Medium",color:"#E2A300",src:a(552),alt:"event image"},{id:3,title:"Empower Your Creativity",description:"Ignite your creativity and nurture your storytelling skills in our immersive Creative Writing Workshop.",date:"12.07",time:"12:00",city:"Kyiv",category:"Workshop",priority:"High",color:"#FF2B77",src:a(538),alt:"event image"},{id:4,title:"Summer Soiree",description:"Embrace the tropical vibes and escape to paradise at our Beach Luau Extravaganza.",date:"12.07",time:"12:00",city:"Kyiv",category:"Party",priority:"High",color:"#FF2B77",src:a(630),alt:"event image"},{id:5,title:"Leadership Conference",description:"Unlock the secrets of effective leadership at our transformative Success Leadership Conference.",date:"13.07",time:"12:00",city:"Kyiv",category:"Business",priority:"Medium",color:"#E2A300",src:a(413),alt:"event image"},{id:6,title:"Tech Startup Showcase",description:"Witness the future of technology as innovative startups showcase their groundbreaking ideas.",date:"15.07",time:"12:00",city:"Kyiv",category:"Workshop",priority:"Low",color:"#6BD475",src:a(566),alt:"event image"},{id:7,title:"Acoustic Garden Concert",description:"Experience the magic of live music amidst the serene beauty of nature at our Acoustic Garden Concert.",date:"12.07",time:"12:00",city:"Kyiv",category:"Music",priority:"High",color:"#FF2B77",src:a(580),alt:"event image"},{id:8,title:"Extreme Adventure Race",description:"Calling all thrill-seekers! Embark on an adrenaline-pumping journey at our Extreme Adventure Race.",date:"12.07",time:"12:00",city:"Kyiv",category:"Sport",priority:"Low",color:"#6BD475",src:a(338),alt:"event image"}];function i(e){n.push(e)}},796:function(e,t,a){e.exports=a.p+"static/media/Rectangle330.b2b57516d694e44eb309.jpg"},552:function(e,t,a){e.exports=a.p+"static/media/Rectangle344.535c207e7d0a7b82874a.jpg"},538:function(e,t,a){e.exports=a.p+"static/media/Rectangle345.4fa239e412a0ea7513b2.jpg"},630:function(e,t,a){e.exports=a.p+"static/media/Rectangle346.d6559dcf1023f83deda8.jpg"},413:function(e,t,a){e.exports=a.p+"static/media/Rectangle347.763cad11872d1a6e1378.jpg"},566:function(e,t,a){e.exports=a.p+"static/media/Rectangle348.74eacaf130497fab364c.jpg"},580:function(e,t,a){e.exports=a.p+"static/media/Rectangle349.6b8a0a630809c2ef820c.jpg"},338:function(e,t,a){e.exports=a.p+"static/media/Rectangle350.9fc86d53e62e94e1f2c1.jpg"},366:function(e,t,a){e.exports=a.p+"static/media/default.fc42fdb980b9e6cc1c1a.jpg"}}]);
//# sourceMappingURL=51.060bd9a4.chunk.js.map