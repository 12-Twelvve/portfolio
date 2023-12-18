import Link from 'next/link';

const Navbar = () => {

    return (
        <div className=" mt-12 px-12 flex justify-between  w-[54%] h-10 text-xs font-jua text-center sm:text-sm md:text-md lg:text-lg xl:text-xl text-white">
            <Link href="/" className="w-[20%] h-10 flex item-center text-black no-underline">
                <div className="flex rounded-mini bg-white w-[100%] h-10  items-center">
                    <div className="inline-block w-[100%]">{`</$> Twelvve`}</div>
                </div>
            </Link>
            <Link href="/about" className=" w-[20%] h-10 flex item-center text-white no-underline">
                <div className="flex rounded-mini bg-black w-[100%] h-10  items-center" >
                    <div className="inline-block w-[100%]">{`<@> About Me`}</div>
                </div>
            </Link>
            <Link href="/contacts" className=" w-[20%] h-10 flex item-center text-white no-underline">
                <div className="flex rounded-mini bg-black w-[100%] h-10  items-center" >
                    <div className="inline-block w-[100%]">{`<&> Contacts`}</div>
                </div>
            </Link>
            <Link href="/archive" className=" w-[20%] h-10 flex item-center text-white no-underline">
                <div className="flex rounded-mini bg-black w-[100%] h-10  items-center" >
                    <div className="inline-block w-[100%]">{`<#> Archive`}</div>
                </div>
            </Link>
        </div>
    );
  };
  
  export default Navbar;
  