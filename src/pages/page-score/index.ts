export function initPageScore(params) {

    const ganaste = require("url:../../img/ganaste.png");
    const perdiste = require("url:../../img/perdiste.png");

    const div = document.createElement("div");
    div.className = "page";
    div.innerHTML = `
    <div class="container">
        <div class="score">
            <custom-text variant="title">Score</custom-text>
            <custom-text variant="body">Vos: </custom-text>
            <custom-text variant="body">Pc: </custom-text>
            
        </div>
        <custom-button class="toPlay" text="Volver a Jugar"></custom-button>
        <custom-button class="toWelcome" text="Inicio"></custom-button>
    </div>
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
        .score{
            border: 4px solid;
            border-radius: 4px;
            padding: 26px;
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