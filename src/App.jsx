import {useState} from "react";
import championsJson from './champions.json'

function App() {
    const [champions] = useState(Object.values(championsJson.champions))
    return (
        <>
        </>
    )
}

export default App
