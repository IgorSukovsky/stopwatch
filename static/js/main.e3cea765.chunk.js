(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),r=n(33),u=n.n(r),o=(n(32),n(31)),s=n(30),i=n(42),b=n(50),l=n(45),j=n(49),O=n(43),p=n(44),f=n(51),h=n(46),d=n(47),w=n(48),m=n(29),C=n.n(m),x=n(5),g=function(e){var t=("0"+Math.floor(e/3600)).slice(-2),n=e%3600,c=("0"+Math.floor(n/60)).slice(-2),a=("0"+n%60).slice(-2);return"".concat(t,":").concat(c,":").concat(a)},I=function(){var e=a.a.useRef(null),t=a.a.useRef(null),n=a.a.useRef(null),r=a.a.useRef(null),u=Object(c.useState)(0),m=Object(s.a)(u,2),I=m[0],N=m[1],_=Object(c.useState)(!1),k=Object(s.a)(_,2),v=k[0],R=k[1];return Object(c.useEffect)((function(){var c=Object(i.a)(e.current,"click").pipe(Object(O.a)({newIsCounting:!0})),a=Object(i.a)(n.current,"click").pipe(Object(O.a)({newIsCounting:!1,newCounter:0})),u=Object(i.a)(t.current,"dblclick").pipe(Object(p.a)((function(e){return Object(b.a)(300)})),Object(O.a)({newIsCounting:!1})),s=Object(i.a)(r.current,"click").pipe(Object(O.a)({newIsCounting:!0,newCounter:0}));return Object(l.a)(c,a,u,s).pipe(Object(f.a)({newIsCounting:!1,newCounter:0}),Object(h.a)((function(e,t){return Object(o.a)(Object(o.a)({},e),t)}),{}),Object(d.a)((function(e){N(e.newCounter),R(e.newIsCounting)})),Object(w.a)((function(e){return e.newIsCounting?Object(b.a)(1e3).pipe(Object(d.a)((function(t){return e.newCounter++,1})),Object(d.a)((function(t){return N(e.newCounter)}))):j.a}))).subscribe(),function(){}}),[]),Object(x.jsxs)("div",{className:"stopwatch",children:[Object(x.jsx)("h1",{className:"watchText",children:"StopWatch"}),Object(x.jsx)("span",{className:"timer",children:g(I)}),Object(x.jsxs)("div",{className:"control-panel",children:[Object(x.jsx)("button",{className:C()("control-panel__button",v&&"hidden"),ref:e,children:"Start"}),Object(x.jsx)("button",{className:C()("control-panel__button",!v&&"hidden"),ref:n,children:"Stop"}),Object(x.jsx)("button",{className:"control-panel__button",ref:t,children:"Wait"}),Object(x.jsx)("button",{className:"control-panel__button",ref:r,children:"Reset"})]})]})};u.a.render(Object(x.jsx)(I,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e3cea765.chunk.js.map