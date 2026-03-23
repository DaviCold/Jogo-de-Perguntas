import { preventspan, contquest, end, congratulations, restart, arrow } from "../variables.js";

export { forEndTypeOne, forEndTypeTwo }


/*
    Questão tipo 1 -->  Caixas de repostas menores, largura visivelmente maior que o comprimento.
    Questão tipo 2 -->  Caixas de repostas maiores, largura próxima ao comprimento.
*/

/* Esta função deve ser chamada dentro da função forFinish caso a última questão for do tipo 1. */

async function forEndTypeOne({
    answerCorrect, currentButtons,
}) {
    return new Promise(function (resolve) {
        answerCorrect.addEventListener("click", function () {
            preventspan.setAttribute("style", "display: block");
            contquest.classList.add("contquestDesappear");

            for (let i = 0; i < currentButtons.length; i++) {
                currentButtons[i].classList.remove(`enter${i + 1}`);
                currentButtons[i].classList.add(`exit${i + 1}`);
            }

            setTimeout(() => {
                end.setAttribute("style", "display: flex");
                congratulations.setAttribute("style", "display: block; animation: congratulationsAnimate 0.8s ease; animation-fill-mode: forwards;");

                setTimeout(() => {
                    congratulations.setAttribute("style", "animation: congratulationsAnimated 0.8s ease; animation-fill-mode: forwards;");
                    restart.setAttribute("style", "display: block");
                    restart.classList.add("toappear");

                    setTimeout(() => {
                        congratulations.removeAttribute("style");
                        preventspan.removeAttribute("style");

                        resolve();
                    }, 2600);
                }, (800 + 2000));

            }, 2600);
        });
    });
}


/* Esta função deve ser chamada dentro da função forFinish caso a última questão for do tipo 2. */

async function forEndTypeTwo({
    answerCorrect, currentButtons,
}) {
    return new Promise(function (resolve) {
        answerCorrect.addEventListener("click", function () {
            preventspan.setAttribute("style", "display: block")
            arrow.classList.remove("arrowAppear")
            arrow.classList.add("arrowDesappear")
            contquest.classList.add("todesappear")

            for (let i = 0; i < currentButtons.length; i++) {
                currentButtons[i].classList.remove("buttononevisible")
                currentButtons[i].classList.add("todesappear")
            }

            setTimeout(() => {
                preventspan.removeAttribute("style")
                end.setAttribute("style", "display: flex")
                congratulations.setAttribute("style", "display: block; animation: congratulationsAnimate 0.8s ease; animation-fill-mode: forwards;")

                setTimeout(() => {
                    congratulations.setAttribute("style", "animation: congratulationsAnimated 0.8s ease; animation-fill-mode: forwards;")
                    restart.setAttribute("style", "display: block")
                    restart.classList.add("toappear")

                    setTimeout(() => {
                        congratulations.removeAttribute("style")
                        preventspan.removeAttribute("style")

                        resolve()
                    }, 2600)
                }, (800 + 2000))

            }, 2600)
        })
    })
}