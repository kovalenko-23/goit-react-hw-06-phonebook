(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{33:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var c,a,o,r,i=t(0),b=t.n(i),l=t(14),u=t.n(l),d=t(6),s=(t(33),t(2)),j=t(9),p=t(3),O=t(19),f=function(e){return e.phoneBook.contacts},m=function(e){return e.phoneBook.filter},h=t(20),x=t.n(h),g=t(7),v={changeFilter:Object(g.b)("phonebook/handleFinder"),deleteContact:Object(g.b)("phonebook/deletetContact",(function(e,n){return{payload:{id:e,name:n}}})),onSubmitForm:Object(g.b)("phonebook/handleOnSubmitForm",(function(e,n){return{payload:{id:x.a.generate(),name:e,number:n}}}))},y=p.a.form(c||(c=Object(s.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid black;\n"]))),k=p.a.label(a||(a=Object(s.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  font-weight: bold;\n  margin-bottom: ",";\n"])),(function(e){return e.bottom?"20px":"8px"})),C=p.a.input(o||(o=Object(s.a)(["\n  margin-left: 6px;\n"]))),w=p.a.button(r||(r=Object(s.a)(["\n  height: 30px;\n  font-weight: bold;\n  font-size: 16px;\n  background-color: #c1f3d9;\n"]))),F=t(1);var S,z,B,A,D,T,J,P,I=function(){var e=Object(i.useState)(""),n=Object(O.a)(e,2),t=n[0],c=n[1],a=Object(i.useState)(""),o=Object(O.a)(a,2),r=o[0],b=o[1],l=Object(d.b)(),u=Object(d.c)(f),s=u.map((function(e){return e.name})),p=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":c(a);break;case"number":b(a);break;default:return}},m=function(){c(""),b("")};return Object(F.jsxs)(y,{onSubmit:function(e){e.preventDefault(),u!==[]&&s.includes(t)?j.b.error("You already have ".concat(t," in your contacts!")):(!function(e,n){l(v.onSubmitForm(e,n))}(t,r),j.b.success("".concat(t," added to your contacts!")),m())},children:[Object(F.jsxs)(k,{children:["Name",Object(F.jsx)(C,{autoComplete:"off",type:"text",name:"name",value:t,onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(F.jsxs)(k,{bottom:!0,children:["Number",Object(F.jsx)(C,{autoComplete:"off",type:"tel",name:"number",value:r,onChange:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(F.jsx)(w,{type:"submit",children:"Add to contacts"})]})},L=p.a.li(S||(S=Object(s.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  width: 300px;\n  margin-bottom: 20px;\n  padding: 10px;\n  font-size: 15px;\n  border: 1px solid;\n"]))),N=p.a.p(z||(z=Object(s.a)(["\n  margin: 0;\n  margin-right: 6px;\n"]))),Z=p.a.button(B||(B=Object(s.a)(["\n  font-size: 12px;\n  font-weight: bold;\n"]))),q=function(e){var n=e.id,t=e.name,c=e.number,a=e.onDeleteButton;return Object(F.jsxs)(L,{id:n,children:[Object(F.jsxs)(N,{children:[t,":"]}),Object(F.jsx)(N,{children:c}),Object(F.jsx)(Z,{type:"button",onClick:function(){j.b.success("".concat(t," removed from your contacts")),a(n,t)},children:"Delete"})]})},M=p.a.ul(A||(A=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n"]))),E=function(){var e=Object(d.c)(f),n=Object(d.c)(m),t=Object(d.b)(),c=e.filter((function(e){return e.name.toLowerCase().includes(n)}));return Object(F.jsx)(M,{children:c.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(F.jsx)(q,{id:n,name:c,number:a,onDeleteButton:function(){return function(e,n){return t(v.deleteContact(e,n))}(n,c)}},n)}))})},G=p.a.div(D||(D=Object(s.a)(["\n  margin-bottom: 30px;\n"]))),Y=p.a.label(T||(T=Object(s.a)(["\n  padding: 15px;\n  border: 1px solid black;\n  font-weight: bold;\n"]))),$=p.a.input(J||(J=Object(s.a)(["\n  margin-left: 8px;\n"]))),H=function(){var e=Object(d.c)(m),n=Object(d.b)();return Object(F.jsx)(G,{children:Object(F.jsxs)(Y,{children:["Find",Object(F.jsx)($,{type:"text",name:"message",value:e,onChange:function(e){return n(v.changeFilter(e.currentTarget.value))}})]})})},K=p.a.div(P||(P=Object(s.a)(["\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"])));var Q,R,U=function(){return Object(F.jsxs)(K,{children:[Object(F.jsx)(j.a,{}),Object(F.jsx)("h1",{children:"Phonebook"}),Object(F.jsx)(I,{}),Object(F.jsx)("h2",{children:"Contacts"}),Object(F.jsx)(H,{}),Object(F.jsx)(E,{})]})},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),o(e),r(e)}))},W=t(16),X=t(10),_=t(4),ee=null!==(Q=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==Q?Q:[],ne=Object(g.c)(ee,(R={},Object(X.a)(R,v.onSubmitForm,(function(e,n){var t=n.payload;return[].concat(Object(W.a)(e),[t])})),Object(X.a)(R,v.deleteContact,(function(e,n){var t=n.payload;return e.filter((function(e){return e.id!==t.id}))})),R)),te=Object(g.c)("",Object(X.a)({},v.changeFilter,(function(e,n){return n.payload}))),ce=Object(_.b)({contacts:ne,filter:te}),ae=t(21),oe=t.n(ae),re=t(22),ie=t.n(re),be=t(8),le={key:"contacts",storage:oe.a,blacklist:["filter"]},ue=[].concat(Object(W.a)(Object(g.d)({serializableCheck:{ignoredActions:[be.a,be.f,be.b,be.c,be.d,be.e]}})),[ie.a]),de=Object(g.a)({reducer:{phoneBook:Object(be.g)(le,ce)},middleware:ue,devTools:!1}),se=Object(be.h)(de),je=t(23);u.a.render(Object(F.jsx)(b.a.StrictMode,{children:Object(F.jsx)(d.a,{store:de,children:Object(F.jsx)(je.PersistGate,{loading:null,persistor:se,children:Object(F.jsx)(U,{})})})}),document.getElementById("root")),V()}},[[47,1,2]]]);
//# sourceMappingURL=main.758f25cb.chunk.js.map