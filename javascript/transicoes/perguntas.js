/* Importações e Exportações */

import { preventspan, arrow, padExposed, explicativa, contquest, contanswer, numberAsk } from "../variables.js";
import { explic } from "../exposed.js";

export { 
    configureTypeOneQuestionTransition, 
    configureTypeTwoQuestionTransition, 
    configureTypeTwoTwoQuestionTransition, 
    configureTypeTwoOneQuestionTransition
};


/*
    Questão tipo 1 -->  Caixas de repostas menores, largura visivelmente maior que o comprimento.
    Questão tipo 2 -->  Caixas de repostas maiores, largura próxima ao comprimento.
*/

/* Transição de perguntas tipo 1 para tipo 1. */

function configureTypeOneQuestionTransition ({
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
                padExposed.setAttribute("style", "animation: toAppear 2.7s ease forwards, borderAnimated 3s linear infinite forwards; display: block;");
                
                setTimeout (function () {
                    contquest.style.display = "none";
                    contanswer.style.display = "none";
                    currentquests.display = "none";
                    currentAnswers.style.display = "none";
                    padExposed.setAttribute("style", "display: block");
                    preventspan.removeAttribute("style");
        
                    resolve();
                }, 2600);
            }, 1500);
        });
    });
}


/* Transição de perguntas tipo 1 para tipo 2. */

function configureTypeTwoQuestionTransition ({
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
                padExposed.setAttribute("style", "animation: toAppear 2.7s ease forwards, borderAnimated 3s linear infinite forwards; display: block;");
                
                setTimeout (function () {
                    contquest.style.display = "none";
                    contanswer.style.display = "none";
                    currentquests.display = "none";
                    currentAnswers.style.display = "none";
                    padExposed.setAttribute("style", "display: block");
                    preventspan.removeAttribute("style");
        
                    resolve();
                }, 2600);
            }, 1500);
        });
    });
}


/* Transição de perguntas tipo 2 para tipo 2. */

function configureTypeTwoTwoQuestionTransition ({
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

            currentButtons[0].classList.remove("buttonOneVisible");

            for (let i = 0; i < currentButtons.length; i++) {
                currentButtons[i].classList.add("todesappear");
            }

            for (let i = 0; i < currentLines.length; i++) {
                currentLines[i].classList.remove(`line${i+1}q`);
                currentLines[i].classList.add(`linesexit`);
            }

            setTimeout(function() {
                padExposed.setAttribute("style", "animation: toAppear 2.7s ease forwards, borderAnimated 3s linear infinite forwards; display: block;");
                
                setTimeout (function () {
                    contquest.style.display = "none";
                    contanswer.style.display = "none";
                    currentquests.display = "none";
                    currentAnswers.style.display = "none";
                    padExposed.setAttribute("style", "display: block");
                    preventspan.removeAttribute("style");
        
                    resolve();
                }, 2600);
            }, 1500);
        });
    });
}


/* Transição de perguntas tipo 2 para tipo 1. */

function configureTypeTwoOneQuestionTransition ({
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
            arrow.classList.remove("arrowAppear");
            arrow.classList.add("arrowDesappear");

            for (let i = 0; i < currentButtons.length; i++) {
                currentButtons[i].classList.remove("buttonOneVisible");
                currentButtons[i].classList.add("todesappear");
            }

            for (let i = 0; i < currentLines.length; i++) {
                currentLines[i].classList.remove(`line${i+1}q`);
                currentLines[i].classList.add(`linesexit`);
            }

            setTimeout(function() {
                padExposed.setAttribute("style", "animation: toAppear 2.7s ease forwards, borderAnimated 3s linear infinite forwards; display: block;");
                
                setTimeout (function () {
                    contquest.style.display = "none";
                    contanswer.style.display = "none";
                    currentquests.display = "none";
                    currentAnswers.style.display = "none";
                    padExposed.setAttribute("style", "display: block");
                    preventspan.removeAttribute("style");
                    arrow.setAttribute("style", "display: none");
                    
                    resolve();
                }, 2600);
            }, 1500);
        });
    });
}