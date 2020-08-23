(this["webpackJsonpcountries-react-app"]=this["webpackJsonpcountries-react-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),c=n.n(r),u=(n(9),function(){return l.a.createElement("header",null,l.a.createElement("h2",null,"Countries"))}),o=n(1),i=function(e){var t=e.country,n=e.handleCountrySelect;return l.a.createElement("div",{onClick:function(){return n(t)},className:"country"},l.a.createElement("img",{src:t.flag,alt:t.name}),l.a.createElement("p",null,t.name))},m=function(e){var t=e.countries,n=e.handleCountrySelect;return l.a.createElement("div",{className:"countries"},t.map((function(e){return l.a.createElement(i,{key:e.alpha3Code,handleCountrySelect:n,country:e})})))},s=["Africa","Americas","Asia","Europe","Oceania"],E=function(e){var t=e.region,n=e.setRegion,a=e.query,r=e.setQuery;return l.a.createElement("div",{className:"country-filter"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"filter"},"Filter By Region: "),l.a.createElement("select",{onChange:function(e){n(e.target.value)},value:t,id:"filter"},l.a.createElement("option",{value:"all"},"All"),s.map((function(e,t){return l.a.createElement("option",{key:t,value:e},e)})))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"search"},"Search: "),l.a.createElement("input",{id:"search",value:a,onChange:function(e){return r(e.target.value.toLowerCase())}})))},f=function(e){var t=e.country,n=e.closeModal;return l.a.createElement("div",{className:"country-modal"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h3",null,t.name),l.a.createElement("div",{onClick:n,className:"close-button"},l.a.createElement("div",null,"Close"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("h2",null,"Region: ",t.region),l.a.createElement("h2",null,"Sub-Region: ",t.subregion),l.a.createElement("h2",null,"Population: ",t.population),l.a.createElement("h2",null,"Capital: ",t.capital),l.a.createElement("p",null,"Spoken Languages: "),l.a.createElement("ul",null,t.languages.map((function(e,t){return l.a.createElement("li",{key:t},e.name)})))))},d=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),u=Object(o.a)(c,2),i=u[0],s=u[1],d=Object(a.useState)(""),h=Object(o.a)(d,2),p=h[0],v=h[1],g=Object(a.useState)({}),y=Object(o.a)(g,2),b=y[0],C=y[1],S=Object(a.useState)(!1),j=Object(o.a)(S,2),O=j[0],k=j[1];Object(a.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("main",null,l.a.createElement("div",{className:"countries-container"},l.a.createElement(E,{region:i,setRegion:s,query:p,setQuery:v}),l.a.createElement(m,{handleCountrySelect:function(e){C(e),k(!0)},countries:function(){var e=n.filter((function(e){return e.name.toLowerCase().includes(p)}));return"all"===i?e:e.filter((function(e){return e.region===i&&e.name.toLowerCase().includes(p)}))}()}))),O?l.a.createElement(f,{closeModal:function(){k(!1)},country:b}):null)};function h(){return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(d,null))}var p=document.getElementById("root");c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),p)},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.eebfed45.chunk.js.map