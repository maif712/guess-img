
import Answers from "./components/Answers"
import CardList from "./components/CardList"
import FruitImg from "./components/FruitImg"
import MoveCount from "./components/MoveCount"
import RestBtn from "./components/ResetBtn"

export default function App() {


    return (
        <div className="app wrapper">
            <h1 className="app__title">guess the picture by removing 3 panels.</h1>
            <MoveCount />
            <div className="flex-wrapper">
                <Answers />
                <RestBtn />
            </div>
            <main>
                <FruitImg />
                <CardList />
            </main>
        </div>
    )
}