(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,a){},13:function(e,n,a){},16:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(4),l=a.n(o),i=(a(12),a(5)),c=(a(13),a(1)),u=a.n(c),d=a(2),s=function(e,n,a){for(var t="#",r=0;r<6;r++)!e||0!==r&&1!==r?!n||2!==r&&3!==r?!a||4!==r&&5!==r?t+="6789ABC"[Math.floor(Math.random()*"6789ABC".length)]:4===r&&(t+=a):2===r&&(t+=n):0===r&&(t+=e);return t},f=["Red","Orange","Yellow","Green","Blue"],p=["Reservoir","Geophysics","Geology","Production","Petrophysics"];window.getRandomColor=s;var m=function(){var e=Array.from({length:5}).map(function(e,n){return{data:20,label:p[n],color:f[n],childData:Array.from({length:5}).map(function(){var e=s(0===n&&"FF",1===n&&"FF",2===n&&"FF");return{data:4,label:e,color:e,parent:p[n]}})}}),n=e.reduce(function(e,n){return[].concat(Object(d.a)(e),Object(d.a)(n.childData))},[]);return{parentData:e,childData:n}}(),h=m.parentData,v=m.childData;var b=function(){var e=Object(t.useState)(""),n=Object(i.a)(e,2),a=n[0],o=n[1],l=Object(t.useRef)(null);return Object(t.useEffect)(function(){if(l)var e=new u.a("parentChart",{type:"pie",data:{labels:h.map(function(e){return e.label}),datasets:[{label:h.map(function(e){return e.label}),data:h.map(function(e){return e.data}),backgroundColor:h.map(function(e){return e.color})}]},options:{onHover:function(n){var a=e.getElementsAtEvent(n);o(a[0]&&a[0]._model.label)},legend:{display:!1},element:{radius:10},animation:!1}}),n=new u.a("childChart",{type:"pie",data:{labels:v.map(function(e){return e.label}),datasets:[{label:v.map(function(e){return e.label}),data:v.map(function(e){return e.data}),backgroundColor:v.map(function(e){var n=e.color;return e.parent===a?n:"white"})}]},options:{onHover:function(e){var a=n.getElementsAtEvent(e);o(a[0]&&v.find(function(e){return e.label===a[0]._model.label}).parent)},legend:{display:!1},element:{radius:10},animation:!1}})},[l,a]),r.a.createElement("div",{className:"App"},r.a.createElement("canvas",{id:"childChart",ref:l,onMouseLeave:function(){return o(null)}}),r.a.createElement("canvas",{id:"parentChart",ref:l}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,n,a){e.exports=a(16)}},[[6,1,2]]]);
//# sourceMappingURL=main.6a31f2de.chunk.js.map