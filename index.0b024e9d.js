function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},s=t.parcelRequire575a;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequire575a=s),s.register("27Lyk",(function(t,n){var a,s;e(t.exports,"register",(()=>a),(e=>a=e)),e(t.exports,"resolve",(()=>s),(e=>s=e));var o={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},s=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("lIutp",(function(e,t){e.exports=new URL(s("27Lyk").resolve("4DeBg"),import.meta.url).toString()})),s.register("ksoxG",(function(e,t){e.exports=new URL(s("27Lyk").resolve("jqZIk"),import.meta.url).toString()})),s.register("b9HXJ",(function(e,t){e.exports=new URL(s("27Lyk").resolve("g037p"),import.meta.url).toString()})),s.register("fYx2c",(function(e,t){e.exports=new URL(s("27Lyk").resolve("6nUhZ"),import.meta.url).toString()})),s.register("1LekW",(function(e,t){e.exports=new URL(s("27Lyk").resolve("k0E3k"),import.meta.url).toString()})),s.register("wF6Ju",(function(e,t){e.exports=new URL(s("27Lyk").resolve("6ocGL"),import.meta.url).toString()})),s("27Lyk").register(JSON.parse('{"dZpbI":"index.0b024e9d.js","4DeBg":"empate.e7568e0b.png","jqZIk":"ganaste.16f25709.png","g037p":"perdiste.9d0f0f55.png","6nUhZ":"tijera.7788fbe9.png","k0E3k":"piedra.a94a49ea.png","6ocGL":"papel.dae44514.png"}'));const o={data:{currentGame:{computerPlay:"",myPlay:""},history:{myScore:0,computerScore:0}},getStorage(){const e=JSON.parse(localStorage.getItem("history"));localStorage.getItem("history")&&(this.data.history=e)},getState(){return this.data},setState(e){this.data=e},setMove(e){const t=this.getState();t.currentGame.myPlay=e;t.currentGame.computerPlay=["tijera","piedra","papel"][Math.floor(3*Math.random())],this.setHistory()},setHistory(){const e=this.getState(),t=this.whoWins(),n=e.history.myScore,a=e.history.computerScore;"victoria"==t&&this.setState({...e,history:{myScore:n+1,computerScore:a}}),"derrota"==t&&this.setState({...e,history:{myScore:n,computerScore:a+1}}),this.savedData()},whoWins(){const e=this.getState().currentGame;if(["tijera"==e.myPlay&&"tijera"==e.computerPlay,"piedra"==e.myPlay&&"piedra"==e.computerPlay,"papel"==e.myPlay&&"papel"==e.computerPlay].includes(!0))return"empate";return["tijera"==e.myPlay&&"papel"==e.computerPlay,"piedra"==e.myPlay&&"tijera"==e.computerPlay,"papel"==e.myPlay&&"piedra"==e.computerPlay].includes(!0)?"victoria":"derrota"},savedData(){const e=this.getState().history;localStorage.setItem("history",JSON.stringify(e))},cleanData(){localStorage.setItem("history",JSON.stringify({myScore:0,computerScore:0})),this.getStorage()}};const r={empate:s("lIutp"),ganaste:s("ksoxG"),perdiste:s("b9HXJ")};const i=[{path:/\/welcome/,component:function(e){const t=document.createElement("div");t.className="page",t.innerHTML='\n    <div class= "container">\n        <custom-text variant="title">Piedra Papel o Tijera</custom-text>\n        <custom-button class="toStart" text="Empezar"></custom-button>\n    </div>\n    <custom-hands></custom-hands>\n    ';var n=document.createElement("style");return n.textContent="\n        .container{\n            padding: 30px;\n            max-width: 300px;\n            margin: 0 auto;\n        }\n        .page{\n            height: 672px;\n            min-width: 375px;\n            background-color: #FFDD72;\n            display: flex;\n            align-items: center;\n            flex-direction: column;\n            justify-content: space-between;\n        }\n    ",t.append(n),t.querySelector(".toStart").addEventListener("click",(function(){e.goTo("/start")})),t}},{path:/\/start/,component:function(e){const t=document.createElement("div");t.className="page",t.innerHTML='\n    <div class= "container">\n        <custom-text variant="body">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>\n        <custom-button class="toPlay" text="¡Jugar!"></custom-button>\n    </div>\n    <custom-hands></custom-hands>\n    ';var n=document.createElement("style");return n.textContent="\n        .container{\n            padding: 30px;\n            max-width: 300px;\n            margin: 0 auto;\n        }\n        .page{\n            height: 672px;\n            min-width: 375px;\n            background-color: #FFDD72;\n            display: flex;\n            align-items: center;\n            flex-direction: column;\n            justify-content: space-between;\n    ",t.append(n),t.querySelector(".toPlay").addEventListener("click",(function(){e.goTo("/play")})),t}},{path:/\/play/,component:function(e){let t=3;const n=setInterval((()=>{t--;a.querySelector(".counter-el").textContent=String(t),t<0&&(clearInterval(n),e.goTo("/welcome"))}),1e3),a=document.createElement("div");a.className="page",a.innerHTML=`\n    <div class="hands-top">\n        <hand-scissor class="scissor-top hand-display-none"></hand-scissor>\n        <hand-paper class="paper-top hand-display-none"></hand-paper>\n        <hand-stone class="stone-top hand-display-none"></hand-stone>\n    </div>\n    <div class= "container">\n        <div class="counter-el">${t}</div>\n    </div>\n    <div class="hands">\n        <hand-scissor class="scissor"></hand-scissor>\n        <hand-stone class="stone"></hand-stone>\n        <hand-paper class="paper"></hand-paper>\n    </div>\n    `;var s=document.createElement("style");s.textContent="\n        .container{\n            padding: 30px;\n            max-width: 300px;\n            margin: 0 auto;\n        }\n        .page{\n            height: 672px;\n            min-width: 375px;\n            background-color: #FFDD72;\n            display: flex;\n            align-items: center;\n            flex-direction: column;\n            justify-content: space-between;\n        }\n        .hands{\n            margin: 0 auto;\n            display: flex;\n            justify-content: center;\n        }\n        .counter-el {\n            margin-top: 100px;\n            font-weight: bold;\n            font-size: 100px;\n            font-family: 'Odibee Sans', cursive;\n        }\n        .hands-top {\n            display: none;\n        }\n        .active-hands{\n        \n        }\n        .actived {\n            display: inherit;\n            transform: translateY(-30px);\n            transition: all 0.5s;\n        }\n        .disabled {\n            opacity: 60%;\n        }\n        .actived-hands-top {\n            display: flex;\n            justify-content: center;\n            transform: rotate(180deg);\n        }\n        .actived-hand-top {\n            display: flex;\n            transform: translateY(-30px);\n            transition: all 0.5s;\n        }\n        .hand-display-none{\n            display: none;\n        }\n    ";const r=a.querySelector(".counter-el"),i=a.querySelector(".hands").children,c=a.querySelector(".hands"),d=a.querySelector(".scissor"),l=a.querySelector(".stone"),p=a.querySelector(".paper"),u=a.querySelector(".hands-top"),m=a.querySelector(".scissor-top"),h=a.querySelector(".stone-top"),y=a.querySelector(".paper-top");for(const e of i)e.addEventListener("click",(()=>{const t=e.getAttribute("class");clearInterval(n),"scissor"==t?(o.setMove("tijera"),g("tijera")):"stone"==t?(o.setMove("piedra"),g("piedra")):"paper"==t&&(o.setMove("papel"),g("papel"))}));function g(t){for(const e of i)e.classList.add("disabled");"tijera"==t&&(d.classList.remove("disabled"),d.classList.add("actived"),setTimeout((()=>{l.classList.add("hand-display-none"),p.classList.add("hand-display-none")}),1500)),"piedra"==t&&(l.classList.remove("disabled"),l.classList.add("actived"),setTimeout((()=>{d.classList.add("hand-display-none"),p.classList.add("hand-display-none")}),1500)),"papel"==t&&(p.classList.remove("disabled"),p.classList.add("actived"),setTimeout((()=>{d.classList.add("hand-display-none"),l.classList.add("hand-display-none")}),1500)),setTimeout((()=>{const t=o.getState().currentGame.computerPlay;console.log(t),r.remove(),c.classList.add("active-hands"),u.classList.add("actived-hands-top"),"tijera"==t&&(m.classList.remove("hand-display-none"),m.classList.add("actived-hand-top")),"papel"==t&&(y.classList.remove("hand-display-none"),y.classList.add("actived-hand-top")),"piedra"==t&&(h.classList.remove("hand-display-none"),h.classList.add("actived-hand-top")),setTimeout((()=>{e.goTo("/score")}),2e3)}),2e3)}return a.append(s),a}},{path:/\/score/,component:function(e){const t=o.whoWins();let n;"empate"==t&&(n=r.empate),"victoria"==t?n=r.ganaste:"derrota"==t&&(n=r.perdiste);const a=o.getState(),s=document.createElement("div");s.className="page",s.innerHTML=`\n    <div class="container">\n        <img class="img" src="${n}">\n        <div class="score">\n            <custom-text variant="body">SCORE</custom-text>\n            <custom-text class="puntos" variant="body">Vos: ${a.history.myScore}</custom-text>\n            <custom-text class="puntos" variant="body">Pc: ${a.history.computerScore}</custom-text>\n            \n        </div>\n        <custom-button class="toPlay" text="Volver a Jugar"></custom-button>\n        <custom-button class="toWelcome" text="Inicio"></custom-button>\n    </div>\n    `;var i=document.createElement("style");return i.textContent="\n        .container{\n            padding: 30px;\n            max-width: 300px;\n            margin: 0 auto;\n        }\n        .page{\n            height: 672px;\n            min-width: 375px;\n            background-color: #FFDD72;\n            display: flex;\n            align-items: center;\n            flex-direction: column;\n            justify-content: space-between;\n        }\n        .puntos{\n            text-align: right;\n        }\n        .score{\n            border: 4px solid;\n            border-radius: 4px;\n            padding: 26px;\n        }\n    ",s.append(i),s.querySelector(".toPlay").addEventListener("click",(function(){e.goTo("/play")})),s.querySelector(".toWelcome").addEventListener("click",(function(){o.cleanData(),e.goTo("/welcome")})),s}}],c="/apx-desafio-m5";function d(){return location.host.includes("github.io")}var l=s("wF6Ju");customElements.define("hand-paper",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const e=document.createElement("style");this.shadow.innerHTML=`\n                <img class="hand-paper" src="${l}">\n            `,e.innerHTML="\n                .hand-paper {\n                margin: 0 18px;\n                }\n            ",this.shadow.appendChild(e)}});var p=s("fYx2c");customElements.define("hand-scissor",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const e=document.createElement("style");this.shadow.innerHTML=`\n                <img class="hand-scissor" src="${p}">\n            `,e.innerHTML="\n                .hand-scissor {\n                    margin: 0 18px;\n                }\n            ",this.shadow.appendChild(e)}});var u=s("1LekW");customElements.define("hand-stone",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const e=document.createElement("style");this.shadow.innerHTML=`\n                <img class="hand-stone" src="${u}">\n            `,e.innerHTML="\n                .hand-stone {\n                    margin: 0 18px;\n                }\n            ",this.shadow.appendChild(e)}}),function(e){function t(e){const t=d()?c+e:e;history.pushState({},"",t),n(t)}function n(n){const a=d()?n.replace(c,""):n;for(const n of i)if(n.path.test(a)){const a=n.component({goTo:t});e?.firstChild&&e.firstChild.remove(),e?.appendChild(a)}}"/"==location.pathname||location.host.includes("github.io")?t("/welcome"):n(location.pathname),window.onpopstate=()=>{n(location.pathname)}}(document.querySelector(".root")),function(){const e=s("fYx2c"),t=s("1LekW"),n=s("wF6Ju");class a extends HTMLElement{constructor(){super(),this.render()}render(){const a=this.attachShadow({mode:"open"}),s=document.createElement("div");s.className="hands",s.innerHTML=`\n            \n                    <img class="scissor" src="${e}" alt="">\n                    <img class="stone" src="${t}" alt="">\n                    <img class="paper" src="${n}" alt="">\n            \n            `;var o=document.createElement("style");o.textContent="\n                .hands{\n                    margin: 0 auto;\n                    min-width: 240px;\n                    display: flex;\n                    justify-content: space-between;\n                }\n                .scissor:hover{\n                    transform: translateY(-30px);\n                    transition: all 0.5s;\n                }\n                .stone:hover{\n                    transform: translateY(-30px);\n                    transition: all 0.5s;\n                }\n                .paper:hover{\n                    transform: translateY(-30px);\n                    transition: all 0.5s;\n                }\n            ",s.appendChild(o),a.appendChild(s)}}customElements.define("custom-hands",a)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.getAttribute("variant")||"body",t=this.attachShadow({mode:"open"}),n=document.createElement("div"),a=document.createElement("style");a.innerHTML="\n                .title{\n                    font-size: 80px;\n                    font-weight: bold;\n                    padding: 30px 0;\n                    font-family: 'Odibee Sans', cursive;\n                }\n                .body{\n                    font-size: 40px;\n                    font-weight: bold;\n                    font-family: 'Odibee Sans', cursive;\n                }\n            ",n.className=e,n.textContent=this.textContent,t.appendChild(n),n.appendChild(a)}}customElements.define("custom-text",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.getAttribute("text"),t=this.attachShadow({mode:"open"}),n=document.createElement("div"),a=document.createElement("style");a.innerHTML="\n                .submit{\n                    width: 100%;\n                    font-size: 40px;\n                    margin: 20px 0;\n                    display: block;\n                    color: white;\n                    border: 4px solid;\n                    border-radius: 4px;\n                    border-color: #001997;\n                    background-color: #9CBBE9;\n                    font-family: 'Odibee Sans', cursive;\n                }\n            ",n.innerHTML=`\n                <button class="submit">${e}</button>\n            `,t.appendChild(n),t.appendChild(a)}}customElements.define("custom-button",e)}();
//# sourceMappingURL=index.0b024e9d.js.map
