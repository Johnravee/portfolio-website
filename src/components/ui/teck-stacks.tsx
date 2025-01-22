
import { AiFillExperiment } from "react-icons/ai";
import { Badge } from "@/components/ui/badge";
export default function TechStacks() {

    interface Stacks {
        title: string[]
    }

    const stacks : Stacks = 
        {
            title: ['Nodejs', 'React', 'Express.js', 'Next.js', 'Php', 'Laravel', 'MySQL', 'MongoDB', 'Tailwind', 'Bootstrap']
        }
       
    

  return (
    <div>
        <div className="flex flex-row items-center pl-5 pt-5 pb-3 gap-1">
            <AiFillExperiment  size={25} />
            <h1 className='font-semibold text-lg font-geist'>Tech Stacks</h1>
        </div>

        <div className="w-full flex justify-start items-start  pl-5 pt-5">
            <ul className="list-none flex-wrap flex justify-start items-start flex-row gap-1 ">
                {stacks.title.map((val, index) =>{
                    return(
                        <li key={index}><Badge variant={'default'} >{val}</Badge></li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}
