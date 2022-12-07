export function initPageScore(params) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class= "container">
        <h1 class="title">Score</h1>
        <custom-button class="toPlay" text="Volver a Jugar"></custom-button>
        <custom-button class="toWelcome" text="Inicio"></custom-button>
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
    
    const playButtonEl = div.querySelector(".toPlay") as any;
    playButtonEl.addEventListener("click", function() {
        params.goTo("/play")
    })

    const toWelcomeButtonEl = div.querySelector(".toWelcome") as any;
    toWelcomeButtonEl.addEventListener("click", function() {
        params.goTo("/welcome")
    })

    return div
}