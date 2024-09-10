export default function ArchiveCardDetail({card}) {  
    return (
      <div className="bg-bggrayarc py-1 mt-5 max-md:mt-10 h-[80vh] w-[90%] m-auto custom-scrollbar">
          <div className="px-10 py-1">
            <div className="gap-5 flex max-md:flex-col  md:flex-row lg:flex-row xl:flex-row  max-md:gap-0">
              {/* left side name panel bar */}
              <div className="w-full md:w-3/5 max-md:w-full max-md:mt-10  mt-5"> 
                <div className="flex flex-col max-md:max-w-full">
                  {/* Title left top */}
                  <div className="flex flex-col align-center justify-between items-center bg-cover
                                    pl-1 pr-1 pt-1 pb-1 gap-5 rounded-3xl no-underline shadow-xl shadow-gray-100 md:flex-row max-md:max-w-full md:min-h-[20vh] md:max-h-[20vh] "
                        style={{  backgroundImage: 'url(/images/asss.png)'}}            
                       >
                    <div className="px-5 text-white lg:text-50xl truncate font-bold mt-3">
                      {card?card.name:"Title"}
                    </div>
                  </div>
                  {/* description left bottom panel */}
                  <div className="bg-cover shadow-xl shadow-gray-100 flex flex-col rounded-3xl md:flex-row mt-5 pl-7 pr-7 pt-1 pb-1 gap-5  min-h-[45vh] max-h-[45vh] max-md:min-h-[50vh] max-md:max-h-[50vh]"
                        style={{  backgroundImage: 'url(/images/asss.png)'}}
                    >
                   <div className=" py-2 py-5 ">
                    <div className="text-white font-bold ">
                      {card?card.description?card.description:"No Description has been added ...":null}
                    </div>
                   </div> 
                  </div>
                </div>
              </div>  
              {/* right side panel */}
              <div className="bg-cover flex items-center justify-center shadow-xl opacity-50 shadow-gray-100 min-h-[66vh] max-h-[66vh] max-sm:h-[60vh] w-full md:w-2/5 mt-6 pt-6 rounded-3xl"
                    style={{  backgroundImage: `url(${card?.image_url})`}}
              >
                {/* <div className="md:w-[40%] mx-3 mx-auto ">
                <img src={card?.image_url} className="object-contain w-full h-[40vh] shadow-custom" />
                </div> */}
                <div className="w-full text-center sm:p-8">
                <a href={card?.html_url} target="_blank"   className="no-underline flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white mr-2" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M12 0C5.372 0 0 5.372 0 12c0 5.518 3.576 10.125 8.385 11.764.614.113.844-.267.844-.594v-2.048c-3.416.742-4.135-1.641-4.135-1.641-.557-1.415-1.358-1.792-1.358-1.792-1.113-.764.085-.749.085-.749 1.233.086 1.886 1.266 1.886 1.266 1.092 1.875 2.861 1.334 3.56 1.022.111-.791.428-1.333.779-1.64-2.665-.303-5.467-1.332-5.467-5.928 0-1.31.469-2.382 1.238-3.223-.124-.303-.537-1.523.117-3.176 0 0 1.009-.322 3.309 1.22a11.53 11.53 0 0 1 3.016-.407c1.024.005 2.07.139 3.016.407 2.301-1.542 3.308-1.22 3.308-1.22.657 1.653.242 2.873.118 3.176.769.841 1.238 1.912 1.238 3.223 0 4.607-2.805 5.623-5.475 5.918.447.387.849 1.16.849 2.339v3.467c0 .328.23.707.846.594C20.423 22.126 24 17.518 24 12 24 5.372 18.628 0 12 0z"/>
                    </svg>
                    <p className="text-base text-white sm:text-lg">Github</p>
                  </a>
                  {/* <a href={card?.html_url} className="no-underline ">
                    <p className="text-base text-white sm:text-lg ">Github </p>
                  </a> */}
                  {/* {card?.languag  e.map(lang=>(
                    ))} */}
                    <p className="text-base text-white sm:text-lg ">{card?.language}</p>
                </div>
              </div>
            </div> 
            </div>
          </div>
    )
  }