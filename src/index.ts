import {initRouter} from "./router";
import {initButtonComponent} from "./components/button";
import {initTextComponent} from "./components/text";
import {initHandsComponent} from "./components/hands";
import "./components/papel";
import "./components/tijera";
import "./components/piedra";


function main(){
    const root = document.querySelector(".root");
    
    initRouter(root);
    initHandsComponent();
    initTextComponent();
    initButtonComponent();
}
main()