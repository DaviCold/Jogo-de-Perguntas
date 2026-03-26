import leftArrow from "./setas/esquerda.js";
import rightArrow from "./setas/direita.js";
import { answers, answers1, answers2, answers3, answers4, answers5, answers6, answers7, answers8, answers9, answers10, buttonq, quests, lines } from "./variables.js";
import { forQuest1, forMenu } from "./transicoes/init_rest.js";
import { forEndTypeOne } from "./transicoes/last_ask.js";
import {
    configureTypeOneQuestionTransition, 
    configureTypeTwoQuestionTransition, 
    configureTypeTwoTwoQuestionTransition, 
    configureTypeTwoOneQuestionTransition
} from "./transicoes/perguntas.js";

export { wait };


/* 

Configure: (do ponto de vista da pergunta de onde você está)
    a resposta correta,
    as próximas respostas (estas estão separadas por ID),
    a caixa com as próximas respostas,
    a caixa com as atuais respostas,
    as resposta atuais (estão conectadas por uma classe),
    as respostas da próxima pergunta (estão conectadas por uma classe),
    as caixa de linhas da próxima pergunta (caixa dentro do container de perguntas),
    as próximas linhas da caixa de pergunta,
    as caixa de linhas da pergunta atual (caixa dentro do container de perguntas), 
    e as linhas da caixa da pergunta atual. 

Obs.1: usar .then após a transição chamando as funções das dduas setas. Server para o evento de click das setas só ser disponibilizado depois da animação. (Como uma parede invisível "aparece / display:block", impedindo o clicar nas setas, não faz muita diferença. Mas é uma segunda forma de impedir de clicar nas setas)

Obs.2: as chaves futureAnswers são somente para questões que vão para o tipo 2. No caso coloquei nas do tipo 1 para caso futuramente eu queira mudar para o tipo 2, facilitando o processo, assim, eu só precisarei mudar o nome da função.

*/

function forQuest2() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers1.answer13,
        futureAnswers: answers2,
        nextAnswers: answers.answers2,
        currentAnswers: answers.answers1,
        currentButtons: buttonq.buttonq1,
        nextButtons: buttonq.buttonq2,
        nextquests: quests.quest2,
        nextLines: lines.linesq2,
        currentquests: quests.quest1,
        currentLines: lines.linesq1
    });
}

function forQuest3() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers2.answer24,
        futureAnswers: answers3,
        nextAnswers: answers.answers3,
        currentAnswers: answers.answers2,
        currentButtons: buttonq.buttonq2,
        nextButtons: buttonq.buttonq3,
        nextquests: quests.quest3,
        nextLines: lines.linesq3,
        currentquests: quests.quest2,
        currentLines: lines.linesq2
    });
}

function forQuest4() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers3.answer31,
        futureAnswers: answers4,
        nextAnswers: answers.answers4,
        currentAnswers: answers.answers3,
        currentButtons: buttonq.buttonq3,
        nextButtons: buttonq.buttonq4,
        nextquests: quests.quest4,
        nextLines: lines.linesq4,
        currentquests: quests.quest3,
        currentLines: lines.linesq3
    });
}

function forQuest5() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers4.answer43,
        futureAnswers: answers5,
        nextAnswers: answers.answers5,
        currentAnswers: answers.answers4,
        currentButtons: buttonq.buttonq4,
        nextButtons: buttonq.buttonq5,
        nextquests: quests.quest5,
        nextLines: lines.linesq5,
        currentquests: quests.quest4,
        currentLines: lines.linesq4
    });
}

function forQuest6() {
    return configureTypeTwoQuestionTransition({
        answerCorrect: answers5.answer52,
        futureAnswers: answers6,
        nextAnswers: answers.answers6,
        currentAnswers: answers.answers5,
        currentButtons: buttonq.buttonq5,
        nextButtons: buttonq.buttonq6,
        nextquests: quests.quest6,
        nextLines: lines.linesq6,
        currentquests: quests.quest5,
        currentLines: lines.linesq5
    }).then(() => {
        leftArrow();
        rightArrow();
    });
}

function forQuest7() {
    return configureTypeTwoTwoQuestionTransition({
        answerCorrect: answers6.answer64,
        futureAnswers: answers7,
        nextAnswers: answers.answers7,
        currentAnswers: answers.answers6,
        currentButtons: buttonq.buttonq6,
        nextButtons: buttonq.buttonq7,
        nextquests: quests.quest7,
        nextLines: lines.linesq7,
        currentquests: quests.quest6,
        currentLines: lines.linesq6
    }).then(() => {
        leftArrow();
        rightArrow();
    });
}

function forQuest8() {
    return configureTypeTwoOneQuestionTransition({
        answerCorrect: answers7.answer71,
        futureAnswers: answers8,
        nextAnswers: answers.answers8,
        currentAnswers: answers.answers7,
        currentButtons: buttonq.buttonq7,
        nextButtons: buttonq.buttonq8,
        nextquests: quests.quest8,
        nextLines: lines.linesq8,
        currentquests: quests.quest7,
        currentLines: lines.linesq7
    });
}

function forQuest9() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers8.answer81,
        futureAnswers: answers9,
        nextAnswers: answers.answers9,
        currentAnswers: answers.answers8,
        currentButtons: buttonq.buttonq8,
        nextButtons: buttonq.buttonq9,
        nextquests: quests.quest9,
        nextLines: lines.linesq9,
        currentquests: quests.quest8,
        currentLines: lines.linesq8
    });
}

function forQuest10() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers9.answer94,
        futureAnswers: answers10,
        nextAnswers: answers.answers10,
        currentAnswers: answers.answers9,
        currentButtons: buttonq.buttonq9,
        nextButtons: buttonq.buttonq10,
        nextquests: quests.quest10,
        nextLines: lines.linesq10,
        currentquests: quests.quest9,
        currentLines: lines.linesq9
    });
}

function forFinish() {
    return forEndTypeOne({
        answerCorrect: answers10.answer102,
        currentButtons: buttonq.buttonq10,
        currentAnswers: answers.answers10,
        currentquests: quests.quest10
    });
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