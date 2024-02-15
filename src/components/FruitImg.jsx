import { useAppContext } from "../AppContext"


export default function FruitImg() {

    const {selectedImg} = useAppContext()
    
    return (
        <figure className="main__figure">
            <img src={`./assets/images/${selectedImg}.jpg`} alt={selectedImg} />
        </figure>
    )
}