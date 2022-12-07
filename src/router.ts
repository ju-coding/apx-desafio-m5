import {initPageWelcome} from "./pages/page-welcome";
import {initPageStart} from "./pages/page-start";
import {initPagePlay} from "./pages/page-play";
import {initPageScore} from "./pages/page-score";

const routes = [
    {
        path: /\/welcome/,
        component: initPageWelcome
    },
    {
        path: /\/start/,
        component: initPageStart
    },
    {
        path: /\/play/,
        component: initPagePlay
    },
    {
        path: /\/score/,
        component: initPageScore
    }
]

export function initRouter(container) {

    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path)
    }

    function handleRoute(route) {
        for (const r of routes) {
            if (r.path.test(route)) {
                const componentEl = r.component({goTo});
                if (container?.firstChild) {
                    container.firstChild.remove();
                }
                container?.appendChild(componentEl);
            }
        }
    }

    if ( location.pathname == "/"){
        goTo("/welcome")
    } else{
        handleRoute(location.pathname)
    }

    window.onpopstate = () => {
        handleRoute(location.pathname)
    };
}