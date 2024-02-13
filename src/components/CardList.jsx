import Card from "./Card"
import { useAppContext } from "../AppContext"

export default function CardList() {


    const {cards} = useAppContext()

    return (
        <div className="main__grid">
            {cards.map((card, index) => {
                return (
                    <Card key={index} card={card} index={index}/>
                )
            })}
        </div>
    )
}