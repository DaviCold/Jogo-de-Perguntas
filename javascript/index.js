const contquest = document.querySelector("#contquest")
const startpad = document.querySelector("#startpad")
const contanswer = document.querySelector("#contanswer")
const wrong = document.querySelector("#imgwrong")
const preventspan = document.querySelector("#preventspan")
const arrow = document.querySelector("#arrow")
const leftarrow = document.querySelector("#leftarrow")
const rightarrow = document.querySelector("#rightarrow")
const congratulations = document.querySelector("#congratulations")
const end = document.querySelector("#end")
const restart = document.querySelector("#restart")
export let answersValues = [];

const linesQuest = ["linesq1", "linesq2", "linesq3", "linesq4", "linesq5", "linesq6", "linesq7", "linesq8", "linesq9", "linesq10"]
const lines = Object.fromEntries(linesQuest.map(line => [line, document.querySelectorAll(`.${line}`)]))

const button = ["buttonq1", "buttonq2", "buttonq3", "buttonq4", "buttonq5", "buttonq6", "buttonq7", "buttonq8", "buttonq9", "buttonq10"]
const buttonq = Object.fromEntries(button.map(button => [button, document.querySelectorAll(`.${button}`)]))

const answersq = ["answers1", "answers2", "answers3", "answers4", "answers5", "answers6", "answers7", "answers8", "answers9", "answers10"]
const answers = Object.fromEntries(answersq.map(answer => [answer, document.getElementById(`${answer}`)]))

const answersq1 = ["answer11", "answer12", "answer13", "answer14"]
const answers1 = Object.fromEntries(answersq1.map(answerq1 => [answerq1, document.getElementById(`${answerq1}`)]))

const answersq2 = ["answer21", "answer22", "answer23", "answer24"]
const answers2 = Object.fromEntries(answersq2.map(answerq2 => [answerq2, document.getElementById(`${answerq2}`)]))

const answersq3 = ["answer31", "answer32", "answer33", "answer34"]
const answers3 = Object.fromEntries(answersq3.map(answerq3 => [answerq3, document.getElementById(`${answerq3}`)]))

const answersq4 = ["answer41", "answer42", "answer43", "answer44"]
const answers4 = Object.fromEntries(answersq4.map(answerq4 => [answerq4, document.getElementById(`${answerq4}`)]))

const answersq5 = ["answer51", "answer52", "answer53", "answer54"]
const answers5 = Object.fromEntries(answersq5.map(answerq5 => [answerq5, document.getElementById(`${answerq5}`)]))

const answersq6 = ["answer61", "answer62", "answer63", "answer64"]
const answers6 = Object.fromEntries(answersq6.map(answerq6 => [answerq6, document.getElementById(`${answerq6}`)]))

const answersq7 = ["answer71", "answer72", "answer73", "answer74"]
const answers7 = Object.fromEntries(answersq7.map(answerq7 => [answerq7, document.getElementById(`${answerq7}`)]))

const answersq8 = ["answer81", "answer82", "answer83", "answer84"]
const answers8 = Object.fromEntries(answersq8.map(answerq8 => [answerq8, document.getElementById(`${answerq8}`)]))

const answersq9 = ["answer91", "answer92", "answer93", "answer94"]
const answers9 = Object.fromEntries(answersq9.map(answerq9 => [answerq9, document.getElementById(`${answerq9}`)]))

const answersq10 = ["answer101", "answer102", "answer103", "answer104"]
const answers10 = Object.fromEntries(answersq10.map(answerq10 => [answerq10, document.getElementById(`${answerq10}`)]))

async function forQuest1() {
    return new Promise (function (resolve) {
        startpad.addEventListener("click", function() {
            startpad.setAttribute("style", "animation: toDesappear 1.5s ease, borderAnimated  3s linear infinite; animation-fill-mode: forwards;")
            contanswer.setAttribute("style", "display: flex")
            preventspan.setAttribute("style", "display: block")

            setTimeout (function () {
                answers.answers1.setAttribute("style", "display: flex")
                contquest.setAttribute("style", "display: flex")
                contquest.classList.add("contquestAppear")

                for (let i = 0; i < lines.linesq1.length; i++) {
                    lines.linesq1[i].setAttribute("style", "display: block")
                }

                for (let i = 0; i < buttonq.buttonq1.length; i++) {
                    buttonq.buttonq1[i].classList.add(`enter${i+1}`)
                }
                
                for (let i = 0; i < lines.linesq1.length; i++) {
                    lines.linesq1[i].classList.add(`line${i+1}q`)}
            }, 1000)
            
            setTimeout (function () {
                for (let i = 0; i < buttonq.buttonq1.length; i++) {
                    buttonq.buttonq1[i].classList.remove(`enter${i+1}`)
                    buttonq.buttonq1[i].setAttribute("style", "opacity: 1")
                    preventspan.setAttribute("style", "display: none")
                }
                resolve()
            }, 3500)
        })
    })
}

async function forEndTypeOne({
    answerCorrect,
    currentButtons,
}) {
    return new Promise ( function (resolve) {
        answerCorrect.addEventListener("click", function() {
            preventspan.setAttribute("style", "display: block")
            contquest.classList.add("contquestDesappear")

            for (let i = 0; i < currentButtons.length; i++) {
                currentButtons[i].classList.remove(`enter${i+1}`)
                currentButtons[i].classList.add(`exit${i+1}`)
            }

            setTimeout(() => {
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

async function forEndTypeTwo({
    answerCorrect,
    currentButtons,
}) {
    return new Promise ( function (resolve) {
        answerCorrect.addEventListener("click", function() {
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

async function forStart() {
    return new Promise( function(resolve) {
        restart.addEventListener("click", function () {
            preventspan.setAttribute("style", "display: block")
            restart.classList.remove("toappear")
            restart.classList.add("todesappear")

            contanswer.setAttribute("style", "display: none")
            contquest.classList.remove("contquestDesappear")
            contquest.removeAttribute("style")
            arrow.classList.remove("arrowDesappear")

            Object.values(lines).forEach(group => group.forEach(linesq => {linesq.removeAttribute("style"), linesq.classList.remove("linesexit")}))
            Object.values(answers).forEach(answer => answer.removeAttribute("style"))
            Object.values(buttonq).forEach(group => group.forEach(button => { button.removeAttribute("style"), button.classList.remove("enter1", "enter2", "enter3", "enter4", "exit1", "exit2", "exit3", "exit4", "todesappear", "toappear", "buttonInvisible")}))

            setTimeout(() => {
                startpad.setAttribute("style", "animation: toAppear 1.5s ease, borderAnimated  3s linear infinite; animation-fill-mode: forwards;")
                restart.classList.remove("todesappear")
                restart.removeAttribute("style")
                end.removeAttribute("style")              
                setTimeout(() => {
                    preventspan.removeAttribute("style")

                    resolve()
                }, 1500)
            }, 2600)
        }) 
    })
}

async function configureTypeOneQuestionTransition ({
    answerCorrect,
    nextAnswers,
    currentButtons,
    nextButtons,
    nextLines,
    currentLines
}) {
    return new Promise ( function (resolve) {
        answerCorrect.addEventListener("click", function() {
            nextAnswers.setAttribute("style", "display: flex")
            preventspan.setAttribute("style", "display: block")

            for (let i = 0; i < currentButtons.length; i++) {
                currentButtons[i].classList.remove(`enter${i+1}`)
                currentButtons[i].classList.add(`exit${i+1}`)
            }

            for (let i = 0; i < nextButtons.length; i++) {
                nextButtons[i].classList.add(`enter${i+1}`)
            }

            for (let i = 0; i < nextLines.length; i++) {
                nextLines[i].setAttribute("style", "display: block")
            }

            for (let i = 0; i < currentLines.length; i++) {
                currentLines[i].classList.remove(`line${i+1}q`)
                currentLines[i].classList.add(`linesexit`)
            }

            setTimeout(function () {
                for (let i = 0; i < nextLines.length; i++) {
                    nextLines[i].classList.add(`line${i+1}q`)
                }
            }, 500)

            setTimeout (function () {
                for (let i = 0; i < nextButtons.length; i++) {
                    nextButtons[i].classList.remove(`enter${i+1}`)
                    nextButtons[i].setAttribute("style", "opacity: 1")
                    preventspan.removeAttribute("style")
                }

                resolve()
            }, 2600)
        })
    })
}

async function configureTypeTwoQuestionTransition ({
    answerCorrect,
    futureAnswers,
    nextAnswers,
    currentButtons,
    nextButtons,
    nextLines,
    currentLines
}) {
    return new Promise ( function (resolve) {
        answerCorrect.addEventListener("click", function() {
            nextAnswers.classList.add("answerstypetwo")
            preventspan.setAttribute("style", "display: block")
            arrow.setAttribute("style", "display:flex")
            arrow.classList.add("arrowAppear")
            answersValues = Object.values(futureAnswers)

            for (let i = 0; i < nextButtons.length; i++) {
                nextButtons[i].classList.add("buttonpadtypetwo")
            }

            nextButtons[0].setAttribute("style", "display: block")
            nextButtons[0].classList.add("toappear")

            for (let i = 0; i < currentButtons.length; i++) {
                currentButtons[i].classList.remove(`enter${i+1}`)
                currentButtons[i].classList.add(`exit${i+1}`)
            }

            for (let i = 0; i < nextLines.length; i++) {
                nextLines[i].setAttribute("style", "display: block")
            }

            for (let i = 0; i < currentLines.length; i++) {
                currentLines[i].classList.remove(`line${i+1}q`)
                currentLines[i].classList.add(`linesexit`)
            }

            setTimeout(function () {
                for (let i = 0; i < nextLines.length; i++) {
                    nextLines[i].classList.add(`line${i+1}q`)
                }
            }, 500)

            setTimeout (function () {
                nextButtons[0].classList.remove("toappear")
                nextButtons[0].classList.add("buttonOneVisible")
                preventspan.removeAttribute("style")

                for (let i = 0; i < nextButtons.length; i++) {
                    nextButtons[i].classList.add("buttonInvisible")
                }

                resolve()
            }, 2600)
        })
    })
}

async function configureTypeTwoTwoQuestionTransition ({
    answerCorrect,
    futureAnswers,
    nextAnswers,
    currentButtons,
    nextButtons,
    nextLines,
    currentLines
}) {
    return new Promise ( function (resolve) {
        answerCorrect.addEventListener("click", function() {
            nextAnswers.classList.add("answerstypetwo")
            preventspan.setAttribute("style", "display: block")
            answersValues = Object.values(futureAnswers)
            indexImg = 0

            nextButtons[0].setAttribute("style", "display: block")
            nextButtons[0].classList.add("toappear")
            
            for (let i = 0; i < nextButtons.length; i++) {
                nextButtons[i].classList.add("buttonpadtypetwo")
            }

            currentButtons[0].classList.remove("buttonOneVisible")

            for (let i = 0; i < currentButtons.length; i++) {
                currentButtons[i].classList.add("todesappear")
            }

            for (let i = 0; i < lines.linesq2.length; i++) {
                nextLines[i].setAttribute("style", "display: block")
            }

            for (let i = 0; i < currentLines.length; i++) {
                currentLines[i].classList.remove(`line${i+1}q`)
                currentLines[i].classList.add(`linesexit`)
            }

            setTimeout(function () {
                for (let i = 0; i < nextLines.length; i++) {
                    nextLines[i].classList.add(`line${i+1}q`)
                }
            }, 500)

            setTimeout (function () {
                currentButtons[0].setAttribute("style", "display: none")
                nextButtons[0].classList.add("buttonOneVisible")
                preventspan.removeAttribute("style")

                for (let i = 0; i < nextButtons.length; i++) {
                    nextButtons[i].classList.add("buttonInvisible")
                }

                resolve()
            }, 2600)
        })
    })
}

async function configureTypeTwoOneQuestionTransition ({
    answerCorrect,
    nextAnswers,
    currentButtons,
    nextButtons,
    nextLines,
    currentLines
}) {
    return new Promise ( function (resolve) {
        answerCorrect.addEventListener("click", function() {
            nextAnswers.setAttribute("style", "display: flex")
            preventspan.setAttribute("style", "display: block")
            arrow.classList.remove("arrowAppear")
            arrow.classList.add("arrowDesappear")

            for (let i = 0; i < currentButtons.length; i++) {
                currentButtons[i].classList.remove("buttonOneVisible")
                currentButtons[i].classList.add("todesappear")
            }

            for (let i = 0; i < nextButtons.length; i++) {
                nextButtons[i].classList.add(`enter${i+1}`)
            }

            for (let i = 0; i < nextLines.length; i++) {
                nextLines[i].setAttribute("style", "display: block")
            }

            for (let i = 0; i < currentLines.length; i++) {
                currentLines[i].classList.remove(`line${i+1}q`)
                currentLines[i].classList.add(`linesexit`)
            }

            setTimeout(function () {
                for (let i = 0; i < nextLines.length; i++) {
                    nextLines[i].classList.add(`line${i+1}q`)
                }
            }, 500)

            setTimeout (function () {
                arrow.setAttribute("style", "display: none")
                for (let i = 0; i < nextButtons.length; i++) {
                    nextButtons[i].classList.remove(`enter${i+1}`)
                    nextButtons[i].setAttribute("style", "opacity: 1")
                    preventspan.removeAttribute("style")
                }

                resolve()
            }, 2600)
        })
    })
}

let indexImg = 0;
function setIndexImg (index) {
    indexImg = index
}
function getIndexImg() {
  return indexImg;
}

let isAnimating = false;
function setIsAnimating (isAnimat) {
    isAnimating = isAnimat
}
function getIsAnimating (getIsAnimat) {
    return isAnimating;
}

export {setIndexImg, getIndexImg, setIsAnimating, getIsAnimating}
import leftArrow from "./setas/esquerda.js";
import rightArrow from "./setas/direita.js";

async function forQuest2() {
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

async function forQuest3() {
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

async function forQuest4() {
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

async function forQuest5() {
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

async function forQuest6() {
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

async function forQuest7() {
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

async function forQuest8() {
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

async function forQuest9() {
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

async function forQuest10() {
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

async function forFinish() {
    return forEndTypeOne({
        answerCorrect: answers10.answer102,
        currentButtons: buttonq.buttonq10
    })
}

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
    await forStart();
}

wait()

function answerWrong() {
    wrong.setAttribute("style", "animation: wrongAnimate 0.8s ease; animation-fill-mode: forwards;")
    preventspan.setAttribute("style", "display: block")
    
    setTimeout(() => {
        wrong.setAttribute("style", "animation: wrongAnimated 0.8s ease; animation-fill-mode: forwards;")
        setTimeout(() => {
            preventspan.removeAttribute("style")
        }, 700)
    }, 1600)
}

function clickWrong({
    answers,
    answersCorrect
}) {
    Object.values(answers).forEach(answer => {
        if (answer !== answersCorrect) {
            answer.addEventListener("click", answerWrong)
        }
    })
}

async function fixedQuest1() {
    return clickWrong({
        answers: answers1,
        answersCorrect: answer13
    })
}

async function fixedQuest2() {
    return clickWrong({
        answers: answers2,
        answersCorrect: answer24
    })
}

async function fixedQuest3() {
    return clickWrong({
        answers: answers3,
        answersCorrect: answer31
    })
}

async function fixedQuest4() {
    return clickWrong({
        answers: answers4,
        answersCorrect: answer43
    })
}

async function fixedQuest5() {
    return clickWrong({
        answers: answers5,
        answersCorrect: answer52
    })
}

async function fixedQuest6() {
    return clickWrong({
        answers: answers6,
        answersCorrect: answer64
    })
}

async function fixedQuest7() {
    return clickWrong({
        answers: answers7,
        answersCorrect: answer71
    })
}

async function fixedQuest8() {
    return clickWrong({
        answers: answers8,
        answersCorrect: answer81
    })
}

async function fixedQuest9() {
    return clickWrong({
        answers: answers9,
        answersCorrect: answer94
    })
}

async function fixedQuest10() {
    return clickWrong({
        answers: answers10,
        answersCorrect: answer102
    })
}

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

clickedWrong()