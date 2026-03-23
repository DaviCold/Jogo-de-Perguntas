import { wrong, preventspan, answers1, answers2, answers3, answers4, answers5, answers6, answers7, answers8, answers9, answers10 } from "./variables.js";

export { answerWrong, clickedWrong }


/* Inicia a animação de incorreta caso click na resposta errada. */

function answerWrong() {
    wrong.setAttribute("style", "animation: wrongAnimate 0.8s ease; animation-fill-mode: forwards;");
    preventspan.setAttribute("style", "display: block");

    setTimeout(() => {
        wrong.setAttribute("style", "animation: wrongAnimated 0.8s ease; animation-fill-mode: forwards;");
        setTimeout(() => {
            preventspan.removeAttribute("style");
        }, 700);
    }, 1600);
}


/* Adiciona o evento de click nas respostas incorretas. */

function clickWrong({
    answers, answersCorrect
}) {
    Object.values(answers).forEach(answer => {
        if (answer !== answersCorrect) {
            answer.addEventListener("click", answerWrong)
        }
    })
}


/* Decida as caixas que ganharam a animação de respota incorreta. */

function fixedQuest1() {
    return clickWrong({
        answers: answers1,
        answersCorrect: answers1.answer13
    })
}

function fixedQuest2() {
    return clickWrong({
        answers: answers2,
        answersCorrect: answers2.answer24
    })
}

function fixedQuest3() {
    return clickWrong({
        answers: answers3,
        answersCorrect: answers3.answer31
    })
}

function fixedQuest4() {
    return clickWrong({
        answers: answers4,
        answersCorrect: answers4.answer43
    })
}

function fixedQuest5() {
    return clickWrong({
        answers: answers5,
        answersCorrect: answers5.answer52
    })
}

function fixedQuest6() {
    return clickWrong({
        answers: answers6,
        answersCorrect: answers6.answer64
    })
}

function fixedQuest7() {
    return clickWrong({
        answers: answers7,
        answersCorrect: answers7.answer71
    })
}

function fixedQuest8() {
    return clickWrong({
        answers: answers8,
        answersCorrect: answers8.answer81
    })
}

function fixedQuest9() {
    return clickWrong({
        answers: answers9,
        answersCorrect: answers9.answer94
    })
}

function fixedQuest10() {
    return clickWrong({
        answers: answers10,
        answersCorrect: answers10.answer102
    })
}

/*
Na função abaixo os await(s) não fazem diferença, porque são funções que adicionam eventos de clicks para os botões usando as variáveis entregues. Como os botões só aparecem para clique quando "display = block" e só um por vez tem esse valor, então é obrigatório clicar no anterior para o proximo aparecer.

Conclusão: Await na função abaixo, no atual momento não faz diferença. (23/03/2026)
*/

async function clickedWrong() {
    await fixedQuest1();
    await fixedQuest2();
    await fixedQuest3();
    await fixedQuest4();
    await fixedQuest5();
    await fixedQuest6();
    await fixedQuest7();
    await fixedQuest8();
    await fixedQuest9();
    await fixedQuest10();
}
