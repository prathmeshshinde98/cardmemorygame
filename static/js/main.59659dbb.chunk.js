(this.webpackJsonpcardgame=this.webpackJsonpcardgame||[]).push([[0],{12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),i=t(7),s=t.n(i),r=(t(12),t(5)),d=t(6),o=t(0);function m(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)([]),s=Object(d.a)(i,2),m=s[0],u=s[1],b=[].concat([{id:1,name:"balbasaur"},{id:8,name:"wartotle"},{id:9,name:"blastoise"},{id:6,name:"charizard"},{id:2,name:"Ivysaur"},{id:7,name:"Squirtle"}],[{id:9,name:"blastoise"},{id:7,name:"Squirtle"},{id:8,name:"wartotle"},{id:2,name:"Ivysaur"},{id:1,name:"balbasaur"},{id:6,name:"charizard"}]);return Object(n.useEffect)((function(){if(!(t<2)){var e=b[t[0]],a=b[t[1]];a&&e.id===a.id&&u([].concat(Object(r.a)(m),[e.id])),2===t.length&&setTimeout((function(){return c([])}),1e3)}}),[t]),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("div",{className:"cards",children:b.map((function(e,a){var n=!1;return t.includes(a)&&(n=!0),m.includes(e.id)&&(n=!0),Object(o.jsx)("div",{className:"pokemon-card ".concat(n?"flipped":""," "),onClick:function(){return function(e){c((function(a){return[].concat(Object(r.a)(a),[e])}))}(a)},children:Object(o.jsxs)("div",{className:"inner",children:[Object(o.jsx)("div",{className:"front",children:Object(o.jsx)("img",{src:"".concat("https://pokeres.bastionbot.org/images/pokemon","/").concat(e.id,".png"),alt:"pokemon-name",width:"100"})}),Object(o.jsx)("div",{className:"back"})]})},a)}))})})}s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.59659dbb.chunk.js.map