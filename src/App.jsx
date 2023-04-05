import {useEffect, useState} from "react";
import championsJson from './champions.json'
import Champions from './components/champions'
import Filters from './components/filters'

function App() {
    const [champions] = useState(Object.values(championsJson.champions))
    const [filteredChampions, setFilteredChampions] = useState([])
    const [tags, setTags] = useState([])
    const [resources, setResources] = useState([])
    const [filters, setFilters] = useState([])

    useEffect(() => {
        setFilteredChampions(champions.splice(0, 12))
        setTags(getTags)
        setResources(getResources)
    }, [champions])

    useEffect(() => {
        setFilters([
            {caption: "tags", values: tags, type: "checkbox"},
            {caption: "partype", values: resources, type: "radio"},
        ])
    }, [tags, resources])

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
            (!resources.includes(champion.partype) && champion.partype !== '') && resources.push(champion.partype)
        )
        return resources
    }

    return (
        <>
            <div className="flex flex-wrap lg:flex-nowrap px-2 lg:px-20 mt-4 mx-0 md:mx-m6">
                <div className="w-full md:w-3/12 lg:w-4/12 px-6">
                    <Filters filters={filters} champions={champions} setFilteredChampions={setFilteredChampions} />
                </div>
                <div className="w-full md:w-9/12 lg:w-8/12 px-6">
                    <Champions champions={filteredChampions}/>
                    {filteredChampions.length === 0 && (<div className="p-4 bg-yellow-400 text-gray-700">Champion not found</div>)}
                </div>
            </div>
        </>
    )
}

export default App
