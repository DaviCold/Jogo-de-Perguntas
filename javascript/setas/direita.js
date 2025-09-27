import { answersValues, setIndexImg, getIndexImg, setIsAnimating, getIsAnimating} from "../index.js"

async function rightArrow() {
    rightarrow.addEventListener("click", () => {
        if (getIsAnimating()) {return}
        setIsAnimating(true)
        preventspan.setAttribute("style", "display: block")

        let previousIndex = getIndexImg()
        let indexImg = (previousIndex + 1) % answersValues.length
        setIndexImg(indexImg)
        
        answersValues[indexImg].setAttribute("style", "display: block");
        answersValues[previousIndex].classList.add("rightdisable");
        answersValues[indexImg].classList.add("rightactive")

        setTimeout(() => {
            answersValues[previousIndex].classList.remove("rightdisable");
            answersValues[indexImg].classList.remove("rightactive");
            answersValues[previousIndex].setAttribute("style", "display: none");
            answersValues[indexImg].setAttribute("style", "display: block");
            preventspan.removeAttribute("style");
            setIsAnimating(false)
        }, 1500)
    })
}

export default rightArrow;