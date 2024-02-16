import { createContext, useContext, useEffect, useState } from "react";
import { images } from "./constants";
import { random, randomColor, randomNumber } from "./utils/utils";


const AppContext = createContext(null)

export function AppContextProvider({ children }) {

    const [cards, setCards] = useState(new Array(9).fill({
        isVisible: true,
        backgroundClr: ""
    }))
    const [moveCount, setMoveCount] = useState(0)
    const [isLimit, setIsLimit] = useState(false)

    const [selectedImg, setSelectedImg] = useState("")
    const [answer, setAnswer] = useState("")
    const [runUseEffect, setRunUseEffect] = useState(false)

    useEffect(() => {
        const newArray = cards.map(card => {
            return {
                ...card,
                backgroundClr: randomColor()
            }
        })
        setCards(newArray)

        handleRandomImg()
    }, [])

    useEffect(() => {
        if (runUseEffect) {
            handleWinCheck()
            setRunUseEffect(false)
        }
    }, [runUseEffect])

    useEffect(() => {
        if (moveCount == 3) {
            setIsLimit(true)
        }
    }, [moveCount])

    const handleRandomImg = () => {
        setSelectedImg(images[randomNumber()])
    }

    const handleReset = () => {
        handleRandomImg()
        setAnswer("")

        const newArray = cards.map(card => {
            return {
                ...card,
                isVisible: true,
                backgroundClr: randomColor()
            }
        })
        setCards(newArray)
        setMoveCount(0)
        setIsLimit(false)

    }

    const handleAnswer = (e) => {
        setAnswer(e.target.value)
        setRunUseEffect(true)
    }

    const handleHide = (index) => {

        const newArray = cards.map((card, i) => {
            if (i === index) {
                return {
                    ...card,
                    isVisible: false
                }
            }
            else {
                return card
            }
        })

        setCards(newArray)
        setMoveCount(prev => prev + 1)
    }

    const handleWinCheck = () => {
        if (answer == "") {
            console.log("Select your Answer!!!");
            return;
        }

        if (answer == selectedImg) {
            const newArray = cards.map(card => {
                return {
                    ...card,
                    isVisible: false
                }
            })
            setCards(newArray)
            console.log("Winner!!")
        }
        else {
            console.log("Good luck next time!!")
        }
    }

    
    const values = {
        cards,
        moveCount,
        isLimit,
        handleHide,
        random,

        selectedImg,
        images,
        answer,
        handleAnswer,

        handleReset,
    }

    return (
        <AppContext.Provider value={values}>{children}</AppContext.Provider>
    )
}

export default AppContext
export const useAppContext = () => useContext(AppContext)