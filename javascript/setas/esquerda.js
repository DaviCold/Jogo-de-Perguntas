import { answersValues } from "../index.js"
import { indexImg } from "../index.js"
import { isAnimating } from "../index.js"

async function leftArrow() {
    leftarrow.addEventListener("click", () => {
        if (isAnimating) {return}
        isAnimating = true
        preventspan.setAttribute("style", "display: block")

        let previousIndex = indexImg
        indexImg = (indexImg - 1 + answersValues.length) % answersValues.length

        answersValues[indexImg].setAttribute("style", "display: block");
        answersValues[previousIndex].classList.add("leftdisable");
        answersValues[indexImg].classList.add("leftactive")

        setTimeout(() => {
            answersValues[previousIndex].classList.remove("leftdisable");
            answersValues[indexImg].classList.remove("leftactive");
            answersValues[previousIndex].setAttribute("style", "display: none");
            answersValues[indexImg].setAttribute("style", "display: block")
            preventspan.removeAttribute("style")
            isAnimating = false
        }, 1500)
    })
}

export default leftArrow;