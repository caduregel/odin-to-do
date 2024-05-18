(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(601),o=t.n(r),c=t(314),a=t.n(c)()(o());a.push([e.id,'* {\n    margin: 0;\n    font-family: Impact, \'Arial Narrow Bold\', sans-serif;\n}\n\nbody {\n    background-color: #dcfce7;\n}\n\n/* Side Bar */\n#side-bar {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    height: 100vh;\n    background-color: #16a34a;\n    float: left;\n    color: white;\n    width: 15vw;\n}\n\n#home-button {\n    font-size: 30px;\n    font-weight: 800;\n    margin-bottom: 10px;\n}\n\n#side-bar>h2 {\n    font-weight: 400;\n    border-bottom: 3px solid white;\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n    cursor: default;\n    caret-color: transparent;\n}\n\n.side-bar-list {\n    list-style-type: none;\n\n    caret-color: transparent;\n    font-size: 18px;\n}\n\n.side-bar-list>li {\n    margin-bottom: 10px;\n}\n\n.side-bar-list>li:hover {\n    cursor: pointer;\n}\n\n#side-bar>p {\n    caret-color: transparent;\n}\n\n#side-bar>p:hover {\n    cursor: pointer;\n}\n\n#new-project {\n    background-color: #4ade80;\n    border-radius: 10px;\n    border: none;\n    font-size: 18px;\n    height: 35px;\n    width: 140px;\n    margin-left: 35px;\n}\n\n#new-project:hover {\n    cursor: pointer;\n}\n\n/* Projects Styling */\n\n#project-header {\n    display: none;\n    flex-direction: row;\n    padding: 20px;\n    justify-content: right;\n}\n\n#project-page {\n    display: flex;\n    flex-direction: column;\n}\n\n/* Task */\n\n.task {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px;\n    margin: 10px 20px;\n    background-color: white;\n    border-radius: 10px;\n}\n\n.task>input {\n    background-color: white;\n    border: none;\n    font-size: 17px;\n    cursor: pointer;\n}\n\n.task>input:focus {\n    border: 2px solid #4ade80;\n    outline: none;\n    cursor: text;\n}\n\n.task>input[type="checkbox"] {\n    -webkit-appearance: none;\n    appearance: none;\n    background-color: #fff;\n    margin: 0;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 1.15em;\n    height: 1.15em;\n    border: 0.15em solid currentColor;\n    border-radius: 0.15em;\n    transform: translateY(-0.075em);\n    caret-color: transparent;\n    cursor: pointer;\n}\n\n.task>input[type="checkbox"]::before {\n    content: "";\n    width: 0.68em;\n    height: 0.68em;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    box-shadow: inset 1em 1em black;\n}\n\n\n.task>input[type="checkbox"]:checked::before {\n    transform: scale(1);\n}\n\n.task>button {\n    border: none;\n    background-color: #4ade80;\n    height: 30px;\n    width: 30px;\n    text-align: center;\n    font-size: 15px;\n    color: #166534;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n/* Home page */\n\n#home-page {\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: 50% 50%;\n}\n\n#biggest-projects-container {\n    margin: 20px;\n    grid-area: 2 / 1 / 2 / 3;\n}\n\n#biggest-projects {\n    display: flex;\n    justify-content: space-between;\n}\n\n.project-card {\n    padding: 20px;\n    width: 100%;\n    margin-top: 15px;\n    margin-right: 20px;\n    background-color: white;\n    border-radius: 10px;\n}\n\n.project-card>* {\n    margin: 5px;\n}\n\n.task-card-container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5px;\n    background-color: #bbf7d0;\n    border-radius: 8px;\n    height: 30px;\n}\n\n.task-card-container>input {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 1.15em;\n    height: 1.15em;\n    border: 0.15em solid currentColor;\n    border-radius: 0.15em;\n    transform: translateY(-0.075em);\n    caret-color: transparent;\n    cursor: pointer;\n}\n\n.task-card-container>* {\n    margin: 0px 20px;\n}\n\n.urgent-task {\n    display: flex;\n}\n\n.urgent-task>* {\n    margin: 6px;\n}\n\n.uncompleted-task {\n    display: flex;\n\n}\n\n.uncompleted-task>* {\n    margin: 6px;\n}',""]);const i=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=c[d]||0,p="".concat(d," ").concat(l);c[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=t(c[a]);n[i].references--}for(var s=r(e,o),d=0;d<c.length;d++){var l=t(c[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}c=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var c=n[r]={id:r,exports:{}};return e[r](c,c.exports,t),c.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),c=t(659),a=t.n(c),i=t(56),s=t.n(i),d=t(540),l=t.n(d),p=t(113),u=t.n(p),m=t(208),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.A,h),m.A&&m.A.locals&&m.A.locals;class f{constructor(e,n,t,r){this.name=e,this.description=n,this.dueDate=t,this.priority=r,this.completed=!1}editName(e){this.name=e}editDescription(e){this.description=e}editDueDate(e){this.dueDate=e}editPriority(e){this.priority=e}switchCompletion(){0==this.completed?this.completed=!0:this.completed=!1}}class y{static allProjects=[];constructor(e,n){this.name=e,this.description=n,this.tasks=[],y.allProjects.push(this)}addTask(e){this.tasks.push(e)}deleteTask(e){const n=this.tasks.indexOf(e);n>-1&&this.tasks.splice(n,1),0==this.tasks.length&&(document.querySelector("#tasks-container").innerHTML="")}editName(e){this.name=e}editDescription(e){this.description=e}deleteProject(e){const n=y.allProjects.indexOf(e);n>-1&&y.allProjects.splice(n,1)}}const g=function(e){e.tasks.map((function(n){document.querySelector("#tasks-container").innerHTML="";const t=document.createElement("div");t.classList.add("task");const r=document.createElement("input");r.setAttribute("type","input"),r.value=n.name;const o=document.createElement("input");o.setAttribute("type","input"),o.value=n.description;const c=document.createElement("input");c.setAttribute("type","date"),c.value=n.dueDate;const a=document.createElement("input");a.setAttribute("type","checkbox"),a.checked=n.completed;const i=document.createElement("button");return i.textContent="x",r.addEventListener("focusout",(()=>{n.editName(r.value),console.log(n)})),o.addEventListener("focusout",(()=>{n.editDescription(o.value),console.log(e)})),c.addEventListener("focusout",(()=>{n.editDueDate(c.value),console.log(e)})),a.addEventListener("click",(()=>{n.switchCompletion()})),i.addEventListener("click",(()=>{e.deleteTask(n),g(e)})),t.appendChild(r),t.appendChild(o),t.appendChild(c),t.appendChild(a),t.appendChild(i),t})).forEach((function(e){document.querySelector("#tasks-container").appendChild(e)}))};let x;const b=function(){document.querySelector(".side-bar-list").innerHTML="",y.allProjects.map((function(e){const n=document.createElement("li");return n.textContent=e.name,n.setAttribute("class","projectListItem"),n.addEventListener("click",(()=>{x=e,document.querySelector("#tasks-container").innerHTML="",k(e,!0)})),n})).forEach((e=>{document.querySelector(".side-bar-list").appendChild(e)}))},v=function(){document.querySelector(".side-bar-list").innerHTML="",b(),document.querySelector("#new-project").addEventListener("click",(()=>{new y("New Project",""),b(),console.log("priject")})),document.querySelector("#delete-project").addEventListener("click",(()=>{const e=document.querySelector("#project-header");e.style.display="none",x.deleteProject(x),e.style.display="none",v()})),document.querySelector("#new-task").addEventListener("click",(()=>{const e=new f("","","","");x.addTask(e),g(x)}))},k=function(e,n){document.querySelector("#home-page").style.display="none";const t=document.querySelector("#project-header");1==n&&(t.style.display="flex"),document.querySelector("#project-name-header").textContent=e.name,document.querySelector("#project-description-header").textContent=e.description,g(e)},w=function(){y.allProjects.reduce(((e,n)=>e.concat(n.tasks)),[]).filter((e=>!e.completed)).map((function(e){const n=document.createElement("div");n.classList.add("uncompleted-task");const t=document.createElement("p");t.textContent=e.name;const r=document.createElement("p");r.textContent=e.description;const o=document.createElement("p");return o.textContent=e.dueDate,n.appendChild(t),n.appendChild(r),n.appendChild(o),n})).forEach((e=>{document.querySelector("#uncompleted-tasks").appendChild(e)}))},C=function(){y.allProjects.slice(0,3).map((function(e){const n=document.createElement("div");n.classList.add("project-card");const t=document.createElement("h2");t.textContent=e.name;const r=document.createElement("p");r.textContent=e.description;const o=e.tasks.slice(0,3).map((function(e){const n=document.createElement("div");n.classList.add("task-card-container");const t=document.createElement("p");t.textContent=e.name;const r=document.createElement("input");return r.setAttribute("type","checkbox"),r.checked=e.completed,r.addEventListener("click",(()=>{e.switchCompletion(),document.querySelector("#uncompleted-tasks").innerHTML="",w()})),n.appendChild(t),n.appendChild(r),n}));return n.appendChild(t),n.appendChild(r),o.forEach((e=>{n.append(e)})),n})).forEach((function(e){document.querySelector("#biggest-projects").appendChild(e)}))},j=function(){y.allProjects.reduce(((e,n)=>e.concat(n.tasks)),[]).slice(0,5).map((function(e){const n=document.createElement("div");n.classList.add("urgent-task");const t=document.createElement("p");t.textContent=e.name;const r=document.createElement("p");r.textContent=e.description;const o=document.createElement("p");return o.textContent=e.dueDate,n.appendChild(t),n.appendChild(r),n.appendChild(o),n})).forEach((e=>{document.querySelector("#urgent-tasks").appendChild(e)}))},E=new y("sam","A newly created project"),S=new y("Liam","a very fun project"),L=(new y("Mai","A very fun project"),new y("sharon","A very fun project"),new f("Buy Milk","Two Gallons","2024-11-03","3")),T=new f("Buy Cat Food","Two packs","2024-11-03","1");T.switchCompletion();const q=new f("Buy Avocados","3","2024-11-03","4");q.switchCompletion();const A=new f("Buy new shoes","Timberlands","2024-11-03","4");E.addTask(L),E.addTask(T),E.addTask(q),S.addTask(A),console.log(y.allProjects),v(),document.querySelector("#home-button").addEventListener("click",(()=>{document.querySelector("#home-page").style.display="grid",document.querySelector("#project-header").style.display="none",document.querySelector("#tasks-container").innerHTML="",document.querySelector("#biggest-projects").innerHTML="",document.querySelector("#uncompleted-tasks").innerHTML="",document.querySelector("#urgent-tasks").innerHTML="",C(),j(),w()})),C(),j(),w()})()})();