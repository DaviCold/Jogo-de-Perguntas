import { continuar, padExposed, setNumberAsk, setAnswersValues, setIndexImg } from "../variables.js";

export { nextAskTypeOne, nextAskTypeTwo };


// Obs.: futureAnswers só contém nas funções que serão seguidas de perguntas tipo 2, porque são necessárias para seta.

function nextAskTypeOne({
    nextAnswers,
    nextButtons,
    nextquests,
    nextLines
}) {
    return new Promise ( function (resolve) {
        continuar.addEventListener("click", function() {
            padExposed.setAttribute("style", "animation: toDesappear 2.7s ease forwards, borderAnimated 3s linear infinite forwards; display: block;");
            contanswer.style.display = "flex";
            nextquests.style.display = "block";
            preventspan.setAttribute("style", "display: block");
            setNumberAsk();
            
            setTimeout(function(){
                nextAnswers.setAttribute("style", "display: flex");
                contquest.setAttribute("style", "display: flex");
                contquest.classList.remove("contquestDesappear");
                contquest.classList.add("contquestAppear");
                
                for (let i = 0; i < nextButtons.length; i++) {
                    nextButtons[i].classList.add(`enter${i+1}`);
                }
    
                for (let i = 0; i < nextLines.length; i++) {
                    nextLines[i].setAttribute("style", "display: block");
                    nextLines[i].classList.add(`line${i+1}q`);
                }

                setTimeout (function () {
                    padExposed.removeAttribute("style");
                    preventspan.removeAttribute("style");
    
                    for (let i = 0; i < nextButtons.length; i++) {
                        nextButtons[i].classList.remove(`enter${i+1}`);
                        nextButtons[i].setAttribute("style", "opacity: 1");
                    }
    
                    resolve();
                }, 2600);
            }, 1000);
        }, { once: true });
    });
}

function nextAskTypeTwo({
    futureAnswers,
    nextAnswers,
    nextButtons,
    nextquests,
    nextLines
}) {
    return new Promise ( function (resolve) {
        continuar.addEventListener("click", function() {
            padExposed.setAttribute("style", "animation: toDesappear 2.7s ease forwards, borderAnimated 3s linear infinite forwards; display: block;");
            contanswer.setAttribute("style", "display: flex;");
            arrow.setAttribute("style", "display:flex");
            arrow.classList.add("arrowAppear");
            nextquests.style.display = "block";
            nextAnswers.classList.add("answerstypetwo");
            preventspan.setAttribute("style", "display: block");
            let answersValue = Object.values(futureAnswers);
            setAnswersValues(answersValue);
            setIndexImg(0);
            setNumberAsk();

            for (let i = 0; i < nextButtons.length; i++) {
                nextButtons[i].classList.add("buttonpadtypetwo");
            }

            nextButtons[0].setAttribute("style", "display: block");
            nextButtons[0].classList.add("toappear");
            
            setTimeout(function(){
                nextAnswers.setAttribute("style", "display: flex");
                contquest.setAttribute("style", "display: flex;");
                contquest.classList.remove("contquestDesappear");
                contquest.classList.add("contquestAppear");
                
                for (let i = 0; i < nextLines.length; i++) {
                    nextLines[i].setAttribute("style", "display: block");
                    nextLines[i].classList.add(`line${i+1}q`);
                }

                setTimeout (function () {
                    padExposed.removeAttribute("style");
                    nextButtons[0].classList.remove("toappear");
                    nextButtons[0].classList.add("buttonOneVisible");
                    preventspan.removeAttribute("style");
    
                    for (let i = 0; i < nextButtons.length; i++) {
                        nextButtons[i].classList.add("buttonInvisible");
                    }
    
                    resolve();
                }, 2400);
            }, 1000);
        }, { once: true });
    });
}