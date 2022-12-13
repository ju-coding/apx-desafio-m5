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
    <div class= "container">
        <div class="counter-el">${counter}</div>
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
        .counter-el {
            margin-top: 100px;
            font-weight: bold;
            font-size: 100px;
            font-family: 'Odibee Sans', cursive;
    `;
    

    div.append(style);
    
    return div
}