(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[14],{165:function(e,a,t){"use strict";t.r(a);var r=t(4),n=t.n(r),s=t(8),l=t(1),c=t(0),i=t.n(c),o=t(26),u=t(30),p=t(22),m=t(21),d=t(16),f=t(31),b=t(23),v=t(15);t(86);a.default=function(){var e=Object(v.a)(),a=e.isLoading,t=e.error,r=e.sendRequest,E=e.clearError,O=Object(c.useState)(),h=Object(l.a)(O,2),j=h[0],g=h[1],w=Object(f.a)({email:{value:"",isValid:!1}},!1),y=Object(l.a)(w,3),k=y[0],S=y[1],x=y[2],N=function(){var e=Object(s.a)(n.a.mark((function e(a){var t,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={email:k.inputs.email.value},e.prev=1,a.preventDefault(),e.next=5,r("".concat("https://placesharer.herokuapp.com/api","/users/forget"),"POST",JSON.stringify(t),{"Content-Type":"application/json"});case 5:s=e.sent,g(s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),x();case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}();return i.a.createElement(c.Fragment,null,j?i.a.createElement(o.a,{className:"forget_password no-select"},i.a.createElement("p",null,j.message)):i.a.createElement(o.a,{className:"forget_password no-select"},i.a.createElement("form",{className:"place-form",onSubmit:N},i.a.createElement(u.a,{id:"email",element:"input",type:"email",label:"Email",validators:[Object(b.a)()],errorText:"Please enter a valid email address",onInput:S}),i.a.createElement(p.a,{type:"submit",disabled:!k.isValid},"Send Email"))),i.a.createElement(m.a,{error:t,onClear:E}),a&&i.a.createElement(d.a,{asOverlay:!0}))}},86:function(e,a,t){}}]);
//# sourceMappingURL=14.4bbc92bf.chunk.js.map