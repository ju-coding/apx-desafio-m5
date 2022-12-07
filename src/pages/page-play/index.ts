export function initPagePlay(params) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class= "container">
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
    
    return div
}