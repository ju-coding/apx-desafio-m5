export function initPageStart(params) {
    const div = document.createElement("div");
    div.className = "page";
    div.innerHTML = `
    <div class= "container">
        <custom-text variant="body">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>
        <custom-button class="toPlay" text="¡Jugar!"></custom-button>
    </div>
    <custom-hands></custom-hands>
    `;
    
    var style = document.createElement('style');
    style.textContent = `
        .container{
            padding: 30px;
            max-width: 300px;
            margin: 0 auto;
        }
        .page{
            height: 672px;
            min-width: 375px;
            background-color: #FFDD72;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
    `;

    div.append(style);
    
    const toPlayButtonEl = div.querySelector(".toPlay") as any;
    toPlayButtonEl.addEventListener("click", function() {
        params.goTo("/play")
    })

    return div
}