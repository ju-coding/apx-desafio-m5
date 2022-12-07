export function initPageStart(params) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class= "container">
        <h1 class="title">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h1>
        <custom-button class="toPlay" text="¡Jugar!"></custom-button>
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
    
    const toPlayButtonEl = div.querySelector(".toPlay") as any;
    toPlayButtonEl.addEventListener("click", function() {
        params.goTo("/play")
    })

    return div
}