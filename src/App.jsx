import {useEffect, useState} from "react";
import championsJson from './champions.json'
import Champion from './components/champions/champion'

function App() {
    const [champions] = useState(Object.values(championsJson.champions))
    const [filteredChampions, setFilteredChampions] = useState([])
    const [tags, setTags] = useState([])
    const [resources, setResources] = useState([])

    useEffect(() => {
        setFilteredChampions(champions.splice(0, 12))
        setTags(getTags)
        setResources(getResources)
    }, [champions])

    function getTags() {
        let tags = []
        champions.map((champion) =>
            champion.tags.map((tag) => !tags.includes(tag) && tags.push(tag))
        )
        return tags
    }

    function getResources() {
        let resources = []
        champions.map((champion) =>
            !resources.includes(champion.partype) && resources.push(champion.partype)
        )
        return resources
    }

    return (
        <>
            <div className="flex flex-wrap lg:flex-nowrap px-2 lg:px-20 mt-4 mx-0 md:mx-m6">
                <div className="w-full md:w-3/12 lg:w-4/12 px-6">

                </div>
                <div className="w-full md:w-9/12 lg:w-8/12 px-6">
                    <div className="flex flex-wrap mx-m2">
                        {filteredChampions.map((champion, key) => {
                            return <Champion key={key} champion={champion}/>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
