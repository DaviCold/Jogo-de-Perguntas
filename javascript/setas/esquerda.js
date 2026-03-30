import { setIndexImg, indexImg, setIsAnimating, isAnimating, answersValues } from "../variables.js"

async function leftArrow() {
    leftarrow.addEventListener("click", () => {
        if (isAnimating) {return}
        setIsAnimating(true)
        preventspan.setAttribute("style", "display: block")

        let previousIndex = indexImg
        let indexImgC = (previousIndex - 1 + answersValues.length) % answersValues.length
        setIndexImg(indexImgC)

        answersValues[indexImgC].setAttribute("style", "display: block");
        answersValues[previousIndex].classList.add("leftdisable");
        answersValues[indexImgC].classList.add("leftactive")

        setTimeout(() => {
            answersValues[previousIndex].classList.remove("leftdisable");
            answersValues[indexImgC].classList.remove("leftactive");
            answersValues[previousIndex].removeAttribute("style");
            answersValues[indexImgC].setAttribute("style", "display: block")
            preventspan.removeAttribute("style")
            setIsAnimating(false)
        }, 1500)
    })
}

export default leftArrow;