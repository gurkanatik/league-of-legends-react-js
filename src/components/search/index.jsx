import {useEffect, useState} from "react";

export default function ({setSearchValue}) {
    return (
        <div className="min-h-[30vh] search-area flex items-center justify-center">
            <div className="z-10 w-1/3">
                <h1 className="text-center text-white mb-4 text-3xl">League of Legends Champions</h1>
                <input type="text"
                       className="bg-white border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 z-10"
                       placeholder="Search champion"
                       onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
        </div>
    )
}