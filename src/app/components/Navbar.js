'use client'    
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const Navbar = () => {
    const pathname = usePathname()
    return (
        <>
        <div className=" mt-12 px-12 flex justify-between md:w-[55%] h-10 text-xs font-jua text-center sm:text-sm md:text-md lg:text-lg xl:text-xl text-white">
            <Link href="/" className="w-[20%] h-10 flex item-center text-white no-underline">
                <div className={`flex rounded-mini ${pathname === '/' ? 'bg-white text-black' : 'bg-cover'} w-[100%] h-10  items-center`}
                style={{  backgroundImage:pathname === '/' ? 'none' : 'url(/images/asss.png)'}}
                >
                    <div className="inline-block w-[100%]">{`</$> Root`}</div>
                </div>  
            </Link>
            <Link href="/about" className=" w-[20%] h-10 flex item-center text-white no-underline">
                <div className={`flex rounded-mini ${pathname === '/about' ? 'bg-white text-black' : 'bg-cover'} w-[100%] h-10  items-center`} 
                style={{  backgroundImage:pathname === '/about' ? 'none' : 'url(/images/asss.png)'}}
                >
                    <div className="inline-block w-[100%]">{`<@> About Me`}</div>
                </div>
            </Link>
            <Link href="/contacts" className=" w-[20%] h-10 flex item-center text-white no-underline">
                <div className={`flex rounded-mini ${pathname === '/contacts' ? 'bg-white text-black' : 'bg-cover'} w-[100%] h-10  items-center`} 
                style={{  backgroundImage:pathname === '/contacts' ? 'none' : 'url(/images/asss.png)'}}
                >
                    <div className="inline-block w-[100%]">{`<&> Contacts`}</div>
                </div>
            </Link>
            <Link href="/archive" className={` w-[20%] h-10 flex item-center text-white no-underline`}>
                <div  className={`flex rounded-mini ${pathname === '/archive' ? 'bg-white text-black' : 'bg-cover'} w-[100%] h-10  items-center`} 
                style={{  backgroundImage:pathname === '/archive' ? 'none' : 'url(/images/asss.png)'}}
                >
                    <div className="inline-block w-[100%]">{`<#> Archive`}</div>
                </div>
            </Link>
            <Link href="/archive" className={`absolute w-[10%] max-md:w-[15%] h-10 right-[25%] max-md:right-[12%] max-md:top-[11%]  item-center text-white no-underline`}>
                    <div  className={`flex rounded-mini ${pathname.startsWith('/archive/') ? 'bg-white text-black' : 'hidden'} w-[100%] h-10  items-center`} >
                        <div className=" w-[100%]">{`<\\> Back`}</div>
                    </div>
            </Link>
            
        </div>
        </>

    );
  };
  
  export default Navbar;
  