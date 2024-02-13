
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./style.css"
import { AppContextProvider } from "./AppContext.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <AppContextProvider>
        <App />
    </AppContextProvider>
)