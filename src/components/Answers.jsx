import { useAppContext } from "../AppContext"


export default function Answers() {

    const { images, answer, handleAnswer} = useAppContext()

    return (
        <div className="app__answer-wrapper">
            <select value={answer} onChange={handleAnswer} className="app__select">
                <option value={""}>--Select your Answer--</option>
                {images.map(answer => {
                    return (
                        <option value={answer} key={answer}>
                            {answer}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}