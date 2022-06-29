(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(12),a(1));function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand ",href:"/"},e.heading),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link ","aria-current":"page",href:"/about"},e.about))),l.a.createElement("div",{className:"form-check form-switch mx-3 text-".concat("light"===e.mode?"black":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable ","light"===e.mode?"dark":"light"," Mode")),l.a.createElement("form",{className:"d-flex",role:"search"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")))))}function m(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"light"===e.mode?"black":"white"}},l.a.createElement("h1",null,e.title),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"black"},className:"form-control",id:"myBox",onChange:function(e){c(e.target.value)},value:r,rows:"8"})),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-2",onClick:function(){var t=r.toUpperCase();c(t),e.showAlert("success","Converted to Uppercase")}},"Convert to Uppercase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-2",onClick:function(){var t=r.toLowerCase();c(t),e.showAlert("success","Converted to Lowercase")}},"Convert to Lowercase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-2",onClick:function(){var t=r.split(/[ ]+/);c(t.join(" ")),e.showAlert("success","Removed Extra Spaces")}},"Remove Extra Spaces"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),document.getSelection().removeAllRanges(),e.showAlert("success","Copied to Clipboard")}},"Copy Text"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-2 my-2",onClick:function(){c(""),e.showAlert("success","Text Cleared")}},"Clear Text")),l.a.createElement("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"}},l.a.createElement("h2",null,"Your Text Summary"),l.a.createElement("p",null,r.split(" ").filter(function(e){return 0!==e.length}).length," Words and ",r.length," characters"),l.a.createElement("p",null,.008*r.split(" ").filter(function(e){return 0!==e.length}).length," Minutes Read"),l.a.createElement("p",null,"Total Lines : ",r.split(".").filter(function(e){return 0!==e.length}).length),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter Some text to preview it here")))}function i(e){return l.a.createElement("div",{style:{height:"50px"}},e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.status," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.status))," : ",e.alert.msg))}s.defaultProps={heading:"Enter Title here",about:"Enter Text here"};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],h=u[1],b=function(e,t){h({status:e,msg:t}),setTimeout(function(){h(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{heading:"TextUtils",about:"About Us",mode:a,toggleMode:function(){"light"===a?(r("dark"),console.log("Mode Changed to Dark Mode"),document.body.style.backgroundColor="#042743",b("success","Mode Succesfully changed to dark mode"),document.title="TextUtils - Dark Mode"):(r("light"),console.log("Mode Changed to Light Mode"),document.body.style.backgroundColor="white",b("success","Mode Succesfully changed to light mode"),document.title="TextUtils - Light Mode")}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(m,{showAlert:b,heading:"TextUtils - the best",mode:a})))},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root")),d()},4:function(e,t,a){e.exports=a(13)}},[[4,1,2]]]);
//# sourceMappingURL=main.6a7c67ac.chunk.js.map