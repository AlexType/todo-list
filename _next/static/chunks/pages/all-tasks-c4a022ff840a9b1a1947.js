(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[812],{7326:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var s=t(5893),i=t(7294),a=t(9008),c=t(9226),l=t(1577),r=t(3306),d=t(4277),u=t(381),o=t.n(u),h=t(0),f=t(9193),m=t(1163),x=t(9713),j=t(4168);function v(e){var n=e.id,t=e.edit,a=e.remove,l=e.deadline,r=e.setIsChange,d=(0,i.useState)(!1),u=d[0],h=d[1],v=(0,c.I0)(),N=(0,m.useRouter)();return(0,s.jsxs)("div",{className:"task-item__header",children:[(0,s.jsxs)("div",{className:"row justify-content-between align-items-center",children:[(0,s.jsxs)("div",{className:"col-auto",children:[(0,s.jsx)(x.Z,{placement:"top",color:"orange",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443",children:(0,s.jsx)("i",{className:"bi bi-pencil-square",onClick:t})}),(0,s.jsx)(x.Z,{placement:"top",color:"lime",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c deadline",children:(0,s.jsx)("i",{className:"bi bi-calendar3 ms-3",onClick:function(){return h(!u)}})})]}),(0,s.jsx)("div",{className:"col",children:(0,s.jsx)("p",{className:"task-item__link",onClick:function(){return N.push("task/"+n)},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u043e"})}),(0,s.jsx)("div",{className:"col-auto",children:(0,s.jsx)(x.Z,{placement:"top",color:"red",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443",children:(0,s.jsx)("i",{className:"bi bi-trash2",onClick:a})})})]}),(0,s.jsx)(j.Z,{open:u,className:"task-item__date-picker-short",onChange:function(e){return function(e){v((0,f.b$)(n,e)),h(!1),r(!1)}(e)},disabledDate:function(e){return e&&e<o()().startOf("day")},defaultValue:l})]})}var N=t(2566),p=t(1705);function k(e){var n=e.task,t=n.id,a=n.created,l=n.finished,r=n.deadline,d=(0,c.I0)(),u=(0,i.useState)(!1),m=u[0],x=u[1];return(0,s.jsx)("section",{className:"col",children:(0,s.jsxs)("div",{className:"task-item",children:[(0,s.jsx)(v,{id:t,edit:function(){return x(!m)},remove:function(){d((0,f.F6)(t)),h.ZP.warning("\u0417\u0430\u0434\u0430\u0447\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430")},setIsChange:x,deadline:null===r?o()():o()(r)}),(0,s.jsx)("div",{className:"task-item__body",children:(0,s.jsx)(p.Z,{task:n,change:m,setChange:x})}),(0,s.jsx)(N.Z,{className:"task-item__footer",start:o()(new Date(a)).fromNow(),deadline:r?o()(new Date(r)).endOf("day").fromNow():"\u0431\u0435\u0441\u0441\u0440\u043e\u0447\u043d\u043e",end:l?o()(new Date(l)).fromNow():"\u0432 \u0440\u0430\u0431\u043e\u0442\u0435"})]})})}function b(e){var n=e.tasks;return(0,s.jsx)("article",{className:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 gy-3",children:n.length?n.map((function(e){return(0,s.jsx)(k,{task:e},e.id)})):(0,s.jsx)("div",{className:"col-auto mx-auto",children:(0,s.jsx)(d.Z,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:160},description:(0,s.jsx)("span",{className:"mt-4",children:"\u0423 \u0432\u0430\u0441 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0437\u0430\u0434\u0430\u0447"})})})})}var g=t(9141),C=t(1634),Z=t(1096);function _(e){var n=e.setFilters,t=(0,s.jsxs)(C.Z,{children:[(0,s.jsx)(C.Z.Item,{onClick:function(){return n(null)},children:(0,s.jsx)("span",{children:"\u0412\u0441\u0435"})},"1"),(0,s.jsx)(C.Z.Item,{onClick:function(){return n("finished")},children:(0,s.jsx)("span",{children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b\u0435"})},"2"),(0,s.jsx)(C.Z.Item,{onClick:function(){return n("active")},children:(0,s.jsx)("span",{children:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435"})},"3"),(0,s.jsx)(C.Z.Item,{onClick:function(){return n("deadline")},children:(0,s.jsx)("span",{children:"\u041f\u0440\u043e\u0441\u0440\u043e\u0447\u0435\u043d\u044b"})},"4")]});return(0,s.jsx)(Z.Z,{overlay:t,children:(0,s.jsxs)("div",{className:"filter-item",children:[(0,s.jsx)("i",{className:"bi bi-funnel-fill"}),(0,s.jsx)("span",{children:"\u0424\u0438\u043b\u044c\u0442\u0440"})]})})}function w(){var e=(0,i.useState)(!1),n=e[0],t=e[1],d=(0,i.useState)(null),u=d[0],h=d[1],f=(0,c.v9)((function(e){return e.tasks.tasks})),m=function(){var e=function(e){return null!==e.finished},n=function(e){return!e.isCompleted},t=function(e){return null!==e.deadline&&!e.isCompleted&&o()()>o()(e.deadline)};return{filteredList:function(s,i){return"finished"===i?s.filter(e):"active"===i?s.filter(n):"deadline"===i?s.filter(t):s}}}().filteredList;return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)(a.default,{children:(0,s.jsx)("title",{children:"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"})}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("h1",{className:"title-page mb-4",children:"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"}),(0,s.jsx)("div",{className:"row justify-content-end mb-4",children:(0,s.jsx)("div",{className:"col-auto",children:(0,s.jsx)(_,{setFilters:h})})}),(0,s.jsx)(b,{tasks:m(f,u)}),(0,s.jsx)(l.Z,{className:"btn-success mt-4",onClick:function(){return t(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"}),(0,s.jsx)(r.Z,{title:"\u0411\u044b\u0441\u0442\u0440\u043e\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435",visible:n,onCancel:function(){return t(!1)},footer:null,children:(0,s.jsx)(g.Z,{})})]})]})}},9141:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var s=t(5893),i=t(7294),a=t(381),c=t.n(a),l=t(9226),r=t(0),d=t(8365),u=t(4168),o=t(1577),h=t(8917),f=t(9193);function m(){var e=(0,l.I0)(),n=(0,i.useState)(""),t=n[0],a=n[1],m=(0,i.useState)(null),x=m[0],j=m[1];return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"row gy-3",children:[(0,s.jsx)("div",{className:"col-12",children:(0,s.jsx)(d.Z,{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:t,onChange:function(e){return a(e.target.value)}})}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsx)(u.Z,{value:x,onChange:function(e){return j(e)},disabledDate:function(e){return e&&e<c()().startOf("day")},format:"DD.MM.YYYY"})})]}),(0,s.jsxs)("div",{className:"row mt-4",children:[(0,s.jsx)("div",{className:"col-auto",children:(0,s.jsx)(o.Z,{className:"btn-success",onClick:function(){t.length?(e((0,f.gI)({id:(0,h.x0)(),title:t,isCompleted:!1,created:c()(),deadline:x,finished:null})),a(""),j(null),r.ZP.success("\u0417\u0430\u0434\u0430\u0447\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u0430!")):r.ZP.error("\u0412\u044b \u043d\u0435 \u0432\u0432\u0435\u043b\u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})}),(0,s.jsx)("div",{className:"col-auto",children:(0,s.jsx)(o.Z,{className:"btn-cencel",onClick:function(){return a("")},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})})]})]})}},1705:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var s=t(5893),i=t(7294),a=t(381),c=t.n(a),l=t(9226),r=t(0),d=t(5627),u=t(9193),o=t(8365),h=t(4168);function f(e){var n=e.id,t=e.title,a=e.setIsChange,r=e.deadline,d=(0,i.useState)(t),f=d[0],m=d[1],x=(0,i.useState)(r),j=x[0],v=x[1],N=(0,l.I0)();return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-12 mb-2",children:(0,s.jsx)(o.Z,{className:"task-title__input",value:f,onChange:function(e){return m(e.target.value)}})}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsx)(h.Z,{className:"task-title__date-picker",onChange:function(e){v(e)},disabledDate:function(e){return e&&e<c()().startOf("day")},format:"DD.MM.YYYY",defaultValue:j})})]}),(0,s.jsxs)("div",{className:"row mt-1 gx-2",children:[(0,s.jsx)("div",{className:"col-auto",children:(0,s.jsx)("button",{className:"task-item__btn done",onClick:function(){N((0,u.Lz)(n,f)),N((0,u.b$)(n,j)),a(!1)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})}),(0,s.jsx)("div",{className:"col-auto",children:(0,s.jsx)("button",{className:"task-item__btn cancel",onClick:function(){return a(!1)},children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})})]})]})}function m(e){var n=e.task,t=e.change,a=e.setChange,o=n.id,h=n.title,m=n.isCompleted,x=n.deadline,j=(0,l.I0)(),v=(0,i.useState)(m),N=v[0],p=v[1];return(0,s.jsx)("div",{className:"task-title ".concat(N?"is-checked":""),children:t?(0,s.jsx)(f,{id:o,title:h,setIsChange:a,deadline:null===x?c()():c()(x)}):(0,s.jsx)(d.ZP,{checked:N,value:N,onClick:function(){return(e=!N)?r.ZP.success("\u0417\u0430\u0434\u0430\u0447\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430"):r.ZP.warning("\u0417\u0430\u0434\u0430\u0447\u0430 \u0432\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430"),p(e),j((0,u._T)(o,e)),void j((0,u.zU)(o,e?c()():null));var e},children:h})})}},2566:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(5893);t(7294);function i(e){var n=e.start,t=e.deadline,i=e.end,a=e.className;return(0,s.jsx)("div",{className:"date-info ".concat(a),children:(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{className:"start",children:[(0,s.jsx)("i",{className:"bi bi-check"}),(0,s.jsx)("span",{children:n})]}),(0,s.jsxs)("li",{className:"deadline",children:[(0,s.jsx)("i",{className:"bi bi-alarm"}),(0,s.jsx)("span",{children:t})]}),(0,s.jsxs)("li",{className:"end",children:[(0,s.jsx)("i",{className:"bi bi-check-all"}),(0,s.jsx)("span",{children:i})]})]})})}i.defaultProps={className:""}},9193:function(e,n,t){"use strict";t.d(n,{gI:function(){return i},F6:function(){return a},Lz:function(){return c},_T:function(){return l},zU:function(){return r},b$:function(){return d}});var s=t(2240),i=function(e){return{type:s.tP,payload:e}},a=function(e){return{type:s.hI,payload:e}},c=function(e,n){return{type:s.Rf,payload:{id:e,title:n}}},l=function(e,n){return{type:s.H5,payload:{id:e,isCompleted:n}}},r=function(e,n){return{type:s.ip,payload:{id:e,date:n}}},d=function(e,n){return{type:s.vm,payload:{id:e,date:n}}}},48:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/all-tasks",function(){return t(7326)}])}},function(e){e.O(0,[178,127,774,888,179],(function(){return n=48,e(e.s=n);var n}));var n=e.O();_N_E=n}]);