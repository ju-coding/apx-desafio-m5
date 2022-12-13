export function initPageWelcome(params) {
    
    const div = document.createElement("div");
    div.className = "page";
    div.innerHTML = `
    <div class= "container">
        <custom-text variant="title">Piedra Papel o Tijera</custom-text>
        <custom-button class="toStart" text="Empezar"></custom-button>
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
        }
    `;

    div.append(style);
    
    const toStartButtonEl = div.querySelector(".toStart") as any;
    toStartButtonEl.addEventListener("click", function() {
        params.goTo("/start")
    })

    return div
}