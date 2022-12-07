export function initPageWelcome(params) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class= "container">
        <h1 class="title">Piedra Papel o Tijera</h1>
        <custom-button class="toStart" text="Empezar"></custom-button>
    </div>
    `;
    
    var style = document.createElement('style');
    style.textContent = `
        .container{
            padding: 30px;
            max-width: 300px;
        }
    `;

    div.append(style);
    
    const toStartButtonEl = div.querySelector(".toStart") as any;
    toStartButtonEl.addEventListener("click", function() {
        params.goTo("/start")
    })

    return div
}