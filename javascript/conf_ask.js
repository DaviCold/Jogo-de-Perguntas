import leftArrow from "./setas/esquerda.js";
import rightArrow from "./setas/direita.js";
import { answers, answers1, answers2, answers3, answers4, answers5, answers6, answers7, answers8, answers9, answers10, buttonq, lines } from "./variables.js";
import { forQuest1, forMenu } from "./transicoes/init_rest.js";
import { forEndTypeOne } from "./transicoes/last_ask.js";
import {
    configureTypeOneQuestionTransition, 
    configureTypeTwoQuestionTransition, 
    configureTypeTwoTwoQuestionTransition, 
    configureTypeTwoOneQuestionTransition
} from "./transicoes/perguntas.js";

export { wait }


/* 
Configure: (do ponto de vista da pergunta de onde você está)
    a resposta correta,
    as próximas respostas (estas estão separadas por ID),
    a caixa com as próximas respostas,
    as resposta atuais (estão conectadas por uma classe),
    as respostas da próxima pergunta (estão conectadas por uma classe),
    as próximas linhas da caixa de pergunta
    e as linhas da caixa da pergunta atual. 

Obs.: usar .then após a transição chamando as funções das dduas setas. Server para o evento de click das setas só ser disponibilizado depois da animação. (Como uma parede invisível "aparece / display:block", impedindo o clicar nas setas, não faz muita diferença. Mas é uma segunda forma de impedir de clicar nas setas)
*/

function forQuest2() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers1.answer13,
        futureAnswers: answers2,
        nextAnswers: answers.answers2,
        currentButtons: buttonq.buttonq1,
        nextButtons: buttonq.buttonq2,
        nextLines: lines.linesq2,
        currentLines: lines.linesq1
    })
}

function forQuest3() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers2.answer24,
        futureAnswers: answers3,
        nextAnswers: answers.answers3,
        currentButtons: buttonq.buttonq2,
        nextButtons: buttonq.buttonq3,
        nextLines: lines.linesq3,
        currentLines: lines.linesq2
    })
}

function forQuest4() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers3.answer31,
        futureAnswers: answers4,
        nextAnswers: answers.answers4,
        currentButtons: buttonq.buttonq3,
        nextButtons: buttonq.buttonq4,
        nextLines: lines.linesq4,
        currentLines: lines.linesq3
    })
}

function forQuest5() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers4.answer43,
        futureAnswers: answers5,
        nextAnswers: answers.answers5,
        currentButtons: buttonq.buttonq4,
        nextButtons: buttonq.buttonq5,
        nextLines: lines.linesq5,
        currentLines: lines.linesq4
    })
}

function forQuest6() {
    return configureTypeTwoQuestionTransition({
        answerCorrect: answers5.answer52,
        futureAnswers: answers6,
        nextAnswers: answers.answers6,
        currentButtons: buttonq.buttonq5,
        nextButtons: buttonq.buttonq6,
        nextLines: lines.linesq6,
        currentLines: lines.linesq5
    }).then(() => {
        leftArrow();
        rightArrow();
    })
}

function forQuest7() {
    return configureTypeTwoTwoQuestionTransition({
        answerCorrect: answers6.answer64,
        futureAnswers: answers7,
        nextAnswers: answers.answers7,
        currentButtons: buttonq.buttonq6,
        nextButtons: buttonq.buttonq7,
        nextLines: lines.linesq7,
        currentLines: lines.linesq6
    }).then(() => {
        leftArrow();
        rightArrow();
    })
}

function forQuest8() {
    return configureTypeTwoOneQuestionTransition({
        answerCorrect: answers7.answer71,
        futureAnswers: answers8,
        nextAnswers: answers.answers8,
        currentButtons: buttonq.buttonq7,
        nextButtons: buttonq.buttonq8,
        nextLines: lines.linesq8,
        currentLines: lines.linesq7
    })
}

function forQuest9() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers8.answer81,
        futureAnswers: answers9,
        nextAnswers: answers.answers9,
        currentButtons: buttonq.buttonq8,
        nextButtons: buttonq.buttonq9,
        nextLines: lines.linesq9,
        currentLines: lines.linesq8
    })
}

function forQuest10() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers9.answer94,
        futureAnswers: answers10,
        nextAnswers: answers.answers10,
        currentButtons: buttonq.buttonq9,
        nextButtons: buttonq.buttonq10,
        nextLines: lines.linesq10,
        currentLines: lines.linesq9
    })
}

function forFinish() {
    return forEndTypeOne({
        answerCorrect: answers10.answer102,
        currentButtons: buttonq.buttonq10
    })
}


/* 
Na função abaixo os await(s) não fazem diferença, porque são funções que adicionam eventos de clicks para os botões usando as variáveis entregues. Como os botões só aparecem para clique quando "display = block" e só um por vez tem esse valor, então é obrigatório clicar no anterior para o proximo aparecer. 

Conclusão: Await na função abaixo, no atual momento não faz diferença. (23/03/2026)
*/

async function wait() {
    await forQuest1();
    await forQuest2();
    await forQuest3();
    await forQuest4();
    await forQuest5();
    await forQuest6();
    await forQuest7();
    await forQuest8();
    await forQuest9();
    await forQuest10();
    await forFinish();
    await forMenu();
}