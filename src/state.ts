// 0 = tijera, 1 = piedra, 2 = papel.
type Jugada = 0 | 1 | 2;
type Game = [
    computerPlay:Jugada,
    myPlay:Jugada
]

const state = {
    data: {
        // list: [],
        currentGame:{
            computerPlay: "",
            myPlay: ""
        },
        history: []
    },
    setMove(move:Jugada) {
        const currentState = this.getState();
        currentState.currentGame.myPlay
    },
    pushToHistory(play:Game) {
        const currentState = this.getState();
        currentState.history(play)
    },
    whoWins(myPlay:Jugada, computerPlay:Jugada) {

    },
    // listeners: [],
    getState() {
        return this.data;
    },
    // setState(newState) {
    //     this.data = newState;
    //     for (const cb of this.listeners) {
    //         cb()
    //     }
    // },
    // subscribe(callback: (any) => any) {
    //     this.listeners.push(callback)
    // },
    // addItem(item) {
    //     const cs = this.getState();
    //     cs.list.push(item);
    //     this.setState(cs);
    // },
};

export {state};