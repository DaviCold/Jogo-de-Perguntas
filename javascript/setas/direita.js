import { answersValues, setIndexImg, getIndexImg, setIsAnimating, getIsAnimating} from "../index.js"

async function rightArrow() {
    rightarrow.addEventListener("click", () => {
        if (isAnimating) {return}
        isAnimating = true

        let previousIndex = indexImg
        indexImg = (indexImg + 1) % answersValues.length
        
        answersValues[indexImg].setAttribute("style", "display: block");
        answersValues[previousIndex].classList.add("rightdisable");
        answersValues[indexImg].classList.add("rightactive")

        setTimeout(() => {
            answersValues[previousIndex].classList.remove("rightdisable");
            answersValues[indexImg].classList.remove("rightactive");
            answersValues[previousIndex].setAttribute("style", "display: none");
            answersValues[indexImg].setAttribute("style", "display: block")
            isAnimating = false
        }, 1500)
    })
}

export default rightArrow;