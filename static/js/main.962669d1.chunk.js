(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),r=n.n(c),l=(n(13),n(2)),u=n(1),i=n(5),d=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),d=Object(u.a)(r,2),s=d[0],m=d[1],f=Object(a.useState)(""),h=Object(u.a)(f,2),p=h[0],v=h[1],b=Object(a.useState)([]),E=Object(u.a)(b,2),g=E[0],w=E[1];return Object(a.useEffect)(function(){fetch("https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;flag").then(function(e){return e.json()}).then(function(e){w(e)})},[]),o.a.createElement("div",{className:"App"},o.a.createElement("div",null,o.a.createElement("form",{action:"",onSubmit:function(e){var t;e.preventDefault(),n.includes(s)?v("You've already added ".concat(s," to the list!")):(v(null),c([].concat(Object(l.a)(n),[(t=s,g.find(function(e){return e.name===t}))]))),m("")}},o.a.createElement("input",{type:"text",value:s,list:"countries",onChange:function(e){return m(e.target.value)}}),o.a.createElement("datalist",{id:"countries"},g.map(function(e){return o.a.createElement("option",{key:"datalist-country-".concat(e.alpha2Code),value:e.name})})),o.a.createElement("button",{type:"submit"},"Add country"),p&&o.a.createElement("p",null,p))),o.a.createElement("div",null,o.a.createElement(i.a,{chartType:"GeoChart",data:[["Country"]].concat(Object(l.a)(n.map(function(e,t){var n=[];return n.push(e.alpha2Code),n}))),width:"100%",height:"720",legendToggle:!0,options:{backgroundColor:"#81d4fa",datalessRegionColor:"white",defaultColor:"#095aff"}})),o.a.createElement("div",null,o.a.createElement("ul",null,n.map(function(e){return o.a.createElement("li",{key:e.alpha2Code},o.a.createElement("img",{src:e.flag,alt:"",width:"24",height:"16"}),e.name," ",o.a.createElement("button",{onClick:function(){return function(e){var t=n.filter(function(t){return t.alpha2Code!==e});c(t)}(e.alpha2Code)}},"Remove country"))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){e.exports=n(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.962669d1.chunk.js.map