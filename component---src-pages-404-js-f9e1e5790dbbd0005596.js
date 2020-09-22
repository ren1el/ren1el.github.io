(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2ZsY":function(e,t,n){e.exports={mainWrapper:"layout-module--main-wrapper--1Wkf3",contentWrapper:"layout-module--content-wrapper--1WhZz"}},"3AKA":function(e,t,n){e.exports={wrapper:"_404-module--wrapper--2_5fC",pageNotFound:"_404-module--page-not-found--1_zEL"}},"8SHQ":function(e,t){e.exports={author:"Reniel Ocampo",siteTitle:"Reniel Ocampo",siteShortTitle:"RO",siteDescription:"Reniel Ocampo is a software engineer based in Orange County, California.",siteUrl:"https://ren1el.github.io/",siteLanguage:"en_US",siteIcon:"",socialMedia:[{name:"GitHub",url:"https://github.com/ren1el/"},{name:"LinkedIn",url:"https://linkedin.com/in/renielocampo/"},{name:"Instagram",url:"https://instagram.com/ren1el"},{name:"Dribbble",url:"https://dribbble.com/ren1el"}],navLinks:[{name:"About",url:"/#about"},{name:"Projects",url:"/#projects"},{name:"Résumé",url:"https://google.com/"},{name:"Contact",url:"/#contact"}],projects:[{title:"Zyllabi",description:"A full stack web application that crowd-sources and organizes course syllabi from UC Irvine. I wanted to learn how to design an API and create an application with a working backend. I started this project in hopes that it would alleviate the stress of signing up for classes that don’t have much feedback online.",thumbnailFile:"zyllabi.png",type:"Side Project",tags:["React","Node.js","Express","MongoDB","AWS","Google API","Bootstrap"],liveUrl:"https://shielded-brushlands-61437.herokuapp.com/",githubUrl:"https://github.com/ren1el/zyllabi"},{title:"Animal Actions",description:"A published Alexa skill that quizzes kids on the sounds of animals and their characterized actions. I worked with a team under a PhD student to iteratively develop this application and research ways to design voice user interfaces for children. I was mainly in charge of refactoring the codebase and implementing new features such as visuals.",thumbnailFile:"animalactions.png",type:"Research Project",tags:["Amazon Alexa","Node.js","Voice interaction"],liveUrl:"",githubUrl:""},{title:"E-commerce Landing Page Concept",description:"A responsive e-commerce landing page that mimics online fashion product websites. This static site was an exercise on how well I could use pure HTML, CSS, and JavaScript to apply design qualities similar to professionally made websites (including typography design, animations, flexbox techniques, responsiveness, etc.)",thumbnailFile:"ecommerce.png",type:"Side Project",tags:["HTML","CSS","JavaScript","Web development","Web design"],liveUrl:"",githubUrl:"https://github.com/ren1el/ecommerce-landing-page"},{title:"Sleep Tracker",description:"A minimal, hybrid iOS application that allows users to log overnight sleep and their “sleepiness” throughout the day. This was a project for my user interaction software class and demonstrates my ability to create simple mobile interfaces and adapt to new frameworks/libraries.",thumbnailFile:"sleeptracker.png",type:"Class Project",tags:["Ionic","Mobile app development"],liveUrl:"",githubUrl:""}],footerLinks:[{name:"Reniel Ocampo",url:"https://github.com/ren1el/portfolio/"}]}},Bl7J:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("8SHQ"),i=n.n(o),s=n("Wbzz"),l=(n("rkFO"),function(){var e=i.a.navLinks;return r.a.createElement("nav",null,r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:"navLink"+e.name},e.url.startsWith("/#")?r.a.createElement(s.a,{to:e.url},e.name):r.a.createElement("a",{href:e.url},e.name))}))))}),c=n("IySo"),u=n.n(c),m=function(e){var t=e.setIsSidebarOpen;return r.a.createElement("div",{className:u.a.burger,role:"button",onClick:function(){return t(!0)},onKeyDown:function(){return t(!0)},tabIndex:0},r.a.createElement("div",{className:u.a.line}),r.a.createElement("div",{className:u.a.line}),r.a.createElement("div",{className:u.a.line}))},d=n("LvbY"),p=n.n(d),h=function(e){var t=e.isSidebarOpen,n=e.setIsSidebarOpen,a=i.a.navLinks,o=function(){n(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{setIsSidebarOpen:n}),r.a.createElement("div",{className:p.a.sidebar+" "+(t?p.a.show:p.a.hide)},r.a.createElement("button",{className:p.a.close,onClick:function(){return n(!1)}},"X"),r.a.createElement("ul",{className:p.a.links},a.map((function(e){return r.a.createElement("li",{className:p.a.link},e.url.startsWith("/#")?r.a.createElement(s.a,{to:e.url,onClick:o},e.name):r.a.createElement("a",{href:e.url,onClick:o},e.name))})))))},f=n("OUhe"),g=n.n(f),w=function(){var e=i.a.siteShortTitle,t=i.a.siteUrl,n=Object(a.useState)(null),o=n[0],s=n[1],c=Object(a.useState)(!0),u=c[0],m=c[1],d=Object(a.useState)(!1),p=d[0],f=d[1];if("undefined"!=typeof window){var w=window.pageYOffset;window.addEventListener("scroll",(function(){var e=window.pageYOffset;m(w>e||e<=80),w=e})),window.addEventListener("resize",(function(){return s(window.innerWidth)}))}return r.a.createElement("header",{className:""+(u?g.a.show:g.a.hide)},r.a.createElement("div",{className:g.a.headerWrapper},r.a.createElement("h1",{className:g.a.brand},r.a.createElement("a",{href:t},e)),null!=o&&o>991.98?r.a.createElement(l,null):r.a.createElement(h,{isSidebarOpen:p,setIsSidebarOpen:f,setIsHeaderShown:m})))},b=n("RwA0"),v=n.n(b),y=function(){var e=i.a.siteUrl,t=i.a.footerLinks[0];return r.a.createElement("footer",null,r.a.createElement("div",{className:v.a.footerWrapper},r.a.createElement("h1",{className:v.a.brand},r.a.createElement("a",{href:e},"RO")),r.a.createElement("p",{className:v.a.credit},"Designed & coded by",r.a.createElement("br",null),r.a.createElement("strong",null,r.a.createElement("a",{href:t.url},t.name)))))},E=n("2ZsY"),S=n.n(E);t.a=function(e){var t=e.children;return"undefined"!=typeof window&&n("SR+s")('a[href*="#"]'),r.a.createElement("div",{className:S.a.mainWrapper},r.a.createElement(w,null),r.a.createElement("main",{className:S.a.contentWrapper},t),r.a.createElement(y,null))}},IySo:function(e,t,n){e.exports={burger:"burger-module--burger--1Lizc",line:"burger-module--line--3xzMN"}},LvbY:function(e,t,n){e.exports={sidebar:"sidebar-module--sidebar--1HaJS",show:"sidebar-module--show--37GZs",hide:"sidebar-module--hide--lIwhC",close:"sidebar-module--close--1x7Hf",links:"sidebar-module--links--1nPo9",link:"sidebar-module--link--3mXjr"}},OUhe:function(e,t,n){e.exports={show:"header-module--show--1PxQg",hide:"header-module--hide--CZY2e",headerWrapper:"header-module--header-wrapper--Awxfa",brand:"header-module--brand--2-dVo"}},RwA0:function(e,t,n){e.exports={footerWrapper:"footer-module--footer-wrapper--3q78Q",brand:"footer-module--brand--1w0LP",credit:"footer-module--credit--1QUZM"}},"SR+s":function(e,t,n){(function(n){var a,r;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),a=this;do{for(t=n.length;0<=--t&&n.item(t)!==a;);}while(t<0&&(a=a.parentElement));return a}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var a=(new Date).getTime(),r=Math.max(0,16-(a-e)),o=window.setTimeout((function(){t(a+r)}),r);return e=a+r,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),r=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(a=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),a=n.length,r=-1,o="",i=n.charCodeAt(0);++r<a;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");o+=1<=t&&t<=31||127==t||0===r&&48<=t&&t<=57||1===r&&48<=t&&t<=57&&45===i?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+o},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},o=function(t,n,a){0===t&&document.body.focus(),a||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},i=function(t,n,a,r){if(n.emitEvents&&"function"==typeof e.CustomEvent){var o=new CustomEvent(t,{bubbles:!0,detail:{anchor:a,toggle:r}});document.dispatchEvent(o)}};return function(s,l){var c,u,m,d,p={cancelScroll:function(e){cancelAnimationFrame(d),d=null,e||i("scrollCancel",c)},animateScroll:function(a,s,l){p.cancelScroll();var u=n(c||t,l||{}),h="[object Number]"===Object.prototype.toString.call(a),f=h||!a.tagName?null:a;if(h||f){var g=e.pageYOffset;u.header&&!m&&(m=document.querySelector(u.header));var w,b,v,y,E,S,A,O,I=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(m),k=h?a:function(t,n,a,o){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return i=Math.max(i-n-a,0),o&&(i=Math.min(i,r()-e.innerHeight)),i}(f,I,parseInt("function"==typeof u.offset?u.offset(a,s):u.offset,10),u.clip),C=k-g,L=r(),N=0,x=(w=C,v=(b=u).speedAsDuration?b.speed:Math.abs(w/1e3*b.speed),b.durationMax&&v>b.durationMax?b.durationMax:b.durationMin&&v<b.durationMin?b.durationMin:parseInt(v,10));0===e.pageYOffset&&e.scrollTo(0,0),A=a,O=u,h||history.pushState&&O.updateURL&&history.pushState({smoothScroll:JSON.stringify(O),anchor:A.id},document.title,A===document.documentElement?"#top":"#"+A.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?o(a,Math.floor(k),!1):(i("scrollStart",u,a,s),p.cancelScroll(!0),e.requestAnimationFrame((function t(n){var r,l,c;y||(y=n),N+=n-y,S=g+C*(l=E=1<(E=0===x?0:N/x)?1:E,"easeInQuad"===(r=u).easing&&(c=l*l),"easeOutQuad"===r.easing&&(c=l*(2-l)),"easeInOutQuad"===r.easing&&(c=l<.5?2*l*l:(4-2*l)*l-1),"easeInCubic"===r.easing&&(c=l*l*l),"easeOutCubic"===r.easing&&(c=--l*l*l+1),"easeInOutCubic"===r.easing&&(c=l<.5?4*l*l*l:(l-1)*(2*l-2)*(2*l-2)+1),"easeInQuart"===r.easing&&(c=l*l*l*l),"easeOutQuart"===r.easing&&(c=1- --l*l*l*l),"easeInOutQuart"===r.easing&&(c=l<.5?8*l*l*l*l:1-8*--l*l*l*l),"easeInQuint"===r.easing&&(c=l*l*l*l*l),"easeOutQuint"===r.easing&&(c=1+--l*l*l*l*l),"easeInOutQuint"===r.easing&&(c=l<.5?16*l*l*l*l*l:1+16*--l*l*l*l*l),r.customEasing&&(c=r.customEasing(l)),c||l),e.scrollTo(0,Math.floor(S)),function(t,n){var r=e.pageYOffset;if(t==n||r==n||(g<n&&e.innerHeight+r)>=L)return p.cancelScroll(!0),o(a,n,h),i("scrollStop",u,a,s),!(d=y=null)}(S,k)||(d=e.requestAnimationFrame(t),y=n)})))}}},h=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(u=t.target.closest(s))&&"a"===u.tagName.toLowerCase()&&!t.target.closest(c.ignore)&&u.hostname===e.location.hostname&&u.pathname===e.location.pathname&&/#/.test(u.href)){var n,r;try{n=a(decodeURIComponent(u.hash))}catch(t){n=a(u.hash)}if("#"===n){if(!c.topOnEmptyHash)return;r=document.documentElement}else r=document.querySelector(n);(r=r||"#top"!==n?r:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(c),p.animateScroll(r,u))}},f=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(a(history.state.anchor)))||p.animateScroll(t,null,{updateURL:!1})}};return p.destroy=function(){c&&(document.removeEventListener("click",h,!1),e.removeEventListener("popstate",f,!1),p.cancelScroll(),d=m=u=c=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";p.destroy(),c=n(t,l||{}),m=c.header?document.querySelector(c.header):null,document.addEventListener("click",h,!1),c.updateURL&&c.popstate&&e.addEventListener("popstate",f,!1)}(),p}}(r)}.apply(t,[]))||(e.exports=a)}).call(this,n("yLpj"))},rkFO:function(e,t,n){},w2l6:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("3AKA"),i=n.n(o),s=n("Bl7J");t.default=function(){return r.a.createElement(s.a,null,r.a.createElement("section",{className:i.a.wrapper},r.a.createElement("h1",{className:i.a.pageNotFound},"404"),r.a.createElement("p",null,"There doesn’t seem to be a page here.",r.a.createElement("br",null),"Did you mean to go somewhere else?")))}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(a){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-404-js-f9e1e5790dbbd0005596.js.map