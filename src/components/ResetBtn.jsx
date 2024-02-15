import { useAppContext } from "../AppContext"


export default function RestBtn() {

    const {handleReset} = useAppContext()

    return (
        <button className="app__reset-btn" onClick={handleReset}>Reset</button>
    )
}