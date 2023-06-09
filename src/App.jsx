import {useEffect, useState} from "react";
import championsJson from './champions.json'
import Champions from './components/champions'
import Filters from './components/filters'
import Search from './components/search'

function App() {
    const [champions] = useState(Object.values(championsJson.champions))
    const [tags, setTags] = useState([])
    const [resources, setResources] = useState([])
    const [filters, setFilters] = useState([])
    const [selectedFilters, setSelectedFilters] = useState({})
    const [searchValue, setSearchValue] = useState('')
    const [page, setPage] = useState(1)
    const [perItem] = useState(12)

    const filteredChampions = getFilteredChampions()
    const listChampions = paginateChampions()

    useEffect(() => {
        setTags(getTags)
        setResources(getResources)
    }, [champions])

    useEffect(() => {
        setFilters([
            {caption: "tags", values: tags, type: "checkbox"},
            {caption: "partype", values: resources, type: "radio"},
        ])
    }, [tags, resources])

    function getFilteredChampions() {
        return champions.filter((champion) => {
            return Object.entries(selectedFilters).every(([filterKey, filterValues]) => {
                return filterValues.every((filterValue) => {
                    return champion[filterKey].includes(filterValue)
                })
            })
        }).filter((champion) => {
            if (searchValue.length > 0) {
                return champion.name.toLowerCase().includes(searchValue.toLowerCase())
            }
            return champion
        })
    }

    function paginateChampions() {
        return getFilteredChampions().splice(0, page * perItem)
    }

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
            <Search setSearchValue={setSearchValue}/>
            <div className="flex flex-wrap lg:flex-nowrap px-2 lg:px-20 mt-4 mx-0 md:mx-m6">
                <div className="w-full md:w-3/12 lg:w-4/12 px-6">
                    <Filters filters={filters} champions={champions} selectedFilters={selectedFilters}
                             setSelectedFilters={setSelectedFilters}/>
                </div>
                <div className="w-full md:w-9/12 lg:w-8/12 px-6">
                    <Champions champions={listChampions}/>
                    {(listChampions.length === 0) && (
                        <div className="p-4 bg-yellow-400 text-gray-700">Champion not found</div>)}
                    {(filteredChampions.length !== 0 && filteredChampions.length !== listChampions.length) && (
                        <button
                            onClick={() => setPage(page + 1)}
                            className="px-4 py-2 bg-gray-200 text-black table mx-auto my-4"
                        >Load More</button>
                    )}
                </div>
            </div>
        </>
    )
}

export default App
