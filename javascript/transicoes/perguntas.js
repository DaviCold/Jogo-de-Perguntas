/* Importações e Exportações */

import { preventspan, arrow, lines, setIndexImg, setAnswersValues } from "../variables.js";

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
    nextAnswers,
    currentAnswers,
    currentButtons,
    nextButtons,
    nextquests,
    nextLines,
    currentquests,
    currentLines
}) {
    return new Promise ( function (resolve) {
        answerCorrect.addEventListener("click", function() {
            nextAnswers.setAttribute("style", "display: flex");
            nextquests.style.display = "block";
            preventspan.setAttribute("style", "display: block");

            for (let i = 0; i < currentButtons.length; i++) {
                currentButtons[i].classList.remove(`enter${i+1}`);
                currentButtons[i].classList.add(`exit${i+1}`);
            }

            for (let i = 0; i < nextButtons.length; i++) {
                nextButtons[i].classList.add(`enter${i+1}`);
            }

            for (let i = 0; i < nextLines.length; i++) {
                nextLines[i].setAttribute("style", "display: block");
            }

            for (let i = 0; i < currentLines.length; i++) {
                currentLines[i].classList.remove(`line${i+1}q`);
                currentLines[i].classList.add(`linesexit`);
            }

            setTimeout(function () {
                currentquests.display = "none";

                for (let i = 0; i < nextLines.length; i++) {
                    nextLines[i].classList.add(`line${i+1}q`);
                }
            }, 500);

            setTimeout (function () {
                currentAnswers.style.display = "none";

                for (let i = 0; i < nextButtons.length; i++) {
                    nextButtons[i].classList.remove(`enter${i+1}`);
                    nextButtons[i].setAttribute("style", "opacity: 1");
                    preventspan.removeAttribute("style");
                }

                resolve();
            }, 2600);
        });
    });
}


/* Transição de perguntas tipo 1 para tipo 2. */

function configureTypeTwoQuestionTransition ({
    answerCorrect,
    futureAnswers,
    nextAnswers,
    currentAnswers,
    currentButtons,
    nextButtons,
    nextquests,
    nextLines,
    currentquests,
    currentLines
}) {
    return new Promise ( function (resolve) {
        answerCorrect.addEventListener("click", function() {
            nextAnswers.classList.add("answerstypetwo");
            nextquests.style.display = "block";
            preventspan.setAttribute("style", "display: block");
            arrow.setAttribute("style", "display:flex");
            arrow.classList.add("arrowAppear");
            let answersValue = Object.values(futureAnswers);
            setAnswersValues(answersValue);

            for (let i = 0; i < nextButtons.length; i++) {
                nextButtons[i].classList.add("buttonpadtypetwo");
            }

            nextButtons[0].setAttribute("style", "display: block");
            nextButtons[0].classList.add("toappear");

            for (let i = 0; i < currentButtons.length; i++) {
                currentButtons[i].classList.remove(`enter${i+1}`);
                currentButtons[i].classList.add(`exit${i+1}`);
            }

            for (let i = 0; i < nextLines.length; i++) {
                nextLines[i].setAttribute("style", "display: block");
            }

            for (let i = 0; i < currentLines.length; i++) {
                currentLines[i].classList.remove(`line${i+1}q`);
                currentLines[i].classList.add(`linesexit`);
            }

            setTimeout(function () {
                currentquests.display = "none";

                for (let i = 0; i < nextLines.length; i++) {
                    nextLines[i].classList.add(`line${i+1}q`);
                }
            }, 500);

            setTimeout (function () {
                currentAnswers.style.display = "none";
                nextButtons[0].classList.remove("toappear");
                nextButtons[0].classList.add("buttonOneVisible");
                preventspan.removeAttribute("style");

                for (let i = 0; i < nextButtons.length; i++) {
                    nextButtons[i].classList.add("buttonInvisible");
                }

                resolve();
            }, 2600);
        });
    });
}


/* Transição de perguntas tipo 2 para tipo 2. */

function configureTypeTwoTwoQuestionTransition ({
    answerCorrect,
    futureAnswers,
    nextAnswers,
    currentAnswers,
    currentButtons,
    nextButtons,
    nextquests,
    nextLines,
    currentquests,
    currentLines
}) {
    return new Promise ( function (resolve) {
        answerCorrect.addEventListener("click", function() {
            nextAnswers.classList.add("answerstypetwo");
            nextquests.style.display = "block";
            preventspan.setAttribute("style", "display: block");
            let answersValue = Object.values(futureAnswers);
            setAnswersValues(answersValue);
            setIndexImg(0);

            nextButtons[0].setAttribute("style", "display: block");
            nextButtons[0].classList.add("toappear");
            
            for (let i = 0; i < nextButtons.length; i++) {
                nextButtons[i].classList.add("buttonpadtypetwo");
            }

            currentButtons[0].classList.remove("buttonOneVisible");

            for (let i = 0; i < currentButtons.length; i++) {
                currentButtons[i].classList.add("todesappear");
            }

            for (let i = 0; i < lines.linesq2.length; i++) {
                nextLines[i].setAttribute("style", "display: block");
            }

            for (let i = 0; i < currentLines.length; i++) {
                currentLines[i].classList.remove(`line${i+1}q`);
                currentLines[i].classList.add(`linesexit`);
            }

            setTimeout(function () {
                currentquests.display = "none";
                
                for (let i = 0; i < nextLines.length; i++) {
                    nextLines[i].classList.add(`line${i+1}q`);
                }
            }, 500);

            setTimeout (function () {
                currentAnswers.style.display = "none";
                nextButtons[0].classList.add("buttonOneVisible");
                preventspan.removeAttribute("style");

                for (let i = 0; i < nextButtons.length; i++) {
                    nextButtons[i].classList.add("buttonInvisible");
                }

                resolve();
            }, 2600);
        });
    });
}


/* Transição de perguntas tipo 2 para tipo 1. */

function configureTypeTwoOneQuestionTransition ({
    answerCorrect,
    nextAnswers,
    currentAnswers,
    currentButtons,
    nextButtons,
    nextquests,
    nextLines,
    currentquests,
    currentLines
}) {
    return new Promise ( function (resolve) {
        answerCorrect.addEventListener("click", function() {
            nextAnswers.setAttribute("style", "display: flex");
            nextquests.style.display = "block";
            preventspan.setAttribute("style", "display: block");
            arrow.classList.remove("arrowAppear");
            arrow.classList.add("arrowDesappear");

            for (let i = 0; i < currentButtons.length; i++) {
                currentButtons[i].classList.remove("buttonOneVisible");
                currentButtons[i].classList.add("todesappear");
            }

            for (let i = 0; i < nextButtons.length; i++) {
                nextButtons[i].classList.add(`enter${i+1}`);
            }

            for (let i = 0; i < nextLines.length; i++) {
                nextLines[i].setAttribute("style", "display: block");
            }

            for (let i = 0; i < currentLines.length; i++) {
                currentLines[i].classList.remove(`line${i+1}q`);
                currentLines[i].classList.add(`linesexit`);
            }

            setTimeout(function () {
                currentquests.display = "none";
                
                for (let i = 0; i < nextLines.length; i++) {
                    nextLines[i].classList.add(`line${i+1}q`);
                }
            }, 500);

            setTimeout (function () {
                currentAnswers.style.display = "none";
                arrow.setAttribute("style", "display: none");

                for (let i = 0; i < nextButtons.length; i++) {
                    nextButtons[i].classList.remove(`enter${i+1}`);
                    nextButtons[i].setAttribute("style", "opacity: 1");
                    preventspan.removeAttribute("style");
                }

                resolve();
            }, 2600);
        });
    });
}