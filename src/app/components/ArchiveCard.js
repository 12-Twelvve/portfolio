'use_client'

import Link from 'next/link';
import { useContext } from 'react';
import { StoreContext } from '../context';


export default function ArchiveCard({archive}){
    const { setSelectedArchive } = useContext(StoreContext); // Access context to set selected archive
    // Handle click to set the selected archive
    const handleClick = () => {
        setSelectedArchive(archive);
    };
        
    return (
        <div onClick={handleClick}>
        <Link href={`/archive/${archive.id}`} >
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
        <img src={archive.image_url} className="object-cover w-full h-full opacity-50" />
        <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="absolute pointer-events-none inset-1 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex flex-col pb-8">
                <div className="w-full relative z-10 mt-auto text-center break-words text-lg font-semibold text-white">
                 {archive.description}
                </div>
                <div className="bg-neutral-900 w-full relative z-10 mt-auto text-center break-words text-25xl font-bold text-white">
                {archive.name}
                </div>
            </div>
        </div>
        </div>
        </Link>
        </div>
    )
}