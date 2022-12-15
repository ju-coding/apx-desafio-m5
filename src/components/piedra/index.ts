const piedra = require("url:../../img/piedra.png");

customElements.define(
    "hand-stone",
    class Piedra extends HTMLElement {
        shadow: ShadowRoot;
        constructor() {
            super();
            this.shadow = this.attachShadow({ mode: "open" });
            this.render();
        }
        render() {
            const style = document.createElement("style");
            this.shadow.innerHTML = `
                <img class="hand-stone" src="${piedra}">
            `;

            style.innerHTML = `
                .hand-stone {
                    margin: 0 18px;
                }
            `;
            this.shadow.appendChild(style);
        }
    }
);