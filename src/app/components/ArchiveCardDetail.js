export default function ArchiveCardDetail({card}) {  
    return (
      <div className="bg-bggrayarc py-1 mt-5 max-md:mt-10 h-[80vh] w-[90%] m-auto custom-scrollbar">
          <div className="px-10 py-1">
            <div className="gap-5 flex max-md:flex-col  md:flex-row lg:flex-row xl:flex-row  max-md:gap-0">
              {/* left side name panel bar */}
              <div className="w-full md:w-3/5 max-md:w-full max-md:mt-10  mt-5"> 
                <div className="flex flex-col max-md:max-w-full">
                  {/* Title left top */}
                  <div className="flex flex-col align-center justify-between items-center bg-neutral-950
                                    pl-1 pr-1 pt-1 pb-1 gap-5 rounded-3xl no-underline shadow-xl shadow-gray-100 md:flex-row max-md:max-w-full md:min-h-[20vh] md:max-h-[20vh] ">
                    <div className="px-5 text-white lg:text-50xl  font-bold mt-3">
                      {card?card.name:"Title"}
                    </div>
                  </div>
                  {/* description left bottom panel */}
                  <div className="bg-neutral-950 shadow-xl shadow-gray-100 flex flex-col rounded-3xl md:flex-row mt-5 pl-7 pr-7 pt-1 pb-1 gap-5  min-h-[45vh] max-h-[45vh] max-md:min-h-[50vh] max-md:max-h-[50vh]">
                   <div className=" py-2 py-5 ">
                    <div className="text-white font-bold ">
                      {card?card.description:"NULL"}
                    </div>
                   </div> 
                  </div>
                </div>
              </div>
              {/* right side panel */}
              <div className="bg-neutral-950 shadow-xl shadow-gray-100 min-h-[66vh] max-h-[66vh] max-sm:h-[60vh] w-full md:w-2/5 mt-6 pt-6 rounded-3xl">
                <div className="md:w-[40%] mx-3 mx-auto ">
                <img src={card?.image_url} className="object-contain w-full h-[40vh] shadow-custom" />
                </div>
                <div className="w-full text-center sm:p-8">
                  <a href={card?.html_url} className="no-underline ">
                    <p className="text-base text-white sm:text-lg ">Github </p>
                  </a>
                  {/* {card?.language.map(lang=>(
                    ))} */}
                    <p className="text-base text-white sm:text-lg ">{card?.language}</p>
                </div>
              </div>
            </div> 
            </div>
          </div>
    )
  }