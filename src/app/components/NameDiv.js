import Image from 'next/image'
import joyImage from '../data/images/joyboy.png'


export default function NameDiv() {
  return (
          <div className="flex flex-col align-center justify-between items-center bg-neutral-950
                            pl-1 pr-1 pt-1 pb-1 gap-5 rounded-3xl no-underline shadow-xl shadow-gray-100 md:flex-row max-md:max-w-full md:min-h-[30vh] md:max-h-[30vh] ">
              <div class="flex flex-col justify-between p-4  ">
                  <div className="text-white font-bold ">
                    Data Enthusiast
                  </div>
                  <div className="bg-white shrink-0 h-0.5 mt-5" />
                  <div className="text-white lg:text-50xl  font-bold mt-3">
                    KUBER BUDHATHOKI
                  </div>
              </div>
              <div className="md:w-[40%] mx-3">
              <Image
                  src={joyImage}
                  className="object-cover h-auto max-w-full rounded-3xl  "
                  alt="Picture of the joyboy from One Piece"
                />
              </div>
            </div>
)  
  }


  