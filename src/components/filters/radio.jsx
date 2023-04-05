export default function ({value, caption, selectedFilters, setSelectedFilters}) {
    function changeHandle(status) {
        if (status === true) {
            selectedFilters[caption] = [value];
        } else {
            selectedFilters[caption] = selectedFilters[caption].filter((filterValue) => filterValue !== value )
        }

        if (selectedFilters[caption].length === 0) {
            delete selectedFilters[caption]
        }

        setSelectedFilters({
            ...selectedFilters
        });
    }

    return (
        <div>
            <label className="flex">
                <input name={caption} type="radio" onChange={(e) => changeHandle(e.target.checked)}/>
                <span className="block ms-2 select-none">{value}</span>
            </label>
        </div>
    )
}