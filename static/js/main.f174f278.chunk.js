(this["webpackJsonptictactoe-ai"]=this["webpackJsonptictactoe-ai"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(9),i=n.n(a),o=(n(14),n(2)),s=n(5),u=function(e){for(var t=0;t<3;t++)if(""!==e[t][0]&&e[t][0]===e[t][1]&&e[t][1]===e[t][2])return e[t][0];for(var n=0;n<3;n++)if(""!==e[0][n]&&e[0][n]===e[1][n]&&e[1][n]===e[2][n])return e[0][n];return""!==e[0][0]&&e[0][0]===e[1][1]&&e[1][1]===e[2][2]?e[0][0]:""!==e[0][2]&&e[0][2]===e[1][1]&&e[1][1]===e[2][0]?e[0][2]:""},l=function(e){for(var t=0;t<3;t++)for(var n=0;n<3;n++)if(""===e[t][n])return!1;return!0},j=function(e){for(var t=[],n=0;n<3;n++)for(var c=0;c<3;c++)""===e[n][c]&&t.push([n,c]);return t},d=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=u(t);if("O"===r)return 100;if("X"===r)return-100;if(l(t))return 0;for(var a=[],i=j(t),d=0;d<i.length;d++){var b=Object(o.a)(i[d],2),O=b[0],f=b[1];t[O][f]=c?"O":"X",a.push(e(Object(s.a)(t),n+1,!c)),t[O][f]=""}return c?Math.max.apply(Math,a):Math.min.apply(Math,a)},b=function(e){return e[Math.floor(Math.random()*e.length)]},O=function(e){var t=j(e);return b(t)},f=function(e){for(var t=Math.log(0),n=[[0,0]],c=Object(s.a)(e),r=j(e),a=0;a<r.length;a++){var i=Object(o.a)(r[a],2),u=i[0],l=i[1];c[u][l]="O";var b=d(c);c[u][l]="",b>t&&(t=b,n=[u,l])}return n},h=function(){var e=Object(c.useContext)(X).mode,t=Object(c.useState)([["","",""],["","",""],["","",""]]),n=Object(o.a)(t,2),r=n[0],a=n[1],i=function(){var e=Object(c.useState)(b(["X","O"])),t=Object(o.a)(e,2),n=t[0],r=t[1];return[n,function(){return r("X"===n?"O":"X")}]}(),j=Object(o.a)(i,2),d=j[0],h=j[1],m=function(e,t){if(""===r[e][t]){var n=Object(s.a)(r);n[e][t]=d,h(),a(n)}};return Object(c.useEffect)((function(){if("HH"!==e&&!l(r)&&""===u(r)&&"O"===d){var t=function(e,t){switch(t){case"E":return O(e);case"M":return Math.random()<.15?O(e):f(e);case"H":return Math.random()<.35?O(e):f(e);default:return f(e)}}(Object(s.a)(r),e),n=Object(o.a)(t,2),c=n[0],a=n[1];setTimeout((function(){m(c,a)}),1e3)}}),[r]),[r,m,d]},m=n(0),x=Object(c.createContext)(),v=function(e){var t=e.children,n=h(),c=Object(o.a)(n,3),r=c[0],a=c[1],i=c[2];return Object(m.jsx)(x.Provider,{value:{grid:r,fill:a,currentTurn:i},children:t})},N=n(3),C=n(4),p=(n(16),function(e){var t=e.children,n=e.className,c=Object(C.a)(e,["children","className"]);return Object(m.jsx)("button",Object(N.a)(Object(N.a)({className:"cell ".concat(n)},c),{},{children:t}))}),g=(n(17),function(){var e=Object(c.useContext)(x),t=e.grid,n=e.fill,r=e.currentTurn,a=Object(c.useContext)(X).mode,i=function(e,n){return"O"===r&&"HH"!==a||""!==t[e][n]?"disabled":""};return Object(m.jsxs)("div",{className:"grid",children:[Object(m.jsxs)("h1",{className:"turn-display",children:["HH"===a?"X"===r?"Player 1's":"Player 2's":"X"===r?"Your":"Bot's"," Turn"]}),Object(m.jsxs)("div",{className:"grid-container",children:[Object(m.jsx)(p,{className:"upper-left ".concat(i(0,0)),onClick:function(){return n(0,0)},children:t[0][0]}),Object(m.jsx)(p,{className:"upper-center ".concat(i(0,1)),onClick:function(){return n(0,1)},children:t[0][1]}),Object(m.jsx)(p,{className:"upper-right ".concat(i(0,2)),onClick:function(){return n(0,2)},children:t[0][2]}),Object(m.jsx)(p,{className:"middle-left ".concat(i(1,0)),onClick:function(){return n(1,0)},children:t[1][0]}),Object(m.jsx)(p,{className:"middle-center ".concat(i(1,1)),onClick:function(){return n(1,1)},children:t[1][1]}),Object(m.jsx)(p,{className:"middle-right ".concat(i(1,2)),onClick:function(){return n(1,2)},children:t[1][2]}),Object(m.jsx)(p,{className:"bottom-left ".concat(i(2,0)),onClick:function(){return n(2,0)},children:t[2][0]}),Object(m.jsx)(p,{className:"bottom-center ".concat(i(2,1)),onClick:function(){return n(2,1)},children:t[2][1]}),Object(m.jsx)(p,{className:"bottom-right ".concat(i(2,2)),onClick:function(){return n(2,2)},children:t[2][2]})]})]})}),k=(n(18),function(e){var t=e.children,n=e.className,c=Object(C.a)(e,["children","className"]);return Object(m.jsx)("button",Object(N.a)(Object(N.a)({className:"button ".concat(n)},c),{},{children:t}))}),H=(n(19),function(){var e=Object(c.useContext)(X),t=e.mode,n=e.setMode,r=Object(c.useContext)(x).grid;return Object(m.jsx)(m.Fragment,{children:function(e){return l(e)||""!==u(e)}(r)&&Object(m.jsx)("div",{className:"modal",children:Object(m.jsxs)("div",{className:"modal-content",children:[Object(m.jsx)("h2",{className:"display-winner",children:function(e){var n=u(e);return""===n?"Tied":"HH"===t?"X"===n?"Player 1 Wins!":"Player 2 Wins!":"X"===n?"You Win!":"You Lose!"}(r)}),"HH"!==t&&"O"===u(r)&&Object(m.jsx)("p",{children:"Try again next time :)"}),Object(m.jsx)(k,{onClick:function(){n("")},children:"Return"})]})})})}),M=function(){return Object(m.jsxs)(v,{children:[Object(m.jsx)(H,{}),Object(m.jsx)(g,{})]})},y=(n(20),function(e){var t=e.children,n=Object(C.a)(e,["children"]);return Object(m.jsx)(k,Object(N.a)(Object(N.a)({},n),{},{children:t}))}),T=function(){var e=Object(c.useContext)(X).setMode,t=function(t){return function(){return e(t)}};return Object(m.jsxs)("div",{className:"menu",children:[Object(m.jsx)("h1",{className:"title",children:"Welcome to TicTacToe AI"}),Object(m.jsxs)("div",{className:"button-group",children:[Object(m.jsx)(y,{onClick:t("HH"),children:"Human vs Human"}),Object(m.jsx)(y,{onClick:t("E"),children:"Easy"}),Object(m.jsx)(y,{onClick:t("M"),children:"Medium"}),Object(m.jsx)(y,{onClick:t("H"),children:"Hard"}),Object(m.jsx)(y,{onClick:t("I"),children:"Impossible"})]})]})},X=Object(c.createContext)();var P=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(m.jsx)("div",{children:Object(m.jsx)(X.Provider,{value:{mode:n,setMode:r},children:""!==n?Object(m.jsx)(M,{}):Object(m.jsx)(T,{})})})};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.f174f278.chunk.js.map