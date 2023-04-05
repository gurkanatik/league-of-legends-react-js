import {useEffect, useState} from "react";
import Filter from "./filter";

export default function ({filters, champions, setFilteredChampions}) {
    const [selectedFilters, setSelectedFilters] = useState({})

    useEffect(() => {
        filterChampions()
    }, [selectedFilters])

    function filterChampions() {
        champions = champions.filter((champion) => {
            return Object.entries(selectedFilters).every(([filterKey, filterValues]) => {
                return filterValues.every((filterValue) => {
                    return champion[filterKey].includes(filterValue)
                })
            })
        });

        setFilteredChampions(champions)
    }

    return (
        <>
            <span className="text-2xl font-bold mb-2 block">Filters</span>
            <div className="h-[1px] bg-gray-500 mb-4"></div>
            {filters.map((filter, index) =>
                <Filter key={index} filter={filter} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />)}
        </>
    )
}