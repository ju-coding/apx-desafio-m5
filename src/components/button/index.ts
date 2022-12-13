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
                    font-size: 40px;
                    margin: 20px 0;
                    display: block;
                    color: white;
                    border: 4px solid;
                    border-radius: 4px;
                    border-color: #001997;
                    background-color: #9CBBE9;
                    font-family: 'Odibee Sans', cursive;
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