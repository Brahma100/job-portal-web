(this.webpackJsonpcareerz=this.webpackJsonpcareerz||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(9),r=c.n(n),i=(c(14),c(8)),j=c(4),d=(c(15),c(0)),l=function(e){var t=e.userData;return Object(d.jsxs)("div",{className:"card-wrapper",children:[Object(d.jsx)("div",{className:"card-content",children:Object(d.jsx)("div",{className:"image-box",children:Object(d.jsx)("img",{src:t.Image})})}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsx)("div",{className:"card-text",children:Object(d.jsx)("a",{children:t.name})})})]})},o=c(5),h=function(e){var t=e.searchText,c=e.handleSearch;return Object(d.jsx)("div",{className:"search-box-wrapper",children:Object(d.jsx)("div",{className:"input-wrapper",children:Object(d.jsx)("input",{type:"text",value:t,onChange:c,placeholder:"Search Candidate By Name/Status"})})})},b=function(e){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)("h1",{children:"CareerZ"})}),Object(d.jsxs)("div",{className:"nav",children:[Object(d.jsx)(o.c,{to:"/",children:"Home"}),Object(d.jsx)(o.c,{to:"/shortlisted",children:"ShortListed"}),Object(d.jsx)(o.c,{to:"/rejected",children:"Rejected"})]})]})},u=function(){return Object(d.jsx)("div",{style:{height:"200px"},children:Object(d.jsx)("h1",{children:"Sorry!! No Results :("})})},x=function(e){var t=e.data,c=e.filter,a=Object(s.useState)(""),n=Object(j.a)(a,2),r=n[0],i=n[1],x=function(e){return e.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())&&("all"===c||e.status.toLowerCase()===c.toLowerCase())}))};return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"content-wrapper",children:[Object(d.jsx)(b,{}),Object(d.jsx)(h,{searchText:r,handleSearch:function(e){i(e.target.value)}}),Object(d.jsx)("div",{className:"container",children:0!==x(t).length?x(t).map((function(e,t){return Object(d.jsx)(o.b,{to:{pathname:"/".concat(e.id)},children:Object(d.jsx)(l,{userData:e},e.id)},e.id)})):Object(d.jsx)(u,{})})]})})},O=c(2),m=function(e){var t=e.data,c=e.handleStatus,s=Object(O.f)(),a=Object(O.g)(),n=t.filter((function(e){return e.id===a.id}))[0],r=function(e,t){c(e,t),s("/")};return console.log(a,t),Object(d.jsxs)("div",{className:"page-wrapper",children:[Object(d.jsx)(b,{}),Object(d.jsx)("h3",{children:"User Details"}),t.length>0&&n&&Object(d.jsxs)("div",{className:"user-page",children:[Object(d.jsx)("div",{className:"image-box",children:Object(d.jsx)("img",{src:n.Image})}),Object(d.jsxs)("div",{className:"main-content",children:[Object(d.jsxs)("div",{className:"user-data",children:[Object(d.jsxs)("div",{className:"feild",children:[Object(d.jsx)("span",{className:"label",children:"Id"})," ",Object(d.jsx)("span",{className:"text-data",children:n.id})]}),Object(d.jsxs)("div",{className:"feild",children:[Object(d.jsx)("span",{className:"label",children:"Name"})," ",Object(d.jsx)("span",{className:"text-data",children:n.name})]}),Object(d.jsxs)("div",{className:"feild",children:[Object(d.jsx)("span",{className:"label",children:"Status"})," ",Object(d.jsx)("span",{className:"text-data",style:{fontWeight:"bold",color:"Pending"!==n.status?"ShortListed"===n.status?"green":"tomato":"#000"},children:n.status})]})]}),Object(d.jsxs)("div",{className:"button-group",children:[Object(d.jsx)("button",{className:"primary",onClick:function(){return r(n.id,"ShortListed")},children:"ShortList"}),Object(d.jsx)("button",{className:"danger",onClick:function(){return r(n.id,"Rejected")},children:"Reject"})]})]})]})]})};var p=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json").then((function(e){return e.json()})).then((function(e){var t;t=e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{status:"Pending"})})),a(t)}))}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(o.a,{children:Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{exact:!0,path:"/",element:Object(d.jsx)(x,{data:c,filter:"all"})}),Object(d.jsx)(O.a,{exact:!0,path:"/shortlisted",element:Object(d.jsx)(x,{data:c,filter:"shortlisted"})}),Object(d.jsx)(O.a,{exact:!0,path:"/rejected",element:Object(d.jsx)(x,{data:c,filter:"rejected"})}),Object(d.jsx)(O.a,{exact:!0,path:"/:id",element:Object(d.jsx)(m,{handleStatus:function(e,t){for(var s=c,n=0;n<s.length;n++)s[n].id===e&&(s[n].status=t);a(s)},data:c})})]})})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.062c8bd6.chunk.js.map