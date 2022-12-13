import {initRouter} from "./router";
import {initButtonComponent} from "./components/button";
import {initTextComponent} from "./components/text";
import {initHandsComponent} from "./components/hands";


function main(){
    const root = document.querySelector(".root");
    
    initRouter(root);
    initHandsComponent();
    initTextComponent();
    initButtonComponent();
}
main()