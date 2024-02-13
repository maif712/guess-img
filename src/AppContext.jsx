import { createContext, useContext, useEffect, useState } from "react";


const AppContext = createContext(null)

export function AppContextProvider({children}) {

    const [cards, setCards] = useState(new Array(9).fill({
        isVisible: true,
        backgroundClr: ""
    }))
    const [moveCount, setMoveCount] = useState(0)
    const [isLimit, setIsLimit] = useState(false)

    useEffect(() => {
        const newArray = cards.map(card => {
            return {
                ...card,
                backgroundClr: randomColor()
            }
        })
        setCards(newArray)
    }, [])

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

    const random = () => {
        const rndNumber = Math.floor(Math.random() * 255)
        return rndNumber
    }

    const randomColor = () => {
        return `rgb(${random()}, ${random()}, ${random()})`
    }


    useEffect(() => {
        if(moveCount == 3)
        {
            setIsLimit(true)
        }
    }, [moveCount])

    const values = {
        cards,
        moveCount, 
        isLimit,
        handleHide, 
        random
    }
    
    return (
        <AppContext.Provider value={values}>{children}</AppContext.Provider>
    )
}

export default AppContext
export const useAppContext = () => useContext(AppContext)