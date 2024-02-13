
import { useAppContext } from "./AppContext"
import CardList from "./components/CardList"

export default function App() {

    const {moveCount} = useAppContext()

    return (
        <div className="app">
            <h1 className="app__title">guess the picture by removing 3 panels.</h1>
            <p className="app__para">move count: {moveCount}</p>
            <main>
                <figure className="main__figure">
                    <img src="./assets/images/1.jpg" alt="" />
                </figure>
                <CardList />
            </main>
        </div>
    )
}