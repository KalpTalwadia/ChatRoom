(this.webpackJsonpslack=this.webpackJsonpslack||[]).push([[0],{70:function(e,t,n){},77:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),o=n(30),c=n.n(o),r=(n(70),n(20)),s=n(7),d=n(63),l=n(12),p=n(110),h=n(111),j=n(112),b=n(128),x=s.a.div.withConfig({displayName:"header__HeaderContainer",componentId:"bstr6k-0"})(["display:flex;position:fixed;width:100%;align-items:center;padding:10px 0px;background-color:var(--slack-header-color);color:white"]),m=s.a.div.withConfig({displayName:"header__HeaderLeft",componentId:"bstr6k-1"})(["display:flex;flex:0.3;align-items:center;margin-left:20px;> .MuiSvgIcon-root{margin-left:auto;margin-right:30px;color:#f8f8f8;}"]),g=s.a.div.withConfig({displayName:"header__HeaderSearch",componentId:"bstr6k-2"})(["flex:0.4;opacity:1;border-radius:6px;background-color:#2F343D;text-align:center;display:flex;padding:0 50px;color:gray;border:1px solid gray;> input{background-color:transparent;border:none;text-align:center;min-width:30vw;color:white;outline:none}"]),f=s.a.div.withConfig({displayName:"header__HeaderRight",componentId:"bstr6k-3"})(["flex:0.3;display:flex;align-items:flex-end;> .MuiSvgIcon-root{margin-left:auto;margin-right:20px;color:#f8f8f8}"]),u=Object(s.a)(b.a).withConfig({displayName:"header__HeaderAvatar",componentId:"bstr6k-4"})(["cursor:pointer;:hover{opacity:0.8;}"]),O=n(31),v=n(36),y=v.a.initializeApp({apiKey:"AIzaSyCfrbUng_LyJ912BYONWGBiQv85gQPhpOI",authDomain:"slack-d83fc.firebaseapp.com",projectId:"slack-d83fc",storageBucket:"slack-d83fc.appspot.com",messagingSenderId:"212806521313",appId:"1:212806521313:web:bcea600281421fc35a42a0"}).firestore(),w=v.a.auth(),I=new v.a.auth.GoogleAuthProvider,C=n(3);function _(){var e=Object(O.a)(w),t=Object(r.a)(e,1)[0];return Object(C.jsxs)(x,{children:[Object(C.jsxs)(m,{children:[Object(C.jsx)(u,{alt:null===t||void 0===t?void 0:t.displayName,src:null===t||void 0===t?void 0:t.photoURL,onClick:function(){return w.signOut()}}),Object(C.jsx)(p.a,{})]}),Object(C.jsxs)(g,{children:[Object(C.jsx)(h.a,{}),Object(C.jsx)("input",{type:"text",placeholder:"Search Kalp"})]}),Object(C.jsx)(f,{children:Object(C.jsx)(j.a,{})})]})}var k=n(113),S=n(114),N=n(115),z=n(116),A=n(117),D=n(118),M=n(119),F=n(120),L=n(121),R=n(122),B=n(123),H=n(124),U=s.a.div.withConfig({displayName:"sidebar-options__SidebarOptionsContainer",componentId:"sc-16zyhhi-0"})(["display:flex;align-items:center;font-size:12px;padding-left:2px;cursor:pointer;:hover{background-color:#2F343D;opacity:0.9}> h3{font-weight:500;}> h3 >span{padding:15px;}"]),P=s.a.div.withConfig({displayName:"sidebar-options__SelectedSidebarOptionsContainer",componentId:"sc-16zyhhi-1"})(["display:flex;align-items:center;font-size:12px;padding-left:2px;cursor:pointer;background-color:var(--slack-selected-color);:hover{opacity:0.9}> h3{font-weight:500;}> h3 >span{padding:15px;}"]),T=s.a.h3.withConfig({displayName:"sidebar-options__SidebarOptionsChannel",componentId:"sc-16zyhhi-2"})(["padding:10px 0px;font-weight:300;"]),G=n(34),W=n(43),E=Object(W.b)({name:"app",initialState:{roomId:null},reducers:{enterRoom:function(e,t){e.roomId=t.payload.roomId}}}),J=E.actions.enterRoom,K=function(e){return e.app.roomId},V=E.reducer;function q(e){var t=e.Icon,n=e.title,i=e.id,a=e.type,o=e.click,c=Object(G.c)(K),r=Object(G.b)(),s=function(){switch(a){case"channel":i&&(console.log("Sidebar-options",i),r(J({roomId:i})));break;case"addChannel":!function(){var e=prompt("Please enter the channel name");e&&y.collection("rooms").add({name:e})}();break;default:console.log("default Case")}};return c===i?Object(C.jsxs)(P,{onClick:o||s,disabled:!1,children:[t&&Object(C.jsx)(t,{fontSize:"small",style:{padding:10}}),t?Object(C.jsx)("h3",{children:n}):Object(C.jsxs)(T,{children:[Object(C.jsx)("span",{children:"#"}),n]})]}):Object(C.jsxs)(U,{onClick:o||s,disabled:!1,children:[t&&Object(C.jsx)(t,{fontSize:"small",style:{padding:10}}),t?Object(C.jsx)("h3",{children:n}):Object(C.jsxs)(T,{children:[Object(C.jsx)("span",{children:"#"}),n]})]})}var Q=s.a.div.withConfig({displayName:"sidebar__SidebarContainer",componentId:"sc-154b1dw-0"})(["background-color:var(--slack-sidebar-color);color:white;flex:0.3;border-top:1px solid #222222;max-width:260px;margin-top:60px;>hr{margin-top:10px;margin-bottom:10px;border:1px solid #333333}"]),Y=s.a.div.withConfig({displayName:"sidebar__SidebarHeader",componentId:"sc-154b1dw-1"})(["display:flex;border-bottom:2px solid #333333;padding:13px;> .MuiSvgIcon-root{padding:8px;color:var(--slack-sidebar-color);background-color:white;font-size:18px;border-radius:100%}"]),$=s.a.div.withConfig({displayName:"sidebar__SidebarInfo",componentId:"sc-154b1dw-2"})(["flex:1;> span{font-size:15px;font-weight:900;margin-bottom:5px;outline:none}> h3{display:flex;font-size:13px;font-weight:400;align-items:center}> h3 > .MuiSvgIcon-root{font-size:14px;margin-top:1px;margin-right:2px;color:green;}"]),X=n(40);function Z(){var e=Object(O.a)(w),t=Object(r.a)(e,1)[0],n=Object(X.a)(y.collection("rooms")),a=Object(r.a)(n,1)[0],o=Object(i.useState)(!1),c=Object(r.a)(o,2),s=c[0],d=c[1],l=Object(i.useState)(!1),p=Object(r.a)(l,2),h=p[0],j=p[1],b=function(){d((function(e){return!e}))},x=function(){j((function(e){return!e}))};return Object(C.jsxs)(Q,{children:[Object(C.jsxs)(Y,{children:[Object(C.jsxs)($,{children:[Object(C.jsx)("span",{className:"input",role:"textbox",contentEditable:!0,children:"Kalp's Slack"}),Object(C.jsxs)("h3",{children:[Object(C.jsx)(k.a,{}),t.displayName]})]}),Object(C.jsx)(S.a,{})]}),!s&&Object(C.jsx)(q,{Icon:N.a,click:b,title:"ShowMore"}),s&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(q,{Icon:z.a,title:"Threads"}),Object(C.jsx)(q,{Icon:A.a,title:"Mentions & reactions"}),Object(C.jsx)(q,{Icon:D.a,title:"Saved items"}),Object(C.jsx)(q,{Icon:M.a,title:"Channel browser"}),Object(C.jsx)(q,{Icon:F.a,title:"People and user group"}),Object(C.jsx)(q,{Icon:L.a,title:"Apps"}),Object(C.jsx)(q,{Icon:R.a,title:"File browser"}),Object(C.jsx)(q,{Icon:B.a,title:"Show less",click:b})]}),Object(C.jsx)("hr",{}),!h&&Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(q,{Icon:N.a,click:x,title:"channel"})}),h&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(q,{Icon:B.a,click:x,title:"channel"}),Object(C.jsx)(q,{Icon:H.a,type:"addChannel",click:x,title:"Add Channel"}),null===a||void 0===a?void 0:a.docs.map((function(e){return Object(C.jsx)(q,{id:e.id,title:e.data().name,type:"channel"},e.id)}))]}),Object(C.jsx)("hr",{})]})}var ee,te=n(125),ne=n(126),ie=s.a.div.withConfig({displayName:"chat__ChatContainer",componentId:"f327zb-0"})(["flex:0.7;flex-grow:1;overflow-y:scroll;margin-top:60px;"]),ae=s.a.div.withConfig({displayName:"chat__ChatHeader",componentId:"f327zb-1"})(["display:flex;justify-content:space-between;padding:20px;border-bottom:1px solid lightgray;"]),oe=s.a.div.withConfig({displayName:"chat__ChatHeaderRight",componentId:"f327zb-2"})([">p{display:flex;align-items:center;font-size:14px}> p > .MuiSvgIcon-root{margin-right:10px;font-size:18px;}"]),ce=s.a.div.withConfig({displayName:"chat__ChatHeaderLeft",componentId:"f327zb-3"})(["display:flex;align-items:center;.h4{display:flex;text-transform:lowercase}> .MuiSvgIcon-root{margin-left:10px;font-size:18px;}"]),re=s.a.div.withConfig({displayName:"chat__ChatMessages",componentId:"f327zb-4"})([""]),se=s.a.div.withConfig({displayName:"chat__ChatBottom",componentId:"f327zb-5"})(["padding-bottom:200px;"]),de=n(127),le=n(61),pe=s.a.div(ee||(ee=Object(le.a)(["\n    border-radius:20px;\n\n    >form {\n        position:relative;\n        display:flex;\n        justify-content:center;\n    }\n    >form >input{\n        position:fixed;\n        bottom:30px;\n        width:60%;\n        border:1px solid gray;\n        border-radius:3px;\n        padding:20px;\n        outline:none;\n    }\n\n    >form >button{\n        display:none !important\n    }\n\n\n"])));function he(e){var t=e.channelName,n=e.channelId,a=e.chatRef,o=Object(i.useState)(""),c=Object(r.a)(o,2),s=c[0],d=c[1],l=Object(O.a)(w),p=Object(r.a)(l,1)[0];return Object(C.jsx)(pe,{children:Object(C.jsxs)("form",{children:[Object(C.jsx)("input",{value:s,onChange:function(e){return d(e.target.value)},placeholder:"Message #".concat(t)}),Object(C.jsx)(de.a,{hidden:!0,type:"submit",onClick:function(e){var t;if(e.preventDefault(),!n)return!1;y.collection("rooms").doc(n).collection("messages").add({message:s,timestamp:v.a.firestore.FieldValue.serverTimestamp(),user:p.displayName,userImage:p.photoURL}),null===a||void 0===a||null===(t=a.current)||void 0===t||t.scrollIntoView({behavior:"smooth"}),d("")},children:"Send"})]})})}var je=s.a.div.withConfig({displayName:"message__MessageContainer",componentId:"c99xqa-0"})(["display:flex;align-items:center;padding:20px;> img{height:50px;border-radius:8px;}"]),be=s.a.div.withConfig({displayName:"message__MessageInfo",componentId:"c99xqa-1"})(["padding-left:10px;> h4 > span{color:gray;font-weight:300;margin-left:4px;font-size:10px;}"]);function xe(e){var t=e.message,n=e.timestamp,i=e.user,a=e.userImage;return console.log("message",null===n||void 0===n?void 0:n.toDate()),Object(C.jsxs)(je,{children:[Object(C.jsx)("img",{src:a,alt:"userImage"}),Object(C.jsxs)(be,{children:[Object(C.jsxs)("h4",{children:[i," ",Object(C.jsx)("span",{children:new Date(null===n||void 0===n?void 0:n.toDate()).toUTCString()})]}),Object(C.jsx)("p",{children:t})]})]})}function me(){var e=Object(G.c)(K),t=Object(X.b)(e&&y.collection("rooms").doc(e)),n=Object(r.a)(t,1)[0],a=Object(X.a)(e&&y.collection("rooms").doc(e).collection("messages").orderBy("timestamp","asc")),o=Object(r.a)(a,2),c=o[0],s=o[1],d=Object(i.useRef)(null);return Object(i.useEffect)((function(){var e;null===d||void 0===d||null===(e=d.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[e,s]),console.log("from chat",null===c||void 0===c?void 0:c.docs),Object(C.jsx)(ie,{children:n&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(ae,{children:[Object(C.jsxs)(ce,{children:[Object(C.jsx)("h4",{children:Object(C.jsxs)("strong",{children:["#",null===n||void 0===n?void 0:n.data().name]})}),Object(C.jsx)(te.a,{})]}),Object(C.jsx)(oe,{children:Object(C.jsxs)("p",{children:[Object(C.jsx)(ne.a,{})," Details"]})})]}),Object(C.jsx)(re,{children:null===c||void 0===c?void 0:c.docs.map((function(e){var t=e.data(),n=t.message,i=t.timestamp,a=t.user,o=t.userImage;return Object(C.jsx)(xe,{message:n,timestamp:i,user:a,userImage:o},e.id)}))}),Object(C.jsx)(se,{ref:d}),Object(C.jsx)(he,{chatRef:d,channelName:null===n||void 0===n?void 0:n.data().name,channelId:e})]})})}var ge=s.a.div.withConfig({displayName:"login__LoginContainer",componentId:"ej78m0-0"})(["background-color:#f8f8f8;height:100vh;display:grid;place-items:center"]),fe=s.a.div.withConfig({displayName:"login__LoginInnerContainer",componentId:"ej78m0-1"})(["padding:100px;text-align:center;background-color:white;border-radius:10px;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);>img{object-fit:contain;height:100px;margin-bottom:40px}>button{margin-top:50px;text-transform:inherit !important;background-color:#0a8d48;color:white}"]);function ue(){return Object(C.jsx)(ge,{children:Object(C.jsxs)(fe,{children:[Object(C.jsx)("img",{src:"https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-1024-80.jpg.webp",alt:"logo"}),Object(C.jsx)("h1",{children:"Sign in to the Fam"}),Object(C.jsx)("p",{children:"BLah blah blah"}),Object(C.jsx)(de.a,{onClick:function(e){e.preventDefault(),w.signInWithPopup(I).catch((function(e){return alert(e.message)}))},children:"Sign in with google"})]})})}n(77);var Oe=n(62),ve=n.n(Oe);var ye=s.a.div.withConfig({displayName:"App__AppBody",componentId:"sc-6rkf8e-0"})(["display:flex;height:100vh"]),we=s.a.div.withConfig({displayName:"App__AppLoadingContainer",componentId:"sc-6rkf8e-1"})(["display:grid;place-items:center;height:100vh;width:100%"]),Ie=s.a.div.withConfig({displayName:"App__AppLoadingContents",componentId:"sc-6rkf8e-2"})(["text-align:center;padding-bottom:100px;display:flex;flex-direction:column;justify-content:center;align-items:center;>img{height:100px;padding:20px;margin-bottom:40px}"]),Ce=function(){var e=Object(O.a)(w),t=Object(r.a)(e,2),n=t[0];return t[1]?Object(C.jsx)(we,{children:Object(C.jsxs)(Ie,{children:[Object(C.jsx)("img",{src:"https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-1024-80.jpg.webp",alt:"logo"}),Object(C.jsx)(ve.a,{name:"ball-spin-fade-loader",color:"purple",fadeIn:"none"})]})}):Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(d.a,{basename:"/ChatRoom",children:n?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(_,{}),Object(C.jsxs)(ye,{children:[Object(C.jsx)(Z,{}),Object(C.jsx)(l.c,{children:Object(C.jsx)(l.a,{path:"/",exact:!0,children:Object(C.jsx)(me,{})})})]})]}):Object(C.jsx)(ue,{})})})},_e=Object(W.a)({reducer:{app:V}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(G.a,{store:_e,children:Object(C.jsx)(Ce,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[96,1,2]]]);
//# sourceMappingURL=main.f5771a27.chunk.js.map