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
            div.className = "";
            div.innerHTML = `
            <div class="hands">
                    <img class="scissor" src="${tijera}" alt="">
                    <img class="stone" src="${piedra}" alt="">
                    <img class="paper" src="${papel}" alt="">
            </div>
            `;
            var style = document.createElement('style');
            style.textContent = `
                .hands{
                    margin: 0 auto;
                    min-width: 240px;
                    display: flex;
                    justify-content: space-between;
                }
                .tijera:hover{
                    transform: translateY(-30px);
                    transition: all 0.5s;
                }
                .piedra:hover{
                    transform: translateY(-30px);
                    transition: all 0.5s;
                }
                .papel:hover{
                    transform: translateY(-30px);
                    transition: all 0.5s;
                }
            `;
            shadow.appendChild(div)
            shadow.appendChild(style)
        }
    }
    customElements.define("custom-hands", Hands)
}