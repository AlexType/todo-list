(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[676],{8917:function(n,t,e){"use strict";e.d(t,{x0:function(){return r}});let r=(n=21)=>{let t="",e=crypto.getRandomValues(new Uint8Array(n));for(;n--;){let r=63&e[n];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t}},1503:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return c}});var r=e(5893),i=(e(7294),e(9008)),u=e(9141);function c(){return(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"})}),(0,r.jsx)("h1",{className:"title-page mb-4",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"}),(0,r.jsx)(u.Z,{})]})}},9141:function(n,t,e){"use strict";e.d(t,{Z:function(){return p}});var r=e(5893),i=e(7294),u=e(9226),c=e(0),a=e(8365),s=e(4168),l=e(1577),o=e(8917),d=e(381),f=e.n(d),h=e(9193);function p(){var n=(0,u.I0)(),t=(0,i.useState)(""),e=t[0],d=t[1],p=(0,i.useState)(null),v=p[0],x=p[1];return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"row gy-3",children:[(0,r.jsx)("div",{className:"col-12",children:(0,r.jsx)(a.Z,{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:e,onChange:function(n){return d(n.target.value)}})}),(0,r.jsx)("div",{className:"col-12",children:(0,r.jsx)(s.Z,{value:v,onChange:function(n){x(n)},disabledDate:function(n){return n&&n<f()().startOf("day")},format:"DD.MM.YYYY"})})]}),(0,r.jsxs)("div",{className:"row mt-4",children:[(0,r.jsx)("div",{className:"col-auto",children:(0,r.jsx)(l.Z,{className:"btn-success",onClick:function(){e.length?(n((0,h.gI)({id:(0,o.x0)(),title:e,isCompleted:!1,created:f()(),deadline:v,finished:null})),d(""),x(null),c.ZP.success("\u0417\u0430\u0434\u0430\u0447\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u0430!")):c.ZP.error("\u0412\u044b \u043d\u0435 \u0432\u0432\u0435\u043b\u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})}),(0,r.jsx)("div",{className:"col-auto",children:(0,r.jsx)(l.Z,{className:"btn-cencel",onClick:function(){return d("")},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"})})]})]})}},9193:function(n,t,e){"use strict";e.d(t,{gI:function(){return i},F6:function(){return u},Lz:function(){return c},_T:function(){return a},zU:function(){return s},b$:function(){return l}});var r=e(2240),i=function(n){return{type:r.tP,payload:n}},u=function(n){return{type:r.hI,payload:n}},c=function(n,t){return{type:r.Rf,payload:{id:n,title:t}}},a=function(n,t){return{type:r.H5,payload:{id:n,isCompleted:t}}},s=function(n,t){return{type:r.ip,payload:{id:n,date:t}}},l=function(n,t){return{type:r.vm,payload:{id:n,date:t}}}},8159:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/add-task",function(){return e(1503)}])}},function(n){n.O(0,[178,774,888,179],(function(){return t=8159,n(n.s=t);var t}));var t=n.O();_N_E=t}]);