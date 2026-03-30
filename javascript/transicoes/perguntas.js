/* Importações e Exportações */

import { preventspan, arrow, padExposed, explicativa, contquest, contanswer, numberAsk } from "../variables.js";
import { explic } from "../exposed.js";

export { 
    typeOneQuestionTransition, 
    typeTwoQuestionTransition
};


/*
    Questão tipo 1 -->  Caixas de repostas menores, largura visivelmente maior que o comprimento.
    Questão tipo 2 -->  Caixas de repostas maiores, largura próxima ao comprimento.
*/

/* Transição de perguntas do tipo 1 para exposed. */

function typeOneQuestionTransition ({
    answerCorrect,
    currentAnswers,
    currentButtons,
    currentquests,
    currentLines
}) {
    return new Promise ( function (resolve) {
        answerCorrect.addEventListener("click", function() {
            explicativa.innerText = explic[`explic${numberAsk}`];
            contquest.classList.remove("contquestAppear");
            contquest.classList.add("contquestDesappear");
            preventspan.setAttribute("style", "display: block");
            
            for (let i = 0; i < currentButtons.length; i++) {
                currentButtons[i].classList.remove(`enter${i+1}`);
                currentButtons[i].classList.add(`exit${i+1}`);
            }
            
            for (let i = 0; i < currentLines.length; i++) {
                currentLines[i].classList.remove(`line${i+1}q`);
                currentLines[i].classList.add(`linesexit`);
            }

            setTimeout(function() {
                padExposed.setAttribute("style", "animation: toAppear 2.3s ease forwards, borderAnimated 3s linear infinite forwards; display: block;");
                
                setTimeout (function () {
                    [contquest, contanswer, currentquests, currentAnswers].forEach(elements => elements.style.display = "");
                    padExposed.setAttribute("style", "display: block");
                    preventspan.removeAttribute("style");
        
                    resolve();
                }, 2200);
            }, 1500);
        }, { once: true });
    });
}


/* Transição de perguntas tipo 2 para exposed. */

function typeTwoQuestionTransition ({
    answerCorrect,
    currentAnswers,
    currentButtons,
    currentquests,
    currentLines
}) {
    return new Promise ( function (resolve) {
        answerCorrect.addEventListener("click", function() {
            explicativa.innerText = explic[`explic${numberAsk}`];
            contquest.classList.remove("contquestAppear");
            contquest.classList.add("contquestDesappear");
            arrow.classList.remove("arrowAppear");
            arrow.classList.add("arrowDesappear");
            preventspan.setAttribute("style", "display: block");

            currentButtons[0].classList.remove("buttonOneVisible");

            for (let i = 0; i < currentButtons.length; i++) {
                currentButtons[i].classList.add("todesappear");
            }

            for (let i = 0; i < currentLines.length; i++) {
                currentLines[i].classList.remove(`line${i+1}q`);
                currentLines[i].classList.add(`linesexit`);
            }

            setTimeout(function() {
                padExposed.setAttribute("style", "animation: toAppear 2.3s ease forwards, borderAnimated 3s linear infinite forwards; display: block;");
                
                setTimeout (function () {
                    [contquest, contanswer, currentquests, currentAnswers].forEach(elements => elements.removeAttribute("style"));
                    padExposed.setAttribute("style", "display: block");
                    arrow.classList.remove("arrowDesappear");
                    arrow.removeAttribute("style");
                    preventspan.removeAttribute("style");

                    for (let i = 0; i < currentButtons.length; i++) {
                        currentButtons[i].removeAttribute("style");
                    }
        
                    resolve();
                }, 2200);
            }, 1500);
        }, { once: true });
    });
}