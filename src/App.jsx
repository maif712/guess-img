
import CardList from "./components/CardList"
import MoveCount from "./components/MoveCount"

export default function App() {


    return (
        <div className="app wrapper">
            <h1 className="app__title">guess the picture by removing 3 panels.</h1>
            <MoveCount />
            <main>
                <figure className="main__figure">
                    <img src="./assets/images/1.jpg" alt="" />
                </figure>
                <CardList />
            </main>
        </div>
    )
}