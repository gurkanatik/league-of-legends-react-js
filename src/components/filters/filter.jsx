import Checkbox from "./checkbox";
import Radio from "./radio";

export default function ({filter, selectedFilters, setSelectedFilters}) {
    return (
        <div className="mb-4">
            <span className="text-sm font-bold mb-4 block uppercase">{filter.caption}</span>
            {filter.values.map((value, index) =>
                filter.type === 'checkbox'
                    ? (<Checkbox key={index} value={value} caption={filter.caption} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>)
                    : (<Radio key={index} value={value} caption={filter.caption} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>)
            )}

        </div>
    )
}