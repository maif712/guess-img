import { useAppContext } from "../AppContext"


export default function RestBtn() {

    const { handleReset } = useAppContext()

    return (
        <button onClick={handleReset} className="app__reset-btn">
            Reset
        </button>
    )
}