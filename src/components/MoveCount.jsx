import { useAppContext } from "../AppContext"


export default function MoveCount() {
    const {moveCount} = useAppContext()

    return (
        <p className="app__para">move count: {moveCount}</p>
    )
}