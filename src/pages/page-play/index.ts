import { state } from "../../state";

export function initPagePlay(params) {

    let counter = 3;
    const countdown = setInterval(() => {
    counter--;
    const counterEl = div.querySelector(".counter-el") as any;
    counterEl.textContent = String(counter);

    if (counter < 0) {
        clearInterval(countdown);
        params.goTo("/welcome");
    }
    }, 1000);

    const div = document.createElement("div");
    div.className = "page";
    div.innerHTML = `
    <div class="hands-top">
        <hand-scissor class="scissor-top hand-display-none"></hand-scissor>
        <hand-paper class="paper-top hand-display-none"></hand-paper>
        <hand-stone class="stone-top hand-display-none"></hand-stone>
    </div>
    <div class= "container">
        <div class="counter-el">${counter}</div>
    </div>
    <div class="hands">
        <hand-scissor class="scissor"></hand-scissor>
        <hand-stone class="stone"></hand-stone>
        <hand-paper class="paper"></hand-paper>
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
        .hands{
            margin: 0 auto;
            display: flex;
            justify-content: center;
        }
        .counter-el {
            margin-top: 100px;
            font-weight: bold;
            font-size: 100px;
            font-family: 'Odibee Sans', cursive;
        }
        .hands-top {
            display: none;
        }
        .active-hands{
        
        }
        .actived {
            display: inherit;
            transform: translateY(-30px);
            transition: all 0.5s;
        }
        .disabled {
            opacity: 60%;
        }
        .actived-hands-top {
            display: flex;
            justify-content: center;
            transform: rotate(180deg);
        }
        .actived-hand-top {
            display: flex;
            transform: translateY(-30px);
            transition: all 0.5s;
        }
        .hand-display-none{
            display: none;
        }
    `;
    
    const countdownEl = div.querySelector(".counter-el") as Element;
    const handsCont = div.querySelector<any>(".hands").children;
    const handsDiv = div.querySelector(".hands") as Element;
    const handScissor = div.querySelector(".scissor") as Element;
    const handStone = div.querySelector(".stone") as Element;
    const handPaper = div.querySelector(".paper") as Element;
    const handsTop = div.querySelector(".hands-top") as Element;
    const handScissorTop = div.querySelector(".scissor-top") as Element;
    const handStoneTop = div.querySelector(".stone-top") as Element;
    const handPaperTop = div.querySelector(".paper-top") as Element;

    for (const hands of handsCont) {
        hands.addEventListener("click", () => {
            const type = hands.getAttribute("class");
            clearInterval(countdown);

            if (type == "scissor") {
                state.setMove("tijera");
                activeHands("tijera");
            } else if (type == "stone") {
                state.setMove("piedra");
                activeHands("piedra");
            } else if (type == "paper") {
                state.setMove("papel");
                activeHands("papel");
            }
        });
    }

    function activeHands(param) {
        for (const hand of handsCont) {
            hand.classList.add("disabled");
        }
        if (param == "tijera") {
            handScissor.classList.remove("disabled");
            handScissor.classList.add("actived");
            setTimeout(() => {
                handStone.classList.add("hand-display-none");
                handPaper.classList.add("hand-display-none");
            }, 1500);
        }
        if (param == "piedra") {
            handStone.classList.remove("disabled");
            handStone.classList.add("actived");
            setTimeout(() => {
                handScissor.classList.add("hand-display-none");
                handPaper.classList.add("hand-display-none");
            }, 1500);
        }
        if (param == "papel") {
            handPaper.classList.remove("disabled");
            handPaper.classList.add("actived");
            setTimeout(() => {
                handScissor.classList.add("hand-display-none");
                handStone.classList.add("hand-display-none");
            }, 1500);
        }

        setTimeout(() => {
            const machineMove = state.getState().currentGame.computerPlay;
            console.log(machineMove);
            
            countdownEl.remove();
            handsDiv.classList.add("active-hands");
            handsTop.classList.add("actived-hands-top");
    
            if (machineMove == "tijera") {
                handScissorTop.classList.remove("hand-display-none");
                handScissorTop.classList.add("actived-hand-top");
            }
            if (machineMove == "papel") {
                handPaperTop.classList.remove("hand-display-none");
                handPaperTop.classList.add("actived-hand-top");
            }
            if (machineMove == "piedra") {
                handStoneTop.classList.remove("hand-display-none");
                handStoneTop.classList.add("actived-hand-top");
            }
    
            setTimeout(() => {
                params.goTo("/score");
            }, 2000);
        }, 2000);
    }
    
    div.append(style);
    
    return div
}