import { state } from "../../state";

const resultImages = {
    empate: require("url:../../img/empate.png"),
    ganaste: require("url:../../img/ganaste.png"),
    perdiste: require("url:../../img/perdiste.png"),
};

export function initPageScore(params) {

    const resultado = state.whoWins();

    let imagen;
    if (resultado == "empate") {
        imagen = resultImages.empate;
    }
    if (resultado == "victoria") {
        imagen = resultImages.ganaste;
    } else if (resultado == "derrota") {
        imagen = resultImages.perdiste;
    }

    const currentState = state.getState();

    const div = document.createElement("div");
    div.className = "page";
    div.innerHTML = `
    <div class="container">
        <img class="img" src="${imagen}">
        <div class="score">
            <custom-text variant="body">SCORE</custom-text>
            <custom-text class="puntos" variant="body">Vos: ${currentState.history.myScore}</custom-text>
            <custom-text class="puntos" variant="body">Pc: ${currentState.history.computerScore}</custom-text>
            
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
        .puntos{
            text-align: right;
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
        state.cleanData();
        params.goTo("/welcome")
    })

    return div
}