export function initTextComponent() {
    class TextComponent extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            const variant = this.getAttribute("variant") || "body";
            const shadow = this.attachShadow({mode: "open"});
            const div = document.createElement("div");
            
            const style = document.createElement("style");
            style.innerHTML = `
                .title{
                    font-size: 80px;
                    font-weight: bold;
                    padding: 30px 0;
                    font-family: 'Odibee Sans', cursive;
                }
                .body{
                    font-size: 40px;
                    font-weight: bold;
                    font-family: 'Odibee Sans', cursive;
                }
            `;
            div.className = variant;
            div.textContent = this.textContent;
            shadow.appendChild(div)
            div.appendChild(style)
        }
    }
    customElements.define("custom-text", TextComponent)
}