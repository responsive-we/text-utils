(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),o=a.n(r),c=(a(10),a(1)),s=(a(12),a(2)),i=a.n(s);function u(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(!1===e.blackMode?"dark":"light")},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),l.a.createElement("button",{type:"button",onClick:function(){e.setBlackMode(!0),e.setStyle.modeBlack()},className:"mx-2 py-2 px-3 btn btn-".concat(!1===e.blackMode?"light":"dark"),"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"".concat(e.btnText)})))))}function b(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{style:{fontSize:"36px"}},e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",onChange:function(e){o(e.target.value)},value:r,id:"Textbox",rows:"8",style:{backgroundColor:!1===e.blackMode?"black":"white",color:!1===e.blackMode?"white":"black"}})),l.a.createElement("div",{className:"btn-group my-1 container ",role:"group","aria-label":"Basic outlined example"},l.a.createElement("button",{disabled:0===r.length,type:"button",className:"btn btn-outline-primary",onClick:function(){var t=r.toUpperCase();o(t),e.showAlert("Your text has been converted in upper Case","success")}},"Concert to Uppercase"),l.a.createElement("button",{disabled:0===r.length,type:"button",className:"btn btn-outline-primary",onClick:function(){var t=r.toLowerCase();o(t),e.showAlert("Your text has been converted in lower Case","success")}},"Concert to Lowerrcase"),l.a.createElement("button",{disabled:0===r.length,type:"button",className:"btn btn-outline-primary",onClick:function(){for(var t=r.toLowerCase().split(" "),a=0;a<t.length;a++)t[a]=t[a].charAt(0).toUpperCase()+t[a].slice(1);o(t.join(" ")),e.showAlert("Your text has been converted in title Case","success")}},"Concert to Titlecase"),l.a.createElement("button",{disabled:0===r.length,type:"button",className:"btn btn-outline-primary",onClick:function(){navigator.clipboard.writeText(r),e.showAlert("Your text has been copied to clipboard","success")}},"Copy Text"),l.a.createElement("button",{disabled:0===r.length,type:"button",className:"btn btn-outline-primary",onClick:function(){var t=r.split(/[ ]+/);o(t.join(" ")),e.showAlert("Extra spaces has been removed from your text","success")}},"Remove extra spaces"),l.a.createElement("button",{disabled:0===r.length,type:"button",className:"btn btn-outline-primary",onClick:function(){o(""),e.showAlert("Your text has been cleared","success")}},"Clear Text")),l.a.createElement("div",{className:"container text_summary my-2"},l.a.createElement("h3",null,"Text summary"),l.a.createElement("p",null,r.split(/\s+/).filter(function(e){return 0!==e.length}).length,"words ",r.length,"charecters"),l.a.createElement("p",null,.008*r.split(/\s+/).filter(function(e){return 0!==e.length}).length,"Minutes to read"),l.a.createElement("hr",null),l.a.createElement("h3",null,"Preview"),l.a.createElement("p",null,r.split(/\s+/).filter(function(e){return 0!==e.length}).length>0?r:"Nothing to preview here :)")))}u.prototype={title:i.a.string.isRequired,aboutText:i.a.string.isRequired},u.defaultProps={title:"TextUtils",aboutText:"About"};var m=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mb-1",style:{height:"50px"}},e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),":",e.alert.msg)))};var d=function(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("Enable Dark Mode"),s=Object(c.a)(o,2),i=s[0],d=s[1],p=Object(n.useState)(null),g=Object(c.a)(p,2),h=g[0],v=g[1],E={modeBlack:function(){!0===a?(r(!1),d("Disble Dark Mode"),document.body.style.backgroundColor="black",document.body.style.color="white"):(d("Enable Dark Mode"),document.body.style.backgroundColor="white",document.body.style.color="black")}};return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,{blackMode:a,btnText:i,setBlackMode:r,setStyle:E}),l.a.createElement(m,{alert:h}),l.a.createElement("div",{className:"container"},l.a.createElement(b,{heading:"Try TextUtils- Word counter, Charecter counter and Remove extra spaces",showAlert:function(e,t){v({msg:e,type:t}),setTimeout(function(){v(null)},2e3)},setStlye:E,blackMode:a,btnText:i})))},p=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,17)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),p()},5:function(e,t,a){e.exports=a(16)}},[[5,3,2]]]);
//# sourceMappingURL=main.4ceb560c.chunk.js.map