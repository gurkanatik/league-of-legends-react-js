import {Link} from "react-router-dom";

export default function ({champion}) {
    return (
        <Link to={'champion/' + champion.id.toLowerCase()} className="block w-1/2 md:w-4/12 lg:w-3/12 mb-2 lg:mb-4 px-2">
            <img src={"http://ddragon.leagueoflegends.com/cdn/13.6.1/img/champion/" + champion.image.full}
                 className="w-full mb-2" alt={champion.name}/>
            <span className="text-xs uppercase font-bold text-gray-400 block w-full">{champion.tags.join(', ')}</span>
            <span className="uppercase text-sm font-bold text-gray-500 block w-full truncate">{champion.title}</span>
            <span className="text-lg uppercase font-bold text-black">{champion.name}</span>
        </Link>
    )
}