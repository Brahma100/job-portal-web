(this.webpackJsonpcareerz=this.webpackJsonpcareerz||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(9),r=c.n(n),i=(c(14),c(8)),j=c(4),l=(c(15),c(0)),d=function(e){var t=e.userData;return Object(l.jsxs)("div",{className:"card-wrapper",children:[Object(l.jsx)("div",{className:"card-content",children:Object(l.jsx)("div",{className:"image-box",children:Object(l.jsx)("img",{src:t.Image})})}),Object(l.jsx)("div",{className:"card-body",children:Object(l.jsx)("div",{className:"card-text",children:Object(l.jsx)("a",{children:t.name})})})]})},o=c(5),b=function(e){var t=e.searchText,c=e.handleSearch;return Object(l.jsx)("div",{className:"search-box-wrapper",children:Object(l.jsx)("div",{className:"input-wrapper",children:Object(l.jsx)("input",{type:"text",value:t,onChange:c,placeholder:"Search Candidate By Name/Status"})})})},h=function(e){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("h1",{children:"CareerZ"})}),Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(o.c,{to:"/job-portal-web",children:"Home"}),Object(l.jsx)(o.c,{to:"/job-portal-web/shortlisted",children:"ShortListed"}),Object(l.jsx)(o.c,{to:"/job-portal-web/rejected",children:"Rejected"})]})]})},u=function(){return Object(l.jsx)("div",{style:{height:"200px"},children:Object(l.jsx)("h1",{children:"Sorry!! No Results :("})})},x=function(e){var t=e.data,c=e.filter,s=Object(a.useState)(""),n=Object(j.a)(s,2),r=n[0],i=n[1],x=function(e){return e.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())&&("all"===c||e.status.toLowerCase()===c.toLowerCase())}))};return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"content-wrapper",children:[Object(l.jsx)(h,{}),Object(l.jsx)(b,{searchText:r,handleSearch:function(e){i(e.target.value)}}),Object(l.jsx)("div",{className:"container",children:0!==x(t).length?x(t).map((function(e,t){return Object(l.jsx)(o.b,{to:{pathname:"/job-portal-web/".concat(e.id)},children:Object(l.jsx)(d,{userData:e},e.id)},e.id)})):Object(l.jsx)(u,{})})]})})},O=c(2),m=function(e){var t=e.data,c=e.handleStatus,a=Object(O.f)(),s=Object(O.g)(),n=t.filter((function(e){return e.id===s.id}))[0],r=function(e,t){c(e,t),a("/job-portal-web")};return console.log(s,t),Object(l.jsxs)("div",{className:"page-wrapper",children:[Object(l.jsx)(h,{}),Object(l.jsx)("h3",{children:"User Details"}),t.length>0&&n&&Object(l.jsxs)("div",{className:"user-page",children:[Object(l.jsx)("div",{className:"image-box",children:Object(l.jsx)("img",{src:n.Image})}),Object(l.jsxs)("div",{className:"main-content",children:[Object(l.jsxs)("div",{className:"user-data",children:[Object(l.jsxs)("div",{className:"feild",children:[Object(l.jsx)("span",{className:"label",children:"Id"})," ",Object(l.jsx)("span",{className:"text-data",children:n.id})]}),Object(l.jsxs)("div",{className:"feild",children:[Object(l.jsx)("span",{className:"label",children:"Name"})," ",Object(l.jsx)("span",{className:"text-data",children:n.name})]}),Object(l.jsxs)("div",{className:"feild",children:[Object(l.jsx)("span",{className:"label",children:"Status"})," ",Object(l.jsx)("span",{className:"text-data",style:{fontWeight:"bold",color:"Pending"!==n.status?"ShortListed"===n.status?"green":"tomato":"#000"},children:n.status})]})]}),Object(l.jsxs)("div",{className:"button-group",children:[Object(l.jsx)("button",{className:"primary",onClick:function(){return r(n.id,"ShortListed")},children:"ShortList"}),Object(l.jsx)("button",{className:"danger",onClick:function(){return r(n.id,"Rejected")},children:"Reject"})]})]})]})]})};var p=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json").then((function(e){return e.json()})).then((function(e){var t;t=e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{status:"Pending"})})),s(t)}))}),[]),Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(o.a,{children:Object(l.jsxs)(O.c,{children:[Object(l.jsx)(O.a,{exact:!0,path:"/",element:Object(l.jsx)(x,{data:c,filter:"all"})}),Object(l.jsx)(O.a,{exact:!0,path:"/shortlisted",element:Object(l.jsx)(x,{data:c,filter:"shortlisted"})}),Object(l.jsx)(O.a,{exact:!0,path:"/rejected",element:Object(l.jsx)(x,{data:c,filter:"rejected"})}),Object(l.jsx)(O.a,{exact:!0,path:"/:id",element:Object(l.jsx)(m,{handleStatus:function(e,t){for(var a=c,n=0;n<a.length;n++)a[n].id===e&&(a[n].status=t);s(a)},data:c})})]})})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.4e96f4d4.chunk.js.map