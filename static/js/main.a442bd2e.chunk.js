(this["webpackJsonppatients-app-ui"]=this["webpackJsonppatients-app-ui"]||[]).push([[0],{19:function(t,e,n){t.exports={MyBtn:"MyButton_MyBtn__GtlHn"}},20:function(t,e,n){t.exports={MyInput:"Input_MyInput__1F2Fy"}},28:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(17),s=n.n(c),i=n(7),u=n.n(i),j=n(18),l=n(8),o=(n(28),n(0)),p=function(t){return Object(o.jsxs)("div",{className:"patient",children:[Object(o.jsxs)("div",{className:"first-last-name",children:[t.patients.last_name,", ",t.patients.first_name]}),Object(o.jsx)("div",{className:"date-patient",children:t.patients.date_birth})]})},b=n(3),d=n(22),f=n(19),O=n.n(f),h=["children"],x=function(t){var e=t.children,n=Object(d.a)(t,h);return Object(o.jsx)("button",Object(b.a)(Object(b.a)({},n),{},{className:O.a.MyBtn,children:e}))},v=n(20),m=n.n(v),y=r.a.forwardRef((function(t,e){return Object(o.jsx)("input",Object(b.a)({ref:e,className:m.a.MyInput},t))})),_=function(t){var e=t.patients;return e.length?Object(o.jsx)("div",{children:e.map((function(t){return Object(o.jsx)(p,{patients:t},t.id)}))}):Object(o.jsx)("div",{children:Object(o.jsx)("h1",{style:{textAlign:"center"},children:"Posts not found!"})})},N=n(21),M=n.n(N),g=function(t){var e=t.filter,n=t.setFilter;return Object(o.jsx)(y,{value:e.query,onChange:function(t){return n(Object(b.a)(Object(b.a)({},e),{},{query:t.target.value}))},placeholder:"Search"})};var w=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)({query:""}),s=Object(l.a)(c,2),i=s[0],p=s[1],b=function(t,e){var n=t;return Object(a.useMemo)((function(){return n.filter((function(t){return t.first_name.toLowerCase().includes(e.toLowerCase())}))}),[e,n])}(n,i.query);Object(a.useEffect)((function(){d()}),[]);var d=function(){var t=Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.a.get("http://127.0.0.1:8000/api-patients/patient-list/");case 2:e=t.sent,r(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"panels",children:[Object(o.jsxs)("div",{className:"left-panel",children:[Object(o.jsx)(g,{filter:i,setFilter:p}),Object(o.jsx)(x,{children:"Click"}),Object(o.jsx)(_,{patients:b})]}),Object(o.jsx)("div",{className:"right-pane"})]})})};s.a.render(Object(o.jsx)(w,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.a442bd2e.chunk.js.map