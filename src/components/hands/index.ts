export function initHandsComponent() {
    const tijera = require("url:../../img/tijera.png");
    const piedra = require("url:../../img/piedra.png");
    const papel = require("url:../../img/papel.png");

    class Hands extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({mode: "open"});
            const div = document.createElement("div");
            div.className = "hands";
            div.innerHTML = `
            
                    <img class="scissor" src="${tijera}" alt="">
                    <img class="stone" src="${piedra}" alt="">
                    <img class="paper" src="${papel}" alt="">
            
            `;
            var style = document.createElement('style');
            style.textContent = `
                .hands{
                    margin: 0 auto;
                    min-width: 240px;
                    display: flex;
                    justify-content: space-between;
                }
                .scissor:hover{
                    transform: translateY(-30px);
                    transition: all 0.5s;
                }
                .stone:hover{
                    transform: translateY(-30px);
                    transition: all 0.5s;
                }
                .paper:hover{
                    transform: translateY(-30px);
                    transition: all 0.5s;
                }
            `;
            div.appendChild(style)
            shadow.appendChild(div)
        }
    }
    customElements.define("custom-hands", Hands)
}