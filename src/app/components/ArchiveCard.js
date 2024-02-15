import Link from 'next/link';

export default function ArchiveCard({archive}){
    
    return (
        <Link href={`/archive/${archive.id}`}>
        <div class="group relative cursor-pointer overflow-hidden rounded-md">
        <img src={archive.imageurl} class="object-cover w-full h-full" />
        <div class="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div class="absolute pointer-events-none inset-1 bg-black opacity-40"></div>
            <div class="absolute inset-0 flex flex-col pb-8">
                <div class="w-full relative z-10 mt-auto text-center break-words text-lg font-semibold text-white">
                 {archive.projdesc}
                </div>
                <div class="bg-neutral-900 w-full relative z-10 mt-auto text-center break-words text-25xl font-bold text-white">
                {archive.project_title}
                </div>
            </div>
        </div>
        </div>
        </Link>

    )
}