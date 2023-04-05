import Champion from "./champion";

export default function ({champions}) {
    return (
        <>
            <span className="text-2xl font-bold mb-2 block">Champions</span>
            <div className="h-[1px] bg-gray-500 mb-4"></div>
            <div className="flex flex-wrap mx-m2">
                {champions.map((champion, key) => {
                    return <Champion key={key} champion={champion}/>
                })}
            </div>
        </>
    )
}