import { setIndexImg, indexImg, setIsAnimating, isAnimating, answersValues } from "../variables.js"

async function rightArrow() {
    rightarrow.addEventListener("click", () => {
        if (isAnimating) {return}
        setIsAnimating(true)
        preventspan.setAttribute("style", "display: block")

        let previousIndex = indexImg
        let indexImgC = (previousIndex + 1) % answersValues.length
        setIndexImg(indexImgC)
        
        answersValues[indexImgC].setAttribute("style", "display: block");
        answersValues[previousIndex].classList.add("rightdisable");
        answersValues[indexImgC].classList.add("rightactive")

        setTimeout(() => {
            answersValues[previousIndex].classList.remove("rightdisable");
            answersValues[indexImgC].classList.remove("rightactive");
            answersValues[previousIndex].removeAttribute("style");
            answersValues[indexImgC].setAttribute("style", "display: block");
            preventspan.removeAttribute("style");
            setIsAnimating(false)
        }, 1500)
    })
}

export default rightArrow;