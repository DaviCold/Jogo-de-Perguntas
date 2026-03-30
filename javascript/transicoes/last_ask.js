import { preventspan, continuar, end, congratulations, restart, setNumberAsk, padExposed } from "../variables.js";

export { forEnd };


async function forEnd() {
    return new Promise(function (resolve) {
        continuar.addEventListener("click", function () {
            padExposed.setAttribute("style", "animation: toDesappear 2.7s ease forwards, borderAnimated 3s linear infinite forwards; display: block;");
            preventspan.setAttribute("style", "display: block");
            setNumberAsk();

            setTimeout(() => {
                end.setAttribute("style", "display: flex");
                congratulations.setAttribute("style", "display: block; animation: congratulationsAnimate 0.8s ease forwards;");

                setTimeout(() => {
                    congratulations.setAttribute("style", "animation: congratulationsAnimated 0.8s ease forwards;");
                    restart.setAttribute("style", "display: block");
                    restart.classList.add("toappear");

                    setTimeout(() => {
                        padExposed.removeAttribute("style");
                        congratulations.removeAttribute("style");
                        preventspan.removeAttribute("style");

                        resolve();
                    }, 2400);
                }, (2800));
            }, 2600);
        }, { once: true });
    });
}