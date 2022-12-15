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

const BASE_PATH = "/apx-desafio-m5";

function isGithubPages() {
    return location.host.includes("github.io");
}

export function initRouter(container) {

    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }

    function handleRoute(route) {
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        for (const r of routes) {
            if (r.path.test(newRoute)) {
                const componentEl = r.component({goTo});
                if (container?.firstChild) {
                    container.firstChild.remove();
                }
                container?.appendChild(componentEl);
            }
        }
    }

    if ( location.pathname == "/" ||
    location.host.includes("github.io")){
        goTo("/welcome")
    } else{
        handleRoute(location.pathname)
    }

    window.onpopstate = () => {
        handleRoute(location.pathname)
    };
}