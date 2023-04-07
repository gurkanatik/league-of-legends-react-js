import Filter from "./filter";
export default function ({filters, selectedFilters, setSelectedFilters}) {
    return (
        <>
            <span className="text-2xl font-bold mb-2 block">Filters</span>
            <div className="h-[1px] bg-gray-500 mb-4"></div>
            {filters.map((filter, index) =>
                <Filter key={index} filter={filter} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />)}
        </>
    )
}