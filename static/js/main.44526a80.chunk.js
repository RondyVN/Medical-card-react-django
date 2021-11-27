(this["webpackJsonppatients-app-ui"]=this["webpackJsonppatients-app-ui"]||[]).push([[0],{12:function(t,e,n){t.exports={myModal:"MyModal_myModal__3_o5W",myModalContent:"MyModal_myModalContent__3hI7E",active:"MyModal_active__XeOt0"}},23:function(t,e,n){t.exports={MyBtn:"MyButton_MyBtn__GtlHn"}},24:function(t,e,n){t.exports={MyInput:"Input_MyInput__1F2Fy"}},32:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(22),i=n.n(c),s=n(25),u=n(4),o=n.n(u),j=n(6),l=n(5),d=(n(32),n(0)),b=function(t){return Object(d.jsxs)("div",{className:"patient",onClick:function(){t.setId(t.patients.id)},children:[Object(d.jsxs)("div",{className:"first-last-name",children:[t.patients.last_name,", ",t.patients.first_name]}),Object(d.jsxs)("div",{className:"date-patient",children:[t.patients.date_birth,Object(d.jsx)("p",{children:t.patients.id})]})]})},p=n(2),h=n(26),O=n(23),f=n.n(O),v=["children"],x=function(t){var e=t.children,n=Object(h.a)(t,v);return Object(d.jsx)("button",Object(p.a)(Object(p.a)({},n),{},{className:f.a.MyBtn,children:e}))},m=n(24),_=n.n(m),g=r.a.forwardRef((function(t,e){return Object(d.jsx)("input",Object(p.a)({ref:e,className:_.a.MyInput},t))})),y=function(t){var e=t.setId,n=t.patients;return n.length?Object(d.jsx)("div",{children:n.map((function(t){return Object(d.jsx)(b,{setId:e,patients:t},t.id)}))}):Object(d.jsx)("div",{children:Object(d.jsx)("h1",{style:{textAlign:"center"},children:"Posts not found!"})})},w=n(7),M=n.n(w),C=function(t){var e=t.filter,n=t.setFilter;return Object(d.jsx)(g,{value:e.query,onChange:function(t){return n(Object(p.a)(Object(p.a)({},e),{},{query:t.target.value}))},placeholder:"Search"})},N=n(12),k=n.n(N),I=function(t){var e=t.children,n=t.visible,a=t.setVisible,r=[k.a.myModal];return n&&r.push(k.a.active),Object(d.jsx)("div",{className:r.join(" "),onClick:function(){return a(!1)},children:Object(d.jsx)("div",{className:k.a.myModalContent,onClick:function(t){return t.stopPropagation()},children:e})})},L=function(t){var e=t.create,n=Object(a.useState)({first_name:"",last_name:"",date_birth:"",weight:"",growth:""}),r=Object(l.a)(n,2),c=r[0],i=r[1],s=function(){var t=Object(j.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,M.a.post("http://127.0.0.1:8000/api-patients/patient-create/",c);case 3:a=t.sent,e(a.data),i({first_name:"",last_name:"",date_birth:"",weight:0,growth:0});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{children:[Object(d.jsx)(g,{value:c.first_name,onChange:function(t){return i(Object(p.a)(Object(p.a)({},c),{},{first_name:t.target.value}))},type:"text",placeholder:"First Name"}),Object(d.jsx)(g,{value:c.last_name,onChange:function(t){return i(Object(p.a)(Object(p.a)({},c),{},{last_name:t.target.value}))},type:"text",placeholder:"Last Name"}),Object(d.jsx)(g,{value:c.growth,onChange:function(t){return i(Object(p.a)(Object(p.a)({},c),{},{growth:t.target.value}))},type:"number",placeholder:"Growth"}),Object(d.jsx)(g,{value:c.weight,onChange:function(t){return i(Object(p.a)(Object(p.a)({},c),{},{weight:t.target.value}))},type:"number",placeholder:"Weight"}),Object(d.jsx)(g,{value:c.date_birth,onChange:function(t){return i(Object(p.a)(Object(p.a)({},c),{},{date_birth:t.target.value}))},type:"date",placeholder:"Last Name"}),Object(d.jsx)(x,{onClick:s,children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})]})})},S=function(t){var e=t.children;return Object(d.jsx)("div",{className:"panels",children:e})},F=function(t){var e=t.children;return Object(d.jsx)("div",{className:"left-panel",children:e})},B=function(t){var e=t.children;return Object(d.jsx)("div",{className:"right-panel",children:e})},q=function(t){var e=t.id,n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],i=r[1];Object(a.useEffect)((function(){s()}),[e]);var s=function(){var t=Object(j.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.a.get("http://127.0.0.1:8000/api-patients/patient-detail/".concat(e,"/"));case 2:n=t.sent,i(n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"info-patient",children:[Object(d.jsxs)("p",{children:["First Name: ",c.first_name]}),Object(d.jsxs)("p",{children:["Last Name: ",c.last_name]}),Object(d.jsxs)("p",{children:["Weight: ",c.weight]}),Object(d.jsxs)("p",{children:["Growth: ",c.growth]})]})};var E=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)({query:""}),i=Object(l.a)(c,2),u=i[0],b=i[1],p=Object(a.useState)(!1),h=Object(l.a)(p,2),O=h[0],f=h[1],v=function(t,e){var n=t;return Object(a.useMemo)((function(){return n.filter((function(t){return t.first_name.toLowerCase().includes(e.toLowerCase())||t.last_name.toLowerCase().includes(e.toLowerCase())}))}),[e,n])}(n,u.query),m=Object(a.useState)(19),_=Object(l.a)(m,2),g=_[0],w=_[1];Object(a.useEffect)((function(){N()}),[]);var N=function(){var t=Object(j.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.a.get("http://127.0.0.1:8000/api-patients/patient-list/");case 2:e=t.sent,r(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(S,{children:[Object(d.jsxs)(F,{children:[Object(d.jsx)(C,{filter:u,setFilter:b}),Object(d.jsx)(x,{onClick:function(){return f(!0)},children:"Create user"}),Object(d.jsx)(I,{visible:O,setVisible:f,children:Object(d.jsx)(L,{create:function(t){r([].concat(Object(s.a)(n),[t])),f(!1)}})}),Object(d.jsx)(y,{setId:function(t){w(t)},patients:v})]}),Object(d.jsxs)(B,{children:[Object(d.jsx)("div",{children:g}),Object(d.jsx)(q,{id:g})]})]})})};i.a.render(Object(d.jsx)(E,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.44526a80.chunk.js.map