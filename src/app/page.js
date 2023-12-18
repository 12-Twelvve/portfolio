import Image from 'next/image'
import joyImage from './data/images/joyboy.png'
import boaImage from './data/images/sep2.jpg'
import RadarChart from './components/RadarChart'

async function getQuote(){
  // const res = await fetch("https://api.quotable.io/random", {cache:"no-store"}); //each reload
  const res = await fetch("https://api.quotable.io/random", {next:{revalidate:86400}}); //after one day
  const data = await res.json();
  return data;
}

export default async function Home() {
  const quoteoftheday = await getQuote()

  return (
      <div className="px-12 py-1  h-[85vh]">
      <div className="gap-5 flex max-md:flex-col  max-md:gap-0">
        {/* left side name panel bar */}
        <div className="w-[60%] max-md:w-full max-md:mt-10  mt-5  min-h-[80vh] max-h-[80vh]"> 
          <div className="flex flex-col max-md:max-w-full">
            {/* Name Div top */}
            <div className="bg-neutral-950 min-h-[25vh] max-h-[25vh] pl-5 pr-8 pt-6 pb-6 rounded-3xl max-md:max-w-full max-md:px-5">
              <div className="gap-5 flex max-md:flex-col max-md:gap-0">
                
                <div className="flex flex-col items-stretch w-[70%]">
                  <div className="flex flex-col my-3 ml-5">
                    <div className="text-white text-lg font-bold">
                      Data Enthusiast
                    </div>
                    <div className="bg-white shrink-0 h-0.5 mt-5" />
                    <div className="text-white text-70xl font-bold leading-[75px] mt-3">
                      KUBER BUDHATHOKI
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
                  <Image
                    src={joyImage}
                    className="w-full h-full object-cover rounded-3xl"
                    alt="Picture of the joyboy from One Piece"
                  />
                </div>
              </div>
            </div>
            {/* bottom panel */}
            <div className="mt-4 w-[100%] min-h-[45vh] max-h-[45vh]">
              <div className=" flex justify-between max-md:flex-col  max-md:gap-0">
                {/* left bottom panel */}
                <div className="bg-neutral-950 w-[45%] min-h-[45vh] max-h-[45vh] rounded-3xl">
                  <div className=" flex flex-col items-stretch mx-auto px-5 py-8 rounded-3xl max-md:mt-4">
                    
                    <div className="flex items-stretch justify-between gap-4 max-md:justify-center">
                      <div className="bg-neutral-700 flex flex-col items-center w-[87px] h-[87px] px-3 py-4 rounded-3xl">
                        <div className="text-white text-center text-50xl text-center font-bold">
                            4
                        </div>
                        <div className="text-center text-lg ">
                           Cities
                        </div>
                      </div>
                      <div className="bg-neutral-700 flex  flex-col items-center w-[87px] h-[87px] px-3 py-4 rounded-3xl">
                        <div className="text-white text-center text-50xl text-center font-bold">
                            21
                        </div>
                        <div className="text-center text-lg ">
                          Projects
                        </div>
                      </div>
                      <div className="bg-neutral-700 flex flex-col items-center w-[87px] h-[87px] px-3 py-4 rounded-3xl">
                        <div className="text-white text-center text-50xl text-center font-bold">
                            7X
                        </div>
                        <div className="text-center text-lg ">
                          Faster
                        </div>
                      </div>
                    </div>
                    <div className="bg-neutral-700 flex  h-[60px] flex-col justify-center mt-4 rounded-3xl" >
                      <div className="text-center text-lg font-bold">
                          jskdlskfksdf skdflkas  ad faks
                      </div>
                    </div>
                    <div className="bg-neutral-700 flex flex-col items-center mt-4 px-3 py-4 rounded-3xl">
                      <div className="text-white text-center text-50xl text-center font-bold">
                          100%
                      </div>
                      <div className="text-center text-lg ">
                          Success Rate
                      </div>
                    </div>

                  </div>
                </div>
                {/* bottom images icon box  */}
                <div className="bg-neutral-950 w-[52%]  min-h-[45vh] max-h-[45vh] rounded-3xl">
                  <div className="flex flex-col items-stretch mx-auto px-8 py-8 rounded-3xl max-md:mt-4">
                  {/* icons ...... */}
                  <div>floating Icons.....</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side kinng panel */}
        <div className="bg-neutral-950  w-[42%] ml-5 min-h-[75vh] max-h-[75vh] max-md:mt-10 mt-5 pt-6 rounded-3xl">
          <div className="flex mx-5 min-h-[85%] max-h-[80%]">
            <div className="flex flex-col item-center justify-center items-stretch w-[80%]">
              <RadarChart/>
            </div>
            <div className=' w-[20%]'>
            <Image
              src={boaImage}
              className="w-full h-full object-cover rounded-2xl"
              alt="Picture of the boa hancock from One Piece"
            />
            </div>
          </div>

          {/* quotes */}
          <div className="flex  flex-col justify-center  min-h-[15%] max-h-[15%]">
            <div className="text-center text-lg">
               {quoteoftheday.content}
            </div>
            <div className="text-center text-lg font-bold">
                {quoteoftheday.author}
            </div>
          </div>
        </div>
      </div>
      </div>
  ) 
}
