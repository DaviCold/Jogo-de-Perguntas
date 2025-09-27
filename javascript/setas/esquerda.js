import { answersValues, setIndexImg, getIndexImg, setIsAnimating, getIsAnimating} from "../index.js"

async function leftArrow() {
    leftarrow.addEventListener("click", () => {
        if (getIsAnimating()) {return}
        setIsAnimating(true)
        preventspan.setAttribute("style", "display: block")

        let previousIndex = getIndexImg()
        let indexImg = (previousIndex - 1 + answersValues.length) % answersValues.length
        setIndexImg(indexImg)

        answersValues[indexImg].setAttribute("style", "display: block");
        answersValues[previousIndex].classList.add("leftdisable");
        answersValues[indexImg].classList.add("leftactive")

        setTimeout(() => {
            answersValues[previousIndex].classList.remove("leftdisable");
            answersValues[indexImg].classList.remove("leftactive");
            answersValues[previousIndex].setAttribute("style", "display: none");
            answersValues[indexImg].setAttribute("style", "display: block")
            preventspan.removeAttribute("style")
            setIsAnimating(false)
        }, 1500)
    })
}

export default leftArrow;