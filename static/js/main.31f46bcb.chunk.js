(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){},19:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(6),i=t.n(o),c=(t(15),t(1)),u=t(4),l=t(3),s=t(2),d=t(7);function p(){var e=Object(c.a)(["\n            appearance: none;\n            background-color: white;\n            border-radius: 5px;\n            border: 0;\n            box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.25);\n            flex-shrink: 0;\n            font-size: 16px;\n            height: 56px;\n            max-width: 192px;\n            padding: 0 16px;\n            position: fixed;\n            right: 32px;\n            top: 32px;\n            width: 100%;\n          "]);return p=function(){return e},e}function f(){var e=Object(c.a)(["\n              background-color: #0054ff;\n              border-radius: 5px;\n              border: 0;\n              box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.25);\n              color: white;\n              flex-shrink: 0;\n              font-size: 16px;\n              font-weight: bold;\n              height: 56px;\n              padding: 0 28px;\n            "]);return f=function(){return e},e}function h(){var e=Object(c.a)(["\n              background-color: white;\n              border-radius: 5px;\n              border: 0;\n              box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.25);\n              flex-shrink: 0;\n              font-size: 16px;\n              height: 56px;\n              margin-right: 16px;\n              max-width: 320px;\n              padding: 0 16px;\n              width: 100%;\n            "]);return h=function(){return e},e}function m(){var e=Object(c.a)(["\n            display: flex;\n          "]);return m=function(){return e},e}function b(){var e=Object(c.a)(["\n          left: 32px;\n          position: fixed;\n          top: 32px;\n          z-index: 1;\n        "]);return b=function(){return e},e}var x=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],i=Object(a.useState)(""),c=Object(l.a)(i,2),x=c[0],g=c[1],v=Object(a.useState)(""),E=Object(l.a)(v,2),w=E[0],O=E[1],j=Object(a.useState)([]),A=Object(l.a)(j,2),C=A[0],k=A[1],y=Object(a.useState)("world"),S=Object(l.a)(y,2),N=S[0],W=S[1];return Object(a.useEffect)(function(){fetch("https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;flag;region;subregion").then(function(e){return e.json()}).then(function(e){k(e)})},[]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:Object(s.a)(b())},r.a.createElement("form",{action:"",onSubmit:function(e){if(e.preventDefault(),r=x,t.find(function(e){return e.name===r}))O("You've already added ".concat(x," to the list!"));else{var n=function(e){return C.find(function(n){return n.name===e})}(x);O(null),o([].concat(Object(u.a)(t),[n])),W("Africa"===(a=n.subregion)?"002":"Northern Africa"===a?"015":"Western Africa"===a?"011":"Middle Africa"===a?"017":"Eastern Africa"===a?"014":"Southern Africa"===a?"018":"Europe"===a?"150":"Northern Europe"===a?"154":"Western Europe"===a?"155":"Eastern Europe"===a?"151":"Southern Europe"===a?"039":"Americas"===a?"019":"Northern America"===a?"021":"Caribbean"===a?"029":"Central America"===a?"013":"South America"===a?"005":"Asia"===a?"142":"Central Asia"===a?"143":"Eastern Asia"===a?"030":"Southern Asia"===a?"034":"South-Eastern Asia"===a?"035":"Western Asia"===a?"145":"Oceania"===a?"009":"Australia and New Zealand"===a?"053":"Melanesia"===a?"054":"Micronesia"===a?"057":"Polynesia"===a&&"061")}var a,r;g("")},className:Object(s.a)(m())},r.a.createElement("input",{type:"text",value:x,list:"countries",onChange:function(e){return g(e.target.value)},className:Object(s.a)(h())}),r.a.createElement("datalist",{id:"countries"},C.map(function(e){return r.a.createElement("option",{key:"datalist-country-".concat(e.alpha2Code),value:e.name})})),r.a.createElement("button",{type:"submit",className:Object(s.a)(f())},"Add country"),w&&r.a.createElement("p",null,w)),r.a.createElement("select",{name:"region",id:"region",value:N,onChange:function(e){return W(e.target.value)},onBlur:function(e){return W(e.target.value)},className:Object(s.a)(p())},r.a.createElement("option",{value:"world"},"World"),r.a.createElement("option",{value:"002"},"Africa"),r.a.createElement("option",{value:"150"},"Europe"),r.a.createElement("option",{value:"019"},"Americas"),r.a.createElement("option",{value:"142"},"Asia"),r.a.createElement("option",{value:"009"},"Oceania"))),r.a.createElement("div",null,r.a.createElement(d.a,{chartType:"GeoChart",data:[["Country"]].concat(Object(u.a)(t.map(function(e,n){var t=[];return t.push(e.alpha2Code),t}))),width:"100%",height:"720",legendToggle:!0,options:{backgroundColor:"#81d4fa",datalessRegionColor:"white",defaultColor:"#095aff",region:N}})),r.a.createElement("div",null,r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.alpha2Code},r.a.createElement("img",{src:e.flag,alt:"",width:"24",height:"16"}),e.name," ",r.a.createElement("button",{onClick:function(){return function(e){var n=t.filter(function(n){return n.alpha2Code!==e});o(n)}(e.alpha2Code)}},"Remove country"))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,n,t){e.exports=t(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.31f46bcb.chunk.js.map