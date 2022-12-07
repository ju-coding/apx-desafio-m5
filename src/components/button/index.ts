export function initButtonComponent() {

    class Button extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            const text = this.getAttribute("text")
            const shadow = this.attachShadow({mode: "open"});
            const div = document.createElement("div");
            const style = document.createElement("style");
            style.innerHTML = `
                .submit{
                    width: 100%;
                    font-size: 18px;
                    margin: 18px 0;
                    display: block;
                    border: 2px solid #000000;
                    border-radius: 4px;
                    background-color: #9CBBE9;

                }
            `;
            div.innerHTML = `
                <button class="submit">${text}</button>
            `
            shadow.appendChild(div)
            shadow.appendChild(style)
        }
    }
    customElements.define("custom-button", Button)
}