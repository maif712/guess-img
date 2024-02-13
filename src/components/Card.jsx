import { useAppContext } from "../AppContext";


export default function Card({card, index}) {

    

    const {handleHide, isLimit} = useAppContext()

    return (
        <div style={{backgroundColor: card.backgroundClr}}  onClick={() => handleHide(index)} className={`card ${!card.isVisible ? "hide" : ""} ${isLimit ? "disable": ""}`}>{index + 1}</div>
    )
}