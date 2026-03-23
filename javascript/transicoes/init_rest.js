import { restart, preventspan, contanswer, contquest, arrow, startpad, end, lines, answers, buttonq } from "../variables.js";

export { forQuest1, forStart }


/* Função de iniciar o jogo */

async function forQuest1() {
    return new Promise(function (resolve) {
        startpad.addEventListener("click", function () {
            startpad.setAttribute("style", "animation: toDesappear 1.5s ease, borderAnimated  3s linear infinite; animation-fill-mode: forwards;")
            contanswer.setAttribute("style", "display: flex")
            preventspan.setAttribute("style", "display: block")

            setTimeout(function () {
                answers.answers1.setAttribute("style", "display: flex")
                contquest.setAttribute("style", "display: flex")
                contquest.classList.add("contquestAppear")

                for (let i = 0; i < lines.linesq1.length; i++) {
                    lines.linesq1[i].setAttribute("style", "display: block")
                }

                for (let i = 0; i < buttonq.buttonq1.length; i++) {
                    buttonq.buttonq1[i].classList.add(`enter${i + 1}`)
                }

                for (let i = 0; i < lines.linesq1.length; i++) {
                    lines.linesq1[i].classList.add(`line${i + 1}q`)
                }
            }, 1000)

            setTimeout(function () {
                for (let i = 0; i < buttonq.buttonq1.length; i++) {
                    buttonq.buttonq1[i].classList.remove(`enter${i + 1}`)
                    buttonq.buttonq1[i].setAttribute("style", "opacity: 1")
                    preventspan.setAttribute("style", "display: none")
                }
                resolve()
            }, 3500)
        })
    })
}


/* Função de voltar para o menu de iniciar. */

async function forStart() {
    return new Promise(function (resolve) {
        restart.addEventListener("click", function () {
            preventspan.setAttribute("style", "display: block")
            restart.classList.remove("toappear")
            restart.classList.add("todesappear")

            contanswer.setAttribute("style", "display: none")
            contquest.classList.remove("contquestDesappear")
            contquest.removeAttribute("style")
            arrow.classList.remove("arrowDesappear")

            Object.values(lines).forEach(group => group.forEach(linesq => { linesq.removeAttribute("style"), linesq.classList.remove("linesexit") }))
            Object.values(answers).forEach(answer => answer.removeAttribute("style"))
            Object.values(answers).forEach(answer => answer.classList.remove("answerstypetwo"))
            Object.values(buttonq).forEach(group => group.forEach(button => { button.removeAttribute("style"), button.classList.remove("enter1", "enter2", "enter3", "enter4", "exit1", "exit2", "exit3", "exit4", "todesappear", "toappear", "buttonInvisible") }))

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