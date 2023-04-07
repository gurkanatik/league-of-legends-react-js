import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import Champion from "./views/champions/index.jsx";

const routes = createBrowserRouter([
    {
        "path": "/",
        "element": <App />
    },
    {
        "path": "/champion/:id",
        "element": <Champion />
    }

])
export default routes