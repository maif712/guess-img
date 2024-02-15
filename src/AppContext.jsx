import { createContext, useContext, useEffect, useState } from "react";


const AppContext = createContext(null)

export function AppContextProvider({children}) {

    const [cards, setCards] = useState(new Array(9).fill({
        isVisible: true,
        backgroundClr: ""
    }))
    const [moveCount, setMoveCount] = useState(0)
    const [isLimit, setIsLimit] = useState(false)

    const [images, setImages] = useState([
        "apple", "banana", "pumbkin"
    ])
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
        if(runUseEffect) {
            handleGame()
            setRunUseEffect(false)
        }
    }, [runUseEffect])

    useEffect(() => {
        if(moveCount == 3)
        {
            setIsLimit(true)
        }
    }, [moveCount])

    const handleRandomImg = () => {
        const rndNumber = Math.floor(Math.random() * images.length)
        setSelectedImg(images[rndNumber])
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
            if(i === index)
            {
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

    const handleGame = () => {
        if(answer == "") {
            console.log("Select your Answer!!!");
            return;
        }

        if(answer == selectedImg) {
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

    const random = () => {
        const rndNumber = Math.floor(Math.random() * 255)
        return rndNumber
    }

    const randomColor = () => {
        return `rgb(${random()}, ${random()}, ${random()})`
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

        handleGame,
        handleReset,
        setRunUseEffect,
    }
    
    return (
        <AppContext.Provider value={values}>{children}</AppContext.Provider>
    )
}

export default AppContext
export const useAppContext = () => useContext(AppContext)