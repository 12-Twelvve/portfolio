import Image from 'next/image'
import boaImage from '@/data/images/sep2.jpg'
import RadarChart from './components/RadarChart'
import NameDiv from './components/NameDiv' 
import World from './components/World'
import LinkAllApp from './components/LinkAllApp'

async function getQuote(){
  // const res = await fetch("https://api.quotable.io/random", {cache:"no-store"}); //each reload
  const res = await fetch("https://api.quotable.io/random", {next:{revalidate:86400}}); //after one day
  const data = await res.json();
  return data;
}

export default async function Home() {
  const quoteoftheday = await getQuote()

  return (
      <div className="px-12 py-1  h-[80vh]">
      <div className="gap-5 flex max-md:flex-col  md:flex-row lg:flex-row xl:flex-row  max-md:gap-0">
        {/* left side name panel bar */}
        <div className="w-full md:w-3/5 max-md:w-full max-md:mt-10  mt-5  md:min-h-[80vh] md:max-h-[80vh]"> 
          <div className="flex flex-col max-md:max-w-full">
            {/* Name Div top */}
            <NameDiv/>

            {/* bottom panel */}
            <div className="flex flex-col md:flex-row mt-4 ">
              {/* left card */}
              <div className="w-full md:w-1/2 p-1" >
                <div className="h-[45vh]" >
                <div className=" flex flex-col items-stretch justify-center items-center bg-cover min-h-[45vh] max-h-[45vh] rounded-3xl" style={{  backgroundImage:'url(/images/asss.png)'}}>
                  <div className=" flex flex-col items-stretch justify-center items-center  px-5 py-2 rounded-3xl max-md:mt-4"> 
                    <div className="flex items-stretch justify-between gap-4">
                      <div className="bg-neutral-900 flex flex-col items-center w-[80px] h-[70px] px-3 py-1 rounded-3xl">
                        <div className="text-white text-center text-40xl text-center font-bold">
                            1996
                        </div>
                        <div className="text-center text-lg ">
                           Rank
                        </div>
                      </div>
                      <div className="bg-neutral-900 flex  flex-col items-center w-[80px] h-[70px] px-3 py-1 rounded-3xl">
                        <div className="text-white text-center text-40xl text-center font-bold">
                            21
                        </div>
                        <div className="text-center text-lg ">
                          Hunt
                        </div>
                      </div>
                      <div className="bg-neutral-900 flex flex-col items-center w-[80px] h-[70px] px-3 py-1 rounded-3xl">
                        <div className="text-white text-center text-40xl text-center font-bold">
                            69
                        </div>
                        <div className="text-center text-lg ">
                          Weapons
                        </div>
                      </div>
                    </div>

                    <div className="bg-neutral-900 flex  h-[60px] flex-col justify-center mt-4 rounded-3xl" >
                      <div className="text-center text-lg font-bold">
                          Built Like The God
                      </div>
                    </div>
                    <div className="bg-neutral-900 flex flex-col items-center mt-4 px-3 py-4 rounded-3xl">
                      <div className="text-white text-center text-50xl text-center font-bold">
                          $5,690,314,276
                      </div>
                      <div className="text-center text-lg ">
                          Dead or Alive
                      </div>
                    </div>

                  </div>
                </div>
                </div>
              </div>
              {/* icons card */}
              <div className="w-full md:w-1/2 p-1">
                <div className="h-[45vh]">
                  <div className="bg-neutral-950 min-h-[45vh] max-h-[45vh] rounded-3xl flex">
                    {/* <World /> */}
                    <LinkAllApp/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side kinng panel */}
        <div className="bg-cover w-full md:w-2/5 min-h-[75vh] max-h-[75vh] mt-5 pt-6 rounded-3xl"
              style={{  backgroundImage:'url(/images/asss.png)'}}
      
        >
          <div className="flex flex-col md:flex-row  mx-5 min-h-[85%] max-h-[80%] bg-neutral-950">
            <div className="flex flex-col item-center justify-center items-stretch md:w-[80%]">
              <RadarChart/>
            </div>
            <div className='w-full md:w-[20%] mt-4 md:mt-0 opacity-50'>
            <Image
              src={boaImage}
              className="w-full h-full object-cover rounded-2xl"
              alt="Picture of the boa hancock from One Piece"
            />
            </div>
          </div>

          {/* quotes */}
          <div className="flex  flex-col justify-center  min-h-[15%] max-h-[15%]">
            <div className="text-center text-sm ">
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
