const tijera = require("url:../../img/tijera.png");

customElements.define(
    "hand-scissor",
    class Tijera extends HTMLElement {
        shadow: ShadowRoot;
        constructor() {
            super();
            this.shadow = this.attachShadow({ mode: "open" });
            this.render();
        }
        render() {
            const style = document.createElement("style");
            this.shadow.innerHTML = `
                <img class="hand-scissor" src="${tijera}">
            `;

            style.innerHTML = `
                .hand-scissor {
                    
                }
            `;
            this.shadow.appendChild(style);
        }
    }
);