(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{29:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var o,r,a,c,i=t(0),u=t.n(i),l=t(11),d=t.n(l),b=t(5),s=(t(29),t(2)),j=t(7),f=t(3),p=t(15),m=t(17),h=t.n(m),O="phonebook/handleOnSubmitForm",x="phonebook/handleFinder",g="phonebook/deletetContact",y={onSubmitForm:function(e,n){return{type:O,payload:{id:h.a.generate(),name:e,number:n}}},deleteContact:function(e,n){return{type:g,payload:{id:e,name:n}}},changeFilter:function(e){return{type:x,payload:e}}},v=f.a.form(o||(o=Object(s.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid black;\n"]))),w=f.a.label(r||(r=Object(s.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  font-weight: bold;\n  margin-bottom: ",";\n"])),(function(e){return e.bottom?"20px":"8px"})),k=f.a.input(a||(a=Object(s.a)(["\n  margin-left: 6px;\n"]))),C=f.a.button(c||(c=Object(s.a)(["\n  height: 30px;\n  font-weight: bold;\n  font-size: 16px;\n  background-color: #c1f3d9;\n"]))),S=t(1);var F,B,z,A,D,J,I,N,T=Object(b.b)(null,(function(e){return{handleOnSubmitForm:function(n,t){return e(y.onSubmitForm(n,t))}}}))((function(e){var n=e.handleOnSubmitForm,t=Object(i.useState)(""),o=Object(p.a)(t,2),r=o[0],a=o[1],c=Object(i.useState)(""),u=Object(p.a)(c,2),l=u[0],d=u[1],b=function(e){var n=e.currentTarget,t=n.name,o=n.value;switch(t){case"name":a(o);break;case"number":d(o);break;default:return}},s=function(){a(""),d("")};return Object(S.jsxs)(v,{onSubmit:function(e){e.preventDefault(),n(r,l),s()},children:[Object(S.jsxs)(w,{children:["Name",Object(S.jsx)(k,{autoComplete:"off",type:"text",name:"name",value:r,onChange:b,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(S.jsxs)(w,{bottom:!0,children:["Number",Object(S.jsx)(k,{autoComplete:"off",type:"tel",name:"number",value:l,onChange:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(S.jsx)(C,{type:"submit",children:"Add to contacts"})]})})),L=f.a.li(F||(F=Object(s.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  width: 300px;\n  margin-bottom: 20px;\n  padding: 10px;\n  font-size: 15px;\n  border: 1px solid;\n"]))),P=f.a.p(B||(B=Object(s.a)(["\n  margin: 0;\n  margin-right: 6px;\n"]))),Z=f.a.button(z||(z=Object(s.a)(["\n  font-size: 12px;\n  font-weight: bold;\n"]))),q=function(e){var n=e.id,t=e.name,o=e.number,r=e.onDeleteButton;return Object(S.jsxs)(L,{id:n,children:[Object(S.jsxs)(P,{children:[t,":"]}),Object(S.jsx)(P,{children:o}),Object(S.jsx)(Z,{type:"button",onClick:function(){return r(n,t)},children:"Delete"})]})},M=f.a.ul(A||(A=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n"]))),R=Object(b.b)((function(e){return{contacts:e.phoneBook.contacts,filter:e.phoneBook.filter}}),(function(e){return{deleteContact:function(n,t){return e(y.deleteContact(n,t))}}}))((function(e){var n=e.contacts,t=e.filter,o=e.deleteContact,r=n.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(S.jsx)(M,{children:r.map((function(e){var n=e.id,t=e.name,r=e.number;return Object(S.jsx)(q,{id:n,name:t,number:r,onDeleteButton:function(){return o(n,t)}},n)}))})})),E=f.a.div(D||(D=Object(s.a)(["\n  margin-bottom: 30px;\n"]))),W=f.a.label(J||(J=Object(s.a)(["\n  padding: 15px;\n  border: 1px solid black;\n  font-weight: bold;\n"]))),Y=f.a.input(I||(I=Object(s.a)(["\n  margin-left: 8px;\n"]))),$=Object(b.b)((function(e){return{filter:e.phoneBook.filter}}),(function(e){return{hendleFinder:function(n){return e(y.changeFilter(n.currentTarget.value))}}}))((function(e){var n=e.filter,t=e.hendleFinder;return Object(S.jsx)(E,{children:Object(S.jsxs)(W,{children:["Find",Object(S.jsx)(Y,{type:"text",name:"message",value:n,onChange:t})]})})})),G=f.a.div(N||(N=Object(s.a)(["\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto;\n"])));var H,K=function(){return Object(S.jsxs)(G,{children:[Object(S.jsx)(j.a,{}),Object(S.jsx)("h1",{children:"Phonebook"}),Object(S.jsx)(T,{}),Object(S.jsx)("h2",{children:"Contacts"}),Object(S.jsx)($,{}),Object(S.jsx)(R,{})]})},Q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),o(e),r(e),a(e),c(e)}))},U=t(6),V=t(18),X=t(16),_=t(19),ee=null!==(H=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==H?H:[],ne=Object(U.combineReducers)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,n=arguments.length>1?arguments[1]:void 0,t=n.type,o=n.payload;switch(t){case O:if(e!==[]){var r=e.map((function(e){return e.name}));if(r.includes(o.name))return j.b.error("You already have ".concat(o.name," in your contacts!"),{icon:Object(S.jsx)(_.a,{fill:"red"})}),e}return j.b.success("".concat(o.name," added to your contacts!")),window.localStorage.setItem("contacts",JSON.stringify([].concat(Object(X.a)(e),[o]))),[].concat(Object(X.a)(e),[o]);case g:return window.localStorage.setItem("contacts",JSON.stringify(e.filter((function(e){return e.id!==o.id})))),j.b.success("".concat(o.name," removed from your contacts")),e.filter((function(e){return e.id!==o.id}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,t=n.type,o=n.payload;return t===x?o:e}}),te=Object(U.combineReducers)({phoneBook:ne}),oe=Object(U.createStore)(te,Object(V.composeWithDevTools)());d.a.render(Object(S.jsx)(u.a.StrictMode,{children:Object(S.jsx)(b.a,{store:oe,children:Object(S.jsx)(K,{})})}),document.getElementById("root")),Q()}},[[40,1,2]]]);
//# sourceMappingURL=main.05fd780e.chunk.js.map