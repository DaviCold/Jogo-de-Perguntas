/* Variáveis --> Modelo de Objeto de Documento (DOM) / Sem necessidade de funções de set/alterador, porque são variáveis estáticcas. */

export { contquest, startpad, menu, contanswer, wrong, preventspan, arrow, congratulations, end, restart, lines, buttonq, answers, answers1, answers2, answers3, answers4, answers5, answers6, answers7, answers8, answers9, answers10}

const contquest = document.querySelector("#contquest");
const startpad = document.querySelector("#startpad");
const menu = document.querySelector("#menu");
const contanswer = document.querySelector("#contanswer");
const wrong = document.querySelector("#imgwrong");
const preventspan = document.querySelector("#preventspan");
const arrow = document.querySelector("#arrow");
const congratulations = document.querySelector("#congratulations");
const end = document.querySelector("#end");
const restart = document.querySelector("#restart");

const linesQuest = ["linesq1", "linesq2", "linesq3", "linesq4", "linesq5", "linesq6", "linesq7", "linesq8", "linesq9", "linesq10"];
const lines = Object.fromEntries(linesQuest.map(line => [line, document.querySelectorAll(`.${line}`)]));

const button = ["buttonq1", "buttonq2", "buttonq3", "buttonq4", "buttonq5", "buttonq6", "buttonq7", "buttonq8", "buttonq9", "buttonq10"];
const buttonq = Object.fromEntries(button.map(button => [button, document.querySelectorAll(`.${button}`)]));

const answersq = ["answers1", "answers2", "answers3", "answers4", "answers5", "answers6", "answers7", "answers8", "answers9", "answers10"];
const answers = Object.fromEntries(answersq.map(answer => [answer, document.getElementById(`${answer}`)]));

const answersq1 = ["answer11", "answer12", "answer13", "answer14"];
const answers1 = Object.fromEntries(answersq1.map(answerq1 => [answerq1, document.getElementById(`${answerq1}`)]));

const answersq2 = ["answer21", "answer22", "answer23", "answer24"];
const answers2 = Object.fromEntries(answersq2.map(answerq2 => [answerq2, document.getElementById(`${answerq2}`)]));

const answersq3 = ["answer31", "answer32", "answer33", "answer34"];
const answers3 = Object.fromEntries(answersq3.map(answerq3 => [answerq3, document.getElementById(`${answerq3}`)]));

const answersq4 = ["answer41", "answer42", "answer43", "answer44"];
const answers4 = Object.fromEntries(answersq4.map(answerq4 => [answerq4, document.getElementById(`${answerq4}`)]));

const answersq5 = ["answer51", "answer52", "answer53", "answer54"];
const answers5 = Object.fromEntries(answersq5.map(answerq5 => [answerq5, document.getElementById(`${answerq5}`)]));

const answersq6 = ["answer61", "answer62", "answer63", "answer64"];
const answers6 = Object.fromEntries(answersq6.map(answerq6 => [answerq6, document.getElementById(`${answerq6}`)]));

const answersq7 = ["answer71", "answer72", "answer73", "answer74"];
const answers7 = Object.fromEntries(answersq7.map(answerq7 => [answerq7, document.getElementById(`${answerq7}`)]));

const answersq8 = ["answer81", "answer82", "answer83", "answer84"];
const answers8 = Object.fromEntries(answersq8.map(answerq8 => [answerq8, document.getElementById(`${answerq8}`)]));

const answersq9 = ["answer91", "answer92", "answer93", "answer94"];
const answers9 = Object.fromEntries(answersq9.map(answerq9 => [answerq9, document.getElementById(`${answerq9}`)]));

const answersq10 = ["answer101", "answer102", "answer103", "answer104"];
const answers10 = Object.fromEntries(answersq10.map(answerq10 => [answerq10, document.getElementById(`${answerq10}`)]));


/* Variáveis --> Modelo de Objeto de Documento (DOM) / Necessidade de funções de set/alterador, porque são variáveis dinâmicas. */

export {setIndexImg, indexImg, setIsAnimating, isAnimating, setAnswersValues, answersValues }

// O código abaixo exporta funções com valores e tem finalidade para dizer quando as caixas de respostas estão em animação e em qual das caixas estão (index). No final ele importa as funções das setas prontas.

let indexImg = 0;
function setIndexImg(index) {
    indexImg = index;
}

let isAnimating = false;
function setIsAnimating(isAnimat) {
    isAnimating = isAnimat;
}

let answersValues = [];
function setAnswersValues(answersValue) {
    answersValues = answersValue;
}
