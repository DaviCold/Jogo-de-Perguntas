import { restart, preventspan, contanswer, contquest, arrow, startpad, menu, end, quests, lines, answers, buttonq, setNumberAsk } from "../variables.js";

export { forQuest1, forMenu };


/* Função de iniciar o jogo */

async function forQuest1() {
    return new Promise(function (resolve) {
        startpad.addEventListener("click", function () {
            menu.setAttribute("style", "animation: toDesappear 1.5s ease forwards;");
            contanswer.setAttribute("style", "display: flex");
            preventspan.setAttribute("style", "display: block");
            setNumberAsk();
            
            setTimeout(function () {
                answers.answers1.setAttribute("style", "display: flex");
                quests.quest1.style.display = "block";
                contquest.setAttribute("style", "display: flex");
                contquest.classList.add("contquestAppear");

                for (let i = 0; i < lines.linesq1.length; i++) {
                    lines.linesq1[i].setAttribute("style", "display: block");
                }

                for (let i = 0; i < buttonq.buttonq1.length; i++) {
                    buttonq.buttonq1[i].classList.add(`enter${i + 1}`);
                }

                for (let i = 0; i < lines.linesq1.length; i++) {
                    lines.linesq1[i].classList.add(`line${i + 1}q`);
                }
            }, 1000);

            setTimeout(function () {
                for (let i = 0; i < buttonq.buttonq1.length; i++) {
                    buttonq.buttonq1[i].classList.remove(`enter${i + 1}`);
                    buttonq.buttonq1[i].setAttribute("style", "opacity: 1");
                    menu.style.display = "none";
                    preventspan.setAttribute("style", "display: none");
                }
                resolve();
            }, 3500);;
        });
    });
}


/* Função de voltar para o menu. */

async function forMenu() {
    return new Promise(function (resolve) {
        restart.addEventListener("click", function () {
            preventspan.setAttribute("style", "display: block");
            restart.classList.remove("toappear");
            restart.classList.add("todesappear");
            menu.style.display = "flex";

            contanswer.setAttribute("style", "display: none");
            contquest.classList.remove("contquestDesappear");
            contquest.removeAttribute("style");
            arrow.classList.remove("arrowDesappear");

            Object.values(lines).forEach(group => group.forEach(linesq => { linesq.removeAttribute("style"), linesq.classList.remove("linesexit") }));
            Object.values(answers).forEach(answer => answer.removeAttribute("style"));
            Object.values(answers).forEach(answer => answer.classList.remove("answerstypetwo"));
            Object.values(buttonq).forEach(group => group.forEach(button => { button.removeAttribute("style"), button.classList.remove("enter1", "enter2", "enter3", "enter4", "exit1", "exit2", "exit3", "exit4", "todesappear", "toappear", "buttonInvisible") }));

            setTimeout(() => {
                menu.setAttribute("style", "animation: toAppear 1.5s ease forwards;");
                restart.classList.remove("todesappear");
                restart.removeAttribute("style");
                end.removeAttribute("style");
                setTimeout(() => {
                    preventspan.removeAttribute("style");

                    resolve();
                }, 1500);
            }, 2600);
        });
    });
}