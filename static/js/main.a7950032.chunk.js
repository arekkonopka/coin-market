(this["webpackJsonpcoin-market"]=this["webpackJsonpcoin-market"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(6),s=c.n(a),i=(c(16),c(4)),o=(c(17),c(1)),j=function(e){e.key;var t=e.name,c=e.symbol,n=e.currentPrice,r=e.marketCap,a=e.price_change_percentage_24h;return Object(o.jsxs)("div",{className:"coin",children:[Object(o.jsxs)("div",{className:"desktop",children:[Object(o.jsx)("p",{children:t}),Object(o.jsx)("p",{children:c}),Object(o.jsxs)("p",{children:[n," $"]}),Object(o.jsxs)("p",{children:[r," $"]}),Object(o.jsxs)("p",{style:{color:a>0?"green":"red"},children:[(10*a).toFixed(2)," %"]})]}),Object(o.jsxs)("div",{className:"mobile",children:[Object(o.jsx)("p",{children:t}),Object(o.jsxs)("p",{children:[n," $"]})]})]})},d=c(3),u=function(e){return{type:"SEARCH/LIST",payload:[e]}},l=function(){return Object(o.jsxs)("div",{className:"lds-facebook",children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{}),Object(o.jsx)("div",{})]})},b=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(d.b)(),s=Object(d.c)((function(e){var t;return null!==(t=null===e||void 0===e?void 0:e.searchBarReducer.searchList[0][0])&&void 0!==t?t:[]}));return Object(n.useEffect)((function(){a({type:"fetch_data_request"}),r(!0),fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){return e.json()})).then((function(e){a(function(e){return{type:"fetch_data_success",payload:e}}(e)),r(!1)})).catch((function(e){return a(function(e){return{type:"fetch_data_err",payload:e}}(e))}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"describe",children:[Object(o.jsx)("h4",{children:"Name"}),Object(o.jsx)("h4",{children:"Symbol"}),Object(o.jsx)("h4",{children:"Current Price"}),Object(o.jsx)("h4",{children:"Market Cap"}),Object(o.jsx)("h4",{children:"24h Price"})]}),Object(o.jsx)("ol",{children:c?Object(o.jsx)(l,{}):s.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(j,{name:e.name,symbol:e.symbol,currentPrice:e.current_price,marketCap:e.market_cap,price_change_percentage_24h:e.price_change_percentage_24h})},e.id)}))})]})},h=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(d.b)(),s=Object(d.c)((function(e){var t;return null!==(t=null===e||void 0===e?void 0:e.coinReducer.data[0])&&void 0!==t?t:[]}));if(Object(n.useEffect)((function(){!function(){if(""!==c){var e=s.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));a(u(e))}else a(u(s))}()})),""!==c){var j=s.filter((function(e){return e.name.toLowerCase()==c.toLowerCase()}));a(u(j))}return Object(o.jsx)("form",{type:"search",className:"search-form",children:Object(o.jsx)("input",{type:"text",placeholder:"Find your crypto",onChange:function(e){r(e.target.value)}})})},O=c(5),p=(c(25),c(2)),f={loading:!1,data:[],err:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_data_request":return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case"fetch_data_success":return Object(p.a)(Object(p.a)({},e),{},{data:[t.payload]});case"fetch_data_err":return Object(p.a)(Object(p.a)({},e),{},{err:t.payload});default:return Object(p.a)({},e)}},x={searchList:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;return"SEARCH/LIST"===t.type?Object(p.a)(Object(p.a)({},e),{},{searchList:[t.payload]}):e},_=Object(O.b)({coinReducer:m,searchBarReducer:v}),g=Object(O.c)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),y=function(e){var t=e.darkMode,c=e.setDarkMode;return Object(o.jsxs)("div",{className:"theme-wrapper",onClick:function(){c(!t)},children:[Object(o.jsx)("div",{className:t?"theme theme-light":"theme theme-dark"}),Object(o.jsx)("i",{className:"fas fa-sun"}),Object(o.jsx)("i",{className:"fas fa-moon"})]})};var k=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(o.jsx)(d.a,{store:g,children:Object(o.jsxs)("div",{className:c?"App":"App light-mode",children:[Object(o.jsx)(y,{darkMode:c,setDarkMode:r}),Object(o.jsx)(h,{}),Object(o.jsx)(b,{})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,27)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root")),N()}},[[26,1,2]]]);
//# sourceMappingURL=main.a7950032.chunk.js.map