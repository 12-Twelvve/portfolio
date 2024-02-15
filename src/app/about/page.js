import Image from 'next/image'
import joyImage from '../data/images/joyboy.png'
import NameDiv from '../components/NameDiv'


export default function AboutMe() {
  return (
    <div className="px-12 py-1  h-[85vh]">
    <div className ='flex flex-col'>
    <div className="gap-5 flex max-md:flex-col  md:flex-row lg:flex-row xl:flex-row  max-md:gap-0">
      {/* left side name panel bar */}
      <div className="w-full md:w-3/5 max-md:w-full max-md:mt-10  mt-5  md:min-h-[55vh] md:max-h-[55vh]"> 
        <div className="flex flex-col max-md:max-w-full">
          {/* Name Div top */}
          <NameDiv/>
          
          {/* middle panel */}
          <div className="bg-neutral-950 flex flex-col justify-between rounded-3xl md:flex-row mt-5 pl-7 pr-7 pt-1 pb-1 gap-5  min-h-[23vh] max-h-[23vh] max-md:min-h-[35vh] max-md:max-h-[35vh]">
            <div className={`text-white font-bold h-0.5 mt-5 sm:text-sm lg:text-lg `}>
            A Software Engineer with expertise in Data, Machine Learning, Deep Learning, Natural Language Processing. A seasoned Full Stack Developer, proficiency in designing, building, and testing. A dedicated advocate for leveraging data to drive informed decision-making, Committed to exploring cutting-edge algorithms and contributing to meaningful impact as a lifelong learner and collaborative team player and a leader.
            </div>
          </div>
        </div>
      </div>
      {/* right top side panel */}
      <div className="bg-neutral-950 w-full md:w-2/5 min-h-[55vh] max-h-[55vh] mt-5 pt-6 rounded-3xl">
        <div className=' pl-5 pr-5'>
          <div className={`text-white font-bold h-0.5  sm:text-sm lg:text-25xl`}>
            I am Harder than My Hard Skills
          </div>
          <div className="mt-10">
          Python, R, Javascript, git, AWS, Google Cloud, Hadoop, MySQL, Postgres, mongoDB, Linux, WandB, Django, Nextjs, Reactjs,Tableau, Colab, Jupyter Notebook, Google Sheet, Excel, Octave, Rstudio, NumPy, Pandas, Scikit-Learn, NLTK, TensorFlow, PyTorch
          </div>
        </div>
        <div className=" pl-5 pr-5 mt-10 ">
          <div className={`text-white font-bold h-0.5 mt-5 sm:text-sm lg:text-25xl `}>
            Softer than My Soft Skills
          </div>
          <div className="mt-10">
            Communication, Team Player, Critical Thinking, Problem Solving, Presentation, Energetic, Loyal
          </div>
        </div>
        <div className=" pl-5 pr-5 mt-10 ">
        <div className={`text-white font-bold h-0.5 mt-5 sm:text-sm lg:text-25xl `}>
        My dream is to make everyone's dreams come true.
         </div>
         <div className="pt-10 mt-5 text-black">
            King of the World
          </div>
         </div>
      </div>
    </div>
    {/* bottom panel */}
    <div className="mt-5 gap-5 flex  md:min-h-[20vh] md:max-h-[20vh] max-md:min-h-[20vh] max-md:max-h-[20vh]  max-md:gap-1 max-md:flex-col  md:flex-row lg:flex-row xl:flex-row">
      <div className="bg-neutral-950 rounded-3xl md:w-[350px] max-md:min-h-[10vh] flex justify-center items-center">
        <div className="text-white lg:text-50xl  font-bold">
          An Artist
        </div>
      </div>
      <div className="bg-neutral-950 rounded-3xl w-full max-md:min-h-[10vh] flex justify-center items-center">
        <div className="text-white lg:text-50xl  font-bold">
          B. S. Software Engineer, 2023
        </div>
      </div>
    </div>
    </div> 
    </div>
)  
  }


  